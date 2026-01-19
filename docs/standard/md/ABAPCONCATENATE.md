---
title: "ABAPCONCATENATE"
description: |
  ABAPCONCATENATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCONCATENATE.htm"
abapFile: "ABAPCONCATENATE.html"
keywords: ["insert", "loop", "do", "while", "if", "data", "types", "internal-table", "ABAPCONCATENATE"]
---

[Short Reference](ABAPCONCATENATE_SHORTREF.html)

`CONCATENATE \{dobj1 dobj2 ...\}|\{LINES OF itab\}`\\ 
            `INTO result`\\ 
            `[IN \{CHARACTER|BYTE\} MODE]`\\ 
            `[SEPARATED BY sep]`\\ 
            `[RESPECTING BLANKS].`

[1. `... IN \{CHARACTER|BYTE\} MODE`](#ABAP_ADDITION_1@3@)

[2. `... SEPARATED BY sep`](#ABAP_ADDITION_2@3@)

[3. `... RESPECTING BLANKS`](#ABAP_ADDITION_3@3@)

Concatenates either the content of the data objects `dobj1, dobj2, ...` or the lines of the internal table `itab` in accordance with their order and assigns them to the target field `result`. `itab` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). The following can be specified for the target field `result`:

If the target field `result` has a fixed length and this is greater than the required length, it is padded on the right with blanks or hexadecimal 0. If the target field is too short, the concatenation is truncated on the right. If the target field is a string, its length is adjusted accordingly.

In character string processing, trailing blanks are usually ignored by default for data objects `dobj1, dobj2 ...` or lines in the internal table `itab` of fixed length.

The example shows that a concatenation with `CONCATENATE` has the same result as a concatenation with the [concatenation operator](ABENCONCATENATION_OPERATOR_GLOSRY.html)\\ [`&&`](ABENSTRING_OPERATORS.html) or via [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html).

The optional addition `IN \{CHARACTER|BYTE\} MODE` determines whether [character string or byte string processing](ABENSTRING_PROCESSING_STATEMENTS.html) is performed. If the addition is not specified, character string processing is performed. Depending on the processing type, the data objects `dobj1, dobj2 ...`, the lines of the internal table `itab`, and the separator `sep` must be [character-like](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html) or [byte-like](ABENBYTE_LIKE_DATA_OBJECT_GLOSRY.html).

Concatenation of individual bytes from an internal table in a byte string.

The addition `SEPARATED BY` is used to insert the content of data object `sep` between the content of the consecutive data objects `dobj1, dobj2 ...`. In character string processing, trailing blanks are respected for separators `sep` of fixed length.

After the first `CONCATENATE` statement, `result` contains *Wehaveallthetimeintheworld*, and after the second it contains *We have all the time in the world*.

The addition `RESPECTING BLANKS` is only allowed in character string processing and respects the trailing blanks for data objects `dobj1, dobj2 ...` or lines of the internal table `itab`. If this addition is not used, the blanks are respected for data type `string` only.

The addition `RESPECTING BLANKS` of the statement `CONCATENATE` can be used to assign any character strings `text` to target fields `str` of type `string` while respecting trailing blanks: `CLEAR str.`\\ `CONCATENATE str text INTO str RESPECTING BLANKS.`

After the first `CONCATENATE` statement, `result` contains *When\_the\_music\_is\_over*, and after the second it contains *When\_\_\_\_\_\_the\_\_\_\_\_\_\_music\_\_\_\_\_is\_\_\_\_\_\_\_\_ over\_\_\_\_\_\_*. The underscores here represent blanks.

-   An existing character-like or byte-like variable to which the result of the concatenation can be converted.
-   An inline declaration with [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). If `IN CHARACTER MODE` is used, the declared variable is of the type `string`; if `IN BYTE MODE` is used, it is of the type `xstring`.

-   Instead of `CONCATENATE`, [string expressions](ABAPCOMPUTE_STRING.html) can usually also be used for elementary fields, where concatenations are possible using either [concatenation operators](ABENCONCATENATION_OPERATOR_GLOSRY.html)\\ `&&` or [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html) in [string templates](ABENSTRING_TEMPLATES.html). The built-in function [`concat_lines_of`](ABENCONCATENATION_FUNCTIONS.html) can be used to concatenate lines of an internal table.
-   The ABAP runtime framework performs an internal optimization to reduce the number of reassignments if new fragments are appended to an existing [string](ABENSTRING_GLOSRY.html) on the right within a loop. If the string or parts of the string itself are appended, no optimization takes place, which causes a squared increase in runtime in loops. This can be prevented by using helper variables. See also the [Performance Note](ABENSTRING_EXPR_PERFO.html) for string expressions.

CONCATENATE 'a' 'b' 'c' INTO FINAL(str). \\nASSERT str = 'a' && 'b' && 'c'. \\nASSERT str = |\\{ 'a' \\}\\{ 'b' \\}\\{ 'c' \\}|. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES hex TYPE x LENGTH 1. \\nDATA itab TYPE TABLE OF hex WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( \\n ( CONV hex( '48' ) ) \\n ( CONV hex( '65' ) ) \\n ( CONV hex( '6C' ) ) \\n ( CONV hex( '6C' ) ) \\n ( CONV hex( '6F' ) ) ). \\n\\ \\nCONCATENATE LINES OF itab INTO FINAL(xstr) IN BYTE MODE. \\n\\ \\nout->write( \\n cl\_abap\_conv\_codepage=>create\_in( )->convert( xstr ) ). \\n\\ \\nout->display( ). DATA: t1 TYPE c LENGTH 10 VALUE 'We', \\n t2 TYPE c LENGTH 10 VALUE 'have', \\n t3 TYPE c LENGTH 10 VALUE 'all', \\n t4 TYPE c LENGTH 10 VALUE 'the', \\n t5 TYPE c LENGTH 10 VALUE 'time', \\n t6 TYPE c LENGTH 10 VALUE 'in', \\n t7 TYPE c LENGTH 10 VALUE 'the', \\n t8 TYPE c LENGTH 10 VALUE 'world'. \\n\\ \\nCONCATENATE t1 t2 t3 t4 t5 t6 t7 t8 \\n INTO DATA(result). \\n... \\nCONCATENATE t1 t2 t3 t4 t5 t6 t7 t8 \\n INTO result SEPARATED BY space. TYPES text TYPE c LENGTH 10. \\nDATA itab TYPE TABLE OF text. \\n\\ \\nAPPEND 'When' TO itab. \\nAPPEND 'the' TO itab. \\nAPPEND 'music' TO itab. \\nAPPEND 'is' TO itab. \\nAPPEND 'over' TO itab. \\n\\ \\nCONCATENATE LINES OF itab INTO DATA(result) SEPARATED BY space. \\n... \\nCONCATENATE LINES OF itab INTO result RESPECTING BLANKS. `sy-subrc` **Meaning** 0 The content of all data objects `dobj1, dobj2 ...` or `itab` lines was passed to the target field `result`. 4 The content of the data objects `dobj1, dobj2 ...` or `itab` lines could not be passed completely, since `result` is too short. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html