---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXPR_AGGR_PREC_LOSS_ABEXA.htm"
abapFile: "ABENSQL_EXPR_AGGR_PREC_LOSS_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "types", "ABENSQL", "EXPR", "AGGR", "PREC", "LOSS", "ABEXA"]
---

This example demonstrates the [aggregate function](ABENSQL_AGG_FUNC.html)\\ `ALLOW_PRECISION_LOSS`.

Sums up decimal values with five or more decimal places and converts them to a decimal number with two decimal places. The result of the aggregate expression differs when using `ALLOW_PRECISION_LOSS`.

In this example, `ALLOW_PRECISION_LOSS` first sums up all decimals and then converts them, which is why it performs fewer operations. Without `ALLOW_PRECISION_LOSS`, each decimal is converted individually and then added up.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_allow\_precision\_loss DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_allow\_precision\_loss IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES result\_type TYPE p LENGTH 6 DECIMALS 2. \\n DATA: allow\_precision\_loss\_result TYPE result\_type, \\n normal\_sum\_result TYPE result\_type. \\n\\ \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( \\n VALUE #( ( id = 'X' dec2 = '2.119999' ) \\n ( id = 'Y' dec2 = '2.118888' ) \\n ( id = 'A' dec2 = '1.13999' ) \\n ( id = 'Z' dec2 = '2.668888' ) \\n ) ). \\n\\ \\n SELECT SUM( CAST( dec2 AS DEC( 10,2 ) ) ) AS sum1 \\n FROM demo\_expressions INTO @normal\_sum\_result. \\n\\ \\n SELECT allow\_precision\_loss( SUM( CAST( dec2 AS DEC( 10,2 ) ) ) ) \\n AS sum1 \\n FROM demo\_expressions INTO @allow\_precision\_loss\_result. \\n\\ \\n out->write\_data( allow\_precision\_loss\_result ). \\n out->write\_data( normal\_sum\_result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_allow\_precision\_loss DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_allow\_precision\_loss IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES result\_type TYPE p LENGTH 6 DECIMALS 2. \\n DATA: allow\_precision\_loss\_result TYPE result\_type, \\n normal\_sum\_result TYPE result\_type. \\n\\ \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( \\n VALUE #( ( id = 'X' dec2 = '2.119999' ) \\n ( id = 'Y' dec2 = '2.118888' ) \\n ( id = 'A' dec2 = '1.13999' ) \\n ( id = 'Z' dec2 = '2.668888' ) \\n ) ). \\n\\ \\n SELECT SUM( CAST( dec2 AS DEC( 10,2 ) ) ) AS sum1 \\n FROM demo\_expressions INTO @normal\_sum\_result. \\n\\ \\n SELECT allow\_precision\_loss( SUM( CAST( dec2 AS DEC( 10,2 ) ) ) ) \\n AS sum1 \\n FROM demo\_expressions INTO @allow\_precision\_loss\_result. \\n\\ \\n out->write\_data( allow\_precision\_loss\_result ). \\n out->write\_data( normal\_sum\_result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abapselect\_aggregate.html abensql\_agg\_expr\_abexas.html