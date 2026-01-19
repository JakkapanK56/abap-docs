---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_SAVE_AFTER_ABEXA.htm"
abapFile: "ABENBDL_SAVE_AFTER_ABEXA.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "method", "class", "data", "internal-table", "ABENBDL", "SAVE", "AFTER", "ABEXA"]
---

This example demonstrates explicit save order using the two unrelated RAP BOs, `DEMO_RAP_SAVE_AFTER_A` and `DEMO_RAP_SAVE_AFTER_B`. `DEMO_RAP_SAVE_AFTER_A` specifies `save after` and is set to save after `DEMO_RAP_SAVE_AFTER_B`. Both BOs specify `late numbering`.

**Behavior definitions**

`DEMO_RAP_SAVE_AFTER_A`:

`DEMO_RAP_SAVE_AFTER_B`:

**Access with ABAP using EML and ABAP SQL**

The above source code uses [EML](ABENEML_GLOSRY.html) to access the RAP business objects from an ABAP class:

-   Two ABAP EML `MODIFY` statements create two instances for each RAP BO. The `COMMIT ENTITIES` statement triggers the saving of these instances. Then, ABAP SQL `SELECT` statements retrieve the saved instances from the database.
-   The database entries and the content of internal tables that act as log tables are displayed. The constructor of the demo class includes deleting and populating the database tables so that the simplified key assignment in the `adjust_numbers` methods does not work with the same key values for both RAP BOs.
-   Context of the log tables:

-   Both BDEFs specify `with additional save`. Consequently, the [ABAP behavior pools](ABENBEHAVIOR_POOL_GLOSRY.html), `BP_DEMO_RAP_SAVE_AFTER_A` and `BP_DEMO_RAP_SAVE_AFTER_B`, include the `save_modified`\\ [RAP saver method](ABENABP_SAVER_METHOD_GLOSRY.html). **Note:** The [RAP additional save](ABENRAP_ADD_SAVE_GLOSRY.html) scenario does not relate to the `save after` specification in the example. It is used only for demonstration, allowing a log table to be populated when calling the `save_modified` methods.
-   Both implementations of `save_modified` iterate through the created instances, adding an entry with a time stamp to the log table for each instance.
-   When the save sequence for both create operations is triggered, the `save_modified` methods are called. However, due to the explicitly set save order, the `save_modified` method of `DEMO_RAP_SAVE_AFTER_B` is executed before `DEMO_RAP_SAVE_AFTER_A`. This order is reflected in the log table entries. If the save sequencing was not explicitly set, the `save_modified` method of `DEMO_RAP_SAVE_AFTER_A` executes before `DEMO_RAP_SAVE_AFTER_B`.
-   The `adjust_numbers` method implementation of RAP BO `DEMO_RAP_SAVE_AFTER_B` adds `%pid` values to an internal table that is declared in the global class of the ABAP behavior pool. The content of this internal table is accessed in the `adjust_numbers` method implementation of RAP BO `DEMO_RAP_SAVE_AFTER_A`. The `%pid` values are used by a `CONVERT KEY` statement, demonstrating that final keys can be accessed this way. The `%pid` and key values are added to an internal table that is output in the example.

managed with additional save\\nimplementation in class bp\_demo\_rap\_save\_after\_a unique;\\nstrict ( 2 );\\nsave after demo\_rap\_save\_after\_b;\\n\\ndefine behavior for demo\_rap\_save\_after\_a\\npersistent table demo\_tab\_root\_5\\nlock master\\nauthorization master ( none )\\nlate numbering\\n\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly:update ) key\_field;\\n\\} managed with additional save\\nimplementation in class bp\_demo\_rap\_save\_after\_b unique;\\nstrict ( 2 );\\n\\ndefine behavior for demo\_rap\_save\_after\_b\\npersistent table demo\_tab\_root\\nlock master\\nauthorization master ( none )\\nlate numbering\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly:update ) key\_field;\\n\\} \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_save\_after DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n METHODS initialize\_dbtabs. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_save\_after IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->write( \`Explicit Save Order Demo\` ). \\n\\ \\n MODIFY ENTITY demo\_rap\_save\_after\_a \\n CREATE FIELDS ( key\_field field1 field2 field3 field4 ) \\n WITH VALUE #( \\n ( %cid = \`cid\_a1\` \\n field1 = 'aaa' field2 = 'bbb' \\n field3 = 1 field4 = 2 ) \\n ( %cid = \`cid\_a2\` \\n field1 = 'ccc' field2 = 'ddd' \\n field3 = 3 field4 = 4 ) ). \\n\\ \\n MODIFY ENTITY demo\_rap\_save\_after\_b \\n CREATE FIELDS ( key\_field data\_field1\_root data\_field2\_root ) \\n WITH VALUE #( \\n ( %cid = \`cid\_b1\` \\n data\_field1\_root = \`eee\` data\_field2\_root = \`fff\` ) \\n ( %cid = \`cid\_b2\` \\n data\_field1\_root = \`ggg\` data\_field2\_root = \`hhh\` ) ). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT \* FROM demo\_tab\_root\_5 \\n INTO TABLE @FINAL(db\_entries\_a). \\n SELECT \* FROM demo\_tab\_root \\n INTO TABLE @FINAL(db\_entries\_b). \\n\\ \\n out->write( db\_entries\_a ). \\n out->write( db\_entries\_b ). \\n "Displaying log table \\n out->write( bp\_demo\_rap\_save\_after\_a=>log\_tab ). \\n "Displaying table with preliminary ID and key values of RAP BO \\n "demo\_rap\_save\_after\_b converted in the adjust\_numbers \\n "implementation of RAP BO demo\_rap\_save\_after\_a \\n out->write( bp\_demo\_rap\_save\_after\_a=>converted\_keys ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n initialize\_dbtabs( ). \\n ENDMETHOD. \\n METHOD initialize\_dbtabs. \\n DELETE FROM demo\_tab\_root\_5. \\n DELETE FROM demo\_tab\_root. \\n\\ \\n INSERT demo\_tab\_root\_5 FROM TABLE @( VALUE #( \\n ( key\_field = 1 field1 = '###' field2 = '###' \\n field3 = 0 field4 = 0 ) \\n ( key\_field = 2 field1 = '###' field2 = '###' \\n field3 = 0 field4 = 0 ) ) ). \\n\\ \\n INSERT demo\_tab\_root FROM TABLE @( VALUE #( \\n ( key\_field = 7 data\_field1\_root = '###' \\n data\_field2\_root = '###' ) \\n ( key\_field = 8 data\_field1\_root = '###' \\n data\_field2\_root = '###' ) ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_save\_after DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n METHODS initialize\_dbtabs. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_save\_after IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->write( \`Explicit Save Order Demo\` ). \\n\\ \\n MODIFY ENTITY demo\_rap\_save\_after\_a \\n CREATE FIELDS ( key\_field field1 field2 field3 field4 ) \\n WITH VALUE #( \\n ( %cid = \`cid\_a1\` \\n field1 = 'aaa' field2 = 'bbb' \\n field3 = 1 field4 = 2 ) \\n ( %cid = \`cid\_a2\` \\n field1 = 'ccc' field2 = 'ddd' \\n field3 = 3 field4 = 4 ) ). \\n\\ \\n MODIFY ENTITY demo\_rap\_save\_after\_b \\n CREATE FIELDS ( key\_field data\_field1\_root data\_field2\_root ) \\n WITH VALUE #( \\n ( %cid = \`cid\_b1\` \\n data\_field1\_root = \`eee\` data\_field2\_root = \`fff\` ) \\n ( %cid = \`cid\_b2\` \\n data\_field1\_root = \`ggg\` data\_field2\_root = \`hhh\` ) ). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT \* FROM demo\_tab\_root\_5 \\n INTO TABLE @FINAL(db\_entries\_a). \\n SELECT \* FROM demo\_tab\_root \\n INTO TABLE @FINAL(db\_entries\_b). \\n\\ \\n out->write( db\_entries\_a ). \\n out->write( db\_entries\_b ). \\n "Displaying log table \\n out->write( bp\_demo\_rap\_save\_after\_a=>log\_tab ). \\n "Displaying table with preliminary ID and key values of RAP BO \\n "demo\_rap\_save\_after\_b converted in the adjust\_numbers \\n "implementation of RAP BO demo\_rap\_save\_after\_a \\n out->write( bp\_demo\_rap\_save\_after\_a=>converted\_keys ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n initialize\_dbtabs( ). \\n ENDMETHOD. \\n METHOD initialize\_dbtabs. \\n DELETE FROM demo\_tab\_root\_5. \\n DELETE FROM demo\_tab\_root. \\n\\ \\n INSERT demo\_tab\_root\_5 FROM TABLE @( VALUE #( \\n ( key\_field = 1 field1 = '###' field2 = '###' \\n field3 = 0 field4 = 0 ) \\n ( key\_field = 2 field1 = '###' field2 = '###' \\n field3 = 0 field4 = 0 ) ) ). \\n\\ \\n INSERT demo\_tab\_root FROM TABLE @( VALUE #( \\n ( key\_field = 7 data\_field1\_root = '###' \\n data\_field2\_root = '###' ) \\n ( key\_field = 8 data\_field1\_root = '###' \\n data\_field2\_root = '###' ) ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html abenbdl\_save\_after.html