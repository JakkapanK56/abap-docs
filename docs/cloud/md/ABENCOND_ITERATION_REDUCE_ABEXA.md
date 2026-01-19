---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCOND_ITERATION_REDUCE_ABEXA.htm"
abapFile: "ABENCOND_ITERATION_REDUCE_ABEXA.html"
keywords: ["do", "while", "if", "case", "method", "class", "data", "ABENCOND", "ITERATION", "REDUCE", "ABEXA"]
---

This example demonstrates [conditional iterations](ABENFOR_CONDITIONAL.html) with the operator [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html).

This example demonstrates the following simple iterations, which can be used to construct elementary data objects and directly display them in a constructor expression using the reduction operator [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html):

-   The first expression constructs a value of the type `i` for which the total of the iteration variable `n` is calculated. `n` is numeric, which means that `THEN` does not have to be specified. Each iteration step increases the value of `n` by 1.
-   The second expression uses the same iteration as the first, but constructs a text string to which each iteration step appends the character representation of `n`.
-   Like the second expression, the third expression constructs a text string, but uses the addition `THEN` explicitly to decrement the iteration variable instead of incrementing it.
-   Finally, the fourth expression shows that the iteration variable does not have to be numeric. In this case, `THEN` must be specified explicitly with a suitable expression. Here, a text string is made longer until it has reached a specific size.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_reduce\_cond\_iteration DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_reduce\_cond\_iteration IMPLEMENTATION. \\n METHOD main. \\n out->next\_section( 'Summation' \\n )->write( REDUCE i( INIT sum = 0 \\n FOR n = 1 UNTIL n > 10 \\n NEXT sum = sum + n ) \\n )->next\_section( 'Concatenation without THEN' \\n )->write( REDUCE string( INIT text = \`Count up:\` \\n FOR n = 1 UNTIL n > 10 \\n NEXT text &&= | \\{ n \\}| ) \\n )->next\_section( 'Concatenation with THEN' \\n )->write( REDUCE string( INIT text = \`Count down:\` \\n FOR n = 10 THEN n - 1 WHILE n > 0 \\n NEXT text &&= | \\{ n \\}| ) \\n )->next\_section( 'Non arithmetic expression' \\n )->write( REDUCE string( INIT text = \`\` \\n FOR t = \`x\` THEN t && \`y\` \\n UNTIL strlen( t ) > 10 \\n NEXT text &&= |\\{ t \\} | ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_reduce\_cond\_iteration DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_reduce\_cond\_iteration IMPLEMENTATION. \\n METHOD main. \\n out->next\_section( 'Summation' \\n )->write( REDUCE i( INIT sum = 0 \\n FOR n = 1 UNTIL n > 10 \\n NEXT sum = sum + n ) \\n )->next\_section( 'Concatenation without THEN' \\n )->write( REDUCE string( INIT text = \`Count up:\` \\n FOR n = 1 UNTIL n > 10 \\n NEXT text &&= | \\{ n \\}| ) \\n )->next\_section( 'Concatenation with THEN' \\n )->write( REDUCE string( INIT text = \`Count down:\` \\n FOR n = 10 THEN n - 1 WHILE n > 0 \\n NEXT text &&= | \\{ n \\}| ) \\n )->next\_section( 'Non arithmetic expression' \\n )->write( REDUCE string( INIT text = \`\` \\n FOR t = \`x\` THEN t && \`y\` \\n UNTIL strlen( t ) > 10 \\n NEXT text &&= |\\{ t \\} | ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abeniteration\_expressions.html abenfor.html abeniteration\_expressions\_abexas.html