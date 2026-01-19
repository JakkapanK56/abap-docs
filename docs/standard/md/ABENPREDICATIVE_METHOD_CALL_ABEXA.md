---
title: "ABENPREDICATIVE_METHOD_CALL_ABEXA"
description: |
  ABENPREDICATIVE_METHOD_CALL_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPREDICATIVE_METHOD_CALL_ABEXA.htm"
abapFile: "ABENPREDICATIVE_METHOD_CALL_ABEXA.html"
keywords: ["if", "case", "method", "class", "data", "internal-table", "ABENPREDICATIVE", "METHOD", "CALL", "ABEXA"]
---

This example demonstrates [predicative method calls](ABENPREDICATIVE_METHOD_CALL_GLOSRY.html).

The functional method `IS_PRODUCTION_SYSTEM` of the class `CL_ABAP_DEMO_SERVICES` is called [predicatively](ABENPREDICATIVE_METHOD_CALLS.html) in a [control statement](ABENCONTROL_STATEMENT_GLOSRY.html)\\ `IF` to ensure that the current system is not a production system. The method called is a [predicate method](ABENPREDICATE_METHOD_GLOSRY.html).

The functional method `GET_SPFLI` of the class `CL_DEMO_SPFLI` is then called [predicatively](ABENPREDICATIVE_METHOD_CALLS.html) once in a [control statement](ABENCONTROL_STATEMENT_GLOSRY.html)\\ `IF` and once in a [conditional expression](ABENCONDITIONAL_EXPRESSION_GLOSRY.html)\\ `COND`. In this case, it is not a [predicate method](ABENPREDICATE_METHOD_GLOSRY.html). The relational expressions are true or false, depending on whether the internal table returned is empty or filled.

\* Public class definition \\nCLASS cl\_demo\_prdctv\_method\_call DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_prdctv\_method\_call IMPLEMENTATION. \\n METHOD main. \\n IF cl\_abap\_demo\_services=>is\_production\_system( ). \\n out->write( \\n 'This demo cannot be executed in a production system' ). \\n RETURN. \\n ENDIF. \\n\\ \\n DATA carrier TYPE spfli-carrid VALUE 'LH'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrier ). \\n\\ \\n out->next\_section( 'IF' ). \\n IF cl\_demo\_spfli=>get\_spfli( to\_upper( carrier ) ). \\n out->write( 'Filled' ). \\n ELSE. \\n out->write( 'Not filled' ). \\n ENDIF. \\n\\ \\n out->next\_section( 'COND' \\n )->write( COND string( \\n WHEN cl\_demo\_spfli=>get\_spfli( to\_upper( carrier ) ) \\n THEN \`Filled\` \\n ELSE \`Not filled\` ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_prdctv\_method\_call DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_prdctv\_method\_call IMPLEMENTATION. \\n METHOD main. \\n IF cl\_abap\_demo\_services=>is\_production\_system( ). \\n out->write( \\n 'This demo cannot be executed in a production system' ). \\n RETURN. \\n ENDIF. \\n\\ \\n DATA carrier TYPE spfli-carrid VALUE 'LH'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrier ). \\n\\ \\n out->next\_section( 'IF' ). \\n IF cl\_demo\_spfli=>get\_spfli( to\_upper( carrier ) ). \\n out->write( 'Filled' ). \\n ELSE. \\n out->write( 'Not filled' ). \\n ENDIF. \\n\\ \\n out->next\_section( 'COND' \\n )->write( COND string( \\n WHEN cl\_demo\_spfli=>get\_spfli( to\_upper( carrier ) ) \\n THEN \`Filled\` \\n ELSE \`Not filled\` ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenpredicate.html abenpredicative\_method\_calls.html