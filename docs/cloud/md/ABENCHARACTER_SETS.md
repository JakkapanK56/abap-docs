---
title: "ABENCHARACTER_SETS"
description: |
  ABENCHARACTER_SETS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCHARACTER_SETS.htm"
abapFile: "ABENCHARACTER_SETS.html"
keywords: ["do", "if", "try", "catch", "class", "data", "ABENCHARACTER", "SETS"]
---

Application Server ABAP supports only [Unicode systems](ABENUNICODE_SYSTEM_GLOSRY.html) in the current release.

[Unicode](ABENUNICODE_GLOSRY.html) (ISO/IEC 10646) with the character set [UCS](ABENUCS_GLOSRY.html) covers all existing characters. For the Unicode character set, there are different Unicode character representations, such as [UTF](ABENUTF_GLOSRY.html), in which a character can occupy between one and four bytes, or [UCS-2](ABENUCS2_GLOSRY.html), where one character occupies two bytes.

The restriction to UCS-2 in ABAP means that a character is always assumed to have the length of two bytes. Every valid UTF-16 encoded character string is also a valid UCS-2 encoded string (potentially representing different characters), but not every valid UCS-2 encoded string is a valid UTF-16 encoded string, because high and low surrogates can occur that are not part of a surrogate pair. This generally only causes problems if character strings are truncated in the middle of a character representation from the UTF-16 surrogate area, or if individual characters of character sets are compared in character string processing. Also transformations of strings to external formats that are expecting valid Unicode characters, as for example XML, can lead to exceptions.

To be used in a [Unicode system](ABENUNICODE_SYSTEM_GLOSRY.html), an ABAP program must have the ABAP language version [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html). Programs with the obsolete language version Non-Unicode ABAP can no longer be used in a Unicode system.

The UTF-8 representation of the Unicode character `EXTRATERRESTRIAL ALIEN` is converted to its UTF-16 representation and stored in the text field `surrogate_pair`. Although the Unicode character `EXTRATERRESTRIAL ALIEN` is not contained in the Basic Multilingual Plane (BMP) of the Unicode standard its UTF-16 representation (a [surrogate pair](ABENSURROGATE_PAIR_GLOSRY.html)) can still be stored as an ABAP character string. But almost every string operation in ABAP handles the string simply as two UCS-2 characters with string length 2. This can cause problems when the data is to be interpreted as UTF-16 outside ABAP. The results of the two offset/length accesses produce text fields of length 1 with hexadecimal content `3DD8` and `7DDC`. Since high and low surrogates can only be part of a surrogate pair and cannot appear on their own in a valid UTF-16 string, the text fields contain invalid UTF-16 strings. In a regular expression in [PCRE syntax](ABENREGEX_PCRE_SYNTAX.html) that is introduced with `(*UTF)`, valid UTF-16 strings are expected and an exception occurs.

-   A Unicode system is an [AS ABAP](ABENAS_ABAP_GLOSRY.html) that is based on Unicode character representation with a [code page](ABENCODEPAGE_GLOSRY.html) for [Unicode](ABENUNICODE_GLOSRY.html) and also on a corresponding operating system and database.
-   A non-Unicode system is an [AS ABAP](ABENAS_ABAP_GLOSRY.html) with [code pages](ABENCODEPAGE_GLOSRY.html) for single-byte code and double-byte code. Non-Unicode systems are no longer supported in the current release.

-   [UTF-16](ABENUTF16_GLOSRY.html) is the [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html) of a Unicode system. It covers all characters of the Unicode standard.
-   The ABAP programming language supports the character representation [UCS-2](ABENUCS2_GLOSRY.html), which represents a subset of the characters represented by UTF-16. I covers the Basic Multilingual Plane (BMP) of the Unicode standard but not the characters of the [surrogate area](ABENSURROGATE_AREA_GLOSRY.html).

-   The attribute `CHARSIZE` of system class [`CL_ABAP_CHAR_UTILITIES`](ABENCL_ABAP_CHAR_UTILITIES.html) contains the number of bytes occupied by a character in the current system.
-   For regular expressions in [PCRE syntax](ABENREGEX_PCRE_SYNTAX.html), it can be defined whether valid UTF-16 character strings are expected or not.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA surrogate\_pair TYPE c LENGTH 2. \\nFIELD-SYMBOLS TYPE x. \\nFIELD-SYMBOLS TYPE x. \\n\\ \\nsurrogate\_pair = cl\_abap\_codepage=>convert\_from( \\n codepage = 'UTF-8' \\n source = CONV xstring( 'F09F91BD' ) ). \\n "U+1F47D, EXTRATERRESTRIAL ALIEN \\n\\ \\nout->write\_text( surrogate\_pair ). \\n\\ \\nFINAL(substring1) = surrogate\_pair+0(1). \\nFINAL(substring2) = surrogate\_pair+1(1). \\n\\ \\nASSIGN substring1 TO CASTING. \\nASSIGN substring2 TO CASTING. \\nout->write\_text( |\\{ \\} \\{ \\}| ). \\n\\ \\nTRY. \\n IF matches( val = substring1 pcre = \`.\` ). \\n out->write\_text( \`PCRE without (\*UTF) matches\` ). \\n ENDIF. \\n IF matches( val = substring1 pcre = \`(\*UTF).\` ). \\n out->write\_text( \`PCRE with (\*UTF) matches\` ). \\n ENDIF. \\n CATCH cx\_sy\_matcher INTO FINAL(exc). \\n out->write\_text( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_oview.html