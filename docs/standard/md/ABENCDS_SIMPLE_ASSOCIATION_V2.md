---
title: "ABENCDS_SIMPLE_ASSOCIATION_V2"
description: |
  ABENCDS_SIMPLE_ASSOCIATION_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_SIMPLE_ASSOCIATION_V2.htm"
abapFile: "ABENCDS_SIMPLE_ASSOCIATION_V2.html"
keywords: ["select", "if", "case", "data", "types", "ABENCDS", "SIMPLE", "ASSOCIATION"]
---

``... ASSOCIATION [[`cardinality`](ABENCDS_CARDINALITY_V2.html)]\ [TO] target [AS _assoc] ON [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html)\                  [WITH DEFAULT FILTER [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html)] ...``

[1. `... cardinality`](#ABAP_ADDITION_1@3@)

[2. `... AS _assoc`](#ABAP_ADDITION_2@3@)

[3. `... ON cds_cond`](#ABAP_ADDITION_3@3@)

[4. `... WITH DEFAULT FILTER cds_cond`](#ABAP_ADDITION_4@3@)

Defines a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) with the name `_assoc` in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). A CDS association associates the current CDS view entity as [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) with the [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `target` using an `ON` condition [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html). The association target `target` can be a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html), another [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html), a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), a [table function](ABENTABLE_FUNCTION_GLOSRY.html), a [hierarchy](ABENHIERARCHY_GLOSRY.html), an [abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html), or a [custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html). If `target` is a [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html), the way the CDS association can be used is restricted.

Usage of associations in the `SELECT` list: All use cases of a CDS association are described in topic [CDS DDL - CDS associations and joins](ABENCDS_ASSOC_JOIN_V2.html).

Associations and joins: in some cases, a CDS association is internally transformed into a join. All use cases of CDS associations and information about the joins created on the database are described in topic [CDS DDL - CDS associations and joins](ABENCDS_ASSOC_JOIN_V2.html).

The automatically generated join type can be changed by specifying a different join type in the attributes of a path expression, see topic [CDS DDL - CDS View Entity, `path_expr`, `join_type`](ABENCDS_PATH_EXPR_JOINTYPE_V2.html).

The CDS view entity `DEMO_SALES_CDS_INV_HEADER` shown below returns information about sales invoices and works with the DDIC database tables `DEMO_SO_INV_HE`, `DEMO_SALES_ORDER`, `DEMO_SALES_BUPA`, and `DEMO_SALES_SO_I`.

Two CDS associations are defined:

The [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) fields used in the `ON` conditions, `buyer_id` and `so_key`, are part of the `SELECT` list.

The CDS view entity can be accessed in an ABAP program with a simple ABAP SQL `SELECT` statement.

The complexity of the actual query is wrapped transparently in the CDS view entity for the application programmer. When the view is accessed, the join (defined by the CDS association `_invoice_items`) between `DEMO_SO_INV_HE` and `DEMO_SALES_SO_I` is not built, because there are no path expressions that need to access the join.

The CDS view entity `DEMO_SALES_CDS_INV_HEADER` shown above is used as the data source in the definition of the CDS view entity `DEMO_SALES_CDS_SO_ITEM`. This data source is used to access the [exposed](ABENCDS_SELECT_LIST_ASSOCIATION_V2.html) CDS association `_invoice_items`. The elements of the CDS association are accessed in this view. There is no visual indication that it is the result of a join. This join between `DEMO_SALES_CDS_INV_HEADER` and `DEMO_SALES_SO_I` is created when the CDS view entity `DEMO_SALES_CDS_SO_ITEM` is activated. The other CDS association `_buyer` of the CDS view entity `DEMO_SALES_CDS_INV_HEADER` cannot be accessed.

A [cardinality](ABENCARDINALITY_GLOSRY.html) to express the relation between the rows of the data sources can optionally be specified. The following options are available:

For further details, see topic [CDS DDL - CDS View Entity, `cardinality`](ABENCDS_CARDINALITY_V2.html).

Defines the name `_assoc` of a CDS association. If no name is defined explicitly using `AS`, `_assoc` is set implicitly to the name of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html). The name `_assoc` must comply with the naming rules for [names](ABENCDS_GENERAL_SYNTAX_RULES.html).

It is recommended that an underscore `_` is used as the first character of the CDS association name.

When specifying the `ON` condition, the following rules apply:

The following rules apply to the operands and syntax of the `ON` condition:

Special rules apply when the operands of the `ON` condition are [CDS enumerated elements](ABENCDS_ENUM_ELEMENT_GLOSRY.html). These rules are described in the topic [CDS TDL - Using CDS Enumerated Types](ABENCDS_USE_ENUM_TYPE.html).

Defines a standard filter condition for a [path expression](ABENCDS_PATH_EXPRESSION_V2.html).

When the syntax check evaluates a cardinality specified using `[min..max]`, the default filter condition is respected alongside the `ON` condition.

-   CDS associations whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is a [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) cannot be used anywhere where they could produce instances of join expressions.
-   CDS associations whose association target is a CDS projection view cannot be used in [path expressions](ABENCDS_PATH_EXPRESSION_V2.html). It is also not possible to add a field from the association target to the element list.

-   CDS associations and [join expressions](ABENCDS_JOINED_DATA_SOURCE_V2.html) can both be used in a `SELECT` statement of a CDS view entity. A path expression can even consist of a mix of joins and associations. When accessed, the associations and joins are merged.
-   Special rules apply to CDS associations in `SELECT` statements with [`set operators`](ABENCDS_SET_OPERATORS.html).
-   [Cyclical dependencies](ABENCDS_CYCLE_PROBLEMS.html) should be avoided when using CDS associations to prevent problems occurring in mass activations of CDS entities.
-   Exposed [self associations](ABENSELF_ASSOCIATION_GLOSRY.html) can be specified as [hierarchy associations](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) in [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html) or in the ABAP SQL [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html).
-   A self association whose association target is the same as the association source cannot be created as a join in the CDS view entity where it is defined. So it is not allowed to use a self association in a position where a join is generated.

-   `_buyer` stands for a join between the current view and the [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `DEMO_SALES_BUPA`.
-   `_invoice_items` stands for a join between the current view and the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) `DEMO_SALES_SO_I`.

-   The CDS association `_buyer` is not exposed in the `SELECT` list and can only be used in path expressions of the current `SELECT` statement. This association can be specified in the `WHERE` condition due to the cardinality to-one.
-   The CDS association `_invoice_items` is not accessed in path expressions of the current `SELECT` statement. However, this association is exposed in the `SELECT` list, which means it can be used in path expressions of other CDS views. This association cannot be specified in a `WHERE` condition due to the cardinality to-many.

-   The cardinality can be specified in words, for example:
-   `association of many to many AssocTarget as Name on CdsCond`
-   Note that the syntax addition `TO` is left out in this case.
-   This is the recommended option.
-   The cardinality of the association target can be specified in numbers in square brackets, for example:
-   `association[0..1] to AssocTarget as Name on CdsCond`
-   Note that the association target is specified after `TO` in this case.
-   No cardinality can be specified, as in the following example:
-   `association to AssocTarget as Name on CdsCond`
-   Note that the association target is specified after `TO` in this case.
-   If the cardinality is not defined explicitly, the cardinality many-to-one is used implicitly.

-   Fields of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) must be prefixed by the name of the data source. If an alias name was assigned, then the alias name must be used as prefix.
-   The fields of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) must be prefixed by the name of the CDS association (prefix `_assoc.` separated by a period).
-   Fields that are listed in the `SELECT` list of the current view entity must be prefixed with `$projection`.
-   If the prefix `$projection` refers to a path expression, a literal, or an [expression](ABENCDS_EXPRESSIONS_V2.html) of the `SELECT` list, then the current CDS association cannot be exposed in the `SELECT` list to avoid invalid join expressions.
-   If the CDS association is exposed in the [`SELECT` list](ABENCDS_SELECT_LIST_V2.html) of the current `SELECT` statement, the fields of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) specified in the `ON` condition must also be listed in the [`SELECT` list](ABENCDS_SELECT_LIST_V2.html). This ensures that a join expression can be built from the CDS association (when used in a path expression).

-   All relational operators are allowed. That means all comparison operators are allowed as well as `BETWEEN`, `LIKE`, `IS [NOT] NULL`, and `IS [NOT] INITIAL`.
-   The Boolean operators `NOT`, `AND`, and `OR` are allowed.
-   `lhs` can be a [field](ABENCDS_FIELD_V2.html) of one of the two data sources [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the CDS association. If a comparison operator is used as operator, then `lhs` can also be a [CDS literal](ABENCDS_LITERAL_GLOSRY.html).
-   `rhs` can be a [field](ABENCDS_FIELD_V2.html) of both data sources [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the CDS association, a [CDS literal](ABENCDS_LITERAL_GLOSRY.html), a [parameter](ABENCDS_PARAMETER_V2.html), or a [session variable](ABENCDS_SESSION_VARIABLE_V2.html). **Exception:** if the operator `LIKE` is used, then `rhs` must be a character literal.
-   Path expressions are not allowed.
-   CDS DDL expressions are not allowed.

-   If no [filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V2.html) is specified when the CDS association is used in a path expression, the condition [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) specified using `DEFAULT FILTER` is used as the filter condition and applied in an extended condition for the join. The same [rules](ABENCDS_PATH_EXPRESSION_FILTER_V2.html) apply to the default filter condition as to a filter condition specified as an attribute.
-   If a [filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V2.html) is specified when the CDS association is used in a path expression, this condition is used instead of the default filter condition.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_sales\_cds\_inv\_header\\n as select from demo\_so\_inv\_he\\n inner join demo\_sales\_order as \_inner\\n on demo\_so\_inv\_he.so\_key = \_inner.so\_key\\n association of many to one demo\_sales\_bupa as \_buyer\\n on demo\_so\_inv\_he.buyer\_id = \_buyer.id\\n association of one to one demo\_sales\_so\_i as \_invoice\_items\\n on $projection.so\_key = \_invoice\_items.so\_item\_key\\n \\{\\n //\_buyer\\n key \_buyer.id,\\n \_buyer.birth\_name,\\n \_buyer.family\_name,\\n //\_inner\\n \_inner.lifecycle\_status,\\n //demo\_so\_inv\_he\\n demo\_so\_inv\_he.so\_key,\\n demo\_so\_inv\_he.gross\_amount,\\n demo\_so\_inv\_he.net\_amount,\\n demo\_so\_inv\_he.tax\_amount,\\n demo\_so\_inv\_he.currency\_code,\\n //\_invoice\_items\\n \_invoice\_items\\n \\}\\n where \_buyer.title = 'Mr.'\\n SELECT id, birth\_name, family\_name \\n FROM demo\_sales\_cds\_inv\_header \\n INTO TABLE @DATA(itab). @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_SALES\_CDS\_SO\_ITEM\\n as select from\\n demo\_sales\_cds\_inv\_header\\n \\{\\n key id,\\n birth\_name,\\n family\_name,\\n lifecycle\_status,\\n so\_key,\\n net\_amount,\\n tax\_amount,\\n currency\_code,\\n /\* Associations \*/\\n \_invoice\_items.material,\\n \_invoice\_items.posnr\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_association\_v2.html