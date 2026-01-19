---
title: "ABENNEWS-740-ABAP_OBJECTS"
description: |
  ABENNEWS-740-ABAP_OBJECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740-ABAP_OBJECTS.htm"
abapFile: "ABENNEWS-740-ABAP_OBJECTS.html"
keywords: ["do", "if", "method", "class", "exception-handling", "ABENNEWS", "740", "ABAP", "OBJECTS"]
---

[1\. Parameter Interface of Functional Methods](#ABAP_MODIFICATION_1@4@)

[2\. Interfaces in Test Classes](#ABAP_MODIFICATION_2@4@)

[3\. Exception Handling](#ABAP_MODIFICATION_3@4@)

[4\. Execution of Static Constructor](#ABAP_MODIFICATION_4@4@)

Alongside the return value defined using `RETURNING`, a [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html) can now have any number of other [formal parameters](ABENFORMAL_PARAMETER_GLOSRY.html). Previously, only [input parameters](ABENINPUT_PARAMETER_GLOSRY.html) were possible.

Accordingly, [functional method calls](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html) can now be used with the additions `EXPORTING`, `IMPORTING`, and `CHANGING`, so that actual parameters can be bound to the additional formal parameters.

When the input parameters of a method are declared, the addition [`PREFERRED PARAMETER`](ABAPMETHODS_GENERAL.html) can now also be specified, if the method has output parameters or input/output parameters. The only requirement is that all input parameters and input/output parameters are optional.

In test classes, the new addition [`PARTIALLY IMPLEMENTED`](ABAPINTERFACES_PARTIALLY.html) can be specified in the statement `INTERFACES`, which allows only parts interfaces to be implemented. This is particularly useful in test doubles.

If a class is specified dynamically after `TYPE` in the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT_EXPLICIT.html) and the class does not match the static type of the reference variable, the exception can now be handled using the exception class `CX_SY_CREATE_OBJECT_ERROR`.

Until now, the [static constructor](ABENSTATIC_CONSTRUCTOR_GLOSRY.html) of a class was called before each use of the class. It is not necessary to execute the static constructor to use a constant of the class. Accessing a constant of a class no longer results in its static constructor being called.

abenabap.html abennews.html abennews-740.html abennews-740\_sp02.html