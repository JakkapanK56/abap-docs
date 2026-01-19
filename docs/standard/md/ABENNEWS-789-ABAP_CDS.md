---
title: "ABENNEWS-789-ABAP_CDS"
description: |
  ABENNEWS-789-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-789-ABAP_CDS.htm"
abapFile: "ABENNEWS-789-ABAP_CDS.html"
keywords: ["if", "case", "data", "ABENNEWS", "789", "ABAP", "CDS"]
---

[1\. CDS Custom Entity Extensions](#ABAP_MODIFICATION_1@4@)

[2. CDS View Entity, `LEFT` and `RIGHT`](#ABAP_MODIFICATION_2@4@)

[3. CDS View Entity, `CASE ELSE NULL`](#ABAP_MODIFICATION_3@4@)

[4\. CDS View Entity, Table Buffering](#ABAP_MODIFICATION_4@4@)

[5\. CDS DDIC-Based Views Are Obsolete](#ABAP_MODIFICATION_5@4@)

[6\. ABAP Program That Lists Usages of CDS-Managed DDIC Views](#ABAP_MODIFICATION_6@4@)

The new statement [`EXTEND CUSTOM ENTITY`](ABENCDS_EXTEND_CUSTOM_ENTITY.html) of the DDL of ABAP CDS makes it possible to add new elements to existing [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html) by using [CDS custom entity extensions](ABENCDS_CUS_ENTITY_EXTEND_GLOSRY.html).

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), the functions [`LEFT`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.html) and [`RIGHT`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.html) have been enhanced. They now accept literals, fields, parameters, expressions, and built-in functions as argument for the parameter `len`.

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), the addition [`ELSE NULL`](ABENCDS_CASE_EXPRESSION_V2.html) is available in simple and complex [case distinctions](ABENCDS_CASE_EXPRESSION_V2.html). It defines the [null value](ABENNULL_VALUE_GLOSRY.html) as return value of the `ELSE` branch.

[CDS view entity buffering](ABENCDS_VIEW_ENTITY_B_GLOSRY.html) was enhanced: [View on view buffering](ABENCDS_V2_VIEW_BUFFERING.html) is now supported, under the precondition that the CDS view entity used as data source meets certain requirements.

[CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), defined using the statement [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html), are [obsolete](ABENCDS_V1_VIEWS.html). When creating new data models, [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), defined using [`DEFINE VIEW ENTITY`](ABENCDS_DEFINE_VIEW_ENTITY.html), should be used instead.

Using [CDS-managed DDIC views](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) has been declared [obsolete](ABENCDS_ACCESS_OBSOLETE.html). The following ABAP program lists all [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) that use CDS-managed DDIC views:

`RUT_WHERE_USE_SQLVIEW`.

abenabap.html abennews.html abennews-78.html abennews-789.html