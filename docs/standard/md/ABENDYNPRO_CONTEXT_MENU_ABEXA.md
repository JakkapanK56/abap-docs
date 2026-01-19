---
title: "ABENDYNPRO_CONTEXT_MENU_ABEXA"
description: |
  ABENDYNPRO_CONTEXT_MENU_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_CONTEXT_MENU_ABEXA.htm"
abapFile: "ABENDYNPRO_CONTEXT_MENU_ABEXA.html"
keywords: ["select", "loop", "do", "if", "case", "try", "data", "ABENDYNPRO", "CONTEXT", "MENU", "ABEXA"]
---

The example illustrates how context menus can be integrated into a program.

The static next dynpro number of dynpro 100 is 100. The elements `TEXT2` and `FIELD2` do not have their own context menus. They inherit the context menu `FRAME` of the frame. The modification group `MOD` is assigned to them. The dynpro flow logic is:

PROCESS BEFORE OUTPUT. \\n  MODULE status\_0100. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  MODULE user\_command\_0100.

The GUI status `SCREEN_100` is set to PBO statically, in which, depending on the field `flag`, the function codes `HIDE` or `REVEAL` are hidden. The context menus for the screen elements are constructed in the callback routines as follows:

When the program is executed and the right mouse button or `SHIFT+F10` is pressed, the user sees the context menu `TEXT` in the first line, the context menu `INPUT` in the second line, and the context menu `FRAME` in the third line. The fourth line is hidden after program start. On all other dynpro components, the standard context menu appears with all static function codes and F1 and F4.

When a new dynamic function is selected, calculations are performed with the number in the input field `FIELD1` and then passed to `FIELD2`. When the function *Hide Result* (`HIDE`) is selected, the screen is modified dynamically. This makes the fourth line visible and the context menu `REVEAL` can be used.

-   `TEXT`: Loads the static context menu `CONTEXT_MENU_1` without modification. This context menu has a single line, *Cancel*.
-   `FRAME`: Constructs the context menu from the static context menus `CONTEXT_MENU_2` and `CONTEXT_MENU_1`. This context menu has two lines, *Hide Result* and *Cancel*. The line for the function code `HIDE` is highlighted.
-   `REVEAL`: Constructs the context menus from the static context menus `CONTEXT_MENU_3` and `CONTEXT_MENU_1`. This context menu has two lines, *Display Result* and *Cancel*. The line of the function code `REVEAL` is highlighted.
-   `INPUT`: Constructs the context menu by including the multiline local context menu `CALCULATE_MENU` as a submenu. For the latter, a local reference variable with reference to `CL_CTMENU` is created, an object is created, and the new function codes `SQUARE`, `CUBE`, `SQUAREROOT`, and `CUBICROOT` are added. When included in the context menu for `INPUT`, a text must be specified for the entry, after which the submenu is attached.

REPORT demo\_dynpro\_context\_menu.\\n\\nDATA: field1 TYPE i VALUE 10,\\n field2 TYPE p DECIMALS 4.\\n\\nDATA: prog TYPE sy-repid,\\n flag(1) TYPE c VALUE 'X'.\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok TYPE sy-ucomm.\\n\\nprog = sy-repid.\\n\\nCALL SCREEN 100.\\n\\nMODULE status\_0100 OUTPUT.\\n SET TITLEBAR 'TIT100'.\\n IF flag = 'X'.\\n SET PF-STATUS 'SCREEN\_100' EXCLUDING 'REVEAL'.\\n ELSEIF flag = ' '.\\n SET PF-STATUS 'SCREEN\_100' EXCLUDING 'HIDE'.\\n ENDIF.\\n LOOP AT SCREEN INTO DATA(screen\_wa).\\n IF screen\_wa-group1 = 'MOD'.\\n IF flag = 'X'.\\n screen\_wa-active = '1'.\\n ELSEIF flag = ' '.\\n screen\_wa-active = '0'.\\n ENDIF.\\n MODIFY SCREEN FROM screen\_wa.\\n ELSEIF screen\_wa-name = 'TEXT\_IN\_FRAME'.\\n IF flag = 'X'.\\n screen\_wa-active = '0'.\\n ELSEIF flag = ' '.\\n screen\_wa-active = '1'.\\n ENDIF.\\n MODIFY SCREEN FROM screen\_wa.\\n ENDIF.\\n ENDLOOP.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE user\_command\_0100.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n CASE save\_ok.\\n WHEN 'HIDE'.\\n flag = ' '.\\n WHEN 'REVEAL'.\\n flag = 'X'.\\n WHEN 'SQUARE'.\\n field2 = field1 \*\* 2.\\n WHEN 'CUBE'.\\n field2 = field1 \*\* 3.\\n WHEN 'SQUAREROOT'.\\n field2 = field1 \*\* ( 1 / 2 ).\\n WHEN 'CUBICROOT'.\\n field2 = field1 \*\* ( 1 / 3 ).\\n ENDCASE.\\nENDMODULE.\\n\\n\\n\\n\\n\\nFORM on\_ctmenu\_text USING l\_menu TYPE REF TO cl\_ctmenu.\\n l\_menu->load\_gui\_status(\\n EXPORTING program = prog\\n status = 'CONTEXT\_MENU\_1'\\n menu = l\_menu ).\\nENDFORM.\\n\\nFORM on\_ctmenu\_frame USING l\_menu TYPE REF TO cl\_ctmenu.\\n l\_menu->load\_gui\_status(\\n EXPORTING program = prog\\n status = 'CONTEXT\_MENU\_2'\\n menu = l\_menu ).\\n l\_menu->load\_gui\_status(\\n EXPORTING program = prog\\n status = 'CONTEXT\_MENU\_1'\\n menu = l\_menu ).\\n l\_menu->set\_default\_function(\\n EXPORTING fcode = 'HIDE' ).\\nENDFORM.\\n\\nFORM on\_ctmenu\_reveal USING l\_menu TYPE REF TO cl\_ctmenu.\\n l\_menu->load\_gui\_status(\\n EXPORTING program = prog\\n status = 'CONTEXT\_MENU\_3'\\n menu = l\_menu ).\\n l\_menu->load\_gui\_status(\\n EXPORTING program = prog\\n status = 'CONTEXT\_MENU\_1'\\n menu = l\_menu ).\\n l\_menu->set\_default\_function(\\n EXPORTING fcode = 'REVEAL' ).\\nENDFORM.\\n\\nFORM on\_ctmenu\_input USING l\_menu TYPE REF TO cl\_ctmenu.\\n DATA calculate\_menu TYPE REF TO cl\_ctmenu.\\n CREATE OBJECT calculate\_menu.\\n calculate\_menu->add\_function(\\n EXPORTING fcode = 'SQUARE'\\n text = text-001 ).\\n calculate\_menu->add\_function(\\n EXPORTING fcode = 'CUBE'\\n text = text-002 ).\\n calculate\_menu->add\_function(\\n EXPORTING fcode = 'SQUAREROOT'\\n text = text-003 ).\\n calculate\_menu->add\_function(\\n EXPORTING fcode = 'CUBICROOT'\\n text = text-004 ).\\n l\_menu->add\_submenu(\\n EXPORTING menu = calculate\_menu\\n text = text-005 ).\\nENDFORM.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html abenscreen\_elements\_abexas.html