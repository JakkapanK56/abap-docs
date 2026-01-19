---
title: "ABENCDS_PATH_EXPRESSION_V1"
description: |
  ABENCDS_PATH_EXPRESSION_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PATH_EXPRESSION_V1.htm"
abapFile: "ABENCDS_PATH_EXPRESSION_V1.html"
keywords: ["select", "do", "if", "case", "try", "class", "data", "ABENCDS", "PATH", "EXPRESSION"]
---

``... [source.]_assoc1[[`parameters`](ABENCDS_SELECT_PARAMETERS_V1.html)][[`attributes`](ABENCDS_PATH_EXPR_ATTR_V1.html)]\             [._assoc2[[`parameters`](ABENCDS_SELECT_PARAMETERS_V1.html)][[`attributes`](ABENCDS_PATH_EXPR_ATTR_V1.html)] ... ] ...``

Specifies an [SQL path expression](ABENSQL_PATH_EXPRESSION_GLOSRY.html) that can be used in a `SELECT` statement of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). A path expression of the [CDS DDL](ABENCDS_DDL_GLOSRY.html) is a sequence of [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) separated by periods (`.`) whose names are specified using `_assoc1`, `_assoc2`, and so on. The name of the CDS entity `source` in which the first CDS association is defined or exposed can be specified in front of this CDS association. The first CDS association of a path expression must be either:

All further CDS associations must be exposed in the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the directly prefixed CDS association in the path expression. It is not possible to use a CDS association in a path expression that is defined in a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) or in a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html).

[`attributes`](ABENCDS_PATH_EXPR_ATTR_V1.html) can be used to specify attributes in angle brackets after every CDS association. These attributes define the following further properties of this section of the path expression:

If the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of a specified [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) is a CDS entity with [input parameters](ABENCDS_F1_PARAM.html), then actual parameters must be passed to them, using [`parameters`](ABENCDS_SELECT_PARAMETERS_V1.html) after the name `_assoc`. No parameters can be specified for a CDS association exposed as an [element](ABENCDS_SELECT_LIST_ENTRY_V1.html) of a [`SELECT`](ABENCDS_SELECT_LIST_V1.html) list.

**Use of Path Expressions**

Path expressions can be used as follows in the CDS DDL in ABAP CDS:

For a non-aggregated element of a `SELECT` list that contains [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V1.html), as well as in a `WHERE` and `HAVING` condition, the result of the path expression must be unique. This means that the [cardinality](ABENCARDINALITY_GLOSRY.html) of all CDS associations used must be either to-one or the path expression can contain only [filter conditions](ABENCDS_PATH_EXPR_ATTR_V1.html) that are declared as unique using the addition `1:`.

The following is evaluated when a CDS entity is accessed using a path expression:

The path expression addresses the full result of this evaluation or a single element `.element`.

The following DDIC-based view contains the simple path expression `_scarr[inner].carrname` in its `SELECT` list. The attribute [`INNER`](ABENCDS_PATH_EXPR_ATTR_V1.html) controls the [join type](ABENJOIN_TYPE_GLOSRY.html). The class `CL_DEMO_FROM_JOIN_TO_ASSCTN` demonstrates that this view returns the same result as a directly programmed inner join in ABAP CDS or in ABAP SQL.

This example shows three CDS views, `demo_sales_order_old`, `demo_business_partner_old1`, and `demo_invoice`. The CDS view `demo_invoice` uses its own CDS association and CDS associations from the other two views in path expressions:

[Path Expressions, Use in the `SELECT` List](ABENPATH_EXPR_IN_COLSPEC_ABEXA.html)

-   Defined in the current CDS view.
-   Exposed as an element of the `SELECT` list or of the [element list](ABENCDS_F1_HIERA_ELEMENT_LIST.html) in a CDS view or CDS hierarchy that is a data source of the current view.

-   [Cardinality](ABENCDS_PATH_EXPR_CARD_V1.html)
-   [Join type](ABENCDS_PATH_EXPR_JOINTYPE_V1.html) implemented when used
-   [Filter conditions](ABENCDS_PATH_EXPRESSION_FILTER_V1.html)

-   They can [expose](ABENCDS_SELECT_LIST_ASSOCIATION_V1.html) their final CDS associations as [elements](ABENCDS_SELECT_LIST_ENTRY_V1.html) of [`SELECT` lists](ABENCDS_SELECT_LIST_V1.html) for use in other CDS entities or in ABAP SQL.
-   Path expressions with CDS associations whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is not an [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) or a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html) can be used as follows:

-   To specify the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the final CDS association as the data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html) after [`FROM`](ABENCDS_SELECT_STATEMENT_V1.html). The path expression represents an [inner join](ABENINNER_JOIN_GLOSRY.html) by default.
-   To specify an element `.element` of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the last CDS association as an [element](ABENCDS_SELECT_LIST_ENTRY_V1.html) of a [`SELECT` list](ABENCDS_SELECT_LIST_V1.html). The path expression represents a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html) by default.
-   To specify an element `.element` of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the last CDS association as an operand of [`WHERE`](ABENCDS_WHERE_CLAUSE_V1.html), [`HAVING`](ABENCDS_HAVING_CLAUSE_V1.html), or [`WHEN`](ABENCDS_SEARCHED_CASE_EXPR_V1.html) conditions. The path expression represents a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html) by default.
-   To specify an element `.element` of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the last CDS association after `GROUP BY`. The path expression represents a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html) by default.
-   To specify an element `.element` of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the last CDS association as an operand of an [aggregate expression](ABENCDS_AGGREGATE_FUNCTIONS_V1.html), a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V1.html), a [case expression](ABENCDS_CASE_EXPRESSION_V1.html), or a [cast expression](ABENCDS_CAST_EXPRESSION_V1.html). The path expression represents a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html) by default.

-   In the case of self associations in which the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is the same as the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html), these usages are not possible in the CDS entity where they are defined.

-   The joins defined by the CDS associations, from left to right.
-   All other conditions of the CDS entities involved.

-   The most simple path expression is the name of a single CDS association.
-   For joins of CDS associations used in path expressions, note that their left side is always the CDS entity that exposes the CDS association. This applies particularly to CDS associations that are exposed in data sources of CDS entities and passed on.
-   CDS DDL path expressions can also be used in the ABAP [CDS DCL](ABENCDS_DCL_GLOSRY.html) of ABAP CDS to specify [conditions](ABENCDS_DCL_ROLE_CONDITIONS.html).
-   A CDS association whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) does not expose a CDS association cannot be followed by any further associations in a path expression. More specifically, for CDS associations whose association targets are DDIC database tables or DDIC views, no further CDS associations can be specified in a path expression.
-   When the CDS associations of the path expressions of a view are implemented as joins, they are mapped to as few join expressions as possible. The [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ [`AbapCatalog.compiler.compareFilter`](ABENCDS_VIEW_ANNO_V1.html) can serve as support. It this annotation is used with the value `true`, it guarantees that CDS associations with semantically identical [filter conditions](ABENCDS_PATH_EXPR_ATTR_V1.html) do not produce differing join expressions.
-   Path expressions with CDS associations whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is a [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) cannot be used anywhere where they could produce instances of join expressions.

-   The CDS association `demo_sales_order` of the CDS view `demo_business_partner_old1` is specified as a data source after `FROM`. A filter condition guarantees that only certain orders can be used as data sources.
-   The CDS association `invoice_header`, which is defined by the view `demo_invoice` itself, is used in a path expression as an operand in the `WHERE` condition.
-   The CDS association `note_header` of the CDS view `demo_sales_order_old` is addressed using the alternative name `bpa` in `demo_business_partner_old1` and defined as an element of the `SELECT` list. This means this CDS association can also be used in CDS views that use `demo_invoice` as a data source.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_JN2'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view demo\_cds\_join2\\n as select from spfli\\n association to scarr as \_scarr on\\n spfli.carrid = \_scarr.carrid\\n \\{\\n \_scarr\[inner\].carrname as carrier,\\n spfli.connid as flight,\\n spfli.cityfrom as departure,\\n spfli.cityto as arrival\\n \\} \\n @AbapCatalog.sqlViewName: 'DEMO\_SO\_VW\_A'\\ndefine view DEMO\_SALES\_ORDER\_OLD as\\n select from snwd\_so\\n association \[0..1\] to snwd\_text\_key as \_note\_header\\n on snwd\_so.note\_guid = \_note\_header.node\_key\\n \\{ \* \\} // Include all fields from snwd\_text\_key\\n @AbapCatalog.sqlViewName: 'DEMO\_BPA\_VW\_OLD1'\\ndefine view DEMO\_BUSINESS\_PARTNER\_OLD1 as\\n select from snwd\_bpa\\n association \[0..\*\] to DEMO\_SALES\_ORDER\_OLD\\n on snwd\_bpa.node\_key = DEMO\_SALES\_ORDER\_OLD.BUYER\_GUID\\n \\{ \* \\}\\n @AbapCatalog.sqlViewName: 'SALESO\_INV\_VW'\\n define view demo\_invoice as\\n select from \\n /\* Association "sales\_order" with filter as data source \*/\\n DEMO\_BUSINESS\_PARTNER\_OLD1.DEMO\_SALES\_ORDER\_OLD\[\\n LIFECYCLE\_STATUS <> 'C' and LIFECYCLE\_STATUS <> 'X'\]\\n as bpa\_so //alias for data source\\n /\* Association only used in this view definition \*/\\n /\*+\[hideWarning\] \\{ "IDS" : \[ "CARDINALITY\_CHECK" \] \\}\*/\\n association \[0..1\] to snwd\_so\_inv\_head as \_invoice\_header \\n on bpa\_so.NODE\_KEY = \_invoice\_header.so\_guid\\n \\{ key bpa\_so.NODE\_KEY, //Field from ON-condition in\_invoice\_header\\n bpa\_so.SO\_ID,\\n bpa\_so.NOTE\_GUID, //Field from ON-condition in note\_header\\n bpa\_so.LIFECYCLE\_STATUS,\\n /\* Association is not exposed, but its element \*/\\n \_invoice\_header.dunning\_level,\\n /\* Association from data source is exposed here \*/\\n bpa\_so.\_note\_header \\}\\n /\* Path expression in WHERE clause \*/\\n where \_invoice\_header.dunning\_level > '0';\\n\\n\\ abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html