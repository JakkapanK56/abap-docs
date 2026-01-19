---
title: "ABAPEMLCOMMIT_ENTITIES_LATE"
description: |
  ABAPEMLCOMMIT_ENTITIES_LATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEMLCOMMIT_ENTITIES_LATE.htm"
abapFile: "ABAPEMLCOMMIT_ENTITIES_LATE.html"
keywords: ["delete", "if", "case", "method", "data", "types", "ABAPEMLCOMMIT", "ENTITIES", "LATE"]
---

```COMMIT ENTITIES BEGIN [IN SIMULATION MODE]\                        [\{RESPONSES [`` `response_param` ``](ABAPEML_RESPONSE.html)\}\                         |\ \{RESPONSE OF ... [`` `response_param` ``](ABAPEML_RESPONSE.html)\}\                         |\ \{RESPONSES OF ... [`` `response_param` ``](ABAPEML_RESPONSE.html)\}].    ...    [`[CONVERT KEY OF bdef`](ABAPCONVERT_KEY.html)\      [`FROM [TEMPORARY] pre_key`](ABAPCONVERT_KEY.html)\      [`TO final_key.`](ABAPCONVERT_KEY.html)]\    ...  COMMIT ENTITIES END.```

[1. `... IN SIMULATION MODE`](#ABAP_ADDITION_1@3@)

[2. `... RESPONSES response_param.`](#ABAP_ADDITION_2@3@)

[3. `... RESPONSE OF ... response_param.`](#ABAP_ADDITION_3@3@)

[4. `... RESPONSES OF ... response_param.`](#ABAP_ADDITION_4@3@)

Triggers the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) and completes the [RAP transaction](ABENRAP_LUW_GLOSRY.html). All transactional changes in the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html), that is, [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) created, modified, or deleted within the RAP transaction, are persisted to the database. This variant is relevant for [RAP modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html) on entities for which [`late numbering`](ABENBDL_LATE_NUMBERING.html) has been enabled. It is used to get the final keys from the preliminary keys.

For [RAP modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html) on entities for which [late numbering](ABENRAP_LATE_NUMBERING_GLOSRY.html) has been enabled, only preliminary identifiers have been assigned, for example [`%pid`](ABAPDERIVED_TYPES_PID.html) or temporary keys. Those preliminary identifiers are converted to final keys when calling the [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html)\\ [RAP saver method](ABENABP_SAVER_METHOD_GLOSRY.html) as part of the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html). If your use case is to retrieve the final keys of the new instances, this `COMMIT ENTITIES` variant defines a scope in which the EML statement [`CONVERT KEY OF`](ABAPCONVERT_KEY.html) can be used to retrieve the final keys from the preliminary keys.

The purpose of the syntax parts is the following:

Used to process a save in simulation mode. See more information in topic [`COMMIT ENTITIES`, `IN SIMULATION MODE`](ABAPCOMMIT_ENTITIES_SIMULATION.html).

Used for retrieving information returned by the response parameters of [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html). For more information on `response_param`, see [here](ABAPEML_RESPONSE.html).

Used for retrieving information returned by the response parameters of [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html). For more information on `response_param`, see [here](ABAPEML_RESPONSE.html).

In this case, it is the [long form](ABAPEMLCOMMIT_ENTITIES_LONG.html) with which multiple root entities can be specified.

Used for retrieving information returned by the response parameters of [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html). For more information on `response_param`, see [here](ABAPEML_RESPONSE.html).

In this case, it is the [dynamic form](ABAPEMLCOMMIT_ENTITIES_DYN.html).

The example [`COMMIT ENTITIES BEGIN`, `END` with `CONVERT KEY OF`](ABENCOMMIT_ENTITIES_BEGINEND_ABEXA.html) demonstrates the use of this `COMMIT ENTITIES` statement including `CONVERT KEY OF`.

-   For general hints on using the statement see the topic [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html).
-   `COMMIT ENTITIES` statements are not allowed in [RAP BO providers](ABENRAP_BO_PROVIDER_GLOSRY.html).
-   When using `COMMIT ENTITIES` statements, a check of `sy-subrc` should be included to avoid syntax warnings. If responses are retrieved, it is recommended that the response parameter `failed` is checked so as to react accordingly. See the topic [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html) for more information. If this variant is used, `sy-subrc` should be checked after the statement with the addition `BEGIN`.

**Syntax Part** **Purpose**\\ `COMMIT ENTITIES BEGIN ...` Opens the commit scope. `COMMIT ENTITIES END.` Closes the commit scope. With the closing, all information on keys that are relevant for operations performed beforehand are lost. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapcommit\_entities.html