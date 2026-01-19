---
title: "ABENITAB_EMPTY_KEY"
description: |
  ABENITAB_EMPTY_KEY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_EMPTY_KEY.htm"
abapFile: "ABENITAB_EMPTY_KEY.html"
keywords: ["select", "delete", "loop", "do", "if", "case", "data", "types", "internal-table", "ABENITAB", "EMPTY", "KEY"]
---

The [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) of a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) can be empty. An empty table key does not contain any key fields.

[Sorted keys](ABENSORTED_KEY_GLOSRY.html) and [hash keys](ABENHASH_KEY_GLOSRY.html) are never empty, regardless of whether they are primary or [secondary](ABENSECONDARY_KEY_GLOSRY.html).

An empty primary table key can be created as follows:

An empty primary table key can be used to handle a table like an array. This means that filling the table and other accesses take place in such a way that no order is based on key values. An empty internal table key can be used in all statements in which its implicit or explicit specification determines the order in which the internal table is accessed.

A prominent example is the statement [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html), where implicit or explicit use (using [`USING primary_key`](ABAPLOOP_AT_ITAB_COND.html)) defines the processing order with respect to the [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html), but has no other effect.

In the following statements, which work with the primary table key without specifying the key fields explicitly, the specification of an empty primary table key is critical and generally produces unexpected behavior. An empty table key that is known statically produces a syntax check warning.

The statements described above can be particularly unpredictable when using the [standard key](ABENITAB_STANDARD_KEY.html), which itself can be declared implicitly, to declare an empty internal table key.

Typical use of a table with an empty table key, in which the order of the lines should not change due to sorting. A `SORT source` statement would have no effect.

-   Explicitly, with the addition [`EMPTY KEY`](ABAPTYPES_PRIMARY_KEY.html) of the statements [`TYPES`](ABAPTYPES_PRIMARY_KEY.html), [`DATA`](ABAPDATA_PRIMARY_KEY.html), and so on or in the [ABAP Dictionary](ABENDDIC_TABLE_TYPES_TECH.html).
-   Explicitly, using an inline declaration [`INTO TABLE @DATA|@FINAL(itab)`](ABAPINTO_CLAUSE.html) in the statement `SELECT`
-   Implicitly, when using the [standard key](ABENITAB_STANDARD_KEY.html) if a structured line type does not contain any non-numeric elementary components or if an unstructured line type is table-like.

-   Developers should always be aware that they are handling an empty primary table key. This can only be achieved when the empty key is declared explicitly. An implicit declaration using the [standard key](ABENITAB_STANDARD_KEY.html), in which the line type determines whether the primary table key is empty or not, is not usually suitable.
-   Even with an empty primary key, a standard table has the order specified by the [primary index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html), which can be exploited in respective index accesses or loop processing.

-   Primary table key specification using a work area:

-   If [`FROM wa`](ABAPREAD_TABLE_KEY.html) is used to specify an empty table key for the statement [`READ TABLE`](ABAPREAD_TABLE.html), the first line of the internal table is read.
-   If [`FROM wa`](ABAPMODIFY_ITAB_SINGLE.html) is used to specify an empty table key for the statement [`MODIFY`](ABAPMODIFY_ITAB.html), the first line of the internal table is modified.
-   If [`FROM wa`](ABAPDELETE_ITAB_KEY.html) is used to specify an empty table key for the statement [`DELETE`](ABAPDELETE_ITAB.html), the first line of the internal table is deleted.

-   If the statement [`SORT itab`](ABAPSORT_ITAB.html) is executed without the addition `BY` and the primary table key is empty, the statement is ignored, which means no sorting takes place.
-   If the statement [`DELETE ADJACENT DUPLICATES`](ABAPDELETE_DUPLICATES.html) contains an empty primary table key, no lines are deleted.
-   If the primary table key is empty, the statement [`COLLECT`](ABAPCOLLECT.html) always compresses the first line of the internal table. In this case, all components of the line type must be numeric.

DATA source \\n TYPE STANDARD TABLE OF string \\n WITH EMPTY KEY. \\n\\ \\nREAD REPORT 'DEMO\_TAB\_EXP\_LINE' INTO source. \\n\\ \\ncl\_demo\_output=>display( source ). abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendobj\_itab.html abenitab\_key.html abenitab\_key\_primary.html