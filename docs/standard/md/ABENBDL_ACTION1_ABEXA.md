---
title: "ABENBDL_ACTION1_ABEXA"
description: |
  ABENBDL_ACTION1_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_ACTION1_ABEXA.htm"
abapFile: "ABENBDL_ACTION1_ABEXA.html"
keywords: ["select", "update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "ACTION1", "ABEXA"]
---

This example demonstrates how a [RAP action](ABENRAP_ACTION_GLOSRY.html) is defined, implemented, and consumed in a managed RAP BO.

**Data model**

The CDS data model consists of the root entity `DEMO_CDS_PURCH_DOC_M` and its child entity `DEMO_CDS_PURCH_DOC_I_M`. The root entity represents a purchase order and the child entity represents a purchase order item.

Root entity:

Child entity:

**Behavior definition**

The [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `DEMO_CDS_PURCH_DOC_M` is defined in [RAP BDL](ABENCDS_BDL_GLOSRY.html) as follows:

**Action definition**

Two actions are defined: `Approve_Order` and `Reject_Order`. If an employee wants to order equipment, the employee creates a purchase order and the manager can approve or reject this purchase order. Both actions have the output parameter `$self` with cardinality 1, so the parameter `result` has the same type as the entity for which the action is executed.

action Approve\_Order result \[1\] $self;

action Reject\_Order result \[1\] $self;

**Behavior implementation**

For the above RAP behavior definition, one [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) is created. The global class of the behavior pool is `BP_DEMO_CDS_PURCH_DOC_M`. This global class implements the local handler class `LHC_PURCHASEDOCUMENT`, which contains two methods, `Approve_Order` and `Reject_Order`, to implement the actions. The actual implementation takes place in the `BP_DEMO_CDS_PURCH_DOC_M=======CCIMP` and it works as follows:

**Access with ABAP using EML**

The above source code uses [EML](ABENEML_GLOSRY.html) to access the RAP business object from an ABAP class:

-   For the passed entity instance, column *Status* is updated with *A* for *Approved* or *R* for *Rejected*, using the `MODIFY ENTITIES` statement.
-   A local structure `lt_purchase` is created and filled with the entity instance using the statement `READ ENTITIES`.
-   The output parameter `result` is filled. If an output parameter is defined, then it must always be filled.

-   Two BO instances are created with the statement `MODIFY ENTITY`.
-   The action `Approve_Order` is executed on one of the two instances with the statement `EXECUTE`.
-   The `result`, `failed`, and `reported` parameters are returned.
-   The changes that were performed by the action in the transactional buffer are committed to the database with the statement `COMMIT ENTITIES`.
-   A `SELECT` statement is used to read the changed data from the persistent table `DEMO_PURCH_DOC`. As a result of the action, the column *Status* of the respective instance is filled with *A* for *Accepted*.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, purcdoc, RAP managed'\\n\\ndefine root view entity DEMO\_CDS\_PURCH\_DOC\_M\\n as select from DEMO\_CDS\_OVERALL\_PRICE\\n composition of exact one to many DEMO\_CDS\_PURCH\_DOC\_I\_M \\n as \_PurchaseDocumentItem\\n\\{\\n key PurchaseDocument,\\n Description,\\n Status,\\n Priority,\\n Currency,\\n PurchasingOrganization,\\n crea\_date\_time,\\n crea\_uname,\\n\\n /\* Associations \*/\\n \_PurchaseDocumentItem\\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, purchdocitem, RAP\_m'\\n\\ndefine view entity DEMO\_CDS\_PURCH\_DOC\_I\_M\\n as select from DEMO\_CDS\_PURCH\_DOC\_I\\n association to parent DEMO\_CDS\_PURCH\_DOC\_M as \_PurchaseDocument \\n on $projection.PurchaseDocument = \_PurchaseDocument.PurchaseDocument\\n\\n\\{\\n key PurchaseDocumentItem,\\n key PurchaseDocument,\\n Description,\\n Vendor,\\n VendorType,\\n @Semantics.amount.currencyCode: 'Currency'\\n Price,\\n Currency,\\n @Semantics.quantity.unitOfMeasure: 'QuantityUnit'\\n Quantity,\\n QuantityUnit,\\n\\n // Admin Data\\n crea\_date\_time,\\n crea\_uname,\\n\\n /\* Associations \*/\\n \_PurchaseDocument\\n\\}\\n managed implementation in class bp\_demo\_cds\_purch\_doc\_m unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_CDS\_PURCH\_DOC\_M alias PurchaseDocument\\npersistent table demo\_purch\_doc\\nlock master\\netag master crea\_date\_time\\nauthorization master (global)\\n\\{\\n create;\\n update;\\n delete;\\n association \_PurchaseDocumentItem \\{ create; \\}\\n\\n action Approve\_Order result \[1\] $self;\\n action Reject\_Order result \[1\] $self;\\n\\n field(readonly:update) PurchaseDocument;\\n\\n field ( readonly ) crea\_uname , crea\_date\_time;\\n\\n mapping for demo\_purch\_doc corresponding;\\n\\}\\n\\ndefine behavior for DEMO\_CDS\_PURCH\_DOC\_I\_M alias PurchaseDocumentItem\\npersistent table DEMO\_PURCH\_DOC\_I\\nlock dependent by \_PurchaseDocument\\nauthorization dependent by \_PurchaseDocument\\n\\{\\n update;\\n delete;\\n field ( readonly ) PurchaseDocumentItem , PurchaseDocument;\\n field ( mandatory ) Price , Quantity , QuantityUnit;\\n\\n association \_PurchaseDocument;\\n\\n mapping for DEMO\_PURCH\_DOC\_I corresponding;\\n\\} \* Public class definition \\nCLASS cl\_demo\_cds\_purchase DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_purchase IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DELETE FROM demo\_purch\_doc\_i. \\n DELETE FROM demo\_purch\_doc. \\n MODIFY ENTITY demo\_cds\_purch\_doc\_m \\n CREATE FIELDS ( PurchaseDocument Description ) \\n WITH VALUE #( \\n ( %cid = 'cid1' \\n PurchaseDocument = 'a' \\n Description = \`aaa\` ) \\n ( %cid = 'cid2' \\n PurchaseDocument = 'b' \\n Description = \`bbb\` ) ) \\n FAILED DATA(failed) \\n REPORTED DATA(reported). \\n\\ \\n MODIFY ENTITIES OF demo\_cds\_purch\_doc\_m \\n ENTITY PurchaseDocument \\n EXECUTE approve\_order \\n FROM VALUE #( ( PurchaseDocument = 'a' ) ) \\n\\ \\n RESULT FINAL(result) \\n FAILED failed \\n REPORTED reported. \\n\\ \\n COMMIT ENTITIES RESPONSE OF demo\_cds\_purch\_doc\_m \\n FAILED FINAL(commit\_failed) \\n REPORTED FINAL(commit\_reported). \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT PurchaseDocument, Description, Status \\n FROM demo\_purch\_doc \\n INTO TABLE @FINAL(demo\_purch\_doc\_approved). \\n\\ \\n out->next\_section( 'approve order' \\n )->write( demo\_purch\_doc\_approved ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_cds\_purchase DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_purchase IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DELETE FROM demo\_purch\_doc\_i. \\n DELETE FROM demo\_purch\_doc. \\n MODIFY ENTITY demo\_cds\_purch\_doc\_m \\n CREATE FIELDS ( PurchaseDocument Description ) \\n WITH VALUE #( \\n ( %cid = 'cid1' \\n PurchaseDocument = 'a' \\n Description = \`aaa\` ) \\n ( %cid = 'cid2' \\n PurchaseDocument = 'b' \\n Description = \`bbb\` ) ) \\n FAILED DATA(failed) \\n REPORTED DATA(reported). \\n\\ \\n MODIFY ENTITIES OF demo\_cds\_purch\_doc\_m \\n ENTITY PurchaseDocument \\n EXECUTE approve\_order \\n FROM VALUE #( ( PurchaseDocument = 'a' ) ) \\n\\ \\n RESULT FINAL(result) \\n FAILED failed \\n REPORTED reported. \\n\\ \\n COMMIT ENTITIES RESPONSE OF demo\_cds\_purch\_doc\_m \\n FAILED FINAL(commit\_failed) \\n REPORTED FINAL(commit\_reported). \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT PurchaseDocument, Description, Status \\n FROM demo\_purch\_doc \\n INTO TABLE @FINAL(demo\_purch\_doc\_approved). \\n\\ \\n out->next\_section( 'approve order' \\n )->write( demo\_purch\_doc\_approved ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_nonstandard.html abenbdl\_action.html abenbdl\_action\_abexas.html