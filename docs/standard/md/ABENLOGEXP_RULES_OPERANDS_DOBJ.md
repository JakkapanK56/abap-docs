---
title: "ABENLOGEXP_RULES_OPERANDS_DOBJ"
description: |
  ABENLOGEXP_RULES_OPERANDS_DOBJ - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_RULES_OPERANDS_DOBJ.htm"
abapFile: "ABENLOGEXP_RULES_OPERANDS_DOBJ.html"
keywords: ["if", "try", "catch", "data", "types", "ABENLOGEXP", "RULES", "OPERANDS", "DOBJ"]
---

The following sections describe which [comparison types](ABENCOMPARISON_TYPE_GLOSRY.html) results from the combinations of different elementary data objects. They also list the rules that determine the length in which the comparison is performed for comparison types with generic lengths.

When converting between directly specified elementary data objects with different data types, all exceptions listed [here](ABENCONVERSION_ELEMENTARY.html) can be raised. In comparisons, these are either handled implicitly or produce a runtime error. They cannot, however, be handled using [`CATCH`](ABAPCATCH_TRY.html). In comparisons of expressions, it is possible to handle the exceptions partially.

-   [Comparison type of numeric data objects](ABENLOGEXP_NUMERIC.html)
-   [Comparison type of character-like data objects](ABENLOGEXP_CHARACTER.html)
-   [Comparison type of byte-like data objects](ABENLOGEXP_BYTE.html)
-   [Comparison Type of Date Fields, Time Fields, and Time Stamp Fields](ABENLOGEXP_DATE_TIME.html)

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html abenlogexp\_rules\_operands.html