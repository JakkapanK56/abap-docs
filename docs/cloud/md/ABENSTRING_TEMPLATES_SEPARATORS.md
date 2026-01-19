---
title: "ABENSTRING_TEMPLATES_SEPARATORS"
description: |
  ABENSTRING_TEMPLATES_SEPARATORS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_TEMPLATES_SEPARATORS.htm"
abapFile: "ABENSTRING_TEMPLATES_SEPARATORS.html"
keywords: ["insert", "if", "class", "data", "ABENSTRING", "TEMPLATES", "SEPARATORS"]
---

`... \\n ... \\r ... \\t ...`

String templates interpret the character combinations `\\n`, `\\r`, and `\\t` as [control characters](ABENCONTROL_CHARACTER_GLOSRY.html).

In place of a control character, its hexadecimal value according to the current code page is inserted into the character string created by the string template.

The following example generates in `code` the representation of the results of a string template with the three possible control characters in the code page UTF-8, namely `0A0D09`. The hexadecimal values `0A`, `0D`, and `09` stand for line feed, return, and tabulator.

The following example produces a three line output in the textedit control.

[String Templates, Control Characters](ABENSTRING_TEMPLATE_CTRLCHAR_ABEXA.html)

-   If a control character is to be included as literal text, its special meaning can be removed by prefixing it with the escape character `\\`.
-   The control characters in string templates replace the use of some attributes of the class [`CL_ABAP_CHAR_UTILITIES`](ABENCL_ABAP_CHAR_UTILITIES.html).

FINAL(code) = \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( |\\\\n\\\\r\\\\t| ). cl\_demo\_text=>display\_string( |1\\\\n2\\\\n3| ). **Control Character** **Meaning** **Hexadecimal value (UTF-8)** `\\n` Line feed 0A `\\r` Return 0D `\\t` Tabulator 09 abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html abenstring\_templates.html