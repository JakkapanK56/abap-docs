---
title: "ABENBUILT_IN_FUNCTIONS_SYNTAX"
description: |
  ABENBUILT_IN_FUNCTIONS_SYNTAX - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBUILT_IN_FUNCTIONS_SYNTAX.htm"
abapFile: "ABENBUILT_IN_FUNCTIONS_SYNTAX.html"
keywords: ["if", "method", "data", "ABENBUILT", "FUNCTIONS", "SYNTAX"]
---

The following sections show the general syntax for calling built-in functions in operand positions.

In functions with named [formal parameters](ABENFORMAL_PARAMETER_GLOSRY.html), there is usually a main input parameter `val` and the option of passing [arguments](ABENARGUMENT_GLOSRY.html) to further input parameters, some of which are optional.

`... func( arg ) ...`

For calling functions with an unnamed parameter, the syntax is the same as the syntax for [calling functional methods](ABAPCALL_METHOD_FUNCTIONAL.html) with one input parameter. `func` is the built-in function and the argument `arg` passed to the function is an operand whose data type matches the function. The blanks after the opening parentheses and before the closing parentheses are relevant.

The built-in function [`line_exists`](ABENLINE_EXISTS_FUNCTION.html) has an unnamed parameter that expects a table expression.

`... func( val = arg p1 = arg1 p2 = arg2 ... ) ...`

In functions with one or more named input parameters those are [keyword parameters](ABENKEYWORD_PARAMETER_GLOSRY.html). Arguments are passed with same syntax as when [calling functional methods](ABAPCALL_METHOD_FUNCTIONAL.html) with multiple input parameters. The data type of the arguments must match the corresponding parameters. The blanks after the opening parentheses and before the closing parentheses are relevant. If such a function has only one parameter, or if only the main parameter is to be supplied, the syntax can be simplified as follows:

`... func( arg ) ...`

The built-in function [`condense`](ABENCONDENSE_FUNCTIONS.html) has named parameters and can, for example, be called as follows.

DATA itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\n... \\n\\ \\nIF line\_exists( itab\[ 1 \] ). \\n ... \\nENDIF. FINAL(str1) = condense( \`...\` ). \\nFINAL(str2) = condense( val = \`...\` ). \\nFINAL(str3) = condense( val = \`...\` del = \` \` ). abenabap.html abenabap\_reference.html abenbuilt\_in.html abenbuilt\_in\_functions.html