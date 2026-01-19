---
title: "ABENCONSTRUCTOR_EXPRESSION_CAST"
description: |
  ABENCONSTRUCTOR_EXPRESSION_CAST - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONSTRUCTOR_EXPRESSION_CAST.htm"
abapFile: "ABENCONSTRUCTOR_EXPRESSION_CAST.html"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "ABENCONSTRUCTOR", "EXPRESSION", "CAST"]
---

``... CAST type( [[`let_exp`](ABAPLET.html)] dobj ) ...``

A [constructor expression](ABENCONSTRUCTOR_EXPRESSIONS.html) with the casting operator `CAST` performs a [downcast](ABENDOWN_CAST_GLOSRY.html) or an [upcast](ABENUP_CAST_GLOSRY.html) for the argument `dobj` and creates a reference variable of the static type `type` as a result. `type` can be specified as:

The parentheses must contain exactly one operand `dobj`:

`dobj` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

The casting of `dobj` to the specified type takes place in accordance with the same rules as for the [casting operator](ABENCASTING_OPERATOR_GLOSRY.html)\\ [`?=`](ABAPMOVE_CAST.html). If the specified type `type` is more specific than the static type of `dobj`, it is a [downcast](ABENDOWN_CAST_GLOSRY.html). If `type` is more general than the static type of `dobj`, it is an explicit [upcast](ABENUP_CAST_GLOSRY.html).

In [general expression positions](ABENGENERAL_EXPRESSION_POSITIONS.html), [functional positions](ABENFUNCTIONAL_POSITIONS.html) and [result positions](ABENRESULT_POSITION_GLOSRY.html), a constructor expression `CAST dtype( ... )` can be placed in front of `->` as follows:

A single `CAST` expression not followed by the object component selector `->` can be specified as a standalone statement. This makes it possible to test the feasibility of a downcast by catching the associated exception `CX_SY_MOVE_CAST_ERROR`.

If a single expression points to a data object or a component of a data object using exactly one following object component selector, `->`:

An optional `LET` expression [`let_exp`](ABAPLET.html) can be specified in front of the operand to define local helper fields.

The source code section below shows two equally valid downcasts with the two possible [casting operators](ABENCASTING_OPERATOR_GLOSRY.html)\\ `?=` and `CAST`. Before the actual cast, its feasibility is checked using the predicate expression [`IS INSTANCE OF`](ABENLOGEXP_INSTANCE_OF.html).

Use of the dereferencing operator and component selector in `CAST` with data types. The constructor expressions can be used as [writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html) on the right and left side of assignments with the [assignment operator `=`](ABENEQUALS_OPERATOR.html).

Introducing a method chaining with a `CAST` operator.

[RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html) often requires a helper variable to perform a downcast of a type description object to a specialized class. These examples show how helper variables can be reduced by using the operator `CAST`.

The factory method of the following class returns a reference variable of the type of the class itself. To use interface variables to access the components declared in the interface `if`, as recommended, the variable `iref`, declared inline, is cast to the type of the interface.

The following example shows static and dynamic specifications of components and how the system reacts to wrong specifications or to initial reference variables.

-   any non-generic data type `dtype` or the completely generic data type `data`
-   any [object type](ABENOBJECT_TYPE_GLOSRY.html) (class or interface) including the completely generic object type `object`.
-   The `#` character as a symbol for the [operand type](ABENOPERAND_TYPE_GLOSRY.html). This specification is only possible if the data type required in an operand position is unique and completely identifiable at compile time.

-   If a data type is specified, `dobj` must be a data reference variable `dref`.
-   If an object type is used, `dobj` must be an object reference variable `oref`.

-   Like a data reference variable of static type `dtype`, the constructor expression can be followed by the [dereferencing operator](ABENDEREFERENCING_OPERAT_GLOSRY.html):
-   `... CAST dtype( ... dref )->*`
-   The result of this expression is the anonymous data object referenced by `dref`. If `dref` is initial, the uncatchable exception `DATREF_NOT_ASSIGNED` is raised.
-   Like a data reference variable of a structured static type `dtype`, the constructor expression can be followed by the [object component selector](ABENOBJECT_COMPONENT_SELECT_GLOSRY.html)\\ `->` pointing to a component of the structure:
-   `... CAST dtype( ... dref )->comp|('comp_name') ...`
-   The component can be specified statically as `comp` or dynamically as content of a character-like data object `comp_name`. If a dynamically specified component is not found, an exception of class `CX_SY_ASSIGN_ILLEGAL_COMPONENT` is raised. If `dref` is initial, the uncatchable exception `DATREF_NOT_ASSIGNED` is raised for static component specification and an exception of class `CX_SY_ASSIGN_ILLEGAL_COMPONENT` is raised for dynamic component specification.
-   Like an object reference variable of a static class type `class` or interface type `intf`, the constructor expression can be followed by the [object component selector](ABENOBJECT_COMPONENT_SELECT_GLOSRY.html), pointing to:

-   An attribute of the class or interface:
-   `... CAST class|intf( ... oref )->attr|('attr_name') ...`
-   The attribute can be specified statically as `attr` or dynamically as content of a character-like data object `attr_name`. If a dynamically specified component is not found, an exception of class `CX_SY_ASSIGN_ILLEGAL_COMPONENT` is raised. If `oref` is initial, the uncatchable exception `OBJECTS_OBJREF_NOT_ASSIGNED` is raised for static component specification and an exception of class `CX_SY_ASSIGN_ILLEGAL_COMPONENT` is raised for dynamic component specification.
-   A method of the class or interface:
-   `... CAST class|intf( ... oref )->meth( ... ) ...`
-   The method can be specified only statically. Both [standalone method calls](ABAPCALL_METHOD_STATIC_SHORT.html) and [functional method calls](ABAPCALL_METHOD_FUNCTIONAL.html) are possible. Such a `CAST` expression can also introduce [chained method calls](ABENCHAINED_METHOD_CALL_GLOSRY.html). If `oref` is initial, the uncatchable exception `OBJECTS_OBJREF_NOT_ASSIGNED` is raised.

-   It can be specified as a [writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html) in a [result position](ABENRESULT_POSITION_GLOSRY.html). The type of the result must be convertible to the data type `type` with the restriction: If the result is the result of a [bit expression](ABENBIT_EXPRESSION_GLOSRY.html), `type` must be byte-like or character-like with the type `c` or `string`.
-   An [offset/length specification](ABENOFFSET_LENGTH_SPECIFIC_GLOSRY.html)\\ [`+off(len)`](ABENOFFSET_LENGTH.html) can be appended if the data type is suitable, unless the chaining is used as a [memory area](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) of the statement `ASSIGN`.

-   The casting operator `CAST` is suitable for avoiding the declaration of helper variables that are only necessary for downcasts.
-   Explicit upcasts with the casting operator `CAST` are suitable for determining a more general type of a declared reference variable in [inline declarations](ABENINLINE_DECLARATIONS.html).
-   No empty parentheses can be specified after `CAST`.
-   Unlike [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html), `CAST` works with an existing reference variable, which means that the result does not need to be saved to persist the referenced object.
-   The predicate expression [`IS INSTANCE OF`](ABENLOGEXP_INSTANCE_OF.html) or the case distinction [`CASE TYPE OF`](ABAPCASE_TYPE.html) can be used to check whether a cast is possible to specific classes or interfaces.
-   Downcasts are also possible using the `INTO` addition of the statement [`WHEN TYPE`](ABAPWHEN_TYPE.html) of a case distinction using [`CASE TYPE OF`](ABAPCASE_TYPE.html).
-   The constructor operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) is related to `CAST` but performs a [conversion](ABENCONVERSION_GLOSRY.html) instead of a [casting](ABENCAST_CASTING_GLOSRY.html).

CLASS c1 DEFINITION. \\nENDCLASS. \\nCLASS c2 DEFINITION INHERITING FROM c1. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA: oref1 TYPE REF TO c1, \\n oref2 TYPE REF TO c2. \\n\\ \\n oref1 = NEW c2( ). \\n\\ \\n IF oref1 IS INSTANCE OF c2. \\n oref2 ?= oref1. \\n oref2 = CAST #( oref1 ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. TYPES: BEGIN OF t\_struc, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF t\_struc. \\n\\ \\nDATA dref TYPE REF TO data. \\nDATA struc TYPE t\_struc. \\n\\ \\ndref = NEW t\_struc( ). \\n\\ \\nstruc = CAST t\_struc( dref )->\*. \\nstruc-col1 = CAST t\_struc( dref )->col1. \\nstruc-col2 = CAST t\_struc( dref )->col2. \\n\\ \\nCAST t\_struc( dref )->\* = struc. \\nCAST t\_struc( dref )->col1 = struc-col1. \\nCAST t\_struc( dref )->col2 = struc-col2. INTERFACE intf. \\nENDINTERFACE. \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES intf. \\n METHODS: \\n meth1 RETURNING VALUE(r) TYPE REF TO cls, \\n meth2. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth1. \\n r = me. \\n ENDMETHOD. \\n METHOD meth2. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n out->write( 'meth2' ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA iref TYPE REF TO intf. \\n\\ \\n iref = NEW cls( ). \\n\\ \\n CAST cls( iref )->meth1( )->meth2( ). \\n ENDMETHOD. \\nENDCLASS. FINAL(attributes) = \\n CAST cl\_abap\_classdescr( \\n cl\_abap\_classdescr=>describe\_by\_name( 'CL\_ABAP\_FORMAT' ) \\n )->attributes. \\n\\ \\nFINAL(components) = \\n CAST cl\_abap\_structdescr( \\n cl\_abap\_typedescr=>describe\_by\_name( 'T100' ) \\n )->components. \\n\\ \\nFINAL(no\_of\_components) = \\n lines( CAST cl\_abap\_structdescr( \\n cl\_abap\_typedescr=>describe\_by\_name( 'SYST' ) \\n )->get\_components( ) ). INTERFACE if. \\n ... \\nENDINTERFACE. \\n\\ \\nCLASS cl DEFINITION CREATE PRIVATE. \\n PUBLIC SECTION. \\n INTERFACES if. \\n CLASS-METHODS factory RETURNING VALUE(ref) TYPE REF TO cl. \\n ... \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS cl IMPLEMENTATION. \\n METHOD factory. \\n ref = NEW #( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(iref) = CAST if( cl=>factory( ) ). \\n ENDMETHOD. \\nENDCLASS. TYPES: \\n BEGIN OF struc, \\n col TYPE i, \\n END OF struc. \\n\\ \\nINTERFACE intf. \\nENDINTERFACE. \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES intf. \\n DATA attr TYPE string VALUE 'foo'. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA dref TYPE REF TO data. \\n DATA iref TYPE REF TO intf. \\n\\ \\n dref = NEW struc( col = 111 ). \\n iref = NEW cls( ). \\n\\ \\n\\ \\n DATA(num) = CAST struc( dref )->col. \\n ASSERT num = 111. \\n DATA(txt) = CAST cls( iref )->attr. \\n ASSERT txt = 'foo'. \\n\\ \\n CLEAR num. \\n num = CAST struc( dref )->('col'). \\n ASSERT num = 111. \\n CLEAR txt. \\n txt = CAST cls( iref )->('attr'). \\n ASSERT txt = 'foo'. \\n\\ \\n DATA(exc) = 0. \\n TRY. \\n num = CAST struc( dref )->('foo'). \\n CATCH cx\_sy\_assign\_illegal\_component. \\n exc += 1. \\n ENDTRY. \\n TRY. \\n txt = CAST cls( iref )->('foo'). \\n CATCH cx\_sy\_assign\_illegal\_component. \\n exc += 1. \\n ENDTRY. \\n CLEAR dref. \\n TRY. \\n num = CAST struc( dref )->('col'). \\n CATCH cx\_sy\_assign\_illegal\_component. \\n exc += 1. \\n ENDTRY. \\n CLEAR iref. \\n TRY. \\n txt = CAST cls( iref )->('attr'). \\n CATCH cx\_sy\_assign\_illegal\_component. \\n exc += 1. \\n ENDTRY. \\n ASSERT exc = 4. \\n\\ \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n"Runtime error DATREF\_NOT\_ASSIGNED \\n"num = CAST struc( dref )->col. \\n"Runtime error OBJECTS\_OBJREF\_NOT\_ASSIGNED \\n"txt = CAST cls( iref )->attr. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_references.html