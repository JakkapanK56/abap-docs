---
title: "ABENSQL_EXPR_CASE_STRING_ABEXA"
description: |
  ABENSQL_EXPR_CASE_STRING_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_EXPR_CASE_STRING_ABEXA.htm"
abapFile: "ABENSQL_EXPR_CASE_STRING_ABEXA.html"
keywords: ["select", "insert", "delete", "if", "case", "method", "class", "internal-table", "ABENSQL", "EXPR", "CASE", "STRING", "ABEXA"]
---

This example demonstrates simple case distinctions in [SQL expressions](ABAPSQL_EXPR.html).

In a list of columns specified after `SELECT`, [`CASE`](ABENSQL_SIMPLE_CASE.html) is used to make a simple case distinction for the content of a column. The result is a character string that is concatenated from column content or taken from a [host variable](ABENABAP_SQL_HOST_VARIABLES.html). Using the alias name defined after `AS`, the result is assigned to the identically named column in an internal table declared inline, `results`.

\* Public class definition \\nCLASS cl\_demo\_sql\_expr\_case\_string DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_case\_string IMPLEMENTATION. \\n METHOD main. \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( VALUE #( \\n ( id = 'x' char1 = 'aaaaa' char2 = 'bbbbb' ) \\n ( id = 'y' char1 = 'xxxxx' char2 = 'yyyyy' ) \\n ( id = 'z' char1 = 'mmmmm' char2 = 'nnnnn' ) ) ). \\n\\ \\n FINAL(else) = 'fffff'. \\n SELECT id, char1, char2, \\n CASE char1 \\n WHEN 'aaaaa' THEN ( char1 && char2 ) \\n WHEN 'xxxxx' THEN ( char2 && char1 ) \\n ELSE @else \\n END AS text \\n FROM demo\_expressions \\n INTO TABLE @FINAL(results). \\n\\ \\n out->write( results ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_sql\_expr\_case\_string DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_case\_string IMPLEMENTATION. \\n METHOD main. \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( VALUE #( \\n ( id = 'x' char1 = 'aaaaa' char2 = 'bbbbb' ) \\n ( id = 'y' char1 = 'xxxxx' char2 = 'yyyyy' ) \\n ( id = 'z' char1 = 'mmmmm' char2 = 'nnnnn' ) ) ). \\n\\ \\n FINAL(else) = 'fffff'. \\n SELECT id, char1, char2, \\n CASE char1 \\n WHEN 'aaaaa' THEN ( char1 && char2 ) \\n WHEN 'xxxxx' THEN ( char2 && char1 ) \\n ELSE @else \\n END AS text \\n FROM demo\_expressions \\n INTO TABLE @FINAL(results). \\n\\ \\n out->write( results ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_case.html abensql\_simple\_case.html