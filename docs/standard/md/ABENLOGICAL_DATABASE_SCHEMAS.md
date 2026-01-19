---
title: "ABENLOGICAL_DATABASE_SCHEMAS"
description: |
  ABENLOGICAL_DATABASE_SCHEMAS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGICAL_DATABASE_SCHEMAS.htm"
abapFile: "ABENLOGICAL_DATABASE_SCHEMAS.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENLOGICAL", "DATABASE", "SCHEMAS"]
---

A [logical schema](ABENLOGICAL_SCHEMA_GLOSRY.html) is a symbolic name for a [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html).

There are the following types of logical schema:

Logical local database schemas and logical HDI containers can be used in an [AMDP macro](ABENAMDP_MACRO_GLOSRY.html). Logical external schemas are used to map CDS external entities to remote database schemas.

Mappings of physical database schemas to a logical database schema differ for logical database schemas and logical HDI schemas.

A physical database schema is mapped to an existing logical local database schema in the mapping table `AMDP_SCHEMA_MAP` using the documented transaction `DB_SCHEMA_MAP`. A mapping of this type is currently only possible on an AS ABAP whose [standard database](ABENSTANDARD_DB_GLOSRY.html) is an SAP HANA database. The physical database schema is case-sensitive.

A mapping made using the transaction `DB_SCHEMA_MAP` should usually be a local mapping but can also be transported with some restrictions. Transports like this are usually only made from systems with an SAP HANA database and should only be performed in systems in which the specified physical database schemas definitely exist. Transports should only be made between systems of the same company. Any mappings made by SAP are not delivered to customers. The client-independent mapping table `AMDP_SCHEMA_MAP` has the [delivery class](ABENDDIC_DATABASE_TABLES_DELIVERY.html)\\ `C`.

An [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) is mapped using the predefined name `:abap_db_schema`:

A physical database schema is mapped to a logical HDI container in transaction `SCTS_AMHC` (used to define [ABAP-managed HDI containers (AMHCs)](ABENAMHC_GLOSRY.html)). An AMHC is a special [HDI container](ABENHDI_CONTAINER_GLOSRY.html) that uses [SAP HANA Transport for ABAP (HTA)](ABENHTA_GLOSRY.html) as an interface to the [Change and Transport System (CTS)](ABENCTS_GLOSRY.html) (for its [HDI objects](ABENHDI_OBJECT_GLOSRY.html) too). The logical HDI container is a symbolic name for the physical AMHC database schema. There are no entries in the mapping table `AMDP_SCHEMA_MAP` for a logical HDI container. The logical HDI containers in AS ABAP can be displayed in transaction `DB_SCHEMA_MAP`, but mappings cannot be modified.

For details on CDS logical external schemas, see [ABAP CDS - CDS Logical External Schema](ABENCDS_LOGICAL_EXTERNAL_SCHEMA.html).

A logical local database schema and a HDI container can be used by frameworks for variable access to a physical database schema in Native SQL. More specifically, the use of logical schemas is are supported by the [ABAP Managed Database Procedures (AMDP)](ABENABAP_MANAGED_DB_PROC_GLOSRY.html):

In ABAP CDS, there are logical external schemas that map CDS external entities to database schemas in an external system. They can be used in [ABAP SQL queries](ABENASQL_QUERY_GLOSRY.html) and as data sources in other [CDS entities](ABENCDS_ENTITY_GLOSRY.html).

-   **Logical database schema**
-   A distinction is drawn between [local](ABENLOGICAL_DATABASE_SCHEMA_GLOSRY.html) and [external](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) logical database schema:

-   **Logical local database schema**
-   A [logical local database schema](ABENLOGICAL_DATABASE_SCHEMA_GLOSRY.html) enables the mapping of a physical database schema in a mapping table. A logical local database schema is represented by a transportable [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) that developers must create in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html). The repository object has the following properties:
-   \- A name used to map a physical database schema to the object, so making the object usable.
-   \- An optional flag that allows the mapping of the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html).
-   Developers with development authorization can create and modify a logical local database schema as a repository object.
-   **CDS logical external schema**
-   A [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) maps one or more [CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) to a concrete physical external system or database, and a specific [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) in such a remote system. A logical external schema is represented by a transportable [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html) whose configuration specifies the connection details required by the [SAP HANA remote source](ABENSAP_HANA_REMOTE_SOURCE_GLOSRY.html) to connect to an external system.

-   **Logical HDI Container**
-   A [logical HDI container](ABENLOGICAL_HDI_CONTAINER_GLOSRY.html) is part of the definition of an [ABAP-managed HDI container (AMHC)](ABENAMHC_GLOSRY.html), namely a [HDI container](ABENHDI_CONTAINER_GLOSRY.html) managed by ABAP. A logical HDI container does not have a repository object.

-   This name is used as a placeholder for the real name of the ABAP database schema and can be evaluated accordingly by frameworks.
-   The associated flag must be set for the logical local database schema in order for the mapping to take place.

-   System administrators with appropriate authorizations can map physical database schemas to logical local database schemas.
-   The mappings exist in systems that do not have an SAP HANA database as a standard database but cannot be processed and are ignored.
-   Only the predefined name `:abap_db_schema` should be used to map the current [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html). If the associated flag is set, the real name could also be specified, but this name cannot be transported properly and the logical local database schema would not be usable in AMDP.

-   Mappings of physical [HDI containers](ABENHDI_CONTAINER_GLOSRY.html) to logical HDI schemas are usually predefined in a system.
-   The database schema of a [AMHC](ABENAMHC_GLOSRY.html) is never the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html).

-   A special [AMDP macro](ABENAMDP_MACRO_GLOSRY.html) ([`$ABAP.schema`](ABENAMDP_LOGICAL_DB_SCHEMAS.html)) can be used in [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) to specify logical schemas. At runtime, the macro is replaced by the name of the mapped physical database schema.
-   If the current [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) is entered implicitly as a physical database schema of a logical local database schema using the predefined name `:abap_db_schema`, the macro [`$ABAP.schema`](ABENAMDP_LOGICAL_DB_SCHEMAS.html) is skipped in the evaluation and hence the current ABAP database schema accessed implicitly.
-   If the current [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) is mapped to a logical schema using its real name, it is used for the macro [`$ABAP.schema`](ABENAMDP_LOGICAL_DB_SCHEMAS.html) in the evaluation of this macro. It is not possible to specify the current ABAP database schema explicitly in AMDP, which means that a syntax error occurs.

-   If a logical local database schema to which the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) is mapped is used in the macro [`$ABAP.schema`](ABENAMDP_LOGICAL_DB_SCHEMAS.html), the schema must be declared using the addition [`USING SCHEMA`](ABAPMETHOD_BY_DB_PROC.html) of the statement `METHOD` in the current AMDP method. Conversely, this addition can only be used for logical local database schemas to which the ABAP database schema can be mapped. For this reason, if the flag that allows mappings of the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) is changed for an existing logical local database schema, this leads to syntax errors in [AMDP classes](ABENAMDP_CLASS_GLOSRY.html) that already use this schema.
-   [Logical HDI containers](ABENLOGICAL_HDI_CONTAINER_GLOSRY.html) are used in the macro [`$ABAP.schema`](ABENAMDP_LOGICAL_DB_SCHEMAS.html) for simple access to [HDI objects](ABENHDI_OBJECT_GLOSRY.html) in [SAP HANA XSA](ABENXSA_GLOSRY.html).
-   The transaction `DB_SCHEMA_MAP` also displays a logical schema with the predefined name `SAP_ABAP` to which the current [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) is always mapped. This schema is only for internal [HDI](ABENHDI_GLOSRY.html) use and cannot be used in the [AMDP macro](ABENAMDP_MACRO_GLOSRY.html)\\ [`$ABAP.schemas`](ABENAMDP_LOGICAL_DB_SCHEMAS.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_hana.html