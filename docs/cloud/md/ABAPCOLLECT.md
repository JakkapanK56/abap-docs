---
title: "ABAPCOLLECT"
description: |
  ABAPCOLLECT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCOLLECT.htm"
abapFile: "ABAPCOLLECT.html"
keywords: ["select", "insert", "if", "case", "try", "catch", "data", "internal-table", "field-symbol", "ABAPCOLLECT"]
---

``COLLECT wa INTO itab [[`result`](ABAPCOLLECT_ITAB_RESULT.html)].``

This statement inserts the content of a work area `wa` either as a single line in an internal table `itab` or adds the values of its numeric components to the corresponding values of existing lines with the same [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html). `wa` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html).

[`result`](ABAPCOLLECT_ITAB_RESULT.html) can be used to set a reference to the inserted or changed line in the form of a field symbol or data reference.

Prerequisite for the use of this statement is that `wa` is [compatible](ABENCOMPATIBLE_GLOSRY.html) with the line type of `itab`. All components that are not part of the primary table key must have a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html).

The table is searched for a line with the same primary key as follows:

If no line is found with an identical primary key, a line is inserted as follows and filled with the content of `wa`:

If the internal table already contains one or more lines with an identical primary key, those values of the components of work area `wa` that are not part of the key are added to the corresponding components of the highest existing line (in the case of index tables, this is the line with the lowest primary table index).

An uncatchable exception is raised if a duplicate entry in a unique [secondary table key](ABENSECONDARY_TABLE_KEY_GLOSRY.html) were to be produced when the statement `COLLECT` is executed.

If the primary table key of a standard table is [empty](ABENITAB_EMPTY_KEY.html), all components of the line type must be numeric and the first line of the internal table is always compressed. If this is known, a syntax check warning occurs that can be hidden using a [pragma](ABENPRAGMA_GLOSRY.html).

The statement `COLLECT` sets `sy-tabix` for [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) and [sorted tables](ABENSORTED_TABLE_GLOSRY.html) to the line number of the inserted or existing line in the primary table index, and for [hashed tables](ABENHASHED_TABLE_GLOSRY.html) to the value 0.

Compressed insertion of data from the DDIC database table `SFLIGHT` into the internal table `seats_tab`. The lines in which the primary key components `carrid` and `connid` are identical are compressed by adding the number of occupied seats to the numeric component `seatsocc`.

`CX_SY_ARITHMETIC_OVERFLOW`

-   In [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) that are filled using `COLLECT` only, the entry is determined by temporary hash administration. The workload is independent of the number of entries in the table. The hash administration is temporary and is generally invalidated by writes to the table. If `COLLECT` statements are specified after an invalidation, a linear search of all table lines is performed. The workload for this search increases linearly in relation to the number of entries.
-   In [sorted tables](ABENSORTED_TABLE_GLOSRY.html), the entry is determined using a binary search. The workload depends logarithmically on the number of entries in the table.
-   In [hashed tables](ABENHASHED_TABLE_GLOSRY.html), the entry is determined using the hash administration of the table and is always independent of the number of table entries.

-   In standard tables, the line is appended as the last line of the primary table index.
-   In sorted tables, the new line is inserted in the sort order of the internal table in accordance with its key values, and the primary table index of the subsequent lines is increased by 1.
-   In hashed tables, the new line is inserted into the internal table by the hash administration, in accordance with its key values.

-   `COLLECT` should only be used if internal tables are to be created that are genuinely unique or compressed. In this case, `COLLECT` can greatly benefit performance. If uniqueness or compression are not required, or if uniqueness is guaranteed for other reasons, the statement [`INSERT`](ABAPINSERT_ITAB.html) should be used instead.
-   The statement `COLLECT` is not suitable for standard tables and should no longer be used for them. `COLLECT` can be used for sorted tables and hashed tables without any problems since these, unlike standard tables, always have their own stable key administration that can be exploited by `COLLECT`. When used for sorted tables, they should have a unique primary key or the table should be filled with `COLLECT` only. For hashed tables, all prerequisites are fulfilled automatically.
-   If a standard table is still filled using `COLLECT`, it should not be processed using any other statement than [`MODIFY`](ABAPMODIFY_ITAB.html). In the latter case, the addition `TRANSPORTING` ensures that no primary key fields can be changed. This is the only way to ensure that the table entries are always unique and compressed and that the statement `COLLECT` runs efficiently. The function module `ABL_TABLE_HASH_STATE` can be used to check whether a standard table is suitable for processing using `COLLECT`.

-   *Cause:* Overflow in integer field when creating totals
    *Runtime error:*\\ `COLLECT_OVERFLOW`
-   *Cause:* Overflow in type `p` field when creating totals
    *Runtime error:*\\ `COLLECT_OVERFLOW_TYPE_P`

DATA: BEGIN OF seats, \\n carrid TYPE sflight-carrid, \\n connid TYPE sflight-connid, \\n seatsocc TYPE sflight-seatsocc, \\n END OF seats. \\n\\ \\nDATA seats\_tab LIKE HASHED TABLE OF seats \\n WITH UNIQUE KEY carrid connid. \\n\\ \\nSELECT carrid, connid, seatsocc \\n FROM sflight \\n INTO @seats. \\n COLLECT seats INTO seats\_tab. \\nENDSELECT. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html