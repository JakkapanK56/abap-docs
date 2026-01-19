---
title: "ABENCDS_EXTERNAL_ENTITY"
description: |
  ABENCDS_EXTERNAL_ENTITY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_EXTERNAL_ENTITY.htm"
abapFile: "ABENCDS_EXTERNAL_ENTITY.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "data", "types", "ABENCDS", "EXTERNAL", "ENTITY"]
---

A [CDS external entity](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) is defined in the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html) using the statement [`DEFINE EXTERNAL ENTITY`](ABENCDS_DEFINE_EXTERNAL_ENTITY.html). A CDS external entity is a [persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html) that can be used to access data from external database systems within the [AS ABAP](ABENAS_ABAP_GLOSRY.html). The external systems can be other [SAP HANA](ABENHANA_DATABASE_GLOSRY.html) or non-SAP HANA database systems. The properties of the connection between an external entity and the external system are configured using a [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html). The connection is managed using [SAP HANA Smart Data Access](ABENSAP_HANA_SDA_GLOSRY.html). [Dynamic external entities](ABENCDS_DYNAMIC_EE_GLOSRY.html) and [static external entities](ABENCDS_STATIC_EE_GLOSRY.html) are available. External entities are read-only by default. They can be defined as [writable](ABENWRITABLE_EE_GLOSRY.html) using the addition [`WRITABLE`](ABENCDS_WRITABLE_EE.html).

A CDS external entity includes the following:

Currently, [dynamic external entities](ABENCDS_DYNAMIC_EE_GLOSRY.html) and [static external entities](ABENCDS_STATIC_EE_GLOSRY.html) are available.

External entities can be defined as [writable](ABENWRITABLE_EE_GLOSRY.html) using the optional addition [`WRITABLE`](ABENCDS_WRITABLE_EE.html). Writable external entities allow modifying data on external database systems using the [ABAP SQL](ABENABAP_SQL_GLOSRY.html)\\ [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html) operations. Besides a logical external schema, an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) is required to establish a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) and enable the logical external schema for write access.

When accessing [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) external entities, an implicit filtering to the ID contained in the SAP HANA session variable `CDS_CLIENT` is applied. The value of the ID is defined in the logical external schema. External entities are [client-safe](ABENCLIENT_SAFE_GLOSRY.html) by default.

[Table buffering](ABENTABLE_BUFFERING_GLOSRY.html) with a [CDS entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html) is currently not supported for external entities.

-   The CDS entity
-   A CDS external entity is declared as a CDS entity `external_entity` using the statement [`DEFINE EXTERNAL ENTITY`](ABENCDS_DEFINE_EXTERNAL_ENTITY.html). As a global data type, the CDS entity represents a structured type with the [elements of the CDS external entity](ABENCDS_EE_ELEM_LIST.html) as components and can be used as follows:

-   In ABAP, the CDS entity can be used as a data type and in ABAP SQL read statements. The addition [`PROVIDED BY`](ABAPSELECT_DATA_SOURCE.html) for specifying a [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) at runtime is mandatory for dynamic external entities, but it is not required for static external entities.
-   Static external entities can be used as a data source for other CDS entities and in [ABAP Managed Database Procedures (AMDP)](ABENABAP_MANAGED_DB_PROC_GLOSRY.html). For dynamic external entities, this is not possible.
-   A CDS external entity cannot be used as a data type for definitions of [dictionary objects](ABENDICTIONARY_OBJECT_GLOSRY.html).

-   A CDS external entity is located in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.
-   A [CDS logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) that maps the external entity to a specific physical external system or database, and to a specific [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) in such a remote system. A logical external schema is represented by a transportable [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) and it must be configured for the connection to work. For more details, see the topic [ABAP CDS - CDS Logical External Schema](ABENCDS_LOGICAL_EXTERNAL_SCHEMA.html).

-   A dynamic external entity does not specify a logical external schema in its data definition, but uses the addition [`PROVIDED AT RUNTIME`](ABENCDS_DEFINE_EXTERNAL_ENTITY.html) instead. The logical external schema for a dynamic external entity must be specified as a part of the ABAP SQL `SELECT` statement when the external entity is accessed, using a [`PROVIDED BY`](ABAPSELECT_DATA_SOURCE.html) clause. Dynamic external entities can only be accessed by ABAP SQL; they cannot be used as a data source for other CDS entities.
-   A static external entity specifies a logical external schema in its data definition using the addition `PROVIDED BY logical_external_schema`. Static external entities can be used as data sources in [ABAP SQL](ABENABAP_SQL_GLOSRY.html)\\ `SELECT` statements, in other [CDS entities](ABENCDS_ENTITY_GLOSRY.html), and in [ABAP Managed Database Procedures](ABENABAP_MANAGED_DB_PROC_GLOSRY.html) (AMDP).

-   Releasing CDS external entities or logical external schemas as a [released API](ABENRELEASED_API_GLOSRY.html) is not supported.
-   Extending a CDS external entity using a [CDS entity extension](ABENCDS_ENTITY_EXTEND_GLOSRY.html) is currently not supported.

-   \\ [CDS External Entities](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/dc24d9c4a9294dd0b2b3f718a507e80e?version=sap_cross_product_abap) - ABAP Data Models guide (SAP Help Portal)

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html