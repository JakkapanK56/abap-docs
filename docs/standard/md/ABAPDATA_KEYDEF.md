---
title: "ABAPDATA_KEYDEF"
description: |
  ABAPDATA_KEYDEF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDATA_KEYDEF.htm"
abapFile: "ABAPDATA_KEYDEF.html"
keywords: ["if", "data", "internal-table", "ABAPDATA", "KEYDEF"]
---

[Short Reference](ABAPDATA_SHORTREF.html)\\ \\n

``... [ WITH [`key`](ABAPDATA_PRIMARY_KEY.html)\ ]``\\ 
    ``[ WITH [`secondary_key1`](ABAPDATA_SECONDARY_KEY.html)\ ]\ [ WITH [`secondary_key2`](ABAPDATA_SECONDARY_KEY.html)\ ] ...``

Definition of the table keys of an internal table. The following can be defined:

Declaration of a [hashed table](ABENHASHED_TABLE_GLOSRY.html) with a unique primary key and two non-unique secondary [sorted keys](ABENSORTED_KEY_GLOSRY.html), `cityfrom_to` and `airp_from_to`.

-   A [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) using [`key`](ABAPDATA_PRIMARY_KEY.html).
-   Every internal table has a primary key. The primary key must be defined explicitly for [sorted tables](ABENSORTED_TABLE_GLOSRY.html) and [hashed tables](ABENHASHED_TABLE_GLOSRY.html). The specification for the primary key can only be omitted for [standard tables](ABENSTANDARD_TABLE_GLOSRY.html). The primary table key is then defined automatically as a non-unique [standard key](ABENSTANDARD_KEY_GLOSRY.html).
-   Multiple [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) with [`secondary_key1`](ABAPDATA_SECONDARY_KEY.html), [`secondary_key2`](ABAPDATA_SECONDARY_KEY.html), `...`
-   The specification of secondary keys is optional for all table categories. If no secondary key is specified, the internal table has only one primary key.

DATA spfli\_tab TYPE HASHED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid \\n WITH NON-UNIQUE SORTED KEY cityfrom\_to COMPONENTS cityfrom cityto \\n WITH NON-UNIQUE SORTED KEY airp\_from\_to COMPONENTS airpfrom airpto. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html abapdata\_itab.html