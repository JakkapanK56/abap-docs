---
title: "Executable demo of ABAP Docu"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXPR_CDS_SCALAR_ABEXA.htm"
abapFile: "ABENSQL_EXPR_CDS_SCALAR_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "ABENSQL", "EXPR", "CDS", "SCALAR", "ABEXA"]
---

This example demonstrates the use of a [SQL-based scalar function](ABENSQL_CDS_SCALAR_FUNC.html) in ABAP SQL.

The SQL-based scalar function `DEMO_CDS_SCALAR_RATIO` calculates the percentage of two input parameters.

define scalar function DEMO\_CDS\_SCALAR\_RATIO \\n  with parameters \\n    portion: numeric \\n      with reference type \[ #CUKY, #UNIT, #CALC, #NONE \], \\n    total  : type of portion \\n      with reference type of portion \\n  returns abap.decfloat34 \\n    with reference type #NONE;

It is implemented as follows:

In the above example class, it is used in the `SELECT` list of a query.

\* Public class definition \\n"!

Executable demo of ABAP Docu

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_scalar\_function DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_scalar\_function IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( VALUE #( \\n ( id = 'X' num1 = 100 num2 = 200 ) ) ). \\n\\ \\n SELECT FROM demo\_expressions \\n FIELDS id, \\n num1, \\n num2, \\n CAST( demo\_cds\_scalar\_ratio( portion = num1, total = num2 ) \\n AS DEC ) AS percentage \\n WHERE id = 'X' \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. METHOD execute BY DATABASE FUNCTION \\n FOR HDB \\n LANGUAGE SQLSCRIPT \\n OPTIONS READ-ONLY. \\n result = portion / total \* 100; \\nENDMETHOD. \* Public class definition \\n"!

Executable demo of ABAP Docu

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_scalar\_function DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_scalar\_function IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( VALUE #( \\n ( id = 'X' num1 = 100 num2 = 200 ) ) ). \\n\\ \\n SELECT FROM demo\_expressions \\n FIELDS id, \\n num1, \\n num2, \\n CAST( demo\_cds\_scalar\_ratio( portion = num1, total = num2 ) \\n AS DEC ) AS percentage \\n WHERE id = 'X' \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_cds\_scalar\_func.html