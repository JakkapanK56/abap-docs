---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_ENTITY_PROJ_EXT_ABEXA.htm"
abapFile: "ABENBDL_ENTITY_PROJ_EXT_ABEXA.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "ENTITY", "PROJ", "EXT", "ABEXA"]
---

This example demonstrates how the behavior of a projection BDEF is extended by means of a projection BDEF extension.

**Data model**

The CDS data model consists of one root node without child entities:

**CDS transactional interface**

The following [CDS transactional interface](ABENCDS_TRANS_INTERFACE_GLOSRY.html) is created for the root node to fulfill the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html) requirements for [RAP extensibility](ABENRAP_EXTENSIBILITY_GLOSRY.html).

**Behavior definition**

The [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `DEMO_RAP_BEH_EXT` is defined in [RAP BDL](ABENCDS_BDL_GLOSRY.html) as shown below. It defines implementation-relevant components and extension points.

**Behavior implementation**

For the RAP behavior definition, one [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) is created. The global class of the behavior pool is `BP_DEMO_RAP_BEH_EXT`, see `BP_DEMO_RAP_BEH_EXT===========CCIMP`. This global class implements the following methods:

**Interface BDEF**

The following [interface BDEF](ABENCDS_INTERFACE_BDEF_GLOSRY.html)\\ `DEMO_RAP_BEH_EXT_INT` is required as stable interface for extensions.

**Data model extension**

A child node is added to the RAP BO:

A CDS transactional interface is created for the child node to fulfill the RAP BO contract requirements for RAP extensibility.

A [to-child association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) is added to the root node via a CDS view entity extension on the base layer:

The same to-child association is also added on the interface layer:

**Behavior extension**

The BDEF extension `DEMO_RAP_BEH_EXT_CH` extends the root node and defines behavior for the extension child node via the BDEF interface layer.

**ABP extension**

The ABP extension is implemented in the global class `BP_DEMO_RAP_BEH_EXT_CH`, see `BP_DEMO_RAP_BEH_EXT_CH========CCIMP`. This global class implements the following methods:

**Data model projection**

Projection of the root node:

Projection of the child node:

View entity extension `DEMO_RAP_VE_EXTENSION` that establishes a to-child association between original root node and extended child node:

**Behavior Projection**

The projection BDEF defines behavior for the root node. It declares the root node as extensible and exposes the RAP BO standard operations.

**BDEF projection extension**

The BDEF projection extension `DEMO_RAP_PROJ_EXT_BEH_1` extends the root node and defines behavior for the extension child node.

**Access with ABAP using EML**

The above source code uses [ABAP EML](ABENEML_GLOSRY.html) to access the projection BO from an ABAP class:

The screen output includes a table that lists the execution order of handler methods of the ABAP behavior pool. This shows which methods in which order are executed when accessing the RAP BO.

-   `get_instance_features`: Instance feature control for the standard operation `update`. If the value of field `int_field1` is more than 50, updates are not allowed. If the value is equal to or smaller than 50, updates are allowed.
-   `get_global_authorizations`: Global authorization control defines that create, update, and delete are always allowed.
-   `Limit`: Validation that checks the value of field `int_field2`. If the value is greater than 500, the validation fails and the entity instance is not saved.

-   **Extension of the parent entity**

-   `get_global_features`: Global feature control for the action `setValue`. This action can only be executed in the time period between 6 am and 10 pm (day shift).
-   `get_global_authorizations`: The original RAP BO defines global authorization control. RAP BO operations added via an extension require their own implementation of the global authorization control. This method generally allows execution of the method `setValue`. There are no access restrictions.
-   `setValue`: Action that sets field `int_field2` to value *888*.

-   **Extension entity behavior definition for the child entity**

-   `get_global_authorizations`: The original RAP BO defines global authorization control. For the action `ActionExt`, defined in the child node, a separate implementation of the authorization control method is required. The implementation generally allows execution of the method `ActionExt`. There are no access restrictions.
-   `myDet`: Determination on modify. Sets the value of field `int_field1` to *777*.
-   `ActionExt`: Action that updates field `char_field1` for all requested entity instances.

-   It inserts two parent entity instances and two child entity instances.
-   It updates the two parent entity instances
-   It executes the action `setValue` from the projection extension.
-   It executes the action `ActionExt` from the extension to the original base RAP BO.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, beh ext'\\n@AbapCatalog.extensibility.allowNewCompositions: true\\ndefine root view entity DEMO\_RAP\_BEH\_EXT\\n as select from demo\_dbtab\_field\\n\\n\\{\\n key key\_field,\\n char\_field1,\\n int\_field1,\\n int\_field2\\n\\}\\n @EndUserText.label: 'CDS transactional interface'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@AbapCatalog.extensibility.allowNewCompositions: true\\ndefine root view entity DEMO\_RAP\_BEH\_EXT\_INT \\nprovider contract transactional\_interface\\nas projection on DEMO\_RAP\_BEH\_EXT as RootInterface\\n\\{\\n key key\_field,\\n char\_field1,\\n int\_field1,\\n int\_field2\\n\\}\\n managed implementation in class bp\_demo\_rap\_beh\_ext unique;\\nstrict(2);\\nextensible \\{ with determinations on modify; \\}\\nwith privileged mode disabling ac\_base;\\ndefine behavior for DEMO\_RAP\_BEH\_EXT\\npersistent table DEMO\_DBTAB\_FIELD\\nlock master\\nauthorization master ( global )\\nextensible\\n\\{\\n create;\\n update (features:instance);\\n delete;\\n\\n validation Limit on save \\{ create; \\}\\n field(readonly:update) key\_field;\\n\\}\\ndefine authorization context ac\_base\\n\\{ 'AUTHOBJ1'; \\}\\n\\ndefine own authorization context by privileged mode; interface;\\nextensible;\\n\\ndefine behavior for DEMO\_RAP\_BEH\_EXT\_INT alias RootInterface\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\} @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, beh ext'\\ndefine view entity DEMO\_RAP\_BEH\_EXT\_CHILD\\n as select from demo\_dbtab\_fi\_ch\\n association to parent DEMO\_RAP\_BEH\_EXT as \_parent \\n on $projection.key\_field = \_parent.key\_field\\n\\{\\n key key\_field,\\n key key\_field\_child,\\n char\_field1,\\n int\_field1,\\n int\_field3,\\n \_parent\\n\\}\\n @EndUserText.label: 'CDS interface child'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_RAP\_BEH\_EXT\_INT\_CH \\nas projection on DEMO\_RAP\_BEH\_EXT\_CHILD\\n\\{\\n key key\_field,\\n key key\_field\_child,\\n char\_field1,\\n int\_field1,\\n int\_field3,\\n /\* Associations \*/\\n \_parent: redirected to parent DEMO\_RAP\_BEH\_EXT\_INT\\n\\}\\n extend view entity DEMO\_RAP\_BEH\_EXT with \\ncomposition of exact one to many DEMO\_RAP\_BEH\_EXT\_CHILD as \_child\\n\\{\\n \_child\\n\\}\\n extend view entity DEMO\_RAP\_BEH\_EXT\_INT with \\n\\{\\nRootInterface.\_child:\\n redirected to composition child DEMO\_RAP\_BEH\_EXT\_INT\_CH\\n\\}\\n extension using interface DEMO\_RAP\_BEH\_EXT\_INT\\nimplementation in class bp\_demo\_rap\_beh\_ext\_ch unique;\\n\\nextend behavior for RootInterface\\n\\{\\n\\n association \_child \\{ create; \\}\\n\\n action ( features : global, authorization : global ) setValue\\n result \[1\] $self;\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_BEH\_EXT\_CHILD alias ChildInterface\\nusing DEMO\_RAP\_BEH\_EXT\_INT\_CH\\npersistent table demo\_dbtab\_fi\_ch\\n( lock, authorization ) dependent\\n\\{\\n update;\\n delete;\\n field ( readonly ) key\_field;\\n field ( readonly ) key\_field\_child;\\n association \_parent;\\n determination myDet on modify \\{ field int\_field3; \\}\\n action ( authorization : global ) ActionExt;\\n\\} @EndUserText.label: 'CDS root pv, RAP extensibility'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@AbapCatalog.extensibility.allowNewCompositions: true\\ndefine root view entity demo\_rap\_proj\_ext\_beh \\nprovider contract transactional\_query\\nas projection on DEMO\_RAP\_BEH\_EXT \\{\\n key key\_field,\\n char\_field1,\\n int\_field1,\\n int\_field2\\n\\n\\}\\n @EndUserText.label: 'CDS pv child,RAP projection extension'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_RAP\_PROJ\_EXT\_BEH\_CH\\n as projection on DEMO\_RAP\_BEH\_EXT\_CHILD\\n\\{\\n key key\_field,\\n key key\_field\_child,\\n char\_field1,\\n int\_field1,\\n int\_field3,\\n \_parent: redirected to parent demo\_rap\_proj\_ext\_beh \\n\\}\\n extend view entity demo\_rap\_proj\_ext\_beh with \\{\\n /\* Associations \*/\\n \_child : redirected to composition child DEMO\_RAP\_PROJ\_EXT\_BEH\_CH\\n\\}\\n projection;\\nstrict(2);\\nextensible;\\n\\ndefine behavior for demo\_rap\_proj\_ext\_beh alias Root\\nextensible\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\} extension for projection;\\n\\nextend behavior for Root\\n//authorization (global)\\n\\{\\n use association \_child \\{create;\\}\\n use action setValue;\\n\\n// mapping for demo\_rap\_struc corresponding;\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_EXT\_BEH\_CH alias Child\\n\\{\\n use association \_parent;\\n use action ActionExt;\\n field ( readonly ) int\_field3;\\n\\} \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_proj\_ext DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_proj\_ext IMPLEMENTATION. \\n METHOD main. \\n "Empty tables \\n DELETE FROM demo\_dbtab\_field. \\n DELETE FROM demo\_dbtab\_fi\_ch. \\n CLEAR bp\_demo\_unmanaged\_root\_draft=>handlers\_called. \\n\\ \\n "Deep Create \\n MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh \\n ENTITY root \\n CREATE FIELDS ( key\_field char\_field1 int\_field1 int\_field2 ) \\n WITH VALUE #( ( %cid = 'cid1' \\n key\_field = '12AB111AABBCC334' \\n char\_field1 = 'A' \\n int\_field1 = 51 \\n int\_field2 = 11 ) \\n ( %cid = 'cid2' \\n key\_field = '1111111122222222' \\n char\_field1 = 'B' \\n int\_field1 = 10 \\n int\_field2 = 500 ) ) \\n\\ \\n CREATE BY \\\\\_child FIELDS ( char\_field1 int\_field1 ) \\n WITH VALUE #( ( %cid\_ref = 'cid1' \\n %target = VALUE #( ( \\n %cid = 'cid3' \\n key\_field\_child = 11 \\n char\_field1 = 'AA' \\n int\_field1 = 10 \\n int\_field3 = 100 ) ) ) \\n ( %cid\_ref = 'cid2' %target = VALUE #( ( %cid = 'cid4' \\n key\_field\_child = 22 \\n char\_field1 = 'BB' \\n int\_field1 = 11 \\n int\_field3 = 200 ) ) ) ) \\n MAPPED DATA(mapped) \\n FAILED DATA(failed) \\n REPORTED DATA(reported). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT key\_field, char\_field1, int\_field1, int\_field2 \\n FROM demo\_dbtab\_field \\n INTO TABLE @FINAL(create\_parent). \\n SELECT key\_field, char\_field1, int\_field1 \\n FROM demo\_dbtab\_fi\_ch \\n INTO TABLE @FINAL(create\_child). \\n\\ \\n\\ \\n\*\*\*\*\*\*\* UPDATE: only allowed if int\_field1 <= 50. feature control\*\*\*\*\*\* \\n MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh \\n ENTITY root \\n UPDATE \\n FIELDS ( char\_field1 ) \\n WITH VALUE #( ( key\_field = '12AB111AABBCC334' \\n char\_field1 = 'update' \\n ) \\n ( key\_field = '1111111122222222' \\n char\_field1 = 'update' \\n ) \\n ) \\n MAPPED mapped \\n FAILED failed \\n REPORTED reported. \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT key\_field, char\_field1, int\_field1, int\_field2 \\n FROM demo\_dbtab\_field \\n INTO TABLE @FINAL(update\_parent). \\n\\ \\n MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh \\n ENTITY root \\n EXECUTE setvalue \\n FROM VALUE #( ( key\_field = '1111111122222222' ) ) \\n\\ \\n RESULT FINAL(result) \\n FAILED failed \\n REPORTED reported. \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT key\_field, char\_field1, int\_field1, int\_field2 \\n FROM demo\_dbtab\_field \\n INTO TABLE @FINAL(action\_setvalue). \\n\\ \\n MODIFY ENTITIES OF demo\_rap\_proj\_ext\_beh \\n ENTITY child \\n EXECUTE actionext \\n FROM VALUE #( ( key\_field = '12AB111AABBCC334' \\n key\_field\_child = 11 ) ) \\n FAILED failed \\n REPORTED reported. \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT key\_field, char\_field1, int\_field1 \\n FROM demo\_dbtab\_fi\_ch \\n INTO TABLE @FINAL(action\_actionext). \\n\\ \\n "Display \\n out->next\_section( 'CREATE (root entity)' \\n )->write( create\_parent \\n )->next\_section( 'CREATE BY assoc (child entity)' \\n )->write( create\_child \\n )->next\_section( 'UPDATE (root entity)' \\n )->write( update\_parent \\n )->next\_section( 'EXECUTE action SetValue' \\n )->write( action\_setvalue \\n )->next\_section( 'EXECUTE action ActionExt' \\n )->write( action\_actionext \\n )->write\_html( '**Handler methods called**' \\n )->write( data = bp\_demo\_rap\_beh\_ext=>handlers\_called \\n name = 'Handler methods log table' ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_projection.html abenbdl\_extension\_for\_projection.html