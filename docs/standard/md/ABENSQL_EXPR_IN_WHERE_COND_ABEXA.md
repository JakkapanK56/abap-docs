---
title: "ABENSQL_EXPR_IN_WHERE_COND_ABEXA"
description: |
  ABENSQL_EXPR_IN_WHERE_COND_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_EXPR_IN_WHERE_COND_ABEXA.htm"
abapFile: "ABENSQL_EXPR_IN_WHERE_COND_ABEXA.html"
keywords: ["select", "if", "method", "class", "data", "ABENSQL", "EXPR", "WHERE", "COND", "ABEXA"]
---

This example demonstrates how [SQL expressions](ABAPSQL_EXPR.html) are used on the left side of a [`WHERE`](ABENABAP_SQL_STMT_LOGEXP.html) condition.

On the left side of the [relational expression](ABENABAP_SQL_STMT_LOGEXP.html), the content of two specified columns is subtracted in an [SQL expression](ABAPSQL_EXPR.html). This calculation is performed on the database. The right side is a functional method call in a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html).

\* Public class definition \\nCLASS cl\_demo\_select\_where\_exprssn DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS input RETURNING VALUE(free\_seats) TYPE i. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_where\_exprssn IMPLEMENTATION. \\n METHOD main. \\n SELECT carrid, connid, fldate, seatsmax, seatsocc, \\n seatsmax - seatsocc AS seatsfree \\n FROM sflight \\n WHERE seatsmax - seatsocc > @( input( ) ) \\n INTO TABLE @FINAL(result) \\n UP TO 100 ROWS. \\n out->write( result ). \\n ENDMETHOD. \\n METHOD input. \\n cl\_demo\_input=>new( )->request( CHANGING field = free\_seats ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_select\_where\_exprssn DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS input RETURNING VALUE(free\_seats) TYPE i. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_where\_exprssn IMPLEMENTATION. \\n METHOD main. \\n SELECT carrid, connid, fldate, seatsmax, seatsocc, \\n seatsmax - seatsocc AS seatsfree \\n FROM sflight \\n WHERE seatsmax - seatsocc > @( input( ) ) \\n INTO TABLE @FINAL(result) \\n UP TO 100 ROWS. \\n out->write( result ). \\n ENDMETHOD. \\n METHOD input. \\n cl\_demo\_input=>new( )->request( CHANGING field = free\_seats ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapwhere.html