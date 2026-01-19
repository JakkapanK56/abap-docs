---
title: "ABENITAB_KEY_SECONDARY"
description: |
  ABENITAB_KEY_SECONDARY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENITAB_KEY_SECONDARY.htm"
abapFile: "ABENITAB_KEY_SECONDARY.html"
keywords: ["select", "insert", "delete", "loop", "do", "if", "data", "types", "internal-table", "ABENITAB", "KEY", "SECONDARY"]
---

[Hash keys](ABENHASH_KEY_GLOSRY.html) and [sorted keys](ABENSORTED_KEY_GLOSRY.html) can be declared as [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) for each internal table. For each sorted key, an additional [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html) is created.

Access to an internal table using a secondary key is always optimized. This allows additional optimized keys to be introduced for sorted and hashed tables as well as optimized key accesses for standard tables.

The key fields of a secondary table key are only write-protected if the secondary table key is in use within a `LOOP` or a `MODIFY` statement. Otherwise, the secondary key fields are not write-protected.

[Secondary Key](ABENSECONDARY_KEY_GUIDL.html)

Declaration of a hashed table with a unique primary key and a non-unique sorted secondary key `cities`. The table is filled with data from a database table and accessed using a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html) with values specified for the secondary key. The first line found is read.

-   Declaration of Secondary Table Keys
-   For data types declared in ABAP programs, a secondary table is declared using the additions [`UNIQUE|NON-UNIQUE KEY key_name COMPONENTS`](ABAPTYPES_SECONDARY_KEY.html) of the statements [`TYPES`](ABAPTYPES_SECONDARY_KEY.html), [`DATA`](ABAPDATA_SECONDARY_KEY.html), and so on. The ABAP Dictionary provides corresponding functions for the table types created in the tool.
-   Access Using Secondary Keys
-   In key accesses to internal tables, the addition `WITH [TABLE] KEY key_name` can be used in [processing statements](ABENTABLE_PROCESSING_STATEMENTS.html) to specify which secondary table key to use. In index accesses, the specification `USING KEY keyname` can be used to specify the [table index](ABENTABLE_INDEX_GLOSRY.html) of which secondary key to use. In [table expressions](ABENTABLE_EXPRESSIONS.html), this is specified using the addition [`KEY`](ABENTABLE_EXP_ITAB_LINE.html). Secondary keys are not selected automatically. If no secondary key is specified in a processing statement, the primary key or primary table index is always used. If no explicit key is specified for a table expression, a [free search key](ABAPREAD_TABLE_FREE.html) is used to perform reads.
-   Statements where secondary keys can be specified are:

-   [`READ TABLE itab`](ABAPREAD_TABLE.html)
-   The lines to be read can be specified using a secondary key.
-   [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html)
-   The processing sequence and conditions can be controlled using a secondary table key.
-   [`INSERT itab`](ABAPINSERT_ITAB.html)
-   Only a secondary key for the source table can be specified here, from which multiple lines are copied. The insertion position is determined solely using the primary key and the primary index.
-   [`APPEND`](ABAPAPPEND.html)
-   Only a secondary key for the source table can be specified here, onto which multiple lines are appended.
-   [`MODIFY itab`](ABAPMODIFY_ITAB.html)
-   The lines to be modified can be specified using a secondary key.
-   [`DELETE itab`](ABAPDELETE_ITAB.html)
-   The lines to be deleted can be specified using a secondary key.
-   [`TYPES ... ASSOCIATION`](ABAPTYPES_MESH_ASSOCIATION.html), [`\\_assoc[ ... ]`](ABENMESH_PATH_ASSOC_COND.html)
-   The secondary key used in the evaluation of a [mesh path](ABENMESH_PATH_GLOSRY.html) can be specified using `USING KEY`.

-   If the system field `sy-tabix` is set in this type of access, and a sorted secondary key is used, the line number refers to the associated [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html). In statements that have not been enhanced by these additions, like [`SORT`](ABAPSORT_ITAB.html), [`COLLECT`](ABAPCOLLECT.html), or [`PROVIDE`](ABAPPROVIDE.html), secondary keys are not explicitly supported.

-   Optimized access times to the individual lines using secondary keys are [bought](ABENITAB_KEY_MEMORY.html) in exchange for the fact that the ABAP runtime framework then needs to administer the additional keys. For hash keys, this means additional hash administration and an additional [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html) for each sorted key.
-   When working with internal tables for which a secondary key is declared, it must be ensured that the required key or table index is used in the processing statements.

DATA cityfrom TYPE spfli-cityfrom VALUE 'FRANKFURT'. \\ncl\_demo\_input=>add\_field( CHANGING field = cityfrom ). \\nDATA cityto TYPE spfli-cityto VALUE 'NEW YORK'. \\ncl\_demo\_input=>request( CHANGING field = cityto ). \\n\\ \\nDATA spfli\_tab \\n TYPE HASHED TABLE OF spfli \\n WITH UNIQUE KEY primary\_key COMPONENTS carrid connid \\n WITH NON-UNIQUE SORTED KEY cities COMPONENTS cityfrom cityto. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @spfli\_tab. \\n\\ \\ncl\_demo\_output=>display( \\n VALUE #( spfli\_tab\[ KEY cities \\n cityfrom = cityfrom \\n cityto = cityto \] OPTIONAL ) ). abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendobj\_itab.html abenitab\_key.html