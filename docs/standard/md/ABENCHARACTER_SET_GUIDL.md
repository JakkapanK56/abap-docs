---
title: "The source code is processed in the current"
description: |
  text environment(ABENTEXT_ENVIRONMENT_GLOSRY.html) of the developer, using the associated code page. Use only 7-bit ASCII characters in source code Use only characters from the 7-bit ASCII character set in ABAP source code. This avoids problems in systems with different code pages. The 7 bit A
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCHARACTER_SET_GUIDL.htm"
abapFile: "ABENCHARACTER_SET_GUIDL.html"
keywords: ["do", "if", "case", "try", "data", "internal-table", "ABENCHARACTER", "SET", "GUIDL"]
---

[ABAP source code](ABENABAP_SOURCE_CODE_GLOSRY.html) is edited in the ABAP Editor tool in ABAP Workbench, itself an ABAP program. ABAP Editor saves and processes the ABAP source code internally in a data object (an internal table).

The source code is processed in the current

[text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html) of the developer, using the associated code page.

**Use only 7-bit ASCII characters in source code**

Use only characters from the 7-bit ASCII character set in ABAP source code. This avoids problems in systems with different code pages.

The 7 bit ASCII character set contains only characters that also exist in all other code pages. Restricting the characters used in source code to this character set guarantees that this code can be edited and executed regardless of the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) or [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html). Source code that contains characters from other character sets could, in the worst case, have incorrect syntax in a system with a different code page.

ABAP words in ABAP statements use only 7-bit ASCII characters anyway, which means that this rules to names, literals, and comments.

Since the programs with the ABAP language version [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html) are now the only possible programs, so names comply with the rule above automatically. Comments are supposed to be [written in English](ABENCOMMENT_LANGU_GUIDL.html) anyway, which removes the need for any country-specific special characters.

In a current system, all [ABAP source code](ABENABAP_SOURCE_CODE_GLOSRY.html) is stored in Unicode and this is why this problem does not occur there. If a guarantee could be given that a program was written only for Unicode systems, the rule above would not be needed for literals and comments (at the very least). It is not possible to ensure that a program is not used in any non-Unicode systems, which is why general robustness rules should always be followed. This ensures that programs can be transported from Unicode systems to non-Unicode systems without conversion losses.

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abeninternationalization\_gdl.html