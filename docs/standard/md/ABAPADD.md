---
title: "This statement has the same effect as the statement"
description: |
  `dobj2 += dobj1.`(ABENCALCULATION_ASSIGNMENTS.html) that is the same as `dobj2 = dobj2 + dobj1.`(ABENEQUALS_ARITH_EXPR.html) The content of `dobj1` is added to the content of `dobj2` and the result is assigned to `dobj2`. The data objects `dobj1` and `dobj2` must be numeric. Only data objects ca
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPADD.htm"
abapFile: "ABAPADD.html"
keywords: ["do", "if", "data", "ABAPADD"]
---

[Short Reference](ABAPADD_SHORTREF.html)

`ADD dobj1 TO dobj2.`

This statement has the same effect as the statement

[`dobj2 += dobj1.`](ABENCALCULATION_ASSIGNMENTS.html)

that is the same as

[`dobj2 = dobj2 + dobj1.`](ABENEQUALS_ARITH_EXPR.html)

The content of `dobj1` is added to the content of `dobj2` and the result is assigned to `dobj2`. The data objects `dobj1` and `dobj2` must be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) is determined as for an [arithmetic expression](ABAPCOMPUTE_ARITH.html).

The statement `ADD` has been fully replaced by the [calculation assignment](ABENCALCULATION_ASSIGNMENT_GLOSRY.html) with the operator [`+=`](ABENCALCULATION_ASSIGNMENTS.html) in which the operands can also be specified as expressions.

The variable `result_old` has the value *10* after the calculation statements. The syntax for the [calculation assignment](ABENCALCULATION_ASSIGNMENTS.html) with the same effect is also shown.

`CX_SY_ARITHMETIC_OVERFLOW`

`CX_SY_CONVERSION_OVERFLOW`

-   *Cause:* Overflow in arithmetic operation (type `p`)
    *Runtime error:*\\ `BCD_OVERFLOW`
-   *Cause:* Integer overflow in addition
    *Runtime error:*\\ `COMPUTE_INT_PLUS_OVERFLOW`

-   *Cause:* Overflow in arithmetic operation (type `p`, with specified length)
    *Runtime error:*\\ `BCD_FIELD_OVERFLOW`

-   *Cause:*\\ `p` field does not contain the correct BCD format
    *Runtime error:*\\ `BCD_BADDATA`

DATA result\_old TYPE i. \\nDO 10 TIMES. \\n ADD 1 TO result\_old. \\nENDDO. \\n\\ \\nDATA(result\_new) = 0. \\nDO 10 TIMES. \\n result\_new += 1. \\nENDDO. \\n\\ \\nASSERT result\_old = result\_new. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencomputing\_obsolete.html