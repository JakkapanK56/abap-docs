---
title: "ABAPDATA_SIMPLE"
description: |
  ABAPDATA_SIMPLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDATA_SIMPLE.htm"
abapFile: "ABAPDATA_SIMPLE.html"
keywords: ["if", "data", "types", "ABAPDATA", "SIMPLE"]
---

[Short Reference](ABAPDATA_SHORTREF.html)

`DATA \{\ \{var[(len)] TYPE abap_type [DECIMALS dec]\}`\\ 
     `|\ \{var [TYPE abap_type [LENGTH len]\ [DECIMALS dec]]\}\ \}`\\ 
     ``[`[VALUE val|\{IS INITIAL\}]`](ABAPDATA_OPTIONS.html)``\\ 
     ``[`[READ-ONLY]`](ABAPDATA_OPTIONS.html).``

By specifying a [built-in data type](ABENBUILTIN_DATA_TYPE_GLOSRY.html)\\ `abap_type`, an elementary variable `var` is defined. For `abap_type`, all [built-in data types](ABENBUILTIN_ABAP_TYPE_GLOSRY.html) can be used, except for the internal types `b` and `s`.

The syntax and meaning of `LENGTH`, `len`, `DECIMALS`, and `dec` are identical to the definition of elementary data types using [`TYPES`](ABAPTYPES_SIMPLE.html) and must be specified within the specified [areas](ABENBUILT_IN_TYPES_COMPLETE.html). Here, however, they are used to create a bound data type. If `len` or `dec` are not specified for the ABAP types `c`, `n`, `p`, and `x`, the bound type is created using the [type-specific standard length](ABENBUILT_IN_TYPES_COMPLETE.html) and, for `p`, without decimal places.

These statements declare three variables and set their start values.

-   For reasons of legibility, it is best to include all information and always use the addition `LENGTH` instead of parentheses to specify the length `len`.
-   The non-specifiable internal types `b` and `s` can be applied by referencing the built-in data types [`INT1`](ABENDDIC_BUILTIN_TYPES.html) and [`INT2`](ABENDDIC_BUILTIN_TYPES.html) from the ABAP Dictionary.
-   A data type that is constructed with the statement `DATA` is a [bound data type](ABENBOUND_DATA_TYPE_GLOSRY.html) that only exists as a property of the data object. It has a [technical type name](ABENTECHNICAL_TYPE_NAME_GLOSRY.html), that can be retrieved as part of an [absolute type name](ABENABSOLUTE_TYPENAME_GLOSRY.html) by [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html).

DATA: text TYPE string VALUE \`Text\`, \\n count TYPE i VALUE 1, \\n price TYPE p LENGTH 8 DECIMALS 2 VALUE '1.99'. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html