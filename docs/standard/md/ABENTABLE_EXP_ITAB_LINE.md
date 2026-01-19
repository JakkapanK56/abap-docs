---
title: "ABENTABLE_EXP_ITAB_LINE"
description: |
  ABENTABLE_EXP_ITAB_LINE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTABLE_EXP_ITAB_LINE.htm"
abapFile: "ABENTABLE_EXP_ITAB_LINE.html"
keywords: ["select", "loop", "do", "if", "try", "catch", "data", "internal-table", "ABENTABLE", "EXP", "ITAB", "LINE"]
---

``... \{\ [KEY [`keyname`](ABENKEYNAME.html) INDEX] idx \}``\\ 
  ``|\ \{\ [KEY [`keyname`](ABENKEYNAME.html)\ [COMPONENTS]]\ [`comp1`](ABENITAB_COMPONENTS.html) = operand1                                   [`comp2`](ABENITAB_COMPONENTS.html) = operand2                                   ...  \}``\\ 
  ``|\ \{ TABLE KEY [`keyname`](ABENKEYNAME.html)\ [COMPONENTS]\ \{comp_name1|(name1)\} = operand1                                       \{comp_name2|(name2)\} = operand2                                        ... \} ...``

[1. `... [KEY keyname INDEX] idx`](#ABAP_ALTERNATIVE_1@2@)

[2. `... [KEY keyname [COMPONENTS]] comp1 = operand1 comp2 = operand2 ...`](#ABAP_ALTERNATIVE_2@2@)

[3. `... TABLE KEY keyname [COMPONENTS] ...`](#ABAP_ALTERNATIVE_3@2@)

Specifies a table line in the square brackets of a [table expression](ABENTABLE_EXPRESSIONS.html). The following reads are possible:

[`table_exp` - Line Specification](ABENTABLE_EXP_ITAB_LINE_ABEXA.html)

The table expression reads the line with the line number specified in `idx` with respect to a table index. The line is read in exactly the same way as when specifying an index

[`... INDEX idx [USING KEY keyname]`](ABAPREAD_TABLE_INDEX.html)

in the statement [`READ TABLE`](ABAPREAD_TABLE.html). Similarly, `idx` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) and the optional `KEY [keyname](ABENKEYNAME.html) INDEX` is equivalent to the `USING KEY [keyname](ABENKEYNAME.html)` specified here. If the optional addition is not used, `itab` must be an [index table](ABENINDEX_TABLE_GLOSRY.html). If the addition is used, the secondary table index of a sorted secondary key can be specified statically or dynamically.

If no line exists for the specified index, the catchable exception `CX_SY_ITAB_LINE_NOT_FOUND` is usually raised. The attributes `KEY_NAME` and `KEY_COMP_VALUES` are not filled here. Exceptions to this rule are when a [start value](ABENTABLE_EXP_OPTIONAL_DEFAULT.html) is specified, uses in the statement [`ASSIGN`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html), in the predicate function [`line_exists`](ABENLINE_EXISTS_FUNCTION.html), and in the table function [`line_index`](ABENLINE_INDEX_FUNCTION.html).

Reading of the line with the line number 1 once using the secondary table key `skey` and twice using the primary table key. It is the third line once and the first line twice.

The table expression reads the line in accordance with the specified free search key.

The components `comp1 comp2 ...` can be specified exactly as in the `READ` statement in accordance with the rules from the section [Specifying Components](ABENITAB_COMPONENTS.html) and compatible or convertible operands `operand1 operand2 ...` must be specified that are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html). The same syntax warnings can occur as for the respective `READ TABLE` statements.

If no line is found for the specified free key, the catchable exception `CX_SY_ITAB_LINE_NOT_FOUND` is usually raised. The attributes `KEY_NAME` and `KEY_COMP_VALUES` are not filled here. Exceptions to this rule are when a [start value](ABENTABLE_EXP_OPTIONAL_DEFAULT.html) is specified, uses in the statement [`ASSIGN`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html), in the predicate function [`line_exists`](ABENLINE_EXISTS_FUNCTION.html), and in the table function [`line_index`](ABENLINE_INDEX_FUNCTION.html).

Reading a line from an internal table specifying a free key without key name. The search is and cannot be not optimized, because the search fields are not part of the primary key of the sorted table and there is no appropriate secondary key.

Reading a line from an internal table specifying a free key without key name. The search is not optimized, because the search fields are not part of the primary key of the sorted table. Since there is an appropriate secondary key available, it could be optimized and therefore, a syntax warning occurs that is suppressed by a pragma here.

Reading a line from an internal table by specifying a free key by naming an appropriate secondary key and specifying a part of the key fields. The search is partly optimized.

Reading a line from a standard table specifying a free key by naming a secondary table key and all key fields. The search is fully optimized.

The table expression reads the line in accordance with an explicitly specified [table key](ABENTABLE_KEY_GLOSRY.html). The search is performed in exactly the same way as when specifying the table key

[`... WITH TABLE KEY [keyname COMPONENTS] ...`](ABAPREAD_TABLE_KEY.html)

in the statement [`READ TABLE`](ABAPREAD_TABLE.html). The table key must be covered completely by specifying components and no components can be specified that are not part of the table key.

Unlike the statement `READ TABLE`, a table expression must specify the name of the table key and the addition `COMPONENTS` can be omitted. Like the statement `READ TABLE`, the table key `keyname` and the key components can be specified statically or dynamically. The operands `operand1 operand2 ...` are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

If no line is found for the specified table key, the catchable exception `CX_SY_ITAB_LINE_NOT_FOUND` is usually raised and its attributes `KEY_NAME` and, if the table is not empty, `KEY_COMP_VALUES` are filled. Exceptions to this rule are when a [start value](ABENTABLE_EXP_OPTIONAL_DEFAULT.html) is specified, uses in the statement [`ASSIGN`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html), in the predicate function [`line_exists`](ABENLINE_EXISTS_FUNCTION.html), and in the built-in function [`line_index`](ABENLINE_INDEX_FUNCTION.html).

Reading a line from an internal table by specifying the full primary table key. The search is fully optimized.

-   Index read
-   Read using a free key or a table key
-   Read using a table key

-   If `KEY keyname [COMPONENTS]` is not specified, the search is performed in exactly the same way as for the statement [`READ TABLE`](ABAPREAD_TABLE.html) when specifying the free search key:
-   [`... WITH KEY comp1 = operand1 comp2 = operand2 ...`](ABAPREAD_TABLE_FREE.html)
-   If the free key overlaps with some or all of the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html), the optimizations described under [`READ TABLE`](ABAPREAD_TABLE_FREE.html) are performed when sorted tables and hashed tables are read. Unlike the statement [`READ TABLE`](ABAPREAD_TABLE.html), no binary searches can be forced for a table expression.
-   If `KEY keyname [COMPONENTS]` is specified, an optimized search is performed in exactly the same way as for he statement [`READ TABLE`](ABAPREAD_TABLE.html) when specifying the free search key with the name of a table key:
-   [`... WITH KEY keyname COMPONENTS comp1 = operand1 comp2 = operand2 ...`](ABAPREAD_TABLE_FREE.html)
-   A sorted table key `keyname` does not have to be covered completely by components. For sorted as well as secondary keys, components can be specified that are not part of the table key. Unlike than in the statement `READ TABLE`, the addition `COMPONENTS` can be omitted in table expressions.

-   In order to use the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) explicitly, the key must be specified using its predefined name `primary_key` or an alias name.
-   The main purpose of using a part of a sorted table key is to determine the existence of a specified line that is not necessarily specified completely or, for example, a line number as the starting point of a subsequent sequential read using [`LOOP ... FROM`](ABAPLOOP_AT_ITAB_COND.html) as efficiently as possible.

-   Searches using the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) do not have to specify it explicitly. Instead, the variants with a free search key can be used. If this covers the primary table key, it is used for optimized reads on sorted tables and hashed tables.
-   In order to use the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) in this variant explicitly, the key must be specified using its predefined name `primary_key` or an alias name.
-   The main purpose of an explicitly specified table key is to read exactly one completely specified line.
-   Using the variant `KEY keyname` and specifying all key fields has the same effect as using `TABLE KEY keyname`. In the latter variant it is ensured syntactically that all key fields are specified.

DATA itab TYPE TABLE OF i \\n WITH NON-UNIQUE KEY primary\_key COMPONENTS table\_line \\n WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line. \\n\\ \\nitab = VALUE #( ( 3 ) ( 2 ) ( 1 ) ). \\n\\ \\ncl\_demo\_output=>new( \\n )->write( itab\[ KEY skey INDEX 1 \] \\n )->write( itab\[ KEY primary\_key INDEX 1 \] \\n )->write( itab\[ 1 \] \\n )->display( ). DATA itab TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @itab. \\n\\ \\nTRY. \\n cl\_demo\_output=>display( itab\[ cityfrom = 'FRANKFURT' \] ). \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n ... \\nENDTRY. DATA itab TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid \\n WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityfrom cityto. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @itab. \\n\\ \\nTRY. \\n cl\_demo\_output=>display( \\n itab\[ cityfrom = 'FRANKFURT' \] ) ##primkey\[cities\]. \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n ... \\nENDTRY. DATA itab TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid \\n WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityfrom cityto. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @itab. \\n\\ \\nTRY. \\n cl\_demo\_output=>display( \\n itab\[ KEY cities cityfrom = 'FRANKFURT' \] ). \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n ... \\nENDTRY. DATA itab TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid \\n WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityfrom cityto. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @itab. \\n\\ \\nTRY. \\n cl\_demo\_output=>display( itab\[ KEY cities COMPONENTS \\n cityfrom = 'FRANKFURT' \\n cityto = 'SINGAPORE' \] ). \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n ... \\nENDTRY. DATA itab TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @itab. \\n\\ \\nTRY. \\n cl\_demo\_output=>display( itab\[ TABLE KEY primary\_key \\n carrid = 'LH' \\n connid = '400' \] ). \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n ... \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abentable\_expressions.html