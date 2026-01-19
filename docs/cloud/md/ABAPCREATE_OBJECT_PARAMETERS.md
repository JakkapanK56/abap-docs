---
title: "ABAPCREATE_OBJECT_PARAMETERS"
description: |
  ABAPCREATE_OBJECT_PARAMETERS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCREATE_OBJECT_PARAMETERS.htm"
abapFile: "ABAPCREATE_OBJECT_PARAMETERS.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABAPCREATE", "OBJECT", "PARAMETERS"]
---

`... [EXPORTING  p1 = a1 p2 = a2 ...]\      [EXCEPTIONS exc1 = n1 exc2 = n2 ... [OTHERS = n_others]].`

The additions `EXPORTING` and `EXCEPTIONS` are used to pass actual parameters to the instance constructor statically or to assign return values to non-class-based exceptions.

The syntax and semantics are the same as in the parameter list for [static method calls](ABENMETHOD_CALLS_STATIC.html).

Creation of an instance of a local class `cls1` and passing input parameters to its instance constructor. The class is specified implicitly using the static type of the reference variable `oref`.

-   The addition `EXPORTING` must be used to supply the non-optional input parameters `p1 p2 ...` of the instance constructor of the instantiated class with the type-compliant actual parameters `a1 a2 ...`. The other input parameters are optional. As in regular method calls, `a1`, `a2`, ... are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html). This means that expressions can be passed as actual parameters in addition to data objects. [Special rules](ABENTYPING_ARITH_EXPR.html) apply in this case. If a subclass does not have an instance constructor implemented explicitly, the interface of the instance constructor from the next-highest superclass that explicitly implements the instance constructor is filled.
-   The addition `EXCEPTIONS` can be used to assign return codes to [non-class-based exceptions](ABENEXCEPTIONS_NON_CLASS.html)\\ `exc1 exc2...`

CLASS cls1 DEFINITION. \\n PUBLIC SECTION. \\n METHODS constructor \\n IMPORTING p1 TYPE string \\n p2 TYPE i. \\nENDCLASS. \\n\\ \\nCLASS cls1 IMPLEMENTATION. \\n METHOD constructor. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS cls2 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth. \\nENDCLASS. \\n\\ \\nCLASS cls2 IMPLEMENTATION. \\n METHOD meth. \\n DATA oref TYPE REF TO cls1. \\n CREATE OBJECT oref \\n EXPORTING \\n p1 = \`...\` \\n p2 = 333. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_object.html