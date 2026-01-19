---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENXSLT_SPEC_ABEXA.htm"
abapFile: "ABENXSLT_SPEC_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENXSLT", "SPEC", "ABEXA"]
---

This example demonstrates a simple XML to HTML transformation. The output contains a paragraph.

In the ABAP class, the string defined in `xml_source` is transformed. The XSL transformation `DEMO_XSLT_HELLO_WORLD` has the following form:

<xsl:transform version="1.0" \\n  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" \\n  xmlns:sap="http://www.sap.com/sapxsl">\\ \\n\\ \\n<xsl:output method="html" omit-xml-declaration="yes" indent="yes"/>\\ \\n\\ \\n<xsl:strip-space elements="\*"/>\\ \\n\\ \\n<xsl:template match="/">\\ \\n    <html>\\ \\n        <head>\\ \\n            <style>\\ \\n                <xsl:call-template name="style"/>\\ \\n            </style>\\ \\n        </head>\\ \\n        <body>\\ \\n            <xsl:apply-templates select="root"/>\\ \\n        </body>\\ \\n    </html>\\ \\n</xsl:template>\\ \\n\\ \\n<xsl:template match="root">\\ \\n    <p><xsl:value-of select="/."/></p>\\ \\n</xsl:template>\\ \\n\\ \\n<xsl:template name="style">\\ \\n    body \\{ \\n      font-family: Arial; \\n    \\} \\n</xsl:template>\\ \\n\\ \\n</xsl:transform>

Apart from the HTML construct, a template defining CSS is called.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_xslt\_hello\_world DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xslt\_hello\_world IMPLEMENTATION. \\n METHOD main. \\n DATA xml\_result TYPE string. \\n\\ \\n FINAL(xml\_source) = \`\` && \\n \`Hello World!\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION demo\_xslt\_hello\_world \\n SOURCE XML xml\_source \\n RESULT XML xml\_result. \\n\\ \\n out->write( xml\_result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_xslt\_hello\_world DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xslt\_hello\_world IMPLEMENTATION. \\n METHOD main. \\n DATA xml\_result TYPE string. \\n\\ \\n FINAL(xml\_source) = \`\` && \\n \`Hello World!\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION demo\_xslt\_hello\_world \\n SOURCE XML xml\_source \\n RESULT XML xml\_result. \\n\\ \\n out->write( xml\_result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt.html abenxslt\_abexas.html