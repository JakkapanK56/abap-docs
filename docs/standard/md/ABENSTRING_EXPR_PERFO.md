---
title: "ABENSTRING_EXPR_PERFO"
description: |
  ABENSTRING_EXPR_PERFO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_EXPR_PERFO.htm"
abapFile: "ABENSTRING_EXPR_PERFO.html"
keywords: ["loop", "do", "if", "case", "data", "ABENSTRING", "EXPR", "PERFO"]
---

If on the right side of an [assignment](ABENEQUALS_STRING_EXPR.html) strings in a [string expression](ABAPCOMPUTE_STRING.html) are appended to a variable `str` with the type `string` specified on the left side of the assignment, the variable is used directly in the following cases without producing an interim result.

The appended strings cannot be dependent on `str` for the compiler:

Optimization is therefore deactivated in the following cases:

Deactivating optimization for assignments that are not used very often is usually uncritical, it is strongly recommend to only use optimizable forms within loops, because otherwise the runtime would increase quadratically with the number of iterations. Within loops, the results of expressions that can only be determined there should be assigned to helper variables `dobj1`, `dobj2`, and so on, and these should be used.

If optimization is deactivated, the runtime is quadratically dependent on the number of iterations, since the length of the string in the interim result increases in proportion with the number of iterations and has to be copied to the result in every loop pass.

In the following example for generating an HTML file, there is no optimization. The runtime depends quadratically on the number of iterations `n`.

The following example shows how the runtime can be optimized by using a helper variable. The bigger `n` is, the greater the runtime difference to the previous example.

[Concatenating Strings](ABENSTRING_CONCATENATION_ABEXA.html)

-   `str &&= dobj1 && dobj2 && ... .`
-   `str = |\{ str \}...\{ dobj1 [format_options] \}...\{ dobj2 [format_options] \}...|.`

-   The target field `str` can occur only once in the string expression, and only at the very beginning.
-   No formatting options can be used on `str` in a [string template](ABENSTRING_TEMPLATES.html).
-   Only directly specified data objects `dobj1`, `dobj2`, ... and no other [expressions](ABENEXPRESSION_GLOSRY.html) or [functions](ABENFUNCTION_GLOSRY.html) can be listed, even if they are not dependent on `str`.

-   `str &&= ... && meth( ... ) && ... .`
-   `str &&= ... && str && ... .`
-   `str = |\{ str \}...\{ expr( ... ) \}...|.`
-   `str = |\{ str format_options \}...|.`
-   `str = |\{ str \}...\{ str \}...|.`

FINAL(n) = 10000. \\n\\ \\nDATA(html) = \`\`. \\nDO n TIMES. \\n html = |\\{ html \\}|. \\nENDDO. \\nhtml = html && \`

\\{ \\n CONV string( ipow( base = sy-index exp = 2 ) ) \\n \\}

\`. FINAL(n) = 10000. \\n\\ \\nDATA(html) = \`\`. \\nDATA square type string. \\nDO n TIMES. \\n square = ipow( base = sy-index exp = 2 ). \\n html = |\\{ html \\}|. \\nENDDO. \\nhtml = html && \`

\\{ square \\}

\`. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html