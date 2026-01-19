---
title: "ABAPCLASS_DEFINITION"
description: |
  ABAPCLASS_DEFINITION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLASS_DEFINITION.htm"
abapFile: "ABAPCLASS_DEFINITION.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABAPCLASS", "DEFINITION"]
---

[Short Reference](ABAPCLASS_SHORTREF.html)

``CLASS class DEFINITION [[`class_options`](ABAPCLASS_OPTIONS.html)].``\\ 
  ``[[`PUBLIC SECTION`](ABAPPUBLIC.html).``\\ 
    ``[[`components`](ABENCLASS_COMPONENT.html)]]``\\ 
  ``[[`PROTECTED SECTION`](ABAPPROTECTED.html).``\\ 
    ``[[`components`](ABENCLASS_COMPONENT.html)]]``\\ 
  ``[[`PRIVATE SECTION`](ABAPPRIVATE.html).``\\ 
    ``[[`components`](ABENCLASS_COMPONENT.html)]]``\\ 
`ENDCLASS.`

The statement block `CLASS class DEFINITION - ENDCLASS` declares a class named `class`. [Naming conventions](ABENNAMING_CONVENTIONS.html) apply to the name `class`. The components [`components`](ABENCLASS_COMPONENT.html) of the class are declared between `CLASS` and `ENDCLASS`. Each component must be listed in a [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) after one of the statements `PUBLIC SECTION`, `PROTECTED SECTION`, or `PRIVATE SECTION` which must be specified in the order above. The class does not need to contain all the `SECTION` statements.

The [`class options`](ABAPCLASS_OPTIONS.html) additions of the statement `CLASS` can be used to publish a class globally in the class library, define an inheritance relationship, make the class abstract or final, control instantiability, and offer [friendship](ABENFRIEND_GLOSRY.html) to other classes or interfaces.

Declaration part of a class with statements for declaring [static components](ABENSTATIC_COMPONENT_GLOSRY.html) and [instance components](ABENINSTANCE_COMPONENT_GLOSRY.html).

-   The class is the smallest encapsulation unit in ABAP Objects. A method can therefore use all components of all instances of the same class in addition to the components of its own instance. An exception to this rule are subclasses that cannot access the private components of superclasses if they are not their [friends](ABENFRIEND_GLOSRY.html).
-   The declaration part of a class can only be specified in the context described under [`CLASS`](ABAPCLASS.html).

CLASS cls DEFINITION FINAL. \\n PUBLIC SECTION. \\n TYPES: \\n type1 TYPE ... \\n CLASS-DATA: \\n attr1 TYPE ... \\n ... \\n CLASS-METHODS: \\n meth1 ... \\n ... \\n CLASS-EVENTS: \\n evt1 ... \\n ... \\n DATA: \\n attr2 TYPE ... \\n ... \\n METHODS: \\n meth2 ... \\n ... \\n EVENTS: \\n evt2 ... \\n ... \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abapclass.html