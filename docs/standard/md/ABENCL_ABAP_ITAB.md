---
title: "ABENCL_ABAP_ITAB"
description: |
  ABENCL_ABAP_ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_ABAP_ITAB.htm"
abapFile: "ABENCL_ABAP_ITAB.html"
keywords: ["update", "do", "if", "method", "class", "data", "internal-table", "ABENCL", "ABAP", "ITAB"]
---

The class `CL_ABAP_ITAB_UTILITIES` contains the following methods:

-   `FLUSH_ITAB_KEY` and `FLUSH_ITAB_KEYS` can be used to update individual [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) or all secondary table keys of an internal table explicitly. Otherwise the update takes place as a [delayed](ABENDELAYED_UPDATE_GLOSRY.html) or [lazy update](ABENLAZY_UPDATE_GLOSRY.html).
-   `READ_BINARY_SEARCH_CHECK` can be used with the addition [`BINARY SEARCH`](ABAPREAD_TABLE_FREE.html) to activate checks on the required sort for test purposes. If the required sort does not exist, the runtime error `ITAB_ILLEGAL_ORDER` occurs when the check is activated.
-   `HAS_COLLECT_HASH_ADMIN` can be used to check whether the temporary hash administration of the statement [`COLLECT`](ABAPCOLLECT.html) exists for a standard table.
-   `INDEX_HEALTH_CHECK` can be used to check the consistency of [primary](ABENPRIMARY_TABLE_INDEX_GLOSRY.html) and [secondary table indexes](ABENSECONDARY_TABLE_INDEX_GLOSRY.html).
-   `VIRTUAL_SORT` can be used to perform virtual sorts on a set of internal tables with the same number of lines. The internal tables are handled internally like a single combined table containing all the columns of the involved internal tables. The result is an array of line numbers of the virtually sorted combined table. See the corresponding [executable examples](ABENVIRTUAL_SORT_ABEXAS.html).

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abenitab\_system\_classes.html