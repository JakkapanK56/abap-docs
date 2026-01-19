---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! The RAP event handler class for this example is the class n'! @link cl_demo_rap_local_evt. In the CCIMP include of the class, n'! the RAP event handler methods are implemented.  n'! n'! The RAP business events in this example are raised using n'! RAISE ENTITY EV
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENRAP_EVENTS_LOCAL_CON_ABEXA.htm"
abapFile: "ABENRAP_EVENTS_LOCAL_CON_ABEXA.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "method", "class", "data", "internal-table", "ABENRAP", "EVENTS", "LOCAL", "CON", "ABEXA"]
---

This example demonstrates the local consumption of [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html) using a [managed RAP business object](ABENMANAGED_RAP_BO_GLOSRY.html).

**Data model**

The CDS data model consists of the root entity `DEMO_RAP_EVENT_M`.

Root entity:

**Behavior definition**

The [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `DEMO_RAP_LOCAL_EVT_M` is defined in [RAP BDL](ABENCDS_BDL_GLOSRY.html) as follows:

**Behavior implementation**

For the above RAP behavior definition, one [ABP](ABENBEHAVIOR_POOL_GLOSRY.html) is created. The global class of the behavior pool is `BP_DEMO_RAP_LOCAL_EVT_M`. The actual behavior implementation takes place in local classes that are defined and implemented in the `BP_DEMO_RAP_LOCAL_EVT_M=======CCIMP` of the behavior pool.

**RAP event handler class**

The global class of the RAP event handler class is `CL_DEMO_RAP_EVENT_HANDLER`. The events are handled in the `CL_DEMO_RAP_LOCAL_EVT=========CCIMP`.

**Access with ABAP using EML**

The above source code uses [EML](ABENEML_GLOSRY.html) to access the RAP business object from an ABAP class.

The example contains three ABAP EML modify requests: a RAP create, update and delete operation. For each of the operations, an event is raised using a [`RAISE ENTITY EVENT`](ABAPRAISE_ENTITY_EVENT.html) statement. The events are raised in the [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html) RAP saver method.

When the events are raised, the [RAP event handler methods](ABENRAP_EVENT_HANDLER_METH_GLOSRY.html), which are implemented in the CCIMP include of the `CL_DEMO_RAP_EVENT_HANDLER` class, are called asynchronously. To demonstrate the effect of the events, a log database table is filled.

In the output of the example, the content of an internal table is displayed that demonstrates the effect of the RAP operations. The internal table is filled by selecting from the database table where the [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) are persisted to. Additionally, the content of an internal table is displayed including the entries that have been inserted into the log database table by the event handler methods.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine root view entity DEMO\_RAP\_LOCAL\_EVT\_M as select from demo\_tab\_root\_5 \\{\\n key key\_field,\\n field1,\\n field2,\\n field3,\\n field4\\n\\}\\n // Note:\\n// The RAP event handler class for this example is the class\\n// cl\_demo\_rap\_local\_evt. In the CCIMP include of the class,\\n// the RAP event handler methods are implemented.\\n\\nmanaged with additional save with full data\\nimplementation in class bp\_demo\_rap\_local\_evt\_m unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_LOCAL\_EVT\_M\\npersistent table demo\_tab\_root\_5\\nlock master\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly : update ) key\_field;\\n event created;\\n event updated parameter DEMO\_ABSTRACT\_ROOT\_1;\\n event deleted parameter DEMO\_ABSTRACT\_ROOT\_1;\\n\\} \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

The RAP event handler class for this example is the class \\n"! \\{@link cl\_demo\_rap\_local\_evt\\}. In the CCIMP include of the class, \\n"! the RAP event handler methods are implemented.

\\ \\n"! \\n"!

The RAP business events in this example are raised using \\n"! *RAISE ENTITY EVENT* statements in the \\n"! *save\_modified* saver method that is implemented in the \\n"! CCIMP include of the ABAP behavior pool \\n"! \\{@link bp\_demo\_rap\_local\_evt\_m\\}.

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_local\_evt\_con DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_local\_evt\_con IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->begin\_section( \`RAP Demo: Local Consumption of \` && \\n \`RAP Business Events (Database Modifications)\` ). \\n\\ \\n "RAP create operation \\n MODIFY ENTITY demo\_rap\_local\_evt\_m \\n CREATE FIELDS ( key\_field field1 field2 field3 field4 ) \\n WITH VALUE #( ( %cid = 'cid1' \\n key\_field = 1 \\n field1 = 'aaa' \\n field2 = 'bbb' \\n field3 = 11 \\n field4 = 111 ) \\n ( %cid = 'cid2' \\n key\_field = 2 \\n field1 = 'ccc' \\n field2 = 'ddd' \\n field3 = 22 \\n field4 = 222 ) \\n ( %cid = 'cid3' \\n key\_field = 3 \\n field1 = 'eee' \\n field2 = 'fff' \\n field3 = 33 \\n field4 = 333 ) \\n ( %cid = 'cid4' \\n key\_field = 4 \\n field1 = 'ggg' \\n field2 = 'hhh' \\n field3 = 44 \\n field4 = 444 ) ) \\n FAILED DATA(f1). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* \\n\\ \\n "RAP update operation \\n MODIFY ENTITY demo\_rap\_local\_evt\_m \\n UPDATE FIELDS ( field1 field2 field3 field4 ) \\n WITH VALUE #( ( key\_field = 2 \\n field1 = 'iii\_up' \\n field2 = 'jjj\_up' \\n field3 = 222 \\n field4 = 22 ) \\n ( key\_field = 3 \\n field1 = 'kkk\_up' \\n field2 = 'lll\_up' \\n field3 = 333 \\n field4 = 33 ) ) \\n FAILED DATA(f2). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* \\n\\ \\n "RAP delete operation \\n MODIFY ENTITY demo\_rap\_local\_evt\_m \\n DELETE FROM VALUE #( ( key\_field = 4 ) ) \\n FAILED DATA(f3). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* \\n\\ \\n "Note: Due to the asynchronous call of the events, a WAIT statement \\n "is included to wait for messages that are raised by events to be \\n "written to the business application log so that they can be \\n "displayed here. \\n\\ \\n WAIT UP TO 2 SECONDS. \\n\\ \\n "Getting and displaying persisted instances \\n SELECT key\_field, field1, field2, field3, field4 \\n FROM demo\_tab\_root\_5 \\n ORDER BY key\_field \\n INTO TABLE @DATA(dbtab\_entries). \\n\\ \\n out->write( \`Database table entries after the RAP operations\` \\n )->write( dbtab\_entries ). \\n\\ \\n "Getting and displaying database table entries that were inserted \\n "in the event handler method implementations to demonstrate that \\n "events have been triggered. \\n\\ \\n SELECT id, details, created\_at \\n FROM demo\_tab\_evt\_log \\n ORDER BY created\_at \\n INTO TABLE @DATA(evt\_log\_entries). \\n\\ \\n IF evt\_log\_entries IS INITIAL. \\n out->write( \`There are no entries in the log table.\` && \\n \` Try and run the example again.\` ). \\n ELSE. \\n out->write( \`Log database table entries created by the \` && \\n \`raised events\` \\n )->write( evt\_log\_entries ). \\n ENDIF. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n DELETE FROM demo\_tab\_root\_5. \\n DELETE FROM demo\_tab\_evt\_log. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

The RAP event handler class for this example is the class \\n"! \\{@link cl\_demo\_rap\_local\_evt\\}. In the CCIMP include of the class, \\n"! the RAP event handler methods are implemented.

\\ \\n"! \\n"!

The RAP business events in this example are raised using \\n"! *RAISE ENTITY EVENT* statements in the \\n"! *save\_modified* saver method that is implemented in the \\n"! CCIMP include of the ABAP behavior pool \\n"! \\{@link bp\_demo\_rap\_local\_evt\_m\\}.

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_local\_evt\_con DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_local\_evt\_con IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->begin\_section( \`RAP Demo: Local Consumption of \` && \\n \`RAP Business Events (Database Modifications)\` ). \\n\\ \\n "RAP create operation \\n MODIFY ENTITY demo\_rap\_local\_evt\_m \\n CREATE FIELDS ( key\_field field1 field2 field3 field4 ) \\n WITH VALUE #( ( %cid = 'cid1' \\n key\_field = 1 \\n field1 = 'aaa' \\n field2 = 'bbb' \\n field3 = 11 \\n field4 = 111 ) \\n ( %cid = 'cid2' \\n key\_field = 2 \\n field1 = 'ccc' \\n field2 = 'ddd' \\n field3 = 22 \\n field4 = 222 ) \\n ( %cid = 'cid3' \\n key\_field = 3 \\n field1 = 'eee' \\n field2 = 'fff' \\n field3 = 33 \\n field4 = 333 ) \\n ( %cid = 'cid4' \\n key\_field = 4 \\n field1 = 'ggg' \\n field2 = 'hhh' \\n field3 = 44 \\n field4 = 444 ) ) \\n FAILED DATA(f1). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* \\n\\ \\n "RAP update operation \\n MODIFY ENTITY demo\_rap\_local\_evt\_m \\n UPDATE FIELDS ( field1 field2 field3 field4 ) \\n WITH VALUE #( ( key\_field = 2 \\n field1 = 'iii\_up' \\n field2 = 'jjj\_up' \\n field3 = 222 \\n field4 = 22 ) \\n ( key\_field = 3 \\n field1 = 'kkk\_up' \\n field2 = 'lll\_up' \\n field3 = 333 \\n field4 = 33 ) ) \\n FAILED DATA(f2). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* \\n\\ \\n "RAP delete operation \\n MODIFY ENTITY demo\_rap\_local\_evt\_m \\n DELETE FROM VALUE #( ( key\_field = 4 ) ) \\n FAILED DATA(f3). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* \\n\\ \\n "Note: Due to the asynchronous call of the events, a WAIT statement \\n "is included to wait for messages that are raised by events to be \\n "written to the business application log so that they can be \\n "displayed here. \\n\\ \\n WAIT UP TO 2 SECONDS. \\n\\ \\n "Getting and displaying persisted instances \\n SELECT key\_field, field1, field2, field3, field4 \\n FROM demo\_tab\_root\_5 \\n ORDER BY key\_field \\n INTO TABLE @DATA(dbtab\_entries). \\n\\ \\n out->write( \`Database table entries after the RAP operations\` \\n )->write( dbtab\_entries ). \\n\\ \\n "Getting and displaying database table entries that were inserted \\n "in the event handler method implementations to demonstrate that \\n "events have been triggered. \\n\\ \\n SELECT id, details, created\_at \\n FROM demo\_tab\_evt\_log \\n ORDER BY created\_at \\n INTO TABLE @DATA(evt\_log\_entries). \\n\\ \\n IF evt\_log\_entries IS INITIAL. \\n out->write( \`There are no entries in the log table.\` && \\n \` Try and run the example again.\` ). \\n ELSE. \\n out->write( \`Log database table entries created by the \` && \\n \`raised events\` \\n )->write( evt\_log\_entries ). \\n ENDIF. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n DELETE FROM demo\_tab\_root\_5. \\n DELETE FROM demo\_tab\_evt\_log. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrap\_events.html