---
title: "ABENNEWS-71-ENHANCEMENTS"
description: |
  ABENNEWS-71-ENHANCEMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-71-ENHANCEMENTS.htm"
abapFile: "ABENNEWS-71-ENHANCEMENTS.html"
keywords: ["do", "if", "method", "ABENNEWS", "ENHANCEMENTS"]
---

[1. Exception Handling in `CALL BADI`](#ABAP_MODIFICATION_1@4@)

[2. Dynamic `GET BADI` and `CALL BADI`](#ABAP_MODIFICATION_2@4@)

[3\. Nested Source Code Enhancements](#ABAP_MODIFICATION_3@4@)

Until now, the `CX_SY_DYN_CALL_ILLEGAL_METHOD` exception was raised when the implementation of a method in [`CALL BADI`](ABAPCALL_BADI.html) was missing. The exception is now caught internally and the call is executed as if the method were present with an empty implementation. Actual parameters that are bound to `EXPORTING` or `RETURNING` parameters passed by value are initialized. All other actual parameters remain unchanged.

This change has also been downported to ABAP release 7.0.

Dynamic variants have been added to the [`GET BADI`](ABAPGET_BADI.html) and [`CALL BADI`](ABAPGET_BADI.html) statements, which allow the BAdI or BAdI method to be specified dynamically.

From ABAP release 7.0 EhP2, it is possible to enhance a [source code plug-in](ABENSOURCE_CODE_PLUGIN_GLOSRY.html) defined between [`ENHANCEMENT` - `ENDENHANCEMENT`](ABAPENHANCEMENT.html) with additional source code plug-ins. This means the [`ENHANCEMENT-POINT`](ABAPENHANCEMENT-POINT.html) and [`ENHANCEMENT-SECTION`](ABAPENHANCEMENT-SECTION.html) statements can be used in a source code plug-in.

In addition, [implicit enhancement options](ABENIMPLICIT_ENH_POINTS.html) are now available before the first line and after the last line of a [source code plug-in](ABENSOURCE_CODE_PLUGIN_GLOSRY.html) (after `ENHANCEMENT` and before `ENDENHANCEMENT`).

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html