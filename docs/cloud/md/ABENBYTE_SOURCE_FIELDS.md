---
title: "ABENBYTE_SOURCE_FIELDS"
description: |
  ABENBYTE_SOURCE_FIELDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBYTE_SOURCE_FIELDS.htm"
abapFile: "ABENBYTE_SOURCE_FIELDS.html"
keywords: ["if", "data", "types", "ABENBYTE", "SOURCE", "FIELDS"]
---

Conversion of the byte field from hexadecimal content `FFFF` to different target types. The type-compliant formatted output is `65535`, `FFFF`, `FFFF`, `01800605`. The date of type `d` is 65535 days since 01.01.0001.

-   [`x`](ABENCONVERSION_TYPE_X.html)
-   [`xstring`](ABENCONVERSION_TYPE_XSTRING.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA hex TYPE x LENGTH 2 VALUE \`FFFF\`. \\n\\ \\nout->write( \\n |i: \\{ CONV i( hex ) \\}\\\\n| && \\n |string: \\{ CONV string( hex ) \\}\\\\n| && \\n |xstring: \\{ CONV xstring( hex ) \\}\\\\n| && \\n |d: \\{ CONV d( hex ) \\}\\\\n| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html abenconversion\_elementary.html