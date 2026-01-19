---
title: "ABAPCOMMIT_SHORTREF"
description: |
  ABAPCOMMIT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCOMMIT_SHORTREF.htm"
abapFile: "ABAPCOMMIT_SHORTREF.html"
keywords: ["update", "ABAPCOMMIT", "SHORTREF"]
---

[Reference](ABAPCOMMIT.html)

`COMMIT WORK [AND WAIT].`

Ends an [SAP LUW](ABENSAP_LUW_GLOSRY.html); executes subroutines registered using `PERFORM ON COMMIT` and [update function modules](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html) registered using `CALL FUNCTION IN UPDATE TASK`.

-   `AND WAIT`\\
    The current program waits for all high-priority update function modules to be executed.

abenabap.html abenabap\_reference.html abenabap\_shortref.html