---
title: "ABENXSLT_TOKENIZE_ABEXA"
description: |
  ABENXSLT_TOKENIZE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENXSLT_TOKENIZE_ABEXA.htm"
abapFile: "ABENXSLT_TOKENIZE_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENXSLT", "TOKENIZE", "ABEXA"]
---

This example demonstrates the usage of the function `tokenize()` in an XSL transformation.

In the ABAP class, the string defined in `xml_source` is transformed. The XSL transformation `DEMO_XSLT_TOKENIZE` has the following form:

<xsl:transform version="1.0" \\n  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" \\n  xmlns:sap="http://www.sap.com/sapxsl">\\ \\n\\ \\n<xsl:output method="html" omit-xml-declaration="yes" indent="yes"/>\\ \\n\\ \\n<xsl:template match="/">\\ \\n  <xsl:apply-templates select="root/pets/cat"/>\\ \\n  <xsl:apply-templates select="root/pets/dog"/>\\ \\n</xsl:template>\\ \\n\\ \\n<xsl:template match="dog">\\ \\n  <dog nickname="\\{sap:tokenize(@name, '\\\\s+')\[1\]\\}" position="\\{position()\\}">\\ \\n    <xsl:for-each select="sap:tokenize(@name)">\\ \\n      <token><xsl:copy/></token>\\ \\n    </xsl:for-each>\\ \\n  </dog>\\ \\n</xsl:template>\\ \\n\\ \\n<xsl:template match="cat">\\ \\n  <cat name="\\{@name\\}" position="\\{position()\\}">\\ \\n    <xsl:for-each select="sap:tokenize(@name)">\\ \\n      <token><xsl:copy/></token>\\ \\n    </xsl:for-each>\\ \\n  </cat>\\ \\n</xsl:template>\\ \\n\\ \\n</xsl:transform>

Using the function `tokenize()`, the string of each `name` attribute of a `cat` element is split into its tokens. As no pattern is specified, a whitespace is implicitly assumed as the separator.

\* Public class definition \\nCLASS cl\_demo\_xslt\_tokenize DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xslt\_tokenize IMPLEMENTATION. \\n METHOD main. \\n DATA xml\_result TYPE string. \\n\\ \\n FINAL(xml\_source) = \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION demo\_xslt\_tokenize \\n SOURCE XML xml\_source \\n RESULT XML xml\_result. \\n\\ \\n out->write( xml\_result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_xslt\_tokenize DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xslt\_tokenize IMPLEMENTATION. \\n METHOD main. \\n DATA xml\_result TYPE string. \\n\\ \\n FINAL(xml\_source) = \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION demo\_xslt\_tokenize \\n SOURCE XML xml\_source \\n RESULT XML xml\_result. \\n\\ \\n out->write( xml\_result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt.html abenxslt\_abexas.html