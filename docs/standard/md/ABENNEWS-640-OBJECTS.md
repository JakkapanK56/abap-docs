---
title: "ABENNEWS-640-OBJECTS"
description: |
  ABENNEWS-640-OBJECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-640-OBJECTS.htm"
abapFile: "ABENNEWS-640-OBJECTS.html"
keywords: ["if", "method", "class", "data", "types", "ABENNEWS", "640", "OBJECTS"]
---

[1\. Data Types and Constants in the Visibility Section of Global Classes](#ABAP_MODIFICATION_1@4@)

[2\. Access to Static Components of Object Types](#ABAP_MODIFICATION_2@4@)

[3\. Use of Alias Names](#ABAP_MODIFICATION_3@4@)

[4\. Unused Private Components](#ABAP_MODIFICATION_4@4@)

From ABAP release 6.40, data types and constants can be created in the public [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of global classes and interfaces, which was not previously possible. Classes and interfaces therefore make the use of [type pools](ABENTYPE_POOL_GLOSRY.html) superfluous, whereas for types and constants names that are longer than the names in the type pools are possible.

The statements [`CLASS cl DEFINITION LOAD`](ABAPCLASS_DEFERRED.html) and [`INTERFACE in LOAD`](ABAPINTERFACE_DEFERRED.html) are now only necessary if source code contains recursive accesses to global classes or interfaces. Until now, these statements always had to be specified if [static components](ABENSTATIC_COMPONENT_GLOSRY.html) of global classes or interfaces were being accessed for the first time. Transaction `SYNT`, to which a trace for these object types has been added, can be used to detect recursive class and interface definitions.

This change was also transported back to ABAP release 6.20.

From ABAP release 6.40, it is possible to specify the alias names of the methods defined using [`ALIASES`](ABAPALIASES.html) in the implementation of methods using the statement `METHOD` and in the [redefinition](ABENREDEFINITION_GLOSRY.html) of methods using the statement `METHODS ...REDEFINITION`. At the same time, however, from ABAP release 6.40 there will be a warning about the syntax check if identical components are accessed within a class declaration or a method with different names.

From ABAP release 6.40, all unused private components of a class produce a warning in the extended program check. Private methods must be called and private events must be both raised and handled.

abenabap.html abennews.html abennews-6.html abennews-640.html