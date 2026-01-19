---
title: "ABENSAP_GUI_GLOSSARY"
description: |
  ABENSAP_GUI_GLOSSARY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSAP_GUI_GLOSSARY.htm"
abapFile: "ABENSAP_GUI_GLOSSARY.html"
keywords: ["select", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "ABENSAP", "GUI", "GLOSSARY"]
---

In the following, terms of the [ABAP Glossary](ABENABAP_GLOSSARY.html) are listed, that are relevant for SAP GUI user dialogs.

**application toolbar**

Component of a [GUI window](ABENGUI_WINDOW_GLOSRY.html). Contains [pushbuttons](ABENPUSHBUTTON_GLOSRY.html) defined in the [Menu Painter](ABENMENU_PAINTER_GLOSRY.html) tool. Part of the [GUI status](ABENGUI_STATUS_GLOSRY.html) set using [`SET PF-STATUS`](ABAPSET_PF-STATUS_DYNPRO.html). Also referred to as the [pushbutton toolbar](ABENPUSH_BUTTON_TOOLBAR_GLOSRY.html) in [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html)

**archiving parameter**

A parameter that must be passed to a [spool request](ABENSPOOL_REQUEST_GLOSRY.html) if its data is to be archived using [ArchiveLink](ABENARCHIVELINK_GLOSRY.html).

**basic list**

[List](ABENCLASSIC_LIST_GLOSRY.html) of [list level](ABENLIST_LEVEL_GLOSRY.html) 0. After a program is called, [output statements](ABENOUTPUT_STATEMENT_GLOSRY.html) write to the basic list by default.

**CFW**

*\->*\\ [Control Framework](ABENCONTROL_FRAMEWORK_GLOSRY.html)

**checkbox**

[Screen element](ABENSCREEN_ELEMENT_GLOSRY.html) linked to a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html), into which the user can enter the value *X* or blank.

**classic list**

List for short. Medium used for the structured and formatted output of data. List output is either written to a [list buffer](ABENLIST_BUFFER_GLOSRY.html) as a [screen list](ABENSCREEN_LIST_GLOSRY.html) and displayed on a [list dynpro](ABENLIST_DYNPRO_GLOSRY.html) or is sent to the [SAP spool system](ABENSAP_SPOOL_SYSTEM_GLOSRY.html) as a [spool list](ABENSPOOL_LIST_GLOSRY.html).

**command field**

Input field in the [standard toolbar](ABENSTANDARD_TOOLBAR_GLOSRY.html). This input field accepts [function codes](ABENFUNCTION_CODE_GLOSRY.html), [transaction codes](ABENTRANSACTION_CODE_GLOSRY.html), and other shortcuts such as */h* for starting the [ABAP Debugger](ABENABAP_DEBUGGER_GLOSRY.html).

**complex selection**

*\->*\\ [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html)

**control**

Software component of the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) used to process complex [screen elements](ABENSCREEN_ELEMENT_GLOSRY.html). [Table controls](ABENTABLE_CONTROL_GLOSRY.html), [tabstrip controls](ABENTABSTRIP_CONTROL_GLOSRY.html), and [splitter controls](ABENSPLITTER_CONTROL_GLOSRY.html) are platform-independent controls that processed directly using dynpro statements and [ABAP statements](ABENABAP_STATEMENT_GLOSRY.html). In addition, there are platform-independent [GUI controls](ABENGUI_CONTROL_GLOSRY.html) that are accessed in ABAP using the [classes](ABENCLASS_GLOSRY.html) of the [Control Framework](ABENCONTROL_FRAMEWORK_GLOSRY.html).

**control element**

Element in the [user interface](ABENUSER_INTERFACE_GLOSRY.html) for which a [user action](ABENUSER_ACTION_GLOSRY.html) can be executed. Most [SAP GUI](ABENSAP_GUI_GLOSRY.html) UI elements can be linked to a [function code](ABENFUNCTION_CODE_GLOSRY.html).

**Control Framework**

CFW for short. Class hierarchy whose [classes](ABENCLASS_GLOSRY.html) begin with the prefix `CL_GUI_`. The common [superclass](ABENSUPERCLASS_GLOSRY.html) is `CL_GUI_OBJECT`. The classes in Control Framework wrap [GUI controls](ABENGUI_CONTROL_GLOSRY.html) and screen containers for these controls.

**custom control**

Area on a [screen layout](ABENSCREEN_GLOSRY.html) in which [GUI controls](ABENGUI_CONTROL_GLOSRY.html) can be displayed.

**default value**

A value that appears in an [input field](ABENINPUT_OUTPUT_FIELD_GLOSRY.html) when a [screen layout](ABENSCREEN_GLOSRY.html) is called and can be overwritten by the user. A default value is usually set in the corresponding [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) before the screen layout is called.

**details list**

[List](ABENCLASSIC_LIST_GLOSRY.html) with a [list level](ABENLIST_LEVEL_GLOSRY.html) greater than 0. List output in [event blocks](ABENEVENT_BLOCK_GLOSRY.html) of the [interactive list processing](ABENINTERACTIVE_LIST_PROCES_GLOSRY.html) writes to details lists.

**dialog box**

Also referred to as a modal dialog box. Display of the [GUI window](ABENGUI_WINDOW_GLOSRY.html) of a [dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html) called by [`CALL SCREEN`](ABAPCALL_SCREEN.html), where the previous GUI window remains visible although it is inactive. Up to nine dialog boxes can be stacked over a GUI window (see [popup level](ABENPOP-UP_LEVEL_GLOSRY.html)). Modeless dialog boxes, where the previous GUI window remains active, can be implemented in [SAP GUI](ABENSAP_GUI_GLOSRY.html) only as [GUI controls](ABENGUI_CONTROL_GLOSRY.html).

**dialog module**

[Processing block](ABENPROCESSING_BLOCK_GLOSRY.html) without a local [data area](ABENDATA_AREA_GLOSRY.html) that can be defined in [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) that support their own [dynpros](ABENDYNPRO_GLOSRY.html) ([executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html), [function pools](ABENFUNCTION_POOL_GLOSRY.html), [module pools](ABENMODUL_POOL_GLOSRY.html)) and is called from the [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html). Begins with [`MODULE`](ABAPMODULE.html) and ends with [`ENDMODULE`](ABAPENDMODULE.html).

**dialog module object**

Obsolete [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html). Predecessor of [function modules](ABENFUNCTION_MODULE_GLOSRY.html). Like a [transaction code](ABENTRANSACTION_CODE_GLOSRY.html), is linked to an [initial dynpro](ABENINITIAL_DYNPRO_GLOSRY.html) of a [dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html) of any [ABAP program](ABENABAP_PROGRAM_GLOSRY.html). Can contain interface parameters that must be declared in the ABAP program as global data. Different dialog modules can be assigned to an ABAP program. Called using [`CALL DIALOG`](ABAPCALL_DIALOG.html). Dialog modules are maintained using the transaction code `SE35`.

**dialog processing**

Execution of programs in a [dialog session](ABENDIALOG_SESSION_GLOSRY.html). In contrast to [background processing](ABENBACKROUND_PROCESSING_GLOSRY.html), the flow of execution is not predefined at program start, but can be controlled by the user during the program flow. For dialog processing, dialog [work processes](ABENWORK_PROCESS_GLOSRY.html) must be set up.

**dialog program**

Obsolete name for a [module pool](ABENMODUL_POOL_GLOSRY.html) and its [dynpros](ABENDYNPRO_GLOSRY.html).

**dialog session**

[User session](ABENUSER_SESSION_GLOSRY.html) for [dialog processing](ABENDIALOG_PROCESSING_GLOSRY.html). A dialog session is usually opened using [SAP GUI](ABENSAP_GUI_GLOSRY.html).

**dialog step**

State of a [user session](ABENUSER_SESSION_GLOSRY.html) between a [user action](ABENUSER_ACTION_GLOSRY.html) on the [user interface](ABENUSER_INTERFACE_GLOSRY.html) of a [dynpro](ABENDYNPRO_GLOSRY.html) and the sending of a new [screen layout](ABENSCREEN_GLOSRY.html). During a dialog step, [AS ABAP](ABENAS_ABAP_GLOSRY.html) does not react to user actions. The current user session is assigned a [work process](ABENWORK_PROCESS_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html), which executes the program logic of the dialog step. Generally, the dialog step is made up of the logic programmed for the events [PAI](ABENPAI_GLOSRY.html) of the current dynpro and [PBO](ABENPBO_GLOSRY.html) time of the following dynpro.

**dialog transaction**

The [transaction code](ABENTRANSACTION_CODE_GLOSRY.html) of a dialog transaction is linked to a [dynpro](ABENDYNPRO_GLOSRY.html) of an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html). When the [transaction](ABENTRANSACTION_GLOSRY.html) is called, the respective program is loaded and the dynpro is called after the [event](ABENEVENT_GLOSRY.html)\\ [`LOAD-OF-PROGRAM`](ABAPLOAD-OF-PROGRAM.html).

**double-click**

Selecting a [screen element](ABENSCREEN_ELEMENT_GLOSRY.html) by double-clicking with the mouse. In the [SAP GUI](ABENSAP_GUI_GLOSRY.html), double-clicking with the mouse always has the same effect as selecting the [function key](ABENFUNCTION_KEY_GLOSRY.html)\\ F2.

**dropdown list box**

A list of values for an [input/output field](ABENINPUT_OUTPUT_FIELD_GLOSRY.html). Entries can only be selected from this list. The value that is actually entered is assigned to an entry in the dropdown list box. The program uses the assigned value and not the entry.

**dynamic selection**

Also [free selection](ABENFREE_SELECTION_GLOSRY.html). [Ranges condition](ABENRANGES_CONDITION_GLOSRY.html) that can be entered by means of a dynamically generated [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). Dynamic selections can be entered either on the selection screen of [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) or by calling special [function modules](ABENFUNCTION_MODULE_GLOSRY.html).

**dynpro**

Dynamic program, component of an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html), a [function pool](ABENFUNCTION_POOL_GLOSRY.html), or a [module pool](ABENMODUL_POOL_GLOSRY.html). Consists of a [screen layout](ABENSCREEN_GLOSRY.html) and a [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html) and contains [dynpro fields](ABENDYNPRO_FIELD_GLOSRY.html). General dynpros are created with the [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html) tool. Special dynpros ([selection screens](ABENSELECTION_SCREEN_GLOSRY.html), [list dynpros](ABENLIST_DYNPRO_GLOSRY.html)) are created implicitly.

**dynpro event**

An [event](ABENEVENT_GLOSRY.html) during [dynpro](ABENDYNPRO_GLOSRY.html) processing. Either [PAI](ABENPAI_GLOSRY.html), [PBO](ABENPBO_GLOSRY.html), [POH](ABENPOH_GLOSRY.html), or [POV](ABENPOV_GLOSRY.html).

**dynpro field**

[Data object](ABENDATA_OBJECT_GLOSRY.html) in the working memory of a [dynpro](ABENDYNPRO_GLOSRY.html). In [PAI](ABENPAI_GLOSRY.html), the content of a dynpro field is passed to a data object of the same name in the [ABAP program](ABENABAP_PROGRAM_GLOSRY.html); in [PBO](ABENPBO_GLOSRY.html), it receives the content of the data object in the ABAP program. All dynpro fields, except the [OK field](ABENOK_FIELD_GLOSRY.html), are linked to a [screen element](ABENSCREEN_ELEMENT_GLOSRY.html).

**dynpro flow logic**

Procedural part of a [dynpro](ABENDYNPRO_GLOSRY.html) with its own programming language, similar to ABAP. Executed in [AS ABAP](ABENAS_ABAP_GLOSRY.html). It is separated into the [processing blocks](ABENPROCESSING_BLOCK_GLOSRY.html)\\ [`PROCESS AFTER INPUT`](PROCESS.html), [`PROCESS BEFORE OUTPUT`](PROCESS.html), [`PROCESS ON HELP-REQUEST`](PROCESS.html), and [`PROCESS ON VALUE-REQUEST`](PROCESS.html), which react to the [dynpro events](ABENDYNPRO_EVENT_GLOSRY.html)\\ [PAI](ABENPAI_GLOSRY.html), [PBO](ABENPBO_GLOSRY.html), [POH](ABENPOH_GLOSRY.html), and [POV](ABENPOV_GLOSRY.html) and call [dialog modules](ABENDIALOG_MODULE_GLOSRY.html) of the corresponding [ABAP program](ABENABAP_PROGRAM_GLOSRY.html).

**dynpro number**

Unique number that identifies a [dynpro](ABENDYNPRO_GLOSRY.html) in an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) using a four-digit number.

**dynpro sequence**

Processing sequence of [dynpros](ABENDYNPRO_GLOSRY.html) whose flow is determined by the [next dynpro](ABENNEXT_DYNPRO_GLOSRY.html) for each dynpro involved. The first dynpro in a dynpro sequence is the [initial dynpro](ABENINITIAL_DYNPRO_GLOSRY.html). Dynpro sequences are called using [transaction codes](ABENTRANSACTION_CODE_GLOSRY.html) or [`CALL SCREEN`](ABAPCALL_SCREEN.html). A dynpro sequence always belongs to a single [popup level](ABENPOP-UP_LEVEL_GLOSRY.html) and is executed in a single [GUI window](ABENGUI_WINDOW_GLOSRY.html). A dynpro sequence is ended when the next dynpro with the [dynpro number](ABENDYNPRO_NUMBER_GLOSRY.html) 0 is called.

**edit mask**

Template for formatting the output of a [data object](ABENDATA_OBJECT_GLOSRY.html) in a [list](ABENCLASSIC_LIST_GLOSRY.html). An edit mask is a character string consisting of placeholders for the characters of the data object to be output, and specific characters for formatting the output.

**field help**

Direct help that appears when the user presses the F1 key on a field of a [screen layout](ABENSCREEN_GLOSRY.html).

**field selection**

Property of a node of a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html). If a node is defined for field selection, it is possible to control which [fields](ABENFIELD_GLOSRY.html) of the node are supposed to be read from outside the logical database. Field selections are declared using the addition [`FIELD SELECTION`](ABAPSELECTION-SCREEN_LDB_FIELD.html) of the statement [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) in the logical database.

**frame**

[Screen element](ABENSCREEN_ELEMENT_GLOSRY.html) used to group other screen elements and on which no [user actions](ABENUSER_ACTION_GLOSRY.html) are possible. A frame is not linked to a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html).

**free selection**

*\->*\\ [dynamic selection](ABENDYNAMIC_SELECTION_GLOSRY.html)

**function code**

Sequence of up to 20 characters that can be assigned to specific [control elements](ABENCONTROL_ELEMENT_GLOSRY.html) of the [user interface](ABENUSER_INTERFACE_GLOSRY.html) in [SAP GUI](ABENSAP_GUI_GLOSRY.html). When selecting one of these control elements, the [dynpro event](ABENDYNPRO_EVENT_GLOSRY.html)\\ [PAI](ABENPAI_GLOSRY.html) is raised and the function code is transferred to the [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) using the [system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ [`sy-ucomm`](ABENSYSTEM_FIELDS.html) or the [OK field](ABENOK_FIELD_GLOSRY.html) of the [dynpro](ABENDYNPRO_GLOSRY.html).

**function key**

[Control element](ABENCONTROL_ELEMENT_GLOSRY.html) of the [user interface](ABENUSER_INTERFACE_GLOSRY.html). Defines keys or key combinations on an input device. A [function code](ABENFUNCTION_CODE_GLOSRY.html) can be assigned to a function key in the [function key settings](ABENFUNCTION_KEY_SETTING_GLOSRY.html).

**function key setting**

Assignment of [function codes](ABENFUNCTION_CODE_GLOSRY.html) to [function keys](ABENFUNCTION_KEY_GLOSRY.html). Part of the [GUI status](ABENGUI_STATUS_GLOSRY.html) set using [`SET PF-STATUS`](ABAPSET_PF-STATUS_DYNPRO.html). Created using the [Menu Painter](ABENMENU_PAINTER_GLOSRY.html) tool.

**GUI control**

Component of the [presentation view](ABENPRESENTATION_LAYER_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html). Examples of GUI controls are the Picture Control, the Text Edit Control, and the Tree Control. GUI controls are installed with the [SAP GUI](ABENSAP_GUI_GLOSRY.html) and are addressed in ABAP using [classes](ABENCLASS_GLOSRY.html) of the [Control Framework](ABENCONTROL_FRAMEWORK_GLOSRY.html).

**GUI status**

Groups the [menu bar](ABENMENU_BAR_GLOSRY.html), [standard toolbar](ABENSTANDARD_TOOLBAR_GLOSRY.html), and [application toolbar](ABENAPPLICATION_TOOLBAR_GLOSRY.html) of a [GUI window](ABENGUI_WINDOW_GLOSRY.html) as well as the [function key settings](ABENFUNCTION_KEY_SETTING_GLOSRY.html). A GUI status is set using the statement [`SET PF-STATUS`](ABAPSET_PF-STATUS_DYNPRO.html) and is created using the [Menu Painter](ABENMENU_PAINTER_GLOSRY.html) tool.

**GUI title**

Text that can be displayed in the [title bar](ABENTITLE_BAR_GLOSRY.html) of a [GUI window](ABENGUI_WINDOW_GLOSRY.html). A GUI title is set using the statement [`SET TITLEBAR`](ABAPSET_TITLEBAR_DYNPRO.html) and created using the [Menu Painter](ABENMENU_PAINTER_GLOSRY.html) tool.

**GUI window**

[Window](ABENWINDOW_GLOSRY.html) of the [SAP GUI](ABENSAP_GUI_GLOSRY.html). Consists of a [title bar](ABENTITLE_BAR_GLOSRY.html), [menu bar](ABENMENU_BAR_GLOSRY.html), [standard toolbar](ABENSTANDARD_TOOLBAR_GLOSRY.html), [application toolbar](ABENAPPLICATION_TOOLBAR_GLOSRY.html), [screen layout](ABENSCREEN_GLOSRY.html), [status bar](ABENSTATUS_BAR_GLOSRY.html), and any [scroll bars](ABENSCROLL_BAR_GLOSRY.html). Each GUI window is linked with an [ABAP session](ABENABAP_SESSION_GLOSRY.html). A maximum of 16 ABAP sessions and therefore GUI windows can be managed by a single [user session](ABENUSER_SESSION_GLOSRY.html).

**hide area**

Area in the [list buffer](ABENLIST_BUFFER_GLOSRY.html) to which [global](ABENPRG_GLBL_DATA_GLOSRY.html)\\ [variables](ABENVARIABLE_GLOSRY.html) can be stored for every line of a [screen list](ABENSCREEN_LIST_GLOSRY.html) using the statement [`HIDE`](ABAPHIDE.html).

**icon**

Graphical element of the [GUI](ABENGUI_GLOSRY.html) for use on [pushbuttons](ABENPUSHBUTTON_GLOSRY.html) and also as a [status icon](ABENSTATUS_ICON_GLOSRY.html) on [screens](ABENSCREEN_GLOSRY.html) or in [lists](ABENCLASSIC_LIST_GLOSRY.html). The program `SHOWICON` shows a list of possible icons.

**initial dynpro**

First [dynpro](ABENDYNPRO_GLOSRY.html) in a [dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html). In a [dialog transaction](ABENDIALOG_TRANSACTION_GLOSRY.html), the dynpro that is linked to the [transaction code](ABENTRANSACTION_CODE_GLOSRY.html). For dynpro sequences called using `CALL SCREEN`, the initial dynpro is the dynpro specified in this command.

**input help**

List of values that is displayed when selecting F4 for a field on the [screen layout](ABENSCREEN_GLOSRY.html).

**input help button**

One-column [pushbutton](ABENPUSHBUTTON_GLOSRY.html) with an [icon](ABENICON_GLOSRY.html) that is displayed to the right of an [input field](ABENINPUT_OUTPUT_FIELD_GLOSRY.html) on a [dynpro](ABENDYNPRO_GLOSRY.html) if an [input help](ABENINPUT_HELP_GLOSRY.html) is defined for that field. Selecting the pushbutton has the same effect as pressing F4 for the field.

**input/output field**

[Screen element](ABENSCREEN_ELEMENT_GLOSRY.html) that is linked to a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html). Displays the content of the dynpro field and enables it to be changed using keys of the keyboard or on other input device that are not [function keys](ABENFUNCTION_KEY_GLOSRY.html).

**interactive list processing**

[List processing](ABENLIST_PROCESSING_GLOSRY.html) that takes place after [user actions](ABENUSER_ACTION_GLOSRY.html) on [lists](ABENCLASSIC_LIST_GLOSRY.html). The associated [event keywords](ABENEVENT_KEYWORD_GLOSRY.html) are [`AT LINE-SELECTION`](ABAPAT_LINE-SELECTION.html), [`AT USER-COMMAND`](ABAPAT_USER-COMMAND.html), and [`AT PFnn`](ABAPAT_PFNN.html).

**Internet Transaction Server**

ITS for short. [Interface](ABENINTF_GEN_GLOSRY.html) between an [AS ABAP](ABENAS_ABAP_GLOSRY.html) and the Internet. Internet Transaction Server is based on the data interface between [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) and [dynpros](ABENDYNPRO_GLOSRY.html). It enables users to communicate with an AS ABAP directly from the Internet by converting the [screens](ABENSCREEN_GLOSRY.html) of dynpros to HTML files, thus enabling them to be processed in a Web browser. ITS can be installed in addition to an AS ABAP. The ITS is replaced by the [Internet Communication Manager](ABENINTERNET_CON_MAN_GLOSRY.html) (ICM) which is an interface to the Internet that is integrated directly as a process in the AS ABAP.

**ITS**

[*\->* Internet Transaction Server](ABENINTERNET_TRANSAC_SERVER_GLOSRY.html).

**layout editor**

A [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html) tool for the graphical design of [screens](ABENSCREEN_GLOSRY.html).

**line element**

Predefined output element in a [list](ABENCLASSIC_LIST_GLOSRY.html). Line elements can be corners, crosses, horizontal and vertical lines, and T sections. Line elements are either output explicitly using the addition [`AS LINE`](ABAPWRITE_LIST_ELEMENTS.html) of the `WRITE` statement, or set by the system during automatic [write lines](ABENWRITE_LINES.html).

**list**

*\->*\\ [classic list](ABENCLASSIC_LIST_GLOSRY.html)

**list box**

*\->*\\ [Dropdown list box](ABENDROPDOWN_LISTBOX_GLOSRY.html)

**list buffer**

Memory area for storing [screen lists](ABENSCREEN_LIST_GLOSRY.html). Subdivided into [list levels](ABENLIST_LEVEL_GLOSRY.html). For each [dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html), the list buffer manages a hierarchy consisting of a [basic list](ABENBASIC_LIST_GLOSRY.html) and up to 20 [details lists](ABENDETAILS_LIST_GLOSRY.html).

**list creation**

Formatted output of content into a [list](ABENCLASSIC_LIST_GLOSRY.html) in the [list buffer](ABENLIST_BUFFER_GLOSRY.html) or in a [spool list](ABENSPOOL_LIST_GLOSRY.html).

**list cursor**

Current cursor position for the output in a [list](ABENCLASSIC_LIST_GLOSRY.html) in the [list buffer](ABENLIST_BUFFER_GLOSRY.html). This is represented by the content of the [system fields](ABENSYSTEM_FIELD_GLOSRY.html)\\ [`sy-colno`](ABENSYSTEM_FIELDS.html) (position) and [`sy-linno`](ABENSYSTEM_FIELDS.html) (line) and refers to the current page in the list. Since a single character can occupy more columns in the list than positions in the list buffer, the horizontal position of the list cursor is only guaranteed to correspond to the column in the displayed list for the lower and upper output limits of the individual output.

**list dynpro**

Predefined [dynpro](ABENDYNPRO_GLOSRY.html) used to display [screen lists](ABENSCREEN_LIST_GLOSRY.html). The list dynpro is a component of the [list processor](ABENLIST_PROCESSOR_GLOSRY.html) and is accessed either implicitly during processing of an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) or explicitly with a [`LEAVE TO LIST-PROCESSING`](ABAPLEAVE_TO_LIST-PROCESSING.html) statement.

**list event**

[Event](ABENEVENT_GLOSRY.html) in the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) that occurs during [list processing](ABENLIST_PROCESSING_GLOSRY.html). The corresponding [event key words](ABENEVENT_KEYWORD_GLOSRY.html) are [`TOP-OF-PAGE`](ABAPTOP-OF-PAGE.html), [`END-OF-PAGE`](ABAPEND-OF-PAGE.html), plus [`AT LINE-SELECTION`](ABAPAT_LINE-SELECTION.html), [`AT USER-COMMAND`](ABAPAT_USER-COMMAND.html), and the obsolete [`AT PFnn`](ABAPAT_PFNN.html).

**list header**

Header of a list. Composed of the list title in the [title bar](ABENTITLE_BAR_GLOSRY.html) and of possible column headers. These can be maintained as part of the [text elements](ABENTEXT_ELEMENT_GLOSRY.html) of an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) for the [standard page header](ABENSTANDARD_PAGE_HEADER_GLOSRY.html).

**list index**

Identifier of a [list](ABENCLASSIC_LIST_GLOSRY.html) in the [list buffer](ABENLIST_BUFFER_GLOSRY.html). The value of the list index is 0 for the [basic list](ABENBASIC_LIST_GLOSRY.html) and 1 to 20 for the [details lists](ABENDETAILS_LIST_GLOSRY.html).

**list level**

Position of a [list](ABENCLASSIC_LIST_GLOSRY.html) in the [list buffer](ABENLIST_BUFFER_GLOSRY.html). A [basic list](ABENBASIC_LIST_GLOSRY.html) has the [list index](ABENLIST_INDEX_GLOSRY.html) 0; the list index of a [details list](ABENDETAILS_LIST_GLOSRY.html) is greater than 0. Content of the [system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ [`sy-lsind`](ABENSYSTEM_FIELDS.html).

**list processing**

Processing of a [screen list](ABENSCREEN_LIST_GLOSRY.html) encapsulated in the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) and the [dynpro event](ABENDYNPRO_EVENT_GLOSRY.html)\\ [PAI](ABENPAI_GLOSRY.html) is passed to the [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) in the form of [list events](ABENLIST_EVENT_GLOSRY.html).

**list processor**

System program for [list processing](ABENLIST_PROCESSING_GLOSRY.html) that contains the [list dynpro](ABENLIST_DYNPRO_GLOSRY.html) for displaying [screen lists](ABENSCREEN_LIST_GLOSRY.html).

**list status**

[GUI status](ABENGUI_STATUS_GLOSRY.html) that contains special functions for handling a [screen list](ABENSCREEN_LIST_GLOSRY.html).

**menu**

Graphic [control element](ABENCONTROL_ELEMENT_GLOSRY.html) that offers the user multiple [menu options](ABENMENU_OPTION_GLOSRY.html).

**menu bar**

Component of a [GUI window](ABENGUI_WINDOW_GLOSRY.html). Contains [menus](ABENMENU_GLOSRY.html) for handling the program. Part of the [GUI status](ABENGUI_STATUS_GLOSRY.html) set using [`SET PF-STATUS`](ABAPSET_PF-STATUS_DYNPRO.html). Created using the [Menu Painter](ABENMENU_PAINTER_GLOSRY.html) tool.

**menu entry**

Textual [control element](ABENCONTROL_ELEMENT_GLOSRY.html) of a [menu](ABENMENU_GLOSRY.html) that is linked with a [function code](ABENFUNCTION_CODE_GLOSRY.html) and can be selected simply by clicking it.

**Menu Painter**

[ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html) tool for creating the [GUI status](ABENGUI_STATUS_GLOSRY.html) and its components. Called using [transaction](ABENTRANSACTION_CODE_GLOSRY.html)\\ `SE41`.

**modification group**

Grouping of multiple [screen elements](ABENSCREEN_ELEMENT_GLOSRY.html) of a [dynpro](ABENDYNPRO_GLOSRY.html) under a three-digit abbreviation in order to commonly modify its display properties with the statement [`MODIFY SCREEN`](ABAPMODIFY_SCREEN.html). Screen elements are assigned to modification groups in the [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html) or in the [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) using the addition [`MODIF ID`](ABAPSELECTION-SCREEN_MODIF_ID.html) for [selection screens](ABENSELECTION_SCREEN_GLOSRY.html). A screen element can be assigned to up to four modification groups. The structure [`SCREEN`](ABENSCREEN.html) contains four components for the identification of modification groups.

**multiple selection**

[Selection criterium](ABENSELECTION_CRITERION_GLOSRY.html) for which the [selection table](ABENSELECTION_TABLE_GLOSRY.html) is filled with more than one line.

**next dynpro**

Each [dynpro](ABENDYNPRO_GLOSRY.html) has a next dynpro. Thus, each dynpro is part of a [dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html). Next dynpros can be set statically in the [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html) or with [`SET SCREEN`](ABAPSET_SCREEN.html) or [`LEAVE TO SCREEN`](ABAPLEAVE_SCREEN.html) in the [ABAP program](ABENABAP_PROGRAM_GLOSRY.html). If a dynpro is connected to a next dynpro with the [dynpro number](ABENDYNPRO_NUMBER_GLOSRY.html) 0, it is the last dynpro of the dynpro sequence.

**OK field**

Twenty-character [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html) that is not linked to a [screen element](ABENSCREEN_ELEMENT_GLOSRY.html). When a [user action](ABENUSER_ACTION_GLOSRY.html) is performed on a [control element](ABENCONTROL_ELEMENT_GLOSRY.html) that is linked to a [function code](ABENFUNCTION_CODE_GLOSRY.html), the function code is placed in the OK field and is transferred to a [data object](ABENDATA_OBJECT_GLOSRY.html) of the same name during [PAI](ABENPAI_GLOSRY.html).

**output field**

*\->*\\ [input/output field‎](ABENINPUT_OUTPUT_FIELD_GLOSRY.html)

**output statement**

Statement for writing into a [list](ABENCLASSIC_LIST_GLOSRY.html). Output statements are [`WRITE`](ABAPWRITE-.html) and [`ULINE`](ABAPULINE.html). There are also statements for positioning the [list cursor](ABENLIST_CURSOR_GLOSRY.html).

**page footer**

Reserved lines at the bottom of a page in a [list](ABENCLASSIC_LIST_GLOSRY.html). The page footer is defined in the [program-initiating statement](ABENPROGRAM_INIT_STATEMENT_GLOSRY.html) and can be filled during the [event](ABENEVENT_GLOSRY.html)\\ [`END-OF-PAGE`](ABAPEND-OF-PAGE.html).

**page header**

Lines at the start of a page in a [list](ABENCLASSIC_LIST_GLOSRY.html) that are excluded from vertical (top to bottom) scrolling. Can be filled with the content of the [standard page header](ABENSTANDARD_PAGE_HEADER_GLOSRY.html) and during the [event](ABENEVENT_GLOSRY.html)\\ [`TOP-OF-PAGE`](ABAPTOP-OF-PAGE.html).

**PAI**

Short for Process After Input. [Dynpro event](ABENDYNPRO_EVENT_GLOSRY.html) raised by a [user action](ABENUSER_ACTION_GLOSRY.html) on the [GUI](ABENGUI_GLOSRY.html). At PAI time, the content of [dynpro fields](ABENDYNPRO_FIELD_GLOSRY.html) is transferred to [data objects](ABENDATA_OBJECT_GLOSRY.html) of the same name in the [ABAP program](ABENABAP_PROGRAM_GLOSRY.html).

**parameter transaction**

A special [transaction code](ABENTRANSACTION_CODE_GLOSRY.html) that associates a [dialog transaction](ABENDIALOG_TRANSACTION_GLOSRY.html) with parameters. The dialog transaction is called when a parameter transaction is called and the input fields of the [initial dynpro](ABENINITIAL_DYNPRO_GLOSRY.html) of the dialog transaction are filled with actual parameters. The screen of the initial dynpro can be suppressed by specifying all mandatory input fields as parameters of the transaction, and if the [next dynpro](ABENNEXT_DYNPRO_GLOSRY.html) is not the initial dynpro itself.

**PBO**

Short for Process Before Output. [Dynpro event](ABENDYNPRO_EVENT_GLOSRY.html) raised by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) before a [screen layout](ABENSCREEN_GLOSRY.html) is sent to [SAP GUI](ABENSAP_GUI_GLOSRY.html). After the PBO is processed, [dynpro fields](ABENDYNPRO_FIELD_GLOSRY.html) are passed the content of [data objects](ABENDATA_OBJECT_GLOSRY.html) with the same name as in the [ABAP program](ABENABAP_PROGRAM_GLOSRY.html).

**POH**

Short for Process On Help Request. [Dynpro event](ABENDYNPRO_EVENT_GLOSRY.html) raised when the [field help](ABENFIELD_HELP_GLOSRY.html) (F1) for an [input field](ABENINPUT_OUTPUT_FIELD_GLOSRY.html) on the [screen layout](ABENSCREEN_GLOSRY.html) is requested.

**popup level**

Hierarchical level of a [GUI window](ABENGUI_WINDOW_GLOSRY.html). The first GUI window that appears during a [logon](ABENLOGON_GLOSRY.html) to [AS ABAP](ABENAS_ABAP_GLOSRY.html) has the popup level 0. Higher popup levels are created by stacking modal [dialog boxes](ABENDIALOG_BOX_GLOSRY.html) using the statement [`CALL SCREEN`](ABAPCALL_SCREEN.html) or [`CALL SELECTION-SCREEN`](ABAPCALL_SELECTION_SCREEN.html). The maximum popup level is 9.

**POV**

Short for Process On Value Request. [Dynpro event](ABENDYNPRO_EVENT_GLOSRY.html) raised when the [input help](ABENINPUT_HELP_GLOSRY.html) (F4) for an [input field](ABENINPUT_OUTPUT_FIELD_GLOSRY.html) on the [screen layout](ABENSCREEN_GLOSRY.html) is requested.

**presentation layer**

Software layer of a [client-server system](ABENCLIENT_SERVER_SYSTEM_GLOSRY.html). This layer analyzes [user actions](ABENUSER_ACTION_GLOSRY.html) and transfers these to the [application layer](ABENAPPLICATION_LAYER_GLOSRY.html). The presentation layer of an [ABAP system](ABENABAP_SYSTEM_GLOSRY.html) displays its [user interface](ABENUSER_INTERFACE_GLOSRY.html). It is usually distributed across multiple [presentation servers](ABENPRESENTATION_SERVER_GLOSRY.html).

**print**

See [Spool](ABENSPOOL_GLOSRY.html).

**print dialog box**

See [Spool dialog box](ABENSPOOL_DIALOG_BOX_GLOSRY.html)

**print list**

See [Spool list](ABENSPOOL_LIST_GLOSRY.html).

**print parameter**

See [spool parameter](ABENPRINT_PARAMETER_GLOSRY.html).

**pushbutton**

[Control element](ABENCONTROL_ELEMENT_GLOSRY.html) of the [GUI](ABENGUI_GLOSRY.html) that is connected to a [function code](ABENFUNCTION_CODE_GLOSRY.html), and which can be selected by clicking on it. In [SAP GUI](ABENSAP_GUI_GLOSRY.html), pushbuttons can be defined both as [screen elements](ABENSCREEN_ELEMENT_GLOSRY.html) and in [standard toolbars](ABENSTANDARD_TOOLBAR_GLOSRY.html) and [application toolbars](ABENAPPLICATION_TOOLBAR_GLOSRY.html).

**pushbutton toolbar**

Name used in the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html) for the [application toolbar](ABENAPPLICATION_TOOLBAR_GLOSRY.html).

**radio button**

[Screen element](ABENSCREEN_ELEMENT_GLOSRY.html) that is linked with a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html) and in which the user can enter the value *X* or blank. Radio buttons are grouped together in [radio button groups](ABENRADIO_BUTTON_GROUP_GLOSRY.html).

**radio button group**

Group of [radio buttons](ABENRADIO_BUTTON_GLOSRY.html) that belong together. Within a radio button group, only one radio button can be selected at a time.

**report transaction**

[Transaction](ABENTRANSACTION_GLOSRY.html) whose [transaction code](ABENTRANSACTION_CODE_GLOSRY.html) is linked with the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) of an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html), and is called internally using the statement [`SUBMIT`](ABAPSUBMIT.html).

**reporting**

Classic application area of [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html) where the program flow implements the [IPO](ABENEVA_GLOSRY.html) principle by displaying a [selection screen](ABENSELECTION_SCREEN_GLOSRY.html), reading data (often using a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html)), and displaying a formatted [list](ABENCLASSIC_LIST_GLOSRY.html).

**SAP GUI**

Component of the [presentation layer](ABENPRESENTATION_LAYER_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) that is installed on its [presentation servers](ABENPRESENTATION_SERVER_GLOSRY.html). Implements the SAP-specific [`GUI`](ABENGUI_GLOSRY.html) of appropriately programmed [AS ABAP](ABENAS_ABAP_GLOSRY.html) applications. The SAP GUI [user interface](ABENUSER_INTERFACE_GLOSRY.html) consists of the graphical interface (GUI) in a [GUI window](ABENGUI_WINDOW_GLOSRY.html) and the [function keys](ABENFUNCTION_KEY_GLOSRY.html) and other keys of an input device (keyboard or hardware components that simulate keyboards, such as bar code readers). SAP GUI also supports additional functions in the [presentation layer](ABENPRESENTATION_LAYER_GLOSRY.html) such as [`GUI` controls](ABENGUI_CONTROL_GLOSRY.html), [OLE automation](ABENOLE_AUTOMATION_GLOSRY.html), or the execution of operating system statements.

**SAP spool system**

Process of an [AS instance](ABENAS_INSTANCE_GLOSRY.html) for managing sequential data streams that are stored as [spool lists](ABENSPOOL_LIST_GLOSRY.html), printed on a printer, or stored using [ArchiveLink](ABENARCHIVELINK_GLOSRY.html). [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html) can create [spool requests](ABENSPOOL_REQUEST_GLOSRY.html) during the creation of lists by including pages of lists as parts of a [spool list](ABENSPOOL_LIST_GLOSRY.html) output.

**sash**

Divides a [splitter control](ABENSPLITTER_CONTROL_GLOSRY.html) into two [subscreen areas](ABENSUBSCREEN_ARREA_GLOSRY.html).

**screen element**

Graphic element on a [screen layout](ABENSCREEN_GLOSRY.html). Screen elements can be [checkboxes](ABENCHECKBOX_GLOSRY.html), [radio buttons](ABENRADIO_BUTTON_GLOSRY.html), [custom controls](ABENCUSTOM_CONTROL_GLOSRY.html), [dropdown list boxes](ABENDROPDOWN_LISTBOX_GLOSRY.html), [pushbuttons](ABENPUSHBUTTON_GLOSRY.html), [input/output fields](ABENINPUT_OUTPUT_FIELD_GLOSRY.html), [frames](ABENFRAME_GLOSRY.html), [subscreens](ABENSUBSCREEN_GLOSRY.html), [table controls](ABENTABLE_CONTROL_GLOSRY.html), [tabstrip controls](ABENTABSTRIP_CONTROL_GLOSRY.html), [text fields](ABENTEXT_FIELD_GLOSRY.html), and [status icons](ABENSTATUS_ICON_GLOSRY.html).

**screen layout**

Screen for short. Part of a [GUI window](ABENGUI_WINDOW_GLOSRY.html) of [SAP GUI](ABENSAP_GUI_GLOSRY.html). Contains [screen elements](ABENSCREEN_ELEMENT_GLOSRY.html). The part of a [dynpro](ABENDYNPRO_GLOSRY.html) that is visible to the user. For the case of general dynpros, the screen layout is created using the [Layout Editor](ABENLAYOUT_EDITOR_GLOSRY.html) of the [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html). For special dynpros ([selection screens](ABENSELECTION_SCREEN_GLOSRY.html) and [list dynpros](ABENLIST_DYNPRO_GLOSRY.html)), the screen layout is created implicitly.

**screen list**

[List](ABENCLASSIC_LIST_GLOSRY.html) that is displayed on the screen of the [list dynpro](ABENLIST_DYNPRO_GLOSRY.html). During its creation, a screen list is stored in the [list buffer](ABENLIST_BUFFER_GLOSRY.html). See also [spool list](ABENSPOOL_LIST_GLOSRY.html).

**screen painter**

[ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html) tool to create [dynpros](ABENDYNPRO_GLOSRY.html). Contains a text editor for writing the [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html) and a [Layout Editor](ABENLAYOUT_EDITOR_GLOSRY.html) for configuring the [screen layout](ABENSCREEN_GLOSRY.html). Called using [transaction](ABENTRANSACTION_CODE_GLOSRY.html)\\ `SE51`.

**scroll bar**

Part of [SAP GUI](ABENSAP_GUI_GLOSRY.html). Created automatically whenever a [screen layout](ABENSCREEN_GLOSRY.html) or a [screen element](ABENSCREEN_ELEMENT_GLOSRY.html) is too large for the area available in the [GUI window](ABENGUI_WINDOW_GLOSRY.html).

**selection criterion**

Component of a [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) defined using [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html). Displayed on the selection screen via two [input fields](ABENINPUT_OUTPUT_FIELD_GLOSRY.html) for interval boundaries and a pushbutton for [multiple selection](ABENMULTIPLE_SELECTION_GLOSRY.html). It is represented internally by a [selection table](ABENSELECTION_TABLE_GLOSRY.html).

**selection option**

The [comparison operator](ABENCOMP_OPERATOR_GLOSRY.html) assigned to a [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html).

**selection parameter**

A component of a [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) defined by [`PARAMETERS`](ABAPPARAMETERS.html) which is displayed as an [input field](ABENINPUT_OUTPUT_FIELD_GLOSRY.html) and which is represented internally as an [elementary data object](ABENELEMENTARY_DATA_OBJECT_GLOSRY.html).

**selection screen**

Special [dynpro](ABENDYNPRO_GLOSRY.html) that can be defined without the use of the [Screen Painter](ABENSCREEN_PAINTER_GLOSRY.html) by using the statements [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html), [`PARAMETERS`](ABAPPARAMETERS.html), or [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html) in the [global declaration part](ABENGLOBAL_DECLARATION_SECT_GLOSRY.html) of [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html), [function pools](ABENFUNCTION_POOL_GLOSRY.html), and [module pools](ABENMODUL_POOL_GLOSRY.html). Selection screens are processed by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html), which raises [selection screen events](ABENSELECTION_SCREEN_EVENT_GLOSRY.html). There are [standard selection screens](ABENSTANDARD_SELSCREEN_GLOSRY.html) and [standalone selection screens](ABENSTAND-ALONE_SEL_SCREEN_GLOSRY.html).

**selection screen element**

[Screen element](ABENSCREEN_ELEMENT_GLOSRY.html) of a [selection screen](ABENSELECTION_SCREEN_GLOSRY.html).

**selection screen event**

[Event](ABENEVENT_GLOSRY.html) of the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) that occurs during [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html). The corresponding [event keyword](ABENEVENT_KEYWORD_GLOSRY.html) is [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html).

**selection screen object**

[Selection parameter](ABENSELPAR_GLOSRY.html) or [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html) of a [selection screen](ABENSELECTION_SCREEN_GLOSRY.html).

**selection screen processing**

Processing of a [selection screen](ABENSELECTION_SCREEN_GLOSRY.html), encapsulated in the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html), in which the [dynpro events](ABENDYNPRO_EVENT_GLOSRY.html)\\ [PAI](ABENPAI_GLOSRY.html) and [PBO](ABENPBO_GLOSRY.html) are transferred to the [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) as [selection screen events](ABENSELECTION_SCREEN_EVENT_GLOSRY.html).

**selection screen variant**

Set of input values for [selection screens](ABENSELECTION_SCREEN_GLOSRY.html). They can be used when calling selection screens to enter values in the [input fields](ABENINPUT_OUTPUT_FIELD_GLOSRY.html). Variants on a selection screen can be created by choosing the menu path *Goto -> Variants* and be passed, for example, by calling the statement [`SUBMIT`](ABAPSUBMIT_SELSCREEN_PARAMETERS.html).

**selection screen version**

Version of the [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) of a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html). Selection screen versions allow certain elements of the standard selection screen to be suppressed. A selection screen version is created using [`SELECTION-SCREEN - VERSION`](ABAPSELECTION-SCREEN_LDB_VERSION.html) in combination with [`SELECTION-SCREEN EXCLUDE`](ABAPSELECTION-SCREEN_LDB_VERSION.html) and can be selected when linking an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) with a logical database.

**selection table**

Global [internal table](ABENINTERNAL_TABLE_GLOSRY.html) with a [header line](ABENHEADER_LINE_GLOSRY.html), the name of a [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html), and the same layout as a [ranges table](ABENRANGES_TABLE_GLOSRY.html). Declared using the statement [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html). A selection table can be used in the same way as a ranges table.

**selection text**

Part of the [text elements](ABENTEXT_ELEMENT_GLOSRY.html) of an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html). A selection text or a text from the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) can be assigned to every [selection parameter](ABENSELPAR_GLOSRY.html) or [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html) defined using [`PARAMETERS`](ABAPPARAMETERS.html) or [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html). It is then displayed for the corresponding [input fields](ABENINPUT_OUTPUT_FIELD_GLOSRY.html) on the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html).

**SET/GET parameter**

*\->*\\ [SPA/GPA parameter](ABENSPA_GPA_PARAMETER_GLOSRY.html)

**SPA/GPA parameter**

Also referred to as SET/GET parameter. A data object in the [user memory](ABENUSER_MEMORY_GLOSRY.html) that can be accessed in [ABAP programs](ABENABAP_PROGRAM_GLOSRY.html). SPA/GPA parameters are set using [`SET PARAMETER`](ABAPSET_PARAMETER.html) and read using [`GET PARAMETER`](ABAPGET_PARAMETER.html). [Input fields](ABENINPUT_OUTPUT_FIELD_GLOSRY.html) on [dynpros](ABENDYNPRO_GLOSRY.html) can be linked with SPA/GPA parameters and can be prefilled with values when the dynpro is called. Moreover, user input in such fields remains stored in the corresponding SPA/GPA parameters. The names of SPA/GPA parameters are managed in the database table `TPARA`.

**splitter control**

Splitter controls enable the display of two [subscreens](ABENSUBSCREEN_GLOSRY.html) next to each other or above one another. A splitter control is a [screen element](ABENSCREEN_ELEMENT_GLOSRY.html) that divides the area that it covers into two [subscreen areas](ABENSUBSCREEN_ARREA_GLOSRY.html). The boundary between the areas can be moved using a [sash](ABENSASH_GLOSRY.html).

**spool**

Also referred to as print. Sending of [lists](ABENCLASSIC_LIST_GLOSRY.html) to the [SAP spool system](ABENSAP_SPOOL_SYSTEM_GLOSRY.html). See also [spool list](ABENSPOOL_LIST_GLOSRY.html).

**spool dialog box**

Also referred to as print dialog box. Standard [dialog box](ABENDIALOG_BOX_GLOSRY.html) for entering [spool parameters](ABENPRINT_PARAMETER_GLOSRY.html). The spool dialog box is either called automatically or using the [function module](ABENFUNCTION_MODULE_GLOSRY.html)\\ `GET_PRINT_PARAMETERS`.

**Spool list**

Also referred to as a spool list. [List](ABENCLASSIC_LIST_GLOSRY.html) that is not stored as a [screen list](ABENSCREEN_LIST_GLOSRY.html) in the [list buffer](ABENLIST_BUFFER_GLOSRY.html) but is sent page by page to the [SAP spool system](ABENSAP_SPOOL_SYSTEM_GLOSRY.html). When it is created, a spool list is linked to exactly one [spool request](ABENSPOOL_REQUEST_GLOSRY.html) only. Spool lists can be stacked in [spool list levels](ABENSPOOL_LIST_LEVEL_GLOSRY.html). No more than two spool requests can be open at the same time for a spool list level. The statements used to create a spool list are [`NEW-PAGE PRINT ON|OFF`](ABAPNEW-PAGE_PRINT.html) and [`SUBMIT TO SAP-SPOOL`](ABAPSUBMIT_LIST_OPTIONS.html).

**spool list level**

Hierarchical level of a stacked [spool list](ABENSPOOL_LIST_GLOSRY.html). A spool list level has exactly one [spool request](ABENSPOOL_REQUEST_GLOSRY.html) assigned to it.

**spool number**

ID of a [spool request](ABENSPOOL_REQUEST_GLOSRY.html), implemented by a 10 digit number.

**spool parameter**

Parameters that are passed to a [spool request](ABENSPOOL_REQUEST_GLOSRY.html). [Archiving parameters](ABENARCHIVING_PARAMETER_GLOSRY.html) can be added to spool parameters.

**spool request**

Output request to the [SAP spool system](ABENSAP_SPOOL_SYSTEM_GLOSRY.html). In a spool request, the pages of a [spool list](ABENSPOOL_LIST_GLOSRY.html) are transferred to the SAP spool system. [Spool parameters](ABENPRINT_PARAMETER_GLOSRY.html) are defined when a spool request is opened and cannot be changed subsequently. A spool request is always assigned to the current [spool list level](ABENSPOOL_LIST_LEVEL_GLOSRY.html). The spool requests of stacked spool list levels are also stacked. A spool request is identified by a 10 digit [spool number](ABENSPOOL_NUMBER_GLOSRY.html).

**standalone selection screen**

[Selection screen](ABENSELECTION_SCREEN_GLOSRY.html) that is defined between the statements [`SELECTION-SCREEN \{BEGIN|END\} OF SCREEN`](ABAPSELECTION-SCREEN_DEFINITION.html). Standalone selection screens can be defined in all programs that can contain [dynpros](ABENDYNPRO_GLOSRY.html). See also [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html).

**standard list status**

Predefined [`GUI` status](ABENGUI_STATUS_GLOSRY.html) for a [list](ABENCLASSIC_LIST_GLOSRY.html).

**standard page header**

[List headers](ABENLIST_HEADER_GLOSRY.html) maintained as [text elements](ABENTEXT_ELEMENT_GLOSRY.html) of an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html). The standard page header consists of a standard header and column headings. If no list header is specified in the text elements, the title of the program specified in the [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html) is used.

**standard selection screen**

[Selection screen](ABENSELECTION_SCREEN_GLOSRY.html) that is defined outside of the statements [`SELECTION-SCREEN BEGIN|END OF SCREEN`](ABAPSELECTION-SCREEN_DEFINITION.html). A standard selection screen has the [dynpro number](ABENDYNPRO_NUMBER_GLOSRY.html) 1000 and is only possible in [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html) and [logical databases](ABENLOGICAL_DATA_BASE_GLOSRY.html). When an executable program is linked with a logical database, the two standard selection screens are combined into one selection screen. When an executable program is executed with the statement [`SUBMIT`](ABAPSUBMIT.html), the standard selection screen is called automatically if no other screen is specified. See also [standalone selection screen](ABENSTAND-ALONE_SEL_SCREEN_GLOSRY.html).

**standard toolbar**

Part of a [GUI window](ABENGUI_WINDOW_GLOSRY.html). Contains predefined pushbuttons and [icon](ABENICON_GLOSRY.html)\\ [push buttons](ABENPUSHBUTTON_GLOSRY.html) to handle the program, as well as a special [command field](ABENCOMMAND_FIELD_GLOSRY.html) for the direct input of [function codes](ABENFUNCTION_CODE_GLOSRY.html). Part of the [GUI status](ABENGUI_STATUS_GLOSRY.html) defined by [`SET PF-STATUS`](ABAPSET_PF-STATUS_DYNPRO.html). Created using the [Menu Painter](ABENMENU_PAINTER_GLOSRY.html) tool. It is referred to as the [symbol toolbar](ABENSYMBOL_TOOLBAR_GLOSRY.html) in the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html).

**status bar**

Component of a [GUI window](ABENGUI_WINDOW_GLOSRY.html). It shows [status messages](ABENSTATUS_MESSAGE_GLOSRY.html) and system information.

**status icon**

[Icon](ABENICON_GLOSRY.html) that is displayed as a [screen element](ABENSCREEN_ELEMENT_GLOSRY.html) of a [screen layout](ABENSCREEN_GLOSRY.html). It is linked with a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html). The same-named [data object](ABENDATA_OBJECT_GLOSRY.html) in the [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) must be of the [data type](ABENDATA_TYPE_GLOSRY.html)\\ `ICONS` in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html).

**status message**

[Message](ABENMESSAGE_GLOSRY.html) of [message type](ABENMESSAGE_TYPE_GLOSRY.html)\\ `S`. Status messages are displayed in the [status bar](ABENSTATUS_BAR_GLOSRY.html) of the [GUI window](ABENGUI_WINDOW_GLOSRY.html) of the next [dynpro](ABENDYNPRO_GLOSRY.html) in the.

**step loop**

Repeated display of a group of [screen elements](ABENSCREEN_ELEMENT_GLOSRY.html) on a [dynpro](ABENDYNPRO_GLOSRY.html). Step loops are processed using the [step loop technique](ABENSTEP_LOOP_TECHNIQUE_GLOSRY.html) and are the predecessors of [table controls](ABENTABLE_CONTROL_GLOSRY.html).

**step loop technique**

Technique in [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html) for processing tabular [screen elements](ABENSCREEN_ELEMENT_GLOSRY.html) on the [screen layout](ABENSCREEN_GLOSRY.html) of a [dynpro](ABENDYNPRO_GLOSRY.html). The step loop technique is used to process [table controls](ABENTABLE_CONTROL_GLOSRY.html) and their predecessors, namely the [step loops](ABENSTEP_LOOP_GLOSRY.html).

**subscreen**

[Screen layout](ABENSCREEN_GLOSRY.html) of a [subscreen dynpro](ABENSUBSCREEN_DYNPRO_GLOSRY.html).

**subscreen area**

Area within a [screen layout](ABENSCREEN_GLOSRY.html) in which other screen layouts can be displayed as [subscreens](ABENSUBSCREEN_GLOSRY.html).

**subscreen dynpro**

[Dynpro](ABENDYNPRO_GLOSRY.html) whose [screen layout](ABENSCREEN_GLOSRY.html) can be displayed either directly as a [subscreen](ABENSUBSCREEN_GLOSRY.html) in a [subscreen area](ABENSUBSCREEN_ARREA_GLOSRY.html) or in a [tabstrip](ABENTABSTRIP_CONTROL_GLOSRY.html) or [splitter control](ABENSPLITTER_CONTROL_GLOSRY.html).

**symbol**

Graphical element in [lists](ABENCLASSIC_LIST_GLOSRY.html).

**symbol toolbar**

Term used in [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html) to refer to the [standard toolbar](ABENSTANDARD_TOOLBAR_GLOSRY.html).

**tab**

See [tab page](ABENTAB_PAGE_GLOSRY.html).

**tab area**

Area of a [screen layout](ABENSCREEN_GLOSRY.html) on which [tabstrips](ABENTABSTRIP_GLOSRY.html) can be displayed.

**tab page**

Also referred to as tab. Page within a [tabstrip control](ABENTABSTRIP_CONTROL_GLOSRY.html). Each tab page has a [tab title](ABENTAB_TITLE_GLOSRY.html).

**tab title**

A single-line element located at the top of a [tab page](ABENTAB_PAGE_GLOSRY.html) that is linked to a [function code](ABENFUNCTION_CODE_GLOSRY.html) and selects tab pages when it is clicked.

**table control**

[Screen element](ABENSCREEN_ELEMENT_GLOSRY.html) for displaying and processing tabular data in a special [user interface](ABENUSER_INTERFACE_GLOSRY.html).

**tabstrip**

Short name for [tabstrip control](ABENTABSTRIP_CONTROL_GLOSRY.html).

**tabstrip control**

Tabstrip controls allow tab pages to be displayed on dynpros. A tabstrip control is a [screen element](ABENSCREEN_ELEMENT_GLOSRY.html) built from several [tab pages](ABENTAB_PAGE_GLOSRY.html) or tabs.

**text element**

Component of an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) that contains texts that can be accessed in the ABAP program. The possible text elements are [text symbols](ABENSELECTION_TEXT_GLOSRY.html), [list headers](ABENTEXT_SYMBOL_GLOSRY.html) ([standard page headers](ABENLIST_HEADER_GLOSRY.html)), and [selection texts](ABENSTANDARD_PAGE_HEADER_GLOSRY.html) The text elements are created in multilingual [text pools](ABENTEXT_POOL_GLOSRY.html) of the program and can be used by loading a text pool in the program. Text elements are maintained using the [transaction code](ABENTRANSACTION_CODE_GLOSRY.html)\\ `SE32`.

**text field**

[Character-like data object](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html) of ABAP or elementary object of the database with a [text field type](ABENTEXT_FIELD_TYPE_GLOSRY.html).

In [dynpros](ABENDYNPRO_GLOSRY.html), a text field is a [screen element](ABENSCREEN_ELEMENT_GLOSRY.html) that is used purely for displaying text and on which no [user actions](ABENUSER_ACTION_GLOSRY.html) are possible. A text field of a dynpro is not linked to a [dynpro field](ABENDYNPRO_FIELD_GLOSRY.html).

**title bar**

Component of the [`GUI`](ABENGUI_GLOSRY.html) that contains the [GUI title](ABENGUI_TITLE_GLOSRY.html) of a [GUI window](ABENGUI_WINDOW_GLOSRY.html). The title bar is set using the [`SET TITLEBAR`](ABAPSET_TITLEBAR_DYNPRO.html) statement.

**tooltip**

Displays information on [GUI](ABENGUI_GLOSRY.html) elements as a short text whenever the cursor is positioned over the element.

**transaction code**

Twenty-character name that is connected with a [dynpro](ABENDYNPRO_GLOSRY.html), another transaction code, or a [method](ABENMETHOD_GLOSRY.html) of an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) and is used to execute programs. Transaction codes linked with dynpros are possible for [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html), [module pools](ABENMODUL_POOL_GLOSRY.html), and [function pools](ABENFUNCTION_POOL_GLOSRY.html). [Parameter transactions](ABENPARAMETER_TRANSACTION_GLOSRY.html) and [variant transactions](ABENVARIANT_TRANSACTION_GLOSRY.html) are linked with other transaction codes. Transaction codes linked with methods are allowed for all [program types](ABENPROGRAM_TYPE_GLOSRY.html) that contain methods. Transaction codes are maintained and administrated using transaction code `SE93`.

**transaction variant**

Transaction variants can be used to preassign default values to the input fields of several [dynpros](ABENDYNPRO_GLOSRY.html) of a [transaction](ABENTRANSACTION_GLOSRY.html), to change the attributes of [screen elements](ABENSCREEN_ELEMENT_GLOSRY.html), and to suppress entire [screens](ABENSCREEN_GLOSRY.html). Transaction variants are maintained and administrated using [transaction code](ABENTRANSACTION_CODE_GLOSRY.html)\\ `SHD0`.

**user action**

Action performed by a user on a [control element](ABENCONTROL_ELEMENT_GLOSRY.html) on the [user interface](ABENUSER_INTERFACE_GLOSRY.html). Triggers the [dynpro event](ABENDYNPRO_EVENT_GLOSRY.html)\\ [PAI](ABENPAI_GLOSRY.html) if the selected control element is linked with a [function code](ABENFUNCTION_CODE_GLOSRY.html).

**variant transaction**

Special [transaction code](ABENTRANSACTION_CODE_GLOSRY.html) used to link a [dialog transaction](ABENDIALOG_TRANSACTION_GLOSRY.html) with a [transaction variant](ABENTRANSACTION_VARIANT_GLOSRY.html). When a variant transaction is accessed, the dialog transaction is called and executed using the transaction variant.

abenabap.html abenabap\_reference.html abenabap\_screens.html