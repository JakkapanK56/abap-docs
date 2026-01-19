---
title: "ABENCDS_COMPOSITION_V1"
description: |
  ABENCDS_COMPOSITION_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_COMPOSITION_V1.htm"
abapFile: "ABENCDS_COMPOSITION_V1.html"
keywords: ["select", "do", "if", "case", "data", "ABENCDS", "COMPOSITION"]
---

`... COMPOSITION [ [min..max] ] OF target [AS _compos] ...`

Defines a [to-child association](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) in [ABAP CDS](ABENABAP_CORE_DATA_SERVICES_GLOSRY.html). A to-child association is a specialized [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) that defines the current [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) as [parent entity](ABENPARENT_ENTITY_GLOSRY.html) of the [composition target](ABENCOMPOSITION_TARGET_GLOSRY.html). The association target is the [child entity](ABENCHILD_ENTITY_GLOSRY.html). Both parent and child entity must define mutual associations. [CDS to-parent associations](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) and [to-child associations](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) together define a [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html) relationship that in turn defines the [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of a [RAP business object](ABENRAP_BO_GLOSRY.html) in the context of the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html).

A to-child association is defined in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) of a CDS view entity using the keyword `COMPOSITION`. A to-child association associates the current CDS entity, as a [composition source](ABENCOMPOSITION_SOURCE_GLOSRY.html), with the [composition target](ABENCOMPOSITION_TARGET_GLOSRY.html)\\ `target` specified in the definition of the to-child association.

The child entity (composition target) must already have a [to-parent association](ABENCDS_TO_PARENT_ASSOC_V1.html) to the composition parent before a to-child association can be defined in the parent.

To-child associations are defined similarly to CDS associations. Here are the similarities and differences:

The following applies to the composition target `target`:

Exposure:

Usage:

To-child association and joins:

The CDS view `DEMO_SALES_CDS_SO_I` shown below returns information about sales order items. It defines three associations, one of them being a to-child association. The composition target (i.e. the child entity) is the CDS view `DEMO_SALES_CDS_SO_I_SL`.

Explanation: Each sales order item can have one or more schedule lines, but schedule lines can exist only in connection with sales order items.

In the `SELECT` list, the to-child association `_ScheduleLine` is exposed, so it can be accessed from external CDS entities.

-   Similarities

-   For the [cardinality](ABENCARDINALITY_GLOSRY.html)\\ `[ [min..max] ]` and the name of the to-child association `AS _compos`, the same rules apply as to a regular CDS association, see topic [CDS DDL - DDIC-Based View, `ASSOCIATION`](ABENCDS_SIMPLE_ASSOCIATION_V1.html).

-   Differences:

-   No `ON` condition is defined explicitly for a to-child association. The `ON` condition is generated automatically using the `ON` condition of the to-parent association of the composition target.
-   A default filter cannot be defined for a to-child association. The syntax `... WITH DEFAULT FILTER ...` is not allowed.

-   The composition target can be a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), an [abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html), or a [custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html).
-   A child entity can be the target of exactly one to-child association. This means that a child entity can have exactly one parent entity.
-   The target of a to-child association must not be a [root entity](ABENROOT_ENTITY_GLOSRY.html).
-   The composition target cannot be specified using a [path expression](ABENCDS_PATH_EXPRESSION_V1.html). The following is **not** allowed:
-   `COMPOSITION OF _path._to_child`
-   It must be a [CDS entity](ABENCDS_ENTITY_GLOSRY.html). If `target` is a [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html), the way the to-child association can be used is restricted.
-   Self-to-child associations are not allowed. The target of a to-child association cannot be the CDS entity in which this to-child association is defined.

-   The name of the to-child association `_compos` must be added exactly once to the `select_list` of the CDS view entity it is defined in, without attributes and alias. If no name is defined for the to-child association, the name of the to-child association is the name of the target entity `target` and this name must be made available in the `SELECT` list.

-   **Caution** Fields from a composition target **cannot** be used locally in path expressions. Fields from the composition target cannot be used in the `SELECT` list, `WHERE` clause, or any other position of the view entity in which it is defined.
-   This also applies to [CDS DDIC-based view extensions](ABENCDS_VIEW_EXTEND_GLOSRY.html). A field from a composition target cannot be added to a CDS view entity via [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html).
-   A to-child association can be propagated in data definitions other than the one in which it is defined. In this case, the to-child association uses its special semantics and is handled like a normal CDS association.
-   When a to-child association is used in another data definition, metadata extension, or view extension other than the one in which it is defined, then it can be used in a path expression. Parameter passing and defining attributes is also possible in this case.
-   To-child associations can be used in annotation values (such as `AnnotationRef` or `ElementRef`) in the CDS entities that define them, since this does not lead to an SQL join.

-   The use cases and generation of joins described in topic [`CDS DDL - CDS View Entity, Associations and Joins`](ABENCDS_ASSOC_JOIN_V1.html) also apply to to-child associations, with the exception of use cases 3 and 4.

-   [Cyclical dependencies](ABENCDS_CYCLE_PROBLEMS.html) should be avoided when using to-child associations to prevent problems occurring in mass activations of CDS entities.
-   To-child associations can be given annotations in the element list `element_list` of the CDS entity in which they are defined.
-   Defining new to-child associations is not supported in [`UNION`](ABENCDS_UNION_V1.html) views.

@AbapCatalog.sqlViewName: 'DEMO\_SALES\_SOI'\\n@AbapCatalog.compiler.compareFilter: true\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'SDDL: Interface (BO) View for SOI'\\ndefine view DEMO\_SALES\_CDS\_SO\_I\\n as select from\\n demo\_sales\_so\_i\\n association to parent DEMO\_SALES\_CDS\_SO as \_SalesOrder\\n on $projection.parent\_key = \_SalesOrder.so\_key\\n composition \[0..\*\] of DEMO\_SALES\_CDS\_SO\_I\_SL as \_ScheduleLine\\n association \[0..1\] to DEMO\_SALES\_CDS\_MATERIAL as \_Material\\n on $projection.material = \_Material.material\\n \\{\\n key so\_item\_key,\\n parent\_key,\\n posnr,\\n material,\\n @Semantics.amount.currencyCode: 'currency'\\n gross\_amount,\\n currency,\\n @Semantics.quantity.unitOfMeasure: 'unit'\\n quantity,\\n unit,\\n \_SalesOrder,\\n \_ScheduleLine,\\n \_Material\\n \\}\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_association\_v1.html