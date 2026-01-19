---
title: "ABAPEXEC_IMPLICIT"
description: |
  ABAPEXEC_IMPLICIT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXEC_IMPLICIT.htm"
abapFile: "ABAPEXEC_IMPLICIT.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABAPEXEC", "IMPLICIT"]
---

[Short Reference](ABAPEXEC_SQL_SHORTREF.html)

`EXEC SQL PERFORMING subr.`\\ 
  `SELECT ... INTO :wa1 :wa2 ...`\\ 
`ENDEXEC.`

If the addition `PERFORMING`, which is forbidden in classes, is specified after [`EXEC SQL`](ABAPEXEC.html), the [Native SQL](ABENNATIVE_SQL_GLOSRY.html) interface performs implicit cursor processing.

Only a `SELECT` statement can be specified as an embedded Native SQL statement. The Native SQL interface opens a cursor for the `SELECT` statement and reads the corresponding data row by row. The `subr` subroutine is called each time a row is read successfully. The `subr` subroutine must be defined in the same ABAP program and must not have a parameter interface.

If the [host variables](ABAPEXEC_HOST.html) specified in the `SELECT` statement after `INTO` are global data objects of the ABAP program, they can be evaluated in the subroutine. In the subroutine, `sy-dbcnt` contains the number of rows read so far and `sy-subrc` is set to the value 0. After the `ENDEXEC` statement, `sy-dbcnt` contains the total number of rows read so far and `sy-subrc` is set to 4 since no more rows could be read using the implicit cursor. If an overflow occurs because the number or rows is greater than 2,147,483,647, `sy-dbcnt` is set to -1.

Reads multiple rows from the DDIC database table `SCARR` and calls the subroutine `evaluate` for each row read.

Explicit cursor processing.

-   Implicit cursor processing using the `PERFORMING` addition is obsolete and forbidden in classes, since methods of global classes do not have access to the global data and the subroutines of the calling ABAP program. [Explicit cursor processing](ABAPEXEC_CURSOR.html) should be used instead.
-   Implicit cursor processing can be exited using the obsolete statement [`EXIT FROM SQL`](ABAPEXIT_SQL.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA wa TYPE spfli-carrid. \\n\\ \\nEXEC SQL. \\n OPEN CUR FOR \\n SELECT carrid FROM spfli WHERE mandt = :sy-mandt \\nENDEXEC. \\n\\ \\nDO. \\n EXEC SQL. \\n FETCH NEXT CUR INTO :wa \\n ENDEXEC. \\n IF sy-subrc <> 0. \\n EXIT. \\n ENDIF. \\n out->write( |\\{ wa \\} | ). \\nENDDO. \\nout->display( ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA wa TYPE spfli-carrid. \\n\\ \\nEXEC SQL. \\n OPEN CUR FOR \\n SELECT carrid FROM spfli WHERE mandt = :sy-mandt \\nENDEXEC. \\n\\ \\nDO. \\n EXEC SQL. \\n FETCH NEXT CUR INTO :wa \\n ENDEXEC. \\n IF sy-subrc <> 0. \\n EXIT. \\n ENDIF. \\n out->write( |\\{ wa \\} | ). \\nENDDO. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abennative\_sql\_obsolete.html abenexec\_sql\_cursor\_implicit.html