---
title: "ABENABP_MAP_MESSAGES_ABEXA"
description: |
  ABENABP_MAP_MESSAGES_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABP_MAP_MESSAGES_ABEXA.htm"
abapFile: "ABENABP_MAP_MESSAGES_ABEXA.html"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "method", "class", "data", "internal-table", "ABENABP", "MAP", "MESSAGES", "ABEXA"]
---

This example demonstrates the RAP saver method `map_messages` within a RAP saver class using unmanaged RAP BOs.

**Data model**

The CDS data model consists of the root entity `DEMO_UNMANAGED_MAP_MESSAGES`, which represents the exposed RAP BO, and the [foreign entity](ABENRAP_FOREIGN_ENTITY_GLOSRY.html)\\ `DEMO_UNMANAGED_FOREIGN_ENTITY`, i. e. the RAP BO that is not exposed.

CDS data model of the exposed BO:

CDS data model of foreign entity:

**Behavior definition**

The following [RAP behavior definitions](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html), that are defined in [RAP BDL](ABENCDS_BDL_GLOSRY.html), are relevant for the example:

**Behavior implementation**

For each of the above RAP behavior definitions, one [ABP](ABENBEHAVIOR_POOL_GLOSRY.html) is created:

The ABPs purposely include only a few method implementations to keep the example small. In this case, only the `create` method is implemented on [handler](ABENABP_HANDLER_CLASS.html) side. On [saver](ABENABP_SAVER_CLASS.html) side, only the `save` method is implemented. The ABP of the exposed BO also includes the implementation of the `map_messages` method.

In this simple example, the `map_messages` method is implemented as follows: The messages that are available in the [`REPORTED LATE`](ABAPTYPE_TABLE_FOR.html) table of the foreign entity are sequentially processed within a [`LOOP AT`](ABAPLOOP_AT_ITAB_VARIANTS.html) statement. Here, the message from the foreign entity is first replaced, and then inserted into the `REPORTED LATE` table of the exposed BO. After the loop, the content of the `REPORTED LATE` table of the foreign entity is deleted.

**Access with ABAP using EML**

The above source code uses [EML](ABENEML_GLOSRY.html) to access the RAP business object from an ABAP class.

The example includes two ABAP EML `MODIFY` requests within one [RAP transaction](ABENRAP_LUW_GLOSRY.html). Each of the `MODIFY` requests includes a [create operation](ABENRAP_CREATE_OPERATION_GLOSRY.html) using [`CREATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) statements that create two instances for the exposed BO and the foreign entity. A [`COMMIT ENTITIES`](ABAPEMLCOMMIT_ENTITIES_DYN.html) statement triggers the save sequence and terminates the RAP transaction.

The output shows the result of the `MODIFY` requests. The instances that have been saved to the database table are selected from the database table into an internal table. The `COMMIT ENTITIES` statement includes the `REPORTED` response. The content of this response is output, too, demonstrating the effect of the `map_messages` method. The original messages for the instances of the foreign entity are available for the exposed BO. Furthermore, the messages have been changed and the `REPORTED` table of the foreign entity does not show any entries since the content has been deleted.

-   `DEMO_UNMANAGED_MAP_MESSAGES`

-   `DEMO_UNMANAGED_MAP_MESSAGES`

-   Global class of the behavior pool: `BP_DEMO_UNMANAGED_MAP_MESSAGES`. The actual behavior implementation takes place in local classes that are defined and implemented in the `BP_DEMO_UNMANAGED_MAP_MESSAGESCCIMP` of the behavior pool.
-   Global class of the behavior pool: `BP_DEMO_UNMANAGED_FOREIGN_ENTI`. The `BP_DEMO_UNMANAGED_FOREIGN_ENTICCIMP` contains the actual behavior implementation.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'Root entity for unmanaged BO'\\ndefine root view entity DEMO\_UNMANAGED\_MAP\_MESSAGES \\nas select from demo\_tab\_root\_5 \\{\\n key key\_field,\\n field1,\\n field2,\\n field3,\\n field4\\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'Root entity for unmanaged BO'\\ndefine root view entity DEMO\_UNMANAGED\_FOREIGN\_ENTITY \\nas select from demo\_tab\_root\_7 \\{\\n key key\_field,\\n char1,\\n char2,\\n num1,\\n num2\\n\\}\\n unmanaged\\nimplementation in class bp\_demo\_unmanaged\_map\_messages unique;\\nstrict ( 2 );\\nforeign entity DEMO\_UNMANAGED\_FOREIGN\_ENTITY;\\n\\ndefine behavior for DEMO\_UNMANAGED\_MAP\_MESSAGES\\nlock master\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly : update ) key\_field;\\n\\} unmanaged\\nimplementation in class bp\_demo\_unmanaged\_foreign\_enti unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_UNMANAGED\_FOREIGN\_ENTITY\\nlock master\\nauthorization master ( global )\\n\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly:update ) key\_field;\\n\\n\\} \* Public class definition \\nCLASS cl\_demo\_rap\_unm\_map\_messages DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n METHODS: \\n initialize\_dbtabs. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_unm\_map\_messages IMPLEMENTATION. \\n METHOD main. \\n\\ \\n MODIFY ENTITY demo\_unmanaged\_map\_messages \\n CREATE FIELDS ( key\_field field1 field2 field3 field4 ) \\n WITH VALUE #( \\n ( %cid = 'cid\_exposed\_bo\_1' \\n key\_field = 1 \\n field1 = 'exp\_bo\_1' \\n field2 = 'exp\_bo\_2' \\n field3 = 100 \\n field4 = 200 ) \\n ( %cid = 'cid\_exposed\_bo\_2' \\n key\_field = 2 \\n field1 = 'exp\_bo\_3' \\n field2 = 'exp\_bo\_4' \\n field3 = 200 \\n field4 = 300 ) ). \\n\\ \\n MODIFY ENTITY demo\_unmanaged\_foreign\_entity \\n CREATE FIELDS ( key\_field num1 num2 char1 char2 ) \\n WITH VALUE #( \\n ( %cid = 'cid\_foreign\_bo\_1' \\n key\_field = 11 \\n char1 = 'foreign\_1' \\n char2 = 'foreign\_2' \\n num1 = 1000 \\n num2 = 2000 ) \\n ( %cid = 'cid\_foreign\_bo\_2' \\n key\_field = 22 \\n char1 = 'foreign\_3' \\n char2 = 'foreign\_4' \\n num1 = 3000 \\n num2 = 4000 ) ). \\n\\ \\n COMMIT ENTITIES RESPONSES REPORTED FINAL(rep). \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT key\_field, field1, field2, field3, field4 \\n FROM demo\_tab\_root\_5 \\n ORDER BY key\_field \\n INTO TABLE @FINAL(exposed\_bo). \\n\\ \\n SELECT key\_field, char1, char2, num1, num2 \\n FROM demo\_tab\_root\_7 \\n ORDER BY key\_field \\n INTO TABLE @FINAL(foreign\_entity). \\n\\ \\n out->begin\_section( 'Demo: Mapping Messages' \\n )->write\_doc( 'Database table entries after the create operations:' \\n )->write( exposed\_bo \\n )->write( foreign\_entity \\n )->write\_doc( 'REPORTED LATE entries:' \\n )->write( rep \\n ). \\n\\ \\n ENDMETHOD. \\n METHOD initialize\_dbtabs. \\n DELETE FROM demo\_tab\_root\_5. \\n DELETE FROM demo\_tab\_root\_7. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n initialize\_dbtabs( ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_rap\_unm\_map\_messages DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n METHODS: \\n initialize\_dbtabs. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_unm\_map\_messages IMPLEMENTATION. \\n METHOD main. \\n\\ \\n MODIFY ENTITY demo\_unmanaged\_map\_messages \\n CREATE FIELDS ( key\_field field1 field2 field3 field4 ) \\n WITH VALUE #( \\n ( %cid = 'cid\_exposed\_bo\_1' \\n key\_field = 1 \\n field1 = 'exp\_bo\_1' \\n field2 = 'exp\_bo\_2' \\n field3 = 100 \\n field4 = 200 ) \\n ( %cid = 'cid\_exposed\_bo\_2' \\n key\_field = 2 \\n field1 = 'exp\_bo\_3' \\n field2 = 'exp\_bo\_4' \\n field3 = 200 \\n field4 = 300 ) ). \\n\\ \\n MODIFY ENTITY demo\_unmanaged\_foreign\_entity \\n CREATE FIELDS ( key\_field num1 num2 char1 char2 ) \\n WITH VALUE #( \\n ( %cid = 'cid\_foreign\_bo\_1' \\n key\_field = 11 \\n char1 = 'foreign\_1' \\n char2 = 'foreign\_2' \\n num1 = 1000 \\n num2 = 2000 ) \\n ( %cid = 'cid\_foreign\_bo\_2' \\n key\_field = 22 \\n char1 = 'foreign\_3' \\n char2 = 'foreign\_4' \\n num1 = 3000 \\n num2 = 4000 ) ). \\n\\ \\n COMMIT ENTITIES RESPONSES REPORTED FINAL(rep). \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT key\_field, field1, field2, field3, field4 \\n FROM demo\_tab\_root\_5 \\n ORDER BY key\_field \\n INTO TABLE @FINAL(exposed\_bo). \\n\\ \\n SELECT key\_field, char1, char2, num1, num2 \\n FROM demo\_tab\_root\_7 \\n ORDER BY key\_field \\n INTO TABLE @FINAL(foreign\_entity). \\n\\ \\n out->begin\_section( 'Demo: Mapping Messages' \\n )->write\_doc( 'Database table entries after the create operations:' \\n )->write( exposed\_bo \\n )->write( foreign\_entity \\n )->write\_doc( 'REPORTED LATE entries:' \\n )->write( rep \\n ). \\n\\ \\n ENDMETHOD. \\n METHOD initialize\_dbtabs. \\n DELETE FROM demo\_tab\_root\_5. \\n DELETE FROM demo\_tab\_root\_7. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n initialize\_dbtabs( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_saver\_class.html abenabp\_saver\_methods.html abenrap\_saver\_methods\_abexas.html