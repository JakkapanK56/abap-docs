---
title: "ABENSQL_EXPR_STRING_AGG_ABEXA"
description: |
  ABENSQL_EXPR_STRING_AGG_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_EXPR_STRING_AGG_ABEXA.htm"
abapFile: "ABENSQL_EXPR_STRING_AGG_ABEXA.html"
keywords: ["select", "insert", "delete", "if", "method", "class", "ABENSQL", "EXPR", "STRING", "AGG", "ABEXA"]
---

This example demonstrates the [aggregate function](ABENSQL_AGG_FUNC.html)\\ `string_agg`.

Use of the [aggregate function](ABENAGGREGATE_FUNCTION_GLOSRY.html)\\ [`STRING_AGG`](ABENSQL_AGG_FUNC.html) as an [aggregate expression](ABENAGGREGATE_EXPRESSION_GLOSRY.html) in the [`SELECT` list](ABAPSELECT_LIST.html) with different sorts.

\* Public class definition \\nCLASS cl\_demo\_str\_agg DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_agg IMPLEMENTATION. \\n METHOD main. \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( VALUE #( \\n ( id = '5' char1 = 'nowhere' ) \\n ( id = '3' char1 = 'this' ) \\n ( id = '1' char1 = 'everybody' ) \\n ( id = '4' char1 = 'is' ) \\n ( id = '2' char1 = 'knows' ) ) ). \\n\\ \\n SELECT STRING\_AGG( char1,' ' ) \\n FROM demo\_expressions \\n INTO TABLE @FINAL(unordered). \\n out->write( unordered ). \\n\\ \\n SELECT STRING\_AGG( char1,' ' ORDER BY id ASCENDING ) \\n FROM demo\_expressions \\n INTO TABLE @FINAL(ordered\_ascending). \\n out->write( ordered\_ascending ). \\n\\ \\n SELECT STRING\_AGG( char1,' ' ORDER BY id DESCENDING ) \\n FROM demo\_expressions \\n INTO TABLE @FINAL(ordered\_descending). \\n out->write( ordered\_descending ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_str\_agg DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_agg IMPLEMENTATION. \\n METHOD main. \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( VALUE #( \\n ( id = '5' char1 = 'nowhere' ) \\n ( id = '3' char1 = 'this' ) \\n ( id = '1' char1 = 'everybody' ) \\n ( id = '4' char1 = 'is' ) \\n ( id = '2' char1 = 'knows' ) ) ). \\n\\ \\n SELECT STRING\_AGG( char1,' ' ) \\n FROM demo\_expressions \\n INTO TABLE @FINAL(unordered). \\n out->write( unordered ). \\n\\ \\n SELECT STRING\_AGG( char1,' ' ORDER BY id ASCENDING ) \\n FROM demo\_expressions \\n INTO TABLE @FINAL(ordered\_ascending). \\n out->write( ordered\_ascending ). \\n\\ \\n SELECT STRING\_AGG( char1,' ' ORDER BY id DESCENDING ) \\n FROM demo\_expressions \\n INTO TABLE @FINAL(ordered\_descending). \\n out->write( ordered\_descending ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abapselect\_aggregate.html abensql\_agg\_expr\_abexas.html