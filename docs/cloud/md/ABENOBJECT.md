---
title: "ABENOBJECT"
description: |
  ABENOBJECT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENOBJECT.htm"
abapFile: "ABENOBJECT.html"
keywords: ["delete", "method", "class", "data", "field-symbol", "ABENOBJECT"]
---

Objects are instances of classes. There can be any number of objects or instances in a class. Each object has a unique identity and its own attributes.

By default, all objects have the same priority in the [data area](ABENDATA_AREA_GLOSRY.html) of an [internal session](ABENINTERNAL_SESSION_GLOSRY.html). This means that objects can only be accessed within an internal session.

To create an object, an [object reference variable](ABENREFERENCES.html) is required that can point to the required class:

The instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) enables objects to be created in [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

A program can access the visible instance components of an object only by using references in [reference variables](ABENREFERENCES.html). For the corresponding syntax, see [Accessing Components of Classes](ABENCLASS_COMPONENTS_ADDRESSING.html).

An object lives for as long as it is used in the internal session (known as the [heap](ABENHEAP_GLOSRY.html)). An object is used for as long as at least one [heap reference](ABENHEAP_REFERENCE_GLOSRY.html) points to the object, to an instance attribute, or to a part of the instance attribute or as long as at least one method of the object is registered as an [event handler](ABENEVENT_HANDLER_GLOSRY.html). Field symbols to which an instance attribute or part of an instance attribute is assigned, have the same effect as data references.

As soon as an object has no more references and none of its methods are registered as an event handler, it can be deleted by the [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html). This releases the identity of the object to be taken by a new object.

-   After a class reference variable `obj` is declared for a class `class`, an object of that class can be created using the statement [`CREATE OBJECT obj`](ABAPCREATE_OBJECT.html). This statement creates an instance of the class `class` and the reference variable `obj` contains a [reference](ABENREFERENCES.html) to this object.
-   After a class reference variable `obj` is declared for a superclass of the class `class` or an interface reference variable `obj` for an interface implemented by the class `class`, the addition `TYPE class` of the statement [`CREATE OBJECT obj`](ABAPCREATE_OBJECT.html) can be used to create an instance of the class `class`.

abenabap.html abenabap\_reference.html abenabap\_objects.html