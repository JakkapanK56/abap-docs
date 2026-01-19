---
title: "ABENLOGEXP_BOOLE"
description: |
  ABENLOGEXP_BOOLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_BOOLE.htm"
abapFile: "ABENLOGEXP_BOOLE.html"
keywords: ["do", "if", "method", "field-symbol", "ABENLOGEXP", "BOOLE"]
---

The following Boolean operators combine logical expressions:

The following operator negates a logical expression:

Logical expressions can be parenthesized explicitly using the following:

When multiple Boolean operators are combined, the system implicitly parenthesizes all logical expressions that are not closed by explicit parentheses according to the following hierarchy (operator order, precedence). This expresses the binding strength between Boolean operators:

The logical expressions of a parenthesis level are processed from left to right. If the value of a logical expression determines the total value of the parenthesis level, the remaining logical expressions are no longer evaluated. In particular, the dynamic parts of the expressions that are not evaluated, such as field symbols or reference variables, are not checked for validity.

-   [`AND`](ABENLOGEXP_AND.html)
-   [`OR`](ABENLOGEXP_OR.html)
-   [`EQUIV`](ABENLOGEXP_EQUIV.html)

-   [`NOT`](ABENLOGEXP_NOT.html)

-   [`( )`](ABENLOGEXP_BRACKET.html)

-   If multiple logical expressions are combined, the explicit and implicit parentheses always produce exactly one logical expression that is either true or false.
-   The smallest unit of a combined logical expression is always a [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html).
-   If [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) are used as operands in the involved relational expressions, they are executed directly before the respective relational expression is evaluated. Functional methods in relational expressions that do not need to be evaluated to get the result are not executed.

1.  All Boolean operators `NOT` are combined with the adjacent logical expression on the right to form a logical expression.
2.  All logical expressions combined using `AND` form a logical expression.
3.  All logical expressions combined using `OR` form a logical expression.
4.  All logical expressions combined using `EQUIV` form a logical expression.

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html