---
title: "ABENC_DESTRUCTOR"
description: |
  ABENC_DESTRUCTOR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENC_DESTRUCTOR.htm"
abapFile: "ABENC_DESTRUCTOR.html"
keywords: ["delete", "do", "if", "case", "method", "class", "data", "ABENC", "DESTRUCTOR"]
---

A destructor is a special method that is called automatically when an object is deleted. Destructors can be used to release resources used by the object that are not covered by garbage collection. Currently, ABAP Objects does not have a destructor in which a regular ABAP processing block can be programmed.

For special cases and for **internal use only**, the special predefined instance method `destructor` can be declared in the public visibility section of a class:

`CLASS class DEFINITION.`\\
`PUBLIC SECTION.`\\
`METHODS destructor [NOT AT END OF MODE].`\\
`...`\\
`ENDCLASS`.

Currently, only one statement can be used in the implementation of the method `destructor`:

`CLASS class IMPLEMENTATION.`\\
`METHOD destructor.`\\
`SYSTEM-CALL c-destructor 'name' USING attr1 attr2 ...`\\
`ENDMETHOD.`\\
`ENDCLASS`.

The destructor therefore allows the calling of a C routine name when an object is deleted. The routine must exist in the ABAP kernel so that no syntax error occurs.

If the optional addition `NOT AT END OF MODE` is used, the destructor is not executed if the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is closed regardless. Usually a destructor is also executed at the end of an internal session and should mainly be used to release bound external resources that are not released automatically when the session is closed.

When the C routine is called, attributes `attr1`, `attr2`, ... of the class of any complex data type can be passed to this routine. If multiple parameters are to be passed, an appropriate data type must be defined.

During the lifetime of an internal session, the time when the method `destructor` is executed depends on when [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html) is started. When an internal session is closed, the destructors that are not declared using the addition `NOT AT END OF MODE` are executed for all objects. In cases of inheritance, the destructors of the subclasses are executed before the destructors of the superclasses.

abenabap.html abenabap\_reference.html abenabap\_objects.html abenclasses.html abenclass\_components.html abenclass\_methods.html