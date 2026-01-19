---
title: "ABENCDS_ARIT_EXP_CALC_V2"
description: |
  ABENCDS_ARIT_EXP_CALC_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ARIT_EXP_CALC_V2.htm"
abapFile: "ABENCDS_ARIT_EXP_CALC_V2.html"
keywords: ["select", "if", "case", "data", "types", "ABENCDS", "ARIT", "EXP", "CALC"]
---

`... [-]operand1 [+|-|*|/ [-]operand2 [+|-|*|/ [-]operand3 ... ]] ...`

Arithmetic expression in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) that operates with [CDS amount fields](ABENCDS_AMOUNT_FIELD_GLOSRY.html), [CDS quantity fields](ABENCDS_QUANTITY_GLOSRY.html), and [calculated quantities](ABENCDS_CALCULATED_QUANTITY.html). The possible operators are as follows:

A minus sign (`-`) before an operand multiplies the operand by -1. The operands must be CDS amount fields, CDS quantity fields, CDS calculated quantities, or numeric values of one of the following data types: `INT1`, `INT2`, `INT4`, `INT8`, `DEC`, `DECFLOAT16`, `DECFLOAT34`, `FLTP`, or `QUAN`. The operands can be specified as follows:

The subexpressions of an arithmetic expression can be placed in parentheses `(...)`.

The following table shows how amount fields and quantity fields can be used with different operators and the type of the result:

Regarding the data types of the operands and of the result, the rules for arithmetic expressions apply, see topic [CDS DDL - CDS View Entity, `arith_expr`](ABENCDS_ARITHMETIC_EXPRESSION_V2.html). If the result is a calculated quantity, then the data type is always `DECFLOAT34`.

Note the following special conditions:

`SELECT` list of a CDS view entity with amounts and quantities in arithmetic expressions:

-   CDS amount fields and CDS quantity fields must be [fields](ABENCDS_FIELD_V2.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the current CDS view entity or [SQL-based scalar functions](ABENCDS_SQL_SCALAR_GLOSRY.html) with a suitable return value.
-   CDS calculated quantities can be [fields](ABENCDS_FIELD_V2.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the current CDS view entity, [reuse expressions](ABENCDS_REUSABLE_EXPRESSION_V2.html) using `$projection`, or [SQL-based scalar functions](ABENCDS_SQL_SCALAR_GLOSRY.html) with a suitable return value.
-   Numeric values can be specified as [literals](ABENCDS_LITERAL_V2.html), [fields](ABENCDS_FIELD_V2.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the current CDS view entity, [parameters](ABENCDS_PARAMETER_V2.html), [path expressions](ABENCDS_PATH_EXPRESSION_V2.html), [built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V2.html), [SQL-based scalar functions](ABENCDS_SQL_SCALAR_GLOSRY.html), [casting expressions](ABENCDS_CAST_EXPRESSION_V2.html), [case distinctions](ABENCDS_CASE_EXPRESSION_V2.html), [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html), other arithmetic expressions, or [reuse expressions](ABENCDS_REUSABLE_EXPRESSION_V2.html) using `$projection`. The data type must be appropriate.

-   If the result of an arithmetic expression is a CDS amount field, CDS quantity field, or a calculated quantity, then it is mandatory to assign a currency key, unit key, or calculated unit using the respective `Semantics` annotation. If no reference is assigned, a syntax check error occurs. References are not inherited or derived from the operands of the arithmetic expression.
-   The following rules apply to CDS amount fields of data type `CURR`:

-   In general, CDS amount fields of data type `CURR` cannot be used directly as operands of arithmetic expressions. They need to be converted to data type `DECFLOAT34` first, using the conversion function [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html).
-   There is only one exception to this rule: if all operands are of data type `CURR` and have exactly two decimal places, then they can be used in additions and subtractions (operators + and -).

-   A calculated quantity can be changed back to an amount or quantity field using the function [`GET_NUMERIC_VALUE`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html). Then, the required reference can be added using the required annotation, `Semantics.amount.currencyCode` or `Semantics.quantity.unitofMeasure`.
-   If one of the operands is of type `FLTP`, then it is a binary floating point expression, in which all operands must be of type `FLTP`.
-   When a division is performed with the operator `/`, the right operand cannot have the value 0.

-   The following conversion functions are available for CDS amount fields and CDS currency fields: [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) and [`GET_NUMERIC_VALUE`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html).
-   A calculated unit can be used as reference only once in a view. If a view contains several calculated quantity fields, each field needs a different calculated unit.

-   For the calculation of the field `my_calcQuan`, the currency field needs to be normalized using function `CURR_TO_DECFLOAT_AMOUNT`.
-   `my_calcQuan` is a calculated quantity of type `DECFLOAT34` and it requires a calculated unit reference.
-   `AmountAddition` is a field that adds two amount fields. The result is an amount field again and a new currency key needs to be assigned.
-   `newCalcQuan` multiplies a calculated quantity with a number. A calculated unit reference is required. Each calculated unit can be used only once in a view and therefore, a new calculated unit is assigned.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, calc quan in arith\_expr'\\n\\ndefine view entity DEMO\_CDS\_QUAN\_ARITH\\n as select from DEMO\_CDS\_CALC\_QUANTITY\_BASE\\n\\{\\n key Id,\\n Cuky,\\n\\n @Semantics.quantity.unitOfMeasure: 'my\_calcUnit'\\n curr\_to\_decfloat\_amount(Curr102) / Quan10 as my\_calcQuan,\\n concat( concat( Cuky , '/' ), Unit2 ) as my\_calcUnit,\\n\\n @Semantics.amount.currencyCode: 'Cuky'\\n //both fields have cuky references\\n Dec10 + D34n as AmountAddition,\\n\\n @Semantics.quantity.unitOfMeasure: 'calcUnit'\\n $projection.my\_calcQuan \* 5 as newCalcQuan,\\n concat( concat( Cuky , '/' ), Unit2 ) as calcUnit\\n\\}\\n **Operator** **Meaning**\\ `+` Adds the operands `-` Subtracts the right operand from the left `*` Multiplies the operands `/` Divides the left operand by the right **operands** / **operators** **/** **\*** **+, -**\\ amount, amount calculated quantity calculated quantity amount quantity, quantity calculated quantity calculated quantity quantity calculated quantity, amount calculated quantity calculated quantity amount amount, quantity calculated quantity calculated quantity - calculated quantity, number calculated quantity calculated quantity - calculated quantity, quantity calculated quantity calculated quantity quantity calculated quantity, calculated quantity calculated quantity \\
calculated quantity calculated quantity amount, number amount amount - number, amount calculated quantity amount - quantity, number quantity quantity - number, quantity calculated quantity quantity - abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_arithmetic\_expression\_v2.html