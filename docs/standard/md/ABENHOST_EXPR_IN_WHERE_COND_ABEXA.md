---
title: "ABENHOST_EXPR_IN_WHERE_COND_ABEXA"
description: |
  ABENHOST_EXPR_IN_WHERE_COND_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENHOST_EXPR_IN_WHERE_COND_ABEXA.htm"
abapFile: "ABENHOST_EXPR_IN_WHERE_COND_ABEXA.html"
keywords: ["select", "if", "method", "class", "data", "ABENHOST", "EXPR", "WHERE", "COND", "ABEXA"]
---

This example demonstrates [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html) on the right side of a [relational expression](ABENABAP_SQL_STMT_LOGEXP.html) of a [`WHERE`](ABAPWHERE.html) condition.

A table expression is evaluated as a host expression on the right side of an [SQL condition](ABENABAP_SQL_STMT_LOGEXP.html). The result is used for the comparison with the column specified on the left side.

\* Public class definition \\nCLASS cl\_demo\_select\_where\_tab\_exp DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n DATA carriers TYPE HASHED TABLE OF scarr \\n WITH UNIQUE KEY carrid \\n WITH NON-UNIQUE SORTED KEY name COMPONENTS carrname. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_where\_tab\_exp IMPLEMENTATION. \\n METHOD main. \\n DATA name TYPE scarr-carrname VALUE 'United Airlines'. \\n cl\_demo\_input=>new( )->request( CHANGING field = name ). \\n\\ \\n SELECT carrid, connid, cityfrom, cityto \\n FROM spfli \\n WHERE carrid = \\n @( VALUE spfli-carrid( carriers\[ KEY name \\n carrname = name \]-carrid \\n OPTIONAL ) ) \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n SELECT \* \\n FROM scarr \\n INTO TABLE @carriers. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_select\_where\_tab\_exp DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n DATA carriers TYPE HASHED TABLE OF scarr \\n WITH UNIQUE KEY carrid \\n WITH NON-UNIQUE SORTED KEY name COMPONENTS carrname. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_where\_tab\_exp IMPLEMENTATION. \\n METHOD main. \\n DATA name TYPE scarr-carrname VALUE 'United Airlines'. \\n cl\_demo\_input=>new( )->request( CHANGING field = name ). \\n\\ \\n SELECT carrid, connid, cityfrom, cityto \\n FROM spfli \\n WHERE carrid = \\n @( VALUE spfli-carrid( carriers\[ KEY name \\n carrname = name \]-carrid \\n OPTIONAL ) ) \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n SELECT \* \\n FROM scarr \\n INTO TABLE @carriers. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abensql\_operands.html abenabap\_sql\_host\_expressions.html