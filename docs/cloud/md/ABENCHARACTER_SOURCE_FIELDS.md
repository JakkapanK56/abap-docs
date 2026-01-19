---
title: "ABENCHARACTER_SOURCE_FIELDS"
description: |
  ABENCHARACTER_SOURCE_FIELDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCHARACTER_SOURCE_FIELDS.htm"
abapFile: "ABENCHARACTER_SOURCE_FIELDS.html"
keywords: ["if", "data", "types", "ABENCHARACTER", "SOURCE", "FIELDS"]
---

The following special formats must be respected in conversions of character-like data objects to numeric data objects:

Conversion of the text string `053000` to different target types. The type-compliant formatted output is `53000`, `0000053000`, `053000`, `053000`.

-   [`c`](ABENCONVERSION_TYPE_C.html)
-   [`n`](ABENCONVERSION_TYPE_N.html)
-   [`string`](ABENCONVERSION_TYPE_STRING.html)

-   [Representation of Numeric Values in Character-Like Fields](ABENNUMERICAL_VALUE.html)
-   [Representation of Time Stamps in Character-Like Fields](ABENTS_VALUE.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA str TYPE string VALUE \`053000\`. \\n\\ \\nTYPES n10 TYPE n LENGTH 10. \\nout->write( \\n |i: \\{ CONV i( str ) \\}\\\\n| && \\n |n LENGTH 10: \\{ CONV n10( str ) \\}\\\\n| && \\n |xstring: \\{ CONV xstring( str ) \\}\\\\n| && \\n |t: \\{ CONV t( str ) \\}\\\\n| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html abenconversion\_elementary.html