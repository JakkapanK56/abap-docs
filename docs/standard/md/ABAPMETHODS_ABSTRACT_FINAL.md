---
title: "ABAPMETHODS_ABSTRACT_FINAL"
description: |
  ABAPMETHODS_ABSTRACT_FINAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMETHODS_ABSTRACT_FINAL.htm"
abapFile: "ABAPMETHODS_ABSTRACT_FINAL.html"
keywords: ["do", "if", "method", "class", "ABAPMETHODS", "ABSTRACT", "FINAL"]
---

[Short Reference](ABAPMETHODS_SHORTREF.html)

`METHODS meth ... ABSTRACT|FINAL ...`

[1. `... ABSTRACT`](#ABAP_ADDITION_1@3@)

[2. `... FINAL`](#ABAP_ADDITION_2@3@)

The additions `ABSTRACT` and `FINAL` make an instance method abstract or final. They cannot be used in interfaces, only in classes. All instance methods can be declared as abstract except for instance constructors. The addition `FINAL` can be used in all variants of the statement `METHODS`.

The addition `ABSTRACT` defines an abstract method `meth`. The addition `ABSTRACT` is allowed only in abstract classes, not in interfaces. An abstract method is not implemented in the implementation part of its class. To implement an abstract method, it must be redefined in a [specific](ABENCONCRETE_GLOSRY.html) subclass using the addition `REDEFINITION`. Private methods cannot be redefined and can therefore not be declared as abstract.

Declaration of an abstract method of an abstract superclass and its implementation in a concrete subclass.

The addition `FINAL` defines a final method `meth`. The addition `FINAL` is allowed only in classes, not in interfaces. A final method cannot be redefined in a subclass. In final classes, all methods are automatically final and the addition `FINAL` is not allowed. An instance constructor [`constructor`](ABAPMETHODS_CONSTRUCTOR.html) is always final and `FINAL` can be specified but is not mandatory.

The final method `get_the_truth` of a superclass returns a value, which cannot be changed in a subclass. Method `get_opinion` can be redefined in a subclass, but the subclass shown here prevents the method from being redefined in subclasses.

-   Abstract methods can also be defined in classes that are both abstract and final, but they can never be implemented and therefore are not usable.
-   Methods in interfaces are always implicitly abstract, because interfaces do not contain method implementations.
-   With the exception of the instance constructor, concrete instance methods of a class can also call their abstract methods.
-   Static methods cannot be redefined, and the addition `ABSTRACT` is not allowed in their declarations.

-   Static methods cannot be redefined, and the addition `FINAL` is not allowed in their declarations.
-   The addition `FINAL` closes a path of an inheritance tree with regards to the possibility to redefine the method.

CLASS cls1 DEFINITION ABSTRACT. \\n PROTECTED SECTION. \\n METHODS meth ABSTRACT. \\nENDCLASS. \\n\\ \\nCLASS cls2 DEFINITION INHERITING FROM cls1. \\n PROTECTED SECTION. \\n METHODS meth REDEFINITION. \\nENDCLASS. \\n\\ \\nCLASS cls2 IMPLEMENTATION. \\n METHOD meth. \\n ... \\n ENDMETHOD. \\nENDCLASS. CLASS cls1 DEFINITION. \\n PUBLIC SECTION. \\n METHODS: \\n get\_the\_truth FINAL \\n RETURNING VALUE(truth) TYPE string, \\n get\_opinion \\n RETURNING VALUE(opinion) TYPE string. \\nENDCLASS. \\n\\ \\nCLASS cls2 DEFINITION INHERITING FROM cls1. \\n PUBLIC SECTION. \\n METHODS get\_opinion FINAL REDEFINITION. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS cls1 IMPLEMENTATION. \\n METHOD get\_the\_truth. \\n truth = \`The final truth\`. \\n ENDMETHOD. \\n METHOD get\_opinion. \\n opinion = \`Opinion of superclass\`. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS cls2 IMPLEMENTATION. \\n METHOD get\_opinion. \\n opinion = \`Opinion of subclass\`. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n FINAL(oref) = NEW cls2( ). \\n out->write( \\n |\\{ oref->get\_the\_truth( ) \\}\\\\n\\{ oref->get\_opinion( ) \\}| ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenmethods.html abapmethods.html