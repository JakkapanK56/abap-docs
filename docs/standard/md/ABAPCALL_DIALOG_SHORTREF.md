---
title: "ABAPCALL_DIALOG_SHORTREF"
description: |
  ABAPCALL_DIALOG_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_DIALOG_SHORTREF.htm"
abapFile: "ABAPCALL_DIALOG_SHORTREF.html"
keywords: ["if", "internal-table", "ABAPCALL", "DIALOG", "SHORTREF"]
---

[Reference](ABAPCALL_DIALOG.html)

`CALL DIALOG dialog [\ \{AND SKIP FIRST SCREEN\}\                     |\ \{USING bdc_tab [MODE mode]\}\ ]\                     [EXPORTING p1 FROM a1 p2 FROM a2 ...]\                     [IMPORTING p1 TO a1 p2 TO a2 ...].`

**Obsolete:** Calls the [dialog module](ABENDIALOG_MODULE_OBJECT_GLOSRY.html) specified in `dialog`.

-   `AND SKIP FIRST SCREEN`\\
    Suppresses the initial dynpro.
-   `USING bdc_tab [MODE mode]`\\
    Executes the dialog module using a [batch input session](ABENBATCH_INPUT_TABLE_GLOSRY.html) in the internal table `bdc_tab`. The processing mode can be specified in `mode`.
-   `EXPORTING p1 FROM a1 p2 FROM a2 ...`\\
    Passes actual parameters `a1`, `a2`, ... to input parameters `p1`, `p2`, ...
-   `IMPORTING p1 TO a1 p2 TO a2 ...`\\
    Passes output parameters `p1`, `p2`, ... to actual parameters `a1`, `a2`, ...

abenabap.html abenabap\_reference.html abenabap\_shortref.html