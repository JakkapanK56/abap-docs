---
title: "ABENCDS_SIMPLE_ASSOCIATION_V1"
description: |
  ABENCDS_SIMPLE_ASSOCIATION_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_SIMPLE_ASSOCIATION_V1.htm"
abapFile: "ABENCDS_SIMPLE_ASSOCIATION_V1.html"
keywords: ["select", "do", "while", "if", "case", "try", "class", "data", "ABENCDS", "SIMPLE", "ASSOCIATION"]
---

``... ASSOCIATION [ [min..max] ] TO target [AS _assoc] ON [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html)\                  [ WITH DEFAULT FILTER [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html)\ ] ...``

[1. `... [min..max]`](#ABAP_ADDITION_1@3@)

[2. `... AS _assoc`](#ABAP_ADDITION_2@3@)

[3. `... WITH DEFAULT FILTER cds_cond`](#ABAP_ADDITION_3@3@)

Defines a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) with the name `_assoc` in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). A CDS association associates the current CDS view as [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) with the [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `target` using an `ON` condition [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html). The association target can be a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html), a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html), another CDS custom entity, a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html), a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html), a [DDIC view](ABENDDIC_VIEW_GLOSRY.html), or a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). If `target` is a [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html), the way the CDS association can be used is restricted.

A CDS association of a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) in a CDS view can be accessed as follows:

When a CDS view is activated that uses a path expression to access a CDS association or an element, or when a path expression is used for access in ABAP SQL, every CDS association of the path expression is transformed to a [join expression](ABENJOIN_EXPRESSION_GLOSRY.html). Here, the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) represents the left side and the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) represents the right side. The `ON` condition of the association is added to the `ON` condition of the join. By default, the [join type](ABENJOIN_TYPE_GLOSRY.html) is determined by where the [path expression](ABENCDS_PATH_EXPRESSION_V1.html) is used:

This setting can be overwritten by specifying the [join type](ABENCDS_PATH_EXPR_JOINTYPE_V1.html) when using the CDS association in a path expression. A path expression in a [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) that [exposes](ABENCDS_SELECT_LIST_ASSOCIATION_V1.html) its closing CDS association is not defined as a join. A self association whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is the same as the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) cannot be created as a join in the CDS view where it is defined.

When specifying the `ON` condition, for the operands, [general](ABENCDS_COND_EXPR_OPERANDS_V1.html) and the following [special rules](ABENCDS_COND_EXPR_ON_ASSOC_V1.html) apply:

Defines the [cardinality](ABENCARDINALITY_GLOSRY.html) of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of a CDS view, which is defined with a CDS association `ASSOCIATION`. The square brackets `[ ]` are part of the syntax. For `min` and `max`, positive integers (including 0) and asterisks (`*`) can be specified:

If the cardinality is not defined explicitly, the cardinality to-one is used implicitly (`[min..1]`).

A cardinality is specified to document the semantics of the data model and, in some database systems, for optimizations. In these database systems, left outer joins (`LEFT OUTER JOIN`) produced by [path expressions](ABENCDS_PATH_EXPRESSION_V1.html) are given the addition `TO ONE` if an explicit or implicit *to 1* cardinality is used and the addition `TO MANY` if any other cardinality is used. These additions work in the same way as when they are specified explicitly in [`LEFT OUTER JOIN`](ABENCDS_JOINED_DATA_SOURCE_V1.html). This means that an optimization is attempted and the result can be undefined if the result set does not match the cardinality.

Specifies the cardinality of a CDS association incorrectly. The following CDS view joins the DDIC database tables `SCARR` and `SPFLI` in a CDS association `_spfli` without specifying the cardinality explicitly. The implicitly set cardinality is *to 1*. If the CDS association is used in a path specified in the `SELECT` list, this is implemented in some database systems (for example the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html)) as a left outer join using the implicit addition `TO ONE`. The actual cardinality of the data is, however, `TO MANY`.

The class `CL_DEMO_CDS_WRONG_CARDINALITY` uses different `SELECT` statements to access the view. On optimizing database systems, such as the SAP HANA database, the two reads return a different number of rows, potentially an unexpected result.

Specifies the cardinality of a CDS association correctly. The following CDS view joins the DDIC database tables `SCARR` and `SPFLI` in a CDS association `_spfli` while specifying the cardinality explicitly. If the CDS association is used in a path specified in the `SELECT` list, this is implemented in some database systems (for example the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html)) as a left outer join using the implicit addition `TO MANY`, which matches the actual cardinality of the data.

The class `CL_DEMO_CDS_EXPLICIT_CRDNLTY` uses different `SELECT` statements to access the view. The two reads return the same number of rows on all database systems.

Defines the name `_assoc` of a CDS association of a CDS view defined using `ASSOCIATION`. If no name is defined explicitly using `AS`, `_assoc` is set implicitly to the name of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html). The name `_assoc` must comply with the naming rules for [names](ABENCDS_GENERAL_SYNTAX_RULES.html).

It is advisable to use an underscore `_` as the first character of the CTE CDS association name.

Example of a simple CDS association. The following CDS view provides the same result as the CDS view `DEMO_CDS_SCARR_SPFLI` in the [joins](ABENCDS_JOINED_DATA_SOURCE_V1.html) example, as shown in the class `CL_DEMO_CDS_ASSOCIATION` using an assertion. Furthermore, the CDS association `spfli_scarr` is [exposed](ABENCDS_SELECT_LIST_ASSOCIATION_V1.html) to be used from outside in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) by specifying a [path](ABENCDS_PATH_EXPRESSION_V1.html) that contains only the name of a CDS association. The class `CL_DEMO_CDS_ASSOCIATION` also shows how the CDS association can be accessed by [specifying a path](ABENABAP_SQL_PATH.html) in ABAP SQL.

Defines a standard filter condition for a [path expression](ABENCDS_PATH_EXPRESSION_V1.html).

When the syntax check evaluates a cardinality specified using `[min..max]`, the default filter condition is respected alongside the `ON` condition.

-   By specifying its name in a [path expression](ABENCDS_PATH_EXPRESSION_V1.html) in the same statement and in all places where this is documented. A CDS association whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is a [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) can only be [exposed](ABENCDS_SELECT_LIST_ASSOCIATION_V1.html) in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html).
-   If a CDS association whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is not a CDS abstract entity or a CDS custom entity is exposed using a [path expression](ABENCDS_PATH_EXPRESSION_V1.html) in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) of the current `SELECT` statement, the following can use it in their path expressions:

-   Other [CDS views](ABENCDS_PATH_EXPRESSION_V1.html)
-   [ABAP SQL statements](ABENABAP_SQL_PATH.html)

-   Exposed [self associations](ABENSELF_ASSOCIATION_GLOSRY.html) can be specified as [hierarchy associations](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) in [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html) or in the ABAP SQL [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html).

-   After [`FROM`](ABENCDS_SELECT_STATEMENT_V1.html), it is an [inner join](ABENINNER_JOIN_GLOSRY.html) inner join (`INNER JOIN`)
-   In all other locations, it is a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html) (`LEFT OUTER JOIN`)

-   The fields of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) must be prefixed in the `ON` condition by the name of the CDS association (prefix `_assoc.` separated by a period).
-   If the CDS association in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) of the current `SELECT` statement is exposed, the fields of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) specified in the `ON` condition must also be listed in the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html). This ensures that a join expression can be built from the CDS association (when used in a path expression).
-   To make a reference to an element of the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html) in the `ON` condition, the field name can be prefixed with `$projection` instead of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html). In this case, an alternative element name defined using [`AS`](ABENCDS_SELECT_LIST_ENTRY_V1.html) can be specified instead of the field name. If a path expression of the `SELECT` list is used when the prefix `$projection` is used in the `ON` condition, the current CDS association cannot itself be used in the `SELECT` list, to avoid invalid join expressions.

-   CDS associations not listed in the `SELECT` list can only be used in path expressions of the current `SELECT` statement.
-   When a CDS view is activated, a join defined by a CDS association is built for every use in a path expression and not for the definition of the CDS association. No joins are constructed for CDS associations that are not used in their CDS views.
-   If a CDS association is used in a path expression of the `SELECT` list of the current `SELECT` statement, a join is defined for the current view. Here, the `ON` conditions of the CDS association are applied to the join directly. No path expressions are allowed in the `ON` condition of a join, which means that no reference can be made to a path expression of the `SELECT` list when using the prefix `$projection` in the `ON` condition of a CDS association, if CDS the association is also used here.
-   CDS associations and [join expressions](ABENCDS_JOINED_DATA_SOURCE_V1.html) can be used in a `SELECT` statement of a CDS view. When the join expressions defined by the CDS associations are used in path expressions, all joins are joined.
-   Special rules apply to CDS associations in `SELECT` statements joined with [`UNION`](ABENCDS_UNION_V1.html).
-   [Cyclical dependencies](ABENCDS_CYCLE_PROBLEMS.html) should be avoided when using CDS associations to prevent problems occurring in mass activations of CDS entities.
-   CDS associations whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is a [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) cannot be used anywhere where they could produce instances of join expressions.
-   The syntax for defining and using CDS associations is a higher-value wrapping of the syntax for [joins](ABENCDS_JOINED_DATA_SOURCE_V1.html). Using CDS associations instead of directly programming joins makes it easier to read the definition of a CDS view. CDS associations can be used to model relationships between CDS entities that can be accessed simply using path expressions in [CDS views](ABENCDS_PATH_EXPRESSION_V1.html) or in [ABAP SQL](ABENABAP_SQL_PATH.html).

-   `max` cannot be 0.
-   An asterisk `*` for `max` means any number of rows.
-   `min` can be omitted (set to 0 if omitted).
-   `min` cannot be `*`.
-   When a CDS association is used in a [`WHERE` condition](ABENCDS_WHERE_CLAUSE_V1.html), 1 must be specified for `max`.

-   To avoid undefined and platform-dependent behavior, the cardinality should always be defined to match the data in question.
-   **Note** The cardinality is mainly descriptive, not prescriptive. It does not force a matching result set.
-   The specified cardinality is evaluated by the syntax check for paths specified in the CDS DDL of CDS or in ABAP SQL. A non-matching cardinality usually produces a syntax check warning.

-   If no [filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V1.html) is specified when the CDS association is used in an path expression, the condition [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) specified using `DEFAULT FILTER` is used as the filter condition and applied in an extended condition for the join. The same [rules](ABENCDS_COND_EXPR_FILTER_V1.html) apply to the default filter condition as to a filter condition specified as an attribute.
-   If a [filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V1.html) is specified when the CDS association is used in a path expression, this condition is used instead of the default filter condition.

@AbapCatalog.sqlViewName: 'DEMOCDSWRGC'\\ndefine view demo\_cds\_wrong\_cardinality\\n as select from scarr\\n association to spfli as \_spfli on \_spfli.carrid = scarr.carrid\\n\\{\\n key scarr.carrid as carrid,\\n scarr.carrname as carrname,\\n \_spfli.connid as connid\\n\\}\\n @AbapCatalog.sqlViewName: 'DEMOCDSEXPC'\\ndefine view demo\_cds\_explicit\_cardinality\\n as select from\\n scarr\\n association \[1..\*\] to spfli as \_spfli on\\n \_spfli.carrid = scarr.carrid\\n \\{\\n scarr.carrid as carrid,\\n scarr.carrname as carrname,\\n \_spfli.connid as connid\\n \\}\\n @AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASSOC'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view demo\_cds\_association(\\n \_spfli\_scarr,\\n id,\\n carrier,\\n flight,\\n departure,\\n destination\\n )\\n as select from\\n spfli\\n association \[1..1\] to scarr as \_spfli\_scarr on\\n $projection.carrid = \_spfli\_scarr.carrid\\n \\{\\n \_spfli\_scarr,\\n key spfli.carrid,\\n key \_spfli\_scarr\[inner\].carrname,\\n key spfli.connid,\\n spfli.cityfrom,\\n spfli.cityto\\n \\}\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_association\_v1.html