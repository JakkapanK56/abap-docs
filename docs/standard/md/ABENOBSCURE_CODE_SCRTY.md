---
title: "ABENOBSCURE_CODE_SCRTY"
description: |
  ABENOBSCURE_CODE_SCRTY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENOBSCURE_CODE_SCRTY.htm"
abapFile: "ABENOBSCURE_CODE_SCRTY.html"
keywords: ["do", "if", "method", "class", "data", "field-symbol", "ABENOBSCURE", "CODE", "SCRTY"]
---

[ABAP source code](ABENABAP_SOURCE_CODE_GLOSRY.html) is obscured if tasks that can be performed directly are instead performed across diversions that disguise the real purpose. One common form of obscured code is found when information that could be specified statically is specified using dynamic programming techniques instead. Code can be obscured for one of the following reasons:

In general, any type of obscured code presents a security risk. Instead of bypassing static checks by using obscured code, false positives should be handled using other methods, such as exemptions. Obscured code can often only be detected using a two-man rule (code inspections).

Maliciously obscured code in a [user-dependent program flow](ABENUSER_DEPENDENT_SCRTY.html), which can generally only be detected using code inspections.

Code obscured without malicious intent. In a HTTP request handler, a HTML file is created by calling a method in which potential [cross site scripting](ABENXSS_GLOSRY.html) (XSS) has already been prevented. A static security check that ignores the called method can classify this as a security risk, however, and demand that the HTML is escaped again. The dynamic assignment of the HTML file to a field symbol is used to bypass the false positive raised by the security check.

The correct form of the HTTP request handler would be:

If the security check raises a false positive, either an exemption or an improvement to the check should be requested.

-   One form of obscured code (which is not directly malicious) is often used to bypass static checks, for example to disguise false positives.
-   Code is obscured for malicious purposes to disguise back doors and other forms of attacks using injections.

DATA(field) = \`SY-UNAME\`. \\nASSIGN (field) TO FIELD-SYMBOL(). \\n... \\nIF \= \`...\`. \\n ... \\nENDIF. METHOD if\_http\_extension~handle\_request. \\n DATA(html) = cl\_demo\_html\_provider=>get( ). \\n "XSS is prevented in cl\_demo\_html\_provider \\n DATA(html\_name) = \`HTML\`. \\n ASSIGN (html\_name) TO FIELD-SYMBOL(). \\n server->response->set\_cdata( data = ). \\nENDMETHOD. METHOD if\_http\_extension~handle\_request. \\n DATA(html) = cl\_demo\_html\_provider=>get( ). \\n "XSS is prevented in cl\_demo\_html\_provider \\n server->response->set\_cdata( data = html ). \\nENDMETHOD. abenabap.html abenabap\_reference.html abenabap\_security.html abenother\_programming\_scrty.html