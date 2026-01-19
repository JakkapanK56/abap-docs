---
title: "This statement has the same effect as the statement"
description: |
  `dobj2 += dobj1.`(ABENCALCULATION_ASSIGNMENTS.html) that is the same as `dobj2 = dobj2 + dobj1.`(ABENEQUALS_ARITH_EXPR.html) The content of `dobj1` is added to the content of `dobj2` and the result is assigned to `dobj2`. The data objects `dobj1` and `dobj2` must be numeric. Only data objects ca
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPADD.htm"
abapFile: "ABAPADD.html"
keywords: ["do", "if", "data", "ABAPADD"]
---

`ADD dobj1 TO dobj2.`

***This syntax is only supported temporarily in the current ABAP language version and must be replaced with valid syntax for that version.***\\ \\n\\n

This statement has the same effect as the statement

[`dobj2 += dobj1.`](ABENCALCULATION_ASSIGNMENTS.html)

that is the same as

[`dobj2 = dobj2 + dobj1.`](ABENEQUALS_ARITH_EXPR.html)

The content of `dobj1` is added to the content of `dobj2` and the result is assigned to `dobj2`. The data objects `dobj1` and `dobj2` must be numeric. Only data objects can be specified, no calls or other expressions. The [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) is determined as for an [arithmetic expression](ABAPCOMPUTE_ARITH.html).

The statement `ADD` has been fully replaced by the [calculation assignment](ABENCALCULATION_ASSIGNMENT_GLOSRY.html) with the operator [`+=`](ABENCALCULATION_ASSIGNMENTS.html) in which the operands can also be specified as expressions.

`CX_SY_ARITHMETIC_OVERFLOW`

`CX_SY_CONVERSION_OVERFLOW`

-   *Cause:* Overflow in arithmetic operation (type `p`)
    *Runtime error:*\\ `BCD_OVERFLOW`
-   *Cause:* Integer overflow in addition
    *Runtime error:*\\ `COMPUTE_INT_PLUS_OVERFLOW`

-   *Cause:* Overflow in arithmetic operation (type `p`, with specified length)
    *Runtime error:*\\ `BCD_FIELD_OVERFLOW`

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencomputing\_obsolete.html