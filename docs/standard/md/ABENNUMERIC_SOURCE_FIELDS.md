---
title: "ABENNUMERIC_SOURCE_FIELDS"
description: |
  ABENNUMERIC_SOURCE_FIELDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNUMERIC_SOURCE_FIELDS.htm"
abapFile: "ABENNUMERIC_SOURCE_FIELDS.html"
keywords: ["if", "data", "types", "ABENNUMERIC", "SOURCE", "FIELDS"]
---

Instead of a conversion, [string templates](ABENSTRING_TEMPLATE_GLOSRY.html) or the statement [`WRITE ... TO`](ABAPWRITE_TO.html) can often be used with their formatting options to assign numeric values to text fields and text strings.

Conversion of the integer 100 to different target types. The type-compliant formatted output is `1E+02`, `0000000100`, `64`, `000140`.

-   [`i`, `int8`, (`b`, `s`)](ABENCONVERSION_TYPE_IBS.html)
-   [`p`](ABENCONVERSION_TYPE_P.html)
-   [`decfloat16`, `decfloat34`](ABENCONVERSION_TYPE_DECFLOAT.html)
-   [`f`](ABENCONVERSION_TYPE_F.html)

DATA num TYPE i VALUE 100. \\n\\ \\nTYPES n10 TYPE n LENGTH 10. \\ncl\_demo\_output=>display( \\n |decfloat34: \\{ CONV decfloat34( num ) STYLE = SCIENTIFIC \\}\\\\n| && \\n |n LENGTH 10: \\{ CONV n10( num ) \\}\\\\n| && \\n |xstring: \\{ CONV xstring( num ) \\}\\\\n| && \\n |t: \\{ CONV t( num ) \\}\\\\n| ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html abenconversion\_elementary.html