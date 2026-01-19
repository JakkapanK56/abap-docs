---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_REGIME_OPTION_ABEXA.htm"
abapFile: "ABENST_REGIME_OPTION_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENST", "REGIME", "OPTION", "ABEXA"]
---

The example demonstrates the representation of ABAP types when using regimes.

This example passes various types of ABAP data to the transformation `DEMO_ST_REGIME_OPTION` and displays the result for XML and [JSON](ABENABAP_JSON.html). The transformation applies the option [`regime`](ABENST_OPTION_FORMAT.html) to the ABAP data:

<?sap.transform simple?>\\ \\n<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">\\ \\n  <tt:root name="TIME"/>\\ \\n  <tt:root name="BOOLEAN"/>\\ \\n  <tt:root name="NUMTEXT"/>\\ \\n  <tt:template>\\ \\n    <array>\\ \\n      <object>\\ \\n        <str name="TIME">\\ \\n          <tt:value ref="TIME"/>\\ \\n        </str>\\ \\n        <str name="regime(num) for TIME">\\ \\n          <tt:value option="regime(num)" \\n                    ref="TIME"/>\\ \\n        </str>\\ \\n        <str name="regime(num),decimals(2) for TIME">\\ \\n          <tt:value option="regime(num),decimals(2)" \\n                    ref="TIME"/>\\ \\n        </str>\\ \\n        <str name="BOOLEAN">\\ \\n          <tt:value ref="BOOLEAN"/>\\ \\n        </str>\\ \\n        <str name="regime(char) for BOOLEAN">\\ \\n          <tt:value option="regime(char)" \\n                    ref="BOOLEAN"/>\\ \\n        </str>\\ \\n        <str name="regime(char),format(boolean) for BOOLEAN">\\ \\n          <tt:value option="regime(char),format(boolean)" \\n                    ref="BOOLEAN"/>\\ \\n        </str>\\ \\n        <str name="NUMTEXT">\\ \\n          <tt:value ref="NUMTEXT"/>\\ \\n        </str>\\ \\n        <str name="regime(bin) for NUMTEXT">\\ \\n          <tt:value option="regime(bin)" \\n                    ref="NUMTEXT"/>\\ \\n        </str>\\ \\n        <str name="regime(bin),format(uri1) for NUMTEXT">\\ \\n          <tt:value option="regime(bin),format(uri1)" \\n                    ref="NUMTEXT"/>\\ \\n        </str>\\ \\n      </object>\\ \\n    </array>\\ \\n  </tt:template>\\ \\n</tt:transform>

The transformation creates [JSON-XML](ABENJSON_XML_GLOSRY.html) to represent both XML and JSON. The example shows the following:

-   Source Field of Type `t`

-   Normal [asXML](ABENABAP_XSLT_ASXML_ELEMENTARY.html) representation according to the XML schema type `xsd:time`.
-   Applying `regime(num)` gives the number of days since 01.01.0001.
-   Applying `regime(num),decimals(2)` appends two decimal places.

-   Source field with reference to the special domain `XSDBOOLEAN`

-   Special representation of the value *X* in the XML schema type `xsd:boolean` as `true`.
-   Applying `regime(char)` removes the effect of the domain and `X` is represented according to the XML schema type `xsd:string`.
-   Applying `regime(char),format(boolean)` restores the representation `true`.

-   Source field of type `n` with length 3

-   Normal [asXML](ABENABAP_XSLT_ASXML_ELEMENTARY.html) representation according to the XML schema type `xsd:string (pattern [0-9]+)`.
-   Applying `regime(bin)` converts the number in the source field to its binary representation and represents it in the XML schema type `xsd:base64Binary`.
-   Applying `regime(bin),format(uri1)` represents the binary value hexadecimally and adds quotation marks and a prefix.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_st\_regime\_option DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS call\_transformation \\n CHANGING writer TYPE REF TO cl\_sxml\_string\_writer. \\n DATA: \\n time TYPE t, \\n boolean TYPE xsdboolean, \\n numtext TYPE n LENGTH 3. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_regime\_option IMPLEMENTATION. \\n METHOD main. \\n time = cl\_demo\_date\_time=>get\_user\_time( ). \\n boolean = abap\_true. \\n numtext = '255'. \\n\\ \\n out->next\_section( 'XML' ). \\n DATA(writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_xml10 ). \\n call\_transformation( CHANGING writer = writer ). \\n DATA(result) = writer->get\_output( ). \\n out->write\_xml( result \\n )->next\_section( 'JSON' ). \\n writer = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n call\_transformation( CHANGING writer = writer ). \\n result = writer->get\_output( ). \\n out->write\_json( result ). \\n ENDMETHOD. \\n METHOD call\_transformation. \\n CALL TRANSFORMATION demo\_st\_regime\_option \\n SOURCE time = time \\n boolean = boolean \\n numtext = numtext \\n RESULT XML writer. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_st\_regime\_option DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS call\_transformation \\n CHANGING writer TYPE REF TO cl\_sxml\_string\_writer. \\n DATA: \\n time TYPE t, \\n boolean TYPE xsdboolean, \\n numtext TYPE n LENGTH 3. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_regime\_option IMPLEMENTATION. \\n METHOD main. \\n time = cl\_demo\_date\_time=>get\_user\_time( ). \\n boolean = abap\_true. \\n numtext = '255'. \\n\\ \\n out->next\_section( 'XML' ). \\n DATA(writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_xml10 ). \\n call\_transformation( CHANGING writer = writer ). \\n DATA(result) = writer->get\_output( ). \\n out->write\_xml( result \\n )->next\_section( 'JSON' ). \\n writer = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n call\_transformation( CHANGING writer = writer ). \\n result = writer->get\_output( ). \\n out->write\_json( result ). \\n ENDMETHOD. \\n METHOD call\_transformation. \\n CALL TRANSFORMATION demo\_st\_regime\_option \\n SOURCE time = time \\n boolean = boolean \\n numtext = numtext \\n RESULT XML writer. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_abap\_values.html abenst\_tt\_value\_elementary.html abenst\_option.html abenst\_option\_format.html