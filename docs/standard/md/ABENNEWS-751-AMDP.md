---
title: "ABENNEWS-751-AMDP"
description: |
  ABENNEWS-751-AMDP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-751-AMDP.htm"
abapFile: "ABENNEWS-751-AMDP.html"
keywords: ["if", "method", "class", "data", "ABENNEWS", "751", "AMDP"]
---

[1\. Logical Local Database Schemas](#ABAP_MODIFICATION_1@4@)

[2\. Use of Logical Local Database Schemas in AMDP Methods](#ABAP_MODIFICATION_2@4@)

[Logical local database schemas](ABENLOGICAL_DATABASE_SCHEMA_GLOSRY.html) were introduced as symbolic names for physical [database schemas](ABENDATABASE_SCHEMA_GLOSRY.html) in the SAP HANA database. Instead of physical database schemas, logical local database schemas can be used by frameworks (in particular AMDP methods) to access objects from different database schemas in Native SQL or AMDP.

When an [AMDP method](ABENAMDP_METHOD_GLOSRY.html) is implemented in an AMDP class with SQLScript, the following new [AMDP macro](ABENAMDP_MACRO_GLOSRY.html)

[`"$ABAP.schema( [name =] schema_name )"`](ABENAMDP_LOGICAL_DB_SCHEMAS.html)

can be used to specify logical local database schemas instead of physical database schemas. The ABAP runtime environment replaces these schemas on the database with the associated physical database schemas.

abenabap.html abennews.html abennews-75.html abennews-751.html