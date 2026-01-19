---
title: "ABENMETHOD_FOR_ENTITY_EVENT"
description: |
  ABENMETHOD_FOR_ENTITY_EVENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMETHOD_FOR_ENTITY_EVENT.htm"
abapFile: "ABENMETHOD_FOR_ENTITY_EVENT.html"
keywords: ["update", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "ABENMETHOD", "FOR", "ENTITY", "EVENT"]
---

**RAP event handler method definitions:**

```[`METHODS`](ABAPMETHODS.html) meth [[`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)]\     FOR ENTITY EVENT [[`` `IMPORTING` ``](ABAPMETHODS_GENERAL.html)]\ \{\ [`` `REFERENCE` ``](ABAPMETHODS_PARAMETERS.html)(der_type) | der_type \} FOR ent~evt.```

**RAP event handler method implementations:**

``[`METHOD`](ABAPMETHODS.html) meth.     ...  [`ENDMETHOD`](ABAPMETHODS.html).``

[RAP event handler methods](ABENRAP_EVENT_HANDLER_METH_GLOSRY.html) must be defined and implemented in the private [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of a [local class](ABENLOCAL_CLASS_GLOSRY.html), which is implemented in the [CCIMP include](ABENCCIMP_GLOSRY.html) of a [RAP event handler class](ABENRAP_EVENT_HANDLER_CLASS_GLOSRY.html). The local class must inherit from `CL_ABAP_BEHAVIOR_EVENT_HANDLER`.

When a RAP business event is raised using a [`RAISE ENTITY EVENT`](ABAPRAISE_ENTITY_EVENT.html) ABAP EML statement, the RAP event handler methods are called locally in the system and processed asynchronously.

The following points are relevant concerning the syntax:

For modularization purposes, a single RAP event handler method can handle multiple events. The following code snippet demonstrates the definition of a method that handles three events defined in the BDEF.

METHODS on\_evt FOR ENTITY EVENT \\n  evt1\_type FOR ent~evt1 \\n  evt2\_type FOR ent~evt2 \\n  evt3\_type FOR ent~evt3.

Development guide for the ABAP RESTful Application Programming Model, section about [RAP Business Events](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0b925bc556d4491aad395b21ec2566ff?version=sap_cross_product_abap).

The example [Local Consumption of RAP Business Events](ABENRAP_EVENTS_LOCAL_CONSUME_ABEXA.html) demonstrates the use of RAP event handler methods.

-   RAP event handler methods must be defined as [instance methods](ABENINSTANCE_METHOD_GLOSRY.html) using the `METHODS` keyword.
-   The method name `meth` can be freely chosen.
-   `der_type` specifies the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html). It is an internal table of type [`TYPE TABLE FOR EVENT`](ABAPTYPE_TABLE_FOR.html). If the event is specified with parameters, the BDEF derived type `der_type` contains the keys of [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) ([`%key`](ABAPDERIVED_TYPES_KEY.html)) for which an event has been raised, along with the parameters ([`%param`](ABAPDERIVED_TYPES_PARAM.html)). If the event is specified without parameters, `der_type` contains only the keys. If the RAP event handler class is related to a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), then the keys and parameters are those used in the [interface BDEF](ABENCDS_INTERFACE_BDEF_GLOSRY.html).

-   The name of `der_type` can be chosen freely.
-   The BDEF derived type is [passed by reference](ABENPASS_BY_REFERENCE_GLOSRY.html). Therefore, instead of just specifying the name of the [formal parameter](ABENFORMAL_PARAMETER_GLOSRY.html)\\ `der_type`, the syntax can also be `... REFERENCE(der_type) ...`.

-   The methods are implicitly final, and only importing parameters are possible. The specification of the additions [`FINAL`](ABAPCLASS_OPTIONS.html) and [`IMPORTING`](ABAPMETHODS_GENERAL.html) is optional.
-   `ent` specifies the name of a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html). The events handled by the class must be defined in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). `ent` can also be the name of an [interface BDEF](ABENCDS_INTERFACE_BDEF_GLOSRY.html) that exposes events.
-   The name of the RAP BO entity (or interface BDEF) `ent` is followed by a tilde and the (alias) name of the event `evt`.

-   In a RAP event handler class, a RAP business event can be handled only once, i.e. specifying the parameter for an event in event handler methods more than once is not allowed.
-   Unlike [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) and [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html), RAP event handler methods do not contain [RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html) as implicit changing parameters.
-   The syntax `... FOR EVENT ... FOR` for event handler method declarations is obsolete. Using this syntax generates a syntax warning. See [`METHODS, FOR EVENT, FOR`](ABAPMETHODS_FOR_EVENT_RAP_OBS.html).
-   Method declarations using this syntax are not to be confused with method declarations in the context of non-RAP [events](ABENEVENT_GLOSRY.html): [`METHODS, FOR EVENT`](ABAPMETHODS_EVENT_HANDLER.html).
-   When event handler methods are called, they run through their own RAP transaction, i.e. when they are called, the current phase is the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html). In general, implementations in event handler methods must fulfill the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html) to guarantee transactional consistency. Therefore, implementations can be included in the event handler method that are allowed in the RAP interaction phase right away. However, if your use case requires implementations in such a method that are reserved for the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) and must not occur in the RAP interaction phase, for example, database modifications using ABAP SQL or calling [update function modules](ABENUPDATE_FUNCTION_MODULE_GLOSRY.html), you must explicitly switch in the event handler method implementation to the RAP save sequence by calling [`cl_abap_tx=>save( ).`](ABAPRAP_CL_ABAP_TX.html). Otherwise, a runtime error occurs. For more information, refer to [Restrictions in Transactional Phases](ABAPINVALID_STMTS_IN_TX.html). When performing RAP modify operations in RAP event handler implementations, it is recommended that you catch the `CX_ABAP_BEHV_SAVE_FAILED` exception, allowing you to react on errors caused in the [RAP early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html) or [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html).
-   Since calling `cl_abap_tx=>save( ).` starts the *save* transactional phase, note the following aspects:

-   In a RAP transaction, if the transaction owner, such as an ABAP program, starts the *save* phase without a `COMMIT ENTITIES` statement to initiate the RAP save sequence, it is recommended that you include the `cl_abap_tx=>save( ).` call within a `TRY` block to catch `CX_ABAP_BEHV_SAVE_FAILED`.
-   This exception occurs if saving fails during the early or late save phases. Catching `CX_ABAP_BEHV_SAVE_FAILED` gives access to attributes like `FAILED_ENTITIES` and `REPORTED_ENTITIES`, which list entries added to the RAP response parameters. Errors causing entries in the failed response can result from failed RAP BO instance validations in the early save phase.
-   Generally, exceptions must not leave RAP handler methods, except for RAP event handler methods.

-   Calling `cl_abap_tx=>save( ).` in RAP event handler implementations

-   When RAP event handlers are called, they start in the *modify* transactional phase. Database changes in transactional scenarios require starting the *save* transactional phase. If you need to modify and save RAP BO instances in RAP event handlers, calling `cl_abap_tx=>save( ).` is necessary. Explicit `COMMIT ENTITIES` statements are typically not allowed in handler methods.
-   By catching `CX_ABAP_BEHV_SAVE_FAILED`, you can prevent short dumps and take actions in RAP handler method implementations such as:
-   It is not recommended that you perform cleanup tasks on the transactional buffer - such as correcting failed RAP BO instances and restarting the save - especially when raising custom exceptions.
-   Instead, consider logging the errors to an application log.
-   You can raise custom exceptions inheriting from `CX_ABAP_BEHV_EVENT_HDLR_ERROR` in the `CATCH` block. You can also optionally wrap the raised `CX_ABAP_BEHV_SAVE_FAILED` exception in the `previous` attribute. The raised exceptions are reported to the event framework. **Note:** If corrective tasks are performed for another save, no persistence occurs due to an implicit rollback when raising the custom exception.
-   Only exceptions inheriting from `CX_ABAP_BEHV_EVENT_HDLR_ERROR` may leave RAP event handler method implementations.

-   In addition to consuming RAP business events locally using RAP handler methods, RAP business events can also be consumed outside of the system using the RAP event binding.
-   Consuming RAP business events locally always happens asynchronously in a [bgPF](ABENBGPF_GLOSRY.html) context. If, for example, an ABAP EML `MODIFY` request is made in a local event handler method and it results in an error, there is no opportunity to correct the data in the originating transaction before the subsequent commit due to asynchronous execution. As a result of a failure in the local event processing, all instances are affected and fail, and the `CX_ABAP_BEHV_COMMIT_FAILED` exception is raised. To handle this error, you can implement error handling using the `SAP Application Interface Framework (AIF)` to receive notifications about the failure and restart the processing with the provided instance values.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrap\_events.html