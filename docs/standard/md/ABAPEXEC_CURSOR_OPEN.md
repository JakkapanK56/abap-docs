---
title: "ABAPEXEC_CURSOR_OPEN"
description: |
  ABAPEXEC_CURSOR_OPEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXEC_CURSOR_OPEN.htm"
abapFile: "ABAPEXEC_CURSOR_OPEN.html"
keywords: ["select", "if", "class", "data", "ABAPEXEC", "CURSOR", "OPEN"]
---

`EXEC SQL.`\\ 
  `OPEN dbcur FOR SELECT ...`\\ 
`ENDEXEC.`

Opens a database cursor `dbcur`. For `dbcur`, a [flat](ABENFLAT_GLOSRY.html) character-like [host variable](ABAPEXEC_HOST.html) can be specified.

The number of database cursors open simultaneously is restricted by the platform. Any attempts to open too many database cursors raise an exception of the class `CX_SY_NATIVE_SQL_ERROR`.

abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abennativesql.html abapexec.html abapexec\_cursor.html