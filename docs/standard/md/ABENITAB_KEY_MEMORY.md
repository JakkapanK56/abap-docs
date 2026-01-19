---
title: "ABENITAB_KEY_MEMORY"
description: |
  ABENITAB_KEY_MEMORY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_KEY_MEMORY.htm"
abapFile: "ABENITAB_KEY_MEMORY.html"
keywords: ["update", "delete", "do", "if", "case", "data", "types", "internal-table", "ABENITAB", "KEY", "MEMORY"]
---

In addition to the basic memory requirement specified in [Memory Requirement for Deep Data Objects](ABENMEMORY_CONSUMPTION_1.html), which is created to administrate internal tables in table headers, additional memory is required for administrating each individual line, so allowing optimized access to the individual lines. This internal administration of individual lines has two variants:

How a table line is administrated depends on the [table category](ABENTABLE_CATEGORY_GLOSRY.html) and any existing [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). The table category determines the basic administration of the lines of an internal table (table index for [index tables](ABENINDEX_TABLE_GLOSRY.html), hash administration for [hashed tables](ABENHASHED_TABLE_GLOSRY.html)). Each additional secondary table key introduces additional line administration (table index for [sorted keys](ABENSORTED_KEY_GLOSRY.html), hash administration for [hash keys](ABENHASH_KEY_GLOSRY.html)).

Indexes are therefore created in the following cases:

Hash administrations are created in the following cases:

If secondary table keys are used, additional memory costs may be incurred.

-   A [table index](ABENTABLE_INDEX_GLOSRY.html) administrates the logical order of table lines. The additional memory requirement is 6 bytes per table line on average. **Exception:** If the logical order matches the physical order in the table body, no additional memory is required for the index.
-   [Hash administration](ABENHASH_ALGORITHM_GLOSRY.html) is used to access table lines to be accessed by hashing the associated key components. The additional memory requirement is 18 bytes per table line on average, as long as the table is not accessed using the [`DELETE`](ABAPDELETE_ITAB.html) or [`SORT`](ABAPSORT_ITAB.html) statements. Following this type of access, an average of 30 bytes is required per table line.

-   As the [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html) of a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) for managing the order created by index operations. However, the order in the index has no relation to the content of the table lines. The index is only for the optimization of index accesses. Content searches cannot be optimized and always lead to a linear search across all table lines.
-   As the [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html) of a sorted table or as the [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html) of a sorted secondary table of any table for managing the order of table lines in accordance with the sorted primary or secondary table key. The order of table lines is determined by the view of the table lines defined by the sorted table keys. This defines an order for the lines of the table that can be used for optimized access by the binary search.

-   For the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) of a hashed table or for a secondary [hash key](ABENHASH_KEY_GLOSRY.html) of any other table. They do not allow index access. They can only be used for optimized access with a completely specified table key.

-   An internal table with at least one ambiguous sorted secondary key needs an additional 8 bytes per table line for the basic costs to administrate possible duplicates. These additional basic costs are incurred only once and not for each table key.
-   Additional memory costs are incurred if a secondary key must be updated following a change to the content of the internal table. These vary in size from a few bytes per table line and depend heavily on the number of changes made.

-   A standard table with a secondary hash key that is exclusively filled with [`APPEND`](ABAPAPPEND.html) requires:

-   No additional memory for the primary index since the logical and physical orders are the same
-   18 bytes per line for the hash administration of the secondary key

-   Following an access using [`DELETE`](ABAPDELETE_ITAB.html) or [`SORT`](ABAPSORT_ITAB.html), the memory requirement per line increases to 6 bytes for the primary index and 30 bytes for the hash administration.
-   A sorted table with a secondary hash key and two non-unique sorted secondary keys requires:

-   6 bytes per line for the primary index
-   18 or 30 bytes per line for the hash administration of the secondary hash key
-   6 bytes per line and key for the sorted secondary key from the moment from which it is used
-   8 bytes per line because there is at least one non-unique sorted secondary key.

abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendobj\_itab.html