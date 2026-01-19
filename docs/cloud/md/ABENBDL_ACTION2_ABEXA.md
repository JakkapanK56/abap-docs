---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_ACTION2_ABEXA.htm"
abapFile: "ABENBDL_ACTION2_ABEXA.html"
keywords: ["select", "update", "delete", "do", "if", "try", "catch", "method", "class", "data", "types", "ABENBDL", "ACTION2", "ABEXA"]
---

This example demonstrates how a [RAP action](ABENRAP_ACTION_GLOSRY.html) with input parameter is defined, implemented, and consumed in a managed RAP BO.

**Data model**

The CDS data model consists of only one root entity `DEMO_CDS_ACTION_INPUT_PARAM`. The root entity represents a purchase order item.

**Behavior definition**

The [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `DEMO_CDS_ACTION_INPUT_PARAM` is defined in [RAP BDL](ABENCDS_BDL_GLOSRY.html) as follows:

**Action definition**

The behavior definition defines one action: `deductDiscount`. The action has one input parameter that is typed with the CDS abstract entity `DEMO_CDS_ABSTRACT_DISCOUNT` and it defines the output parameter as the same type as the entity for which the action is executed. The purpose is to reduce the purchase order item price by the discount specified via the input parameter.

action deductDiscount \\n       parameter DEMO\_CDS\_ABSTRACT\_DISCOUNT \\n       result \[1\] $self;

The following [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) is used for typing the input parameter:

**Behavior implementation**

For the above RAP behavior definition, one [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) is created. The global class of the behavior pool is `BP_DEMO_CDS_ACTION_INPUT_PARAM`. This global class implements the local handler class `LHC_DEMO_CDS_ACTION_INPUT_PARA`, which contains the method `deductDiscount` to implement the action. This method is a `FOR MODIFY` method and it is typed based on the `PurchaseItem` entity. Its signature includes the result parameter. The actual implementation takes place in the `BP_DEMO_CDS_ACTION_INPUT_PARAMCCIMP`.

**Access with ABAP using EML**

The above source code uses [EML](ABENEML_GLOSRY.html) to access the RAP business object from an ABAP class:

-   The user is requested to enter the discount percentage.
-   Two BO instances are created with the statement `MODIFY ENTITY`.
-   The action `deductDiscount` is executed on one of the two instances with the statement `EXECUTE`.
-   The `result`, `failed`, and `reported` parameters are returned.
-   The changes that were performed by the action in the transactional buffer are committed to the database using the statement `COMMIT ENTITIES RESPONSE OF`.
-   A `SELECT` statement is used to read the changed data from the persistent table `DEMO_PURCH_DOC_I`. As a result of the action, the price of a purchase order item is reduced by the percentage specified via the input parameter.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, managed, action'\\ndefine root view entity DEMO\_CDS\_ACTION\_INPUT\_PARAM\\nas select from DEMO\_CDS\_PURCH\_DOC\_I\\n\\{\\n key PurchaseDocumentItem,\\n key PurchaseDocument,\\n Description,\\n Vendor,\\n VendorType,\\n Price,\\n Currency,\\n Quantity,\\n QuantityUnit,\\n OverallItemPrice,\\n /\* Associations \*/\\n \_PurchaseDocument\\n\\}\\n managed implementation in class bp\_demo\_cds\_action\_input\_param unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_CDS\_ACTION\_INPUT\_PARAM alias PurchaseItem\\npersistent table demo\_purch\_doc\_i\\nlock master\\nauthorization master (none)\\n\\{\\n create;\\n update;\\n delete;\\n\\n action deductDiscount parameter DEMO\_CDS\_ABSTRACT\_DISCOUNT result \[1\] $self;\\n\\n field(readonly:update) PurchaseDocument, PurchaseDocumentItem;\\n\\n mapping for DEMO\_PURCH\_DOC\_I corresponding;\\n\\} @EndUserText.label: 'CDS abstract entity, discount'\\ndefine abstract entity DEMO\_CDS\_ABSTRACT\_DISCOUNT\\n\\{\\n discount\_percent : abap.int1;\\n\\}\\n \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_action\_reduce DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_action\_reduce IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA(percentage) = 10. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = percentage \\n )->request( ). \\n IF percentage > 100 \\n OR percentage < 0. \\n out->write( 'Enter a valid percentage between 0 and 100' ). \\n ENDIF. \\n\\ \\n DELETE FROM demo\_purch\_doc\_i. \\n TYPES: BEGIN OF structure, \\n PurchaseDocumentItem TYPE c LENGTH 10, \\n PurchaseDocument TYPE c LENGTH 10, \\n Price TYPE i, \\n END OF structure. \\n\\ \\n MODIFY ENTITIES OF demo\_cds\_action\_input\_param \\n ENTITY PurchaseItem \\n CREATE FIELDS ( PurchaseDocumentItem PurchaseDocument \\n Price ) WITH VALUE #( \\n ( %cid = 'cid1' \\n PurchaseDocumentItem = 'a' \\n PurchaseDocument = '1' \\n Price = 200 ) \\n ( %cid = 'cid2' \\n PurchaseDocumentItem = 'b' \\n PurchaseDocument = '2' \\n Price = 999 ) ) \\n FAILED DATA(failed) \\n REPORTED DATA(reported). \\n\\ \\n DATA no\_discount TYPE SORTED TABLE OF structure \\n WITH UNIQUE KEY PurchaseDocumentItem PurchaseDocument. \\n READ ENTITY demo\_cds\_action\_input\_param \\n ALL FIELDS WITH VALUE #( \\n ( PurchaseDocumentItem = 'a' PurchaseDocument = '1' ) \\n ( PurchaseDocumentItem = 'b' PurchaseDocument = '2' ) ) \\n RESULT FINAL(no\_discount1). \\n MOVE-CORRESPONDING no\_discount1 TO no\_discount. \\n out->next\_section( 'full price' \\n )->write( no\_discount ). \\n\\ \\n TRY. \\n MODIFY ENTITIES OF demo\_cds\_action\_input\_param \\n ENTITY PurchaseItem \\n EXECUTE deductDiscount \\n FROM VALUE #( ( PurchaseDocumentItem = 'a' PurchaseDocument = '1' \\n %param-discount\_percent = percentage ) \\n ( PurchaseDocumentItem = 'b' PurchaseDocument = '2' \\n %param-discount\_percent = percentage ) ) \\n RESULT FINAL(result) \\n FAILED failed \\n REPORTED reported. \\n CATCH cx\_sy\_conversion\_overflow INTO FINAL(exc). \\n out->write( 'percentage not accepted' ). \\n ENDTRY. \\n\\ \\n COMMIT ENTITIES RESPONSE OF demo\_cds\_action\_input\_param \\n FAILED FINAL(commit\_failed) \\n REPORTED FINAL(commit\_reported). \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT purchasedocumentitem, purchasedocument, Price \\n FROM demo\_purch\_doc\_i \\n INTO TABLE @FINAL(demo\_discount). \\n\\ \\n out->next\_section( 'price with discount' \\n )->write( percentage \\n )->next\_section( 'amount with discount' \\n )->write( demo\_discount ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_action\_reduce DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_action\_reduce IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA(percentage) = 10. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = percentage \\n )->request( ). \\n IF percentage > 100 \\n OR percentage < 0. \\n out->write( 'Enter a valid percentage between 0 and 100' ). \\n ENDIF. \\n\\ \\n DELETE FROM demo\_purch\_doc\_i. \\n TYPES: BEGIN OF structure, \\n PurchaseDocumentItem TYPE c LENGTH 10, \\n PurchaseDocument TYPE c LENGTH 10, \\n Price TYPE i, \\n END OF structure. \\n\\ \\n MODIFY ENTITIES OF demo\_cds\_action\_input\_param \\n ENTITY PurchaseItem \\n CREATE FIELDS ( PurchaseDocumentItem PurchaseDocument \\n Price ) WITH VALUE #( \\n ( %cid = 'cid1' \\n PurchaseDocumentItem = 'a' \\n PurchaseDocument = '1' \\n Price = 200 ) \\n ( %cid = 'cid2' \\n PurchaseDocumentItem = 'b' \\n PurchaseDocument = '2' \\n Price = 999 ) ) \\n FAILED DATA(failed) \\n REPORTED DATA(reported). \\n\\ \\n DATA no\_discount TYPE SORTED TABLE OF structure \\n WITH UNIQUE KEY PurchaseDocumentItem PurchaseDocument. \\n READ ENTITY demo\_cds\_action\_input\_param \\n ALL FIELDS WITH VALUE #( \\n ( PurchaseDocumentItem = 'a' PurchaseDocument = '1' ) \\n ( PurchaseDocumentItem = 'b' PurchaseDocument = '2' ) ) \\n RESULT FINAL(no\_discount1). \\n MOVE-CORRESPONDING no\_discount1 TO no\_discount. \\n out->next\_section( 'full price' \\n )->write( no\_discount ). \\n\\ \\n TRY. \\n MODIFY ENTITIES OF demo\_cds\_action\_input\_param \\n ENTITY PurchaseItem \\n EXECUTE deductDiscount \\n FROM VALUE #( ( PurchaseDocumentItem = 'a' PurchaseDocument = '1' \\n %param-discount\_percent = percentage ) \\n ( PurchaseDocumentItem = 'b' PurchaseDocument = '2' \\n %param-discount\_percent = percentage ) ) \\n RESULT FINAL(result) \\n FAILED failed \\n REPORTED reported. \\n CATCH cx\_sy\_conversion\_overflow INTO FINAL(exc). \\n out->write( 'percentage not accepted' ). \\n ENDTRY. \\n\\ \\n COMMIT ENTITIES RESPONSE OF demo\_cds\_action\_input\_param \\n FAILED FINAL(commit\_failed) \\n REPORTED FINAL(commit\_reported). \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT purchasedocumentitem, purchasedocument, Price \\n FROM demo\_purch\_doc\_i \\n INTO TABLE @FINAL(demo\_discount). \\n\\ \\n out->next\_section( 'price with discount' \\n )->write( percentage \\n )->next\_section( 'amount with discount' \\n )->write( demo\_discount ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_nonstandard.html abenbdl\_action.html abenbdl\_action\_abexas.html