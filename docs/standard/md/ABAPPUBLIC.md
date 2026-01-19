---
title: "ABAPPUBLIC"
description: |
  ABAPPUBLIC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPUBLIC.htm"
abapFile: "ABAPPUBLIC.html"
keywords: ["method", "class", "ABAPPUBLIC"]
---

[Short Reference](ABAPCLASS_SHORTREF.html)

`PUBLIC SECTION.`

This statement can only be used in the [declaration part](ABAPCLASS_DEFINITION.html) of a class and defines the public [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of the class `class`. All components of the class that are declared in the area after the statement `PUBLIC SECTION` can be addressed from outside the class, in their subclasses, and in the class itself, provided this is allowed by the [package concept](ABENPACKAGE_CONCEPT_GLOSRY.html). Public methods in particular can be redefined in subclasses.

Declaration of a public constant `const` and accesses it from outside of the class.

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n CONSTANTS const TYPE string VALUE \`I'm public\`. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n out->write( cls=>const ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abapclass.html abapclass\_definition.html