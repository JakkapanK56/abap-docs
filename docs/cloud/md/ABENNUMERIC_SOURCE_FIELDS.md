---
title: "ABENNUMERIC_SOURCE_FIELDS"
description: |
  ABENNUMERIC_SOURCE_FIELDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNUMERIC_SOURCE_FIELDS.htm"
abapFile: "ABENNUMERIC_SOURCE_FIELDS.html"
keywords: ["if", "data", "types", "ABENNUMERIC", "SOURCE", "FIELDS"]
---

Conversion of the integer 100 to different target types. The type-compliant formatted output is `1E+02`, `0000000100`, `64`, `000140`.

-   [`i`, `int8`, (`b`, `s`)](ABENCONVERSION_TYPE_IBS.html)
-   [`p`](ABENCONVERSION_TYPE_P.html)
-   [`decfloat16`, `decfloat34`](ABENCONVERSION_TYPE_DECFLOAT.html)
-   [`f`](ABENCONVERSION_TYPE_F.html)

DATA num TYPE i VALUE 100. \\n\\ \\nTYPES n10 TYPE n LENGTH 10. \\ncl\_demo\_output=>display( \\n |decfloat34: \\{ CONV decfloat34( num ) STYLE = SCIENTIFIC \\}\\\\n| && \\n |n LENGTH 10: \\{ CONV n10( num ) \\}\\\\n| && \\n |xstring: \\{ CONV xstring( num ) \\}\\\\n| && \\n |t: \\{ CONV t( num ) \\}\\\\n| ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html abenconversion\_elementary.html