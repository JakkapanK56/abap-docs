---
title: "ABENNEWS-773-ITAB"
description: |
  ABENNEWS-773-ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-773-ITAB.htm"
abapFile: "ABENNEWS-773-ITAB.html"
keywords: ["if", "data", "internal-table", "ABENNEWS", "773", "ITAB"]
---

[1. Stricter Syntax Check in `COLLECT`](#ABAP_MODIFICATION_1@4@)

[2\. Changes to Write-Protected Components](#ABAP_MODIFICATION_2@4@)

Before the statement [`COLLECT`](ABAPCOLLECT.html) can be executed for an internal table, all components that are not part of the primary table key must have a numeric data type. Until now, if certain structured components broke this rule, a syntax check warning and a program runtime error occurred. Now a syntax error occurs here too.

Before ABAP release 7.73 it was possible to overwrite those write-protected components addressed using a data reference variable in a standard table, if the profile parameter `abap/runt/write_check_fix` was set to `off`. This profile parameter was removed in ABAP release 7.73 and it is no longer possible to modify write-protected components.

abenabap.html abennews.html abennews-77.html abennews-773.html