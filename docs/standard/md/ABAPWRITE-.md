---
title: "The output is formatted"
description: |
  `ext_format_options`(ABAPWRITE_EXT_OPTIONS.html) allows output to be formatted and the additions `list_elements`(ABAPWRITE_LIST_ELEMENTS.html) allow specific list elements to be displayed. By default, adjacent characters - and  in a list are joined to form continuous lines(ABENWRITE_LINE
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWRITE-.htm"
abapFile: "ABAPWRITE-.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "internal-table", "field-symbol", "ABAPWRITE"]
---

[Short Reference](ABAPWRITE_SHORTREF.html)

``WRITE \{[AT]\ [/][pos][(len|*|**)]\} dobj        [UNDER other_dobj]\        [NO-GAP]\        [[`int_format_options`](ABAPWRITE_INT_OPTIONS.html)]\        [[`ext_format_options`](ABAPWRITE_EXT_OPTIONS.html)]\        [[`list_elements`](ABAPWRITE_LIST_ELEMENTS.html)]\        [QUICKINFO info].``

[1. `... [AT]\ [/][pos][(len|*|**)]`](#ABAP_ADDITION_1@3@)

[2. `... UNDER other_dobj`](#ABAP_ADDITION_2@3@)

[3. `... NO-GAP`](#ABAP_ADDITION_3@3@)

[4. `... QUICKINFO info`](#ABAP_ADDITION_4@3@)

This statement formats the content of the data object `dobj` and writes it to the current page of the current list. This is either a [screen list](ABENSCREEN_LIST_GLOSRY.html) in the list buffer or a [spool list](ABENSPOOL_LIST_GLOSRY.html). `dobj` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html) with the restriction that no [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html) and no [bit expressions](ABENBIT_EXPRESSION_GLOSRY.html) can be specified directly.

For `dobj`, those data types are allowed that are grouped under the generic type [`simple`](ABENBUILT_IN_TYPES_GENERIC.html):

**Formatting the Output**

The output is formatted

[`ext_format_options`](ABAPWRITE_EXT_OPTIONS.html) allows output to be formatted and the additions [`list_elements`](ABAPWRITE_LIST_ELEMENTS.html) allow specific list elements to be displayed. By default, adjacent characters *\-* and *|* in a list are joined to form continuous [lines](ABENWRITE_LINES.html).

**Output Position**

The output position is either determined by the [list cursor](ABENLIST_CURSOR_GLOSRY.html) or can be specified using `pos` after `AT` or using `UNDER`. The list cursor itself can be adjusted using `NO-GAP`. At the start of every output, the output position in the list buffer is the same as the output position in the list representation. The positions of individual characters within an output field can differ between the list representation and the list buffer. In both cases, however, the [output length](ABENWRITE_OUTPUT_LENGTH.html) is the same.

**Output Length**

The [output length](ABENWRITE_OUTPUT_LENGTH.html) is determined either by the data type of `dobj` or can be specified after `AT` using `len|*|**`. `len` specifies an absolute length and `*` or `**` are used to prevent unwanted truncations.

**Page Break**

If the last line of the current page is reached and a subsequent line is output, a new page is generated. The maximum number of lines is determined by the addition [`LINE-COUNT`](ABAPNEW-PAGE_OPTIONS.html) of the [program-initiating statement](ABENPROGRAM_INIT_STATEMENT_GLOSRY.html) or the statement [`NEW-PAGE`](ABAPNEW-PAGE.html). For the basic list, the event [`END-OF-PAGE`](ABAPEND-OF-PAGE.html) is raised when the area reserved for the [page footer](ABENPAGE_FOOTER_GLOSRY.html) is reached, and a new page is then created.

**Line Break**

Once the list cursor has been positioned with a previous output statement, if the output length is greater than the area available in the current line of the list buffer, the output goes to the next line. If this line is also not sufficient for a complete output, the output length is truncated accordingly, and the output is displayed in this line.

If the list cursor is positioned using by specifying `pos` or a statement [`BACK`](ABAPBACK.html), [`NEW-LINE`](ABAPNEW-LINE.html), [`NEW-PAGE`](ABAPNEW-PAGE.html), [`POSITION`](ABAPPOSITION.html) or [`SKIP`](ABAPSKIP.html) and not with a previous output statement, the output is always displayed in the current line, and the output length is truncated, if necessary.

**List Cursor**

After the output is displayed, the list cursor is positioned by default in the second place after the output; the `sy-colno` and `sy-linno` system fields are set accordingly.

**Field Help and Input Help**

If the data object `dobj` is declared with reference to a data type from the ABAP Dictionary, the field and input help defined here are available in the list displayed on the window.

`WRITE` output for data objects, function calls, string expressions and method calls.

The output position and length for the current statement `WRITE` can be defined after `AT`. The output position of existing outputs in the list buffer is overwritten with the output length of the new output. Once an existing output has been overwritten, the list cursor is placed at the next position and not the position after next.

The components of the specified position and length `/`,`pos` and `len` or `*` or `**` must be specified with no blanks and in the given order. If position and length are only specified as numeric literals, the addition `AT` can be omitted.

If a [conversion exit](ABENCONVERSION_EXIT_GLOSRY.html) is executed in relation to a data type in the ABAP Dictionary, this conversion exit is performed for the relevant specified length when `len` is specified, and if `*` or `**` is specified, the conversion exit is performed for the output length specified in the ABAP Dictionary. If `*` or `**` is specified, the output length is then determined according to the rules explained above from the conversion exit. The specification of `*` or `**` when using formatting templates ([`USING EDIT MASK`](ABAPWRITE_TO_OPTIONS.html), [`DD/MM/YYYY ...`](ABAPWRITE_TO_OPTIONS.html)), follows special [rules](ABAPWRITE_INT_OPTIONS.html). `*` or `**` cannot be specified together with the option [`TIME ZONE`](ABAPWRITE_TO_OPTIONS.html).

Displays a text field `text` at different positions, with different output lengths.

The output is made in the current line at the position where the data object `other_dobj` was the output of a previous `WRITE` statement. The data object `other_dobj` must be written exactly as in the corresponding `WRITE` statement, including all possible specified offset/lengths and so on. If the data object `other_dobj` was not specified before, the addition is ignored. If it was specified more than once, the horizontal output position of the last `WRITE` statement is used.

The addition `UNDER` cannot be used together with a position `pos` specified after `AT`. For `other_dobj`, a [boxed component](ABENBOXED_COMPONENT_GLOSRY.html) or component of a boxed component cannot be specified.

Tabular output of flight connections.

The [list cursor](ABENLIST_CURSOR_GLOSRY.html) is positioned directly after the output and not in the place after the next place in the list buffer.

The output of the two `WRITE` statements is *NoGap*.

A [tooltip](ABENTOOL_TIP_GLOSRY.html) is assigned to the output. If the mouse cursor is placed on the output area of `dobj`, the content of `info` appears in a colored rectangle. `info` expects a character-like data object with length 80. Character strings that exceed this length are truncated after position 80.

The addition `QUICKINFO` is ignored for [line elements](ABENLINE_ELEMENT_GLOSRY.html) and for fields that are ready for input. Only for [checkboxes](ABAPWRITE_LIST_ELEMENTS.html), the addition `QUICKINFO` is not ignored in SAP GUI for Windows if the profile parameter `dynp/enhanced_system_feedback` has the value *TRUE*. If a list output is overwritten by another output, no tooltip for the overwritten field appears at or after the position where overwriting starts.

The character `@` is represented internally in the tooltip text by `@@` and it occupies two places rather than just one. This means that for every `@` character, there is one less character available to display it.

Additional information on the output of date and time.

See [`WRITE - TO`](ABAPWRITE_TO.html)

-   All [flat](ABENFLAT_GLOSRY.html) data types; flat structures are handled like a data object of type `c` and can only contain any character-like components.
-   The data types `string` and `xstring`
-   [enumerated types](ABENENUM_TYPE_GLOSRY.html); the name (maximum three characters) of the [enumerated constant](ABENENUMERATED_CONSTANT_GLOSRY.html) is used in uppercase letters, which defines the current [enumerated value](ABENENUMERATED_VALUE_GLOSRY.html).

-   in accordance with the same [predefined formats](ABENWRITE_FORMATS.html) as in the statement [`WRITE ... TO`](ABAPWRITE_TO.html) or
-   with the additions [`int_format_options`](ABAPWRITE_INT_OPTIONS.html).

-   In the default setting, the system does not place a new line that contains only blank characters in a list. A blank line is only output if the list cursor is directly positioned in an existing line, that is, not using a line break. This setting can be changed using the statement [`SET BLANK LINES ON`](ABAPSET_BLANK_LINES.html).
-   [Arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html) and [bit expressions](ABENBIT_EXPRESSION_GLOSRY.html) cannot be specified directly, but they can be specified in [embedded expressions](ABENEMBEDDED_EXPRESSION_GLOSRY.html) in [string templates](ABENSTRING_TEMPLATE_GLOSRY.html).
-   [Control characters](ABENCONTROL_CHARACTER_GLOSRY.html) for line feeds or tabs are ignored in strings that are displayed using `WRITE`. These characters are displayed as `#`, like all other non-displayable characters.
-   If the start of a character string, which is output with `WRITE`, contains an internal ID (key or internal name) for an icon at the beginning between two characters *@*, this is displayed in the list as an icon, even without the addition [`AS ICON`](ABAPWRITE_LIST_ELEMENTS.html). This can cause unintentional output of icons and unexpected effects on the output length since the latter is determined by the length of the character string by default.
-   [Obsolete calculations](ABENCALCULATE_OBSOLETE.html) used in connection with `WRITE` are still possible outside of classes.
-   The methods of the class [`CL_DEMO_OUTPUT`](ABENCL_DEMO_OUTPUT.html) demonstrate how simple `WRITE` output can be replaced by using a suitable output stream.

-   `/` is used to display the output in the next line after the current line. If no position `pos` is specified, the output is written from the first column onward. If specified immediately after the position of the [list cursor](ABENLIST_CURSOR_GLOSRY.html) in a list line that is not the result of a previous output statement, `/` is ignored. This is the case during initial writing to a list page, and after explicit positioning with the statements [`SKIP`](ABAPSKIP.html), [`NEW-LINE`](ABAPNEW-LINE.html), [`NEW-PAGE`](ABAPNEW-PAGE.html) and [`BACK`](ABAPBACK.html).
-   The output position is determined by specifying `pos`. `pos` expects a data object of type `i` that contains a value within the current list width. If the value in `pos` is less than 1, it is ignored. If it is greater than the current list width, there is no output.
-   The [output length](ABENWRITE_OUTPUT_LENGTH.html) is determined by specifying `len`, `*`, or `**` in parentheses. `len` can be used to specify an absolute value. `len` expects a data object of type `i` which contains a value greater than zero and which is within the current list width. If is `len` specified, the number of characters displayed in the list can differ from the number of characters stored in the list buffer. By specifying `*` or `**`, the output length depends on the data type of the data object `dobj`, as shown in the following table.

-   Specifying the output length `len` after `AT` should always be preferred over specifying a length for the data object `dobj` (substring access). In contrast to substring accesses, specifying the output length is not restricted to byte-like and character-like data objects. Furthermore, the assignment of the list output to the data object is lost during substring access, which means that it can no longer be addressed in the list.
-   The specification of `*` or `**` for the output length ensures that, regardless of data type, all characters from `dobj` are displayed, even when more columns are needed in the list than positions in the list buffer. With `*`, the minimum possible length is used, and with `**`, the maximum possible length is used.
-   When an output position is specified within an existing output, the position should always refer to the characters stored in the list buffer. If characters that require more than one column in the list are displayed, the displayed output position can differ from the specified output position. In addition, the displayed content of a partially overwritten output can be shifted, depending on the characters that overwrote the output.

-   Vertical positioning must be carried out by the user. If the [list cursor](ABENLIST_CURSOR_GLOSRY.html) is positioned underneath the output of `other_dobj`, the output also appears underneath. If the list cursor is positioned in the same line in which `other_dobj` is displayed, this output is overwritten. If the list cursor is positioned above the output of `other_dobj`, the output also appears above.
-   The data object `other_dobj` should be defined globally in the current program. Using local data objects in procedures may lead to unwanted results, for example, if the components of the same structures are used in different procedures.
-   The data object `other_dobj` can also be specified as a field symbol or as a dereferenced data reference. In this case, the field symbol or data reference must not point to a line of an internal table.

DATA text TYPE string VALUE 'Hello classical list'. \\nWRITE / text. \\nWRITE / |\\{ text WIDTH = 40 ALIGN = RIGHT \\}|. \\nWRITE / to\_upper( text ). \\nWRITE / |\\{ 6 \* 7 \\}|. \\nWRITE / \`4\` && \`2\`. \\nWRITE / cl\_abap\_conv\_codepage=>create\_out( codepage = \`UTF-8\` \\n )->convert( text ). DATA: text TYPE string VALUE '0123456789ABCDEF', \\n col TYPE i VALUE 25, \\n len TYPE i VALUE 5. \\n\\ \\nWRITE text. \\nWRITE /5(10) text. \\nWRITE AT col(len) text. DATA: carrid TYPE spfli-carrid, \\n connid TYPE spfli-connid. \\n\\ \\nWRITE: 10 'Carrier', 40 'Connection'. \\nULINE. \\n\\ \\nSELECT carrid, connid \\n FROM spfli \\n INTO (@carrid, @connid). \\n WRITE: / carrid UNDER 'Carrier', \\n connid UNDER 'Connection'. \\nENDSELECT. WRITE: 'No' NO-GAP, 'Gap'. WRITE: (10) sy-datum QUICKINFO 'Date of list creation', \\n (8) sy-uzeit QUICKINFO 'Time of list creation'. **Data Type** `*` `**` `c` Number of columns needed in the list to display the entire content. Trailing blanks are ignored. This length can be greater than the [implicit length](ABENWRITE_FORMATS.html). Doubled length of the data object. `string` [implicit length](ABENWRITE_OUTPUT_LENGTH.html) Doubled length of contained characters. `n`, `x`, `xstring`, `utclong` [Implicit length](ABENWRITE_OUTPUT_LENGTH.html) \\ [implicit length](ABENWRITE_OUTPUT_LENGTH.html) `d` 10 10 `t` 8 for 24-hour format, 11 for 12-hour format 8 without using the addition [`ENVIRONMENT TIME FORMAT`](ABAPWRITE_TO_OPTIONS.html), 11 using this addition (`b`, `s`), `f`, `i`, `int8`, `p` Length required to output the current value including thousands separators. The value used here is the value after the application of the possible additions [`CURRENCY`](ABAPWRITE_TO_OPTIONS.html), [`DECIMALS`](ABAPWRITE_TO_OPTIONS.html), [`NO-SIGN`](ABAPWRITE_TO_OPTIONS.html), [`ROUND`](ABAPWRITE_TO_OPTIONS.html), or [`UNIT`](ABAPWRITE_TO_OPTIONS.html). Length required to output the maximum possible values, including signs and thousands separators. The value used here is the value after the application of the possible additions [`CURRENCY`](ABAPWRITE_TO_OPTIONS.html), [`DECIMALS`](ABAPWRITE_TO_OPTIONS.html), [`NO-SIGN`](ABAPWRITE_TO_OPTIONS.html), [`ROUND`](ABAPWRITE_TO_OPTIONS.html) or [`UNIT`](ABAPWRITE_TO_OPTIONS.html). `decfloat16`, `decfloat34` The same as for `**` applies here. However, leading and trailing blanks are removed. 24 or 26. These are the predefined output lengths that can also include thousands separators. If the values are too large, exceptions may be raised if the format `O_SIGN_AS_POSTFIX` from class `CL_ABAP_FORMAT` is specified after [`STYLE`](ABAPWRITE_TO_OPTIONS.html). abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html