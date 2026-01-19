---
title: "ABAPADD-CORRESPONDING"
description: |
  ABAPADD-CORRESPONDING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPADD-CORRESPONDING.htm"
abapFile: "ABAPADD-CORRESPONDING.html"
keywords: ["do", "if", "class", "data", "ABAPADD", "CORRESPONDING"]
---

`ADD-CORRESPONDING      struc1 TO struc2.`\\ 
`SUBTRACT-CORRESPONDING struc1 FROM struc2.`\\ 
`MULTIPLY-CORRESPONDING struc1 BY   struc2.`\\ 
`DIVIDE-CORRESPONDING   struc1 BY   struc2.`

These statements, which are forbidden in classes, add, subtract, multiply, or divide structures by component. Structures must be specified for `struc1` and `struc2`. All identically named components in `struc1` and `struct2` are processed in pairs and the result is assigned to the respective component of `struct2`.

The names are compared, as in the statement [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html). For each identically named component pair `comp`, the statement

is executed internally, and the appropriate conversions are performed, if necessary. In complex structures, the names of the field pairs in question must be completely identical at all hierarchical levels.

These statements are error-prone because, particularly in complex structures, it is not easy to check that identically named components have the data type and content necessary for a numeric operation.

The components `x` and `y` occur in both structures and are added. After the addition, the results are in `struc2-x` and `struc2-y`.

`CX_SY_ARITHMETIC_OVERFLOW`

`CX_SY_CONVERSION_OVERFLOW`

`CX_SY_ZERODIVIDE`

-   `[ADD](ABAPADD.html) struc1-comp TO struc2-comp.`
-   `[SUBTRACT](ABAPADD.html) struc1-comp FROM struc2-comp.`
-   `[MULTIPLY](ABAPADD.html) struc1-comp BY struc2-comp.`
-   `[DIVIDE](ABAPADD.html) struc1-comp BY struc2-comp.`

-   *Cause:* Overflow in addition, type I in the additions `UNTIL` or `FROM` ... `TO`\\
    *Runtime error:*\\ `ADDF_INT_OVERFLOW`
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

DATA: BEGIN OF struc1, \\n x TYPE i, \\n y TYPE i, \\n z TYPE i, \\n END OF struc1, \\n BEGIN OF struc2, \\n a TYPE i, \\n b TYPE i, \\n x TYPE p LENGTH 8 DECIMALS 0, \\n y TYPE p LENGTH 8 DECIMALS 0, \\n END OF struc2. \\n\\ \\n... \\n\\ \\nADD-CORRESPONDING struc1 TO struc2. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencomputing\_obsolete.html