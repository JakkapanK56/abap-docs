---
title: "ABENSTRING_PROCESSING_OPERANDS"
description: |
  ABENSTRING_PROCESSING_OPERANDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_PROCESSING_OPERANDS.htm"
abapFile: "ABENSTRING_PROCESSING_OPERANDS.html"
keywords: ["do", "if", "data", "types", "ABENSTRING", "PROCESSING", "OPERANDS"]
---

In character string processing, which is defined by the addition `IN CHARACTER MODE` in overloaded statements, and in statements that only support character string processing, the relevant operands must be character-like because the operands are processed by character and the storage of the characters in the memory depends on the [code page](ABENCODEPAGE_GLOSRY.html) used. This condition is vital to ensure that character string processing functions correctly.

In Standard ABAP, only data objects, return values, or results with the character-like data types `c`, `n`, and `string`, and the date/time types `d` and `t`, or structures with exclusively flat character-like components are allowed as character-like operands. Data objects with the types `n`, `d`, and `t` and structures with exclusively character-like components are handled like data objects with the type `c`.

In byte string processing, which is triggered by the addition `IN BYTE MODE` in overloaded statements, and in the statements `GET BIT` and `SET BIT`, the relevant operands must be byte-like. This is because the operands are processed by byte.

-   If the character-like data objects `n`, `d`, and `t` are used in character string processing, it must be noted that the type-compliant conversion rules do not apply to the assignment of interim results to target fields and instead the conversion rules for data type `c` apply.
-   No structures can be used as character-like operands in [string expressions](ABAPCOMPUTE_STRING.html) and [string functions](ABENSTRING_FUNCTIONS.html) with named parameters.

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_oview.html