---
title: "ABENBUILTIN_TYPES_BYTE"
description: |
  ABENBUILTIN_TYPES_BYTE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBUILTIN_TYPES_BYTE.htm"
abapFile: "ABENBUILTIN_TYPES_BYTE.html"
keywords: ["if", "try", "method", "class", "data", "types", "ABENBUILTIN", "TYPES", "BYTE"]
---

The data objects of the byte-like data types are used to store byte strings.

Declaration of a byte string of the built-in ABAP type `xstring` for the result of a functional method. This declaration could also be made [inline](ABENINLINE_DECLARATIONS.html) on the left side of the assignment.

-   The byte-like data types are used for [byte string processing](ABENABAP_DATA_STRING.html).
-   For more about strings, see [Strings](ABENSTRING.html).
-   The type `x`, for which a length interval is specified in the second column of the first table, is [generic](ABENBUILT_IN_TYPES_GENERIC.html), which means that the length is not part of the type description. The entry in the column `Standard Length` specifies the length used in declarations of data objects when using types with generic lengths, if no explicit length is specified in the corresponding statement.
-   The system class `CL_ABAP_ELEMDESCR` contains a constant `TYPE_X_MAX_LENGTH` for the maximum length of the type `x`.
-   The [maximum size](ABENMEMORY_CONSUMPTION_2.html) of strings must be respected. If an operation with a string exceeds its maximum size, an exception of class `CX_SY_STRING_SIZE_TOO_LARGE` is raised and can be handled.

DATA hex TYPE xstring. \\nhex = cl\_abap\_conv\_codepage=>create\_out( )->convert( \`...\` ). **Type** **Length** **Standard Length** **Meaning** \\ **Data Object** **Type** **Value Range** **Initial Value** `x` 1 to 524,287 bytes 1 byte \\ [Byte field type](ABENBYTE_FIELD_TYPE_GLOSRY.html) \\ [Byte field](ABENBYTE_FIELD_GLOSRY.html) `xstring` Variable \\ \\ [Byte string type](ABENBYTE_STRING_TYPE_GLOSRY.html)\\ [Byte string](ABENBYTE_STRING_GLOSRY.html) `x` Any byte values, hexadecimal 00 to `FF` Hexadecimal 00 `xstring` As for type `x` Empty string with length 0 abenabap.html abenabap\_reference.html abenbuilt\_in.html abenbuilt\_in\_types.html abenbuilt\_in\_types\_complete.html