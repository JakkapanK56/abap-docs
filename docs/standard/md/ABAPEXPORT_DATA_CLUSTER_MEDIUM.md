---
title: "ABAPEXPORT_DATA_CLUSTER_MEDIUM"
description: |
  ABAPEXPORT_DATA_CLUSTER_MEDIUM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXPORT_DATA_CLUSTER_MEDIUM.htm"
abapFile: "ABAPEXPORT_DATA_CLUSTER_MEDIUM.html"
keywords: ["select", "delete", "do", "while", "if", "case", "catch", "method", "class", "data", "types", "internal-table", "ABAPEXPORT", "DATA", "CLUSTER", "MEDIUM"]
---

[Short Reference](ABAPEXPORT_SHORTREF.html)

`... \{ DATA BUFFER xstr \}\    |\ \{ INTERNAL TABLE itab \}\    |\ \{ MEMORY ID id \}\    |\ \{ DATABASE      dbtab(ar) [FROM wa]\ [CLIENT cl] ID id \}\    |\ \{ SHARED MEMORY dbtab(ar) [FROM wa]\ [CLIENT cl] ID id \}\    |\ \{ SHARED BUFFER dbtab(ar) [FROM wa]\ [CLIENT cl] ID id \} ...`

[1. `... DATA BUFFER xstr`](#ABAP_ALTERNATIVE_1@2@)

[2. `... INTERNAL TABLE itab`](#ABAP_ALTERNATIVE_2@2@)

[3. `... MEMORY ID id`](#ABAP_ALTERNATIVE_3@2@)

[4. `... DATABASE dbtab(ar) [FROM wa]\ [CLIENT cl] ID id`](#ABAP_ALTERNATIVE_4@2@)

[5. `... SHARED MEMORY dbtab(ar) [FROM wa]\ [CLIENT cl] ID id`](#ABAP_ALTERNATIVE_5@2@)

[6. `... SHARED BUFFER dbtab(ar) [FROM wa]\ [CLIENT cl] ID id`](#ABAP_ALTERNATIVE_6@2@)

The exported [data cluster](ABENDATA_CLUSTER_GLOSRY.html) can be stored in a byte string `xstr` or in an internal table `itab`, in the [ABAP memory](ABENABAP_MEMORY_GLOSRY.html), in a database table `dbtab`, or in a shared memory area (`SHARED MEMORY` or `BUFFER`).

For optimization reasons, the binary content of the data cluster can depend on the way it is stored. When reconstructed, a data cluster stored in multiple parts is not necessarily the same as a data cluster stored as a single cluster. This means that a data cluster can usually only be imported using an [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html) statement that matches the storage method. Especially, a data cluster stored in a structure for [export/import tables](ABENEXPORT_DATA_CLUSTER_INDX.html) in multiple rows cannot necessarily be concatenated into a byte string that can be imported with `FROM DATA BUFFER`. Even data clusters stored in multiple rows can differ between storage methods. That means a data cluster stored with `INTERNAL TABLE` can differ from a data cluster for the same data in export/import tables, especially, if they were stored in different releases or for different [code pages](ABENCODEPAGE_GLOSRY.html).

The program `DEMO_DATA_CLUSTER` demonstrates that the size of the data cluster is mostly independent of the way it is stored.

If `DATA BUFFER` is specified, the data cluster is written to the elementary data object `xstr`, which must be of the type `xstring`. The previous content of `xstr` is overwritten completely.

Export of an internal table to a byte string and storing it in a database table. After the byte string is read from the DDIC database table, the content of the data cluster can be imported into another internal table.

If `INTERNAL TABLE` is specified, the data cluster is stored in the internal table `itab`. The previous content of `itab` is overwritten completely.

The first column of `itab` must have the data type [`s`](ABENBUILTIN_TYPES_NUMERIC.html) or [`i`](ABENBUILTIN_TYPES_NUMERIC.html) and the second column must have the type `x`. Depending on the width of the second column, the data is stored across multiple table lines if necessary. The first column contains the length occupied in the second column. The only table category allowed for `itab` are [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) without [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html).

Export of an internal table to a data cluster in an internal table and importing it into another internal table.

If `MEMORY` is specified, the data cluster is written into the [ABAP Memory](ABENABAP_MEMORY_GLOSRY.html) with the ID specified in `id`. `id` expects a [flat](ABENFLAT_GLOSRY.html)\\ [character-like data object](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html) containing a case-sensitive ID with a maximum of 60 characters. Any existing data clusters with the same ID `id` are completely overwritten. The ID in `id` identifies a data cluster in the repository and can be read again using the same ID.

Export of two text strings labeled `P1` and `P2` into the ABAP memory. After the statement [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html) is executed, the content of the fields `text1` and `text2` is swapped.

If `DATABASE` is specified, the data cluster is stored under the ID `id` in the DDIC database table `dbtab` and committed by the next [database commit](ABENDATABASE_COMMIT_GLOSRY.html). The DDIC database table must be an [export/import table](ABENEXPORT_IMPORT_TABLE_GLOSRY.html) with a predefined [structure](ABENEXPORT_DATA_CLUSTER_INDX.html). `id` expects a [flat](ABENFLAT_GLOSRY.html)\\ [character-like data object](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html) containing an ID no longer than the key fields of the export/import table defined between the columns [`RELID`](ABENEXPORT_DATA_CLUSTER_INDX.html) and [`SRTF2`](ABENEXPORT_DATA_CLUSTER_INDX.html). The ID is case-sensitive.

The two-character area `ar`, which must be specified directly, divides the rows of the database table into multiple areas, so that data clusters with the same ID `id` can occur more than once in the DDIC database table.

After `FROM`, a work area `wa` can be specified that must have the same data type as the export/import table `dbtab`. In an export, the current values of the components of `wa`, which are located between the fields [`SRTF2`](ABENEXPORT_DATA_CLUSTER_INDX.html) and [`CLUSTR`](ABENEXPORT_DATA_CLUSTER_INDX.html), are written to all rows of the database table occupied by the data cluster. If the addition `FROM wa` is not specified within classes, no data transport takes place to these database fields. If the addition `FROM wa` is not specified outside of classes, but the statement [`TABLES`](ABAPTABLES.html) is used to declare a [table work area](ABENTABLE_WORK_AREA_GLOSRY.html) for the export/import table `dbtab`, the current values of the corresponding components of the table work area `dbtab` are written to the rows of the DDIC database table in the export.

If the export/import table `dbtab` is client-dependent, a flat character-like field `cl` can be specified after the addition `CLIENT`. This field contains a [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html). If the addition is not specified, the [current client](ABENCURRENT_CLIENT_GLOSRY.html) is used. The column `MANDT` of every row in the database table occupied by the data cluster is filled by this client ID in the export.

Exports an internal table `itab` with the name `scarr_tab` and the ID `SCARR` to the range `SC` of the DDIC database table `DEMO_INDX_BLOB`. Here, the freely definable components are filled from the structure `wa`.

If `SHARED MEMORY` or `SHARED BUFFER` is specified, the data cluster is stored in [cross-transaction application buffers](ABENCROSSTRANS_APP_BUFFER_GLOSRY.html) of the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) on of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html). All programs of the same AS instance have access to these buffers.

The two application buffers differ in how the system behaves when reaching the memory limit. Both application buffers can be filled to an internal maximum limit, which can be adjusted using the [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `rsdb/esm/buffersize_kb` (`SHARED MEMORY`) and `rsdb/obj/buffersize` (`SHARED BUFFER`).

When storing the data, the system creates a memory table in the application buffer. The row structure of this table is defined using `dbtab`. For `dbtab`, a database table from the ABAP Dictionary must be specified that has the [structure](ABENEXPORT_DATA_CLUSTER_INDX.html) of an [export/import table](ABENEXPORT_IMPORT_TABLE_GLOSRY.html). The row area `ar`, the work area `wa`, the optional client `cl`, and the ID `id` have the same significance for the memory table as when stored in a database table, with the exception that the length of the ID in `id` is limited to 59 or 62 characters depending on whether the addition `CLIENT` is specified or not.

Export of an internal table `itab` with the name `scarr_tab` and the ID `SCARR` to the cross-transaction application buffer. The row structure of the memory table is the same as the export/import table `DEMO_INDX_BLOB`.

-   A data object `xstr` filled by `EXPORT TO DATA BUFFER` contains exactly one data cluster.
-   A common application of the addition `DATA BUFFER` is to store the new data cluster in a field of a DDIC database table with the corresponding data type. In this case, compressing the data cluster using the addition [`COMPRESSION`](ABAPEXPORT_DATA_CLUSTER.html) should be considered, since, by default, compression as a medium is only activated if `DATABASE` is specified directly.
-   Another application is to pass data clusters to an `xstring` typed procedure parameter and evaluate them there. This can be used for example in RFC in order to pass large amounts of complex data to remote systems.
-   The content of a data object filled by `EXPORT TO DATA BUFFER` can only be evaluated using `IMPORT FROM DATA BUFFER`. In other evaluations, for example when comparing data clusters, the result is undefined. For example, the undefined content of [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html) in structures can produce different data clusters with structures that otherwise have the same content.

-   An internal table `itab` filled by `EXPORT TO INTERNAL TABLE` contains exactly one data cluster.
-   The content of an internal table filled by `EXPORT TO INTERNAL TABLE` can only be evaluated using `IMPORT FROM INTERNAL TABLE` for the same reasons as for `EXPORT TO DATA BUFFER`.
-   The variant `EXPORT TO DATA BUFFER` is preferred over the variant `EXPORT TO INTERNAL TABLE` because it is easier to handle. An export to an internal table is beneficial only for very large data clusters and if the available [memory](ABENMEMORY_CONSUMPTION_2.html) is almost used up. This is because its memory is requested block by block, while the memory for a string must always be available in one piece.

-   A data cluster in the ABAP memory is available to all programs within a [call sequence](ABENCALL_SEQUENCE_GLOSRY.html), which makes it possible to pass data to called programs.
-   Outside of classes, an [obsolete short form](ABAPEXPORT_IMPORT_MEM_ID_OBSOLETE.html) exists, in which the addition `ID` can be omitted. However, this is prone to errors, since all `EXPORT` statements without ID overwrite the same data cluster.

-   The statement `EXPORT ... TO DATABASE` sets a [database lock](ABENDATABASE_LOCK_GLOSRY.html) until the next database commit or rollback. If used incorrectly, this can produce a [deadlock](ABENDEADLOCK_GLOSRY.html).
-   Data clusters in databases are not converted when migrating from a non-Unicode database to a [Unicode system](ABENUNICODE_SYSTEM_GLOSRY.html). In a Unicode system, therefore, data clusters may sometimes exist that contain non-Unicode characters. These characters are automatically converted to Unicode characters in each import. When data is exported in Unicode systems, any Unicode characters in the stored data objects are stored in accordance with the relevant platform.
-   Since each client represents a self-contained unit, the addition `CLIENT` must not be used in application programs.
-   The statement `EXPORT ... TO DATABASE` does not support [table buffering](ABENTABLE_BUFFERING_GLOSRY.html).
-   It is still possible to use a table work area implicitly (instead of using `FROM wa` explicitly). This should be considered an [obsolete short form](ABAPEXPORT_IMPORT_TABLES_AREA.html), however.

-   Before the maximum limit of the `SHARED MEMORY` buffer is reached, space must be freed using the statement [`DELETE FROM SHARED MEMORY`](ABAPDELETE_CLUSTER.html); otherwise a catchable exception is raised.
-   The buffer of `SHARED BUFFER` is emptied automatically by a displacement when it reaches the maximum limit. This procedure deletes the least used data objects from the buffer.

-   When storing data in the shared memory, a reference is made to an export/import table, even if the data is not stored in the table itself, but in an appropriately structured memory table.
-   The length of the key fields of the addressed export/import table between the columns [`RELID`](ABENEXPORT_DATA_CLUSTER_INDX.html) and [`SRTF2`](ABENEXPORT_DATA_CLUSTER_INDX.html) cannot exceed 59 or 62 characters, depending on whether a client column exists.
-   When data is exported, any data clusters that have the same client `cl`, row area `ar`, and ID `id` are overwritten. If an existing data cluster is to be overwritten by a bigger one when using `SHARED MEMORY`, and this would exceed the memory limit, this only deletes the existing data cluster.
-   Instead of storing data clusters in the shared memory, it is best to use [shared objects](ABENSHARED_OBJECTS_GLOSRY.html). Shared objects make it possible to store objects with complex dependencies, can be processed like regular objects, and enable multiple users to access the shared memory without any copying effort.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(itab). \\n\\ \\nDATA buffer TYPE xstring. \\nEXPORT itab = itab TO DATA BUFFER buffer. \\n\\ \\nMODIFY demo\_expressions FROM @( \\n VALUE #( id = 'B' xstring1 = buffer ) ). \\n\\ \\n... \\n\\ \\nDATA jtab TYPE TABLE OF scarr WITH EMPTY KEY. \\nSELECT SINGLE xstring1 \\n FROM demo\_expressions \\n WHERE id = 'B' \\n INTO @buffer. \\n\\ \\nIF sy-subrc = 0. \\n IMPORT itab = jtab FROM DATA BUFFER buffer. \\nENDIF. \\nIF sy-subrc = 0. \\n out->write( jtab ). \\nENDIF. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF bline, \\n id TYPE i, \\n clstr TYPE x LENGTH 100, \\n END OF bline. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(itab). \\n\\ \\nDATA buffer TYPE TABLE OF bline WITH EMPTY KEY. \\nEXPORT itab = itab TO INTERNAL TABLE buffer. \\n\\ \\n... \\n\\ \\nDATA jtab TYPE TABLE OF scarr WITH EMPTY KEY. \\nIMPORT itab = jtab FROM INTERNAL TABLE buffer. \\nIF sy-subrc = 0. \\n out->write( jtab ). \\nENDIF. \\n\\ \\nout->display( ). FINAL(id) = 'TEXTS'. \\n\\ \\nDATA(text1) = \`Ike\`. \\nDATA(text2) = \`Tina\`. \\n\\ \\nEXPORT p1 = text1 \\n p2 = text2 TO MEMORY ID id. \\n\\ \\n... \\n\\ \\nIMPORT p1 = text2 \\n p2 = text1 FROM MEMORY ID id. SELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(itab). \\n\\ \\nFINAL(wa) = VALUE demo\_indx\_blob( \\n timestamp = CONV #( sy-datum && sy-uzeit ) \\n userid = sy-uname ). \\n\\ \\nEXPORT scarr\_tab = itab \\n TO DATABASE demo\_indx\_blob(sc) \\n FROM wa \\n ID 'SCARR'. SELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(itab). \\n\\ \\nFINAL(wa) = VALUE demo\_indx\_blob( \\n timestamp = CONV #( sy-datum && sy-uzeit ) \\n userid = sy-uname ). \\n\\ \\nEXPORT scarr\_tab = itab \\n TO SHARED BUFFER demo\_indx\_blob(sc) \\n FROM wa \\n ID 'SCARR'. abenabap.html abenabap\_reference.html abendata\_cluster.html abapexport\_data\_cluster.html