---
title: "ABENCDS_AGGREGATE_FUNCTIONS_V2"
description: |
  ABENCDS_AGGREGATE_FUNCTIONS_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_AGGREGATE_FUNCTIONS_V2.htm"
abapFile: "ABENCDS_AGGREGATE_FUNCTIONS_V2.html"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "ABENCDS", "AGGREGATE", "FUNCTIONS"]
---

``... \{ MAX( [ALL|DISTINCT] arg )      | MIN( [ALL|DISTINCT] arg )      | AVG( [ALL|DISTINCT] arg [`AS dtype`](ABENCDS_AVG_AS_V2.html) )      | SUM( [ALL|DISTINCT] arg )      | COUNT( DISTINCT arg )      | COUNT(*) \} ...``

[Aggregate expression](ABENAGGREGATE_EXPRESSION_GLOSRY.html) in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). An aggregate expression calculates a single value from multiple rows of the operand `arg`. The operands can have any [data type](ABENDDIC_BUILTIN_TYPES.html) except for `LCHR`, `LRAW`, `STRING`, `RAWSTRING`, or `GEOM_EWKB`. The following table shows the possible aggregate functions:

If `ALL` is used, all rows in the result set are respected, which is the standard setting. If `DISTINCT` is used, only distinct values of `arg` are respected.

Null values:

The following can be specified for `arg`:

The data type of the result is defined when the CDS view entity is activated. It depends on the aggregate function used and the value range of the data types of the operands. The result of aggregate function `AVG` must always be specified with the addition [`AS dtype`](ABENCDS_AVG_AS_V2.html).

If the operand `arg` of an aggregate function is a [CDS amount field](ABENCDS_AMOUNT_FIELD_GLOSRY.html), a [CDS quantity field](ABENCDS_QUANTITY_GLOSRY.html), or a [CDS calculated quantity](ABENCDS_CALCULATED_QUANTITY_GLOSRY.html), the result type might require a reference annotation as well. The following table shows the result type depending on the operand type of all available aggregate functions.

Operand positions:

The following CDS view entity demonstrates the usage of the aggregate expressions `AVG`, `SUM`, `MIN`, `MAX`, and `COUNT(*)`. An alternative element name is defined for each aggregation. The class `CL_DEMO_CDS_AGGREGATE_VE` fills the underlying database table, reads the view entity and returns the result.

Example for counting rows using `COUNT`. Field `count1` returns the result *1*, field `countNull` returns *0*. This demonstrates that `COUNT` with the addition `DISTINCT` ignores null values.

The following code snippet accesses the CDS view entity with ABAP SQL and returns the result.

-   If an argument of an aggregate function has the [null value](ABENNULL_VALUE_GLOSRY.html), it is ignored when the function is evaluated. This also applies to `COUNT` with the addition `DISTINCT`: null values are not considered as a distinct value, and are not counted.
-   The result of an aggregate function is a null value only if all the rows in the column in question contain a null value.
-   The aggregate function `COUNT` counts rows and never produces the null value.

-   A [literal](ABENCDS_LITERAL_V2.html)
-   A field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the current CDS view entity
-   A [parameter](ABENCDS_PARAMETER_V2.html)
-   A [session variable](ABENCDS_SESSION_VARIABLE_V2.html)
-   A [path expression](ABENCDS_PATH_EXPRESSION_V2.html) that identifies a field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html)
-   A case distinction [`CASE`](ABENCDS_CASE_EXPRESSION_V2.html) that returns a value
-   A cast expression
-   Any built-in function that returns a suitable data type
-   An [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html)
-   A [reuse expression](ABENCDS_REUSABLE_EXPRESSION_V2.html) using `$projection`

-   Aggregate expressions can be used as [elements](ABENCDS_SELECT_LIST_ENTRY_V2.html) of a [`SELECT` list](ABENCDS_SELECT_LIST_V2.html). There they need an alternative element name defined using `AS` and require a [`GROUP BY` clause](ABENCDS_GROUP_BY_V2.html). The [`GROUP BY` clause](ABENCDS_GROUP_BY_V2.html) must list all non-aggregated fields from the [`SELECT` list](ABENCDS_SELECT_LIST_V2.html).
-   Aggregate expressions can be compared with [literals](ABENCDS_LITERAL_V2.html) in a [`HAVING` condition](ABENCDS_HAVING_CLAUSE_V2.html).
-   Aggregate expressions can be used as operands in [built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V2.html), [cast expressions](ABENCDS_CAST_EXPRESSION_V2.html), or [case distinctions](ABENCDS_CASE_EXPRESSION_V2.html).
-   An aggregate expression can be used in the condition `cds_cond` of a [complex case distinction](ABENCDS_SEARCHED_CASE_EXPR_V2.html) as the operand `lhs` or as the operand `rhs` if a comparison operator is used as relational operator.

-   The aggregate expression `SUM` is calculated on the database. The database platform determines whether an overflow occurs if the result of `SUM` exceeds its value range.
-   See also:

-   [SAP HANA SQL Reference Guide, `SUM` Function (Aggregate)](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/03958a1eb0ad4950b00dedd8fdda475a)
-   [SAP HANA SQL Reference Guide, Numerical Effects](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/4ee2f261e9c44003807d08ccc2e249ac)

-   The names of the aggregate functions `AVG`, `COUNT`, `MAX`, `MIN`, and `SUM` are protected and cannot be used as user-defined names.
-   It is possible to add aggregate expressions to the `SELECT` list of a CDS view entity by means of a CDS view entity extension (using [`EXTEND VIEW ENTITY`](ABENCDS_EXTEND_VIEW_ENTITY.html)). The following conditions must be met: The extended entity must explicitly allow aggregate expressions and the annotation [`AbapCatalog.viewEnhancementCategory[ ]`](ABENCDS_VIEW_ENTITY_ANNO.html) must be set to `#PROJECTION_LIST` and `#GROUP_BY`.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_AGGREGATE\_VE\\n as select from demo\_expressions\\n \\{\\n avg( abs(num1) as abap.dec(12,2)) as average\_numeric\_func7,\\n sum( num1 ) as sum\_num1,\\n min( num1 ) as min\_num1,\\n max( num1 ) as max\_num1,\\n count(\*) as count1\\n \\}\\ngroup by\\n id\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_AGGREGATES\_VE\\n as select from scarr\\n\\{\\n count( distinct case carrid when 'LH' then 'LH' end ) as count1,\\n\\n count( distinct case carrid when 'XX' then 'LH' end ) as countNull\\n\\}\\nwhere\\n carrid = 'LH'\\n SELECT \* FROM demo\_cds\_aggregates\_ve INTO TABLE @FINAL(result). **Aggregate Function** **Meaning** **Result Type**\\ `MAX` Returns the greatest value of `arg` Data type of `arg`\\ `MIN` Returns the least value of `arg` Data type of `arg`\\ `AVG` Average value of `arg`. Must be specified with the addition [`AS dtype`](ABENCDS_AVG_AS_V2.html). The following data types are supported: [`INT1`, `INT2`, `INT4`, `INT8`](ABENDDIC_BUILTIN_TYPES.html), [`FLTP`](ABENDDIC_BUILTIN_TYPES.html), [`DEC`](ABENDDIC_BUILTIN_TYPES.html), [`CURR`](ABENDDIC_BUILTIN_TYPES.html), [`QUAN`](ABENDDIC_BUILTIN_TYPES.html), [`D16N`](ABENDDIC_BUILTIN_TYPES.html), and [`D34N`](ABENDDIC_BUILTIN_TYPES.html). Must be specified explicitly after [`AS`](ABENCDS_AVG_AS_V2.html). Possible data types are `DEC`, `CURR`, `QUAN`, `D16N`,`D34N`, and `FLTP`. `SUM` Sum of `arg`. The following data types are supported: [`INT1`, `INT2`, `INT4`, `INT8`](ABENDDIC_BUILTIN_TYPES.html), [`FLTP`](ABENDDIC_BUILTIN_TYPES.html), [`DEC`](ABENDDIC_BUILTIN_TYPES.html), [`CURR`](ABENDDIC_BUILTIN_TYPES.html), [`QUAN`](ABENDDIC_BUILTIN_TYPES.html), [`D16N`](ABENDDIC_BUILTIN_TYPES.html), and [`D34N`](ABENDDIC_BUILTIN_TYPES.html). Data type of `arg`\\ `COUNT` If `DISTINCT arg` is specified, the number of distinct values of `arg` is counted; if `*` is specified, the number of rows in the result set is counted. \\ [`INT4`](ABENDDIC_BUILTIN_TYPES.html) **Aggregate Function** **Type of Operand** **Result Type**\\ `MAX`, `MIN`, `SUM`, `AVG` amount amount `MAX`, `MIN`, `SUM`, `AVG` quantity quantity `MAX`, `MIN`, `SUM`, `AVG` calculated quantity calculated quantity `COUNT` amount, quantity, calculated quantity number of type `INT4` abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html