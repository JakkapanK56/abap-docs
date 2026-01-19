---
title: "ABENCLASSES"
description: |
  ABENCLASSES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCLASSES.htm"
abapFile: "ABENCLASSES.html"
keywords: ["do", "if", "method", "class", "types", "ABENCLASSES"]
---

The type of an [object](ABENOBJECT_GLOSRY.html) is referred to as its class. A class is an abstract representation of an object or, visually speaking, a set of building instructions for objects. To describe the properties of objects, classes contain [components](ABENCLASS_COMPONENTS.html) that define the status and behavior of objects.

Classes can be [defined](ABENCLASS_INTERFACE_DEFINITION.html) globally in the class library of the [repository](ABENREPOSITORY_GLOSRY.html) or locally in an ABAP program.

[Global classes](ABENGLOBAL_CLASS_GLOSRY.html) are coded in a special ABAP program, a [class pool](ABENCLASS_POOL_GLOSRY.html), whereas [local classes](ABENLOCAL_CLASS_GLOSRY.html) can be coded in almost every ABAP program. Global classes are visible in all ABAP programs. The usability depends on the package check. Local classes can be used statically only in their own program. Dynamic access is also possible beyond program boundaries, but it is not recommended. When a global class is first used, the class pool is loaded to the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of the user. The local classes of a class pool can be used by its global class.

Except for the storage type and the visibility, there are hardly any conceptual differences between global and local classes. Those few differences include the fact that, in the public interface of a global class, only references to public types are possible and that a distinction is made between global and local [friends](ABENFRIEND_GLOSRY.html).

In addition, it also does not make any difference whether a method of a local class or a global class is called. For this reason, classes used by multiple programs should be created exclusively in the class library. The reuse of local classes by using [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) should be avoided.

[Classes](ABENCLASS_ABEXA.html)

abenabap.html abenabap\_reference.html abenabap\_objects.html