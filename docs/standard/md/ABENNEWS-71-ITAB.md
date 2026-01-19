---
title: "ABENNEWS-71-ITAB"
description: |
  ABENNEWS-71-ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-71-ITAB.htm"
abapFile: "ABENNEWS-71-ITAB.html"
keywords: ["select", "insert", "update", "delete", "loop", "while", "if", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENNEWS", "ITAB"]
---

[1. Dynamic `WHERE` Condition](#ABAP_MODIFICATION_1@4@) 

[2\. Definition of Secondary Table Keys](#ABAP_MODIFICATION_2@4@)

[3\. Using Secondary Keys](#ABAP_MODIFICATION_3@4@)

[4\. Updating Secondary Keys](#ABAP_MODIFICATION_4@4@)

[5\. Streaming for Internal Tables](#ABAP_MODIFICATION_5@4@)

From ABAP release 7.0, EhP2, the statements [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html), [`MODIFY itab`](ABAPMODIFY_ITAB.html), and [`DELETE itab`](ABAPDELETE_ITAB.html) make it possible to specify the [`WHERE`](ABAPLOOP_AT_ITAB_COND.html) condition in a `cond_syntax` data object dynamically.

Previously, each internal table had just one [table key](ABENTABLE_KEY_GLOSRY.html). Any search key could be entered when accessing internal tables, but this was not very efficient. Also, standard tables were always searched linearly during key access. To be able to efficiently access an internal table with different keys, and to also allow efficient key access to standard tables, secondary table keys were introduced.

From ABAP release 7.0, EhP2, [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) can be defined for internal tables with [`TYPES`](ABAPTYPES_KEYDEF.html) and [`DATA`](ABAPDATA_KEYDEF.html) as well as in ABAP Dictionary. An internal table can have up to 15 secondary table keys with different names. At the same time, what was previously the table key became the primary table key, and a predefined name for it, `primary_key`, was introduced. This can be replaced with an alias name in the [enhanced definition](ABAPTYPES_PRIMARY_KEY.html) of the primary table key in ABAP release 7.0, EhP2.

Secondary table keys can be [hash keys](ABENHASH_KEY_GLOSRY.html) or [sorted keys](ABENSORTED_KEY_GLOSRY.html). A [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html) is created for each sorted secondary key of an internal table. The previous table index, which exists only for index tables, becomes the [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html).

Secondary table keys are part of the [technical type properties](ABENTECHNICAL_TYPE_PRPT_GLOSRY.html) of an internal table. Secondary keys can be specified generically for standalone table types.

The following additions have been introduced for statements that access lines of internal tables:

`keyname` can be used to specify the name of the key to be used statically or dynamically.

At the same time, statements that previously only accessed the primary key have been enhanced so that access to secondary keys is also possible. The table index used can now also be specified explicitly using a table key when indexes are specified. The system field `sy-tabix` is now filled with reference to the table index used. It is set to 0 for access using a hash key.

The enhanced statements are:

In statements where these additions have not been introduced, such as [`SORT`](ABAPSORT_ITAB.html), [`COLLECT`](ABAPCOLLECT.html), or [`PROVIDE`](ABAPPROVIDE.html), secondary keys are not explicitly supported.

In all statements that change the content or structure of an internal table, the internal administration of the secondary table key (hash administration or secondary table index) is updated automatically as follows:

Class `CL_ABAP_ITAB_UTILITIES` contains methods that can be used to update single secondary keys or all secondary keys for an internal table in exceptional situations.

The new [streaming](ABENSTREAMING_GLOSRY.html) concept supports [internal tables](ABENITAB_STREAMS.html).

-   `WITH [TABLE] KEY keyname COMPONENTS ...`
-   `USING KEY keyname`

-   [`READ TABLE itab`](ABAPREAD_TABLE.html)
-   The lines to be read can be specified using a secondary key.
-   [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html)
-   The processing sequence and conditions can be controlled using a secondary table key.
-   [`INSERT itab`](ABAPINSERT_ITAB.html)
-   Only a secondary key for the source table can be specified here, from which multiple lines are copied. The position they are inserted at is determined solely using the primary key and the primary index.
-   [`APPEND`](ABAPAPPEND.html)
-   Only a secondary key for the source table can be specified here, onto which multiple lines are appended.
-   [`MODIFY itab`](ABAPMODIFY_ITAB.html)
-   The lines to be modified can be specified using a secondary key.
-   [`DELETE itab`](ABAPDELETE_ITAB.html)
-   The lines to be deleted can be specified using a secondary key.

-   In inserting operations, such as `INSERT` or `APPEND`, and in change operations using `MODIFY`, the secondary table key administration of unique keys is updated immediately ([direct update](ABENDIRECT_UPDATE_GLOSRY.html)), while for non-unique table keys it is updated upon the next explicit use of the secondary table key ([lazy update](ABENLAZY_UPDATE_GLOSRY.html)). If an update infringes the uniqueness of a secondary key, an exception is raised immediately.
-   For block operations, such as statements between internal tables, or when internal tables are filled using `SELECT`, the behavior is the same as with inserting operations.
-   When individual lines are modified using field symbols or data references that point to table lines, the secondary key administration of unique keys is updated upon the next access to the internal table ([delayed update](ABENDELAYED_UPDATE_GLOSRY.html)), and the secondary key administration of non-unique keys is updated upon the next explicit use of the secondary table key ([lazy update](ABENLAZY_UPDATE_GLOSRY.html)). A uniqueness check is also run when the update is made. An internal table might therefore be in an inconsistent state with respect to the secondary key after individual lines are modified. An exception is not raised until the table is next used.

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html