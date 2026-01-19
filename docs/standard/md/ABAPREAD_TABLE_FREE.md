---
title: "ABAPREAD_TABLE_FREE"
description: |
  ABAPREAD_TABLE_FREE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_TABLE_FREE.htm"
abapFile: "ABAPREAD_TABLE_FREE.html"
keywords: ["insert", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "field-symbol", "ABAPREAD", "TABLE", "FREE"]
---

[Short Reference](ABAPREAD_TABLE_ITAB_SHORTREF.html)

\\ ``... WITH KEY \{\ [`comp1`](ABENITAB_COMPONENTS.html) = operand1 [`comp2`](ABENITAB_COMPONENTS.html) = operand2 ... [BINARY SEARCH]\ \}``\\ 
           ``|\ \{\ [`keyname`](ABENKEYNAME.html) COMPONENTS [`comp1`](ABENITAB_COMPONENTS.html) = operand1 [`comp2`](ABENITAB_COMPONENTS.html) = operand2 ... \} ...``

[1. `... WITH KEY comp1 = operand1 comp2 = operand2 ... [BINARY SEARCH] ...`](#ABAP_VARIANT_1@1@)

[2. `... WITH KEY keyname COMPONENTS comp1 = operand1 comp2 = operand2 ... .`](#ABAP_VARIANT_2@1@)

Specifies a free search key. The free search key can be defined freely or linked to the specification of a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) in [`keyname`](ABENKEYNAME.html).

[`... BINARY SEARCH`](#ABAP_ONE_ADD@1@)

After the addition `WITH KEY`, components `comp1 comp2 ...` can be specified as search keys, in accordance with the rules [here](ABENITAB_COMPONENTS.html). An operand `operand1 operand2 ...` is assigned to each of these search keys and must be [compatible](ABENCOMPATIBLE_GLOSRY.html) with the data type of the component or convertible to it. No duplicate or overlapping keys may be specified.

`operand1 operand2 ...` are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html). If necessary, the content of the operands is converted to the data type of the components before the comparison. If an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) is specified, the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) is determined from its operands and the data type of the component. If necessary, the result is converted to the data type of the component.

The system searches for the first line of the internal table whose values in the specified components or their subareas or attributes match the values in the assigned operands `operand1 operand2 ...`

The search is performed as follows for the individual table categories if `BINARY SEARCH` is not specified:

If the [`name`](ABENITAB_COMPONENTS.html) field of a component `comp` is initial, the first line that matches the remaining search key is read. If all `name` fields are initial, the first line of the internal table is read.

When a line is found, the system field `sy-tabix` is set according to the table category:

If no line is found, `sy-tabix` is undefined (-1), except if the complete table key or the addition `BINARY SEARCH` was specified in a sorted table. In this case, `sy-tabix` is set to the line number of the entry in the primary table index in front of which the line would be inserted using `INSERT ... INDEX ...`, to preserve the sort.

The internal table `html_viewer_tab` contains references to HTML [controls](ABENCONTROL_GLOSRY.html). The `READ` statement reads the reference that points to a HTML control in a specific container control.

The addition `BINARY SEARCH` searches the table binarily instead of linearly. For larger tables (from approximately 100 entries), this can significantly reduce runtime. The table must, however, be sorted in ascending order by the components specified in the search key. The priority of the sort order must match exactly the order of the components in the search key. If this requirement is not met, the correct line is not usually found.

Reading of a table line with `BINARY SEARCH` after the table has been sorted accordingly. However, if possible `sflight_tab` should be created as a sorted table or given a sorted secondary key afterwards (see example below).

[`keyname`](ABENKEYNAME.html) can be used to specify a [table key](ABENTABLE_KEY_GLOSRY.html). The same applies when specifying the components as in the variant without key specifications.

If a [secondary table key](ABENSECONDARY_TABLE_INDEX_GLOSRY.html) is specified in `keyname`, the behavior is as follows:

When a line is found, the system field `sy-tabix` is set with respect to the specified secondary table key:

If no line is found, `sy-tabix` is undefined (-1), except when it is covered completely by a sorted secondary key. In this case, `sy-tabix` is set to the line number of the entry in the secondary table index in front of which the line would be inserted using `INSERT ... INDEX ...`, to preserve the sort.

If the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is specified in `keyname` using its name `primary_key`, the behavior is the same as in the variant without key specifications.

Reading of a table line using the sorted secondary table key `dbkey`. The read is now performed automatically using a binary search, as in the example above where `BINARY SEARCH` is specified explicitly, and an explicit sort is not necessary.

The `DEMO_SECONDARY_KEYS` program demonstrates the specification of a secondary table key compared to the completely free specification of a key and the resulting performance benefits.

-   [Table expressions](ABENTABLE_EXPRESSION_GLOSRY.html) allow corresponding reads to also be performed in operand positions. All syntax variants shown here can be mapped to [line specifications](ABENTABLE_EXP_ITAB_LINE.html) in table expressions.
-   Outside of classes, two obsolete variants of the addition [`WITH KEY`](ABAPREAD_TABLE_OBSOLET.html) are possible.

-   [Standard tables](ABENSTANDARD_TABLE_GLOSRY.html) are searched linearly.
-   [Sorted tables](ABENSORTED_TABLE_GLOSRY.html) are searched binarily if the specified search key is an initial part of the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) or includes this key, Otherwise the search is linear.
-   [Hashed tables](ABENHASHED_TABLE_GLOSRY.html) are searched using the hash algorithm if the specified search key completely covers the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html). Otherwise the search is linear.

-   For index tables to the number of lines found in the primary table index
-   For hashed tables to the value 0.

-   If the line type of the internal table is not known statically, the components of the search key can only be specified dynamically and not directly.
-   If the search key includes components that supply a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) of the internal table without the key being specified in `keyname`, a warning is raised by the syntax check.
-   If the `BINARY SEARCH` addition is used, and there are multiple hits, either due to an incompletely specified search key or duplicate table entries, the first hit based on the sequence of lines is the primary index, that is, the line with the lowest line number, is always returned.
-   If `WITH KEY` is used, it should be noted that the values of incompatible operands `operand1 operand2 ...` are converted to the data type of the columns before the comparison. This means that the [comparison rules](ABENLOGEXP_RULES.html) do not apply to incompatible data types. If a `WHERE` condition is used in the statements [`LOOP`](ABAPLOOP_AT_ITAB_COND.html), [`MODIFY`](ABAPMODIFY_ITAB_MULTIPLE.html), and [`DELETE`](ABAPDELETE_ITAB_LINES.html), however, the comparison rules apply, which can produce different results.
-   Due to the conversion before the comparison, [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html) can be specified as operands for character-like types of type `c` or `string` and the corresponding special [conversion rules](ABENCONVERSION_ENUMERATED.html) apply, which is not possible in a `WHERE` condition. This type of conversion produces a message from the extended syntax check.
-   To avoid unexpected results after a conversion, `operand1`, `operand2`, ... must be compatible with the data type of the component.

-   The addition `BINARY SEARCH` is recommended for standard tables where no appropriate [sorted](ABENSORTED_KEY_GLOSRY.html)\\ [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) is defined.
-   The addition `BINARY SEARCH` can only be specified for [sorted tables](ABENSORTED_TABLE_GLOSRY.html) if the specified search key is in the correct order and is an initial part of the table key, or includes the key. It has no special effect in this situation.
-   The addition `BINARY SEARCH` cannot be specified for [hashed tables](ABENHASHED_TABLE_GLOSRY.html).

-   If the addition `BINARY SEARCH` is used, the statement `READ` always performs an index access, and can therefore only be used for tables with the appropriate type. [Formal parameters](ABENFORMAL_PARAMETER_GLOSRY.html) or a [field symbol](ABENFIELD_SYMBOL_GLOSRY.html) must have at least the generic type `INDEX TABLE`.
-   The addition `BINARY SEARCH` is based on standard sorting according to the size of the components. Text sorting with the addition `AS TEXT` of the statement [`SORT`](ABAPSORT_ITAB.html) can produce unexpected results, since the result for text-like components no longer depends on the binary representation, but on the [locale](ABENLOCALE_GLOSRY.html) of the current [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html).
-   The method `READ_BINARY_SEARCH_CHECK` of the class `CL_ABAP_ITAB_UTILITIES` can be used to check whether the required sorting exists for the addition `BINARY SEARCH`.
-   When the addition `BINARY SEARCH` is used, if there are multiple hits due to an incomplete search key or duplicate entries in the table, the first hit according to the order of the lines in the primary index is returned. This is the line with the lowest line number.
-   Instead of using the addition `BINARY SEARCH`, it is recommended that work is done either with [sorted tables](ABENSORTED_TABLE_GLOSRY.html) or with [sorted](ABENSORTED_KEY_GLOSRY.html)\\ [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html).

-   If a [sorted key](ABENSORTED_KEY_GLOSRY.html) is specified, the specified search key must be an initial part of the secondary table key or include it. The associated [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html) is then searched binarily. If multiple entries are found when using a non-unique search key, the first hit, that is, the line with the lowest line number, is read in the secondary index. Additional search criteria can also be specified that are also evaluated.
-   If a [hash key](ABENHASH_KEY_GLOSRY.html) is specified, the specified search key must include the secondary table key and the hash algorithm is used. Additional search criteria can also be specified that are also evaluated.

-   For sorted secondary keys to the number of the found line in the associated secondary table index
-   For hash keys to the value 0.

-   The specification of free keys differs when a secondary key is used from the [`table_key`](ABAPREAD_TABLE_KEY.html) variant for specifying the table key in that additional conditions can be specified in the search key. These conditions can also be evaluated and reduce the length of the hit list. For secondary sorted keys, however, free search keys make it possible to specify an incomplete search key, which can make the hit list longer.
-   If a secondary table key is used, when the value of `sy-tabix` is used subsequently as an index specification in other processing statements for the internal table, it must be ensured that the same table key is used.

DATA: container TYPE REF TO cl\_gui\_container, \\n html\_viewer TYPE REF TO cl\_gui\_html\_viewer. \\n\\ \\nDATA html\_viewer\_tab LIKE TABLE OF html\_viewer WITH EMPTY KEY. \\n\\ \\n... \\n\\ \\nCREATE OBJECT html\_viewer EXPORTING parent = container. \\nAPPEND html\_viewer TO html\_viewer\_tab. \\n\\ \\n... \\n\\ \\nREAD TABLE html\_viewer\_tab \\n WITH KEY table\_line->parent = container \\n INTO html\_viewer. \\n\\ \\n... DATA sflight\_tab TYPE STANDARD TABLE OF sflight WITH EMPTY KEY. \\n\\ \\n... \\n\\ \\nSORT sflight\_tab BY carrid connid fldate. \\n\\ \\nREAD TABLE sflight\_tab \\n WITH KEY carrid = 'LH' connid = '400' fldate = '20240627' \\n BINARY SEARCH \\n ASSIGNING FIELD-SYMBOL(). DATA sflight\_tab TYPE STANDARD TABLE OF sflight WITH EMPTY KEY \\n WITH UNIQUE SORTED KEY dbkey \\n COMPONENTS carrid connid fldate. \\n\\ \\n... \\n\\ \\nREAD TABLE sflight\_tab WITH KEY dbkey \\n COMPONENTS carrid = 'LH' connid = '400' fldate = '20240916' \\n ASSIGNING FIELD-SYMBOL(). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapread\_table.html