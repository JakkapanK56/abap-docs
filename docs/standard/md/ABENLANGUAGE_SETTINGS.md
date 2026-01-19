---
title: "ABENLANGUAGE_SETTINGS"
description: |
  ABENLANGUAGE_SETTINGS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLANGUAGE_SETTINGS.htm"
abapFile: "ABENLANGUAGE_SETTINGS.html"
keywords: ["select", "if", "ABENLANGUAGE", "SETTINGS"]
---

The [language setting](ABENLANGUAGE_SETTING_GLOSRY.html) includes the following settings:

-   [Logon language](ABENLOGON_LANGUAGE.html)
-   The logon language is the language of the current [user session](ABENUSER_SESSION_GLOSRY.html). It affects the selection of various texts.
-   [Text environment language](ABENTEXT_ENVIRONMENT.html)
-   The text environment language is the language of the [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html) of the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html). By default, this is the logon language, but can be set to a different value in an internal session with the statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html). It affects the general language-dependent behavior of an ABAP program.

-   The system field [`sy-langu`](ABENSYSTEM_FIELDS.html) contains the text environment language. It only represents the logon language if the text environment language was not set to a different value.
-   Within an internal session, the text environment language should only be set temporarily to a language other than the logon language.

abenabap.html abenabap\_reference.html abenlanguage.html