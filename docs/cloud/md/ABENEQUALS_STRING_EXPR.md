---
title: "ABENEQUALS_STRING_EXPR"
description: |
  ABENEQUALS_STRING_EXPR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEQUALS_STRING_EXPR.htm"
abapFile: "ABENEQUALS_STRING_EXPR.html"
keywords: ["loop", "do", "if", "case", "data", "types", "ABENEQUALS", "STRING", "EXPR"]
---

``result = [`string_exp`](ABAPCOMPUTE_STRING.html).``

If a [string expression](ABENSTRING_EXPRESSION_GLOSRY.html) [`string_exp`](ABAPCOMPUTE_STRING.html) is specified on the right side of the [assignment operator `=`](ABENEQUALS_OPERATOR.html), its result of type `string` is calculated and assigned to the left side `result`.

The following can be specified for `result`:

The first assignment declares a target field of the type `string` inline and assigns the chained text *12* to it. The second assignment converts the chained text *12* to the number 12.

-   A [variable](ABENVARIABLE_GLOSRY.html) that has type `string` or to whose data type the result can be converted.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). The data type of the declared variable `var` is `string`.

-   In the following example, the result `result` is a variable with the type `string`, and strings are appended to this variable on the right side that cannot be recognized as dependent on `result` by the compiler:
-   `result = result && dobj1 && dobj2 && ...`
-   `result = |result...\{ dobj1 ... \}...\{ dobj2 ... \}...|.`
-   Here, no interim result is created but it is directly appended to the `result`. In all other cases, that is, data types other than `string` or when expressions are appended on the right side, an interim result is created first and then assigned. This optimization improves performance, but it must be ensured that, especially in loops, this improvement is not canceled out by using expressions on the right side, even if they are not dependent on `result`). See also the [Performance Note](ABENSTRING_EXPR_PERFO.html) for string expressions.
-   See also [calculation assignment](ABENCALCULATION_ASSIGNMENT_GLOSRY.html) with the operator [`**=`](ABENCALCULATION_ASSIGNMENT_STRING.html).

FINAL(text) = '1' && '2'. \\n\\ \\nDATA number TYPE i. \\nnumber = 1 && 2. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenequals\_operator.html abenequals\_calc\_expr.html