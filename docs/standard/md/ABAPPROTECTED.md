---
title: "ABAPPROTECTED"
description: |
  ABAPPROTECTED - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPROTECTED.htm"
abapFile: "ABAPPROTECTED.html"
keywords: ["do", "if", "method", "class", "data", "field-symbol", "ABAPPROTECTED"]
---

[Short Reference](ABAPCLASS_SHORTREF.html)

`PROTECTED SECTION.`

This statement can only be used in the [declaration part](ABAPCLASS_DEFINITION.html) of a class and defines the protected [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of the class `class`.

All components of the class that are declared in the area behind the statement `PROTECTED SECTION` can be addressed directly only in the subclasses of the class and in the class itself, as well as its [friends](ABENFRIEND_GLOSRY.html), if allowed by the [package concept](ABENPACKAGE_CONCEPT_GLOSRY.html). In particular, protected methods in subclasses can be redefined.

Declaration of a protected constant `const` in a superclass `cls1` and its use as a start value of a public attribute of a subclass `cls2`.

-   The class is the smallest encapsulation unit in ABAP Objects. Therefore a method can use all protected components of all instances of its class besides the protected components of its own class.
-   In subclasses, it is not possible to access the protected components of superclasses using reference variables of the type of the superclass, because otherwise an attribute of an object of the dynamic type of the superclass or another subclass could be changed. However, the latter only produces a warning from the extended syntax check.
-   A subclass cannot access the protected components of a subclass of a different branch of the inheritance hierarchy inherited from a shared superclass.
-   The declaration of attributes in the protected section does not prevent methods in subclasses or in the class itself from passing [references](ABENREFERENCE_GLOSRY.html) to these attributes in the form of [reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html) or [field symbols](ABENFIELD_SYMBOL_GLOSRY.html), so that the attributes become visible and modifiable outside the protected section.
-   For technical reasons a [global class](ABENGLOBAL_CLASS_GLOSRY.html) that can be part of an inheritance tree that is

-   a [subclass](ABENSUBCLASS_GLOSRY.html)
-   a non-[final](ABENFINAL_GLOSRY.html) class that is not a subclass but can be a [superclass](ABENSUPERCLASS_GLOSRY.html)

-   must contain the statement `PROTECTED SECTION` also for an empty protected section.

CLASS cls1 DEFINITION. \\n PROTECTED SECTION. \\n CONSTANTS const TYPE string VALUE \`I'm protected\`. \\nENDCLASS. \\n\\ \\nCLASS cls2 DEFINITION INHERITING FROM cls1. \\n PUBLIC SECTION. \\n CLASS-DATA attr TYPE string VALUE cls1=>const. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n out->write( cls2=>attr ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abapclass.html abapclass\_definition.html