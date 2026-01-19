---
title: "ABENEQUALS_OPERATOR"
description: |
  ABENEQUALS_OPERATOR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEQUALS_OPERATOR.htm"
abapFile: "ABENEQUALS_OPERATOR.html"
keywords: ["do", "if", "method", "data", "ABENEQUALS", "OPERATOR"]
---

`lhs = rhs.`

An operator `=` that is placed in a statement between a left hand side `lhs` and a right hand side `rhs` acts as an [assignment operator](ABENASSIGNMENT_OPERATOR_GLOSRY.html), that assigns the value of the right hand side to the left hand side. If necessary, a [conversion](ABENCONVERSION_RULES.html) takes place.

The right side `rhs`, which is the source of the assignment, is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html) and can be specified as follows:

The left side `lhs`, the target of the assignment, is a both a [declaration position](ABENDECLARATION_POSITION_GLOSRY.html) and a [result position](ABENRESULT_POSITION_GLOSRY.html) and can be specified as follows:

If an exception is raised on the right side, the statement is not executed, and the value of the target field is undefined.

Assignments of a literal, a constructor expression, and an arithmetic expression to target fields.

-   As a single [data object](ABAPMOVE.html)
-   As a [return value or result](ABENEQUALS_RETURN_VALUES.html) of functional methods, built-in functions, or constructor expressions or table expressions
-   As a result of [calculation expressions](ABENEQUALS_CALC_EXPR.html)

-   As any data object that can be specified in a [write position](ABENWRITE_POSITION_GLOSRY.html). The data type of the data object must either be [compatible](ABENCOMPATIBLE_GLOSRY.html) with the assigned value or must be convertible to the data type of `lhs` in accordance with one of the [conversion rules](ABENCONVERSION_RULES.html). If the assigned value does not match the data type of `lhs`, the exceptions described in the conversion rules can occur.
-   As an inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). The data type of the declared variable is determined by the right side and is described for the different `rhs` options. Any variable that is used on the right side cannot be declared on the left side. An identically named data object of a more global context can be used on the right side and is not hidden by the local declaration until after the statement.
-   As a [writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html) representing an operand to which the right side can be assigned.

-   See also [calculation assignments](ABENCALCULATION_ASSIGNMENT_GLOSRY.html) with the operators [`+=`](ABENCALCULATION_ASSIGNMENTS.html), [`-=`](ABENCALCULATION_ASSIGNMENTS.html), [`*=`](ABENCALCULATION_ASSIGNMENTS.html), [`/=`](ABENCALCULATION_ASSIGNMENTS.html), and [`&&=`](ABENCALCULATION_ASSIGNMENT_STRING.html).

DATA: o1 TYPE i, \\n o2 TYPE i, \\n r TYPE i. \\n\\ \\no1 = 100. \\no2 = CONV #( '200' ). \\nr = o1 + o2. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html