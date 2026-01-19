---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREDUCE_TEXT_ABEXA.htm"
abapFile: "ABENREDUCE_TEXT_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "internal-table", "ABENREDUCE", "TEXT", "ABEXA"]
---

This example demonstrates a reduction of the columns of a character-like table to a text string.

A [table comprehension](ABENTABLE_COMPREHENSION_GLOSRY.html) is used to construct a new internal table `switched_words` from the content of an internal table `words`, where the condition operator [`SWITCH`](ABENCONDITIONAL_EXPRESSION_SWITCH.html) replaces certain lines of the existing internal table with other lines. This table is specified in the [`FOR` expression](ABENFOR_IN_ITAB.html) of the [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html) expression and its lines are reduced to a text string using a concatenation after `NEXT` and then assigned to the variable `sentence`. Here, the helper variable `sep` declared after `INIT` is initial for the first read line and is filled with a blank for the evaluation of further lines.

This example also demonstrates an alternative implementation in which the table comprehension is embedded directly in the table reduction. Here, the helper variable `switched_words` is not required, but the source code is much harder to read. A human reader, for example, can hardly tell that the `FOR` expressions are not sequential and that the table comprehension is executed first, followed by the table reduction for the result.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_reduce\_text DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_reduce\_text IMPLEMENTATION. \\n METHOD main. \\n TYPES strings TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n FINAL(words) = VALUE strings( \\n ( \`All\` ) \\n ( \`ABAP\` ) \\n ( \`constructs\` ) \\n ( \`are\` ) \\n ( \`imperative\` ) ). \\n out->write( words ). \\n\\ \\n "Table comprehension into helper table \\n FINAL(switched\_words) = VALUE strings( \\n FOR word IN words \\n ( SWITCH #( word WHEN \`All\` THEN \`Some\` \\n WHEN \`imperative\` THEN \`functional\` \\n ELSE word ) ) ). \\n out->write\_data( switched\_words ). \\n\\ \\n "Table reduction of helper table \\n FINAL(sentence) = \\n REDUCE string( INIT text = \`\` sep = \`\` \\n FOR word IN switched\_words \\n NEXT text = |\\{ text \\}\\{ sep \\}\\{ word \\}| sep = \` \` ) && '.'. \\n out->write\_data( sentence ). \\n\\ \\n "Obfuscation - all in one \\n ASSERT sentence = \\n REDUCE string( INIT text = \`\` sep = \`\` \\n "Table reduction \\n FOR word IN VALUE strings( \\n "Table comprehension \\n FOR word IN words \\n ( SWITCH #( word WHEN \`All\` THEN \`Some\` \\n WHEN \`imperative\` THEN \`functional\` \\n ELSE word ) ) ) \\n NEXT text = |\\{ text \\}\\{ sep \\}\\{ word \\}| sep = \` \` ) && '.'. \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_reduce\_text DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_reduce\_text IMPLEMENTATION. \\n METHOD main. \\n TYPES strings TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n FINAL(words) = VALUE strings( \\n ( \`All\` ) \\n ( \`ABAP\` ) \\n ( \`constructs\` ) \\n ( \`are\` ) \\n ( \`imperative\` ) ). \\n out->write( words ). \\n\\ \\n "Table comprehension into helper table \\n FINAL(switched\_words) = VALUE strings( \\n FOR word IN words \\n ( SWITCH #( word WHEN \`All\` THEN \`Some\` \\n WHEN \`imperative\` THEN \`functional\` \\n ELSE word ) ) ). \\n out->write\_data( switched\_words ). \\n\\ \\n "Table reduction of helper table \\n FINAL(sentence) = \\n REDUCE string( INIT text = \`\` sep = \`\` \\n FOR word IN switched\_words \\n NEXT text = |\\{ text \\}\\{ sep \\}\\{ word \\}| sep = \` \` ) && '.'. \\n out->write\_data( sentence ). \\n\\ \\n "Obfuscation - all in one \\n ASSERT sentence = \\n REDUCE string( INIT text = \`\` sep = \`\` \\n "Table reduction \\n FOR word IN VALUE strings( \\n "Table comprehension \\n FOR word IN words \\n ( SWITCH #( word WHEN \`All\` THEN \`Some\` \\n WHEN \`imperative\` THEN \`functional\` \\n ELSE word ) ) ) \\n NEXT text = |\\{ text \\}\\{ sep \\}\\{ word \\}| sep = \` \` ) && '.'. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html abentable\_reductions\_abexas.html