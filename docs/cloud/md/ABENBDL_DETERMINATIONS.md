---
title: "ABENBDL_DETERMINATIONS"
description: |
  ABENBDL_DETERMINATIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_DETERMINATIONS.htm"
abapFile: "ABENBDL_DETERMINATIONS.html"
keywords: ["update", "delete", "do", "if", "method", "class", "data", "types", "ABENBDL", "DETERMINATIONS"]
---

`determination DetName \{on modify \{ CUD1 |\ \{field Field1\};                                   [ CUD2;  ...; ]  [field Field2; ...] \} \}\                       |\{on save   \{ CUD1 |\ \{field Field1\};                                   [ CUD2;  ...; ]  [field Field2; ...] \} \}`

A [determination](ABENRAP_DETERMINATION_GLOSRY.html) modifies instances of [RAP business objects](ABENRAP_BO_GLOSRY.html) based on trigger conditions. A determination is implicitly invoked by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) if the trigger condition of the determination is fulfilled. Trigger conditions can be [modify operations](ABENRAP_MODIFY_OPERATION_GLOSRY.html) ([create, update, delete](ABENBDL_STANDARD_OPERATIONS.html)) `CUD1; CUD2; ...`, or modified fields `Field1; Field2; ...`. Two types of determinations are distinguished, depending on the stage of the program flow the determination is executed: `on modify` determinations and `on save` determinations. A determination can compute data, modify entity instances, and return messages. On modify determinations and on save determinations must be implemented in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR DETERMINE`](ABAPHANDLER_METH_DET.html) in the local [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

The name `DetName` must comply with the general naming rules for RAP behavior definitions described in the topic [RAP BDL - General Syntax Rules](ABENBDL_GENERAL_SYNTAX_RULES.html). In particular, is can have a maximum of 30 characters.

Determinations can be carried out at different points in time during the program logic:

There can be one or more trigger conditions. The trigger conditions can be changes of field values or the execution of one of the [standard operations](ABENBDL_STANDARD_OPERATIONS.html)\\ `create`, `update`, or `delete`. The determination is triggered if at least one trigger condition is fulfilled.

Development guide for the ABAP RESTful Application Programming Model, section about [Determinations](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/6edb0438d3e14d18b3c403c406fbe209?version=sap_cross_product_abap).

The following example shows a managed BDEF based on the CDS root view entity `DEMO_SALES_CDS_SO_2`. The root view entity represents a sales order and the child entity `DEMO_SALES_CDS_SO_I_2` represents a sales order item. Three determinations are defined in the [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html):

The child entity defines one `on modify` determination:

The determinations are implemented in the behavior pool`BP_DEMO_SALES_CDS_SO_2`, see `BP_DEMO_SALES_CDS_SO_2========CCIMP`.

The class `CL_DEMO_CDS_DETERMINATION` accesses the business object using [EML](ABENEML_GLOSRY.html). It creates two BO instances, providing only a value for the field `BuyerID` for each.
Code snippet:

Result: The values for the fields `so_key`, `id`, `lifecycle_status`, and `amount_sum` are determined by the RAP framework.

The example above is explained in detail in the executable example [RAP BDL - determination](ABENBDL_DETERMINATION_ABEXA.html).

-   On modify: The determination is executed immediately after data changes take place in the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) so that the result is available during the transaction.
-   On save: The determination is executed during the [save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) at the end of an transaction, when changes from the transactional buffer are persistent on the database.

-   `create`: Determination is executed when an instance is created.
-   `update`: Determination is executed when an instance is updated. For determinations defined as `on save`, update works only in combination with the trigger operation `create`.
-   `delete`: Determination is executed when an instance is deleted.
-   `field`: Determination is executed when the value of the specified field(s) `Field1, Field2, ...` are changed by a create or update operation. The fields that are used for the trigger conditions must belong to the same entity the determination is assigned to.
-   **Note** If a field is tagged with the [RAP field characteristic](ABENRAP_FIELD_CHAR_GLOSRY.html)\\ [`notrigger[:warn]`](ABENBDL_FIELD_CHAR.html), it must not be used in a trigger condition.

-   [Managed RAP BOs](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged](ABENUNMANAGED_RAP_BO_GLOSRY.html) and [draft-enabled](ABENDRAFT_RAP_BO_GLOSRY.html) RAP BOs.
-   **Caution** Not available for unmanaged, non-draft RAP BOs.

-   The determination result must not change if the determination is executed several times under the same conditions (idempotence).
-   The execution order of determinations is not fixed. If there is more than one determination triggered by the same condition, the execution order is arbitrary.
-   Once a determination has been triggered, it must run independently from other determinations.
-   If an instance is created and deleted with the same request, it can happen that an [EML](ABENEML_GLOSRY.html) read operation in a determination defined as `on modify` fails as instances with the given key cannot be found.

-   `setID` assigns values to the semantic key field `SalesOrderId` during the save sequence. The technical key field `SoKey` is populated by means of internal numbering using the statement [`numbering:managed`](ABENBDL_FIELD_NUMBERING.html).
-   `setStatustoNew` sets the status of a newly created sales order to `O` for *open*. It is triggered whenever a new sales order is created. This status can be changed to *Accepted* or *Rejected* during further processing.
-   `TotalPrice` sums up the price of all items of a sales order. It is triggered whenever a new sales order is created.

-   `TotalPrice_1` is the counterpart to `TotalPrice`. If a sales order is created without any items, then this determination ensures that the overall price of a sales order is calculated as soon as sales order items are added.

managed implementation in class bp\_demo\_sales\_cds\_so\_2 unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_SALES\_CDS\_SO\_2 alias SalesOrder\\npersistent table demo\_sales\_order\\nlock master\\nauthorization master (global)\\n\\{\\n create;\\n update;\\n association \_SalesOrderItem \\{ create; \\}\\n\\n field ( readonly, numbering : managed ) SoKey;\\n field ( readonly ) AmountSum;\\n\\n determination setID on save \\{ create; \\}\\n determination setStatustoNew on modify \\{ create; \\}\\n determination TotalPrice on modify \\{ create; \\}\\n\\n mapping for DEMO\_SALES\_ORDER\\n \\{\\n SoKey = so\_key;\\n SalesOrderId = id;\\n BuyerId = buyer\_id;\\n Status = lifecycle\_status;\\n ShipToId = ship\_to\_id;\\n QuantitySum = quantity\_sum;\\n UomSum = uom\_sum;\\n AmountSum = amount\_sum;\\n CurrencySum = currency\_sum;\\n CompanyCode = company\_code;\\n CreatedBy = created\_by;\\n CreatedAt = created\_at;\\n CreatedOn = created\_on;\\n LastChangedBy = last\_changed\_by;\\n LastChangedOn = last\_changed\_on;\\n LastChangedAt = last\_changed\_at;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_SALES\_CDS\_SO\_I\_2 alias SalesOrderItem\\npersistent table demo\_sales\_so\_i\\nlock dependent by \_SalesOrder\\nauthorization dependent by \_SalesOrder\\n\\{\\n update;\\n delete;\\n\\n field ( readonly : update ) ParentKey;\\n field ( readonly, numbering : managed ) SoItemKey;\\n\\n association \_SalesOrder \\{ \\}\\n\\n determination TotalPrice\_1 on modify \\{ field Quantity,GrossAmount; \\}\\n\\n mapping for DEMO\_SALES\_SO\_I corresponding\\n \\{\\n SoItemKey = so\_item\_key;\\n ParentKey = parent\_key;\\n GrossAmount = gross\_amount;\\n \\}\\n\\} MODIFY ENTITIES OF demo\_sales\_cds\_so\_2 \\n ENTITY SalesOrder \\n CREATE FIELDS ( buyerid ) WITH VALUE #( \\n ( %cid = '1' BuyerId = \`AAA\` ) \\n ( %cid = '2' BuyerId = \`BBB\` ) ). abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html