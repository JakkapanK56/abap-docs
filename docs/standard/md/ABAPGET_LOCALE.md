---
title: "ABAPGET_LOCALE"
description: |
  ABAPGET_LOCALE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_LOCALE.htm"
abapFile: "ABAPGET_LOCALE.html"
keywords: ["if", "try", "data", "ABAPGET", "LOCALE"]
---

[Short Reference](ABAPGET_LOCALE_SHORTREF.html)

``GET LOCALE LANGUAGE lang [`obsolete_parameters`](ABAPGET_LOCALE_OBSOLETE.html).``

The language key of the current [text environment language](ABENTEXT_ENV_LANGU_GLOSRY.html) is assigned to the variable `lang`. The data object `lang` must have a character-like data type. The statement has two obsolete additions - [`COUNTRY`](ABAPGET_LOCALE_OBSOLETE.html) and [`MODIFIER`](ABAPGET_LOCALE_OBSOLETE.html) - that must be specified but whose results should not be evaluated.

The imported text environment language of the current text environment can be used to restore the environment after it has been changed using the statement [`SET LOCALE`](ABAPSET_LOCALE.html).

Determining the current text environment and restoring it after a change.

DATA: lang TYPE tcp0c-langu, \\n dummy TYPE string ##needed. \\n\\ \\nGET LOCALE LANGUAGE lang COUNTRY dummy MODIFIER dummy. \\nSET LOCALE LANGUAGE ... \\n... \\nSET LOCALE LANGUAGE lang. abenabap.html abenabap\_reference.html abenlanguage.html abenlanguage\_settings.html abentext\_environment.html