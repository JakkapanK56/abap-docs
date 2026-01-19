---
title: "ABENDDIC_DEFINE_TABLE"
description: |
  ABENDDIC_DEFINE_TABLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DEFINE_TABLE.htm"
abapFile: "ABENDDIC_DEFINE_TABLE.html"
keywords: ["if", "data", "ABENDDIC", "DEFINE", "TABLE"]
---

A DDIC database table can be displayed and modified in a source-code-based editor in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html), using [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html). The source code of a DDIC database table is not saved and transported. Instead, the source code of an existing DDIC database table is generated from the metadata of the associated system tables. Conversely, when saved, the metadata is derived directly from the source code and saved to the system tables.

All properties of a DDIC database table can be defined in ADT using Dictionary DDL or in transaction `SE11`, with the following exceptions. The [technical properties](ABENDDIC_DATABASE_TABLES_TECHSPEC.html), which are activated and transported separately from the DDIC database table, and [secondary indexes](ABENDDIC_DATABASE_TABLES_INDEX.html) cannot be defined using the Dictionary DDL:

-   [`DEFINE TABLE`](ABENDDICDDL_DEFINE_TABLE.html)

-   The [standalone table-specific technical properties of DDIC database tables](ABENDDIC_DATABASE_TABLES_TECHSPEC.html) can be maintained in a form-based tool in ADT.
-   [Secondary indexes](ABENDDIC_DATABASE_TABLES_INDEX.html) can be edited in a form-based tool in ADT.
-   [Extensibility annotations](ABENDDICDDL_DEFINE_EXT_ANNOS.html), which are a prerequisite for [C0 release](ABENC0_CONTRACT_GLOSRY.html), can be maintained only in ADT.

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html