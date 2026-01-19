---
title: "ABENSURROGATES_GLOSRY"
description: |
  ABENSURROGATES_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSURROGATES_GLOSRY.htm"
abapFile: "ABENSURROGATES_GLOSRY.html"
keywords: ["do", "while", "ABENSURROGATES", "GLOSRY"]
---

Also referred to as surrogate pair. Combination of special low and high surrogate characters for addressing characters in the [surrogate area](ABENSURROGATE_AREA_GLOSRY.html) when using [UTF-16](ABENUTF16_GLOSRY.html). High surrogate characters range from `U+D800` to `U+DBFF`. Low surrogate characters range from `U+DC00` to `U+DFFF`. They are called surrogates because they do not directly represent one character but only as a pair. High and low surrogates can only be part of a surrogate pair and cannot appear on their own in a valid UTF-16 string. While UTF-16 with surrogates is the [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) the ABAP programming language supports [UCS-2](ABENUCS2_GLOSRY.html) and interprets a surrogate character as two characters.

ABENABAP\_GLOSSARY.html