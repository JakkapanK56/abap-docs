---
title: "ABENNEW_CONSTRUCTOR_PARAMS_CLASS"
description: |
  ABENNEW_CONSTRUCTOR_PARAMS_CLASS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEW_CONSTRUCTOR_PARAMS_CLASS.htm"
abapFile: "ABENNEW_CONSTRUCTOR_PARAMS_CLASS.html"
keywords: ["select", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "ABENNEW", "CONSTRUCTOR", "PARAMS", "CLASS"]
---

``... NEW class|#( [[`let_exp`](ABAPLET.html)] p1 = a1 p2 = a2 ... ) ...``

If a class `class` is specified or `#` stands for a class like this, the non-optional input parameters `p1 p2 ...` of the instance constructor of the instantiated class must be filled with the type-compliant actual parameters `a1 a2 ...` The optional input parameters do not need to but can be filled. The description of the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT_PARAMETERS.html) specifies how parameters are passed and which classes can be used. [No parameters](ABENNEW_CONSTRUCTOR_PARAMS_INITIAL.html) are passed for a class without an explicit instance constructor. An optional `LET` expression [`let_exp`](ABAPLET.html) can be specified in front of the parameter to define local helper fields.

Like an object reference variable of the type `class`, a constructor expression `NEW class( ... )` can be specified in front of the [object component selector](ABENOBJECT_COMPONENT_SELECT_GLOSRY.html)\\ `->` and in [chained attribute accesses](ABENCHAINED_ATTRIBUTE_ACC_GLOSRY.html) and [chained method calls](ABENCHAINED_METHOD_CALL_GLOSRY.html).

`... NEW class( ... )->attr|('attr_name') ...`

`... NEW class( ... )->meth( ... ) ...`

An attribute can be specified [statically](ABENOBJECT_COMPONENT_SELECTOR.html) as `attr` or [dynamically](ABENOBJECT_COMPONENT_SELECTOR.html) as content of a character-like data object `attr_name` in parentheses. If a dynamically specified attribute is not found, an exception of class `CX_SY_ASSIGN_ILLEGAL_COMPONENT` is raised. A method `meth` can be specified statically only.

A chained method call of this type can be specified as a [standalone statement](ABAPCALL_METHOD_STATIC_CHAIN.html) or a [functional method call](ABAPCALL_METHOD_FUNCTIONAL.html). The result is then preserved for the duration of the statement. Even a single expression without a subsequent object component selector can be executed as a standalone statement. In this case, only the constructor that has a reference to the created object elsewhere is executed if this object needs to be preserved.

In the case of an attribute access `NEW class( ... )->attr`, the following applies specifically:

[Method chainings](ABENMETHOD_CHAINING_GLOSRY.html) cannot be specified between the constructor expression and the attribute here.

Construction of an instance of the class `c1` when the method `m2` of the class `c2` is called, which requires an input parameter of this type.

Use of a constructor expression with `NEW` in various positions. The temporary reference variable created using `NEW` is persisted during each statement. The example also shows dynamic specifications and the exception that is raised in case of an invalid attribute.

Display of an UTC time stamp created in a constructor that only exists while the statement is being executed.

[Instance Operator `NEW` on the Left](ABENNEW_ON_THE_LEFT_ABEXA.html)

-   It can be specified as a [writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html) in a [result position](ABENRESULT_POSITION_GLOSRY.html).
-   If the data type is suitable, an [offset/length specification](ABENOFFSET_LENGTH_SPECIFIC_GLOSRY.html)\\ [`+off(len)`](ABENOFFSET_LENGTH.html) can be appended unless the chaining is used as [memory area](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) in the statement `ASSIGN`.

-   This is a functional call of the instance constructor. As in [functional calls](ABAPCALL_METHOD_FUNCTIONAL.html) of [functional methods](ABAPMETHODS_FUNCTIONAL.html), no [non-class-based exceptions](ABENEXCEPTIONS_NON_CLASS.html) can be handled.
-   When the instance constructor is called, the return code `sy-subrc` is set to 0. Values other than 0 are not possible, since non-class-based exceptions cannot be handled.

CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n METHODS constructor IMPORTING p1 TYPE i p2 TYPE i. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD constructor. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS m2 IMPORTING oref TYPE REF TO c1. \\nENDCLASS. \\n\\ \\nCLASS c2 IMPLEMENTATION. \\n METHOD m2. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n c2=>m2( NEW #( p1 = 1 p2 = 2 ) ). \\n ENDMETHOD. \\nENDCLASS. CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n DATA a1 TYPE i. \\n METHODS: m1 RETURNING VALUE(p) TYPE i, \\n m2. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD m1. \\n ... \\n ENDMETHOD. \\n METHOD m2. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA num TYPE i. \\n\\ \\n num = NEW c1( )->a1. \\n NEW c1( )->a1 = num. \\n num = NEW c1( )->m1( ). \\n NEW c1( )->m2( ). \\n NEW c1( ). \\n\\ \\n TRY. \\n num = NEW c1( )->('a1'). \\n CATCH cx\_sy\_assign\_illegal\_component. \\n DATA(exc) = 'X'. \\n ENDTRY. \\n ASSERT exc IS INITIAL. \\n\\ \\n TRY. \\n num = NEW c1( )->('x1'). \\n CATCH cx\_sy\_assign\_illegal\_component. \\n exc = 'X'. \\n ENDTRY. \\n ASSERT exc IS NOT INITIAL. \\n\\ \\n ENDMETHOD. \\nENDCLASS. CLASS utc DEFINITION. \\n PUBLIC SECTION. \\n DATA ts TYPE utclong. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\nCLASS utc IMPLEMENTATION. \\n METHOD constructor. \\n ts = utclong\_current( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n cl\_demo\_output=>display\_text( \\n |\\{ NEW utc( )->ts TIMESTAMP = ISO \\}| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abenconstructor\_expression\_new.html