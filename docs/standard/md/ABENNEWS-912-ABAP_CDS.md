---
title: "ABENNEWS-912-ABAP_CDS"
description: |
  ABENNEWS-912-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-912-ABAP_CDS.htm"
abapFile: "ABENNEWS-912-ABAP_CDS.html"
keywords: ["select", "if", "data", "ABENNEWS", "912", "ABAP", "CDS"]
---

[1\. CDS Propagated Buffer](#ABAP_MODIFICATION_1@4@)

[2\. CDS Aspects](#ABAP_MODIFICATION_2@4@)

[3\. CDS External Entities](#ABAP_MODIFICATION_3@4@)

[4\. Client Parameter in SQL Functions](#ABAP_MODIFICATION_4@4@)

[CDS buffer propagation](ABENCDS_BUFFER_PROPAGATION_GLOSRY.html) can be defined for [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) and [CDS transactional queries](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) now:

[CDS aspects](ABENCDS_ASPECTS.html) can now be used to define reusable elements of CDS entities using the syntax [`DEFINE ASPECT`](ABENCDS_DEFINE_ASPECT.html). The syntax [`BIND ASPECT`](ABENCDS_BIND_ASPECT.html) binds the aspect to a CDS view entity, and with the syntax [`INCLUDE`](ABENCDS_INCLUDE_ASPECT.html), individual components of the CDS aspect can be included in the select list of the CDS view entity and CDS projection views.

A new kind of CDS entity is available: the [CDS external entity](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html). CDS external entities can be used to access data from external database systems within the AS ABAP. They are defined using the statement [`DEFINE EXTERNAL ENTITY`](ABENCDS_DEFINE_EXTERNAL_ENTITY.html). The properties of the connection between an external entity and the external system are configured using a [CDS logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html).

For the following built-in functions, the session variable [`$session.client`](ABENCDS_SESSION_VARIABLE_V2.html) must be passed to the optional formal parameter `client` in [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html):

The same holds for usage of these functions in [CDS DDIC-based views](ABENCDS_V1_VIEW_GLOSRY.html).

-   Buffer propagation can be enabled and disabled with the annotation
-   [`AbapCatalog.entityBuffer.propagationAllowed: true|false`](ABENCDS_1859277801_ANNO.html)
-   The propagated fields can be specified in a [CDS propagated buffer](ABENCDS_PROP_BUFFER_GLOSRY.html) defined by
-   [`PROPAGATE VIEW ENTITY BUFFER ON cds_entity ...`](ABENCDS_PROPAGATE_BUFFER.html)

-   [`UNIT_CONVERSION`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html)
-   [`CURRENCY_CONVERSION`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html)
-   [`ABAP_SYSTEM_TIMEZONE`](ABENCDS_TIMEZONE_FUNCTIONS_V2.html)
-   [`ABAP_USER_TIMEZONE`](ABENCDS_TIMEZONE_FUNCTIONS_V2.html)
-   [`TSTMP_TO_DATS`](ABENCDS_DATE_TIME_CONVERSIONS_V2.html)
-   [`TSTMP_TO_TIMS`](ABENCDS_DATE_TIME_CONVERSIONS_V2.html)
-   [`TSTMP_TO_DST`](ABENCDS_DATE_TIME_CONVERSIONS_V2.html)
-   [`DATS_TIMS_TO_TSTMP`](ABENCDS_DATE_TIME_CONVERSIONS_V2.html)

abenabap.html abennews.html abennews-91.html abennews-912.html