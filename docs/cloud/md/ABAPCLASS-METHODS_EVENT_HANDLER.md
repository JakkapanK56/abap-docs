---
title: "ABAPCLASS-METHODS_EVENT_HANDLER"
description: |
  ABAPCLASS-METHODS_EVENT_HANDLER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCLASS-METHODS_EVENT_HANDLER.htm"
abapFile: "ABAPCLASS-METHODS_EVENT_HANDLER.html"
keywords: ["if", "method", "class", "data", "ABAPCLASS", "METHODS", "EVENT", "HANDLER"]
---

``CLASS-METHODS meth [[`DEFAULT IGNORE|FAIL`](ABAPMETHODS_DEFAULT.html)]``\\ 
   `FOR EVENT evt OF \{class|intf\}`\\ 
   `[IMPORTING p1 p2 ...[sender]].`

This statement declares the [static method](ABENSTATIC_METHOD_GLOSRY.html)\\ `meth` as the [event handler](ABENEVENT_HANDLER_GLOSRY.html) for the event `evt` of the class `class` or the interface `intf`. The syntax and meaning of the additions are identical to the declaration of [instance methods as event handlers](ABAPMETHODS_EVENT_HANDLER.html).

Static event handlers can be called by the event `evt` independently of an instance of the class.

The class `dialog_box` defines a static event handler `close_box` for the event that is raised when the user wants to close a Control Frameworks (CFW) dialog box.

CLASS dialog\_box DEFINITION. \\n PUBLIC SECTION. \\n METHODS constructor. \\n ... \\n PRIVATE SECTION. \\n CLASS-DATA open\_boxes TYPE i. \\n CLASS-METHODS close\_box \\n FOR EVENT close OF cl\_gui\_dialogbox\_container \\n IMPORTING sender. \\n ... \\nENDCLASS. \\n\\ \\nCLASS dialog\_box IMPLEMENTATION. \\n METHOD constructor. \\n ... " create a dialogbox \\n open\_boxes = open\_boxes + 1. \\n ENDMETHOD. \\n METHOD close\_box \\n ... " close the dialogbox referred by sender \\n open\_boxes = open\_boxes - 1. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenmethods.html abapclass-methods.html