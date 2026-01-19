---
title: "ABENCDS_HAVING_CLAUSE_V2"
description: |
  ABENCDS_HAVING_CLAUSE_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_HAVING_CLAUSE_V2.htm"
abapFile: "ABENCDS_HAVING_CLAUSE_V2.html"
keywords: ["select", "do", "if", "case", "try", "data", "ABENCDS", "HAVING", "CLAUSE"]
---

``... HAVING [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) ...``

Defines a `HAVING` condition for the result set of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) after a [`GROUP BY` clause](ABENCDS_GROUP_BY_V2.html) is evaluated. A `HAVING` condition can only be specified together with `GROUP BY`. The `HAVING` condition removes all rows from the result set that do not meet the condition `cds_cond` specified after `HAVING`.

If the view entity makes use of multiple [data sources](ABENCDS_DATA_SOURCE_V2.html) by using join expressions, then all fields listed after `HAVING` must be prefixed with the name of their data source separated by a period (.). The prefix is required in all cases, even if the field names are unique.

The following rules apply to the condition specified after `HAVING`:

[Aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html) can be specified in the `HAVING` condition, which is not possible in the [`WHERE` condition](ABENCDS_WHERE_CLAUSE_V2.html).

When accessed, the CDS view entity `DEMO_CDS_VIEW_ENTITY_HAVING` returns details about all flights that have a maximal seats capacity of more than 500 seats.

-   As relational operators, comparison operators, `LIKE`, and `IS [NOT] NULL` can be used. `BETWEEN` and `IS INITIAL` are not supported.
-   The Boolean operators `NOT`, `AND`, and `OR` are allowed.
-   `lhs` can be a [field](ABENCDS_FIELD_V2.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html), a [path expression](ABENCDS_PATH_EXPRESSION_V2.html), an [aggregate expression](ABENCDS_AGGREGATE_FUNCTIONS_V2.html), a [case expression](ABENCDS_CASE_EXPRESSION_V2.html), or an [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html).
-   `rhs` can be an [element](ABENCDS_SELECT_LIST_ENTRY_V2.html) of the [`SELECT` list](ABENCDS_SELECT_LIST_V2.html), an [aggregate expression](ABENCDS_AGGREGATE_FUNCTIONS_V2.html), a [literal](ABENCDS_LITERAL_V2.html), a [parameter](ABENCDS_PARAMETER_V2.html), a path expression, a [case expression](ABENCDS_CASE_EXPRESSION_V2.html), or an [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html).
-   **Exception:** when using the operator `LIKE`, then `rhs` must be a character literal.
-   A field of a data source can be specified using a path expression `[path_expr](ABENCDS_PATH_EXPRESSION_V2.html).element`, as long as the CDS associations of the expression do not have any [CDS transient entities](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) as [association targets](ABENASSOCIATION_TARGET_GLOSRY.html) and all associations traversed have the cardinality to-one:

-   The [cardinality](ABENCARDINALITY_GLOSRY.html) of the contained [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) is to-one.
-   The path expression contains the [cardinality specification](ABENCDS_PATH_EXPR_CARD_V2.html) attribute to-one.

-   `element` can be used to specify an element of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the last CDS association of the path.
-   Other expressions and function calls are not allowed.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_VIEW\_ENTITY\_HAVING\\n as select from sflight\\n \\{\\n concat\_with\_space(carrid, connid, 1) as ID,\\n count(\*) as col\_count,\\n seatsmax\\n \\}\\n group by\\n carrid,\\n connid,\\n seatsmax\\n having\\n seatsmax > abap.int2'500'\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_select\_clauses\_v2.html