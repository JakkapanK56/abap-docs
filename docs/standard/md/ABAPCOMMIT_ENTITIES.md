---
title: "ABAPCOMMIT_ENTITIES"
description: |
  ABAPCOMMIT_ENTITIES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCOMMIT_ENTITIES.htm"
abapFile: "ABAPCOMMIT_ENTITIES.html"
keywords: ["update", "delete", "loop", "do", "if", "case", "method", "class", "data", "ABAPCOMMIT", "ENTITIES"]
---

1\. ``COMMIT ENTITIES [IN SIMULATION MODE]\ [RESPONSES [`response_param`](ABAPEML_RESPONSE.html)].``\\

2\. ``COMMIT ENTITIES [IN SIMULATION MODE] RESPONSE OF bdef1 [`response_param`](ABAPEML_RESPONSE.html)\ [RESPONSE OF bdef2 [`response_param`](ABAPEML_RESPONSE.html)]\ [...].``

3\. ``COMMIT ENTITIES [IN SIMULATION MODE] RESPONSES [OF dyn_tab]\ [[`response_param`](ABAPEML_RESPONSE.html)].``\\

4\. ``COMMIT ENTITIES BEGIN [IN SIMULATION MODE]\ [\{RESPONSE OF ... | RESPONSES OF ... \}\ [[`response_param`](ABAPEML_RESPONSE.html)]]. [CONVERT KEY OF bdef FROM [TEMPORARY] pre_key TO final_key.]\ \ COMMIT ENTITIES END.``

Triggers the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) and completes the [RAP transaction](ABENRAP_LUW_GLOSRY.html). All transactional changes in the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html), that is, [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) created, modified, or deleted within the RAP transaction, are persisted to the database.

At the end of an ABAP session, the saving of changed or created data to the database must be triggered, which is done by `COMMIT ENTITIES` statements. Otherwise, the changes are lost. `COMMIT ENTITIES` terminates RAP transactions. If the RAP transactions include [RAP modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html), i. e. there were ABAP EML `MODIFY` statements before a `COMMIT ENTITIES` statement, an implicit [`COMMIT WORK`](ABAPCOMMIT.html) is triggered after processing the save sequence.

Therefore, all RAP BO instances that are present in the transactional buffer are persisted to the database. However, `COMMIT ENTITIES` follows an all or nothing approach, i. e. either all instances are valid and correct and all can be saved or none can be saved if at least one instance is invalid.

`COMMIT ENTITIES` statements can be used for [RAP modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html) by [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) to trigger the data persistency but they cannot be used in [ABAP behavior pools](ABENBEHAVIOR_POOL_GLOSRY.html) in ABAP. In case of a natively supported RAP scenario (for example, an SAP Fiori app using [OData](ABENODATA_GLOSRY.html)), the `COMMIT ENTITIES` call is not to be used since it is performed implicitly and automatically by the [RAP transactional engine](ABENRAP_TRANSAC_ENGINE_GLOSRY.html).

`COMMIT ENTITIES` statements set the system field `sy-subrc`. Note that when using `COMMIT ENTITIES` statements, it is not guaranteed that the implicit `COMMIT WORK` will be carried out successfully. In the event of failures during the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html), the RAP saver method [`cleanup_finalize`](ABAPSAVER_CLASS_CLEANUP_FINALIZE.html) is called for all involved [RAP business objects](ABENRAP_BO_GLOSRY.html) to ensure that the transactional buffer is cleared for the current RAP transaction. The RAP save sequence is then terminated without persisting the instances to the database. This is indicated by the value set for the system field `sy-subrc` when executing `COMMIT ENTITIES` statements.

**Note** The following statements are only valid for *COMMIT ENTITIES* statements terminating RAP transactions that include [RAP modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html).

The following variants of the `COMMIT ENTITIES` statement are available:

The following executable examples demonstrate the use of the respective statements.

[`COMMIT ENTITIES`, Short Form](ABAPEMLCOMMIT_ENTITIES_SHORT.html)

[`COMMIT ENTITIES RESPONSE OF`, Long Form](ABAPEMLCOMMIT_ENTITIES_LONG.html)

[`COMMIT ENTITIES RESPONSES`, Dynamic Form](ABAPEMLCOMMIT_ENTITIES_DYN.html)

[`COMMIT ENTITIES BEGIN, END`](ABAPEMLCOMMIT_ENTITIES_LATE.html)

-   [`COMMIT ENTITIES`, Short Form](ABAPEMLCOMMIT_ENTITIES_SHORT.html)
-   The short form of the `COMMIT ENTITIES` statement saves all instances of RAP BOs that are changed within the RAP transaction.
-   [`COMMIT ENTITIES`, Long Form](ABAPEMLCOMMIT_ENTITIES_LONG.html)
-   The long form of the `COMMIT ENTITIES` statement saves all RAP BO instances that are changed within the RAP transaction and provides responses for individual [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html).
-   [`COMMIT ENTITIES OPERATIONS`, Dynamic Form](ABAPEMLCOMMIT_ENTITIES_DYN.html)
-   The dynamic form of the `COMMIT ENTITIES` statement allows the root entities for which the commit should be executed to be specified dynamically.
-   [`COMMIT ENTITIES BEGIN, END`](ABAPEMLCOMMIT_ENTITIES_LATE.html)
-   This form of the `COMMIT ENTITIES` statement is relevant for [`late numbering`](ABENBDL_LATE_NUMBERING.html) scenarios.

-   Using a `COMMIT WORK` statement also triggers the RAP save sequence and saves RAP BO instances from the transactional buffer to the database. However, the use of `COMMIT ENTITIES` statements is preferable in the context of RAP because they offer more features like the retrieval of [responses information](ABAPEML_RESPONSE.html) or [key conversion](ABAPEMLCOMMIT_ENTITIES_LATE.html).
-   `COMMIT ENTITIES` statements are not allowed in [RAP BO providers](ABENRAP_BO_PROVIDER_GLOSRY.html).
-   ABAP EML statements should not be used in loops. Using them can have a performance impact because it can result in multiple single database accesses. There should be only one ABAP EML statement to read the necessary data, and then the data should be modified with an ABAP EML modify request.
-   When using `COMMIT ENTITIES` statements, a check of `sy-subrc` should be included to avoid syntax warnings. If responses are retrieved, it is recommended that the response parameter `failed` is checked so as to react accordingly.
-   If in the RAP interaction phase only read operations are executed and a `COMMIT ENTITIES` statement is specified, only the [`cleanup`](ABENSAVER_METHOD_CLEANUP.html) method is called.
-   Commits in the context of [RAP projection behavior definitions](ABENCDS_PROJ_BDEF_GLOSRY.html) (or [RAP interface behavior definitions](ABENCDS_INTERFACE_BDEF_GLOSRY.html)): RAP BO instances that fail to be committed in the RAP save sequence for the [base RAP BO](ABENRAP_PROJECTED_BO_GLOSRY.html) are returned to the [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html). The messages in the `failed`\\ [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) are automatically mapped to projections.
-   For transactions where RAP is the transaction owner, `COMMIT ENTITIES` statements implicitly enforce [local updates](ABENLOCAL_UPDATE_GLOSRY.html) with [`COMMIT WORK`](ABAPCOMMIT.html), or [`COMMIT WORK AND WAIT`](ABAPCOMMIT.html) if the local update fails. Therefore, the update is either a local update or a synchronous update, but never an asynchronous update. When RAP is involved in a transaction, but RAP is not the transaction owner, for example in the case of [unit tests](ABENUNIT_TEST_GLOSRY.html), it is up to the [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) to choose between a synchronous and an asynchronous update for [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html).

-   [`COMMIT ENTITIES`, Short and Long Form](ABENCOMMIT_ENTITIES_SH_LO_ABEXA.html)
-   [`COMMIT ENTITIES`, Dynamic Form](ABENEML_COMMIT_DYN_ABEXA.html)
-   [`COMMIT ENTITIES BEGIN`, `END` with `CONVERT KEY OF`](ABENCOMMIT_ENTITIES_BEGINEND_ABEXA.html)
-   [`COMMIT ENTITIES IN SIMULATION MODE`](ABENCOMMIT_ENTITIES_SIM_MOD_ABEXA.html)

`**sy-subrc**` **Meaning** 0 The implicit `COMMIT WORK` has been carried out successfully if a RAP transaction that is terminated by a `COMMIT ENTITIES` statement includes [RAP modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html). 4 The implicit `COMMIT WORK` has not been carried out successfully. An issue occurred in the early phase of the RAP save sequence (involved RAP saver methods: `finalize`, `check_before_save`). The value 4 for `sy-subrc` means that there are responses returned by the [`failed`](ABAPEML_RESPONSE.html) parameter because of failures in the RAP save sequence. Transactional changes successfully executed in the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) remain in the transactional buffer. 8 The implicit `COMMIT WORK` has not been carried out successfully. An issue occurred in the late phase of the RAP save sequence (involved RAP saver methods: `save` or `save_modified`). \\
\\
Such an issue can produce inconsistencies which triggers the clearing of the transactional buffer and a `ROLLBACK WORK` internally. A subsequent RAP modify operation can then lead to a runtime error. If the RAP BO consumer is to proceed after an issue in the late phase of the RAP save sequence, an explicit `ROLLBACK ENTITIES` is required. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html