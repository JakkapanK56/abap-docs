---
title: "ABENLOSSLESS_MOVE"
description: |
  ABENLOSSLESS_MOVE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOSSLESS_MOVE.htm"
abapFile: "ABENLOSSLESS_MOVE.html"
keywords: ["if", "case", "data", "ABENLOSSLESS", "MOVE"]
---

In a [lossless assignment](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html), the assigned content is checked to see whether the assignment is lossless before [converting](ABENCONVERSION_GLOSRY.html) it to an incompatible target object. Lossless assignments can be performed using the

This makes it possible to use lossless assignments in all operand positions in which [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) can be specified.

A lossless assignment in the true sense of the word is the following use of a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) with [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) as the right side of an [assignment](ABENEQUALS_OPERATOR.html):

destination = [`` `EXACT` ``](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) #( source ).

In this case, `source` is converted to the data type of `destination` and checked accordingly.

-   [lossless operator `EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html), in which the operand is converted to a result of the specified type using the
-   [rules for lossless assignments.](ABAPMOVE_EXACT.html)

-   If the operand of the operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) is an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html), a [lossless calculation](ABENLOSSLESS_CALCULATION_GLOSRY.html) is performed instead of a lossless assignment.
-   When assigning structures component by component using [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html), there is an addition `EXACT` for lossless assignments.
-   Using the addition `EXACT` in the obsolete statement [`MOVE`](ABAPMOVE_OBS.html) is an obsolete form of lossless assignment.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html