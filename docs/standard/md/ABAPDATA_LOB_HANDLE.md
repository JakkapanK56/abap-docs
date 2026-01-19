---
title: "ABAPDATA_LOB_HANDLE"
description: |
  ABAPDATA_LOB_HANDLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDATA_LOB_HANDLE.htm"
abapFile: "ABAPDATA_LOB_HANDLE.html"
keywords: ["if", "data", "types", "ABAPDATA", "LOB", "HANDLE"]
---

[Short Reference](ABAPDATA_SHORTREF.html)

``DATA dtype TYPE dbtab|view [[`READ-ONLY`](ABAPDATA_OPTIONS.html)]\                  [`lob_handle_type`](ABAPTYPES_LOB_HANDLE_TYPE.html) FOR [`lob_handle_columns`](ABAPTYPES_LOB_HANDLE_COLUMNS.html)\                 [[`lob_handle_type`](ABAPTYPES_LOB_HANDLE_TYPE.html) FOR [`lob_handle_columns`](ABAPTYPES_LOB_HANDLE_COLUMNS.html)\                  ...                                   ].``

Derivation of a [LOB handle structure](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html) as a work area for working with [streaming and locators in ABAP SQL](ABENSTREAMS_LOCATORS.html). `dbtab` expects a transparent [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) or a [DDIC database view](ABENDATABASE_VIEW_GLOSRY.html) defined for `view` in the ABAP Dictionary.

The column specification [`lob_handle_columns`](ABAPTYPES_LOB_HANDLE_COLUMNS.html) is used to determine [LOBs](ABENLOB_GLOSRY.html) from `dbtab` or `view` for which [LOB handle components](ABENLOB_HANDLE_COMPONENT_GLOSRY.html) are created in that structure whose static type is determined by the type specification [`lob_handle_type`](ABAPTYPES_LOB_HANDLE_TYPE.html).

The syntax and meaning of the additions are identical to the definition of LOB handle structures using the corresponding variant of the statement [`TYPES`](ABAPTYPES_LOB_HANDLE.html).

Declaration of work areas with LOB handle components for a writer stream and a reader stream for the column `PICTURE` and for locators for all LOBs of the DDIC database table `DEMO_BLOB_TABLE`.

DATA wa1 TYPE demo\_blob\_table WRITER FOR COLUMNS picture. \\nDATA wa2 TYPE demo\_blob\_table READER FOR COLUMNS picture. \\nDATA wa3 TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html