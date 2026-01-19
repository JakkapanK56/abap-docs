---
title: "ABENPROCESS_FUNCTIONS"
description: |
  ABENPROCESS_FUNCTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPROCESS_FUNCTIONS.htm"
abapFile: "ABENPROCESS_FUNCTIONS.html"
keywords: ["insert", "if", "case", "data", "ABENPROCESS", "FUNCTIONS"]
---

The following processing functions have a character-like result. They can be declared at [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html) and [character-like expression positions](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). The return values have the type `string`.

The function [`boolc`](ABENBOOLE_FUNCTIONS.html) also has a return value of the type `string` and in principle is also one of these functions. It is handled, however, in accordance with its role as a [logical function](ABENLOGIC_FUNCTION_GLOSRY.html).

-   [`cmax`, `cmin` - Character-Like Extreme Value Functions](ABENCMAX_CMIN_FUNCTIONS.html)
-   [`condense` - Condense Function](ABENCONDENSE_FUNCTIONS.html)
-   [`concat_lines_of` - Concatenation Function](ABENCONCATENATION_FUNCTIONS.html)
-   [`escape` - Escape Function](ABENESCAPE_FUNCTIONS.html)
-   [`insert`\- Insert Function](ABENINSERT_FUNCTIONS.html)
-   [`match` - Match Function](ABENMATCH_FUNCTIONS.html)
-   [`repeat` - Repeat Function](ABENREPEAT_FUNCTIONS.html)
-   [`replace` - Replace Function](ABENREPLACE_FUNCTIONS.html)
-   [`reverse` - Reverse Function](ABENREVERSE_FUNCTIONS.html)
-   [`segment` - Segment Function](ABENSEGMENT_FUNCTIONS.html)
-   [`shift_left`, `shift_right` - Shift Functions](ABENSHIFT_FUNCTIONS.html)
-   [`substring`, `substring_...` - Substring Functions](ABENSUBSTRING_FUNCTIONS.html)
-   [`to_upper`, `to_lower`, `to_mixed`, `from_mixed` - Case Functions](ABENCASE_FUNCTIONS.html)
-   [`translate` - Translate Function](ABENTRANSLATE_FUNCTIONS.html)

-   The processing functions for character-like arguments ignore the trailing blanks for input parameters with fixed lengths.
-   The processing functions for character-like arguments cannot be used directly as operands of [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html) but can be used as operands of [descriptive functions](ABENDESCRIPTIVE_FUNCTIONS.html).
-   The type `string` of the return values must be respected mainly when using functions in comparisons.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abenstring\_functions.html