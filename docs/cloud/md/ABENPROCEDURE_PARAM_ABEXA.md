---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENPROCEDURE_PARAM_ABEXA.htm"
abapFile: "ABENPROCEDURE_PARAM_ABEXA.html"
keywords: ["loop", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABENPROCEDURE", "PARAM", "ABEXA"]
---

This example demonstrates the difference between passing a parameter to a procedure by value or by reference.

The method `fibb` calculates the sequence term with the number `range` in a Fibonacci sequence with the start values `x` and `y`. In this case, the next sequence term is always the sum of two previous sequence terms (that is, two start values). The method inherits two parameters, a structured parameter `l_line` with which input values are passed, and a parameter `r` of type `i` used to provide the result. Since the parameter `l_line` is defined as an `IMPORTING` parameter but still has to be changed in the method, the keyword `VALUE` must be set before the parameter when the method is defined. Otherwise, a syntax error occurs. This ensures that a local copy of the parameter is used within the method. The addition `VALUE` of the output parameter `r` assigns the result to the static class attribute `res` only after the method has been processed completely. Otherwise `res` would be changed for each step of the algorithm.

The internal table `param` contains the input values for calculating three different sequence terms of the Fibonacci sequence. The method `fill_table` is used to provide `param` with values and the method `solve_table` is used to calculate and output `fibb` for each line of `param`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_procedure\_param DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n TYPES: BEGIN OF line, \\n x TYPE i, \\n y TYPE i, \\n range TYPE i, \\n END OF line. \\n DATA: param TYPE STANDARD TABLE OF line, \\n res TYPE i. \\n METHODS: \\n fill\_table CHANGING g\_param LIKE param, \\n solve\_table IMPORTING g\_param LIKE param, \\n fibb IMPORTING VALUE(l\_line) TYPE line \\n EXPORTING VALUE(r) TYPE i. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_procedure\_param IMPLEMENTATION. \\n METHOD main. \\n fill\_table( CHANGING g\_param = param ). \\n solve\_table( EXPORTING g\_param = param ). \\n ENDMETHOD. \\n METHOD fibb. \\n IF l\_line-range = 1. \\n IF l\_line-x < l\_line-y. \\n r = l\_line-x. \\n ELSE. \\n r = l\_line-y. \\n ENDIF. \\n ELSEIF l\_line-range = 2. \\n IF l\_line-x < l\_line-y. \\n r = l\_line-y. \\n ELSE. \\n r = l\_line-x. \\n ENDIF. \\n ELSE. \\n l\_line-range -= 2. \\n DO l\_line-range TIMES. \\n IF l\_line-x < l\_line-y. \\n l\_line-x += l\_line-y. \\n r = l\_line-x. \\n ELSE. \\n l\_line-y += l\_line-x. \\n r = l\_line-y. \\n ENDIF. \\n ENDDO. \\n ENDIF. \\n ENDMETHOD. \\n METHOD fill\_table. \\n g\_param = VALUE #( FOR j = 1 UNTIL j > 3 \\n ( x = j \\n y = j \*\* 2 \\n range = 12 / j ) ). \\n ENDMETHOD. \\n METHOD solve\_table. \\n DATA l\_line LIKE LINE OF g\_param. \\n LOOP AT g\_param INTO l\_line. \\n fibb( EXPORTING l\_line = l\_line IMPORTING r = res ). \\n out->write( \\n |Fibb( \\{ l\_line-x \\}, \\{ l\_line-y \\}, \\{ l\_line-range \\}) = \\{ res \\}| ). \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_procedure\_param DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n TYPES: BEGIN OF line, \\n x TYPE i, \\n y TYPE i, \\n range TYPE i, \\n END OF line. \\n DATA: param TYPE STANDARD TABLE OF line, \\n res TYPE i. \\n METHODS: \\n fill\_table CHANGING g\_param LIKE param, \\n solve\_table IMPORTING g\_param LIKE param, \\n fibb IMPORTING VALUE(l\_line) TYPE line \\n EXPORTING VALUE(r) TYPE i. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_procedure\_param IMPLEMENTATION. \\n METHOD main. \\n fill\_table( CHANGING g\_param = param ). \\n solve\_table( EXPORTING g\_param = param ). \\n ENDMETHOD. \\n METHOD fibb. \\n IF l\_line-range = 1. \\n IF l\_line-x < l\_line-y. \\n r = l\_line-x. \\n ELSE. \\n r = l\_line-y. \\n ENDIF. \\n ELSEIF l\_line-range = 2. \\n IF l\_line-x < l\_line-y. \\n r = l\_line-y. \\n ELSE. \\n r = l\_line-x. \\n ENDIF. \\n ELSE. \\n l\_line-range -= 2. \\n DO l\_line-range TIMES. \\n IF l\_line-x < l\_line-y. \\n l\_line-x += l\_line-y. \\n r = l\_line-x. \\n ELSE. \\n l\_line-y += l\_line-x. \\n r = l\_line-y. \\n ENDIF. \\n ENDDO. \\n ENDIF. \\n ENDMETHOD. \\n METHOD fill\_table. \\n g\_param = VALUE #( FOR j = 1 UNTIL j > 3 \\n ( x = j \\n y = j \*\* 2 \\n range = 12 / j ) ). \\n ENDMETHOD. \\n METHOD solve\_table. \\n DATA l\_line LIKE LINE OF g\_param. \\n LOOP AT g\_param INTO l\_line. \\n fibb( EXPORTING l\_line = l\_line IMPORTING r = res ). \\n out->write( \\n |Fibb( \\{ l\_line-x \\}, \\{ l\_line-y \\}, \\{ l\_line-range \\}) = \\{ res \\}| ). \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenabap\_language\_procedures.html abenformal\_parameters\_oview.html