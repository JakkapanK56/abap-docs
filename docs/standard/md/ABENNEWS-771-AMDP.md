---
title: "ABENNEWS-771-AMDP"
description: |
  ABENNEWS-771-AMDP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-771-AMDP.htm"
abapFile: "ABENNEWS-771-AMDP.html"
keywords: ["if", "method", "data", "ABENNEWS", "771", "AMDP"]
---

[1\. Enhancement to Logical Local Database Schemas](#ABAP_MODIFICATION_1@4@)

[2\. Access to the Current ABAP Database Schema](#ABAP_MODIFICATION_2@4@)

In [logical local database schemas](ABENLOGICAL_DATABASE_SCHEMA_GLOSRY.html), a new flag can be specified that allows the current [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) to be mapped in the transaction `DB_SCHEMA_MAP`. The predefined name `:abap_db_schema` should be used for mappings of this type.

In an [AMDP method](ABENAMDP_METHOD_GLOSRY.html), a [logical local database schema](ABENLOGICAL_DATABASE_SCHEMA_GLOSRY.html) to which the current [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) is mapped (using the predefined name `:abap_db_schema`) can be specified in the macro [`$ABAP.schema`](ABENAMDP_LOGICAL_DB_SCHEMAS.html). For each logical local database schema used in a macro like this, the new addition [`USING SCHEMA`](ABAPMETHOD_BY_DB_PROC.html) must be specified in the statement `METHOD` to declare the used objects. In this way, an AMDP method can access database objects located in different database schemas in different systems (including the ABAP database schema) without needing to modify the syntax.

abenabap.html abennews.html abennews-77.html abennews-771.html