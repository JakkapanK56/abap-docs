---
title: "ABAPASSIGN_TABLE_FIELD"
description: |
  ABAPASSIGN_TABLE_FIELD - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPASSIGN_TABLE_FIELD.htm"
abapFile: "ABAPASSIGN_TABLE_FIELD.html"
keywords: ["do", "if", "case", "class", "data", "ABAPASSIGN", "TABLE", "FIELD"]
---

[Short Reference](ABAPASSIGN_SHORTREF.html)

`ASSIGN TABLE FIELD (name) TO <fs>.`

This variant of the [dynamic specification](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html) of the memory area in the statement [`ASSIGN`](ABAPASSIGN.html) is only possible outside of classes and without specifying [`casting_spec`](ABAPASSIGN_CASTING.html) and [`range_spec`](ABAPASSIGN_RANGE.html) explicitly. When executing the statement, the name in the character-like data object `name` is searched for in the [table work areas](ABENTABLE_WORK_AREA_GLOSRY.html) declared using [`TABLES`](ABAPTABLES.html) in the current [program group](ABENPROGRAM_GROUP_GLOSRY.html). The name in `name` must be specified in uppercase letters.

Neither inline declarations [`FIELD-SYMBOL`](ABENFIELD-SYMBOL_INLINE.html) nor the addition [`ELSE UNASSIGN`](ABAPASSIGN_ELSE_UNASSIGN.html) can be used in this obsolete variant of the `ASSIGN` statement.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenobsolete\_assignments.html