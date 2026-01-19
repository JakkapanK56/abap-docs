---
title: "ABAPSUM"
description: |
  ABAPSUM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSUM.htm"
abapFile: "ABAPSUM.html"
keywords: ["loop", "if", "data", "types", "internal-table", "ABAPSUM"]
---

[Short Reference](ABAPSUM_SHORTREF.html)

`SUM.`

The statement `SUM` can only be specified within a loop [`LOOP`](ABAPLOOP_AT_ITAB.html) and is only respected within a [`AT`\-`ENDAT`](ABAPAT_ITAB.html) control structure. Prerequisites for using the statement `SUM` are that the addition `INTO` is used in the `LOOP` statement, and that the specified work area `wa` is [compatible](ABENCOMPATIBLE_GLOSRY.html) with the line type of the internal table. Furthermore, `SUM` cannot be used when the line type of the internal table `itab` contains components that are tables themselves.

When the `AT` control structure is exited, the content of the current table line is reassigned to the work area `wa`.

Calculation of a sum with `SUM` at `AT END OF`. The lines of the respective current group level are evaluated.

Calculation of a sum with `SUM` at `AT LAST`. All lines of the internal table are evaluated.

[Group Level Processing with Totals](ABENINT_TABLE_SUM_ABEXA.html)

`CX_SY_ARITHMETIC_OVERFLOW`

-   In a group level `AT NEW compi` and `AT END OF compi`, `SUM` calculates the sums of the [numeric](ABENNUMERIC_DATA_TYPE_GLOSRY.html) components to the right of the current group key for all lines of the current group level and assigns these to the corresponding components of the work area `wa`. In an elementary line type, there are no components to the right of the current group key and the work area `wa` remains unchanged.
-   In the group levels `FIRST`, `LAST`, and outside an `AT`\-`ENDAT` control structure, for a structured line type the sum of all numeric components of all lines of the internal table is calculated and assigned to the corresponding components of the work area `wa`. For an elementary numeric line type, `SUM` sums the line values and assigns the sum to `wa`. For non-numeric elementary line types, `SUM` has no effect and the work area `wa` keeps its current value.

-   *Cause:* Overflow when calculating totals
    *Runtime error:*\\ `ADDF_INT_OVERFLOW`
-   *Cause:* Value too large when calculating totals in internal table, field too small
    *Runtime error:*\\ `SUM_OVERFLOW`

-   *Cause:* The statement `SUM` was used outside a `LOOP` processing of an internal table.
    *Runtime error:*\\ `SUM_NO_INTERNAL_TABLE`
-   *Cause:* The statement `SUM` was used within a `LOOP` processing belonging to another ABAP program.
    *Runtime error:*\\ `SUM_ON_FOREIGN_INTERNAL_TABLE`
-   *Cause:* The statement `SUM` was used within a loop starting with `LOOP ... ASSIGNING`.
    *Runtime error:*\\ `SUM_NO_ASSIGNING`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n BEGIN OF wa, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF wa, \\n itab LIKE TABLE OF wa WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( FOR i = 1 UNTIL i > 5 \\n FOR j = 1 UNTIL j > i \\n ( col1 = i col2 = j ) ). \\n\\ \\nLOOP AT itab INTO wa. \\n AT END OF col1. \\n SUM. \\n out->write( wa ). \\n ENDAT. \\nENDLOOP. \\nout->write( wa ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n BEGIN OF wa, \\n col TYPE i, \\n END OF wa, \\n itab LIKE TABLE OF wa WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( FOR i = 1 UNTIL i > 10 ( col = i ) ). \\n\\ \\nLOOP AT itab INTO wa. \\n AT LAST. \\n SUM. \\n out->write( wa ). \\n ENDAT. \\nENDLOOP. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab.html abapat\_itab.html