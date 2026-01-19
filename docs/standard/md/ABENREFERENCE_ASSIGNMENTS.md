---
title: "ABENREFERENCE_ASSIGNMENTS"
description: |
  ABENREFERENCE_ASSIGNMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREFERENCE_ASSIGNMENTS.htm"
abapFile: "ABENREFERENCE_ASSIGNMENTS.html"
keywords: ["do", "data", "internal-table", "field-symbol", "ABENREFERENCE", "ASSIGNMENTS"]
---

This section discusses the assignments and special statements that set the references (pointers) contained in data references and field symbols.

When using field symbols and data references that contain references to data objects, the following should be noted:

[Use field symbols and data references in appropriate ways](ABENDYN_ACCESS_DATA_OBJ_GUIDL.html)

For the [dynamic data objects](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html) (strings, internal tables) and [boxed components](ABENBOXED_COMPONENT_GLOSRY.html) that are also managed internally using references, value semantics apply. This means that the internal administration is not visible for the developers.

-   [Setting Reference Variables](ABENSET_REFERENCES.html)
-   [Setting Field Symbols](ABENSET_FIELD_SYMBOLS.html)

-   In a regular assignment between field symbols, as in an [assignment of data objects](ABAPMOVE.html), each field symbol is handled as a dereferenced pointer ([value semantics](ABENVALUE_SEMANTICS_GLOSRY.html)).
-   In a regular assignment between data references, as in an [upcast or downcast](ABAPMOVE_CAST.html), the references are copied ([reference semantics](ABENREFERENCE_SEMANTICS_GLOSRY.html)). The corresponding rules can be found in the [assignment rules for reference variables](ABENCONVERSION_REFERENCES.html).

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html