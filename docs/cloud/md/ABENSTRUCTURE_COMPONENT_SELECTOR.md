---
title: "ABENSTRUCTURE_COMPONENT_SELECTOR"
description: |
  ABENSTRUCTURE_COMPONENT_SELECTOR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRUCTURE_COMPONENT_SELECTOR.htm"
abapFile: "ABENSTRUCTURE_COMPONENT_SELECTOR.html"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "field-symbol", "ABENSTRUCTURE", "COMPONENT", "SELECTOR"]
---

Components of a structure can be specified statically and dynamically.

The structure component selector can especially used for [chainings](ABENTABLE_EXP_CHAINING.html) behind [table expressions](ABENTABLE_EXPRESSIONS.html), statically as well as dynamically.

The following syntax accesses a component `comp` of a structure or structured data type statically:

`struct-comp`

The symbol `-` is the structure component selector. A structured data type or a structure `struct` must be specified as follows to the left of the structure component selector:

The name `comp` of the component must be to the right of the structure component selector.

Declaration of a structure `struc` with the structured data type `spfli` from the ABAP Dictionary and access to its component `carrid`.

DATA struc TYPE spfli.\\ 
\\ 
...\\ 
\\ 
... struc-carrid ...

A component of a structure (structured data object) can be specified dynamically with the following syntax:

`struc-(comp)`

The syntax and meaning is the same as for [dynamic structure components](ABAPASSIGN_DYNAMIC_COMPONENTS.html) in the statement `ASSIGN` and the result of the expressions behave like an accordingly assigned field symbol of type `ANY`.

If the component is not found, an exception of class `CX_SY_ASSIGN_ILLEGAL_COMPONENT` occurs.

Method `GET` of class `CL_DEMO_STRUCT_COMP` returns the textual content of any component of any structure:

The following code snippet calls that method for a structure `scarr` and specifies the component via a name and via positions.

The following method of class `CL_DEMO_DYNAMIC_COMPONENT` assigns components of two structures dynamically:

-   Name of a structure or a structured type that can itself be linked.
-   [Functional method call](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html) or [method chaining](ABENMETHOD_CHAINING_GLOSRY.html) with a structured result.
-   Single or chained [table expression](ABENTABLE_EXPRESSION_GLOSRY.html) that returns a structured table line.

-   First, the structure is specified directly and the component is specified by its position.
-   Second, the structure is specified by a writable expression with constructor operator `NEW` and the component is specified by its name, which can have an offset/length specification. For wrongly specified components, an exception occurs and is caught.

-   [Dynamic Structure Components](ABENDYNAMIC_COMPONENT_ABEXA.html)
-   [`table_exp` - Accessing Components Dynamically](ABENTABLE_EXP_DYNAMIC_COMP_ABEXA.html)

METHOD get. \\n TRY. \\n comp\_string = CONV string( struct-(comp) ). \\n CATCH cx\_sy\_assign\_illegal\_component INTO FINAL(exc). \\n comp\_string = \`Error: \` && exc->get\_text( ). \\n ENDTRY. \\nENDMETHOD. SELECT SINGLE \\n FROM scarr \\n FIELDS \\n carrid, \\n carrname, \\n currcode, \\n url \\n WHERE carrid = 'LH' \\n INTO @FINAL(scarr). \\n\\ \\nFINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nout->next\_section( \\n cl\_demo\_struct\_comp=>get( struct = scarr \\n comp = 'CARRID' ) ). \\n\\ \\nDO. \\n FINAL(comp) = \\n cl\_demo\_struct\_comp=>get( struct = scarr \\n comp = sy-index ). \\n IF comp CS 'Error:'. \\n EXIT. \\n ELSE. \\n out->write( comp ). \\n ENDIF. \\nENDDO. \\n\\ \\nout->display( ). METHOD main. \\n DATA(comp\_position) = 2. \\n DATA(comp\_name) = \`col-carrid(2)\`. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = comp\_position \\n )->add\_field( CHANGING field = comp\_name \\n )->request( ). \\n\\ \\n out->write( struct ). \\n\\ \\n TRY. \\n out->write( |\\{ comp\_position \\}: \\{ \\n struct-(comp\_position) \\}| ). \\n CATCH cx\_sy\_assign\_illegal\_component INTO FINAL(exc1). \\n out->write( exc1->get\_text( ) ). \\n ENDTRY. \\n\\ \\n TRY. \\n out->write( |\\{ comp\_name \\}: \\{ NEW cls( )->attr-(comp\_name) \\}| ). \\n CATCH cx\_sy\_assign\_illegal\_component INTO FINAL(exc2). \\n out->write( exc2->get\_text( ) ). \\n ENDTRY. \\n\\ \\nENDMETHOD. abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_data\_objects.html abenoperands\_names.html