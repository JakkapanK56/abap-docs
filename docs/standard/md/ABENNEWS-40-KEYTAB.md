---
title: "ABENNEWS-40-KEYTAB"
description: |
  ABENNEWS-40-KEYTAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-40-KEYTAB.htm"
abapFile: "ABENNEWS-40-KEYTAB.html"
keywords: ["select", "insert", "delete", "loop", "do", "if", "try", "data", "types", "internal-table", "ABENNEWS", "KEYTAB"]
---

The following features of internal tables have been improved considerably in ABAP release 4.0:

The term [standard key](ABENSTANDARD_KEY_GLOSRY.html) has been expanded to include a user-defined key. In addition to the previous form of internal tables (standard tables), SAP has introduced new table types for [sorted](ABENSORTED_TABLE_GLOSRY.html) and hashed tables. The key of these tables is an integral part of the type definition. For this reason, tables with these types are also generically known as **key tables**. For further information, see [internal tables](ABENITAB.html).

[1. New Table Types: `STANDARD TABLE`, `SORTED TABLE`, and `HASHED TABLE`](#ABAP_MODIFICATION_1@4@)

[2. Generic Table Types: `INDEX TABLE` and `ANY TABLE`](#ABAP_MODIFICATION_2@4@)

[3\. Typing of Procedure Parameters](#ABAP_MODIFICATION_3@4@)

[4\. New Table Operations](#ABAP_MODIFICATION_4@4@)

[5\. Integration of the New Table Types](#ABAP_MODIFICATION_5@4@)

Internal tables in their old form are now known as [standard tables](ABENSTANDARD_TABLE_GLOSRY.html). The old type `TABLE` has now been replaced by `STANDARD TABLE`. The new types `SORTED TABLE` and `HASHED TABLE` have been introduced.

[Sorted tables](ABENSORTED_TABLE_GLOSRY.html) are always stored sorted by their table key in ascending order. The access time is logarithmically related to the number of table entries.

[Hashed tables](ABENHASHED_TABLE_GLOSRY.html) are managed internally using a hash procedure. The access time to a single table entry is essentially constant, that is, the access time is independent of the number of entries.

This means that a complete table type is defined as follows:

For further information about defining table types and objects, see the documentation for the statements [`TYPES`](ABAPTYPES_ITAB.html) and [`DATA`](ABAPDATA_ITAB.html).

To allow generic programming, there is a [hierarchy](ABAPTYPES_TABCAT.html) based on the basic internal table types listed above. The generic type `INDEX TABLE` includes standard and sorted tables. The type `ANY TABLE` can be used for any table.

Further generic types can be defined by omitting the line type, key, or uniqueness attribute of a table (see [`TYPES`](ABAPTYPES_ITAB.html)). This enables the types of parameters to be defined in generic [procedures](ABENPROCEDURE_GLOSRY.html).

Since the old internal table type corresponds to the new standard table, only standard tables can be passed to a `TABLES` parameter. The new tables types can be passed to [`FORM`](ABAPFORM.html) and [`FUNCTION`](ABAPFUNCTION.html) parameters using the additions `USING` or `CHANGING` or the additions `IMPORTING`, `EXPORTING`, and `CHANGING`.

Entries in key tables are located using their key. This means that it must also be possible to add, modify, and delete table entries using the appropriate table key. The following new table operations have therefore been introduced:

The new operations are valid for all table categories and are, in this respect, generic (for details of the semantics, refer to the corresponding keyword documentation). In each of the statements, the key can be specified using a work area, either explicit or implicit (table with [header line](ABENHEADER_LINE_GLOSRY.html)). The key values are then taken from the work area. In the statements `READ` and `DELETE`, the key can be specified explicitly as follows:

... WITH TABLE KEY k1 = v1 ... kn = vn

Unlike the previous form of the `READ` statement, "`WITH KEY k1 = v1 ... kn = vn`", the new form must specify the key in full. This is tested within the syntax check.

The syntax of the new operations has been modeled as far as possible on the existing statements for reading, inserting, modifying and deleting table entries. Note the following rules of thumb:

The new table types can be used both in the new table operations listed above and in existing ABAP statements. This means that the following statements can also be used on key tables:

-   Performance improvements, particularly for large tables. This has been achieved by introducing [hashed tables](ABENHASHED_TABLE_GLOSRY.html), whose access time is constant, mostly regardless of the number of table entries.
-   Introduction of [sorted tables](ABENSORTED_TABLE_GLOSRY.html). This has removed the need for complex program code, whose tasks are now performed in the kernel.
-   Support for generic programming by introducing generic table types.

-   [`INSERT`](ABAPINSERT_ITAB.html) `... INTO TABLE ...`
-   [`MODIFY`](ABAPMODIFY_ITAB.html) `TABLE ...`
-   [`READ`](ABAPREAD_TABLE.html) `TABLE ... [FROM ... |WITH TABLEKEY ...]`
-   [`DELETE`](ABAPDELETE_ITAB.html) `TABLE ... [FROM ... |WITH TABLE KEY ...]`

-   In the new operations, the word `TABLE` comes directly before the table name itself
-   The addition `WITH TABLE KEY` is used to specify the key explicitly

-   [`LOOP`](ABAPLOOP_AT_ITAB.html)
-   [`AT`](ABAPAT_ITAB.html)
-   [`COLLECT`](ABAPCOLLECT.html)
-   [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html)
-   [`IF`](ABAPIF.html)
-   [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html)
-   [`destination = source`](ABAPMOVE.html)
-   [`SELECT`](ABAPSELECT.html)
-   [`SORT`](ABAPSORT_ITAB.html)

1.  Table category (`STANDARD TABLE, SORTED TABLE, HASHED TABLE`)
2.  Line type
3.  Key (the order is part of the type definition)
4.  Uniqueness attribute (`UNIQUE, NON-UNIQUE`)

abenabap.html abennews.html abennews-4.html abennews-40.html