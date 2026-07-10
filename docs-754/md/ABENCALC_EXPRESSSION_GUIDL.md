---
title: "Calculations - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalc_expresssion_guidl.htm"
abapFile: "abencalc_expresssion_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Structure and Style](ABENSTRUCTURE_STYLE_GUIDL.md) →  [Alternative Spellings](ABENALTERNATIVE_SPELLING_GUIDL.md) → 

Calculations

Background

In ABAP, the [arithmetic operators](ABENARITHMETIC_OPERATOR_GLOSRY.md "Glossary Entry") in [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.md "Glossary Entry") are used for numeric calculations. [Calculation assignments](ABENCALCULATION_ASSIGNMENT_GLOSRY.md "Glossary Entry") with the operators [+=](ABENCALCULATION_ASSIGNMENTS.md), [\-=](ABENCALCULATION_ASSIGNMENTS.md), [\*=](ABENCALCULATION_ASSIGNMENTS.md), and [/=](ABENCALCULATION_ASSIGNMENTS.md) are available for the basic arithmetic operations. These operator formats are accompanied by the dedicated ABAP keywords ADD, SUBTRACT, MULTIPLY, and DIVIDE.

Rule

Use the operator format

For calculations, use the operator format with the operators (+=, \-=, \*=, or /=) instead of the ABAP keyword format.

Details

Calculations with the statements ADD, SUBTRACT, MULTIPLY, and DIVIDE do not permit expressions in the operand positions and are often more difficult to read than the corresponding operator format.

Bad Example

The following source code shows a multiplication using the statement MULTIPLY.

MULTIPLY n1 by n2.

Good Example

The following source code shows the same example as above, but in the more compact operator format.

n1 \*=  n2.
