---
title: "ABAPEXIT_SQL"
description: |
  ABAPEXIT_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXIT_SQL.htm"
abapFile: "ABAPEXIT_SQL.html"
keywords: ["if", "class", "data", "ABAPEXIT", "SQL"]
---

[Short Reference](ABAPEXIT_FROM_SQL_SHORTREF.html)

`EXIT FROM SQL.`

This statement, which is forbidden in classes, is only executed during the processing of subroutines called using the obsolete addition [`PERFORMING`](ABAPEXEC_IMPLICIT.html) of the statement [`EXEC SQL`](ABAPEXEC.html). Otherwise it is ignored.

The statement terminates [implicit cursor processing](ABAPEXEC_IMPLICIT.html) after the current subroutine has ended. Processing of the called ABAP program is resumed after `ENDEXEC`, where `sy-dbcnt` contains the number of rows read so far and `sy-subrc` is set to the value 4. If an overflow occurs because the number or rows is greater than 2,147,483,647, `sy-dbcnt` is set to -1.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abennative\_sql\_obsolete.html abenexec\_sql\_cursor\_implicit.html