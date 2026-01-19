---
title: "ABENNEWS-46-OBJECTS-VERERBUNG"
description: |
  ABENNEWS-46-OBJECTS-VERERBUNG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46-OBJECTS-VERERBUNG.htm"
abapFile: "ABENNEWS-46-OBJECTS-VERERBUNG.html"
keywords: ["if", "method", "class", "ABENNEWS", "OBJECTS", "VERERBUNG"]
---

In Release 4.6A the following components are added to the core ABAP Objects functions:

[1\. Inheritance](#ABAP_MODIFICATION_1@4@)

[2\. Nested Interfaces](#ABAP_MODIFICATION_2@4@)

ABAP Objects enables [`inheritance`](ABENINHERITANCE.html). The addition `INHERITING FROM` of the statement [`CLASS class DEFINITION`](ABAPCLASS.html) can be used to derive a class from a superclass. Each subclass inherits all components from all superclasses and enables specialization by adding its own components and by using the [`REDEFINITION`](ABAPMETHODS.html) of previous methods. This makes it possible to define inheritance trees that become more and more specific from subclass to subclass, starting from the root node `OBJECT`.

The additions `ABSTRACT` and `FINAL` of the statements [`CLASS`](ABAPCLASS.html) and [`METHODS`](ABAPMETHODS.html) make it possible to define abstract and final classes and methods. Abstract classes cannot be instantiated. Abstract methods are not implemented in their class and can occur only in abstract classes. Abstract methods can be implemented in a subclass of the abstract class. Final classes cannot have any subclasses. Final methods cannot be redefined. All methods of final classes are automatically final.

Interfaces can be [nested](ABENINTERFACE_COMPOSITION.html) by specifying other interfaces as components in the definition of an interface:

[`INTERFACE i.`](ABAPINTERFACE.html)

...

[`INTERFACES: i1, i2  ...`](ABAPINTERFACES.html)

...

[`ENDINTERFACE.`](ABAPENDINTERFACE.html)

abenabap.html abennews.html abennews-4.html abennews-46a.html