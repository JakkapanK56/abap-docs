---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTATIC_CLASS_SINGLETON_GUIDL.html"
abapFile: "ABENSTATIC_CLASS_SINGLETON_GUIDL.html"
type: "abap-reference"
---

## Background

The classes of ABAP Objects support two types of components:

-   Instance components (instance attributes, instance events and instance methods). You can only address the instance components of a class using instances of the class (objects).
-   Static components (static attributes, static events and static methods). The static components of a class can be addressed using an object and also using the name of the class. This means they can be used independently of a class instance.

A class that only contains static components and no instance components is referred to as a static class. A global static class is loaded once with its class pool into the current [internal session](ABENINTERNAL_SESSION_GLOSRY.md). Like every ABAP program, it cannot be explicitly deleted from the session. The static methods (declared using `CLASS-METHODS`) of a class cannot be redefined in subclasses.

A singleton is a design pattern where the class has the task of creating objects. The class ensures that only one object exists for every internal session that is made available to consumers.

## Rule

**Do not use static classes**

Use objects instead of static classes. If you do not want multiple instantiation, you can use singletons.

## Details

If no real object-oriented design exists that would use the multiple instantiation of classes, for example, this often produces classes that only contain static methods (declared using `CLASS-METHODS`), when [ABAP Objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md) are used. These methods are then used as simple procedures. However, even if multiple instantiation is not explicitly required, object creation is preferable to the use of static classes, for the reasons listed below. You can use the singleton design pattern to prevent multiple instantiation:

-   Explicit object creation is essential for object-oriented programming. Static classes, however, are implicitly loaded the first time they are used, and the corresponding static constructor (if available) is executed. They are persisted in the memory for as long as the current internal session exists. Therefore, if you use static classes, you cannot actually control the time of initialization. You have no way of releasing the memory occupied by the attributes, as soon as the class function is no longer required.
-   Another important argument against the use of static classes are the limited functions of the static constructor, in comparison to an instance constructor. A static constructor has no parameter interface and cannot propagate any [exceptions](ABENERROR_HANDLING_GDL.md). This is why you cannot always respond appropriately to an error situation in the static constructor, which can cause a runtime error in extreme cases. However, the exceptions of an instance constructor can be handled.
-   By using static classes, you restrict your polymorphism options, which are actually provided by object-oriented programming. On the one hand, you cannot redefine static methods. On the other hand, access is not possible using reference variables (the other pillar of polymorphism). However, it is worth keeping the option of polymorphism open:

-   Even if you initially do not plan to overwrite the behavior of a method later on using inheritance or redefinition, this is a request that frequently arises in the course of the further development.
-   When implementing unit tests with ABAP Unit, redefining the behavior of certain methods, to resolve problematic dependencies, is often unavoidable.

To keep the option of redefinition open, you should always use instance methods instead of static methods.

You can express the retrieval of a singleton object and the subsequent call of an instance method, by using the very compact form of a chained method call:

cl\_singleton=>get\_instance( )->do\_something( ).

Since an additional object reference variable and an additional factory call are omitted, there are no aesthetic disadvantages related to the use of a singleton design pattern.

## Use

Classes that only cover trivial functions can still be implemented as static classes. Here you must accurately assess whether one of the previously mentioned aspects has any effect. The need for a class constructor can be an indicator here. Once a static class requires a nontrivial class constructor to provide the required functions, you should use objects instead.

## Bad Example

The following source code shows a static class with purely static methods and how one of these methods is used. In general, it is not immediately obvious from the source code whether the method call also calls the static constructor or whether this has already happened earlier (following a simple attribute access, for example).

```
CLASS static_class DEFINITION. 
  PUBLIC SECTION. 
    CLASS-METHODS: class_constructor, 
                   meth1, 
                   meth2, 
                   ... 
ENDCLASS. 
... 
static_class=>meth1( ). 
...
```

## Good Example

The following source code shows an implementation of the singleton design pattern. A static method allows access to the only object of the class.

```
CLASS singleton_class DEFINITION CREATE PRIVATE. 
  PUBLIC SECTION. 
    CLASS-METHODS get_instance 
    RETURNING VALUE(r_instance) TYPE REF TO singleton_class 
    RAISING cx_some_failure. 
  METHODS constructor 
    RAISING cx_some_failure. 
  METHODS: meth1, 
           meth2. 
           ... 
  PRIVATE SECTION. 
    CLASS-DATA instance TYPE REF TO singleton_class. 
ENDCLASS.CLASS singleton_class IMPLEMENTATION. 
  METHOD get_instance. 
    IF instance IS NOT BOUND. 
      CREATE OBJECT instance. 
    ENDIF. 
    r_instance = instance. 
  ENDMETHOD. 
  ... 
ENDCLASS.... 
  TRY. 
     singleton_class=>get_instance( )->meth1( ). 
   CATCH cx_some_failure. 
     ... 
  ENDTRY.
```

In the above example, the `get_instance` method is used to return the object reference to the object created with the first call. Therefore, this example would appear to violate the rule [modularize rather than atomize](ABENMODULARIZATION_GUIDL.md). This rule states that no method should be created in ABAP that only returns the value of an attribute. However, this objection is not justified here, because the main task of the `get_instance` method is to enable the object consumer to control the time of object creation. This is necessary to enable the consumer to respond (in the usual way) to any exceptional situation during the object creation process.

In special cases, where object creation is performed without parameters and is always successful, you can omit the `get_instance` method and publish the object reference using a `READ-ONLY` attribute. In this case, the object is created within the static constructor. Therefore, this approach is still afflicted with some of the problems of static classes described in other sections.
