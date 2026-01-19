---
title: "ABAPCALL_METHOD_METH_IDENT_DYNA"
description: |
  ABAPCALL_METHOD_METH_IDENT_DYNA - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCALL_METHOD_METH_IDENT_DYNA.htm"
abapFile: "ABAPCALL_METHOD_METH_IDENT_DYNA.html"
keywords: ["if", "case", "method", "class", "data", "types", "ABAPCALL", "METHOD", "METH", "IDENT", "DYNA"]
---

`... (meth_name)`\\ 
  `| oref->(meth_name)`\\ 
  `| class=>(meth_name)`\\ 
  `| (class_name)=>(meth_name)`\\ 
  `| (class_name)=>meth ...`

[1. `... (meth_name) ...`](#ABAP_ADDITION_1@3@)

[2. `... (class_name) ...`](#ABAP_ADDITION_2@3@)

[1. `... (meth_name) ...`](#ABAP_ALTERNATIVE_1@2@)

[2. `... oref->(meth_name) ...`](#ABAP_ALTERNATIVE_2@2@)

[3. `... class=>(meth_name) ...`](#ABAP_ALTERNATIVE_3@2@)

[4. `... (class_name)=>(meth_name) ...`](#ABAP_ALTERNATIVE_4@2@)

[5. `... (class_name)=>meth ...`](#ABAP_ALTERNATIVE_5@2@)

These names are used to specify methods dynamically.

`meth_name` expects a character-like field that must contain the name of a method when the statement is executed.

`class_name` expects a character-like field that must contain the name of a class in uppercase letters when the statement is executed. An [absolute type name](ABENABSOLUTE_TYPENAME_GLOSRY.html) can also be specified. The following can be specified for `class_name`:

When the statement is executed, `class_name` is not evaluated until runtime (in both cases).

This variant is only possible for methods of the same class. It works like `me->(meth_name)` (see alternative 2).

This form is possible for all visible methods of objects. `oref` can be any [class reference variable](ABENCLASS_REFERENCE_VARIABL_GLOSRY.html) or [interface reference variable](ABENINTERFACE_REF_VARIABLE_GLOSRY.html) that points to an object containing the method or interface method specified in `meth_name`. The system first searches in the [static type](ABENSTATIC_TYPE_GLOSRY.html) and then in the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) of `oref` for the method.

These forms are possible for all visible static methods. Both the class and method can be specified dynamically. The class `class` and the method `meth` can also be specified directly.

For alternatives with a dynamic class specification `(class_name)`, the system first searches the class and then the method. If `class` is specified statically, the search for the method is carried out in the existing class.

This example demonstrates different types of dynamic method calls.

-   Literal or constants
-   If the data object `class_name` is specified as a character literal or as a constant, it can be evaluated statically, and the specified class is recognized as the used object.
-   Variable
-   If the data object `class_name` is specified as a variable, it is specified only dynamically, and the content is not evaluated statically.

-   In dynamic access as in static access, interface reference variables cannot be used to access any components, only interface components.

-   Methods of local classes can be called externally only by specifying the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html). In the case of classes defined in an [include program](ABENINCLUDE_PROGRAM_GLOSRY.html), the name of the include program cannot be used.

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth1. \\n PRIVATE SECTION. \\n METHODS: meth2, \\n meth3. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD meth1. \\n FINAL(oref) = NEW demo( ). \\n FINAL(meth) = \`METH2\`. \\n CALL METHOD oref->(meth). \\n ENDMETHOD. \\n METHOD meth2. \\n FINAL(meth) = \`METH3\`. \\n CALL METHOD (meth). \\n ENDMETHOD. \\n METHOD meth3. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n out->write( 'called' ). \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(class) = \`CLS\`. \\n FINAL(meth) = \`METH1\`. \\n CALL METHOD (class)=>(meth). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abenmethod\_calls.html abenmethod\_calls\_dynamic.html abapcall\_method\_dynamic.html