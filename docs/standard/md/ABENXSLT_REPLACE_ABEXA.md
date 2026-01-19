---
title: "ABENXSLT_REPLACE_ABEXA"
description: |
  ABENXSLT_REPLACE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENXSLT_REPLACE_ABEXA.htm"
abapFile: "ABENXSLT_REPLACE_ABEXA.html"
keywords: ["select", "method", "class", "data", "ABENXSLT", "REPLACE", "ABEXA"]
---

This example demonstrates the usage of the function `replace()` in an XSL transformation.

In the ABAP class, the string defined in `xml_source` is transformed. The XSL transformation `DEMO_XSLT_REPLACE` has the following form:

<xsl:transform version="1.0" \\n  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" \\n  xmlns:sap="http://www.sap.com/sapxsl">\\ \\n\\ \\n<xsl:output method="xml" omit-xml-declaration="yes" indent="yes"/>\\ \\n\\ \\n<xsl:template match="node()|@\*">\\ \\n  <xsl:copy>\\ \\n    <xsl:apply-templates select="node()|@\*"/>\\ \\n  </xsl:copy>\\ \\n</xsl:template>\\ \\n\\ \\n<xsl:template match="root">\\ \\n  <xsl:apply-templates/>\\ \\n</xsl:template>\\ \\n\\ \\n<xsl:template match="html">\\ \\n  <object>\\ \\n    <array name="HTML">\\ \\n      <object>\\ \\n        <xsl:for-each select="child::node()">\\ \\n          <str name="\\{name()\\}"><xsl:value-of select="."/></str>\\ \\n        </xsl:for-each>\\ \\n      </object>\\ \\n    </array>\\ \\n  </object>\\ \\n</xsl:template>\\ \\n\\ \\n<xsl:template match="text()\[contains(., '\\\\')\]">\\ \\n  <xsl:value-of select="replace(., '\\\\\\\\\\', '\\\\\\\\\\\\\\\\\\')"/>\\ \\n</xsl:template>\\ \\n\\ \\n</xsl:transform>

Using the function `replace()`, the backslash character is replaced by two backslash characters. The XML is transformed to [JSON XML](ABENABAP_JSON_XML.html) and the final output is in JSON format.

\* Public class definition \\nCLASS cl\_demo\_xslt\_replace DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xslt\_replace IMPLEMENTATION. \\n METHOD main. \\n DATA xml\_result TYPE string. \\n\\ \\n FINAL(xml\_source) = \`\` && \\n \`\` && \\n \`

\` && \\n \`1 \\\\n\` && \\n \`2.\` && \\n \`

\` && \\n \`\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION demo\_xslt\_replace \\n SOURCE XML xml\_source \\n RESULT XML xml\_result. \\n\\ \\n out->write\_json( xml\_result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_xslt\_replace DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xslt\_replace IMPLEMENTATION. \\n METHOD main. \\n DATA xml\_result TYPE string. \\n\\ \\n FINAL(xml\_source) = \`\` && \\n \`\` && \\n \`

\` && \\n \`1 \\\\n\` && \\n \`2.\` && \\n \`

\` && \\n \`\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION demo\_xslt\_replace \\n SOURCE XML xml\_source \\n RESULT XML xml\_result. \\n\\ \\n out->write\_json( xml\_result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt.html abenxslt\_abexas.html