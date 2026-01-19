---
title: "ABENSQL_UUID"
description: |
  ABENSQL_UUID - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_UUID.htm"
abapFile: "ABENSQL_UUID.html"
keywords: ["select", "do", "data", "types", "ABENSQL", "UUID"]
---

`... UUID( ) ...`

Calls the UUID function as an [SQL expression](ABAPSQL_EXPR.html) or operand of an expression in ABAP SQL. The function `UUID` does not have any parameters and creates a new unique [UUID](ABENUUID_GLOSRY.html) of the type [`RAW`](ABENDDIC_BUILTIN_TYPES.html) with the length 16 for each row read from the result set.

When used, the function `UUID` applies the [strict syntax check mode from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html).

Creation of a UUID for each row read from the DDIC database table `SCARR`. These UUIDs are unique for each row and for each execution of the statement.

SELECT carrid, carrname, uuid( ) AS uuid \\n FROM scarr \\n INTO TABLE @FINAL(result). \\n\\ \\ncl\_demo\_output=>display( result ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_functions.html