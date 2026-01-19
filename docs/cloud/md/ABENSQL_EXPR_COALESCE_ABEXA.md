---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXPR_COALESCE_ABEXA.htm"
abapFile: "ABENSQL_EXPR_COALESCE_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "ABENSQL", "EXPR", "COALESCE", "ABEXA"]
---

This example demonstrates the coalesce function in [SQL expressions](ABAPSQL_EXPR.html).

This example is an excerpt from the executable example for [joins](ABENJOINS_ABEXA.html). Here, the function [`COALESCE`](ABENSQL_COALESCE.html) is used to replace null values produced by an outer join with a different value.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_coalesce DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA: wa1 TYPE demo\_join1, \\n wa2 TYPE demo\_join2. \\n DATA BEGIN OF wa. \\n INCLUDE STRUCTURE wa1 AS wa1 RENAMING WITH SUFFIX 1. \\n INCLUDE STRUCTURE wa2 AS wa2 RENAMING WITH SUFFIX 2. \\n DATA END OF wa. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_coalesce IMPLEMENTATION. \\n METHOD main. \\n DATA itab LIKE TABLE OF wa WITH EMPTY KEY. \\n out->begin\_section( \`OUTER JOIN with Coalesce\` ). \\n SELECT t1~a AS a1, t1~b AS b1, t1~c AS c1, t1~d AS d1, \\n coalesce( t2~d, '--' ) AS d2, \\n coalesce( t2~e, '--' ) AS e2, \\n coalesce( t2~f, '--' ) AS f2, \\n coalesce( t2~g, '--' ) AS g2, \\n coalesce( t2~h, '--' ) AS h2 \\n FROM demo\_join1 AS t1 \\n LEFT OUTER JOIN demo\_join2 AS t2 ON t2~d = t1~d \\n ORDER BY t1~d \\n INTO CORRESPONDING FIELDS OF TABLE @itab. \\n out->write( itab ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n DELETE FROM demo\_join1. "#EC CI\_NOWHERE \\n INSERT demo\_join1 FROM TABLE @( VALUE #( \\n ( a = 'a1' b = 'b1' c = 'c1' d = 'uu' ) \\n ( a = 'a2' b = 'b2' c = 'c2' d = 'uu' ) \\n ( a = 'a3' b = 'b3' c = 'c3' d = 'vv' ) \\n ( a = 'a4' b = 'b4' c = 'c4' d = 'ww' ) ) ). \\n DELETE FROM demo\_join2. "#EC CI\_NOWHERE \\n INSERT demo\_join2 FROM TABLE @( VALUE #( \\n ( d = 'uu' e = 'e1' f = 'f1' g = 'g1' h = 'h1' ) \\n ( d = 'ww' e = 'e2' f = 'f2' g = 'g2' h = 'h2' ) \\n ( d = 'xx' e = 'e3' f = 'f3' g = 'g3' h = 'h3' ) ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_coalesce DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA: wa1 TYPE demo\_join1, \\n wa2 TYPE demo\_join2. \\n DATA BEGIN OF wa. \\n INCLUDE STRUCTURE wa1 AS wa1 RENAMING WITH SUFFIX 1. \\n INCLUDE STRUCTURE wa2 AS wa2 RENAMING WITH SUFFIX 2. \\n DATA END OF wa. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_coalesce IMPLEMENTATION. \\n METHOD main. \\n DATA itab LIKE TABLE OF wa WITH EMPTY KEY. \\n out->begin\_section( \`OUTER JOIN with Coalesce\` ). \\n SELECT t1~a AS a1, t1~b AS b1, t1~c AS c1, t1~d AS d1, \\n coalesce( t2~d, '--' ) AS d2, \\n coalesce( t2~e, '--' ) AS e2, \\n coalesce( t2~f, '--' ) AS f2, \\n coalesce( t2~g, '--' ) AS g2, \\n coalesce( t2~h, '--' ) AS h2 \\n FROM demo\_join1 AS t1 \\n LEFT OUTER JOIN demo\_join2 AS t2 ON t2~d = t1~d \\n ORDER BY t1~d \\n INTO CORRESPONDING FIELDS OF TABLE @itab. \\n out->write( itab ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n DELETE FROM demo\_join1. "#EC CI\_NOWHERE \\n INSERT demo\_join1 FROM TABLE @( VALUE #( \\n ( a = 'a1' b = 'b1' c = 'c1' d = 'uu' ) \\n ( a = 'a2' b = 'b2' c = 'c2' d = 'uu' ) \\n ( a = 'a3' b = 'b3' c = 'c3' d = 'vv' ) \\n ( a = 'a4' b = 'b4' c = 'c4' d = 'ww' ) ) ). \\n DELETE FROM demo\_join2. "#EC CI\_NOWHERE \\n INSERT demo\_join2 FROM TABLE @( VALUE #( \\n ( d = 'uu' e = 'e1' f = 'f1' g = 'g1' h = 'h1' ) \\n ( d = 'ww' e = 'e2' f = 'f2' g = 'g2' h = 'h2' ) \\n ( d = 'xx' e = 'e3' f = 'f3' g = 'g3' h = 'h3' ) ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_functions.html abensql\_coalesce.html