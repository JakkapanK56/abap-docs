---
title: "ABAPRETRY"
description: |
  ABAPRETRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRETRY.htm"
abapFile: "ABAPRETRY.html"
keywords: ["delete", "loop", "if", "try", "catch", "class", "data", "exception-handling", "ABAPRETRY"]
---

[Short Reference](ABAPRETRY_SHORTREF.html)

`RETRY.`

This statement exits the [`CATCH`](ABAPCATCH_TRY.html) handling of a [class-based exception](ABENCLASS_BASED_EXCEPTION_GLOSRY.html) and continues processing with the [`TRY`](ABAPTRY.html) statement of the current `TRY` control structure.

The `RETRY` statement can only be executed within a `CATCH` block of a `TRY` control structure.

The following exception handling extends the ABAP-specific handling of a division by zero to dividends not equal to zero, by setting these to the value zero before a second pass.

-   The `RETRY` statement enables a `TRY` block that raised an exception to be executed again completely.
-   If the `BEFORE UNWIND` addition is specified for a `CATCH` block, exiting using `RETRY` deletes the context of the exception and recreates it in the `TRY` block. With respect to the context, therefore, `RETRY` behaves like any exit of a `CATCH` block, with the exception of [`RESUME`](ABAPRESUME.html).
-   The cause of the exception must be removed either before `RETRY` in the `CATCH` block or after `RETRY` in the `TRY` block. If a `TRY` block is repeated and the cause of the exception is not removed, an endless loop occurs.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: number1 TYPE i, \\n number2 TYPE i. \\ncl\_demo\_input=>add\_field( CHANGING field = number1 ). \\ncl\_demo\_input=>request( CHANGING field = number2 ). \\n\\ \\nDATA result TYPE p DECIMALS 2. \\n\\ \\nTRY. \\n result = number1 / number2. \\n out->write( |Result: \\{ result ALIGN = LEFT \\}| ). \\n CATCH cx\_sy\_zerodivide. \\n number1 = 0. \\n RETRY. \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions.html abaptry.html