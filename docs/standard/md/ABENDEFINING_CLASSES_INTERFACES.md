---
title: "ABENDEFINING_CLASSES_INTERFACES"
description: |
  ABENDEFINING_CLASSES_INTERFACES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDEFINING_CLASSES_INTERFACES.htm"
abapFile: "ABENDEFINING_CLASSES_INTERFACES.html"
keywords: ["if", "method", "class", "data", "types", "ABENDEFINING", "CLASSES", "INTERFACES"]
---

These statements are used to define classes and interfaces and their components. They can be used in any ABAP program where classes and interfaces can be defined.

`CLASS ... DEFINITION ...`\\
`...`\\
`ENDCLASS ...`

`CLASS ... IMPLEMENTATION ...`\\
`...`\\
`ENDCLASS ...`

`PUBLIC SECTION.`\\
`PROTECTED SECTION.`\\
`PRIVATE SECTION.`\\
\\
`TYPES ...`\\
\\
`INTERFACES ...`\\
`ALIASES ...`\\
\\
`CONSTANTS ...`\\
\\
`CLASS-DATA ...`\\
`DATA ...`\\
\\
`CLASS-METHODS ...`\\
`METHODS ...`\\
\\
`CLASS-EVENTS ...`\\
`EVENTS ...`

`METHOD ...`\\
`...`\\
`ENDMETHOD.`

`INTERFACE ...`\\
`...`\\
`ENDINTERFACE ...`

The same statements can be used to declare components in interfaces as in the declaration part of classes.

The components of classes or interfaces, that is, their attributes, methods, and events) are declared in their declaration parts. `TYPES` can also be used to declare local data types. `ALIASES` can be used to declare alias names for the components of implemented interfaces. In a class, all declarations must be assigned to one of the four [visibility sections](ABENVISIBILITY_SECTION_GLOSRY.html) defined by the corresponding statements.

The implementation part of a class can only contain method implementations between `METHOD - ENDMETHOD`. In methods, only the [statements for method implementations](ABENDEFINING_METHODS.html) can be used.

**No** statements other than those specified above are necessary for defining classes or interfaces and therefore no other statements are allowed between `CLASS - ENDCLASS` or `INTERFACE - ENDINTERFACE` outside of methods.

The [stricter syntax](ABENABAP_OBJECTS_STRICT.html) in ABAP Objects applies to all statements for class and interface definitions.

abenabap.html abenabap\_reference.html abenabap\_objects.html abenabap\_objects\_statements.html