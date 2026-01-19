---
title: "ABENINHERITANCE_INTERFACES"
description: |
  ABENINHERITANCE_INTERFACES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENINHERITANCE_INTERFACES.htm"
abapFile: "ABENINHERITANCE_INTERFACES.html"
keywords: ["if", "case", "method", "class", "ABENINHERITANCE", "INTERFACES"]
---

[Interfaces](ABENINTERFAC.html) are standalone constructs in ABAP Objects that support [polymorphism](ABENPOLYMORPHISM_GLOSRY.html) in classes. The polymorphism of interfaces is based on the fact that each class that implements an interface can implement its methods differently. All interface components look similar externally, which is why [interface reference variables](ABENINTERFACE_REF_VARIABLE_GLOSRY.html) can point to objects of all classes that implement the associated interface.

The interface concept exists completely independent of and in addition to the inheritance concept. The classes of an inheritance tree can implement any number of interfaces, but each interface can be implemented only once in each inheritance tree. This ensures that each interface component `comp` has a unique name across the entire inheritance tree `intf~icomp` and that it is contained in all subclasses starting with the class that implements it. [Interface reference variables](ABENINTERFACE_REF_VARIABLE_GLOSRY.html) that can point to a class of the inheritance tree can also point to all subclasses. Once they are implemented, interface methods are fully functioning components of a class and can be redefined in subclasses. In the case of interface methods defined as optional using [`DEFAULT`](ABAPMETHODS_DEFAULT.html), and without explicit implementation, the default behavior is applied along a path of an inheritance tree until a redefinition with explicit implementation occurs.

abenabap.html abenabap\_reference.html abenabap\_objects.html abeninheritance.html