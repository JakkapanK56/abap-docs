---
title: "ABAPMETHODS_REDEFINITION"
description: |
  ABAPMETHODS_REDEFINITION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMETHODS_REDEFINITION.htm"
abapFile: "ABAPMETHODS_REDEFINITION.html"
keywords: ["if", "method", "class", "data", "ABAPMETHODS", "REDEFINITION"]
---

[Short Reference](ABAPMETHODS_REDEFINITION_SHORTREF.html)

``METHODS meth [[`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)] REDEFINITION.``

[`... FINAL`](#ABAP_ONE_ADD@1@)

This statement is possible only in subclasses and redefines an inherited instance method `meth`. It has the effect that the method `meth` must be reimplemented in the implementation part of the subclass. The new implementation in the current class hides the implementation of the superclass. The redefined method accesses the [private](ABENPRIVATE_GLOSRY.html) components of the redefined class and not any private components of the same name in the superclass. In the redefined method, the implementation of the direct superclass can be called using [`super->meth`](ABAPCALL_METHOD_METH_SUPER.html). The redefinition is valid for the subclasses of the redefined class until the method is redefined again.

With the exception of the [instance constructor](ABAPMETHODS_CONSTRUCTOR.html), any non-final instance method declared in the [public](ABENPUBLIC_GLOSRY.html) or [protected](ABENPROTECTED_GLOSRY.html)\\ [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of a superclass of the current class can be specified for `meth`. In particular, `meth` can be an abstract method of an abstract superclass. The [redefinition](ABENREDEFINITION_GLOSRY.html) must take place in the same visibility section as the method declaration. The interface and the category of the method (a [general](ABAPMETHODS_GENERAL.html) or [functional](ABAPMETHODS_FUNCTIONAL.html)\\ [instance method](ABENINSTANCE_METHOD_GLOSRY.html) or [event handler](ABAPMETHODS_EVENT_HANDLER.html)) are not changed in a redefinition. Private methods in superclasses cannot be redefined.

A method can be redefined repeatedly along a path in the inheritance tree until the addition [`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html) is used in the redefinition. The method is then final as of the current class and can no longer be redefined in its subclasses.

In this example, the method `m1` of superclass `c1` is redefined in subclass `c2`, where the original implementation is called using `super->m1`. Both methods use the private attribute `a1` of the respective class. When called using the reference variable `oref`, which has the static type `c1` and the dynamic type `c2`, the redefined method is executed.

-   Every object reference that points to an object of a subclass, independent of its static type, addresses the redefined methods. This applies in particular to the [self-reference](ABENSELF_REFERENCE_GLOSRY.html)\\ `me->`.
-   When an [instance constructor](ABENINSTANCE_CONSTRUCTOR_GLOSRY.html) of a superclass is executed during the creation of an object, the method implementations of the superclass are always called and not the redefined methods of the subclass. Specifying the self-reference `me->` has no effect at this time.
-   In the redefinition of a method of an interface, an alias name of the class defined using [`ALIASES`](ABAPALIASES.html) can be specified for `meth`.
-   The explicit implementation can be omitted when redefining an optional interface method declared using [`DEFAULT`](ABAPMETHODS_DEFAULT.html). Instead, the default behavior defined using `DEFAULT` applies in calls from the current subclass. However, this is not recommended. The default behavior is often not as expected, particularly if an explicit implementation already exists in a preceding superclass.

CLASS output DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA out TYPE REF TO if\_demo\_output. \\n CLASS-METHODS class\_constructor. \\nENDCLASS. \\n\\ \\nCLASS output IMPLEMENTATION. \\n METHOD class\_constructor. \\n out = cl\_demo\_output=>new( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n METHODS m1 IMPORTING p1 TYPE string. \\n PRIVATE SECTION. \\n DATA a1 TYPE string VALUE \`c1: \`. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION INHERITING FROM c1. \\n PUBLIC SECTION. \\n METHODS m1 REDEFINITION. \\n PRIVATE SECTION. \\n DATA a1 TYPE string VALUE \`c2: \`. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD m1. \\n a1 &&= p1. \\n output=>out->write\_data( a1 ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS c2 IMPLEMENTATION. \\n METHOD m1. \\n super->m1( p1 ). \\n a1 &&= p1. \\n output=>out->write\_data( a1 ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA oref TYPE REF TO c1. \\n oref = NEW c2( ). \\n oref->m1( \`...\` ). \\n\\ \\n output=>out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenmethods.html abapmethods.html