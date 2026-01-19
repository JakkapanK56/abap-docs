---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENXSLT_ABAP_ABEXA.htm"
abapFile: "ABENXSLT_ABAP_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENXSLT", "ABAP", "ABEXA"]
---

This example demonstrates how ABAP methods can be called from within a transformation.

In the ABAP class, the string defined in `xml_source` is transformed. The XSL transformation `DEMO_XSLT_ABAP` has the following form:

<xsl:transform \\n    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" \\n    xmlns:sap="http://www.sap.com/sapxsl" version="1.0">\\ \\n\\ \\n  <xsl:output indent="yes" method="xml" omit-xml-declaration="yes"/>\\ \\n\\ \\n  <xsl:strip-space elements="\*"/>\\ \\n\\ \\n  <xsl:param name="OBJECT"/>\\ \\n\\ \\n  <xsl:template match="\*">\\ \\n    <sap:call-external method="save" name="OBJECT">\\ \\n      <sap:callvalue param="ELEMENT" select="name()"/>\\ \\n      <sap:callvalue param="LINE" select="sap:line()"/>\\ \\n    </sap:call-external>\\ \\n    <xsl:apply-templates select="\*"/>\\ \\n  </xsl:template>\\ \\n\\ \\n</xsl:transform>

Using the [`sap:call-external` instruction](ABENABAP_XSLT_ABAP_CALLS.html), the ABAP method `save` is called and the values of `ELEMENT` and `LINE` are passed to the `save` method.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_xslt\_abap DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS save \\n IMPORTING element TYPE csequence \\n line TYPE numeric. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xslt\_abap IMPLEMENTATION. \\n METHOD main. \\n DATA xml\_result TYPE string. \\n\\ \\n FINAL(xml\_source) = \`\` && \\n \`\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION demo\_xslt\_abap \\n PARAMETERS object = me \\n SOURCE XML xml\_source \\n RESULT XML xml\_result. \\n\\ \\n ENDMETHOD. \\n METHOD save. \\n out->write( |This is element \\{ element \\} in line \\{ line \\}.| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_xslt\_abap DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS save \\n IMPORTING element TYPE csequence \\n line TYPE numeric. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_xslt\_abap IMPLEMENTATION. \\n METHOD main. \\n DATA xml\_result TYPE string. \\n\\ \\n FINAL(xml\_source) = \`\` && \\n \`\` && \\n \`\`. \\n\\ \\n CALL TRANSFORMATION demo\_xslt\_abap \\n PARAMETERS object = me \\n SOURCE XML xml\_source \\n RESULT XML xml\_result. \\n\\ \\n ENDMETHOD. \\n METHOD save. \\n out->write( |This is element \\{ element \\} in line \\{ line \\}.| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt.html abenxslt\_abexas.html