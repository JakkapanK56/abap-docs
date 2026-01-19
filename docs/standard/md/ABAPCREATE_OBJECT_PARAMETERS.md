---
title: "ABAPCREATE_OBJECT_PARAMETERS"
description: |
  ABAPCREATE_OBJECT_PARAMETERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCREATE_OBJECT_PARAMETERS.htm"
abapFile: "ABAPCREATE_OBJECT_PARAMETERS.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABAPCREATE", "OBJECT", "PARAMETERS"]
---

[Short Reference](ABAPCREATE_OBJECT_SHORTREF.html)

 `... [EXPORTING  p1 = a1 p2 = a2 ...]\      [EXCEPTIONS exc1 = n1 exc2 = n2 ... [OTHERS = n_others]].`

The additions `EXPORTING` and `EXCEPTIONS` are used to pass actual parameters to the instance constructor statically or to assign return values to non-class-based exceptions.

The syntax and semantics are the same as in the parameter list for [static method calls](ABENMETHOD_CALLS_STATIC.html).

Creation of a Control Framework (CFW) dialog box and passing input parameters to the instance constructor of the global class `CL_GUI_DIALOGBOX_CONTAINER`. The class is specified implicitly using the static type of the reference variable `dialog_box`.

-   The addition `EXPORTING` must be used to supply the non-optional input parameters `p1 p2 ...` of the instance constructor of the instantiated class with the type-compliant actual parameters `a1 a2 ...`. The other input parameters are optional. As in regular method calls, `a1`, `a2`, ... are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html). This means that expressions can be passed as actual parameters in addition to data objects. [Special rules](ABENTYPING_ARITH_EXPR.html) apply in this case. If a subclass does not have an instance constructor implemented explicitly, the interface of the instance constructor from the next-highest superclass that explicitly implements the instance constructor is filled.
-   The addition `EXCEPTIONS` can be used to assign return codes to [non-class-based exceptions](ABENEXCEPTIONS_NON_CLASS.html)\\ `exc1 exc2...`

DATA dialog\_box TYPE REF TO cl\_gui\_dialogbox\_container. \\n\\ \\nCREATE OBJECT dialog\_box \\n EXPORTING parent = cl\_gui\_container=>desktop \\n width = 1000 \\n height = 350. abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_object.html