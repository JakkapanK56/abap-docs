---
title: "ABENINHERITANCE_CONSTRUCTORS"
description: |
  ABENINHERITANCE_CONSTRUCTORS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINHERITANCE_CONSTRUCTORS.htm"
abapFile: "ABENINHERITANCE_CONSTRUCTORS.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "exception-handling", "ABENINHERITANCE", "CONSTRUCTORS"]
---

There are special rules governing [constructors](ABENCONSTRUCTOR.html) in inheritance.

Each class has an instance constructor called `constructor`. This is a derivation from the rule of unique component names along a path of an inheritance tree. The instance constructors of the individual classes of an inheritance tree, however, are fully independent of one another.

This means that no namespace conflicts can occur.

The instance constructor is called when an object is created using the command [`CREATE OBJECT`](ABAPCREATE_OBJECT.html) or using the instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html). Since during inheritance, a subclass contains all of the visible attributes of its superclasses whose content can also be set by instance constructors, the instance constructor of a subclass must ensure that the instance constructors of all of its superclasses are also called. This requires that the direct superclass be called using `[super->constructor](ABAPCALL_METHOD_METH_SUPER.html)` in the instance constructor of each subclass, even if it is not explicitly declared. The only exception to this rule are direct subclasses of the root node `OBJECT`.

In superclasses that do not have an explicitly defined instance constructor, the instance constructor, which always exists implicitly, is called. This automatically ensures that the instance constructor of the immediate superclass is called.

When instance constructors are called, their non-optional input parameters must be filled as follows:

The interface of the first explicitly defined instance constructor is filled in the same way as with a regular method, that is:

If there are no explicitly defined instance constructors in the path of the inheritance tree to the root class `object`, no parameters are passed.

For `CREATE OBJECT` or `NEW` and `super->constructor( ... )`, the next possible explicit instance constructor must be considered, and, if it exists, its interface must be filled. The same applies to exception handling for instance constructors. When working with inheritances, a precise knowledge of the entire inheritance tree is required. When an object of a class at the bottom of the inheritance tree is created, it may be necessary to pass parameters to the constructor of a class that is much closer to the root node.

The instance constructor of a subclass is divided into two parts by the call `super->constructor( ... )` required by the syntax. In the statements before the call, the constructor behaves like a [static method](ABENSTATIC_METHOD_GLOSRY.html), which means that the self-reference `me->` must not be used and it does not have access to the instance components of its class. `me->` cannot be used until after the call and instance components can also be addressed. The statements before the call are used to determine the actual parameters for the interface of the instance constructor of the superclass. Only [static attributes](ABENSTATIC_ATTRIBUTE_GLOSRY.html) or other visible data can be used for this.

When a subclass is instantiated, there is a nested call of the instance constructors from the subclass to the superclasses, but only at the lowest nesting level, that is, the highest superclass whose instance attributes can be addressed. When the constructors of the lower subclasses are revisited, their instance attributes can be addressed successively.

The methods of subclasses are not visible in constructors. If an instance constructor calls an instance method of the same class using the implicit [self-reference](ABENSELF_REFERENCE_GLOSRY.html)\\ `me`, the method is called as it is implemented in the class of the instance constructor, and not in any redefined form that may occur in the subclass being instantiated. This is an exception to the rule that when instance methods are called, the implementation is always called in the class to whose instance the reference points.

Every class has a [static constructor](ABENSTATIC_CONSTRUCTOR_GLOSRY.html) called `class_constructor`. For the namespace within an inheritance tree, the same applies to static constructors as to instance constructors.

When a subclass is addressed for the first time in a program by creating an instance of the class or by addressing a static component (except for types and constants) using the class component selector, the static constructor is called. However, the preceding static constructors of all of the entire inheritance tree must have been called first. On the other hand, a static constructor may only be called once at program runtime. Therefore, when subclass is first addressed, the system looks for the next highest superclass whose static constructor has not yet been called. It calls the static constructor of this class, followed by those of all classes between this class and the addressed subclass.

-   Instance constructors of superclasses cannot be redefined in subclasses.
-   Instance constructors cannot be called explicitly using `constructor( ... )`.

-   Filling parameters for `CREATE OBJECT` or `NEW`
-   Starting from the class of the created objects, the first explicitly defined instance constructor in the associated path of the inheritance tree is respected. This is the instance constructor of the class itself or the first explicitly defined instance constructor of a superclass.
-   Filling for `super->constructor( ... )`
-   Starting from the direct superclass, the first explicitly defined instance constructor in the associated path of the inheritance tree is respected.

-   If no input parameters exist, no parameters are passed.
-   Optional input parameters can be filled using `EXPORTING`.
-   Non-optional input parameters must be filled using `EXPORTING`.

abenabap.html abenabap\_reference.html abenabap\_objects.html abeninheritance.html