---
title: "ABENCONV_ENUM_ABEXA"
description: |
  ABENCONV_ENUM_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONV_ENUM_ABEXA.htm"
abapFile: "ABENCONV_ENUM_ABEXA.html"
keywords: ["if", "try", "catch", "method", "class", "data", "types", "ABENCONV", "ENUM", "ABEXA"]
---

This example demonstrates the use of the conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) for enumerated types.

The inner conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) return the value of the enumerated constant `earth` in the base type `i` of the [enumerated type](ABENENUM_TYPE_GLOSRY.html)\\ `planet`. An input value is added to this. Applying the conversion operator to the result determines a planet, which has the specified distance of `earth`.

\* Public class definition \\nCLASS cl\_demo\_conv\_enum DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_conv\_enum IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF ENUM planet, \\n mercury, \\n venus, \\n earth, \\n mars, \\n jupiter, \\n saturn, \\n uranus, \\n neptune, \\n END OF ENUM planet. \\n\\ \\n DATA number TYPE i. \\n cl\_demo\_input=>new( )->request( CHANGING field = number ). \\n\\ \\n TRY. \\n FINAL(planet) = CONV planet( CONV i( earth ) + number ). \\n out->write( planet ). \\n CATCH cx\_sy\_conversion\_no\_enum\_value. \\n out->write( 'Enter a number between -2 and 5' ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_conv\_enum DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_conv\_enum IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF ENUM planet, \\n mercury, \\n venus, \\n earth, \\n mars, \\n jupiter, \\n saturn, \\n uranus, \\n neptune, \\n END OF ENUM planet. \\n\\ \\n DATA number TYPE i. \\n cl\_demo\_input=>new( )->request( CHANGING field = number ). \\n\\ \\n TRY. \\n FINAL(planet) = CONV planet( CONV i( earth ) + number ). \\n out->write( planet ). \\n CATCH cx\_sy\_conversion\_no\_enum\_value. \\n out->write( 'Enter a number between -2 and 5' ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconstructor\_expression\_conv.html abenconv\_constructor\_enum.html