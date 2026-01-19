---
title: "ABENSPLIT_TEXT_GUIDL"
description: |
  ABENSPLIT_TEXT_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSPLIT_TEXT_GUIDL.htm"
abapFile: "ABENSPLIT_TEXT_GUIDL.html"
keywords: ["do", "if", "method", "class", "ABENSPLIT", "TEXT", "GUIDL"]
---

Usually the characters in a character string are encoded based on a code page using a fixed number of bytes. This means that it is always known in the memory where a character begins and ends. However, in some code pages, a character can be formed from a combination of multiple separately saved characters. This applies in particular to the characters of the surrogate area of the Unicode character set, that are collectively represented in the Unicode character representation [UTF-16](ABENUTF16_GLOSRY.html) by two consecutive 16-bit replacement codes ([surrogate](ABENSURROGATES_GLOSRY.html)). The surrogate area, for example, includes several Chinese characters that are predominantly used in Hong Kong. The ABAP programming area does not support this area. ABAP supports the subset of UTF-16 covered by [UCS-2](ABENUCS2_GLOSRY.html), in which each character occupies two bytes. One character in the surrogate area occupies four bytes and is handled as two characters by ABAP.

**Only split texts between characters**

Make sure that statements do not split character strings in any places with composite characters or surrogates.

Operations that split character strings include:

If texts containing combined characters or surrogates are split, this can produce undefined characters that cannot be displayed. If there is a risk of this occurring, you can define a suitable separation position by using the method `STRING_SPLIT_AT_POSITION` of class`CL_SCP_LINEBREAK_UTIL`.

-   Substring accesses with offsets/lengths or `substring` functions
-   The `SPLIT` statement
-   Every assignment to a character-like field that is too short, where one side of the original value is cut off

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abeninternationalization\_gdl.html