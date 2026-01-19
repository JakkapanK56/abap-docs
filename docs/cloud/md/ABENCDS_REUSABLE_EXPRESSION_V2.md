---
title: "ABENCDS_REUSABLE_EXPRESSION_V2"
description: |
  ABENCDS_REUSABLE_EXPRESSION_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_REUSABLE_EXPRESSION_V2.htm"
abapFile: "ABENCDS_REUSABLE_EXPRESSION_V2.html"
keywords: ["select", "if", "case", "try", "data", "ABENCDS", "REUSABLE", "EXPRESSION"]
---

`... $projection.reuse_exp ...`

`$projection.reuse_exp` reuses expressions defined in the `SELECT` list [`select_list`](ABENCDS_SELECT_LIST_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) in an operand position of the `SELECT` list of the same CDS view entity.

[Reuse expressions](ABENCDS_REUSE_EXPRESSION_GLOSRY.html) can currently be used in the following operand positions:

The reused expression `reuse_exp` can contain the following operands or expressions:

Reuse of expressions in a `SELECT` list.

-   In the `SELECT` list as part of an expression.
-   In the `ON` clause of an [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) (as described in topic [CDS DDL - CDS View Entity, `ASSOCIATION`](ABENCDS_SIMPLE_ASSOCIATION_V2.html).

-   A [field](ABENCDS_FIELD_V2.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the current CDS view entity
-   a [literal](ABENCDS_LITERAL_V2.html)
-   An [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html)
-   A [cast expression](ABENCDS_CAST_EXPRESSION_V2.html)
-   A [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V2.html)
-   A [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html)
-   A [case distinction](ABENCDS_CASE_EXPRESSION_V2.html)
-   A [path expression](ABENCDS_PATH_EXPRESSION_V2.html)

-   Cycles must not occur and result in a syntax check error.
-   The following represents a cycle and is not allowed.
-   `... \{ a + $projection.z as x, 2 * $projection.x as y, b + $projection.y as z \} ...`\\
    Explanation: element x uses z, which in turns uses y, which again uses x.
-   Currently, reuse expressions **cannot** be used in the [`WHERE`](ABENCDS_WHERE_CLAUSE_V2.html), [`GROUP BY`](ABENCDS_GROUP_BY_V2.html), or [`HAVING`](ABENCDS_HAVING_CLAUSE_V2.html) clause or within a [filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V2.html).
-   [Parameters](ABENCDS_PARAMETER_V2.html), [session variables](ABENCDS_SESSION_VARIABLE_V2.html), and [aggregate functions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html) are currently **not** possible as part of the reuse expression. If you try to reuse such an element of the `SELECT` list, an error message occurs.
-   If a field is specified as [CDS amount field](ABENCDS_AMOUNT_FIELD.html) or [CDS quantity field](ABENCDS_QUANTITY_FIELD.html) by assigning a currency key or unit key, and if this field is reused in the same view with `$projection`, then the reference information is lost and the field is handled as normal numeric value.
-   If a [calculated quantity](ABENCDS_CALCULATED_QUANTITY.html) is reused via `$projection`, the reference information is lost, but the characteristic as calculated quantity is kept. The required reference information needs to be assigned to the result.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, expression reuse'\\n\\ndefine view entity DEMO\_CDS\_EXPRESSION\_REUSE\\n as select from demo\_expressions\\n\\{\\n\\n //field\\n key id as field1,\\n concat($projection.field1, 'x') as field\_reuse,\\n\\n //literal\\n abap.char'hallo' as lit1,\\n concat($projection.lit1, 'x') as lit\_reuse,\\n\\n //arithmetic expression\\n abap.decfloat34'123.45E6' as arith,\\n $projection.arith \* 2 as arith\_reuse,\\n\\n //cast expression\\n cast(char1 as abap.numc(10)) as cast1,\\n coalesce($projection.cast1, numc2) as cast\_reuse,\\n\\n //built-in function\\n abs(dec1) as builtIn,\\n cast($projection.builtIn as abap.int4) as builtIn\_reuse,\\n\\n //case distinction\\n case char2\\n when 'Anna' then 'X'\\n when 'Lisa' then 'Y'\\n else '-'\\n end as case1,\\n left($projection.case1, 1) as case\_reuse\\n\\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html