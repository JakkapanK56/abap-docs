---
title: "ABAPCALL_METHOD_PARAMETER_LIST"
description: |
  ABAPCALL_METHOD_PARAMETER_LIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_METHOD_PARAMETER_LIST.htm"
abapFile: "ABAPCALL_METHOD_PARAMETER_LIST.html"
keywords: ["if", "try", "catch", "method", "class", "data", "ABAPCALL", "METHOD", "PARAMETER", "LIST"]
---

[Short Reference](ABAPCALL_METHOD_SHORTREF.html)

`... [EXPORTING  p1 = a1 p2 = a2 ...]`\\ 
    `[IMPORTING  p1 = a1 p2 = a2 ...]`\\ 
    `[CHANGING   p1 = a1 p2 = a2 ...]`\\ 
    `[RECEIVING  r  = a  ]`\\ 
    `[EXCEPTIONS [exc1 = n1 exc2 = n2 ...]`\\ 
                `[OTHERS = n_others]\ ].`

The syntax and meaning of `parameter_list` of the [dynamic method call](ABENMETHOD_CALLS_DYNAMIC.html) is the same as for the explicit parameter specification of the [static method call](ABAPCALL_METHOD_STATIC_SHORT.html).

Other than for the static method call, the parameter names are not checked statically for the dynamic method call. Any wrongly written parameter name is recognized at runtime only and leads to an exception of class `CX_SY_DYN_CALL_PARAM_NOT_FOUND`. Also, the [typing](ABENTYPING.html) rules cannot be checked statically but at runtime only.

Other than for the [`parameter_list`](ABAPCALL_FUNCTION_PARAMETER.html) of [`CALL FUNCTION`](ABAPCALL_FUNCTION.html) (that is always dynamic), there is no check by the extended program check, no syntax warning for parameters that are recognizably misspelled and wrong parameters are never ignored.

The following code snippet is syntactically correct but leads to an exception. The specification `(name)` gives the impression of a dynamic parameter specification but is nothing more than a misspelled parameter name.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(name) = \`html\_string\`. \\n\\ \\nTRY. \\n CALL METHOD ('CL\_ABAP\_BROWSER')=>('SHOW\_HTML') \\n EXPORTING \\n (name) = \`Oh no ...\`. \\n CATCH cx\_sy\_dyn\_call\_param\_not\_found INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abenmethod\_calls.html abenmethod\_calls\_dynamic.html abapcall\_method\_dynamic.html