---
title: "These statements have the same effect as the statements"
description: |
  `dobj2 -= dobj1.`(ABENCALCULATION_ASSIGNMENTS.html) `dobj2 = dobj1.`(ABENCALCULATION_ASSIGNMENTS.html) `dobj2 /= dobj1.`(ABENCALCULATION_ASSIGNMENTS.html) that are the same as `dobj2 = dobj2 - dobj1.`(ABENEQUALS_ARITH_EXPR.html) n`dobj2 = dobj2  dobj1.`(ABENEQUALS_ARITH_EXPR.html)
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSUBTRACT_MULTIPLY_DIVIDE.htm"
abapFile: "ABAPSUBTRACT_MULTIPLY_DIVIDE.html"
keywords: ["do", "if", "catch", "data", "ABAPSUBTRACT", "MULTIPLY", "DIVIDE"]
---

`SUBTRACT dobj1 FROM dobj2.`\\ 
`MULTIPLY dobj2 BY   dobj1.`\\ 
`DIVIDE   dobj2 BY   dobj1.`

***This syntax is only supported temporarily in the current ABAP language version and must be replaced with valid syntax for that version.***\\ \\n\\n

These statements have the same effect as the statements

[`dobj2 -= dobj1.`](ABENCALCULATION_ASSIGNMENTS.html)

[`dobj2 *= dobj1.`](ABENCALCULATION_ASSIGNMENTS.html)

[`dobj2 /= dobj1.`](ABENCALCULATION_ASSIGNMENTS.html)

that are the same as

[`dobj2 = dobj2 - dobj1.`](ABENEQUALS_ARITH_EXPR.html)\\ \\n[`dobj2 = dobj2 * dobj1.`](ABENEQUALS_ARITH_EXPR.html)\\ \\n[`dobj2 = dobj2 / dobj1.`](ABENEQUALS_ARITH_EXPR.html)

The content of `dobj2`

and the result is assigned to `dobj2`. The data objects `dobj1` and `dobj2` must be numeric. Only data objects can be specified and no calls or other expressions. The [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) is determined as for an [arithmetic expression](ABAPCOMPUTE_ARITH.html).

Division by the value 0 is undefined and raises a catchable exception. The only situation where division by 0 does not raise an exception is if the dividend is also 0. Here, the result is set to 0.

The statements shown here have been fully replaced by [calculation assignments](ABENCALCULATION_ASSIGNMENT_GLOSRY.html) with the operators [`-=`](ABENCALCULATION_ASSIGNMENTS.html), [`*=`](ABENCALCULATION_ASSIGNMENTS.html), and [`/=`](ABENCALCULATION_ASSIGNMENTS.html) in which the operands can also be specified as expressions.

`CX_SY_ARITHMETIC_OVERFLOW`

`CX_SY_CONVERSION_OVERFLOW`

`CX_SY_ZERODIVIDE`

-   has the content of `dobj1` subtracted,
-   or is multiplied by the content of `dobj1`,
-   or is divided by the content of `dobj1`,

-   *Cause:* Overflow in arithmetic operation (type `p`)
    *Runtime error:*\\ `BCD_OVERFLOW`
-   *Cause:* Integer overflow in addition
    *Runtime error:*\\ `COMPUTE_INT_PLUS_OVERFLOW`

-   *Cause:* Overflow in arithmetic operation (type `p`, with specified length)
    *Runtime error:*\\ `BCD_FIELD_OVERFLOW`

-   *Cause:* Division by 0 (type `p`)
    *Runtime error:*\\ `BCD_ZERODIVIDE`
-   *Cause:* Division by 0 (type `f`)
    *Runtime error:*\\ `COMPUTE_FLOAT_ZERODIVIDE`
-   *Cause:* Division by 0 (type `i`)
    *Runtime error:*\\ `COMPUTE_INT_ZERODIVIDE`

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencomputing\_obsolete.html