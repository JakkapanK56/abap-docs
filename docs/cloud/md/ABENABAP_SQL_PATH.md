---
title: "ABENABAP_SQL_PATH"
description: |
  ABENABAP_SQL_PATH - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_PATH.htm"
abapFile: "ABENABAP_SQL_PATH.html"
keywords: ["select", "insert", "do", "if", "case", "class", "data", "ABENABAP", "SQL", "PATH"]
---

``... [source~]\\_assoc1[[`sql_para`](ABENABAP_SQL_PARAMETERS.html)][[`attributes`](ABENABAP_SQL_PATH_FILTER.html)]\              [\\_assoc2[[`sql_para`](ABENABAP_SQL_PARAMETERS.html)][[`attributes`](ABENABAP_SQL_PATH_FILTER.html)]]\              [\\...] ...``

Specifies an [SQL path expression](ABENSQL_PATH_EXPRESSION_GLOSRY.html). ABAP SQL statements can contain path expressions in certain operand positions whose root element must be a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) or [CTE association](ABENCTE_ASSOCIATION_GLOSRY.html) exposed as follows:

In a path expression, the names of associations `_assoc1`, `_assoc2`, ... are separated by backslashes (`\\`). Associations specified after the root element must be exposed in the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the directly prefixed association in the path expression. No CDS associations can occur that are defined in a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) or whose association targets are a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html).

When a `SELECT` statement with path expressions is compiled, the joins represented by them are implicitly inserted in the [`FROM`](ABAPFROM_CLAUSE.html) clause of the statement and the resulting additional data sources are implicitly evaluated at the usage locations of the path expressions. The join conditions of the associations and the other conditions of the CDS entities or common table expressions involved are respected. Path expressions can be used:

When specifying columns and when exposing an association, an optional `source` unit can be specified in front of the path expression, separated by a [column selector](ABENTABLE_COMP_SELECTOR_GLOSRY.html)\\ `~`. The first association of this unit is exposed. This is either a CDS view, a CDS hierarchy, or a common table expression. However, when used as a data source, the path expression follows the exposed unit directly anyway.

An association has the [cardinality](ABENCARDINALITY_GLOSRY.html) defined implicitly or explicitly in the CDS entity or common table expression by default. Syntax warnings or syntax errors occur when the cardinality does not match the way the path expression is used in the `SELECT` statement. If the association has the cardinality *to one*, the addition [`MANY TO ONE`](ABAPSELECT_JOIN.html) is added implicitly in the case of a `LEFT OUTER JOIN` on databases where this is supported. The consequences of this behavior should be noted. The following can be specified after an association:

A path expression can be split across multiple lines of source code at the following places:

Certain [restrictions](ABENABAP_SQL_PATH_RESTRICTIONS.html) apply to the associations of path expressions in ABAP SQL.

Simple path specified for the CDS association `_spfli_scarr` from the following CDS view entity:

The class `CL_DEMO_CDS_ASSOCIATION` uses the following `SELECT` statement with the simple path `\\_spfli_scarr` for the view and compares it with accesses to the data that work in the same way.

A `SELECT` statement that accesses the entire `SELECT` list of the view and a `SELECT` statement that accesses a view with a join of the same type produce the same result.

-   In the same `SELECT` statement of a [query](ABENASQL_QUERY_GLOSRY.html), the name of the [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is used to access one of the following [data sources](ABAPSELECT_DATA_SOURCE.html):

-   A [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) that [exposes](ABENCDS_SELECT_LIST_ASSOCIATION_V2.html) the CDS association in its [`SELECT` list](ABENCDS_SELECT_LIST_V2.html).
-   A [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) that [exposes](ABENCDS_SELECT_LIST_ASSOCIATION_V1.html) the CDS association in its [`SELECT` list](ABENCDS_SELECT_LIST_V1.html).
-   A [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html) that [exposes](ABENCDS_F1_HIERA_ELEMENT.html) the CDS association in its [element list](ABENCDS_F1_HIERA_ELEMENT_LIST.html).

-   In a [`WITH`](ABAPWITH.html) statement, the association with the addition [`WITH ASSOCIATIONS`](ABAPWITH_ASSOCIATIONS.html) is exposed by a preceding [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html). This can be one of the following:

-   [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) or [CTE association](ABENCTE_ASSOCIATION_GLOSRY.html)\\ [exposed](ABAPWITH_ASSOCIATIONS_USING.html) using a path expression.
-   [CTE association](ABENCTE_ASSOCIATION_GLOSRY.html)\\ [defined and exposed](ABAPWITH_ASSOCIATIONS_DEFINING.html) for the common table expression.

-   In the [column specifications](ABENABAP_SQL_COLUMNS.html) of `SELECT` statements of [queries](ABENASQL_QUERY_GLOSRY.html).
-   The path expression represents a left outer join (`LEFT OUTER JOIN`) by default.
-   As a [data source](ABAPSELECT_DATA_SOURCE.html) of the [`FROM` clause](ABAPFROM_CLAUSE.html) in [queries](ABENASQL_QUERY_GLOSRY.html).
-   The path expression represents an inner join (`INNER JOIN`) by default.
-   To [expose](ABAPWITH_ASSOCIATIONS_USING.html) an association of a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) in the [`WITH`](ABAPWITH.html) statement.

-   Actual parameters can be passed to input parameters of the data source of a CDS association by using [`sql_para`](ABENABAP_SQL_PARAMETERS.html).
-   The following attributes can be specified for the section of the path expression using [`attributes`](ABENABAP_SQL_PATH_FILTER.html):

-   Cardinality of the association
-   Category of the join expression
-   Filter conditions

-   In front of a backslash (`\\`), but not in the [`SELECT`](ABAPSELECT_LIST.html) list
-   In blanks in parentheses of parameter passing
-   In blanks in square brackets for attributes

-   When the associations of the path expressions are defined as joins, an attempt is made to map them to as few join expressions as possible. Associations with identical [parameter passing](ABENABAP_SQL_PARAMETERS.html) and semantically identical [attributes](ABENABAP_SQL_PATH_FILTER.html) generally produce only one join expression.
-   If the [column specifications](ABENABAP_SQL_COLUMNS.html) of different [clauses](ABENSELECT_CLAUSES.html) are checked for matches in a `SELECT` statement, any parameters specified and attributes are also checked. Here, the same host variables must also be used in the same operand positions.
-   No path expressions can be created using CDS associations that are [exposed](ABENCDS_F1_ABSENT_ASSOCIATION.html) in the element list of [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html).
-   When a path expression of a `TO EXACT ONE` association is used with [attributes](ABENABAP_SQL_PATH_FILTER.html), then the join is rewritten to a `TO ONE` join on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) to avoid potential cardinality conflicts. This can be mitigated by explicitly specifying the cardinality `TO EXACT ONE` as attribute of the path expression.
-   When the target entities of a path expression of a `TO EXACT ONE` association or of a `TO EXACT ONE` join have [CDS access controls](ABENCDS_ACCESS_CONTROL_GLOSRY.html) assigned, then the join is rewritten to a `TO ONE` join on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) to avoid potential cardinality conflicts.

-   [Path Expressions, Use in the `SELECT` List](ABENPATH_EXPR_IN_COLSPEC_ABEXA.html)
-   [Path Expressions, Use in the `FROM` Clause](ABENPATH_EXPR_IN_FROM_CLAUSE_ABEXA.html)

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_ASSOCIATION\_VE\\n as select from spfli\\n association \[1..1\] to scarr as \_spfli\_scarr\\n on $projection.id = \_spfli\_scarr.carrid\\n\\{\\n \_spfli\_scarr,\\n key spfli.carrid as id,\\n key \_spfli\_scarr\[inner\].carrname as carrier,\\n key spfli.connid as flight,\\n spfli.cityfrom as departure,\\n spfli.cityto as destination\\n\\}\\n SELECT id, \\n \\\\\_spfli\_scarr\[ INNER MANY TO ONE \]-carrname AS carrier, \\n flight, \\n departure, \\n destination \\n FROM demo\_cds\_association\_ve \\n INTO TABLE @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html