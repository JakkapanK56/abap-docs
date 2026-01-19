---
title: "ABENNEWS-760-ABAP_CDS"
description: |
  ABENNEWS-760-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-760-ABAP_CDS.htm"
abapFile: "ABENNEWS-760-ABAP_CDS.html"
keywords: ["if", "data", "types", "ABENNEWS", "760", "ABAP", "CDS"]
---

[1\. CDS Access Control](#ABAP_MODIFICATION_1@4@)

[2\. Expressions and Functions](#ABAP_MODIFICATION_2@4@)

[ABAP CDS](ABENABAP_CDS_GLOSRY.html)\\ [access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) was expanded to include implicit evaluations of [CDS roles](ABENCDS_ROLE_GLOSRY.html) defined in the [ABAP CDS](ABENABAP_CDS_GLOSRY.html)\\ [CDS DCL](ABENCDS_F1_DCL_SYNTAX.html) in ABAP SQL. If a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is linked with a CDS role, an additional [access condition](ABENACCESS_CONDITION_GLOSRY.html) is checked by default when the CDS entity is accessed using ABAP SQL. Only that data is read for which the current user has an authorization or that matches a literal condition.

The following enhancements have been implemented:

-   The new SQL functions [`LENGTH`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html), [`LTRIM`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html),[`RTRIM`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html), [`BINTOHEX`](ABENCDS_CONV_FUNC_TYPES_V1.html), and [`HEXTOBIN`](ABENCDS_CONV_FUNC_TYPES_V1.html) are available for [CDS views](ABENCDS_VIEW_GLOSRY.html).
-   The special date functions [`DATS_DAYS_BETWEEN`](ABENCDS_DATE_FUNCTIONS_V1.html), [`DATS_ADD_DAYS`](ABENCDS_DATE_FUNCTIONS_V1.html), and [`DATS_ADD_MONTHS`](ABENCDS_DATE_FUNCTIONS_V1.html) make it possible to calculate with values of the built-in dictionary type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) in [CDS views](ABENCDS_VIEW_GLOSRY.html).
-   Data elements can now be specified as the target type in [`CAST` expressions](ABENCDS_CAST_EXPRESSION_V1.html) in a [CDS view](ABENCDS_VIEW_GLOSRY.html). This passes the semantic properties of the data element to the result. This also makes it possible to map more built-in types to itself than previously.

abenabap.html abennews.html abennews-76.html abennews-760.html