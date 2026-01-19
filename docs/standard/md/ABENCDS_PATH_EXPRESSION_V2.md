---
title: "ABENCDS_PATH_EXPRESSION_V2"
description: |
  ABENCDS_PATH_EXPRESSION_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_PATH_EXPRESSION_V2.htm"
abapFile: "ABENCDS_PATH_EXPRESSION_V2.html"
keywords: ["select", "do", "if", "case", "try", "class", "data", "ABENCDS", "PATH", "EXPRESSION"]
---

``... [source.]_assoc1[[`parameters`](ABENCDS_SELECT_PARAMETERS_V2.html)][[`attributes`](ABENCDS_PATH_EXPR_ATTR_V2.html)]\             [._assoc2[[`parameters`](ABENCDS_SELECT_PARAMETERS_V2.html)][[`attributes`](ABENCDS_PATH_EXPR_ATTR_V2.html)] ... ] ...``

Specifies an [SQL path expression](ABENSQL_PATH_EXPRESSION_GLOSRY.html) that can be used in a `SELECT` statement of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). A path expression of the [CDS DDL](ABENCDS_DDL_GLOSRY.html) is a sequence of [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) separated by periods (`.`) whose names are specified using `_assoc1`, `_assoc2`, and so on. If the first CDS association is exposed in another CDS entity, the name of this CDS entity can be specified as `source.` in front of the path expression.

A path expression may consist of a mixture of to-child associations, to-parent associations, and regular CDS associations.

The first CDS association of a path expression must be either defined in the current CDS view entity, or exposed as an element of the `SELECT` list or of the [element list](ABENCDS_F1_HIERA_ELEMENT_LIST.html) in a CDS view entity or CDS hierarchy that is a data source of the current view.

All further CDS associations must be exposed in the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the directly prefixed CDS association in the path expression. It is not possible to use a CDS association in a path expression that is defined in a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) or in a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html).

[`attributes`](ABENCDS_PATH_EXPR_ATTR_V2.html) can be used to specify attributes in angle brackets after every CDS association. These attributes define the following further properties of this section of the path expression:

If the association target of a specified CDS association is a CDS entity with [input parameters](ABENCDS_F1_PARAM.html), then actual parameters must be passed to them, using [`parameters`](ABENCDS_SELECT_PARAMETERS_V2.html) after the name `_assoc`. Only in one use case, it is not possible to specify values for the actual parameters, namely when a CDS association is exposed in a path expression as an [element](ABENCDS_SELECT_LIST_ENTRY_V2.html) of a [`SELECT`](ABENCDS_SELECT_LIST_V2.html) list.

**Use of Path Expressions**

Path expressions can be used as follows in the CDS DDL in ABAP CDS:

For a non-aggregated element of a `SELECT` list that contains [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html), as well as in a `WHERE` and `HAVING` condition, the result of the path expression must be unique. This means that the [cardinality](ABENCARDINALITY_GLOSRY.html) of all CDS associations used must be either to-one or the path expression can contain only [filter conditions](ABENCDS_PATH_EXPR_ATTR_V2.html) that are declared as unique using the addition `1:`.

When a CDS entity with a path expression is accessed, the following is evaluated:

The path expression addresses the full result of this evaluation or a single element `.element`.

The following CDS view entity contains the simple path expression `_scarr[inner].carrname` in its `SELECT` list. The attribute [`INNER`](ABENCDS_PATH_EXPR_ATTR_V2.html) controls the [join type](ABENJOIN_TYPE_GLOSRY.html). The class `CL_DEMO_FROM_JOIN_TO_ASSOC_VE` demonstrates that this view returns the same result as a directly programmed inner join in ABAP CDS or in ABAP SQL.

The CDS view entity `DEMO_SALES_CDS_PATH_EXPR` uses its own association and associations from other CDS entities in path expressions:

[Path Expressions, Use in the `SELECT` List](ABENPATH_EXPR_IN_COLSPEC_ABEXA.html)

-   [Cardinality](ABENCDS_PATH_EXPR_CARD_V2.html)
-   [Join type](ABENCDS_PATH_EXPR_JOINTYPE_V2.html) implemented when used
-   [Filter conditions](ABENCDS_PATH_EXPRESSION_FILTER_V2.html)

-   They can [expose](ABENCDS_SELECT_LIST_ASSOCIATION_V2.html) their final CDS associations as [elements](ABENCDS_SELECT_LIST_ENTRY_V2.html) of [`SELECT` lists](ABENCDS_SELECT_LIST_V2.html) for use in other CDS entities or in ABAP SQL.
-   Path expressions with CDS associations whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is not a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) or a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html) can be used as follows:

-   To specify the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the final CDS association as the data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html) after [`FROM`](ABENCDS_SELECT_STATEMENT_V2.html). The path expression represents an [inner join](ABENINNER_JOIN_GLOSRY.html) by default.
-   To specify an element `.element` of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the last CDS association as an [element](ABENCDS_SELECT_LIST_ENTRY_V2.html) of a [`SELECT` list](ABENCDS_SELECT_LIST_V2.html). In this case, the element is referred to as [SQL path target field](ABENSQL_TARGET_FIELD_GLOSRY.html). The path expression represents a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html) by default.
-   To specify an element `.element` of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the last CDS association as an operand of [`WHERE`](ABENCDS_WHERE_CLAUSE_V2.html), [`HAVING`](ABENCDS_HAVING_CLAUSE_V2.html), or [`WHEN`](ABENCDS_SEARCHED_CASE_EXPR_V2.html) conditions. The path expression represents a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html) by default.
-   To specify an element `.element` of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the last CDS association after `GROUP BY`. The path expression represents a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html) by default.
-   To specify an element `.element` of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the last CDS association as an operand of an [aggregate expression](ABENCDS_AGGREGATE_FUNCTIONS_V2.html), a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V2.html), a [case expression](ABENCDS_CASE_EXPRESSION_V2.html), or a [cast expression](ABENCDS_CAST_EXPRESSION_V2.html). The path expression represents a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html) by default.

-   In the case of self associations in which the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is the same as the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html), these usages are not possible in the CDS entity where they are defined.

-   The joins defined by the CDS associations, from left to right.
-   All other conditions of the CDS entities involved.

-   The most simple path expression is the name of a single CDS association.
-   For joins of CDS associations used in path expressions, note that their left side is always the CDS entity that exposes the CDS association. This applies particularly to CDS associations that are exposed in data sources of CDS entities and passed on.
-   CDS DDL path expressions can also be used in the ABAP [CDS DCL](ABENCDS_DCL_GLOSRY.html) of ABAP CDS to specify [conditions](ABENCDS_DCL_ROLE_CONDITIONS.html).
-   A CDS association whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) does not expose a CDS association cannot be followed by any further associations in a path expression. More specifically, for CDS associations whose association targets are DDIC database tables or DDIC views, no further CDS associations can be specified in a path expression.
-   When the CDS associations of the path expressions of a view are implemented as joins, they are automatically mapped to as few join expressions as possible. CDS associations with semantically identical filter conditions are automatically summarized into one single join expression.
-   Path expressions with CDS associations whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is a [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) cannot be used anywhere where they could produce instances of join expressions.
-   When a path expression of a `TO EXACT ONE` association is used with [attributes](ABENCDS_PATH_EXPR_ATTR_V2.html), then the join is rewritten to a `TO ONE` join on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) to avoid potential cardinality conflicts. This is indicated by a syntax check warning. The syntax check warning can be suppressed by explicitly specifying the current association as `TO EXACT ONE`.

-   The CDS association `_SalesOrder` of the DDIC-based view `DEMO_SALES_CDS_SO_I` is specified as a data source after `FROM`. A filter condition guarantees that only certain orders can be used as data sources.
-   The CDS association `invoice_header`, which is defined by the view `DEMO_SALES_CDS_PATH_EXPR` itself, is used in a path expression as an operand in the `WHERE` condition.
-   The CDS association `_Buyer` of the CDS view `DEMO_SALES_CDS_SO` is exposed via a path expression in the `SELECT` list. This means that this CDS association can also be used in CDS view entities that use `DEMO_SALES_CDS_PATH_EXPR` as a data source.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_JOIN2\_VE\\n as select from spfli\\n association to scarr as \_scarr on spfli.carrid = \_scarr.carrid\\n\\{\\n key carrid, \\n \_scarr\[inner\].carrname as carrier,\\n spfli.connid as flight,\\n spfli.cityfrom as departure,\\n spfli.cityto as arrival,\\n \_scarr\\n\\}\\n @AccessControl.authorizationCheck: #CHECK\\ndefine view entity DEMO\_SALES\_CDS\_PATH\_EXPR\\n as select from DEMO\_SALES\_CDS\_SO\_I.\_SalesOrder\[\\n lifecycle\_status <> 'C' and lifecycle\_status <> 'X'\]\\n association to exact one demo\_so\_inv\_he as \_invoice\_header\\n on DEMO\_SALES\_CDS\_SO.id = \_invoice\_header.buyer\_id\\n \\{\\n key so\_key as soKey,\\n lifecycle\_status,\\n \_invoice\_header.dunning\_level,\\n DEMO\_SALES\_CDS\_SO.\_Buyer,\\n DEMO\_SALES\_CDS\_SO.buyer\_id,\\n DEMO\_SALES\_CDS\_SO.id\\n \\}\\n where\\n \_invoice\_header.dunning\_level > '0'\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html