---
title: "ABENNEWS-30-LIST"
description: |
  ABENNEWS-30-LIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-30-LIST.htm"
abapFile: "ABENNEWS-30-LIST.html"
keywords: ["select", "do", "if", "case", "data", "internal-table", "field-symbol", "ABENNEWS", "LIST"]
---

[1. `WRITE` and `ULINE` with Variable Position and Length Specifications](#ABAP_MODIFICATION_1@4@) 

[2. Variable Format Specifications with `FORMAT`, `WRITE`, `MODIFY LINE`](#ABAP_MODIFICATION_2@4@)

[3\. Saving Lists](#ABAP_MODIFICATION_3@4@)

[4\. Exit List and Return to the Selection Screen](#ABAP_MODIFICATION_4@4@)

[5. `SET CURSOR` and `GET CURSOR` with Addition `LINE...` (without `FIELD`)](#ABAP_MODIFICATION_5@4@) 

[6. Handling of `EXIT` in List Events](#ABAP_MODIFICATION_6@4@) 

[7. `SET PF-STATUS SPACE` Activates Standard List Status](#ABAP_MODIFICATION_7@4@) 

[8\. Fixed List Columns when Displaying a List (Leading Column)](#ABAP_MODIFICATION_8@4@)

[9. New Behavior of `SKIP` at End of Page](#ABAP_MODIFICATION_9@4@) 

[10. New Additions with `WRITE [TO]` for Alignment](#ABAP_MODIFICATION_10@4@) 

[11. Field Help `(F1)` and Input Help `(F4)` Now Also in `LIKE` Fields](#ABAP_MODIFICATION_11@4@) 

[12. `GET CURSOR` on Field Symbols and Literals](#ABAP_MODIFICATION_12@4@) 

[13. System Tables `%_LIST ...` Protected Against Access](#ABAP_MODIFICATION_13@4@) 

[14\. Symbols in Lists](#ABAP_MODIFICATION_14@4@)

[15\. Hotspots in Lists](#ABAP_MODIFICATION_15@4@)

[16. Output of `QUAN` Fields (`WRITE` Addition `UNIT`)](#ABAP_MODIFICATION_16@4@)

In [`WRITE`](ABAPWRITE-.html) and [`ULINE`](ABAPULINE.html), the addition `AT` is now available which allows dynamic position and/or length specifications.

Usage of `AT` with `WRITE`.

In [`FORMAT`](ABAPFORMAT.html), [`WRITE`](ABAPWRITE-.html), and [`MODIFY LINE`](ABAPMODIFY_LINE.html), it is now possible to use variables to give parameters to all format specifications (`INPUT`, `INTENSIFIED`, `INVERSE`, and `COLOR`). In any of these additions, a *\=* is followed by the variable.

Dynamic formatting.

ABAP lists can now be saved as objects known as list objects.

To save the basic list or the details list of the current application, the function module `'SAVE_LIST'` is used. This function module passes the required list as a list object to an internal table of the structure `ABAPLIST`. Alternatively, the basic list of a report can be passed to the [user memory](ABENSPA_GPA.html) instead of the display by [`SUBMIT ... EXPORTING LIST TO MEMORY`](ABAPSUBMIT.html), and then, after returning from the report, be retrieved as a list object by the function module `'LIST_FROM_MEMORY'`. The list object can be saved like any other internal table (in a database or file system, for example).

For further processing, use the function modules '`WRITE_LIST`' (output a list object as a list), '`DISPLAY_LIST`' (output a list object in a dialog box), and any existing or planned converters ('`LIST_TO_ASCI`', '`LIST_TO_RTF`', and so on).

In SAPoffice, any displayed list can be saved in the private folders (SAPoffice) of the currently logged on user by choosing *System -> List*\\ *Save (SAPoffice)*. More functions are planned.

When the list display of a report is exited, the selection screen of the report is displayed again. The entries made on the selection screen are preserved. As a prerequisite, the selection screen has not been suppressed by the request ([`SUBMIT...VIA SELECTION-SCREEN`](ABAPSUBMIT.html)). The list can be exited by

For reasons of compatibility, the function [`LEAVE`](ABAPLEAVE-.html) does not offer this function. Instead, ABAP release 3.0 includes a special variant [`LEAVE LIST-PROCESSING`](ABAPLEAVE_LIST-PROCESSING.html).

The functions [`SET CURSOR LINE`](ABAPSET_CURSOR_LIST.html) and [`GET CURSOR LINE`](ABAPGET_CURSOR_LIST.html) enable the cursor to be positioned or the cursor position to be determined in lists at **line level**. This is useful in cases where the whole list line (and not the field within the line) is relevant. Previously, the syntax rules required the addition `FIELD` to be used.

In general, the function `GET CURSOR LINE l OFFSET o` should be used when the absolute cursor position (column) within a list line is evaluated during an interactive list event. The system field `SY-CUCOL` does not refer to the list line, but to the displayed list section. After horizontal scrolling, the relative cursor position (`SY-CUCOL`) and the absolute cursor position are different. Furthermore, the system field `SY-CUCOL` contains the value **2** if (for reasons of compatibility) the cursor is on the first visible list column, which makes the calculation of the absolute position difficult.

The following example shows how the previous usage of `SY-CUCOL` can be replaced by the function `GET CURSOR`:

The function [`EXIT`](ABAPEXIT_PROCESSING_BLOCKS.html) now has the same effect in all **list events** ([`AT LINE-SELECTION`](ABAPAT_LINE-SELECTION.html), [`AT USER-COMMAND`](ABAPAT_USER-COMMAND.html), [`AT PF...`](ABAPAT_PFNN.html), [`TOP-OF-PAGE ...`](ABAPTOP-OF-PAGE.html), and [`END-OF-PAGE`](ABAPEND-OF-PAGE.html)) as in [`MODULE`](ABAPMODULE.html), [`FORM`](ABAPFORM.html), and [`FUNCTION`](ABAPFUNCTION.html). The event therefore ends immediately and the processing continues at the call location (for example, after `EXIT` from `TOP-OF-PAGE`, the triggering statement `WRITE` is executed; after `EXIT` from `AT LINE-SELECTION`, the list is displayed immediately). Previously, the list was displayed here in both cases (the triggering `WRITE` was ignored) and, if there was also indented list processing ([`LEAVE TO LIST-PROCESSING`](ABAPLEAVE_TO_LIST-PROCESSING.html) from [`CALL SCREEN`](ABAPCALL_SCREEN.html)), the entire list processing was terminated.

This change has the following consequence: In report processing ([with a logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html)), `EXIT` from `TOP-OF-PAGE` and `END-OF-PAGE` previously terminated processing of the logical database and branched directly to the list display. Now, only the event `TOP-OF-PAGE` or `END-OF-PAGE` is terminated. Any remaining logical database events ([`START-OF-SELECTION`](ABAPSTART-OF-SELECTION.html), [`GET`](ABAPGET-.html), and so on) are not affected by this change.

If a standard list status (`STLI`, `PICK`, or `INLI`) is required in list processing, but a dialog with a separate user interface is needed first, this is made possible by using [`SET PF-STATUS SPACE`](ABAPSET_PF-STATUS_LIST.html) (when creating the list).

Previously, this was only possible by copying the standard list status to a separate `PF` status.

[`SET SCROLL-BOUNDARY`](ABAPSET_SCROLL-BOUNDARY.html) enables the area of a list page affected by horizontal scrolling to be restricted. [`NEW-LINE NO-SCROLLING`](ABAPNEW-LINE.html) can be used to flag individual list lines as *unmovable*.

Previously, if [`SKIP`](ABAPSKIP.html) occurred at the end of a page and there was a fixed number of lines per page (as defined by [`NEW-PAGE LINE-COUNT`](ABAPNEW-PAGE.html)), a new page was started and the blank line was displayed as the first line of that new page (after [`TOP-OF-PAGE`](ABAPTOP-OF-PAGE.html)).

This produced unwanted line shifts on a new page, although the only purpose of `SKIP` was to separate different areas of the list. Therefore, `SKIP` is no longer executed on the next page unless explicitly requested by [`NEW-PAGE`](ABAPNEW-PAGE.html).

[`WRITE`](ABAPWRITE-.html) now has the additions `LEFT-JUSTIFIED`, `CENTERED`, and `RIGHT-JUSTIFIED` for left-aligned, centered, or right-aligned output. They can be used in output to lists and for string processing with [`WRITE ... TO`](ABAPWRITE_TO.html). In the first case, the alignment refers to the output field in the list. In the latter case, it refers to the target field specified after `TO`.

Previously, field help (F1) and input help (F4) were only available for fields which had a direct reference to a data element (usually table fields). Now this is supported for work fields that refer to a table field with [`DATA ... LIKE`](ABAPDATA_SIMPLE.html) as well. This of course also applies to field symbols and parameters of subroutines.

The function [`GET CURSOR FIELD`](ABAPGET_CURSOR_LIST.html) now always returns the name of a *global symbol*, in other words, a field that is still valid when the list is displayed. Names of field symbols and local variables are invalid in this context.

For field symbols and reference parameters of subroutines, the function returns the name of the global symbol that may have been assigned when the list was displayed. For literals, the return code is no longer set to 4 and the field name becomes `SPACE` and the return code 0. The content of the literal is returned as `... VALUE`.

Previously it was possible to directly address the system tables of list processing (`%_LIST`, ) in all ABAP programs and in debugging. This is no longer possible. The most common reason for wanting to do this (determining the number of lines in a list with `DESCRIBE TABLE %_LIST LINES lin`) can now be achieved by using [`DESCRIBE LIST NUMBER OF LINES lin INDEX SY-LSIND`](ABAPDESCRIBE_LIST.html).

`WRITE` with the addition [`'...AS SYMBOL'`](ABAPWRITE_LIST_ELEMENTS.html) is now used to display certain characters in a list as symbols.

Output of a symbol.

By using the addition [`'...HOTSPOT'`](ABAPFORMAT.html) with the statements `FORMAT` and `WRITE`, it is now possible to define particular areas in a list as hotspots.

Clicking once with the mouse in one of these areas triggers the same response as placing the cursor on the clicked position in the list and then pressing the function key F2 (in other words a double-click is achieved with a single click).

Creating a hotspot.

[`WRITE`](ABAPWRITE-.html) now has the addition `UNIT` which enables quantity fields to be formatted by unit. Quantity fields are packed fields and usually have the type `QUAN` in `ABAP Dictionary`. Apart from their defined number of [decimal places](ABENFRACT_DIGIT_GLOSRY.html), they can be formatted by the unit specified in `UNIT`, for example, for item specifications without [decimal places](ABENDECIMAL_PLACE_GLOSRY.html).

-   F3 / going back to the basic list of the report
-   F15 / exiting any list of the report
-   the programmed function [`LEAVE SCREEN`](ABAPLEAVE_SCREEN.html) in the application program

DATA: POS TYPE I VALUE 5, \\n LEN TYPE I VALUE 10, \\n F(20) VALUE 'Test output'. \\n\\ \\nWRITE AT /POS(LEN) F. \\nULINE AT /POS(LEN). DATA: COL TYPE I, \\n INT TYPE I, \\n F(20) VALUE 'Test output'. \\n\\ \\nIF . \\n INT = 1. \\n COL = 5. \\nENDIF. \\n\\ \\nWRITE F COLOR = COL INTENSIFIED = INT INPUT ON. \\nFORMAT COLOR = COL INTENSIFIED = INT. DATA: CURSORPOSITION TYPE I, \\n CURSOROFFSET TYPE I, \\n CURSORLINE TYPE I. \\n\\ \\nAT LINE-SELECTION. \\n CURSORPOSITION = SY-CUCOL - 2 + SY-STACO. "old \\n\\ \\nAT LINE-SELECTION. \\n GET CURSOR LINE CURSORLINE OFFSET CURSOROFFSET. "new \\n CURSORPOSITION = CURSOROFFSET + 1. "new INCLUDE . \\nWRITE: / SYM\_PHONE AS SYMBOL. " Output: telephone symbol DATA F. \\nFORMAT HOTSPOT. \\n\* or \\nWRITE: / F HOTSPOT. abenabap.html abennews.html abennews-30.html