---
title: "ABENBDL_VALIDATIONS"
description: |
  ABENBDL_VALIDATIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_VALIDATIONS.htm"
abapFile: "ABENBDL_VALIDATIONS.html"
keywords: ["select", "update", "delete", "loop", "do", "while", "if", "case", "method", "class", "data", "ABENBDL", "VALIDATIONS"]
---

`validation ValName on save \{ CUD1 |\ \{field Field1\};                             [ CUD2;  ...; ]  [field Field2; ...] \}`

A [RAP validation](ABENRAP_VALIDATION_GLOSRY.html) checks the consistency of [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) based on trigger conditions. A validation is automatically invoked by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) if the trigger condition of the validation is fulfilled. Trigger conditions can be [modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html) ([create, update, delete](ABENBDL_STANDARD_OPERATIONS.html)) `CUD1; CUD2; ...`, or modified fields `Field1; Field2; ...`. Validations are invoked during the [save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) at the end of a transaction and this is indicated by the mandatory addition `on save`. An invoked validation can reject inconsistent instance data from being saved and return [messages](ABENRAP_MESSAGE_GLOSRY.html) to the consumer. Validations must be implemented in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR VALIDATE`](ABAPHANDLER_METH_VALIDATE.html) in the local [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html).

The name `ValName` must comply with the general naming rules for RAP behavior definitions described in the topic [RAP BDL - General Syntax Rules](ABENBDL_GENERAL_SYNTAX_RULES.html). In particular, is can have a maximum of 30 characters.

There can be one or more trigger conditions. The trigger conditions can be changes of field values or the execution of one of the [standard operations](ABENBDL_STANDARD_OPERATIONS.html)\\ `create`, `update`, or `delete`. When one of these operations is executed for a [draft instance](ABENRAP_DRAFT_INSTANCE_GLOSRY.html) or for an [active instance](ABENRAP_ACTIVE_INSTANCE_GLOSRY.html), validations with the respective trigger operations are triggered. The validation is triggered if at least one trigger condition is fulfilled.

If a validation fails for a certain entity instance, the following effect takes place:

Development guide for the ABAP RESTful Application Programming Model, section about [Validations](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/171e26c36cca42699976887b4c8a83bf?version=sap_cross_product_abap).

The following example shows a managed BDEF that defines the validation `ValidateBuyerId`.

The validation is implemented in the ABAP behavior pool. It checks if the buyer ID specified in a sales order is valid by checking whether this buyer ID exists in the database table that lists all business partners. It is triggered as soon as the field `BuyerId` is changed. If the buyer ID is not valid, the data changes are rejected and An error message is returned.

**EML access 1: Valid instances are committed to the database, for invalid instances, an error message is returned.**

The class `CL_DEMO_CDS_VALIDATION` accesses the business object using [EML](ABENEML_GLOSRY.html). It creates three BO instances - one of them is valid, two are invalid. The valid entity instance is committed to the database, while for the invalid instances, error messages are returned. The valid entity instance is created in a different RAP transaction than the invalid ones. If all three entity instances were created in one RAP transaction - in this case, with the same `COMMIT ENTITIES` statement - all three of them would be rejected.

Result: Valid instances are committed to the database, for invalid instances, an error message is returned.

**EML access 2: If a RAP transaction contains only one inconsistent instance, the complete content of the transactional buffer is rejected.**

The class `CL_DEMO_CDS_VALIDATION_1` demonstrates that validations accept or reject data changes per RAP transaction. It creates the same three BO instances as the report `DEMO_CDS_VALIDATION`, one of them valid, the other two invalid.

Code snippet:

Since this RAP transaction contains two inconsistent instances, all data changes are rejected, even the valid instance.

Result: The valid instance is not committed to the database.

**EML access 3: If an invalid instance is not corrected or deleted proactively, no further data changes are possible.**

The class `CL_DEMO_CDS_VALIDATION_2` demonstrates how an invalid instance blocks further changes:

Code snippet:

Result: Only the first valid instance is committed to the database. The second valid instance is blocked.

The example above is explained in detail in the executable example [RAP BDL - validation](ABENBDL_VALIDATION_ABEXA.html).

-   `create`: The validation is executed when an instance is created.
-   `update`: The validation is executed when an instance is updated.
-   **Note** Update works only in combination with the trigger operation `create`.
-   `delete`: The validation is executed when an instance is deleted.
-   `field`: The validation is executed when the value of the specified field(s) `Field1, Field2, ...` are changed by a create or update operation. The fields that are used for the trigger conditions must belong to the same RAP BO entity the validation is assigned to.
-   **Note** If a field is tagged with the [RAP field characteristic](ABENRAP_FIELD_CHAR_GLOSRY.html)\\ [`notrigger[:warn]`](ABENBDL_FIELD_CHAR.html), it must not be used in a trigger condition.

-   The operation fails and the complete content of the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) of the current [RAP transaction](ABENRAP_LUW_GLOSRY.html) is rejected. A commit to the database happens only if all data changes are consistent. One inconsistency leads to a rejection of all the content in the transactional buffer.
-   No further data changes are possible as long as the invalid instances aren't corrected. An invalid entity instance must either be corrected using an [update operation](ABENBDL_STANDARD_OPERATIONS.html), or the transactional buffer must be cleared using the EML statement [`ROLLBACK ENTITIES`](ABAPROLLBACK_ENTITIES.html). The reason for this is that the [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html) statement aborts the save sequence in case of invalid instances and the transactional buffer is not emptied.
-   An error message can be written to the [`reported`](ABAPEML_RESPONSE.html) structure of the [`MODIFY ENTITIES`](ABAPMODIFY_ENTITY_ENTITIES.html) statement.
-   The keys of the failed instances can be written to the [`failed`](ABAPEML_RESPONSE.html) structure.

-   [Managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged](ABENUNMANAGED_RAP_BO_GLOSRY.html) and [draft-enabled](ABENDRAFT_RAP_BO_GLOSRY.html) RAP BOs.
-   **Caution** Not available for unmanaged, non-draft RAP BOs.

-   The execution order of validations is not fixed. If there is more than one validation triggered by the same condition, the execution order is not predictable.
-   It is not allowed to use EML [`MODIFY`](ABAPMODIFY_ENTITY_ENTITIES.html) statements in the implementation of validations.

-   It creates one valid instance and commits it to the database.
-   It tries to create an invalid instance. This is rejected by the validation.
-   It tries to create another valid instance. This is rejected. It is required to first correct or delete the invalid instance.

managed implementation in class bp\_demo\_sales\_cds\_so\_1 unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_SALES\_CDS\_SO\_1 alias SalesOrder\\npersistent table demo\_sales\_order\\nlock master\\nauthorization master (global)\\n\\{\\n create;\\n update;\\n\\n field ( readonly, numbering : managed ) SoKey;\\n\\n validation ValidateBuyerId on save \\{ field BuyerId; \\}\\n\\n mapping for DEMO\_SALES\_ORDER corresponding\\n \\{\\n SoKey = so\_key;\\n BuyerId = buyer\_id;\\n ShipToId = ship\_to\_id;\\n QuantitySum = quantity\_sum;\\n UomSum = uom\_sum;\\n AmountSum = amount\_sum;\\n CurrencySum = currency\_sum;\\n CompanyCode = company\_code;\\n CreatedBy = created\_by;\\n CreatedAt = created\_at;\\n CreatedOn = created\_on;\\n LifecycleStatus = lifecycle\_status;\\n LastChangedBy = last\_changed\_by;\\n LastChangedOn = last\_changed\_on;\\n LastChangedAt = last\_changed\_at;\\n \\}\\n\\} METHOD ValidateBuyerId. \\n " Read relevant sales order data \\n READ ENTITIES OF demo\_sales\_cds\_so\_1 IN LOCAL MODE \\n ENTITY SalesOrder \\n FIELDS ( BuyerId ) WITH CORRESPONDING #( keys ) \\n RESULT DATA(lt\_salesorder) \\nFAILED DATA(lt\_failed). \\n\\ \\n failed = CORRESPONDING #( DEEP lt\_failed ). \\n DATA lt\_buyer TYPE SORTED TABLE OF demo\_sales\_bupa \\n WITH UNIQUE KEY id. \\n\\ \\n lt\_buyer = CORRESPONDING #( lt\_salesorder \\n MAPPING id = BuyerID EXCEPT \* ). \\n DELETE lt\_buyer WHERE id IS INITIAL. \\n\\ \\n IF lt\_buyer IS NOT INITIAL. \\n " Check if customer ID exists \\n SELECT FROM demo\_sales\_bupa FIELDS id \\n FOR ALL ENTRIES IN @lt\_buyer \\n WHERE id = @lt\_buyer-id \\n INTO TABLE @DATA(lt\_buyer\_db). \\n ENDIF. \\n\\ \\n " Raise message for non existing customer id \\n LOOP AT lt\_salesorder INTO DATA(ls\_so). \\n APPEND VALUE #( %tky = ls\_so-%tky \\n %state\_area = 'VALIDATE\_BUYER' ) \\n TO reported-salesorder. \\n\\ \\n IF ls\_so-BuyerId IS NOT INITIAL \\n AND NOT line\_exists( lt\_buyer\_db\[ id = ls\_so-BuyerId \] ). \\n APPEND VALUE #( %tky = ls\_so-%tky ) TO failed-salesorder. \\n APPEND VALUE #( %tky = ls\_so-%tky \\n %state\_area = 'VALIDATE\_BUYER' \\n %msg = new\_message\_with\_text( \\n severity = if\_abap\_behv\_message=>severity-error \\n text = 'validation failed' ) \\n %element-BuyerID = if\_abap\_behv=>mk-on ) \\n TO reported-salesorder. \\n ENDIF. \\n ENDLOOP. \\nENDMETHOD. DELETE FROM demo\_sales\_order. \\n MODIFY ENTITIES OF demo\_sales\_cds\_so\_1 \\n ENTITY SalesOrder \\n CREATE FIELDS ( BuyerId ) WITH VALUE #( \\n ( %cid = '1' BuyerId = \`a\` ) \\n ( %cid = '2' BuyerId = \`CCC\` ) \\n ( %cid = '3' BuyerId = 'DDD' ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). \\n COMMIT ENTITIES. " valid instance: commit works. \\nMODIFY ENTITIES OF demo\_sales\_cds\_so\_1 \\n ENTITY SalesOrder \\n CREATE FIELDS ( BuyerId ) WITH VALUE #( \\n ( %cid = '1' BuyerId = \`a\` ) ) \\n MAPPED DATA(mapped) \\n FAILED DATA(failed) \\n REPORTED DATA(reported). \\n COMMIT ENTITIES. \\n\\ \\n" invalid instances: commit fails. \\n MODIFY ENTITIES OF demo\_sales\_cds\_so\_1 \\n ENTITY SalesOrder \\n CREATE FIELDS ( BuyerId ) WITH VALUE #( \\n ( %cid = '2' BuyerId = \`CCC\` ) \\n ( %cid = '3' BuyerId = 'DDD' ) ) \\n MAPPED FINAL(mapped1) \\n FAILED FINAL(failed1) \\n REPORTED FINAL(reported1). \\n COMMIT ENTITIES RESPONSE OF demo\_sales\_cds\_so\_1 \\n FAILED FINAL(failed\_commit) \\n REPORTED FINAL(reported\_commit). \\n\\ \\n" valid instance: commit fails. Invalid instances must be \\n" corrected or deleted first. \\n MODIFY ENTITIES OF demo\_sales\_cds\_so\_1 \\n ENTITY SalesOrder \\n CREATE FIELDS ( BuyerId ) WITH VALUE #( \\n ( %cid = '1' BuyerId = \`b\` ) ) \\n MAPPED mapped \\n FAILED failed \\n REPORTED reported. \\n COMMIT ENTITIES. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html