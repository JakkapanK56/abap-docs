---
title: "ABENDDIC_EXTEND_TYPE"
description: |
  ABENDDIC_EXTEND_TYPE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_EXTEND_TYPE.htm"
abapFile: "ABENDDIC_EXTEND_TYPE.html"
keywords: ["data", "ABENDDIC", "EXTEND", "TYPE"]
---

A DDIC structure or DDIC database table can be given a source-code-based extension known as an append structure in [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html). The source code of an append structure is not saved and transported. Instead, the source code of an existing append structure is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the append structure and saved to the system tables.

Each property of an append structure can be defined using either `EXTEND TYPE` or in the transaction `SE11`.

-   [`EXTEND TYPE`](ABENDDICDDL_EXTEND_TYPE.html)

abenabap.html abenabap\_dictionary.html abenddic\_enhancements.html abenddic\_append\_structures.html