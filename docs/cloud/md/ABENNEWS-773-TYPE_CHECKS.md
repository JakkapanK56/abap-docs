---
title: "ABENNEWS-773-TYPE_CHECKS"
description: |
  ABENNEWS-773-TYPE_CHECKS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-773-TYPE_CHECKS.htm"
abapFile: "ABENNEWS-773-TYPE_CHECKS.html"
keywords: ["if", "case", "data", "field-symbol", "ABENNEWS", "773", "TYPE", "CHECKS"]
---

[1. Checks on `STRUCTURE` Typing](#ABAP_MODIFICATION_1@4@) 

[2\. Checks on Literals as Actual Parameters](#ABAP_MODIFICATION_2@4@)

In obsolete `STRUCTURE` typing of formal parameters and field symbols, one assigned data object must be at least as long as the structure in question. Typing checks now respect the [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html) at the end of the data object and the structure.

The value of a literal passed to a procedure must not be modified in the procedure. In certain cases this was, however, possible, namely when [literals as actual parameters](ABENTYPING_LITERALS.html) were passed to differently typed `CHANGING` parameters of subroutines. This is now prevented by stricter checks and always produces a runtime error.

abenabap.html abennews.html abennews-77.html abennews-773.html