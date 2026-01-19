---
title: "ABENAMDP_LOGICAL_DB_SCHEMAS"
description: |
  ABENAMDP_LOGICAL_DB_SCHEMAS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_LOGICAL_DB_SCHEMAS.htm"
abapFile: "ABENAMDP_LOGICAL_DB_SCHEMAS.html"
keywords: ["delete", "do", "if", "case", "method", "class", "data", "ABENAMDP", "LOGICAL", "SCHEMAS"]
---

`... "$ABAP.schema( [name =] schema_name                     [quote = SINGLE|DOUBLE] )" ...`

Specifies the predefined [AMDP macro](ABENAMDP_MACRO_GLOSRY.html)\\ [`$ABAP.schema`](ABENLOGICAL_SCHEMA_GLOSRY.html) for a [logical schema](ABENLOGICAL_SCHEMA_GLOSRY.html).

In an AMDP method implemented in SQLScript, objects from a different [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) can be accessed using a fully qualified name. The AMDP framework supports the [logical schemas](ABENLOGICAL_DATABASE_SCHEMAS.html) for the SAP HANA database. The AMDP macro `$ABAP.schema` can be used to specify a logical schema to which a physical name is mapped instead of the physical name of a database schema.

The specified logical schema must exist as a [logical local database schema](ABENLOGICAL_DATABASE_SCHEMA_GLOSRY.html) or as a [logical HDI container](ABENLOGICAL_HDI_CONTAINER_GLOSRY.html). If a physical database schema is mapped to the logical schema, the physical schema must exist on the current database. If no physical database schema is mapped to the logical schema, a syntax check warning occurs. When the AMDP method is executed, an exception of the class `CX_AMDP_DBPROC_GENERATE_FAILED` is raised.

If the mapping of the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) is allowed for a [logical local database schema](ABENLOGICAL_DATABASE_SCHEMA_GLOSRY.html), the addition [`USING SCHEMA`](ABAPMETHOD_BY_DB_PROC.html) must be specified for the logical local database schema in the implementation of the AMDP method.

[Access to Database Schemas](ABENAMDP_DB_SCHEMA_ABEXA.html)

-   If an explicit name of a physical database schema is mapped to the logical schema specified using `schema_name`, the ABAP runtime framework replaces this expression, including the quotation marks, with the physical database schema in the implementation on the database. The specified logical schema is not case-sensitive, but the mapped physical database schema is. When replaced, the physical database schema is set in double quotation marks by default if required. This can be overwritten by the optional addition `quote`. If `SINGLE` is specified, the physical database schema is always set in single quotation marks. `DOUBLE` is the default behavior.
-   If the predefined name `:abap_db_schema` is used to map the current [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) to a [logical local database schema](ABENLOGICAL_DATABASE_SCHEMA_GLOSRY.html) specified using `schema_name`, the ABAP runtime framework removes the entire specification of the database schema and the current ABAP database schema is accessed implicitly. In this case, the optional addition `quote` cannot be specified using `SINGLE`, since this would enclose the empty specification in single quotation marks.

-   When database objects of the current database schema are accessed, the name of this schema must not be specified explicitly, neither directly nor using logical schemas. More specifically, the logical schema with the predefined name `SAP_ABAP` cannot be used. A logical local database schema to which the ABAP database schema is mapped using the predefined name `:abap_db_schema` can, however, be used.
-   If a logical local database schema is deleted or the mapping of a physical database schema is modified, the ABAP runtime framework checks all AMDP classes used.
-   In AMDP, a [logical HDI container](ABENLOGICAL_HDI_CONTAINER_GLOSRY.html) can be used for simple access to [XSA](ABENXSA_GLOSRY.html)\\ [HDI objects](ABENHDI_OBJECT_GLOSRY.html) in an [ABAP-managed HDI container](ABENAMHC_GLOSRY.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_macros.html