---
title: "ABENABAP_SQL"
description: |
  ABENABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL.htm"
abapFile: "ABENABAP_SQL.html"
keywords: ["insert", "update", "if", "class", "data", "ABENABAP", "SQL"]
---

[ABAP SQL](ABENABAP_SQL_GLOSRY.html) is a set of ABAP statements, based on SQL, that are transformed to platform-dependent SQL by the [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html) of the database interface and then passed to the database. When the statements are updated, ABAP-specific parts, such as conditions for [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) or [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html), are inserted into them. By default, the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) is used to access the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) of the [standard AS ABAP database](ABENSTANDARD_DB_GLOSRY.html).

The statements [`COMMIT WORK`](ABAPCOMMIT.html) and [`ROLLBACK WORK`](ABAPCOMMIT.html) are also part of ABAP SQL but are handled in the context of LUWs.

[Using ABAP SQL](ABENDATABASE_ACCESS_GUIDL.html)

In addition to the statements described here, there are [obsolete short forms](ABENABAP_SQL_SHORT_FORMS_OBSOLETE.html) of ABAP SQL statements that are based on the implicit use of [table work areas](ABENTABLE_WORK_AREA_GLOSRY.html).

-   [ABAP SQL - Overview](ABENABAP_SQL_OVIEW.html)
-   [ABAP SQL - Operands and Expressions](ABENABAP_SQL_OPERANDS.html)
-   [ABAP SQL - Read Access with DQL](ABENABAP_SQL_READING.html)
-   [ABAP SQL - Write Access with DML](ABENABAP_SQL_WRITING.html)
-   [ABAP SQL - Work Areas in Statements](ABENABAP_SQL_WA.html)
-   [ABAP SQL - Streaming and Locators](ABENSTREAMS_LOCATORS.html)
-   [ABAP SQL - Exceptions](ABENABAP_SQL_EXCEPTIONS.html)
-   [ABAP SQL - Database Hints](ABENABAP_SQL_DB_HINTS.html)
-   [ABAP SQL - System Interfaces and Classes](ABENCL_OSQL.html)
-   [ABAP SQL - Performance Notes](ABENABAP_SQL_PERFO.html)
-   [ABAP SQL - Glossary](ABENSQL_GLOSSARY.html)

abenabap.html abenabap\_reference.html abendb\_access.html