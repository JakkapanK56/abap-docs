---
title: "ABENTYPING_CHECK"
description: |
  ABENTYPING_CHECK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTYPING_CHECK.htm"
abapFile: "ABENTYPING_CHECK.html"
keywords: ["if", "method", "data", "field-symbol", "ABENTYPING", "CHECK"]
---

When data objects are assigned to typed [field symbols](ABENFIELD_SYMBOL_GLOSRY.html) and [actual parameters](ABENACTUAL_PARAMETER_GLOSRY.html) are assigned to typed [formal parameters](ABENFORMAL_PARAMETER_GLOSRY.html) of [procedures](ABENPROCEDURE_GLOSRY.html), the system checks whether the data type of the assigned data object matches the typing of the field symbol or of the formal parameter.

Special rules apply to:

When specifying data objects suitable for a typing, an assignment to a helper variable with a valid data type is often made. When methods are called, these helper variables can often be spared by using a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) in the position of an actual parameter.

-   [General rules for typing](ABENTYPING_CHECK_GENERAL.html)

-   [Return values of functional methods](ABENTYPING_RETURN_VALUES.html)
-   [Literals as actual parameters](ABENTYPING_LITERALS.html)
-   [Expressions as actual parameters](ABENTYPING_ARITH_EXPR.html)

abenabap.html abenabap\_reference.html abendeclarations.html abentyping.html