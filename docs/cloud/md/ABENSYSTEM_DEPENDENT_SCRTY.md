---
title: "ABENSYSTEM_DEPENDENT_SCRTY"
description: |
  ABENSYSTEM_DEPENDENT_SCRTY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSYSTEM_DEPENDENT_SCRTY.htm"
abapFile: "ABENSYSTEM_DEPENDENT_SCRTY.html"
keywords: ["do", "if", "case", "data", "ABENSYSTEM", "DEPENDENT", "SCRTY"]
---

The use of the following [system fields](ABENSYSTEM_FIELD_GLOSRY.html) in ABAP programs to control program behavior can be a security risk:

As a [user-specific program flow](ABENUSER_DEPENDENT_SCRTY.html), it may in the worst case constitute a real back door that can be used by developers to access unauthorized data or functions in systems where they do not have authorization. On the other hand, these can also be code sections used for test purposes during development and then forgotten. Generally speaking, source code that depends on the above system fields should always be avoided and removed. Instead, suitable APIs or fully separate implementations should be used. In cases where the use of the above system fields in logical expressions is absolutely necessary, a special exemption must be granted for the program, so that it can pass the appropriate security tests.

It is possible to define additional system fields, for which this check is performed, by implementing [BAdI](ABENBADI_GLOSRY.html)\\ `SLIN_BADI_SEC_BACKDOOR`.

-   `sy-host`
-   `sy-sysid`
-   `sy-mandt`

abenabap.html abenabap\_reference.html abenabap\_security.html abenother\_programming\_scrty.html