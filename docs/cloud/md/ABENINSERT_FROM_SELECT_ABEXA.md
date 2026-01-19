---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENINSERT_FROM_SELECT_ABEXA.htm"
abapFile: "ABENINSERT_FROM_SELECT_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "internal-table", "ABENINSERT", "FROM", "SELECT", "ABEXA"]
---

This example demonstrates the statement [`INSERT`](ABAPINSERT_DBTAB.html) with the addition [`FROM SELECT`](ABAPINSERT_SOURCE.html).

The DDIC database table `DEMO_SUMDIST_AGG` is filled with aggregated data from the tables `SCARR` and `SPFLI`.

The result of both `INSERT` statements is the same. `DEMO_SUMDIST_AGG` is a [global temporary table (GTT)](ABENGLOBAL_TEMPORARY_TABLE_GLOSRY.html), which means that its content must be deleted before the results are produced, since this creates an implicit database commit.

-   First, a standalone `SELECT` statement is used to read the aggregated data into an internal table and then the statement `INSERT` is used to write it to the DDIC database table. This requires two database reads and the transport of the data between the database server and the AS ABAP.
-   The same `SELECT` statement is then used directly as a subquery in the `INSERT` statement. Only a single database read and no transport of data between the database server and the AS ABAP is then required.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_insert\_from\_select DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_insert\_from\_select IMPLEMENTATION. \\n METHOD main. \\n "INSERT FROM TABLE \\n SELECT \\n FROM scarr AS s \\n INNER JOIN spfli AS p ON s~carrid = p~carrid \\n FIELDS s~mandt, \\n s~carrname, \\n p~distid, \\n SUM( p~distance ) AS sum\_distance \\n GROUP BY s~mandt, s~carrname, p~distid \\n INTO TABLE @FINAL(temp). \\n INSERT demo\_sumdist\_agg FROM TABLE @temp. \\n\\ \\n SELECT \* FROM demo\_sumdist\_agg \\n ORDER BY carrname, distid, sum\_distance \\n INTO TABLE @FINAL(insert\_from\_table). \\n\\ \\n DELETE FROM demo\_sumdist\_agg. \\n\\ \\n "INSERT FROM SELECT \\n INSERT demo\_sumdist\_agg FROM \\n ( SELECT \\n FROM scarr AS s \\n INNER JOIN spfli AS p ON s~carrid = p~carrid \\n FIELDS s~carrname, \\n p~distid, \\n SUM( p~distance ) AS sum\_distance \\n GROUP BY s~mandt, s~carrname, p~distid ). \\n\\ \\n SELECT \* FROM demo\_sumdist\_agg \\n ORDER BY carrname, distid, sum\_distance \\n INTO TABLE @FINAL(insert\_from\_select). \\n\\ \\n DELETE FROM demo\_sumdist\_agg. "GTT \\n\\ \\n IF insert\_from\_select = insert\_from\_table. \\n out->write( \\n \`Same data inserted by FROM TABLE and FROM SELECT:\` \\n )->write( insert\_from\_select ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_insert\_from\_select DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_insert\_from\_select IMPLEMENTATION. \\n METHOD main. \\n "INSERT FROM TABLE \\n SELECT \\n FROM scarr AS s \\n INNER JOIN spfli AS p ON s~carrid = p~carrid \\n FIELDS s~mandt, \\n s~carrname, \\n p~distid, \\n SUM( p~distance ) AS sum\_distance \\n GROUP BY s~mandt, s~carrname, p~distid \\n INTO TABLE @FINAL(temp). \\n INSERT demo\_sumdist\_agg FROM TABLE @temp. \\n\\ \\n SELECT \* FROM demo\_sumdist\_agg \\n ORDER BY carrname, distid, sum\_distance \\n INTO TABLE @FINAL(insert\_from\_table). \\n\\ \\n DELETE FROM demo\_sumdist\_agg. \\n\\ \\n "INSERT FROM SELECT \\n INSERT demo\_sumdist\_agg FROM \\n ( SELECT \\n FROM scarr AS s \\n INNER JOIN spfli AS p ON s~carrid = p~carrid \\n FIELDS s~carrname, \\n p~distid, \\n SUM( p~distance ) AS sum\_distance \\n GROUP BY s~mandt, s~carrname, p~distid ). \\n\\ \\n SELECT \* FROM demo\_sumdist\_agg \\n ORDER BY carrname, distid, sum\_distance \\n INTO TABLE @FINAL(insert\_from\_select). \\n\\ \\n DELETE FROM demo\_sumdist\_agg. "GTT \\n\\ \\n IF insert\_from\_select = insert\_from\_table. \\n out->write( \\n \`Same data inserted by FROM TABLE and FROM SELECT:\` \\n )->write( insert\_from\_select ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html abapinsert\_dbtab.html abapinsert\_source.html