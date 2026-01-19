---
title: "ABENABAP_DYNPROS"
description: |
  ABENABAP_DYNPROS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPROS.htm"
abapFile: "ABENABAP_DYNPROS.html"
keywords: ["select", "do", "class", "data", "ABENABAP", "DYNPROS"]
---

Dynpro is an abbreviation for *Dynamic Program*. A dynpro is a [repository](ABENREPOSITORY_GLOSRY.html) object and is always a component of an ABAP program (a function pool, executable program, or module pool). It consists of a [screen layout](ABENSCREEN_GLOSRY.html) with its screen elements and the [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html). [Dynpro fields](ABENDYNPRO_FIELD_GLOSRY.html) are assigned to the screen elements.

The flow logic contains processing blocks for events that are raised before a screen layout is sent, and after user actions on the displayed screen layout. General dynpros are edited using the [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html) tool. Special dynpros, such as selection screens and lists, are generated from ABAP statements.

The dynpros in a **single** ABAP program can be combined to form [dynpro sequences](ABENDYNPRO_SEQUENCE_GLOSRY.html). Individual dynpros or dynpro sequences can be called either using a transaction code from outside the ABAP program or by using the statement [`CALL SCREEN`](ABAPCALL_SCREEN.html) in the associated ABAP program. Once a dynpro or dynpro sequence is called, the control of the execution of the ABAP program is passed to the flow logic of the dynpro. Dynpro sequences can be defined dynamically by setting the next dynpro attribute for a dynpro dynamically in the ABAP program.

The screen flow logic is divided into the Process Before Output ([PBO](ABENPBO_GLOSRY.html)) event, which is processed before the screen is displayed, and the Process After Input ([PAI](ABENPAI_GLOSRY.html)) event, which is processed after a user action on the screen.

The following diagram shows the position of dynpros between the [GUI status](ABENGUI_STATUS_GLOSRY.html) and the ABAP program:

The dynpro flow logic calls dialog modules in the ABAP program, either to prepare the screens for display (PBO event) or to process the user's entries (PAI event). Dynpros are dynamic programs and have their own data objects, called [dynpro fields](ABENDYNPRO_FIELD_GLOSRY.html). These are associated with the input/output fields that appear on the screen itself. When the screen is displayed and exited, data is passed between dynpros and ABAP programs on the basis of the matching names of dynpro fields and data objects in the ABAP program.

Each screen has a GUI status, containing a menu bar, standard toolbar, and an application toolbar. Like dynpros, GUI statuses are independent components of the ABAP program. They are created in the [Menu Painter](ABENMENU_PAINTER_GLOSRY.html). GUI statuses are assigned to dynpros dynamically in ABAP programs. Each dynpro is associated with the current GUI status using a special dynpro field to which the corresponding function code is passed whenever user actions are performed on the GUI status. The dynpro passes the [function code](ABENFUNCTION_CODE_GLOSRY.html) to the ABAP program where it can then be evaluated, just like any other dynpro field.

The following subtopics are covered in this section:

The classic dynpros described here are considered obsolete by SAP for application programs. For new developments, only [SAPUI5](ABENSAPUI5_GLOSRY.html) or [Web Dynpro](ABENWEB_DYNPRO_GLOSRY.html) should be used.

-   [User Interface](ABENABAP_DYNPROS_GUI.html)
-   [Screen and Screen Elements](ABENABAP_DYNPROS_SCREEN.html)
-   [Dynpro Fields](ABENABAP_DYNPROS_FIELDS.html)
-   [Dynpro Flow and Dynpro Sequences](ABENABAP_DYNPROS_PROCESSING.html)
-   [Input Checks](ABENABAP_DYNPROS_CHECKS.html)
-   [Field Help, Input Help, and Dropdown List Boxes](ABENABAP_DYNPROS_HELP.html)
-   [Statements in the Dynpro Flow Logic](ABENABAP_DYNPROS_DYNPRO_STATEMENTS.html)
-   [ABAP Statements for Dynpros](ABENABAP_DYNPROS_ABAP_STATEMENTS.html)

abenabap.html abenabap\_reference.html abenabap\_screens.html