---
title: "ABAPCREATE_DATA_REFERENCE"
description: |
  ABAPCREATE_DATA_REFERENCE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCREATE_DATA_REFERENCE.htm"
abapFile: "ABAPCREATE_DATA_REFERENCE.html"
keywords: ["if", "case", "method", "class", "data", "types", "ABAPCREATE", "DATA", "REFERENCE"]
---

`CREATE DATA dref```\ [`area_handle`]``\\ 
                 `TYPE REF TO \{type|(name)\}.`

The addition `TYPE REF TO` is used by the statement `CREATE DATA` to create a reference variable. The static type of the reference variable can be specified either directly as `type` or dynamically in `name`.

When `type` is specified, the same rules apply as to the definition of reference types using the statement [`TYPES`](ABAPTYPES.html). For data reference variables, either the generic type `data` or a completely specified data type can be specified. For object reference variables, either a class or an interface can be specified.

For `name`, a character-like field can be specified that must contain the name of a class, an interface, or a data type when the statement is executed. The name of the reference type in `name` can also be specified as an [absolute type name](ABENABSOLUTE_TYPENAME_GLOSRY.html).

Object types in `name` can also be specified dynamically in lowercase letters.

Creation of an anonymous data object as reference variable of the static type of a class. The dereferenced reference variable can be used to create an object of the class and to access its components.

[Creating Reference Variables](ABENCREATE_REFERENCE_ABEXA.html)

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n DATA attr TYPE string VALUE \`Oh my ...\`. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n TYPES reftype TYPE REF TO cls. \\n DATA dref TYPE REF TO reftype. \\n CREATE DATA dref TYPE REF TO cls. \\n CREATE OBJECT dref->\*. \\n out->write( dref->\*->attr ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_data.html