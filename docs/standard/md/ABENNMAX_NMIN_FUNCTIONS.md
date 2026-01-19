---
title: "ABENNMAX_NMIN_FUNCTIONS"
description: |
  ABENNMAX_NMIN_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNMAX_NMIN_FUNCTIONS.htm"
abapFile: "ABENNMAX_NMIN_FUNCTIONS.html"
keywords: ["if", "data", "ABENNMAX", "NMIN", "FUNCTIONS"]
---

`... nmax|nmin( val1 = arg1 val2 = arg2 [val3 = arg3] ... [val9 = arg9] ) ...`

These [built-in functions](ABENBUILT_IN_FUNCTIONS.html) return the value of the largest or smallest of the passed arguments. A minimum of two arguments, `arg1` and `arg2` must, and a maximum of nine arguments can be passed. Here, the optional input parameters `val3` to `val9` must be filled in ascending order without gaps. The arguments `arg1` to `arg9` are [numeric expression positions](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html).

The following applies to the data type of the return value:

the evaluation of the functions is equivalent to:

IF num1 >= num2 | num1 <= num2. \\n  result = num1. \\nELSE. \\n  result = num2. \\nENDIF.

When using more than two input parameters, an equivalent control structure would be more complex.

Determination of the smaller of two UTC time stamps in packed numbers, whereby the initial value of the conditional operator [`COND`](ABENCONDITIONAL_EXPRESSION_COND.html) is not regarded as the smallest value.

[Extremum Functions `nmax`, `nmin`](ABENNMAX_NMIN_FUNCTION_ABEXA.html)

-   Outside of an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html), a [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) is determined from all arguments and used to perform the comparison. The calculation type is determined just like an [arithmetic expression](ABENARITH_TYPE.html) and also determines the data type of the return value.
-   Within an arithmetic expression, the arguments of the function contribute to the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) of the entire expression and the function is calculated using the calculation type. If an argument itself is an arithmetic expression, its operands contribute to the entire calculation type and the argument is also calculated using this type.

-   The extremum functions [`cmax`](ABENCMAX_CMIN_FUNCTIONS.html) and [`cmin`](ABENCMAX_CMIN_FUNCTIONS.html) can be used to determine character-like extreme values.
-   When using two input parameters:
-   `result = nmax|nmin( val1 = arg1 val2 = arg2 )`

CONSTANTS max\_ts TYPE timestamp VALUE 999999999999999. \\n\\ \\nDATA: ts1 TYPE timestamp, \\n ts2 TYPE timestamp. \\n\\ \\nGET TIME STAMP FIELD ts1. \\n\\ \\nFINAL(min\_ts) = \\n nmin( val1 = COND timestamp( WHEN ts1 IS INITIAL \\n THEN max\_ts ELSE ts1 ) \\n val2 = COND timestamp( WHEN ts2 IS INITIAL \\n THEN max\_ts ELSE ts2 ) ) ##type. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html