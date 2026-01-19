---
title: "ABENCDS_SEARCHED_CASE_EXPR_V2"
description: |
  ABENCDS_SEARCHED_CASE_EXPR_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SEARCHED_CASE_EXPR_V2.htm"
abapFile: "ABENCDS_SEARCHED_CASE_EXPR_V2.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENCDS", "SEARCHED", "CASE", "EXPR"]
---

``... CASE WHEN [`cds_cond1`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) THEN result1          [WHEN [`cds_cond2`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) THEN result2]\          [WHEN [`cds_cond3`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) THEN result3]\            ...          [\{ELSE resultn | ELSE NULL\}]\      END ...``

[Complex case distinction](ABENCOMPLEX_CASE_GLOSRY.html) (searched case) in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). The case distinction evaluates the conditions [`cds_cond1`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html), [`cds_cond2`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html), ... and returns the first operand specified after `THEN` for which the comparison is true as result. If none of the conditions are true, the result is determined by the `ELSE` branch:

If `ELSE` is not specified, the result is the [null value](ABENNULL_VALUE_GLOSRY.html).

The following rules apply to the conditions specified after `WHEN`:

Special rules apply to [CDS enumerated elements](ABENCDS_ENUM_ELEMENT_GLOSRY.html) in complex case expressions. They are described in the topic [CDS DDL - Using CDS Enumerated Types](ABENCDS_USE_ENUM_TYPE.html).

The result data type of a case expression is determined by all `THEN` branches and the `ELSE` branch. If the result data type is a [CDS amount field](ABENCDS_AMOUNT_FIELD_GLOSRY.html), a [CDS quantity field](ABENCDS_QUANTITY_GLOSRY.html), or a [CDS calculated quantity](ABENCDS_CALCULATED_QUANTITY_GLOSRY.html), a reference annotation must be assigned. The following table shows how the result data type is calculated if one or more of the operands `result1, result2,` ... are amount and/or quantity fields.

The following CDS view entity has a complex case distinction in the `SELECT` list.

The class `CL_DEMO_CDS_SEARCHED_CASE_VE` uses [`SELECT`](ABAPSELECT.html) to access the view and shows the result.

-   `ELSE resultn` returns the value `resultn`.
-   `ELSE NULL` returns the [null value](ABENNULL_VALUE_GLOSRY.html).

-   All [relational operators](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) are allowed. That means that comparison operators, `BETWEEN`, `LIKE`, `IS NULL` and `IS INITIAL` are allowed.
-   The Boolean operators `NOT`, `AND`, and `OR` are allowed.
-   `lhs` expects a [field](ABENCDS_FIELD_V2.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html), a [path expression](ABENCDS_PATH_EXPRESSION_V2.html), a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V2.html), an [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html), or a [cast expression](ABENCDS_CAST_EXPRESSION_V2.html).
-   If a comparison operator is used, then `lhs` can also be an [aggregate function](ABENCDS_AGGREGATE_FUNCTIONS_V2.html), a [case expression](ABENCDS_CASE_EXPRESSION_V2.html), an arithmetic expression, or a parameter.
-   If the relational operator `IS NULL` is used, then `lhs` can also be another [case expression](ABENCDS_CASE_EXPRESSION_V2.html), an [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html), or a [parameter](ABENCDS_PARAMETER_V2.html).
-   `rhs` can be a [field](ABENCDS_FIELD_V2.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html), a [literal](ABENCDS_LITERAL_V2.html), a [parameter](ABENCDS_PARAMETER_V2.html), a [session variable](ABENCDS_SESSION_VARIABLE_V2.html), a [cast expression](ABENCDS_CAST_EXPRESSION_V2.html), a [reuse expression](ABENCDS_REUSABLE_EXPRESSION_V2.html), a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V2.html), an [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html), or a path expression.
-   If a comparison operator is used, then `rhs` can also be an [aggregate function](ABENCDS_AGGREGATE_FUNCTIONS_V2.html), a [case expression](ABENCDS_CASE_EXPRESSION_V2.html), or an [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html).
-   **Exception:** for the operator [`LIKE`](ABENCDS_COND_EXPR_LIKE_V2.html), `rhs` must be a character literal.
-   A field of a data source can be specified using a path expression `[path_expr](ABENCDS_PATH_EXPRESSION_V2.html).element`, as long as the CDS associations of the expression do not have any [CDS transient entities](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) as [association targets](ABENASSOCIATION_TARGET_GLOSRY.html) and the expression is unique:

-   The [cardinality](ABENCARDINALITY_GLOSRY.html) of the contained [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) is to-one.
-   The path expression contains the [cardinality specification](ABENCDS_PATH_EXPR_CARD_V2.html) attribute to-one.

-   `element` can be used to specify an element of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the last CDS association of the path.

-   It is not mandatory that the operands and the result point to the same reference field.
-   The following rules apply to amount fields of data type `CURR`:

-   fields of data type `CURR` are compatible only to other amount fields of data type `CURR` and only if they have exactly the same number of decimal places.
-   To combine an amount field of data type `CURR` with a field of another data type, a conversion to data type `DECFLOAT34` using the conversion function [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) is required.

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the [HANA-specific SQL documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_searched\_case\_ve\\n as select from\\n spfli\\n \\{\\n key carrid,\\n key connid,\\n distance,\\n distid,\\n case\\n when distance >= 2000 then 'long-haul flight'\\n when distance >= 1000 and\\n distance < 2000 then 'medium-haul flight'\\n when distance < 1000 then 'short-haul flight'\\n else 'error'\\n end as flight\_type\\n \\}\\n where\\n distid = 'MI'\\n **operand1/operand2** **Amount** **Quantity** **Calculated Quantity** **Number**\\ **Amount** amount calculated quantity calculated quantity calculated quantity **Quantity** calculated quantity quantity calculated quantity calculated quantity **Calculated Quantity** calculated quantity calculated quantity calculated quantity calculated quantity **Number** calculated quantity calculated quantity calculated quantity number abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_case\_expression\_v2.html