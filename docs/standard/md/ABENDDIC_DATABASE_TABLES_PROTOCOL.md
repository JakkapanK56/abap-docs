---
title: "ABENDDIC_DATABASE_TABLES_PROTOCOL"
description: |
  ABENDDIC_DATABASE_TABLES_PROTOCOL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DATABASE_TABLES_PROTOCOL.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_PROTOCOL.html"
keywords: ["insert", "update", "do", "if", "method", "class", "data", "types", "ABENDDIC", "DATABASE", "TABLES", "PROTOCOL"]
---

If logging is activated, any changes to table entries done in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) are logged in the log table `DBTABLOG`. As a prerequisite, the profile parameter `rec/client` must be set accordingly. This profile parameter can have the following values:

The logs can be evaluated using the transaction `Table History` (transaction code `SCU3`). Logging is independent of updates.

If a table row has more than 16000 bytes, logging is not possible for the table. The lengths of fields with the built-in types `STRING`, `RAWSTRING`, `LCHR`, `LRAW`, and `GEOM_EWKB` are counted completely here.

-   **ALL**
-   Logging is client-independent.
-   **clnt1, clnt2, ...**
-   Changes are logged only in the specified clients `clnt1`, `clnt2`, ...
-   **OFF**
-   No logging.

-   If logging is activated, access to the DDIC database table slows down accordingly. If logging is activated for many DDIC database tables, lock situations can occur for the log table.
-   No data can be written to a DDIC database table with enabled logging using the statement [`INSERT`](ABAPINSERT_DBTAB.html) with [subquery](ABAPINSERT_SOURCE.html).
-   The documented method `IS_LOGGING_ON` of the system class `CL_DBI_UTILITIES` can be used to check whether logging is currently switched on for a DDIC database table.

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_tech.html abenddic\_database\_tables\_techspec.html