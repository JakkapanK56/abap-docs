---
title: "ABENCDS_ARITHMETIC_EXPRESSION_V1"
description: |
  ABENCDS_ARITHMETIC_EXPRESSION_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ARITHMETIC_EXPRESSION_V1.htm"
abapFile: "ABENCDS_ARITHMETIC_EXPRESSION_V1.html"
keywords: ["select", "do", "if", "case", "try", "data", "types", "ABENCDS", "ARITHMETIC", "EXPRESSION"]
---

`... [-]operand1 [+|-|*|/ [-]operand2 [+|-|*|/ [-]operand3 ... ]] ...`

Arithmetic expression in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). An arithmetic expression uses arithmetic operators to calculate a numeric value from numeric operands. The possible operators are as follows:

A minus sign (`-`) before an operand multiplies the operand by -1. The data type of the operands must be numeric and be based on one of the [built-in data types](ABENDDIC_BUILTIN_TYPES.html)\\ `INT1`, `INT2`, `INT4`, `INT8`, `DEC`, `CURR`, `QUAN`, `DECFLOAT16`, `DECFLOAT34`, or `FLTP`. The following can be specified:

The subexpressions of an arithmetic expression can be placed in parentheses `(...)`.

The following table shows which data types can be combined using the operators `+`, `-`, and `*` and the data type of the result:

The following table shows which data types can be combined using the operator `/` and the data type of the result:

Note the following special conditions:

Arithmetic expressions can be used as [elements](ABENCDS_SELECT_LIST_ENTRY_V1.html) of a [`SELECT` list](ABENCDS_SELECT_LIST_V1.html), where they need alternative element names defined using `AS`.

`SELECT` list of a CDS view with arithmetic expressions.

-   [Numeric literals](ABENCDS_LITERAL_V1.html) without a domain prefix
-   Numeric [fields](ABENCDS_FIELD_V1.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html) of the current CDS view.
-   [Parameter](ABENCDS_PARAMETER_V1.html) with numeric data type
-   [Path expressions](ABENCDS_PATH_EXPRESSION_V1.html) that identify a numeric field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html)
-   [Built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V1.html) that return a numeric type
-   [Casting expressions](ABENCDS_CAST_EXPRESSION_V1.html) that return a numeric type

-   If an expression contains an operand of type `DEC`, `CURR` or `QUAN`, the expression is a decimal expression. In this case, the syntax check checks that the result of each operation is in the value range of the type `DEC` with length 31 and a maximum of 14 decimal places. If any operands are specified that could produce other values, a syntax error occurs.
-   If an expression has an operand of type `DECFLOAT16` or `DECFLOAT34`, then it is a decimal floating point expression.
-   If an expression has an operand of type `FLTP`, then it is a binary floating point expression, in which all operands must be of type `FLTP`.
-   When a division is performed with the operator `/`, it must be a floating point expression. This means the operands must be of type `DECFLOAT16`, `DECFLOAT34`, or [`FLTP`](ABENDDIC_BUILTIN_TYPES.html) in combinations shown in the table above, or numeric literals with decimal places. Other numeric data types are not possible. The right operand cannot have the value 0.

-   When a division is performed with two numbers of type [`DEC`](ABENDDIC_BUILTIN_TYPES.html), the SQL function [`DIVISION`](ABENCDS_SQL_FUNCTIONS_NUMERIC_V1.html) can be used.
-   To convert operands into the appropriate types, [`CAST` expressions](ABENCDS_CAST_EXPRESSION_V1.html) can be used. The built-in conversion function [`FLTP_TO_DEC`](ABENCDS_CONV_FUNC_TYPES_V1.html) can be used for the specific task of converting operands of type `FLTP` to packed numbers.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW' \\ndefine view sales\_order as \\n select from snwd\_so \\n association \[1..\*\] to snwd\_so\_i as \_item \\n on snwd\_so.node\_key = \_item.parent\_key \\n \\{ key snwd\_so.node\_key, \\n gross\_amount, \\n gross\_amount - tax\_amount as pre\_tax\_amount, \\n cast(gross\_amount as abap.fltp) \\n + (cast( -gross\_amount as abap.fltp) \* 0.03) \\n as reduced\_amount, \\n cast(gross\_amount as abap.fltp) \* 0.03 as overall\_savings, \\n \_item.so\_item\_pos as item\_position, \\n \_item.gross\_amount as item\_gross\_amount, \\n cast(\_item.gross\_amount as abap.fltp) \* 0.97 as item\_savings \\n \\} **Operator** **Meaning**\\ `+` Adds the operands `-` Subtracts the right operand from the left `*` Multiplies the operands `/` Divides the left operand by the right **`+`, `-`, `*`** **`INT1`** **`INT2`** **`INT4`** **`INT8`** **`DEC`** **`CURR`** **`QUAN`** **`DECFLOAT16`** **`DECFLOAT34`** **`FLTP`**\\ **`INT1`** `INT4` `INT4` `INT4` `INT8` `DEC` `CURR` `QUAN` `DECFLOAT16` `DECFLOAT34` - **`INT2`** `INT4` `INT4` `INT4` `INT8` `DEC` `CURR` `QUAN` `DECFLOAT16` `DECFLOAT34` - **`INT4`** `INT4` `INT4` `INT4` `INT8` `DEC` `CURR` `QUAN` `DECFLOAT16` `DECFLOAT34` - **`INT8`** `INT8` `INT8` `INT8` `INT8` `DEC` `CURR` `QUAN` `DECFLOAT16` `DECFLOAT34` - **`DEC`** `DEC` `DEC` `DEC` `DEC` `DEC` `CURR` `QUAN` `DECFLOAT16` `DECFLOAT34` - **`CURR`** `CURR` `CURR` `CURR` `CURR` `CURR` `CURR` `DEC` `DECFLOAT16` `DECFLOAT34` - **`QUAN`** `QUAN` `QUAN` `QUAN` `QUAN` `QUAN` `DEC` `QUAN` `DECFLOAT16` `DECFLOAT34` - **`DECFLOAT16`** `DECFLOAT16` `DECFLOAT16` `DECFLOAT16` `DECFLOAT16` `DECFLOAT16` `DECFLOAT16` `DECFLOAT16` `DECFLOAT16` `DECFLOAT34` - **`DECFLOAT34`** `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` `DECFLOAT34` - **`FLTP`** - - - - - - - - - `FLTP` **`/`** **`DECFLOAT16`** **`DECFLOAT34`** **`FLTP`**\\ **`DECFLOAT16`** `DECFLOAT16` `DECFLOAT34` - **`DECFLOAT34`** `DECFLOAT34` `DECFLOAT34` - **`FLTP`** - - `FLTP` abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_expressions\_v1.html