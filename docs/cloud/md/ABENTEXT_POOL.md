---
title: "ABENTEXT_POOL"
description: |
  ABENTEXT_POOL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTEXT_POOL.htm"
abapFile: "ABENTEXT_POOL.html"
keywords: ["do", "if", "class", "ABENTEXT", "POOL"]
---

Text pools are persistent repositories for the following [text elements](ABENTEXT_ELEMENT_GLOSRY.html):

There is one text pool for the original language of the program and one text pool for each translation language.

From which text pool an ABAP program takes its texts depends on the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) or a [secondary language](ABENSECONDARY_LANGUAGE_GLOSRY.html).

In [global classes](ABENGLOBAL_CLASS_GLOSRY.html) and [function pools](ABENFUNCTION_POOL_GLOSRY.html), the text pools are assigned to the relevant master program. In the repository, this program has a different name than the class or function pool.

-   [Text symbols](ABENTEXT_SYMBOL_GLOSRY.html)

-   When a program is loaded into an [internal session](ABENINTERNAL_SESSION_GLOSRY.html), the text elements of the text pool of the [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) are imported by default. If this text pool does not exist, the text pool of the [secondary language](ABENSECONDARY_LANGUAGE_GLOSRY.html) of AS ABAP is used. If none of these text pools exist, an empty text pool without text elements is loaded.

abenabap.html abenabap\_reference.html abenabap\_texts.html