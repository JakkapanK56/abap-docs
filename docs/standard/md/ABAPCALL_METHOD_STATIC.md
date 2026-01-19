---
title: "ABAPCALL_METHOD_STATIC"
description: |
  ABAPCALL_METHOD_STATIC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_METHOD_STATIC.htm"
abapFile: "ABAPCALL_METHOD_STATIC.html"
keywords: ["do", "if", "method", "class", "ABAPCALL", "METHOD", "STATIC"]
---

[Short Reference](ABAPCALL_METHOD_SHORTREF.html)

`CALL METHOD \{\ [meth](ABAPCALL_METHOD_METH_IDENT_STAT.html)( )              |\ [meth](ABAPCALL_METHOD_METH_IDENT_STAT.html)( a )              |\ [meth](ABAPCALL_METHOD_METH_IDENT_STAT.html)( p1 = a1 p2 = a2 ... )              |\ [meth](ABAPCALL_METHOD_METH_IDENT_STAT.html)( [[parameter_list]](ABAPCALL_METHOD_PARAMETERS.html) ) \}.`

`CALL METHOD   [meth](ABAPCALL_METHOD_METH_IDENT_STAT.html)\ [[parameter_list]](ABAPCALL_METHOD_PARAMETERS.html).`

Both statements have the same semantics and call the method that is specified statically with the name [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html).

In the second variant without parentheses, no [chained method calls](ABENCHAINED_METHOD_CALL_GLOSRY.html) are possible and the operators [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) and [`CAST`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) cannot be used to specify the method.

The three method calls in the following source code section have the same meaning. The first two calls are the obsolete variants with `CALL METHOD`: one without parentheses and one with. The third call is the recommended variant without `CALL METHOD`.

-   The first statement prefixes the [standalone method call](ABAPCALL_METHOD_STATIC_SHORT.html) with a `CALL METHOD`.
-   The second statement does not have any parentheses for filling the parameter interface. Instead, either an explicit [parameter list](ABAPCALL_METHOD_PARAMETERS.html) is specified or no parameter list at all.

-   The static method call described here must not be confused with the call of [static methods](ABENSTATIC_METHOD_GLOSRY.html). A static method call is the static specification of an [instance method](ABENINSTANCE_METHOD_GLOSRY.html) or a static method. In addition, there is the [dynamic method call](ABENMETHOD_CALLS_DYNAMIC.html), for which the methods are specified dynamically.
-   The statement `CALL METHOD` is now only intended for [dynamic method calls](ABENMETHOD_CALLS_DYNAMIC.html) and distinguishes them clearly from static calls.
-   `CALL METHOD` is [no longer recommended](ABENMETHOD_CALL_GUIDL.html) for [static method calls](ABENMETHOD_CALLS_STATIC.html).

-   It is not necessary to prefix the [recommended syntax](ABAPCALL_METHOD_STATIC_SHORT.html) with `CALL METHOD` since this would make programs harder to read.
-   The syntax without parentheses is based on [function module calls](ABAPCALL_FUNCTION_GENERAL.html) and is obsolete. The syntax involving parentheses, however, standardizes both standalone and functional method calls.

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n METHODS do\_something IMPORTING p1 TYPE i \\n p2 TYPE i \\n EXPORTING p3 TYPE i \\n p4 TYPE i \\n RETURNING VALUE(r) TYPE i. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD do\_something. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(oref) = NEW demo( ). \\n\\ \\n CALL METHOD oref->do\_something \\n EXPORTING \\n p1 = 333 \\n p2 = 444 \\n IMPORTING \\n p3 = FINAL(a1) \\n p4 = FINAL(a2) \\n RECEIVING \\n r = FINAL(a3). \\n\\ \\n CALL METHOD oref->do\_something( \\n EXPORTING \\n p1 = 333 \\n p2 = 444 \\n IMPORTING \\n p3 = FINAL(b1) \\n p4 = FINAL(b2) \\n RECEIVING \\n r = FINAL(b3) ). \\n\\ \\n oref->do\_something( \\n EXPORTING \\n p1 = 333 \\n p2 = 444 \\n IMPORTING \\n p3 = FINAL(c1) \\n p4 = FINAL(c2) \\n RECEIVING \\n r = FINAL(c3) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenprogram\_call\_obsolete.html