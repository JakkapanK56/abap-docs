---
title: "ABENEML_MODIFY_CUSTOM_OP_ABEXA"
description: |
  ABENEML_MODIFY_CUSTOM_OP_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEML_MODIFY_CUSTOM_OP_ABEXA.htm"
abapFile: "ABENEML_MODIFY_CUSTOM_OP_ABEXA.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "class", "data", "types", "ABENEML", "MODIFY", "CUSTOM", "ABEXA"]
---

This example demonstrates This example demonstrates how a `MODIFY` statement can be used to access a managed RAP BO and execute an action. The scenario is a simple calculation based on existing values in two columns of a table whose result is inserted in another column.

**Data model**

The CDS data model consists of the root entity `DEMO_MANAGED_ROOT_CUSTOM` and its child entity `DEMO_MANAGED_CHILD_CUSTOM`.

Root entity:

Child entity:

**Behavior definition**

The [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `DEMO_MANAGED_ROOT_CUSTOM` is defined in [RAP BDL](ABENCDS_BDL_GLOSRY.html) as follows:

**Action definition**

The action `calculate` triggers a calculation based on the respective math symbol to be inserted by a user. The action has the output parameter `$self` with cardinality 1. In doing so, the parameter `result` returns the same entity instance for which the action is executed.

**Behavior implementation**

For the above RAP behavior definition, one [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) is created. The global class of the behavior pool is `BP_DEMO_MANAGED_ROOT_CUSTOM`. This global class implements the local handler class `LHC_DEMO_MANAGED_ROOT_CUSTOM`, which contains the `calculate` method to implement the action. The actual implementation takes place in the `BP_DEMO_MANAGED_ROOT_CUSTOM===CCIMP`:

**Access with ABAP using EML**

The above source code uses [EML](ABENEML_GLOSRY.html) to access the RAP business object from an ABAP class:

-   The existing values of two columns are read using a `READ` EML statement into the transactional buffer so as to get the numbers for which the calculation is to be carried out.
-   Depending on the math symbol provided, the calculation is carried out.
-   Using a `MODIFY` EML statement, the fields of a third column are updated with the result of the calculation.
-   The output parameter `result` is finally filled so that the calculation result can be displayed in the column.

-   As initial step in the example, the user is prompted to insert a math symbol on whose basis the calculation is done.
-   Using a `MODIFY` statement, demo values (that is, numbers for the calculation) are created. These values are displayed after they were read from the [RAP BO instance](ABENRAP_BO_INSTANCE_GLOSRY.html) using a `READ` statement.
-   The action `calculate` is executed on the instance with the statement `EXECUTE` using the math symbol that has been provided.
-   The `result`, `failed`, and `reported` parameters are returned.
-   The changes that were performed by the action in the transactional buffer are committed to the database with a `COMMIT ENTITIES` statement.
-   A `SELECT` statement is finally used to read the changed data from the persistent table `DEMO_TAB_ROOT_2` to fill the output table. As a result of the action, the third column is filled with the calculation result.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine root view entity DEMO\_MANAGED\_ROOT\_CUSTOM\\n as select from demo\_tab\_root\_2\\n composition \[1..1\] of DEMO\_MANAGED\_CHILD\_CUSTOM \\n as \_child\\n \\{\\n \_child, \\n key demo\_tab\_root\_2.key\_field,\\n demo\_tab\_root\_2.data\_field1\_root,\\n demo\_tab\_root\_2.data\_field2\_root,\\n demo\_tab\_root\_2.data\_field3\_root,\\n demo\_tab\_root\_2.data\_field4\_root\\n \\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_MANAGED\_CHILD\_CUSTOM\\n as select from demo\_tab\_child\_2\\n association to parent DEMO\_MANAGED\_ROOT\_CUSTOM as \_parent \\n on $projection.key\_field = \_parent.key\_field\\n \\{\\n \_parent,\\n key demo\_tab\_child\_2.key\_field,\\n demo\_tab\_child\_2.data\_field1\_child,\\n demo\_tab\_child\_2.data\_field2\_child,\\n demo\_tab\_child\_2.data\_field3\_child,\\n demo\_tab\_child\_2.data\_field4\_child\\n \\}\\n managed implementation in class bp\_demo\_managed\_root\_custom unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_MANAGED\_ROOT\_CUSTOM\\npersistent table DEMO\_TAB\_ROOT\_2\\nlock master\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; \\}\\n action calcPercentage parameter DEMO\_CDS\_ABSTRACT\_CALCULATE result \[1\] $self;\\n action calculate parameter DEMO\_CDS\_ABSTRACT\_CALCULATE result \[1\] $self;\\n field(readonly:update) key\_field;\\n\\}\\n\\ndefine behavior for DEMO\_MANAGED\_CHILD\_CUSTOM\\npersistent table DEMO\_TAB\_CHILD\_2\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n update;\\n delete;\\n field ( readonly ) key\_field;\\n association \_parent;\\n\\} \* Public class definition \\nCLASS cl\_demo\_rap\_custom\_op\_m DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_custom\_op\_m IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA(math\_symbol) = '+'. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = math\_symbol \\n )->request( ). \\n\\ \\n IF math\_symbol NE '+' \\n AND math\_symbol NE '-' \\n AND math\_symbol NE '/' \\n AND math\_symbol NE '\*'. \\n out->write( \\n 'Only the following math symbols are valid: + - \* / ' \\n ). \\n RETURN. \\n ENDIF. \\n\\ \\n DELETE FROM demo\_tab\_root\_2. \\n\\ \\n MODIFY ENTITY demo\_managed\_root\_custom \\n CREATE FIELDS ( key\_field data\_field3\_root ) \\n WITH VALUE #( ( %cid = 'cid1' \\n key\_field = 2 \\n data\_field3\_root = 3 ) \\n ( %cid = 'cid2' \\n key\_field = 6 \\n data\_field3\_root = 8 ) \\n ) \\n FAILED DATA(failed) \\n REPORTED DATA(reported). \\n\\ \\n TYPES: BEGIN OF structure, \\n key\_field TYPE i, \\n data\_field3\_root TYPE i, \\n data\_field4\_root TYPE decfloat16, \\n END OF structure. \\n DATA no\_calc TYPE SORTED TABLE OF structure \\n WITH UNIQUE KEY key\_field. \\n READ ENTITY demo\_managed\_root\_custom \\n ALL FIELDS WITH VALUE #( ( key\_field = 2 ) ( key\_field = 6 ) ) \\n RESULT FINAL(res). \\n MOVE-CORRESPONDING res TO no\_calc. \\n out->next\_section( 'Values before EXECUTE operation' \\n )->write( no\_calc ). \\n\\ \\n MODIFY ENTITIES OF demo\_managed\_root\_custom \\n ENTITY demo\_managed\_root\_custom \\n EXECUTE calculate \\n FROM VALUE #( ( key\_field = 2 \\n %param-calculation = math\_symbol ) \\n ( key\_field = 6 \\n %param-calculation = math\_symbol ) ) \\n FAILED failed \\n REPORTED reported. \\n\\ \\n COMMIT ENTITIES RESPONSE OF demo\_managed\_root\_custom \\n FAILED FINAL(commit\_failed) \\n REPORTED FINAL(commit\_reported). \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT key\_field, data\_field3\_root, data\_field4\_root \\n FROM demo\_tab\_root\_2 INTO TABLE @FINAL(calc\_result). \\n\\ \\n out->next\_section( 'Values after EXECUTE operation' \\n )->write( calc\_result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_rap\_custom\_op\_m DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_custom\_op\_m IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA(math\_symbol) = '+'. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = math\_symbol \\n )->request( ). \\n\\ \\n IF math\_symbol NE '+' \\n AND math\_symbol NE '-' \\n AND math\_symbol NE '/' \\n AND math\_symbol NE '\*'. \\n out->write( \\n 'Only the following math symbols are valid: + - \* / ' \\n ). \\n RETURN. \\n ENDIF. \\n\\ \\n DELETE FROM demo\_tab\_root\_2. \\n\\ \\n MODIFY ENTITY demo\_managed\_root\_custom \\n CREATE FIELDS ( key\_field data\_field3\_root ) \\n WITH VALUE #( ( %cid = 'cid1' \\n key\_field = 2 \\n data\_field3\_root = 3 ) \\n ( %cid = 'cid2' \\n key\_field = 6 \\n data\_field3\_root = 8 ) \\n ) \\n FAILED DATA(failed) \\n REPORTED DATA(reported). \\n\\ \\n TYPES: BEGIN OF structure, \\n key\_field TYPE i, \\n data\_field3\_root TYPE i, \\n data\_field4\_root TYPE decfloat16, \\n END OF structure. \\n DATA no\_calc TYPE SORTED TABLE OF structure \\n WITH UNIQUE KEY key\_field. \\n READ ENTITY demo\_managed\_root\_custom \\n ALL FIELDS WITH VALUE #( ( key\_field = 2 ) ( key\_field = 6 ) ) \\n RESULT FINAL(res). \\n MOVE-CORRESPONDING res TO no\_calc. \\n out->next\_section( 'Values before EXECUTE operation' \\n )->write( no\_calc ). \\n\\ \\n MODIFY ENTITIES OF demo\_managed\_root\_custom \\n ENTITY demo\_managed\_root\_custom \\n EXECUTE calculate \\n FROM VALUE #( ( key\_field = 2 \\n %param-calculation = math\_symbol ) \\n ( key\_field = 6 \\n %param-calculation = math\_symbol ) ) \\n FAILED failed \\n REPORTED reported. \\n\\ \\n COMMIT ENTITIES RESPONSE OF demo\_managed\_root\_custom \\n FAILED FINAL(commit\_failed) \\n REPORTED FINAL(commit\_reported). \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT key\_field, data\_field3\_root, data\_field4\_root \\n FROM demo\_tab\_root\_2 INTO TABLE @FINAL(calc\_result). \\n\\ \\n out->next\_section( 'Values after EXECUTE operation' \\n )->write( calc\_result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapmodify\_entity\_entities.html abapeml\_modify\_examples\_abexas.html