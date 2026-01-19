---
title: "ABENBUILTIN_TYPES_CHARACTER"
description: |
  ABENBUILTIN_TYPES_CHARACTER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBUILTIN_TYPES_CHARACTER.htm"
abapFile: "ABENBUILTIN_TYPES_CHARACTER.html"
keywords: ["if", "class", "data", "types", "ABENBUILTIN", "TYPES", "CHARACTER"]
---

The data objects of the character-like data types are used to store character strings.

Declaration of character-like data objects with built-in character-like data types. The flag `flag` is limited to one character and the set of characters in the string `html` is variable.

-   The character-like data types are mainly used for [string processing](ABENABAP_DATA_STRING.html).
-   For more about strings, see [Strings](ABENSTRING.html).
-   The data types `c` and `string` are general character-like data types, whereas `n` has special properties. The data type `n` matches the special type [`NUMC`](ABENDDIC_SPECIAL_CHARACTER_TYPES.html) in ABAP Dictionary.
-   Further character-like data types with special properties are the built-in [date types and time types](ABENBUILTIN_TYPES_DATE_TIME.html) that match the corresponding types [`DATS`](ABENDDIC_DATE_TIME_TYPES.html) and [`TIMS`](ABENDDIC_DATE_TIME_TYPES.html) of the ABAP Dictionary. All other special character-like data types in ABAP Dictionary are assigned to the general ABAP types listed here.
-   The content of the data objects of character-like data types is stored in the memory according to the current [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html).
-   When specifying lengths for character-like types, note that the length of a character in bytes depends on the character representation used. For the character representation [UCS-2](ABENUCS2_GLOSRY.html) used by the ABAP programming language, the length of a character is two bytes.
-   The types `c` and `n`, for which a length interval is specified in the second column of the first table, are [generic](ABENBUILT_IN_TYPES_GENERIC.html), which means that the length is not part of the type description. The entries in the column `Standard Length` specify the length that is used in declarations of data objects when using types with generic lengths, if no explicit length is specified in the corresponding statement.
-   The system class `CL_ABAP_ELEMDESCR` contains the constants `TYPE_C_MAX_LENGTH` and `TYPE_N_MAX_LENGTH` for the maximum length of the types `c` and `n`.
-   The valid values of the data type `n` are a subset of its value range. ABAP statements that work with data objects of this type are only guaranteed to function correctly for operands with valid values.
-   The [maximum size](ABENMEMORY_CONSUMPTION_2.html) of strings must be respected. If an operation with a string exceeds its maximum size, an exception of class `CX_SY_STRING_SIZE_TOO_LARGE` is raised and can be handled.

DATA: flag TYPE c LENGTH 1, \\n html TYPE string. **Type** **Length** **Standard Length** **Meaning** \\ **Data Object** **Type** **Value Range** **Initial Value** `c` 1 to 262,143 characters 1 character \\ [Text field type](ABENTEXT_FIELD_TYPE_GLOSRY.html) \\ [Text field](ABENTEXT_FIELD_GLOSRY.html) `n` 1 to 262,143 characters 1 character \\ [Numeric text field type](ABENNUMERIC_TEXT_FIELD_TYPE_GLOSRY.html) \\ [Numeric text field](ABENNUMERIC_TEXT_FIELD_GLOSRY.html) `string` Variable \\ \\ [Text string type](ABENTEXT_STRING_TYPE_GLOSRY.html)\\ [Text string](ABENTEXT_STRING_GLOSRY.html) `c` Any Unicode characters that can be encoded in [UCS-2](ABENUCS2_GLOSRY.html). Blank for every position `n` Any Unicode characters that can be encoded in [UCS-2](ABENUCS2_GLOSRY.html); valid characters are only the digits *0* to *9* *0* for every position `string` As for type `c` Empty string with length 0 abenabap.html abenabap\_reference.html abenbuilt\_in.html abenbuilt\_in\_types.html abenbuilt\_in\_types\_complete.html