---
title: "ABENCHARACTER_SETS"
description: |
  ABENCHARACTER_SETS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCHARACTER_SETS.htm"
abapFile: "ABENCHARACTER_SETS.html"
keywords: ["do", "if", "try", "catch", "class", "data", "ABENCHARACTER", "SETS"]
---

Application Server ABAP supports only [Unicode systems](ABENUNICODE_SYSTEM_GLOSRY.html) in the current release.

[Unicode](ABENUNICODE_GLOSRY.html) (ISO/IEC 10646) with the character set [UCS](ABENUCS_GLOSRY.html) covers all existing characters. For the Unicode character set, there are different Unicode character representations, such as [UTF](ABENUTF_GLOSRY.html), in which a character can occupy between one and four bytes, or [UCS-2](ABENUCS2_GLOSRY.html), where one character occupies two bytes.

The restriction to UCS-2 in ABAP means that a character is always assumed to have the length of two bytes. Every valid UTF-16 encoded character string is also a valid UCS-2 encoded string (potentially representing different characters), but not every valid UCS-2 encoded string is a valid UTF-16 encoded string, because high and low surrogates can occur that are not part of a surrogate pair. This generally only causes problems if character strings are truncated in the middle of a character representation from the UTF-16 surrogate area, or if individual characters of character sets are compared in character string processing. Also transformations of strings to external formats that are expecting valid Unicode characters, as for example XML, can lead to exceptions.

To be used in a [Unicode system](ABENUNICODE_SYSTEM_GLOSRY.html), an ABAP program must have the ABAP language version [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html). Programs with the obsolete language version [Non-Unicode ABAP](ABENNON_UNICODE_ABAP_GLOSRY.html) can no longer be used in a Unicode system.

The UTF-8 representation of the Unicode character `EXTRATERRESTRIAL ALIEN` is converted to its UTF-16 representation and stored in the text field `surrogate_pair`. Although the Unicode character `EXTRATERRESTRIAL ALIEN` is not contained in the Basic Multilingual Plane (BMP) of the Unicode standard its UTF-16 representation (a [surrogate pair](ABENSURROGATE_PAIR_GLOSRY.html)) can still be stored as an ABAP character string. But almost every string operation in ABAP handles the string simply as two UCS-2 characters with string length 2. This can cause problems when the data is to be interpreted as UTF-16 outside ABAP. The results of the two offset/length accesses produce text fields of length 1 with hexadecimal content `3DD8` and `7DDC`. Since high and low surrogates can only be part of a surrogate pair and cannot appear on their own in a valid UTF-16 string, the text fields contain invalid UTF-16 strings. In a regular expression in [PCRE syntax](ABENREGEX_PCRE_SYNTAX.html) that is introduced with `(*UTF)`, valid UTF-16 strings are expected and an exception occurs.

-   A Unicode system is an [AS ABAP](ABENAS_ABAP_GLOSRY.html) that is based on Unicode character representation with a [code page](ABENCODEPAGE_GLOSRY.html) for [Unicode](ABENUNICODE_GLOSRY.html) and also on a corresponding operating system and database.
-   A non-Unicode system is an [AS ABAP](ABENAS_ABAP_GLOSRY.html) with [code pages](ABENCODEPAGE_GLOSRY.html) for [single-byte code](ABENSINGLE_BYTE_CODE_GLOSRY.html) and [double-byte code](ABENDOUBLE_BYTE_CODE_GLOSRY.html). Non-Unicode systems are no longer supported in the current release.

-   [UTF-16](ABENUTF16_GLOSRY.html) is the [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html) of a Unicode system. It covers all characters of the Unicode standard.
-   The ABAP programming language supports the character representation [UCS-2](ABENUCS2_GLOSRY.html), which represents a subset of the characters represented by UTF-16. I covers the Basic Multilingual Plane (BMP) of the Unicode standard but not the characters of the [surrogate area](ABENSURROGATE_AREA_GLOSRY.html).

-   The attribute `CHARSIZE` of system class [`CL_ABAP_CHAR_UTILITIES`](ABENCL_ABAP_CHAR_UTILITIES.html) contains the number of bytes occupied by a character in the current system.
-   For regular expressions in [PCRE syntax](ABENREGEX_PCRE_SYNTAX.html), it can be defined whether valid UTF-16 character strings are expected or not.
-   The Unicode version used for an AS ABAP can be seen in transaction `SM51`\\ *\->*\\ *Release Notes*.
-   Before Unicode, SAP used different codes for representing characters in different fonts, such as ASCII, EBCDIC as single-byte [code pages](ABENCODEPAGE_GLOSRY.html), or double-byte code pages:

-   ASCII (American Standard Code for Information Interchange) encodes each character with one byte. This means that a maximum of 256 characters can be represented (strictly speaking, standard ASCII only encodes one character using 7 bit and can therefore only represent 128 characters. The extension to 8 bit was introduced in [ISO-8859](ABENISO-8859_GLOSRY.html)). Examples of common code pages are ISO-8859-1 for Western European, or ISO-8859-5 for Cyrillic fonts.
-   EBCDIC (Extended Binary Coded Decimal Interchange) also encodes each character using one byte and can therefore also represent 256 characters. For example, EBCDIC 0697/0500 is an IBM format that was used on the AS/400 platform (now known as IBM System i) for Western European fonts.
-   Double-byte code pages require 1 to 2 bytes per character. As a result, 65536 characters can be represented, of which only 10000 to 15000 characters are normally used. For example, the code page SJIS is used for Japanese and BIG5 for traditional Chinese fonts.

-   Using these character sets, all languages could be covered individually in one [AS ABAP](ABENAS_ABAP_GLOSRY.html). Problems generally occurred when texts from different incompatible character sets were mixed in a central system. The exchange of data between systems with incompatible character sets could also lead to problems.
-   In earlier non-Unicode systems, the system code pages were defined in the database table `TCPDB`. In non-Unicode single code page systems there was only one system code page. In the obsolete [MDMP systems](ABENMDMP-SYSTEM_GLOSRY.html), there were multiple system code pages.
-   Before Unicode support, many ABAP programming techniques expected one character to correspond to one byte. Therefore, before a non-Unicode system is converted to Unicode, ABAP programs must be changed wherever an explicit or implicit assumption is made about the internal length of a character. This mainly affects the following:

-   [Character string processing and byte string processing](ABENABAP_DATA_STRING.html)
-   Access to [structures](ABENDATA_OBJECTS_STRUCTURE.html). The latter is affected because [flat structures](ABENFLAT_STRUCTURE_GLOSRY.html) in a program of the obsolete ABAP language version [Non-Unicode ABAP](ABENNON_UNICODE_ABAP_GLOSRY.html) have been handled like character-like data objects and some programming techniques have used this as well. The [structural fragment view](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html) can be used to handle structures.

-   Before a program is switched to Unicode, the [ABAP language version](ABENABAP_VERSIONS.html)\\ [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html) or higher must be configured in the program properties. For these versions, the [Unicode checks](ABENUNICODE_CHECK_GLOSRY.html) are also executed in non-Unicode systems. The transaction `UCCHECK` supports the activation of these checks for existing programs. The program `RSUNISCAN_FINAL` can also be used instead of transaction `UCCHECK`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA surrogate\_pair TYPE c LENGTH 2. \\nFIELD-SYMBOLS TYPE x. \\nFIELD-SYMBOLS TYPE x. \\n\\ \\nsurrogate\_pair = cl\_abap\_codepage=>convert\_from( \\n codepage = 'UTF-8' \\n source = CONV xstring( 'F09F91BD' ) ). \\n "U+1F47D, EXTRATERRESTRIAL ALIEN \\n\\ \\nout->write\_text( surrogate\_pair ). \\n\\ \\nFINAL(substring1) = surrogate\_pair+0(1). \\nFINAL(substring2) = surrogate\_pair+1(1). \\n\\ \\nASSIGN substring1 TO CASTING. \\nASSIGN substring2 TO CASTING. \\nout->write\_text( |\\{ \\} \\{ \\}| ). \\n\\ \\nTRY. \\n IF matches( val = substring1 pcre = \`.\` ). \\n out->write\_text( \`PCRE without (\*UTF) matches\` ). \\n ENDIF. \\n IF matches( val = substring1 pcre = \`(\*UTF).\` ). \\n out->write\_text( \`PCRE with (\*UTF) matches\` ). \\n ENDIF. \\n CATCH cx\_sy\_matcher INTO FINAL(exc). \\n out->write\_text( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_oview.html