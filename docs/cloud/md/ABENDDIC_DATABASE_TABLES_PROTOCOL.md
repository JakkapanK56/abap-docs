---
title: "ABENDDIC_DATABASE_TABLES_PROTOCOL"
description: |
  ABENDDIC_DATABASE_TABLES_PROTOCOL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_DATABASE_TABLES_PROTOCOL.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_PROTOCOL.html"
keywords: ["insert", "do", "if", "data", "types", "ABENDDIC", "DATABASE", "TABLES", "PROTOCOL"]
---

If logging is activated, any changes to table entries done in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) are logged in the log table `DBTABLOG`.

If a table row has more than 16000 bytes, logging is not possible for the table. The lengths of fields with the built-in types `STRING`, `RAWSTRING`, `LCHR`, `LRAW`, and `GEOM_EWKB` are counted completely here.

-   If logging is activated, access to the DDIC database table slows down accordingly. If logging is activated for many DDIC database tables, lock situations can occur for the log table.
-   No data can be written to a DDIC database table with enabled logging using the statement [`INSERT`](ABAPINSERT_DBTAB.html) with [subquery](ABAPINSERT_SOURCE.html).

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_tech.html abenddic\_database\_tables\_techspec.html