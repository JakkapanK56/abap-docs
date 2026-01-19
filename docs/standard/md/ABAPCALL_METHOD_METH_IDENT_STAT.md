---
title: "ABAPCALL_METHOD_METH_IDENT_STAT"
description: |
  ABAPCALL_METHOD_METH_IDENT_STAT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_METHOD_METH_IDENT_STAT.htm"
abapFile: "ABAPCALL_METHOD_METH_IDENT_STAT.html"
keywords: ["select", "do", "if", "case", "method", "class", "ABAPCALL", "METHOD", "METH", "IDENT", "STAT"]
---

[Short Reference](ABAPCALL_METHOD_SHORTREF.html)

`... meth`\\ 
  `| oref->meth`\\ 
  `| class=>meth`\\ 
  ``|\ [`super->meth`](ABAPCALL_METHOD_METH_SUPER.html) ...``

[1. `... meth ...`](#ABAP_ALTERNATIVE_1@2@)

[2. `... oref->meth ...`](#ABAP_ALTERNATIVE_2@2@)

[3. `... class=>meth ...`](#ABAP_ALTERNATIVE_3@2@)

These names are used for to specify methods statically, where `meth` is a valid name for the method in the current context. A special case of specifying methods statically is the specification after the pseudo reference [`super`](ABAPCALL_METHOD_METH_SUPER.html) in methods of subclasses.

The name of a method can be the name of the method declared in [`METHODS`](ABAPMETHODS.html), a name composed using the [interface component selector](ABENINTERFACE_COMP_SELECTOR_GLOSRY.html), or an [alias name](ABENALIAS_GLOSRY.html).

Can be specified in method implementations for any method `meth` of the same class. In instance methods, `meth` is a short form of `me->meth`, where `me` is the [self-reference](ABENSELF_REFERENCE_GLOSRY.html).

Call of method `meth2` from another method `meth1`.

Can be specified in processing blocks in which any method `meth` is visible. Here, `oref` contains an object reference to an object that contains the method as a component. The following can be specified for `oref`:

This applies to both [standalone method calls](ABAPCALL_METHOD_STATIC_SHORT.html) and [functional method calls](ABAPCALL_METHOD_FUNCTIONAL.html).

Call of the instance method `meth` via a temporary reference variable created using the [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) operator.

Can be specified in processing blocks in which a [static method](ABENSTATIC_METHOD_GLOSRY.html)\\ `meth` is visible, where `class` is one of the classes allowed by the package check that contains the method as a [static component](ABENSTATIC_COMPONENT_GLOSRY.html).

Call of the static method `meth` using the name of the class.

-   A reference variable
-   A single or chained [table expression](ABENTABLE_EXPRESSION_GLOSRY.html) whose result is a reference variable
-   A [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) with a [constructor operator](ABENCONSTRUCTOR_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) or [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html)

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n METHODS meth1. \\n PRIVATE SECTION. \\n METHODS meth2. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth1. \\n ... \\n meth2( ). \\n ... \\n ENDMETHOD. \\n METHOD meth2. \\n ... \\n ENDMETHOD. \\nENDCLASS. CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n METHODS meth. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD meth. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n NEW demo( )->meth( ). \\n ENDMETHOD. \\nENDCLASS. CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD meth. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n demo=>meth( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abenmethod\_calls.html abenmethod\_calls\_static.html abapcall\_method\_static\_short.html