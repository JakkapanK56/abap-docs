---
title: "ABENENUM_DESERIALIZATION_ABEXA"
description: |
  ABENENUM_DESERIALIZATION_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENENUM_DESERIALIZATION_ABEXA.htm"
abapFile: "ABENENUM_DESERIALIZATION_ABEXA.html"
keywords: ["if", "try", "catch", "method", "class", "data", "types", "field-symbol", "ABENENUM", "DESERIALIZATION", "ABEXA"]
---

This example demonstrates how a dynamically created XML file is deserialized to an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html).

A byte string is composed in such a way that it represents an XML file in asXML format for an enumerated object of the enumerated type `size` and is deserialized as such. Any invalid entries raise an exception.

The dynamic assignment of the name to a field symbol shown in the following also produces the required result, but requires that the enumeration type `size` is known in the current context. The XML file, on the other hand, can be deserialized into an enumeration object without static knowledge of the enumeration type.

\* Public class definition \\nCLASS cl\_demo\_deserialize\_enums DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_deserialize\_enums IMPLEMENTATION. \\n METHOD main. \\n DATA input TYPE c LENGTH 3 VALUE 'XL'. \\n cl\_demo\_input=>new( )->request( CHANGING field = input ). \\n input = to\_upper( input ). \\n\\ \\n TYPES: \\n BEGIN OF ENUM size, \\n s, m, l, xl, xxl, \\n END OF ENUM size. \\n\\ \\n FINAL(xml) = \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`\` && \\n \` \` && \\n \` \` && input && \`\` && \\n \` \` && \\n \`\` ) ##no\_text. \\n\\ \\n DATA size TYPE size. \\n TRY. \\n CALL TRANSFORMATION id \\n SOURCE XML xml \\n RESULT enum = size. \\n CATCH cx\_transformation\_error INTO FINAL(exc). \\n out->write( exc->previous->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( |Name: \\{ size \\n \\}\\\\nValue: \\{ CONV i( size ) \\}| ). \\n\\ \\n FIELD-SYMBOLS TYPE size. \\n ASSIGN (input) TO . \\n IF sy-subrc <> 0. \\n out->write( \`Wrong name\` ). \\n RETURN. \\n ENDIF. \\n ASSERT size = . \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_deserialize\_enums DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_deserialize\_enums IMPLEMENTATION. \\n METHOD main. \\n DATA input TYPE c LENGTH 3 VALUE 'XL'. \\n cl\_demo\_input=>new( )->request( CHANGING field = input ). \\n input = to\_upper( input ). \\n\\ \\n TYPES: \\n BEGIN OF ENUM size, \\n s, m, l, xl, xxl, \\n END OF ENUM size. \\n\\ \\n FINAL(xml) = \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`\` && \\n \` \` && \\n \` \` && input && \`\` && \\n \` \` && \\n \`\` ) ##no\_text. \\n\\ \\n DATA size TYPE size. \\n TRY. \\n CALL TRANSFORMATION id \\n SOURCE XML xml \\n RESULT enum = size. \\n CATCH cx\_transformation\_error INTO FINAL(exc). \\n out->write( exc->previous->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( |Name: \\{ size \\n \\}\\\\nValue: \\{ CONV i( size ) \\}| ). \\n\\ \\n FIELD-SYMBOLS TYPE size. \\n ASSIGN (input) TO . \\n IF sy-subrc <> 0. \\n out->write( \`Wrong name\` ). \\n RETURN. \\n ENDIF. \\n ASSERT size = . \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenenumerated\_types\_usage.html