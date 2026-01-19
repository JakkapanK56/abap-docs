---
title: "ABENCDS_TABLE_ENTITIES"
description: |
  ABENCDS_TABLE_ENTITIES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_TABLE_ENTITIES.htm"
abapFile: "ABENCDS_TABLE_ENTITIES.html"
keywords: ["select", "insert", "do", "if", "try", "data", "types", "ABENCDS", "TABLE", "ENTITIES"]
---

A [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html) is a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) defined using the statement [`DEFINE TABLE ENTITY`](ABENCDS_DEFINE_TABLE_ENTITY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of ABAP Core Data Services (CDS). A CDS table entity describes a physical [database table](ABENDATABASE_TABLE_GLOSRY.html) on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) connected to the current AS ABAP.

When a CDS table entity is activated, a repository object is created. This repository object can be accessed using the name of the CDS table entity. As a global data type, each CDS table entity represents a structured type with the [elements of the CDS table entity](ABENCDS_SELECT_LIST_ENTRY_V2.html) as components and can be used like any [CDS entity](ABENCDS_ENTITY_GLOSRY.html):

Additionally, CDS table entities can be used in [ABAP SQL write access](ABENABAP_SQL_WRITING.html), for example, for inserting, modifying, and deleting data on the database. CDS table entities are therefore [writable database objects](ABENWRITABLE_DB_OBJ_GLOSRY.html).

The name of the CDS entity is in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.

A CDS table entity is a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html).

The following sections describe client handling for CDS table entities. Afterwards, the statement [`DEFINE TABLE ENTITY`](ABENCDS_DEFINE_TABLE_ENTITY.html) and all possible additions are described.

For more information about CDS table entities, see [*CDS Table Entities*](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/100ab51935544f18b4f4be9b4abb91e8?version=sap_cross_product_abap) in the ABAP Data Models guide on SAP Help Portal.

-   In ABAP CDS, the CDS entity can be used as a data source of other CDS entities.
-   In ABAP programs, the CDS entity can be used as a data type and in ABAP SQL read and write statements.
-   The CDS entity cannot be used as a data type for definitions of [dictionary objects](ABENDICTIONARY_OBJECT_GLOSRY.html).

-   [Client handling](ABENCDS_TABLE_ENTITY_CLIENT.html)
-   [`DEFINE TABLE ENTITY`](ABENCDS_DEFINE_TABLE_ENTITY.html)

-   Access control with [CDS roles](ABENCDS_ROLE_GLOSRY.html) can be defined for table entities using the CDS DCL statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html).
-   [Metadata extensions](ABENCDS_METADATA_EXTENSION_GLOSRY.html) can be attached to a CDS table entity to add further annotations.
-   It is currently not possible to extend a CDS table entity.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html