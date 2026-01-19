---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENXSLT_REPLACE_ABEXA.htm"
abapFile: "ABENXSLT_REPLACE_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENXSLT", "REPLACE", "ABEXA"]
---

This example demonstrates the usage of the function `replace()` in an XSL transformation.

In the ABAP class, the string defined in `xml_source` is transformed. The XSL transformation `DEMO_XSLT_REPLACE` has the following form:

<xsl:transform version="1.0" \\n  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" \\n  xmlns:sap="http://www.sap.com/sapxsl">\\ \\n\\ \\n<xsl:output method="xml" omit-xml-declaration="yes" indent="yes"/>\\ \\n\\ \\n<xsl:template match="node()|@\*">\\ \\n  <xsl:copy>\\ \\n    <xsl:apply-templates select="node()|@\*"/>\\ \\n  </xsl:copy>\\ \\n</xsl:template>\\ \\n\\ \\n<xsl:template match="root">\\ \\n  <xsl:apply-templates/>\\ \\n</xsl:template>\\ \\n\\ \\n<xsl:template match="html">\\ \\n  <object>\\ \\n    <array name="HTML">\\ \\n      <object>\\ \\n        <xsl:for-each select="child::node()">\\ \\n          <str name="\\{name()\\}"><xsl:value-of select="."/></str>\\ \\n        </xsl:for-each>\\ \\n      </object>\\ \\n    </array>\\ \\n  </object>\\ \\n</xsl:template>\\ \\n\\ \\n<xsl:template match="text()\[contains(., '\\\\')\]">\\ \\n  <xsl:value-of select="replace(., '\\\\\\\\\\', '\\\\\\\\\\\\\\\\\\')"/>\\ \\n</xsl:template>\\ \\n\\ \\n</xsl:transform>

Using the function `replace()`, the backslash character is replaced by two backslash characters. The XML is transformed to [JSON XML](ABENABAP_JSON_XML.html) and the final output is in JSON format.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_xslt\_replace DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xslt\_replace IMPLEMENTATION. \\n METHOD main. \\n DATA xml\_result TYPE string. \\n\\ \\n FINAL(xml\_source) = \`\` && \\n \`\` && \\n \`

\` && \\n \`1 \\\\n\` && \\n \`2.\` && \\n \`

\` && \\n \`\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION demo\_xslt\_replace \\n SOURCE XML xml\_source \\n RESULT XML xml\_result. \\n\\ \\n out->write\_json( xml\_result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_xslt\_replace DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xslt\_replace IMPLEMENTATION. \\n METHOD main. \\n DATA xml\_result TYPE string. \\n\\ \\n FINAL(xml\_source) = \`\` && \\n \`\` && \\n \`

\` && \\n \`1 \\\\n\` && \\n \`2.\` && \\n \`

\` && \\n \`\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION demo\_xslt\_replace \\n SOURCE XML xml\_source \\n RESULT XML xml\_result. \\n\\ \\n out->write\_json( xml\_result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt.html abenxslt\_abexas.html