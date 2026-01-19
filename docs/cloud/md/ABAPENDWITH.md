---
title: "ABAPENDWITH"
description: |
  ABAPENDWITH - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPENDWITH.htm"
abapFile: "ABAPENDWITH.html"
keywords: ["select", "loop", "data", "internal-table", "ABAPENDWITH"]
---

`ENDWITH.`\\ 

The [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement `ENDWITH` closes a loop started using [`WITH`](ABAPWITH.html).

The example shows a `WITH` statement, whose main query creates a tabular result set. Since the data is written into work area `wa` rather than to an internal table, a `SELECT` loop is opened, which must be closed with `ENDWITH`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nWITH \\n +carriers AS ( SELECT FROM scarr \\n FIELDS carrid, carrname ) \\n SELECT FROM spfli AS s \\n INNER JOIN +carriers AS c \\n ON s~carrid = c~carrid \\n FIELDS c~carrname, s~connid \\n WHERE s~carrid = 'UA' \\n INTO @FINAL(wa) \\n UP TO 10 ROWS. \\n out->write( wa ). \\nENDWITH. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapwith.html