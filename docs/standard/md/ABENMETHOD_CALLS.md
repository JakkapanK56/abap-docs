---
title: "ABENMETHOD_CALLS"
description: |
  ABENMETHOD_CALLS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMETHOD_CALLS.htm"
abapFile: "ABENMETHOD_CALLS.html"
keywords: ["do", "if", "method", "class", "types", "ABENMETHOD", "CALLS"]
---

There are two types of method call, static method calls and dynamic method calls. In static method calls, the name of the method must be completely known in the program. In dynamic method calls, the name of the method is determined partially or completely at runtime.

When an instance method is called using a reference variable and the static type of the reference variable is a superclass of the dynamic type, the dynamic method call can be used to call all visible methods of the dynamic type. In static method calls, however, only the visible methods of the static type can be called.

Static method calls have the pattern `meth( )`. They do not need a keyword, but the method is specified directly and the parameters passing is in parentheses instead. Dynamic method calls are introduced using `CALL METHOD`.

An [obsolete syntax variant](ABAPCALL_METHOD_STATIC.html) also exists where static method calls are still introduced using `CALL METHOD`.

The system field `sy-subrc` is set to 0 when a method is called. If a [non-class-based exception](ABENEXCEPTIONS_NON_CLASS.html) is raised and is handled by the assignment of a value, `sy-subrc` is set to this value.

-   [Static method calls](ABENMETHOD_CALLS_STATIC.html)
-   [Dynamic method calls](ABENMETHOD_CALLS_DYNAMIC.html)

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html