---
title: "ABENDYNPRO_CUSTOM_CONTROL_ABEXA"
description: |
  ABENDYNPRO_CUSTOM_CONTROL_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_CUSTOM_CONTROL_ABEXA.htm"
abapFile: "ABENDYNPRO_CUSTOM_CONTROL_ABEXA.html"
keywords: ["select", "insert", "if", "case", "method", "class", "data", "internal-table", "ABENDYNPRO", "CUSTOM", "CONTROL", "ABEXA"]
---

This example shows how CFW events are handled.

Dynpro 100 contains an output field `field` and a custom control called `textedit`. The flow logic of dynpro 100 is:

PROCESS BEFORE OUTPUT. \\n  MODULE status\_0100. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  MODULE user\_command\_0100.

In the GUI status `SCREEN_100`, the function codes *BACK*, *EXIT*, and *CANCEL* are created with type *E* and the function code `INSERT` is created without a specific type.

The program contains a local class called `event_handler` with event handlers for the events F1 and F4 of the global class `CL_GUI_TEXTEDIT`. When the program is executed, dynpro 100 instantiates objects of the classes `CL_GUI_CUSTOM_CONTAINER`, `CL_GUI_TEXTEDIT`, and `event_handler` after PBO.

The container control is linked with the custom control on the dynpro and the instance of the `textedit` control is linked with this container. The events F1 and F4 of the `textedit` control are registered using the method `SET_REGISTERED_EVENTS` to ensure that they are passed to the current AS instance. F1 is defined as a system event and F4 as an application event. The event handling methods of the instance `handle` of the class `event_handler` are registered as handlers for the events.

Before the dynpro is sent, the `textedit` control is filled with the content of table `text_tab`. As long as the dynpro is displayed, the user is allowed to edit the text. When `INSERT` is selected, PAI is raised, and the current text from the `textedit` control is passed to the table `text_tab`.

If F1 is selected on the `textedit` control, the method `handle_f1` is executed immediately. This assigns the content of the line to the field `field`. Calling the method `set_new_ok_code` raises PAI. This is the only way to ensure that the PBO is processed and the content of `field` is sent to the dynpro.

If F4 is selected on the `textedit` control, PAI is raised. The method `DISPATCH` is called and raises the method `handle_f4`. This assigns the content of the line to the field `field`: Since the system then automatically returns to PAI processing, PBO is also processed and the field content is transported.

In either case, regardless of whether the user chooses F1 or F4, the content of the `textedit` control is not passed to the internal table `text_tab`. Consequently, the `textedit` control is overwritten with the previous content of `text_tab` after PBO.

REPORT demo\_custom\_control .\\n\\n\\n\\nCLASS event\_handler DEFINITION.\\n PUBLIC SECTION.\\n METHODS: handle\_f1 FOR EVENT f1 OF cl\_gui\_textedit\\n IMPORTING sender,\\n handle\_f4 FOR EVENT f4 OF cl\_gui\_textedit\\n IMPORTING sender.\\nENDCLASS.\\n\\nDATA: ok\_code LIKE sy-ucomm,\\n save\_ok LIKE sy-ucomm.\\n\\nDATA: init,\\n container TYPE REF TO cl\_gui\_custom\_container,\\n editor TYPE REF TO cl\_gui\_textedit.\\n\\nDATA: event\_tab TYPE cntl\_simple\_events,\\n event TYPE cntl\_simple\_event.\\n\\nDATA: line(256) TYPE c,\\n text\_tab LIKE STANDARD TABLE OF line,\\n field LIKE line.\\n\\nDATA handle TYPE REF TO event\_handler.\\n\\n\\n\\n\\nSTART-OF-SELECTION.\\n\\n line = 'First line in TextEditControl'.\\n APPEND line TO text\_tab.\\n line = '--------------------------------------------------'.\\n APPEND line TO text\_tab.\\n line = '...'.\\n APPEND line TO text\_tab.\\n\\n CALL SCREEN 100.\\n\\n\\n\\nMODULE status\_0100 OUTPUT.\\n SET PF-STATUS 'SCREEN\_100'.\\n IF init is initial.\\n init = 'X'.\\n CREATE OBJECT: container EXPORTING container\_name = 'TEXTEDIT',\\n editor EXPORTING parent = container,\\n handle.\\n event-eventid = cl\_gui\_textedit=>event\_f1.\\n event-appl\_event = ' '. "system event\\n APPEND event TO event\_tab.\\n event-eventid = cl\_gui\_textedit=>event\_f4.\\n event-appl\_event = 'X'. "application event\\n APPEND event TO event\_tab.\\n editor->set\_registered\_events(\\n EXPORTING events = event\_tab ).\\n SET HANDLER handle->handle\_f1\\n handle->handle\_f4 FOR editor.\\n ENDIF.\\n editor->set\_text\_as\_stream( EXPORTING text = text\_tab ).\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE user\_command\_0100 INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n CASE save\_ok.\\n WHEN 'INSERT'.\\n editor->get\_text\_as\_stream( IMPORTING text = text\_tab ).\\n WHEN 'F1'.\\n MESSAGE i101(sabapdemos) WITH text-001.\\n WHEN OTHERS.\\n MESSAGE i101(sabapdemos) WITH text-002.\\n cl\_gui\_cfw=>dispatch( ). "for application events\\n MESSAGE i101(sabapdemos) WITH text-003.\\n ENDCASE.\\n SET SCREEN 100.\\nENDMODULE.\\n\\n\\n\\nCLASS event\_handler IMPLEMENTATION.\\n METHOD handle\_f1.\\n DATA row TYPE i.\\n MESSAGE i101(sabapdemos) WITH text-004.\\n sender->get\_selection\_pos(\\n IMPORTING from\_line = row ).\\n sender->get\_line\_text(\\n EXPORTING line\_number = row\\n IMPORTING text = field ).\\n cl\_gui\_cfw=>set\_new\_ok\_code( "raise PAI for\\n EXPORTING new\_code = 'F1' ). "system events\\n cl\_gui\_cfw=>flush( ).\\n ENDMETHOD.\\n METHOD handle\_f4.\\n DATA row TYPE i.\\n MESSAGE i101(sabapdemos) WITH text-005.\\n sender->get\_selection\_pos(\\n IMPORTING from\_line = row ).\\n sender->get\_line\_text(\\n EXPORTING line\_number = row\\n IMPORTING text = field ).\\n cl\_gui\_cfw=>flush( ).\\n ENDMETHOD.\\nENDCLASS.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html abenscreen\_elements\_abexas.html