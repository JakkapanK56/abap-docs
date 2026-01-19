---
title: "ABENNEWS-30-LDB"
description: |
  ABENNEWS-30-LDB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-30-LDB.htm"
abapFile: "ABENNEWS-30-LDB.html"
keywords: ["select", "do", "while", "if", "case", "try", "data", "internal-table", "ABENNEWS", "LDB"]
---

[1\. Checkbox Parameters](#ABAP_MODIFICATION_1@4@)

[2\. Matchcode Selection with Logical Databases](#ABAP_MODIFICATION_2@4@)

[3. `SUBMIT rep WITH SELECTION-TABLE rspar.`](#ABAP_MODIFICATION_3@4@)

[4\. Self-Programmed F1 and F4 on Selection Screens](#ABAP_MODIFICATION_4@4@)

[5\. Date Calculations in Variants](#ABAP_MODIFICATION_5@4@)

[6. `SUBMIT`: Runtime Information from Function Module](#ABAP_MODIFICATION_6@4@) 

[7\. No More Blank Selection Screens](#ABAP_MODIFICATION_7@4@)

[8. New `OK` Code Field `SSCRFIELDS-UCOMM` on Selection Screens](#ABAP_MODIFICATION_8@4@) 

[9\. Integration of the Data Model](#ABAP_MODIFICATION_9@4@)

[10\. Function Modules: User's Own GUI Status on Selection Screen](#ABAP_MODIFICATION_10@4@)

[11. `PARAMETERS` as Radio Buttons](#ABAP_MODIFICATION_11@4@) 

[12\. Size of Selection Screens Increased to 200 Lines](#ABAP_MODIFICATION_12@4@)

[13. `SELECTION-SCREEN NEW-PAGE` is No Longer Used.](#ABAP_MODIFICATION_13@4@) 

[14\. Selection Screen Versions Instead of Template Screens](#ABAP_MODIFICATION_14@4@)

[15\. Blocks (with or without Boxes) on Selection Screens](#ABAP_MODIFICATION_15@4@)

[16\. Ability to Set Comments on Selection Screens at Runtime](#ABAP_MODIFICATION_16@4@)

[17\. User's Own Pushbuttons on Selection Screens](#ABAP_MODIFICATION_17@4@)

[18\. Dynamic Selections on Selection Screens](#ABAP_MODIFICATION_18@4@)

[19\. Ability to Set Box Texts at Runtime](#ABAP_MODIFICATION_19@4@)

[20. Symbolic Positions with `SELECTION-SCREEN` Statements](#ABAP_MODIFICATION_20@4@) 

[21\. User's Own Key in Application Toolbar](#ABAP_MODIFICATION_21@4@)

[22\. Nested Blocks on Selection Screens](#ABAP_MODIFICATION_22@4@)

[23\. Return to the Selection Screen After F3 in Basic List](#ABAP_MODIFICATION_23@4@)

[24\. Passing Report-Specific Selections to the Database](#ABAP_MODIFICATION_24@4@)

[25. Simplified `SELECT-OPTIONS` on the Selection Screen](#ABAP_MODIFICATION_25@4@) 

[26\. Field Selection](#ABAP_MODIFICATION_26@4@)

[27. Passing Dynamic Selections with `SUBMIT`](#ABAP_MODIFICATION_27@4@)

[28\. User-Specific Variables in Variants](#ABAP_MODIFICATION_28@4@)

[`PARAMETERS`](ABAPPARAMETERS.html) now has an addition called `AS CHECKBOX` which can be used to display a parameter on the selection screen as a checkbox.

The addition `AS MATCHCODE STRUCTURE` of `PARAMETERS` makes it possible to use matchcode selection for a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html). The standard selection screen contains a box with input fields for matchcode ID and search string. In the [database program](ABENDATABASE_PROGRAM_GLOSRY.html), selected records can be processed in the subroutine `PUT_xxx_MATCHCODE`. Matchcode selections are a particularly good way of improving performance, since they can be used to restrict the amount of data selected significantly.

The addition `WITH SELECTION-TABLE rspar` makes it possible to specify values passed by `WITH clause` to the parameters or selection criteria of a report in an internal table. Here, the table `rspar` has the structure of `RSPARAMS`. The function module `RS_REFRESH_FROM_SELECT_OPTIONS` can be used to fill the table with the content of the current parameters or selection criteria (this `FM` replaces the keyword [`REFRESH respar FROM SELECT-OPTIONS`](ABAPREFRESH_ITAB.html)). For further information, see the documentation on [`SUBMIT`](ABAPSUBMIT.html).

Self-programmed input help (F4) and field help (F1) is now available for both database-specific and report-specific parameters and selection criteria. For database-specific objects, this is done using an addition (`VALUE-REQUEST ...` or `HELP-REQUEST ...`) with [`PARAMETERS`](ABAPPARAMETERS.html) and [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html). For report-specific objects, the event to be processed is specified directly at F1 or F4 ([`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html) `ON VALUE-REQUEST FOR ...` or [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html) `ON HELP-REQUEST FOR ...`).

In addition to the variables available in table `TVARV` for parameters or selection criteria in variants (for retrieving values from table `TVARV` at runtime), it is now possible to calculate dates or periods for parameters/selection criteria of the type date at runtime. Examples include *current date*, *last day of previous month*, and *first quarter of current year*.

The function module `RS_SUBMIT_INFO` returns information about the current report execution process in the structure `RSSUBINFO`. It is specifically intended for use during the processing of [selection screens](ABENSELECTION_SCREEN_GLOSRY.html). It indicates, for example, whether the selection screen is processed when the report is executed, when variants are defined, or when scheduling a background job. This is important, for example, if the user uses his or her own GUI status on the selection screen.

Previously, selection screens were generated and processed even if no parameters or selection criteria were defined. To reduce the number of selection screens, this is no longer the case. Events previously triggered by the selection screen ([`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html), [`AT SELECTION-SCREEN OUTPUT`](ABAPAT_SELECTION-SCREEN.html)) are not processed.

The previous `OK` code field `SY-UCOMM` had the drawback of being destroyed by every `CALL SCREEN`. For this reason, it has been replaced by the field `SSCRFIELDS-UCOMM` from `ABAP` Dictionary. Unlike `SY-UCOMM`, the structure `SSCRFIELDS` must be declared using [`TABLES`](ABAPTABLES.html) when reading or manipulating `SSCRFIELDS-UCOMM`.

Only the procedure for setting `SY-UCOMM` in the program has changed; `SY-UCOMM` must now be set instead. Setting `SY-UCOMM` in the program, however, no longer meets the intended purpose, and `SSCRFIELDS-UCOMM` now needs to be set instead.

In transaction `SE36` (Logical Databases), the set of views that refer to a logical database table can be displayed by selecting *Edit* ->\\ *Data Model* ->\\ *Views and Entities*. The relevant entities are displayed from the Enterprise Data Model ( EDM). After choosing the views, *Data Model* ->\\ *Graphics* can be selected to display the convex wrapper of the relevant entities in the EDM.

Function modules `RS_SET_SELSCREEN_STATUS` and `RS_EXTERNAL_SELSCREEN_STATUS`.

These function modules make it possible to set a separate status for the selection screen or to deactivate function codes from the standard status (for example, if the 'Print' function for the report is not required).

While the function module `RS_SET_SELSCREEN_STATUS` requires the status in question to belong to the user interface for the report, the function module `RS_EXTERNAL_SELSCREEN_STATUS` makes it possible to set a status that has been defined externally in a function pool.

When a separate status is set, it is best to first get information about the current situation using the function module `RS_SUBMIT_INFO` (see point 6). In this way, the 'Execute' key is not provided instead of the 'Save' key when defining variants.

Addition `RADIOBUTTON GROUP group` with [`PARAMETERS`](ABAPPARAMETERS.html).

By using this addition, `PARAMETERS` can be combined together in radio button groups on the selection screen. For further information, see [`PARAMETERS`](ABAPPARAMETERS.html).

Selection screens can now be up to 200 lines long. Since the scroll bar can be used to scroll within a screen, the continuation screens 1001, 1002 ... are no longer necessary.

Benefits: Since all `SELECT-OPTIONS` and `PARAMETERS` are on one screen, it is no longer necessary to check carefully that the incorrect field is actually on the current screen when handling errors. Also, the addition `'OBLIGATORY'` now applies to all `SELECT-OPTIONS` or `PARAMETERS` that were previously on a subsequent screen. This reduces the total number of generated selection screens

Necessary actions: In theory, none. However, new pages previously forced by the `SELECTION-SCREEN NEW-PAGE` statement may have to be replaced by something else, such as a block (see also points 13 and 14).

Since continuation screens are no longer used (see point 12), the keyword `SELECTION-SCREEN NEW-PAGE` is no longer required, but is retained for syntax reasons. However, it now starts a new line instead of a new page.

The option to define non-standard selection screens by specifying the number of a model screen (belonging to the database access program `SAPDBxyz`) in the report properties no longer exists. This has been replaced by selection screen versions. Like model screens, these have a three-character name that is specified on the report properties screen. By pressing F4 here, it is possible to get a list of all the selection screen versions for the underlying logical database.

The selection screen versions are defined in the database `INCLUDE`\\ `DBxyzSEL` using the expressions [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html), `BEGIN/ END OF VERSION`, and [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) `EXCLUDE ...`. The latter is used to specify any objects to be excluded from the selection screen version.

The expression [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) `BEGIN/END OF BLOCK block` is used to define logical blocks on selection screens. The addition `... WITH FRAME` makes it possible to create a box round the block and, for each `TITLE` addition, a text can be defined for the box. If the new event [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html) `ON BLOCK block` contains an error dialog, only the fields in that block become ready for input.

The boxes previously created round the database-specific or report-specific parts of the selection screen are no longer required, since the new expressions allow better and more individual grouping options.

Besides numbered texts, the expression [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html)`COMMENT` now makes it possible to specify field names up to eight characters long. These fields are then created automatically as output fields on the selection screen. The texts must be defined in these comment fields at runtime and can be changed while processing the selection screen.

The key word [`SELECTION-SCREEN PUSHBUTTON ...USER-COMMAND ucom`](ABAPSELECTION-SCREEN.html) makes it possible to create pushbuttons on the selection screen. As with [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) `COMMENT`, the text can be defined either statically in the form of a text symbol or dynamically by specifying a field name up to eight characters long.

The field `SSCRFIELDS-UCOMM` can be read using the accompanying user command `ucom` in [`AT SELECTION-SCREEN`](ABAPAT_SELECTION-SCREEN.html).

In the database `INCLUDE`\\ `DBxyz`, the [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) and the statement [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html)`DYNAMIC SELECTIONS FOR TABLE dbtab` can be used to define 'dynamic selections' for the table `dbtab` of the logical database `xyz`. In this case, the 'Dynamic Selections' key appears on the selection screen, if the table `dbtab` is used in the report. After pressing this key, the user can enter selections for the fields expected by the logical database. The result is passed directly from the logical database to the [`SELECT`](ABAPSELECT.html) statement.

The set of fields for which dynamic selections are to be allowed can be defined by the logical database in the form of a selection view. These are defined in the workbench or in the editing functions of logical databases. To aid identification, the origin (`'SAP'` or `'CUS'` for 'customer'), the name of the logical database, and a name can be used (which must always be `'STANDARD'` for the described functions on the selection screens). When reading the field list, the system first searches for the set with the origin `'CUS'`. If it finds nothing, it then searches for the origin `'SAP'`. This allows customers to define the optimal set to suit their requirements, if the SAP standard is not suitable.

The title of a box defined using [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) `BEGIN OF BLOCK ... WITH FRAME TITLE ...` can be set and modified at runtime.

In all variants of [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) which expect format specifications, the position of the object can be defined on the selection screen symbolically (`POS_LOW` or `POS_HIGH` for the positions where the input fields of [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html) are produced).

The keyword [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) `FUNCTION KEY n` (`n` must be between 1 and 5) makes it possible to activate up to five function keys on the selection screen. The texts for these must be set at runtime. The keys appear in the application toolbar.

Blocks defined using the language construct [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) `BEGIN/ END OF BLOCK` can be nested. For blocks in boxes, the nesting depth is restricted to 5 levels.

If F3 is used to exit a basic list created by a program (and the program was executed from the selection screen), the system displays the selection screen again with the old content.

Report-specific selections with a reference field belonging to a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) table for which [dynamic selections](ABENFREE_SELECTIONS.html) are defined are passed directly to the database. In exceptional cases, this can be suppressed by using the addition `NO DATABASE SELECTION` for the keyword [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html).

Addition `NO INTERVALS` with [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html) and [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) `BEGIN OF BLOCK`.

These additions can be used o display and manipulate `SELECT-OPTIONS` on the selection screen.

The function module `SELECT_OPTIONS_RESTRICT` restricts the number of valid selection options per `SELECT-OPTIONS` at runtime. The option `'E'` (= 'Exclude from selection') can also be switched off. This makes it possible to simplify the entry of selections on the selection screen.

The additions `FIELDS f1 ... fn` in the case of [`GET`](ABAPGET-.html) and [`GET LATE`](ABAPGET-.html) plus `FIELD SELECTION FOR TABLE dbtab` in the case of [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html).

These make it possible to specify a list of fields required in the program for tables defined for this purpose in the logical database. Only these fields are then filled with values, which leads to considerable improvement in performance.

The addition `FREE SELECTIONS ...` can be used with [`SUBMIT`](ABAPSUBMIT.html) to pass dynamic selections directly.

User-specific values can be set for certain parameters and selection criteria intended for that purpose by the application.

abenabap.html abennews.html abennews-30.html