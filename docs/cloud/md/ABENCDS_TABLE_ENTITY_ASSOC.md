---
title: "ABENCDS_TABLE_ENTITY_ASSOC"
description: |
  ABENCDS_TABLE_ENTITY_ASSOC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_TABLE_ENTITY_ASSOC.htm"
abapFile: "ABENCDS_TABLE_ENTITY_ASSOC.html"
keywords: ["select", "if", "class", "data", "types", "ABENCDS", "TABLE", "ENTITY", "ASSOC"]
---

``... ASSOCIATION [[`cardinality`](ABENCDS_CARDINALITY_V2.html)] TO target ON cds_cond                  [ WITH DEFAULT FILTER [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html)\ ] ...``

[1. `... cardinality`](#ABAP_ADDITION_1@3@)

[2. `... ON cds_cond`](#ABAP_ADDITION_2@3@)

[3. `... WITH DEFAULT FILTER cds_cond`](#ABAP_ADDITION_3@3@)

Defines a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) in the [element list](ABENCDS_TABLE_ENTITY_ELEMENT_LIST.html) of a [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html). The CDS association uses an `ON` condition to associate the current CDS entity with the [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `target.` The association target can be other CDS entities.

The syntax is similar to the syntax of the addition [`ASSOCIATION`](ABENCDS_SIMPLE_ASSOCIATION_V2.html) in the `SELECT` statement of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) with the following differences:

Example of a simple CDS association in a table entity. The association `_assoc` associates the table entity `DEMO_CDS_TE_ASSOC` with the table entity `DEMO_CDS_TABLE_ENTITY`.

The class `CL_DEMO_CDS_ASSOCIATION_TE` demonstrates how to access fields from an association target in a CDS table entity.

Here's a code snippet:

The same rules apply as described in topic [CDS DDL - CDS View Entity, `cardinality`](ABENCDS_CARDINALITY_V2.html) with one further restriction: the cardinality must be written in words. The numeric notation is not available in table entities.

When specifying the `ON` condition, the following rules apply:

The following rules apply to the operands and syntax of the `ON` condition:

Special rules apply when the operands of the `ON` condition are [CDS enumerated elements](ABENCDS_ENUM_ELEMENT_GLOSRY.html). These rules are described in the topic [CDS DDL - Using CDS Enumerated Types](ABENCDS_USE_ENUM_TYPE.html).

**Note**

If the association target is a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html), stricter rules apply:

The same rules apply as described in topic [CDS DDL - CDS View Entity, `ASSOCIATION`](ABENCDS_SIMPLE_ASSOCIATION_V2.html).

-   The addition `AS _assoc` is not used. The CDS association is declared using the name `_assoc` in the [element list](ABENCDS_TABLE_ENTITY_ELEMENT_LIST.html) of the table entity, after which the addition `ASSOCIATION` is specified in the element list.

-   Fields of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) must be prefixed by the name of the data source or by `$projection.`.
-   The fields of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) must be prefixed by the name of the CDS association (prefix `_assoc.` separated by a period).

-   All relational operators are allowed. This means that comparison operators are allowed as well as `BETWEEN`, `LIKE`, `IS NULL`, `IS INITIAL`.
-   The Boolean operators `NOT`, `AND` and `OR` are allowed.
-   `lhs` can be a [field](ABENCDS_FIELD_V2.html) of one of the two data sources [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the CDS association. If a comparison operator is used as operator, then `lhs` can also be a [CDS literal](ABENCDS_LITERAL_GLOSRY.html).
-   `rhs` can be a [field](ABENCDS_FIELD_V2.html) of both data sources [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the CDS association, a literal, or a [session variable](ABENCDS_SESSION_VARIABLE_V2.html). **Exception:** if the operator `LIKE` is used, then `rhs` must be a character literal.

-   Only the equal operator `=` is allowed.
-   Only the Boolean operator `AND` is allowed.
-   Only [CDS source fields](ABENCDS_FIELD_GLOSRY.html) are allowed as operands.

@ClientHandling.type: #CLIENT\_DEPENDENT\\n@AbapCatalog.deliveryClass: #APPLICATION\_DATA\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS table entity, association'\\ndefine table entity DEMO\_CDS\_TE\_ASSOC\\n\\{\\n key col1 : abap.int8;\\n col2 : abap.int4;\\n col3 : abap.char(3);\\n \_assoc : association of one to one demo\_cds\_table\_entity \\n on \_assoc.key\_field = DEMO\_CDS\_TE\_ASSOC.col1;\\n\\n\\}\\n select col1, col2, \\\\\_assoc-key\_field, \\\\\_assoc-char\_field\_null \\nfrom demo\_cds\_te\_assoc \\ninto table @final(result). abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_entities.html abencds\_define\_table\_entity.html abencds\_table\_entity\_element\_list.html abencds\_table\_entity\_element.html