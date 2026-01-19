---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEML_MODIFY_AUGMENTING_ABEXA.htm"
abapFile: "ABENEML_MODIFY_AUGMENTING_ABEXA.html"
keywords: ["select", "update", "delete", "do", "if", "method", "class", "data", "ABENEML", "MODIFY", "AUGMENTING", "ABEXA"]
---

This example demonstrates the ABAP EML `MODIFY` statement with the addition `AUGMENTING` with a RAP projection business object.

**Base BDEF**

The base BDEF is the managed RAP behavior definition `DEMO_MANAGED_ROOT_WAS`. It defines the behavior for two entities which are connected via a CDS composition relation.

**Projection BDEF**

The projection BDEF reuses the standard operations from the base BDEF and augments the `create`, `update`, and `create-by-association` operations.

**Behavior implementation**

For the above projection BDEF, one [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is created. The global class of the behavior pool is `BP_DEMO_MANAGED_ROOT_PROJ`. The actual behavior implementation takes place in local classes that are defined and implemented in the `BP_DEMO_MANAGED_ROOT_PROJ=====CCIMP` of the behavior pool. In the behavior pool, operation augmentation is implemented in the following methods:

**Access with ABAP using EML**

The above source code uses [EML](ABENEML_GLOSRY.html) to access the RAP business object from an ABAP class:

-   `augment_create`
-   Augments an original base instance for the operation `create`. Whenever new instances are created, the value of field `field1` is set to `create_augment`.
-   `augment_update`
-   Augments an original base instance for the operation `update`. Whenever an existing entity instance is updated, the value of field `field4` is set to *222*.
-   `augment_cba_child`
-   Augments an original base instance for the operation `create by association`. Whenever new child instances are created via the parent entity, the value of field `field2` is set to `cba_augment`.

-   Using an ABAP EML `MODIFY` statement, two parent entity instances are created. In the same request, one of the created instances gets updated. The operation augmentation automatically adds the value `create_augment` for field `field1` for each entity instance. For the updated entity instance, `field4` is set to *222*.
-   With a further ABAP EML `MODIFY` statement, a child entity instance for each parent entity instance is created via a create-by-association operation. The operation augmentation automatically adds the value *cba\_augment* for field `field2` for each newly created child entity instance.
-   The output window shows the database entries of the root and child entities' tables.

managed implementation in class bp\_demo\_managed\_root\_was unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_MANAGED\_ROOT\_WAS alias \_Root\\npersistent table demo\_tab\_root\_3\\nlock master\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; \\}\\n field(readonly:update) key\_field;\\n\\}\\n\\ndefine behavior for DEMO\_MANAGED\_CHILD\_WAS alias \_Child\\npersistent table demo\_tab\_child\_3\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n update;\\n delete;\\n field ( readonly ) key\_field;\\n field(readonly:update) key\_field\_child;\\n association \_parent;\\n\\n\\} projection implementation in class bp\_demo\_managed\_root\_proj unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_MANAGED\_ROOT\_PROJ alias \_Parent\\n\\{\\n use create ( augment );\\n use update ( augment );\\n use delete;\\n\\n use association \_child \\{ create ( augment ); \\}\\n\\n\\}\\n\\ndefine behavior for DEMO\_MANAGED\_CHILD\_PROJ alias \_Child\\n\\{\\n use update;\\n use delete;\\n\\n use association \_parent;\\n\\} \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_eml\_modify\_agmntng DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n METHODS: \\n initialize\_dbtabs. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_eml\_modify\_agmntng IMPLEMENTATION. \\n METHOD main. \\n\\ \\n MODIFY ENTITY demo\_managed\_root\_proj \\n CREATE FIELDS ( key\_field \\n field2 field3 field4 ) WITH VALUE #( \\n ( %cid = 'cid1' \\n key\_field = 1 \\n field2 = 'create\_1' \\n field3 = 1 \\n field4 = 2 ) \\n ( %cid = 'cid2' \\n key\_field = 2 \\n field2 = 'create\_2' \\n field3 = 3 \\n field4 = 4 ) ) \\n MAPPED FINAL(m1) \\n FAILED FINAL(f1) \\n REPORTED FINAL(r1). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n MODIFY ENTITY demo\_managed\_root\_proj \\n UPDATE FIELDS ( field3 ) WITH VALUE #( \\n ( key\_field = 1 \\n field3 = 111 ) ) \\n FAILED FINAL(f2) \\n REPORTED FINAL(r2). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT key\_field, field1, field2, field3, field4 \\n FROM demo\_tab\_root\_3 \\n ORDER BY key\_field \\n INTO TABLE @FINAL(root\_tab). \\n\\ \\n out->begin\_section( \`Demo for MODIFY AUGMENTING\` \\n )->write\_doc( \\n\`Database table entries after the create and update operations:\` \\n )->write( root\_tab ). \\n\\ \\n MODIFY ENTITY demo\_managed\_root\_proj \\n CREATE BY \\\\\_Child FIELDS ( key\_field\_child field1 \\n field3 field4 ) WITH VALUE #( \\n ( key\_field = 1 \\n %target = VALUE #( ( %cid = 'cid3' \\n key\_field\_child = 1 \\n field1 = 'cba1' \\n field3 = 1 \\n field4 = 2 ) ) ) \\n ( key\_field = 2 \\n %target = VALUE #( ( %cid = 'cid4' \\n key\_field\_child = 2 \\n field1 = 'cba2' \\n field3 = 3 \\n field4 = 4 ) ) ) ) \\n MAPPED FINAL(m3) \\n FAILED FINAL(f3) \\n REPORTED FINAL(r4). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT key\_field, key\_field\_child, field1, field2, field3, field4 \\n FROM demo\_tab\_child\_3 \\n ORDER BY key\_field \\n INTO TABLE @FINAL(child\_tab). \\n\\ \\n out->write\_doc( \\n\`Database table entries after the create-by-association operation:\` \\n )->write( child\_tab ). \\n\\ \\n ENDMETHOD. \\n METHOD initialize\_dbtabs. \\n DELETE FROM demo\_tab\_root\_3. \\n DELETE FROM demo\_tab\_child\_3. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n initialize\_dbtabs( ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_eml\_modify\_agmntng DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n METHODS: \\n initialize\_dbtabs. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_eml\_modify\_agmntng IMPLEMENTATION. \\n METHOD main. \\n\\ \\n MODIFY ENTITY demo\_managed\_root\_proj \\n CREATE FIELDS ( key\_field \\n field2 field3 field4 ) WITH VALUE #( \\n ( %cid = 'cid1' \\n key\_field = 1 \\n field2 = 'create\_1' \\n field3 = 1 \\n field4 = 2 ) \\n ( %cid = 'cid2' \\n key\_field = 2 \\n field2 = 'create\_2' \\n field3 = 3 \\n field4 = 4 ) ) \\n MAPPED FINAL(m1) \\n FAILED FINAL(f1) \\n REPORTED FINAL(r1). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n MODIFY ENTITY demo\_managed\_root\_proj \\n UPDATE FIELDS ( field3 ) WITH VALUE #( \\n ( key\_field = 1 \\n field3 = 111 ) ) \\n FAILED FINAL(f2) \\n REPORTED FINAL(r2). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT key\_field, field1, field2, field3, field4 \\n FROM demo\_tab\_root\_3 \\n ORDER BY key\_field \\n INTO TABLE @FINAL(root\_tab). \\n\\ \\n out->begin\_section( \`Demo for MODIFY AUGMENTING\` \\n )->write\_doc( \\n\`Database table entries after the create and update operations:\` \\n )->write( root\_tab ). \\n\\ \\n MODIFY ENTITY demo\_managed\_root\_proj \\n CREATE BY \\\\\_Child FIELDS ( key\_field\_child field1 \\n field3 field4 ) WITH VALUE #( \\n ( key\_field = 1 \\n %target = VALUE #( ( %cid = 'cid3' \\n key\_field\_child = 1 \\n field1 = 'cba1' \\n field3 = 1 \\n field4 = 2 ) ) ) \\n ( key\_field = 2 \\n %target = VALUE #( ( %cid = 'cid4' \\n key\_field\_child = 2 \\n field1 = 'cba2' \\n field3 = 3 \\n field4 = 4 ) ) ) ) \\n MAPPED FINAL(m3) \\n FAILED FINAL(f3) \\n REPORTED FINAL(r4). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT key\_field, key\_field\_child, field1, field2, field3, field4 \\n FROM demo\_tab\_child\_3 \\n ORDER BY key\_field \\n INTO TABLE @FINAL(child\_tab). \\n\\ \\n out->write\_doc( \\n\`Database table entries after the create-by-association operation:\` \\n )->write( child\_tab ). \\n\\ \\n ENDMETHOD. \\n METHOD initialize\_dbtabs. \\n DELETE FROM demo\_tab\_root\_3. \\n DELETE FROM demo\_tab\_child\_3. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n initialize\_dbtabs( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abeneml\_in\_abp.html abapmodify\_aug\_entity\_entities.html