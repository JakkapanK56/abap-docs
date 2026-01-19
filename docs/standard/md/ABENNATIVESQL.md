---
title: "ABENNATIVESQL"
description: |
  ABENNATIVESQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNATIVESQL.htm"
abapFile: "ABENNATIVESQL.html"
keywords: ["do", "if", "data", "ABENNATIVESQL"]
---

The following ABAP statements are used to embed [Native SQL](ABENNATIVE_SQL_GLOSRY.html) statically in ABAP programs:

[`EXEC SQL`](ABAPEXEC.html)\\ 
  ...\\ 
[`ENDEXEC`](ABAPENDEXEC.html)

Native SQL statements embedded between `EXEC SQL` and `ENDEXEC` are not part of the ABAP language scope and do not follow ABAP syntax. Basically, database-specific [SQL](ABENSQL_GLOSRY.html) statements can be embedded that are passed unchanged from the Native SQL interface to a database system and executed there. Almost the entire SQL language scope of the relevant database can be used, and the addressed database tables do not have to be declared in the ABAP Dictionary. In addition, a small set of SAP-specific Native SQL statements and additions are available that can only be specified between `EXEC SQL` and `ENDEXEC` and that are subject to special handling by the Native SQL interface.

[Use ABAP SQL for general database accesses where possible.](ABENDATABASE_ACCESS_GUIDL.html)

If Native SQL is used instead of ABAP SQL, the use of [ADBC](ABENADBC.html) is recommended.

abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html