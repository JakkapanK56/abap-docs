---
title: "ABAPTYPES_IMPLICIT"
description: |
  ABAPTYPES_IMPLICIT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPES_IMPLICIT.htm"
abapFile: "ABAPTYPES_IMPLICIT.html"
keywords: ["if", "class", "data", "types", "ABAPTYPES", "IMPLICIT"]
---

[Short Reference](ABAPTYPES_SHORTREF.html)

`TYPES \{ dtype \}\      |\ \{ dtype(len) \}\      |\ \{ dtype LENGTH len \}\      |\ \{ dtype TYPE c|n|p|x \}\      |\ \{ dtype(len) TYPE p\}\      |\ \{ dtype TYPE p LENGTH len\}\      |\ \{ dtype TYPE p DECIMALS dec\}.`

Obsolete short forms of the statement [`TYPES`](ABAPTYPES.html) with reference to a built-in elementary type [`abap_type`](ABAPTYPES_SIMPLE.html).

For reasons of readability, all additions should be specified completely.

Implicit type definition.

Explicit type definition.

-   If `TYPE abap_type` is not specified, the type is set implicitly to the standard type `c`.
-   If `len` or `dec` is not specified for the ABAP types `c`, `n`, `p`, and `x`, the length is set to the [type-friendly standard length](ABENBUILT_IN_TYPES_COMPLETE.html). No decimal places are set for `p`. This is only allowed outside of classes or interfaces.

TYPES: t1, \\n t2 TYPE p. TYPES: t1 TYPE c LENGTH 1, \\n t2 TYPE p LENGTH 8 DECIMALS 0. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abentypes\_data\_obsolete.html