---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_XSDANY_ABEXA.htm"
abapFile: "ABENST_XSDANY_ABEXA.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "ABENST", "XSDANY", "ABEXA"]
---

The example demonstrates the mapping of XML fragments using ST.

The following transformations are called in this example:

<?sap.transform simple?>\\ \\n<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">\\ \\n  <tt:root name="ROOT"/>\\ \\n  <tt:template>\\ \\n    <node>\\ \\n      <tt:value ref="ROOT"/>\\ \\n    </node>\\ \\n  </tt:template>\\ \\n</tt:transform>

<?sap.transform simple?>\\ \\n<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">\\ \\n  <tt:root name="ROOT"/>\\ \\n  <tt:template>\\ \\n    <node tt:lax="on">\\ \\n      <tt:value ref="ROOT"/>\\ \\n    </node>\\ \\n  </tt:template>\\ \\n</tt:transform>

<?sap.transform simple?>\\ \\n<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">\\ \\n  <tt:root name="ROOT"/>\\ \\n  <tt:template>\\ \\n    <node>\\ \\n      <tt:value option="noRootAttr" ref="ROOT"/>\\ \\n    </node>\\ \\n  </tt:template>\\ \\n</tt:transform>

<?sap.transform simple?>\\ \\n<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">\\ \\n  <tt:root name="ROOT"/>\\ \\n  <tt:template>\\ \\n    <node tt:lax="on">\\ \\n      <tt:value option="noRootAttr" ref="ROOT"/>\\ \\n    </node>\\ \\n  </tt:template>\\ \\n</tt:transform>

-   `DEMO_ST_XSDANY`

-   `DEMO_ST_XSDANY_LAX`

-   `DEMO_ST_XSDANY_NO_ROOT`

-   `DEMO_ST_XSDANY_LAX_NO_ROOT`

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_st\_xsdany DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS prepare\_fragment \\n RETURNING VALUE(xml) TYPE xsdany. \\n METHODS serialize \\n IMPORTING source TYPE xsdany \\n trafo TYPE string \\n text TYPE string \\n RETURNING VALUE(result) TYPE xstring. \\n METHODS deserialize \\n IMPORTING source TYPE xstring \\n trafo TYPE string \\n text TYPE string. \\n METHODS invoke\_deserialization \\n IMPORTING source TYPE xstring \\n text TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_xsdany IMPLEMENTATION. \\n METHOD main. \\n\\ \\n FINAL(xsdstr) = prepare\_fragment( ). \\n\\ \\n FINAL(xmlstr1) = serialize( \\n source = xsdstr \\n trafo = 'DEMO\_ST\_XSDANY' \\n text = 'ST-Serialization of XML-Fragment' ). \\n FINAL(xmlstr2) = serialize( \\n source = xsdstr \\n trafo = 'DEMO\_ST\_XSDANY\_LAX' \\n text = 'Lax ST-Serialization of XML-Fragment' ). \\n FINAL(xmlstr3) = serialize( \\n source = xsdstr \\n trafo = 'DEMO\_ST\_XSDANY\_NO\_ROOT' \\n text = 'noRoot-ST-Serialization of XML-Fragment' ). \\n FINAL(xmlstr4) = serialize( \\n source = xsdstr \\n trafo = 'DEMO\_ST\_XSDANY\_LAX\_NO\_ROOT' \\n text = 'Lax noRoot-ST-Serialization of XML-Fragment' ). \\n out->line( ). \\n\\ \\n invoke\_deserialization( source = xmlstr1 \\n text = \`\` ). \\n invoke\_deserialization( source = xmlstr2 \\n text = \`lax \` ). \\n invoke\_deserialization( source = xmlstr3 \\n text = \`noRoot-\` ). \\n invoke\_deserialization( source = xmlstr4 \\n text = \`lax noRoot-\` ). \\n\\ \\n ENDMETHOD. \\n METHOD deserialize. \\n DATA result TYPE xsdany. \\n TRY. \\n out->begin\_section( text ). \\n CALL TRANSFORMATION (trafo) \\n SOURCE XML source \\n RESULT root = result \\n OPTIONS clear = 'all'. \\n IF result IS NOT INITIAL. \\n out->write\_xml( result ). \\n ELSE. \\n out->write\_text( 'Initial' ). \\n ENDIF. \\n CATCH cx\_transformation\_error. \\n out->write\_text( 'Error' ). \\n ENDTRY. \\n out->end\_section( ). \\n ENDMETHOD. \\n METHOD invoke\_deserialization. \\n deserialize( \\n EXPORTING \\n source = source \\n trafo = 'DEMO\_ST\_XSDANY' \\n text = \`ST-Deserialization of \` \\n && text && \`ST-result\` ). \\n deserialize( \\n EXPORTING \\n source = source \\n trafo = 'DEMO\_ST\_XSDANY\_LAX' \\n text = \`Lax ST-Deserialization of \` \\n && text && \`ST-result\` ). \\n deserialize( \\n EXPORTING \\n source = source \\n trafo = 'DEMO\_ST\_XSDANY\_NO\_ROOT' \\n text = \`noRoot-ST-Deserialization of \` \\n && text && \`ST-result\` ). \\n deserialize( \\n EXPORTING \\n source = source \\n trafo = 'DEMO\_ST\_XSDANY\_LAX\_NO\_ROOT' \\n text = \`Lax noRoot-ST-Deserialization of \` \\n && text && \`ST-result\` ). \\n out->line( ). \\n ENDMETHOD. \\n METHOD prepare\_fragment. \\n out->begin\_section( 'XML-Fragment' ). \\n xml = cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`\` && \\n \`\` && \\n \`Text\` && \\n \`Text1\` && \\n \`Text1\` && \\n \`\` ). \\n out->write\_xml( xml )->line( ). \\n ENDMETHOD. \\n METHOD serialize. \\n TRY. \\n out->begin\_section( text ). \\n CALL TRANSFORMATION (trafo) \\n SOURCE root = source \\n RESULT XML result. \\n out->write\_xml( result ). \\n CATCH cx\_transformation\_error. \\n out->write\_text( 'Error' ). \\n ENDTRY. \\n out->end\_section( ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_st\_xsdany DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS prepare\_fragment \\n RETURNING VALUE(xml) TYPE xsdany. \\n METHODS serialize \\n IMPORTING source TYPE xsdany \\n trafo TYPE string \\n text TYPE string \\n RETURNING VALUE(result) TYPE xstring. \\n METHODS deserialize \\n IMPORTING source TYPE xstring \\n trafo TYPE string \\n text TYPE string. \\n METHODS invoke\_deserialization \\n IMPORTING source TYPE xstring \\n text TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_xsdany IMPLEMENTATION. \\n METHOD main. \\n\\ \\n FINAL(xsdstr) = prepare\_fragment( ). \\n\\ \\n FINAL(xmlstr1) = serialize( \\n source = xsdstr \\n trafo = 'DEMO\_ST\_XSDANY' \\n text = 'ST-Serialization of XML-Fragment' ). \\n FINAL(xmlstr2) = serialize( \\n source = xsdstr \\n trafo = 'DEMO\_ST\_XSDANY\_LAX' \\n text = 'Lax ST-Serialization of XML-Fragment' ). \\n FINAL(xmlstr3) = serialize( \\n source = xsdstr \\n trafo = 'DEMO\_ST\_XSDANY\_NO\_ROOT' \\n text = 'noRoot-ST-Serialization of XML-Fragment' ). \\n FINAL(xmlstr4) = serialize( \\n source = xsdstr \\n trafo = 'DEMO\_ST\_XSDANY\_LAX\_NO\_ROOT' \\n text = 'Lax noRoot-ST-Serialization of XML-Fragment' ). \\n out->line( ). \\n\\ \\n invoke\_deserialization( source = xmlstr1 \\n text = \`\` ). \\n invoke\_deserialization( source = xmlstr2 \\n text = \`lax \` ). \\n invoke\_deserialization( source = xmlstr3 \\n text = \`noRoot-\` ). \\n invoke\_deserialization( source = xmlstr4 \\n text = \`lax noRoot-\` ). \\n\\ \\n ENDMETHOD. \\n METHOD deserialize. \\n DATA result TYPE xsdany. \\n TRY. \\n out->begin\_section( text ). \\n CALL TRANSFORMATION (trafo) \\n SOURCE XML source \\n RESULT root = result \\n OPTIONS clear = 'all'. \\n IF result IS NOT INITIAL. \\n out->write\_xml( result ). \\n ELSE. \\n out->write\_text( 'Initial' ). \\n ENDIF. \\n CATCH cx\_transformation\_error. \\n out->write\_text( 'Error' ). \\n ENDTRY. \\n out->end\_section( ). \\n ENDMETHOD. \\n METHOD invoke\_deserialization. \\n deserialize( \\n EXPORTING \\n source = source \\n trafo = 'DEMO\_ST\_XSDANY' \\n text = \`ST-Deserialization of \` \\n && text && \`ST-result\` ). \\n deserialize( \\n EXPORTING \\n source = source \\n trafo = 'DEMO\_ST\_XSDANY\_LAX' \\n text = \`Lax ST-Deserialization of \` \\n && text && \`ST-result\` ). \\n deserialize( \\n EXPORTING \\n source = source \\n trafo = 'DEMO\_ST\_XSDANY\_NO\_ROOT' \\n text = \`noRoot-ST-Deserialization of \` \\n && text && \`ST-result\` ). \\n deserialize( \\n EXPORTING \\n source = source \\n trafo = 'DEMO\_ST\_XSDANY\_LAX\_NO\_ROOT' \\n text = \`Lax noRoot-ST-Deserialization of \` \\n && text && \`ST-result\` ). \\n out->line( ). \\n ENDMETHOD. \\n METHOD prepare\_fragment. \\n out->begin\_section( 'XML-Fragment' ). \\n xml = cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`\` && \\n \`\` && \\n \`Text\` && \\n \`Text1\` && \\n \`Text1\` && \\n \`\` ). \\n out->write\_xml( xml )->line( ). \\n ENDMETHOD. \\n METHOD serialize. \\n TRY. \\n out->begin\_section( text ). \\n CALL TRANSFORMATION (trafo) \\n SOURCE root = source \\n RESULT XML result. \\n out->write\_xml( result ). \\n CATCH cx\_transformation\_error. \\n out->write\_text( 'Error' ). \\n ENDTRY. \\n out->end\_section( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_abap\_values.html abenst\_tt\_value\_elementary.html abenst\_option.html abenst\_option\_xsdany.html