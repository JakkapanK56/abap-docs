---
title: "ABAPREAD_LINE"
description: |
  ABAPREAD_LINE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_LINE.htm"
abapFile: "ABAPREAD_LINE.html"
keywords: ["select", "do", "while", "if", "data", "ABAPREAD", "LINE"]
---

[Short Reference](ABAPREAD_LINE_SHORTREF.html)

`READ \{\ \{LINE line [\{OF PAGE page\}|\{OF CURRENT PAGE\}]`\\ 
                   `[INDEX idx]\}`\\ 
     ``|\ \{CURRENT LINE\}\ \}\       [[`result`](ABAPREAD_LINE_RESULT.html)].``

[1. `... LINE line [\{OF PAGE page \}|\{OF CURRENT PAGE\}]\ [INDEX idx]`](#ABAP_ADDITION_1@3@)

[2. `... CURRENT LINE`](#ABAP_ADDITION_2@3@)

This statement assigns the content of a line stored in the list buffer to the system field `sy-lisel`, and allows other target fields to be specified in [`result`](ABAPREAD_LINE_RESULT.html). In addition, all values for this line stored using [`HIDE`](ABAPHIDE.html) are assigned to the respective variables.

The line to be read is specified using the addition `LINE` or using `CURRENT LINE`.

The addition `LINE` selects a line. The line number is specified by `line` which expects a data object of type `i`. The line number is related to a list page of a list level.

The list level can be specified with the addition `INDEX`, where `idx` expects a data object, which contains the list index, of type `i`. The value of `idx` must be greater than or equal to 0. If the addition `INDEX` is not specified, the list level 0 (the basic list itself) is selected when the basic list is created and the list level at which the event was raised (`sy-listi`) is selected when a list event is processed.

The list page can be specified either with `PAGE page` or with `CURRENT PAGE`. `page` expects a data object of the type `i` that contains the page number of an existing page of the list level. No line is selected if no line is found for the specified values in `line`, `idx` and `page`. `CURRENT PAGE` indicates the topmost displayed page of the list, on which the last list event has taken place. No line is selected while creating the basic list. If no addition is specified for the page, the current page (`sy-pagno`) is selected when the basic list is created, and the page on which the event was raised (`sy-cpage`) is selected during the processing of a list event.

For the addition `CURRENT LINE`, the line on which the screen cursor was positioned during a preceding list event (`sy-lilli`), or the last line read with a preceding `READ LINE` statement, is selected. No line is selected while creating the basic list.

This example reads all lines of the basic list after selecting a line. The content of the checkbox is assigned to the output data object `flag`. A target field `wa` with length 10 is used for the date, since this is the length of the output area and contains separators. If an assignment was made to the output field `date`, the area length would be reduced. The selected data is displayed in the details list.

DATA: date TYPE d, \\n flag TYPE c LENGTH 1, \\n wa TYPE c LENGTH 10. \\n\\ \\nSTART-OF-SELECTION. \\n date = sy-datum. \\n DO 10 TIMES. \\n date += sy-index. \\n WRITE: / flag AS CHECKBOX, (10) date. \\n ENDDO. \\n\\ \\nAT LINE-SELECTION. \\n DO. \\n READ LINE sy-index FIELD VALUE flag \\n date INTO wa. \\n IF sy-subrc <> 0. \\n EXIT. \\n ELSEIF flag = 'X'. \\n WRITE / wa. \\n ENDIF. \\n ENDDO. `sy-subrc` **Meaning** 0 The specified line exists and was read. Not 0 The specified line does not exist. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_complex.html