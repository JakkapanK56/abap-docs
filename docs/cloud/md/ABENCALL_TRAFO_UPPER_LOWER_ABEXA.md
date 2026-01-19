---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCALL_TRAFO_UPPER_LOWER_ABEXA.htm"
abapFile: "ABENCALL_TRAFO_UPPER_LOWER_ABEXA.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "ABENCALL", "TRAFO", "UPPER", "LOWER", "ABEXA"]
---

This example demonstrates the transformation of letters in XML element names.

In deserializations of XML data to ABAP data, the XML elements to be deserialized must generally be written in uppercase letters to be identified. This example shows ways of transforming elements written in other ways using user-defined XSL transformations.

Instead of transformations, parsers and renderers can be used, as demonstrated in the executable example for [JSON](ABENABAP_JSON_NAMES_TO_UPPER_ABEXA.html). The serial processing used here can be useful when dealing with large volumes of data.

The transformations used are as follows:

**`DEMO_ID_UPPER_LOWER`**

<xsl:transform version="1.0" \\n  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" \\n  xmlns:sap="http://www.sap.com/sapxsl" \\n  xmlns:asx="http://www.sap.com/abapxml">\\ \\n\\ \\n  <xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'"/>\\ \\n  <xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>\\ \\n\\ \\n<xsl:param name="MODE" select="'UP'"/>\\ \\n\\ \\n<xsl:template match="\*">\\ \\n  <xsl:element name="\\{sap:if($MODE='LO', \\n         translate(name(),$uppercase, $smallcase ), \\n         translate(name(),$smallcase, $uppercase ))\\}">\\ \\n    <xsl:copy-of select="@\*"/>\\ \\n    <xsl:apply-templates select="node()"/>\\ \\n  </xsl:element>\\ \\n</xsl:template>\\ \\n\\ \\n<xsl:template match="asx:\*">\\ \\n  <xsl:copy>\\ \\n    <xsl:copy-of select="@\*"/>\\ \\n    <xsl:apply-templates select="node()"/>\\ \\n  </xsl:copy>\\ \\n</xsl:template>\\ \\n\\ \\n<xsl:template match="text() | processing-instruction() | comment()">\\ \\n  <xsl:copy/>\\ \\n</xsl:template>\\ \\n\\ \\n</xsl:transform>

**`DEMO_ID_FROM_TO_MIXED`**

<xsl:transform version="1.0" \\n  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" \\n  xmlns:sap="http://www.sap.com/sapxsl" \\n  xmlns:asx="http://www.sap.com/abapxml" \\n  xmlns:f="FCT" exclude-result-prefixes="f">\\ \\n\\ \\n<sap:external-function name="f:toCC" kind="class" \\n class="CL\_DEMO\_XSLT\_FROM\_TO\_MIXED" method="TO\_CAMEL\_CASE">\\ \\n  <sap:argument param="IN"  type="string"/>\\ \\n  <sap:result   param="OUT" type="string"/>\\ \\n</sap:external-function>\\ \\n\\ \\n<sap:external-function name="f:fromCC" kind="class" \\n class="CL\_DEMO\_XSLT\_FROM\_TO\_MIXED" method="FROM\_CAMEL\_CASE">\\ \\n  <sap:argument param="IN"  type="string"/>\\ \\n  <sap:result   param="OUT" type="string"/>\\ \\n</sap:external-function>\\ \\n\\ \\n<xsl:param name="MODE" select="'FROM'"/>\\ \\n\\ \\n\\ \\n<xsl:template match="\*">\\ \\n  <xsl:element name="\\{sap:if($MODE='TO', \\n                      f:toCC(name()), \\n                      f:fromCC(name()))\\}">\\ \\n    <xsl:copy-of select="@\*"/>\\ \\n    <xsl:apply-templates select="node()"/>\\ \\n  </xsl:element>\\ \\n</xsl:template>\\ \\n\\ \\n<xsl:template match="asx:\*">\\ \\n  <xsl:copy>\\ \\n    <xsl:copy-of select="@\*"/>\\ \\n    <xsl:apply-templates select="node()"/>\\ \\n  </xsl:copy>\\ \\n</xsl:template>\\ \\n\\ \\n<xsl:template match="text() | processing-instruction() | comment()">\\ \\n  <xsl:copy/>\\ \\n</xsl:template>\\ \\n\\ \\n</xsl:transform>

-   A structure, `simple_struc`, is serialized using different XSL transformations.

-   The [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` creates [asXML](ABENASXML_GLOSRY.html) with XML element names in uppercase letters.
-   The user-defined XSL transformation `DEMO_ID_UPPER_LOWER` transforms the XML element names created by the serialization to lowercase letters, if the correct parameter passing is used.
-   The user-defined XSL transformation `DEMO_ID_FROM_TO_MIXED` transforms the XML element names created by the serialization to Mixed Case Style (also known as Camel Case Style), if the appropriate parameter passing is used. To do this, an ABAP method is called from the transformation and this method itself calls the built-in function [`to_mixed`](ABENCASE_FUNCTIONS.html).

-   Deserializations of the transformed asXML data with the [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` do not find the structure or the components.
-   Deserializations of the transformed asXML data with the user-defined XSL transformations, on the other hand, are successful.

-   `DEMO_ID_UPPER_LOWER` also transforms lowercase letters to uppercase letters.
-   `DEMO_ID_FROM_TO_MIXED` also calls a method for [`to_mixed`](ABENCASE_FUNCTIONS.html). This simple example transformation is not, however, symmetrical in all cases.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_trafo\_upper\_lower DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_trafo\_upper\_lower IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF simple\_struc, \\n int\_col1 TYPE i VALUE 111, \\n int\_col2 TYPE i VALUE 222, \\n END OF simple\_struc. \\n\\ \\n out->begin\_section( \`Serialization\` ). \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE simple\_struc = simple\_struc \\n RESULT XML FINAL(asxml). \\n out->begin\_section( \`ID\` \\n )->write\_xml( asxml ). \\n\\ \\n CALL TRANSFORMATION demo\_id\_upper\_lower \\n PARAMETERS mode = 'LO' \\n SOURCE simple\_struc = simple\_struc \\n RESULT XML FINAL(xml\_lower). \\n out->next\_section( \`DEMO\_ID\_UPPER\_LOWER\` \\n )->write\_xml( xml\_lower ). \\n\\ \\n CALL TRANSFORMATION demo\_id\_from\_to\_mixed \\n PARAMETERS mode = 'TO' \\n SOURCE simple\_struc = simple\_struc \\n RESULT XML FINAL(xml\_camel). \\n out->next\_section( \`DEMO\_ID\_FROM\_TO\_MIXED\` \\n )->write\_xml( xml\_camel ). \\n\\ \\n\\ \\n out->end\_section( \\n )->next\_section( \`Deserialization\` ). \\n\\ \\n CLEAR simple\_struc. \\n CALL TRANSFORMATION id \\n SOURCE XML xml\_lower \\n RESULT simple\_struc = simple\_struc. \\n out->begin\_section( \`ID for XML\_LOWER\` \\n )->write( simple\_struc ). \\n\\ \\n CLEAR simple\_struc. \\n CALL TRANSFORMATION id \\n SOURCE XML xml\_camel \\n RESULT simple\_struc = simple\_struc. \\n out->next\_section( \`ID for XML\_CAMEL\` \\n )->write( simple\_struc ). \\n\\ \\n CLEAR simple\_struc. \\n CALL TRANSFORMATION demo\_id\_upper\_lower \\n SOURCE XML xml\_lower \\n RESULT simple\_struc = simple\_struc. \\n out->next\_section( \`DEMO\_ID\_UPPER\_LOWER for XML\_LOWER\` \\n )->write( simple\_struc ). \\n\\ \\n CLEAR simple\_struc. \\n CALL TRANSFORMATION demo\_id\_from\_to\_mixed \\n SOURCE XML xml\_camel \\n RESULT simple\_struc = simple\_struc. \\n out->next\_section( \`DEMO\_ID\_FROM\_TO\_MIXED for XML\_CAMEL\` \\n )->write( simple\_struc ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_trafo\_upper\_lower DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_trafo\_upper\_lower IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF simple\_struc, \\n int\_col1 TYPE i VALUE 111, \\n int\_col2 TYPE i VALUE 222, \\n END OF simple\_struc. \\n\\ \\n out->begin\_section( \`Serialization\` ). \\n\\ \\n CALL TRANSFORMATION id \\n SOURCE simple\_struc = simple\_struc \\n RESULT XML FINAL(asxml). \\n out->begin\_section( \`ID\` \\n )->write\_xml( asxml ). \\n\\ \\n CALL TRANSFORMATION demo\_id\_upper\_lower \\n PARAMETERS mode = 'LO' \\n SOURCE simple\_struc = simple\_struc \\n RESULT XML FINAL(xml\_lower). \\n out->next\_section( \`DEMO\_ID\_UPPER\_LOWER\` \\n )->write\_xml( xml\_lower ). \\n\\ \\n CALL TRANSFORMATION demo\_id\_from\_to\_mixed \\n PARAMETERS mode = 'TO' \\n SOURCE simple\_struc = simple\_struc \\n RESULT XML FINAL(xml\_camel). \\n out->next\_section( \`DEMO\_ID\_FROM\_TO\_MIXED\` \\n )->write\_xml( xml\_camel ). \\n\\ \\n\\ \\n out->end\_section( \\n )->next\_section( \`Deserialization\` ). \\n\\ \\n CLEAR simple\_struc. \\n CALL TRANSFORMATION id \\n SOURCE XML xml\_lower \\n RESULT simple\_struc = simple\_struc. \\n out->begin\_section( \`ID for XML\_LOWER\` \\n )->write( simple\_struc ). \\n\\ \\n CLEAR simple\_struc. \\n CALL TRANSFORMATION id \\n SOURCE XML xml\_camel \\n RESULT simple\_struc = simple\_struc. \\n out->next\_section( \`ID for XML\_CAMEL\` \\n )->write( simple\_struc ). \\n\\ \\n CLEAR simple\_struc. \\n CALL TRANSFORMATION demo\_id\_upper\_lower \\n SOURCE XML xml\_lower \\n RESULT simple\_struc = simple\_struc. \\n out->next\_section( \`DEMO\_ID\_UPPER\_LOWER for XML\_LOWER\` \\n )->write( simple\_struc ). \\n\\ \\n CLEAR simple\_struc. \\n CALL TRANSFORMATION demo\_id\_from\_to\_mixed \\n SOURCE XML xml\_camel \\n RESULT simple\_struc = simple\_struc. \\n out->next\_section( \`DEMO\_ID\_FROM\_TO\_MIXED for XML\_CAMEL\` \\n )->write( simple\_struc ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abapcall\_transformation.html abencall\_transformation\_abexas.html