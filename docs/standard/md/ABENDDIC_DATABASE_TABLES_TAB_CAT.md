---
title: "ABENDDIC_DATABASE_TABLES_TAB_CAT"
description: |
  ABENDDIC_DATABASE_TABLES_TAB_CAT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DATABASE_TABLES_TAB_CAT.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_TAB_CAT.html"
keywords: ["if", "method", "data", "ABENDDIC", "DATABASE", "TABLES", "TAB", "CAT"]
---

The default table category is the transparent table. In transparent tables, the database object has the same name and the same columns as the definition in ABAP Dictionary. The fields of transparent tables can be processed not only using [ABAP SQL](ABENABAP_SQL_GLOSRY.html), but also using [Native SQL](ABENNATIVE_SQL_GLOSRY.html) or [AMDP](ABENAMDP_GLOSRY.html). Outside AS ABAP, they can be processed using the programming interface of the database. The latter method is, however, [not recommended](ABENDATABASE_ACCESS_RECOMM.html).

[Global temporary tables](ABENDDIC_DATABASE_TABLES_GTT.html) are another category of tables. A global temporary table (GTT) is a special transparent table used exclusively as a repository of temporary data during a [database LUW](ABENDATABASE_LUW_GLOSRY.html).

The ABAP Dictionary [tool](ABENDDIC_TOOLS.html) of the ABAP Workbench makes it possible to transform DDIC database tables from one category to another. To create a different table category as a transparent table, a transparent table must be created first and then transformed into a different table category. In [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html), the table category is defined using the annotation [`@AbapCatalog.tableCategory`](ABENDDICDDL_DEFINE_TABLE_PROPS.html).

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_tech.html abenddic\_database\_tables\_techspec.html