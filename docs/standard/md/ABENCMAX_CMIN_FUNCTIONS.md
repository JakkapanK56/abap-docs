---
title: "ABENCMAX_CMIN_FUNCTIONS"
description: |
  ABENCMAX_CMIN_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCMAX_CMIN_FUNCTIONS.htm"
abapFile: "ABENCMAX_CMIN_FUNCTIONS.html"
keywords: ["do", "if", "case", "data", "types", "internal-table", "ABENCMAX", "CMIN", "FUNCTIONS"]
---

``... cmax|cmin( [`val1 = text1`](ABENSTRING_FUNCTIONS_VAL.html)  [`val2 = text2`](ABENSTRING_FUNCTIONS_VAL.html)\                [[`val3 = text3`](ABENSTRING_FUNCTIONS_VAL.html)] ... [[`val9 = text9`](ABENSTRING_FUNCTIONS_VAL.html)] ) ...``

These [built-in functions](ABENBUILT_IN_FUNCTIONS.html) return the value of the biggest or the smallest of the character-like arguments [`text1`](ABENSTRING_FUNCTIONS_VAL.html), [`text2`](ABENSTRING_FUNCTIONS_VAL.html), ... passed. The content of the arguments is compared from left to right in the evaluation. The first different character from the left determines which operand is bigger or smaller based on the order in the [code page](ABENCODEPAGE_GLOSRY.html) used.

At least two arguments, [`text1`](ABENSTRING_FUNCTIONS_VAL.html) and [`text2`](ABENSTRING_FUNCTIONS_VAL.html), and a maximum of nine arguments must be passed. Here, the optional input parameters `val3` through `val9` must be filled in ascending order without gaps.

The return value has the type `string`.

The example demonstrates how to find the smallest and largest letters of a random set, which is represented here by the lines of an internal table. Of course, in this case the result can also be achieved by sorting the internal table, which is used here for verification.

[String functions `cmax`, `cmin`, and `segment`](ABENCMAX_CMIN_FUNCTION_ABEXA.html).

-   The extremum functions [`nmax`](ABENNMAX_NMIN_FUNCTIONS.html) and [`nmin`](ABENNMAX_NMIN_FUNCTIONS.html) can be used to determine numeric extreme values.
-   Character-like extremum functions, like numeric extremum functions, can be traced back to the equivalent control structures using comparison operators. Remember that, unlike with the usual [ABAP comparison rules](ABENLOGEXP_RULES_OPERANDS.html), shorter arguments of fixed lengths are not padded to the length of longer arguments by padding them with blanks.
-   As in comparisons with comparison operators, the current [locale](ABENLOCALE_GLOSRY.html) is not significant when determining the extreme values.

TYPES itab TYPE TABLE OF c WITH EMPTY KEY. \\n\\ \\nFINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ). \\nFINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'. \\nFINAL(rnd) = cl\_abap\_random\_int=>create( \\n seed = CONV i( t ) min = 0 max = strlen( abcde ) - 1 ). \\n\\ \\nDATA(itab) = VALUE itab( FOR i = 1 UNTIL i > 9 \\n LET off = rnd->get\_next( ) IN \\n ( abcde+off(1) ) ). \\n\\ \\nFINAL(min) = cmin( val1 = itab\[ 1 \] \\n val2 = itab\[ 2 \] \\n val3 = itab\[ 3 \] \\n val4 = itab\[ 4 \] \\n val5 = itab\[ 5 \] \\n val6 = itab\[ 6 \] \\n val7 = itab\[ 7 \] \\n val8 = itab\[ 8 \] \\n val9 = itab\[ 9 \] ). \\n\\ \\nFINAL(max) = cmax( val1 = itab\[ 1 \] \\n val2 = itab\[ 2 \] \\n val3 = itab\[ 3 \] \\n val4 = itab\[ 4 \] \\n val5 = itab\[ 5 \] \\n val6 = itab\[ 6 \] \\n val7 = itab\[ 7 \] \\n val8 = itab\[ 8 \] \\n val9 = itab\[ 9 \] ). \\n\\ \\nSORT itab BY table\_line. \\n\\ \\nASSERT min = itab\[ 1 \]. \\nASSERT max = itab\[ lines( itab ) \]. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html abenprocess\_functions.html