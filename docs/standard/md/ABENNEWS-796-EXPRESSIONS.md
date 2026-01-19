---
title: "ABENNEWS-796-EXPRESSIONS"
description: |
  ABENNEWS-796-EXPRESSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-796-EXPRESSIONS.htm"
abapFile: "ABENNEWS-796-EXPRESSIONS.html"
keywords: ["if", "case", "ABENNEWS", "796", "EXPRESSIONS"]
---

[1. String Expressions in `VALUE` Operator](#ABAP_MODIFICATION_1@4@) 

[2. `FOR GROUPS ... OF` Supported for `NEW`](#ABAP_MODIFICATION_2@4@)

[3\. Syntax Warning for Multiple Assignments of Components](#ABAP_MODIFICATION_3@4@)

String expressions can now directly be assigned to incompatible components without using `CONV` in assignments to [structure components](ABENVALUE_CONSTRUCTOR_PARAMS_STRUC.html): `VALUE ...( comp = strg_expr )` vs. `VALUE ...( comp = CONV #( strg_expr ) )`.

The variant [`FOR GROUPS ... OF`](ABENFOR_GROUPS_OF.html) of the iteration expression [`FOR`](ABENFOR.html) is now also supported for the constructor operator [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html).

In the constructor operators [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_STRUCT.html) and [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_STRUC.html) for structures, it is not allowed to assign multiple values to a component. This leads to a syntax error, if the component is directly named. It leads now also to a syntax warning in cases, where [component groups](ABENCOMPONENT_GROUP_GLOSRY.html) are involved.

abenabap.html abennews.html abennews-79.html abennews-796.html