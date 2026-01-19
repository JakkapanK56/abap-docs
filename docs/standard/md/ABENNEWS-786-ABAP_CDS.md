---
title: "ABENNEWS-786-ABAP_CDS"
description: |
  ABENNEWS-786-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-786-ABAP_CDS.htm"
abapFile: "ABENNEWS-786-ABAP_CDS.html"
keywords: ["select", "if", "data", "types", "ABENNEWS", "786", "ABAP", "CDS"]
---

[1\. CDS View Entity, Extended Cast Matrix](#ABAP_MODIFICATION_1@4@)

[2\. CDS View Entity, Application Session Variables](#ABAP_MODIFICATION_2@4@)

[3\. CDS Analytical Projection Views](#ABAP_MODIFICATION_3@4@)

[4\. CDS Transactional Interface](#ABAP_MODIFICATION_4@4@)

[5. Support of Input Parameters of Type `abap.string`](#ABAP_MODIFICATION_5@4@)

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), [casting](ABENCDS_CAST_EXPRESSION_V2.html) from data type `FLTP` into data types `DEC`, `CURR`, `QUAN`, `INT1`, `INT2`, `INT4`, `INT8`, `DECFLOAT16`, and `DECFLOAT34` is now possible.

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), two new [application session variables](ABENCDS_SESSION_VAR_APPLICATION_V2.html) are available:

[CDS analytical projection views](ABENCDS_ANALYTICAL_QUERY_APV.html) for modelling analytical queries are available. A CDS analytical projection view is defined using [`DEFINE TRANSIENT VIEW ENTITY AS PROJECTION ON`](ABENCDS_DEFINE_VIEW_AS_ANALYTICAL.html). The value for the [provider contract](ABENCDS_PV_PROVIDER_CONTRACT.html) must be set to `ANALYTICAL_QUERY`.

A new type of [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) is available: the [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html). CDS transactional interfaces serve as stable public interface layer in a CDS data model. They are typically used in the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html) to provide the basis for a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html). A CDS transactional interface view is defined using [`DEFINE VIEW ENTITY AS PROJECTION ON`](ABENCDS_DEFINE_VIEW_AS_INTERFACE.html). The value for the [provider contract](ABENCDS_PV_PROVIDER_CONTRACT.html) must be set to `TRANSACTIONAL_INTERFACE`.

Data type `abap.string` is now supported for [input parameters](ABENCDS_F1_PARAM.html) in the [parameter list](ABENCDS_PARAMETER_LIST_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) and in the [parameter list](ABENCDS_F1_FUNC_PARAMETER_LIST.html) of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html).

Data type `abap.string` is now supported when [binding actual parameters to the input parameters](ABENCDS_SELECT_PARAMETERS_V2.html) of a CDS view entity, if a CDS table function is used as [data source](ABENCDS_DATA_SOURCE_V2.html) after `FROM`.

-   [`bs_system_id`](ABENCDS_SESSION_VAR_APPLICATION_V2.html)
-   [`bs_zone_id`](ABENCDS_SESSION_VAR_APPLICATION_V2.html)

abenabap.html abennews.html abennews-78.html abennews-786.html