---
title: "ABENNEWS-760-EXPRESSIONS"
description: |
  ABENNEWS-760-EXPRESSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-760-EXPRESSIONS.htm"
abapFile: "ABENNEWS-760-EXPRESSIONS.html"
keywords: ["select", "if", "case", "types", "ABENNEWS", "760", "EXPRESSIONS"]
---

[1\. Enhanced Type Interference in Constructor Expressions](#ABAP_MODIFICATION_1@4@)

[2\. Object Component Selector After Table Expressions](#ABAP_MODIFICATION_2@4@)

If the character `#` is specified for the result type, enhancements were made for the following constructor expressions:

From ABAP release 7.60, the [object component selector `->`](ABENTABLE_EXP_CHAINING.html) can be specified directly after [table expressions](ABENTABLE_EXPRESSIONS.html) that return a reference variable. This makes it possible to access components of the referenced object. An exception are table expressions whose [result](ABENTABLE_EXP_RESULT.html) is determined with the value operator `VALUE`.

-   In the case of the constructor operator [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html) an attempt is now made to evaluate the first declaration after `INIT` if the type of the operand position cannot be identified.
-   When the constructor expressions

-   [`CONV #( ... )`](ABENCONSTRUCTOR_EXPRESSION_CONV.html)
-   [`VALUE #( )`](ABENVALUE_CONSTRUCTOR_PARAMS_INIT.html)
-   [`REDUCE #( ... )`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html)
-   [`COND #( ... )`](ABENCONDITIONAL_EXPRESSION_COND.html)
-   [`SWITCH #( ... )`](ABENCONDITIONAL_EXPRESSION_SWITCH.html)

-   are passed to generically typed formal parameters, no type could be derived for `#` from the operand position until now. From ABAP release 7.60, a concrete type is derived for `#` for generic formal parameter types where this is possible and feasible if this cannot be determined in any other way. This prevents syntax errors when procedures are called in cases where a previously concrete type of a formal parameter is expanded to a generic type.

abenabap.html abennews.html abennews-76.html abennews-760.html