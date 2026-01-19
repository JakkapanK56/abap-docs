---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENENUM_DESERIALIZATION_ABEXA.htm"
abapFile: "ABENENUM_DESERIALIZATION_ABEXA.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "types", "ABENENUM", "DESERIALIZATION", "ABEXA"]
---

This example demonstrates how a dynamically created XML file is deserialized to an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html).

A byte string is composed in such a way that it represents an XML file in asXML format for an enumerated object of the enumerated type `size` and is deserialized as such. Any invalid entries raise an exception.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_deserialize\_enums\_v5 DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_deserialize\_enums\_v5 IMPLEMENTATION. \\n METHOD main. \\n DATA input TYPE c LENGTH 3 VALUE 'XL'. \\n cl\_demo\_input=>new( )->request( CHANGING field = input ). \\n input = to\_upper( input ). \\n\\ \\n TYPES: \\n BEGIN OF ENUM size, \\n s, m, l, xl, xxl, \\n END OF ENUM size. \\n\\ \\n FINAL(xml) = \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`\` && \\n \` \` && \\n \` \` && input && \`\` && \\n \` \` && \\n \`\` ) ##no\_text. \\n\\ \\n DATA size TYPE size. \\n TRY. \\n CALL TRANSFORMATION id \\n SOURCE XML xml \\n RESULT enum = size. \\n CATCH cx\_transformation\_error INTO FINAL(exc). \\n out->write( exc->previous->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( |Name: \\{ size \\n \\}\\\\nValue: \\{ CONV i( size ) \\}| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_deserialize\_enums\_v5 DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_deserialize\_enums\_v5 IMPLEMENTATION. \\n METHOD main. \\n DATA input TYPE c LENGTH 3 VALUE 'XL'. \\n cl\_demo\_input=>new( )->request( CHANGING field = input ). \\n input = to\_upper( input ). \\n\\ \\n TYPES: \\n BEGIN OF ENUM size, \\n s, m, l, xl, xxl, \\n END OF ENUM size. \\n\\ \\n FINAL(xml) = \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`\` && \\n \` \` && \\n \` \` && input && \`\` && \\n \` \` && \\n \`\` ) ##no\_text. \\n\\ \\n DATA size TYPE size. \\n TRY. \\n CALL TRANSFORMATION id \\n SOURCE XML xml \\n RESULT enum = size. \\n CATCH cx\_transformation\_error INTO FINAL(exc). \\n out->write( exc->previous->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( |Name: \\{ size \\n \\}\\\\nValue: \\{ CONV i( size ) \\}| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenenumerated\_types\_usage.html