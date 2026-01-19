---
title: "ABAPASSIGN_CASTING_OBSOLETE"
description: |
  ABAPASSIGN_CASTING_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPASSIGN_CASTING_OBSOLETE.htm"
abapFile: "ABAPASSIGN_CASTING_OBSOLETE.html"
keywords: ["do", "if", "case", "class", "data", "types", "field-symbol", "ABAPASSIGN", "CASTING", "OBSOLETE"]
---

[Short Reference](ABAPASSIGN_SHORTREF.html)

`... \{ TYPE name \}`\\ 
  `|\ \{\ [TYPE name] DECIMALS dec \} ...`

[1. `... TYPE name`](#ABAP_ADDITION_1@3@)

[2. `... DECIMALS dec`](#ABAP_ADDITION_2@3@)

This form of the addition [`casting_spec`](ABAPASSIGN_CASTING.html) of the statement [`ASSIGN`](ABAPASSIGN.html), in which `TYPE` or `DECIMALS` is specified without the addition `CASTING`, is not allowed in classes. Furthermore, it cannot be used at the same time as the statement `INCREMENT` in [`mem_area`](ABAPASSIGN_MEM_AREA.html) or with the addition [`RANGE`](ABAPASSIGN_RANGE.html). However, the field symbol can be typed using the addition [`STRUCTURE`](ABAPFIELD-SYMBOLS_OBSOLETE_TYPING.html) of the statement [`FIELD-SYMBOLS`](ABAPFIELD-SYMBOLS.html).

The addition [`ELSE UNASSIGN`](ABAPASSIGN_ELSE_UNASSIGN.html) cannot be used together with these obsolete additions of the `ASSIGN` statement.

After `TYPE`, a single character character-like data object `name` is expected, which must contain exactly one of the case-sensitive letters *C*, *D*, *F*, *I*, *N*, *P*, *T*, *X*, *b*, or *s* when the statement is executed. These letters label the respective built-in [ABAP types](ABENBUILTIN_DATA_TYPE_GLOSRY.html) and have the following effects:

The specification of the built-in types `b` and `s` using *b* or *s* is an exception to the rule that these cannot be specified in statements. It is only possible in these obsolete variants.

[Casting Built-In Data Types](ABENCASTING_OBSOLETE_TYPE_ABEXA.html)

A numeric data object `dec` must be specified after `DECIMALS`. For the [casting](ABENCAST_CASTING_GLOSRY.html), the data type `p` is used. Here, the number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) is determined by the content of `dec`. `TYPE` does not need to be specified for `DECIMALS`. If `TYPE` is specified, `name` must contain the data type *P*, which is used anyway.

[Casting Decimal Places](ABENCASTING_OBSOLETE_DEC_ABEXA.html)

-   If the field symbol `<fs>` is typed completely or in parts, the [typing](ABENTYPING_GLOSRY.html) must match the ABAP type specified after `TYPE`. The assigned memory area is cast to the type of the field symbol.
-   If the field symbol is typed completely generically, the type of the assigned memory area is cast to the ABAP type specified after `TYPE`.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenobsolete\_assignments.html