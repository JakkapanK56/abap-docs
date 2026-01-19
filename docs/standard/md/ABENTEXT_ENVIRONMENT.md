---
title: "ABENTEXT_ENVIRONMENT"
description: |
  ABENTEXT_ENVIRONMENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTEXT_ENVIRONMENT.htm"
abapFile: "ABENTEXT_ENVIRONMENT.html"
keywords: ["select", "if", "case", "try", "method", "class", "data", "types", "ABENTEXT", "ENVIRONMENT"]
---

The [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html) is part of the [language settings](ABENLANGUAGE_SETTINGS.html) of an ABAP program and determines its [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html). It is valid during an [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

The current text environment language can be determined using the method `GET_LANGUAGE` of the class `CL_ABAP_SYST` or using the statement [`GET LOCALE LANGUAGE`](ABAPGET_LOCALE.html), and is the nominal content of the system field [`sy-langu`](ABENSYSTEM_FIELDS.html). The possible single-character abbreviations for the text environment language are stored as language keys in the column `SPRAS` of the database table `T002`.

Assertion that the system field `sy-langu` contains the current text environment language, An exception is raised if the system field is overwritten in the program.

All programs in an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) work in a shared text environment that is determined by the text environment language that can be set explicitly using the statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html). Besides the language, the text environment includes:

The main purpose of the text environment it to handle texts in character-like data objects:

Setting the text environment explicitly before an [aRFC](ABENSRFC_GLOSRY.html). The function module `DEMO_RFM_CALL_TRANSACTION` calls a transaction using a [transaction code](ABENTRANSACTION_CODE_GLOSRY.html) passed to it. The logon language of the [`RFC` session](ABENRFC_SESSION_GLOSRY.html) is always English, regardless of the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) of the current session. Afterwards, the text environment language is set back to its previous value.

-   The text environment language is set at the start of each internal session to the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) of the current [user session](ABENUSER_SESSION_GLOSRY.html).
-   It can also be set to a different language for the current internal session using a suitable API or directly with the statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html).

-   A **code page**
-   The [code page](ABENCODEPAGE_GLOSRY.html) of the text environment is always the [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html)\\ [UTF-16](ABENUTF16_GLOSRY.html) of the AS instances of a [Unicode system](ABENUNICODE_SYSTEM_GLOSRY.html) and cannot be changed. The current release supports Unicode systems only. Text environments with other code pages are no longer supported. Only for some specific statements, such as reading and writing [legacy files](ABENLEGACY_FILE_GLOSRY.html) using the [ABAP file interface](ABENABAP_LANGUAGE_FILES.html), there is a special feature in which the non-Unicode code page that is used for conversions is the one that would be assigned to the current text environment in a non-Unicode system.
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

-   The ABAP-specific [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`LOCALE_SAP`](ABENHANA_SESSION_VARIABLES.html) in SAP HANA and the session variable [`system_language`](ABENCDS_SESSION_VARIABLE_V2.html) in ABAP CDS contain the current text environment language in reads from ABAP or ABAP SQL.
-   If the logon language for the [RFC session](ABENRFC_SESSION_GLOSRY.html) is not defined in the [RFC destination](ABENRFC_DEST_GLOSRY.html) in a [remote function call](ABENREMOTE_FUNCTION_CALL_GLOSRY.html), it is determined by the current text environment language.
-   The [exception texts](ABENEXCEPTION_TEXT_GLOSRY.html) returned by [exception classes](ABENEXCEPTION_CLASS_GLOSRY.html) are determined by the current text environment language.
-   If a language is not specified explicitly in the statement [`SUBMIT VIA JOB`](ABAPSUBMIT_VIA_JOB.html), the logon language of the [background session](ABENBATCH_SESSION_GLOSRY.html) is set implicitly to the current text environment language.
-   The texts on [selection screens](ABENSELECTION_SCREEN_GLOSRY.html) are determined by the current text environment language.

-   Any further frameworks based on the nominal value of the system field `sy-langu` access the current text environment language and not the logon language.

-   The ABAP programming language supports a subset covered by [UCS-2](ABENUCS2_GLOSRY.html) and not the full scope of UTF-16. This contains all [UTF](ABENUTF_GLOSRY.html) characters except those in the [surrogate area](ABENSURROGATE_AREA_GLOSRY.html). ABAP interprets a character from the surrogate area as two characters.
-   In the non-Unicode [single code page systems](ABENSINGLE_CODEPAGE_SYSTEM_GLOSRY.html) supported before release 7.62, the code page of the text environment was always the non-Unicode system code page of the current AS instance. It was possible to configure different system code pages for the code page of the text environment of a system only in the [MDMP systems](ABENMDMP-SYSTEM_GLOSRY.html) supported before ABAP release 7.0.

ASSERT sy-langu = cl\_abap\_syst=>get\_language( ). GET LOCALE LANGUAGE FINAL(langu) \\n COUNTRY DATA(dummy) \\n MODIFIER dummy. \\n\\ \\nSET LOCALE LANGUAGE 'E'. \\nCALL FUNCTION 'DEMO\_RFM\_CALL\_TRANSACTION' \\n STARTING NEW TASK 'TCODE' \\n EXPORTING \\n tcode = 'SE11'. \\nSET LOCALE LANGUAGE langu. abenabap.html abenabap\_reference.html abenlanguage.html abenlanguage\_settings.html