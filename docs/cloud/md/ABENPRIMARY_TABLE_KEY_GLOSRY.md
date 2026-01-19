---
title: "ABENPRIMARY_TABLE_KEY_GLOSRY"
description: |
  ABENPRIMARY_TABLE_KEY_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENPRIMARY_TABLE_KEY_GLOSRY.htm"
abapFile: "ABENPRIMARY_TABLE_KEY_GLOSRY.html"
keywords: ["types", "internal-table", "ABENPRIMARY", "TABLE", "KEY", "GLOSRY"]
---

Each [internal table](ABENINTERNAL_TABLE_GLOSRY.html) has a primary [table key](ABENTABLE_KEY_GLOSRY.html) that is either a user-defined key or the [standard key](ABENSTANDARD_KEY_GLOSRY.html). In [hashed tables](ABENHASHED_TABLE_GLOSRY.html), the primary key is a [hash key](ABENHASH_KEY_GLOSRY.html) and in [sorted tables](ABENSORTED_TABLE_GLOSRY.html), the primary key is a [sorted key](ABENSORTED_KEY_GLOSRY.html). Both table types are [key tables](ABENKEY_TABLE_GLOSRY.html) for which key access is optimized, and the primary key thus has its own administration. The key fields of these tables are write-protected when individual lines are accessed. [Standard tables](ABENSTANDARD_TABLE_GLOSRY.html) also have a primary key, but the corresponding access is not optimized, there is no separate key administration, and the key fields are not write-protected.

[**\-> More about**](ABENITAB_KEY_PRIMARY.html)

ABENABALA\_GLOSSARY.html