---
title: "ABENNEWS-816-ABAP_CDS"
description: |
  ABENNEWS-816-ABAP_CDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-816-ABAP_CDS.htm"
abapFile: "ABENNEWS-816-ABAP_CDS.html"
keywords: ["select", "insert", "update", "delete", "if", "try", "method", "data", "types", "ABENNEWS", "816", "ABAP", "CDS"]
---

[1\. Extended Cast Matrix](#ABAP_MODIFICATION_1@4@)

[2\. New Analytical Scalar Functions](#ABAP_MODIFICATION_2@4@)

[3\. CDS Propagated Buffer](#ABAP_MODIFICATION_3@4@)

[4\. CDS Aspects](#ABAP_MODIFICATION_4@4@)

[5\. CDS External Entities](#ABAP_MODIFICATION_5@4@)

[6\. Writable CDS External Entities](#ABAP_MODIFICATION_6@4@)

[7\. Client Parameter in SQL Functions](#ABAP_MODIFICATION_7@4@)

[8\. Client Safety of CDS Table Functions](#ABAP_MODIFICATION_8@4@)

[9\. CDS Enumerated Elements in CDS Conditions](#ABAP_MODIFICATION_9@4@)

[10. Support of Data Types in Logical Expressions with `IS INITIAL`](#ABAP_MODIFICATION_10@4@)

[11\. CDS Delegated Buffers](#ABAP_MODIFICATION_11@4@)

[12\. Writable CDS View Entities](#ABAP_MODIFICATION_12@4@)

[13\. CDS Table Entities](#ABAP_MODIFICATION_13@4@)

[14\. CDS Table Entity, Table Buffering](#ABAP_MODIFICATION_14@4@)

[15\. CDS Service Definitions Can Now Expose AMDP Procedure Implementations](#ABAP_MODIFICATION_15@4@)

[16\. New Reference Type for Annotations](#ABAP_MODIFICATION_16@4@)

In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) and in [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), [casting](ABENCDS_CAST_EXPRESSION_V2.html) from the data type `CURR` into the data types `DECFLOAT16` and `DECFLOAT34` is now possible.

The following [analytical scalar functions](ABENCDS_ANA_SCALAR_GLOSRY.html) are available as of ABAP release 8.16:

For a complete list, see the topic [ABAP CDS - Analytical Scalar Functions](ABENCDS_ANA_SCALAR_FUNCTION.html).

[CDS buffer propagation](ABENCDS_BUFFER_PROPAGATION_GLOSRY.html) can be defined for [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) and [CDS transactional queries](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) now:

[CDS aspects](ABENCDS_ASPECTS.html) can now be used to define reusable elements of CDS entities using the syntax [`DEFINE ASPECT`](ABENCDS_DEFINE_ASPECT.html). The syntax [`BIND ASPECT`](ABENCDS_BIND_ASPECT.html) binds the aspect to a CDS view entity, and with the syntax [`INCLUDE`](ABENCDS_INCLUDE_ASPECT.html), individual components of the CDS aspect can be included in the select list of the CDS view entity and CDS projection views.

A new kind of CDS entity is available: the [CDS external entity](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html). CDS external entities can be used to access data from external database systems within the AS ABAP. They are defined using the statement [`DEFINE EXTERNAL ENTITY`](ABENCDS_DEFINE_EXTERNAL_ENTITY.html). The properties of the connection between an external entity and the external system are configured using a [CDS logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html).

[CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) can now be defined as [writable](ABENWRITABLE_EE_GLOSRY.html) using the syntax `[WRITABLE](ABENCDS_WRITABLE_EE.html)`. Writable external entities allow modifying data on external database systems using the [ABAP SQL](ABENABAP_SQL_GLOSRY.html)\\ [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html) operations. An [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) is required to establish a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) and enable the [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) for write access.

For the following built-in functions, the session variable [`$session.client`](ABENCDS_SESSION_VARIABLE_V2.html) must be passed to the optional formal parameter `client` in [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html):

The same holds for usage of these functions in [CDS DDIC-based views](ABENCDS_V1_VIEW_GLOSRY.html).

The annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)` declares a CDS table function explicitly as [client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html) and ensures the corresponding checks.

[CDS enumerated elements](ABENCDS_ENUM_ELEMENT_GLOSRY.html) are now also supported as left-hand operands in [logical expressions](ABENLOGICAL_EXPRESSION_GLOSRY.html). For more details, see the topic [CDS TDL - Using CDS Enumerated Types](ABENCDS_USE_ENUM_TYPE.html).

In logical expressions with the operator [`INITIAL`](ABENCDS_COND_EXPR_INITIAL_V2.html), the left-hand operand can now also have one of the following data types: `RAW`, `DECFLOAT16`, `DECFLOAT34`, `DATN`, `TIMN`, `UTCL`. This applies to all CDS entities except for [CDS DDIC-based view](ABENCDS_V1_VIEW_GLOSRY.html).

[CDS delegated buffers](ABENCDS_DEL_BUFFER_GLOSRY.html) can now be defined for [CDS view entities](ABENCDS_V2_VIEWS.html) using the syntax `DEFINE VIEW ENTITY BUFFER ON ... cds_entity [TYPE DELEGATED](ABENCDS_DEFINE_DELEGATED_BUFFER.html)`. Delegated buffers delegate the buffer usage of a CDS view entity to the buffer of its base object, which can improve performance.

CDS view entities can now be defined as writable using the syntax `\ [WRITABLE](ABENCDS_DEFINE_WRTBL_VIEW_V2.html)`. Some restrictions apply, which are listed in the respective chapter.

A new kind of CDS entity is available: the [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html). A CDS table entity defines a database table in ABAP CDS using the statement [`DEFINE TABLE ENTITY`](ABENCDS_DEFINE_TABLE_ENTITY.html). CDS table entities are the [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html) successor of [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html).

[Table buffering](ABENTABLE_BUFFERING_GLOSRY.html) can be defined for [CDS table entities](ABENCDS_TABLE_ENTITY_GLOSRY.html) now:

Table buffering can be defined differently for the layers core, localization, industry, partner and customer.

The new keyword [`EXPOSE METHOD`](ABENSRVD_DEFINE_SERVICE.html) can now be used in [CDS service definitions](ABENCDS_SERVICE_DEFINITION_GLOSRY.html) for exposing [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) for consumption in a [business service](ABENBS_GLOSRY.html).

A new [reference type](ABENCDS_F1_DEFINE_ANNOTATION_TYPE.html) for annotations is available:

-   [`LN`](ABENCDS_ANA_SCALAR_FUNCTION.html)
-   [`LOG`](ABENCDS_ANA_SCALAR_FUNCTION.html)
-   [`EXPONENTIAL`](ABENCDS_ANA_SCALAR_FUNCTION.html)
-   [`POWER`](ABENCDS_ANA_SCALAR_FUNCTION.html)

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

-   Table buffering can be enabled and disabled with the annotation
-   [`@AbapCatalog.entityBuffer.definitionAllowed: true|false`](ABENCDS_TABLE_ENTITY_BUFFERING.html)
-   The [buffering type](ABENBUFFER_TYPE.html) can be specified with a CDS table entity buffer defined by
-   [`DEFINE TABLE ENTITY BUFFER ON cds_table_entity ...`](ABENCDS_DEFINE_VIEW_ENTITY_BUFFER.html)

-   `DevelopmentObjectRef`

abenabap.html abennews.html abennews-81.html abennews-816.html