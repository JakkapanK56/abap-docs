---
title: "ABAPEXEC_CURSOR_CLOSE"
description: |
  ABAPEXEC_CURSOR_CLOSE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXEC_CURSOR_CLOSE.htm"
abapFile: "ABAPEXEC_CURSOR_CLOSE.html"
keywords: ["if", "data", "ABAPEXEC", "CURSOR", "CLOSE"]
---

`EXEC SQL.`\\ 
  `CLOSE dbcur`\\ 
`ENDEXEC.`

Closes an opened database cursor `dbcur`.

If no row can be read using `FETCH`, `sy-subrc` is set to 4 by `ENDEXEC`. After a `FETCH` statement, the system field `sy-dbcnt` is set to the number of rows read up to that point using the relevant cursor. If an overflow occurs because the number or rows is greater than 2,147,483,647, `sy-dbcnt` is set to -1.

It depends on the database system whether the database cursor in the database is closed implicitly after the extraction of the final row of the result set or not. For this reason, it is advisable to use the statement `CLOSE dbcur` explicitly.

abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abennativesql.html abapexec.html abapexec\_cursor.html