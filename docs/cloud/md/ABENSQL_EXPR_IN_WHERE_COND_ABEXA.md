---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXPR_IN_WHERE_COND_ABEXA.htm"
abapFile: "ABENSQL_EXPR_IN_WHERE_COND_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENSQL", "EXPR", "WHERE", "COND", "ABEXA"]
---

This example demonstrates how [SQL expressions](ABAPSQL_EXPR.html) are used on the left side of a [`WHERE`](ABENABAP_SQL_STMT_LOGEXP.html) condition.

On the left side of the [relational expression](ABENABAP_SQL_STMT_LOGEXP.html), the content of two specified columns is subtracted in an [SQL expression](ABAPSQL_EXPR.html). This calculation is performed on the database. The right side is a functional method call in a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html).

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_where\_exprssn DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS input RETURNING VALUE(free\_seats) TYPE i. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_where\_exprssn IMPLEMENTATION. \\n METHOD main. \\n SELECT carrid, connid, fldate, seatsmax, seatsocc, \\n seatsmax - seatsocc AS seatsfree \\n FROM sflight \\n WHERE seatsmax - seatsocc > @( input( ) ) \\n INTO TABLE @FINAL(result) \\n UP TO 100 ROWS. \\n out->write( result ). \\n ENDMETHOD. \\n METHOD input. \\n cl\_demo\_input=>new( )->request( CHANGING field = free\_seats ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_where\_exprssn DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS input RETURNING VALUE(free\_seats) TYPE i. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_where\_exprssn IMPLEMENTATION. \\n METHOD main. \\n SELECT carrid, connid, fldate, seatsmax, seatsocc, \\n seatsmax - seatsocc AS seatsfree \\n FROM sflight \\n WHERE seatsmax - seatsocc > @( input( ) ) \\n INTO TABLE @FINAL(result) \\n UP TO 100 ROWS. \\n out->write( result ). \\n ENDMETHOD. \\n METHOD input. \\n cl\_demo\_input=>new( )->request( CHANGING field = free\_seats ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapwhere.html