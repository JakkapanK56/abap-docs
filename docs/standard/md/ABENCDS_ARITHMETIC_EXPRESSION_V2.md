---
title: "ABENCDS_ARITHMETIC_EXPRESSION_V2"
description: |
  ABENCDS_ARITHMETIC_EXPRESSION_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ARITHMETIC_EXPRESSION_V2.htm"
abapFile: "ABENCDS_ARITHMETIC_EXPRESSION_V2.html"
keywords: ["select", "if", "case", "try", "data", "types", "ABENCDS", "ARITHMETIC", "EXPRESSION"]
---

`... [-]operand1 [+|-|*|/ [-]operand2 [+|-|*|/ [-]operand3 ... ]] ...`

[Arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). An arithmetic expression uses arithmetic operators to calculate a numeric value from numeric operands. The possible operators are as follows:

A minus sign (`-`) before an operand multiplies the operand by -1. The data type of the operands must be numeric and be based on one of the [built-in data types](ABENDDIC_BUILTIN_TYPES.html)\\ `INT1`, `INT2`, `INT4`, `INT8`, `DEC`, `DECFLOAT16`, `DECFLOAT34`, `FLTP`, or `QUAN`. The following can be specified:

The subexpressions of an arithmetic expression can be placed in parentheses `(...)`.

The following table shows which data types can be combined using the operators `+`, `-`, and `*` and the data type of the result:

The following table shows which data types can be combined using the operator `/` and the data type of the result:

It is also possible to use [CDS amount fields](ABENCDS_AMOUNT_FIELD_GLOSRY.html) and [CDS quantity fields](ABENCDS_QUANTITY_GLOSRY.html) in arithmetic expressions. The result type can be a [calculated quantity](ABENCDS_CALCULATED_QUANTITY.html). The rules for amounts and quantities in arithmetic expressions in CDS view entities are explained in topic [CDS View Entity, `arith_exp`, Amounts and Quantities](ABENCDS_ARIT_EXP_CALC_V2.html).

Note the following special conditions:

Operand positions:

`SELECT` list of a CDS view entity with arithmetic expressions.

-   [Numeric literals](ABENCDS_LITERAL_V2.html)
-   Numeric [fields](ABENCDS_FIELD_V2.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the current CDS view entity
-   [Parameter](ABENCDS_PARAMETER_V2.html) with numeric data type
-   [Path expressions](ABENCDS_PATH_EXPRESSION_V2.html) that identify a numeric field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html)
-   [Built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V2.html) that return a numeric type
-   [SQL-based scalar functions](ABENCDS_SQL_SCALAR_FUNCTION.html) that return a numeric type
-   [Casting expressions](ABENCDS_CAST_EXPRESSION_V2.html) that return a numeric type
-   [Case distinctions](ABENCDS_CASE_EXPRESSION_V2.html) that return a numeric type
-   [Aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html) that return a numeric type
-   Another arithmetic expression
-   A [reuse expression](ABENCDS_REUSABLE_EXPRESSION_V2.html) using `$projection`

-   If an expression contains an operand of type `DEC`, the expression is a decimal expression. In this case, the syntax check checks that the result of each operation is in the value range of the type `DEC` with length 31 and a maximum of 14 decimal places. If any operands are specified that could produce other values, a syntax error occurs.
-   If an expression has an operand of type `DECFLOAT16` or `DECFLOAT34`, then it is a decimal floating point expression.
-   If an expression has an operand of type `FLTP`, then it is a binary floating point expression, in which all operands must be of type `FLTP`.
-   When a division is performed with the operator `/`, the right operand cannot have the value 0.
-   If an operand of an arithmetic expression has the [null value](ABENNULL_VALUE_GLOSRY.html), the result of the entire arithmetic expression is the null value.
-   Data type `CURR` is also possible, but only under the following conditions:

-   All operands must be of type `CURR` and have exactly two decimal places.
-   `CURR` is only allowed in additions and subtractions (operators + and -). Not in multiplications and divisions.

-   Arithmetic expressions can be used as [elements](ABENCDS_SELECT_LIST_ENTRY_V2.html) of a [`SELECT` list](ABENCDS_SELECT_LIST_V2.html), and there they need alternative element names defined using `AS`.
-   An arithmetic expression can be used as the operand of an [aggregate expression](ABENCDS_AGGREGATE_FUNCTIONS_V2.html), a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V2.html), a [cast expression](ABENCDS_CAST_EXPRESSION_V2.html), or a [case distinction](ABENCDS_CASE_EXPRESSION_V2.html).
-   An arithmetic expression can be used in the condition `cds_cond` as operand `lhs` of a [complex case distinction](ABENCDS_SEARCHED_CASE_EXPR_V2.html).

-   When a division is performed with two numbers of type [`DEC`](ABENDDIC_BUILTIN_TYPES.html), the SQL function [`DIVISION`](ABENCDS_SQL_FUNCTIONS_NUMERIC_V2.html) can be used.
-   To convert operands into the appropriate types, [`CAST` expressions](ABENCDS_CAST_EXPRESSION_V2.html) can be used. The built-in conversion function [`FLTP_TO_DEC`](ABENCDS_CONV_FUNC_TYPES_V2.html) can be used for the specific task of converting operands of type `FLTP` to packed numbers.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_SO\_ARITH\_EXPR\\n as select from\\n demo\_so\_inv\_he\\n association to DEMO\_SALES\_CDS\_SO\_I as \_item\\n on $projection.so\_key = \_item.so\_item\_key\\n \\{\\n key so\_key,\\n @Semantics.amount.currencyCode: 'currency\_code'\\n gross\_amount,\\n cast(gross\_amount as abap.dec(10, 2)) -\\n cast(tax\_amount as abap.dec(10,2)) as pre\_tax\_amount,\\n cast(gross\_amount as abap.fltp) \* 0.33 \\n as overall\_savings,\\n \_item.posnr as item\_position,\\n \_item.gross\_amount as item\_gross\_amount,\\n cast(\_item.gross\_amount as abap.fltp) \* 0.97 \\n as item\_savings,\\n @Semantics.amount.currencyCode: 'currency\_code'\\n net\_amount + tax\_amount as gross,\\n currency\_code,\\n \_item.currency\\n \\}\\n **Operator** **Meaning**\\ `+` Adds the operands `-` Subtracts the right operand from the left `*` Multiplies the operands `/` Divides the left operand by the right **`+`, `-`, `*`** **`INT1`** **`INT2`** **`INT4`** **`INT8`** **`DEC`** **`DECFLOAT16`** **`DECFLOAT34`** **`FLTP`** **`QUAN`**\\ **`INT1`** `INT4` `INT4` `INT4` `INT8` `DEC` `DECFLOAT16` `DECFLOAT34` - `QUAN`\\ **`INT2`** `INT4` `INT4` `INT4` `INT8` `DEC` `DECFLOAT16` `DECFLOAT34` - `QUAN`\\ **`INT4`** `INT4` `INT4` `INT4` `INT8` `DEC` `DECFLOAT16` `DECFLOAT34` - `QUAN`\\ **`INT8`** `INT8` `INT8` `INT8` `INT8` `DEC` `DECFLOAT16` `DECFLOAT34` - `QUAN`\\ **`DEC`** `DEC` `DEC` `DEC` `DEC` `DEC` `DECFLOAT16` `DECFLOAT34` - `QUAN`\\ **`DECFLOAT16`** `DECFLOAT16` `DECFLOAT16` `DECFLOAT16` `DECFLOAT16` `DECFLOAT16``DECFLOAT16` `DECFLOAT16` `DECFLOAT34` - \\ `DECFLOAT16`\\ **`DECFLOAT34`** `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` - \\ `DECFLOAT34`\\ **`FLTP`** - - - - - - - `FLTP` - **`QUAN`** `QUAN` `QUAN` `QUAN` `QUAN` \\ `QUAN` `DECFLOAT16` `DECFLOAT34` - `*`: `DECFLOAT34`\\
`+`, `-`: `QUAN` **`/`** `INT1` `INT2` `INT4` \\ `INT8` `DEC` \\ **`DECFLOAT16`** **`DECFLOAT34`** **`FLTP`** `QUAN`\\ **`INT1`** `DECFLOAT34` `DECFLOAT34` \\ `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` \\ `DECFLOAT34` `DECFLOAT34` - `DECFLOAT34`\\ **`INT2`** `DECFLOAT34` `DECFLOAT34` \\ `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` \\ `DECFLOAT34` `DECFLOAT34` - `DECFLOAT34`\\ **`INT4`** `DECFLOAT34` `DECFLOAT34` \\ `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` \\ `DECFLOAT34` `DECFLOAT34` - `DECFLOAT34`\\ **`INT8`** `DECFLOAT34` `DECFLOAT34` \\ `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` \\ `DECFLOAT34` `DECFLOAT34` - `DECFLOAT34`\\ **`DEC`** `DECFLOAT34` `DECFLOAT34` \\ `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` \\ `DECFLOAT34` `DECFLOAT34` - `DECFLOAT34`\\ **`DECFLOAT16`** `DECFLOAT34` `DECFLOAT34` \\ `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` `DECFLOAT16` `DECFLOAT34` - `DECFLOAT34`\\ **`DECFLOAT34`** `DECFLOAT34` \\ `DECFLOAT34` \\ `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` - `DECFLOAT34`\\ **`FLTP`** - - - - - - - `FLTP` - **`QUAN`** `DECFLOAT34` `DECFLOAT34` \\ `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` \\ `DECFLOAT34` `DECFLOAT34`\\ - `DECFLOAT34` abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html