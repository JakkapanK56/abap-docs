---
title: "ABENBIT_OPERATORS"
description: |
  ABENBIT_OPERATORS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBIT_OPERATORS.htm"
abapFile: "ABENBIT_OPERATORS.html"
keywords: ["data", "types", "ABENBIT", "OPERATORS"]
---

Bit operators work with the individual bits of the operands. The [calculation length](ABENCALCULATION_LENGTH_GLOSRY.html) is determined by the operands involved. Combining two operands with `BIT-AND`, `BIT-OR`, and `BIT-XOR` produces a result of this length in which each bit is set according to the table from the bits of the corresponding positions in the operands. `BIT-NOT` changes the bits of the operands to its right as shown in the table.

The order of the columns in the table reflects the priority of the bit operators. The operator `BIT-NOT` has the highest, and `BIT-OR` the lowest priority. Within one [level of parentheses](ABENBIT_BRACKETS.html), the results of operators with higher priority are formed before the results with operators of a lower priority. For adjacent operators of the same priority, the evaluation is performed from left to right, except for the operator `BIT-NOT`, which is executed from right to left.

Use of various bit operators.

The displayed result is:

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES output TYPE TABLE OF xstring WITH EMPTY KEY. \\nDATA hex1 TYPE xstring VALUE '0011'. \\nDATA hex2 TYPE xstring VALUE '0101'. \\nout->write( VALUE output( \\n ( hex1 BIT-AND hex2 ) \\n ( hex1 BIT-OR hex2 ) \\n ( hex1 BIT-XOR hex2 ) ) ). \\n\\ \\nout->display( ). 0001 \\n0111 \\n0110 `x` `y` `BIT-NOT x` `x BIT-AND y` `x BIT-XOR y` `x BIT-OR y` 0 0 1 0 0 0 0 1 1 0 1 1 1 0 0 0 1 1 1 1 0 1 0 1 abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenbyte\_processing\_expr\_func.html abapcompute\_bit.html