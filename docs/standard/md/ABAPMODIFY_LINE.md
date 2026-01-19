---
title: "ABAPMODIFY_LINE"
description: |
  ABAPMODIFY_LINE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMODIFY_LINE.htm"
abapFile: "ABAPMODIFY_LINE.html"
keywords: ["select", "do", "if", "data", "ABAPMODIFY", "LINE"]
---

[Short Reference](ABAPMODIFY_LINE_SHORTREF.html)

`MODIFY \{\ \{LINE line [OF \{PAGE page\}|\{CURRENT PAGE\}]`\\ 
                     `[INDEX idx]\}`\\ 
       ``|\ \{CURRENT LINE\}\ \}\         [[`source`](ABAPMODIFY_LINE_MODIFICATION.html)].``

[1. `... LINE line [\{OF PAGE page \}|\{OF CURRENT PAGE\}]\ [INDEX idx]`](#ABAP_ADDITION_1@3@)

[2. `... CURRENT LINE`](#ABAP_ADDITION_2@3@)

This statement overwrites a line stored in the list buffer with the content of the `sy-lisel` system field and allows additional modifications according to [`source`](ABAPMODIFY_LINE_MODIFICATION.html). In addition, all values for this line stored using `HIDE` are assigned to the respective variables.

The first output of a data object in the list buffer with the statement [`WRITE`](ABAPWRITE-.html) defines the output length, which cannot be changed by the `MODIFY` statement. The statement `MODIFY` ignores any specified [alignments](ABENALIGNMENT_GLOSRY.html) that are specified for the output with `WRITE` and [`CENTERED`, `RIGHT-JUSTIFIED`](ABAPWRITE_TO_OPTIONS.html).

The line to be changed is specified using the addition `LINE` or `CURRENT LINE`. The syntax and description of the additions are the same as for the statement [`READ LINE`](ABAPREAD_LINE.html).

When a line in the basic list is double-clicked, the background of the number displayed becomes yellow, and the background of the remaining line becomes green.

-   It is recommended that the system field `sy-lisel` is filled with the content of the list line to be changed before the statement `MODIFY LINE` is executed, and that the line is modified exclusively using the information in [`source`](ABAPMODIFY_LINE_MODIFICATION.html), not by changing `sy-lisel`. The `sy-lisel` system field is filled either using list events or with the statement [`READ LINE`](ABAPREAD_LINE.html).
-   The function modules `LIST_ICON_PREPARE_FOR_MODIFY` and `LIST_MODIFY_QUICKINFO` can be used to modify icons and tooltips in list lines.

START-OF-SELECTION. \\n DO 10 TIMES. \\n WRITE / sy-index. \\n ENDDO. \\n\\ \\nAT LINE-SELECTION. \\n MODIFY CURRENT LINE FIELD FORMAT sy-index COLOR 3 \\n LINE FORMAT COLOR 5. `sy-subrc` **Meaning** 0 The specified line exists and was changed. Not 0 The specified line does not exist. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_complex.html