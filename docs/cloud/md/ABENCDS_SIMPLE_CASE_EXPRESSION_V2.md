---
title: "ABENCDS_SIMPLE_CASE_EXPRESSION_V2"
description: |
  ABENCDS_SIMPLE_CASE_EXPRESSION_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SIMPLE_CASE_EXPRESSION_V2.htm"
abapFile: "ABENCDS_SIMPLE_CASE_EXPRESSION_V2.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENCDS", "SIMPLE", "CASE", "EXPRESSION"]
---

`... CASE operand           WHEN operand1 THEN result1          [WHEN operand2 THEN result2]\           ...          [\{ELSE resultn | ELSE NULL\}]\      END ...`

[Simple case distinction](ABENSIMPLE_CASE_GLOSRY.html) in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). The case distinction compares the values of operand `operand` with operands `operand1`, `operand2`, ... and returns the first operand specified after `THEN` for which the comparison is true as result.

If no matches are found, the result is determined by the `ELSE` branch:

If `ELSE` is not specified, the result is the [null value](ABENNULL_VALUE_GLOSRY.html)

The operand `operand` must be [comparable](ABENCDS_COND_EXPR_TYPES_V2.html) with `operand1`, `operand2`, ... When the CDS view entity is activated, a result type is determined from the operands `result1`, `result2`, .... The operands of the `THEN` and `ELSE` branches must be compatible with each other.

The operands can have any [built-in data type](ABENDDIC_BUILTIN_TYPES.html) except for `LCHR`, `LRAW`, `STRING`, `RAWSTRING`, or `GEOM_EWKB`.

Special rules apply to CDS enumerated elements in case expressions. They are described in the topic [CDS DDL - Using CDS Enumerated Types](ABENCDS_USE_ENUM_TYPE.html).

The result data type of a case expression is determined by all `THEN` branches and the `ELSE` branch. If the result data type is a [CDS amount field](ABENCDS_AMOUNT_FIELD_GLOSRY.html), a [CDS quantity field](ABENCDS_QUANTITY_GLOSRY.html), or a [CDS calculated quantity](ABENCDS_CALCULATED_QUANTITY_GLOSRY.html), a reference annotation must be assigned. The following table shows how the result data type is calculated if one or more of the operands `result1, result2,` ... are amount and/or quantity fields.

The example shows a CDS view entity with two case distinctions.

The example shows a CDS view entity with two case distinctions using amount and quantity fields.

-   `ELSE resultn` returns the value `resultn`.
-   `ELSE NULL` returns the [null value](ABENNULL_VALUE_GLOSRY.html).

-   For `operand`, `operand1, operand2`, and for `result1, result2`, the following operands can be specified:

-   [Literals](ABENCDS_LITERAL_V2.html)
-   Fields of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the current CDS view entity
-   [Parameters](ABENCDS_PARAMETER_V2.html)
-   [Session variables](ABENCDS_SESSION_VARIABLE_V2.html)
-   [Arithmetic expressions](ABENCDS_ARITHMETIC_EXPRESSION_V2.html)
-   [Aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html)
-   A further case distinction
-   [Cast expressions](ABENCDS_CAST_EXPRESSION_V2.html)
-   [Built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V2.html)
-   [SQL-based scalar functions](ABENCDS_SQL_SCALAR_FUNCTION.html)
-   [Path expressions](ABENCDS_PATH_EXPRESSION_V2.html) that identify a field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html)
-   A [reuse expression](ABENCDS_REUSABLE_EXPRESSION_V2.html) using `$projection`.
-   [CDS enumerated elements](ABENCDS_ENUM_ELEMENT_GLOSRY.html).

-   It is not mandatory that the operands and the result point to the same reference field.
-   The following rules apply to amount fields of data type `CURR`:

-   fields of data type `CURR` are compatible only to other amount fields of data type `CURR` and only if they have exactly the same number of decimal places.
-   To combine an amount field of data type `CURR` with a field of another data type, a conversion to data type `DECFLOAT34` using the conversion function [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) is required.

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the [HANA-specific SQL documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_SIMPLE\_CASE\\n with parameters\\n p\_number : abap.dec(12,2)\\n as select from demo\_employees\\n\\{\\n key name,\\n case name\\n when 'Anna' then 'X'\\n when 'Lisa' then 'Y'\\n else '-'\\n end as first\_name,\\n\\n case $parameters.p\_number\\n when salary\\n then utcl\_current()\\n else null\\n end as salary\\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n\\ndefine view entity DEMO\_CDS\_SIMPLE\_CASE\_1\\n as select from DEMO\_CDS\_CALC\_QUANTITY\_BASE\\n\\{\\n key Id,\\n\\n //amounts and calculated quantities are compatible,\\n //result is a calculated quantity\\n\\n @Semantics.quantity.unitOfMeasure: 'Calcunit'\\n case\\n when Char1 = abap.char'A'\\n then Dec10 //cuky reference -> amount field\\n when Char1 = abap.char'B'\\n then 100 / Dec10 //calculated quantity\\n else 0\\n end as calcQuan,\\n Cuky,\\n concat( concat( Cuky , '/' ), Unit2 ) as calcUnit,\\n\\n\\n //CURR requires conversion to DECFLOAT34\\n\\n @Semantics.amount.currencyCode : 'cuky'\\n case when Char1 = abap.char'A'\\n then CURR\_TO\_DECFLOAT\_AMOUNT( Curr102 )\\n else Dec10 //cuky reference\\n end as CurrConv\\n\\}\\n **operand1/operand2** **Amount** **Quantity** **Calculated Quantity** **Number**\\ **Amount** amount calculated quantity calculated quantity calculated quantity **Quantity** calculated quantity quantity calculated quantity calculated quantity **Calculated Quantity** calculated quantity calculated quantity calculated quantity calculated quantity **Number** calculated quantity calculated quantity calculated quantity number abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_case\_expression\_v2.html