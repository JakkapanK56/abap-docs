---
title: "ABAPREAD_TABLE_KEY"
description: |
  ABAPREAD_TABLE_KEY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_TABLE_KEY.htm"
abapFile: "ABAPREAD_TABLE_KEY.html"
keywords: ["select", "insert", "delete", "loop", "do", "if", "case", "try", "class", "data", "types", "internal-table", "ABAPREAD", "TABLE", "KEY"]
---

[Short Reference](ABAPREAD_TABLE_ITAB_SHORTREF.html)

``... \{ FROM wa [USING KEY [`keyname`](ABENKEYNAME.html)]\ \}``\\ 
  ``|\ \{ WITH TABLE KEY [[`keyname`](ABENKEYNAME.html) COMPONENTS]``\\ 
                     `\{comp_name1|(name1)\} = operand1`\\ 
                     `\{comp_name2|(name2)\} = operand2`\\ 
                     `...                             \} ...`

[1. `... FROM wa [USING KEY keyname]`](#ABAP_ALTERNATIVE_1@2@)

[2. `... WITH TABLE KEY [keyname COMPONENTS] ...`](#ABAP_ALTERNATIVE_2@2@)

Specifies a table key as a search key. The primary table key or a secondary table key can be specified. The values can be declared either implicitly in a work area `wa` behind `FROM` or explicitly by listing the components of the table key behind `TABLE KEY`.

When the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is used, the table categories are accessed as follows:

When the [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) is used, a binary search is used for a [sorted key](ABENSORTED_KEY_GLOSRY.html) and a [hash algorithm](ABENHASH_ALGORITHM_GLOSRY.html) for a [hash key](ABENHASH_KEY_GLOSRY.html).

When a line is found, the system field `sy-tabix` is set as specified by the table key used:

If no line is found, `sy-tabix` is set to the line number of the entry in the associated table index in the case of a sorted key, in front of which the line searched for would be inserted using `INSERT ... INDEX ...`, to preserve the sort.

It should be noted that the system field [`sy-tabix`](ABAPREAD_TABLE.html) is always set with reference to the table key used. If the value of the `sy-tabix` is used as an index specification after the `READ` statement is executed in another processing statement for the internal table, the same table key should be used there. It should be noted here that the primary index is always addressed if there is no explicit key specification.

For `wa`, a work area compatible to the line type of the internal table must be specified. It is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). The first line found in the internal table is processed whose values in the columns of the table key used match those of the corresponding components of `wa`. If the key fields in `wa` are empty, no entries are processed.

If the `USING KEY` addition is not specified, the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is used. If the `USING KEY` addition is specified, the table key specified in [`keyname`](ABENKEYNAME.html) is used.

If the [primary table key](ABENPRIMARY_KEY_GLOSRY.html) is used to access a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) and the key is [empty](ABENITAB_EMPTY_KEY.html), the first line of the internal table is read. If this is known statically, the syntax check produces a warning.

Reading of lines of the internal table `spfli_tab` using the primary table key and a secondary key `city_key`. The `READ` statement evaluates the `spfli_key` work area.

Each component of the table key used must be listed either directly as `comp_name1 comp_name2 ...` or as a parenthesized character-like data object `name1 name2 ...`, which contains the name of the component when the statement is executed. `name` is not case-sensitive. If `name` only contains blanks, this component specification is ignored when the statement is executed. An operand `operand1 operand2 ...`\\ [compatible](ABENCOMPATIBLE_GLOSRY.html) with the data type of the component or convertible to it must be assigned to every component. The first line found in the internal table, whose values in the column of the table key used correspond with the values in the operands `operand1 operand2 ...` assigned, is processed. No duplicate or overlapping keys, nor columns that are not components of the table key can be specified.

`operand1 operand2 ...` are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html). If necessary, the content of the operands is converted to the data type of the components before the comparison. If a conversion error occurs here, the exception cannot be handled using `CX_SY_CONVERSION_ERROR` and the associated runtime error occurs instead. If an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) is specified, the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) is determined from its operands and the data type of the component. If necessary, the result is converted to the data type of the component.

If the addition `COMPONENTS` is not specified, the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is used. If the addition `COMPONENTS` is specified, the table key specified in [`keyname`](ABENKEYNAME.html) is used.

Reading of lines of the internal table `spfli_tab` using the primary key and a secondary table key `city_key`. The components of the table keys are specified explicitly in the `READ` statement.

[Key Accesses](ABENREAD_ITAB_USING_KEY_ABEXA.html)

-   [Standard tables](ABENSTANDARD_TABLE_GLOSRY.html) are searched linearly.
-   [Sorted tables](ABENSORTED_TABLE_GLOSRY.html) are searched binarily.
-   [Hashed tables](ABENHASHED_TABLE_GLOSRY.html) are searched using the hash algorithm.

-   For sorted keys to the number of lines found in the associated table index.
-   For hash keys to the value 0.

-   When using the primary table key, it should be noted that this key can also be the [standard key](ABENSTANDARD_KEY_GLOSRY.html), which can have unexpected consequences:

-   For structured line types, the standard key covers all character-like and byte-like components.
-   The standard key of a standard table can be [empty](ABENITAB_EMPTY_KEY.html).

-   Outside of classes, the specification `FROM wa` can be omitted if the internal table has an identically named `itab`\\ [header line](ABENHEADER_LINE_GLOSRY.html). The statement then does not evaluate the content of the primary table key in the header line, and it evaluates the content of the [standard key](ABENSTANDARD_KEY_GLOSRY.html) instead. Initial fields are handled in a special way (see [`READ TABLE - obsolete_key`](ABAPREAD_TABLE_OBSOLET.html)).

-   The [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line` can be specified as a component for tables with an unstructured line type and for which the entire table line is defined as a table key.
-   If `WITH TABLE KEY` is used, it should be noted that the values of incompatible operands `operand1`, `operand2`, ... are converted to the data type of the columns before the comparison, and therefore the [comparison rules](ABENLOGEXP_RULES.html) do not apply to incompatible data types. If a `WHERE` condition is used in the statements [`LOOP`](ABAPLOOP_AT_ITAB_COND.html), [`MODIFY`](ABAPMODIFY_ITAB_MULTIPLE.html), and [`DELETE`](ABAPDELETE_ITAB_LINES.html), however, the comparison rules do apply, which can produce different results.
-   Due to the conversion before the comparison, [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html) can be specified as operands for character-like types of type `c` or `string` and the corresponding special [conversion rules](ABENCONVERSION_ENUMERATED.html) apply, which is not possible in a `WHERE` condition. Conversions of this type produce a message from the extended syntax check.
-   To avoid unexpected results after a conversion, `operand1`, `operand2`, ... must be compatible with the data type of the component.
-   If the line type of the internal table is not known statically, the components of the key can only be specified dynamically and not directly.
-   A [customizing include](ABENCUSTOMIZING_INCLUDE_GLOSRY.html) must not be specified as a component if it is empty.

-   Using the variant [`WITH KEY keyname COMPONENTS`](ABAPREAD_TABLE_FREE.html) with specifying all key fields has the same effect as using `WITH TABLE KEY keyname`. In the latter variant it is ensured syntactically that all key fields are specified.
-   [Table expressions](ABENTABLE_EXPRESSION_GLOSRY.html) allow corresponding reads to also be performed in operand positions. The syntax shown here can be mapped to a [line specification](ABENTABLE_EXP_ITAB_LINE.html) in a table expression.

DATA: \\n spfli\_tab TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid \\n WITH NON-UNIQUE SORTED KEY city\_key \\n COMPONENTS cityfrom cityto, \\n spfli\_key LIKE LINE OF spfli\_tab. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @spfli\_tab. \\n\\ \\nspfli\_key = VALUE #( carrid = 'LH' connid = '0400' ). \\nREAD TABLE spfli\_tab FROM spfli\_key \\n ASSIGNING FIELD-SYMBOL(). \\nIF sy-subrc = 0. \\n ... \\nENDIF. \\n\\ \\nspfli\_key = VALUE #( cityfrom = 'FRANKFURT' cityto = 'BERLIN' ). \\nREAD TABLE spfli\_tab FROM spfli\_key USING KEY city\_key \\n ASSIGNING . \\nIF sy-subrc = 0. \\n ... \\nENDIF. DATA: \\n spfli\_tab TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid \\n WITH NON-UNIQUE SORTED KEY city\_key \\n COMPONENTS cityfrom cityto, \\n spfli\_key LIKE LINE OF spfli\_tab. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @spfli\_tab. \\n\\ \\nREAD TABLE spfli\_tab \\n WITH TABLE KEY primary\_key \\n COMPONENTS carrid = 'LH' connid = '400' \\n ASSIGNING FIELD-SYMBOL(). \\nIF sy-subrc = 0. \\n ... \\nENDIF. \\n\\ \\nREAD TABLE spfli\_tab \\n WITH TABLE KEY city\_key \\n COMPONENTS cityfrom = 'FRANKFURT' cityto = 'BERLIN' \\n ASSIGNING . \\nIF sy-subrc = 0. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapread\_table.html