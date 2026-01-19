---
title: "ABENNEWS-46-INTERNAL-TABLES"
description: |
  ABENNEWS-46-INTERNAL-TABLES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46-INTERNAL-TABLES.htm"
abapFile: "ABENNEWS-46-INTERNAL-TABLES.html"
keywords: ["insert", "update", "delete", "loop", "do", "if", "class", "data", "types", "internal-table", "ABENNEWS", "INTERNAL", "TABLES"]
---

In Release 4.6A, the following new features have been introduced in internal tables:

[1\. New Keys Specified in Unstructured Internal Tables](#ABAP_MODIFICATION_1@4@)

[2\. References as Table Keys](#ABAP_MODIFICATION_2@4@)

[3\. Strings as Table Keys](#ABAP_MODIFICATION_3@4@)

[4\. Key Definition for Tables in ABAP Dictionary](#ABAP_MODIFICATION_4@4@)

[5\. Default Key of Unstructured Tables](#ABAP_MODIFICATION_5@4@)

[6\. Changes to the Internal Structure](#ABAP_MODIFICATION_6@4@)

[7\. Sorting without Sort Key Specified](#ABAP_MODIFICATION_7@4@)

[8\. Access to Read-Only Tables](#ABAP_MODIFICATION_8@4@)

[9\. Index Ranges in Table Extensions](#ABAP_MODIFICATION_9@4@)

[10. `IS REQUESTED` with `TABLES` Parameter](#ABAP_MODIFICATION_10@4@) 

[11\. Tables as Attributes of Objects](#ABAP_MODIFICATION_11@4@)

[12\. References as Line Type](#ABAP_MODIFICATION_12@4@)

[13\. Multiple Identical Keys Specified](#ABAP_MODIFICATION_13@4@)

If the line type of an internal table does not have a structure, the [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line` can be used to specify or address the entire table line as the key. The previous form `TABLE LINE` is now obsolete. If a [structure](ABAPTYPES_STRUC.html) contains a component called `table_line`, this produces a warning in the syntax check.

References are now allowed as the key of an internal table.

[`Strings`](ABENSTRING.html) are now allowed as the key of an internal table. This applies to all categories of tables.

It is now possible to specify the table key explicitly for internal tables defined in ABAP Dictionary.

The default key of an internal table without a line structure always consists of the whole line. An exception are tables of tables for which an empty key is defined.

Previously, internal tables were represented at runtime using a structure 256 bytes long. This has now been replaced by a reference that is only 8 bytes long. This means that structures that contain tables as components or tables that include other tables can now be save much more efficiently. This is because tables without content now need only 8 bytes instead of 256 bytes. The benefits are particularly clear in thinly populated structures. Furthermore, the header of a filled table now only requires approximately half of the 256 bytes previously required (the actual figure depends on the platform).

In ABAP Dictionary, all structures containing a field of length 256 bytes intended to include a table header must be modified accordingly.

Sorting an internal table with type >[`STANDARD`](ABAPTYPES_TABCAT.html) or [`HASHED`](ABAPTYPES_TABCAT.html) using the statement [`SORT`](ABAPSORT_ITAB.html) now returns a correct result, even if the sort key is not specified in the addition `BY`.

If the statements [`DELETE`](ABAPDELETE_ITAB.html), [`INSERT`](ABAPINSERT_ITAB.html), and [`MODIFY`](ABAPMODIFY_ITAB.html) are applied to read-only tables (for example, `IMPORTING-REFERENCE` parameters in function modules or `READ-ONLY` attributes of classes), the system returns a syntax error. This error used to produce a runtime error.

The statements [`INSERT LINES OF itab ...`](ABAPINSERT_ITAB.html) and [`APPEND LINES OF itab ...`](ABAPAPPEND.html) return syntax errors if the source table has the type `HASHED` or `ANY` and the additions `FROM` and `TO` are used to specify an index range. This error used to produce a runtime error.

If the predicate operator [`IS REQUESTED`](ABENLOGEXP_REQUESTED.html) is used with [`TABLES`](ABENFUNCTION.html) parameters in update modules, the syntax check produces a [warning](ABENWARNING_GLOSRY.html). These parameters are always supplied.

The statements [`LOOP`](ABAPLOOP_AT_ITAB.html), [`READ`](ABAPREAD_TABLE.html), [`SORT`](ABAPSORT_ITAB.html), [`DELETE`](ABAPDELETE_ITAB.html), and [`MODIFY`](ABAPMODIFY_ITAB.html) now support access to the attributes of objects as the keys of internal tables.

If the line type of an internal table contains object reference variables from [`ABAP Objects`](ABENABAP_OBJECTS.html) as components `comp`, the attributes `attr` of the object to which the reference points can be used as key values when reading, sorting, and changing the table. This is possible in the following statements:

LOOP AT itab ... WHERE comp->attr ...

READ TABLE itab ... WITH \[TABLE\] KEY comp->attr = ...

SORT itab BY comp->attr ...

DELETE itab WHERE comp->attr ...

MODIFY itab ... TRANSPORTING ... WHERE comp->attr ...

In the declarative statements [`DATA`](ABAPDATA_ITAB.html), [`STATICS`](ABAPSTATICS.html), and [`TYPES`](ABAPTYPES_ITAB.html), object references and data references can be used as the line type of an internal table.

Identical keys specified more than once in the statement [`READ`](ABAPREAD_TABLE.html) produce a [warning](ABENWARNING_GLOSRY.html).

abenabap.html abennews.html abennews-4.html abennews-46a.html