---
title: "ABENCLASS_INTERFACE_DEFINITION"
description: |
  ABENCLASS_INTERFACE_DEFINITION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCLASS_INTERFACE_DEFINITION.htm"
abapFile: "ABENCLASS_INTERFACE_DEFINITION.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "ABENCLASS", "INTERFACE", "DEFINITION"]
---

Classes and interfaces in ABAP Objects can be defined either globally or locally.

In local classes that can only be used in a single program, it is usually sufficient to define the public interface, that is, the externally visible components, suitable for this program. However, global classes are available throughout the system, which means that its public interface can only be typed with reference to data types that are themselves visible throughout the system.

The syntax for defining classes and interfaces is essentially the same for local and global classes and interfaces. The only difference is in the addition `PUBLIC`, which makes a distinction between the global classes and interfaces and local declarations.

Classes consist of [ABAP source code](ABENABAP_SOURCE_CODE_GLOSRY.html), which is enclosed in the ABAP statements [`CLASS - ENDCLASS`](ABAPCLASS.html). A complete class definition consists of a declaration part and, if required, an implementation part.

The declaration part of a class named `class` consists of a statement block:

[`CLASS class DEFINITION.`](ABAPCLASS.html)\\ \\n  ... \\n[`ENDCLASS.`](ABAPENDCLASS.html)

It contains the declaration of all [components](ABENCLASS_COMPONENTS.html) (attributes, methods, or events) of a class. All the components of a class must be assigned explicitly to a [visibility section](ABENCLASS_VISIBILITY.html) (`PUBLIC SECTION`, `PROTECTED SECTION`, or `PRIVATE SECTION`), which defines the location from where each component can be accessed. In local classes, the declaration part belongs to the global data declarations and should therefore also be at the beginning of the program.

If methods are declared in the declaration part of a class, the class also needs an implementation part. This consists of a statement block:

[`CLASS class IMPLEMENTATION.`](ABAPCLASS.html)\\ \\n  ... \\n[`ENDCLASS.`](ABAPENDCLASS.html)

The implementation part of a class contains the implementation of all [methods](ABENMETHOD_GLOSRY.html) of this class. Methods are [procedures](ABENPROCEDURE_GLOSRY.html), which makes them processing blocks of an ABAP program. The arrangement of the implementation part in the source code is therefore irrelevant. For clarity, all the implementation parts of local classes should be listed at the end of the program, or directly after the relevant definition part. In the latter case, however, it should be ensured that subsequent non-declarative statements must then be assigned explicitly to a [processing block](ABENPROCESSING_BLOCK_GLOSRY.html) such as `START-OF-SELECTION`, so that they can be accessed.

The definition of an `intf` interface is enclosed in the following statements:

[`INTERFACE intf.`](ABAPINTERFACE.html)\\ \\n  ... \\n[`ENDINTERFACE.`](ABAPENDINTERFACE.html)

The definition contains the declaration of all components (attributes, methods, events) of the interface. In interfaces, the same components can be defined as in class definitions. The components of an interface cannot be assigned explicitly to a [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html), because interface components always expand the public area of a class in which they are implemented. Interfaces do not have an implementation part since their methods must be implemented in the classes that implement the interface.

-   Global classes and interfaces are stored centrally in the [class library](ABENCLASS_LIBRARY_GLOSRY.html) in the [repository](ABENREPOSITORY_GLOSRY.html). From a technical perspective, global classes and interfaces are defined in [class pools](ABENCLASS_POOL_GLOSRY.html) or [interface pools](ABENINTERFACE_POOL_GLOSRY.html). The global classes and interfaces are visible for all ABAP programs of an [AS ABAP](ABENAS_ABAP_GLOSRY.html). Access is managed by the package check. Global classes and interfaces are stored in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.
-   Local classes and interfaces can be defined in any programs except [interface pools](ABENINTERFACE_POOL_GLOSRY.html) and [type pools](ABENTYPE_POOL_GLOSRY.html). They can only be used statically in the defining program. Dynamic access across program boundaries is possible, but not recommended. When a class is used in an ABAP program, the system first searches for a local class, then for a global class with the specified name. Otherwise, there is no differentiation between using global and local classes or interfaces.

abenabap.html abenabap\_reference.html abenabap\_objects.html