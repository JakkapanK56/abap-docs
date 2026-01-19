---
title: "ABAPEXEC_INTO"
description: |
  ABAPEXEC_INTO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXEC_INTO.htm"
abapFile: "ABAPEXEC_INTO.html"
keywords: ["select", "if", "case", "data", "field-symbol", "ABAPEXEC", "INTO"]
---

`EXEC SQL.`\\ 
  `SELECT ... INTO [STRUCTURE] :host1 [, host2] ...`\\ 
`ENDEXEC.`

In a native `SELECT` or `FETCH` statement specified between `EXEC` and `ENDEXEC`, an `INTO` clause can be specified to pass the read data to [host variables](ABAPEXEC_HOST.html)\\ `host1`, `host2`, ... specified after the statement. If there are multiple rows in the result set, any one of the rows is read.

If a structure is specified as a [host variable](ABAPEXEC_HOST.html) in after `INTO`, it is transformed by the Native SQL interface as if its components were listed as individual fields separated by commas. The addition `STRUCTURE` can be specified between `INTO` and a single host variable. This addition has the effect that the host variable is handled like a structure, even if an untyped formal parameter or an untyped field symbol is specified. Otherwise, when multiple values are being passed, depending on the platform, either the first value only is passed, or an exception is raised.

As in the example for [host variables](ABAPEXEC_HOST.html). The addition `STRUCTURE` is specified after `INTO`. However, this is not necessary since `wa` is known statically as a structure. The structure `wa` is handled in the `INTO` clause as if all substrings were specified separately: `INTO :wa-cityfrom, :wa-cityto`.

-   The SAP-specific addition `INTO` is removed from the statement by the Native SQL interface before it is passed to the database.
-   The addition `INTO` can only be used in statements introduced using `SELECT` and `FETCH`. In a statement introduced using `WITH` to define a common table expression (CTE), for example, `INTO` is not possible. In cases like this, either [`OPEN`](ABAPEXEC_CURSOR.html) or [ADBC](ABENADBC.html) (recommended) must be used.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: carrid TYPE spfli-carrid VALUE 'LH', \\n connid TYPE spfli-connid VALUE '400'. \\n\\ \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = carrid \\n )->add\_field( CHANGING field = connid )->request( ). \\n\\ \\nDATA: BEGIN OF wa, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n END OF wa. \\n\\ \\nEXEC SQL. \\n SELECT cityfrom, cityto \\n INTO STRUCTURE :wa \\n FROM spfli \\n WHERE mandt = :sy-mandt AND \\n carrid = :carrid AND connid = :connid \\nENDEXEC. \\n\\ \\nout->write( wa ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abennativesql.html abapexec.html