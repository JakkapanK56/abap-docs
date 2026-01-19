---
title: "ABAPCALL_METHOD_METH_SUPER"
description: |
  ABAPCALL_METHOD_METH_SUPER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCALL_METHOD_METH_SUPER.htm"
abapFile: "ABAPCALL_METHOD_METH_SUPER.html"
keywords: ["do", "if", "method", "class", "ABAPCALL", "METHOD", "METH", "SUPER"]
---

`... super->meth`\\ 
  `| super->constructor ...`

[1. `... super->meth ...`](#ABAP_ALTERNATIVE_1@2@)

[2. `... super->constructor ...`](#ABAP_ALTERNATIVE_2@2@)

This special form of a [static method specification](ABAPCALL_METHOD_METH_IDENT_STAT.html) can be used in methods of subclasses to call the implementation of an identically named method in the direct superclass. The superclass is addressed using the [pseudo reference](ABENPSEUDO_REFERENCE_GLOSRY.html)\\ `super`.

Can be specified in the [redefinition](ABENREDEFINITION_GLOSRY.html) of the method `meth` in the implementation in a subclass and calls the implementation of the method `meth` in the direct superclass.

A method call `super->meth` can be used in the same operand positions and in the same syntax forms as [`oref->meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html), and the same rules apply to the parameter passing.

Call of the implementation of the method `meth` in superclass `cls1` in the redefinition of the method in the subclass `cls2`.

Must be specified in an instance constructor implemented in a subclass to call the instance constructor of the direct superclasses. The following restrictions apply before the superclass constructor is called:

After the superclass constructor is called, the self-reference `me->` can be used and instance components can be accessed.

The superclass constructor can only be called using `super->constructor` as a [standalone statement](ABAPCALL_METHOD_STATIC_SHORT.html).

Call of the superclass constructor in instance constructor of a subclass. Without this call, a syntax error occurs.

-   The instance constructor does not have access to the instance components of its class. The self-reference [`me->`](ABENME.html) cannot be used. The static components of its class can be accessed, but not with `me->`.
-   Before the superclass constructor is called, an instance constructor cannot be exited using statements such as `RETURN` or `CHECK`.

-   During the execution of a superclass constructor called using `super->constructor`, `meth` and `me->meth` do not address the method implementations of the subclass, but those of the superclass instead.
-   The instance constructor of the superclass must be called, even if it is not declared explicitly.
-   See also [Inheritance and Constructors](ABENINHERITANCE_CONSTRUCTORS.html).

CLASS cls1 DEFINITION ABSTRACT. \\n PUBLIC SECTION. \\n METHODS meth. \\nENDCLASS. \\n\\ \\nCLASS cls1 IMPLEMENTATION. \\n METHOD meth. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS cls2 DEFINITION INHERITING FROM cls1. \\n PUBLIC SECTION. \\n METHODS meth REDEFINITION. \\nENDCLASS. \\n\\ \\nCLASS cls2 IMPLEMENTATION. \\n METHOD meth. \\n super->meth( ). \\n ... \\n ENDMETHOD. \\nENDCLASS. CLASS cls1 DEFINITION. \\n ... \\nENDCLASS. \\n\\ \\nCLASS cls2 DEFINITION INHERITING FROM cls1. \\n PUBLIC SECTION. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\nCLASS cls2 IMPLEMENTATION. \\n METHOD constructor. \\n super->constructor( ). \\n ... \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abenmethod\_calls.html abenmethod\_calls\_static.html abapcall\_method\_static\_short.html