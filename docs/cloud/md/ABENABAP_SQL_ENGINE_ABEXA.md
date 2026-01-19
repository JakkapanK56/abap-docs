---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_ENGINE_ABEXA.htm"
abapFile: "ABENABAP_SQL_ENGINE_ABEXA.html"
keywords: ["select", "do", "while", "if", "method", "class", "data", "internal-table", "ABENABAP", "SQL", "ENGINE", "ABEXA"]
---

This example demonstrates the access to multiple internal tables with the ABAP SQL in-memory engine.

The example shows that reading from database tables and reading from internal tables with the same content yield the same results. While the database tables are accessed on the database, the `WITH` statement for the internal tables can be processed on the AS ABAP since none of the restrictions listed under [ABAP SQL In-Memory Engine, Restrictions](ABENSQL_ENGINE_RESTR.html) occur.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_abap\_sql\_engine DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_abap\_sql\_engine IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT \* FROM scarr INTO TABLE @FINAL(scarr\_tab). \\n SELECT \* FROM spfli INTO TABLE @FINAL(spfli\_tab). \\n\\ \\n WITH \\n +cte AS ( SELECT \\n FROM scarr \\n FIELDS carrid ) \\n SELECT \\n FROM +cte AS scarr \\n INNER JOIN spfli \\n ON scarr~carrid = spfli~carrid \\n FIELDS \\n scarr~carrid, \\n spfli~connid \\n ORDER BY scarr~carrid, spfli~connid \\n INTO TABLE @FINAL(result1). \\n\\ \\n WITH \\n +cte AS ( SELECT \\n FROM @scarr\_tab AS scarr \\n FIELDS carrid ) \\n SELECT \\n FROM +cte AS scarr \\n INNER JOIN @spfli\_tab AS spfli \\n ON scarr~carrid = spfli~carrid \\n FIELDS \\n scarr~carrid, \\n spfli~connid \\n ORDER BY scarr~carrid, spfli~connid \\n INTO TABLE @FINAL(result2). \\n\\ \\n ASSERT result1 = result2. \\n\\ \\n out->write( 'Success' ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_abap\_sql\_engine DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_abap\_sql\_engine IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT \* FROM scarr INTO TABLE @FINAL(scarr\_tab). \\n SELECT \* FROM spfli INTO TABLE @FINAL(spfli\_tab). \\n\\ \\n WITH \\n +cte AS ( SELECT \\n FROM scarr \\n FIELDS carrid ) \\n SELECT \\n FROM +cte AS scarr \\n INNER JOIN spfli \\n ON scarr~carrid = spfli~carrid \\n FIELDS \\n scarr~carrid, \\n spfli~connid \\n ORDER BY scarr~carrid, spfli~connid \\n INTO TABLE @FINAL(result1). \\n\\ \\n WITH \\n +cte AS ( SELECT \\n FROM @scarr\_tab AS scarr \\n FIELDS carrid ) \\n SELECT \\n FROM +cte AS scarr \\n INNER JOIN @spfli\_tab AS spfli \\n ON scarr~carrid = spfli~carrid \\n FIELDS \\n scarr~carrid, \\n spfli~connid \\n ORDER BY scarr~carrid, spfli~connid \\n INTO TABLE @FINAL(result2). \\n\\ \\n ASSERT result1 = result2. \\n\\ \\n out->write( 'Success' ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_inmemeng.html abenabap\_sql\_engine\_abexas.html