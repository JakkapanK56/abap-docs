---
title: "ABAPREAD_ENTITY_ENTITIES"
description: |
  ABAPREAD_ENTITY_ENTITIES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPREAD_ENTITY_ENTITIES.htm"
abapFile: "ABAPREAD_ENTITY_ENTITIES.html"
keywords: ["select", "loop", "do", "if", "method", "data", "ABAPREAD", "ENTITY", "ENTITIES"]
---

1\. ``READ ENTITY [[IN LOCAL MODE](ABAPIN_LOCAL_MODE.html)|[[`FORWARDING`](ABAPEML_PRIVILEGED.html)]\ [`PRIVILEGED`](ABAPEML_PRIVILEGED.html)] entity [operations](ABAPREAD_ENTITY_ENTITIES_OP.html)\ [[`response_param`](ABAPEML_RESPONSE.html)].``

2\. ``READ ENTITIES OF bdef[[IN LOCAL MODE](ABAPIN_LOCAL_MODE.html)|[[`FORWARDING`](ABAPEML_PRIVILEGED.html)]\ [`PRIVILEGED`](ABAPEML_PRIVILEGED.html)]\ ENTITY entity1 [operations](ABAPREAD_ENTITY_ENTITIES_OP.html)\ [ENTITY entity2 [operations](ABAPREAD_ENTITY_ENTITIES_OP.html)]\ [...]\ [[`response_param`](ABAPEML_RESPONSE.html)].``\\

3\. ``READ ENTITIES [[IN LOCAL MODE](ABAPIN_LOCAL_MODE.html)|[[`FORWARDING`](ABAPEML_PRIVILEGED.html)]\ [`PRIVILEGED`](ABAPEML_PRIVILEGED.html)] OPERATIONS op_tab [[`response_param`](ABAPEML_RESPONSE.html)].``

Used to perform read-only operations on [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html). Read operations always return a result and can be performed on RAP BO entities by default (except for the [abstract](ABENBDL_ABSTRACT.html) implementation type) provided that the entities are part of a [behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) after a declaration using [`define behavior for`](ABENBDL_DEFINE_BEH.html).

The following variants of the `READ` statement can be used to read from RAP BO entities:

When implementing RAP operations, ensure that you comply with [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](ABAPRAP_IMPL_RULES.html).

[`READ ENTITY`, Short Form](ABAPREAD_ENTITY_SHORT.html)

[`READ ENTITIES`, Long Form](ABAPREAD_ENTITIES_LONG.html)

[`READ ENTITIES OPERATIONS`, Dynamic Form](ABAPREAD_ENTITIES_OPERATIONS.html)

-   [`READ ENTITY`, Short Form](ABAPREAD_ENTITY_SHORT.html)
-   The short form of the `READ` statement allows reading multiple instances of a single entity.
-   [`READ ENTITIES`, Long Form](ABAPREAD_ENTITIES_LONG.html)
-   The long form of the `READ` statement allows reading multiple instances of multiple entities.
-   [`READ ENTITIES OPERATIONS`, Dynamic Form](ABAPREAD_ENTITIES_OPERATIONS.html)
-   The dynamic form of the `READ` statement allows collecting multiple instances to be read in multiple entities in one `READ` statement.

-   ABAP EML is used to read RAP BO node instances. From a RAP BO consumer perspective, the returned data of read operations include the current transactional image, i. e. the currently persisted values in the database and, additionally, the still unsaved changes from the current [LUW](ABENLUW_GLOSRY.html).
-   ABAP EML `READ` statements in [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) and [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) trigger the calling of [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR READ`](ABAPHANDLER_METH_READ.html).
-   ABAP EML statements should not be used in loops. Using them can have a performance impact because it can result in multiple single database accesses. There should be only one ABAP EML statement to read the necessary data, and then the data should be modified with an ABAP EML modify request.
-   CDS projection views of the type [transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) or [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) can define a `WHERE` clause to filter the result set. By default, this `WHERE` clause in the projection layer is ignored when a BDEF is accessed with EML `READ` requests. This means that it is possible to read and modify entity instances that are not part of the projection BDEF's or interface BDEF's result set. This behavior may pose a security risk.
-   To mitigate this risk, a dedicated BDEF syntax is available to enforce evaluation of the `WHERE` clause defined in the projection layer: [`with managed instance filter`](ABENBDL_MNGD_INSTANCE_CHECK_PROJ.html). For further details, see [RAP - `with managed instance filter`](ABENBDL_MNGD_INSTANCE_CHECK_PROJ.html).

-   The example [ABAP EML - `READ`, Variants](ABENEML_READ_ALTERNATIVES_ABEXA.html) demonstrates the different variants with a simple managed RAP BO.
-   For more examples, see [Examples for ABAP EML `READ`](ABAPEML_READ_EXAMPLES_ABEXAS.html).

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html