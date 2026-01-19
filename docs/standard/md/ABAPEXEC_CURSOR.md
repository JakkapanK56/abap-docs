---
title: "ABAPEXEC_CURSOR"
description: |
  ABAPEXEC_CURSOR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXEC_CURSOR.htm"
abapFile: "ABAPEXEC_CURSOR.html"
keywords: ["select", "do", "if", "data", "ABAPEXEC", "CURSOR"]
---

In embedded [Native SQL](ABENNATIVE_SQL_GLOSRY.html), similar statements to those in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) can be specified to read data using a [database cursor](ABENDATABASE_CURSOR_GLOSRY.html).

Reading of multiple rows from the database table `SPFLI` using cursor handling and host variables in static Native SQL. If rows are found, `sy-subrc` is set to 0 and `sy-dbcnt` is increased by one for each row read.

-   [`OPEN`](ABAPEXEC_CURSOR_OPEN.html)
-   [`FETCH`](ABAPEXEC_CURSOR_FETCH.html)
-   [`CLOSE`](ABAPEXEC_CURSOR_CLOSE.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: carrid TYPE spfli-carrid VALUE 'LH', \\n connid TYPE spfli-connid, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto. \\n\\ \\ncl\_demo\_input=>request( CHANGING field = carrid ). \\n\\ \\nEXEC SQL. \\n OPEN dbcur FOR \\n SELECT connid, cityfrom, cityto \\n FROM spfli \\n WHERE mandt = :sy-mandt AND \\n carrid = :carrid \\nENDEXEC. \\n\\ \\nDO. \\n EXEC SQL. \\n FETCH NEXT dbcur INTO :connid, :cityfrom, :cityto \\n ENDEXEC. \\n IF sy-subrc <> 0. \\n EXIT. \\n ELSE. \\n out->write( \\n |\\{ carrid \\}, \\{ connid \\}, \\{ cityfrom \\}, \\{ cityto \\}| ). \\n ENDIF. \\nENDDO. \\n\\ \\nEXEC SQL. \\n CLOSE dbcur \\nENDEXEC. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abennativesql.html abapexec.html