---
title: "ABENLOGEXP_IN_RANGES_ABEXA"
description: |
  ABENLOGEXP_IN_RANGES_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_IN_RANGES_ABEXA.htm"
abapFile: "ABENLOGEXP_IN_RANGES_ABEXA.html"
keywords: ["select", "if", "method", "class", "data", "ABENLOGEXP", "RANGES", "ABEXA"]
---

This example demonstrates the evaluation of ranges tables in a comparison expression.

The example constructs a [ranges table](ABENRANGES_TABLE_GLOSRY.html) and compares input values with this table using the [`IN`](ABENLOGEXP_SELECT_OPTION.html) operator.

\* Public class definition \\nCLASS cl\_demo\_logexp\_in DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_logexp\_in IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA letter TYPE c LENGTH 1 VALUE 'F'. \\n cl\_demo\_input=>new( )->request( CHANGING field = letter ). \\n\\ \\n DATA rtab LIKE RANGE OF letter. \\n\\ \\n rtab = VALUE #( \\n ( sign = 'I' option = 'EQ' low = 'A' ) \\n ( sign = 'I' option = 'BT' low = 'H' high = 'K' ) \\n ( sign = 'E' option = 'EQ' low = 'M' ) \\n ( sign = 'E' option = 'BT' low = 'X' high = 'Z' ) ). \\n\\ \\n out->write( rtab ). \\n\\ \\n IF letter IN rtab. \\n out->write( |\\{ letter \\} in rtab| ). \\n ELSE. \\n out->write( |\\{ letter \\} not in rtab| ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_logexp\_in DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_logexp\_in IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA letter TYPE c LENGTH 1 VALUE 'F'. \\n cl\_demo\_input=>new( )->request( CHANGING field = letter ). \\n\\ \\n DATA rtab LIKE RANGE OF letter. \\n\\ \\n rtab = VALUE #( \\n ( sign = 'I' option = 'EQ' low = 'A' ) \\n ( sign = 'I' option = 'BT' low = 'H' high = 'K' ) \\n ( sign = 'E' option = 'EQ' low = 'M' ) \\n ( sign = 'E' option = 'BT' low = 'X' high = 'Z' ) ). \\n\\ \\n out->write( rtab ). \\n\\ \\n IF letter IN rtab. \\n out->write( |\\{ letter \\} in rtab| ). \\n ELSE. \\n out->write( |\\{ letter \\} not in rtab| ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_op.html abenlogexp\_compare\_all.html abenlogexp\_select\_option.html