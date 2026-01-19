---
title: "ABENCALC_EXPRESSSION_GUIDL"
description: |
  ABENCALC_EXPRESSSION_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCALC_EXPRESSSION_GUIDL.htm"
abapFile: "ABENCALC_EXPRESSSION_GUIDL.html"
keywords: ["do", "if", "ABENCALC", "EXPRESSSION", "GUIDL"]
---

In ABAP, the [arithmetic operators](ABENARITHMETIC_OPERATOR_GLOSRY.html) in [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html) are used for numeric calculations. [Calculation assignments](ABENCALCULATION_ASSIGNMENT_GLOSRY.html) with the operators [`+=`](ABENCALCULATION_ASSIGNMENTS.html), [`-=`](ABENCALCULATION_ASSIGNMENTS.html), [`*=`](ABENCALCULATION_ASSIGNMENTS.html), and [`/=`](ABENCALCULATION_ASSIGNMENTS.html) are available for the basic arithmetic operations. These operator formats are accompanied by the dedicated ABAP keywords `ADD`, `SUBTRACT`, `MULTIPLY`, and `DIVIDE`.

**Use the operator format**

For calculations, use the operator format with the operators (`+=`, `-=`, `*=`, or `/=`) instead of the ABAP keyword format.

Calculations with the statements `ADD`, `SUBTRACT`, `MULTIPLY`, and `DIVIDE` do not allow expressions in the operand positions and are often more difficult to read than the corresponding operator format.

The following source code shows a multiplication using the statement `MULTIPLY`.

The following source code shows the same example as above, but in the more compact operator format.

n1 \*=  n2.

MULTIPLY n1 by n2. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenstructure\_style\_gdl.html abenalternative\_spelling\_gdl.html