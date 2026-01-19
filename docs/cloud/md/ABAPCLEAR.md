---
title: "ABAPCLEAR"
description: |
  ABAPCLEAR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCLEAR.htm"
abapFile: "ABAPCLEAR.html"
keywords: ["insert", "delete", "do", "if", "case", "catch", "data", "types", "internal-table", "ABAPCLEAR"]
---

`CLEAR dobj [\ \{WITH val [IN \{CHARACTER|BYTE\} MODE]\ \}\  \ ].`

[`... WITH val [IN \{CHARACTER|BYTE\} MODE]`](#ABAP_ONE_ADD@1@)

Without the optional additions, `dobj` is assigned the type-dependent [initial value](ABENINITIAL_VALUE_GLOSRY.html). `dobj` is a [result position](ABENRESULT_POSITION_GLOSRY.html), that is, either a variable or a [writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html) can be specified.

The optional additions enable `dobj` to be filled with values other than the initial value.

After initialization with `CLEAR`, the internal table `itab` no longer contains any lines.

If the addition `WITH val` is used and `CHARACTER` or `BYTE MODE` specified, all places in `dobj` are replaced either with the first character or the first byte in `val`. `val` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). If `dobj` is of the type `string` or `xstring`, the string is processed in its current length.

If the `MODE` addition is not specified, the addition `IN CHARACTER MODE` applies. Depending on the addition, the data object `dobj` must be either character-like or byte-like. Depending on the addition, the operand `val` must be character-like or byte-like and have the length 1. If this is not the case, a syntax error occurs, or a uncatchable exception is raised.

The byte string `hexstring` is assigned a specific byte value across the entire current length.

-   Elementary data objects are assigned initial values in accordance with the [tables](ABENBUILT_IN_TYPES_COMPLETE.html) of [built-in ABAP types](ABENBUILTIN_ABAP_TYPE_GLOSRY.html).
-   [Enumerated variables](ABENENUMERATED_VARIABLE_GLOSRY.html) are assigned to initial values in accordance with the elementary [base type](ABENBASE_TYPE_GLOSRY.html).
-   Reference variables are assigned the [null reference](ABENNULL_REFERENCE_GLOSRY.html).
-   Structures are set to their initial values component by component.
-   All lines of an internal table are deleted. The memory space required for the lines of the table is released except the [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html). The statement [`FREE`](ABAPFREE_DATAOBJECT.html) can be used for releasing also the initial memory requirement if necessary.

-   If `dobj` is an internal table with a [header line](ABENHEADER_LINE_GLOSRY.html), `dobj[]` must be specified to delete the lines, otherwise only the header line is deleted.
-   In the case of `CLEAR`, the initial memory request of an internal table is not released, which can have a positive effect on performance when inserting new lines in the internal table. The statement [`FREE`](ABAPFREE_DATAOBJECT.html) is required only if as much memory as possible needs to be released.

DATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( FOR i = 1 UNTIL i > 10 ( i ) ). \\nASSERT lines( itab ) = 10. \\n\\ \\nCLEAR itab. \\nASSERT lines( itab ) = 0. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: hexstring TYPE xstring, \\n hex TYPE x LENGTH 1 VALUE 'FF'. \\n... \\nhexstring = '00000000'. \\n... \\nCLEAR hexstring WITH hex IN BYTE MODE. \\n\\ \\nout->write( hexstring ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abeninitializations.html