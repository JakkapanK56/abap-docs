---
title: "ABENLOCAL_TYPE_GLOB_CLASS_GUIDL"
description: |
  ABENLOCAL_TYPE_GLOB_CLASS_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOCAL_TYPE_GLOB_CLASS_GUIDL.htm"
abapFile: "ABENLOCAL_TYPE_GLOB_CLASS_GUIDL.html"
keywords: ["if", "method", "class", "data", "types", "ABENLOCAL", "TYPE", "GLOB", "CLASS", "GUIDL"]
---

Within [class pools](ABENCLASS_POOL_GLOSRY.html), as in virtually any other ABAP program, data types, local interfaces, and local classes can be defined to ensure a better structure of the implementation of the global class. From a technical point of view, these optional declaration parts, together with the declaration part of the global class, form the global declaration part of the [class pool](ABENGLOBAL_DECLAR_GUIDL.html).

These local declarations in a class pool are invisible outside the class pool, which means they can only be used as followed:

These two usage types have different technical visibility requirements because friends of a global class have access to its private visibility section. Local type declarations that are used in the `PRIVATE SECTION` must therefore be accessible for any possible friends of the class, whereas those type declarations that are only used within the method implementations are completely meaningless for other classes.

In general, local classes consist of the declaration part and the associated method implementations. These are invisible to the friends of the global class and have thus technically the same visibility requirements as local type declarations that are only used within the implementation.

Local data types, interfaces, and classes within a class pool are saved in dedicated include programs. The following two areas are distinguished:

These areas match the different technical visibility requirements. The internal names of the include programs end with `CCDEF` or `CCIMP`, which is why they are also known as [CCDEF includes](ABENCCDEF_GLOSRY.html) and [CCIMP includes](ABENCCIMP_GLOSRY.html).

**Position local declarations appropriately**

Position the local declarations of a class pool at appropriate positions depending on the requirements. Types that are only used within the implementation of the global class belong to a different position than types that are also addressed in the `PRIVATE SECTION` of the global class.

From the perspective of a class pool, all local type definitions and the associated implementations of local classes can be saved in the [CCDEF include](ABENCCDEF_GLOSRY.html). However, such an approach is disadvantageous from the dependency management perspective. Dependent classes (subclasses and friends of the global class) only have to be invalidated for changes to the local type declarations of a class pool that are used in the `PRIVATE SECTION` of the global class. But technically speaking, this invalidation occurs for all changes in the [CCDEF include](ABENCCDEF_GLOSRY.html). For this reason, the additional [CCIMP include](ABENCCIMP_GLOSRY.html) exists which is intended for local type declarations that are only used within the class implementation of the global class, and for the implementation part of local classes. If this area is changed, dependent classes are not invalidated.

To prevent unnecessary new generations of other classes that are based on unwanted technical dependencies, the class-local types must be defined in the class pool at the appropriate positions after changes have been made to the global class:

Declarations and implementations of a local class are only supposed to be distributed across the CCDEF include and the CCIMP include if they are to be referenced in the `PRIVATE SECTION`. However, if the local class is only used within the implementation of the global class, both the declaration and the implementation are to be carried out in the CCIMP include.

The rule specified here specializes the general rule [implement global declarations centrally](ABENGLOBAL_DECLAR_GUIDL.html) with respect to class pools. They are especially oriented toward the external call of methods of their respective global class and are therefore particularly integrated within a dependency network. For this reason, the rule just mentioned cannot apply to its full extent.

[Test classes](ABENTEST_CLASS_GLOSRY.html) should only be created in [test includes](ABENTEST_INCLUDE_GLOSRY.html).

-   In the private visibility section (`PRIVATE SECTION`) of the declarations in the global class
-   Within the method implementations in the global class

-   *Class-relevant local definitions*
-   *Local definitions and implementations* (*Local types* in [ADT](ABENADT_GLOSRY.html)).

-   All types used only within the method implementations of the global class should be declared in the [CCIMP include](ABENCCIMP_GLOSRY.html). The local classes should be implemented here as well.
-   Only those types that can also be referenced in the `PRIVATE SECTION` should be defined in the [CCDEF include](ABENCCDEF_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenarchitecture\_gdl.html abenobj\_oriented\_gdl.html