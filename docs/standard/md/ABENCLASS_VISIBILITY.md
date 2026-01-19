---
title: "ABENCLASS_VISIBILITY"
description: |
  ABENCLASS_VISIBILITY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCLASS_VISIBILITY.htm"
abapFile: "ABENCLASS_VISIBILITY.html"
keywords: ["if", "method", "class", "data", "ABENCLASS", "VISIBILITY"]
---

The [declaration part](ABENDECLARATION_PART_GLOSRY.html) of a class can be split into up to three different visibility sections.

These sections define the external visibility of the [class components](ABENCLASS_COMPONENTS.html) and therefore the interfaces of the class for all users allowed by the [package concept](ABENPACKAGE_CONCEPT_GLOSRY.html). Each component of a class must be explicitly assigned to one of the visibility sections. Only the [friends](ABENFRIEND_GLOSRY.html) of a class are not affected by the associated restrictions.

The following table summarizes the visibilities of a class:

The three visibility sections form the basis for the important feature of encapsulation in ABAP Objects. When declaring a class, as few components as possible should be declared in the public section and these public components must be carefully designed. For global classes, they cannot be changed once the class has been released.

[Exploit the options of encapsulation](ABENENCAPSULATION_GUIDL.html)

The class is the smallest encapsulation unit in ABAP Objects. A method can therefore use all components of all instances of the same class, except for the components of its own class. An exception to this rule are subclasses that cannot access the private components of superclasses if they are not their [friends](ABENFRIENDS.html).

In the method `m1` of the class `c1`, reference variables of static type `c1` can be used to access the protected attribute `a11` and the private attribute `a12` of any objects of `c1`. In the method `m2` of the subclass `c2`, reference variables of static type `c1` or `c2` can similarly be used to access the protected attribute `a11`. It is not possible to access the private attribute of the superclass with either reference variable.

-   **Public visibility section**
-   All components declared in the public visibility section defined using [`PUBLIC SECTION`](ABAPPUBLIC.html) are accessible to all users as well as in the methods of all inheritors and the class itself. The public components are the interface of the class and for all its users.
-   **Protected visibility section**
-   All components declared in the protected visibility section defined using [`PROTECTED SECTION`](ABAPPROTECTED.html) are accessible in the methods of all inheritors and in the class itself. Protected components are a special interface of the class and its subclasses.
-   **Private visibility section**
-   All components declared in the private visibility section defined using [`PRIVATE SECTION`](ABAPPRIVATE.html) are only accessible in the methods of the class itself and are also not visible to the inheritors. The private components are therefore not an interface to the users of the class.

-   A subclass can generally never access the protected components of a subclass of a different branch in the inheritance hierarchy, even if they are inherited from a common superclass. This rule can only be lifted by a friendship.
-   For technical reasons a [global class](ABENGLOBAL_CLASS_GLOSRY.html) that can be part of an inheritance tree that is

-   a [subclass](ABENSUBCLASS_GLOSRY.html)
-   a non-[final](ABENFINAL_GLOSRY.html) class that is not a subclass but can be a [superclass](ABENSUPERCLASS_GLOSRY.html)

-   must contain the statements [`PROTECTED SECTION`](ABAPPROTECTED.html) and [`PRIVATE SECTION`](ABAPPRIVATE.html) also for empty protected and private sections.

CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n METHODS m1. \\n PROTECTED SECTION. \\n DATA a11 TYPE i. \\n PRIVATE SECTION. \\n DATA a12 TYPE i. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD m1. \\n\\ \\n DATA lref1 TYPE REF TO c1. \\n\\ \\n lref1->a11 = 0. "OK \\n\\ \\n lref1->a12 = 0. "OK \\n\\ \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION INHERITING FROM c1. \\n PUBLIC SECTION. \\n METHODS m2. \\nENDCLASS. \\n\\ \\nCLASS c2 IMPLEMENTATION. \\n METHOD m2. \\n\\ \\n DATA: lref1 TYPE REF TO c1, \\n lref2 TYPE REF TO c2. \\n\\ \\n lref1->a11 = 0. "OK \\n\\ \\n lref2->a11 = 0. "OK \\n\\ \\n "lref1->a12 = 0. "Syntax error, access to a11 not allowed \\n\\ \\n "lref2->a12 = 0. "Syntax error, a12 is not visible \\n\\ \\n ENDMETHOD. \\nENDCLASS. **Visible for** `PUBLIC SECTION` `PROTECTED SECTION` `PRIVATE SECTION` Same class and its friends X X X Any subclasses X X - Any repository objects X - - abenabap.html abenabap\_reference.html abenabap\_objects.html abenclasses.html abenclass\_components.html