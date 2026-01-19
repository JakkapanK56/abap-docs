---
title: "ABENLOGEXP_DATE_TIME"
description: |
  ABENLOGEXP_DATE_TIME - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_DATE_TIME.htm"
abapFile: "ABENLOGEXP_DATE_TIME.html"
keywords: ["do", "if", "data", "types", "ABENLOGEXP", "DATE", "TIME"]
---

The following tables show the [comparison types](ABENCOMPARISON_TYPE_GLOSRY.html) for comparisons between date/time types and other data types. If the type of an operand is not the same as the comparison type, it is [converted](ABENCONVERSION_ELEMENTARY.html) to this type. The [comparison rules for the comparison types](ABENCOMPARISON_TYPE.html) determine how the comparison is performed. If no comparison type is specified for a combination, no comparison is possible.

The content of the `syst_datum` type data object `date` is converted to the number of days since 01/01/0001 in the comparison and compared with the content of `days`.

**Length Adjustments**

Comparison of any text string with the `syst_datum` type data object `date`.

An UTC time stamp formatted as a character string with the formatting option [`TIMESTAMP`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) can be converted to `utclong` and compared with a time stamp field. Instead of `ISO`, `SPACE` could also be specified.

A hexadecimal number that is the result of the conversion of a valid time is equal to this time.

The time generated through the addition of the value 86399 to the current time is compared with the current time. It is smaller than the current time.

A later time stamp is always greater than an earlier time stamp.

-   For comparisons between data types `c`, `n`, or `string` on the one hand and `d` on the other, the longer field is truncated on the right to the length of the shorter field, if only blanks are truncated.
-   For comparisons between data types `c` or `n` on the one hand and `t` on the other, the longer field is truncated on the right to the length of the shorter field, if only blanks or characters *0* are truncated.
-   Lengths are not adjusted for comparisons between the data type `string` and the data type `t`.

FINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ). \\nDATA(days) = CONV decfloat34( date ). \\ncl\_demo\_input=>request( CHANGING field = days ). \\n\\ \\ncl\_demo\_output=>display( \\n COND #( WHEN days > date THEN |\\{ days \\} > \\{ date \\}| \\n WHEN days < date THEN |\\{ days \\} < \\{ date \\}| \\n ELSE |\\{ days \\} = \\{ date \\}| ) ). FINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ). \\nDATA(text) = CONV string( date ). \\ncl\_demo\_input=>request( CHANGING field = text ). \\n\\ \\ncl\_demo\_output=>display( \\n COND #( WHEN text > date THEN |\\{ text \\} > \\{ date \\}| \\n WHEN text < date THEN |\\{ text \\} < \\{ date \\}| \\n ELSE |\\{ text \\} = \\{ date \\}| ) ). FINAL(ts) = utclong\_current( ). \\nFINAL(text) = |\\{ ts TIMESTAMP = ISO \\}|. \\nASSERT ts = text. FINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ). \\nFINAL(hex) = CONV xstring( time ). \\n\\ \\nASSERT hex = time. \\ncl\_demo\_output=>display( |\\{ time \\} \\{ hex \\}| ). FINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ). \\nIF CONV t( time + 86399 ) < time. \\n cl\_demo\_output=>display( |CONV t( time + 86399 ) < time| ). \\nENDIF. FINAL(ts) = utclong\_current( ). \\nWAIT UP TO 1 SECONDS. \\nASSERT utclong\_current( ) > ts. - **d**, **t** **utclong**\\ **decfloat16**, **decfloat34** `decfloat34` \\ `-`\\ **f** `f` `-`\\ **p** `p` `-`\\ **int8** `int8` `-`\\ **i**, **s**, **b** `i` `-` - **d**, **t** **utclong**\\ **string** `string` `utclong`\\ **c** `c` `utclong`\\ **n** `n` `-` - **d**, **t** **utclong**\\ **x**, **xstring** `i` `-` - **d** **t** **utclong**\\ **d** `d` `-` `-`\\ **t** `-` `t` `-`\\ **utclong** `-` `-` `utclong` abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html abenlogexp\_rules\_operands.html abenlogexp\_rules\_operands\_dobj.html