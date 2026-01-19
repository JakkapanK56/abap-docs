---
title: "ABAPBREAK-POINT_INTERNAL"
description: |
  ABAPBREAK-POINT_INTERNAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPBREAK-POINT_INTERNAL.htm"
abapFile: "ABAPBREAK-POINT_INTERNAL.html"
keywords: ["do", "if", "ABAPBREAK", "POINT", "INTERNAL"]
---

**This addition is for internal use only. \\nIt must not be used in application programs.**

[`... AT NEXT APPLICATION STATEMENT`](#ABAP_ONE_ADD@1@)

This addition can be specified optionally after `log_text`, but not together with the addition `ID`. It is only useful in system programs, system modules, system subroutines, and system function modules whose names begin with %\_.

If system debugging is not activated and the addition `AT NEXT APPLICATION STATEMENT` is not used, `BREAK-POINT` statements in the contexts listed above are ignored.

-   If system debugging is not activated, the program does not stop until the next statement that is not located in one of the contexts listed above.
-   If system debugging is activated, the program stops at the statement `BREAK-POINT`.

abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abencheckpoints.html abapbreak-point.html