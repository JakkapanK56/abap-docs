---
title: "An expression of this type can"
description: |
  In an internal table nested twice, reads the first line of the innermost table in the second line of the center table in the second line of the outermost table. The result is 7. Direct chaining of table expressions and chaining with the structure component selector in a single expression. Reading of
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTABLE_EXP_CHAINING.htm"
abapFile: "ABENTABLE_EXP_CHAINING.html"
keywords: ["select", "if", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENTABLE", "EXP", "CHAINING"]
---

[Table expressions](ABENTABLE_EXPRESSIONS.html) can be chained with the structure component selector `-`, with other table expressions, and with the object component selector `->`.

If the constructor operator `VALUE` or `REF` is specified before a chaining to [control the result](ABENTABLE_EXP_RESULT.html), only the final result is affected. Any intermediate results are always temporary field symbols and the corresponding performance notes should be considered.

Chainings of table expressions with functional method calls, that is, specifying the internal table as a functional method call `meth( ... )[ ... ]` or `meth( ... )-comp[ ... ]` and accessing the internal table using a chained attribute access `meth( ... )->itab[ ... ]`, are not yet possible. Table expressions cannot currently be placed on the right of a method call in [method chainings](ABENMETHOD_CHAINING_GLOSRY.html).

A table expression can be chained as follows using the structure component selector `-`:

Both of these alternatives can be combined, enabling a structured component selector to be located directly on the left and right of a table expression.

If the reference operator [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html) is specified in front of a chaining whose result is a component of a structured table line, it creates a reference to this component.

Reading of the first column of the second line of the table-like second component of the first line of the internal table `itab`. The result is 4.

[Table Expressions, Chainings](ABENTABLE_EXP_CHAINING_ABEXA.html)

If the result of a table expression `itab[ ... ]` is an internal table, it can be used as the name of the internal table of a table expression:

`... itab[ ... ][ ... ] ...`

An expression of this type can

In an internal table nested twice, reads the first line of the innermost table in the second line of the center table in the second line of the outermost table. The result is 7.

Direct chaining of table expressions and chaining with the structure component selector in a single expression. Reading of the structure component of the innermost nested table with the value 13.

If the result of a table expression or one of the preceding chainings has a reference type, these chainings can be placed directly in front of the [object component selector](ABENOBJECT_COMPONENT_SELECT_GLOSRY.html) to access the components of the referenced object:

`... itab[ ... ]->comp|(comp_name) ...`

`... itab[ ... ]-comp->comp|(comp_name) ...`

`... struct-comp[ ... ]->comp|(comp_name) ...`

`... itab[ ... ][ ... ]->comp|(comp_name) ...`

A component addressed in this way can, depending on its properties, be used in all suitable operand positions and particularly in further chainings.

As described for the [object component selector](ABENOBJECT_COMPONENT_SELECTOR.html), components can be specified statically by `comp` or dynamically by `(comp_name)`. After a dynamic specification, only dynamic specifications can follow, but no static specification any more.

Dereferencing a line of an internal table of data reference variables and accessing a single component.

Filling of an internal table of reference variables with object references and accessing attributes and methods of the objects using table expressions in front of the object component selector.

-   If the result of a table expression `itab[ ... ]` is a structure, the structure component selector can be used to read each component `comp` of the structure:
-   `... itab[ ... ]-comp|(comp) ...`
-   As described for the [structure component selector](ABENSTRUCTURE_COMPONENT_SELECTOR.html), the component can be specified statically by `comp` or dynamically by `(comp)`. After a dynamic specification, only dynamic specifications can follow, but no static specification any more.

-   If a statically specified `comp` has a suitable type, a [specified offset/length](ABENOFFSET_LENGTH_SPECIFIC_GLOSRY.html)\\ [`+off(len)`](ABENOFFSET_LENGTH.html) can be appended, except when the chaining is used as a [memory area](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) of the statement `ASSIGN` or as an operand of the reference operator [`REF`](ABENTABLE_EXP_RESULT.html).
-   A field `comp` used for a dynamic specification can contain an integer number for a position or the name of a component.

-   If a structure `struct` has a table-like component `comp`, it can be specified as the name of the internal table of a table expression:
-   `... struct-comp[ ... ] ...`

-   itself be continued with square brackets `[ ... ]`, if its result is again table-like.
-   be combined with the information from structure component selectors above.

-   More specifically, the [dereferencing operator](ABENDEREFERENCING_OPERAT_GLOSRY.html)\\ `->*` can be specified after table expressions.
-   An [instance method](ABENINSTANCE_METHOD_GLOSRY.html) call can be a [standalone call](ABAPCALL_METHOD_STATIC_SHORT.html) or a [functional method call](ABAPCALL_METHOD_FUNCTIONAL.html). The obsolete form of the statement [`CALL METHOD`](ABAPCALL_METHOD_STATIC.html) cannot be used.
-   No table expressions can be specified in a write position for a read-only internal table. This also applies when the object component selector is used to access another object. Furthermore, [standalone method calls](ABAPCALL_METHOD_STATIC_SHORT.html) a not possible using a read-only internal table.

TYPES: BEGIN OF struct1, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF struct1, \\n tab1 TYPE TABLE OF struct1 WITH EMPTY KEY, \\n BEGIN OF struct2, \\n col1 TYPE i, \\n col2 TYPE tab1, \\n END OF struct2, \\n tab2 TYPE TABLE OF struct2 WITH EMPTY KEY. \\n\\ \\nFINAL(itab) = \\n VALUE tab2( \\n ( VALUE struct2( col1 = 1 \\n col2 = VALUE tab1( \\n ( VALUE struct1( col1 = 2 \\n col2 = 3 ) ) \\n ( VALUE struct1( col1 = 4 \\n col2 = 5 ) ) ) ) ) \\n ( VALUE struct2( col1 = 6 \\n col2 = VALUE tab1( \\n ( VALUE struct1( col1 = 7 \\n col2 = 8 ) ) \\n ( VALUE struct1( col1 = 9 \\n col2 = 10 ) ) ) ) ) ). \\n\\ \\nFINAL(num) = itab\[ 1 \]-col2\[ 2 \]-col1. TYPES: tab1 TYPE TABLE OF i WITH EMPTY KEY, \\n tab2 TYPE TABLE OF tab1 WITH EMPTY KEY, \\n tab3 TYPE TABLE OF tab2 WITH EMPTY KEY. \\n\\ \\nFINAL(itab) = VALUE tab3( \\n ( VALUE tab2( \\n ( VALUE tab1( \\n ( 1 ) \\n ( 2 ) ) ) \\n ( VALUE tab1( \\n ( 3 ) \\n ( 4 ) ) ) ) ) \\n ( VALUE tab2( \\n ( VALUE tab1( \\n ( 5 ) \\n ( 6 ) ) ) \\n ( VALUE tab1( \\n ( 7 ) \\n ( 8 ) ) ) ) ) ). \\n\\ \\nFINAL(num) = itab\[ 2 \]\[ 2 \]\[ 1 \]. TYPES: BEGIN OF struct1, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF struct1, \\n tab1 TYPE TABLE OF struct1 WITH EMPTY KEY, \\n BEGIN OF struct2, \\n col1 TYPE i, \\n col2 TYPE TABLE OF tab1 WITH EMPTY KEY, \\n END OF struct2, \\n tab2 TYPE TABLE OF struct2 WITH EMPTY KEY. \\n\\ \\nFINAL(itab) = \\n VALUE tab2( \\n ( VALUE struct2( \\n col1 = 1 \\n col2 = VALUE #( \\n ( VALUE tab1( \\n ( VALUE struct1( \\n col1 = 2 \\n col2 = 3 ) ) \\n ( VALUE struct1( \\n col1 = 4 \\n col2 = 5 ) ) ) ) \\n ( VALUE tab1( \\n ( VALUE struct1( \\n col1 = 6 \\n col2 = 7 ) ) \\n ( VALUE struct1( \\n col1 = 8 \\n col2 = 9 ) ) ) ) ) ) ) \\n ( VALUE struct2( \\n col1 = 10 \\n col2 = VALUE #( \\n ( VALUE tab1( \\n ( VALUE struct1( \\n col1 = 11 \\n col2 = 12 ) ) \\n ( VALUE struct1( \\n col1 = 13 \\n col2 = 14 ) ) ) ) \\n ( VALUE tab1( \\n ( VALUE struct1( \\n col1 = 15 \\n col2 = 16 ) ) \\n ( VALUE struct1( \\n col1 = 17 \\n col2 = 18 ) ) ) ) ) ) ) ). \\n\\ \\nFINAL(num) = itab\[ 2 \]-col2\[ 1 \]\[ 2 \]-col1. DATA itab TYPE TABLE OF REF TO scarr WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( ( NEW scarr( carrid = 'XX' carrname = 'YYYY' ) ) ). \\n\\ \\ncl\_demo\_output=>new( \\n )->write\_data( itab\[ 1 \]->\* \\n )->write\_data( itab\[ 1 \]->carrid \\n )->write\_data( itab\[ 1 \]->carrname )->display( ). CLASS number DEFINITION. \\n PUBLIC SECTION. \\n DATA value TYPE i. \\n METHODS: \\n get RETURNING VALUE(r) TYPE i, \\n constructor IMPORTING n TYPE i. \\nENDCLASS. \\n\\ \\nCLASS number IMPLEMENTATION. \\n METHOD get. \\n r = value. \\n ENDMETHOD. \\n METHOD constructor. \\n value = n. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n TYPES itab TYPE TABLE OF REF TO number WITH EMPTY KEY. \\n FINAL(itab) = VALUE itab( FOR j = 1 UNTIL j > 2 \\n ( NEW number( j ) ) ). \\n DATA(n1) = itab\[ 1 \]->value. \\n DATA(n2) = itab\[ 2 \]->get( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abentable\_expressions.html