---
title: "ABENSTRING_PROCESSING_TRAIL_BLANKS"
description: |
  ABENSTRING_PROCESSING_TRAIL_BLANKS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_PROCESSING_TRAIL_BLANKS.htm"
abapFile: "ABENSTRING_PROCESSING_TRAIL_BLANKS.html"
keywords: ["if", "data", "types", "ABENSTRING", "PROCESSING", "TRAIL", "BLANKS"]
---

There is a major difference between data types of fixed length and text strings regarding the treatment of blanks:

If the result of a statement for character string processing is assigned to an operand, it is generally padded on the right with blanks if the result is shorter than the length of the operand. Assignments to a string generally adapt the string length to the length of the result. Exceptions to this rule are explained in the affected statements.

The result of the following [concatenation](ABAPCONCATENATE.html) is a string with exactly one blank. The blank characters in `space` and `' '` are ignored. At the operand position after `SEPARATED BY` however, the blank character that is contained explicitly in `''` is not ignored. If the addition `RESPECTING BLANKS` was used, the result would be a string with three blanks.

-   All blanks are generally preserved in operations with operands of the data type `string`.
-   In assignments and statements for character string processing, leading blanks for operands of data types with fixed lengths (`c`, `n`, `d`, and `t` or character-like structures) are generally preserved and trailing blanks are truncated. Exceptions to this rule are explained in the affected statements.

-   Truncating trailing blanks especially affects the [text field literal](ABENTEXT_FIELD_LITERAL_GLOSRY.html)\\ `' '` and the constant [`space`](ABENSPACE.html). These should therefore never be listed in operand positions where trailing blanks are truncated.
-   In result fields that are too long, padding with blanks can produce invalid values, if the fields have the type `n`, `d`, or `t`.
-   The preservation of trailing blanks can be forced for assignments using the addition `RESPECTING BLANKS` of the statement [`CONCATENATE`](ABAPCONCATENATE.html).

DATA text TYPE string. \\n\\ \\nCONCATENATE space ' ' INTO text SEPARATED BY ''. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_oview.html