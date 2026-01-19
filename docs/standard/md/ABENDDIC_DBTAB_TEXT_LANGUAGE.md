---
title: "ABENDDIC_DBTAB_TEXT_LANGUAGE"
description: |
  ABENDDIC_DBTAB_TEXT_LANGUAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DBTAB_TEXT_LANGUAGE.htm"
abapFile: "ABENDDIC_DBTAB_TEXT_LANGUAGE.html"
keywords: ["data", "types", "ABENDDIC", "DBTAB", "TEXT", "LANGUAGE"]
---

One field of type [`LANG`](ABENDDIC_BUILTIN_TYPES.html#@@ITOC@@ABENDDIC_BUILTIN_TYPES_7) (language key) can be labeled as the [text language](ABENTEXT_LANGUAGE_GLOSRY.html) of a DDIC database table.

The text language is used when structured data of this type is passed between [MDMP systems](ABENMDMP-SYSTEM_GLOSRY.html) and [Unicode systems](ABENUNICODE_SYSTEM_GLOSRY.html) for the conversion of character-like components in the following situations:

Furthermore, the text language can affect which lines of a database table are transported by the [Change and Transport System](ABENCTS_GLOSRY.html). Depending on settings in the CTS, only entries in the original language of the database table can be transported.

-   Import of data from [data clusters](ABENDATA_CLUSTER_GLOSRY.html), see [`IMPORT`, Text Language Rule](ABENIMPORT_TEXT_LANGUAGE.html)
-   Passing `TABLES` parameters to [RFMs](ABENRFM_GLOSRY.html) with the binary [RFC protocol](ABENRFC_PROTOCOL.html).

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_sema.html abenddic\_database\_tables\_semasspec.html