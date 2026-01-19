---
title: "ABENOPERATORS"
description: |
  ABENOPERATORS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENOPERATORS.htm"
abapFile: "ABENOPERATORS.html"
keywords: ["do", "if", "data", "types", "field-symbol", "ABENOPERATORS"]
---

ABAP contains the following operators:

-   Operators that perform special operations in operand positions:

-   [**Declaration Operators**](ABENINLINE_DECLARATIONS.html)
-   The declaration operators `DATA` and `FIELD-SYMBOL` declare variables or field symbols in operand positions.
-   [**Constructor Operators**](ABENCONSTRUCTOR_EXPRESSIONS.html)
-   The constructor operators `NEW`, `VALUE`, `CONV`, `CORRESPONDING`, `CAST`, `REF`, `EXACT`, `REDUCE`, `FILTER`, `COND`, and `SWITCH` construct values for data objects of specific data types in constructor expressions.

-   Operators that combine multiple operands to a single expression:

-   [**Assignment Operators**](ABENEQUALS_OPERATOR.html)
-   The assignment operator `=` combines the source field and target field of an assignment. The special [casting operator](ABENCASTING_OPERATOR_GLOSRY.html)\\ `?=` performs a [downcast](ABENDOWN_CAST_GLOSRY.html) during the assignment. The [addition assignment operator](ABENADD_ASSIGNMENT_OP_GLOSRY.html) ([`+=`](ABENCALCULATION_ASSIGNMENTS.html)), [subtraction assignment operator](ABENSUB_ASSIGNMENT_OP_GLOSRY.html) ([`-=`](ABENCALCULATION_ASSIGNMENTS.html)), [multiplication assignment operator](ABENMULT_ASSIGNMENT_OP_GLOSRY.html) ([`*=`](ABENCALCULATION_ASSIGNMENTS.html)), [division assignment operator](ABENDIV_ASSIGNMENT_OP_GLOSRY.html) ([`/=`](ABENCALCULATION_ASSIGNMENTS.html)), or [concatenation assignment operator](ABENCONCAT_ASSIGNMENT_OP_GLOSRY.html) ([`**=`](ABENCALCULATION_ASSIGNMENT_STRING.html)) performs a [calculation assignment](ABENCALCULATION_ASSIGNMENT_GLOSRY.html). Furthermore, the operator `=` binds actual parameters to formal parameters, for example in procedure calls or when working with [data clusters](ABENDATA_CLUSTER_GLOSRY.html).
-   [**Arithmetic Operators**](ABAPCOMPUTE_ARITH.html)
-   The arithmetic operators `+`, `-`, `*`, `/`, `DIV`, `MOD`, and `**` combine two or more numeric operands to an arithmetic expression. In addition, the characters `+` and `-` act as algebraic signs in arithmetic expressions.
-   [**Bit Operators**](ABAPCOMPUTE_BIT.html)
-   The bit operators `BIT-AND`, `BIT-OR`, and `BIT-XOR` combine two or more byte-like operands to a bit expression. The bit operator `BIT-NOT` negates a byte-like operand.
-   [**String Operators**](ABAPCOMPUTE_STRING.html)
-   The string operator `&&` concatenates two character-like operands to a string expression.
-   [**Relational Operators**](ABENLOGEXP.html)
-   Relational operators occur in relational expressions, which in turn are components of logical expressions. The [comparison operators](ABENCOMP_OPERATOR_GLOSRY.html)\\ `=`, `<>`, `<`, `>`, `<=`,`>=`, `BETWEEN`, and so on combine two or more operands of any data type to a comparison expression. There are additional relational operators for specific data types. The [predicate operator](ABENPREDICATE_OPERATOR_GLOSRY.html)\\ `IS` makes a statement about an operand.
-   [**Boolean Operators**](ABENLOGEXP_BOOLE.html)
-   The Boolean operators `AND`, `OR`, and `EQUIV` combine the results of individual logical expressions to one logical expression. The result of a logical expression is either true or false. The Boolean operator `NOT` negates the result of a logical expression.

-   Operator that combine two operands during program compilation:

-   [**Literal Operator**](ABENLITERAL_OPERATOR.html)
-   The literal operator `&` combines two literals or two string templates to form one literal or string template.

abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_expressions.html abenoperators\_expressions.html