---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_NOERROR_OPTION_ABEXA.htm"
abapFile: "ABENST_NOERROR_OPTION_ABEXA.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "types", "ABENST", "NOERROR", "OPTION", "ABEXA"]
---

This example demonstrates how ABAP types are mapped using invalid values.

This example passes various types of ABAP data to the transformation `DEMO_ST_NOERROR_OPTION` and provides the result for XML. The transformation applies the option [`noError`](ABENST_OPTION_FORMAT.html) to the ABAP data:

<?sap.transform simple?>\\ \\n<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">\\ \\n  <tt:root name="N"/>\\ \\n  <tt:root name="P"/>\\ \\n  <tt:root name="BOOLEAN"/>\\ \\n  <tt:root name="XSDDATE\_D"/>\\ \\n  <tt:root name="XSDTIME\_T"/>\\ \\n  <tt:root name="XSDLANGUAGE"/>\\ \\n  <tt:root name="XSDCURRCODE"/>\\ \\n  <tt:root name="XSDUNITCODE"/>\\ \\n  <tt:template>\\ \\n    <array>\\ \\n      <object>\\ \\n        <str name="n">\\ \\n          <tt:value option="noError" ref="N"/>\\ \\n        </str>\\ \\n        <str name="p">\\ \\n          <tt:value option="noError" ref="P"/>\\ \\n        </str>\\ \\n        <bool name="boolean">\\ \\n          <tt:value option="noError" ref="BOOLEAN"/>\\ \\n        </bool>\\ \\n        <str name="xsddate\_d">\\ \\n          <tt:value option="noError" ref="XSDDATE\_D"/>\\ \\n        </str>\\ \\n        <str name="xsdtime\_t">\\ \\n          <tt:value option="noError" ref="XSDTIME\_T"/>\\ \\n        </str>\\ \\n        <str name="xsdlanguage">\\ \\n          <tt:value option="noError" ref="XSDLANGUAGE"/>\\ \\n        </str>\\ \\n        <str name="xsdcurrcode">\\ \\n          <tt:value option="noError" ref="XSDCURRCODE"/>\\ \\n        </str>\\ \\n        <str name="xsdunitcode">\\ \\n          <tt:value option="noError" ref="XSDUNITCODE"/>\\ \\n        </str>\\ \\n      </object>\\ \\n    </array>\\ \\n  </tt:template>\\ \\n</tt:transform>

The transformation creates [JSON-XML](ABENJSON_XML_GLOSRY.html) to represent both XML and JSON. The example passes an invalid value to the transformation for each of the types used. If the option [`noError`](ABENST_OPTION_FORMAT.html) were not specified, each of the invalid types would raise an exception.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_st\_noerror\_option DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS call\_transformation \\n CHANGING writer TYPE REF TO cl\_sxml\_string\_writer. \\n DATA: \\n num TYPE n LENGTH 8, \\n pack TYPE p LENGTH 8, \\n boolean TYPE xsdboolean, \\n date TYPE xsddate\_d, \\n time TYPE xsdtime\_t, \\n langu TYPE xsdlanguage, \\n currcode TYPE xsdcurrcode, \\n unitcode TYPE xsdunitcode. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_noerror\_option IMPLEMENTATION. \\n METHOD main. \\n FIELD-SYMBOLS TYPE x. \\n\\ \\n FINAL(d\_placeholder) = \` 1234 \`. \\n FINAL(date\_placeholder) = 'XXXXXXXX'. \\n FINAL(time\_placeholder) = 'XXXXXX'. \\n FINAL(unitcode\_placeholder) = '§§§§§' ##STRING\_OK. \\n\\ \\n num = CONV d( d\_placeholder ). \\n pack = -1234. \\n ASSIGN pack TO CASTING. \\n REPLACE SECTION OFFSET 7 LENGTH 1 OF WITH \\n CONV xstring( '40' ) IN BYTE MODE. \\n boolean = '1'. \\n date = date\_placeholder. \\n time = time\_placeholder. \\n langu = '§' ##STRING\_OK. \\n currcode = '§§§§§' ##STRING\_OK. \\n unitcode = unitcode\_placeholder. \\n\\ \\n TRY. \\n CALL TRANSFORMATION demo\_st\_noerror\_option \\n SOURCE n = num \\n p = pack \\n boolean = boolean \\n xsddate\_d = date \\n xsdtime\_t = time \\n xsdlanguage = langu \\n xsdcurrcode = currcode \\n xsdunitcode = unitcode \\n RESULT XML FINAL(xml). \\n CATCH cx\_transformation\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write\_xml( xml ). \\n ENDMETHOD. \\n METHOD call\_transformation. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_st\_noerror\_option DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS call\_transformation \\n CHANGING writer TYPE REF TO cl\_sxml\_string\_writer. \\n DATA: \\n num TYPE n LENGTH 8, \\n pack TYPE p LENGTH 8, \\n boolean TYPE xsdboolean, \\n date TYPE xsddate\_d, \\n time TYPE xsdtime\_t, \\n langu TYPE xsdlanguage, \\n currcode TYPE xsdcurrcode, \\n unitcode TYPE xsdunitcode. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_noerror\_option IMPLEMENTATION. \\n METHOD main. \\n FIELD-SYMBOLS TYPE x. \\n\\ \\n FINAL(d\_placeholder) = \` 1234 \`. \\n FINAL(date\_placeholder) = 'XXXXXXXX'. \\n FINAL(time\_placeholder) = 'XXXXXX'. \\n FINAL(unitcode\_placeholder) = '§§§§§' ##STRING\_OK. \\n\\ \\n num = CONV d( d\_placeholder ). \\n pack = -1234. \\n ASSIGN pack TO CASTING. \\n REPLACE SECTION OFFSET 7 LENGTH 1 OF WITH \\n CONV xstring( '40' ) IN BYTE MODE. \\n boolean = '1'. \\n date = date\_placeholder. \\n time = time\_placeholder. \\n langu = '§' ##STRING\_OK. \\n currcode = '§§§§§' ##STRING\_OK. \\n unitcode = unitcode\_placeholder. \\n\\ \\n TRY. \\n CALL TRANSFORMATION demo\_st\_noerror\_option \\n SOURCE n = num \\n p = pack \\n boolean = boolean \\n xsddate\_d = date \\n xsdtime\_t = time \\n xsdlanguage = langu \\n xsdcurrcode = currcode \\n xsdunitcode = unitcode \\n RESULT XML FINAL(xml). \\n CATCH cx\_transformation\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write\_xml( xml ). \\n ENDMETHOD. \\n METHOD call\_transformation. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_abap\_values.html abenst\_tt\_value\_elementary.html abenst\_option.html abenst\_option\_format.html