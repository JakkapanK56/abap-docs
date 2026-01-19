---
title: "ABAPCREATE_OBJECT"
description: |
  ABAPCREATE_OBJECT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCREATE_OBJECT.htm"
abapFile: "ABAPCREATE_OBJECT.html"
keywords: ["delete", "do", "if", "catch", "method", "class", "data", "field-symbol", "ABAPCREATE", "OBJECT"]
---

1\. `CREATE OBJECT oref [area_handle] [[parameter_list](ABAPCREATE_OBJECT_PARAMETERS.html)].`

2\. `CREATE OBJECT oref [area_handle] TYPE \{ class [[parameter_list](ABAPCREATE_OBJECT_PARAMETERS.html)]\ \}\ |\ \{ (name) [[parameter_list](ABAPCREATE_OBJECT_PARAMETERS.html)|[parameter_tables](ABAPCREATE_OBJECT_PARA_TABLES.html)]\ \}.`

The statement `CREATE OBJECT` creates an object as an instance of a class and assigns the reference to the object to the reference variable `oref`. The instance constructor of the class is called directly after the object is created.

By default, the object is created in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) (or [heap](ABENHEAP_GLOSRY.html)) of the current program and is preserved there for as long as it is required. If no more [heap references](ABENHEAP_REFERENCE_GLOSRY.html) point to the object, the following applies:

Also, if no more methods of the object are registered as event handlers, it is deleted by the [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html).

The reference variable `oref` must be declared as an object reference variable. Instance components of an object created using `CREATE OBJECT` can only be accessed using object reference variables (see [Data Objects in Operand Positions](ABENOPERANDS_DATA_OBJECTS.html)).

The addition `TYPE` can be used to specify the class of the created object. The static type of the object reference variables must be more general than or identical to the class of the created object, in accordance with the rules for [Assignments Between Object Reference Variables](ABENCONVERSION_REFERENCES_OBJECTS.html).

Instances of a class can be created only where it is allowed by the addition `CREATE` of the statement [`CLASS DEFINITION`](ABAPCLASS.html). It can be a local class of the same ABAP program or a global class of the class library allowed by the package check.

The additions [`parameter_list`](ABAPCREATE_OBJECT_PARAMETERS.html) and [`parameter_tables`](ABAPCREATE_OBJECT_PARA_TABLES.html) must be used to fill the non-optional input parameters of the first explicitly implemented instance constructor that is on the path of the inheritance tree between the instantiated class and the root class `object`. These additions can also be used to assign return values to the non-class-based exceptions of the instance constructor.

If a catchable exception is raised when the object is created in the runtime framework, the object is not created and the object reference variable `oref` is initialized. If a catchable exception is raised when the object is created in the instance constructor of the class, the created object is deleted and the object reference variable `oref` is initialized.

If the `CREATE OBJECT` statement is executed successfully, `sy-subrc` is set to 0. Values other than 0 can occur when specifying `EXCEPTIONS` in `parameter_spec` when non-class-based exceptions of the instance constructor are handled.

`CX_SY_CREATE_OBJECT_ERROR`

[Specifying the Class Implicitly](ABAPCREATE_OBJECT_IMPLICIT.html)

[Specifying the Class Explicitly](ABAPCREATE_OBJECT_EXPLICIT.html)

-   No more object references point to the object.
-   No data reference and no field symbol points to an instance attribute or to a part of an instance attribute,

-   If the reference variable `oref` specified after `CREATE OBJECT` is passed simultaneously to the instance constructor, it already points to the new object when it is executed. To pass a reference to an existing object to the instance constructor, a different reference variable must be used.
-   The statement `CREATE OBJECT` creates a [heap reference](ABENHEAP_REFERENCE_GLOSRY.html). All references that point to the object or its parts are also heap references and keep the object alive. The same applies to field symbols that point to instance attributes or to their parts.
-   If a class is used, the [instance operator](ABENINSTANCE_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) acts like the statement `CREATE OBJECT oref TYPE class` and can be used in [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html).
-   The return code `sy-subrc` is set to 0 if the statement is successful because the instance constructor is called. `sy-subrc` is set each time a [method is called](ABAPCALL_METHOD_STATIC_SHORT.html).
-   A RAP-specific variant [`CREATE OBJECT, FOR TESTING`](ABAPCREATE_OBJECT_FOR_TESTING.html) is available for [unit tests](ABENUNIT_TEST_GLOSRY.html) of an [ABAP behavior implementation](ABENBEHAVIOR_POOL_GLOSRY.html).

-   *Cause:* An attempt was made to instantiate an abstract class.
    *Runtime error:*\\ `CREATE_OBJECT_CLASS_ABSTRACT`
-   *Cause:* The class specified in the addition `TYPE` does not exist.
    *Runtime error:*\\ `CREATE_OBJECT_CLASS_NOT_FOUND`
-   *Cause:* The class specified dynamically in `TYPE` does not match the type of the reference variable.
    *Runtime error:*\\ `MOVE_OREF_NOT_CONVERTIBLE`
-   *Cause:* An attempt was made to instantiate a private class externally.
    *Runtime error:*\\ `CREATE_OBJECT_CREATE_PRIVATE`
-   *Cause:* An attempt was made to instantiate a protected class externally.
    *Runtime error:*\\ `CREATE_OBJECT_CREATE_PROTECTED`

abenabap.html abenabap\_reference.html abencreate\_objects.html