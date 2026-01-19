---
title: "ABAPFETCH_SHORTREF"
description: |
  ABAPFETCH_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFETCH_SHORTREF.htm"
abapFile: "ABAPFETCH_SHORTREF.html"
keywords: ["select", "do", "data", "internal-table", "ABAPFETCH", "SHORTREF"]
---

[Reference](ABAPFETCH.html)

`FETCH NEXT CURSOR dbcur      \{\ \{ INTO \{\ \{[CORRESPONDING FIELDS OF] wa\}\ | (dobj1, dobj2, ...) \}\ \}\      |\ \{ INTO|APPENDING [CORRESPONDING FIELDS OF] TABLE itab                         [PACKAGE SIZE n]\ \}\ \}\        [ EXTENDED RESULT @oref ].`

[ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement. Extracts rows from the result set of a [database cursor](ABENDATABASE_CURSOR_GLOSRY.html) opened using `OPEN CURSOR`.

-   [`INTO wa`](ABAPINTO_CLAUSE.html)\\
    Reads a row and assigns it to a work area `wa`.
-   [`INTO (dobj1, dobj2, ...)`](ABAPINTO_CLAUSE.html)\\
    Reads a row and assigns it to multiple data objects `dobj1`, `dobj2`, ...
-   [`INTO|APPENDING TABLE itab`](ABAPINTO_CLAUSE.html)\\
    Reads multiple rows and assigns them to an internal table `itab` or attaches them to the table.
-   [`CORRESPONDING FIELDS OF`](ABAPINTO_CLAUSE.html)\\
    Restricts the transport to identically named components of the work area `wa` or to the internal table `itab`.
-   [`PACKAGE SIZE n`](ABAPINTO_CLAUSE.html)\\
    Passes the rows in packages of `n` rows to the internal table `itab`.
-   [`EXTENDED RESULT @oref`](ABAPSELECT_EXTENDED_RESULT.html)\\
    Provides an extended result in a result object.
    

abenabap.html abenabap\_reference.html abenabap\_shortref.html