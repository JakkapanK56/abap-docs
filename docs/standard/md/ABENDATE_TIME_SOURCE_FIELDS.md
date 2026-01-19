---
title: "ABENDATE_TIME_SOURCE_FIELDS"
description: |
  ABENDATE_TIME_SOURCE_FIELDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDATE_TIME_SOURCE_FIELDS.htm"
abapFile: "ABENDATE_TIME_SOURCE_FIELDS.html"
keywords: ["if", "data", "types", "ABENDATE", "TIME", "SOURCE", "FIELDS"]
---

Conversion of a target field with the value *144414* to different target types. The type-compliant formatted output is `53054`, `144414`, `CF3E`. The number 53054 corresponds to the number of seconds since midnight for the time 144414.

-   [`d`](ABENCONVERSION_TYPE_D.html)
-   [`t`](ABENCONVERSION_TYPE_T.html)
-   [`utclong`](ABENCONVERSION_TYPE_UTCLONG.html)

-   The conversion rules are designed in such a way that operands of the types `d` and `t` behave like character-like operands in character-like operand positions and behave numerically in numeric operand positions.
-   In [substring access](ABENOFFSET_LENGTH.html) to an operand of the type `d` or `t`, the substring is handled like an operand of the type `n` and the corresponding conversion rules apply.
-   Operands of the type `utclong` can only be converted to the types `c` and `string`.

DATA time TYPE t VALUE '144414'. \\n\\ \\ncl\_demo\_output=>display( \\n |i: \\{ CONV i( time ) \\}\\\\n| && \\n |string: \\{ CONV string( time ) \\}\\\\n| && \\n |xstring: \\{ CONV xstring( time ) \\}\\\\n| ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html abenconversion\_elementary.html