---
title: "ABENCDS_GROUP_BY_V1"
description: |
  ABENCDS_GROUP_BY_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_GROUP_BY_V1.htm"
abapFile: "ABENCDS_GROUP_BY_V1.html"
keywords: ["select", "if", "try", "data", "types", "ABENCDS", "GROUP"]
---

``... GROUP BY field1, field2, ...               [`path_expr1`](ABENCDS_PATH_EXPRESSION_V1.html), [`path_expr2`](ABENCDS_PATH_EXPRESSION_V1.html), ...``

Groups those rows in the result set of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) that have the same content in the elements specified by the fields `field1`, `field2`, ... or [path expressions](ABENCDS_PATH_EXPRESSION_V1.html)\\ `path_expr1`, `path_expr2` ... as a single row. The fields must be specified using the same names as the fields in the data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html). It is not allowed to use the alias names defined in the current CDS view using with [`AS`](ABENCDS_SELECT_LIST_ENTRY_V1.html).

The `GROUP BY` clause is mandatory if the `SELECT` list contains any aggregate expressions. All elements that are **not** defined using an aggregate expression must be listed after `GROUP BY`. Literals and other expressions cannot be specified after `GROUP BY`.

When the CDS view is accessed, the results of the aggregate expressions are calculated from the values of the corresponding fields of the combined rows and the results are placed in the element of the resulting row in the result set.

The fields specified after `GROUP BY` cannot be of the [type](ABENDDIC_BUILTIN_TYPES.html)\\ `LCHR`, `LRAW`, `STRING`, `RAWSTRING`, or `GEOM_EWKB`.

A [`WHERE` condition](ABENCDS_WHERE_CLAUSE_V1.html) is evaluated before the rows are combined using `GROUP BY`.

When a CDS view is accessed, the view returns `sales_order` for every role of a business partner and returns the number of business partners and the total of all gross amounts for every currency.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW' \\ndefine view sales\_order as \\n select from snwd\_so \\n inner join \\n snwd\_bpa on buyer\_guid = snwd\_bpa.node\_key \\n \\{ bp\_role as role, //e.g. customer or supplier \\n count(distinct buyer\_guid) as partners\_count, \\n @Semantics.currencyCode snwd\_so.currency\_code, \\n @Semantics.amount.currencyCode: 'currency\_code' \\n sum(snwd\_so.gross\_amount) as sum\_gross\_amount \\} \\n group by bp\_role, snwd\_so.currency\_code; abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_select\_clauses\_v1.html