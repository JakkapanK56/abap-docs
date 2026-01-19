---
title: "These statements have the same effect as the statements"
description: |
  `dobj2 -= dobj1.`(ABENCALCULATION_ASSIGNMENTS.html) `dobj2 = dobj1.`(ABENCALCULATION_ASSIGNMENTS.html) `dobj2 /= dobj1.`(ABENCALCULATION_ASSIGNMENTS.html) that are the same as `dobj2 = dobj2 - dobj1.`(ABENEQUALS_ARITH_EXPR.html) n`dobj2 = dobj2  dobj1.`(ABENEQUALS_ARITH_EXPR.html)
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSUBTRACT_MULTIPLY_DIVIDE.htm"
abapFile: "ABAPSUBTRACT_MULTIPLY_DIVIDE.html"
keywords: ["do", "if", "catch", "data", "ABAPSUBTRACT", "MULTIPLY", "DIVIDE"]
---

`SUBTRACT dobj1 FROM dobj2.`\\ 
`MULTIPLY dobj2 BY   dobj1.`\\ 
`DIVIDE   dobj2 BY   dobj1.`

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

The variables `n1` and `n2` both have the value *1.50* after the calculation statements. The calculations are done with the obsolete calculation statements and with the corresponding [calculation assignments](ABENCALCULATION_ASSIGNMENTS.html).

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

-   *Cause:*\\ `p` field does not contain the correct BCD format
    *Runtime error:*\\ `BCD_BADDATA`

DATA n1 TYPE p DECIMALS 2. \\nADD 1 TO n1. \\nADD 1 TO n1. \\nADD 1 TO n1. \\nADD 1 TO n1. \\nSUBTRACT 2 FROM n1. \\nMULTIPLY n1 BY 3. \\nDIVIDE n1 BY 4. \\n\\ \\nDATA n2 TYPE p DECIMALS 2. \\nn2 += 1. \\nn2 += 1. \\nn2 += 1. \\nn2 += 1. \\nn2 -= 2. \\nn2 \*= 3. \\nn2 /= 4. \\n\\ \\nASSERT n1 = n2. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencomputing\_obsolete.html