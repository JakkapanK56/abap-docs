---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_FORMAT_OPTION_XSDGEO_ABEXA.htm"
abapFile: "ABENST_FORMAT_OPTION_XSDGEO_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENST", "FORMAT", "OPTION", "XSDGEO", "ABEXA"]
---

This example demonstrates how the `XSDGEO` domain is mapped using formatting options.

This example passes ABAP data to the transformation `DEMO_ST_FORMAT_OPTION_GEO` and provides the result in geoJSON and XML format.

<?sap.transform simple?>\\ \\n<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">\\ \\n  <tt:root name="TOWN"/>\\ \\n  <tt:template>\\ \\n    <object>\\ \\n      <object name="Town" tt:ref="TOWN">\\ \\n          <str name = "Name">\\ \\n            <tt:value ref="NAME"/>\\ \\n          </str>\\ \\n          <object name = "Location">\\ \\n            <tt:value ref="LOCATION" option="format(geo=4326)"/>\\ \\n          </object>\\ \\n      </object>\\ \\n    </object>\\ \\n  </tt:template>\\ \\n</tt:transform>

In this example, `geo=4326` is used, which represents the WGS 84 standard representation.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_st\_format\_option\_geo DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_format\_option\_geo IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES: \\n BEGIN OF town, \\n name TYPE string, \\n location TYPE xsdgeo, \\n END OF town. \\n\\ \\n FINAL(json) = \`\\{"Town":\\{"Name":"Walldorf",\` && \\n \`"Location":\\{"type":"Point","coordinates":\[49.3063,8.6423\]\\}\\}\\}\`. \\n\\ \\n DATA walldorf TYPE town. \\n CALL TRANSFORMATION demo\_st\_format\_option\_geo \\n SOURCE XML json \\n RESULT town = walldorf. \\n\\ \\n DATA(ewkb\_walldorf) = VALUE town( \\n name = walldorf-name location = walldorf-location ). \\n\\ \\n FINAL(json\_writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n FINAL(xml\_writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_xml10 ). \\n\\ \\n CALL TRANSFORMATION demo\_st\_format\_option\_geo \\n SOURCE town = ewkb\_walldorf \\n RESULT XML json\_writer. \\n\\ \\n FINAL(json\_result) = cl\_abap\_conv\_codepage=>create\_in( )->convert( \\n json\_writer->get\_output( ) ). \\n\\ \\n out->begin\_section( \`geoJSON result\` ). \\n out->write\_json( json\_result ). \\n\\ \\n CALL TRANSFORMATION demo\_st\_format\_option\_geo \\n SOURCE town = ewkb\_walldorf \\n RESULT XML xml\_writer. \\n\\ \\n FINAL(xml\_result) = cl\_abap\_conv\_codepage=>create\_in( )->convert( \\n xml\_writer->get\_output( ) ). \\n\\ \\n out->next\_section( \`XML result\` ). \\n out->write\_xml( xml\_result ). \\n out->end\_section( ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_st\_format\_option\_geo DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_format\_option\_geo IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES: \\n BEGIN OF town, \\n name TYPE string, \\n location TYPE xsdgeo, \\n END OF town. \\n\\ \\n FINAL(json) = \`\\{"Town":\\{"Name":"Walldorf",\` && \\n \`"Location":\\{"type":"Point","coordinates":\[49.3063,8.6423\]\\}\\}\\}\`. \\n\\ \\n DATA walldorf TYPE town. \\n CALL TRANSFORMATION demo\_st\_format\_option\_geo \\n SOURCE XML json \\n RESULT town = walldorf. \\n\\ \\n DATA(ewkb\_walldorf) = VALUE town( \\n name = walldorf-name location = walldorf-location ). \\n\\ \\n FINAL(json\_writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n FINAL(xml\_writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_xml10 ). \\n\\ \\n CALL TRANSFORMATION demo\_st\_format\_option\_geo \\n SOURCE town = ewkb\_walldorf \\n RESULT XML json\_writer. \\n\\ \\n FINAL(json\_result) = cl\_abap\_conv\_codepage=>create\_in( )->convert( \\n json\_writer->get\_output( ) ). \\n\\ \\n out->begin\_section( \`geoJSON result\` ). \\n out->write\_json( json\_result ). \\n\\ \\n CALL TRANSFORMATION demo\_st\_format\_option\_geo \\n SOURCE town = ewkb\_walldorf \\n RESULT XML xml\_writer. \\n\\ \\n FINAL(xml\_result) = cl\_abap\_conv\_codepage=>create\_in( )->convert( \\n xml\_writer->get\_output( ) ). \\n\\ \\n out->next\_section( \`XML result\` ). \\n out->write\_xml( xml\_result ). \\n out->end\_section( ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_abap\_values.html abenst\_tt\_value\_elementary.html abenst\_option.html abenst\_option\_format.html