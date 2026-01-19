---
title: "ABENOBJECT_COMPONENT_SELECTOR"
description: |
  ABENOBJECT_COMPONENT_SELECTOR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOBJECT_COMPONENT_SELECTOR.htm"
abapFile: "ABENOBJECT_COMPONENT_SELECTOR.html"
keywords: ["select", "if", "try", "catch", "method", "class", "data", "field-symbol", "ABENOBJECT", "COMPONENT", "SELECTOR"]
---

Components of an object can be specified statically and dynamically.

The following syntax accesses a component `comp` of an object statically:

`ref->comp`

The symbol `->` is the object component selector. A reference variable `ref` must be specified as follows to the left of the object component selector:

The name `comp` of the component must be to the right of the object component selector. The object component selector dereferences the reference variable `ref` and makes the components of the referenced object accessible.

If an attempt is made to access a data object (access to an [instance attribute](ABENINSTANCE_ATTRIBUTE_GLOSRY.html) by an [object reference variable](ABENOBJECT_REFER_VARIABLE_GLOSRY.html) or access to a structure component by a [data reference variable](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html)) using a reference variable that contains the [null reference](ABENNULL_REFERENCE_GLOSRY.html), an uncatchable exception `OBJECTS_OBJREF_NOT_ASSIGNED` or `DATREF_NOT_ASSIGNED` is raised. If an attempt is made to call an [instance method](ABENINSTANCE_METHOD_GLOSRY.html) with a reference variable that contains the null reference, a catchable exception of the class `CX_SY_REF_IS_INITIAL` is raised.

If `ref` is a data reference variable, the character `*` can be specified after the object component selector `->`, which creates the general [dereferencing operator](ABENDEREFERENCING_OPERATOR.html)\\ `->*`. The expression `ref->*` labels the entire data object to which the data reference variable points. The dereferencing operator is the only way to dereference data references. The dereferencing operator cannot be specified after object reference variables. The instance components of classes can only be accessed using the expression `ref->comp`.

Accesses the public attribute `a1` of a class `c1` using an object reference variable `oref`.

CLASS c1 DEFINITION.\\ 
  PUBLIC SECTION.\\ 
    DATA a1 TYPE string READ-ONLY.\\ 
ENDCLASS.\\ 
\\ 
...\\ 
\\ 
DATA oref TYPE REF TO c1.\\ 
\\ 
... oref->a1 ...

The data reference variable `dref` is typed as a structure and the component `carrid` of the referenced structure is accessed using the object component selector. The expression `dref->carrid` has the same meaning as the chaining `dref->*-carrid`.

DATA dref TYPE REF TO sflight.\\ 
\\ 
...\\ 
\\ 
... dref->carrid ...

A component of an object can be specified dynamically with the following syntax:

`... \{ dref->(comp_name) \}\ |\ \{ cref->(attr_name) \}\ |\ \{ iref->(attr_name) \} ...`

The syntax and meaning is the same as for [dynamic components](ABAPASSIGN_DYNAMIC_COMPONENTS.html) and [dynamic access](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html) in the statement `ASSIGN` and the result of the expressions behave like an accordingly assigned field symbol of type `ANY`.

If the component is not found, an exception of class `CX_SY_ASSIGN_ILLEGAL_COMPONENT` occurs. This exception is also raised if the reference variable is initial.

Dynamic specification of a structure component and an interface attribute of an object.

Behavior for initial reference. The example shows that an initial reference leads to a catchable exception `CX_SY_ASSIGN_ILLEGAL_COMPONENT` for a dynamic target but to an uncatchable exception `DATREF_NOT_ASSIGNED` for a static target.

-   Name of a reference variable that can itself be a composite.
-   [Functional method call](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html) or [method chaining](ABENMETHOD_CHAINING_GLOSRY.html) with a reference variable as a result.
-   Single or chained [table expression](ABENTABLE_EXPRESSION_GLOSRY.html) whose result is a reference variable.
-   [Constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) with the [instance operator](ABENINSTANCE_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) or the [casting operator](ABENCASTING_OPERATOR_GLOSRY.html)\\ [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html).

-   If `ref` is an object reference variable, the components `comp` of the object - attributes and methods - to which the object reference variable points are addressed using the object component selector.
-   If `ref` is a data reference variable that is typed as a structure, the components `comp` of the structure to which the data reference variable points are addressed using the object component selector.

INTERFACE intf. \\n CONSTANTS attr TYPE string VALUE \`YYY\`. \\nENDINTERFACE. \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES intf. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(dref) = NEW scarr( carrid = 'XXX' ). \\n\\ \\n DATA(comp\_name) = \`carrid\`. \\n cl\_demo\_output=>write( dref->(comp\_name) ). \\n\\ \\n DATA iref TYPE REF TO intf. \\n FINAL(cref) = NEW cls( ). \\n iref = cref. \\n\\ \\n comp\_name = \`attr\`. \\n cl\_demo\_output=>write( iref->(comp\_name) ). \\n\\ \\n comp\_name = \`intf~\` && comp\_name. \\n cl\_demo\_output=>write( cref->(comp\_name) ). \\n\\ \\n cl\_demo\_output=>display( ). \\n ENDMETHOD. \\nENDCLASS. DATA dref TYPE REF TO scarr. \\nDATA target TYPE string. \\n\\ \\nTRY. \\n target = dref->('CARRID'). \\n CATCH cx\_sy\_assign\_illegal\_component. \\n DATA(exc) = 'X'. \\nENDTRY. \\nASSERT exc = 'X'. \\n\\ \\n"Runtime error DATREF\_NOT\_ASSIGNED \\n"target = dref->carrid. abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_data\_objects.html abenoperands\_names.html