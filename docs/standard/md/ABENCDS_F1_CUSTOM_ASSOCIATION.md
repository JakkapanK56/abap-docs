---
title: "ABENCDS_F1_CUSTOM_ASSOCIATION"
description: |
  ABENCDS_F1_CUSTOM_ASSOCIATION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_CUSTOM_ASSOCIATION.htm"
abapFile: "ABENCDS_F1_CUSTOM_ASSOCIATION.html"
keywords: ["select", "do", "if", "data", "types", "ABENCDS", "CUSTOM", "ASSOCIATION"]
---

``... ASSOCIATION [[`cardinality`](ABENCDS_CARDINALITY_V2.html)]\ [TO] target ON cds_cond                  [ WITH DEFAULT FILTER [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html)\ ] ...``

[1. `... cardinality`](#ABAP_ADDITION_1@3@)

[2. `... ON cds_cond`](#ABAP_ADDITION_2@3@)

[3. `... WITH DEFAULT FILTER cds_cond`](#ABAP_ADDITION_3@3@)

Defines a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) in the [element list](ABENCDS_F1_CUSTOM_ELEMENT_LIST.html) of a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html). The CDS association uses an `ON` condition to associate the current CDS entity with the [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `target.` The association target can be a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html), a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html), another CDS custom entity, a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html), a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html), or a [DDIC database view](ABENDATABASE_VIEW_GLOSRY.html).

The syntax is similar to the syntax of the addition [`ASSOCIATION`](ABENCDS_SIMPLE_ASSOCIATION_V2.html) in the `SELECT` statement of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) with the following differences:

A CDS association defined using the addition `ASSOCIATION` in the element list of a CDS custom entity is always exposed. It cannot, however, be used in any [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html), either in ABAP CDS or in ABAP SQL.

The following DDL source code shows a CDS custom entity that exposes a CDS association with another CDS custom entity:

The same rules apply as described in topic [CDS DDL - CDS View Entity, `cardinality`](ABENCDS_CARDINALITY_V2.html).

When specifying the `ON` condition, the following rules apply:

The following rules apply to the operands and syntax of the `ON` condition:

Special rules apply when the operands of the `ON` condition are [CDS enumerated elements](ABENCDS_ENUM_ELEMENT_GLOSRY.html). These rules are described in the topic [CDS TDL - Using CDS Enumerated Types](ABENCDS_USE_ENUM_TYPE.html).

**Note** Stricter rules exist for CDS custom entities that are used as queries in the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html). See the development guide for the ABAP RESTful Application Programming Model, section [Query](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/511a134f89614e77a2231d0af5b924f8?version=sap_cross_product_abap).

The same rules apply as described in topic [CDS DDL - CDS View Entity, `ASSOCIATION`](ABENCDS_SIMPLE_ASSOCIATION_V2.html).

-   The addition `AS _assoc` is not used. The CDS association is declared using the name `_assoc` in the [element list](ABENCDS_F1_CUSTOM_ELEMENT.html) of the CDS custom entity, after which the addition `ASSOCIATION` is specified in the element list.
-   There are further restrictions regarding the syntax of the `ON` condition (see below).

-   A CDS association of a CDS custom entity cannot be used anywhere where it could produce instances of join expressions.
-   For an overview of all possible association targets of all CDS entities that can define associations, see [Data Source Matrix](ABENCDS_DATA_SOURCE_MATRIX.html).

-   Fields of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) must be prefixed by the name of the data source.
-   The fields of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) must be prefixed by the name of the CDS association (prefix `_assoc.` separated by a period).
-   Fields that are listed in the `SELECT` list of the current view entity must be prefixed with `$projection`.

-   As relational operators, comparison operators are allowed as well as `BETWEEN`, `LIKE`, `IS NULL`, `IS INITIAL`.
-   The Boolean operators `NOT`, `AND` and `OR` are allowed.
-   `lhs` can be a [field](ABENCDS_FIELD_V2.html) of one of the two data sources [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the CDS association. If a comparison operator is used as operator, then `lhs` can also be a [CDS literal](ABENCDS_LITERAL_GLOSRY.html).
-   `rhs` can be a [field](ABENCDS_FIELD_V2.html) of both data sources [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the CDS association, a literal, or a [session variable](ABENCDS_SESSION_VARIABLE_V2.html). **Exception:** if the operator `LIKE` is used, then `rhs` must be a character literal.
-   Path expressions are not allowed.
-   CDS DDL expressions are not allowed.

@EndUserText.label: 'CDS custom entity, association'\\ndefine custom entity DEMO\_CDS\_CUSTOM\_SO\\n \\{\\n key id : abap.char(20);\\n seller\_id : abap.char(20);\\n buyer\_id : abap.char(20);\\n act\_indicator : abap.char( 1 );\\n type\_code : abap.char( 5 );\\n \_type\_code\_texts : association of many to many\\n DEMO\_SALES\_SO\_CUSTOM\_ANALYTICS\\n on \_type\_code\_texts.TypeCode = DEMO\_CDS\_CUSTOM\_SO.type\_code;\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_custom\_entities.html abencds\_f1\_define\_custom\_entity.html abencds\_f1\_custom\_element\_list.html abencds\_f1\_custom\_element.html