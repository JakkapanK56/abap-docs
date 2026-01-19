---
title: "ABAPUD_CLIENT_OBSOLETE"
description: |
  ABAPUD_CLIENT_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPUD_CLIENT_OBSOLETE.htm"
abapFile: "ABAPUD_CLIENT_OBSOLETE.html"
keywords: ["select", "update", "delete", "if", "data", "ABAPUD", "CLIENT", "OBSOLETE"]
---

`... CLIENT SPECIFIED ...`

The addition `CLIENT SPECIFIED` can be used instead of the [`USING`](ABAPIUMD_CLIENT.html) additions in the variants [`UPDATE SET`](ABAPUPDATE.html) and [`DELETE FROM`](ABAPDELETE_DBTAB.html) of those [write ABAP SQL statements](ABENABAP_SQL_WRITING.html) in which a `WHERE` condition can be specified. This is obsolete and forbidden in [strict mode from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html) and whenever [global temporary tables](ABENDDIC_DATABASE_TABLES_GTT.html) are accessed. The addition [`USING`](ABAPIUMD_CLIENT.html) should be used instead of `CLIENT SPECIFIED`.

The addition `CLIENT SPECIFIED` disables implicit ABAP SQL [client handling](ABENABAP_SQL_CLIENT_HANDLING.html) for the current write statement. No implicit condition is created for the [current client](ABENCURRENT_CLIENT_GLOSRY.html) and the [client column](ABENCLIENT_COLUMN_GLOSRY.html) of client-dependent data sources can be specified in the `WHERE` condition for selecting clients.

If it is known statically that the target of the write statement specified in [`target`](ABAPIUMD_TARGET.html) is not client-dependent, the addition `CLIENT SPECIFIED` cannot be specified.

This example demonstrates two uses of the obsolete addition `CLIENT SPECIFIED` and how it is replaced by [`USING`](ABAPIUMD_CLIENT.html). The `UPDATE` statement selects a client, which can be implemented by switching implicit client handling to this client using `USING CLIENT`. The `DELETE` statement is intended to delete the data of all clients, which can be implemented by the addition `USING ALL CLIENTS`.

-   If the addition `CLIENT SPECIFIED` is specified in [`UPDATE SET`](ABAPUPDATE.html) and [`DELETE FROM`](ABAPDELETE_DBTAB.html) without specifying a `WHERE` condition, all lines of the target specified in [`target`](ABAPIUMD_TARGET.html) are processed. The `DELETE` statement then deletes the entire content. The addition [`USING ALL CLIENTS`](ABAPIUMD_CLIENT.html) serves as a replacement for this behavior.
-   If the addition `CLIENT SPECIFIED` is used for a dynamically specified database table or view and they are not client-dependent, the addition is ignored.
-   If specified for statically specified client-independent database tables or views, the addition `CLIENT SPECIFIED` produces a syntax error in the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP05 or else a syntax warning.

UPDATE demo\_expressions \\n CLIENT SPECIFIED SET num1 = 1 WHERE mandt = '100' AND id = 'X'. \\nUPDATE demo\_expressions \\n USING CLIENT '100' SET num1 = 1 WHERE id = 'X'. \\n\\ \\nDELETE FROM demo\_expressions CLIENT SPECIFIED. \\nDELETE FROM demo\_expressions USING ALL CLIENTS. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abenabap\_sql\_obsolete.html abenabap\_sql\_syntax\_obsolete.html