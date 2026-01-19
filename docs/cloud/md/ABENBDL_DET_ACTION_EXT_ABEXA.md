---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_DET_ACTION_EXT_ABEXA.htm"
abapFile: "ABENBDL_DET_ACTION_EXT_ABEXA.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "DET", "ACTION", "EXT", "ABEXA"]
---

This example demonstrates how a determine action is extended via a BDEF extension.

**Data model**

The CDS data model consists of the root entity `DEMO_RAP_EXTENSIBILITY_DET_ACT` and its child entity `DEMO_RAP_EXT_DET_ACT_CHILD`.

Root entity:

CDS transactional interface, root entity:

Child entity:

CDS transactional interface, child entity:

**Behavior definition**

The [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `DEMO_RAP_EXTENSIBILITY_DET_ACT` is defined in [RAP BDL](ABENCDS_BDL_GLOSRY.html) as shown below. It defines the determine action `trigger_all`, which triggers two determinations. The behavior definition is extensible and explicitly allows extensions to the determine action `trigger_all`.

**RAP BO interface**

The following RAP BO interface is used as stable public interface for extensions.

**Behavior extension**

The BDEF extension `DEMO_RAP_DET_ACT_EXT` extends the determine action `trigger_all` by adding a new determination on save.

**Behavior implementation**

For the RAP behavior definition, one [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) is created. The global class of the behavior pool is `BP_DEMO_RAP_EXTENSIBILITY_DET_`, see `BP_DEMO_RAP_EXTENSIBILITY_DET_CCIMP`. This global class implements three methods:

For the RAP extension behavior definition, one [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) is created. The global class of the behavior pool is `BP_DEMO_RAP_DET_ACT_EXT`, see `BP_DEMO_RAP_DET_ACT_EXT=======CCIMP`. This global class implements the determination `setStatustoNew`. When called, this determination inserts value `O` (meaning `open`), into the field `Status`.

**Note** This is a simple example that serves demonstration purposes.

**Access with ABAP using EML**

The above source code uses ABAP SQL and [ABAP EML](ABENEML_GLOSRY.html) to access the [RAP business object](ABENRAP_BO_GLOSRY.html) from an ABAP class:

The RAP framework executes the implementations in the original and extension ABAP behavior pools in the following order:

-   `get_instance_authorizations`: Checks the value of field `CompanyCode`. If the company code is `ABCD`, update requests are not allowed. If the company code has any other value, updates are allowed.
-   `setID`: determination on save that inserts a randomly generated integer into field `SalesOrderId`.
-   `TotalPrice`: determination on save that multiplies the number of sales order items with the price and adds the result of all categories, thus calculating the total price of all items of a sales order.

-   It inserts two parent instances and two child instances directly into the database tables using ABAP SQL [`INSERT`](ABAPINSERT_ITAB.html). This is done to avoid triggering the determinations (all three of them are triggered by EML [`MODIFY ENTITIES CREATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html)).
-   It executes the determine action `trigger_all`.
-   Using the ABAP SQL [`SELECT`](ABAPSELECT.html) statement, the content of the parent table before and after executing the determine action is displayed. The fields `SalesOrderId`, `AmountSum`, and `Status` have values that were inserted via the determinations.

-   `get_instance_authorizations`: Checks whether the operation on the root node is authorized.
-   `setID`, a determination from the root node of the original BDEF.
-   `setStatustoNew`, a determination from the root node extension.
-   `get_instance_authorizations`: Checks whether the operation on the child node is authorized.
-   `TotalPrice`, a determination from the child node of the original BDEF.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, so, RAP managed'\\ndefine root view entity DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT\\n as select from demo\_sales\_order\\n composition of exact one to many DEMO\_RAP\_EXT\_DET\_ACT\_CHILD as \_child\\n\\{\\n key so\_key as SoKey,\\n id as SalesOrderId,\\n buyer\_id as BuyerId,\\n lifecycle\_status as Status,\\n created\_by as CreatedBy,\\n created\_on as CreatedOn,\\n created\_at as CreatedAt,\\n last\_changed\_by as LastChangedBy,\\n last\_changed\_on as LastChangedOn,\\n last\_changed\_at as LastChangedAt,\\n ship\_to\_id as ShipToId,\\n quantity\_sum as QuantitySum,\\n uom\_sum as UomSum,\\n amount\_sum as AmountSum,\\n currency\_sum as CurrencySum,\\n company\_code as CompanyCode,\\n \_child\\n\\n\\}\\n @EndUserText.label: 'CDS transactional interface'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine root view entity DEMO\_RAP\_EXT\_DET\_ACT\_INT \\nprovider contract transactional\_interface\\nas projection on DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT\\n\\{\\n key SoKey,\\n SalesOrderId,\\n BuyerId,\\n Status,\\n CreatedBy,\\n CreatedOn,\\n CreatedAt,\\n LastChangedBy,\\n LastChangedOn,\\n LastChangedAt,\\n ShipToId,\\n QuantitySum,\\n UomSum,\\n AmountSum,\\n CurrencySum,\\n CompanyCode,\\n /\* Associations \*/\\n \_child: redirected to composition child DEMO\_RAP\_EXT\_DET\_ACT\_INT\_CH\\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, o\_,i RAP managed'\\ndefine view entity DEMO\_RAP\_EXT\_DET\_ACT\_CHILD\\n as select from demo\_sales\_so\_i\\n association to parent DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT as \_parent \\n on \_parent.SoKey = $projection.ParentKey\\n\\{\\n key so\_item\_key as SoItemKey,\\n parent\_key as ParentKey,\\n material as Material,\\n posnr as Posnr,\\n @Semantics.amount.currencyCode: 'Currency'\\n gross\_amount as GrossAmount,\\n currency as Currency,\\n @Semantics.quantity.unitOfMeasure: 'Unit'\\n quantity as Quantity,\\n unit as Unit,\\n \_parent\\n\\}\\n @EndUserText.label: 'CDS transactional interface, child'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_RAP\_EXT\_DET\_ACT\_INT\_CH \\nas projection on DEMO\_RAP\_EXT\_DET\_ACT\_CHILD\\n\\{\\n key SoItemKey,\\n ParentKey,\\n Material,\\n Posnr,\\n GrossAmount,\\n Currency,\\n Quantity,\\n Unit,\\n /\* Associations \*/\\n \_parent: redirected to parent DEMO\_RAP\_EXT\_DET\_ACT\_INT\\n\\}\\n managed implementation in class bp\_demo\_rap\_extensibility\_det\_ unique;\\nstrict(2);\\nextensible\\n\\{ with determinations on modify;\\n with determinations on save;\\n with validations on save; \\}\\nwith draft;\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT alias Root\\npersistent table demo\_sales\_order\\ndraft table demo\_sales\_draft\\nlock master\\ntotal etag LastChangedAt\\nauthorization master ( instance, global )\\nextensible\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; with draft; \\}\\n field(readonly:update) SoKey;\\n field ( readonly ) LastChangedAt;\\n\\n draft action Activate optimized;\\n draft action Discard;\\n draft action Edit;\\n draft action Resume;\\n\\n draft determine action Prepare extensible\\n \\{ determination (always) setID; \\}\\n\\n determination setID on save \\{ create; \\}\\n\\ndetermine action trigger\_all extensible\\n \\{\\n determination ( always ) setID;\\n determination ( always ) Child ~ TotalPrice;\\n \\}\\n\\n mapping for DEMO\_SALES\_ORDER corresponding extensible\\n \\{\\n SoKey = so\_key;\\n SalesOrderId = id;\\n BuyerId = buyer\_id;\\n Status = lifecycle\_status;\\n ShipToId = ship\_to\_id;\\n QuantitySum = quantity\_sum;\\n UomSum = uom\_sum;\\n AmountSum = amount\_sum;\\n CurrencySum = currency\_sum;\\n CompanyCode = company\_code;\\n CreatedBy = created\_by;\\n CreatedOn = created\_on;\\n CreatedAt = created\_at;\\n LastChangedBy = last\_changed\_by;\\n LastChangedOn = last\_changed\_on;\\n LastChangedAt = last\_changed\_at;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXT\_DET\_ACT\_CHILD alias Child\\npersistent table demo\_sales\_so\_i\\ndraft table sales\_i\_draft\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n update;\\n delete;\\n\\n field ( readonly : update ) ParentKey, SoItemKey;\\n\\n determination TotalPrice on save \\{ create; \\}\\n\\n association \_parent \\{ with draft; \\}\\n\\n mapping for DEMO\_SALES\_SO\_I corresponding\\n \\{\\n SoItemKey = so\_item\_key;\\n ParentKey = parent\_key;\\n GrossAmount = gross\_amount;\\n \\}\\n\\} interface;\\nuse draft;\\nextensible;\\nuse side effects;\\n\\ndefine behavior for DEMO\_RAP\_EXT\_DET\_ACT\_INT alias Root\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\n use action trigger\_all;\\n\\n use action Activate;\\n use action Discard;\\n use action Edit;\\n use action Resume;\\n use action Prepare;\\n\\n use association \_child \\{ create; with draft; \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXT\_DET\_ACT\_INT\_CH alias Child\\n\\{\\n use update;\\n use delete;\\n\\n use association \_parent \\{ with draft; \\}\\n\\} extension using interface DEMO\_RAP\_EXT\_DET\_ACT\_INT\\nimplementation in class bp\_demo\_rap\_det\_act\_ext unique;\\n\\nextend behavior for Root\\n\\{\\n determination setStatustoNew on save \\{ create; \\}\\n\\n extend determine action trigger\_all\\n \\{\\n determination (always) setStatustoNew;\\n \\}\\n\\} \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_ext\_det\_act DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n METHODS: \\n initialize\_dbtabs, \\n fill\_dbtabs. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_ext\_det\_act IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT so\_key, id, buyer\_id, amount\_sum, lifecycle\_status \\n FROM demo\_sales\_order \\n INTO TABLE @FINAL(before\_determination). \\n\\ \\n MODIFY ENTITIES OF demo\_rap\_ext\_det\_act\_int \\n ENTITY root \\n EXECUTE trigger\_all \\n FROM VALUE #( ( sokey = '0894EF1643A01EDB90EE45FBFB0C7DAA' ) \\n ( sokey = '0894EF1643A01EDB90EE45FBFB0C9DAA' ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported) . \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT so\_key, id, buyer\_id, amount\_sum, lifecycle\_status \\n FROM demo\_sales\_order \\n INTO TABLE @FINAL(determination\_successful). \\n\\ \\n out->next\_section( 'Before determine action' \\n )->write( before\_determination \\n )->next\_section( 'Determine action successful' \\n )->write( determination\_successful ). \\n ENDMETHOD. \\n METHOD fill\_dbtabs. \\n INSERT demo\_sales\_order FROM TABLE @( VALUE #( \\n ( so\_key = '0894EF1643A01EDB90EE45FBFB0C7DAA' buyer\_id = 'aa' ) \\n ( so\_key = '0894EF1643A01EDB90EE45FBFB0C9DAA' buyer\_id = 'bb' ) \\n ) ). \\n\\ \\n INSERT demo\_sales\_so\_i FROM TABLE @( VALUE #( \\n ( so\_item\_key = '0894EF1643A01EEB90EFE37277630A36' \\n parent\_key = '0894EF1643A01EDB90EE45FBFB0C7DAA' \\n gross\_amount = 123 \\n quantity = 5 ) \\n ( so\_item\_key = '0894EF1643A01EEB90EFE37277630A37' \\n parent\_key = '0894EF1643A01EDB90EE45FBFB0C9DAA' \\n gross\_amount = 40 \\n quantity = 1 ) \\n ) ). \\n ENDMETHOD. \\n METHOD initialize\_dbtabs. \\n DELETE FROM demo\_sales\_order. \\n DELETE FROM demo\_sales\_so\_i. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n initialize\_dbtabs( ). \\n fill\_dbtabs( ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_ext\_det\_act DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n METHODS: \\n initialize\_dbtabs, \\n fill\_dbtabs. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_ext\_det\_act IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT so\_key, id, buyer\_id, amount\_sum, lifecycle\_status \\n FROM demo\_sales\_order \\n INTO TABLE @FINAL(before\_determination). \\n\\ \\n MODIFY ENTITIES OF demo\_rap\_ext\_det\_act\_int \\n ENTITY root \\n EXECUTE trigger\_all \\n FROM VALUE #( ( sokey = '0894EF1643A01EDB90EE45FBFB0C7DAA' ) \\n ( sokey = '0894EF1643A01EDB90EE45FBFB0C9DAA' ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported) . \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT so\_key, id, buyer\_id, amount\_sum, lifecycle\_status \\n FROM demo\_sales\_order \\n INTO TABLE @FINAL(determination\_successful). \\n\\ \\n out->next\_section( 'Before determine action' \\n )->write( before\_determination \\n )->next\_section( 'Determine action successful' \\n )->write( determination\_successful ). \\n ENDMETHOD. \\n METHOD fill\_dbtabs. \\n INSERT demo\_sales\_order FROM TABLE @( VALUE #( \\n ( so\_key = '0894EF1643A01EDB90EE45FBFB0C7DAA' buyer\_id = 'aa' ) \\n ( so\_key = '0894EF1643A01EDB90EE45FBFB0C9DAA' buyer\_id = 'bb' ) \\n ) ). \\n\\ \\n INSERT demo\_sales\_so\_i FROM TABLE @( VALUE #( \\n ( so\_item\_key = '0894EF1643A01EEB90EFE37277630A36' \\n parent\_key = '0894EF1643A01EDB90EE45FBFB0C7DAA' \\n gross\_amount = 123 \\n quantity = 5 ) \\n ( so\_item\_key = '0894EF1643A01EEB90EFE37277630A37' \\n parent\_key = '0894EF1643A01EDB90EE45FBFB0C9DAA' \\n gross\_amount = 40 \\n quantity = 1 ) \\n ) ). \\n ENDMETHOD. \\n METHOD initialize\_dbtabs. \\n DELETE FROM demo\_sales\_order. \\n DELETE FROM demo\_sales\_so\_i. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n initialize\_dbtabs( ). \\n fill\_dbtabs( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html abenbdl\_extend\_beh.html abenbdl\_entity\_beh\_extension.html abenbdl\_ext\_elem\_ext.html abenbdl\_determine\_action\_ext.html