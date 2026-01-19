---
title: "ABAPUPDATE_SET_EXPRESSION"
description: |
  ABAPUPDATE_SET_EXPRESSION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPUPDATE_SET_EXPRESSION.htm"
abapFile: "ABAPUPDATE_SET_EXPRESSION.html"
keywords: ["insert", "update", "delete", "do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "ABAPUPDATE", "SET", "EXPRESSION"]
---

``... \{[`col`](ABENABAP_SQL_COLUMNS.html) = f\}\    |\ \{[`col`](ABENABAP_SQL_COLUMNS.html) = [`col`](ABENABAP_SQL_COLUMNS.html) + f\}\    |\ \{[`col`](ABENABAP_SQL_COLUMNS.html) = [`col`](ABENABAP_SQL_COLUMNS.html) - f\}\    | (expr_syntax) ...``

[1. `... col = f`](#ABAP_VARIANT_1@1@)

[2. `... col = col + f`](#ABAP_VARIANT_2@1@)

[3. `... col = col - f`](#ABAP_VARIANT_3@1@)

[4. `... (expr_syntax)`](#ABAP_VARIANT_4@1@)

[Set expressions](ABENSET_EXPRESSION_GLOSRY.html) for the addition `SET` of the statement `UPDATE`. These set expressions can be combined in the comma-separated list in any way required after [`SET`](ABAPUPDATE_SOURCE.html).

A column `col` can occur in a single set expression only.

Assignment of a value. Columns of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html)\\ `writable_obj` specified in [`target`](ABAPIUMD_TARGET.html) can be specified for [`col`](ABENABAP_SQL_COLUMNS.html). For `f`, a [literal](ABENABAP_SQL_LITERALS.html), a [host variable](ABENABAP_SQL_HOST_VARIABLES.html), a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html), a built-in [SQL function](ABENABAP_SQL_BUILTIN_FUNCTIONS.html), a [cast expression](ABENSQL_CAST.html), or a column name [`writable_obj~comp`](ABENABAP_SQL_COLUMNS.html) of a different column in the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) can be used. A column can only occur in a single set expression after `SET`.

The statement `UPDATE` assigns the content of `f` to the columns `col` in all the rows defined by the `WHERE` condition. If the column has one of the data types `DECFLOAT34` or `DECFLOAT16`, the data object has a numeric data type. If the column has the data type `UTCLONG`, the data object must have the data type `utclong`. If the data types are not [compatible](ABENCOMPATIBLE_GLOSRY.html), they are converted as follows:

In the assignment, the assigned value must fit in the value range of the column. Otherwise, the catchable exception `CX_SY_OPEN_SQL_DB` is raised. This applies in particular for:

If a column is specified for `f`, changes to this column that are made in the same `UPDATE` statement are ignored during the assignment.

The following `UPDATE` statement sets the specified columns to the specified values in every row of the CDS table entity.

Addition of a value. The same applies to [`col`](ABENABAP_SQL_COLUMNS.html) and `f` as to the assignment of a value, where `col` must have a numeric data type. `col` must be specified either with or without the prefix `writable_obj~` on both sides. The data types `DF16_RAW` and `DF34_RAW` and the obsolete types `DF16_SCL` and `DF34_SCL` are not allowed.

The statement `UPDATE` adds the value of `f` to the content of the column `col` in all the rows defined by the `WHERE` condition. Otherwise, the same rules apply as to the assignment of a value.

The following `UPDATE` statement adds the specified values to the values in the specified columns in every row of the CDS table entity.

Subtraction of a value. The same applies to [`col`](ABENABAP_SQL_COLUMNS.html) and `f` as to the assignment of a value. Here, `col` must have a numeric data type. `col` must be specified either with or without the prefix `writable_obj~` on both sides. The data types `DF16_RAW` and `DF34_RAW` and the obsolete types `DF16_SCL` and `DF34_SCL` are not allowed.

The statement `UPDATE` subtracts the value of `f` from the content of the column `col`, in all rows defined by the `WHERE` condition. Otherwise, the same rules apply as to the assignment of a value.

The following `UPDATE` statement subtracts the specified values from the values in the specified columns in every row of the database table.

Dynamic specification of set expressions. A set expression can be specified as a parenthesized data object `expr_syntax` that, when the statement is executed, either contains the syntax of one or more static set expressions (with the exception of host expressions) or is initial. The data object `expr_syntax` can be a character-like data object or a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) without [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) and with a character-like data object. The syntax in `expr_syntax` is not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows.

If `expr_syntax` is `initial` when the statement is executed, the set expression is ignored. Invalid syntax raises a catchable exception from the class `CX_SY_DYNAMIC_OSQL_ERROR`.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

If `expr_syntax` is an internal table with a [header line](ABENHEADER_LINE_GLOSRY.html), the [table body](ABENTABLE_BODY_GLOSRY.html) is evaluated and not the header line.

The following `UPDATE` statement changes the columns specified in a dynamic token to the specified values in every row of the database table.

-   When assigning a data object that is not a reference variable for a [LOB handle](ABENLOB_HANDLE_GLOSRY.html), the content is converted, if required, to the [ABAP data type](ABENDDIC_BUILTIN_TYPES.html) that corresponds to the data type of the column in accordance with the [conversion rules](ABENCONVERSION_ELEMENTARY.html). Any errors in the conversion raise the corresponding uncatchable exception. The content of `f` must match the data type of the column in accordance with the rules for [lossless assignments](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html). This can raise an exception.
-   When assigning a data object that is a reference variable for a [LOB handle](ABENLOB_HANDLE_GLOSRY.html), the column `col` must be a [LOB](ABENLOB_GLOSRY.html) with a suitable type. If the reference has a writer stream type, a writer stream is created. If it is a type for a locator, this locator must exist and is used as a source. For details, see [LOB handles](ABENIUM_LOB.html).
-   When assigning a different column, the content is converted in the database system, if necessary. The option of a conversion and the conversion rules are specific to the database system. Any errors in the conversion raise the catchable exception `CX_SY_OPEN_SQL_DB`.

-   Assignments to numeric columns.
-   Assignments to columns of the type `SSTRING`, `STRING`, or `RAWSTRING`. The assigned content must not be longer than the maximum length of the columns in the database structure. This length can be determined using the built-in function [`dbmaxlen`](ABENLENGTH_FUNCTIONS.html).

-   No [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html) can be specified for `f`.
-   Currently, only built-in [SQL functions](ABENABAP_SQL_BUILTIN_FUNCTIONS.html) and [cast expressions](ABENSQL_CAST.html) can be specified for `f`. No other [SQL expressions](ABAPSQL_EXPR.html) are possible. In particular, [arithmetic expressions](ABENSQL_ARITH.html) are not supported. Variant 2 and variant 3 below are not arithmetic expressions, but special syntax.
-   When specifying an [SQL function](ABENABAP_SQL_BUILTIN_FUNCTIONS.html) for `f`, there currently is a limitation concerning the data type: the result of the SQL function can have any data type, except `STRING` and `RAWSTRING`. The syntax check verifies this.
-   As explained above, `f` cannot be an [arithmetic expression](ABENSQL_ARITH.html). However, it is possible to use arithmetic expressions as operand of a [cast expression](ABENSQL_CAST.html).

DELETE FROM demo\_update. \\nINSERT demo\_cds\_update\_te FROM TABLE @( VALUE #( ( id = 'X' ) \\n ( id = 'Y' ) \\n ( id = 'Z' ) ) ). \\n\\ \\nFINAL(num) = 300. \\n\\ \\nUPDATE demo\_cds\_update\_te SET col1 = 100, \\n col2 = demo\_cds\_update\_te~col1, \\n col3 = @num, \\n col4 = @( num + 100 ). DELETE FROM demo\_cds\_update\_te. \\nINSERT demo\_cds\_update\_te FROM TABLE @( \\n VALUE #( ( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) \\n ( id = 'Y' col1 = 11 col2 = 12 col3 = 13 col4 = 14 ) \\n ( id = 'Z' col1 = 21 col2 = 22 col3 = 23 col4 = 24 ) ) ). \\n\\ \\nFINAL(num) = 300. \\n\\ \\nUPDATE demo\_cds\_update\_te SET col1 = col1 + 100, \\n col2 = col2 + demo\_cds\_update\_te~col1, \\n col3 = col3 + @num, \\n col4 = col4 + @( num + 100 ). DELETE FROM demo\_update. \\nINSERT demo\_update FROM TABLE @( \\n VALUE #( ( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) \\n ( id = 'Y' col1 = 11 col2 = 12 col3 = 13 col4 = 14 ) \\n ( id = 'Z' col1 = 21 col2 = 22 col3 = 23 col4 = 24 ) ) ). \\n\\ \\nFINAL(num) = 300. \\n\\ \\nUPDATE demo\_update SET col1 = col1 - 100, \\n col2 = col2 - demo\_update~col1, \\n col3 = col3 - @num, \\n col4 = col4 - @( num + 100 ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_update. \\nINSERT demo\_update FROM TABLE @( \\n VALUE #( ( id = 'X' col1 = 1 col2 = 2 col3 = 3 ) \\n ( id = 'Y' col1 = 11 col2 = 12 col3 = 13 ) \\n ( id = 'Z' col1 = 21 col2 = 22 col3 = 23 ) ) ). \\n\\ \\nFINAL(num) = 100. \\n\\ \\nFINAL(expr\_syntax) = \`col1 = @num, \` && \\n \`col2 = col2 + demo\_update~col1, \` && \\n \`col3 = col3 - @num\`. \\n\\ \\nTRY. \\n UPDATE demo\_update SET (expr\_syntax). \\n CATCH cx\_sy\_dynamic\_osql\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html abapupdate.html abapupdate\_source.html