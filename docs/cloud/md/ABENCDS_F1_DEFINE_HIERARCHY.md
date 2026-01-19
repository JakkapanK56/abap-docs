---
title: "ABENCDS_F1_DEFINE_HIERARCHY"
description: |
  ABENCDS_F1_DEFINE_HIERARCHY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_DEFINE_HIERARCHY.htm"
abapFile: "ABENCDS_F1_DEFINE_HIERARCHY.html"
keywords: ["select", "insert", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "ABENCDS", "DEFINE", "HIERARCHY"]
---

``[[`@entity_annot1`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  [[`@entity_annot2`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  ...  [[`@hierarchy_annot1`](ABENCDS_F1_HIERARCHY_ANNOTATIONS.html)]\  [[`@hierarchy_annot2`](ABENCDS_F1_HIERARCHY_ANNOTATIONS.html)]\  ...  [DEFINE] HIERARCHY hierarchy           [[`parameter_list`](ABENCDS_F1_HIERA_PARAMETER_LIST.html)]\           AS PARENT CHILD HIERARCHY(             SOURCE cds_view             CHILD TO PARENT ASSOCIATION _hierarchy_assoc             [PERIOD FROM field1 TO field2 VALID FROM from TO to]\             [DIRECTORY _directory_assoc FILTER BY cds_cond]\             [START WHERE cds_cond]\             SIBLINGS ORDER BY field1 [ASCENDING|DESCENDING][,                               field2 [ASCENDING|DESCENDING], ...]\             [DEPTH depth]\             [NODETYPE node_type]\             [LOAD BULK|INCREMENTAL|load_option]\             [MULTIPLE PARENTS \{NOT ALLOWED\}|\{LEAVES ONLY\}|ALLOWED]\             [ORPHANS IGNORE|ERROR|ROOT]\             [CYCLES ERROR|BREAKUP]\             [GENERATE SPANTREE]\             [CACHE ON|OFF|FORCE])       \{ [`element_list`](ABENCDS_F1_HIERA_ELEMENT_LIST.html) \}``

[1. `... SOURCE cds_view`](#ABAP_ADDITION_1@3@)

[2. `... CHILD TO PARENT ASSOCIATION _hierarchy_assoc`](#ABAP_ADDITION_2@3@)

[3. `... PERIOD FROM field1 TO field2 VALID FROM from TO to`](#ABAP_ADDITION_3@3@)

[4. `... DIRECTORY _directory_assoc FILTER BY cds_cond`](#ABAP_ADDITION_4@3@)

[5. `... START WHERE cds_cond`](#ABAP_ADDITION_5@3@)

[6. `... SIBLINGS ORDER BY field1 [ASCENDING|DESCENDING], ...`](#ABAP_ADDITION_6@3@)

[7. `... DEPTH depth`](#ABAP_ADDITION_7@3@)

[8. `... NODETYPE node_type`](#ABAP_ADDITION_8@3@)

[9. `... LOAD BULK|INCREMENTAL|load_option`](#ABAP_ADDITION_9@3@)

[10. `... MULTIPLE PARENTS \{NOT ALLOWED\}|\{LEAVES ONLY\}|ALLOWED`](#ABAP_ADDITION_10@3@)

[11. `... ORPHANS IGNORE|ERROR|ROOT`](#ABAP_ADDITION_11@3@)

[12. `... CYCLES ERROR|BREAKUP`](#ABAP_ADDITION_12@3@)

[13. `... GENERATE SPANTREE`](#ABAP_ADDITION_13@3@)

[14. `... CACHE ON|OFF|FORCE`](#ABAP_ADDITION_14@3@)

Defines a [CDS entity](ABENCDS_ENTITY_GLOSRY.html)\\ `hierarchy` as a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html). A CDS hierarchy has a tabular result set whose rows construct [parent-child relationships](ABENPCR_GLOSRY.html). When a CDS hierarchy is accessed as the data source of a [ABAP SQL](ABENABAP_SQL_GLOSRY.html) query, it is handled like an [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) ([parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html)) in which additional [hierarchy columns](ABENHIERARCHY_COLUMN_GLOSRY.html) can be selected.

The additions in parentheses after `AS PARENT CHILD HIERARCHY` define the way the hierarchy is created:

All other additions define further properties of the hierarchy. The rows of the tabular result set of the CDS hierarchy are the [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) of the new hierarchy but without its [hierarchy columns](ABENHIERARCHY_COLUMN_GLOSRY.html).

The name of a CDS hierarchy is in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.

Defines a simple CDS hierarchy. The class `CL_DEMO_HIERARCHY_TREE` accesses the CDS hierarchy and compares this with accesses to similar hierarchies in ABAP SQL.

The mandatory addition `SOURCE` specifies a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) as the [hierarchy source](ABENHIERARCHY_SOURCE_GLOSRY.html) of the CDS hierarchy. This source must [expose](ABENCDS_SELECT_LIST_ASSOCIATION_V2.html) the [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) specified after `CHILD TO PARENT ASSOCIATION` in its `SELECT` list.

CDS view entities and CDS DDIC based views are currently the only [CDS entities](ABENCDS_ENTITY_GLOSRY.html) that can be specified as the source of a CDS hierarchy. More specifically, a CDS hierarchy cannot be the source of another CDS hierarchy.

The CDS hierarchy of the previous example uses the following CDS view entity as a source:

The mandatory addition `CHILD TO PARENT ASSOCIATION` specifies the [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) whose `ON` condition selects the [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html) of the [root node set](ABENROOT_NODE_SET_GLOSRY.html). The hierarchy association must be exposed by the CDS view specified after `SOURCE`.

The hierarchy association defines the parent-child relationship between the [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html). The following conditions apply here:

Each row of the result set of the source `hierarchy_source` that meets the `ON` condition for an existing hierarchy node is included recursively in the hierarchy as its [child node](ABENCHILD_NODE_GLOSRY.html) (if this is possible).

The optional additions define further conditions specifying whether a row can be included as a hierarchy node or not.

The CDS view entity of the previous example exposes its association `_tree`. This CDS association meets all requirements of a hierarchy association and can be used as one.

The optional addition `PERIOD` defines the hierarchy as a [temporal SQL hierarchy](ABENTEMPORAL_HIERARCHY_GLOSRY.html) in which the hierarchy nodes are limited by an adjustment of time intervals.

A temporal SQL hierarchy is created as follows:

For temporal SQL hierarchies, there are additional [hierarchy attributes](ABENCDS_HIERARCHY_ATTRIBUTES.html)\\ `VALID_FROM` and `VALID_UNTIL` that contain the interval limits of the [validity interval](ABENVALIDITY_INTERVAL_GLOSRY.html) of each hierarchy node.

The addition `PERIOD` must not be used with `GENERATE SPANTREE`.

The following CDS hierarchies create two [temporal SQL hierarchies](ABENTEMPORAL_HIERARCHY_GLOSRY.html). Here, date fields and time stamp fields are both used once as [periods](ABENPERIOD_GLOSRY.html). The class `CL_DEMO_HIERARCHY_TEMPORAL` accesses the CDS hierarchies and compares the results with the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) used in a similar way. When executed, `CL_DEMO_HIERARCHY_TEMPORAL` demonstrates how the addition `PERIOD` works.

The optional addition `DIRECTORY` defines a filter condition `cds_cond` for the rows of the source of the hierarchy specified after `SOURCE`. The hierarchy is generated only from those rows in the source that meet the filter condition. For `cds_cond`, `AND` comparisons for equality using `=` can be specified as follows:

The same [rules](ABENCDS_COND_EXPR_TYPES_V2.html) apply to the comparable types as to CDS views.

For more information about hierarchy directories, see [*Hierarchy Directories*](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/eac380b170594d86910e92829f4c8d3d?version=sap_cross_product_abap) in the ABAP Data Models guide on SAP Help Portal.

The following CDS view entity defines a self association `_pcr`, which itself defines a parent-child relationship, and a CDS association `_dir` of a DDIC database table `DEMO_HIERA_DIR`:

The following CDS hierarchy uses the operand `dir_entry` from the left side of the `ON` condition from the CDS view in the filter condition after `DIRECTORY _dir FILTER BY`:

When the class `CL_DEMO_HIERARCHY_PRNTCHLD_DIR` is executed, various parameters can be passed and the filter condition is demonstrated.

The optional addition `START WHERE` specifies the start condition for creating the hierarchy. `START WHERE` can be followed by a logical expression `cds_cond` that selects rows from the source `cds_view`. The same operators can be specified for [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) as in a [`WHERE`](ABENCDS_WHERE_CLAUSE_V2.html) clause of a CDS view entity and the same rules apply. The operands on the left side can be elements of the CDS view specified after `SOURCE`. The operands on the right side can be literals, parameters from the [parameter list](ABENCDS_F1_HIERA_PARAMETER_LIST.html) of the hierarchy, and [session variables](ABENSESSION_VARIABLE_GLOSRY.html). When specifying literals, parameters, and session variables, the same applies as when defining CDS views.

In semantic key scenarios, i.e. when the column that contains the parent node has a numeric data type, the `START WHERE` condition can be left out. In this case, an implicit `START WHERE` condition is generated, so that the root node set consists of all rows where the column that contains the [parent node](ABENPARENT_NODE_GLOSRY.html) (as defined by the hierarchy association) is initial.

In UUID scenarios, the condition where to start is not implicitly set and must be specified explicitly. Otherwise, a syntax check error occurs.

The selected rows are inserted in the hierarchy as a [root node set](ABENROOT_NODE_SET_GLOSRY.html). For each [root node](ABENROOT_NODE_GLOSRY.html) in the root node set, the [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html) are selected that meet the `ON` condition of the hierarchy association and, if possible, inserted in the hierarchy.

The following CDS hierarchy uses an interval boundary with `BETWEEN` as a start condition. The class `CL_DEMO_HIERARCHY_START_WHERE` accesses the CDS hierarchy and compares the result with the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) used in a similar way. When executed, this class demonstrates how this addition works.

The following CDS hierarchy does not have a `START WHERE` condition:

It is implicitly handled like the following CDS hierarchy:

An implicit `START WHERE` condition is added that depends on the parent column, which again depends on the hierarchy association. The class `CL_DEMO_CDS_HIERA_START_WHERE` shows that both CDS hierarchies select the same data.

The mandatory addition `SIBLINGS ORDER BY` sorts [sibling nodes](ABENSIBLING_NODE_GLOSRY.html) in the hierarchy. Fields `field1`, `field2`, ... of the source `cds_view` can be specified in a comma-separated list after the addition `SIBLINGS ORDER BY` to specify the order of the sibling nodes.

The addition `ASCENDING` or `DESCENDING` can be specified for each field to specify an ascending or descending order (ascending is the default).

The fields specified after `SIBLINGS ORDER BY` cannot be of the [type](ABENDDIC_BUILTIN_TYPES.html)\\ `LCHR`, `LRAW`, `STRING`, `RAWSTRING`, or `GEOM_EWKB`.

The addition `SIBLINGS ORDER BY` is mandatory in the case of CDS hierarchies, since this sort cannot be performed at a later time. For example, the result of a [hierarchy navigator](ABENHIERARCHY_NAVIGATOR_GLOSRY.html) in ABAP SQL may depend on how the hierarchy specified as a source is sorted. A [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html) specified as a source can be sorted directly here, but this is no longer possible in the case of predefined CDS hierarchies.

The following CDS hierarchy sorts siblings in descending order by the field `id`. The class `CL_DEMO_HRRCHY_SIBLINGS_ORDER` accesses the CDS hierarchy and compares the result with the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) used in a similar way. When executed, this class demonstrates how this addition works.

The optional addition `depth` limits the number of [hierarchy levels](ABENHIERARCHY_LEVEL_GLOSRY.html) used to create [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html). `depth` can be a typed literal or a parameter from the [parameter list](ABENCDS_F1_HIERA_PARAMETER_LIST.html) of the hierarchy that has an integer type.

The value in `depth` has the following meaning:

The addition `DEPTH` can be used only if the addition `ORPHANS` is not specified or is specified as `ORPHANS IGNORE`.

The following CDS hierarchy uses an input parameter `p_depth` to restrict the hierarchy levels. The class `CL_DEMO_HIERARCHY_DEPTH` accesses the CDS hierarchy and compares the result with the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) used in a similar way. When executed, this class demonstrates how this addition works.

The optional addition `NODETYPE` identifies an element of the CDS hierarchy that can be used to determine the type of the hierarchy node. The values of this [element](ABENCDS_F1_HIERA_ELEMENT.html) must be element names, which must also be contained in the [element list](ABENCDS_F1_HIERA_ELEMENT_LIST.html) of the CDS hierarchy. Using the foreign key association or text association, which is assigned (via dedicated annotations) to the respective element, the attributes and the text for the respective hierarchy node can be determined. The element `node_type` specified with `NODETYPE` is saved in the metadata of the CDS hierarchy and can be read by consumers using the method `GET_NODETYPE_FIELD` of interface `IF_DD_CDS_READ_API_HIER_C2P`.

A framework that analyzes `NODETYPE` is currently the [ABAP Analytical Engine](ABENABAP_AE_GLOSRY.html).

In the following CDS [tree hierarchy](ABENTREE_HIERARCHY_GLOSRY.html), the element `name` is defined as a node type. If a hierarchy node in the element `name` has the value `Apple`, it should be a [leaf node](ABENLEAF_NODE_GLOSRY.html) without any [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html).

The class `CL_DEMO_HRRCHY_TREE_NODETYPE` accesses the CDS hierarchy and when executed returns any hierarchy nodes that violate the rule. For that, the node type of the CDS hierarchy is evaluated by the following code sequence:

In the following CDS [tree hierarchy](ABENTREE_HIERARCHY_GLOSRY.html), the element `NodeType` is defined as a node type. When selecting data from the CDS hierarchy for a view that can be used by the ABAP Analytical Engine, the element `NodeType` might return two different values. One is `CostCenter` and the other is `HierarchyNode`. When `NodeType` = `CostCenter`, then the elements `ControllingArea` and `CostCenter` must be filled, and with the foreign key association `_CostCenter`, the text and additional attributes can be derived. When `NodeType` = `HierarchyNode`, then the text association `_Text` is used to get the text for that node.

The addition `LOAD` specifies the load policy for the generated hierarchy. It can be used for performance optimization.

The addition works as follows:

The following CDS hierarchy uses the addition `LOAD` with a parameter `p_load`:

The following `SELECT` statement is taken from the class `CL_DEMO_CDS_HIERA_BLK_INCRMNT`:

By converting the enumerated constant `sql_hierarchy=>c_load_option-incremental` into a character string, the value *INCREMENTAL* is passed to the parameter `p_load`. The program works in the same way as described for the [executable example](ABENSELECT_HIERARCHY_ABEXA.html) for the hierarchy generator of ABAP SQL.

The optional addition `MULTIPLE PARENTS` specifies whether the hierarchy can have [child nodes](ABENCHILD_NODE_GLOSRY.html) with multiple [parent nodes](ABENPARENT_NODE_GLOSRY.html):

The following CDS hierarchy allows multiple parent nodes for leaf nodes. The class `CL_DEMO_HIERARCHY_MULTI_PRNTS` accesses the CDS hierarchy and compares the result with the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) used in a similar way. When executed, this class demonstrates how this addition works.

The optional addition `ORPHANS` defines the way [orphan nodes](ABENORPHAN_NODE_GLOSRY.html) are handled. The following categories of orphan nodes exist:

The additions work as follows:

The following CDS hierarchy transforms orphan nodes into root nodes. The class `CL_DEMO_HIERARCHY_ORPHANS` accesses the CDS hierarchy and compares the result with the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) used in a similar way. When executed, this class demonstrates how this addition works.

The addition `CYCLES` defines how [node cycles](ABENNODE_CYCLE_GLOSRY.html) are defined. The additions work as follows:

If the addition `BREAKUP` is specified, `MULTIPLE PARENTS ALLOWED` must also be specified.

The following CDS hierarchy breaks node cycles using `CYCLES BREAKUP`. The class `CL_DEMO_HIERARCHY_CYCLES` accesses the CDS hierarchy and compares the result with the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) used in a similar way. When executed, this class demonstrates how this addition works.

If the addition `GENERATE SPANTREE` is specified, only those child nodes without multiple parent nodes are inserted in the hierarchy, starting from every root node. If, due to its parent-child relationships, a child node were to have multiple parent nodes after its root node, exactly one of the potential paths from the root node to this child node is selected and the child node is created for this path only.

If the addition `GENERATE SPANTREE` is specified, the additions `MULTIPLE PARENTS`, `ORPHANS`, and `CYCLES` cannot be specified and other defaults apply in parts:

The following CDS hierarchy uses the addition `GENERATE SPANTREE`. The class `CL_DEMO_HIERARCHY_SPANTREE` accesses the CDS hierarchy and compares the result with the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) used in a similar way. When executed, this class demonstrates how this addition works.

The optional addition `CACHE` defines the caching policy for the generated hierarchy result. It can be used for performance optimization. The addition works as follows:

-   [`@entity_annot`](ABENCDS_F1_ENTITY_ANNOTATIONS.html) and [`@hierarchy_annot`](ABENCDS_F1_HIERARCHY_ANNOTATIONS.html) can be used to specify optional [annotations](ABENCDS_ANNOTATION_GLOSRY.html) for the CDS hierarchy.
-   [`parameter_list`](ABENCDS_F1_HIERA_PARAMETER_LIST.html) is used to declare a list of optional input parameters for the CDS hierarchy.
-   [`element_list`](ABENCDS_F1_HIERA_ELEMENT_LIST.html) is used to declare the elements of the CDS hierarchy.

-   `SOURCE` must be followed by a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) `cds_view` as the source of the hierarchy.
-   `CHILD TO PARENT ASSOCIATION` must be followed by a [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html)\\ `_hierarchy_assoc` exposed by the source `cds_view`. The hierarchy association must be a [self-association](ABENSELF_ASSOCIATION_GLOSRY.html) where the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) and [association target](ABENASSOCIATION_TARGET_GLOSRY.html) must be the source `cds_view`. The `ON` condition of the hierarchy association defines the [parent-child relationships](ABENPCR_GLOSRY.html) between the [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html).
-   `START WHERE` can be followed by a start condition that defines [root nodes](ABENROOT_NODE_GLOSRY.html) for the [root node set](ABENROOT_NODE_SET_GLOSRY.html) of the hierarchy. The hierarchy consists of the root nodes of the root node set and their [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html).
-   In semantic key scenarios, i.e. when the column that contains the parent node has a numeric data type, the `START WHERE` condition can be left out. In this case, an implicit `START WHERE` condition is generated, so that the root node set consists of all rows where the column that contains the [parent node](ABENPARENT_NODE_GLOSRY.html) (as defined by the hierarchy association) is initial.
-   In UUID scenarios, the condition where to start is not implicitly set and must be specified explicitly. Otherwise, a syntax check error occurs.

-   The syntax and functions of a CDS hierarchy overlap to a large extent with the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GEN_ASSOC.html) for a [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html) in ABAP SQL
-   Unlike in ABAP SQL, however, ABAP CDS cannot access the additional [hierarchy columns](ABENHIERARCHY_COLUMN_GLOSRY.html) of a CDS hierarchy. Instead, the associated [hierarchy attributes](ABENHIERARCHY_ATTRIBUTE_GLOSRY.html) must be entered in the [element list](ABENCDS_F1_HIERA_ELEMENT_LIST.html) of the CDS hierarchy if required.
-   On [SAP HANA databases](ABENHANA_DATABASE_GLOSRY.html), the result sets of CDS hierarchies plus the hierarchy generator `HIERARCHY` are created by using the SAP HANA hierarchy generator function `HIERARCHY` and similar. More information can be found in the [HANA SQL documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).
-   Since hierarchies generated from the `START WHERE` condition are buffered on the database, it is advisable to use fixed values for the root nodes of large hierarchies of data that do not change often. To evaluate subnodes of such hierarchies, the [hierarchy navigators](ABENHIERARCHY_NAVIGATOR_GLOSRY.html) of ABAP SQL can then be used. The usage of arbitrary parameters for specifying the root nodes especially should be restricted to small hierarchies or for demonstration purposes only.

-   The CDS association must be a [self-association](ABENSELF_ASSOCIATION_GLOSRY.html).
-   Only equality comparisons with the operator `=` and combined using `AND` can occur in the `ON` condition of the CDS association.
-   In each comparison in the `ON` condition, one field of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) must be compared with a field (prefixed with `_hierarchy_assoc`) of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html).
-   The [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the CDS association cannot contain any fields that have the same name as a [hierarchy attribute](ABENCDS_HIERARCHY_ATTRIBUTES.html). An alternative element name must be defined for these fields.

-   `field1` and `field2` are used to specify the fields of the source `cds_view` that define the lower and upper limits of a [period](ABENPERIOD_GLOSRY.html) in the hierarchy data. `field1` and `field2` must be different fields of the same data type. This can be:

-   The built-in type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) of ABAP Dictionary.
-   A data type that is defined by one of the [DDIC data elements](ABENDATA_ELEMENT_GLOSRY.html)\\ `TIMESTAMP` or `TIMESTAMPL`.

-   `from` and `to` define the lower and upper limit of a time interval that acts as a condition for the periods of the [root node set](ABENROOT_NODE_SET_GLOSRY.html). The data type of `from` and `to` must match the data type of `field1` and `field2`. The following can be specified:

-   Parameters from the [parameter list](ABENCDS_F1_HIERA_PARAMETER_LIST.html) of the hierarchy. Here, only the syntax [`$parameters.pname`](ABENCDS_PARAMETER_V2.html) is possible.
-   [Literals](ABENCDS_LITERAL_V2.html) whose value matches the requested data type. [Typed date literals](ABENCDS_TYPED_LITERAL_V2.html) are recommended.

-   Only [root nodes](ABENROOT_NODE_GLOSRY.html) of the [root node set](ABENROOT_NODE_SET_GLOSRY.html) in which the period defined using `field1` and `field2` has a non empty intersection with the time interval defined by `from` and `to` are taken into account. This intersection forms the [validity interval](ABENVALIDITY_INTERVAL_GLOSRY.html) of the root node.
-   Only [child nodes](ABENCHILD_NODE_GLOSRY.html) in which the period defined by `field1` and `field2` has a non empty intersection with the validity interval of the [parent node](ABENPARENT_NODE_GLOSRY.html) are generated. This intersection forms the [validity interval](ABENVALIDITY_INTERVAL_GLOSRY.html) of the child node.

-   The validity interval of a descendant node is always a subset of a validity interval of all ancestor nodes. Validity intervals can only remain the same or become narrower from hierarchy level to hierarchy level, they can never get wider.
-   For a descendant node to belong to a temporal SQL hierarchy, it is not sufficient for its period to overlap with the time interval defined by `from` and `to`. Only the validity interval of the parent node is decisive. A path of a regular hierarchy is truncated in a temporal SQL hierarchy at the position in which there is no intersection between the period and the preceding validity interval.
-   The [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the current [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) must not have any fields called `VALID_FROM` or `VALID_UNTIL`. An alternative element name must be defined for these fields.
-   The value of `to` can also be less than the value of `from`. However, a validity interval is formed where necessary. In contrast, if the value of the lower interval limit of the period is greater than the value of the upper interval limit, the validity interval is empty.
-   Additions such as `MULTIPLE PARENTS` or `CYCLES` affect the temporal SQL hierarchy. Nodes that would raise an exception in a regular hierarchy can be hidden in a temporal SQL hierarchy.
-   On an [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), the associated hierarchy generator function [`HIERARCHY_TEMPORAL`](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/2969da89b87f4abd85fd0b5f9f5bc395) is used to create a temporal SQL hierarchy.

-   The operator on the left side of a comparison must be an element of the current hierarchy whose name occurs as an operand in the CDS view specified after `SOURCE` as follows:

-   On the left side of an `ON` condition of a CDS association `_directory_assoc`.
-   On the left side of an `ON` condition of the hierarchy association `_hierarchy_assoc`.

-   The operator on the right side of the comparison can be a [typed literal](ABENCDS_TYPED_LITERAL_V2.html) or a type-compliant parameter from the [parameter list](ABENCDS_F1_HIERA_PARAMETER_LIST.html) of the hierarchy.

-   A filter condition removes all hierarchy nodes and their descendant nodes from the result set that do not match the condition `cds_cond`.
-   The content of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the CDS association `_directory_assoc` is ignored when the filter condition is evaluated.
-   The restriction of the operands on the left side of a comparison to the operands of a CDS association of the source is mainly intended for analytical data models that are evaluated by an analytical runtime. The analytical runtime reads data from the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of this CDS association and passes it to input parameters of the hierarchy that evaluates them in the filter condition.

-   It is advisable to always specify the start condition explicitly, since this makes the definition clearer. Furthermore, the root node set defined by the implicit start condition is not always suitable and also cannot be modified using parameters.
-   The start condition should select a feasible set of root nodes. If no rows in the result set of the source `cds_view` meet the condition, the hierarchy is empty. If all rows meet the condition, the descendant nodes of every row are selected and inserted.

-   For `depth` values greater then 0, the number of hierarchy edges are traversed that is specified in `depth`, starting from a [root node](ABENROOT_NODE_GLOSRY.html).
-   If the value of `depth` is 0, only the [root nodes](ABENROOT_NODE_GLOSRY.html) are inserted in the hierarchy.
-   For `depth` values less than 0, no [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) are created.

-   `BULK`
-   This is the default setting. The complete source table of the hierarchy is loaded.
-   `INCREMENTAL`
-   Only the rows of the source table that can be reached from the root nodes ([root node set](ABENROOT_NODE_SET_GLOSRY.html)) are loaded.
-   `load_option`
-   For `load_option` a parameter from the [parameter list](ABENCDS_F1_HIERA_PARAMETER_LIST.html) of the hierarchy can specified using the syntax [`$parameters.pname`](ABENCDS_PARAMETER_V2.html). The parameter must have the data type `CHAR` or `SSTRING` and a length of at least 11. Valid values of the parameter are *BULK* or *INCREMENTAL* in uppercase and have the same effect as the respective keywords. Invalid values lead to an exception from the database.

-   The performance optimization with `LOAD INCREMENTAL` depends on the data source. If the source table is very large and the hierarchy reads relatively few rows, there is a positive effect. If, by contrast, the source table has only few rows and they are all part of the hierarchy, `LOAD INCREMENTAL` might even take longer than `LOAD BULK`.
-   Do not use `LOAD INCREMENTAL` with [global temporary tables](ABENDDIC_DATABASE_TABLES_GTT.html) as data source, because it does not have any positive effect then (if anything, it slows down the performance).
-   The valid values for `load_option` are the names of [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) with the [enumerated type](ABENENUMERATED_TYPE_GLOSRY.html)\\ `LOAD_OPTION` from the class `SQL_HIERARCHY`. When accessing a CDS hierarchy with a parameter for `load_option` in ABAP SQL, the character representation of these enumerated constants can be passed.

-   `NOT ALLOWED`
-   This is the default setting (a child node can have exactly one parent node only).
-   `LEAVES ONLY`
-   Only [leaf nodes](ABENLEAF_NODE_GLOSRY.html) can have multiple parent nodes.
-   `ALLOWED`
-   All hierarchy nodes can have multiple parent nodes.

-   Hierarchy nodes that could have parent nodes (as specified by the parent-child relationship) but the parent nodes are not in the hierarchy (known as true orphans).
-   Hierarchy nodes that cannot be reached from the root node set using hierarchy edges.
-   Hierarchy nodes that are part of a [node cycle](ABENNODE_CYCLE_GLOSRY.html) and cannot be reached from the root node set using hierarchy nodes (known as island orphans).

-   `IGNORE`
-   This is the default setting (any orphan nodes are not inserted in the hierarchy).
-   `ERROR`
-   Any orphan nodes detected raise an exception.
-   `ROOT`
-   Orphan nodes are inserted in the hierarchy as follows:

-   True orphans are included in the root node set as root nodes and flagged as orphan nodes in the [hierarchy attribute](ABENCDS_HIERARCHY_ATTRIBUTES.html)\\ `HIERARCHY_IS_ORPHAN`.
-   [Descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html) of true orphans are handled like descendant nodes of parent nodes from the root node set, but are also flagged as orphan nodes in the [hierarchy attribute](ABENCDS_HIERARCHY_ATTRIBUTES.html)\\ `HIERARCHY_IS_ORPHAN`.
-   For the hierarchy nodes of island orphans, a parent node in the root node set is generated for the child node where the cycle occurs. In the generated root node, all columns of the source `hierarchy_source` contain the null value. In the [hierarchy attributes](ABENCDS_HIERARCHY_ATTRIBUTES.html), the additional root node is flagged as an orphan node and `PARENT_ID` also contains the null value.

-   `ERROR`
-   This is the default setting (an exception is raised when a node cycle is detected).
-   `BREAKUP`
-   The traversal of [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html) is broken at the child node where the node cycle occurs and the [hierarchy attribute](ABENDDDDL_HIERARCHY.html)\\ `HIERARCHY_IS_CYCLE` is set to the value 1.

-   If the paths have different lengths, the shortest is selected.
-   If the paths all have the same length, the first path found is selected.

-   `MULTIPLE PARENTS` is used implicitly with `ALLOWED`.
-   `CYCLES` is used implicitly with `BREAKUP`.

-   If the parent-child relationships for the current data do not produce [tree hierarchies](ABENTREE_HIERARCHY_GLOSRY.html), the addition `GENERATE SPANTREE` is ignored.
-   Even if one path (from many paths) to a child node is selected, this does not mean that all others are rejected. In this case, only the edges leading to the child node are missing.
-   The addition `GENERATE SPANTREE` can be used to detect whether at least one path leads from a root node to a child node without the result set needing to contain all paths.
-   The addition `GENERATE SPANTREE` is used in an [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) to access the hierarchy generator function [`HIERARCHY_SPANTREE`](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/2969da89b87f4abd85fd0b5f9f5bc395) there.

-   `ON`
-   The generated hierarchy is cached by the database if the system assesses the source to be reliably deterministic. This is the default behavior.
-   `OFF`
-   The generated hierarchy is not cached by the database.
-   `FORCE`
-   The generated hierarchy is cached by the database even if the source cannot be assessed to be reliably deterministic.

define hierarchy DEMO\_CDS\_SIMPLE\_TREE\\n with parameters\\n p\_id : abap.int4\\n as parent child hierarchy(\\n source\\n DEMO\_CDS\_SIMPLE\_TREE\_SOURCE\\n child to parent association \_tree\\n start where\\n id = :p\_id\\n siblings order by\\n id ascending\\n )\\n \\{\\n id,\\n parent,\\n name\\n \\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_SIMPLE\_TREE\_SOURCE\\n as select from demo\_simple\_tree\\n association to exact one DEMO\_CDS\_SIMPLE\_TREE\_SOURCE as \_tree \\n on $projection.parent = \_tree.id\\n\\{\\n \_tree,\\n key id,\\n parent\_id as parent,\\n name\\n\\}\\n define hierarchy DEMO\_CDS\_PARENT\_CHILD\_DATE\_PRD\\n with parameters\\n p\_date\_from : dats,\\n p\_date\_to : dats\\n as parent child hierarchy(\\n source DEMO\_CDS\_PARENT\_CHILD\_SRC\_PRD\\n child to parent association \_relat\\n period from date\_from to date\_to\\n valid from $parameters.p\_date\_from \\n to $parameters.p\_date\_to\\n start where\\n id = 'A'\\n siblings order by\\n id\\n )\\n\\{\\n id,\\n parent,\\n $node.valid\_from as h\_valid\_from,\\n $node.valid\_until as h\_valid\_until \\}\\n define hierarchy DEMO\_CDS\_PARENT\_CHILD\_TS\_PRD\\n with parameters\\n p\_ts\_from : timestamp,\\n p\_ts\_to : timestamp\\n as parent child hierarchy(\\n source DEMO\_CDS\_PARENT\_CHILD\_SRC\_PRD\\n child to parent association \_relat\\n period from ts\_from to ts\_to\\n valid from $parameters.p\_ts\_from \\n to $parameters.p\_ts\_to\\n start where\\n id = 'A'\\n siblings order by\\n id\\n )\\n\\{\\n id,\\n parent,\\n $node.valid\_from as h\_valid\_from,\\n $node.valid\_until as h\_valid\_until \\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_PARENT\_CHILD\_SRC\_DIR\\n as select from\\n demo\_parchld\_dir\\n association to many DEMO\_CDS\_PARENT\_CHILD\_SRC\_DIR as \_pcr on\\n $projection.parent = \_pcr.id and\\n $projection.dir\_entry = \_pcr.id\\n association to one demo\_hiera\_dir as \_dir on\\n $projection.dir\_entry = \_dir.dir\_entry \\n \\{\\n \_pcr,\\n \_dir,\\n id,\\n parent\_id as parent,\\n dir\_entry\\n \\}\\n define hierarchy DEMO\_CDS\_PARENT\_CHILD\_DIR \\n with parameters\\n p\_id1 : abap.char(2),\\n p\_id2 : abap.char(2),\\n p\_dir : abap.char(2)\\n as parent child hierarchy(\\n source\\n DEMO\_CDS\_PARENT\_CHILD\_SRC\_DIR \\n child to parent association \_pcr\\n directory \_dir filter by dir\_entry = :p\_dir \\n start where\\n id = :p\_id1 or id = :p\_id2 \\n siblings order by\\n parent\\n multiple parents allowed\\n )\\n \\{\\n id,\\n parent,\\n dir\_entry\\n \\}\\n define hierarchy DEMO\_CDS\_PARENT\_CHILD\_STRTWHR \\n with parameters\\n p\_from : abap.char(2),\\n p\_to : abap.char(2)\\n as parent child hierarchy(\\n source\\n DEMO\_CDS\_PARENT\_CHILD\_SOURCE\\n child to parent association \_relat\\n start where\\n id between :p\_from and :p\_to\\n siblings order by\\n id\\n multiple parents allowed\\n cycles breakup\\n )\\n \\{\\n id,\\n parent\\n \\}\\n define hierarchy DEMO\_CDS\_HIERA\_NO\_START\_WHERE\\n as parent child hierarchy(\\n source DEMO\_CDS\_SIMPLE\_TREE\_SOURCE\\n child to parent association \_tree\\n siblings order by\\n id ascending\\n )\\n\\{\\n id,\\n parent,\\n name\\n\\}\\n define hierarchy DEMO\_CDS\_HIERA\_START\_WHERE\\n as parent child hierarchy(\\n source DEMO\_CDS\_SIMPLE\_TREE\_SOURCE\\n child to parent association \_tree\\n start where\\n parent is initial\\n siblings order by\\n id ascending\\n )\\n\\{\\n id,\\n parent,\\n name\\n\\}\\n define hierarchy DEMO\_CDS\_SIMPLE\_TREE\_SIBL\_ORD\\n with parameters\\n p\_id : abap.int4\\n as parent child hierarchy(\\n source\\n DEMO\_CDS\_SIMPLE\_TREE\_SOURCE\\n child to parent association \_tree\\n start where\\n id = :p\_id\\n siblings order by\\n id descending\\n )\\n \\{\\n id,\\n parent,\\n name\\n \\}\\n define hierarchy DEMO\_CDS\_SIMPLE\_TREE\_DEPTH\\n with parameters\\n p\_depth : abap.int4\\n as parent child hierarchy(\\n source\\n DEMO\_CDS\_SIMPLE\_TREE\_SOURCE\\n child to parent association \_tree\\n start where\\n id = 1\\n siblings order by\\n id ascending\\n depth :p\_depth\\n )\\n \\{\\n name,\\n $node.hierarchy\_level as hiera\_level\\n \\}\\n define hierarchy DEMO\_CDS\_SIMPLE\_TREE\_NODETYPE\\n as parent child hierarchy(\\n source\\n DEMO\_CDS\_SIMPLE\_TREE\_SOURCE\\n child to parent association \_tree\\n start where\\n id = 1\\n siblings order by\\n id ascending\\n nodetype name\\n )\\n \\{\\n id,\\n parent,\\n name\\n \\}\\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTRY. \\n FINAL(nodetype) = \\n CAST if\_dd\_cds\_read\_api\_hier\_c2p( \\n cl\_dd\_sobject\_factory=>create\_entity( \\n 'DEMO\_CDS\_SIMPLE\_TREE\_NODETYPE' ) \\n )->get\_nodetype\_field( )-fieldname. \\n CATCH cx\_dd\_sobject\_get cx\_dd\_cds\_read\_api INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). define hierarchy DEMO\_COSTCENTERHIER \\n with parameters \\n p\_controllingArea : fis\_kokrs, \\n P\_hierarchy : fis\_hryid\_cctr \\n as parent child hierarchy( \\n source \\n DEMO\_COSTCENTERHIERARCHYNODE \\n child to parent association \\n \_parent \\n directory \\n \_Hierarchy \\n filter by \\n ControllingArea = $parameters.p\_controllingArea \\n and CostCenterHierarchy = $parameters.P\_hierarchy \\n start where \\n ParentNode is initial \\n siblings order by \\n HierarchyNodeSequence \\n nodetype \\n NodeType \\n ) \\n\\{ \\n @ObjectModel.foreignKey.association: '\_ControllingArea' \\n ControllingArea, \\n CostCenterHierarchy, \\n @ObjectModel.text.association: '\_Text' \\n HierarchyNode, \\n ParentNode, \\n @ObjectModel.foreignKey.association: '\_CostCenter' \\n CostCenter, \\n HierarchyNodeSequence, \\n NodeType, \\n\\ \\n \_Text, \\n \_CostCenter, \\n \_Hierarchy, \\n \_ControllingArea \\n\\} define hierarchy DEMO\_CDS\_GUID\_HIERA\_BULK\_INCR\\n with parameters\\n p\_id : abap.raw(16),\\n p\_load : abap.char(11)\\n as parent child hierarchy(\\n source DEMO\_CDS\_GUID\_HIERA\_SOURCE\\n child to parent association \_relat\\n start where\\n id = :p\_id\\n siblings order by\\n id\\n load $parameters.p\_load\\n )\\n\\{\\n id,\\n parent,\\n field\\n\\}\\n DATA start\_node TYPE demo\_guid\_hiera-id. \\n\\ \\nSELECT FROM demo\_cds\_guid\_hiera\_bulk\_incr( \\n p\_id = @start\_node, \\n p\_load = @( CONV #( \\n sql\_hierarchy=>c\_load\_option-incremental ) ) ) \\n FIELDS id, \\n parent, \\n field \\n ORDER BY id \\n INTO TABLE @FINAL(inc\_result). define hierarchy DEMO\_CDS\_PARENT\_CHILD\_MULTIPAR\\n as parent child hierarchy(\\n source\\n DEMO\_CDS\_PARENT\_CHILD\_SOURCE\\n child to parent association \_relat\\n start where\\n id = 'A'\\n siblings order by\\n id\\n multiple parents leaves\\n )\\n \\{\\n id,\\n parent,\\n $node.hierarchy\_level as hiera\_level\\n \\}\\n define hierarchy DEMO\_CDS\_PARENT\_CHILD\_ORPHANS\\n as parent child hierarchy(\\n source\\n DEMO\_CDS\_PARENT\_CHILD\_SOURCE\\n child to parent association \_relat\\n start where\\n id = 'A'\\n siblings order by\\n id\\n multiple parents allowed\\n orphans root\\n cycles breakup\\n )\\n \\{\\n id,\\n parent,\\n $node.node\_id as hiera\_node\_id,\\n $node.parent\_id as hiera\_parent\_id,\\n $node.hierarchy\_is\_orphan as hiera\_is\_orphan,\\n $node.hierarchy\_is\_cycle as hiera\_is\_cycle,\\n $node.hierarchy\_rank as hiera\_rank,\\n $node.hierarchy\_parent\_rank as hiera\_parent\_rank,\\n $node.hierarchy\_level as hiera\_level\\n \\}\\n define hierarchy DEMO\_CDS\_PARENT\_CHILD\_CYCLES\\n as parent child hierarchy(\\n source\\n DEMO\_CDS\_PARENT\_CHILD\_SOURCE\\n child to parent association \_relat\\n start where\\n id = 'A'\\n or id = 'X'\\n or id = 'Y'\\n or id = 'Z'\\n siblings order by\\n id\\n multiple parents allowed\\n cycles breakup\\n )\\n \\{\\n id,\\n parent,\\n $node.hierarchy\_is\_cycle as hiera\_is\_cycle,\\n $node.hierarchy\_level as hiera\_level\\n \\}\\n define hierarchy DEMO\_CDS\_PARENT\_CHILD\_SPANTREE\\n as parent child hierarchy(\\n source\\n DEMO\_CDS\_PARENT\_CHILD\_SOURCE\\n child to parent association \_relat\\n start where\\n id = 'A'\\n or id = 'K'\\n or id = 'X'\\n or id = 'Y'\\n siblings order by\\n id\\n generate spantree \\n ) \\n \\{\\n id,\\n parent\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_hierarchies.html