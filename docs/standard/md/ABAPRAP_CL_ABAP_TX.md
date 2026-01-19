---
title: "ABAPRAP_CL_ABAP_TX"
description: |
  ABAPRAP_CL_ABAP_TX - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRAP_CL_ABAP_TX.htm"
abapFile: "ABAPRAP_CL_ABAP_TX.html"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "ABAPRAP", "ABAP"]
---

The [static methods](ABENSTATIC_METHOD_GLOSRY.html) of the `CL_ABAP_TX` class can be used to explicitly activate [transactional phases](ABENTR_PHASE_GLOSRY.html), thereby controlling the status of the runtime environment and enabling transactional consistency checks with the [controlled SAP LUW](ABENCONTROLLED_SAP_LUW_GLOSRY.html).

The following methods are available:

Calling the `MODIFY` and `SAVE` methods:

Provided that a transactional phase has been set, checks in a controlled SAP LUW are applied in the following cases:

-   `MODIFY`:

-   Activates the *modify* transactional phase.
-   Once the *modify* phase is activated, you can switch to the *save* phase by explicitly activating it.

-   `SAVE`:

-   Activates the *save* transactional phase.
-   Once the *save* phase is activated, you cannot switch to the *modify* phase by explicitly activating it.
-   When the [transaction owner](ABENTRANSACTION_OWNER_GLOSRY.html) calls the method, the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) is triggered, but without a final commit even if changes to a [RAP business object](ABENRAP_BO_GLOSRY.html) have been performed.

-   The scope of the *save* transactional phase extends to the end of the [internal session](ABENINTERNAL_SESSION_GLOSRY.html). Other than ending the internal session, there is no way to reset the transactional phase.
-   The controlled SAP LUW is implicitly supported by [RAP](ABENARAP_GLOSRY.html). [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html) and [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) implicitly have a transactional contract assigned which is checked for violations of transactional consistency. Therefore, the explicit activation of the transactional phases is usually not needed.
-   The transactional phases are implicitly set when [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html) are consumed locally. This means that [RAP event handler methods](ABENRAP_EVENT_HANDLER_METH_GLOSRY.html) are started in the *modify* phase when called. If you want to implement database modifications in [RAP event handler method](ABENRAP_EVENT_HANDLER_METH_GLOSRY.html) implementations, you must explicitly activate the *save* phase to avoid causing errors detected by the controlled SAP LUW.
-   The methods can be used to check against [classified APIs](ABENCLASSIFIED_API_GLOSRY.html)
-   When a [transactional phase](ABENTR_PHASE_GLOSRY.html) has been explicitly set by methods of the `CL_ABAP_TX` class, the [transaction owner](ABENTRANSACTION_OWNER_GLOSRY.html) is allowed to execute a commit or rollback statement. In the contexts of [RAP](ABENARAP_GLOSRY.html) (that is, where RAP is the transaction owner, for example, in [handler](ABENABP_HANDLER_METHOD_GLOSRY.html) and [saver methods](ABENABP_SAVER_METHOD_GLOSRY.html)), local consumption of [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html), [bgPF](ABENBGPF_GLOSRY.html), and [classified APIs](ABENCLASSIFIED_API_GLOSRY.html), commit or rollback statements are not allowed.
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

-   In the context of [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html), contract violations result in an unconditional [runtime error](ABENRUNTIME_ERROR_GLOSRY.html). This occurs for all [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) with [ABAP language version](ABENABAP_VERSION_GLOSRY.html)\\ [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html). It also occurs for repository objects of a different ABAP language version in an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html) configured for ABAP Cloud. Note that the ABAP language version of a repository object can either be set explicitly or derived implicitly, for example from the package or software component.
-   In [RAP](ABENARAP_GLOSRY.html) or when locally consuming [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html), for example, checks are applied automatically. In RAP, if the [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) is specified with [`strict(2)`](ABENBDL_STRICT.html) mode, contract violations result in an unconditional runtime error. Without `strict(2)`, violations are logged.
-   In other contexts (for example, non-RAP or non-cloud contexts), the [checkpoint group](ABENCHECKPOINT_GROUP_GLOSRY.html)\\ `CC_STMT` can be enabled for the checks to be performed, otherwise the controlled SAP LUW has no effect. This is particularly relevant for [classic ABAP](ABENCLASSIC_ABAP_GLOSRY.html).

-   [Restrictions in Transactional Phases](ABAPINVALID_STMTS_IN_TX.html)
-   ABAP Concepts, topic [Controlled SAP LUW](https://help.sap.com/docs/ABAP_Cloud/f2961be2bd3d403585563277e65d108f/80fe04141e30456c80cc90c5cc838e94?version=sap_cross_product_abap)

-   The example [`CL_ABAP_TX` and API Classifications](ABENCL_ABAP_TX_ABEXA.html) demonstrates the explicit setting of transactional phases.

... \\n\\ \\ncl\_abap\_tx=>modify( ). \\n "The modify transactional phase is activated. \\n "For example, database modification operations are not allowed. \\n... \\n\\ \\ncl\_abap\_tx=>save( ). \\n "The save transactional phase is activated. \\n "Unlike above, database modification operations are allowed here. \\n... abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abensap\_luw.html abencontrolling\_sap\_luw.html