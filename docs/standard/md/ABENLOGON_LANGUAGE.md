---
title: "ABENLOGON_LANGUAGE"
description: |
  ABENLOGON_LANGUAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGON_LANGUAGE.htm"
abapFile: "ABENLOGON_LANGUAGE.html"
keywords: ["select", "method", "class", "ABENLOGON", "LANGUAGE"]
---

The [logon language](ABENLOGON_LANGUAGE_GLOSRY.html) is defined when an [ABAP user](ABENABAP_USER_GLOSRY.html)\\ [logs on](ABENLOGON_GLOSRY.html) to an AS ABAP for the entire [user session](ABENUSER_SESSION_GLOSRY.html) and can no longer be changed. The current logon language can be determined using the method `GET_LOGON_LANGUAGE` of the class `CL_ABAP_SYST`.

The logon language affects the selection of the following texts:

The texts listed above are not affected by the statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html). The statement [`SET LANGUAGE`](ABAPSET_LANGUAGE.html) is used to change the language of the texts of a text pool.

Determining the current logon language.

-   Texts on general classic [dynpros](ABENDYNPRO_GLOSRY.html)
-   Texts of [messages](ABENMESSAGE_GLOSRY.html)
-   Texts from [text pools](ABENTEXT_POOL_GLOSRY.html)

FINAL(logon\_langu) = cl\_abap\_syst=>get\_logon\_language( ). abenabap.html abenabap\_reference.html abenlanguage.html abenlanguage\_settings.html