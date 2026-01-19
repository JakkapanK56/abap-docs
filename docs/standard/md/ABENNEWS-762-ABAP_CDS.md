---
title: "ABENNEWS-762-ABAP_CDS"
description: |
  ABENNEWS-762-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-762-ABAP_CDS.htm"
abapFile: "ABENNEWS-762-ABAP_CDS.html"
keywords: ["select", "if", "case", "method", "class", "data", "types", "ABENNEWS", "762", "ABAP", "CDS"]
---

[1\. Session Variables](#ABAP_MODIFICATION_1@4@)

[2\. Expressions and Functions](#ABAP_MODIFICATION_2@4@)

[3\. Exposing CDS Associations](#ABAP_MODIFICATION_3@4@)

[4\. CDS Views with Input Parameters](#ABAP_MODIFICATION_4@4@)

When a [CDS view](ABENCDS_VIEW_GLOSRY.html) is accessed using ABAP SQL, three session variables ([`$session.user`](ABENCDS_SESSION_VARIABLE_V1.html), [`$session.client`](ABENCDS_SESSION_VARIABLE_V1.html), and [`$session.system_language`](ABENCDS_SESSION_VARIABLE_V1.html)) can be accessed here. In these variables, the values of the system fields `sy-uname`, `sy-mandt` and `sy-langu` are available.

The following changes have been made:

Path expressions can now be [exposed](ABENCDS_SELECT_LIST_ASSOCIATION_V1.html) with more than one CDS association in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) of a CDS view. The fields of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) from the `ON` condition of the exposed CDS association, which then also need to be specified, must be defined using an appropriately specified path.

In ABAP release 7.62 and higher, the [input parameters](ABENCDS_PARAMETER_LIST_V1.html) of CDS views are supported by all database platforms and can be used in ABAP SQL. It is no longer necessary to query property `VIEWS_WITH_PARAMETERS` using method `USE_FEATURES` of class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html). Querying this property results in a warning check from the syntax check.

-   A [`CAST` expression](ABENCDS_CAST_EXPRESSION_V1.html) now contain nested cast expressions and [case distinctions](ABENCDS_CASE_EXPRESSION_V1.html) as an operand.
-   The following additional string functions are now supported: [`CONCAT_WITH_SPACE`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html), [`LEFT`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html), [`INSTR`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html), [`RIGHT`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html), and [`RPAD`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html).
-   [Input parameters](ABENCDS_PARAMETER_V1.html) from the parameter list [`parameter_list`](ABENCDS_PARAMETER_LIST_V1.html) of a CDS view can be passed to many parameters of [built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V1.html).
-   A one character literal with the type `NUMC` can now be [compared](ABENCDS_COND_EXPR_TYPES_V1.html) with a data source of the type `LANG`.

abenabap.html abennews.html abennews-76.html abennews-762.html abennews-762-745.html