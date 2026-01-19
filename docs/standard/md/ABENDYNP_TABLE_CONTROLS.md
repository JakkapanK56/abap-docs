---
title: "ABENDYNP_TABLE_CONTROLS"
description: |
  ABENDYNP_TABLE_CONTROLS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNP_TABLE_CONTROLS.htm"
abapFile: "ABENDYNP_TABLE_CONTROLS.html"
keywords: ["select", "insert", "loop", "do", "if", "case", "data", "internal-table", "ABENDYNP", "TABLE", "CONTROLS"]
---

Table controls are named dynpro elements used to display and process table-like data on [dynpros](ABENDYNPRO_GLOSRY.html). In a table control, a maximum of 255 dynpro elements is summarized in a table control row, which can be repeated multiple times within the table control on the [screen layout](ABENSCREEN_GLOSRY.html). The fields of a row must be created only once as [dynpro fields](ABENDYNPRO_FIELD_GLOSRY.html) in the dynpro and only once as global data objects in the ABAP program.

Table controls provide an area on the dynpro for editing the displayed table control rows which offers column headers, selection of rows and columns, horizontal and vertical scrolling using scroll bars, the definition of lead columns, and persistence of the current settings (see `DEMO_DYNPRO`). Parts of the user actions in table controls are processed on the presentation server. Vertical scrolling, saving of settings, and changes of dynpro size (if the *resizing* properties have been set accordingly when defining the table controls) raise the event [PAI](ABENPAI_GLOSRY.html).

Table controls offer users the following functions:

Table controls encapsulate [step loops](ABENSTEP_LOOP_GLOSRY.html) and make their standalone use obsolete. The processing of table controls in the [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html) is based on the step loop technique using the statement [`LOOP`](LOOP.html). Unlike the processing of independent step loops, the loops of the dynpro flow logic are associated using the addition `WITH CONTROL` with the table controls of the dynpros during the processing of table controls.

In the ABAP program, table controls must be declared using the statement [`CONTROLS`](ABAPCONTROLS.html), where a special structure for handling of table controls is created.

The following sections outline the use of controls in various contexts.

**Table Controls on the Dynpro**

Table controls are created on the dynpro using the tool Screen Painter. You can define as many table controls as you require for each dynpro. First, a table control area is created in which the table control fields are then specified.

*Defining the Table Control Area*

The table control area is created on the dynpro using the Screen Painter tool. The table control area is a multi-row dynpro element of a particular size, which must be assigned a name. The name identifies the table control and is used in dynpro flow logic and in ABAP programs to address it.

A table control has a few other special attributes apart from its name and size:

*The Table Control Field*

After a table control area has been created on the dynpro, the following single-row dynpro elements can be specified in the area.

Text fields and output fields can be specified in the title rows. The screen elements, frames, subscreens, tab strips, custom controls and status icons cannot be transported to the table controls.

You can also transfer dictionary and program fields. When fields are passed from the ABAP Dictionary, it is possible that column headers will be automatically assigned a text from the data element from the dictionary.

Every dynpro element that is inserted makes up a column of the table control. In every free row available, under any title and column headers, the dynpro element is displayed repeatedly.

The dynpro elements of a column appear only once in the element list of the corresponding dynpro. Therefore, you only have to create fields with the same name once in ABAP programs.

**Table Controls in the Flow Logic**

Table controls are processed in the flow logic using the step loop technique. Loops are executed in the dynpro flow logic, whereby data is passed, row for row, between the dynpro fields of the row and the fields of the same name in the ABAP program. The relevant commands in the flow logic are:

LOOP ... WITH CONTROL ctrl. \\n  ... \\nENDLOOP.

These statements must not be confused with the ABAP statements of the same name. Using the `WITH CONTROL` addition, the name of the table control that is processed is specified for each loop. Between `LOOP` and `ENDLOOP`, the other flow logic keywords `FIELD`, `MODULE`, `SELECT`, `VALUES`, and `CHAIN` can be used.

During the loops, the content of the step loop are transported back and forth between identically named fields of the ABAP program and the dynpro. At least one empty `LOOP` must exist for every table control, both in the PBO and the PAI processing block. Table control fields defined with a dictionary reference must be declared in the ABAP program, as before, using `TABLES`, as interface work areas.

Within the loops, two system fields are of importance.

We distinguish between two loop techniques.

*Loop Across the Rows of the Table Control*

The commands in the flow logic are:

LOOP ... WITH CONTROL ctrl. \\n  ... \\nENDLOOP.

These statements create a loop pass across the step loop rows displayed on the dynpro. For PAI, they pass the data of each group to the identically named fields of the ABAP program or, vice versa, for PBO from the ABAP program to the step loop fields. In the `LOOP ... ENDLOOP` loop, modules can be called that process the passed data and at PBO time read it from an internal table or at PAI time import it into an internal table.

*Parallel Loops Across Table Control and an Internal Table*

The commands in the flow logic are:

LOOP AT itab \[INTO wa\] WITH CONTROL ctrl. \\n  ... \\nENDLOOP.

This statement assigns an internal table `itab` of the ABAP program to the table control and triggers a parallel loop pass across the table control rows displayed on the dynpro and across the internal table `itab`. The additions `INTO` and `WITH CONTROL` are possible at PBO time, but not at PAI. The assignment of the loop to the table control takes place at PAI time across the internal table.

Using the `INTO` addition, the fields of the internal table `itab` are written to the work area `wa` at the PBO time and the content of `wa` is transported, row by row, to the identically named fields of the table control on the dynpro. If there is no `INTO` addition, an internal table with a header row must be used. Then the content of the header row is transported row by row to the identically named fields of the table control on the dynpro at PBO time. No module is required for filling the table control rows.

Conversely, at PAI time, the internal table rows are not automatically filled with the content of the table control rows. Instead, a dialog module must be called within the loop that modifies the table.

*Data Transport for Table Controls*

If dynpros with table controls exist, the order of the data transport changes.

At PBO time, the transport of the table control fields from the ABAP program to the dynpro takes place after every loop pass in the flow logic. The remaining dynpros fields are filled, as usual, at the end of PBO processing.

At PAI time, first all the dynpro fields that do not belong to a table control and not listed in any `FIELD` statements are transported to identically named fields of the ABAP program. The content of the table control fields are passed, row by, at the beginning of the associated loop pass, to the identically named fields of the ABAP program. The fields that are listed in the `FIELD` statements are transported, as usual, directly from the corresponding `FIELD` statement.

**Table Controls in ABAP Programs**

To handle table controls in ABAP programs, you must declare a control in the declaration part of the program for each table control using the following statement: `CONTROLS ctrl TYPE TABLEVIEW USING SCREEN scr.`

`ctrl` is the name of the table control on a dynpro in the ABAP program. The control allows the ABAP program to read the attributes of the table control and to modify it. The statement also declares a deep structure of name `ctrl`. The data type of the structure corresponds to the type `CXTAB_CONTROL` defined in the type group `CXTAB` in the ABAP Dictionary.

At runtime, the components of the structure contain the attributes of the table control. Several of the initial values are determined in the Screen Painter. The initial value for the control `ctrl` is taken from the dynpro which is determined using the addition `USING`.

By using the statement `REFRESH CONTROL ctrl FROM SCREEN scr.` you can initialize a table control at any time with the initial value of a dynpro `scr`. Values that are not taken from the settings in the Screen Painter, are set to the current status of the table control at PAI.

*Structure `CXTAB_CONTROL`*

The deep structure `CXTAB_CONTROL` contains the general attributes of the table control on the highest level. The component `CXTAB_CONTROL` is a table of the structure `CXTAB_COLUMN` and contains the attributes of a column. The component `CXTAB_CONTROL-COLS-SCREEN` is a flat structure of the same type as system table `screen` and contains the attributes of the individual dynpro elements.

Up to component `CURRENT_LINE`, all attributes of the structure `CXTAB_CONTROL` in the ABAP program can be set to change the table control display on the dynpro.

The structure `CXTAB_CONTROL` has the following components:

Internal table `CXTAB_COLUMN` is a component of the structure `CXTAB_CONTROL`. Each column of the table control corresponds to a row of the table `CXTAB_COLUMN`. The internal table `CXTAB_COLUMN` has no header row and the following columns:

The structure `screen` is a column of the table `CXTAB_COLUMN`. Components:

*Scrolling in Table Controls*

Scrolling with scroll bars is automatically implemented with table controls, and managed by the system. However, the component `ctrl-LINES` must be set to the required row number before editing the table control. This is the case for table controls with or without parallel loops using an internal table. The component `LINES` is set implicitly for table controls with parallel loops using an internal table, although the correct value is not guaranteed (see table above). It is therefore recommended that in both instances you set the component `LINES` explicitly to the number of rows in the internal table of the ABAP program. You can determine this number from the statement `DESCRIBE TABLE` (see the following example).

The event PAI with an empty function code is triggered when scrolling using scroll bars. When the loops at PAI and PBO are executed, the system sets the component `TOP_LINE` of the structure `CXTAB_CONTROL` before PBO, so that the correct row is edited at the loop pass.

You can easily implement program-controlled vertical scrolling (row by row, page by page, or go to page) by using the component of the structure `CXTAB_CONTROL`. Essentially the component `TOP_LINE` must be provided with a value. For page by page scrolling, the number of rows to be scrolled during the loop pass can be taken from the system field `sy-loopc`. `sy-loopc` contains the number of rows currently display, whereas the component `LINES` of structure `CXTAB_CONTROL` contains the number of all rows in the table control.

*Cursor Position on Table Controls*

At PBO you can set the cursor on a specific field of a specific row of a table control.

SET CURSOR FIELD f LINE lin \[OFFSET off \].

Using the optional addition `OFFSET`, you can enter the offset of the cursor in the field as described under *Setting the Cursor Position*.

At PAI you can read the current cursor position.

GET CURSOR FIELD f LINE lin ...

In addition to the information given under *Finding Out the Cursor Position*, field `lin` contains information on which row of the table control the cursor is currently on. You can also use the following:

GET CURSOR LINE lin.

`sy-subrc` allows you to check if the cursor is placed in a row of a table control.

-   Text fields
-   Input/Output fields
-   Checkbox elements
-   Radio button elements

-   `sy-stepl` contains the current row of the table control counted from the uppermost displayed row.
-   `sy-loopc` contains the current number of table control rows on the dynpro.

-   The component `SCREEN-NAME` is the name of the dynpro element that creates the column. The initial values of the remaining components correspond to the attributes of the dynpro elements in the Screen Painter. The attributes are passed from here with initial values. They can be changed directly in the ABAP program. Note that directly set values can be overwritten by modifying these attributes using `MODIFY SCREEN` within the loop `LOOP AT SCREEN`.
-   Furthermore, note that the attributes of the structure `screen` are not set with blank characters and `X`, rather with 0 and 1 as in the regular processing of dynpro.

1.  You can use the resizing attributes to specify whether the table control can resize the dynpro vertically or horizontally. If the control supports resizing, you can specify a minimum size for it.
2.  A column of the table controls can be defined as marking column, in which the dynpro element is displayed like a pushbutton and handled like a checkbox (see the first column of the table control in `DEMO_DYNPRO`). A checked selection key sets the content of the associated dynpro field to *X* and an unchecked key sets the content to blank. The state of the selection key is transported at PAI time to an identically named data object in the ABAP program and, at [PBO](ABENPBO_GLOSRY.html) time, the marker can be set using the content of the data object.
3.  The width and position of columns can be changed by the user or by the program.
4.  You can save the current settings as a default setting for a user.
5.  Vertical scrolling with a scroll bar.
6.  Horizontal scrolling with a scroll bar.
7.  You can fix a number of lead columns that cannot be moved by the user.
8.  A selection column enables you to select rows.

**Attribute** **Details**\\ Title The top row of a table control can be reserved as a title row, into which a text field or an output field can be inserted. Column Headers The second row of a table control can be reserved as a title row, where a text field or output field can be inserted in each column. The column titles also act as buttons to select columns. Configure The user can save the current settings of the attributes in a file. The system uses these settings every time the table control is displayed. Separators Horizontal and vertical separators can be displayed between rows and columns. Row Selection You can specify whether rows can be selected, and if so how many. Column Selection You can specify whether columns can be selected, and if so how many. Selection Column A column of the table control can be reserved as buttons for marking rows and is handled internally as a checkbox. A selected row selection button contains X and an unselected one contains ' '. The selection column must be assigned a name. The state of the selection button can be transported into a character field, with length one and the same name, in an ABAP program and vice versa. Fixed Columns A number of columns (from the left) can be excluded from the scrolling function. A fixed column cannot be moved. **Component** **Type (Length)** **Meaning** **In the Screen Painter**\\ `FIXED_COLS` \\ `INT4` Number of lead columns. Transferred from Screen Painter. Can be changed in the ABAP program. Fixed columns `LINES` \\ `INT4` Controls the scroll bar of the table control. At `LOOP` without internal table, `LINES` has the initial value zero and must be set in the program so that the scroll bar can be used. At `LOOP AT itab` the system sets this component to the number of rows of the internal table, whenever the table control is processed for the first time. The initialization event of a table control is not determined uniquely. If the corresponding internal table is not fully created at this event, then the `LINES` variable is given an incorrect value. If `LINES` in the `LOOP` loop is smaller as the number of rows of the internal table, then the table control contains blank rows at the end. \\
\\
Therefore you should always set the `LINES` component explicitly in the ABAP program, including at `LOOP AT itab`. In this way, you have full control over the dimensions of the vertical scroll bar and so can control the number of rows that are ready for input. Initialization should usually occur at PBO directly before the `LOOP` statement for the table control. \\ `TOP_LINE` \\ `INT4` Top row at next PBO. Set at PAI by position of the vertical slider box. Can be changed in the ABAP program. \\ `CURRENT_LINE` \\ `INT4` Current row in the loop. Set automatically in the `LOOP` loop to the value *sy-stepl+(TOP\_LINE-1)*. No changes allowed in the ABAP program. \\ `LEFT_COL` \\ `INT4` First displayed horizontal scrollable column after the lead column. Set at PAI by position of the horizontal slider box. `LEFT_COL` contains the absolute number of the column independent of any column shift by the user. Can be changed in the ABAP program. \\ `LINE_SEL_MODE` \\ `INT4` Row selection mode: 0, 1, 2 for none, one or multiple rows can be selected. Passed from Screen Painter. Can be changed in the ABAP program. Row selection `COL_SEL_MODE` \\ `INT4` Column selection mode: 0, 1, 2 for none, one or multiple rows can be selected. Passed from Screen Painter. Can be changed in the ABAP program. Column selection `LINE_SELECTOR` \\ `CHAR(1)` Flag (`X` or blank) for selection column. Passed from Screen Painter. Can be changed in the ABAP program. Selection column `H_GRID` \\ `CHAR(1)` Flag (`X` or blank) for horizontal separators. Passed from Screen Painter. Can be changed in the ABAP program. Separators `V_GRID` \\ `CHAR(1)` Flag (`X` or blank) for vertical separators. Passed from Screen Painter. Can be changed in the ABAP program. Separators `COLS` \\ `CXTAB_COLUMN` Control table for single columns (see below). \\ `INVISIBLE` \\ `CHAR(1)` Flag (`X` or blank) for visibility of entire table control. **Component** **Type (Length)** **Meaning**\\ `SCREEN` \\ `SCREEN` Structure for the attributes of dynpro elements of the column (see below) `INDEX` \\ `INT4` Current position of the column in the table control. Passed with initial value from Screen Painter. Taken from the current column configuration of the table control at PAI. Can be changed in the ABAP program. `SELECTED` \\ `CHAR(1)` Flag (X or blank) whether column is selected or not. Taken from the current status of the table control at PAI. Can be changed in the ABAP program. `VISLENGTH` \\ `INT4` Visible length of the column. Passed from Screen Painter. Can be changed in the ABAP program. `INVISIBLE` \\ `CHAR(1)` Flag (`X` or blank) whether column is visible. Passed from Screen Painter. Can be changed in the ABAP program. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html