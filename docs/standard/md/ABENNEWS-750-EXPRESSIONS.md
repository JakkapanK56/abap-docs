---
title: "ABENNEWS-750-EXPRESSIONS"
description: |
  ABENNEWS-750-EXPRESSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-750-EXPRESSIONS.htm"
abapFile: "ABENNEWS-750-EXPRESSIONS.html"
keywords: ["select", "do", "if", "case", "types", "ABENNEWS", "750", "EXPRESSIONS"]
---

[1\. Predicate Expression for Type Inspection](#ABAP_MODIFICATION_1@4@)

[2\. Case Distinction for Type Inspection](#ABAP_MODIFICATION_2@4@)

[3\. Enhanced Type Interference in Constructor Expressions](#ABAP_MODIFICATION_3@4@)

[4\. Object Component Selector After Table Expressions](#ABAP_MODIFICATION_4@4@)

The new predicate expression [`IS INSTANCE OF`](ABENLOGEXP_INSTANCE_OF.html) can be used to detect the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) of an [object reference variable](ABENOBJECT_REFER_VARIABLE_GLOSRY.html). This makes it possible to check the feasibility of a [downcast](ABENDOWN_CAST_GLOSRY.html) before it is executed.

The special statement [`CASE TYPE OF`](ABAPCASE_TYPE.html) makes it possible to check the [dynamic type](ABENDYNAMIC_TYPE_GLOSRY.html) of an [object reference variable](ABENOBJECT_REFER_VARIABLE_GLOSRY.html) as a case distinction.

If the character `#` is specified for the result type, enhancements were made for the following constructor expressions:

From ABAP release 7.50, the [object component selector `->`](ABENTABLE_EXP_CHAINING.html) can be specified directly after [table expressions](ABENTABLE_EXPRESSIONS.html) that return a reference variable. This makes it possible to access components of the referenced object. An exception are table expressions whose [result](ABENTABLE_EXP_RESULT.html) is determined with the value operator `VALUE`.

-   In the case of the constructor operator [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html) an attempt is now made to evaluate the first declaration after `INIT` if the type of the operand position cannot be identified.
-   When the constructor expressions

-   [`CONV #( ... )`](ABENCONSTRUCTOR_EXPRESSION_CONV.html)
-   [`VALUE #( )`](ABENVALUE_CONSTRUCTOR_PARAMS_INIT.html)
-   [`REDUCE #( ... )`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html)
-   [`COND #( ... )`](ABENCONDITIONAL_EXPRESSION_COND.html)
-   [`SWITCH #( ... )`](ABENCONDITIONAL_EXPRESSION_SWITCH.html)

-   are passed to generically typed formal parameters, no type could be derived for `#` from the operand position until now. From ABAP release 7.50, a concrete type is derived for `#` for generic formal parameter types where this is possible and feasible if this cannot be determined in any other way. This prevents syntax errors when procedures are called in cases where a previously concrete type of a formal parameter is expanded to a generic type.

abenabap.html abennews.html abennews-75.html abennews-750.html