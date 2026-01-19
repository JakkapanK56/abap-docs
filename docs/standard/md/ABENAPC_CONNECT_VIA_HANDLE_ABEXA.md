---
title: "ABENAPC_CONNECT_VIA_HANDLE_ABEXA"
description: |
  ABENAPC_CONNECT_VIA_HANDLE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAPC_CONNECT_VIA_HANDLE_ABEXA.htm"
abapFile: "ABENAPC_CONNECT_VIA_HANDLE_ABEXA.html"
keywords: ["while", "if", "try", "catch", "method", "class", "data", "ABENAPC", "CONNECT", "VIA", "HANDLE", "ABEXA"]
---

This example demonstrates access to any ABAP channel using a connection handle.

The class expects a valid connection handle for a WebSocket connection as its input, creates an access objects for this handle, and uses it to send a simple text message.

An APC connection from the executable example [AS ABAP as WebSocket Server](ABENAPC_ABEXA.html) publishes its connection handle as follows:

This message is identified in the method `ON_MESSAGE` of the APC handler class `CL_APC_WS_EXT_DEMO_APC` and the connection handle is retrieved and sent. The Web page displays it in a form that can be copied. If the connection handle is passed to the class above while the connection is open, the message sent by the class is received and displayed by the Web page.

-   Create a WebSocket server without PCP.
-   Open the connection on the Web page.
-   Send the text message *get handle*.

\* Public class definition \\nCLASS cl\_demo\_apc\_access\_cnnctn DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_apc\_access\_cnnctn IMPLEMENTATION. \\n METHOD main. \\n DATA attach\_handle TYPE string VALUE ' '. \\n DATA(msg) = \`Hello APC!\`. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = attach\_handle \\n )->add\_field( CHANGING field = msg \\n )->request( ). \\n\\ \\n TRY. \\n FINAL(access\_object) = \\n cl\_apc\_wsp\_client\_conn\_manager=>attach( attach\_handle ). \\n FINAL(message\_manager) = \\n CAST if\_apc\_wsp\_message\_manager( \\n access\_object->get\_message\_manager( ) ). \\n FINAL(message) = CAST if\_apc\_wsp\_message( \\n message\_manager->create\_message( ) ). \\n message->set\_text( msg ). \\n message\_manager->send( message ). \\n CATCH cx\_apc\_error INTO FINAL(apc\_error). \\n out->write( apc\_error->get\_text( ) ). \\n LEAVE PROGRAM. \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_apc\_access\_cnnctn DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_apc\_access\_cnnctn IMPLEMENTATION. \\n METHOD main. \\n DATA attach\_handle TYPE string VALUE ' '. \\n DATA(msg) = \`Hello APC!\`. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = attach\_handle \\n )->add\_field( CHANGING field = msg \\n )->request( ). \\n\\ \\n TRY. \\n FINAL(access\_object) = \\n cl\_apc\_wsp\_client\_conn\_manager=>attach( attach\_handle ). \\n FINAL(message\_manager) = \\n CAST if\_apc\_wsp\_message\_manager( \\n access\_object->get\_message\_manager( ) ). \\n FINAL(message) = CAST if\_apc\_wsp\_message( \\n message\_manager->create\_message( ) ). \\n message->set\_text( msg ). \\n message\_manager->send( message ). \\n CATCH cx\_apc\_error INTO FINAL(apc\_error). \\n out->write( apc\_error->get\_text( ) ). \\n LEAVE PROGRAM. \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_channel\_daemon.html abenabap\_channels.html abenapc.html abenapc\_abexas.html