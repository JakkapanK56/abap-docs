---
title: "ABENDDIC_DATABASE_TABLES"
description: |
  ABENDDIC_DATABASE_TABLES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_DATABASE_TABLES.htm"
abapFile: "ABENDDIC_DATABASE_TABLES.html"
keywords: ["do", "if", "data", "types", "ABENDDIC", "DATABASE", "TABLES"]
---

The term [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) (or database table or table for short) describes a physical database table in the current [standard database](ABENSTANDARD_DB_GLOSRY.html) in the ABAP Dictionary:

In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), only database tables can be accessed that are defined in ABAP Dictionary.

The name of a DDIC database table must follow the [naming rules for DDIC database tables](ABENDDIC_DBTAB_NAMES.html).

The definition of a DDIC database table consists of the following:

The most common [table category](ABENDDIC_DATABASE_TABLES_TAB_CAT.html) of a DDIC database table is the [transparent table](ABENTRANSPARENT_TABLE_GLOSRY.html). When the table is activated, the platform-dependent SQL DDL statement `CREATE TABLE` is used to generate a physical database table with all [indexes](ABENDDIC_DATABASE_TABLES_INDEX.html) from its definition in the ABAP Dictionary for those indexes for which this is not excluded explicitly in the definition. This is done in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) in the [standard AS ABAP database](ABENSTANDARD_DB_GLOSRY.html). The [built-in DDIC types](ABENDDIC_BUILTIN_TYPES.html) used to define the components of the structure are implemented as database-dependent types. Besides transparent tables, there are also [global temporary tables (GTTs)](ABENGLOBAL_TEMPORARY_TABLE_GLOSRY.html) for storing temporary data within a work step.

The order of the fields in the ABAP Dictionary and on the database does not need to match. Therefore, the order of the table fields, except for key fields, of existing DDIC database tables can be modified without affecting the corresponding database object. When accessing a DDIC database table using [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the database interface considers potential differences and respects the order defined in ABAP Dictionary. If [AMDP](ABENAMDP.html) is used, the results are sorted in the same order as in the ABAP Dictionary (if possible).

DDIC database tables can be defined with source-code-based editors using [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html). The following section describes the syntax of the source-code-based definition:

If existing DDIC database tables are modified, adjustments may be necessary.

-   A DDIC database table is a two-dimensional matrix that consists of rows and columns.
-   A field or combination of fields that uniquely identifies every row in a table is known as a [table key](ABENTABLE_KEY_GLOSRY.html). This is a minimal property, that is, if one of the fields is removed from the key, the remaining fields cannot uniquely identify the table rows.
-   A [primary key](ABENPRIMARY_KEY_GLOSRY.html) must exist for every table.
-   In the [relational model](ABENRELATIONAL_DATA_MODEL_GLOSRY.html), the relationship between objects is expressed by a [foreign key](ABENFOREIGN_KEY_GLOSRY.html).

-   A non-nested [DDIC structure](ABENDDIC_STRUCTURES.html) with its [technical](ABENDDIC_DATABASE_TABLES_TECHSTRUC.html) and [semantic](ABENDDIC_DATABASE_TABLES_SEMASTRUC.html) properties.
-   Additional [technical properties](ABENDDIC_DATABASE_TABLES_TECHSPEC.html) of the DDIC database table.
-   Additional [semantic properties](ABENDDIC_DATABASE_TABLES_SEMA.html) of the DDIC database table.

-   [Technical properties of database tables](ABENDDIC_DATABASE_TABLES_TECH.html)
-   [Semantic properties of database tables](ABENDDIC_DATABASE_TABLES_SEMA.html)
-   [Global temporary tables](ABENDDIC_DATABASE_TABLES_GTT.html)

-   [Dictionary DDL for Defining Database Tables](ABENDDIC_DEFINE_TABLE.html)

-   [Adjusting database tables](ABENDDIC_DATABASE_TABLES_ADJ.html)

-   DDIC database tables can be released for developer extensibility under the [C0 release contract](ABENC0_CONTRACT_GLOSRY.html).
-   If existing ABAP Dictionary objects in the definition of DDIC database tables are changed, it may be necessary to [adjust](ABENDDIC_DATABASE_TABLES_ADJ.html) these tables on the database. This can be very time-consuming for tables with a large number of rows. Furthermore, [foreign keys](ABENFOREIGN_KEY_GLOSRY.html) in the converted tables can become inconsistent. A where-used list should be created before ABAP Dictionary objects such as data elements or domains are changed.

abenabap.html abenabap\_dictionary.html