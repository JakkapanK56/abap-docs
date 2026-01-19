---
title: "ABENNEWS-610-OBJECTS"
description: |
  ABENNEWS-610-OBJECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-610-OBJECTS.htm"
abapFile: "ABENNEWS-610-OBJECTS.html"
keywords: ["select", "if", "method", "class", "data", "types", "ABENNEWS", "610", "OBJECTS"]
---

[1\. Dynamic Access: Dynamic Access to Object Attributes](#ABAP_MODIFICATION_1@4@)

[2. `CALL METHOD` Optional when Calling Methods](#ABAP_MODIFICATION_2@4@) 

[3\. Friends - Friendship Between Classes](#ABAP_MODIFICATION_3@4@)

[4\. New Additions for Implementing Interfaces](#ABAP_MODIFICATION_4@4@)

[5\. Pass by Parameter in Dynamic Instantiations](#ABAP_MODIFICATION_5@4@)

[6\. Object Transactions](#ABAP_MODIFICATION_6@4@)

[7\. Enhanced Syntax for Interfaces](#ABAP_MODIFICATION_7@4@)

[8\. Enhanced Syntax for Event Handling](#ABAP_MODIFICATION_8@4@)

[9\. Enhanced Syntax in the Instance Constructor of Subclasses](#ABAP_MODIFICATION_9@4@)

[10\. Dynamic Access to Interface Constants](#ABAP_MODIFICATION_10@4@)

The following variants of the statement [`ASSIGN`](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html) make it possible to access the attributes of classes dynamically:

The attribute search is first carried out for the static type. If the search was unsuccessful or the attributes are not visible in the context, the system performs a search for the dynamic type.

In static method calls of the form [`CALL METHOD meth( )`](ABAPCALL_METHOD_STATIC.html), the `CALL METHOD` expression is optional. It is sufficient to simply write `meth( )`.

The [Friends](ABENFRIENDS.html) concept means that a class can offer friendship to other classes or interfaces (`GLOBAL FRIENDS` and `LOCAL FRIENDS` are possible here). These [friends](ABENFRIEND_GLOSRY.html) can then access all the components of the provider class, and can always instantiate the class. The `PROTECTED` and `PRIVATE` components always become `PUBLIC` for friends. Classes offer friendship to other classes or interfaces using the addition `FRIENDS` of the statement [`CLASS ... DEFINITION`](ABAPCLASS.html). The new concept makes the previous language construction `DATA TYPE REF TO class %_friend` obsolete.

The statement [`INTERFACES`](ABAPINTERFACES.html) has the new additions `ABSTRACT | FINAL METHODS` and `ALL METHODS ABSTRACT | FINAL`, which make it possible to make methods in the implementing class abstract or final. `DATA VALUES` is another new addition. It assigns [start values](ABENSTART_VALUE_GLOSRY.html) to interface attributes when implemented in a class.

Parameters can now be passed and classic exceptions handled in the dynamic variant [`CREATE OBJECT (class)`](ABAPCREATE_OBJECT.html).

In Transaction Maintenance, you can classify a transaction code as an object transaction (*OO transaction*). The transaction code is then linked with a global or local class of a program, either using the transaction service of [ABAP - Object Services](ABENABAP_OBJECT_SERVICES.html) for persistent objects, or using any method. When this type of transaction is called, the system loads the program linked with the class, creates an object for instance methods, and executes the method.

All the component interfaces of a compound interface are handled in the same way in the interface and in the implementing class. This means that the components of inner interfaces can be accessed directly using interface references. Previously, this was only possible using class reference variables.

In previous releases, this example would have caused a syntax error with the expressions containing `i1~a1` and it would have been necessary to use aliases. In ABAP release 6.10, however, the interface component selector (~) should only be used outside classes or interfaces in exceptional circumstances.

In the statement [`SET HANDLER`](ABAPSET_HANDLER.html), the system now checks the exact type of the reference variable that points to a triggering object. The type must be of the same class or subclass as the one specified in the declaration of [event handlers](ABENEVENT_HANDLER_GLOSRY.html) as [`METHODS`](ABAPMETHODS.html) after `FOR EVENT evt OF`. This means objects of superclasses cannot be registered, even if the event was inherited from a superclass. If an interface has been declared after `FOR EVENT evt OF`, the type of the reference variable must either be the interface itself, a class or subclass that implements the interface, or another interface that contains the interface as a component.

From ABAP release 6.10 onwards, the type of the implicit event parameter `sender` (which can be imported by a handler method and passed using [`RAISE EVENT`](ABAPRAISE_EVENT.html)) is determined using the class or interface specified in the declaration of the event handler (after the addition `FOR EVENT OF` of the statement [`METHODS`](ABAPMETHODS.html)). In previous releases, the type was determined by the class or interface where the event was declared using [`EVENTS`](ABAPEVENTS.html).

In the instance constructor of subclasses, the constructor of the superclass must always be called using `[CALL METHOD] super->constructor`, even if this superclass was not explicitly defined there. Direct subclasses of the root class `OBJECT` are the only exception. This means instance constructors can be implemented in superclasses retroactively, without invalidating the subclasses. If the superclass constructor is not called, the following program produces a syntax warning in ABAP release 6.10 and higher.

Calling the superclass constructor.

Interface constants can now be accessed dynamically using `intf=>const`. To make this possible, the logic for dynamic `ASSIGN`, dynamic access, and dynamic invoke was changed so that global classes are now hidden by local types or interfaces. In previous releases, if constants were accessed using `class=>attr`, the system only searched for class names.

-   `assign oref->(f) to <fs>.`
-   `assign iref->(f) to <fs>.`
-   `assign (f1)=>(f2) to <fs>.`
-   `assign c=>(f) to <fs>.`
-   `assign (f)=>f to <fs>.`

INTERFACE i1. \\n DATA a1. \\nENDINTERFACE. \\n\\ \\nINTERFACE i2. \\n INTERFACES i1. \\n DATA a2 LIKE i1~a1. \\nENDINTERFACE. \\n\\ \\nDATA iref TYPE REF TO i2. \\n\\ \\nWRITE iref->i1~a1. CLASS c1 DEFINITION INHERITING FROM object. \\n PUBLIC SECTION. \\n ... \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n ... \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION INHERITING FROM c1. \\n PUBLIC SECTION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\nCLASS c2 IMPLEMENTATION. \\n METHOD constructor. \\n ... \\n super->constructor( ) \\n ... \\n ENDMETHOD. \\nENDCLASS. abenabap.html abennews.html abennews-6.html abennews-610.html