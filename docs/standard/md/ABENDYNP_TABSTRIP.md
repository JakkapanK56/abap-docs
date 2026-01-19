---
title: "ABENDYNP_TABSTRIP"
description: |
  ABENDYNP_TABSTRIP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNP_TABSTRIP.htm"
abapFile: "ABENDYNP_TABSTRIP.html"
keywords: ["select", "insert", "do", "if", "case", "method", "data", "ABENDYNP", "TABSTRIP"]
---

A tabstrip control is a dynpro element that consists of multiple tab pages. Every tab page contains a single-line [tab title](ABENTAB_TITLE_GLOSRY.html) linked with a function code and which can be used to select the tab page by clicking it once.

Under the tab title, a tab page consists of a subscreen area. Each tab title must have a subscreen area assigned to it, in which any subscreens can be displayed.

There are two ways to do this:

If a tab title is selected when scrolling in the SAP GUI, input checks are not made, and data is not transported to the ABAP program. The entries are all checked and the data of all subscreens transported only if a user action raises the PAI event. When scrolling in the ABAP program, the input is checked each time a tab title is selected, and the current tab page data is transported to the ABAP program of the subscreen dynpro.

**Details on Creating Tabstrip Controls**

You must then decide whether you want to scroll through the tabstrip control at the SAP GUI or on the application server. In the first case, each tab page has its own subscreen. In the second, there is a single subscreen area that is shared by all tab pages.

*Defining the Tabstrip Control Area and Tab Titles*

You define both the tabstrip area and the tab titles in the screen layout.

The tabstrip area has a unique name and a position, length, and height. You can also specify whether the tabstrip area can be resized vertically or horizontally when the user resizes the window. If the area supports resizing, you can specify a minimum size for it.

When you define a tabstrip area, it already has two tab titles. Tab titles are technically exactly the same as pushbuttons. To create additional tab titles, simple create pushbuttons in the row containing the tab titles. Tab titles have the same attributes as pushbuttons, that is, each has a name, a text, and a function code. You can also use icons and dynamic texts with tab titles.

*Assigning a Subscreen Area to a Tab Title*

You must assign a subscreen area to each tab title. There are two ways of doing this as mentioned above.

*Programming the Flow Logic*

In the flow logic, all you have to do by hand is include the correct subscreens. The dynpro flow and data transport to the ABAP program is the same as for normal subscreens. There are two ways of programming the dynpro flow logic, depending on how you have decided to scroll through the tabstrip control.

For scrolling in SAP GUI, you must include a subscreen for each subscreen area:

PROCESS BEFORE OUTPUT. \\n... \\nCALL SUBSCREEN: area1 INCLUDING \[prog1\] dynp1, \\n\\ \\narea2 INCLUDING \[prog2\] dynp2, \\n\\ \\narea3 INCLUDING \[prog3\] dynp3, \\n\\ \\n... \\n\\ \\nPROCESS AFTER INPUT. \\n\\ \\n... \\n\\ \\nCALL SUBSCREEN: area1, \\n\\ \\narea2, \\n\\ \\narea3, \\n\\ \\n...

For scrolling in ABAP Programs, you only have to include a subscreen for the one subscreen area:

PROCESS BFORE OUTPUT. \\n\\ \\n... \\n\\ \\nCALL SUBSCREEN area INCLUDING \[prog\] dynp. \\n\\ \\n... \\n\\ \\nPROCESS AFTER INPUT. \\n\\ \\n... \\n\\ \\nCALL SUBSCREEN area. \\n\\ \\n...

*Handling in the ABAP Program*

Before you can use a tabstrip control in your ABAP program, you must create a control for each control in the declaration part of your program using the following statement:

CONTROLS ctrl TYPE TABSTRIP.

`ctrl` is the name of the tabstrip area on a screen in the ABAP program. The control allows the ABAP program to work with the tabstrip control. The statement declares a structure with the name `ctrl`. The only component of this structure that you need in your program is called `activetab`.

The `ok_code` field behaves differently according to the scrolling method:

Otherwise, tabstrip controls are handled like normal subscreens in ABAP programs, that is, the ABAP program of a subscreen dynpro must contain the dialog modules called from the flow logic of the subscreen.

-   Scrolling in SAP GUI
-   A separate subscreen area is assigned to each tab title and the function codes of the tab titles are defined with the function type *P*. If the user selects a tab title, the event PAI is not raised. The associated subscreens are included once in each individual subscreen area by using the [`CALL SUBSCREEN`](CALL.html) statement of the flow logic. If the user selects a tab title, the SAP GUI browses to the associated tab page and displays its subscreen.
-   Scrolling in ABAP Programs
-   The same subscreen area is assigned to each tab title, and the function codes of the tab titles are defined without [typing](ABENTYPING_GLOSRY.html). If the user selects a tab title, the event PAI is raised. The associated subscreen is included dynamically using the [`CALL SUBSCREEN`](CALL.html) statement of the flow logic in the subscreen area each time the user scrolls. In the ABAP program, the associated tab page must be activated using [`CONTROLS`](ABAPCONTROLS.html) and the correct subscreen dynpro for the subscreen area must be specified.

-   Use in the PBO event
-   Before the dynpro is displayed, you use the control to set the tab page that is currently active. To do this, assign the function code of the corresponding tab title to the component `activetab`:
-   `ctrl-activetab = fcode.`
-   When you scroll in the SAP GUI, you only need to do this once before the dynpro is displayed. This initializes the tabstrip control. The default active tab page is the first page. After this, the page activated when the user chooses a tab title is set within SAP GUI. When you scroll on the application server, you must assign the active page both before the dynpro is displayed for the first time, and each time the user pages. At the same time, you must set the required subscreen dynpro. You can suppress a tab page dynamically by setting the `active` field of table `SCREEN` to 0 for the corresponding tab title.
-   Use in the PAI event
-   In the PAI event, `activetab` contains the function code of the last active tab title on the dynpro.
-   When you scroll in the SAP GUI, this allows you to find out the page that the user can currently see. When you scroll in the application server, the active tab page is controlled by the ABAP program anyway.

-   Scrolling in SAP GUI
-   When you scroll in the SAP GUI, the PAI event is not triggered when the user chooses a tab title, and the `ok_code` field is not filled. The `ok_code` field is only filled by user actions in the GUI status or when the user chooses a pushbutton either outside the tabstrip control or on one of the subscreens.
-   Scrolling in ABAP Programs
-   If you are scrolling in the application server, the PAI event is triggered when the user chooses a tab title, and the `ok_code` field is filled with the corresponding function code.
-   To scroll through the tabstrip control, you must assign the function code to the `activetab` component of the control:
-   `ctrl-activetab = ok-code.`
-   This statement overwrites the function code of the last active tab page with that of the new tab title. At the same time, you must ensure that the correct subscreen is inserted in the subscreen area.

-   [Dynpros, Tabstrips with Scrolling in SAP GUI](ABENTAB_STRIP_CONTROL1_ABEXA.html)
-   [Dynpros, Tabstrips with Scrolling in AS instance](ABENTAB_STRIP_CONTROL2_ABEXA.html)

1.  Define the tab area on a dynpro and the tab titles
2.  Assign a subscreen area to each tab title
3.  Program the dynpro flow logic
4.  Program the ABAP processing logic

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html