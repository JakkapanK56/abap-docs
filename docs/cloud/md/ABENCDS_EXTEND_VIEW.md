---
title: "The following CDS view extension"
description: |
  adds two view fields to the existing CDS view. The DDIC append view `DEMO_CDS_EXTENS` is created in ABAP Dictionary. This addition must be specified if elements not defined using aggregate expressions are added to a view with aggregate expressions(ABENCDS_AGGREGATE_FUNCTIONS_V1.html). These elemen
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_EXTEND_VIEW.htm"
abapFile: "ABENCDS_EXTEND_VIEW.html"
keywords: ["select", "delete", "do", "if", "try", "data", "types", "ABENCDS", "EXTEND", "VIEW"]
---

``[`@AbapCatalog.sqlViewAppendName: 'CDS_APPEND_VIEW'`](ABENCDS_F1_EXTEND_VIEW_ANNOTATIONS.html)\  [[`@extension_annot1`](ABENCDS_F1_EXTEND_VIEW_ANNOTATIONS.html)]\  [[`@extension_annot2`](ABENCDS_F1_EXTEND_VIEW_ANNOTATIONS.html)]\  ...  EXTEND VIEW ddic_based_view         WITH cds_view_extension              [association1               association2 ...]\              \{ select_list_extension \}              [GROUP BY field1, field2, ...  ]\              [UNION [ALL] \{ ... \}]\ [;]``

[1. `... GROUP BY field1, field2, ...`](#ABAP_ADDITION_1@3@)

[2. `... UNION [ALL] \{ ... \}`](#ABAP_ADDITION_2@3@)

Extends an existing [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html)\\ `ddic_based_view` using a [CDS DDIC-based view extension](ABENCDS_VIEW_EXTEND_GLOSRY.html)\\ `cds_view_extension` in the [CDS DDL](ABENCDS_DDL_GLOSRY.html). An existing CDS DDIC-based view (obsolete) can have one or more CDS DDIC-based view extensions.

The extended CDS view `ddic_based_view` must be specified under the name of its [CDS entity](ABENCDS_ENTITY_GLOSRY.html). The name of the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) cannot be specified.

As a prerequisite for the extension of the CDS view with the statement `EXTEND VIEW`, the elements of the [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html) [`AbapCatalog.viewEnhancementCategory[ ]`](ABENCDS_VIEW_ANNO_V1.html) must be specified accordingly in its definition with [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html):

View extensions can make additions to the original view, but it cannot modify, overwrite, or delete elements from the original view. The following components are possible in a CDS view extension:

Two repository objects are created for a CDS view extension that is defined using `EXTEND VIEW`. A name must be specified for each of the two objects:

The name of the new DDIC append view and of the actual CDS view extension should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

**Note** The DDL source code of a CDS view extension does not need to have the same name as the CDS view extension entity, but it is advisable to use the name of the entity.

It is not allowed to use inner joins in view extensions, since it would affect the result cardinality of the extended view and would therefore represent a modification, which is not allowed. Inner joins, for example in the form of path expressions with a join attribute, lead to syntax check errors.

The following CDS view extension

adds two view fields to the existing CDS view.

The DDIC append view `DEMO_CDS_EXTENS` is created in ABAP Dictionary.

This addition must be specified if elements not defined using aggregate expressions are added to a view with [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V1.html). These elements must be specified after `GROUP BY` add extend the [`GROUP-BY`](ABENCDS_GROUP_BY_V1.html) clause of the original view. With respect to the extended view, the extended `GROUP-BY` clause must follow the general rules for a `GROUP-BY` clause.

The addition cannot be specified if the definition of the original view does not contain any aggregate expressions in its `SELECT` list.

Extensions of a view with aggregate expressions require it to contain the annotation array `viewEnhancementCategory[ ]` with the value `#GROUP_BY`.

The following CDS view extension

extends the existing CDS view.

A database field `connid` and an aggregate expression `sum(distance)` are added to the `SELECT` list. Accordingly, the addition `GROUP BY` must be used to add the database field to the `GROUP-BY` clause of the original view.

This addition must be specified when a view with [`UNION`](ABENCDS_UNION_V1.html) clauses is extended. A corresponding `UNION` addition must be specified for each `UNION` clause of the original view. The addition `ALL` must be specified each time it is specified in the associated `UNION` clause of the original view. The curly brackets can contain elements that extend the `SELECT` list of the associated `UNION` clause of the original view. As specified by the `SELECT` list extended using `select_list_extension`, the `UNION` clauses must be extended so that the rules for `UNION` clauses are not broken in the extended view.

The addition cannot be specified if the definition of the original view does not have a `UNION` clause.

Extensions of a view with `UNION` clauses require it to contain the annotation array `viewEnhancementCategory[ ]` with the value `#UNION`.

The following CDS view extension

extends the existing CDS view.

The original view has two `UNION` clauses represented using corresponding `UNION` additions in the definition of the CDS view extension. Two elements with matching types are added to the three `SELECT` lists of the original view.

-   By default or if only the value `#PROJECTION_LIST` is specified, views without [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V1.html) in the `SELECT` list and without a [`UNION`](ABENCDS_UNION_V1.html) clause can be extended.
-   In order to extend views that have [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V1.html) in the `SELECT` list, the annotation array must contain the value `#GROUP_BY` alongside `#PROJECTION_LIST`.
-   In order to extend views that contain [`UNION`](ABENCDS_UNION_V1.html) clauses, the annotation array must contain the value `#UNION` alongside `#PROJECTION_LIST`.
-   If the annotation array contains the value `#NONE`, the view cannot be extended.

-   The annotation [`AbapCatalog.sqlViewAppendName`](ABENCDS_F1_EXTEND_VIEW_ANNOTATIONS.html) is mandatory. Further annotations [`extension_annot1`](ABENCDS_F1_EXTEND_VIEW_ANNOTATIONS.html), [`extension_annot2`](ABENCDS_F1_EXTEND_VIEW_ANNOTATIONS.html), ... can also be specified. This is optional.
-   New associations `association1`, `association2` can be defined and exposed in the CDS view extension. The same rules apply that are described in topic [CDS DDL - DDIC-based view, `ASSOCIATION`](ABENCDS_SIMPLE_ASSOCIATION_V1.html).
-   **Note** The definition of new [to-child associations](ABENTO_CHILD_ASSOCIATION_GLOSRY.html) or [CDS to-parent associations](ABENTO_PARENT_ASSOCIATION_GLOSRY.html) in a view extension is not allowed.
-   The elements of the extension list `select_list_extension` specified after `EXTEND VIEW` are added to the existing `SELECT` list. At least one element must be added. It is possible to access all fields of all data sources of the extended view in the extension list `select_list_extension`. The list can have all [elements](ABENCDS_SELECT_LIST_ENTRY_V1.html) of a [`SELECT` list](ABENCDS_SELECT_LIST_V1.html), namely:

-   [field](ABENCDS_FIELD_V2.html) of a data source
-   [Input parameters](ABENCDS_PARAMETER_V1.html) of the extended CDS view. It is not possible to specify new input parameters in a view extension.
-   It can expose a [CDS association](ABENCDS_SELECT_LIST_ASSOCIATION_V2.html) of the extended view or a newly defined association
-   Using a [path expressions](ABENCDS_PATH_EXPRESSION_V1.html), a field of an association target can be included. Path expressions are possible for associations of the extended view or for newly defined associations.
-   [literals, session variables, expressions and functions](ABENCDS_OPERANDS_AND_EXPR_V1.html)
-   **Note** To add aggregate expressions to a view extension, special rules apply. See below.

-   Aggregate expressions are possible in the `SELECT` list of a view extension only if the following conditions are met:

-   The original view must contain [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V1.html). If the original view does not contain any aggregate expressions, this is not possible.
-   The extended view must be annotated with `AbapCatalog.viewEnhancementCategory [#PROJECTION_LIST, #GROUP_BY]`
-   If non-aggregated elements are added to a CDS view with aggregate expressions, then the [`GROUP-BY`](ABENCDS_GROUP_BY_V1.html) clause must be extended using the addition `GROUP BY`

-   If the original view contains [`UNION`](ABENCDS_UNION_V1.html), equivalent `UNION` additions must be used in the statement `EXTEND VIEW`. As a prerequisite, the extended view must be annotated with `AbapCatalog.viewEnhancementCategory [#PROJECTION_LIST, #UNION]`
-   If an appended element already occurs in the existing `SELECT` list or if a different extension occurs, it must be given an alternative element name using `AS`.

-   CDS views with an explicit [name list](ABENCDS_NAME_LIST_V1.html) cannot currently be extended.
-   CDS view extensions themselves cannot be extended.
-   It is not possible to specify new input parameters in a view extension.
-   No addition [`ROOT`](ABENCDS_DEFINE_ROOT_VIEW_V1.html) can be specified in the statement `EXTEND VIEW` to transform a regular view to a [root entity](ABENROOT_ENTITY_GLOSRY.html).
-   An appended field cannot be defined as a key field using `KEY`.
-   The definition of new to-parent or to-child associations in a view extension is not allowed.
-   For views that have an element of data type `LRAW` or `LCHR` in the `SELECT` list, no view extension is possible and the annotation `AbapCatalog.viewEnhancementCategory[#NONE]` is enforced. The reason is that elements of data types `LRAW` or `LCHR` must always be in the last position of the `SELECT` list.
-   The annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)` is not supported as a header annotation in view extensions.

-   The actual name `cds_view_extension` of the CDS view extension is specified after the keywords `EXTEND VIEW`. This name follows the same rules as the name of an [DDIC append view](ABENDDIC_APPEND_VIEW_GLOSRY.html), but can have up to 30 characters.
-   The name `CDS_APPEND_VIEW` for an [append view](ABENDDIC_APPEND_VIEW_GLOSRY.html) in ABAP Dictionary must be specified in quotation marks after the annotation [`@AbapCatalog.sqlViewAppendName`](ABENCDS_F1_EXTEND_VIEW_ANNOTATIONS.html). This name is subject to the same rules as the name of a [DDIC database view](ABENDATABASE_VIEW_GLOSRY.html) in ABAP Dictionary, see topic DDIC - Naming Rules for DDIC Views. The new DDIC append view extends the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of the extended CDS view. The name given to the DDIC append view can no longer be changed after the CDS view extension is transported into a follow-on system.

-   Once the DDL source code of a CDS view extension has been transported, the actual name `cds_view_extension` and the name of the DDIC append view `CDS_APPEND_VIEW` can no longer be changed. The extended view `ddic_based_view` can also no longer be changed.

-   Currently it is not possible to define extension categories for CDS views. As a consequence, the following restrictions apply:

-   CDS views have the property `can be extended in any way` with respect to the [extension category of DDIC structures](ABENDDIC_STRUCTURES_ENH_CAT.html). The consequences of this must be respected when extending a CDS view.
-   The properties of a CDS view defined using [annotations](ABENCDS_VIEW_ANNO_V1.html), such as switching on [table buffering](ABENTABLE_BUFFERING_GLOSRY.html), cannot currently be modified using extensions.

-   CDS view extensions specified with `EXTEND ENTITY` are recommended for CDS DDIC-based views (obsolete) only. However, for compatibility and migration reasons, it is also possible to extend [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html) or [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) with the statement `EXTEND VIEW`. However, view extends defined using `EXTEND VIEW` do not support the syntax elements specific to projection views and CDS view entities. Therefore, it is recommended that the statement [`EXTEND VIEW ENTITY`](ABENCDS_EXTEND_VIEW_ENTITY.html) is used for extensions of CDS projection views and CDS view entities instead.
-   If, for some reason, a CDS projection view or a CDS view entity is extended with `EXTEND VIEW`, the [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) is deleted (as CDS projection views and CDS view entities do not have any DDIC artefacts), and entity annotations referring to the CDS-managed DDIC view are ignored.
-   CDS DDIC-based views (obsolete) are [obsolete](ABENCDS_DDIC_ENTITY.html). If new CDS views are required, CDS view entities should be used.

@AbapCatalog.sqlViewAppendName: 'DEMO\_CDS\_EXTENS'\\nextend view demo\_cds\_original\_view with demo\_cds\_view\_extension \\n \\{\\n spfli.distance,\\n spfli.distid as unit\\n \\};\\n @AbapCatalog.sqlViewName: 'DEMO\_CDS\_ORIG'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@AbapCatalog.viewEnhancementCategory: \[#PROJECTION\_LIST\]\\n@EndUserText.label: 'Further information about the CDS entity'\\ndefine view demo\_cds\_original\_view \\n as select from\\n spfli\\n join scarr on\\n scarr.carrid = spfli.carrid\\n \\{\\n key scarr.carrname as carrier,\\n key spfli.connid as flight,\\n spfli.cityfrom as departure,\\n spfli.cityto as destination\\n \\};\\n @AbapCatalog.sqlViewAppendName: 'DEMO\_CDS\_EXTAGG'\\nextend view demo\_cds\_aggregate with demo\_cds\_extend\_aggregate\\n \\{\\n spfli.connid, \\n sum(spfli.distance) as sum\_distance\\n \\}\\n group by\\n spfli.connid;\\n @AbapCatalog.sqlViewName: 'DEMO\_CDS\_AGG'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@AbapCatalog.viewEnhancementCategory: \[#PROJECTION\_LIST,#GROUP\_BY\]\\ndefine view demo\_cds\_aggregate\\n as select from\\n spfli \\n \\{\\n carrid,\\n sum(fltime) as sum\_fltime\\n \\}\\n group by\\n carrid;\\n @AbapCatalog.sqlViewAppendName: 'DEMO\_CDS\_EXTUNI'\\nextend view demo\_cds\_union with demo\_cds\_extend\_union\\n \\{\\n c as c3,\\n d as c4\\n \\}\\nunion\\n \\{\\n f as c3,\\n g as c4\\n \\}\\nunion all\\n \\{\\n k as c3,\\n l as c4\\n \\};\\n @AbapCatalog.sqlViewName: 'DEMO\_CDS\_UIO'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@AbapCatalog.viewEnhancementCategory: \[#PROJECTION\_LIST,#UNION\]\\ndefine view demo\_cds\_union\\n as select from\\n demo\_join1\\n \\{\\n a as c1,\\n b as c2\\n \\}\\nunion select from\\n demo\_join2\\n \\{\\n d as c1,\\n e as c2\\n \\}\\nunion all select from\\n demo\_join3\\n \\{\\n i as c1,\\n j as c2\\n \\};\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_extension.html