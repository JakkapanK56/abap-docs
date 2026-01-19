---
title: "ABENSTRING_PROCESSING_STRINGS"
description: |
  ABENSTRING_PROCESSING_STRINGS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_PROCESSING_STRINGS.htm"
abapFile: "ABENSTRING_PROCESSING_STRINGS.html"
keywords: ["if", "class", "data", "ABENSTRING", "PROCESSING", "STRINGS"]
---

Character-like data objects contain character strings. A character-like data object either has a character-like data type `c`, `n`, or `string`, a date/time type `d` or `t`, or it is a [flat structure](ABENFLAT_STRUCTURE_GLOSRY.html) with exclusively character-like components.

ABAP supports the character format [UCS-2](ABENUCS2_GLOSRY.html) and a character always occupies two bytes. This ensures that all characters of the system code page [UTF-16](ABENUTF16_GLOSRY.html) are handled correctly, except those in the [surrogate area](ABENSURROGATE_AREA_GLOSRY.html). These occupy four bytes and hence are handled as two characters by ABAP, which can produce unexpected results if character strings are truncated or individual characters are compared in character sets.

Byte-like data objects contain byte chains (or byte sequences). A byte-like data object always has the byte-like data type `x` or `xstring`.

A byte string of type `xstring` contains a byte chain, which is decoded in accordance with codepage UTF-8 into a text in a text string of type `string`.

-   When working with [dynamic data objects](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html) of type `string` and `xstring`, their [maximum size](ABENMEMORY_CONSUMPTION_2.html) must not be exceeded. If an operation with a string exceeds its maximum size, an exception of class `CX_SY_STRING_SIZE_TOO_LARGE` occurs and can be handled.
-   When [accessing substrings](ABENOFFSET_LENGTH.html) of strings, it should always be checked if the specified substring lies within the current length of the string.

DATA hex TYPE xstring VALUE '48656C6C6F20576F726C64'. \\nDATA text TYPE string. \\n\\ \\ntext = cl\_abap\_conv\_codepage=>create\_in( )->convert( hex ). \\n\\ \\ncl\_demo\_output=>display( text ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_oview.html