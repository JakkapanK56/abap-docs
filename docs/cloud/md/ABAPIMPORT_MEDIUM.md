---
title: "ABAPIMPORT_MEDIUM"
description: |
  ABAPIMPORT_MEDIUM - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPIMPORT_MEDIUM.htm"
abapFile: "ABAPIMPORT_MEDIUM.html"
keywords: ["if", "data", "types", "internal-table", "ABAPIMPORT", "MEDIUM"]
---

`... \{ DATA BUFFER xstr \}`\\ 
  `|\ \{ INTERNAL TABLE itab \}`\\ 
...

[1. `... DATA BUFFER xstr`](#ABAP_ALTERNATIVE_1@2@)

[2. `... INTERNAL TABLE itab`](#ABAP_ALTERNATIVE_2@2@)

The [data cluster](ABENDATA_CLUSTER_GLOSRY.html) to be imported can be taken from an elementary data object `xstr` or an internal table `itab`.

If `DATA BUFFER` is specified, the data cluster is taken from the elementary data object `xstr`, which must be of the type `xstring`. The data object must contain a data cluster that was created using the `DATA BUFFER` addition of the [`EXPORT`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) statement. Otherwise, a [runtime error](ABENRABAX_IMPORT_FROM_DATABASE.html) occurs. The data object must not be initial.

See the example for the addition [`DATA BUFFER`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) of the statement `EXPORT`.

If `INTERNAL TABLE` is specified, the data cluster is taken from the internal table `itab`. The first column of `itab` must have the data type [`s`](ABENBUILTIN_TYPES_NUMERIC.html) or [`i`](ABENBUILTIN_TYPES_NUMERIC.html) and the second column must have the type [`x`](ABENBUILTIN_TYPES_BYTE.html). The only table category allowed for `itab` are [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) without [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). The internal table must contain a data cluster created using the `INTERNAL TABLE` addition of the [`EXPORT`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) statement; otherwise, a [runtime error](ABENRABAX_IMPORT_FROM_DATABASE.html) occurs. The internal table must not be empty.

See the example for the addition [`INTERNAL TABLE`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) of the statement `EXPORT`.

abenabap.html abenabap\_reference.html abendata\_cluster.html abapimport\_data\_cluster.html