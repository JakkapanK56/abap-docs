---
title: "ABENSTRING"
description: |
  ABENSTRING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING.htm"
abapFile: "ABENSTRING.html"
keywords: ["select", "if", "class", "data", "types", "internal-table", "ABENSTRING"]
---

Strings are [elementary data objects](ABENELEMENTARY_DATA_OBJECT_GLOSRY.html) of variable length. There are [text strings](ABENTEXT_STRING_GLOSRY.html) and [byte strings](ABENBYTE_STRING_GLOSRY.html). Like [internal tables](ABENINTERNAL_TABLE_GLOSRY.html), strings are [dynamic data objects](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html).

The corresponding built-in ABAP types are `string` and `xstring`. These are the dynamic equivalent of the data types `c` and `x`, which define text fields or byte fields of fixed length.

Unlike a text field or byte field, the length of a string is not defined statically, but is variable and adapts to the current content of the data object at runtime. For this, dynamic memory management is used internally (see [Memory Management for Deep Data Objects](ABENMEMORY_CONSUMPTION.html)). The initial value of a string is the empty string with length 0. If there is an assignment between strings with the same type, [sharing](ABENSHARING_GLOSRY.html) takes place.

The [maximum size](ABENMEMORY_CONSUMPTION_2.html) of a string is determined by the [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `ztta/max_memreq_MB` and is 2 GB at most. If an operation with a [string](ABENSTRING_GLOSRY.html) exceeds its maximum size, an exception of the class `CX_SY_STRING_SIZE_TOO_LARGE` occurs and can be handled.

In contrast to text fields, trailing blanks are considered in text strings. There is a special [text string literal](ABENTEXT_STRING_LITERAL_GLOSRY.html) for text strings. As for byte fields, there is no special [literal](ABENABAP_LITERAL_GLOSRY.html) for byte strings in general ABAP but there is a [typed literal](ABENTYPED_LITERAL_GLOSRY.html) in ABAP SQL and ABAP CDS.

Strings are [deep](ABENDEEP_GLOSRY.html) data types. A structure that contains a string is a [deep structure](ABENDEEP_STRUCTURE_GLOSRY.html) and cannot be used as a character-like field like a [flat structure](ABENFLAT_STRUCTURE_GLOSRY.html).

Strings can be stored in [data clusters](ABENDATA_CLUSTER_GLOSRY.html) like internal tables. In the ABAP Dictionary, there are the built-in data types [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html), [`STRING`](ABENDDIC_BUILTIN_TYPES.html), and [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html) for strings that can also be the types of table fields in database tables, whereby certain [restrictions](ABENDDIC_CHARACTER_BYTE_TYPES.html) need to be considered.

Inline declaration of a text string `carrier_list` for adding a comma-separated list of character-like data.

-   Text strings and text fields contain [character strings](ABENCHARACTER_STRING_GLOSRY.html). Their common generic type is `csequence`.
-   Byte strings and byte fields contain [byte strings](ABENBYTE_CHAIN_GLOSRY.html). Their common generic type is `xsequence`.

SELECT carrid \\n FROM scarr \\n INTO TABLE @FINAL(carrier\_tab). \\nCONCATENATE LINES OF carrier\_tab INTO FINAL(carrier\_list) \\n SEPARATED BY \`, \`. \\n\\ \\ncl\_demo\_output=>display( carrier\_list ). abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html