---
title: "ABAPENDSELECT"
description: |
  ABAPENDSELECT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPENDSELECT.htm"
abapFile: "ABAPENDSELECT.html"
keywords: ["select", "loop", "ABAPENDSELECT"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

`ENDSELECT.`\\ 

The [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement `ENDSELECT` closes a loop started using [`SELECT`](ABAPSELECT.html).

`SELECT` loop. The [`INTO` clause](ABAPINTO_CLAUSE.html) used here cannot be written to a tabular result, which means that in multirow result sets, a loop is opened that must be closed using `ENDSELECT`.

SELECT carrid, connid, SUM( seatsocc ) AS seatsocc \\n FROM sflight \\n GROUP BY carrid, connid \\n ORDER BY carrid, connid \\n INTO (@FINAL(carrid),@FINAL(connid),@FINAL(seatsocc)). \\n ... \\nENDSELECT. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapselect.html