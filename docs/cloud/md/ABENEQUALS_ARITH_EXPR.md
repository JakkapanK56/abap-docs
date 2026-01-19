---
title: "ABENEQUALS_ARITH_EXPR"
description: |
  ABENEQUALS_ARITH_EXPR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEQUALS_ARITH_EXPR.htm"
abapFile: "ABENEQUALS_ARITH_EXPR.html"
keywords: ["if", "case", "try", "catch", "data", "types", "field-symbol", "ABENEQUALS", "ARITH", "EXPR"]
---

``result = [`arith_exp`](ABAPCOMPUTE_ARITH.html).``

If an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html)\\ [`arith_exp`](ABAPCOMPUTE_ARITH.html) is specified on the right side of the [assignment operator `=`](ABENEQUALS_OPERATOR.html), its [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) is calculated and assigned to the left side `result`.

The following can be specified for `result`:

If an existing variable is specified for `result`, its data type is included in the determination of the [calculation type](ABENARITH_TYPE.html). If the calculation type is not the data type of `result`, the result is converted to the data type of the result field before the assignment is made.

The first assignment is an assignment of an arithmetic expression, because of the leading plus/minus sign. The [calculation type](ABENARITH_TYPE.html) is determined as `i` and `result` is given the value *731036*, the number of days since 01.01.0001. The second assignment, on the other hand, has the same meaning as an [assignment of data objects](ABAPMOVE.html) and produces the value *20020704* in `result`.

This example demonstrates inline declarations with the calculation type `p`. Assignments of a data object use its data type, but assignments of an arithmetic expression with the calculation type `p`, the data type `p` with length 8 and without decimal places is used. This means that decimal places are lost in the first assignment and that the second assignment produces and overflow and its corresponding exception. The conversion operator `CONV` can be used to avoid these problems.

-   A [variable](ABENVARIABLE_GLOSRY.html) that is compatible with the numeric result of the arithmetic expression or to whose type the result can be converted.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). The data type of the declared variable `var` is the statically known [calculation type](ABENCALCULATION_TYPE_GLOSRY.html), where generically typed field symbols and formal parameters with a [standard type](ABENSTANDARD_TYPE_GLOSRY.html)\\ [described here](ABENARITH_TYPE.html) are involved. In the case of the calculation type `p`, the data type of the declared variable is always `p` with the length 8 without decimal places. Furthermore, if [decimal floating point numbers](ABENDECFLOAT_GLOSRY.html) of type `DECFLOAT16` are involved but no numbers of type `DECFLOAT34`, the data type of the declared variable is not the calculation type `DECFLOAT34` but `DECFLOAT16`.

-   The fact that the result field is respected when the calculation type is determined is a special property of ABAP that should always be kept in mind.
-   The calculation type that is dependent on the data type of the result field is an important difference from an [assignment of data objects](ABAPMOVE.html). If data objects are incompatible, the source field is always converted to the data type of the target field. When arithmetic expressions are assigned, their operands can also be converted to the data type of the result field before the calculation.
-   The fact that a [calculation type](ABENCALCULATION_TYPE_GLOSRY.html)\\ `p` on the right side of an inline declaration produces the data type `p` with length 8 and no decimal places can lead to unexpected results and raise exceptions. It is best to either avoid inline declarations when using the calculation type `p` or to determine the data type by applying the conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) to the arithmetic expression.
-   See also [calculation assignments](ABENCALCULATION_ASSIGNMENT_GLOSRY.html) with the operators [`+=`](ABENCALCULATION_ASSIGNMENTS.html), [`-=`](ABENCALCULATION_ASSIGNMENTS.html), [`*=`](ABENCALCULATION_ASSIGNMENTS.html) and [`/=`](ABENCALCULATION_ASSIGNMENTS.html).

DATA: result TYPE string, \\n date TYPE d VALUE '20020704'. \\n\\ \\nresult = + date. \\nresult = date. TYPES pack8\_3 TYPE p LENGTH 8 DECIMALS 3. \\nTYPES pack16 TYPE p LENGTH 16 DECIMALS 0. \\nDATA number1 TYPE pack8\_3 VALUE '12345.678'. \\nDATA number2 TYPE pack16 VALUE '12345678901234567890'. \\n\\ \\nFINAL(result1) = number1. "p, length 8, decimals 3 \\nFINAL(result2) = number2. "p, length 16 \\nTRY. \\n FINAL(result3) = 1 \* number1 ##type. "p, length 8, decimals 0 \\n FINAL(result4) = 1 \* number2 ##type. "p, length 8 ->exception \\n CATCH cx\_sy\_arithmetic\_overflow. \\nENDTRY. \\nFINAL(result5) = CONV pack8\_3( 1 \* number1 ). "p, length 8, decimals 3 \\nFINAL(result6) = CONV pack16( 1 \* number2 ). "p, length 16 abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenequals\_operator.html abenequals\_calc\_expr.html