---
title: "ABAPNEW-PAGE_PRINT"
description: |
  ABAPNEW-PAGE_PRINT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPNEW-PAGE_PRINT.htm"
abapFile: "ABAPNEW-PAGE_PRINT.html"
keywords: ["select", "do", "while", "if", "catch", "class", "data", "types", "ABAPNEW", "PAGE", "PRINT"]
---

[Short Reference](ABAPNEW-PAGE_SHORTREF.html)

`... \{ PRINT ON [NEW-SECTION] PARAMETERS pri_params`\\ 
                             `[ARCHIVE PARAMETERS arc_params]`\\ 
                             `NO DIALOG \}`\\ 
  `|\ \{ PRINT OFF \} ...`

[1. `... PRINT ON [NEW-SECTION]`](#ABAP_ADDITION_1@3@)

[2. `... PARAMETERS pri_params`](#ABAP_ADDITION_2@3@)

[3. `... ARCHIVE PARAMETERS arc_params`](#ABAP_ADDITION_3@3@)

[4. `... NO DIALOG`](#ABAP_ADDITION_4@3@)

[5. `... PRINT OFF`](#ABAP_ADDITION_5@3@)

The addition `PRINT ON` writes all subsequent output statements to a [spool list](ABENPRINT.html). The additions `[ARCHIVE] PARAMETERS` are used to define the spool parameters and the archiving parameters of the [spool request](ABENSPOOL_REQUEST_GLOSRY.html). The addition `PRINT OFF` closes a spool list that has been started with the addition `PRINT ON`.

The addition `PRINT ON` creates a new [spool list level](ABENSPOOL_LIST_LEVEL_GLOSRY.html). The first output statement after `NEW-PAGE PRINT ON` opens a new [spool request](ABENSPOOL_REQUEST_GLOSRY.html) and writes to a [spool list](ABENSPOOL_LIST_GLOSRY.html) in the [SAP spool system](ABENSAP_SPOOL_SYSTEM_GLOSRY.html). The number of the spool request is placed after `sy-spono` by the first output statement. While it is being created, the spool list is sent page by page to the SAP spool system.

It is not possible to use `NEW-PAGE PRINT ON` to stack another spool list level directly on to a spool list level created using `NEW-PAGE PRINT ON`.

A spool list level created using `NEW-PAGE PRINT ON` can be closed by either `NEW-PAGE PRINT OFF`, `NEW-PAGE PRINT ON NEW-SECTION`, the end of the program, or by leaving a dynpro sequence.

[Lists, Spooling](ABENPRINT_LIST_ABEXA.html).

These additions provide the spool request with [spool parameters and archiving parameters](ABENPRINT_PARAMETERS.html). The latter are necessary if the spool list is archived using [ArchiveLink](ABENARCHIVELINK_GLOSRY.html).

The addition `PARAMETERS` passes the spool parameters in a structure `pri_params` of data type `PRI_PARAMS` from the ABAP Dictionary. If archiving is specified in `pri_params`, archiving parameters must be passed using the addition `ARCHIVE PARAMETERS` in a structure `arc_params` of data type `ARC_PARAMS` from the ABAP Dictionary.

Structures of data types `PRI_PARAMS` and `ARC_PARAMS` must be filled by the function module [`GET_PRINT_PARAMETERS`](ABENPRINT_PARAMETERS_FUNCTION.html). When the function module is called, either individual spool parameters or all spool parameters can be set in the program and/or a spool dialog box displayed. The function module creates a set of valid spool and archiving parameters for use as `pri_params` and `arc_params` and adds these to its output parameters.

If the structures `pri_params` or `arc_params` are initial, the spool parameters or archiving parameters created by a call of the function modules `GET_PRINT_PARAMETERS` with initial input values are used.

The addition `NO DIALOG` suppresses the spool dialog box that by default appears when using the addition `PRINT ON`.

Creates spool lists during the list event [`AT LINE-SELECTION`](ABAPAT_LINE-SELECTION.html). The spool parameters are defined by the function module `GET_PRINT_PARAMETERS` before the basic list is created.

The addition `PRINT OFF` closes a [spool list level](ABENSPOOL_LIST_LEVEL_GLOSRY.html) created using `NEW-PAGE PRINT ON`, sends the current page to the SAP spool system, and releases the associated spool request. Output statements that follow `NEW-PAGE PRINT OFF` write to the screen list or spool list where the spool list level closed by `PRINT OFF` was [stacked](ABENPRINT_SPOOL.html). When the system returns to the spool list, the system field `sy-spono` is switched to the number of the associated spool request directly when the statement `NEW-PAGE PRINT OFF` is executed.

`NEW-PAGE PRINT OFF` is ignored by spool list levels not been created using `NEW-PAGE PRINT ON`.

At the end of the program and at every list event [`AT LINE-SELECTION`](ABAPAT_LINE-SELECTION.html), [`AT PFnn`](ABAPAT_PFNN.html), and [`AT USER-COMMAND`](ABAPAT_USER-COMMAND.html), the statement `NEW-PAGE PRINT OFF` is executed implicitly.

`CX_SY_NESTED_PRINT_ON`

-   If the current list is a screen list, its creation is interrupted, and the new spool list level is stacked.
-   If the current list is a [spool list](ABENPRINT.html) not created with `NEW-PAGE PRINT ON`, its creation is interrupted and the new spool list level is stacked.
-   If the current list is a [spool list](ABENPRINT.html) created using `NEW-PAGE PRINT ON` and the addition `NEW-SECTION` is not used, a catchable exception of the class `CX_SY_NESTED_PRINT_ON` is raised.
-   If the current list is a [spool list](ABENPRINT.html) created using `NEW-PAGE PRINT ON`, the addition `NEW-SECTION` is used, the specified spool parameters match those of the newly created list, and the spool parameter `PRNEW` in the structure `pri_params` is initial, no new spool request is created and the output is written to the current spool list. If the spool parameters define the output of a cover sheet, the cover sheet is spooled again before the following output as a spacer sheet.
-   If the current list is a [spool list](ABENPRINT.html) created using `NEW-PAGE PRINT ON`, the addition `NEW-SECTION` is used, and the specified spool parameters do not match those of the newly created list or the spool parameter `PRNEW` in structure `pri_params` is not initial, the current spool request is closed implicitly by `NEW-PAGE PRINT OFF` and a new spool request is created.

-   Each statement `NEW-PAGE PRINT ON` should be closed explicitly using `NEW-PAGE PRINT OFF` before the program end or before leaving a dynpro sequence.
-   The addition `NEW-SECTION` can be used to avoid the exception `CX_SY_NESTED_PRINT_ON`. When using `NEW-SECTION`, the output can also be continued into the previous spool list, which is not possible when an exception is handled with `CATCH`.
-   Besides the addition `NEW-SECTION`, the obsolete statement [`NEW-SECTION`](ABAPNEW-SECTION.html) can also be used outside of classes. However, it does not enable spool parameters to be specified.

-   These additions must always be used as shown here. It is particularly important that the standard spool dialog box is suppressed. When using the default spool dialog box, the *Back* function is not available because the system cannot return to before a statement after spooling has been switched on by such a statement. Printing can only be exited using *Exit*, which ends the entire program. If the user exits the GUI window by choosing *Cancel*, inconsistent spool parameters can be produced. Instead, the spool dialog box can be displayed by calling the function module [`GET_PRINT_PARAMETERS`](ABENPRINT_PARAMETERS_FUNCTION.html). This function module has an output parameter `VALID` that indicates the consistency of the spool parameters created.
-   The use of the addition `NO DIALOG` without simultaneously passing spool parameters is allowed only outside of ABAP Objects and produces a warning in the syntax check. In other objects, the spool parameters are derived from the user master record, if possible.
-   Besides the additions shown here, there is a range of other additions for an [obsolete specification of spool parameters](ABAPNEW-PAGE_PRINT_OBSOLETE.html), which should no longer be used.

-   *Cause:* Stacked `NEW-PAGE PRINT ON`.
    *Runtime error:*\\ `NESTED_PRINT_ON`

REPORT demo NO STANDARD PAGE HEADING. \\n\\ \\nDATA: spfli\_wa TYPE spfli, \\n sflight\_wa TYPE sflight. \\n\\ \\nDATA: print\_parameters TYPE pri\_params, \\n valid\_flag TYPE c LENGTH 1. \\n\\ \\nSTART-OF-SELECTION. \\n\\ \\n CALL FUNCTION 'GET\_PRINT\_PARAMETERS' \\n IMPORTING \\n out\_parameters = print\_parameters \\n valid = valid\_flag \\n EXCEPTIONS \\n invalid\_print\_params = 2 \\n OTHERS = 4. \\n\\ \\n IF valid\_flag = 'X' AND sy-subrc = 0. \\n SELECT carrid, connid \\n FROM spfli \\n INTO CORRESPONDING FIELDS OF @spfli\_wa. \\n WRITE: / spfli\_wa-carrid, spfli\_wa-connid. \\n HIDE: spfli\_wa-carrid, spfli\_wa-connid. \\n ENDSELECT. \\n ELSE. \\n ... \\n ENDIF. \\n\\ \\nAT LINE-SELECTION. \\n NEW-PAGE PRINT ON PARAMETERS print\_parameters \\n NO DIALOG. \\n SELECT \* \\n FROM sflight \\n WHERE carrid = @spfli\_wa-carrid AND \\n connid = @spfli\_wa-connid \\n INTO @sflight\_wa. \\n WRITE: / sflight\_wa-carrid, sflight\_wa-connid, \\n sflight\_wa-fldate ... \\n ENDSELECT. \\n NEW-PAGE PRINT OFF. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html abapnew-page.html