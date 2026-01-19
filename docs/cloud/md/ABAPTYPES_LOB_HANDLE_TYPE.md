---
title: "ABAPTYPES_LOB_HANDLE_TYPE"
description: |
  ABAPTYPES_LOB_HANDLE_TYPE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPTYPES_LOB_HANDLE_TYPE.htm"
abapFile: "ABAPTYPES_LOB_HANDLE_TYPE.html"
keywords: ["if", "data", "types", "ABAPTYPES", "LOB", "HANDLE", "TYPE"]
---

`... \{ READER|LOCATOR|\{LOB HANDLE\}\ \}\      |\ \{ WRITER|LOCATOR \} ...`

These additions define the static type of the [LOB handle components](ABENLOB_HANDLE_COMPONENT_GLOSRY.html) when deriving a [LOB handle structure](ABENLOB_HANDLE_COMPONENT_GLOSRY.html) using the statement [`TYPES`](ABAPTYPES_LOB_HANDLE.html).

The additions `READER` and `WRITER` cannot be used together in the statement [`TYPES`](ABAPTYPES_LOB_HANDLE.html). Furthermore, `WRITER` cannot be used together with `LOB HANDLE`.

The combination options with the column specifications [`lob_handle_columns`](ABAPTYPES_LOB_HANDLE_COLUMNS.html) are explained in the statement [`TYPES`](ABAPTYPES_LOB_HANDLE.html).

Definition of various LOB-Handle components for the individual columns of a database table `DEMO_LOB_TABLE`.

[Deriving LOB Handle Structures](ABENTYPES_LOB_HANDLE_ABEXA.html)

-   The addition `READER` defines the following:

-   The static type `CL_ABAP_DB_X_READER` for [BLOBs](ABENBLOB_GLOSRY.html)
-   The static type `CL_ABAP_DB_C_READER` for [CLOBs](ABENCLOB_GLOSRY.html)

-   The addition `WRITER` defines the following:

-   The static type `CL_ABAP_DB_X_WRITER` for [BLOBs](ABENBLOB_GLOSRY.html)
-   The static type `CL_ABAP_DB_C_WRITER` for [CLOBs](ABENCLOB_GLOSRY.html)

-   The addition `LOCATOR` defines the following:

-   The static type `CL_ABAP_DB_X_LOCATOR` for [BLOBs](ABENBLOB_GLOSRY.html)
-   The static type `CL_ABAP_DB_C_LOCATOR` for [CLOBs](ABENCLOB_GLOSRY.html)

-   The addition `LOB HANDLE` defines the following:

-   The static type `IF_ABAP_DB_BLOB_HANDLE` for [BLOBs](ABENBLOB_GLOSRY.html)
-   The static type `IF_ABAP_DB_CLOB_HANDLE` for [CLOBs](ABENCLOB_GLOSRY.html)

TYPES lob\_handle TYPE demo\_lob\_table \\n READER FOR COLUMNS blob1 \\n LOCATOR FOR COLUMNS blob2 \\n LOB HANDLE FOR COLUMNS blob3. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html abaptypes\_lob\_handle.html