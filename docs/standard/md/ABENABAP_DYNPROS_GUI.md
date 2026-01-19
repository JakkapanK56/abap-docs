---
title: "ABENABAP_DYNPROS_GUI"
description: |
  ABENABAP_DYNPROS_GUI - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPROS_GUI.htm"
abapFile: "ABENABAP_DYNPROS_GUI.html"
keywords: ["do", "if", "ABENABAP", "DYNPROS", "GUI"]
---

For the execution of user dialogs, input and output services are required that can be accessed through a [user interface](ABENUSER_INTERFACE_GLOSRY.html) (`UI`). A user interface is used for the interaction between a user and a program. If parts of the user interface are displayed in the [GUI window](ABENGUI_WINDOW_GLOSRY.html) on the screen, this is a graphical user interface ([GUI](ABENGUI_GLOSRY.html)). The SAP-specific implementation for the execution of dialog-based applications with [dynpros](ABENAS_ABAP_GLOSRY.html) is [SAP GUI](ABENSAP_GUI_GLOSRY.html), which is installed as a component of the [AS ABAP](ABENAS_ABAP_GLOSRY.html)\\ [presentation layer](ABENPRESENTATION_LAYER_GLOSRY.html) on the presentation servers. It contains all control elements that are required for the execution of dialogs between the user and the program. The control elements of the SAP GUI are represented schematically in the following diagram:

On the screen, SAP GUI presents the [screen layout](ABENSCREEN_GLOSRY.html) of a dynpro in a GUI window. The screen layout can contain screen elements for displaying content or for receiving user actions. The screen layout and its screen elements are processed using the [Layout Editor](ABENLAYOUT_EDITOR_GLOSRY.html) in the Screen Painter tool. Each screen element has properties that are statically predefined in [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html) and, in part, can be modified dynamically in the ABAP program.

As a further part of the graphical user interface, each standard window contains a menu bar, a standard toolbar, and an application toolbar. GUI windows that are displayed as a modal dialog box contain only an application toolbar. The bars are standalone components of the ABAP program and are grouped together in a GUI status, as well as being assigned to a dynpro when the GUI status is set. In addition to the graphical elements, the function keys are part of the user interface. They are defined as an independent component of the ABAP program and therefore part of a GUI status. The components of the GUI status and the GUI status itself are processed using the Menu Painter tool. For the most part, the control elements presented by the user interface are linked with the function codes, which can be evaluated in the ABAP program. The description of the current GUI status can be found in the system field `sy-pfkey`.

A GUI window in SAP GUI is complete when it has a title bar and a status bar. The title bar, which is also edited using the Menu Painter, contains the header of the GUI window. The status bar displays information that can be sent, among other things, during the execution of an ABAP program using the [`MESSAGE`](ABAPMESSAGE.html) statement. In addition, it contains system information that can be displayed or hidden through an icon on the right-hand side of the bar.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html