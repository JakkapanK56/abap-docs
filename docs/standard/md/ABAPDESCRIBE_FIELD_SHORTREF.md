---
title: "ABAPDESCRIBE_FIELD_SHORTREF"
description: |
  ABAPDESCRIBE_FIELD_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDESCRIBE_FIELD_SHORTREF.htm"
abapFile: "ABAPDESCRIBE_FIELD_SHORTREF.html"
keywords: ["do", "data", "ABAPDESCRIBE", "FIELD", "SHORTREF"]
---

[Reference](ABAPDESCRIBE_FIELD.html)

`DESCRIBE FIELD dobj    [TYPE typ [COMPONENTS com]]\    [LENGTH ilen IN \{BYTE|CHARACTER\} MODE]\    [DECIMALS dec]\    [OUTPUT-LENGTH olen]\    [HELP-ID hlp]\    [EDIT MASK mask].`

Determines the properties of a data object `dobj`.

-   `TYPE typ [COMPONENTS com]`\\
    Returns the data type in `typ` and the number of components in `com`.
-   `LENGTH ilen IN \{BYTE|CHARACTER\} MODE`\\
    Returns the length in bytes or characters in `ilen`.
-   `DECIMALS dec`\\
    Returns the number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) in `dec`.
-   `OUTPUT-LENGTH olen`\\
    Returns the output length on the [screens](ABENSCREEN_GLOSRY.html) in `olen`.
-   `HELP-ID hlp`\\
    Returns the name of the data element in ABAP Dictionary referred to by the type of `dobj`\\ `hlp`.
-   `EDIT MASK mask`\\
    Returns the name of the [conversion exit](ABENCONVERSION_EXIT_GLOSRY.html) that is assigned to the type of `dobj` in `mask`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html