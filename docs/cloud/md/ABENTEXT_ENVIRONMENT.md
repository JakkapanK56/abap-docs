---
title: "ABENTEXT_ENVIRONMENT"
description: |
  ABENTEXT_ENVIRONMENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTEXT_ENVIRONMENT.htm"
abapFile: "ABENTEXT_ENVIRONMENT.html"
keywords: ["if", "case", "try", "class", "data", "types", "ABENTEXT", "ENVIRONMENT"]
---

The [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html) is part of the [language settings](ABENLANGUAGE_SETTINGS.html) of an ABAP program and determines its [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html). It is valid during an [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

The current text environment language is the nominal content of the system field [`sy-langu`](ABENSYSTEM_FIELDS.html).

All programs in an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) work in a shared text environment that is determined by the text environment language. Besides the language, the text environment includes:

The main purpose of the text environment it to handle texts in character-like data objects:

-   The text environment language is set at the start of each internal session to the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) of the current [user session](ABENUSER_SESSION_GLOSRY.html).
-   It can also be set to a different language for the current internal session using a suitable API.

-   A **code page**
-   The [code page](ABENCODEPAGE_GLOSRY.html) of the text environment is always the [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html)\\ [UTF-16](ABENUTF16_GLOSRY.html) of the AS instances of a [Unicode system](ABENUNICODE_SYSTEM_GLOSRY.html) and cannot be changed.
-   A **locale**
-   The [locale](ABENLOCALE_GLOSRY.html) properties that belong to the text environment language and country are defined in an ICU (International Components for Unicode) library. This library is made available for AS ABAP and is independent of the operating system of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the [AS instances](ABENAS_INSTANCE_GLOSRY.html).

-   The [code page](ABENCODEPAGE_GLOSRY.html) of the text environment affects all operations that depend on the current character set, such as

-   Casting character-like data objects to byte-like types
-   Transferring data from and to external storage
-   Transferring data using data and communication interfaces

-   The [locale](ABENLOCALE_GLOSRY.html) of the text environment affects all statements that sort character-like data objects as text, such as

-   [`SORT AS TEXT`](ABAPSORT_ITAB.html)
-   [`CONVERT TEXT INTO SORTABLE CODE`](ABAPCONVERT_TEXT.html)

-   In addition, the text environment language, and not the logon language, is used in the following cases:

-   The ABAP-specific [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `LOCALE_SAP` in SAP HANA and the session variable [`system_language`](ABENCDS_SESSION_VARIABLE_V2.html) in ABAP CDS contain the current text environment language in reads from ABAP or ABAP SQL.
-   If the logon language for the RFC session is not defined in the RFC destination in a remote function call, it is determined by the current text environment language.
-   The exception texts returned by [exception classes](ABENEXCEPTION_CLASS_GLOSRY.html) are determined by the current text environment language.

-   Any further frameworks based on the nominal value of the system field `sy-langu` access the current text environment language and not the logon language.

-   The ABAP programming language supports a subset covered by [UCS-2](ABENUCS2_GLOSRY.html) and not the full scope of UTF-16. This contains all [UTF](ABENUTF_GLOSRY.html) characters except those in the [surrogate area](ABENSURROGATE_AREA_GLOSRY.html). ABAP interprets a character from the surrogate area as two characters.

abenabap.html abenabap\_reference.html abenlanguage.html abenlanguage\_settings.html