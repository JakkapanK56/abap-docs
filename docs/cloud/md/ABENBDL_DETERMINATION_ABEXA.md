---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_DETERMINATION_ABEXA.htm"
abapFile: "ABENBDL_DETERMINATION_ABEXA.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "DETERMINATION", "ABEXA"]
---

This example demonstrates how determinations are defined, implemented, and consumed in a managed RAP BO.

**Data model**

The CDS data model consists of the root entity `DEMO_SALES_CDS_SO_2` and its child entity `DEMO_SALES_CDS_SO_I_2`. The root entity represents a sales order and the child entity represents a sales order item.

Root entity:

Child entity:

**Behavior definition**

The [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `DEMO_SALES_CDS_SO_2` is defined in [RAP BDL](ABENCDS_BDL_GLOSRY.html) as follows:

**Definition of determinations**

The following determinations are defined in the root entity:

The child entity defines one determination on modify:

**Behavior implementation**

For the above RAP behavior definition, one [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) is created. The global class of the behavior pool is `BP_DEMO_SALES_CDS_SO_2`. The actual implementation takes place in the `BP_DEMO_SALES_CDS_SO_2========CCIMP` and it works as follows:

**Access with ABAP using EML**

The above source code uses [EML](ABENEML_GLOSRY.html) to access the RAP business object from an ABAP class:

-   `setID` is a determination on save that is triggered whenever a new instance of the root entity is created. It assigns values to the semantic key field `SalesOrderId` during the [save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html). The technical key field `SoKey` is populated by means of internal numbering using the statement [`numbering:managed`](ABENBDL_FIELD_NUMBERING.html).
-   `setStatustoNew` sets the status of a newly created sales order to `O` for *open*. It is triggered whenever a new sales order is created.
-   `TotalPrice` sums up the price of all items of a sales order. It is triggered whenever a new sales order is created.

-   `TotalPrice_1` is the counterpart to `TotalPrice`. If a sales order is created without any items, then this determination ensures that the overall price of a sales order is calculated as soon as sales order items are added.

-   `setID` generates a random value of type `i` for the field `SalesOrderId` of each BO instance.
-   `setStatustoNew` inserts the value `O` for *Open* into column `Status` for each newly created BO instance.
-   `TotalPrice` reads the fields `GrossAmount` and `Quantity` from the child entity via a [read-by-association operation](ABENBDL_ASSOCIATION.html). It first calculates the total price per item and then sums up the prices of all items for each sales order to get the overall price.
-   `TotalPrice_1` works exactly like `TotalPrice`, but it has different trigger conditions.

-   Two BO instances are created with the statement `MODIFY ENTITY`. Two child entities are created for each root entity instance so both sales orders have two sales order items.
-   All three determinations of the root entity are triggered by the creation of new instances and they insert values into the fields `ID`, `LIFECYCLE_STATUS`, and `AMOUNT_SUM`.
-   The technical key field `SO_KEY` is filled by means of internal numbering.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, so, RAP managed'\\ndefine root view entity DEMO\_SALES\_CDS\_SO\_2\\n as select from demo\_sales\_order\\n composition of exact one to many DEMO\_SALES\_CDS\_SO\_I\_2 as \_SalesOrderItem\\n\\{\\n key so\_key as SoKey,\\n id as SalesOrderId,\\n buyer\_id as BuyerId,\\n lifecycle\_status as Status,\\n created\_by as CreatedBy,\\n created\_on as CreatedOn,\\n created\_at as CreatedAt,\\n last\_changed\_by as LastChangedBy,\\n last\_changed\_on as LastChangedOn,\\n last\_changed\_at as LastChangedAt,\\n ship\_to\_id as ShipToId,\\n quantity\_sum as QuantitySum,\\n uom\_sum as UomSum,\\n amount\_sum as AmountSum,\\n currency\_sum as CurrencySum,\\n company\_code as CompanyCode,\\n \_SalesOrderItem // Make association public\\n\\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, o\_,i RAP managed'\\ndefine view entity DEMO\_SALES\_CDS\_SO\_I\_2 \\nas select from demo\_sales\_so\_i \\nassociation to parent DEMO\_SALES\_CDS\_SO\_2 as \_SalesOrder \\non \_SalesOrder.SoKey = $projection.ParentKey\\n\\{\\n key so\_item\_key as SoItemKey,\\n parent\_key as ParentKey,\\n material as Material,\\n posnr as Posnr,\\n @Semantics.amount.currencyCode: 'Currency'\\n gross\_amount as GrossAmount,\\n currency as Currency,\\n @Semantics.quantity.unitOfMeasure: 'Unit'\\n quantity as Quantity,\\n unit as Unit,\\n \_SalesOrder\\n\\}\\n managed implementation in class bp\_demo\_sales\_cds\_so\_2 unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_SALES\_CDS\_SO\_2 alias SalesOrder\\npersistent table demo\_sales\_order\\nlock master\\nauthorization master (global)\\n\\{\\n create;\\n update;\\n association \_SalesOrderItem \\{ create; \\}\\n\\n field ( readonly, numbering : managed ) SoKey;\\n field ( readonly ) AmountSum;\\n\\n determination setID on save \\{ create; \\}\\n determination setStatustoNew on modify \\{ create; \\}\\n determination TotalPrice on modify \\{ create; \\}\\n\\n mapping for DEMO\_SALES\_ORDER\\n \\{\\n SoKey = so\_key;\\n SalesOrderId = id;\\n BuyerId = buyer\_id;\\n Status = lifecycle\_status;\\n ShipToId = ship\_to\_id;\\n QuantitySum = quantity\_sum;\\n UomSum = uom\_sum;\\n AmountSum = amount\_sum;\\n CurrencySum = currency\_sum;\\n CompanyCode = company\_code;\\n CreatedBy = created\_by;\\n CreatedAt = created\_at;\\n CreatedOn = created\_on;\\n LastChangedBy = last\_changed\_by;\\n LastChangedOn = last\_changed\_on;\\n LastChangedAt = last\_changed\_at;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_SALES\_CDS\_SO\_I\_2 alias SalesOrderItem\\npersistent table demo\_sales\_so\_i\\nlock dependent by \_SalesOrder\\nauthorization dependent by \_SalesOrder\\n\\{\\n update;\\n delete;\\n\\n field ( readonly : update ) ParentKey;\\n field ( readonly, numbering : managed ) SoItemKey;\\n\\n association \_SalesOrder \\{ \\}\\n\\n determination TotalPrice\_1 on modify \\{ field Quantity,GrossAmount; \\}\\n\\n mapping for DEMO\_SALES\_SO\_I corresponding\\n \\{\\n SoItemKey = so\_item\_key;\\n ParentKey = parent\_key;\\n GrossAmount = gross\_amount;\\n \\}\\n\\} \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_determination DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_determination IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DELETE FROM demo\_sales\_order. \\n DELETE FROM demo\_sales\_so\_i. \\n\\ \\n MODIFY ENTITIES OF demo\_sales\_cds\_so\_2 \\n ENTITY SalesOrder \\n CREATE FIELDS ( BuyerId Status ) WITH VALUE #( \\n ( %cid = '1' BuyerId = \`AAA\` ) \\n ( %cid = '2' BuyerId = \`BBB\` ) ) \\n\\ \\n ENTITY SalesOrder \\n CREATE BY \\\\\_SalesOrderItem \\n FIELDS ( Material GrossAmount Quantity ) WITH VALUE #( \\n ( %cid\_ref = '1' \\n %target = VALUE #( \\n ( %cid = 'cid\_child1' material = 'aaa' \\n GrossAmount = 123 Quantity = 5 ) \\n ( %cid = 'cid\_child2' material = 'bbb' \\n GrossAmount = 40 Quantity = 1 ) ) ) \\n ( %cid\_ref = '2' \\n %target = VALUE #( \\n ( %cid = 'cid\_child3' material = \`xxx\` \\n GrossAmount = 50 Quantity = 2 ) \\n ( %cid = 'cid\_child4' material = \`yyy\` \\n GrossAmount = 12 Quantity = 1 ) ) ) ). \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT so\_key, id, lifecycle\_status, buyer\_id, amount\_sum \\n FROM demo\_sales\_order \\n INTO TABLE @FINAL(determination). \\n\\ \\n out->next\_section( 'Determination result' \\n )->write( determination ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_determination DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_determination IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DELETE FROM demo\_sales\_order. \\n DELETE FROM demo\_sales\_so\_i. \\n\\ \\n MODIFY ENTITIES OF demo\_sales\_cds\_so\_2 \\n ENTITY SalesOrder \\n CREATE FIELDS ( BuyerId Status ) WITH VALUE #( \\n ( %cid = '1' BuyerId = \`AAA\` ) \\n ( %cid = '2' BuyerId = \`BBB\` ) ) \\n\\ \\n ENTITY SalesOrder \\n CREATE BY \\\\\_SalesOrderItem \\n FIELDS ( Material GrossAmount Quantity ) WITH VALUE #( \\n ( %cid\_ref = '1' \\n %target = VALUE #( \\n ( %cid = 'cid\_child1' material = 'aaa' \\n GrossAmount = 123 Quantity = 5 ) \\n ( %cid = 'cid\_child2' material = 'bbb' \\n GrossAmount = 40 Quantity = 1 ) ) ) \\n ( %cid\_ref = '2' \\n %target = VALUE #( \\n ( %cid = 'cid\_child3' material = \`xxx\` \\n GrossAmount = 50 Quantity = 2 ) \\n ( %cid = 'cid\_child4' material = \`yyy\` \\n GrossAmount = 12 Quantity = 1 ) ) ) ). \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT so\_key, id, lifecycle\_status, buyer\_id, amount\_sum \\n FROM demo\_sales\_order \\n INTO TABLE @FINAL(determination). \\n\\ \\n out->next\_section( 'Determination result' \\n )->write( determination ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_determinations.html