---
title: "ABENABAP_XSLT_ASXML_ENUM"
description: |
  ABENABAP_XSLT_ASXML_ENUM - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_XSLT_ASXML_ENUM.htm"
abapFile: "ABENABAP_XSLT_ASXML_ENUM.html"
keywords: ["do", "if", "case", "try", "catch", "data", "types", "ABENABAP", "XSLT", "ASXML", "ENUM"]
---

The asXML representation of [enumerated types](ABENENUM_TYPE_GLOSRY.html) is used in XSL transformations and in Simple Transformations. In both cases, the elementary values with enumerated types or the corresponding components of complex structures are converted in accordance with this mapping.

The example shows the serialization of an enumerated variable `planet` to XML. Then, the name of the value *VENUS* is replaced by `JUPITER` and the result is deserialized to `planet`. `planet` then contains the value 4. A deserialization of the XML value *earth*, on the other hand, fails, because the name must be specified in uppercase letters.

-   When an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) is serialized, it is [converted](ABENCONVERSION_ENUMERATED.html) to `string` and the result is represented in the corresponding [asXML format](ABENABAP_XSLT_ASXML_ELEMENTARY.html). The XML representation is the name of the associated [enumerated constant](ABENENUMERATED_CONSTANT_GLOSRY.html) or the component of the [enumerated structure](ABENENUMERATED_STRUCTURE_GLOSRY.html) with a maximum of 30 characters.
-   When the [enumerated variable](ABENENUMERATED_VARIABLE_GLOSRY.html) is deserialized, the XML representation must correspond to the name of an [enumerated value](ABENENUMERATED_VALUE_GLOSRY.html) of the enumerated type in uppercase letters. The enumerated variable is then assigned the enumerated value in the [base type](ABENBASE_TYPE_GLOSRY.html). If the XML representation does not correspond to a name, this results in the exception `CX_SY_CONVERSION_NO_ENUM_VALUE`, which is usually wrapped in `CX_TRANSFORMATION_ERROR`.

TYPES: \\n BEGIN OF ENUM planet, \\n mercury, \\n venus, \\n earth, \\n mars, \\n jupiter, \\n saturn, \\n uranus, \\n neptune, \\n END OF ENUM planet. \\n\\ \\nDATA planet TYPE planet VALUE venus. \\n\\ \\nFINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(xml) = \`\`. \\nCALL TRANSFORMATION id SOURCE planet = planet \\n RESULT XML xml. \\nout->write\_xml( xml ). \\n\\ \\nREPLACE \`VENUS\` IN xml WITH \`JUPITER\` RESPECTING CASE. \\nTRY. \\n CALL TRANSFORMATION id SOURCE XML xml \\n RESULT planet = planet. \\n out->write( planet ). \\n CATCH cx\_transformation\_error INTO DATA(exc). \\n out->write( exc->previous->get\_text( ) ). \\nENDTRY. \\n\\ \\nREPLACE \`JUPITER\` IN xml WITH \`earth\` RESPECTING CASE. \\nTRY. \\n CALL TRANSFORMATION id SOURCE XML xml \\n RESULT planet = planet. \\n out->write( planet ). \\n CATCH cx\_transformation\_error INTO exc. \\n out->write( exc->previous->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenabap\_xslt\_asxml\_named.html