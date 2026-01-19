---
title: "ABENCDS_EXTEND_VIEW_ENTITY"
description: |
  ABENCDS_EXTEND_VIEW_ENTITY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_EXTEND_VIEW_ENTITY.htm"
abapFile: "ABENCDS_EXTEND_VIEW_ENTITY.html"
keywords: ["select", "delete", "if", "try", "data", "types", "ABENCDS", "EXTEND", "VIEW", "ENTITY"]
---

``\  EXTEND VIEW ENTITY cds_view_entity | projection_view         WITH              [association1               association2 ...]\              \{ select_list_extension \}              [GROUP BY field1, field2, ...  ]\              [`EXCEPT`\ |\ `INTERSECT`\ | UNION [ALL]  \{ ... \}]\ [;]``

[1. `... GROUP BY field1, field2, ...`](#ABAP_ADDITION_1@3@)

[2. ``... `EXCEPT`|`INTERSECT`|UNION [ALL] \{ ... \}``](#ABAP_ADDITION_2@3@)

Extends an existing [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html)\\ `cds_view_entity` or an existing [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html)\\ `projection_view` using a [CDS view entity extension](ABENCDS_VIEW_ENTITY_EXTEND_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html). An existing CDS view can have one or more CDS view entity extensions.

As a prerequisite for the extension of the CDS entity with the statement `EXTEND VIEW ENTITY`, the elements of the [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html) [`AbapCatalog.viewEnhancementCategory[ ]`](ABENCDS_VIEW_ENTITY_ANNO.html) must be specified accordingly in its definition with [`DEFINE VIEW ENTITY`](ABENCDS_DEFINE_VIEW_ENTITY.html):

Additionally, the annotation [`AbapCatalog.extensibility.extensible`](ABENCDS_F1_ENTITY_ANNOTATIONS.html) must not be set to `false`.

View entity extensions can make additions to the original view, but they cannot modify, overwrite, or delete elements from the original view. The following components are possible in a CDS view entity extension:

It is not allowed to use inner joins in extensions, since it would affect the result cardinality of the extended view and would therefore represent a modification, which is not allowed. Inner joins, for example in the form of path expressions with a join attribute, lead to syntax check errors.

This addition must be specified if elements not defined using aggregate expressions are added to a view with [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html). These elements must be specified after `GROUP BY` and they extend the [`GROUP-BY`](ABENCDS_GROUP_BY_V2.html) clause of the original view. With respect to the extended view, the extended `GROUP-BY` clause must follow the general rules for a `GROUP-BY` clause.

As a prerequisite, the definition of the original view must contain at least one aggregate expression in its `SELECT` list.

Extensions of a view with aggregate expressions require it to contain the annotation array `viewEnhancementCategory[ ]` with the values `#PROJECTION` and `#GROUP_BY`.

This addition must be specified when a view entity with a [set operator](ABENCDS_SET_OPERATORS_GLOSRY.html) ([`EXCEPT`](ABENCDS_EXCEPT_V2.html), [`INTERSECT`](ABENCDS_INTERSECT_V2.html), or [`UNION`](ABENCDS_UNION_V2.html)) is extended. A corresponding addition ([`EXCEPT`](ABENCDS_EXCEPT_V2.html), [`INTERSECT`](ABENCDS_INTERSECT_V2.html), or [`UNION`](ABENCDS_UNION_V2.html)) must be specified for each clause of the original view. The curly brackets can contain elements that extend the `SELECT` list of the associated set-operator clause of the original view. As specified by the `SELECT` list extended using `select_list_extension`, the set-operator clauses must be extended so that the rules for set-operator clauses are not broken in the extended view.

The addition `ALL` is available only for `UNION` views and it must be specified each time it is specified in the associated `UNION` clause of the original view.

As a prerequisite, the original view must have a set-operator clause.

Extensions of a view with set-operator clauses require it to contain the annotation array `viewEnhancementCategory[ ]` with the values`#PROJECTION_LIST` and `#UNION`.

-   By default or if only the value `#PROJECTION_LIST` is specified, views without [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html) in the `SELECT` list and without a [set-operator](ABENCDS_SET_OPERATORS.html) clause can be extended.
-   In order to extend views that have [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html) in the `SELECT` list, the annotation array must contain the value `#GROUP_BY` alongside `#PROJECTION_LIST`.
-   In order to extend views that contain set-operator clauses, the annotation array must contain the value `#UNION` alongside `#PROJECTION_LIST`.
-   **Note** The annotation array value `#UNION` allows extensions not only for union views, but for views including any set operator (also [`EXCEPT`](ABENCDS_EXCEPT_V2.html) and [`INTERSECT`](ABENCDS_INTERSECT_V2.html)). The annotation array value `#UNION` is a known misnomer.
-   If the annotation array contains the value `#NONE`, the view cannot be extended.

-   New associations `association1`, `association2` can be defined and exposed in the CDS view entity extension. The same rules apply that are described in topic [CDS DDL - CDS view entity, `ASSOCIATION`](ABENCDS_SIMPLE_ASSOCIATION_V2.html).
-   **Note** It is **not** allowed to define new [CDS to-parent associations](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) in a view entity extension. New [to-child associations](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) are allowed under the condition that the association target is also defined as composition child and has the required to-parent association.
-   When extending a CDS projection view, the view entity extension can specify all features that are possible in a projection view, such as [CDS virtual elements](ABENCDS_VIRTUAL_ELEMENT_GLOSRY.html), [CDS localized field](ABENCDS_LOCALIZED_FIELD_GLOSRY.html), and [redefined](ABENCDS_PROJ_VIEW_REDEFINED_ASSOC.html) and [redirected associations](ABENCDS_PV_ASSOC_REDIRECTED.html). See topic [CDS DDL - `projection_list`, Transactional Query](ABENCDS_PROJ_VIEW_ELEMENT_LIST.html) for a complete list.
-   When extending a CDS view entity, the view entity extension can specify all features that are possible in a view entity, such as [path expressions](ABENCDS_PATH_EXPRESSION_V2.html), [elementary operands](ABENCDS_OPERANDS_V2.html), [expressions](ABENCDS_EXPRESSIONS_V2.html) and [functions](ABENCDS_BUILTIN_FUNCTIONS_V2.html). See topic [CDS DDL - CDS View Entity, `SELECT`, `element`](ABENCDS_SELECT_LIST_ENTRY_V2.html) for a complete list.
-   Each appended element must have a unique name. If an appended element already occurs in the existing `SELECT` list or in a different extension, the element must be given an alternative element name using `AS`.

-   CDS view entity extensions themselves cannot be extended.
-   It is not possible to specify new [input parameters](ABENCDS_PARAMETER_V2.html) in a view entity extension.
-   No addition [`ROOT`](ABENCDS_DEFINE_ROOT_VIEW_V1.html) can be specified in the statement `EXTEND VIEW ENTITY` to transform a regular view to a [root entity](ABENROOT_ENTITY_GLOSRY.html).
-   An appended field cannot be defined as a [`KEY`](ABENCDS_BUILTIN_FUNCTIONS_V2.html) field.
-   In a view entity extension, header annotations are not supported. That means that no annotations are allowed in front of the statement `EXTEND VIEW ENTITY`.
-   For views that have an element of data type `LRAW` or `LCHR` in the `SELECT` list, no view extension is possible and the annotation `AbapCatalog.viewEnhancementCategory[#NONE]` is enforced. The reason is that elements of data types `LRAW` or `LCHR` must always be in the last position of the `SELECT` list.
-   It is not possible enable both [buffering](ABENCDS_V2_VIEW_BUFFERING.html) and extensions for a view entity. If the annotation [`@AbapCatalog.entityBuffer.definitionAllowed`](ABENCDS_VIEW_ENTITY_ANNO.html) is set to `true`, extensions are not allowed.
-   CDS view entity extensions **cannot** append fields of CDS projection views, CDS custom entities, or CDS abstract entities to a CDS view entity. Fields of CDS projection views, CDS abstract entities, or CDS custom entities can - generally - **not** be used in path expressions and this also holds true for path expressions in CDS view entity extensions.
-   This is **not** valid:
-   `extend view entity MyExtension with \{ _assocToAbstract.field1 as Alias1 _assocToCustom.field2 as Alias2 _assocToProjection.field3 as Alias3 \}`

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_extension.html