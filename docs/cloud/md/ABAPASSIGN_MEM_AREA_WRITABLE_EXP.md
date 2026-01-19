---
title: "Constructor Expressions"
description: |
  Table Expressions -   Writable expressions can be specified for the memory area but no other expressions, because only writable expressions can have a non-temporary result. Assigning a temporary data object to a field symbol would not make sense. -   Writable expressions cannot be specified dynamica
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPASSIGN_MEM_AREA_WRITABLE_EXP.htm"
abapFile: "ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "ABAPASSIGN", "MEM", "AREA", "WRITABLE", "EXP"]
---

1\. `... NEW class( ... )->attr|(attr_name) ...`

2\. `... CAST type( ... )->*| dobj|(dobj_name) ...`

3\. `... table_exp ...`

[1. `... NEW class( ... )->attr|(attr_name)`](#ABAP_ALTERNATIVE_1@2@)

[2. `... CAST type( ... )->...`](#ABAP_ALTERNATIVE_2@2@)

[3. `... table_exp`](#ABAP_ALTERNATIVE_3@2@)

These variants for specifying the memory area [`mem_area`](ABAPASSIGN_MEM_AREA.html) of the statement [`ASSIGN`](ABAPASSIGN.html) exploit the fact that the operand position after `ASSIGN` is a [result position](ABENRESULT_POSITION_GLOSRY.html) in which [writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html) can be specified.

This variant for specifying the memory area [`mem_area`](ABAPASSIGN_MEM_AREA.html) of the statement [`ASSIGN`](ABAPASSIGN.html) assigns an attribute of an instance of class `class` to a field symbol. The instance of the class is created inline with the [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html)\\ [`NEW class( ... )`](ABENNEW_CONSTRUCTOR_PARAMS_CLASS.html). The object component selector `->` following the constructor expression selects the attribute.

The attribute can be specified statically as `attr` or dynamically as the content of a character-like data object `attr_name` in parentheses.

In this variant, the return code `sy-subrc` is not set by the statement `ASSIGN` itself, but by the constructor expression. The instance operator `NEW` sets the return code `sy-subrc` to 0, if the object is created successfully.

If the attribute specified dynamically in `attr_name` is not found, an exception of class `CX_SY_ASSIGN_ILLEGAL_COMPONENT` is raised. An assignment of the constructor operator `NEW` is either successful or leads to an exception and the addition `ELSE UNASSIGN` cannot be used. In case of an exception, an existing field symbol keeps it previous state.

Assigning an attribute `attr` of an object created using `NEW` to a field symbol persists this object as long as the field symbol points to the attribute.

Constructor expression with `NEW` in the specified memory area of statement `ASSIGN` statements. The assignment of the attribute `attr` to a field symbol persists the object. In the first assignment the attribute is specified statically, in the following it is specified dynamically. The third assignment raises an exception since the attribute is not found.

This variant for specifying the memory area [`mem_area`](ABAPASSIGN_MEM_AREA.html) of the statement [`ASSIGN`](ABAPASSIGN.html) assigns a data object that is referenced by the result of the [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html)\\ [`CAST type( ... )`](ABENCONSTRUCTOR_EXPRESSION_CAST.html) to a field symbol. The object component selector `->` following the constructor expression selects the data object. For `type`, a data type or an object type (class or interface) can be specified.

The data object assigned to the field symbol can be specified with the following [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html) expressions combined with the object component selector:

The same rules apply as described for [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html) with the exception that no [offset/length specification](ABENOFFSET_LENGTH_SPECIFIC_GLOSRY.html) can be specified. Especially, the system behavior in case of an error is governed by the `CAST` expression. The return code `sy-subrc` is not set. An assignment of the constructor operator `CAST` is either successful or leads to an exception and the addition `ELSE UNASSIGN` must not be used. If an exception occurs, an existing field symbol keeps it previous state.

In the `ASSIGN` statement, the `CAST` operator cannot be used for calling a method.

This example is the same as one shown under [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html). Instead of assigning `CAST` expressions to data objects, they are assigned to field symbols here. The example shows that the system behavior in the case of an error in the `CAST` expression is the same in both examples.

This variant for specifying the memory area [`mem_area`](ABAPASSIGN_MEM_AREA.html) of the statement [`ASSIGN`](ABAPASSIGN.html) assigns the result of the [table expression](ABENTABLE_EXPRESSION_GLOSRY.html)\\ [`table_exp`](ABENTABLE_EXPRESSIONS.html) or [table expression chaining](ABENTABLE_EXP_CHAINING.html) to the field symbol. The result of a table expression in these positions is always a temporary field symbol.

In this variant, the statement `ASSIGN` sets the return code `sy-subrc`.

Unlike in other use cases of table expressions, the system field `sy-tabix` is set here in the same way as in a corresponding [`READ TABLE`](ABAPREAD_TABLE.html) statement.

In this variant of the statement `ASSIGN`, the addition [`CASTING`](ABAPASSIGN_CASTING.html) can only be specified in assignments to an existing field symbol and not in [inline declarations](ABENFIELD-SYMBOL_INLINE.html), and only as a standalone addition. The addition [`RANGE`](ABAPASSIGN_RANGE.html) cannot be specified.

This example works in the same way as the example for [`READ TABLE ... ASSIGNING ...`](ABAPREAD_TABLE_OUTDESC.html). Here, the `READ` statement is replaced by an `ASSIGN` statements and the required component is assigned directly.

Constructor Expressions

Table Expressions

-   Writable expressions can be specified for the memory area but no other expressions, because only writable expressions can have a non-temporary result. Assigning a temporary data object to a field symbol would not make sense.
-   Writable expressions cannot be specified dynamically in a data object [`name`](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html).

-   For static specification `attr`, the same rules apply as to [statically specifying](ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html) the memory area, but no offsets/lengths can be specified and `sy-subrc` is not set by the `ASSIGN` statement itself.
-   For dynamic specification, the rules of a [dynamic target](ABENOBJECT_COMPONENT_SELECTOR.html) behind the object component selector apply.

-   `CAST dtype( ... dref )->*`
-   `CAST dtype( ... dref )->comp|('comp_name')`
-   `CAST class|intf( ... oref )->attr|('attr_name')`

-   If a single table expression is specified, or a [chaining](ABENTABLE_EXP_CHAINING.html) whose last position is a table expression, the entire line found is assigned to the field symbol.
-   If a [chaining](ABENTABLE_EXP_CHAINING.html) is specified whose last position is a structure component after a structure component selector, this component is assigned to the field symbol. No offsets/lengths, however, can be specified for the structure component here.

-   If the specified line is found, `sy-subrc` is set to 0.
-   If the assignment is not successful, `sy-subrc` is set to 4, except when the end of the table is reached in binary searches in [sorted tables](ABENSORTED_TABLE_GLOSRY.html). In this case, `sy-subrc` is set to 8. If `sy-subrc` is set to 4 or 8, the state of the field symbol depends on the addition [`ELSE UNASSIGN`](ABAPASSIGN_ELSE_UNASSIGN.html):

-   If `ELSE UNASSIGN` is not specified, the field symbol keeps its previous state.
-   If `ELSE UNASSIGN` is specified, no memory area is assigned to the field symbol. The field symbol has the state unassigned after the `ASSIGN` statement.

-   This variant of the statement `ASSIGN` can be regarded as a different form of [`READ TABLE ... ASSIGNING ...`](ABAPREAD_TABLE_OUTDESC.html).

-   More specifically, the value of `sy-subrc` and `sy-tabix` is set as in the statement `READ TABLE` and
-   the addition [`CASTING`](ABAPASSIGN_CASTING.html) cannot be specified after an [inline declaration](ABENFIELD-SYMBOL_INLINE.html) for the field symbol.

-   Unlike `READ TABLE`, chainings can also be used to assign components of read lines or lines of nested internal tables.
-   The constructor operators `VALUE` and `REF` used to control the [result](ABENTABLE_EXP_RESULT.html) of the table expression cannot be used here.
-   If the specified line is not found, an exception is not raised, unlike in other uses of table expressions.
-   If `ELSE UNASSIGN` is not specified, it is not sufficient to evaluate the [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html)\\ [`<fs> IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html), but `sy-subrc` must be checked. If `ELSE UNASSIGN` is specified, the predicate expression as well as `sy-subrc` can be evaluated.

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n DATA attr TYPE string VALUE 'foo'. \\nENDCLASS. \\n\\ \\nCLASS example DEFINITION. \\n PUBLIC SECTION. \\n METHODS main. \\nENDCLASS. \\n\\ \\nCLASS example IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n ASSIGN NEW demo( )->attr TO FIELD-SYMBOL(). \\n out->write( ). \\n\\ \\n ASSIGN NEW demo( )->('attr') TO FIELD-SYMBOL(). \\n out->write( ). \\n\\ \\n TRY. \\n ASSIGN NEW demo( )->('foo') TO FIELD-SYMBOL(). \\n out->write( ). \\n CATCH cx\_sy\_assign\_illegal\_component INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. TYPES: \\n BEGIN OF struc, \\n col TYPE i, \\n END OF struc. \\n\\ \\nINTERFACE intf. \\nENDINTERFACE. \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES intf. \\n DATA attr TYPE string VALUE 'foo'. \\nENDCLASS. \\n\\ \\nCLASS example DEFINITION. \\n PUBLIC SECTION. \\n METHODS main. \\nENDCLASS. \\n\\ \\nCLASS example IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA(dref) = NEW struc( col = 111 ). \\n DATA(iref) = NEW cls( ). \\n\\ \\n ASSIGN CAST struc( dref )->col TO FIELD-SYMBOL(). \\n ASSERT \= 111. \\n ASSIGN CAST cls( iref )->attr TO FIELD-SYMBOL(). \\n ASSERT \= 'foo'. \\n\\ \\n UNASSIGN . \\n ASSIGN CAST struc( dref )->('col') TO . \\n ASSERT \= 111. \\n UNASSIGN . \\n ASSIGN CAST cls( iref )->('attr') TO . \\n ASSERT \= 'foo'. \\n\\ \\n DATA(exc) = 0. \\n TRY. \\n ASSIGN CAST struc( dref )->('foo') TO . \\n CATCH cx\_sy\_assign\_illegal\_component. \\n exc += 1. \\n ENDTRY. \\n TRY. \\n ASSIGN CAST cls( iref )->('foo') TO . \\n CATCH cx\_sy\_assign\_illegal\_component. \\n exc += 1. \\n ENDTRY. \\n CLEAR dref. \\n TRY. \\n ASSIGN CAST struc( dref )->('col') TO . \\n CATCH cx\_sy\_assign\_illegal\_component. \\n exc += 1. \\n ENDTRY. \\n CLEAR iref. \\n TRY. \\n ASSIGN CAST cls( iref )->('attr') TO . \\n CATCH cx\_sy\_assign\_illegal\_component. \\n exc += 1. \\n ENDTRY. \\n ASSERT exc = 4. \\n ENDMETHOD. \\nENDCLASS. DATA: carrid TYPE sflight-carrid, \\n connid TYPE sflight-connid, \\n fldate TYPE sflight-fldate. \\n\\ \\n... \\n\\ \\nDATA sflight\_tab TYPE SORTED TABLE OF sflight \\n WITH UNIQUE KEY carrid connid fldate. \\n\\ \\nSELECT \* \\n FROM sflight \\n WHERE carrid = @carrid AND \\n connid = @connid \\n INTO TABLE @sflight\_tab. \\n\\ \\nIF sy-subrc = 0. \\n ASSIGN sflight\_tab\[ KEY primary\_key COMPONENTS \\n carrid = carrid \\n connid = connid \\n fldate = fldate \]-price \\n TO FIELD-SYMBOL(). \\n IF sy-subrc = 0. \\n \*= '0.9'. \\n ENDIF. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_field\_symbols.html abapassign.html abapassign\_mem\_area.html