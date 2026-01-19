---
title: "ABAPSET_LOCALE"
description: |
  ABAPSET_LOCALE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_LOCALE.htm"
abapFile: "ABAPSET_LOCALE.html"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "ABAPSET", "LOCALE"]
---

[Short Reference](ABAPSET_LOCALE_SHORTREF.html)

 ``SET LOCALE LANGUAGE lang [[`obsolete_parameters`](ABAPSET_LOCALE_OBSOLETE.html)].``

This statement sets the [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html) of the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html) to the value specified in `lang`. This determines the [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html) for all programs in the internal session.

The [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html)\\ `lang` expects a character-like data object containing a language key with a maximum of one character, for which [locale](ABENLOCALE_GLOSRY.html) properties are defined in the ICU library of the AS ABAP. The possible language keys are contained in the `SPRAS` column of the database table `T002`. The locale of the text environment is set accordingly. If the data object `lang` contains only blanks, the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) of the current [user session](ABENUSER_SESSION_GLOSRY.html) is used.

The statement `SET LOCALE LANGUAGE` does not set the non-modifiable [code page](ABENCODEPAGE_GLOSRY.html) of the text environment. In a Unicode system, this is always [UTF-16](ABENUTF16_GLOSRY.html), whereby the ABAP programming language supports the subset [UCS-2](ABENUCS2_GLOSRY.html). After `SET LOCALE LANGUAGE` is executed, however, the non-Unicode code page that would be set by the statement in a non-Unicode system (see below), is used for conversions in specific statements such as reading and writing [legacy files](ABENLEGACY_FILE_GLOSRY.html). (See the additions [`LEGACY`](ABAPOPEN_DATASET_MODE.html), and [`NON-UNICODE`](ABAPOPEN_DATASET_ENCODING.html) of the statement [`OPEN DATASET`](ABAPOPEN_DATASET.html).) If possible, this non-Unicode code page is taken from the column `CHARCO` of the database table `TCP0C`. The key used here is created from the current operating system of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current AS instance (system field `sy-opsys`), the language key specified in `lang`, and a language ID set implicitly from the database table `TCP0D` or [set explicitly](ABAPSET_LOCALE_OBSOLETE.html).

If the statement `SET LOCALE LANGUAGE` is executed successfully, it sets the system field [`sy-langu`](ABENSYSTEM_FIELDS.html) to the value specified in `lang`.

[If possible, do not switch the text environment within the code](ABENTEXT_ENVIRONM_GUIDL.html)

Setting of the text environment to a valid value.

[Setting the Text Environment](ABENSET_LOCALE_ABEXA.html)

`CX_SY_LOCALIZATION_ERROR`

-   The text environment of an internal session should only be changed for the following purposes:

-   Processing character-like data objects that are in a different language to the logon language of the current user. The text environment language is important for the statements [`SORT ... AS TEXT`](ABAPSORT_ITAB.html) and [`CONVERT TEXT`](ABAPCONVERT_TEXT.html).
-   [Legacy files](ABENLEGACY_FILE_GLOSRY.html) are read and written.

-   The other consequences for the text environment documented under [Text Environment Language and Text Environment](ABENTEXT_ENVIRONMENT.html) should also be noted.
-   After processing in a changed text environment, the text environment should be reset to the previous text environment.
-   The statement `SET LOCALE LANGUAGE` sets the text environment language contained in `sy-langu` and returned by the method `GET_LANGUAGE` of the class `CL_ABAP_SYST`. It does not set the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) returned by the method `GET_LOGON_LANGUAGE`.
-   The statement `SET LOCALE LANGUAGE` must not be confused with the statement [`SET LANGUAGE`](ABAPSET_LANGUAGE.html) for loading the texts of a [text pool](ABENTEXT_POOL_GLOSRY.html).
-   Instead of the `SET LOCALE` statement, the four function modules whose names begin with `SCP_MIXED_LANGUAGES_` can also be used to determine or change the current text environment, and to reset it to the original text environment.
-   The statement has two obsolete additions, [`COUNTRY`](ABAPSET_LOCALE_OBSOLETE.html) and [`MODIFIER`](ABAPSET_LOCALE_OBSOLETE.html), which should no longer be used.

-   *Cause:* The tables `TCP0D` and `TCP0C` were used to determine a character set that is not released in your system. The released character sets are in the table `TCPDB`. Normally this table should contain exactly one character set and this runtime error occurs because an attempt was made to use a non-compatible language.
    *Runtime error:*\\ `TEXTENV_CODEPAGE_NOT_ALLOWED`
-   *Cause:* No entry exists for the current platform in the SAP text environment table `TCP0C` for the specified keys `lang`, `cntry`, and `mod`.
    *Runtime error:*\\ `TEXTENV_KEY_INVALID`

-   *Cause:* Selection of a 'binary' text environment using the modifier `'BINARY'`, `'C'`, `'POSIX'`, or `'RAW'`.
    *Runtime error:*\\ `TEXTENV_BINARY_NOT_SUPPORTED`
-   *Cause:* One of the key values `lang`, `cntry`, or `mod` is longer than the corresponding fields `LANGU`, `COUNTRY`, or `MODIFIER` in the SAP text environment table `TCP0C`.
    *Runtime error:*\\ `TEXTENV_KEY_TOO_LONG`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA langu TYPE sy-langu. \\ncl\_demo\_input=>request( CHANGING field = langu ). \\n\\ \\nTRY. \\n SET LOCALE LANGUAGE langu. \\n CATCH cx\_sy\_localization\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->write( \\n |Logon language: \\{ cl\_abap\_syst=>get\_logon\_language( ) \\n \\}\\\\nText environment language: \\{ cl\_abap\_syst=>get\_language( ) \\n \\}\\\\nsy-langu: \\{ sy-langu \\}| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenlanguage.html abenlanguage\_settings.html abentext\_environment.html