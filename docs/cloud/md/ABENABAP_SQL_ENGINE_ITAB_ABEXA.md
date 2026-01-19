---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_ENGINE_ITAB_ABEXA.htm"
abapFile: "ABENABAP_SQL_ENGINE_ITAB_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "internal-table", "ABENABAP", "SQL", "ENGINE", "ITAB", "ABEXA"]
---

This example demonstrates the access to one internal table in the statement [`WITH`](ABAPWITH.html).

Because of the usage of `UNION`, the ABAP SQL statement [`WITH`](ABAPWITH.html) can be processed on the database only and it is not possible to address more than one internal table within the statement, even if it is the same statement: The second `WITH` statement produces a syntax error. As a workaround, the internal table is addressed only once in an additional [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) which is then used twice in the following CTE.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_abap\_sql\_with\_one\_itab DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_abap\_sql\_with\_one\_itab IMPLEMENTATION. \\n METHOD main. \\n DATA carrid TYPE spfli-carrid VALUE 'LH'. \\n\\ \\n SELECT \* FROM spfli INTO TABLE @FINAL(spfli\_tab). \\n\\ \\n WITH \\n +cities AS ( \\n SELECT cityfrom AS city \\n FROM spfli \\n WHERE carrid = @carrid \\n UNION DISTINCT \\n SELECT cityto AS city \\n FROM spfli \\n WHERE carrid = @carrid ) \\n SELECT \* \\n FROM sgeocity \\n WHERE city IN ( SELECT city \\n FROM +cities ) \\n INTO TABLE @FINAL(result1). \\n\\ \\n "Error: Even the same internal table cam be accessed only once \\n\* WITH \\n\* +cities AS ( \\n\* SELECT cityfrom AS city \\n\* FROM @spfli\_tab AS spfli "<-- internal table \\n\* WHERE carrid = @carrid \\n\* UNION DISTINCT \\n\* SELECT cityto AS city \\n\* FROM @spfli\_tab AS spfli "<-- internal table \\n\* WHERE carrid = @carrid ) \\n\* SELECT \* \\n\* FROM sgeocity \\n\* WHERE city IN ( SELECT city \\n\* FROM +cities ) \\n\* INTO TABLE @FINAL(result2). \\n\* \\n\* ASSERT result2 = result1. \\n\\ \\n "Workaround: Only one access to internal table in additional CTE \\n WITH \\n +spfli\_gtt AS ( SELECT carrid, cityfrom, cityto \\n FROM @spfli\_tab AS spfli "<-- internal table \\n WHERE carrid = @carrid ), \\n +cities AS ( \\n SELECT cityfrom AS city \\n FROM +spfli\_gtt AS spfli \\n UNION DISTINCT \\n SELECT cityto AS city \\n FROM +spfli\_gtt AS spfli ) \\n SELECT \* \\n FROM sgeocity \\n WHERE city IN ( SELECT city \\n FROM +cities ) \\n INTO TABLE @FINAL(result2). \\n\\ \\n ASSERT result2 = result1. \\n\\ \\n out->write( 'Success' ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_abap\_sql\_with\_one\_itab DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_abap\_sql\_with\_one\_itab IMPLEMENTATION. \\n METHOD main. \\n DATA carrid TYPE spfli-carrid VALUE 'LH'. \\n\\ \\n SELECT \* FROM spfli INTO TABLE @FINAL(spfli\_tab). \\n\\ \\n WITH \\n +cities AS ( \\n SELECT cityfrom AS city \\n FROM spfli \\n WHERE carrid = @carrid \\n UNION DISTINCT \\n SELECT cityto AS city \\n FROM spfli \\n WHERE carrid = @carrid ) \\n SELECT \* \\n FROM sgeocity \\n WHERE city IN ( SELECT city \\n FROM +cities ) \\n INTO TABLE @FINAL(result1). \\n\\ \\n "Error: Even the same internal table cam be accessed only once \\n\* WITH \\n\* +cities AS ( \\n\* SELECT cityfrom AS city \\n\* FROM @spfli\_tab AS spfli "<-- internal table \\n\* WHERE carrid = @carrid \\n\* UNION DISTINCT \\n\* SELECT cityto AS city \\n\* FROM @spfli\_tab AS spfli "<-- internal table \\n\* WHERE carrid = @carrid ) \\n\* SELECT \* \\n\* FROM sgeocity \\n\* WHERE city IN ( SELECT city \\n\* FROM +cities ) \\n\* INTO TABLE @FINAL(result2). \\n\* \\n\* ASSERT result2 = result1. \\n\\ \\n "Workaround: Only one access to internal table in additional CTE \\n WITH \\n +spfli\_gtt AS ( SELECT carrid, cityfrom, cityto \\n FROM @spfli\_tab AS spfli "<-- internal table \\n WHERE carrid = @carrid ), \\n +cities AS ( \\n SELECT cityfrom AS city \\n FROM +spfli\_gtt AS spfli \\n UNION DISTINCT \\n SELECT cityto AS city \\n FROM +spfli\_gtt AS spfli ) \\n SELECT \* \\n FROM sgeocity \\n WHERE city IN ( SELECT city \\n FROM +cities ) \\n INTO TABLE @FINAL(result2). \\n\\ \\n ASSERT result2 = result1. \\n\\ \\n out->write( 'Success' ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_inmemeng.html abenabap\_sql\_engine\_abexas.html