---
title: "ABENSORTED_KEY_GLOSRY"
description: |
  ABENSORTED_KEY_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSORTED_KEY_GLOSRY.htm"
abapFile: "ABENSORTED_KEY_GLOSRY.html"
keywords: ["data", "types", "internal-table", "ABENSORTED", "KEY", "GLOSRY"]
---

Unique or non-unique [table key](ABENTABLE_KEY_GLOSRY.html) of an [internal table](ABENINTERNAL_TABLE_GLOSRY.html), in which the assignment to the table lines is managed using a [table index](ABENTABLE_INDEX_GLOSRY.html), the key entries of which are sorted in ascending order. A sorted key is the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) of a [sorted table](ABENSORTED_TABLE_GLOSRY.html) and can be assigned to all internal tables as a [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html). Sorting occurs according to the [comparison rules](ABENLOGEXP_RULES.html) for the data types of the key fields. When an internal table is accessed using a sorted key, the response time logarithmically depends on the number of table entries because the table is accessed using a binary search.

ABENABALA\_GLOSSARY.html