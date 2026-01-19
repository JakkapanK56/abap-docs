---
title: "ABAPCLASS_SHORTREF"
description: |
  ABAPCLASS_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLASS_SHORTREF.htm"
abapFile: "ABAPCLASS_SHORTREF.html"
keywords: ["if", "method", "class", "data", "ABAPCLASS", "SHORTREF"]
---

[Reference](ABAPCLASS_DEFINITION.html)

`CLASS class DEFINITION [INHERITING FROM superclass]\ [ABSTRACT]\ [FINAL]\ [CREATE \{PUBLIC|PROTECTED|PRIVATE\}]\ [SHARED MEMORY ENABLED]\ [FOR BEHAVIOR OF bdef]\ [FOR TESTING [RISK LEVEL \{CRITICAL|DANGEROUS|HARMLESS\}]\ [DURATION \{SHORT|MEDIUM|LONG\}]\ ]\ [[GLOBAL] FRIENDS [class1 class2 ...]\ [intf1 intf2 ...]\ ]. [PUBLIC SECTION. [components]]\ [PROTECTED SECTION. [components]]\ [PRIVATE SECTION. [components]]\ ENDCLASS.`

`CLASS class IMPLEMENTATION. implementations ENDCLASS.`

Declares and implements a class `class`. In the declaration part, the components `components` of a class are declared in the [visibility sections](ABENVISIBILITY_SECTION_GLOSRY.html)\\ [`PUBLIC`](ABAPPUBLIC.html), [`PROTECTED`](ABAPPROTECTED.html), and [`PRIVATE SECTION`](ABAPPRIVATE.html), using `ALIASES`, `[CLASS-]DATA`, `\ [CLASS-]METHODS`, and `[CLASS-]EVENTS`. In the implementation part, all the [concrete](ABENCONCRETE_GLOSRY.html) methods declared in the declaration part between `METHOD` and `ENDMETHOD` are implemented.

**Declaration Part**

**Implementation Part**

-   [`INHERITING FROM superclass`](ABAPCLASS_OPTIONS.html)\\
    Defines `class` as a subclass of `superclass`.
-   [`ABSTRACT`](ABAPCLASS_OPTIONS.html)\\
    Defines `class` as an abstract class, which cannot be instantiated.
-   [`FINAL`](ABAPCLASS_OPTIONS.html)\\
    Defines `class` as a final class from which subclasses cannot be derived.
-   [`CREATE \{PUBLIC|PROTECTED|PRIVATE\}`](ABAPCLASS_OPTIONS.html)\\
    Specifies whether the class `class` can be instantiated as [public](ABENPUBLIC_GLOSRY.html), [protected](ABENPROTECTED_GLOSRY.html), or in its package as [private](ABENPRIVATE_GLOSRY.html).
-   [`SHARED MEMORY ENABLED`](ABAPCLASS_OPTIONS.html)\\
    Specifies that instances of the class can be stored in [shared memory](ABENSHARED_MEMORY_GLOSRY.html).
-   [`FOR BEHAVIOR OF bdef`](ABAPCLASS_FOR_BEHAVIOR_OF.html)\\
    Defines the global class of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) for the [CDS behavior definition (BDEF)](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) specified in `bdef`.
-   [`FOR TESTING`](ABAPCLASS_FOR_TESTING.html)\\
    Defines a [test class](ABENTEST_CLASS_GLOSRY.html) for [ABAP Unit](ABENABAP_UNIT_GLOSRY.html). The additions determine the test properties.
-   [`[GLOBAL] FRIENDS [class1 class2 ...]\ [ intf2 ...]`](ABAPCLASS_OPTIONS.html)\\
    Describes other classes `class1 class2 ...` or interfaces `intf1 intf2 ...` as [friends](ABENFRIEND_GLOSRY.html), which are allowed to access all components of `class`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html