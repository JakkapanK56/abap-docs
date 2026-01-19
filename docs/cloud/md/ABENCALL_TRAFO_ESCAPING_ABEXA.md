---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCALL_TRAFO_ESCAPING_ABEXA.htm"
abapFile: "ABENCALL_TRAFO_ESCAPING_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENCALL", "TRAFO", "ESCAPING", "ABEXA"]
---

This example demonstrates the serialization of characters from the XML syntax using various transformations.

Four XSLT programs with different output methods are called and an ST program for serializing a text string containing the syntax characters *<>&"*. The results are as follows:

The result of the Simple Transformation `DEMO_ESCAPING_ST` matches the XSL transformation with the output method *xml*. Also, the text string is output here as an attribute in which the syntax character *"* is replaced by *&quot;*.

-   No replacements are made in the results of the XSL transformation `DEMO_ESCAPING_TEXT` with the output method *text*.
-   In the results of the XSL transformation `DEMO_ESCAPING_XML` with the output method *xml*, the syntax characters *<*, *\>*, and *&* are replaced by *&amp;lt;*, *&gt;*, and *&amp;*.
-   In the results of the XSL transformation `DEMO_ESCAPING_HTML` with the output method *html*, the syntax characters *<*, *\>*, and *&* are replaced by *&amp;lt;*, *&gt;*, and *&amp;*.
-   In the results of the XSL transformation `DEMO_ESCAPING_JS` with the output method *html*, the syntax characters are not replaced because they are part of JavaScript.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_transformation\_escpng DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_transformation\_escpng IMPLEMENTATION. \\n METHOD main. \\n DATA xml TYPE string. \\n\\ \\n FINAL(text) = \`<>&"\`. \\n\\ \\n out->begin\_section( \`Text\` \\n )->write( text \\n\\ \\n )->next\_section( \`XSLT\` \\n\\ \\n )->begin\_section( \`\` ). \\n CALL TRANSFORMATION demo\_escaping\_text SOURCE text = text \\n RESULT XML xml. \\n out->write( xml \\n\\ \\n )->next\_section( \`\` ). \\n CALL TRANSFORMATION demo\_escaping\_xml SOURCE text = text \\n RESULT XML xml. \\n out->write( xml \\n\\ \\n )->next\_section( \`\` ). \\n CALL TRANSFORMATION demo\_escaping\_html SOURCE text = text \\n RESULT XML xml. \\n out->write( xml \\n\\ \\n )->next\_section( \`\` ). \\n CALL TRANSFORMATION demo\_escaping\_js SOURCE text = text \\n RESULT XML xml. \\n out->write( xml \\n )->end\_section( \\n\\ \\n )->next\_section( \`ST\` ). \\n CALL TRANSFORMATION demo\_escaping\_st SOURCE text = text \\n RESULT XML xml. \\n out->write( xml ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_transformation\_escpng DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_transformation\_escpng IMPLEMENTATION. \\n METHOD main. \\n DATA xml TYPE string. \\n\\ \\n FINAL(text) = \`<>&"\`. \\n\\ \\n out->begin\_section( \`Text\` \\n )->write( text \\n\\ \\n )->next\_section( \`XSLT\` \\n\\ \\n )->begin\_section( \`\` ). \\n CALL TRANSFORMATION demo\_escaping\_text SOURCE text = text \\n RESULT XML xml. \\n out->write( xml \\n\\ \\n )->next\_section( \`\` ). \\n CALL TRANSFORMATION demo\_escaping\_xml SOURCE text = text \\n RESULT XML xml. \\n out->write( xml \\n\\ \\n )->next\_section( \`\` ). \\n CALL TRANSFORMATION demo\_escaping\_html SOURCE text = text \\n RESULT XML xml. \\n out->write( xml \\n\\ \\n )->next\_section( \`\` ). \\n CALL TRANSFORMATION demo\_escaping\_js SOURCE text = text \\n RESULT XML xml. \\n out->write( xml \\n )->end\_section( \\n\\ \\n )->next\_section( \`ST\` ). \\n CALL TRANSFORMATION demo\_escaping\_st SOURCE text = text \\n RESULT XML xml. \\n out->write( xml ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abapcall\_transformation.html abencall\_transformation\_abexas.html