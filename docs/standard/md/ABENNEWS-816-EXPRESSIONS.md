---
title: "ABENNEWS-816-EXPRESSIONS"
description: |
  ABENNEWS-816-EXPRESSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-816-EXPRESSIONS.htm"
abapFile: "ABENNEWS-816-EXPRESSIONS.html"
keywords: ["if", "case", "ABENNEWS", "816", "EXPRESSIONS"]
---

[1. String Expressions in `VALUE` Operator](#ABAP_MODIFICATION_1@4@) 

[2. `FOR GROUPS ... OF` Supported for `NEW`](#ABAP_MODIFICATION_2@4@)

[3\. Syntax Warning for Multiple Assignments of Components](#ABAP_MODIFICATION_3@4@)

[4\. Factorial and Binomial Functions](#ABAP_MODIFICATION_4@4@)

[5\. Arithmetic Functions for Statistics and Probability Theory in ABAP](#ABAP_MODIFICATION_5@4@)

String expressions can now directly be assigned to incompatible components without using `CONV` in assignments to [structure components](ABENVALUE_CONSTRUCTOR_PARAMS_STRUC.html):`VALUE ...( comp = strg_expr )` vs. `VALUE ...( comp = CONV #( strg_expr ) )`.

The variant [`FOR GROUPS ... OF`](ABENFOR_GROUPS_OF.html) of the iteration expression [`FOR`](ABENFOR.html) is now also supported for the constructor operator [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html).

In the constructor operators [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_STRUCT.html) and [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_STRUC.html) for structures, it is not allowed to assign multiple values to a component. This leads to a syntax error, if the component is directly named. It leads now also to a syntax warning in cases, where [component groups](ABENCOMPONENT_GROUP_GLOSRY.html) are involved.

The built-in function [`factorial`](ABENFACTORIAL_FUNCTIONS.html) computes the factorial of positive integer values. The [`binomial`](ABENBINOMIAL_FUNCTIONS.html) function computes the binomial coefficient.

The following arithmetic functions are now available:

-   `ERF`, `ERFC`, and `ERF_INV` for calculations with [floating point numbers](ABENFLOATING_POINT_NUMBER_GLOSRY.html) and [decimal floating points numbers](ABENDECFLOAT_GLOSRY.html) implement the error function, the complementary error function and its inverses.
-   `GAMMA` and `LOG_GAMMA` implement the gamma and log gamma functions for calculations with floating point numbers and decimal floating points numbers.
-   `GAMMA_LOWER` implements the lower incomplete gamma function and its inverse for calculations with floating point numbers and decimal floating points numbers.

abenabap.html abennews.html abennews-81.html abennews-816.html