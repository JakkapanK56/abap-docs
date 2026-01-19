---
title: "ABAPCLOSE_CURSOR"
description: |
  ABAPCLOSE_CURSOR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLOSE_CURSOR.htm"
abapFile: "ABAPCLOSE_CURSOR.html"
keywords: ["select", "while", "if", "catch", "data", "ABAPCLOSE", "CURSOR"]
---

[Short Reference](ABAPCLOSE_CURSOR_SHORTREF.html)

`CLOSE CURSOR @dbcur.`

This [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement `CLOSE CURSOR` closes the [database cursor](ABENDATABASE_CURSOR_GLOSRY.html) and initializes the cursor variable `dbcur`, with which the database cursor is linked. The cursor variable `dbcur` is a [host variable](ABENABAP_SQL_HOST_VARIABLES.html) that must be declared using the special predefined data type `cursor` and that was opened using the statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) or was assigned an open cursor.

Closing of a previously opened and used database cursor.

-   Since only a limited number of 17 database cursors can be open simultaneously in ABAP SQL, all database cursors no longer required should be closed.
-   Initializing a cursor variable using the `CLEAR` statement is not enough to close a database cursor. If the value of the cursor variable in the program is known, the database cursor can be further processed using [`FETCH`](ABAPFETCH.html).
-   Once a database cursor has been closed, it can no longer be accessed. Other cursor variables that were linked with the database cursor are not initialized but become invalid and accessing them would raise a catchable exception.
-   The name of the host variable `dbcur` should be prefixed with the escape character `@`. If the associated statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) is checked in accordance with the [strict mode](ABENABAP_SQL_STRICTMODE_760.html) from ABAP release 7.60, the escape character `@` must be specified.

DATA wa TYPE scarr. \\n\\ \\nOPEN CURSOR WITH HOLD @DATA(dbcur) FOR \\n SELECT \* \\n FROM scarr. \\n\\ \\nWHILE sy-subrc = 0. \\n FETCH NEXT CURSOR @dbcur INTO @wa. \\nENDWHILE. \\n\\ \\nCLOSE CURSOR @dbcur. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapopen\_cursor.html