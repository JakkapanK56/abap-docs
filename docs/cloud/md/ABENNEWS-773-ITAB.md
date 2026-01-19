---
title: "ABENNEWS-773-ITAB"
description: |
  ABENNEWS-773-ITAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-773-ITAB.htm"
abapFile: "ABENNEWS-773-ITAB.html"
keywords: ["if", "data", "internal-table", "ABENNEWS", "773", "ITAB"]
---

[1. Stricter Syntax Check in `COLLECT`](#ABAP_MODIFICATION_1@4@)

Before the statement [`COLLECT`](ABAPCOLLECT.html) can be executed for an internal table, all components that are not part of the primary table key must have a numeric data type. Until now, if certain structured components broke this rule, a syntax check warning and a program runtime error occurred. Now a syntax error occurs here too.

abenabap.html abennews.html abennews-77.html abennews-773.html