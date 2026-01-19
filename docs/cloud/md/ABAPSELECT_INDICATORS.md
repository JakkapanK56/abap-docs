---
title: "ABAPSELECT_INDICATORS"
description: |
  ABAPSELECT_INDICATORS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSELECT_INDICATORS.htm"
abapFile: "ABAPSELECT_INDICATORS.html"
keywords: ["select", "insert", "delete", "do", "while", "if", "case", "catch", "class", "data", "types", "internal-table", "ABAPSELECT", "INDICATORS"]
---

`... INDICATORS \{[NOT] NULL STRUCTURE null_ind\}\               |\ \{[NOT] NULL BITFIELD null_ind\}\               | (indicator_syntax) ...`

[1. `... INDICATORS [NOT] NULL STRUCTURE null_ind`](#ABAP_ALTERNATIVE_1@2@)

[2. `... INDICATORS [NOT] NULL BITFIELD null_ind`](#ABAP_ALTERNATIVE_2@2@)

[3. `... INDICATORS (indicator_syntax)`](#ABAP_ALTERNATIVE_3@2@)

The addition `INDICATORS` of the [`INTO`](ABAPINTO_CLAUSE.html) clause can be used to specify indicators. It is currently possible to specify a [null indicator](ABENNULL_INDICATOR_GLOSRY.html) that stores information about which columns of the result set contain the null value and which do not. The addition can be specified only for importing to structured work areas `wa` or internal tables `itab` with a structured line type. It is possible to use it when existing target areas are specified, in combination with the additions [`CORRESPONDING FIELDS`](ABAPINTO_CLAUSE.html), [`NEW`](ABAPSELECT_INTO_TARGET.html), and with [inline declarations](ABAPSELECT_INTO_TARGET.html). There are two static variants that specify one of the following:

A dynamic variant allows the syntax of the static variants to be specified as a dynamic token.

Specifies the [substructure](ABENSUBSTRUCTURE_GLOSRY.html)\\ `null_ind` of a structured target area specified in the [`INTO`](ABAPINTO_CLAUSE.html) clause as a [null indicator](ABENNULL_INDICATOR_GLOSRY.html).

The substructure is filled as follows:

The indicator values are set as follows:

The third column of the result set of the `SELECT` statement contains the null value because the `WHEN` condition of the `CASE` expression is false and no `ELSE` is specified. Accordingly, component `z` of substructure `wa-null_ind` contains the value hexadecimal 1.

The internal table `itab` declared inline contains an elementary column `carrname`, a substructure `spfli`, which is structured like the DDIC database table `SPFLI`, and a substructure `nulls`. The substructure `nulls` also contains an elementary column `carrname` and a substructure `spfli`. However, the components are all of type `x` with length 1.

Specifies the [byte field type](ABENBYTE_FIELD_TYPE_GLOSRY.html) component `null_ind` of a structured target area specified in the [`INTO`](ABAPINTO_CLAUSE.html) clause as a [null indicator](ABENNULL_INDICATOR_GLOSRY.html).

The byte field is filled as follows:

The indicator values are set as follows:

Trailing excess bits of the byte field that are not covered by the above rules are always set to 0.

The third column of the result set of the `SELECT` statement contains the null value because the `WHEN` condition of the `CASE` expression is false and no `ELSE` is specified. The first two columns do not contain the null value. By using `NOT NULL BITFIELD`, the first two bits of the [condensed indicator structure](ABENCONDENSED_IND_STRUCTURE_GLOSRY.html)\\ `null_ind` are set to 1 and all other bits are 0. While its hexadecimal value *C0* is not too informative, the `GET BIT` statement can be used to extract the positions of the columns that do not contain the null value.

The executable example [`SELECT`, Byte Field Indicators](ABENSELECT_IND_BITFIELD_ABEXA.html) shows the difference between position-based and name-based assignments without and with `CORRESPONDING FIELDS`.

Instead of the static specifications above, a parenthesized data object `indicator_syntax` can be specified after `INDICATORS`. This data object must contain the syntax shown for the static specification when the statement is executed. The data object `indicator_syntax` can be a character-like data object or a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with a character-like row type. The syntax in `indicator_syntax` is not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows. Invalid syntax raises a catchable exception from the class `CX_SY_DYNAMIC_OSQL_ERROR`. If the content of `indicator_syntax` is initial, the addition `INDICATORS` is ignored.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

Like the example for a static specification, but the null indicator is specified dynamically in this case. For this reason, inline declarations cannot be used without the addition [`NEW`](ABAPSELECT_INTO_TARGET.html) and a suitable structure must be defined. Because `NOT` is specified, the character-like components `x` and `y` of the null indicator are filled with *X*.

Like the preceding example but with the addition [`NEW`](ABAPSELECT_INTO_TARGET.html). An inline declaration can be used here.

-   A structured indicator that is a substructure of the structured target area.
-   A [byte field](ABENBYTE_FIELD_GLOSRY.html) indicator that is a [byte field type](ABENBYTE_FIELD_TYPE_GLOSRY.html) component of the structured target area.

-   After a specified existing work area `wa` or existing internal table `itab`, this must contain a substructure with the name `null_ind` as a component. The substructure must contain at least as many components as the number of columns in the result set defined using the [`SELECT` list](ABAPSELECT_LIST.html). These may also be components of other substructures. Each component must be of type `x` or `c` with length 1. The position and name of the substructure must be defined in such a way that it is not affected by the assignment of data from the result set of the query.

-   If the addition `CORRESPONDING FIELDS` is not specified, the substructure must be the last component of `wa` or `itab` but can have the same name as a column of the result set.
-   If the addition `CORRESPONDING FIELDS` is specified, the substructure can be any component of `wa` or `itab` but must not have the same name as a column of the result set.

-   The addition `INDICATORS ... STRUCTURE` after an [inline declaration](ABENINLINE_DECLARATION_GLOSRY.html) with `@DATA|@FINAL(wa)` or `@DATA|@FINAL(wa)` adds a [indicator structure](ABENINDICATOR_STRUCTURE_GLOSRY.html) with the name `null_ind` to the end of the structure or line structure declared inline. For each column in the result set, this substructure contains an identically named component of type `x` and length 1 in the same order. If preceding components of the structure declared inline are substructures, the substructure `null_ind` is also structured accordingly. The name `null_ind` must not be used as the name of a column in the result set.

-   If the addition `CORRESPONDING FIELDS` is not specified, the names of the components of the null indicator are ignored. From left to right, they are set to a value that indicates whether or not the identically positioned column in the current row of the result set contains the null value. Nested structures are broken down into their elementary components.
-   If the addition `CORRESPONDING FIELDS` is specified, a component with the same name must exist in the null indicator for each component of `wa` or `itab` supplied with data and this is filled with the corresponding indicator value. For components of any substructures, the full name composed by the structure component selector is considered.

-   If the optional addition `NOT` is not specified, the component value hexadecimal 1 for type `x` and *X* for type `c` mean that the corresponding column contains the null value. For columns that do not contain the null value, the respective components are initialized.
-   If the optional addition `NOT` is specified, the component value hexadecimal 1 for type `x` and *X* for type `c` mean that the corresponding column does not contain the null value. For columns that contain the null value, the respective components are initialized.

-   It is recommended that the components of the null indicator have exactly the same name as the columns of the result set and that the null indicator is placed as an [indicator structure](ABENINDICATOR_STRUCTURE_GLOSRY.html) behind all other components.
-   Work areas with [indicator structures](ABENINDICATOR_STRUCTURE_GLOSRY.html) for the null indicators can be defined with the addition [`INDICATORS`](ABAPTYPES_INDICATORS.html) of the [`TYPES`](ABAPTYPES.html) statement.
-   If `wa` or the row structure of `itab` contains further substructures besides the null indicator, it does not make sense to use `CORRESPONDING FIELDS` and the null indicator should also be constructed accordingly.
-   When the addition `NOT` is not used, the entire null indicator is initial if no column of the result set contains the null value and when the addition `NOT` is used, the entire null indicator is initial if all columns of the result set contain the null value. This can be checked in a single logical expression.

-   After a specified existing work area `wa` or existing internal table `itab`, this must contain a component `null_ind` of type `x`. The length of `null_ind` must be sufficient to comprise as much bits as the number `n` of columns in the result set defined using the using the [`SELECT` list](ABAPSELECT_LIST.html). The length must be at least as calculated with `( n + 7 ) [DIV](ABENARITH_OPERATORS.html) 8`. The position and name of the byte field must be defined in such a way that it is not affected by the assignment of data from the result set of the query.

-   If the addition `CORRESPONDING FIELDS` is not specified, the byte field must be the last component of `wa` or `itab` but can have the same name as a column of the result set.
-   If the addition `CORRESPONDING FIELDS` is specified, the byte field can be any component of `wa` or `itab` but must not have the same name as a column of the result set..

-   The addition `INDICATORS ... BITFIELD` after an [inline declaration](ABENINLINE_DECLARATION_GLOSRY.html) with `@DATA|@FINAL(wa)` or `@DATA|@FINAL(wa)` adds a [condensed indicator structure](ABENCONDENSED_IND_STRUCTURE_GLOSRY.html) with the name `null_ind` to the end of the structure or line structure declared inline. `null_ind` has type `x` and a length that can be calculated as with `( n + 7 ) [DIV](ABENARITH_OPERATORS.html) 8`, where `n` is the number of columns in the result set.

-   If the addition `CORRESPONDING FIELDS` is not specified, the bits of the null indicator are set from left to right to a value that indicates whether or not the identically positioned column in the current row of the result set contains the null value.
-   If the addition `CORRESPONDING FIELDS` is specified, the positions of the indicator bits are mapped from left to right to the structure of the target area instead of the result set: If a a column of the result set corresponds to a component at position *n* of the target area, the bit at position *n* of the byte field is set. Only bits for components of the target area that correspond to a column of the result set are set to a indicator value. Bits for components of the target area that do not correspond to a column of the result set are always set to 0.

-   If the optional addition `NOT` is not specified, a bit value 1 means that the corresponding column contains the null value. For columns that do not contain the null value, the corresponding bits are set to 0.
-   If the optional addition `NOT` is specified, a bit value 1 means that the corresponding column does not contain the null value. For columns that contain the null value, the corresponding bits are set to 0.

-   It is recommended that the null indicator is placed as a [condensed indicator structure](ABENCONDENSED_IND_STRUCTURE_GLOSRY.html) behind all other components.
-   Target areas with [condensed indicator structures](ABENCONDENSED_IND_STRUCTURE_GLOSRY.html) for the null indicators can be defined with the addition [`INDICATORS ... AS BITFIELD`](ABAPTYPES_INDICATORS.html) of the [`TYPES`](ABAPTYPES.html) statement.
-   Bits that are always set to 0 (non-corresponding columns, excess bits) are independent from `NULL` or `NOT NULL` and how the state of the database is.
-   If the null indicator is not placed behind all other components, it must be included in the counting of the positions of the target area. Since the null indicator does not correspond to a column of the result set, the respective bit is set to 0.
-   The statement [`GET BIT`](ABAPGET_BIT.html) or [bit operators](ABENBIT_OPERATORS.html) can be used to evaluate null indicators represented by bits.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( id = 'X' num1 = 1 ) ). \\n\\ \\nSELECT SINGLE \\n FROM demo\_expressions \\n FIELDS \\n num1 AS x, \\n CASE WHEN num1 = 0 THEN 0 ELSE 1 END AS y, \\n CASE WHEN num1 = 0 THEN 0 END AS z \\n INTO @FINAL(wa) INDICATORS NULL STRUCTURE null\_ind. \\n\\ \\nout->write( wa ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT FROM scarr \\n INNER JOIN spfli ON scarr~carrid = spfli~carrid \\n FIELDS \\n scarr~carrname, \\n spfli~\* \\n INTO TABLE @FINAL(itab) INDICATORS NULL STRUCTURE nulls. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( id = 'X' num1 = 1 ) ). \\n\\ \\nSELECT SINGLE \\n FROM demo\_expressions \\n FIELDS \\n num1 AS x, \\n CASE WHEN num1 = 0 THEN 0 ELSE 1 END AS y, \\n CASE WHEN num1 = 0 THEN 0 END AS z \\n INTO @FINAL(wa\_ind) INDICATORS NOT NULL BITFIELD null\_ind. \\n\\ \\nDATA binary\_ind TYPE string. \\nDATA not\_null\_columns TYPE TABLE OF i WITH EMPTY KEY. \\nWHILE sy-index <= xstrlen( wa\_ind-null\_ind ) \* 8. \\n GET BIT sy-index OF wa\_ind-null\_ind INTO FINAL(bit). \\n binary\_ind &&= bit. \\n IF bit = 1. \\n APPEND sy-index TO not\_null\_columns. \\n ENDIF. \\nENDWHILE. \\n\\ \\ncl\_demo\_output=>new( \\n)->write( wa\_ind \\n)->write( wa\_ind-null\_ind \\n)->write( binary\_ind \\n)->write( not\_null\_columns \\n)->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( id = 'X' num1 = 1 ) ). \\n\\ \\nDATA: \\n BEGIN OF wa, \\n x TYPE i, \\n y TYPE i, \\n z TYPE i, \\n BEGIN OF not\_null\_ind, \\n x TYPE c LENGTH 1, \\n y TYPE c LENGTH 1, \\n z TYPE c LENGTH 1, \\n END OF not\_null\_ind, \\n END OF wa. \\n\\ \\nFINAL(indicator\_syntax) = \`NOT NULL STRUCTURE not\_null\_ind\`. \\n\\ \\nSELECT SINGLE \\n FROM demo\_expressions \\n FIELDS \\n num1 AS x, \\n CASE WHEN num1 = 0 THEN 0 ELSE 1 END AS y, \\n CASE WHEN num1 = 0 THEN 0 END AS z \\n INTO @wa INDICATORS (indicator\_syntax). \\n\\ \\nout->write( wa ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( id = 'X' num1 = 1 ) ). \\n\\ \\nFINAL(indicator\_syntax) = \`NOT NULL STRUCTURE not\_null\_ind\`. \\n\\ \\nSELECT SINGLE \\n FROM demo\_expressions \\n FIELDS \\n num1 AS x, \\n CASE WHEN num1 = 0 THEN 0 ELSE 1 END AS y, \\n CASE WHEN num1 = 0 THEN 0 END AS z \\n INTO NEW @FINAL(wa) INDICATORS (indicator\_syntax). \\n\\ \\nout->write( wa ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapinto\_clause.html