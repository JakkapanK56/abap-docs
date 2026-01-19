---
title: "ABENNEWS-761-AMDP"
description: |
  ABENNEWS-761-AMDP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-761-AMDP.htm"
abapFile: "ABENNEWS-761-AMDP.html"
keywords: ["if", "method", "class", "data", "ABENNEWS", "761", "AMDP"]
---

[1\. AMDP Table Functions](#ABAP_MODIFICATION_1@4@)

[2\. AMDP Table Functions for AMDP Methods](#ABAP_MODIFICATION_2@4@)

[3\. AMDP Table Functions for CDS Table Functions](#ABAP_MODIFICATION_3@4@)

Alongside the existing [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html), the [AMDP](ABENAMDP_GLOSRY.html) framework now also supports [AMDP table functions](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) in the form of [table functions](ABENTABLE_FUNCTION_GLOSRY.html) in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). AMDP table functions now have the new addition [`BY DATABASE FUNCTION`](ABAPMETHOD_BY_DB_PROC.html) of the statement `METHOD` in implementations of [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) in [AMDP classes](ABENAMDP_CLASS_GLOSRY.html). These methods are known as [AMDP function implementations](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) to distinguish them from the existing [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html). Unlike AMDP procedure implementations, AMDP function implementations have a tabular return value, but cannot be called like regular [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) in ABAP.

In other [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) and using the associated SQL syntax, it is possible to access the [AMDP table function](ABENAMDP_FUNCTION_GLOSRY.html) of an [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) with an explicitly defined parameter interface

An [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) in whose declaration the addition [`FOR TABLE FUNCTION`](ABAPCLASS-METHODS_FOR_TABFUNC.html) is specified implements a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) from [ABAP CDS](ABENABAP_CDS_GLOSRY.html). The parameter interface of an AMDP function implementation of this type is specified by the definition of the CDS table function. The associated [AMDP](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) function is executed as a data source of an Open ABAP SQL read statement when accessing the CDS table function directly or indirectly.

abenabap.html abennews.html abennews-76.html abennews-761.html