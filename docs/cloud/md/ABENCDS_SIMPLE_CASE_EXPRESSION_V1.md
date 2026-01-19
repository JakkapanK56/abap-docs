---
title: "ABENCDS_SIMPLE_CASE_EXPRESSION_V1"
description: |
  ABENCDS_SIMPLE_CASE_EXPRESSION_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SIMPLE_CASE_EXPRESSION_V1.htm"
abapFile: "ABENCDS_SIMPLE_CASE_EXPRESSION_V1.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENCDS", "SIMPLE", "CASE", "EXPRESSION"]
---

`... CASE operand           WHEN operand1 THEN result1          [WHEN operand2 THEN result2]\           ...          [ELSE resultn]\      END ...`

Simple [case distinction](ABENCDS_CASE_EXPRESSION_V1.html) (`simple case`) in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). The case distinction compares the values of operand `operand` with operands `operand1`, `operand2`, ... and produces the operand `result` as the result after the first `THEN` for which the comparison is true. If no matches are found, the `result` specified after `ELSE` is selected. If `ELSE` is not specified, the result is the [null value](ABENNULL_VALUE_GLOSRY.html).

The operand `operand` must be [comparable](ABENCDS_COND_EXPR_TYPES_V1.html) with `operand1`, `operand2`, ... When the CDS view is activated, a result type is determined from the operands `result1`, `result2`, ... that covers their types. The operands must be compatible with each other.

The operands cannot have the [type](ABENDDIC_BUILTIN_TYPES.html)\\ `LCHR`, `LRAW`, `STRING`, `RAWSTRING`, or `GEOM_EWKB`.

Case distinction in a `SELECT` list.

-   The following can be specified for `operand`:

-   [Fields](ABENCDS_FIELD_V1.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html) of the current CDS view
-   [Parameters](ABENCDS_PARAMETER_V1.html)
-   [Session variables](ABENCDS_SESSION_VARIABLE_V1.html)
-   [Path expressions](ABENCDS_PATH_EXPRESSION_V1.html) that identify a field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html)
-   [Built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V1.html)
-   [Arithmetic expressions](ABENCDS_ARITHMETIC_EXPRESSION_V1.html)

-   The following can be specified for `operand1`, `operand2`, ... :

-   [Literals](ABENCDS_LITERAL_V1.html) without a domain prefix
-   Fields of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html) of the current CDS view
-   [Path expressions](ABENCDS_PATH_EXPRESSION_V1.html) that identify a field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html)
-   [Built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V1.html)
-   A further case distinction

-   The following can be specified for `result1`, `result2`, ...:

-   [Literals](ABENCDS_LITERAL_V1.html) without a domain prefix
-   Fields of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html) of the current CDS view
-   [Path expressions](ABENCDS_PATH_EXPRESSION_V1.html) that identify a field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html)
-   [Aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V1.html)
-   [Casting expressions](ABENCDS_CAST_EXPRESSION_V1.html)
-   [Built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V1.html)
-   [Arithmetic expressions](ABENCDS_ARITHMETIC_EXPRESSION_V1.html)
-   A further case distinction

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the [HANA-specific SQL documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).

case partner.bp\_role \\n when '01' then 'customer' \\n when '02' then 'supplier' \\nend as partner\_role abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_expressions\_v1.html abencds\_case\_expression\_v1.html