---
title: "ABAPASSIGN_DYNAMIC_COMPONENTS"
description: |
  ABAPASSIGN_DYNAMIC_COMPONENTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPASSIGN_DYNAMIC_COMPONENTS.htm"
abapFile: "ABAPASSIGN_DYNAMIC_COMPONENTS.html"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "ABAPASSIGN", "DYNAMIC", "COMPONENTS"]
---

`... \{ struc-(comp) \}`\\ 
  `|\ \{ dref->(comp_name) \}`\\ 
  `|\ \{ COMPONENT comp OF STRUCTURE struc \} ...`

[1. `... struc-(comp)`](#ABAP_ALTERNATIVE_1@2@)

[2. `... dref->(comp_name)`](#ABAP_ALTERNATIVE_2@2@)

[3. `... COMPONENT comp OF STRUCTURE struc`](#ABAP_ALTERNATIVE_3@2@)

These variants for specifying the memory area [`mem_area`](ABAPASSIGN_MEM_AREA.html) of the statement [`ASSIGN`](ABAPASSIGN.html) access components of structures dynamically.

In these variants, the statement `ASSIGN` sets the return code `sy-subrc`. If the assignment is successful, `sy-subrc` is set to 0. In these variants, also exceptions can occur in case of some invalid dynamic specifications. If the assignment is not successful and no exception occurs, `sy-subrc` is set to 4. If `sy-subrc` is set to 4, the state of the field symbol depends on the addition [`ELSE UNASSIGN`](ABAPASSIGN_ELSE_UNASSIGN.html):

If `ELSE UNASSIGN` is not specified, it is not sufficient to evaluate the [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html)\\ [`<fs> IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html) but `sy-subrc` must be checked. If `ELSE UNASSIGN` is specified, the predicate expression as well as `sy-subrc` can be evaluated.

This variant of `mem_area` assigns the memory area of a component specified in `comp` of a structure `struc` to the field symbol. `struc` is a [result position](ABENRESULT_POSITION_GLOSRY.html). The structure can be specified as a data object or as a [writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html). If it is detected at compile time that `struc` is not a structure, a syntax error occurs. If that is detected at runtime, the runtime error `STRUCTURE_ILLEGAL` occurs.

For `comp`, either a character-like data object or a numeric data object of type `i` can be specified:

Two dynamic assignments with dynamic specification of components:

[Field Symbols, Dynamic Structure Components](ABENASSIGN_COMPONENT_ABEXA.html)

This variant accesses components of structures that are referenced by a [data reference variable](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html)\\ `dref`. `dref` can be any data reference variable that points to structure that contains the component specified in a character-like field `comp_name`.

The component name does not have to be in uppercase letters. It can contain offsets/lengths, structure component selectors, object component selectors, and class component selectors, in order to assign parts of the component or referenced objects of the component.

Unlike all other operand positions, where a data reference that does not point to a data object raises an exception, no exception occurs in the statement `ASSIGN` and `sy-subrc` is set to 4.

This syntax form corresponds to [dynamic access](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html) to object components.

Dynamic assignment of a component of a structure to a field symbol. The default value of `comp_name` denotes a substring of a component of a substructure.

Dynamic assignment of a component of a structure with an initial reference variable. No exception occurs but `sy-subrc` is set to 0 in this case.

This variant of `mem_area` assigns the memory area of a component `comp` of a structure `struc` to the field symbol.

`struc` is a [result position](ABENRESULT_POSITION_GLOSRY.html). The structure can be specified as a data object or as a [writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html). If it is detected at compile time, that `struc` is not a structure:

If it is detected at runtime that `struc` is not a structure, in both cases, `sy-subrc` is set to 4 and the state of the field symbol depends on addition `ELSE UNASSIGN`.

`comp` is a [character-like](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html) or [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html). The evaluation depends on the data type of `comp`:

Assignment of all components of a structure to a field symbol in a loop. In every loop pass, the component is assigned whose position is determined by the loop index.

The following method shows the dynamic assignment of the components of a structure that is passed to the parameter `para` of the method to a field symbol `<comp>`. The implementation uses [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html). A [downcast](ABENDOWN_CAST_GLOSRY.html) of the type description object to the class `CL_ABAP_STRUCTDESCR` for the passed data object ensures that the object is a structure. A loop across the component table `COMPONENTS` assigns the components to the field symbol via their names.

Assignment of a component of a line of an internal table to a field symbol.

Trying to assign a component of data object that is not a structure to a field symbol. This is detected only at runtime in this variant. `sy-subrc` is set to 4 and using `ELSE UNASSIGN` the field symbol that was assigned before is unassigned.

-   If `ELSE UNASSIGN` is not specified, the field symbol keeps its previous state.
-   If `ELSE UNASSIGN` is specified, no memory area is assigned to the field symbol. The field symbol has the state unassigned after the `ASSIGN` statement.

-   If `comp` is character-like, its content is interpreted as the name of the component. The name is not case-sensitive. It may contain offsets and lengths, structure component selectors, and component selectors.
-   If `comp` is of type `i`, its value is interpreted as the position of the component in the structure. If the value of `comp` is 0, the memory area of the entire structure is assigned to the field symbol.
-   If `comp` has a different type, a syntax error or runtime error occurs.

-   in the first, the structure is specified directly and the component is specified by its position.
-   in the second, the structure is specified by a writable expression with constructor operator `NEW` and the component is specified by its name, which can have an offset/length specification.

-   A syntax error occurs if it is specified as an expression.
-   No syntax error occurs, if it is specified directly as a data object.

-   If the field `comp` has a text-like type (`c` or `string`) or the type of a [flat](ABENFLAT_STRUCTURE_GLOSRY.html) structure, which exclusively contains character-like components, its content is interpreted as the name of the component. The component name does not have to be in uppercase letters. It may contain offsets and lengths, structure component selectors, and component selectors for assigning structured data objects and attributes in classes or objects.
-   If the field `comp` has a non-text-like elementary type, the content is converted to the type `i` and interpreted as the position of the component in the structure. If the value of `comp` is 0, the memory area of the entire structure is assigned to the field symbol.
-   If `comp` has a different type, a syntax error or runtime error occurs.

-   If the structure `struc` is specified as a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html) and the corresponding line is not found, the exception `CX_SY_ITAB_LINE_NOT_FOUND` is raised.
-   Writable expressions can be specified for `struc` but no other expressions, since only these can have a non-temporary result. Assigning a component of a temporary structure to a field symbol would not make sense.
-   If `struc` is specified directly as a data object, it is advisable to specify only structures and to check this in advance if necessary. Just evaluating `sy-subrc` is not enough to determine why an assignment was not successful.
-   Identifying a component by its name is far less efficient than using its position, since far more internal processes are involved. Using `COMPONENTS OF`, however, is always more efficient than specifying the name after the structure component selector within a fully dynamically specified component in a parenthesized data object `name`.

CLASS cls DEFINITION. \\n PUBLIC SECTION. \\n TYPES: \\n BEGIN OF struct, \\n col TYPE scarr, \\n END OF struct. \\n DATA attr TYPE struct. \\nENDCLASS. \\n\\ \\nCLASS demo DEFINITION. \\n PUBLIC SECTION. \\n DATA struct TYPE scarr. \\n METHODS meth. \\nENDCLASS. \\nCLASS demo IMPLEMENTATION. \\n METHOD meth. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n DATA(comp1) = 1. \\n cl\_demo\_input=>add\_field( CHANGING field = comp1 ). \\n DATA(comp2) = \`col-carrid(2)\`. \\n cl\_demo\_input=>request( CHANGING field = comp2 ). \\n\\ \\n ASSIGN struct-(comp1) TO FIELD-SYMBOL(). \\n out->write( sy-subrc ). \\n\\ \\n ASSIGN NEW cls( )->attr-(comp2) TO FIELD-SYMBOL(). \\n out->write( sy-subrc ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n BEGIN OF struc, \\n BEGIN OF substruc, \\n col TYPE c LENGTH 10 VALUE 'abcdefghij', \\n END OF substruc, \\n END OF struc. \\n\\ \\nFINAL(dref) = REF #( struc ). \\n\\ \\nDATA(comp\_name) = \`substruc-col+2(5)\`. \\ncl\_demo\_input=>request( CHANGING field = comp\_name ). \\n\\ \\nASSIGN dref->(comp\_name) TO FIELD-SYMBOL(). \\n\\ \\nIF sy-subrc = 0. \\n out->write( ). \\nELSE. \\n out->write( 'Wrong specification' ). \\nENDIF. \\n\\ \\nout->display( ). DATA dref TYPE REF TO scarr. \\n\\ \\nASSIGN dref->('carrid') TO FIELD-SYMBOL(). \\nASSERT sy-subrc = 4. \\n\\ \\ndref = NEW #( ). \\nASSIGN dref->('carrid') TO FIELD-SYMBOL(). \\nASSERT sy-subrc = 0. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = 'UA' \\n INTO @FINAL(wa). \\n\\ \\nDO. \\n ASSIGN COMPONENT sy-index OF STRUCTURE wa TO FIELD-SYMBOL(). \\n IF sy-subrc <> 0. \\n EXIT. \\n ENDIF. \\n out->write( ). \\nENDDO. \\n\\ \\nout->display( ). CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n METHODS meth \\n IMPORTING para TYPE data. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD meth. \\n TRY. \\n FINAL(struct\_descr) = CAST cl\_abap\_structdescr( \\n cl\_abap\_typedescr=>describe\_by\_data( para ) ). \\n CATCH cx\_sy\_move\_cast\_error. \\n RETURN. \\n ENDTRY. \\n LOOP AT struct\_descr->components \\n ASSIGNING FIELD-SYMBOL(). \\n ASSIGN COMPONENT \-name \\n OF STRUCTURE para TO FIELD-SYMBOL(). \\n ... \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF struc, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF struc. \\n\\ \\nDATA itab TYPE STANDARD TABLE OF struc WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( ( col1 = 1 col2 = 2 ) \\n ( col1 = 3 col2 = 4 ) ). \\n\\ \\nASSIGN COMPONENT 2 OF STRUCTURE itab\[ 2 \] TO FIELD-SYMBOL(). \\n\\ \\nout->write( ). \\n\\ \\nout->display( ). FINAL(field) = 111. \\n\\ \\nASSIGN field TO FIELD-SYMBOL(). \\nASSERT IS ASSIGNED. \\n\\ \\nASSIGN COMPONENT 1 OF STRUCTURE field TO ELSE UNASSIGN. \\nIF sy-subrc <> 0. \\n ASSERT IS NOT ASSIGNED. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_field\_symbols.html abapassign.html abapassign\_mem\_area.html