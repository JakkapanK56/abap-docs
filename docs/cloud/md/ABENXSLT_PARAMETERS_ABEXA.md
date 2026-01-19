---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENXSLT_PARAMETERS_ABEXA.htm"
abapFile: "ABENXSLT_PARAMETERS_ABEXA.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "ABENXSLT", "PARAMETERS", "ABEXA"]
---

This example demonstrates the usage of parameters in an XSL transformation.

In the ABAP class, the string defined in `xml_source` is transformed. Using the addition [`PARAMETERS`](ABAPCALL_TRANSFORMATION.html), the data object `doc_time` is bound to the parameter `time`. The XSL transformation `DEMO_XSLT_PARAMETERS` has the following form:

<xsl:transform version="1.0" \\n  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" \\n  xmlns:sap="http://www.sap.com/sapxsl">\\ \\n\\ \\n<xsl:output method="xml" omit-xml-declaration="yes" indent="yes"/>\\ \\n\\ \\n<xsl:strip-space elements="\*"/>\\ \\n\\ \\n<xsl:param name="TIME" sap:type="number"/>\\ \\n\\ \\n<xsl:template match="/">\\ \\n    <xsl:apply-templates select="root"/>\\ \\n</xsl:template>\\ \\n\\ \\n<xsl:template match="root">\\ \\n    <xsl:if test="$TIME &lt; 43200">\\ \\n        <xsl:value-of select="string('Good morning')"/>\\ \\n    </xsl:if>\\ \\n    <xsl:if test="$TIME &gt; 43200">\\ \\n        <xsl:value-of select="string('Good afternoon')"/>\\ \\n    </xsl:if>\\ \\n    <xsl:value-of select="concat(', ', ./text)"/>\\ \\n</xsl:template>\\ \\n\\ \\n</xsl:transform>

The parameter `time` must be specified as a top-level element in the XSLT program in uppercase letters. To compare the system time with another time, the type must be specified.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_xslt\_parameters DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xslt\_parameters IMPLEMENTATION. \\n METHOD main. \\n DATA xml\_result TYPE string. \\n DATA(doc\_time) = cl\_demo\_date\_time=>get\_system\_time( ). \\n DATA time LIKE doc\_time. \\n\\ \\n FINAL(xml\_source) = \`\` && \\n \`\` && \\n \`XML!\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION demo\_xslt\_parameters \\n PARAMETERS time = doc\_time \\n SOURCE XML xml\_source \\n RESULT XML xml\_result. \\n\\ \\n out->write( xml\_result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_xslt\_parameters DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xslt\_parameters IMPLEMENTATION. \\n METHOD main. \\n DATA xml\_result TYPE string. \\n DATA(doc\_time) = cl\_demo\_date\_time=>get\_system\_time( ). \\n DATA time LIKE doc\_time. \\n\\ \\n FINAL(xml\_source) = \`\` && \\n \`\` && \\n \`XML!\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION demo\_xslt\_parameters \\n PARAMETERS time = doc\_time \\n SOURCE XML xml\_source \\n RESULT XML xml\_result. \\n\\ \\n out->write( xml\_result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt.html abenxslt\_abexas.html