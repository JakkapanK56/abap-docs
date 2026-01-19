---
title: "Is given the context of the exception until the end of the exception handling"
description: |
  -   `INTO oref` Assigns `oref` a reference to the exception object. abenabap.html abenabap_reference.html abenabap_shortref.html
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTRY_SHORTREF.htm"
abapFile: "ABAPTRY_SHORTREF.html"
keywords: ["if", "try", "catch", "class", "exception-handling", "ABAPTRY", "SHORTREF"]
---

[Reference](ABAPTRY.html)

`TRY.      [try_block]\    [CATCH [BEFORE UNWIND] cx_class1 cx_class2 ... [INTO oref].      [catch_block]]\      ...    [CLEANUP [INTO oref].      [cleanup_block]]\  ENDTRY.`

Defines a monitored area `try_block`, whose [class-based exceptions](ABENCLASS_BASED_EXCEPTION_GLOSRY.html)\\ `cx_class1`, `cx_class2`, ... can be handled in `CATCH` blocks `catch_block`. The `CLEANUP` block `cleanup_block` is executed if a class-based exception is raised in the `TRY` block and is not caught in a separate `CATCH` block but in a parent `TRY` control structure instead.

-   `BEFORE UNWIND`\\
    Is given the context of the exception until the end of the exception handling
-   `INTO oref`\\
    Assigns `oref` a reference to the exception object.

abenabap.html abenabap\_reference.html abenabap\_shortref.html