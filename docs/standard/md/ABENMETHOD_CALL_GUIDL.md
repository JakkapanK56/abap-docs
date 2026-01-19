---
title: "ABENMETHOD_CALL_GUIDL"
description: |
  ABENMETHOD_CALL_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMETHOD_CALL_GUIDL.htm"
abapFile: "ABENMETHOD_CALL_GUIDL.html"
keywords: ["insert", "do", "if", "method", "class", "ABENMETHOD", "CALL", "GUIDL"]
---

Static calls of methods can be formulated in two different ways. The [obsolete long form](ABAPCALL_METHOD_STATIC.html)

CALL METHOD meth EXPORTING ...

is based on the notation of the function module call. Alternatively, a [short form](ABAPCALL_METHOD_STATIC_SHORT.html) can be used:

meth( ... ).

This form uses a parenthesis notation instead of the initiating ABAP words [`CALL METHOD`](ABAPCALL_METHOD_STATIC.html). A combination of CALL METHOD and parentheses is also possible.

**Formulate**\\ **static method calls without**\\ `CALL METHOD`

Use the long form of the method call using `CALL METHOD` only for dynamic method calls.

The short form of the static method call is clearer. The redundant ABAP words `CALL METHOD` provide no additional information to the reader. Using the short form, self-contained method calls have the same appearance as functional method calls on operand positions. For dynamic method calls, the long form with `CALL METHOD` is required by the syntax. If it is only used there, the different notations provide the reader with another distinguishing feature between the static and dynamic method call.

The following source code shows the long form of a static method call using `CALL METHOD`, which is no longer recommended.

The following source code shows the same static method call as above, but with parentheses inserted. In this form, which also has correct syntax, either `CALL METHOD` or the parentheses are superfluous.

The following source code shows the same method call as above, but as recommended, without `CALL METHOD`. If a method has only importing parameters, `IMPORTING` and `CHANGING` can be omitted, and also the `EXPORTING` addition. If it is a single importing parameter, its name can also be omitted.

... \\nCALL METHOD cl\_class=>do\_something \\n EXPORTING \\n some\_input = value1 \\n IMPORTING \\n some\_output = value2 \\n CHANGING \\n some\_change = value3. \\n... ... \\nCALL METHOD cl\_class=>do\_something( \\n EXPORTING \\n some\_input = value1 \\n IMPORTING \\n some\_output = value2 \\n CHANGING \\n some\_change = value3 ). \\n... ... \\ncl\_class=>do\_something( \\n EXPORTING \\n some\_input = value1 \\n IMPORTING \\n some\_output = value2 \\n CHANGING \\n some\_change = value3 ). \\n... abenabap.html abenabap\_reference.html abenabap\_pgl.html abenstructure\_style\_gdl.html abenalternative\_spelling\_gdl.html