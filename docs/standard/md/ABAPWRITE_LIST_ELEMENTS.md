---
title: "ABAPWRITE_LIST_ELEMENTS"
description: |
  ABAPWRITE_LIST_ELEMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWRITE_LIST_ELEMENTS.htm"
abapFile: "ABAPWRITE_LIST_ELEMENTS.html"
keywords: ["select", "do", "if", "case", "data", "ABAPWRITE", "LIST", "ELEMENTS"]
---

[Short Reference](ABAPWRITE_SHORTREF.html)

`... \{AS CHECKBOX\}`\\ 
  `|\ \{AS ICON\}`\\ 
  `|\ \{AS SYMBOL\}`\\ 
  `|\ \{AS LINE\} ...`

[1. `... AS CHECKBOX`](#ABAP_ALTERNATIVE_1@2@)

[2. `... AS ICON`](#ABAP_ALTERNATIVE_2@2@)

[3. `... AS SYMBOL`](#ABAP_ALTERNATIVE_3@2@)

[4. `... AS LINE`](#ABAP_ALTERNATIVE_4@2@)

These additions are used to represent special list elements.

The data object `dobj` in the output must have certain properties. The additions cannot be used together. If they are used with the additions for [internal formats](ABAPWRITE_INT_OPTIONS.html) and [external formats](ABAPWRITE_EXT_OPTIONS.html), they can only be used to a limited extent.

The output of this addition is a single-character checkbox that is ready for input. `dobj` expects a character-like data type of length 1. If the first character in `dobj` is *X* or *x*, the checkbox is shown as selected. If the first character is not *X* or *x*, the checkbox is shown as empty. If `dobj` is an empty data object of the type `string`, the checkbox is not output.

The user can select and deselect the checkbox in the list displayed on the window. If the user selects the checkbox, the first character of the assigned field in the list is set to *X*. If the user deselects it, it is set to blank. The change is stored in the list buffer and can be evaluated during a list event.

If the addition `AS CHECKBOX` is used, no list output `len` is allowed after `AT`. Except for `INPUT`, `NO-GAP`, and `UNDER`, the other additions specified at the same time for [internal formats](ABAPWRITE_INT_OPTIONS.html) and [external formats](ABAPWRITE_EXT_OPTIONS.html) are ignored.

The addition `AS CHECKBOX` has the same effect as specifying the addition `INPUT ON` simultaneously. The standard settings or a format `INPUT OFF` set by a `FORMAT` statement are overridden for the current `WRITE` statement. To make the checkbox not ready for input, the addition `INPUT OFF` must be used simultaneously.

Output of two checkbox fields and evaluation of the user input in the event `AT LINE-SELECTION`.

This addition produces icons. It should be noted that not all icons are suitable for spool lists. `dobj` expects data objects of the type `c` whose initial characters can be interpreted as the internal ID of an icon by the runtime framework.

In the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `ICON`, a constant is declared for each icon that can be displayed. The names of the constants can be taken from the type pool or the output of the `SHOWICON` program. This program also shows the corresponding output length and whether an icon can be spooled or not.

If the content of `dobj` cannot be interpreted as an icon or the content is changed by simultaneous use of other additions for [internal formats](ABAPWRITE_INT_OPTIONS.html) or [external formats](ABAPWRITE_EXT_OPTIONS.html), blanks are produced instead of icons.

Displays a traffic light icon.

Displaying traffic light icons using their internal IDs (key and internal name). The IDs that are not at the start of the character string are not converted.

This addition produces all characters of the data object `dobj` as symbols. The [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `SYM` declares constants with a length of 1 for each character that can be displayed as a symbol, and whose name reflects the meaning of the symbol. The names of the constants and the meaning and length of the symbols can be taken from the type pool or from the output of the program `SHOWSYMB`.

The [output length](ABENWRITE_OUTPUT_LENGTH.html) is determined, as usual, either implicitly using the data type of `dobj` or by being specified explicitly.

Displays a hand symbol.

This addition produces [line elements](ABENLINE_ELEMENT_GLOSRY.html) with the output length 1. Line elements are corners, crosses, lines, and T sections. `dobj` expects data objects of the type `c` whose content can be interpreted as line elements by the runtime framework. The [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `LINE` declares the line element constants displayed in the following table.

If `dobj` has different content or the content is changed by simultaneous use of other additions for [internal formats](ABAPWRITE_INT_OPTIONS.html), a blank is produced instead of a line element. The addition `FRAMES OFF` must not be specified simultaneously. The other additions for [external formats](ABAPWRITE_EXT_OPTIONS.html) and `QUICKINFO` are ignored in the output of line elements.

Produces four adjoining rectangles.

-   If a list line contains only a checkbox with a blank, it is displayed only if the statement `SET BLANK LINES ON` is executed beforehand.
-   By default, addition [`HOTSPOT ON`](ABAPFORMAT.html) has no effect on a checkbox. [`HOTSPOT ON`](ABAPFORMAT.html) only has an effect if `INPUT OFF` is deactivated.

-   None of the additions from the [internal formats](ABAPWRITE_INT_OPTIONS.html) and [external formats](ABAPWRITE_EXT_OPTIONS.html) are forbidden. When using these additions, care must be taken that the content of `dobj` can be interpreted as an icon.
-   The [output length](ABENWRITE_OUTPUT_LENGTH.html) is determined, as usual, either implicitly using the data type of `dobj` or by being specified explicitly. Characters in the output area that do not have the icon are filled with blanks.
-   The database table `ICONT` contains descriptive texts for the icons.
-   The program `SHOWICON` shows two internal IDs for each icon:

-   A two-digit hexadecimal number as the key.
-   A six-character string composed of uppercase letters and any underscores as the internal name.

-   If a character string that is output using `WRITE` has an internal ID of this type between two *@* characters at the start, this is represented as an icon in the list output, even without the addition `AS ICON`. This can lead to unwanted output of icons and unexpected effects in terms of the output length. By default, the output length is determined by the length of the character string. However, this property can also be exploited, for example, to use icons at the start of [text symbols](ABENTEXT_SYMBOL_GLOSRY.html). IDs that are not at the start are not represented as icons.

-   The characters *\-* and *|* and produced using `ULINE` are [joined with each other](ABENWRITE_LINES.html) by default, if no other characters exist between them. Here the system replaces the characters by the above line elements. A solitary character *|* is always replaced by a vertical line. The *\-* characters from `sy-uline` are always replaced by a horizontal line. The default behavior can be switched off using the addition [`FRAMES OFF`](ABAPFORMAT.html).
-   The addition `AS LINE` is used to output line elements in the exact way they are defined. Links are produced only where line elements actually meet each other. The system does not, however, create any automatic extensions between the characters *\-* or *|* and line elements produced explicitly using `AS LINE`.

REPORT test NO STANDARD PAGE HEADING. \\n\\ \\nDATA: check1 TYPE c LENGTH 1 VALUE 'X', \\n check2 TYPE c LENGTH 1 VALUE ' '. \\n\\ \\nSTART-OF-SELECTION. \\n WRITE: / check1 AS CHECKBOX, 'Checkbox 1', \\n / check2 AS CHECKBOX, 'Checkbox 2'. \\n\\ \\nAT LINE-SELECTION. \\n READ: LINE 1 FIELD VALUE check1, \\n LINE 2 FIELD VALUE check2. WRITE icon\_green\_light AS ICON. WRITE: / 'xxx', '@08@xxx ', 'xxx@08@xxx'. \\nWRITE: / 'xxx', '@S\_TL\_G@xxx', 'xxx@S\_TL\_G@xxx'. WRITE sym\_left\_hand AS SYMBOL. WRITE: /10 line\_top\_left\_corner AS LINE NO-GAP, \\n line\_top\_middle\_corner AS LINE NO-GAP, \\n line\_top\_right\_corner AS LINE, \\n /10 line\_left\_middle\_corner AS LINE NO-GAP, \\n line\_cross AS LINE NO-GAP, \\n line\_right\_middle\_corner AS LINE, \\n /10 line\_bottom\_left\_corner AS LINE NO-GAP, \\n line\_bottom\_middle\_corner AS LINE NO-GAP, \\n line\_bottom\_right\_corner AS LINE. **Constant** **Meaning** `line_space` Blank `line_top_left_corner` Top left corner `line_bottom_left_corner` Bottom left corner `line_top_right_corner` Top right corner `line_bottom_right_corner` Bottom right corner `line_horizontal_line` Horizontal line `line_vertical_line` Vertical line `line_left_middle_corner` T section turned to the left `line_right_middle_corner` T section turned to the right `line_bottom_middle_corner` Reversed T section `line_top_middle_corner` T section `line_cross` Cross abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html abapwrite-.html