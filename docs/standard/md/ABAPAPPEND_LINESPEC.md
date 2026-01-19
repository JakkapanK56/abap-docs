---
title: "ABAPAPPEND_LINESPEC"
description: |
  ABAPAPPEND_LINESPEC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAPPEND_LINESPEC.htm"
abapFile: "ABAPAPPEND_LINESPEC.html"
keywords: ["select", "insert", "loop", "do", "if", "case", "catch", "class", "data", "types", "internal-table", "field-symbol", "ABAPAPPEND", "LINESPEC"]
---

[Short Reference](ABAPAPPEND_SHORTREF.html)

`... wa`\\ 
  `|\ \{INITIAL LINE\}`\\ 
  ``|\ \{LINES OF jtab [FROM idx1]\ [TO idx2]\ [STEP n]\ [USING KEY [`keyname`](ABENKEYNAME.html)]\} ...``

[1. `... wa`](#ABAP_ALTERNATIVE_1@2@)

[2. `... INITIAL LINE`](#ABAP_ALTERNATIVE_2@2@)

[3. `... LINES OF jtab [FROM idx1]\ [TO idx2]\ [STEP n]\ [USING KEY keyname]`](#ABAP_ALTERNATIVE_3@2@)

Either a work area `wa`, an initial line `INITIAL LINE`, or multiple lines of an internal table `jtab` can be appended.

A new line is appended to which the content of the work area `wa` is assigned. `wa` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html). `wa` may be incompatible with the line type of the internal table and, if necessary, is converted to the line type in accordance with the [conversion rules](ABENCONVERSION_RULES.html). If a conversion error occurs here, the exception cannot be handled using `CX_SY_CONVERSION_ERROR` and the associated runtime error occurs instead. If an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) is specified for `wa`, the line type of the internal table is used to determine the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html).

Appending of square numbers to a [sorted table](ABENSORTED_TABLE_GLOSRY.html) with elementary line type.

A new line is appended in which every component contains the [type-dependent initial value](ABENBUILT_IN_TYPES_COMPLETE.html).

Appending of an initial line that simultaneously is linked to a field symbol using the addition [`ASSIGNING`](ABAPAPPEND_RESULT.html). This means that initial lines can be processed directly.

The lines of an internal table `jtab` are appended as a block. `jtab` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html).

The lines to be inserted are taken sequentially from the table `jtab`. The line type of `jtab` can be incompatible with the line type of the internal table `itab` and is converted to the line type of the target table, if necessary, in accordance with the [conversion rules](ABENCONVERSION_RULES.html). If a conversion error occurs here, the exception cannot be handled using `CX_SY_CONVERSION_ERROR` and the associated runtime error occurs instead.

The order in which the lines are taken is the same as for the statement [`LOOP`](ABAPLOOP_AT_ITAB.html) and can also be affected by specifying a table key [`keyname`](ABENKEYNAME.html) after `USING KEY`. The additions `FROM idx1` and `TO idx2` have the same syntax and effect as for [`LOOP`](ABAPLOOP_AT_ITAB_COND.html) with respect to `jtab`. `STEP n` has the same syntax and effect as for [`LOOP`](ABAPLOOP_AT_ITAB_COND.html) with the exception that the value of `n` must be positive.

If a conflict with existing primary or secondary table keys occurs, this always raises an uncatchable exception when multiple lines are appended from an internal table.

When a standard table is constructed, the constructor operators [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) and [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) can also append multiple lines from a table to the target table using [`LINES OF`](ABENNEW_CONSTRUCTOR_PARAMS_LSPC.html).

Appending of the lines of an internal table `itab2` to the standard table `itab1`.

Appending of the lines of an internal table `jtab` to the standard table `itab` with the additions `FROM`, `TO`, and `STEP`.

-   If a conflict occurs with an existing unique primary table type, this raises an uncatchable exception when appending a single line. In the case of a conflict with a unique secondary table key, a catchable exception of the class `CX_SY_ITAB_DUPLICATE_KEY` is raised.
-   Specifying a [calculation expression](ABENCALCULATION_EXPRESSION_GLOSRY.html) for `wa` is usually only useful for elementary line types.
-   Outside of classes, there is also an [obsolete short form](ABENITAB_SHORT_FORMS.html) where `wa TO` can be omitted if the internal table has an identically named [header line](ABENHEADER_LINE_GLOSRY.html)\\ `itab`. The statement then uses the header line as the work area implicitly.

DATA: int TYPE i, \\n itab LIKE SORTED TABLE OF int \\n WITH UNIQUE KEY table\_line. \\n\\ \\nDO 10 TIMES. \\n int = sy-index \*\* 2. \\n APPEND int TO itab. \\nENDDO. DATA itab TYPE TABLE OF spfli. \\n\\ \\nFIELD-SYMBOLS LIKE LINE OF itab. \\n\\ \\nAPPEND INITIAL LINE TO itab ASSIGNING . \\n \-carrid = '...'. \\n... SELECT \* \\n FROM spfli \\n WHERE carrid = 'LH' \\n INTO TABLE @DATA(itab1). \\n\\ \\nSELECT \* \\n FROM spfli \\n WHERE carrid = 'UA' \\n INTO TABLE @FINAL(itab2). \\n\\ \\nAPPEND LINES OF itab2 TO itab1. DATA: itab TYPE STANDARD TABLE OF i, \\n jtab LIKE itab. \\n\\ \\nitab = VALUE #( FOR i = 1 UNTIL i > 10 ( i ) ). \\njtab = VALUE #( FOR j = 11 UNTIL j > 20 ( j ) ). \\n\\ \\nAPPEND LINES OF jtab FROM 1 TO 5 STEP 2 TO itab. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapappend.html