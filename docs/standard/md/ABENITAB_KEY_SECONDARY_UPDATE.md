---
title: "ABENITAB_KEY_SECONDARY_UPDATE"
description: |
  ABENITAB_KEY_SECONDARY_UPDATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_KEY_SECONDARY_UPDATE.htm"
abapFile: "ABENITAB_KEY_SECONDARY_UPDATE.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENITAB", "KEY", "SECONDARY", "UPDATE"]
---

For all statements that change the content and structure of an internal table, the internal administration of the secondary keys is updated automatically as follows:

The methods `FLUSH_ITAB_KEY` and `FLUSH_ITAB_KEYS` of the class `CL_ABAP_ITAB_UTILITIES` can be used to update individual secondary keys or all secondary keys of an internal table explicitly in exceptional circumstances. These methods can be used for analysis and test purposes. It might also make sense to use them after making changes if the next access does not take place immediately afterwards to handle possible exceptions there and then.

The example for [Deletion Using Table Keys](ABENDELETE_ITAB_USING_KEY_ABEXA.html) demonstrates the runtimes that are required to create the secondary key and when they occur.

-   For all operations that insert lines into tables or delete lines from tables, the secondary key administration for unique keys is updated immediately, that is, a unique secondary key is up-to-date immediately after the operation ([direct update](ABENDIRECT_UPDATE_GLOSRY.html)). Non-unique secondary table keys are not updated immediately and only when the secondary key is next used explicitly using `USING KEY` or `WITH KEY ... COMPONENTS` ([lazy update](ABENLAZY_UPDATE_GLOSRY.html)). If an update violates secondary key uniqueness, a [catchable exception or runtime error occurs](ABENITAB_KEY_DUPLICATES.html).
-   Inserting operations include table statements such as [`INSERT`](ABAPINSERT_ITAB.html) and [`APPEND`](ABAPAPPEND.html) and block operations in which the entire body of the table is filled at once, like for statements between internal tables, passing parameters to procedures, filling internal tables with `SELECT`, importing with [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html), and so on. The operation for deleting table lines is the table statement [`DELETE`](ABAPDELETE_ITAB.html).
-   For operations that change the components of secondary table keys in existing lines, the secondary key administration is either updated directly or only at a specified synchronization time.

-   If [`MODIFY`](ABAPMODIFY_ITAB.html) is used to modify individual lines, any unique secondary keys are updated directly ([direct update](ABENDIRECT_UPDATE_GLOSRY.html)). If the modification produces duplicate entries, an uncatchable exception is raised.
-   If field symbols or data references that point to table lines are used to modify individual lines, any unique secondary keys are updated the next time the internal table is accessed ([delayed update](ABENDELAYED_UPDATE_GLOSRY.html)). The uniqueness check also only takes place at the time of synchronization. An internal table can therefore be in an inconsistent state with respect to the secondary key following a modification to existing lines using field symbols or data references. The corresponding [exception](ABENITAB_KEY_DUPLICATES.html) is only raised when the table is next used.

-   In both cases, a non-unique key not updated until the secondary table key is next used explicitly ([lazy update](ABENLAZY_UPDATE_GLOSRY.html)).

abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendobj\_itab.html abenitab\_key.html abenitab\_key\_secondary.html