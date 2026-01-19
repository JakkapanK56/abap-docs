---
title: "ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ"
description: |
  ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.htm"
abapFile: "ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "field-symbol", "ABAPASSIGN", "MEM", "AREA", "DYNAMIC", "DOBJ"]
---

[Short Reference](ABAPASSIGN_SHORTREF.html)

`... \{ (dobj_name) \}`\\ 
  `|\ \{ dref->* \}`\\ 
  `|\ \{ dobj INCREMENT inc \} ...`

[1. `... (dobj_name)`](#ABAP_ALTERNATIVE_1@2@)

[2. `... dref->*`](#ABAP_ALTERNATIVE_2@2@)

[3. `... dobj INCREMENT inc`](#ABAP_ALTERNATIVE_3@2@)

These variants for specifying the memory area [`mem_area`](ABAPASSIGN_MEM_AREA.html) of the statement [`ASSIGN`](ABAPASSIGN.html) dynamically are used to dynamically access data objects.

In an inline declaration of the field symbol using [`FIELD-SYMBOL(<fs>)`](ABENFIELD-SYMBOL_INLINE.html), its typing is performed with the generic type `data`.

In these variants, the statement `ASSIGN` sets the return code `sy-subrc`. If the assignment is successful, `sy-subrc` is set to 0, otherwise to 4. In these variants, no exception occurs in case of an unsuccessful assignment. If the assignment is not successful, the state of the field symbol depends on the addition [`ELSE UNASSIGN`](ABAPASSIGN_ELSE_UNASSIGN.html):

If `ELSE UNASSIGN` is not specified, it is not sufficient to evaluate the [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html)\\ [`<fs> IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html) but `sy-subrc` must be checked. If `ELSE UNASSIGN` is specified, the predicate expression as well as `sy-subrc` can be evaluated.

In this dynamic variant of `mem_area`, the memory area is not specified [directly](ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html), but as content of a character-like data object `(dobj_name)` in parentheses. The following can be specified for `dobj_name`:

When the statement is executed, `dobj_name` is not evaluated until runtime in both cases. The name in `dobj_name` is structured in exactly the same way as if specified directly: When executing the statement, the content of `dobj_name` must be the name of a data object which may contain offsets and lengths, structure component selectors, and other [component selectors](ABENCOMPONENT_SELECTOR_GLOSRY.html) for assigning structure components, attributes in classes or attributes in objects. The content of `dobj_name` does not have to be in uppercase letters.

`dobj_name` can contain a chain of names consisting of component selectors. For an individual name or if the first name is followed by an object component selector (`->`), the specified data object is searched for according to the following hierarchy:

If the data object is found and the name is followed by an object component selector (`->`), the search for the following names is continued from left to right, as described under [`dynamic_access`](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html).

If the first name is followed by a class component selector (`=>`), the specified class is searched for, as described under [`dynamic_access`](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html), and the search is then continued accordingly from left to right.

Dynamic output of the content of any system field. The validity of the input is checked before it is dynamically assigned with `(name)` to field symbol `syfield` using classes of [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) for structure `SYST`

When specifying a dereferenced data reference `dref` for `mem_area` using the dereferencing operator `->*`, the memory area of the data object is assigned to the field symbol to which `dref` points. If the reference variable `dref` does not reference a data object, the assignment is not performed and `sy-subrc` is set to 4.

Unlike all other operand positions, where a data reference that does not point to a data object raises an exception, no exception occurs in the statement `ASSIGN` and `sy-subrc` is set to 4.

Assigning a dereferenced data reference that is initial. Here, no exception occurs.

This expression for `mem_area` assigns a memory area to the field symbol that has exactly the same length as the memory area of `dobj` and is incremented `inc` times this length in reference to the memory area of `dobj`. `inc` expects a numeric data object. A data object or a field symbol must be specified directly for `dobj`. Offset or length specifications or the dereferencing of a data reference are not possible. The field symbol cannot be declared via an inline declaration [`FIELD-SYMBOL(<fs>)`](ABENFIELD-SYMBOL_INLINE.html).

The dynamic `ASSIGN` variant with `INCREMENT` is designed for sequential access to similar memory areas that are located at regular intervals after each other, such as consecutive structure components of the same data type. In all other cases, `ASSIGN ... INCREMENT` should be used carefully. Note in particular:

After the `ASSIGN` statement, the field symbol points to the fourth component `col4`. See the example for the addition [`RANGE`](ABAPASSIGN_RANGE.html).

[Field Symbols, `ASSIGN INCREMENT`](ABENASSIGN_INCREMENT_ABEXA.html)

-   If `ELSE UNASSIGN` is not specified, the field symbol keeps its previous state.
-   If `ELSE UNASSIGN` is specified, no memory area is assigned to the field symbol. The field symbol has the state unassigned after the `ASSIGN` statement.

-   Literal or constants
-   If the data object `dobj_name` is specified as a character literal or as a constant, it can be evaluated statically, and the specified data object is recognized as the used object.
-   Variable
-   If the data object `dobj_name` is specified as a variable, it is specified only dynamically, and the content is not evaluated statically.

-   This variant should not be used any more. Especially for accessing structure components, [other variants](ABAPASSIGN_DYNAMIC_COMPONENTS.html) are preferable.
-   Writable expressions [`writable_exp`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) cannot be specified dynamically in `dobj_name`.
-   For internal use only, the name in `dobj_name` can also have the form *(PROG)DOBJ*, where *PROG* is the name of an ABAP program and *DOBJ* the name of a global data object of this program, whereby the name is not case-sensitive. In Standard ABAP, the data object *DOBJ* is searched in program *PROG* if it is loaded into the same [internal session](ABENINTERNAL_SESSION_GLOSRY.html) as the current program when the statement `ASSIGN` is executed, and the field symbol points to this data object if the assignment was successful. In ABAP for Cloud Development no assignment is executed and `sy-subrc` is set to *4*.
-   Dynamically specifying a structure component using a structure component selector is less effective than using the addition `COMPONENT OF STRUCTURE`.
-   For the latter see the [executable example](ABENASSIGN_COMPONENT_ABEXA.html).
-   In an obsolete variant, the addition [`TABLE FIELD`](ABAPASSIGN_TABLE_FIELD.html) can be specified before `dobj_name` to restrict the search to table work areas.
-   If an attribute of a class of a different program is specified in `dobj_name` using an [absolute type name](ABENABSOLUTE_TYPENAME_GLOSRY.html) and followed by the class component selector (`=>`), it is loaded into a new [additional program group](ABENADDITIONAL_PROG_GROUP_GLOSRY.html) or into the current [program group](ABENPROGRAM_GROUP_GLOSRY.html), depending on the program type, if it has not yet been loaded. Any existing [program constructors](ABENPROGRAM_CONSTRUCTOR_GLOSRY.html) are not executed, however, unlike in a real [`dynamic_access`](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html).

-   Usually the addition [`RANGE`](ABAPASSIGN_RANGE.html) must be used to defined the area, within which it is possible to work with `INCREMENT`.
-   The assigned memory area is handled using the data type `dobj` if the addition `CASTING` is not specified in [`casting_spec`](ABAPASSIGN_CASTING.html). This means that an implicit casting of the assigned memory areas to the data type of `dobj` is performed.
-   The [typing check](ABENTYPING_CHECK_GENERAL.html) also refers to `dobj`, but is performed only when the statement is executed.
-   Runtime errors always occur if the following general rule is violated: If [deep](ABENDEEP_GLOSRY.html) data objects that are in the assigned memory area do not match the typing in their type and position.

1.  If the statement is located in a [procedure](ABENPROCEDURE_GLOSRY.html), the system searches for the local data objects of the procedure.
2.  If the statement is located in a [method](ABENMETHOD_GLOSRY.html), the system searches in the visible attributes of a class in the method. In instance methods, this means a search of the [static type](ABENSTATIC_TYPE_GLOSRY.html) of `me` (special case of `cref->(attr_name)` in `[dynamic_access](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html)`).
3.  The system searches in the global data of the current program.
4.  The system searches in the interface work areas of the [main program](ABENMAIN_PROGRAM_GLOSRY.html) of the current program group declared using `TABLES`.
5.  If the statement is in an [instance method](ABENINSTANCE_METHOD_GLOSRY.html), the system searches in the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) of `me` (special case of `cref->(attr_name)` in `[dynamic_access](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html)`).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(name) = \`sy-uzeit\`. \\ncl\_demo\_input=>request( EXPORTING text = \`System field\` \\n CHANGING field = name ). \\nname = to\_upper( name ). \\n\\ \\nFINAL(components) = CAST cl\_abap\_structdescr( \\n cl\_abap\_typedescr=>describe\_by\_name( 'SYST' ) )->components. \\nIF NOT line\_exists( components\[ name = replace( val = name \\n sub = \`SY-\` \\n with = \`\` ) \] ). \\n out->display( \`Unknown system field\` ). \\n RETURN. \\nENDIF. \\n\\ \\nASSIGN (name) TO FIELD-SYMBOL(). \\n\\ \\nIF sy-subrc = 0. \\n out->write( |\\{ name \\}: \\{ \\}| ). \\nENDIF. \\n\\ \\nout->display( ). DATA dref TYPE REF TO data. \\n\\ \\nASSIGN dref->\* TO FIELD-SYMBOL() ELSE UNASSIGN. \\n\\ \\nIF sy-subrc <> 0. \\n ... \\nENDIF. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n BEGIN OF struct, \\n col1 TYPE string VALUE \`COL1\`, \\n col2 TYPE string VALUE \`COL2\`, \\n col3 TYPE string VALUE \`COL3\`, \\n col4 TYPE string VALUE \`COL4\`, \\n col5 TYPE string VALUE \`COL5\`, \\n END OF struct. \\n\\ \\nFIELD-SYMBOLS TYPE string. \\nASSIGN struct-col1 INCREMENT 3 TO RANGE struct. \\n\\ \\nout->write( ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_field\_symbols.html abapassign.html abapassign\_mem\_area.html