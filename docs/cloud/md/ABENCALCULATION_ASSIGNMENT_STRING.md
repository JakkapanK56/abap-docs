---
title: "ABENCALCULATION_ASSIGNMENT_STRING"
description: |
  ABENCALCULATION_ASSIGNMENT_STRING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCALCULATION_ASSIGNMENT_STRING.htm"
abapFile: "ABENCALCULATION_ASSIGNMENT_STRING.html"
keywords: ["do", "if", "data", "ABENCALCULATION", "ASSIGNMENT", "STRING"]
---

`lhs &&= rhs.`

[Calculation assignment](ABENCALCULATION_ASSIGNMENT_GLOSRY.html) with the concatenation assignment operator `&&=`.

This assignment has the same effect as the following [assignment of a string expression](ABENEQUALS_STRING_EXPR.html):

`lhs = [lhs && rhs](ABENSTRING_OPERATORS.html).`

The result of the expression `rhs` is concatenated with the content of `lhs` and the result is assigned to `lhs`.

The following applies to the operands `lhs` and `rhs`:

After the calculation assignments, the variable `text` has the value *1, 2, 3, 4, 5, 6, 7, 8, 9, 10,*.

-   `lhs` is a [result position](ABENRESULT_POSITION_GLOSRY.html) and the following can be specified if they are character-like:

-   [Variables](ABENVARIABLE_GLOSRY.html)
-   [Writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html)

-   `rhs` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html) and the following can be specified if they are character-like:

-   [Data objects](ABENNUMERIC_DATA_OBJECT_GLOSRY.html)
-   [Constructor expressions](ABENCONSTRUCTOR_GLOSRY.html)
-   [String expressions](ABENSTRING_EXPRESSION_GLOSRY.html)
-   [Table expressions](ABENTABLE_EXPRESSION_GLOSRY.html)
-   [Functions](ABENFUNCTION_GLOSRY.html)

-   Type inference with the character `#` is not currently possible in constructor expressions. No [numeric expressions](ABENNUMERICAL_EXPRESSION_GLOSRY.html) and [bit expressions](ABENBIT_EXPRESSION_GLOSRY.html) can be specified.

-   No [inline declarations](ABENINLINE_DECLARATION_GLOSRY.html) are possible for `lhs`.
-   Calculation assignments can currently only be specified as standalone statements and after `NEXT` in the reduction operator [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html). They are not possible in other expressions.
-   See also the [addition assignment operator](ABENADD_ASSIGNMENT_OP_GLOSRY.html) ([`+=`](ABENCALCULATION_ASSIGNMENTS.html)), the [subtraction assignment operator](ABENSUB_ASSIGNMENT_OP_GLOSRY.html) ([`-=`](ABENCALCULATION_ASSIGNMENTS.html)), the [multiplication assignment operator](ABENMULT_ASSIGNMENT_OP_GLOSRY.html) ([`*=`](ABENCALCULATION_ASSIGNMENTS.html)), and the [division assignment operator](ABENDIV_ASSIGNMENT_OP_GLOSRY.html) ([`/=`](ABENCALCULATION_ASSIGNMENTS.html)).

DATA text TYPE string. \\nDO 10 TIMES. \\n text &&= |\\{ sy-index \\}, |. \\nENDDO. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html abenstring\_operators.html