---
title: "RAP BO consumer of demo RAP scenario"
description: |
  n'! n'! This class demonstrates the local consumption of RAP business n'! events.  n'! Related ABAP repository objects:  n'!  n'!-   BDEF: @link demo_rap_local_event_m  n'!-   ABAP behavior pool: @link bp_demo_rap_local_event_m  n'!-   RAP event hand
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRAP_EVENT_RAISE_CUST_EXC_ABEXA.htm"
abapFile: "ABENRAP_EVENT_RAISE_CUST_EXC_ABEXA.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "ABENRAP", "EVENT", "RAISE", "CUST", "EXC", "ABEXA"]
---

This example demonstrates the local consumption of [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html) using a [managed RAP business object](ABENMANAGED_RAP_BO_GLOSRY.html). **Note:** Since the example uses the Business Application Log, your user must have the required authorization to read from the log. An authorization is required for the following authorization field values: *ALG\_OBJECT*, *ALG\_SUBOBJ*, *ACTVT* (the latter must be *03*).

**Data model**

The CDS data model consists of the root entity `DEMO_RAP_LOCAL_EVENT_M`.

Root entity:

**Behavior definition**

The [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `DEMO_RAP_LOCAL_EVENT_M` is defined in [RAP BDL](ABENCDS_BDL_GLOSRY.html) as follows:

**Behavior implementation**

For the above RAP behavior definition, one [ABP](ABENBEHAVIOR_POOL_GLOSRY.html) is created. The global class of the behavior pool is `BP_DEMO_RAP_LOCAL_EVENT_M`. The actual behavior implementation takes place in local classes that are defined and implemented in the `BP_DEMO_RAP_LOCAL_EVENT_M=====CCIMP` of the behavior pool.

**RAP event handler class**

The global class of the RAP event handler class is `CL_DEMO_RAP_LOCAL_EVENTS`. The events are handled in the `CL_DEMO_RAP_LOCAL_EVENTS======CCIMP`.

**Access with ABAP using EML**

The above source code uses [EML](ABENEML_GLOSRY.html) to access the RAP business object from an ABAP class.

The example contains two RAP create operations. For each of the operations, an event is raised using a [`RAISE ENTITY EVENT`](ABAPRAISE_ENTITY_EVENT.html) statement. The events are raised in the [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html) RAP saver method.

When the events are raised, the [RAP event handler methods](ABENRAP_EVENT_HANDLER_METH_GLOSRY.html), which are implemented in the CCIMP include of the `CL_DEMO_RAP_LOCAL_EVENTS` class, are called asynchronously. To demonstrate the effect of the events, messages are created and added to the Business Application Log.

In the simplified example, the RAP event handler implementation includes a RAP update operation that is implemented by the `uppercase` action that is executed. The value of the character-like field `field1` is transformed to uppercase. This value is written to the `field2`. A successful update performed asynchronously is demonstrated with the first RAP create operation. The second RAP create operation demonstrates a failing update of the `field2` values. Before saving, the validation `val` checks that the `field1` values do not contain special characters. If special characters are found, the validation fails. For that purpose, the `cl_abap_tx=>save( ).` call in the RAP event handler implementation is included in `TRY` control structure that catches the `CX_ABAP_BEHV_SAVE_FAILED` exception. In the `CATCH` block, information is written to the application log informing about failed entities. The information is accessible via the exception object that allows access to entries of the `failed` and `reported`\\ [RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html). The example also demonstrates that exceptions can be raised within RAP event handler implementation when the exceptions inherit from `CX_ABAP_BEHV_EVENT_HDLR_ERROR`. In the example, the exception object created when catching `CX_ABAP_BEHV_SAVE_FAILED` is wrapped in the `previous` attribute.

In the output of the example, the content of an internal table is displayed that demonstrates the effect of the RAP operations. The internal table is filled by selecting from the database table where the [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) are persisted to. Additionally, the content of an internal table is displayed including the messages that have been inserted into the Business Application Log by the event handler methods.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine root view entity DEMO\_RAP\_LOCAL\_EVENT\_M as select from demo\_tab\_root\_5 \\{\\n key key\_field,\\n field1,\\n field2,\\n field3,\\n field4\\n\\}\\n managed with additional save with full data\\nimplementation in class bp\_demo\_rap\_local\_event\_m unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_LOCAL\_EVENT\_M\\npersistent table demo\_tab\_root\_5\\nlock master\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly : update ) key\_field;\\n action uppercase;\\n validation val on save \\{ field field2; \\}\\n event created;\\n\\} \* Public class definition \\n"!

RAP BO consumer of demo RAP scenario

\\ \\n"! \\n"!

This class demonstrates the local consumption of RAP business \\n"! events.

\\ \\n"!

Related ABAP repository objects:

\\ \\n"!

\\ \\n"!-   BDEF: \\{@link demo\_rap\_local\_event\_m\\}
\\ \\n"!-   ABAP behavior pool: \\{@link bp\_demo\_rap\_local\_event\_m\\}
\\ \\n"!-   RAP event handler class: \\{@link cl\_demo\_rap\_local\_events\\}
\\ \\n"!

\\ \\nCLASS cl\_demo\_rap\_local\_event\_con DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_local\_event\_con IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->begin\_section( \`Local Consumption of \` && \\n \`RAP Business Events: Unsuccessful save raising \` && \\n \`the cx\_abap\_behv\_save\_failed exception\` ). \\n\\ \\n "RAP create operation \\n MODIFY ENTITY demo\_rap\_local\_event\_m \\n CREATE AUTO FILL CID FIELDS ( key\_field field1 ) \\n WITH VALUE #( ( key\_field = 1 field1 = 'abc' ) \\n ( key\_field = 2 field1 = 'def' ) \\n ( key\_field = 3 field1 = 'ghi' ) \\n ( key\_field = 4 field1 = 'jkl' ) ) \\n FAILED DATA(failed) \\n REPORTED DATA(reported). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n "Note: Due to the asynchronous call of the events, a WAIT statement \\n "is included to wait for messages that are raised by events to be \\n "written to the business application log so that they can be \\n "displayed here. \\n\\ \\n WAIT UP TO 2 SECONDS. \\n\\ \\n "Getting and displaying persisted instances \\n SELECT key\_field, field1, field2, field3, field4 \\n FROM demo\_tab\_root\_5 \\n ORDER BY key\_field \\n INTO TABLE @DATA(dbtab\_entries). \\n\\ \\n out->write( \`Database table entries after the RAP create \` && \\n \`operation and asynchronous update operation in the RAP \` && \\n \`event handler\` \\n )->write( dbtab\_entries ). \\n\\ \\n "Getting messages from the business application log filled during \\n "the event handler method call \\n DATA(log) = cl\_demo\_rap\_event\_handler=>get\_log( ). \\n\\ \\n out->write( \`Business application log entries created by the \` && \\n \`raised events\` \\n )->write( log ). \\n\\ \\n out->line( ). \\n\\ \\n\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* \\n\\ \\n "RAP create operation \\n MODIFY ENTITY demo\_rap\_local\_event\_m \\n CREATE AUTO FILL CID FIELDS ( key\_field field1 ) \\n WITH VALUE #( ( key\_field = 5 field1 = 'mno' ) \\n ( key\_field = 6 field1 = '#pqr' ) \\n ( key\_field = 7 field1 = 'stu' ) \\n ( key\_field = 8 field1 = 'vwx?' ) ) \\n FAILED failed \\n REPORTED reported. \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n WAIT UP TO 2 SECONDS. \\n\\ \\n "Getting and displaying persisted instances \\n SELECT key\_field, field1, field2, field3, field4 \\n FROM demo\_tab\_root\_5 \\n ORDER BY key\_field \\n INTO TABLE @dbtab\_entries. \\n\\ \\n out->write( \`Database table entries after the RAP create \` && \\n \`operation and asynchronous update operation in the RAP \` && \\n \`event handler\` \\n )->write( dbtab\_entries ). \\n\\ \\n "Getting messages from the business application log filled during \\n "the event handler method call \\n log = cl\_demo\_rap\_event\_handler=>get\_log( ). \\n\\ \\n out->write( \`Business application log entries created by the \` && \\n \`raised events\` \\n )->write( log ). \\n\\ \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n DELETE FROM demo\_tab\_root\_5. "#EC CI\_NOWHERE \\n "Deleting existing messages from the business application log \\n cl\_demo\_rap\_local\_events=>delete\_log( ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

RAP BO consumer of demo RAP scenario

\\ \\n"! \\n"!

This class demonstrates the local consumption of RAP business \\n"! events.

\\ \\n"!

Related ABAP repository objects:

\\ \\n"!

\\ \\n"!-   BDEF: \\{@link demo\_rap\_local\_event\_m\\}
\\ \\n"!-   ABAP behavior pool: \\{@link bp\_demo\_rap\_local\_event\_m\\}
\\ \\n"!-   RAP event handler class: \\{@link cl\_demo\_rap\_local\_events\\}
\\ \\n"!

\\ \\nCLASS cl\_demo\_rap\_local\_event\_con DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_local\_event\_con IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->begin\_section( \`Local Consumption of \` && \\n \`RAP Business Events: Unsuccessful save raising \` && \\n \`the cx\_abap\_behv\_save\_failed exception\` ). \\n\\ \\n "RAP create operation \\n MODIFY ENTITY demo\_rap\_local\_event\_m \\n CREATE AUTO FILL CID FIELDS ( key\_field field1 ) \\n WITH VALUE #( ( key\_field = 1 field1 = 'abc' ) \\n ( key\_field = 2 field1 = 'def' ) \\n ( key\_field = 3 field1 = 'ghi' ) \\n ( key\_field = 4 field1 = 'jkl' ) ) \\n FAILED DATA(failed) \\n REPORTED DATA(reported). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n "Note: Due to the asynchronous call of the events, a WAIT statement \\n "is included to wait for messages that are raised by events to be \\n "written to the business application log so that they can be \\n "displayed here. \\n\\ \\n WAIT UP TO 2 SECONDS. \\n\\ \\n "Getting and displaying persisted instances \\n SELECT key\_field, field1, field2, field3, field4 \\n FROM demo\_tab\_root\_5 \\n ORDER BY key\_field \\n INTO TABLE @DATA(dbtab\_entries). \\n\\ \\n out->write( \`Database table entries after the RAP create \` && \\n \`operation and asynchronous update operation in the RAP \` && \\n \`event handler\` \\n )->write( dbtab\_entries ). \\n\\ \\n "Getting messages from the business application log filled during \\n "the event handler method call \\n DATA(log) = cl\_demo\_rap\_event\_handler=>get\_log( ). \\n\\ \\n out->write( \`Business application log entries created by the \` && \\n \`raised events\` \\n )->write( log ). \\n\\ \\n out->line( ). \\n\\ \\n\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* \\n\\ \\n "RAP create operation \\n MODIFY ENTITY demo\_rap\_local\_event\_m \\n CREATE AUTO FILL CID FIELDS ( key\_field field1 ) \\n WITH VALUE #( ( key\_field = 5 field1 = 'mno' ) \\n ( key\_field = 6 field1 = '#pqr' ) \\n ( key\_field = 7 field1 = 'stu' ) \\n ( key\_field = 8 field1 = 'vwx?' ) ) \\n FAILED failed \\n REPORTED reported. \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n WAIT UP TO 2 SECONDS. \\n\\ \\n "Getting and displaying persisted instances \\n SELECT key\_field, field1, field2, field3, field4 \\n FROM demo\_tab\_root\_5 \\n ORDER BY key\_field \\n INTO TABLE @dbtab\_entries. \\n\\ \\n out->write( \`Database table entries after the RAP create \` && \\n \`operation and asynchronous update operation in the RAP \` && \\n \`event handler\` \\n )->write( dbtab\_entries ). \\n\\ \\n "Getting messages from the business application log filled during \\n "the event handler method call \\n log = cl\_demo\_rap\_event\_handler=>get\_log( ). \\n\\ \\n out->write( \`Business application log entries created by the \` && \\n \`raised events\` \\n )->write( log ). \\n\\ \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n DELETE FROM demo\_tab\_root\_5. "#EC CI\_NOWHERE \\n "Deleting existing messages from the business application log \\n cl\_demo\_rap\_local\_events=>delete\_log( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrap\_events.html