---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSPLIT_TEXT_GUIDL.html"
abapFile: "ABENSPLIT_TEXT_GUIDL.html"
type: "abap-reference"
---

## Background

Usually the characters in a character string are encoded based on a code page using a fixed number of bytes. This means that it is always known in the memory where a character begins and ends. However, in some code pages, a character can be formed from a combination of multiple separately saved characters. This applies in particular to the characters of the surrogate area of the Unicode character set, that are collectively represented in the Unicode character representation [UTF-16](ABENUTF16_GLOSRY.md) by two consecutive 16-bit replacement codes ([surrogate](ABENSURROGATES_GLOSRY.md)). The surrogate area, for example, includes several Chinese characters that are predominantly used in Hong Kong. The ABAP programming area does not support this area. ABAP supports the subset of UTF-16 covered by [UCS-2](ABENUCS2_GLOSRY.md), in which each character occupies two bytes. One character in the surrogate area occupies four bytes and is handled as two characters by ABAP.

## Rule

**Only split texts between characters**

Make sure that statements do not split character strings in any places with composite characters or surrogates.

## Details

Operations that split character strings include:

-   Substring accesses with offsets/lengths or `substring` functions
-   The `SPLIT` statement
-   Every assignment to a character-like field that is too short, where one side of the original value is cut off

If texts containing combined characters or surrogates are split, this can produce undefined characters that cannot be displayed. If there is a risk of this occurring, you can define a suitable separation position by using the method `STRING_SPLIT_AT_POSITION` of class`CL_SCP_LINEBREAK_UTIL`.
