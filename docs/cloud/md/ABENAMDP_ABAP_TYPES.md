---
title: "ABENAMDP_ABAP_TYPES"
description: |
  ABENAMDP_ABAP_TYPES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENAMDP_ABAP_TYPES.htm"
abapFile: "ABENAMDP_ABAP_TYPES.html"
keywords: ["if", "case", "method", "class", "data", "types", "ABENAMDP", "ABAP", "TYPES"]
---

`... "$ABAP.type( [name =] abap_type )" ...`

Specifies the predefined [AMDP macro](ABENAMDP_MACRO_GLOSRY.html)\\ `$ABAP.type` for an ABAP type.

In an AMDP method implemented in SQLScript, the AMDP macro `$ABAP.type` can be used to access the ABAP type `abap_type`. For `abap_type`, all [elementary](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) non-[generic](ABENGENERIC_DATA_TYPE_GLOSRY.html) types can be specified that would be possible after a `TYPE` addition in an ABAP implementation of the method. These are as follows:

The ABAP runtime framework replaces this expression in accordance with the rules specified in the [mapping tables](ABENAMDP_HDB_SQLSCRIPT_MAPPING.html) with the corresponding HANA type. `abap_type` is not case-sensitive.

[Access to ABAP Types](ABENAMDP_ABAP_TYPES_CS_ABEXA.html)

-   The [built-in ABAP types](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `i`, `int8`, `decfloat16`, `decfloat34`, `f`, `string`, `xstring`, `d` and `t`.
-   All elementary types that are defined with [`TYPES`](ABAPTYPES.html) and that are visible at this place. These can be types of the own class, a different class or an interface.
-   All elementary types defined in the [ABAP Dictionary](ABENABAP_DICTIONARY.html), such as data elements or elementary components of structured types.

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_macros.html