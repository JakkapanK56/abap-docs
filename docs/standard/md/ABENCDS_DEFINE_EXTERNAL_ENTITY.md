---
title: "ABENCDS_DEFINE_EXTERNAL_ENTITY"
description: |
  ABENCDS_DEFINE_EXTERNAL_ENTITY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_DEFINE_EXTERNAL_ENTITY.htm"
abapFile: "ABENCDS_DEFINE_EXTERNAL_ENTITY.html"
keywords: ["select", "update", "do", "if", "case", "method", "data", "types", "ABENCDS", "DEFINE", "EXTERNAL", "ENTITY"]
---

``[[`@entity_annot1`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  [[`@entity_annot2`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  ...  [[`@external_entity_annot1`](ABENCDS_F1_FUNCTION_ANNOTATIONS.html)]\  [[`@external_entity_annot2`](ABENCDS_F1_FUNCTION_ANNOTATIONS.html)]\  ...  [DEFINE]\ [[`WRITABLE`](ABENCDS_WRITABLE_EE.html)] EXTERNAL ENTITY ext_entity_name    [EXTERNAL NAME ext_obj_name]\            [`element_list`](ABENCDS_EE_ELEM_LIST.html)\  WITH FEDERATED DATA  PROVIDED AT RUNTIME[;]``

[1. `... WRITABLE ...`](#ABAP_ADDITION_1@3@)

[2. `... WITH FEDERATED DATA`](#ABAP_ADDITION_2@3@)

[3. `... PROVIDED AT RUNTIME`](#ABAP_ADDITION_3@3@)

Defines a [CDS external entity](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html)\\ `ext_entity_name` in the [CDS DDL](ABENCDS_DDL_GLOSRY.html). A CDS external entity can be used to access data from an external system within the [AS ABAP](ABENAS_ABAP_GLOSRY.html). As a prerequisite, there must be a [data source](ABENDATA_SOURCE_GLOSRY.html) in a remote [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) of a remote database in a remote system from which the data is retrieved. The name `ext_entity_name` is the name of the [CDS entity](ABENCDS_ENTITY_GLOSRY.html) that is used to access the entity in ABAP. It must conform to the naming conventions for CDS objects that are described in the topic [ABAP CDS - General Syntax Rules](ABENCDS_GENERAL_SYNTAX_RULES.html). The external name `ext_obj_name` must be the identical to the name of the remote database object. This name is case-sensitive and if it differs from the name of the remote database object, a runtime error occurs when accessing the external entity. `ext_obj_name` does not need to conform to the naming rules for CDS objects. It can be escaped using double quotes. This might be useful, for example, if the name contains characters not supported by ABAP.

The name of a CDS external entity is located in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.

The following DDL source code `DEMO_CDS_EXTERNAL_ENTITY` shows a dynamic external entity that represents the remote database object `DATATYPES`.

The CDS logical external schema `DEMO_CDS_LOGICL_EXTERNL_SCHEMA` is configured for a particular client and it specifies the connection details to connect to an external system.

The following code snippet accesses the external entity `DEMO_CDS_EXTERNAL_ENTITY` using ABAP SQL. It binds the logical external schema `DEMO_CDS_LOGICL_EXTERNL_SCHEMA` to the external entity, using the addition `PROVIDED BY`.

The SQL query might return the following result set:

**Note** For the query to work, the CDS logical external schema must have a configuration for the current client in your local system. Otherwise, a runtime error occurs.

The addition [`WRITABLE`](ABENCDS_WRITABLE_EE.html) is optional. It defines the external entity as writable. For further details, see the topic [CDS DDL - `DEFINE EXTERNAL ENTITY`, `WRITABLE`](ABENCDS_WRITABLE_EE.html).

Mandatory addition that declares the [data federation](ABENDATA_FEDERATION_GLOSRY.html) approach as method for the data transfer. This addition is mandatory and there are currently not other options, so it mainly serves a semantic purpose.

Mandatory addition that declares the external entity as a [dynamic external entity](ABENCDS_DYNAMIC_EE_GLOSRY.html). A dynamic external entity does not specify a [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) in its [data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html). The logical external schema for a dynamic external entity must be provided as a part of the [ABAP SQL](ABENABAP_SQL_GLOSRY.html)\\ `SELECT` statement when accessing the external entity, using a [`PROVIDED BY`](ABAPSELECT_DATA_SOURCE.html) clause. Dynamic external entities can only be accessed by ABAP SQL; they cannot be used as a data source for other [CDS entities](ABENCDS_ENTITY_GLOSRY.html). The related database artifacts of dynamic external entities, such as the [SAP HANA virtual table](ABENHANA_VIRTUAL_TABLE_GLOSRY.html) and the [SQL view](ABENSQL_VIEW_GLOSRY.html), are generated at runtime when the external entity is accessed for the first time. They are updated at runtime whenever this is required.

-   Entity annotations [`@entity_annot`](ABENCDS_F1_ENTITY_ANNOTATIONS.html) and external entity annotations [`@external_entity_annot`](ABENCDS_EE_ANNOTATIONS.html) are used to specify optional [annotations](ABENCDS_ANNOTATION_GLOSRY.html) for the CDS external entity.
-   **Note** The following restrictions apply regarding entity annotations: `AbapCatalog.extensibility` annotations are not supported for external entities, because external entities are not extensible. The `Environment.sql.passValueForClient` annotation is also not supported.
-   [`element_list`](ABENCDS_EE_ELEM_LIST.html) is used to declare the elements of the CDS external entity. These elements must mirror the names and data types of the remote data source elements, and they determine the columns of the result set of the external entity.
-   `WITH FEDERATED DATA` is a mandatory addition that declares the [data federation](ABENDATA_FEDERATION_GLOSRY.html) approach as the method for the data transfer.
-   `PROVIDED AT RUNTIME` is a mandatory addition that declares the external entity as a [dynamic external entity](ABENCDS_DYNAMIC_EE_GLOSRY.html).

-   Accessing a dynamic external entity with [ABAP Managed Database Procedures](ABENABAP_MANAGED_DB_PROC_GLOSRY.html) (AMDP) is not possible.
-   It is technically possible to access dynamic external entities using [Native SQL](ABENNATIVE_SQL_GLOSRY.html) once the related database artifacts have been created. Each external entity plus its logical external schema configuration has its own set of database artifacts and you need the respective names for Native SQL access. This kind of access is not recommended.

@EndUserText.label: 'Demo CDS external entity'\\ndefine external entity demo\_cds\_external\_entity external name DATATYPES\\n\\{\\n key charField : abap.char(10) external name K\_CHAR;\\n F\_INT1 : abap.int1;\\n F\_INT2 : abap.int2;\\n F\_INT4 : abap.int4;\\n F\_INT8 : abap.int8;\\n F\_RAW : abap.raw(10);\\n F\_RAWSTRING : abap.rawstring;\\n F\_SSTRING : abap.sstring(16);\\n F\_STRING : abap.string;\\n F\_UTCL : abap.utclong;\\n F\_DATN : abap.datn;\\n F\_TIMN : abap.timn;\\n F\_D16N : abap.decfloat16;\\n F\_D34N : abap.decfloat34;\\n\\}\\nwith federated data \\nprovided at runtime\\n SELECT \\n FROM demo\_cds\_external\_entity \\n PROVIDED BY demo\_cds\_logicl\_externl\_schema \\n FIELDS charField, f\_int1, f\_int2, f\_int4 \\n ORDER BY charField \\n INTO TABLE @FINAL(lt\_federated\_data). abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_external\_entity.html