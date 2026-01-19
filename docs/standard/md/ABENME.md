---
title: "ABENME"
description: |
  ABENME - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENME.htm"
abapFile: "ABENME.html"
keywords: ["if", "method", "class", "data", "ABENME"]
---

Within the implementation of each instance method, an implicitly created local reference variable called `me` is available at runtime, which points to the instance in which the method is currently being executed. `me` is handled like a local constant, which means that the value of `me` cannot be changed in an instance method. The static type of `me` is the class in which the instance method is implemented.

The name `me` is reserved and cannot be used in a class for attributes, formal parameters, and local data objects.

When an object is created, `me` also points to the instance of the generated subclass during the execution of an [instance constructor](ABENINSTANCE_CONSTRUCTOR_GLOSRY.html) of a superclass called using [`super->constructor`](ABAPCALL_METHOD_METH_SUPER.html). However, in the instance constructor of the superclass, or in methods called by the instance constructor, `me->` has not effect in the method call if specified. Instead, the method implementations of the superclass are always called.

Access to identically named data objects of a class in a method. If specified on its own, `str` indicates the local data object of the method. The self-reference `me` is used to access the instance attribute `str` of the method.

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n METHODS meth. \\n PRIVATE SECTION. \\n DATA str TYPE string VALUE \`attr\`. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth. \\n DATA str TYPE string VALUE \`local\`. \\n cl\_demo\_output=>display( |\\{ str \\}\\\\n\\{ \\n me->str \\}| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenbuilt\_in.html abenbuilt\_in\_objects.html