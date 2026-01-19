---
title: "ABENBATCH_INPUT_TABLE"
description: |
  ABENBATCH_INPUT_TABLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBATCH_INPUT_TABLE.htm"
abapFile: "ABENBATCH_INPUT_TABLE.html"
keywords: ["loop", "if", "data", "ABENBATCH", "INPUT", "TABLE"]
---

A [batch input table](ABENBATCH_INPUT_TABLE_GLOSRY.html) of the [line type](ABENROW_TYPE_GLOSRY.html)\\ `BDCDATA`, which is specified after the addition `USING` of the statement [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html) in [transaction](ABENTRANSACTION_GLOSRY.html) calls, must have the following content, which is achieved by appending lines to an initial table in this order:

Any columns in a line that are not listed remain initial.

[Transaction Call, `BDC` Table](ABENCALL_TRANSACTION_BDC_ABEXA.html)

-   For each new dynpro, a new line with

-   A program name in the column `PROGRAM`
-   A dynpro number in the column `DYNPRO`
-   A flag *X* in the column `DYNBEGIN`

-   For each input field to be filled, a line with

-   The name of the dynpro field in the column `FNAM`
-   The value to be passed in the column `FVAL`

-   If the field is part of a [table control](ABENTABLE_CONTROL_GLOSRY.html) or [step loop](ABENSTEP_LOOP_GLOSRY.html), the desired line number must be appended to the field name. If the dynpro contains [subscreens](ABENSUBSCREEN_GLOSRY.html), their fields are assigned to the including dynpro. This can produce multiple fields with the same name, which are then all filled.
-   If the cursor is to be positioned on a screen element

-   The value *BDC\_CURSOR* in the column `FNAM`
-   The name of the screen element in the column `FVAL`

-   If the cursor is to be positioned on a screen element in a table control or step loop, the desired line number must be appended to the name of the element.
-   For each dynpro, the function code

-   The value *BDC\_OKCODE* in the column `FNAM`
-   A function code in the column `FVAL`

-   Transaction Recorder (transaction `SHDB`) records executed transactions as batch input tables. The resulting batch input tables can be displayed and edited. Programs and function modules can be generated for their use.
-   In [batch input folders](ABENBATCH_INPUT_SESSION_GLOSRY.html), multiple field names of subscreens can be distinguished by specifying the special value *BDC\_SUBSCR* in a preceding line in the column `FNAM` and in the column `FVAL` of the subscreen.

abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_call\_transaction.html abapcall\_transaction.html abapcall\_transaction\_using.html