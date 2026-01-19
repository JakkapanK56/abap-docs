---
title: "ABAPHIDE"
description: |
  ABAPHIDE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPHIDE.htm"
abapFile: "ABAPHIDE.html"
keywords: ["select", "do", "if", "class", "data", "internal-table", "field-symbol", "ABAPHIDE"]
---

[Short Reference](ABAPHIDE_SHORTREF.html)

`HIDE dobj.`

This statement stores the content of a variable `dobj` together with the current list line whose line number is contained in `sy-linno` in the [hide area](ABENHIDE_AREA_GLOSRY.html) of the current list level. The data type of the variable `dobj` must be [flat](ABENFLAT_GLOSRY.html) and no field symbols or components of [boxed components](ABENBOXED_COMPONENT_GLOSRY.html) can be specified that point to lines of internal tables, and no class attributes can be specified. The stored values can be read again as follows:

Saving square numbers and cubic numbers for a list of numbers. The example shows that any variable can be stored independently of the line content. In the real world, one would more likely save only the number and execute the calculation, when required, in the event block for [`AT LINE-SELECTION`](ABAPAT_LINE-SELECTION.html).

-   Any user action on a displayed screen list that causes a list event assigns all values saved using `HIDE` to the relevant variables.
-   If a list line of a list level is read or modified using the statements [`READ LINE`](ABAPREAD_LINE.html) or [`MODIFY LINE`](ABAPMODIFY_LINE.html), all values of this line stored using `HIDE` are assigned to the relevant variables.

-   The `HIDE` statement works independently of how the [list cursor](ABENLIST_CURSOR_GLOSRY.html) was set. In particular, variables can also be stored for empty list lines, that is, lines in which the list cursor was positioned using statements like [`SKIP`](ABAPSKIP.html).
-   The `HIDE` statement should be executed directly in the statement that has set the list cursor in the line.
-   Using the `HIDE` statement on a field symbol can cause runtime errors. The syntax check creates a warning.

-   *Cause:* The field is too long for `HIDE`.
    *Runtime error:*\\ `HIDE_FIELD_TOO_LARGE`
-   *Cause:*\\ `HIDE` in a table line or a component in a table line is not possible.
    *Runtime error:*\\ `HIDE_ILLEGAL_ITAB_SYMBOL`
-   *Cause:*\\ `HIDE` in a local field is not possible.
    *Runtime error:*\\ `HIDE_NO_LOCAL`
-   *Cause:*\\ `HIDE` is not possible on an empty page.
    *Runtime error:*\\ `HIDE_ON_EMPTY_PAGE`
-   *Cause:* Illegal field
    *Runtime error:*\\ `HIDE_NOT_GLOBAL`
-   *Cause:* Permitted number of `HIDE` statements per list line exceeded
    *Runtime error:*\\ `HIDE_TOO_MANY_HIDES`

DATA: square TYPE i, \\n cube TYPE i. \\n\\ \\nSTART-OF-SELECTION. \\n FORMAT HOTSPOT. \\n DO 10 TIMES. \\n square = sy-index \*\* 2. \\n cube = sy-index \*\* 3. \\n WRITE / sy-index. \\n HIDE: square, cube. \\n ENDDO. \\n\\ \\nAT LINE-SELECTION. \\n WRITE: square, cube. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html