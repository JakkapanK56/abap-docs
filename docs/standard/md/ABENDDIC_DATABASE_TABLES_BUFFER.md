---
title: "ABENDDIC_DATABASE_TABLES_BUFFER"
description: |
  ABENDDIC_DATABASE_TABLES_BUFFER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DATABASE_TABLES_BUFFER.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_BUFFER.html"
keywords: ["if", "try", "class", "data", "types", "ABENDDIC", "DATABASE", "TABLES", "BUFFER"]
---

It is possible to define whether and how [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) of a DDIC database table is allowed in the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) of an AS instance.

The table buffer is managed by the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html). When tables with active buffering are accessed using [ABAP SQL](ABENABAP_SQL_GLOSRY.html) or from classic [dynpros](ABENDYNPRO_GLOSRY.html), the table buffer is used implicitly.

Table buffering can be configured for a DDIC database table as follows:

Certain [prerequisites](ABENBUFFER_RESTRICTIONS.html), some of which depend on the buffering type, must be met before ABAP SQL can access the table buffer instead of accessing the DDIC database table directly.

The buffering type determines which data is loaded from the table to the table buffer when a table entry is accessed and buffering is switched on. The possible buffering types are:

-   **Buffering not allowed**
-   The table is not buffered. The database interface always passes the accesses to the DDIC database table and the current data is used directly. This setting also specifies that table buffering should not be activated for this table in any other systems due to the way the table is used.
-   **Buffering allowed, but switched off**
-   The table is not buffered when delivered. This setting indicates, however, that buffering is possible in principle and can be activated in other systems depending on how the table is used.
-   **Buffering switched on**
-   The table is buffered. The database interface redirects any reads to the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) of the current AS instance, if possible.

-   [Single record buffering](ABENBUFFER_SINGLE_BUFFERING.html)
-   [Generic buffering](ABENBUFFER_GENERIC_BUFFERING.html)
-   [Full buffering](ABENBUFFER_COMPLETE_BUFFERING.html)

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_tech.html abenddic\_database\_tables\_techspec.html