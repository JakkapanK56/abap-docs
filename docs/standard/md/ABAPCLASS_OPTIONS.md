---
title: "ABAPCLASS_OPTIONS"
description: |
  ABAPCLASS_OPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLASS_OPTIONS.htm"
abapFile: "ABAPCLASS_OPTIONS.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABAPCLASS", "OPTIONS"]
---

[Short Reference](ABAPCLASS_SHORTREF.html)

 ``... [PUBLIC]\      [INHERITING FROM superclass]\      [ABSTRACT]\      [FINAL]\      [CREATE \{PUBLIC|PROTECTED|PRIVATE\}]\      [SHARED MEMORY ENABLED]\      [[`FOR TESTING`](ABAPCLASS_FOR_TESTING.html)]\      [[`FOR BEHAVIOR OF`](ABAPCLASS_FOR_BEHAVIOR_OF.html)]\      [[GLOBAL] FRIENDS class1 class2 ...                        intf1  intf2  ...] ...``

[1. `... PUBLIC`](#ABAP_ADDITION_1@3@)

[2. `... INHERITING FROM superclass`](#ABAP_ADDITION_2@3@)

[3. `... ABSTRACT`](#ABAP_ADDITION_3@3@)

[4. `... FINAL`](#ABAP_ADDITION_4@3@)

[5. `... CREATE \{PUBLIC|PROTECTED|PRIVATE\}`](#ABAP_ADDITION_5@3@)

[6. `... SHARED MEMORY ENABLED`](#ABAP_ADDITION_6@3@)

[7. `... [GLOBAL] FRIENDS class1 class2 ... intf1 intf2 ...`](#ABAP_ADDITION_7@3@)

Definition of the properties of a class. The following additions define special classes:

The addition `PUBLIC` makes the class `class` a [global class](ABENGLOBAL_CLASS_GLOSRY.html) in the class library. The addition `PUBLIC` can only be applied to one class of a [class pool](ABENCLASS_POOL_GLOSRY.html). The [Class Builder](ABENCLASS_BUILDER_GLOSRY.html) creates the class pool when a global class is created. Any class without the addition `PUBLIC` applied to it is a local class in its program.

Declaration of the global class `CL_DEMO_SPFLI`.

The addition `INHERITING FROM` is used to derive the class `class` by inheriting from the superclass `superclass` and thus to its direct subclass. The superclass `superclass` can be any non-final class that is visible at this point.

Each class can only have one superclass, but multiple direct subclasses (single inheritance). Every class without the addition `INHERITING FROM` inherits implicitly from the predefined empty and abstract class `object`. All classes in [ABAP Objects](ABENABAP_OBJECTS_GLOSRY.html) form an inheritance tree in which each class has a unique path to the root object `object`.

The class `class` inherits all components of `superclass`, without changing their visibility sections. Only the components of [public](ABENPUBLIC_GLOSRY.html) and [protected](ABENPROTECTED_GLOSRY.html) visibility sections of the superclass are visible in the subclass. The properties of the inherited components cannot be changed. In the subclass, additional components can be declared and inherited methods redefined, which means that they can be reimplemented without interface modification.

The public and protected components of all classes within a path of the inheritance tree are in the same namespace. New components in a subclass must not have the same name as a public or protected component that was inherited from the superclasses.

Subclass `cls2` inherits from a superclass `cls1`. `cls1` is an implicit subclass of the empty class `object`.

The addition `ABSTRACT` defines an abstract class `class`. No instances can be created from an abstract class. To use the instance components of an abstract class, a [concrete](ABENCONCRETE_GLOSRY.html) subclass of the class must be instantiated.

Abstract classes are not supported by the [ABAP Test Double Framework](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/804c251e9c19426cadd1395978d3f17b).

Subclass `cls2` inherits from an abstract superclass `cls1`.

The addition `FINAL` defines a final class `class`. No subclasses can be derived from a final class. All methods of a final class are implicitly final and cannot be explicitly declared as final.

In this example, an abstract class `c1` and a final class `c2` are defined, whereby `c2` inherits from `c1`. In `c2`, `m1` can be accessed but not `a1`.

The addition `CREATE` specifies the context in which the class `class` can be instantiated, that is, where the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT.html) can be executed for this class and in which visibility section the [instance constructor](ABENINSTANCE_CONSTRUCTOR_GLOSRY.html) of the class can be declared.

The instantiability of a subclass depends on the direct superclass as follows:

The statement [`METHODS constructor`](ABAPMETHODS_CONSTRUCTOR.html) used to declare the instance constructor of a local class can be specified in all [visibility sections](ABENVISIBILITY_SECTION_GLOSRY.html) that are more general than or the same as the instantiability specified in the addition `CREATE`. In global classes, the declaration is only possible in the public visibility section for technical reasons.

[Declare the instance constructor in the public visibility section.](ABENINSTANCE_CONSTRUCTOR_GUIDL.html)

The class `cls` can only be privately instantiated. The separate method `factory` is allowed to perform an instantiation and returns a reference to the generated object.

The addition `SHARED MEMORY ENABLED` defines a [shared-memory-enabled class](ABENSHM_CLASS_GLOSRY.html) whose instances can be stored in [shared memory](ABENSHARED_MEMORY_GLOSRY.html) as [shared objects](ABENSHARED_OBJECTS_GLOSRY.html).

The addition `SHARED MEMORY ENABLED` can only be specified for a subclass if all explicit superclasses are defined with this addition. Subclasses do not automatically inherit this addition from their superclasses.

Declaration of the global class `CL_DEMO_FLIGHT_LIST`. The class is shared-memory-enabled and [root class](ABENROOT_CLASS_GLOSRY.html) of the [area](ABENAREA_GLOSRY.html)\\ `CL_DEMO_FLIGHTS`, which is managed in transaction `SHMA`.

The addition `FRIENDS` makes the classes `class1 class2 ...` or the interfaces `intf1 intf2 ...` into [friends](ABENFRIENDS.html) of the class `class`. At the same time, all subclasses of `class1 class2 ...`, all classes that implement one of the interfaces `intf1 intf2 ...`, and all interfaces that contain one of the interfaces `intf1 intf2 ...` as a component interface become friends of the class `class`. At least one class or one interface must be specified.

The [friends](ABENFRIEND_GLOSRY.html) of a class have unrestricted access to all components of the class, regardless of the [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) or the addition [`READ-ONLY`](ABAPDATA_OPTIONS.html), and can create instances of the class without any restrictions.

The friends of `class` are not automatically made friends of the subclasses of `class`. The addition `FRIENDS` does not make the class `class` a friend of its friends.

Without the addition `GLOBAL`, all classes and interfaces that are visible at this point can be specified for `class1 class2...` and `intf1 intf2 ...` If global classes and interfaces of the Class Library are made friends, it should be ensured that the local classes of other ABAP programs are not visible in these global classes. The components of a local class `class` cannot be accessed statically by these friends.

The addition `GLOBAL` is only allowed if the addition `PUBLIC` is also used, namely for a global class of a [class pool](ABENCLASS_POOL_GLOSRY.html). Other global classes and interfaces from the class library can be specified after `GLOBAL FRIENDS`. This addition is created when a global class is created by [Class Builder](ABENCLASS_BUILDER_GLOSRY.html) if friends were entered on the appropriate tab.

The addition `FRIENDS` must be specified as the last addition after the other additions.

The generated [area class](ABENAREA_CLASS_GLOSRY.html)\\ `CL_DEMO_FLIGHTS` inherits from system class `CL_SHM_AREA` and make this class a friend.

In this example, the interface `i1` and therefore the implementing class `c2` are friends of the class `c1`. The class `c2` can instantiate `c1` and access its private component `a1`.

[Friendship](ABENFRIENDS_ABEXA.html)

-   [`FOR TESTING`](ABAPCLASS_FOR_TESTING.html) defines a [test class](ABENTEST_CLASS_GLOSRY.html) for [ABAP Unit](ABENABAP_UNIT_GLOSRY.html).
-   [`FOR BEHAVIOR OF`](ABAPCLASS_FOR_BEHAVIOR_OF.html) defines the global class of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

-   References to public data types can only be made in the [public](ABENPUBLIC_GLOSRY.html)\\ [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of a global class.
-   Data types and constants declared in the [public](ABENPUBLIC_GLOSRY.html)\\ [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of global classes using the statements `TYPES` and `CONSTANTS` replace their declarations in [type pools](ABENTYPE_POOL_GLOSRY.html).
-   A global class is a global [object type](ABENOBJECT_TYPE_GLOSRY.html) and is in the same namespace as all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.

-   Final classes complete an inheritance tree.
-   In classes that are both abstract and final, only the static components can be used. Although instance components can be declared, they cannot be used. Specifying `ABSTRACT` and `FINAL` together, therefore, is useful only for [static classes](ABENSTATIC_CLASS_GLOSRY.html).
-   Final classes are not supported by the [ABAP Test Double Framework](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/804c251e9c19426cadd1395978d3f17b).

-   A class with the addition `CREATE PUBLIC` can be instantiated anywhere where the class is visible within the framework of the [package concept](ABENPACKAGE_CONCEPT_GLOSRY.html). `CREATE PUBLIC` is the default, i.e. not specifying the addition `CREATE ...` means the class is implicitly specified with `CREATE PUBLIC`.
-   A class with the addition `CREATE PROTECTED` can only be instantiated in methods of its subclasses, of the class itself, and of its [friends](ABENFRIEND_GLOSRY.html).
-   A class with the addition `CREATE PRIVATE` can only be instantiated in methods of the class itself or of its [friends](ABENFRIEND_GLOSRY.html). This means, in particular, that it cannot be instantiated as an inherited component of subclasses.

-   Immediate subclasses of `object`, or classes with the addition `CREATE PUBLIC` inherit the addition `CREATE PUBLIC` implicitly. All `CREATE` additions that then overwrite the inherited addition can be specified explicitly.
-   Immediate subclasses of classes with the addition `CREATE PROTECTED` inherit the addition `CREATE PROTECTED` implicitly. All `CREATE` additions that then overwrite the inherited addition can be specified explicitly.
-   Immediate subclasses of classes with the addition `CREATE PRIVATE` that are not [friends](ABENFRIEND_GLOSRY.html) of the class inherit the addition `CREATE NONE` implicitly. They cannot be instantiated and no explicit `CREATE` additions can be specified. Immediate subclasses that are friends of the class inherit the addition `CREATE PRIVATE` implicitly. All `CREATE` additions can be specified explicitly for friends of superclasses that can be instantiated privately.

-   It is recommended that a class that can be instantiated privately is specified as a final class, since its subclasses cannot be instantiated unless they are friends of the class.
-   it is further recommended that the instance constructor of local classes is declared in the visibility section of the class that matches its instantiability, since this enables the components declared there to be used in the constructor interface.

-   The static attributes of a [shared-memory-enabled class](ABENINTERNAL_SESSION_GLOSRY.html) are handled in the same way as those of a regular class, which means they are created in the internal session of a program when the class is loaded. If different programs access the same shared objects, the static attributes of the associated classes exist multiple times and independently from each other in the programs.
-   No events can be declared or handled in a shared-memory-enabled class. The statements [`[CLASS-]`](ABAPCLASS-EVENTS.html)[`EVENTS`](ABAPEVENTS.html) and the addition [`FOR EVENT`](ABAPMETHODS_EVENT_HANDLER.html) cannot be specified in the declaration part.
-   For global shared-memory-enabled classes, the addition `SHARED MEMORY ENABLED` must be created by choosing the *shared-memory-enabled* attribute in the [Class Builder](ABENCLASS_BUILDER_GLOSRY.html). This applies in particular to the [area root class](ABENROOT_DATA_CLASS_GLOSRY.html) of an [area](ABENAREA_GLOSRY.html), which is always global.
-   This addition should be specified only if it does not cause any problems. Problems occur with [shared memory](ABENSHARED_MEMORY_GLOSRY.html) in the following cases:

-   The class has [static attributes](ABENSTATIC_ATTRIBUTE_GLOSRY.html) that store information about all the instances as a whole, such as the total number of instances.
-   The class allocates its own memory internally, for example by using kernel methods.

CLASS cl\_demo\_spfli DEFINITION \\n PUBLIC \\n FINAL \\n CREATE PUBLIC. CLASS cls1 DEFINITION. \\n ... \\nENDCLASS. \\n\\ \\nCLASS cls2 DEFINITION \\n INHERITING FROM cls1. \\n ... \\nENDCLASS. CLASS cls1 DEFINITION ABSTRACT. \\n ... \\nENDCLASS. \\n\\ \\nCLASS cls2 DEFINITION \\n INHERITING FROM cls1. \\n ... \\nENDCLASS. CLASS c1 DEFINITION ABSTRACT. \\n PROTECTED SECTION. \\n METHODS m1. \\n PRIVATE SECTION. \\n DATA a1 TYPE string VALUE \`Attribute A1 of class C1\`. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION INHERITING FROM c1 FINAL. \\n PUBLIC SECTION. \\n METHODS m2. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD m1. \\n cl\_demo\_output=>new( \\n )->write\_text( a1 \\n )->display( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS c2 IMPLEMENTATION. \\n METHOD m2. \\n m1( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA oref TYPE REF TO c2. \\n CREATE OBJECT oref. \\n oref->m2( ). \\n ENDMETHOD. \\nENDCLASS. CLASS cls DEFINITION CREATE PRIVATE. \\n PUBLIC SECTION. \\n CLASS-METHODS factory RETURNING VALUE(ref) TYPE REF TO cls. \\n ... \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD factory. \\n ref = NEW #( ). \\n ENDMETHOD. \\nENDCLASS. CLASS cl\_demo\_flight\_list DEFINITION \\n PUBLIC \\n FINAL \\n CREATE PUBLIC \\n SHARED MEMORY ENABLED. CLASS cl\_demo\_flights DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_shm\_area \\n FINAL \\n CREATE PRIVATE \\n GLOBAL FRIENDS cl\_shm\_area. INTERFACE i1. \\n ... \\nENDINTERFACE. \\n\\ \\nCLASS c1 DEFINITION CREATE PRIVATE FRIENDS i1. \\n PRIVATE SECTION. \\n DATA a1 TYPE c LENGTH 10 VALUE 'Class 1'. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES i1. \\n METHODS m2. \\nENDCLASS. \\n\\ \\nCLASS c2 IMPLEMENTATION. \\n METHOD m2. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n DATA oref TYPE REF TO c1. \\n CREATE OBJECT oref. \\n out->write\_text( oref->a1 ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abapclass.html abapclass\_definition.html