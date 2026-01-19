---
title: "ABAPLOOP_AT_ITAB_RESULT"
description: |
  ABAPLOOP_AT_ITAB_RESULT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLOOP_AT_ITAB_RESULT.htm"
abapFile: "ABAPLOOP_AT_ITAB_RESULT.html"
keywords: ["insert", "delete", "loop", "do", "while", "if", "method", "class", "data", "types", "internal-table", "field-symbol", "ABAPLOOP", "ITAB", "RESULT"]
---

[Short Reference](ABAPLOOP_AT_ITAB_SHORTREF.html)

`... \{ INTO wa \}`\\ 
  `|\ \{ ASSIGNING <fs> [CASTING]\ [ELSE UNASSIGN]\ \}`\\ 
  `|\ \{ REFERENCE INTO dref \}`\\ 
  `|\ \{ TRANSPORTING NO FIELDS \} ...`

Defines the output behavior of a [`LOOP`](ABAPLOOP_AT_ITAB.html) across an internal table. There are four alternatives for the output behavior:

If the internal table `itab` is specified as an existing data object, the syntax and meaning of the specified [output behavior](ABAPREAD_TABLE_OUTDESC.html) is the same as in the statement [`READ TABLE`](ABAPREAD_TABLE.html), with the exception that no further [`transport_options`](ABAPREAD_TABLE_TRANSPORT_OPTIONS.html) can be specified after `INTO wa`, and the same restrictions apply to modifications of key fields of the [primary](ABENPRIMARY_TABLE_KEY_GLOSRY.html) and [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). In particular, inline declarations for the work area, the field symbol, or the reference variable using the declaration operators [`DATA`](ABENDATA_INLINE.html), [`FINAL`](ABENFINAL_INLINE.html), and [`FIELD-SYMBOL`](ABENFIELD-SYMBOL_INLINE.html) are possible. The addition `ELSE UNASSIGN` sets the state of the field symbol behind `ASSIGNING` to unassigned if no loop pass was executed and `sy-subrc` is set to 4.

If a field symbol or a dereferenced reference variable is specified for the work area `wa` or the reference variable `dref`, the target data object of the field symbol or reference variable is determined in each loop pass. The current data object is used as the target area for each loop pass. This means that changes in the assignment of the field symbol or reference variable within the loop modify the target area.

If the internal table is specified as the return value of a [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html), a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), or a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html), the additions `ASSIGNING` and `REFERENCE INTO` can also be specified for `LOOP`, unlike in `READ TABLE`. The internal table is only available while the loop is being processed, which means that all field symbols and reference variables that point to lines in the internal table become invalid when the loop is exited.

[Output Behavior](ABENTABLE_OUTPUT_GUIDL.html)

Two `LOOP` loops are used to determine the line numbers for numbers greater than or equal to 40 and less than or equal to 60 in a sorted table of random numbers, and the addition `TRANSPORTING NO FIELDS` is used. Then, `INTO` is used to read these lines to a variable `number`. Filling the `output` table in this way demonstrates the use of `number`. It could also be done using [`INSERT LINES OF`](ABAPINSERT_ITAB_LINESPEC.html).

Loop across an internal table containing dates. The table lines are assigned to a structured field symbol with a corresponding casting.

-   The addition `INTO` is used to assign the content of the current line to a work area `wa`.
-   The addition `ASSIGNING` is used to assign the current line to a field symbol `<fs>`. No other memory area can be assigned to the field symbol within the loop and the assignment cannot be undone using [`UNASSIGN`](ABAPUNASSIGN.html).
-   The addition `REFERENCE INTO` is used to create a reference to the current line in a reference variable. No other reference can be assigned to the reference variable within the loop and the reference variable cannot be initialized using [`CLEAR`](ABAPCLEAR.html).
-   The addition `TRANSPORTING NO FIELDS` specifies that only the relevant system fields are filled. This addition is only possible if the addition `WHERE` is used in the conditions [`cond`](ABAPLOOP_AT_ITAB_COND.html) at the same time and if the addition [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html) is not used.

-   If the current line is deleted within the loop when the additions `ASSIGNING` or `REFERENCE` are used, the field symbol or reference variable is not assigned or unbound in the current loop pass afterwards.
-   For `LOOP`, there is an [obsolete short form](ABENITAB_SHORT_FORMS.html) outside of classes, where `INTO wa` can be omitted if the internal table has an identically named [header line](ABENHEADER_LINE_GLOSRY.html)\\ `itab`. `INTO itab` is then added to the statement.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ). \\nFINAL(rnd) = cl\_abap\_random\_int=>create( seed = CONV i( t ) \\n min = 1 \\n max = 100 ). \\n\\ \\nDATA itab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line. \\nitab = VALUE #( FOR i = 1 UNTIL i > 100 ( rnd->get\_next( ) ) ). \\n\\ \\nLOOP AT itab TRANSPORTING NO FIELDS WHERE table\_line >= 40. \\n FINAL(idx1) = sy-tabix. \\n EXIT. \\nENDLOOP. \\n\\ \\nLOOP AT itab FROM idx1 TRANSPORTING NO FIELDS WHERE table\_line > 60. \\n FINAL(idx2) = sy-tabix - 1. \\n EXIT. \\nENDLOOP. \\n\\ \\nDATA output TYPE TABLE OF i WITH EMPTY KEY. \\nLOOP AT itab FROM idx1 TO idx2 INTO FINAL(number). \\n output = VALUE #( BASE output ( number ) ). \\nENDLOOP. \\nout->write( output ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF date, \\n year TYPE c LENGTH 4, \\n month TYPE c LENGTH 2, \\n day TYPE c LENGTH 2, \\n END OF date. \\n\\ \\nDATA itab TYPE SORTED TABLE OF d WITH UNIQUE KEY table\_line. \\nFINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ). \\nitab = VALUE #( FOR i = - 3 UNTIL i > 3 ( date + i ) ). \\n\\ \\nDATA output TYPE TABLE OF date WITH EMPTY KEY. \\nFIELD-SYMBOLS TYPE date. \\nLOOP AT itab ASSIGNING CASTING ELSE UNASSIGN. \\n output = VALUE #( BASE output ( ) ). \\nENDLOOP. \\nIF IS ASSIGNED. \\n out->write( output ). \\nENDIF. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab.html