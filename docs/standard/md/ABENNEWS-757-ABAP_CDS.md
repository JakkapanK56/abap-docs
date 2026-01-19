---
title: "ABENNEWS-757-ABAP_CDS"
description: |
  ABENNEWS-757-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-757-ABAP_CDS.htm"
abapFile: "ABENNEWS-757-ABAP_CDS.html"
keywords: ["select", "if", "case", "try", "data", "types", "ABENNEWS", "757", "ABAP", "CDS"]
---

[1\. CDS View Entity, Table Buffering](#ABAP_MODIFICATION_1@4@)

[2. CDS View Entity, `CASE ELSE NULL`](#ABAP_MODIFICATION_2@4@)

[3\. CDS View Entity, Extended Cast Matrix](#ABAP_MODIFICATION_3@4@)

[4\. CDS View Entity, Table Buffering](#ABAP_MODIFICATION_4@4@)

[5. CDS View Entity, `SUBSTRING` Function](#ABAP_MODIFICATION_5@4@) 

[6. CDS View Entity, `LEFT` and `RIGHT`](#ABAP_MODIFICATION_6@4@)

[7\. CDS View Entity, Application Session Variables](#ABAP_MODIFICATION_7@4@)

[8\. ABAP Program That Lists Usages of CDS-Managed DDIC Views](#ABAP_MODIFICATION_8@4@)

[9\. CDS Analytical Projection Views](#ABAP_MODIFICATION_9@4@)

[10\. CDS Transactional Interface](#ABAP_MODIFICATION_10@4@)

[11\. Comparisons with CDS Amount Fields and CDS Quantity Fields](#ABAP_MODIFICATION_11@4@)

[12. Support of Input Parameters of Type `abap.string`](#ABAP_MODIFICATION_12@4@)

[13\. CDS Custom Entity Extensions](#ABAP_MODIFICATION_13@4@)

[14\. CDS DDIC-Based Views Are Obsolete](#ABAP_MODIFICATION_14@4@)

[CDS view entity buffering](ABENCDS_VIEW_ENTITY_B_GLOSRY.html) was enhanced: [View on view buffering](ABENCDS_V2_VIEW_BUFFERING.html) is now supported, under the precondition that the CDS view entity used as data source meets certain requirements.

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), the addition [`ELSE NULL`](ABENCDS_CASE_EXPRESSION_V2.html) is available in simple and complex [case distinctions](ABENCDS_CASE_EXPRESSION_V2.html). It defines the [null value](ABENNULL_VALUE_GLOSRY.html) as return value of the `ELSE` branch.

New [casting options](ABENCDS_CAST_EXPRESSION_V2.html) have been added in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html).

[Table buffering](ABENTABLE_BUFFERING_GLOSRY.html) can be defined for [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) now:

Table buffering can be defined differently for the layers core, localization, industry, partner and customer.

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), the [`SUBSTRING`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.html) function has been enhanced. It now accepts not only literals, but also fields, parameters, expressions, and built-in functions as arguments for parameters `pos` and `len`.

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), the functions [`LEFT`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.html) and [`RIGHT`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.html) have been enhanced. They now accept literals, fields, parameters, expressions, and built-in functions as argument for the parameter `len`.

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), two new [application session variables](ABENCDS_SESSION_VAR_APPLICATION_V2.html) are available:

Using [CDS-managed DDIC views](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) has been declared [obsolete](ABENCDS_ACCESS_OBSOLETE.html). The following ABAP program lists all [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) that use CDS-managed DDIC views:

`RUT_WHERE_USE_SQLVIEW`.

[CDS analytical projection views](ABENCDS_ANALYTICAL_QUERY_APV.html) for modelling analytical queries are available. A CDS analytical projection view is defined using [`DEFINE TRANSIENT VIEW ENTITY AS PROJECTION ON`](ABENCDS_DEFINE_VIEW_AS_ANALYTICAL.html). The value for the [provider contract](ABENCDS_PV_PROVIDER_CONTRACT.html) must be set to `ANALYTICAL_QUERY`.

A new type of [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) is available: the [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html). CDS transactional interfaces serve as stable public interface layer in a CDS data model. They are typically used in the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html) to provide the basis for a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html). A CDS transactional interface view is defined using [`DEFINE VIEW ENTITY AS PROJECTION ON`](ABENCDS_DEFINE_VIEW_AS_INTERFACE.html). The value for the [provider contract](ABENCDS_PV_PROVIDER_CONTRACT.html) must be set to `TRANSACTIONAL_INTERFACE`.

Special handling for [CDS amount fields](ABENCDS_AMOUNT_FIELD.html) and [CDS quantity fields](ABENCDS_QUANTITY_FIELD.html) for [comparisons](ABENCDS_COND_EXPR_TYPES_V2.html) in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) has been implemented.

Data type `abap.string` is now supported for [input parameters](ABENCDS_F1_PARAM.html) in the [parameter list](ABENCDS_PARAMETER_LIST_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) and in the [parameter list](ABENCDS_F1_FUNC_PARAMETER_LIST.html) of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html).

Data type `abap.string` is now supported when [binding actual parameters to the input parameters](ABENCDS_SELECT_PARAMETERS_V2.html) of a CDS view entity, if a CDS table function is used as [data source](ABENCDS_DATA_SOURCE_V2.html) after `FROM`.

The new statement [`EXTEND CUSTOM ENTITY`](ABENCDS_EXTEND_CUSTOM_ENTITY.html) of the DDL of ABAP CDS makes it possible to add new elements to existing [CDS custom entities](ABENCDS_CUSTOM_ENTITY_GLOSRY.html) by using [CDS custom entity extensions](ABENCDS_CUS_ENTITY_EXTEND_GLOSRY.html).

[CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), defined using the statement [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html), are [obsolete](ABENCDS_V1_VIEWS.html). When creating new data models, [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), defined using [`DEFINE VIEW ENTITY`](ABENCDS_DEFINE_VIEW_ENTITY.html), should be used instead.

-   Casting from data type `FLTP` into data types `DEC`, `CURR`, `QUAN`, `INT1`, `INT2`, `INT4`, `INT8`, `DECFLOAT16`, and `DECFLOAT34` is now possible.
-   Casting from data type `SSTRING` into data types `DEC`, `CURR`, `QUAN`, `INT1`, `INT2`, `INT4`, `INT8`, `DECFLOAT16`, and `DECFLOAT34` is now possible.
-   Casting from data type `CHAR` into data types `DEC`, `CURR`, `QUAN`, `INT1`, `INT2`, `INT4`, `INT8`, `DECFLOAT16`, and `DECFLOAT34` is now possible.
-   Casting from data type `DATS` into data types `DEC`, `CURR`, `QUAN`, `INT1`, `INT2`, `INT4`, `INT8`, `DECFLOAT16`, and `DECFLOAT34` is now possible.
-   Casting from data type `TIMS` into data types `DEC`, `CURR`, `QUAN`, `INT1`, `INT2`, `INT4`, `INT8`, `DECFLOAT16`, and `DECFLOAT34` is now possible.
-   Casting from data types `DECFLOAT16` and `DECFLOAT34` into data type `CHAR` is now possible.

-   Table buffering can be enabled and disabled with the annotation
-   [`@AbapCatalog.entityBuffer.definitionAllowed: true|false`](ABENCDS_V2_VIEW_BUFFERING.html)
-   The [buffering type](ABENBUFFER_TYPE.html) can be specified with a [CDS view entity buffer](ABENCDS_VIEW_ENTITY_B_GLOSRY.html) defined by
-   [`DEFINE VIW ENTITY BUFFER ON cds_view_entity ...`](ABENCDS_DEFINE_VIEW_ENTITY_BUFFER.html)

-   [`bs_system_id`](ABENCDS_SESSION_VAR_APPLICATION_V2.html)
-   [`bs_zone_id`](ABENCDS_SESSION_VAR_APPLICATION_V2.html)

abenabap.html abennews.html abennews-75.html abennews-757.html