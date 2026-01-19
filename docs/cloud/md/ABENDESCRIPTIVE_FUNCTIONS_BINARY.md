---
title: "ABENDESCRIPTIVE_FUNCTIONS_BINARY"
description: |
  ABENDESCRIPTIVE_FUNCTIONS_BINARY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDESCRIPTIVE_FUNCTIONS_BINARY.htm"
abapFile: "ABENDESCRIPTIVE_FUNCTIONS_BINARY.html"
keywords: ["data", "ABENDESCRIPTIVE", "FUNCTIONS", "BINARY"]
---

One length function is currently available for unnamed byte-like arguments.

`... xstrlen( arg ) ...`

The [built-in function](ABENBUILT_IN_FUNCTIONS.html)\\ `xstrlen` returns the number of bytes in `arg`. The argument `arg` is a byte-like [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). The return value has the type `i`.

A six-character text in the code page [UTF-16](ABENUTF16_GLOSRY.html) is represented by 12 bytes.

FINAL(text) = \`Hello!\`. \\nFINAL(hex) = cl\_abap\_conv\_codepage=>create\_out( codepage = \`UTF-16\` \\n )->convert( text ). \\ncl\_demo\_output=>display( \\n |Text length \\{ strlen( text ) \\n \\}\\\\nByte length \\{ xstrlen( hex ) \\}| ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenbyte\_processing\_expr\_func.html abenbinary\_functions.html