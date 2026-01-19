---
title: "ABENCDS_HIERARCHIES"
description: |
  ABENCDS_HIERARCHIES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_HIERARCHIES.htm"
abapFile: "ABENCDS_HIERARCHIES.html"
keywords: ["select", "do", "if", "case", "data", "types", "internal-table", "ABENCDS", "HIERARCHIES"]
---

A CDS hierarchy is defined in the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html) using the statement [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of the [ABAP Core Data Services (CDS)](ABENCDS.html). The name of the CDS hierarchy must match the name of the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html).

A CDS hierarchy represents an [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) ([parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html)) created when the CDS hierarchy is accessed. CDS hierarchies can currently only be used when the [standard database](ABENSTANDARD_DB_GLOSRY.html) is a [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). When a CDS hierarchy is activated, a view with the same name is created as an [ABAP-managed database object](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html) on the database. This view accesses a hierarchy generator function such as [`HIERARCHY`](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/2969da89b87f4abd85fd0b5f9f5bc395).

A CDS hierarchy is declared as a CDS entity `hierarchy` using the statement [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html). As a global data type, the CDS entity represents a structured type with the [elements of the CDS hierarchy](ABENCDS_F1_HIERA_ELEMENT_LIST.html) as components and can be used like any [CDS entity](ABENCDS_ENTITY_GLOSRY.html).

A CDS hierarchy is located in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.

A CDS hierarchy is a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html).

When using CDS hierarchies, the handling of the special [hierarchy attributes](ABENHIERARCHY_ATTRIBUTE_GLOSRY.html) is of special importance. These attributes occur as part of the result set of the hierarchy function on the database:

CDS hierarchies can be released as stable APIs under the [C1 release contract for system internal use](ABENC1_CONTRACT_GLOSRY.html).

For more information about CDS hierarchies, see [*CDS Hierarchies*](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/b3232b0a219d4f7098b47de3c3710509?version=sap_cross_product_abap) in the ABAP Data Models guide on SAP Help Portal.

-   In ABAP CDS, the CDS entity can be used as a data source of other CDS entities.
-   In ABAP, the CDS entity can be used as a data type and in ABAP SQL read statements.
-   The CDS entity cannot be used as a data type for definitions of [dictionary objects](ABENDICTIONARY_OBJECT_GLOSRY.html).

-   The hierarchy attributes can be accessed explicitly as follows:

-   The prefix [`$node.`](ABENCDS_F1_HIERA_ELEMENT.html) can be used to list them in the [element list](ABENCDS_F1_HIERA_ELEMENT_LIST.html) of the CDS hierarchy and grant them an alias name. They are then applied like a regular element of the CDS hierarchy.
-   When a ABAP SQL query is applied to a CDS hierarchy, they are handled as additional [hierarchy columns](ABENHIERARCHY_COLUMN_GLOSRY.html), regardless of their element list, and their names can be used in explicitly specified columns

-   This makes it possible to specify a hierarchy attribute in the element list of the CDS hierarchy in two different ways in an ABAP SQL query, either by using the name of the element or by using the name of the hierarchy column.
-   When CDS hierarchies are used, the hierarchy attributes are not respected implicitly in the following cases:

-   When used as a data source of other CDS entities.
-   When used as a data type.
-   When used as a data source in [ABAP SQL](ABENABAP_SQL.html), if `*` or `...~*` is specified in the [`SELECT`](ABAPSELECT_LIST.html) list.

-   In these cases, only the explicit elements of the [element list](ABENCDS_F1_HIERA_ELEMENT_LIST.html) are respected. These can, however, represent hierarchy attributes.

-   For a CDS hierarchy, no repository object is created in ABAP Dictionary.
-   A hierarchy attribute does not become part of a structured data type created by a CDS hierarchy until it is listed explicitly in the element list of the CDS hierarchy.
-   For information about client handling of CDS hierarchies, see [Client Handling in CDS Hierarchies](ABENCDS_HIERA_CLIENT_HANDLING.html).
-   CDS hierarchies cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). An ABAP SQL statement that accesses a CDS hierarchy bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html