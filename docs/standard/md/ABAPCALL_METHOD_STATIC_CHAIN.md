---
title: "ABAPCALL_METHOD_STATIC_CHAIN"
description: |
  ABAPCALL_METHOD_STATIC_CHAIN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_METHOD_STATIC_CHAIN.htm"
abapFile: "ABAPCALL_METHOD_STATIC_CHAIN.html"
keywords: ["select", "if", "method", "class", "data", "ABAPCALL", "METHOD", "STATIC", "CHAIN"]
---

``... \{\ [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html)( ... )->[`meth1`](ABAPCALL_METHOD_METH_IDENT_STAT.html)( ... )->meth2( ... )->...->[`methn`](ABAPCALL_METHOD_METH_IDENT_STAT.html)( ... ) \}\    |\ \{\ [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html)( ... )->meth1( ... )->meth2( ... )->...->attr        \} ...``

[1. `meth( ... )->meth1( ... )->meth2( ... )->...->methn( ... )`](#ABAP_ALTERNATIVE_1@2@)

[2. `meth( ... )->meth1( ... )->meth2( ... )->...->attr`](#ABAP_ALTERNATIVE_2@2@)

Chaining of static method calls to a chained method call or a chained attribute access. [`meth`](ABAPCALL_METHOD_METH_IDENT_STAT.html), [`meth1`](ABAPCALL_METHOD_METH_IDENT_STAT.html), [`meth2`](ABAPCALL_METHOD_METH_IDENT_STAT.html), ..., expect [functional methods](ABAPCALL_METHOD_FUNCTIONAL.html) whose return values are reference variables that point to objects with the next method in question. All methods that follow `meth` must be called using the object component selector.

The parameters are passed to the functional methods `meth`, `meth1`, `meth2`, ... using the syntax valid for [functional method calls](ABAPCALL_METHOD_FUNCTIONAL.html).

Each method call sets the system field `sy-subrc` to 0 in the moment the method is called.

Chained method call. Call of the instance method `methn` of an object. The reference variable for the object is the return value of the preceding method chaining.

A chained method call can be specified as a [standalone statement](ABAPCALL_METHOD_STATIC_SHORT.html) or as a [functional method call](ABAPCALL_METHOD_FUNCTIONAL.html) in a suitable [operand position](ABENEXPRESSION_POSITIONS.html). The relevant rules apply in parameter passing to `meth`.

If the return value of the last method has a structured data type, the chained method call can, like a structure, be listed in front of the [structure component selector](ABENSTRUCTURE_COMPONENT_SEL_GLOSRY.html)\\ `-` and be used to access a component of the structure.

In `methn`, a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) can be specified with a [constructor operator](ABENCONSTRUCTOR_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) or [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html) for `oref` not only in a functional call, but also in standalone statements.

Call of the method `m3` of an object of the class `c3` that is addressed using method chaining.

Chained attribute access. Access to the instance attribute `attr` of an object. The reference variable for the object is the return value of the preceding method chaining.

If the attribute has a structured data type, the chained attribute access can, like a structure, be listed in front of the [structure component selector](ABENSTRUCTURE_COMPONENT_SEL_GLOSRY.html)\\ `-` and be used to access a component of the structure.

Chained attribute access can currently only be specified in suitable [read positions](ABENEXPRESSION_POSITIONS.html). Writes to an attribute addressed using method chaining are not yet possible.

Chained attribute access in example class `CL_DEMO_METHOD_CHAINING`.

[Method Chaining](ABENMETHOD_CHAINING_ABEXA.html)

CLASS c3 DEFINITION. \\n PUBLIC SECTION. \\n METHODS m3 CHANGING c3 TYPE string. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION. \\n PUBLIC SECTION. \\n METHODS m2 IMPORTING i2 TYPE string \\n RETURNING VALUE(r2) TYPE REF TO c3. \\nENDCLASS. \\n\\ \\nCLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS m1 IMPORTING i1 TYPE string \\n RETURNING VALUE(r1) TYPE REF TO c2. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD m1. \\n CREATE OBJECT r1. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS c2 IMPLEMENTATION. \\n METHOD m2. \\n CREATE OBJECT r2. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS c3 IMPLEMENTATION. \\n METHOD m3. \\n c3 = 'New text'. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA txt TYPE string VALUE \`test\`. \\n c1=>m1( \\n i1 = \`p1\` )->m2( \\n i2 = \`p2\` )->m3( \\n CHANGING c3 = txt ). \\n ENDMETHOD. \\nENDCLASS. cl\_demo\_output=>display( \\n NEW demo( )->meth( \\n \`Hello \` )->meth( \`world\` )->meth( \`!\` )->text ). abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abenmethod\_calls.html abenmethod\_calls\_static.html