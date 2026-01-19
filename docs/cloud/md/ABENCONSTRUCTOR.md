---
title: "ABENCONSTRUCTOR"
description: |
  ABENCONSTRUCTOR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONSTRUCTOR.htm"
abapFile: "ABENCONSTRUCTOR.html"
keywords: ["if", "method", "class", "data", "types", "ABENCONSTRUCTOR"]
---

Constructors are special methods that produce a defined initial state for objects and classes. The state of an object or class is determined by its [instance attributes](ABENINSTANCE_ATTRIBUTE_GLOSRY.html) and [static attributes](ABENSTATIC_ATTRIBUTE_GLOSRY.html). The content of attributes can be pre-assigned statically using the addition `VALUE` of the statement `DATA`. Constructors are always necessary if the initial state of an object needs to be defined dynamically.

Like regular methods, there are two types of constructors: instance constructors and static constructors.

Special rules apply to constructors in inheritance that are not described in the following, but can be found [here](ABENINHERITANCE_CONSTRUCTORS.html).

Each class has exactly one instance constructor. This constructor is a predefined instance method of the class called `constructor`. To use the instance constructor, the method `constructor` must be declared in a visibility section of the class using the [`METHODS`](ABAPMETHODS_CONSTRUCTOR.html) statement, and implemented in the implementation part. In global classes, the instance constructor can only be declared in the public visibility section, for technical reasons. In local classes, the visibility section in which the instance constructor can be declared must be more general or equal to the instantiability defined by the addition [`CREATE`](ABAPCLASS_OPTIONS.html) of the statement [`CLASS`](ABAPCLASS.html). Here, the most specialized area is recommended. Unless it is explicitly declared, the instance constructor is an implicit method that inherits and accesses the interface of the instance constructor of the superclass.

Instance constructors are called once for each instance. They are called automatically, immediately after an instance is created using the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT.html). It is not possible to call an instance constructor directly using [`constructor( ... )`](ABAPCALL_METHOD_STATIC_SHORT.html), but see [`super->constructor( ... )`](ABAPCALL_METHOD_METH_SUPER.html) in inheritance.

An instance constructor can contain an interface with `IMPORTING` parameters and exceptions. The interface is defined using the same syntax as for regular methods in the statement [`METHODS`](ABAPMETHODS.html). The lack of output parameters shows that constructors only exist to define the state of an object and have no other function. The additions `EXPORTING` and `EXCEPTIONS` of the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT.html) are used to pass actual parameters and handle classical exceptions.

Each class has exactly one static constructor. This constructor is a predefined public [static method](ABENSTATIC_METHOD_GLOSRY.html) of the `class_constructor` class. To use the static constructor, the static method `class_constructor` must be declared in the public section of the declaration part of the class using the statement [`CLASS-METHODS`](ABAPCLASS-METHODS_CONSTRUCTOR.html) and implemented in the implementation part. The static constructor has no interface parameters and cannot raise exceptions. Unless implemented it explicitly, it is merely an empty method.

The static constructor is called once for each class and [internal session](ABENINTERNAL_SESSION_GLOSRY.html). The static constructor of a class `class` is called automatically before the class is first accessed. The class is accessed when an instance of the class is created, or a component of the class is used, apart from types and constants. It is not necessary to execute the static constructor to access a type or a constant of the class.

The static constructor is always called immediately before access, with one exception: the static constructor is called at the start of the [processing block](ABENPROCESSING_BLOCK_GLOSRY.html) in which the class is accessed, if the static variable is addressed in the first access to the class.

-   The point at which the static constructor is executed is not definitely fixed. The only guarantee is that it will be called before the class is accessed for the first time.
-   A static constructor can call static methods of its class. Such a method must be implemented accordingly and must not rely on the static constructor being fully executed.
-   The order in which the static constructors are executed depends on the program flow. Static constructors must be implemented so that they can be executed in any order.

abenabap.html abenabap\_reference.html abenabap\_objects.html abenclasses.html abenclass\_components.html