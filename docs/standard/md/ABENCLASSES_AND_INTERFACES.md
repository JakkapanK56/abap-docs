---
title: "ABENCLASSES_AND_INTERFACES"
description: |
  ABENCLASSES_AND_INTERFACES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCLASSES_AND_INTERFACES.htm"
abapFile: "ABENCLASSES_AND_INTERFACES.html"
keywords: ["if", "class", "data", "types", "ABENCLASSES", "AND", "INTERFACES"]
---

This section describes the definition of [classes](ABENCLASS_GLOSRY.html) and [interfaces](ABENOO_INTF_GLOSRY.html) and of their components. Classes and interfaces are the basis of [ABAP Objects](ABENABAP_OBJECTS.html), the object-oriented part of the ABAP language. Classes and interfaces can be defined in ABAP programs of the following [program types](ABENPROGRAM_TYPE_GLOSRY.html):

In all other ABAP programs except type pools, local classes and interfaces can be defined for use in the program.

-   In a [class pool](ABENCLASS_POOL_GLOSRY.html), exactly one global class of the class library can be defined that can be used in all other ABAP programs. In the global declaration part of a class pool, it is possible to define local data types, classes, and interfaces for use in the class pool itself.
-   In an [interface pool](ABENINTERFACE_POOL_GLOSRY.html), exactly one global interface of the class library can be defined for use in all other ABAP programs. In the global declaration section of an interface pool, it is forbidden to define local data types, classes and interfaces. Type pools can be declared. In interface pools, no other statements are allowed outside of the global interfaces.

-   [`CLASS`](ABAPCLASS.html)
-   [`INTERFACE`](ABAPINTERFACE.html)
-   [ABAP Objects - Components in Classes and Interfaces](ABENCLASS_IFAC_COMPONENTS.html)

abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html