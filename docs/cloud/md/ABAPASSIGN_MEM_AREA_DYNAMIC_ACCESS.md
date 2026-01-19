---
title: "ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS"
description: |
  ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.htm"
abapFile: "ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "field-symbol", "ABAPASSIGN", "MEM", "AREA", "DYNAMIC", "ACCESS"]
---

`... \{ cref->(attr_name) \}`\\ 
  `|\ \{ iref->(attr_name) \}`\\ 
  `|\ \{ (clif_name)=>(attr_name) \}`\\ 
  `|\ \{ (clif_name)=>attr \}`\\ 
  `|\ \{ clif=>(attr_name) \} ...`

[1. `... cref->(attr_name)`](#ABAP_ALTERNATIVE_1@2@)

[2. `... iref->(attr_name)`](#ABAP_ALTERNATIVE_2@2@)

[3. `... (clif_name)=>(attr_name)`](#ABAP_ALTERNATIVE_3@2@)

[4. `... (clif_name)=>attr`](#ABAP_ALTERNATIVE_4@2@)

[5. `... clif=>(attr_name)`](#ABAP_ALTERNATIVE_5@2@)

These variants for specifying the memory area [`mem_area`](ABAPASSIGN_MEM_AREA.html) of the statement [`ASSIGN`](ABAPASSIGN.html) dynamically are designed especially for dynamic access to attributes of classes or interfaces (Dynamic Access). The same syntax as for alternatives 1 and 2 is also possible for [components of structures](ABAPASSIGN_DYNAMIC_COMPONENTS.html).

In an inline declaration of the field symbol using [`FIELD-SYMBOL(<fs>)`](ABENFIELD-SYMBOL_INLINE.html), its typing is performed with the generic type `data`.

In these variants, the statement `ASSIGN` sets the return code `sy-subrc`. If the assignment is successful, `sy-subrc` is set to 0. If the assignment is not successful, `sy-subrc` is set to 4. In these variants, no exception occurs in case of an unsuccessful assignment. If `sy-subrc` is set to 4, the state of the field symbol depends on the addition [`ELSE UNASSIGN`](ABAPASSIGN_ELSE_UNASSIGN.html):

This form is possible for all visible attributes of objects. `cref` can be any [class reference variable](ABENCLASS_REFERENCE_VARIABL_GLOSRY.html) that points to an object that contains the attribute specified in a character-like field `attr_name`. The attribute is searched for first in the [static type](ABENSTATIC_TYPE_GLOSRY.html) of `cref` and then in the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html).

The attribute name does not have to be in uppercase letters. It can contain offsets/lengths, structure component selectors, object component selectors, and class component selectors, in order to assign parts of the attribute or referenced objects of the attribute.

Unlike all other operand positions, where an object reference that does not point to an object raises an exception, no exception occurs in the statement `ASSIGN` and `sy-subrc` is set to 4.

Dynamic assignment of an object attribute of an object to a field symbol. The assignment is made via an object reference variable of the static type of the root class `object`, which can point to any object.

Behavior for an initial reference. No exception occurs but `sy-subrc` is set to 4 for dynamic access.

This form may be used for all interface attributes of objects. `iref` can be any [interface reference variable](ABENINTERFACE_REF_VARIABLE_GLOSRY.html) that points to an object that contains the interface attribute specified in a character-like field `attr_name`. The attribute is searched for only in the [static type](ABENSTATIC_TYPE_GLOSRY.html) of `iref`.

The attribute name does not have to be in uppercase letters. It can contain offsets/lengths, structure component selectors, object component selectors, and class component selectors, in order to assign parts of the attribute or referenced objects of the attribute.

Unlike all other operand positions, where an object reference that does not point to an object raises an exception, no exception occurs in the statement `ASSIGN` and `sy-subrc` is set to 4.

Dynamic assignment of an object attribute to a field symbol. The assignment is made via an interface reference variable.

These forms may be used for all visible static attributes. Classes and interfaces and also attributes can be specified dynamically in character-like fields `clif_name` or `attr_name`. The attribute `attr` can, however, also be specified directly. The system searches for the class or interface first and then the attribute.

The content of `attr_name` and `clif_name` does not have to be in uppercase letters. `attr_name` can contain offsets/lengths, structure component selectors, object component selectors, and class component selectors, in order to assign parts of the attribute or referenced objects of the attribute. Here, no offsets/lengths or object component selectors can be specified after a directly specified attribute `attr`.

This form may be used for all visible static attributes. The class or interfaces is specified directly, and the attribute specified dynamically in a character-like field `attr_name`. The system searches for the attribute in the specified class or interface.

The content of `attr_name` does not have to be in uppercase letters. `attr_name` can contain offsets/lengths, structure component selectors, object component selectors, and class component selectors, in order to assign parts of the attribute or referenced objects of the attribute.

Different dynamic assignments of a static class attribute to field symbols.

-   If `ELSE UNASSIGN` is not specified, the field symbol keeps its previous state.
-   If `ELSE UNASSIGN` is specified, no memory area is assigned to the field symbol. The field symbol has the state unassigned after the `ASSIGN` statement.

-   Field symbols to which instance attributes or parts of instance attributes are assigned have a memory-preserving effect on the associated object.
-   If `ELSE UNASSIGN` is not specified, it is not sufficient to evaluate the [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html)\\ [`<fs> IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html) but `sy-subrc` must be checked. If `ELSE UNASSIGN` is specified, the predicate expression as well as `sy-subrc` can be evaluated.

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n METHODS meth IMPORTING oref TYPE REF TO object \\n attr TYPE string. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD meth. \\n ASSIGN oref->(attr) TO FIELD-SYMBOL(). \\n ... \\n ENDMETHOD. \\nENDCLASS. CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n DATA attr TYPE string VALUE 'foo'. \\nENDCLASS. \\n\\ \\nCLASS example DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS example IMPLEMENTATION. \\n METHOD main. \\n DATA(oref) = NEW demo( ). \\n ASSIGN oref->('attr') TO FIELD-SYMBOL() \\n ELSE UNASSIGN. \\n ASSERT IS ASSIGNED. \\n\\ \\n CLEAR oref. \\n ASSIGN oref->('attr') TO \\ \\n ELSE UNASSIGN. \\n ASSERT sy-subrc = 4 AND IS NOT ASSIGNED. \\n ENDMETHOD. \\nENDCLASS. INTERFACE intf. \\n CONSTANTS attr TYPE string VALUE \`interface attribute\`. \\nENDINTERFACE. \\n\\ \\nCLASS demo DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES intf. \\nENDCLASS. \\n\\ \\nCLASS example DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS example IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n DATA iref TYPE REF TO intf. \\n iref = NEW demo( ). \\n\\ \\n ASSIGN iref->('attr') TO FIELD-SYMBOL(). \\n\\ \\n out->write( ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(clif\_name) = \`cl\_abap\_browser\`. \\nFINAL(attr\_name) = \`xlarge\`. \\n\\ \\nASSIGN (clif\_name)=>(attr\_name) TO FIELD-SYMBOL(). \\nASSIGN (clif\_name)=>xlarge TO FIELD-SYMBOL(). \\nASSIGN cl\_abap\_browser=>(attr\_name) TO FIELD-SYMBOL(). \\n\\ \\nout->write( \\n |(clif\_name)=>(attr\_name): \\{ \\}\\\\n| && \\n |(clif\_name)=>xlarge: \\{ \\}\\\\n| && \\n |cl\_abap\_browser=>(attr\_name): \\{ \\}\\\\n| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_field\_symbols.html abapassign.html abapassign\_mem\_area.html