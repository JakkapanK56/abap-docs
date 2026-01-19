---
title: "ABENLAZY_UPDATE_GLOSRY"
description: |
  ABENLAZY_UPDATE_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLAZY_UPDATE_GLOSRY.htm"
abapFile: "ABENLAZY_UPDATE_GLOSRY.html"
keywords: ["insert", "update", "if", "data", "internal-table", "field-symbol", "ABENLAZY", "UPDATE", "GLOSRY"]
---

Procedure to create or update non-unique [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) in [internal tables](ABENINTERNAL_TABLE_GLOSRY.html). Non-unique secondary tables keys are not updated straight after insert operations using [`INSERT`](ABAPINSERT_ITAB.html) or [`APPEND`](ABAPAPPEND.html), a block operation in which the whole table body is filled at once, or after a modifying operation using [`MODIFY`](ABAPMODIFY_ITAB.html), [field symbols](ABENFIELD_SYMBOL_GLOSRY.html), or [data references](ABENDATA_REFERENCE_GLOSRY.html). They are updated at the next explicit usage. See also [direct update](ABENDIRECT_UPDATE_GLOSRY.html) and [delayed update](ABENDELAYED_UPDATE_GLOSRY.html).

[**\-> More about**](ABENITAB_KEY_SECONDARY_UPDATE.html)

ABENABALA\_GLOSSARY.html