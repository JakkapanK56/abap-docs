---
title: "ABENNEWS-71-SQL"
description: |
  ABENNEWS-71-SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-71-SQL.htm"
abapFile: "ABENNEWS-71-SQL.html"
keywords: ["select", "insert", "update", "do", "if", "case", "class", "data", "types", "ABENNEWS", "SQL"]
---

[1. `UPDATE` for Tables with Strings](#ABAP_MODIFICATION_1@4@) 

[2\. Table Buffering with Single Record Access](#ABAP_MODIFICATION_2@4@)

[3\. Short Strings as Key Fields of Database Tables](#ABAP_MODIFICATION_3@4@)

[4\. Maximum Length of Short Strings in ABAP Dictionary](#ABAP_MODIFICATION_4@4@)

[5\. ABAP Database Connectivity (ADBC)](#ABAP_MODIFICATION_5@4@)

[6\. Streaming and Locators in ABAP SQL](#ABAP_MODIFICATION_6@4@)

[7\. Specifying Sorting Columns in ABAP SQL](#ABAP_MODIFICATION_7@4@)

[8. Overflow Handling for `sy-dbcnt`](#ABAP_MODIFICATION_8@4@)

When the statement [`UPDATE`](ABAPUPDATE.html) is used for a column of type `STRING` or `RAWSTRING` with the addition [`SET`](ABAPUPDATE_SOURCE.html), it is no longer necessary to specify the [primary key](ABENPRIMARY_KEY_GLOSRY.html) in full in the `WHERE` condition.

Access to a table with single record buffering that an equality condition is set for in the `WHERE` clause for all key fields of the primary key uses [table buffering](ABENTABLE_BUFFERING_GLOSRY.html), even if the addition [`SINGLE`](ABAPSELECT_SINGLE.html) is not specified for `SELECT`. Before ABAP release 7.0 EhP2, table buffering was bypassed if `SINGLE` was missing.

From ABAP release 7.0, EhP2, [short strings](ABENDDIC_CHARACTER_BYTE_TYPES.html) can be used as key fields of the type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) in database tables. This can produce significant memory and performance gains in comparison with using long fields of type `CHAR`.

The maximum length of short strings of type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) has been increased from 255 to 1333.

The class-based framework ABAP Database Connectivity (ADBC), which has existed since ABAP release 6.10 for dynamic access to the [Native SQL interface](ABENNATIVE_SQL_INTERFACE_GLOSRY.html), is now also documented in the ABAP keyword documentation under [ADBC](ABENADBC.html).

From ABAP release 7.0, EhP2, ABAP SQL supports processing of [LOBs](ABENLOB_GLOSRY.html) using [data streams](ABENDATA_STREAM_GLOSRY.html) and [locators](ABENLOCATOR_GLOSRY.html).

The restriction that after [`ORDER BY`](ABAPORDERBY_CLAUSE.html) in [`SELECT`](ABAPSELECT.html) only columns can be specified that are also specified after `SELECT` does not apply.

This also applies to the addition `PRIMARY KEY`. Previously, all columns of the primary key had to be in the `SELECT` list, but this is no longer the case.

If an overflow occurs in the system field `sy-dbcnt`, meaning the number of statements processed by SQL access is greater than 2,147,483,647, the value of `sy-dbcnt` is set to -1. The value was previously undefined.

-   A new set of classes and interfaces was introduced.
-   See [ABAP SQL - Streaming and Locators](ABENSTREAMS_LOCATORS.html)
-   In reading and changing ABAP SQL statements, data streams and locators can be linked to LOBs in database tables by using special reference variables.
-   See [`SELECT` - LOB Handles](ABENSELECT_INTO_LOB_HANDLES.html) and [`INSERT`, `UPDATE`, `MODIFY dbtab|view` - LOB Handles](ABENIUM_LOB.html)
-   Using the statements `TYPES`, `DATA`, and `CLASS-DATA`, it is possible to derive special LOB handle structures for use in ABAP SQL.
-   See [`TYPES ... FOR ... COLUMNS ...`](ABAPTYPES_LOB_HANDLE.html)
-   The data streams for ABAP SQL are embedded in a broader streaming framework. Further data streams and filter streams will be added to this in future releases.
-   See [Streaming](ABENSTREAMING.html).

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html