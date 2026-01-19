---
title: "ABENSTRING_UTIL"
description: |
  ABENSTRING_UTIL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_UTIL.htm"
abapFile: "ABENSTRING_UTIL.html"
keywords: ["delete", "while", "if", "method", "class", "data", "ABENSTRING", "UTIL"]
---

The class `CL_ABAP_STRING_UTILITIES` contains methods for processing [text strings](ABENTEXT_STRING_GLOSRY.html).

Tasks like this can now also be performed using statements and built-in functions.

The program compares the method `C2STR_PRESERVING_BLANKS` with the built-in function [`shift_right`](ABENSHIFT_FUNCTIONS.html). The implementation of the method now consists of nothing more than this function.

-   `C2STR_PRESERVING_BLANKS` assigns text fields while preserving the trailing blanks.
-   `DEL_TRAILING_BLANKS` deletes the trailing blanks from strings.

FINAL(str) = \`abc \`. \\n\\ \\nDATA(rslt) = str. \\ncl\_abap\_string\_utilities=>del\_trailing\_blanks( CHANGING str = rslt ). \\n\\ \\nASSERT rslt = shift\_right( str ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abencl\_abap\_string\_utilities.html