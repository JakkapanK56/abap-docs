---
title: "ABENABAP_ASJSON_ABAP_TYPES_ENUM"
description: |
  ABENABAP_ASJSON_ABAP_TYPES_ENUM - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_ASJSON_ABAP_TYPES_ENUM.htm"
abapFile: "ABENABAP_ASJSON_ABAP_TYPES_ENUM.html"
keywords: ["do", "if", "case", "data", "types", "internal-table", "ABENABAP", "ASJSON", "ABAP", "TYPES", "ENUM"]
---

The asJSON representation of [enumerated types](ABENENUM_TYPE_GLOSRY.html) corresponds to their [asXML representation](ABENABAP_XSLT_ASXML_ENUM.html). This means that, in asJSON, the content of an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) is represented by the uppercase name of the [enumerated value](ABENENUMERATED_VALUE_GLOSRY.html) with a maximum of 30 characters, and this value is represented as a character-like [elementary data object](ABENABAP_ASJSON_ABAP_TYPES_ELEM.html).

Serialization of an internal table with enumerated values by JSON.

The output is:

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF ENUM color STRUCTURE col, \\n red, blue, green, \\n END OF ENUM color STRUCTURE col. \\n\\ \\nDATA colors TYPE SORTED TABLE OF color \\n WITH UNIQUE KEY table\_line. \\n\\ \\nDO. \\n ASSIGN col-(sy-index) TO FIELD-SYMBOL(). \\n IF sy-subrc <> 0. \\n EXIT. \\n ENDIF. \\n colors = VALUE #( BASE colors ( ) ). \\nENDDO. \\n\\ \\nFINAL(writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\nCALL TRANSFORMATION id SOURCE colors = colors \\n RESULT XML writer. \\n\\ \\nout->write\_json( writer->get\_output( ) ). \\n\\ \\nout->display( ). \\{ \\n "COLORS": \\n \[ \\n "RED", \\n "BLUE", \\n "GREEN" \\n \] \\n\\} abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_trafos.html abenabap\_asjson.html abenabap\_asjson\_abap\_types.html