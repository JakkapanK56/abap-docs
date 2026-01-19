---
title: "ABENLIST_OVERVIEW"
description: |
  ABENLIST_OVERVIEW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLIST_OVERVIEW.htm"
abapFile: "ABENLIST_OVERVIEW.html"
keywords: ["delete", "do", "while", "if", "case", "class", "data", "ABENLIST", "OVERVIEW"]
---

By default, classic lists (or lists for short) are [screen lists](ABENSCREEN_LIST_GLOSRY.html). A screen list is displayed as the [screen layout](ABENSCREEN_GLOSRY.html) of a special [list dynpro](ABENLIST_DYNPRO_GLOSRY.html) that is a component of the list processor system program. Such a screen layout contains text output defined using ABAP statements instead of screen elements.

An ABAP program can process multiple lists, which are stored in one or more [list buffers](ABENLIST_BUFFER_GLOSRY.html). Each time a [dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html) is called, a new list buffer is opened and assigned to this dynpro sequence. A single list buffer can contain up to 21 lists, a basic list and 20 details lists. A list index is assigned to each list, and this index organizes the lists in the list buffer in hierarchical list levels. The first list of a list buffer is the basic list with list index 0. All other lists, whose list indexes are increased continuously starting at 1, are details lists.

The output statements of an ABAP program write to the current list, whose list index is determined by the system field `sy-lsind`. The current list after the call of a dynpro sequence is the basic list. If the basic list is not displayed, no other list levels can be created.

The basic list is displayed either implicitly during the processing of an executable program (see [`SUBMIT`](ABAPSUBMIT.html)) or explicitly using the statement [`LEAVE TO LIST-PROCESSING`](ABAPLEAVE_TO_LIST-PROCESSING.html). In both cases, the list processor is called, which then sends the list to the list dynpro. Displaying this list closes it in the list buffer. It can no longer be written to, but it can be read or modified.

Every user action on a displayed list that raises a list event for which an [event block](ABENEVENT_BLOCK_GLOSRY.html) is defined in the ABAP program, creates a new details list. The list index of this details list is always one more than the list index of the list on which the event was raised. This index is contained in the system field `sy-listi`. The output statements of the event block write to the current details list. If the event block is completed normally, the details list is displayed automatically in the list dynpro.

User actions on displayed lists can cause a stack of up to 20 details lists to be created in the list buffer. The list with the highest list index (`sy-lsind`) is always the current list of the ABAP program, while the list with the list index one below the highest (`sy-listi`) is displayed on the screen. In certain list processing statements, the list index can be used to access all lists within the stack for reading or changing.

The details list stack in a list buffer can be reduced in two ways:

A list is made up of list lines with a fixed width of up to 1023 characters. The line width of the current list is stored in the system field `sy-linsz`. The number of lines of a list is limited only by the storage capacity of the system.

A list is divided into pages. Every list starts on page 1. The current page of the current list is stored in the `sy-pagno` system field. The output position on the current page in the list buffer is determined by the list cursor, which is provided in the system fields `sy-colno` (column) and `sy-linno` (line). A page can contain a maximum of 60000 lines. The number of lines per page is stored for the current list in the system field `sy-linct`. The value 0 represents the maximum number of lines per page.

On every page of a list, lines can be used for a page header and a page footer. The lines of the page header of the basic list are by default filled with a standard page header from the text elements of the ABAP program. The standard page header consists of a standard title and can contain column headers. The standard title is fixed so that it does not disappear when the page is scrolled vertically on the screen.

In the list event [`TOP-OF-PAGE`](ABAPTOP-OF-PAGE.html), the page header can be filled with additional lines. The page footer can only be filled only in the list event [`END-OF-PAGE`](ABAPEND-OF-PAGE.html). The entire page header of the list displayed on top is fixed so that it does not move when the page is scrolled vertically. The column headers of the standard page header and the lines filled in `TOP-OF-PAGE` are moved when the page is scrolled horizontally.

The lists in the list buffer are screen lists. Their content is displayed in the list dynpro after an implicit call of the list processor in an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) or after an explicit call using `LEAVE TO LIST-PROCESSING`.

When lists are created, there is also the option of excluding individual pages or all pages of one or more lists from the screen layout and to send them to the SAP spool system instead. This is done using the addition [`PRINT ON`](ABAPNEW-PAGE_PRINT.html) of the statement [`NEW-PAGE`](ABAPNEW-PAGE.html). All these pages together then form the spool list. The addition [`TO SAP-SPOOL`](ABAPSUBMIT_LIST_OPTIONS.html) of the statement [`SUBMIT`](ABAPSUBMIT.html) provides another option for creating spool lists.

See also [Spooling Lists](ABENPRINT.html).

Any character supported by the current [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html) can be displayed in a list. The prerequisite here is that a code page or a font is defined in the output medium (GUI, spooler), into which the characters can be converted. [Control characters](ABENCONTROL_CHARACTER_GLOSRY.html), such as for line feed or tabs are ignored in strings and cannot be displayed. Non-displayable characters, such as [control characters](ABENCONTROL_CHARACTER_GLOSRY.html) and non-convertible characters, appear as the `#` character in list output.

When displaying or spooling a list, the content stored in the list buffer is passed to the list Every character represented in the Unicode character representation [UCS-2](ABENUCS2_GLOSRY.html) used by the ABAP programming language usually occupies one place in the list buffer. On the list, however, a character can occupy more than one column, especially Eastern Asian characters. However, since the list only contains the same number of columns as there are positions in the list buffer, this means the list can only display fewer characters than are stored in the list buffer. The list output is shortened accordingly, where the page is displayed according to the [alignment](ABENALIGNMENT_GAP_GLOSRY.html), and is flagged `>` or `<`. On a displayed list, the entire list content can be displayed by choosing *System -> List -> Unicode Display*.

For these reasons, it is guaranteed that the horizontal position of the list cursor matches the output column of a displayed or spooled list only in the case of the lower and upper output limits.

The following list programming rules must be followed to guarantee that lists appear and work as expected:

The program `DEMO_CHARACTERS_IN_LISTS` shows the current display of all characters that are assigned to the hexadecimal codes *0000* to *FFFF* in the current code page.

The list processing statements listed in this section are based on global data and events of the runtime framework and are no longer completely supported in ABAP Objects and when using ABAP Objects.

Classic lists are no longer intended to be used directly in production programs. The use of other suitable output media is recommended instead.

-   Specifying an adequate output length
-   No overwriting of parts of a field
-   The additions `RIGHT-JUSTIFIED` or `CENTERED` are not used for [`WRITE TO`](ABAPWRITE_TO.html) if this statement is followed by list output with `WRITE`.
-   In customer-programmed horizontal scrolling with the statement [`SCROLL`](ABAPSCROLL.html), only the upper or lower limit of data objects displayed should be specified, since the positions in the list buffer and in the list displayed are only certain to match for these field limits.

-   For tabular list output, the classes of SAP List Viewer (ALV) are used, for example `CL_SALV_TABLE`.
-   For simple text output, the wrappers of the browser control, such as dynamic documents or wrappers of the textedit control should be used. [Dynpros, Text Output](ABENTEXT_OUTPUT_ABEXA.html) shows an executable example of the latter.
-   For simple console output, XML-based output streams can be used. An example of this is shown by the class [`CL_DEMO_OUTPUT_STREAM`](ABENCL_DEMO_OUTPUT.html). The program `DEMO_OUTPUT_STREAM` shows potential uses of this class. The class `CL_DEMO_OUTPUT`, which is based on `CL_DEMO_OUTPUT_STREAM`, is used in programs from the [ABAP Example Library](ABENABAP_EXAMPLES.html).

1.  A user action on a displayed details list is linked to function code *BACK*. This function code causes the previous list to be displayed and reduces the value of `sy-lsind` by 1. In the basic list, *BACK* causes the current dynpro sequence to be exited.
2.  Within an event block for a list event, a value is assigned to the system field `sy-lsind`. If the value of `sy-lsind` after the event block is closed is less than the list index of the current list and greater than or equal to 0, the current list replaces the list of this list level and all lists whose list index is greater than the value of `sy-lsind` are deleted from the list buffer. Other values of `sy-lsind` are reset to the index of the current list after the event block is closed.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html