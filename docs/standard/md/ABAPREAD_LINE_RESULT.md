---
title: "ABAPREAD_LINE_RESULT"
description: |
  ABAPREAD_LINE_RESULT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_LINE_RESULT.htm"
abapFile: "ABAPREAD_LINE_RESULT.html"
keywords: ["do", "if", "data", "types", "field-symbol", "ABAPREAD", "LINE", "RESULT"]
---

[Short Reference](ABAPREAD_LINE_SHORTREF.html)

`... [LINE VALUE INTO wa]\      [FIELD VALUE dobj1 [INTO wa1] dobj2 [INTO wa2] ...].`

[1. `... LINE VALUE INTO wa`](#ABAP_ADDITION_1@3@)

[2. `... FIELD VALUE dobj1 [INTO wa1] dobj2 [INTO wa2] ...`](#ABAP_ADDITION_2@3@)

Specifies target fields for `READ LINE`.

The addition `LINE VALUE` assigns the formatted content of the complete list line in the list buffer to the data object `wa`.

The addition `FIELD VALUE` assigns the output areas of individual data objects `dobj1 dobj2...` that have been output to the list buffer to these data objects, or, if specified, to the data objects `wa1 wa2 ...`. `wa` or `wa1 wa2 ...` expects data objects whose data type is covered by the generic type [`simple`](ABENBUILT_IN_TYPES_GENERIC.html), except for [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html). The list line or data objects `dobj1 dobj2 ...` are handled as if they have the data type `c`, which means that trailing blanks are ignored.

If identically named data objects `dobj1 dobj2...` appear more than once in a line, only the first object is read. If a data object `dobj1 dobj2 ...` does not exist at all, the specification is ignored.

If the output area of a data object addressed in the [`WRITE`](ABAPWRITE-.html) statement using a field symbol is to be read, and the same data object is no longer assigned to the field symbol, the name of the data object must be specified and not the name of the field symbol.

-   No [conversion exit](ABENCONVERSION_EXIT_GLOSRY.html) is executed when an output area is read.
-   The content of the line or of the individual output areas in the list is character-like and formatted according to the rules for the `WRITE` statement. When the read line or an area is assigned to a data object, the conversion rules apply in the same way as to a [source field of type `c`](ABENCONVERSION_TYPE_C.html). This can cause problems with the target fields `dobj1 dob ...` or `war war ...`, particularly if these fields are numeric and the output contains separators. Due to this, use of `READ LINE` is mainly recommended for the evaluation of fields that are ready for input. For other evaluations, [`HIDE`](ABAPHIDE.html) can be used to save values in a type-compliant way.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_complex.html abapread\_line.html