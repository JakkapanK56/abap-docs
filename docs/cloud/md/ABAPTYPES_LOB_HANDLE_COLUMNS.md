---
title: "ABAPTYPES_LOB_HANDLE_COLUMNS"
description: |
  ABAPTYPES_LOB_HANDLE_COLUMNS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPTYPES_LOB_HANDLE_COLUMNS.htm"
abapFile: "ABAPTYPES_LOB_HANDLE_COLUMNS.html"
keywords: ["if", "data", "types", "ABAPTYPES", "LOB", "HANDLE", "COLUMNS"]
---

`... \{ COLUMNS blob1 blob2 ... clob1 clob2 ... \}\      |\ \{ ALL [OTHER]\ [BLOB|CLOB] COLUMNS \} ...`

These additions define which columns of the database table or the view `dbtab` are declared as [LOB handle components](ABENLOB_HANDLE_COMPONENT_GLOSRY.html) when deriving a [LOB handle structure](ABENLOB_HANDLE_COMPONENT_GLOSRY.html) using the statement [`TYPES`](ABAPTYPES_LOB_HANDLE.html).

No other columns can be specified in the statement [`TYPES`](ABAPTYPES_LOB_HANDLE.html) after the column specification `ALL OTHER ...`

The combination options of the column specifications with each other below and with the types specified using [`lob_handle_type`](ABAPTYPES_LOB_HANDLE_TYPE.html) are explained in the statement [`TYPES`](ABAPTYPES_LOB_HANDLE.html).

Columns of the data type [`GEOM_EWKB`](ABENDDIC_BUILTIN_TYPES.html) are not supported as [BLOBs](ABENBLOB_GLOSRY.html).

Demonstration of various column specifications in the definition of LOB-Handle components.

[Deriving LOB Handle Structures](ABENTYPES_LOB_HANDLE_ABEXA.html)

-   `COLUMNS blob1 blob2 ... clob1 clob2 ...`
-   specifies individual [BLOBs](ABENBLOB_GLOSRY.html)\\ `blob1`, `blob2`, ... or [CLOBs](ABENCLOB_GLOSRY.html)\\ `clob1`, `clob2`, ... These must exist in `dbtab`.
-   `ALL OTHER BLOB|CLOB COLUMNS`
-   This specifies all [BLOBs](ABENBLOB_GLOSRY.html) or [CLOBs](ABENCLOB_GLOSRY.html) in `dbtab` that are not covered when individual columns are specified. In the statement [`TYPES`](ABAPTYPES_LOB_HANDLE.html), at least one individual column `blob` or `clob` must be specified using `COLUMNS ...`
-   `ALL BLOB|CLOB COLUMNS`
-   specifies all [BLOBs](ABENBLOB_GLOSRY.html) or [CLOBs](ABENCLOB_GLOSRY.html) of `dbtab`.
-   `ALL OTHER COLUMNS`
-   This specifies all [LOBs](ABENLOB_GLOSRY.html) in `dbtab` that are not covered when individual columns are specified. In the statement [`TYPES`](ABAPTYPES_LOB_HANDLE.html), at least one individual column must be specified using `COLUMNS ...`
-   `ALL COLUMNS`
-   This specifies all [LOBs](ABENLOB_GLOSRY.html) in `dbtab`.

TYPES lob\_handle TYPE demo\_lob\_table \\n READER FOR COLUMNS clob1 clob2 \\n LOB HANDLE FOR ALL BLOB COLUMNS \\n LOCATOR FOR ALL OTHER CLOB COLUMNS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html abaptypes\_lob\_handle.html