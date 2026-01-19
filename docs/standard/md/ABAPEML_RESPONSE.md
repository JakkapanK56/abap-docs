---
title: "ABAPEML_RESPONSE"
description: |
  ABAPEML_RESPONSE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEML_RESPONSE.htm"
abapFile: "ABAPEML_RESPONSE.html"
keywords: ["do", "if", "case", "method", "data", "types", "ABAPEML", "RESPONSE"]
---

`... [FAILED failed_resp]\      [MAPPED mapped_resp]\      [REPORTED reported_resp] ...`

Used as part of ABAP EML statements to retrieve information on the following:

The following table shows which responses are possible for the respective ABAP EML statements:

The specification of the operands `failed_resp`, `mapped_resp`, and `reported_resp` after the respective keyword depends on the context, i. e. which forms of the ABAP EML statements are used:

See further information and rules on response parameters in implementations of the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) in the Development guide for the ABAP RESTful Application Programming Model, section [General RAP BO Implementation Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/1040b81372d44ed38b07a409fa0e1769?version=sap_cross_product_abap).

-   Failures, i. e. operations that could not get processed (`FAILED failed_resp`)
-   Key mapping information (`MAPPED mapped_resp`)
-   Returned error messages (`REPORTED reported_resp`)

-   [`response_param`, Nondynamic Forms of ABAP EML Statements](ABAPEML_RESPONSES.html).
-   Use of the response parameters with nondynamic (i. e. short or long) forms of ABAP EML statements, for example, [`MODIFY ENTITY`](ABAPMODIFY_ENTITY_SHORT.html) or [`MODIFY ENTITIES`](ABAPMODIFY_ENTITIES_LONG.html).
-   [`response_param`, Dynamic Forms of ABAP EML Statements](ABAPEML_RESPONSES_DYN.html).
-   Use of the response parameters with the dynamic forms of the ABAP EML statements, for example [`MODIFY ENTITIES OPERATIONS`](ABAPMODIFY_ENTITIES_OPERATIONS_DYN.html) or [`READ ENTITIES OPERATIONS`](ABAPREAD_ENTITIES_OPERATIONS.html).

-   The operands `failed_resp` etc. can be constructed inline using the declaration operators [`DATA`](ABENDATA_INLINE.html) and [`FINAL`](ABENFINAL_INLINE.html).
-   If there is no response returned, for example, an operation is successful, there are no entries in the `failed_resp` parameter.
-   The `reported_resp` operand contains the component [`%msg`](ABAPDERIVED_TYPES_MSG.html). It is of type `REF TO if_abap_behv_message` (which contains `if_t100_dyn_msg`). If no custom implementation of this interface is required, the inherited method `new_message` (or `new_message_with_text`) can be used as a standard implementation.
-   The specification of an operand for `MAPPED` is required for create operations including [UUID](ABENUUID_GLOSRY.html) and in case of early internal numbering. It cannot be specified in external numbering scenarios. In late numbering scenarios, the [`CONVERT KEY`](ABAPEMLCOMMIT_ENTITIES_LATE.html) statement can be used. For further information, see the Development Guide for the ABAP RESTful Application Programming Model, section [Numbering](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/d85aec25222145f0b0cbbe8b02db51f0?version=sap_cross_product_abap).
-   For `MODIFY` statements with the addition [`AUGMENTING`](ABAPMODIFY_AUG_ENTITY_ENTITIES.html), the additions `FAILED`, `MAPPED` or `REPORTED` cannot be used.
-   When specifying the `REPORTED` response parameter for an ABAP EML `READ` request, the related [RAP state messages](ABENRAP_STATE_MES_GLOSRY.html) of the instances and child entities of a [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html) are returned for the instances with the keys specified. This leads to increased runtime and, usually, retrieving the messages of the `REPORTED` response parameter for read requests is not required. If the read request is triggered by a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) and an entity instance contains a state message, the component [`%state_area`](ABAPDERIVED_TYPES_STATE_AREA.html) of the `REPORTED` response contains `%STATE` as an indicator for state messages. When using ABAP EML `READ` statements with the addition `IN LOCAL MODE` in behavior implementations, the original value of `%state_area` can be retrieved. See the example [RAP Messages: Transition and State Messages](ABENRAP_MESSAGES_ABEXA.html).
-   In case of a non-dynamic ABAP EML `MODIFY` statement without the addition `IN LOCAL MODE` and without specifying the `FAILED` response parameter, it is recommended that the `FAILED` response parameter is specified and that proper error handling on the [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) side is implemented. Otherwise, a syntax warning occurs, which can be suppressed using the pragma `##EML_FAILED_MISSING_OK`.

-   The example [ABAP EML - Responses](ABENEML_RESPONSES_ABEXA.html) demonstrates response parameters using modify operations to change a simple managed RAP BO.
-   The example [ABAP EML - Responses (Dynamic Forms of ABAP EML Statements](ABENEML_RESPONSES_DYN_ABEXA.html)) demonstrates the response parameters with the dynamic forms of read and modify operations in the context of a simple managed RAP BO.

**EML statement** `FAILED` `MAPPED` `REPORTED`\\ [`MODIFY ENTITY, ENTITIES`](ABAPMODIFY_ENTITY_ENTITIES.html) X X X [`READ ENTITY, ENTITIES`](ABAPREAD_ENTITY_ENTITIES.html) X X [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html) X X [`GET PERMISSIONS`](ABAPGET_PERMISSIONS.html) X X [`SET LOCKS`](ABAPSET_LOCKS_ENTITY.html) X X abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapcommon\_eml\_elements.html