---
title: "ABENCDS_TO_PARENT_ASSOC_V1"
description: |
  ABENCDS_TO_PARENT_ASSOC_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_TO_PARENT_ASSOC_V1.htm"
abapFile: "ABENCDS_TO_PARENT_ASSOC_V1.html"
keywords: ["select", "delete", "if", "case", "try", "data", "ABENCDS", "PARENT", "ASSOC"]
---

``... ASSOCIATION TO PARENT target [AS _assoc] ON $projection.[`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) ...``

A [CDS to-parent association](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) in [ABAP CDS](ABENABAP_CORE_DATA_SERVICES_GLOSRY.html) is a specialized [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html). In combination with a [to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html), they define a [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html). A CDS to-parent association in defined in the child entity and points to the parent entity. CDS compositions define the [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of a [RAP business object](ABENRAP_BO_GLOSRY.html) in the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html).

A to-parent association is defined in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) of a [CDS DDIC-based view](ABENCDS_V1_VIEW_GLOSRY.html) using the keyword `ASSOCIATION TO PARENT`. A to-parent association associates the current CDS entity, as [association source](ABENASSOCIATION_SOURCE_GLOSRY.html), with the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) `target` specified in the definition of the association.

The child entity must always define a to-parent association first and only afterwards can a to-child association be defined in the parent entity. The other way around results in a syntax error. The to-parent association cannot be deleted as long as the child entity is the target of the to-child association. The to-child association must be deleted first and then the to-parent association can be deleted.

CDS to-parent associations are defined similarly to CDS associations. Here are the similarities and differences:

The following applies to the association target `target`:

General rules for child entities:

Exposure:

Usage:

To-parent associations and joins:

Restrictions:

A to-parent association must define an `ON` condition. This `ON` condition is automatically used for the respective to-child association in the parent entity.

The following rules apply to the operands and syntax of the `ON` condition:

The CDS view `DEMO_SALES_CDS_SO_I_SL` shown below returns information about schedule lines of sales order items. It defines a to-parent association to the CDS view `DEMO_SALES_CDS_SO_I` that contains information about sales orders.

In the `SELECT` list, the to-parent association `_SalesOrderItem` is exposed, so it can be accessed from external CDS entities.

-   Similarities

-   For the name `AS _assoc`, the same rules apply as for normal CDS associations, see topic [CDS DDL - DDIC-Based View, `ASSOCIATION`](ABENCDS_SIMPLE_ASSOCIATION_V1.html).
-   An `ON` condition must be defined. The rules for `ON` conditions of to-parent associations are listed below.

-   Differences

-   A default filter cannot be defined for a to-parent association. The syntax `... WITH DEFAULT FILTER ...` is not allowed.
-   The [cardinality](ABENCARDINALITY_GLOSRY.html) cannot be defined explicitly for to-parent associations and is generated as `[1..1]`.

-   The association target can be another [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), an [abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html), or a [custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html).
-   The [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of a to-parent association cannot be the CDS entity in which the to-parent association is defined. This means that to-parent associations cannot be [self associations](ABENSELF_ASSOCIATION_GLOSRY.html).
-   The target entity of a to-child association and a to-parent association defined in the same data definition must be different entities.

-   A child entity must define exactly one to-parent association to its parent entity.
-   A child entity that is the target of a to-child association can itself be a parent entity and define further CDS to-child associations.
-   A [root entity](ABENROOT_ENTITY_GLOSRY.html) cannot define any to-parent associations.
-   The child entity in which the to-parent association is defined must have at least one [key field](ABENKEY_FIELD_GLOSRY.html).

-   The name of the to-parent association `_assoc` must be added exactly once to the [`select_list`](ABENCDS_SELECT_LIST_V1.html) of the CDS view it is defined in, without attributes and alias. If no name is defined for the to-parent association, the name of the to-parent association is the name of the target entity `target` and this name must be made available in the `SELECT` list.

-   A to-parent association can be propagated in data definitions other than the one in which it is defined. In this case, the to-parent association uses its special semantics and is handled like a normal CDS association.
-   To-parent associations can be used in [path expressions](ABENCDS_PATH_EXPRESSION_V1.html) locally and also in other CDS entities in which they are propagated.
-   To-parent associations can be specified as values for `AssociationRef` associations. These to-parent associations are then handled as associations.

-   All use cases and details about join generation described in topic [`CDS DDL - DDIC-based View, Associations and Joins`](ABENCDS_ASSOC_JOIN_V1.html) also apply to to-parent associations.

-   To-parent associations cannot be defined in a CDS view extension, neither with [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html), nor with [`EXTEND VIEW ENTITY`](ABENCDS_EXTEND_VIEW.html).

-   Only [key fields](ABENKEY_FIELD_GLOSRY.html) of the parent entity can be used in the `ON` condition.
-   The `ON` condition must use all key fields of the parent entity. Each one can be used only once in the `ON` condition.
-   Key fields of the parent entity can only be compared with fields of the child entity.
-   A field of the child entity can be used only once.
-   The fields of the association source must be prefixed by `$projection`.
-   The fields of the association target must be prefixed by the name of the CDS to-parent association (prefix `_assoc.` separated by a period).
-   Only the [comparison operator](ABENCDS_COND_EXPR_COMP_V1.html)\\ *\=* is allowed. No other [relational operator](ABENREL_OPERATOR_GLOSRY.html) or comparison operator is allowed.
-   Only the [Boolean operator](ABENBOOLEAN_OPERATOR_GLOSRY.html)\\ `AND` is allowed. Negations using `NOT` are not allowed.
-   `lhs` can be a field of the association source or association target.
-   `rhs` can be a field of the association source or association target.
-   Path expressions, expressions, built-in functions, and elementary operands are not allowed.
-   All fields that are used in the `ON` condition must be listed in the `SELECT` list.

-   A node that defines a to-parent association is not automatically a child entity of the business object. A node is only a child entity of the business object when it is the target of a to-child association.
-   To-parent associations can be given annotations in the [element list](ABENCDS_SELECT_LIST_ENTRY_V1.html) of the CDS entity in which they are defined.

@AbapCatalog.sqlViewName: 'DEMO\_SALES\_SL'\\n@AbapCatalog.compiler.compareFilter: true\\n@AccessControl.authorizationCheck: #CHECK\\n@EndUserText.label: 'SDDL: Interface (BO) View for SOI SL'\\ndefine view DEMO\_SALES\_CDS\_SO\_I\_SL\\n as select from\\n demo\_sales\_so\_sl\\n association to parent DEMO\_SALES\_CDS\_SO\_I as \_SalesOrderItem\\n on $projection.parent\_key = \_SalesOrderItem.so\_item\_key\\n \\{\\n key schedule\_line\_key,\\n so\_item\_key as parent\_key,\\n parent\_key as root\_key,\\n \_SalesOrderItem\\n \\}\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_association\_v1.html