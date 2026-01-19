---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENST_PROGRAM_ABEXA.htm"
abapFile: "ABENST_PROGRAM_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENST", "PROGRAM", "ABEXA"]
---

Symmetrical serialization and deserialization of a nested structure.

The called transformation `DEMO_ST_PROGRAM` shows the principal structure of an ST program:

<?sap.transform simple?>\\ \\n<tt:transform template="tmpl1" \\n  xmlns:tt="http://www.sap.com/transformation-templates">\\ \\n  <tt:root name="ROOT1"/>\\ \\n  <tt:root name="ROOT2"/>\\ \\n  <tt:template name="tmpl1">\\ \\n    <X0>\\ \\n      <X1>\\ \\n        <tt:value ref="ROOT1" />\\ \\n      </X1>\\ \\n      <X2>\\ \\n        <tt:value ref="ROOT2" />\\ \\n      </X2>\\ \\n    </X0>\\ \\n  </tt:template>\\ \\n</tt:transform>

The only template `tmpl1` is defined as the [main template](ABENST_TT_TEMPLATE_MAIN.html). Two [data roots](ABENST_TT_ROOT.html), `ROOT1` and `ROOT2`, are declared. The template contains two subelements, `X1` and `X2` of an element `X0`, which are given the values of the data roots in serializations or whose values are given to the data roots in deserializations using the statement [`tt:value`](ABENST_TT_VALUE_ELEMENTARY.html). After the deserialization, `result1` and `result2` have the same content as `source1` and `source2`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_st\_program DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_program IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( \`Serialization\` ). \\n DATA source1(10) TYPE c VALUE 'Field1'. \\n DATA source2(10) TYPE c VALUE 'Field2'. \\n CALL TRANSFORMATION demo\_st\_program \\n SOURCE root1 = source1 \\n root2 = source2 \\n RESULT XML FINAL(xml). \\n out->write\_xml( xml ). \\n\\ \\n out->next\_section( \`Deserialization\` ). \\n DATA result1 LIKE source1. \\n DATA result2 LIKE source1. \\n CALL TRANSFORMATION demo\_st\_program \\n SOURCE XML xml \\n RESULT root1 = result1 \\n root2 = result2. \\n out->write\_data( result1 \\n )->write\_data( result2 ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_st\_program DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_st\_program IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( \`Serialization\` ). \\n DATA source1(10) TYPE c VALUE 'Field1'. \\n DATA source2(10) TYPE c VALUE 'Field2'. \\n CALL TRANSFORMATION demo\_st\_program \\n SOURCE root1 = source1 \\n root2 = source2 \\n RESULT XML FINAL(xml). \\n out->write\_xml( xml ). \\n\\ \\n out->next\_section( \`Deserialization\` ). \\n DATA result1 LIKE source1. \\n DATA result2 LIKE source1. \\n CALL TRANSFORMATION demo\_st\_program \\n SOURCE XML xml \\n RESULT root1 = result1 \\n root2 = result2. \\n out->write\_data( result1 \\n )->write\_data( result2 ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_programs\_structure.html