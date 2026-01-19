---
title: "ABENNEWS-610-TYPEN"
description: |
  ABENNEWS-610-TYPEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-610-TYPEN.htm"
abapFile: "ABENNEWS-610-TYPEN.html"
keywords: ["if", "method", "class", "types", "internal-table", "field-symbol", "ABENNEWS", "610", "TYPEN"]
---

[1\. Constants for Structures and Internal Tables](#ABAP_MODIFICATION_1@4@)

[2\. New Generic Types for Field Symbols and Formal Parameters](#ABAP_MODIFICATION_2@4@)

[3\. Methods for Displaying Specific Type Properties](#ABAP_MODIFICATION_3@4@)

[4\. Type Description Objects for All Friends of a Class](#ABAP_MODIFICATION_4@4@)

Constants can now be defined as structures and internal tables, which in turn contain internal tables or references and strings. Only the initial value is possible however.

Constant structure.

The new [generic types](ABENBUILT_IN_TYPES_GENERIC.html) can be used for typing field symbols and parameters in subroutines, function modules, or methods. The following table shows their variants:

The method `GET_PROPERTY`, which provides information about specific type properties at runtime, has been added to the class `CL_ABAP_TYPEDESCR`.

The method `GET_FRIEND_TYPES` was introduced in the class `CL_ABAP_CLASSDESCR`. This can be used to query the type description objects for all friends of a class at runtime.

types: \\n begin of STRUC, \\n ITAB type standard table of SPFLI with non-unique key CARRID, \\n MREF type ref to OBJECT, \\n end of STRUC. \\n\\ \\nconstants: \\n CONST type STRUC value is initial. **Generic Type** **Types** `simple` `clike`, `xsequence`, `numeric` `clike` `n`, `d`, `t`, `struc1`, `csequence` `csequence` `c`, `string` `xsequence` `x`, `xstring` `numeric` `i`, `s`, `b`, `p`, `f` abenabap.html abennews.html abennews-6.html abennews-610.html