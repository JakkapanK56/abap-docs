---
title: "ABAPFORMAT"
description: |
  ABAPFORMAT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFORMAT.htm"
abapFile: "ABAPFORMAT.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABAPFORMAT"]
---

[Short Reference](ABAPFORMAT_SHORTREF.html)

`FORMAT [COLOR       \{[=]\{color [ON]\}|OFF\}|\{= col\}]`\\ 
       `[INTENSIFIED [\{ON|OFF\}|\{= flag\}]]`\\ 
       `[INVERSE     [\{ON|OFF\}|\{= flag\}]]`\\ 
       `[HOTSPOT     [\{ON|OFF\}|\{= flag\}]]`\\ 
       `[INPUT       [\{ON|OFF\}|\{= flag\}]]`\\ 
       `[FRAMES      [\{ON|OFF\}|\{= flag\}]]`\\ 
       `[RESET].`

[1. `... COLOR \{[=]\{color [ON]\}|OFF\}|\{= col\}`](#ABAP_ADDITION_1@3@)

[2. `... INTENSIFIED [\{ON|OFF\}|\{= flag\}]`](#ABAP_ADDITION_2@3@)

[3. `... INVERSE [\{ON|OFF\}|\{= flag\}]`](#ABAP_ADDITION_3@3@)

[4. `... HOTSPOT [\{ON|OFF\}|\{= flag\}]`](#ABAP_ADDITION_4@3@)

[5. `... INPUT [\{ON|OFF\}|\{= flag\}]`](#ABAP_ADDITION_5@3@)

[6. `... FRAMES [\{ON|OFF\}|\{= flag\}]`](#ABAP_ADDITION_6@3@)

[7. `... RESET`](#ABAP_ADDITION_7@3@)

The settings defined using `FORMAT` apply from the current position of the [list cursor](ABENLIST_CURSOR_GLOSRY.html) for all of the following output statements ([`WRITE`](ABAPWRITE-.html) and, with restrictions, [`ULINE`](ABAPULINE.html)) until they are redefined by a new `FORMAT` statement. Within a line, the areas between the individual output and between the start of the line and the first output are formatted. Blank lines created using [`SKIP`](ABAPSKIP.html) are not formatted, however.

The individual additions change the associated setting only and leave the others unchanged, except for the addition `RESET`, which can change all settings.

At the start of the program, standard settings are defined for the settings that can be defined using `FORMAT`. These are set automatically for each [reporting event](ABENREPORTING_EVENT_GLOSRY.html) and [list event](ABENLIST_EVENT_GLOSRY.html) (except for the attribute set by `FRAMES`). A table of the standard settings is in the description of the addition `RESET`.

For each individual `WRITE` output, the settings can be overridden using the same additions in the addition `WRITE`. The settings that are defined using `FORMAT` or the standard settings then apply again.

In addition to the statement `FORMAT`, [obsolete formats](ABENFORMAT_OBSOLETE.html) also exist that are replaced by `FORMAT`.

This addition sets the color of the output. If the attribute `INVERSE` is set to `OFF` (default setting), this sets the background color of the output. If the attribute `INVERSE` is set to `ON`, this sets the foreground color of the output.

The color can be specified either statically using `color`, or dynamically using `col`.

The addition `OFF` has the same effect as `COL_BACKGROUND` or the value 0 in `col` and is the default setting. In this setting, the color of the background corresponds to a list line of the background color of the GUI window.

The addition `COLOR` does not affect lines consisting of [line elements](ABENLINE_ELEMENT_GLOSRY.html), or on GUI windows that are ready for input. The latter can be overridden by the other additions.

This addition defines the intensity of the background color. `flag` expects a data object of type `i`. If `ON` is specified or if the content of `flag` is not equal to 0, an intensified background color is used (default setting). If `OFF` is specified or if the content of `flag` is equal to 0, a non-intensified background color is used. An exception to this is the background color `COL_BACKGROUND` used by `INTENSIFIED ON` to control the foreground color. If none of `ON`, `OFF`, or `flag` are specified after `INTENSIFIED`, the addition `ON` is applied.

If the `INPUT ON` attribute is set at the same time, the addition `INTENSIFIED OFF` changes the foreground color of fields that are ready for input. If the `INVERSE ON` setting is made at the same time, the `INTENSIFIED OFF` setting is ignored (except for `COL_BACKGROUND`).

This addition defines whether the addition `COLOR` sets the background color or the foreground color. `flag` expects a data object of type `i`. If `ON` is specified or the content of `flag` is not equal to 0, the foreground (the output) is displayed in the selected color. An exception to this is the `COL_BACKGROUND` color, used to display the foreground in white. If `OFF` is specified or if the content of `flag` is equal to 0, the background is displayed in the selected color (default setting). If neither `ON`, `OFF`, nor `flag` are specified after `INVERSE`, the addition `ON` is applied.

If the attribute `INPUT ON` is set at the same time, the addition `INVERSE ON` changes the background and foreground color of fields that are ready for input.

Demonstrates different combinations of the additions `COLOR`, `INTENSIFIED`, and `INVERSE`. The program `SHOWCOLO` produces a similar result.

This addition affects the display of the mouse pointer and the function of the mouse in the list displayed on the window. `flag` expects a data object of type `i`. If `ON` is specified or if the content of `flag` is not equal to 0, it changes its appearance to a hand when the mouse pointer is positioned on a list area that is formatted accordingly (hotspot) and a single click has the same effect as a double-click, that is, selecting the function key F2. If `OFF` is specified or if the content of `flag` is equal to 0, the function of the mouse does not change (default setting). If none of `ON`, `OFF`, or `flag` are specified after `HOTSPOT`, the addition `ON` is applied.

If the attribute `INPUT ON` is set, the addition `HOTSPOT ON` is ignored and is also ignored by [line elements](ABENLINE_ELEMENT_GLOSRY.html).

By default, `INPUT ON` is set for a checkbox defined with [`AS CHECKBOX`](ABAPWRITE_LIST_ELEMENTS.html) and the addition `HOTSPOT ON` is ignored. `HOTSPOT ON` does, however, affect a non-input-ready checkbox.

Demonstration of a hotspot. Clicking the output once creates a details list.

This addition makes list areas ready for input. `flag` expects a data object of type `i`. If `ON` is specified or the content of `flag` is not equal to 0, the relevant list area is displayed with a different foreground and background color than the rest of the list, and the user can overwrite the output. The screen cursor is positioned in the first field that is ready for input. If `OFF` is specified or the content of `flag` is equal to 0, the output is not made ready for input (default setting). If none of `ON`, `OFF`, or `flag` are specified after `INPUT`, the addition `ON` is applied.

Within an area that is ready for input, icons are displayed empty and symbols are displayed as characters according to the [code page](ABENCODEPAGE_GLOSRY.html). [Line elements](ABENLINE_ELEMENT_GLOSRY.html) are not made ready for input. In list areas that are ready for input, however, the characters *\-* and *|*, are not converted into line elements and are not displayed as ready for input. In particular, the latter also applies to the statement `ULINE`.

The width of the list area that is ready for input is defined by the [output length](ABENWRITE_OUTPUT_LENGTH.html). If the display of content from the list buffer in a list area that is ready for input results in truncation, the indicator is placed outside the area. The number of characters that can be entered is limited by the output length. The content cannot be moved. The number of characters that can be entered depends on the space that the individual characters require.

The entries made by the user are stored in the list buffer and can be evaluated during a list event. If characters were truncated in the list, then they will also be lost in the list buffer.

If a list line contains an input field with only blanks, it is not displayed if the statement `SET BLANK LINES ON` was not executed beforehand.

Displays a field that is ready for input and evaluates it in the event `AT LINE-SELECTION`. The evaluation is performed only if the user clicks the hotspot below the line that is ready for input.

This addition defines whether the *\-* and *|* characters are converted to [line elements](ABENLINE_ELEMENT_GLOSRY.html). `flag` expects a data object of type `i`. If `ON` is specified or if the content of `flag` is not equal to 0, the characters are converted in the affected list area (default setting). If `OFF` is specified or if the content of `flag` is not equal to 0, the characters are not converted. If none of `ON`, `OFF`, or `flag` are specified after `FRAMES`, the addition `ON` is applied.

In the `FRAMES ON` setting, the following points apply:

In the `FRAMES OFF` setting, the *\-* and *|* characters are not converted into line elements. Line elements can be output explicitly using the addition `AS LINE`.

The addition `FRAMES OFF` is suitable for preventing unwanted results in spool lists. This applies particularly to lists that are intended for archiving.

Output of a frame with the characters *\-* and *|* joined or not joined.

This addition sets all formatting settings for which the corresponding addition is not specified in the same `FORMAT` statement to the state `OFF`, apart from the setting of the addition `FRAMES`, which is set to `ON`. For settings whose addition is also specified, the addition `RESET` is ignored.

The following table shows the effect of `RESET` compared with the default settings (the setting when the program starts and the setting that is made for reporting and list events).

This `FORMAT` statement creates the default setting after the program starts.

-   `color` expects syntax taken directly from the following table. `ON` does not need to be specified. The optional equal sign `=` in front of `color` can be specified only if the addition `ON` or `OFF` is not specified.
-   A data object of type `i`, containing one of the values from the following table, can be specified for `col`. If `col` contains a different value, this is handled like the value 0. The equal sign `=` must be used if the data object `col` is not specified directly as a number.

-   If the *\-* and *|* characters are displayed directly next to each other or above each other, they are replaced by line elements, producing continuous lines (frames). This applies particularly to the output of lines using `ULINE`.
-   A solitary *|* character is always replaced by a vertical line.
-   Line elements that are displayed explicitly by the addition `AS LINE` are not replaced by other line elements and they do not affect adjacent *\-* and *|* characters.

DATA col TYPE i VALUE 0. \\n\\ \\nDO 8 TIMES. \\n col = sy-index - 1. \\n FORMAT COLOR = col. \\n WRITE: / col COLOR OFF, \\n 'INTENSIFIED ON' INTENSIFIED ON, \\n 'INTENSIFIED OFF' INTENSIFIED OFF, \\n 'INVERSE ON' INVERSE ON. \\nENDDO. START-OF-SELECTION. \\n FORMAT HOTSPOT. \\n WRITE 'Click me!' COLOR 5. \\n FORMAT HOTSPOT OFF. \\n\\ \\nAT LINE-SELECTION. \\n WRITE 'Yeah!' COLOR 3. DATA: input\_field TYPE c LENGTH 100, \\n line\_num TYPE i. \\n\\ \\nSTART-OF-SELECTION. \\n WRITE 'Input text:'. \\n SET BLANK LINES ON. \\n FORMAT INPUT. \\n WRITE / input\_field. \\n FORMAT INPUT OFF. \\n WRITE / '>>> OK <<<' COLOR 5 HOTSPOT. \\n\\ \\nAT LINE-SELECTION. \\n IF sy-lisel = '>>> OK <<<'. \\n line\_num = sy-lilli - 1. \\n READ LINE line\_num FIELD VALUE input\_field. \\n WRITE: 'The input was:', \\n / input\_field. \\n ENDIF. CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\n PRIVATE SECTION. \\n CLASS-METHODS frame. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD main. \\n FORMAT FRAMES ON. \\n frame( ). \\n FORMAT FRAMES OFF. \\n frame( ). \\n ENDMETHOD. \\n METHOD frame. \\n SKIP. \\n WRITE: / '----', \\n / '| |', \\n / '----'. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nSTART-OF-SELECTION. \\n demo=>main( ). FORMAT RESET \\n INTENSIFIED ON. **Syntax of `color`** **Value in `col`** **Color** **Addition** **State After `RESET`** **State After Program Start** **State After Reporting Event or List Event** `\{ COL_BACKGROUND \}` 0 GUI-dependent `\{ 1 | COL_HEADING \}` 1 Gray-blue `\{ 2 | COL_NORMAL \}` 2 Light gray `\{ 3 | COL_TOTAL \}` 3 Yellow `\{ 4 | COL_KEY \}` 4 Blue-green `\{ 5 | COL_POSITIVE \}` 5 Green `\{ 6 | COL_NEGATIVE \}` 6 Red `\{ 7 | COL_GROUP \}` 7 Orange `COLOR` `OFF` `OFF` `OFF` `INTENSIFIED` `OFF` `ON` `ON` `INVERSE` `OFF` `OFF` `OFF` `HOTSPOT` `OFF` `OFF` `OFF` `INPUT` `OFF` `OFF` `OFF` `FRAMES` `ON` `ON` No change abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html