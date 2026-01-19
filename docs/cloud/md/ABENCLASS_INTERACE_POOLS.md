---
title: "ABENCLASS_INTERACE_POOLS"
description: |
  ABENCLASS_INTERACE_POOLS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCLASS_INTERACE_POOLS.htm"
abapFile: "ABENCLASS_INTERACE_POOLS.html"
keywords: ["do", "method", "class", "data", "types", "ABENCLASS", "INTERACE", "POOLS"]
---

Class pools and interface pools are the ABAP programs where [global classes](ABENGLOBAL_CLASS_GLOSRY.html) and [global interfaces](ABENGLOBAL_INTERFACE_GLOSRY.html) of the class library are defined. They are created in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html).

Each class pool or interface pool can only contain one global class or one global interface. The global class or global interfaces are declared using the following statements:

In addition to the declaration of the global class, a class pool can only contain the following statements:

Locally defined types, classes, and interfaces in class pools can be used in the following ways:

In addition to the declaration of the global interface, an interface pool cannot contain its own declarations or implementations.

Like any other ABAP program, class and interface pools consist of a global declaration part for declarations and an implementation part for implementations (procedures).

The [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) organize the various declarations and implementations of a class or interface pool in [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) whose names are usually not visible to the developer. Include programs exist for:

Apart from the statements listed above, no statements other than `CLASS - ENDCLASS` and `INTERFACE - ENDINTERFACE` are required and are therefore not allowed in class pools.

-   [`CLASS ... PUBLIC.` ... `ENDCLASS.`](ABAPCLASS.html)
-   [`INTERFACE ... PUBLIC.` ... `ENDINTERFACE.`](ABAPINTERFACE.html)

-   Declaration of local data types using the statement [`TYPES`](ABAPTYPES.html). These data types can be used by the global class in the private visibility section and in the implementation part.
-   Declaration of local constants using the statement [`CONSTANTS`](ABAPCONSTANTS.html). These data types can be used by the global class in the private visibility section and in the implementation part.
-   Declaration of local interfaces using the statements [`INTERFACE` ... `ENDINTERFACE`](ABAPINTERFACE.html). These can be used by the global class in the private visibility section and in the implementation part.
-   Declaration and implementation of local classes using the statements [`CLASS` ... `ENDCLASS`](ABAPCLASS.html). These can be used by the global class in the private visibility section and in the implementation part.

-   Only the methods of the global class access the local declarations and implementations in the program. These provide auxiliary methods, for example, which should not be visible in the interface of the global class. This is the most common scenario. Any changes made to local declarations in the program do not affect the interface of the global class.
-   Apart from the methods of the global class, declarations in the private visibility section of the class also refer to the local declarations in the program. This is a more unusual scenario, in which changes made to the local declarations affect the interface of the global class and [subclasses](ABENSUBCLASS_GLOSRY.html), and [friends](ABENFRIEND_GLOSRY.html) of the global class are recompiled before the next execution.

-   The global declaration part of a class pool can therefore contain the declarations of local data types, local interfaces, and local classes, in addition to the actual declaration part of the global class. The implementation part of a class pool can contain the implementation parts of local classes in addition to the implementation part of the global class.
-   The global declaration part of an interface pool can only contain the declaration of the global interface and the implementation part of an interface pool is always empty.

-   Each visibility section in the declaration part of the global class
-   Each implementation of a method of the global class
-   Local declarations and implementations ([CCIMP include](ABENCCIMP_GLOSRY.html) and [CCDEF include](ABENCCDEF_GLOSRY.html)).
-   Test classes in ABAP Unit

abenabap.html abenabap\_reference.html abenabap\_objects.html abenabap\_objects\_statements.html