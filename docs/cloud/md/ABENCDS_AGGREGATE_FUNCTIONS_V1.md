---
title: "ABENCDS_AGGREGATE_FUNCTIONS_V1"
description: |
  ABENCDS_AGGREGATE_FUNCTIONS_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_AGGREGATE_FUNCTIONS_V1.htm"
abapFile: "ABENCDS_AGGREGATE_FUNCTIONS_V1.html"
keywords: ["select", "do", "if", "case", "try", "data", "types", "ABENCDS", "AGGREGATE", "FUNCTIONS"]
---

``... \{ MAX( [ALL|DISTINCT] arg )      | MIN( [ALL|DISTINCT] arg )      | AVG( [ALL|DISTINCT] arg [`[AS dtype]`](ABENCDS_AVG_AS_V1.html) )      | SUM( [ALL|DISTINCT] arg )      | COUNT( DISTINCT arg )      | COUNT(*) \} ...``

Aggregate expression in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). An aggregate expression calculates a single value from an operand `arg` by calling an aggregate function from multiple rows of a result set. The operands can have any [data type](ABENDDIC_BUILTIN_TYPES.html) except `LCHR`, `LRAW`, `STRING`, `RAWSTRING`, or `GEOM_EWKB`. The following table shows the possible aggregate functions:

If `ALL` is used, all rows in the result set are respected, which is the standard setting. If `DISTINCT` is used, only distinct values of `arg` are respected.

The following can be specified for `arg`:

The data type of the result is defined when the CDS view is activated and is determined by the aggregate function and the value range of the data types of the operands. If the result of aggregate function `AVG` is returned in a result set, the result type is `FLTP`. As the interim result in a clause, the result type can be platform-dependent. With addition [`AS dtype`](ABENCDS_AVG_AS_V1.html), the result type can be defined for every operand position.

Aggregate expressions can be used as [elements](ABENCDS_SELECT_LIST_ENTRY_V1.html) of a [`SELECT` list](ABENCDS_SELECT_LIST_V1.html). Here they need an alternative element name defined using `AS` and require a [`GROUP BY` clause](ABENCDS_GROUP_BY_V1.html) to be used. Aggregate expressions can be compared with [literals](ABENCDS_LITERAL_V1.html) in a [`HAVING` condition](ABENCDS_HAVING_CLAUSE_V1.html).

In the `SELECT` list of the CDS view `sales_order`, aggregate expressions calculate the sum, the minimum, and the maximum of the gross amounts of each business partner. Also, the number of requests is determined. An alternative element name is defined for each aggregation. The non-aggregated fields `buyer_guid` and `currency_code` are specified in the `GROUP BY` clause.

-   A [literal](ABENCDS_LITERAL_V1.html)
-   A field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html) of the current CDS view
-   A [path expression](ABENCDS_PATH_EXPRESSION_V1.html) that identifies a field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html)
-   A case distinction [`CASE`](ABENCDS_CASE_EXPRESSION_V1.html) that returns a value

-   The aggregate expression `SUM` is calculated on the database. The database platform determines whether an overflow occurs if the result of an aggregate expression exceeds its value range.
-   See also:

-   [SAP HANA SQL Reference Guide, `SUM` Function (Aggregate)](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/03958a1eb0ad4950b00dedd8fdda475a)
-   [SAP HANA SQL Reference Guide, Numerical Effects](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/4ee2f261e9c44003807d08ccc2e249ac)

-   The names of the aggregate functions `AVG`, `COUNT`, `MAX`, `MIN`, and `SUM` are protected and cannot be used as user-defined names.
-   To add aggregate expressions in the `SELECT` list to a CDS view using [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html), the values `#PROJECTION_LIST` and `#GROUP_BY` must be specified with the annotation [`AbapCatalog.viewEnhancementCategory[ ]`](ABENCDS_VIEW_ANNO_V1.html).
-   The result of the aggregate functions `AVG` in data type `FLTP` is platform-dependent.
-   **Caution** When using `count(*)` on a [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) table which has no entries, then no result is returned. The expected behavior would be that a '0' is returned, but instead, the result field remains empty (it also does not contain the [null value](ABENNULL_VALUE_GLOSRY.html)).
-   `count(*)` on an empty, [client-independent](ABENCLIENT_DEPENDENT_GLOSRY.html) table returns '0', as expected.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW' \\ndefine view sales\_order as \\n select from snwd\_so \\n \\{ key buyer\_guid, \\n @Semantics.currencyCode \\n currency\_code, \\n @Semantics.amount.currencyCode: 'currency\_code' \\n sum(gross\_amount) as sum\_gross\_amount, \\n @Semantics.amount.currencyCode: 'currency\_code' \\n min(gross\_amount) as min\_gross\_amount, \\n @Semantics.amount.currencyCode: 'currency\_code' \\n max(gross\_amount) as max\_gross\_amount, \\n @Semantics.amount.currencyCode: 'currency\_code' \\n avg(gross\_amount) as avg\_gross\_amount, \\n count(\*) as sales\_orders\_count \\} \\n group by buyer\_guid, currency\_code **Aggregate Function** **Meaning** **Result Type**\\ `MAX` Greatest value of `arg` Data type of `arg`\\ `MIN` Least value of `arg` Data type of `arg`\\ `AVG` Average value of `arg` (`arg` must be numeric). Type [`INT8`](ABENDDIC_BUILTIN_TYPES.html) is only supported with addition [`AS dtype`](ABENCDS_AVG_AS_V1.html). The types [`DF16_...`](ABENDDIC_BUILTIN_TYPES.html), [`DF34_...`](ABENDDIC_BUILTIN_TYPES.html) for decimal free floating numbers are not supported. The types [`DATN`](ABENDDIC_BUILTIN_TYPES.html), [`TIMN`](ABENDDIC_BUILTIN_TYPES.html), and [`UTCL`](ABENDDIC_BUILTIN_TYPES.html) are not supported either. , [`FLTP`](ABENDDIC_BUILTIN_TYPES.html), platform-dependent interim result or [`dtype`](ABENCDS_AVG_AS_V1.html)\\ `SUM` Sum of `arg` (`arg` must be numeric). The types [`DF16_...`](ABENDDIC_BUILTIN_TYPES.html), [`DF34_...`](ABENDDIC_BUILTIN_TYPES.html) for decimal free floating numbers are not supported. The types [`DATN`](ABENDDIC_BUILTIN_TYPES.html), [`TIMN`](ABENDDIC_BUILTIN_TYPES.html), and [`UTCL`](ABENDDIC_BUILTIN_TYPES.html) are not supported either. Data type of `arg`\\ `COUNT` If `DISTINCT arg` is specified, the number of distinct values of `arg` is counted; if `*` is specified, the number of rows in the result set is counted. \\ [`INT4`](ABENDDIC_BUILTIN_TYPES.html) abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_expressions\_v1.html