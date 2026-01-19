---
title: "ABENSECONDARY_DB_CONNECTION_GLOSRY"
description: |
  ABENSECONDARY_DB_CONNECTION_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSECONDARY_DB_CONNECTION_GLOSRY.htm"
abapFile: "ABENSECONDARY_DB_CONNECTION_GLOSRY.html"
keywords: ["data", "ABENSECONDARY", "CONNECTION", "GLOSRY"]
---

User-defined [database connection](ABENDATABASE_CONNECTION_GLOSRY.html) from an [AS ABAP](ABENAS_ABAP_GLOSRY.html) to a [secondary database](ABENSECONDARY_DB_GLOSRY.html). The connection can be to other databases or to other [database schemas](ABENDATABASE_SCHEMA_GLOSRY.html) in the [standard database](ABENSTANDARD_DB_GLOSRY.html). The properties of the secondary connections that can be used by a [work process](ABENWORK_PROCESS_GLOSRY.html) are defined in the database table `DBCON`. These secondary connections are managed using the [DBA Cockpit](ABENDBA_COCKPIT_GLOSRY.html) tool. The only secondary connections that should be used are those from an AS ABAP with an [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) as its standard database to another SAP HANA database. [SAP HANA Smart Data Access (SDA)](ABENSAP_HANA_SDA_GLOSRY.html) should be used for access to other databases. [ABAP CDS](ABENABAP_CDS_GLOSRY.html) provides [CDS external entities](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) for remote connections with [SAP HANA Smart Data Access](ABENSAP_HANA_SDA_GLOSRY.html).

[**\-> More about**](ABENDB_CONNECTIONS.html)

ABENTECHNO\_GLOSSARY.html