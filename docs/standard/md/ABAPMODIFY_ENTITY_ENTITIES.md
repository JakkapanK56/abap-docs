---
title: "ABAPMODIFY_ENTITY_ENTITIES"
description: |
  ABAPMODIFY_ENTITY_ENTITIES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMODIFY_ENTITY_ENTITIES.htm"
abapFile: "ABAPMODIFY_ENTITY_ENTITIES.html"
keywords: ["select", "update", "delete", "loop", "do", "if", "case", "method", "class", "data", "types", "ABAPMODIFY", "ENTITY", "ENTITIES"]
---

1\. ``MODIFY ENTITY [[IN LOCAL MODE](ABAPIN_LOCAL_MODE.html)|[[`FORWARDING`](ABAPEML_PRIVILEGED.html)]\ [`PRIVILEGED`](ABAPEML_PRIVILEGED.html)] entity [operations](ABAPMODIFY_ENTITY_ENTITIES_OP.html)\ [[`response_param`](ABAPEML_RESPONSE.html)].``

2\. ``MODIFY ENTITIES OF bdef [[IN LOCAL MODE](ABAPIN_LOCAL_MODE.html)|[[`FORWARDING`](ABAPEML_PRIVILEGED.html)]\ [`PRIVILEGED`](ABAPEML_PRIVILEGED.html)]\ ENTITY entity1 [operations](ABAPMODIFY_ENTITY_ENTITIES_OP.html)\ [ENTITY entity2 [operations](ABAPMODIFY_ENTITY_ENTITIES_OP.html)]\ [...]\ [[`response_param`](ABAPEML_RESPONSE.html)].``\\

3\. ``MODIFY ENTITIES [[IN LOCAL MODE](ABAPIN_LOCAL_MODE.html)|[[`FORWARDING`](ABAPEML_PRIVILEGED.html)]\ [`PRIVILEGED`](ABAPEML_PRIVILEGED.html)] OPERATIONS op_tab [[`response_param`](ABAPEML_RESPONSE.html)].``

Used to perform [RAP modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html) on [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html). This includes [standard operations](ABENCRUD_GLOSRY.html) (`CREATE`, `CREATE BY`, `UPDATE`, `DELETE`) and nonstandard operations (actions) using the keyword `EXECUTE`.

The following variants of the `MODIFY` statement can be used to modify RAP BO entities:

When implementing RAP operations, ensure that you comply with [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](ABAPRAP_IMPL_RULES.html).

[`MODIFY ENTITY`, Short Form](ABAPMODIFY_ENTITY_SHORT.html)

[`MODIFY ENTITIES`, Long Form](ABAPMODIFY_ENTITIES_LONG.html)

[`MODIFY ENTITIES OPERATIONS`, Dynamic Form](ABAPMODIFY_ENTITIES_OPERATIONS_DYN.html)

-   [`MODIFY ENTITY`, Short Form](ABAPMODIFY_ENTITY_SHORT.html)
-   The short form of the `MODIFY` statement allows modifying instances of a single entity.
-   [`MODIFY ENTITIES`, Long Form](ABAPMODIFY_ENTITIES_LONG.html)
-   The long form of the `MODIFY` statement allows modifying instances of multiple entities.
-   [`MODIFY ENTITIES OPERATIONS`, Dynamic Form](ABAPMODIFY_ENTITIES_OPERATIONS_DYN.html)
-   The dynamic form of the `MODIFY` statement allows collecting multiple instances to be modified in multiple entities in one `MODIFY` statement.

-   A [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) must not use ABAP EML `MODIFY` statements in the [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html)\\ [`check_before_save`](ABENSAVER_CHECK_BEFORE_SAVE.html), [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html), [`save`](ABENSAVER_METHOD_SAVE.html), [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html) and [`cleanup`](ABENSAVER_METHOD_CLEANUP.html). The statements can only be used in the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) and in the [`finalize`](ABENSAVER_FINALIZE.html) saver method in the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html). Furthermore, ABAP EML `MODIFY` statements are not allowed in read-only [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html).
-   ABAP EML `MODIFY` statements in [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) and [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) trigger the calling of [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR MODIFY`](ABAPHANDLER_METH_MODIFY.html).
-   RAP modify [standard operations](ABENRAP_STANDARD_OPERATION_GLOSRY.html) do not return [result](ABAPEML_RESULT.html) parameters, whereas [non-standard operations](ABENRAP_NSTANDARD_OPERATION_GLOSRY.html) do so. The changed data can be read via a subsequent ABAP EML `READ` statement.
-   RAP BO instances can only be modified if several conditions are met. For example, a modification can be prevented depending on certain specifications in the BDEF, among them control characteristics like (global or instance) [authorization](ABENBDL_AUTHORIZATION.html) and [feature control](ABENBDL_ACTIONS_FC.html), [locking](ABENBDL_LOCKING.html), [ETag](ABENBDL_ETAG.html) or [prechecks](ABENBDL_PRECHECK.html). See more detailed information on the mentioned topics in the Development guide for the ABAP RESTful Application Programming Model, section [Business Object](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/a3ff9dcdb25a4f1a9408422b8ba5fa00?version=sap_cross_product_abap).
-   If ABAP EML modify statements are used outside of behavior pools, for example, in ABAP programs, a [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html) statement is necessary to persist data to the database. If the statement is not provided, there would not be any effect on the database because the modify operations are only performed on the transactional buffer. Hence, a manual triggering of the save sequence is required. This is valid for all modify operations. Note that RAP supports the established [SAP LUW](ABENSAP_LUW_GLOSRY.html) concept that incorporates [`COMMIT WORK`](ABAPCOMMIT.html). In RAP, `COMMIT ENTITIES` basically includes `COMMIT WORK` and provides additional information.
-   When executing independent modify requests, there is no dedicated processing sequence. However, the processing sequence is relevant if the modify requests are dependent, for example, when using [`%cid`](ABAPDERIVED_TYPES_COMP.html) or [`%cid_ref`](ABAPDERIVED_TYPES_COMP.html) or in case of [create-by-association operations](ABENRAP_CBA_OPERATION_GLOSRY.html) that can be dependent on a previous operation. To ensure the processing sequence when executing independent modify requests, it is recommended that separate EML statements are used. In the interest of a better performance, requests should preferably be executed in a bundled way.
-   ABAP EML statements should not be used in loops. Using them can have a performance impact because it can result in multiple single database accesses. There should be only one ABAP EML statement to read the necessary data, and then the data should be modified with an ABAP EML modify request.
-   A special `MODIFY ENTITY`/`MODIFY ENTITIES` variant exists that includes the keyword `AUGMENTING` with which incoming requests can be modified on the projection layer before data reaches the transactional buffer. The variant can currently only be used for projections. See the details in the documentation for [`MODIFY AUGMENTING ENTITY, ENTITIES`](ABAPMODIFY_AUG_ENTITY_ENTITIES.html).
-   In case of a non-dynamic ABAP EML `MODIFY` statement without the addition `IN LOCAL MODE` and without specifying the `FAILED` response parameter, it is recommended that the `FAILED` response parameter is specified and that proper error handling on the [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) side is implemented. Otherwise, a syntax warning occurs, which can be suppressed using the pragma `##EML_FAILED_MISSING_OK`.
-   CDS projection views of the type [transactional query](ABENCDS_TRANSACTIONAL_PV_GLOSRY.html) or [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) can define a `WHERE` clause to filter the result set. By default, this `WHERE` clause in the projection layer is ignored when a BDEF is accessed with EML `MODIFY` requests. This means that it is possible to read and modify entity instances that are not part of the projection BDEF's or interface BDEF's result set. This behavior may pose a security risk.
-   To mitigate this risk, a dedicated BDEF syntax is available to enforce evaluation of the `WHERE` clause defined in the projection layer: [`with managed instance filter`](ABENBDL_MNGD_INSTANCE_CHECK_PROJ.html). For further details, see [RAP - `with managed instance filter`](ABENBDL_MNGD_INSTANCE_CHECK_PROJ.html).

-   The example [ABAP EML - `MODIFY`, Variants](ABENEML_MODIFY_ALTERNATIVES_ABEXA.html) demonstrates the different variants with a simple managed RAP BO.
-   For more examples, see [Examples for ABAP EML `MODIFY`](ABAPEML_MODIFY_EXAMPLES_ABEXAS.html).
-   The example [Example for RAP Handler Methods](ABENRAP_HANDLER_METHODS_ABEXA.html) demonstrates various RAP handler methods within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled. It includes ABAP EML requests with `MODIFY` in a RAP consumer and provider.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html