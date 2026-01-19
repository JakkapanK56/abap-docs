---
title: "ABAPDO_VARYING"
description: |
  ABAPDO_VARYING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDO_VARYING.htm"
abapFile: "ABAPDO_VARYING.html"
keywords: ["loop", "do", "while", "if", "case", "catch", "class", "data", "types", "ABAPDO", "VARYING"]
---

[Short Reference](ABAPDO_SHORTREF.html)

`DO ... VARYING dobj FROM dobj1 NEXT dobj2 [RANGE range]\        [VARYING ...].    [statement_block]\  ENDDO.`

The addition `VARYING` assigns a new value to a variable `dobj` for each pass of a [`DO`](ABAPDO.html) loop. It can be used more than once in a `DO` statement.

`dobj1` and `dobj2` are the first two data objects in a sequence of data objects that are the same distance apart in the memory. The data types of `dobj`, `dobj1`, and `dobj2` must be flat and compatible with each other. `dobj1` and `dobj2` must be parts of a flat data object. These parts are either structure components of the same structure or substrings of the same data object specified using offsets/lengths.

In the first loop pass, the content of the data object `dobj1` is assigned to `dobj`. In the second loop pass, the content of the data object `dobj2` is assigned. In the subsequent loop passes, `dobj` is assigned the content of the data object that is the same distance in the memory from the previously assigned data object, as `dobj2` is from `dobj1`. There is no type conversion.

If the [processing block](ABENPROCESSING_BLOCK_GLOSRY.html) is exited correctly using `ENDDO`, [`CHECK`](ABAPCHECK_LOOP.html), or [`EXIT`](ABAPEXIT_LOOP.html), the content of the variable `dobj` at the end of the loop pass is assigned to the previously assigned data object `dobj1` or `dobj2` without conversion. If it is exited using another statement, such as [`RETURN`](ABAPRETURN.html) or [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html), no assignment takes place.

The addition `RANGE` defines the memory area that can be processed using the addition `VARYING`. After `RANGE`, an elementary data object `range` of type `c`, `n`, or `x`, or a structure can be specified. The memory area of `range` must include the memory range of `dobj1` and `dobj2`. In [deep](ABENDEEP_GLOSRY.html) structures, the deep components are excluded from the allowed area. The `DO` loop must be ended before forbidden memory areas are accessed, that is, areas outside of `range` or its deep components. If not, an uncatchable exception is raised.

The addition `RANGE` can be omitted only if it can be known statically that `dobj1` and `dobj2` are components from the same structure. The allowed memory area is then determined from the smallest substructure that contains `dobj1` and `dobj2`.

In the first `DO` loop, subareas of the data object `text` are processed using offset/length access. The addition `RANGE` must be specified here. In the second `DO` loop, the program accesses the components of the data object `text`. In this case, it is not necessary to specify `RANGE`. The third `DO` loop shows how the functions of the second loop can be programmed using the statement [`ASSIGN INCREMENT`](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html).

-   The way the addition `VARYING` works depends on the internal layout of the working memory, which itself can be affected by [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html).
-   Instead of the addition `VARYING`, the statement [`ASSIGN`](ABAPASSIGN.html) should be used in the loop with the addition [`INCREMENT`](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html).

-   *Cause:* Invalid access to [deep](ABENDEEP_GLOSRY.html) components within the area specified by the `RANGE`\-addition.
    *Runtime error:*\\ `DO_WHILE_VARY_ILLEGAL_ACCESS`
-   *Cause:* Access to data outside the range specified by the `RANGE` addition.
    *Runtime error:*\\ `DO_WHILE_VARY_NOT_IN_RANGE`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: BEGIN OF text, \\n word1 TYPE c LENGTH 4 VALUE 'AAAA', \\n word2 TYPE c LENGTH 4 VALUE 'BBBB', \\n word3 TYPE c LENGTH 4 VALUE 'CCCC', \\n word4 TYPE c LENGTH 4 VALUE 'DDDD', \\n END OF text. \\n\\ \\nDATA: word TYPE c LENGTH 4, \\n char1 TYPE c LENGTH 1, \\n char2 TYPE c LENGTH 1, \\n leng TYPE i. \\n\\ \\nFIELD-SYMBOLS LIKE text-word1. \\nDATA inc TYPE i. \\n\\ \\nDESCRIBE FIELD text LENGTH leng IN CHARACTER MODE. \\nleng /= 2. \\n\\ \\nout->begin\_section( \`First Loop\` ). \\n\\ \\nDO leng TIMES VARYING char1 FROM text(1) \\n NEXT text+2(1) RANGE text \\n VARYING char2 FROM text+1(1) \\n NEXT text+3(1) RANGE text. \\n out->write( |\\{ char1 \\} \\{ char2 \\}| ). \\n char1 = 'x'. \\n char2 = 'y'. \\nENDDO. \\n\\ \\nout->next\_section( \`Second Loop\` ). \\n\\ \\nDO 4 TIMES VARYING word FROM text-word1 NEXT text-word2. \\n out->write( word ). \\nENDDO. \\n\\ \\nout->next\_section( \`Third Loop\` ). \\n\\ \\nDO. \\n inc = sy-index - 1. \\n ASSIGN text-word1 INCREMENT inc TO RANGE text. \\n IF sy-subrc = 0. \\n out->write( ). \\n ELSE. \\n EXIT. \\n ENDIF. \\nENDDO. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_program\_flow.html abenobsolete\_control\_structures.html