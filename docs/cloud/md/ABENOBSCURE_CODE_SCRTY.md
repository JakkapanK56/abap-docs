---
title: "ABENOBSCURE_CODE_SCRTY"
description: |
  ABENOBSCURE_CODE_SCRTY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENOBSCURE_CODE_SCRTY.htm"
abapFile: "ABENOBSCURE_CODE_SCRTY.html"
keywords: ["do", "if", "method", "data", "ABENOBSCURE", "CODE", "SCRTY"]
---

[ABAP source code](ABENABAP_SOURCE_CODE_GLOSRY.html) is obscured if tasks that can be performed directly are instead performed across diversions that disguise the real purpose. One common form of obscured code is found when information that could be specified statically is specified using dynamic programming techniques instead. Code can be obscured for one of the following reasons:

In general, any type of obscured code presents a security risk. Instead of bypassing static checks by using obscured code, false positives should be handled using other methods, such as exemptions. Obscured code can often only be detected using a two-man rule (code inspections).

Maliciously obscured code in a [user-dependent program flow](ABENUSER_DEPENDENT_SCRTY.html), which can generally only be detected using code inspections.

-   One form of obscured code (which is not directly malicious) is often used to bypass static checks, for example to disguise false positives.
-   Code is obscured for malicious purposes to disguise back doors and other forms of attacks using injections.

DATA(field) = \`SY-UNAME\`. \\nASSIGN (field) TO FIELD-SYMBOL(). \\n... \\nIF \= \`...\`. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_security.html abenother\_programming\_scrty.html