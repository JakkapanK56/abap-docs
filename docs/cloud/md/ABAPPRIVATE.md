---
title: "ABAPPRIVATE"
description: |
  ABAPPRIVATE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPPRIVATE.htm"
abapFile: "ABAPPRIVATE.html"
keywords: ["do", "if", "method", "class", "data", "field-symbol", "ABAPPRIVATE"]
---

`PRIVATE SECTION.`

This statement can only be used in the [declaration part](ABAPCLASS_DEFINITION.html) of a class and defines the private [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of the class `class`. All components of the class that are declared in the area after the statement `PRIVATE SECTION` can only be addressed in the class itself and in its [friends](ABENFRIEND_GLOSRY.html).

Declaration of a private constant `const` in a class `cls1` and uses it as a start value of a public attribute of a friend `cls2`.

-   The class is the smallest encapsulation unit in ABAP Objects. Therefore, a method can use all private components of all instances of the same class, apart from the private components of its own class. An exception to this rule are subclasses that cannot access the private components of superclasses if they are not their [friends](ABENFRIEND_GLOSRY.html).
-   The declaration of attributes in the private section does not prevent methods of the class from passing [references](ABENREFERENCE_GLOSRY.html) to these attributes to the outside in the form of [reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html) or [field symbols](ABENFIELD_SYMBOL_GLOSRY.html), which makes the attributes visible and modifiable outside the private section.
-   Private components declared in a class but not used statically there produce a warning in the extended program check.
-   For technical reasons a [global class](ABENGLOBAL_CLASS_GLOSRY.html) that can be part of an inheritance tree that is

-   a [subclass](ABENSUBCLASS_GLOSRY.html)
-   a non-[final](ABENFINAL_GLOSRY.html) class that is not a subclass but can be a [superclass](ABENSUPERCLASS_GLOSRY.html)

-   must contain the statement `PRIVATE SECTION` also for an empty private section.

CLASS cls2 DEFINITION DEFERRED. \\n\\ \\nCLASS cls1 DEFINITION FRIENDS cls2. \\n PRIVATE SECTION. \\n CONSTANTS const TYPE string VALUE \`I'm private\`. \\nENDCLASS. \\n\\ \\nCLASS cls2 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA attr TYPE string VALUE cls1=>const. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n out->write( cls2=>attr ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abapclass.html abapclass\_definition.html