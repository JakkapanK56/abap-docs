---
title: "ABENSQL_GLOSRY"
description: |
  ABENSQL_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_GLOSRY.htm"
abapFile: "ABENSQL_GLOSRY.html"
keywords: ["do", "if", "method", "data", "ABENSQL", "GLOSRY"]
---

Short for Structured Query Language. A widely standardized language for accessing [relational databases](ABENRELATIONAL_DATABASE_GLOSRY.html). Divided into [DQL](ABENDQL_GLOSRY.html), [DML](ABENDML_GLOSRY.html), [DDL](ABENDDL_GLOSRY.html), and [DCL](ABENDCL_GLOSRY.html) (sometimes the term DML includes DQL). Each [database system](ABENDATABASE_SYSTEM_GLOSRY.html) has its own platform-specific variant of SQL. The SQL variant of the [standard database](ABENSTANDARD_DB_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html), the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), is HANA SQL. AS ABAP offers different ways for accessing its standard database with SQL:

Furthermore, the entire scope of the SQL statements of the standard database is available in [Native SQL](ABENNATIVE_SQL_GLOSRY.html) or in [AMDP methods](ABENAMDP_METHOD_GLOSRY.html).

All accesses of an AS ABAP to the standard database are done using its [database interface](ABENDATABASE_INTERFACE_GLOSRY.html), where ABAP-specific SQL is translated to the platform-specific SQL variant.

-   The DQL and DML parts are implemented predominantly by [ABAP SQL](ABENABAP_SQL_GLOSRY.html).
-   The DDL part is implemented by the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) and the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html).
-   The DCL part is implemented by the [CDS DCL](ABENCDS_DCL_GLOSRY.html) of ABAP CDS.

ABENABAP\_GLOSSARY.html