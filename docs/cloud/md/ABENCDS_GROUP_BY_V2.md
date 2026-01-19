---
title: "ABENCDS_GROUP_BY_V2"
description: |
  ABENCDS_GROUP_BY_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_GROUP_BY_V2.htm"
abapFile: "ABENCDS_GROUP_BY_V2.html"
keywords: ["select", "if", "case", "try", "data", "types", "ABENCDS", "GROUP"]
---

``... GROUP BY field1, field2, ...               [`path_expr1`](ABENCDS_PATH_EXPRESSION_V2.html), [`path_expr2`](ABENCDS_PATH_EXPRESSION_V2.html), ...``

Groups those rows in the result set of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) that have the same content in the elements specified by the fields `field1`, `field2, ...` or [path expressions](ABENCDS_PATH_EXPRESSION_V2.html)\\ `path_expr1`, `path_expr2` ... as a single row. The fields must be specified using the same names as the fields in the data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html). The use of alias names defined in the current CDS view entity with [`AS`](ABENCDS_SELECT_LIST_ENTRY_V2.html) is not allowed.

If the view entity makes use of multiple [data sources](ABENCDS_DATA_SOURCE_V2.html) by using join expressions, then all fields listed after `GROUP BY` must be prefixed with the name of their data source separated by a period (.). The prefix is required in all cases, even if the field names are unique.

The `GROUP BY` clause is mandatory if the `SELECT` list contains any aggregate expressions. All elements that are **not** defined using an aggregate expression must be listed after `GROUP BY`.

After `GROUP BY`, only [fields](ABENCDS_FIELD_V2.html) or [path expressions](ABENCDS_PATH_EXPRESSION_V2.html) that are listed in the `SELECT` list can be specified. Other [elementary operands](ABENCDS_OPERANDS_V2.html) or [expressions](ABENCDS_EXPRESSIONS_V2.html) cannot be specified after `GROUP BY`.

When the CDS view entity is accessed, the results of the aggregate expressions are calculated from the values of the grouped rows. Several rows are condensed into one row and the result of the calculation is one field of the result set.

The fields specified after `GROUP BY` can have any [built-in data type](ABENDDIC_BUILTIN_TYPES.html) except for `LCHR`, `LRAW`, `STRING`, `RAWSTRING`, or `GEOM_EWKB`.

A [`WHERE` condition](ABENCDS_WHERE_CLAUSE_V2.html) is evaluated **before** the rows are combined using `GROUP BY`.

When the CDS view entity `DEMO_CDS_VIEW_ENTITY_GROUP_BY` shown below is accessed, all flights that have the same carrier ID and connection ID are condensed into one row. The number of rows and the average occupation is calculated for each group. The fields `carrid` and `connid`, which are used in the string function `concat_with_space` in the `SELECT` list, must be listed after `GROUP BY`.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@AbapCatalog.viewEnhancementCategory: \[#PROJECTION\_LIST, #GROUP\_BY\]\\ndefine view entity DEMO\_CDS\_VIEW\_ENTITY\_GROUP\_BY\\n as select from sflight\\n\\{\\n concat\_with\_space(carrid, connid, 1) as ID,\\n count(\*) as col\_count,\\n avg( seatsocc as abap.dec( 20, 2 )) as col\_avg\\n\\}\\ngroup by\\n carrid,\\n connid\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_select\_clauses\_v2.html