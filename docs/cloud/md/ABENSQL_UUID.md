---
title: "ABENSQL_UUID"
description: |
  ABENSQL_UUID - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_UUID.htm"
abapFile: "ABENSQL_UUID.html"
keywords: ["select", "do", "data", "types", "ABENSQL", "UUID"]
---

`... UUID( ) ...`

Calls the UUID function as an [SQL expression](ABAPSQL_EXPR.html) or operand of an expression in ABAP SQL. The function `UUID` does not have any parameters and creates a new unique [UUID](ABENUUID_GLOSRY.html) of the type [`RAW`](ABENDDIC_BUILTIN_TYPES.html) with the length 16 for each row read from the result set.

Creation of a UUID for each row read from the DDIC database table `SCARR`. These UUIDs are unique for each row and for each execution of the statement.

SELECT carrid, carrname, uuid( ) AS uuid \\n FROM scarr \\n INTO TABLE @FINAL(result). \\n\\ \\ncl\_demo\_output=>display( result ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_functions.html