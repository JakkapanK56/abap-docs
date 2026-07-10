---
title: "Character Set of ABAP Source Code - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharacter_set_guidl.htm"
abapFile: "abencharacter_set_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Internationalization](ABENINTERNATIONALIZATION_GUIDL.md) → 

Character Set of ABAP Source Code

Background

[ABAP source code](ABENABAP_SOURCE_CODE_GLOSRY.md "Glossary Entry") is edited in the ABAP Editor tool in ABAP Workbench, itself an ABAP program. ABAP Editor saves and processes the ABAP source code internally in a data object (an internal table).

The source code is processed in the current

[text environment](ABENTEXT_ENVIRONMENT_GLOSRY.md "Glossary Entry") of the developer, using the associated code page.

Rule

Use only 7-bit ASCII characters in source code

Use only characters from the 7-bit ASCII character set in ABAP source code. This avoids problems in systems with different code pages.

Details

The 7 bit ASCII character set contains only characters that also exist in all other code pages. Restricting the characters used in source code to this character set guarantees that this code can be edited and executed regardless of the [logon language](ABENLOGON_LANGUAGE_GLOSRY.md "Glossary Entry") or [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.md "Glossary Entry"). Source code that contains characters from other character sets could, in the worst case, have incorrect syntax in a system with a different code page.

ABAP words in ABAP statements use only 7-bit ASCII characters anyway, which means that this rules to names, literals, and comments.

Note

Since the programs with the ABAP language version [Standard ABAP (Unicode)](ABENUNICODE_PROGRAM_GLOSRY.md "Glossary Entry") are now the only possible programs, so names comply with the rule above automatically. Comments are supposed to be [written in English](ABENLANGU_CHOICE_GUIDL.md "Guideline") anyway, which removes the need for any country-specific special characters.

In a current system, all [ABAP source code](ABENABAP_SOURCE_CODE_GLOSRY.md "Glossary Entry") is stored in Unicode and this is why this problem does not occur there. If a guarantee could be given that a program was written only for Unicode systems, the rule above would not be needed for literals and comments (at the very least). It is not possible to ensure that a program is not used in any non-Unicode systems, which is why general robustness rules should always be followed. This ensures that programs can be transported from Unicode systems to non-Unicode systems without conversion losses.
