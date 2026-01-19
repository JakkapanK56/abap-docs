---
title: "ABENNEWS-773-TYPE_CHECKS"
description: |
  ABENNEWS-773-TYPE_CHECKS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-773-TYPE_CHECKS.htm"
abapFile: "ABENNEWS-773-TYPE_CHECKS.html"
keywords: ["if", "case", "class", "data", "types", "field-symbol", "ABENNEWS", "773", "TYPE", "CHECKS"]
---

[1. Checks on `STRUCTURE` Typing](#ABAP_MODIFICATION_1@4@) 

[2\. Checks on Literals as Actual Parameters](#ABAP_MODIFICATION_2@4@)

[3\. Checks on Common Data Areas](#ABAP_MODIFICATION_3@4@)

In obsolete `STRUCTURE` typing of formal parameters and field symbols, one assigned data object must be at least as long as the structure in question. Typing checks now respect the [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html) at the end of the data object and the structure.

The value of a literal passed to a procedure must not be modified in the procedure. In certain cases this was, however, possible, namely when [literals as actual parameters](ABENTYPING_LITERALS.html) were passed to differently typed `CHANGING` parameters of subroutines. This is now prevented by stricter checks and always produces a runtime error.

Obsolete common data areas with the same name and defined using [`COMMON PART`](ABAPDATA_COMMON.html) must have identical layouts.

-   Common data areas are now viewed as structures whose [structure fragment view](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html) must be identical and whose deep components must be compatible (pairwise). If not, the runtime error `LOAD_COMMON_PART_STRUCT` occurs.
-   In common data areas it is now no longer possible to declare [object reference variables](ABENOBJECT_REFER_VARIABLE_GLOSRY.html) with the static type of program-local classes and interfaces, nor is it possible to declare [data reference variables](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html) with the static type of program-local structured types.

abenabap.html abennews.html abennews-77.html abennews-773.html