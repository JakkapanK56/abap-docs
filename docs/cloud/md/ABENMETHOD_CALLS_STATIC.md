---
title: "ABENMETHOD_CALLS_STATIC"
description: |
  ABENMETHOD_CALLS_STATIC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMETHOD_CALLS_STATIC.htm"
abapFile: "ABENMETHOD_CALLS_STATIC.html"
keywords: ["if", "method", "class", "types", "ABENMETHOD", "CALLS", "STATIC"]
---

There are two types of static method call, standalone static method calls and functional static method calls. Method chainings are a special form of static method call.

Each method call sets the system field `sy-subrc` to 0 in the moment the method is called. Handling [non-class-based exceptions](ABENEXCEPTIONS_NON_CLASS.html) can change this value.

The static method call described here must not be confused with the call of [static methods](ABENSTATIC_METHOD_GLOSRY.html). A static method call is the static specification of an [instance method](ABENINSTANCE_METHOD_GLOSRY.html) or a static method. In addition, there is the [dynamic method call](ABENMETHOD_CALLS_DYNAMIC.html), for which the methods are specified dynamically.

`CX_SY_NO_HANDLER`

`CX_SY_REF_IS_INITIAL`

-   [`meth( ... )` - Standalone Method Call](ABAPCALL_METHOD_STATIC_SHORT.html)
-   [`meth( ... )` - Functional Method Call](ABAPCALL_METHOD_FUNCTIONAL.html)
-   [`... meth1( ... )->meth2( ... )->...` - Method Chaining](ABAPCALL_METHOD_STATIC_CHAIN.html)

-   See [Class-Based Exceptions in Procedures](ABENEXCEPTIONS_PROCEDURES.html).

-   *Cause:* Reference variable is initial
    *Runtime error:*\\ `OBJECTS_OBJREF_NOT_ASSIGNED`

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abenmethod\_calls.html