---
title: "ABENCLASS_COMPONENT_SELECTOR"
description: |
  ABENCLASS_COMPONENT_SELECTOR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCLASS_COMPONENT_SELECTOR.htm"
abapFile: "ABENCLASS_COMPONENT_SELECTOR.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "ABENCLASS", "COMPONENT", "SELECTOR"]
---

A [static component](ABENSTATIC_COMPONENT_GLOSRY.html)\\ `comp` of a class is accessed using the following name:

`class=>comp`

No instance of the class has to be created. The symbol `=>` is the class component selector. The name `class` of a class must be to the left of the class component selector. The name `comp` of the component must be to the right of the class component selector.

The class component selector can also be used to access the data types and constants of an interface:

`intf=>type`, `intf=>const`

The name `intf` of an interface must be to the left of the class component sector. The name `type` of a data type defined using `TYPES` or a constant `const` defined using `CONSTANTS` must be to the right of the object component selector.

It is also possible to access the static components of a class using the object component selector if an instance of the class was created.

Declaration of a class `factory` and access to its static attribute`oref`.

CLASS factory DEFINITION CREATE PRIVATE. \\n PUBLIC SECTION. \\n CLASS-DATA oref TYPE REF TO factory. \\n CLASS-METHODS class\_constructor. \\n METHODS do\_something. \\nENDCLASS. \\n\\ \\nCLASS factory IMPLEMENTATION. \\n METHOD class\_constructor. \\n CREATE OBJECT oref. \\n ENDMETHOD. \\n METHOD do\_something. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n ... \\n\\ \\n factory=>oref->do\_something( ). \\n\\ \\n ... \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_data\_objects.html abenoperands\_names.html