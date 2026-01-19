---
title: "ABENABAP_MINI_DAEMON_ABEXA"
description: |
  ABENABAP_MINI_DAEMON_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_MINI_DAEMON_ABEXA.htm"
abapFile: "ABENABAP_MINI_DAEMON_ABEXA.html"
keywords: ["delete", "do", "while", "if", "try", "catch", "method", "class", "data", "ABENABAP", "MINI", "DAEMON", "ABEXA"]
---

This example demonstrates a mini [ABAP daemon](ABENABAP_DAEMON_GLOSRY.html).

The class `CL_DEMO_ABAP_MINI_DAEMON` used by the class above demonstrates a mini [ABAP daemon class](ABENABAP_DAEMON_CLASS_GLOSRY.html). The repository object of the daemon has the property *Explicitly Started Daemon (same user)*. It implements only the following methods of the interface `IF_ABAP_DAEMON_EXTENSION`:

The class `CL_DEMO_ABAP_SIMPLE_DAEMON` uses the [ABAP daemon manager](ABENABAP_DAEMON_MANAGER_GLOSRY.html) to do the following:

It then checks whether the daemon wrote the message to the shared memory.

-   `ON_ACCEPT`

-   `ON_MESSAGE`

-   Start a daemon based on the class `CL_DEMO_ABAP_MINI_DAEMON`.
-   Send a [PCP](ABENPCP_GLOSRY.html) message using a temporary [ABAP daemon handle](ABENABAP_DAEMON_HANDLE_GLOSRY.html).
-   Stop the daemon immediately, which is not a typical step.

\* Public class definition \\nCLASS cl\_demo\_abap\_simple\_daemon DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_abap\_simple\_daemon IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DELETE FROM SHARED MEMORY demo\_indx\_blob(dm) \\n ID 'DemoMiniDaemon'. \\n\\ \\n TRY. \\n FINAL(pcp) = cl\_ac\_message\_type\_pcp=>create( ). \\n pcp->set\_text( \`Hello Daemon!\` ). \\n CATCH cx\_ac\_message\_type\_pcp\_error INTO FINAL(pcp\_exc). \\n out->write( pcp\_exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n TRY. \\n cl\_abap\_daemon\_client\_manager=>start( \\n EXPORTING \\n i\_class\_name = 'CL\_DEMO\_ABAP\_MINI\_DAEMON' \\n i\_name = 'DemoMiniDaemon' \\n IMPORTING \\n e\_instance\_id = FINAL(instance\_id) ). \\n\\ \\n cl\_abap\_daemon\_client\_manager=>attach( \\n i\_instance\_id = instance\_id )->send( pcp ). \\n\\ \\n cl\_abap\_daemon\_client\_manager=>stop( \\n i\_instance\_id = instance\_id ). \\n\\ \\n CATCH cx\_abap\_daemon\_error INTO FINAL(daemon\_exc). \\n out->write( daemon\_exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n DATA msg TYPE string. \\n DATA(subrc) = 4. \\n WHILE subrc = 4. \\n IMPORT msg = msg FROM SHARED MEMORY demo\_indx\_blob(dm) \\n ID 'DemoMiniDaemon'. \\n subrc = sy-subrc. \\n ENDWHILE. \\n ASSERT msg = \`Hello Daemon!\`. \\n out->write( 'Daemon has received the message' ). \\n ENDMETHOD. \\nENDCLASS. METHOD if\_abap\_daemon\_extension~on\_accept. \\n TRY. \\n IF i\_context\_base->get\_start\_caller\_info( \\n )-program = cl\_oo\_classname\_service=>get\_classpool\_name( \\n EXPORTING \\n clsname = 'CL\_DEMO\_ABAP\_SIMPLE\_DAEMON' ). \\n e\_setup\_mode = co\_setup\_mode-accept. \\n ENDIF. \\n CATCH cx\_abap\_daemon\_error. \\n RETURN. \\n ENDTRY. \\nENDMETHOD. METHOD IF\_ABAP\_DAEMON\_EXTENSION~ON\_MESSAGE. \\n TRY. \\n DATA(msg) = i\_message->get\_text( ). \\n CATCH cx\_ac\_message\_type\_pcp\_error. \\n RETURN. \\n ENDTRY. \\n EXPORT msg = msg TO SHARED MEMORY demo\_indx\_blob(dm) \\n ID 'DemoMiniDaemon'. \\nENDMETHOD. \* Public class definition \\nCLASS cl\_demo\_abap\_simple\_daemon DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_abap\_simple\_daemon IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DELETE FROM SHARED MEMORY demo\_indx\_blob(dm) \\n ID 'DemoMiniDaemon'. \\n\\ \\n TRY. \\n FINAL(pcp) = cl\_ac\_message\_type\_pcp=>create( ). \\n pcp->set\_text( \`Hello Daemon!\` ). \\n CATCH cx\_ac\_message\_type\_pcp\_error INTO FINAL(pcp\_exc). \\n out->write( pcp\_exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n TRY. \\n cl\_abap\_daemon\_client\_manager=>start( \\n EXPORTING \\n i\_class\_name = 'CL\_DEMO\_ABAP\_MINI\_DAEMON' \\n i\_name = 'DemoMiniDaemon' \\n IMPORTING \\n e\_instance\_id = FINAL(instance\_id) ). \\n\\ \\n cl\_abap\_daemon\_client\_manager=>attach( \\n i\_instance\_id = instance\_id )->send( pcp ). \\n\\ \\n cl\_abap\_daemon\_client\_manager=>stop( \\n i\_instance\_id = instance\_id ). \\n\\ \\n CATCH cx\_abap\_daemon\_error INTO FINAL(daemon\_exc). \\n out->write( daemon\_exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n DATA msg TYPE string. \\n DATA(subrc) = 4. \\n WHILE subrc = 4. \\n IMPORT msg = msg FROM SHARED MEMORY demo\_indx\_blob(dm) \\n ID 'DemoMiniDaemon'. \\n subrc = sy-subrc. \\n ENDWHILE. \\n ASSERT msg = \`Hello Daemon!\`. \\n out->write( 'Daemon has received the message' ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_channel\_daemon.html abenabap\_daemon.html abenabap\_daemon\_abexas.html