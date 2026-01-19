---
title: "ABAPDELETE_ITAB_KEY"
description: |
  ABAPDELETE_ITAB_KEY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDELETE_ITAB_KEY.htm"
abapFile: "ABAPDELETE_ITAB_KEY.html"
keywords: ["select", "delete", "loop", "do", "while", "if", "case", "try", "class", "data", "types", "internal-table", "ABAPDELETE", "ITAB", "KEY"]
---

[Short Reference](ABAPDELETE_ITAB_SHORTREF.html)

``... TABLE itab \{ FROM wa [USING KEY [`keyname`](ABENKEYNAME.html)]\ \}\               |\ \{ WITH TABLE KEY [[`keyname`](ABENKEYNAME.html) COMPONENTS]\                                  \{comp_name1|(name1)\} = operand1                                  \{comp_name2|(name2)\} = operand2                                   ...                           \} ...``

[1. `... TABLE itab FROM wa [USING KEY keyname]`](#ABAP_ALTERNATIVE_1@2@)

[2. `... TABLE itab WITH TABLE KEY [keyname COMPONENTS] ...`](#ABAP_ALTERNATIVE_2@2@)

Specifies a table key as a search key. The primary table key or a secondary table key can be specified. The values can be declared either implicitly in a work area `wa` behind `FROM` or explicitly by listing the components of the table key behind `TABLE KEY`.

When the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is used, the table categories are accessed as follows:

When the [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) is used, a binary search is used for a [sorted key](ABENSORTED_KEY_GLOSRY.html) and a [hash algorithm](ABENHASH_ALGORITHM_GLOSRY.html) for a [hash key](ABENHASH_KEY_GLOSRY.html).

When deleting a line from a standard table using a secondary key, the entire runtime depends linearly on the number of table lines. Although the lines to be deleted are found quickly, when updating the primary index, the entry to be deleted must be searched linearly.

For `wa`, a work area compatible to the line type of the internal table must be specified. It is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). The first line found in the internal table is processed whose values in the columns of the table key used match those of the corresponding components of `wa`. If the key fields in `wa` are empty, no entries are processed.

If the `USING KEY` addition is not specified, the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is used. If the `USING KEY` addition is specified, the table key specified in [`keyname`](ABENKEYNAME.html) is used.

If the [primary table key](ABENPRIMARY_KEY_GLOSRY.html) is used to access a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) and the key is [empty](ABENITAB_EMPTY_KEY.html), the first line of the internal table is deleted. If this is known statically, the syntax check produces a warning.

Deletion of the table line that has the same value as the input key field `carrid` in the key field `carrid` using a work area constructed using the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html).

This example demonstrates an inconvenient way of deleting all flight connections between two specified cities using a secondary table key. In these cases, it is usually best to use a [`WHERE` condition](ABAPDELETE_ITAB_LINES.html).

Each component of the table key used must be listed either directly as `comp_name1 comp_name2 ...` or as a parenthesized character-like data object `name1 name2 ...`, which contains the name of the component when the statement is executed. `name` is not case-sensitive. If `name` only contains blanks, this component specification is ignored when the statement is executed. An operand `operand1 operand2 ...`\\ [compatible](ABENCOMPATIBLE_GLOSRY.html) with the data type of the component or convertible to it must be assigned to every component. The first line found in the internal table, whose values in the column of the table key used correspond with the values in the operands `operand1 operand2 ...` assigned, is processed. No duplicate or overlapping keys, nor columns that are not components of the table key can be specified.

`operand1 operand2 ...` are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html). If necessary, the content of the operands is converted to the data type of the components before the comparison. If a conversion error occurs here, the exception cannot be handled using `CX_SY_CONVERSION_ERROR` and the associated runtime error occurs instead. If an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) is specified, the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) is determined from its operands and the data type of the component. If necessary, the result is converted to the data type of the component.

If the addition `COMPONENTS` is not specified, the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is used. If the addition `COMPONENTS` is specified, the table key specified in [`keyname`](ABENKEYNAME.html) is used.

Deletion of the table line that has the same value as the input field `carrid` in the key field `carrid` by specifying the primary table key.

Deletion of all flight connections between two specified cities using a secondary table key. In these cases, it is usually best to use a [`WHERE` condition](ABAPDELETE_ITAB_LINES.html).

-   [Standard tables](ABENSTANDARD_TABLE_GLOSRY.html) are searched linearly.
-   [Sorted tables](ABENSORTED_TABLE_GLOSRY.html) are searched binarily.
-   [Hashed tables](ABENHASHED_TABLE_GLOSRY.html) are searched using the hash algorithm.

-   When using the primary table key, it should be noted that this key can be the [standard key](ABENSTANDARD_KEY_GLOSRY.html), which can also have unexpected consequences:

-   For structured line types, the standard key covers all character-like and byte-like components.
-   The standard key of a standard table can be [empty](ABENITAB_EMPTY_KEY.html).

-   Outside of classes, an [obsolete short form](ABENITAB_SHORT_FORMS.html) is also possible where `FROM wa` can be omitted if the internal table has an identically named [header line](ABENHEADER_LINE_GLOSRY.html)\\ `itab`. The statement then uses the header line as the work area implicitly. Furthermore, `USING KEY` cannot be specified without `FROM wa`.

-   The [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line` can be specified as a component for tables with an unstructured line type and for which the entire table line is defined as a table key.
-   If `WITH TABLE KEY` is used, it should be noted that the values of incompatible operands `operand1`, `operand2`, ... are converted to the data type of the columns before the comparison, and therefore the [comparison rules](ABENLOGEXP_RULES.html) do not apply to incompatible data types. If a `WHERE` condition is used in the statements [`LOOP`](ABAPLOOP_AT_ITAB_COND.html), [`MODIFY`](ABAPMODIFY_ITAB_MULTIPLE.html), and [`DELETE`](ABAPDELETE_ITAB_LINES.html), however, the comparison rules do apply, which can produce different results.
-   Due to the conversion before the comparison, [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html) can be specified as operands for character-like types of type `c` or `string` and the corresponding special [conversion rules](ABENCONVERSION_ENUMERATED.html) apply, which is not possible in a `WHERE` condition. Conversions of this type produce a message from the extended syntax check.
-   To avoid unexpected results after a conversion, `operand1`, `operand2`, ... must be compatible with the data type of the component.
-   If the line type of the internal table is not known statically, the components of the key can only be specified dynamically and not directly.
-   A [customizing include](ABENCUSTOMIZING_INCLUDE_GLOSRY.html) must not be specified as a component if it is empty.

DATA carrid TYPE scarr-carrid. \\ncl\_demo\_input=>request( CHANGING field = carrid ). \\n\\ \\nDATA scarr\_tab TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrid. \\nSELECT \* \\n FROM scarr \\n INTO TABLE @scarr\_tab. \\n\\ \\nDELETE TABLE scarr\_tab FROM VALUE #( carrid = to\_upper( carrid ) ). DATA spfli\_tab TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid \\n WITH NON-UNIQUE SORTED KEY skey COMPONENTS cityfrom \\n cityto. \\nSELECT \* \\n FROM spfli \\n INTO TABLE @spfli\_tab. \\n\\ \\nDATA subrc TYPE sy-subrc. \\nWHILE subrc = 0. \\n DELETE TABLE spfli\_tab FROM VALUE #( cityfrom = 'FRANKFURT' \\n cityto = 'NEW YORK' ) \\n USING KEY skey. \\n subrc = sy-subrc. \\nENDWHILE. DATA carrid TYPE scarr-carrid. \\ncl\_demo\_input=>request( CHANGING field = carrid ). \\n\\ \\nDATA scarr\_tab TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrid. \\nSELECT \* \\n FROM scarr \\n INTO TABLE @scarr\_tab. \\n\\ \\nDELETE TABLE scarr\_tab WITH TABLE KEY carrid = carrid. DATA spfli\_tab TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid \\n WITH NON-UNIQUE SORTED KEY skey COMPONENTS cityfrom cityto. \\nSELECT \* \\n FROM spfli \\n INTO TABLE @spfli\_tab. \\n\\ \\nDATA subrc TYPE sy-subrc. \\nWHILE subrc = 0. \\n DELETE TABLE spfli\_tab WITH TABLE KEY skey \\n COMPONENTS cityfrom = 'FRANKFURT' \\n cityto = 'NEW YORK'. \\n subrc = sy-subrc. \\nENDWHILE. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapdelete\_itab.html abapdelete\_itab\_line.html