---
title: "ABENSQL_ELEM"
description: |
  ABENSQL_ELEM - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_ELEM.htm"
abapFile: "ABENSQL_ELEM.html"
keywords: ["select", "loop", "do", "if", "data", "types", "internal-table", "field-symbol", "ABENSQL", "ELEM"]
---

``... [`col`](ABENABAP_SQL_COLUMNS.html)\    |\ [`literal`](ABENABAP_SQL_LITERALS.html)\ |\ [`@dobj`](ABENABAP_SQL_HOST_VARIABLES.html)\ |\ [`@( expr )`](ABENABAP_SQL_HOST_EXPRESSIONS.html) ...``

Elementary expression in ABAP SQL. An elementary SQL expression represents one of the following values:

The result of an elementary SQL expression is the value of the specified object or the result of the specified expression. If a value from the database is specified, the data type is its dictionary type. When an ABAP object is specified, the ABAP type is mapped to a dictionary type as follows:

Untyped [text field literals](ABENTEXT_FIELD_LITERAL_GLOSRY.html) are handled as fields with the type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) of the corresponding length where trailing blanks are respected. Like the [untyped numeric literals](ABENUNTYPED_NUMBER_LITERALS.html) of a general ABAP, untyped numeric literals are handled either as a field with the type [`INT4`](ABENDDIC_BUILTIN_TYPES.html) or the type [`DEC`](ABENDDIC_BUILTIN_TYPES.html), depending on their value.

On the database, the value of an ABAP object as an elementary expression is handled according to the rules of the database in accordance with the mapped type. This is different from other operand positions of ABAP objects in ABAP SQL, where they are not handled as elementary expressions. In these operand positions, the content is converted to the target type in accordance with the [rules for lossless assignments](ABAPMOVE_EXACT.html).

The [`SELECT` list](ABAPSELECT_LIST.html) of the second [`SELECT`](ABAPSELECT.html) statement contains all possible elementary SQL expressions.

[Constant in the `SELECT` List](ABENSQL_EXPR_LITERAL_ABEXA.html)

-   Value from the database

-   Column [`col`](ABENABAP_SQL_COLUMNS.html) of a [data source](ABAPSELECT_DATA_SOURCE.html)

-   The column [`col`](ABENABAP_SQL_COLUMNS.html) can be of any elementary data type from the ABAP Dictionary, unless otherwise documented for an operand position.
-   Values of the ABAP program passed to the database system

-   [Literal](ABENABAP_SQL_LITERALS.html)\\ `literal`
-   [Host variable](ABENABAP_SQL_HOST_VARIABLES.html)\\ `@dobj`
-   [Host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html)\\ `@( expr )`

-   The ABAP objects can have any non-generic elementary ABAP data type and the name of a host variable must be tagged with the escape character `@`. [Typed literals](ABENABAP_SQL_TYPED_LITERALS.html) are handled strictly according to their type. [Untyped literals](ABENABAP_SQL_UNTYPED_LITERALS.html) are restricted to the types `c` and `i`. Untyped [text field literals](ABENTEXT_FIELD_LITERAL_GLOSRY.html) are allowed. String literals are not allowed, neither typed nor untyped. Furthermore, no empty text field literal can be specified. An empty typed literal of type `CHAR` can be specified.

-   Columns, literals, host variables, and host expressions can also occur as elementary [SQL operands](ABENSQL_OPERANDS.html) in operand positions in which no general SQL expressions are possible. Columns, literals, hosts variables, and host expressions can only be handled as SQL expressions in positions where SQL expressions are possible. Only there can they be specified inside [parentheses](ABENSQL_EXP_PARENTHESES.html). Then, the statement can only have lists separated by commas and host variables must be indicated by the escape character `@`.
-   If an elementary SQL expression consists of a host variable in the form of a field symbol or formal parameter, this expression must be completely typed.
-   Untyped literals, host variables, and host expressions as operands of other SQL expressions are evaluated before the ABAP SQL statement is sent to the database system. Specifying a host variable from a `SELECT` list after `INTO` in a `SELECT` loop does not mean that a different value is used in each loop pass.
-   The fact that literals, host variables, and host expressions are mapped to specific dictionary types as operands of SQL expressions, whereas other operand positions allow conversions to different target types, is particularly significant for [relational expressions](ABENABAP_SQL_EXPR_LOGEXP.html) in which the [comparability](ABENWHERE_LOGEXP_COMPARE_TYPES.html) of dictionary types is important.
-   An elementary expression can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) for accessing the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table with [`FROM @itab`](ABAPSELECT_ITAB.html).

DATA carrid TYPE scarr-carrid VALUE 'LH'. \\ncl\_demo\_input=>request( CHANGING field = carrid ). \\n\\ \\nSELECT FROM scarr \\n FIELDS carrid, carrname \\n INTO TABLE @FINAL(carriers). \\n\\ \\nSELECT SINGLE \\n FROM spfli \\n FIELDS '\*' AS mark, \\n @carrid AS id, \\n @( carriers\[ carrid = carrid \]-carrname ) AS carrier, \\n connid \\n WHERE carrid = @carrid \\n INTO @FINAL(result). \\n\\ \\ncl\_demo\_output=>display( result ). **Numeric ABAP Type** **Dictionary Type** `b`, `s`, `i`, `int8` `INT1`, `INT2`, `INT4`, `INT8` `p` `DEC` with appropriate length and decimal places `decfloat16`, `decfloat34` `DF16_RAW`, `DF34_RAW` `f` `FLTP` **Character-Like ABAP Type** **Dictionary Type** `c` `CHAR` with appropriate length `n` `NUMC` with appropriate length `string` `STRING` with appropriate length **Byte-Like ABAP Type** **Dictionary Type** `x` `RAW` with appropriate length `xstring` `RAWSTRING` with appropriate length **ABAP Type for Date, Time, and Time Stamp** **Dictionary Type** `d` `DATS` `t` `TIMS` `utclong` `UTCLONG` abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html