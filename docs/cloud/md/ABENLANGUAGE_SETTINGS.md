---
title: "ABENLANGUAGE_SETTINGS"
description: |
  ABENLANGUAGE_SETTINGS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLANGUAGE_SETTINGS.htm"
abapFile: "ABENLANGUAGE_SETTINGS.html"
keywords: ["select", "if", "ABENLANGUAGE", "SETTINGS"]
---

The [language setting](ABENLANGUAGE_SETTING_GLOSRY.html) includes the following settings:

-   [Logon language](ABENLOGON_LANGUAGE.html)
-   The logon language is the language of the current [user session](ABENUSER_SESSION_GLOSRY.html). It affects the selection of various texts.
-   [Text environment language](ABENTEXT_ENVIRONMENT.html)
-   The text environment language is the language of the [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html) of the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html). By default, this is the logon language. It affects the general language-dependent behavior of an ABAP program.

-   The system field [`sy-langu`](ABENSYSTEM_FIELDS.html) contains the text environment language. It only represents the logon language if the text environment language was not set to a different value.

abenabap.html abenabap\_reference.html abenlanguage.html