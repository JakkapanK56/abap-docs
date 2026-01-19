---
title: "ABENBUILT_IN_TYPES_COMPLETE"
description: |
  ABENBUILT_IN_TYPES_COMPLETE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBUILT_IN_TYPES_COMPLETE.htm"
abapFile: "ABENBUILT_IN_TYPES_COMPLETE.html"
keywords: ["while", "if", "data", "types", "ABENBUILT", "TYPES", "COMPLETE"]
---

The following types are built-in in every ABAP program:

All built-in ABAP types from these tables are elementary and are included in the generic type [`simple`](ABENBUILT_IN_TYPES_GENERIC.html). Apart from the types [`b`](ABENBUILTIN_TYPES_NUMERIC.html) and [`s`](ABENBUILTIN_TYPES_NUMERIC.html), the built-in ABAP types can be used to define separate [data types](ABENDATA_TYPE_GLOSRY.html) and [data objects](ABENDATA_OBJECT_GLOSRY.html) and for [typing](ABENTYPING_GLOSRY.html).

In addition to the actual built-in ABAP types, there is a predefined data type `cursor` that is global to the program, which currently has the same meaning as the built-in ABAP type [`i`](ABENBUILTIN_TYPES_NUMERIC.html). It is required when declaring a cursor variable for [database cursor](ABENDATABASE_CURSOR_GLOSRY.html)\\ handling.

-   [Built-In Numeric Types](ABENBUILTIN_TYPES_NUMERIC.html)
-   [Built-In Character-Like Types](ABENBUILTIN_TYPES_CHARACTER.html)
-   [Built-In Byte-Like Types](ABENBUILTIN_TYPES_BYTE.html)
-   [Built-In Date Types, Time Types, and Time Stamp Types](ABENBUILTIN_TYPES_DATE_TIME.html)

-   If no explicit [start value](ABENSTART_VALUE_GLOSRY.html) is specified when creating a data object with one of the built-in ABAP types, the start value is set to the [initial value](ABENINITIAL_VALUE_GLOSRY.html) specified for the relevant type.
-   The built-in data types [`string`](ABENBUILTIN_TYPES_CHARACTER.html) and [`xstring`](ABENBUILTIN_TYPES_BYTE.html) describe data objects of variable length ([dynamic data objects](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html)). While the length of data objects of all other elementary data types is fixed for their whole lifetime, the length of text strings and byte strings varies according to their content.

abenabap.html abenabap\_reference.html abenbuilt\_in.html abenbuilt\_in\_types.html