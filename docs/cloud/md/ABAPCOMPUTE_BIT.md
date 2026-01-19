---
title: "ABAPCOMPUTE_BIT"
description: |
  ABAPCOMPUTE_BIT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCOMPUTE_BIT.htm"
abapFile: "ABAPCOMPUTE_BIT.html"
keywords: ["if", "method", "data", "ABAPCOMPUTE", "BIT"]
---

``... [[`BIT-NOT`](ABENBIT_OPERATORS.html)] operand1      [\{[`BIT-AND|BIT-OR|BIT-XOR`](ABENBIT_OPERATORS.html)\}\ [[`BIT-NOT`](ABENBIT_OPERATORS.html)] operand2      [\{[`BIT-AND|BIT-OR|BIT-XOR`](ABENBIT_OPERATORS.html)\}\ [[`BIT-NOT`](ABENBIT_OPERATORS.html)] operand3      ...  ]] ...``

A bit expression formulates a binary calculation. The operands must be byte-like, that is, of type `x` or `xstring`. The result of a bit expression is a byte chain in the [calculation length](ABENBITEXP_LENGTH.html) assigned to the bit expression. During assignment to an inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), the byte chain is handled as a byte string of data type `xstring`, and when passing a generic typed formal parameter, it is handled as a byte field of data type `x`.

In a bit expression `bit_exp`, an operand `operand1` can be combined with one or more operands `operand2`, `operand3`, ... using [bit operators](ABENBIT_OPERATORS.html)\\ `BIT-AND`, `BIT-OR`, or `BIT-XOR`. [Brackets](ABENBIT_BRACKETS.html) are possible. Bit expressions can occur in read positions of [certain statements](ABENEXPRESSION_POSITIONS.html), in particular on the right side of an [assignment](ABENEQUALS_BIT_EXPR.html) with the [assignment operator `=`](ABENEQUALS_OPERATOR.html).

The operand positions `operand` are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html), which means byte-like data objects, [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) with byte-like return values, or parenthesized bit expressions can be specified. The bit operators `BIT-AND`, `BIT-OR`, and `BIT-XOR` combine two adjacent operands. When the expression is evaluated, a byte-like value is calculated and combined with the next adjacent operand. The priority of the combination depends on the operators that are used. If functional methods are used, the same applies as described for [arithmetic expressions](ABAPCOMPUTE_ARITH.html).

The [bit operator](ABENBIT_OPERATORS.html)\\ `BIT-NOT` can be specified one or more times in front of an operand to negate the value of the operand. If `BIT-NOT` is specified an even number of times, the operand remains unchanged. An odd number negates the operand.

If [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) are specified as operands, they are executed from left to right and from inside to outside before the remainder of the expression is evaluated. The return values are buffered to be used in the corresponding operand positions.

If [constructor expressions](ABENCONSTRUCTOR_EXPRESSIONS.html) are specified as operands of bit expressions, their data type is not determined by the bit expression. The `#` character can be specified for the data type of the constructor expression only if the type can be determined from the constructor expression itself.

Bit sequences are an efficient way of mapping bit sequences. If a set contains n elements, the existence of an element i in n can be represented by a 1 at the position of i in a byte-like field. The statement [`SET BIT`](ABAPSET_BIT.html), for example, can be used to add an element to the set. The operators `BIT-AND`, `BIT-OR`, and `BIT-XOR` can then be used to calculate the intersection, the union, and the symmetric difference of different sets.

In the following example, the attributes of person groups are represented in the fields `p1`, `p2`, `p3` of the type `x`. The bit operator `BIT-AND` is then used to determine which attributes are shared by all people. The result shows that only the eighth attribute is shared.

DATA: \\n p1 TYPE x LENGTH 1 VALUE '5B', "01011011 \\n p2 TYPE x LENGTH 1 VALUE '13', "00010011 \\n p3 TYPE x LENGTH 1 VALUE 'A5'. "10100101 \\n\\ \\nFINAL(res) = p1 BIT-AND p2 BIT-AND p3. "00000001 abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenbyte\_processing\_expr\_func.html