---
title: "ABENCLASS_METHODS"
description: |
  ABENCLASS_METHODS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCLASS_METHODS.htm"
abapFile: "ABENCLASS_METHODS.html"
keywords: ["do", "if", "catch", "method", "class", "data", "types", "ABENCLASS", "METHODS"]
---

Methods are internal [procedures](ABENPROCEDURE_GLOSRY.html) of a class that determine the behavior of an object. They can access all attributes of all instances of their class and can therefore change the status of an object. Methods have a parameter interface that is used to supply them with values when they are called, and which can be used to return values to the caller. The private attributes of a class can only be changed using methods of the same class.

A method `meth` is declared in the [declaration part](ABENDECLARATION_PART_GLOSRY.html) of a class using the statements [`METHODS`](ABAPMETHODS.html) and [`CLASS-METHODS`](ABAPCLASS-METHODS.html) and implemented in the [implementation part](ABENIMPLEMENTATION_PART_GLOSRY.html) of the class using the following [processing block](ABENPROCESSING_BLOCK_GLOSRY.html):

[`METHOD meth.`](ABAPMETHOD.html)\\ 
  ...\\ 
[`ENDMETHOD.`](ABAPENDMETHOD.html)

As in all procedures, local data types and data objects can be declared in methods. Methods are called [statically](ABENMETHOD_CALLS_STATIC.html) using the expression `meth( ... )` or [dynamically](ABENMETHOD_CALLS_DYNAMIC.html) using the statement [`CALL METHOD`](ABAPCALL_METHOD_DYNAMIC.html) (known as a dynamic invoke).

In the methods of a class, one method of the class [hides](ABENBUILT_IN_FUNCTIONS_SYNTAX.html) a [built-in function](ABENBUILTIN_FUNCTION_GLOSRY.html) with the same name. This hiding is independent of the type and number of method parameters and the type and number of parameters of the function. This means that a method should not have the same name as a built-in function.

Instance methods are declared using the statement [`METHODS`](ABAPMETHODS.html). They can access all the attributes of a class and can raise all of its events.

Any attempt to call an instance method using an initial [object reference variable](ABENOBJECT_REFER_VARIABLE_GLOSRY.html) raises a catchable exception.

Static methods are declared using the statement [`CLASS-METHODS`](ABAPCLASS-METHODS.html). It can access [static attributes](ABENSTATIC_ATTRIBUTE_GLOSRY.html) of a class and it can only raise [static events](ABENSTATIC_EVENT_GLOSRY.html).

In addition to the regular methods that are [called explicitly](ABENMETHOD_CALLS.html), there are two special methods called [`constructor` and `class_constructor`](ABENCONSTRUCTOR.html), which are called implicitly when an object is created or when a class component is accessed for the first time.

Functional methods are methods with exactly one [`RETURNING`](ABAPMETHODS_FUNCTIONAL.html) parameter and any number of other formal parameters. Functional methods cannot just be called as [standalone statements](ABAPCALL_METHOD_STATIC_SHORT.html), but also as [functional method calls](ABAPCALL_METHOD_FUNCTIONAL.html) in [operand positions for expressions](ABENEXPRESSION_POSITIONS.html). Here, they can be also be combined into [method chainings](ABENMETHOD_CHAINING_GLOSRY.html).

In interfaces, methods can be made optional using the addition [`DEFAULT`](ABAPMETHODS_DEFAULT.html) of the statements [`METHODS`](ABAPMETHODS.html) and [`CLASS-METHODS`](ABAPCLASS-METHODS.html). An optional interface method does not need to be implemented explicitly in a class when an interface is implemented. Instead, the definition defines a default behavior for calls of non-implemented methods. `DEFAULT IGNORE` calls an empty method and `DEFAULT FAIL` raises an exception.

[AMDP methods](ABENAMDP_METHODS.html) are implemented as [ABAP Managed Database Procedures](ABENABAP_MANAGED_DB_PROC_GLOSRY.html) using the addition [`BY DATABASE PROCEDURE`](ABAPMETHOD_BY_DB_PROC.html) or [`BY DATABASE FUNCTION`](ABAPMETHOD_BY_DB_PROC.html) in a database-specific language and executed in the database system.

For internal use, [kernel methods](ABENKERNEL_METHODS.html) are implemented in the kernel using the addition [`BY KERNEL MODULE`](ABAPMETHOD_KERNEL_MODULE_INTERNAL.html).

abenabap.html abenabap\_reference.html abenabap\_objects.html abenclasses.html abenclass\_components.html