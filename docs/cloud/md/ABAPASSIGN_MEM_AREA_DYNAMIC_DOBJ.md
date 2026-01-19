---
title: "ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ"
description: |
  ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.htm"
abapFile: "ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "field-symbol", "ABAPASSIGN", "MEM", "AREA", "DYNAMIC", "DOBJ"]
---

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

**This syntax is only supported temporarily in the current ABAP language version and must be replaced with valid syntax for that version.**.

In this dynamic variant of `mem_area`, the memory area is not specified [directly](ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html), but as content of a character-like data object `(dobj_name)` in parentheses. The following can be specified for `dobj_name`:

When the statement is executed, `dobj_name` is not evaluated until runtime in both cases. The name in `dobj_name` is structured in exactly the same way as if specified directly: When executing the statement, the content of `dobj_name` must be the name of a data object which may contain offsets and lengths, structure component selectors, and other [component selectors](ABENCOMPONENT_SELECTOR_GLOSRY.html) for assigning structure components, attributes in classes or attributes in objects. The content of `dobj_name` does not have to be in uppercase letters.

`dobj_name` can contain a chain of names consisting of component selectors. For an individual name or if the first name is followed by an object component selector (`->`), the specified data object is searched for according to the following hierarchy:

If the data object is found and the name is followed by an object component selector (`->`), the search for the following names is continued from left to right, as described under [`dynamic_access`](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html).

If the first name is followed by a class component selector (`=>`), the specified class is searched for, as described under [`dynamic_access`](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html), and the search is then continued accordingly from left to right.

When specifying a dereferenced data reference `dref` for `mem_area` using the dereferencing operator `->*`, the memory area of the data object is assigned to the field symbol to which `dref` points. If the reference variable `dref` does not reference a data object, the assignment is not performed and `sy-subrc` is set to 4.

Unlike all other operand positions, where a data reference that does not point to a data object raises an exception, no exception occurs in the statement `ASSIGN` and `sy-subrc` is set to 4.

Assigning a dereferenced data reference that is initial. Here, no exception occurs.

-   If `ELSE UNASSIGN` is not specified, the field symbol keeps its previous state.
-   If `ELSE UNASSIGN` is specified, no memory area is assigned to the field symbol. The field symbol has the state unassigned after the `ASSIGN` statement.

-   Literal or constants
-   If the data object `dobj_name` is specified as a character literal or as a constant, it can be evaluated statically, and the specified data object is recognized as the used object.
-   Variable
-   If the data object `dobj_name` is specified as a variable, it is specified only dynamically, and the content is not evaluated statically.

-   This variant should not be used any more. Especially for accessing structure components, [other variants](ABAPASSIGN_DYNAMIC_COMPONENTS.html) are preferable.
-   Writable expressions [`writable_exp`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) cannot be specified dynamically in `dobj_name`.
-   For internal use only, the name in `dobj_name` can also have the form *(PROG)DOBJ*, where *PROG* is the name of an ABAP program and *DOBJ* the name of a global data object of this program, whereby the name is not case-sensitive. In ABAP for Cloud Development no assignment is executed and `sy-subrc` is set to *4*.
-   Dynamically specifying a structure component using a structure component selector is less effective than using the addition `COMPONENT OF STRUCTURE`.

1.  If the statement is located in a [procedure](ABENPROCEDURE_GLOSRY.html), the system searches for the local data objects of the procedure.
2.  If the statement is located in a [method](ABENMETHOD_GLOSRY.html), the system searches in the visible attributes of a class in the method. In instance methods, this means a search of the [static type](ABENSTATIC_TYPE_GLOSRY.html) of `me` (special case of `cref->(attr_name)` in `[dynamic_access](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html)`).
3.  The system searches in the global data of the current program.
4.  If the statement is in an [instance method](ABENINSTANCE_METHOD_GLOSRY.html), the system searches in the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) of `me` (special case of `cref->(attr_name)` in `[dynamic_access](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html)`).

DATA dref TYPE REF TO data. \\n\\ \\nASSIGN dref->\* TO FIELD-SYMBOL() ELSE UNASSIGN. \\n\\ \\nIF sy-subrc <> 0. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_field\_symbols.html abapassign.html abapassign\_mem\_area.html