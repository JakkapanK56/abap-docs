---
title: "ABAPIMPORT_MEDIUM"
description: |
  ABAPIMPORT_MEDIUM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPIMPORT_MEDIUM.htm"
abapFile: "ABAPIMPORT_MEDIUM.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "internal-table", "ABAPIMPORT", "MEDIUM"]
---

[Short Reference](ABAPIMPORT_SHORTREF.html)

`... \{ DATA BUFFER xstr \}`\\ 
  `|\ \{ INTERNAL TABLE itab \}`\\ 
  `|\ \{ MEMORY ID id \}`\\ 
  `|\ \{ DATABASE      dbtab(ar) [TO wa]\ [CLIENT cl] ID id \}`\\ 
  `|\ \{ SHARED MEMORY dbtab(ar) [TO wa]\ [CLIENT cl] ID id \}`\\ 
  `|\ \{ SHARED BUFFER dbtab(ar) [TO wa]\ [CLIENT cl] ID id \} ...`

[1. `... DATA BUFFER xstr`](#ABAP_ALTERNATIVE_1@2@)

[2. `... INTERNAL TABLE itab`](#ABAP_ALTERNATIVE_2@2@)

[3. `... MEMORY ID id`](#ABAP_ALTERNATIVE_3@2@)

[4. `... DATABASE dbtab(ar) [TO wa]\ [CLIENT cl] ID id`](#ABAP_ALTERNATIVE_4@2@)

[5. `... SHARED MEMORY dbtab(ar) [TO wa]\ [CLIENT cl] ID id`](#ABAP_ALTERNATIVE_5@2@)

[6. `... SHARED BUFFER dbtab(ar) [TO wa]\ [CLIENT cl] ID id`](#ABAP_ALTERNATIVE_6@2@)

The [data cluster](ABENDATA_CLUSTER_GLOSRY.html) to be imported can be taken from an elementary data object `xstr` or an internal table `itab`, the [ABAP Memory](ABENABAP_MEMORY_GLOSRY.html), a database table `dbtab`, or a shared memory area (`SHARED MEMORY` or `BUFFER`).

If `DATA BUFFER` is specified, the data cluster is taken from the elementary data object `xstr`, which must be of the type `xstring`. The data object must contain a data cluster that was created using the `DATA BUFFER` addition of the [`EXPORT`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) statement. Otherwise, a [runtime error](ABENRABAX_IMPORT_FROM_DATABASE.html) occurs. The data object must not be initial.

See the example for the addition [`DATA BUFFER`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) of the statement `EXPORT`.

If `INTERNAL TABLE` is specified, the data cluster is taken from the internal table `itab`. The first column of `itab` must have the data type [`s`](ABENBUILTIN_TYPES_NUMERIC.html) or [`i`](ABENBUILTIN_TYPES_NUMERIC.html) and the second column must have the type [`x`](ABENBUILTIN_TYPES_BYTE.html). The only table category allowed for `itab` are [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) without [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). The internal table must contain a data cluster created using the `INTERNAL TABLE` addition of the [`EXPORT`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) statement; otherwise, a [runtime error](ABENRABAX_IMPORT_FROM_DATABASE.html) occurs. The internal table must not be empty.

See the example for the addition [`INTERNAL TABLE`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) of the statement `EXPORT`.

If `MEMORY` is specified, the data cluster that was written to the [ABAP Memory](ABENABAP_MEMORY_GLOSRY.html) under the ID specified in `id` by the statement [`EXPORT`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) is imported. `id` expects a [flat](ABENFLAT_GLOSRY.html)\\ [character-like data object](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html). This object contains the ID of the data cluster, which is case-sensitive.

Outside of classes, an [obsolete short form](ABAPEXPORT_IMPORT_MEM_ID_OBSOLETE.html) exists, in which the addition `ID` can be omitted. This reads the data cluster stored using the statement [`EXPORT`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) without specifying an ID.

See the example for the addition [`MEMORY ID`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) of the statement `EXPORT`.

If `DATABASE` is specified, the data cluster that was written to the [export/import table](ABENEXPORT_IMPORT_TABLE_GLOSRY.html)\\ `dbtab` in the area `ar` and under the ID specified in `id` using the statement [`EXPORT`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) is imported. The export/import table `dbtab` must be [structured](ABENEXPORT_DATA_CLUSTER_INDX.html) as described in the `EXPORT` statement. `id` expects a flat, character-like data object that contains the ID of the data cluster, which is case-sensitive. The two-character area `ar` must be specified directly.

After `TO`, a work area `wa` that has the same data type as the database table `dbtab` can be specified. When imported, the values of the database fields that are between the fields `SRTF2` and `CLUSTR` are assigned to the components of `wa` with the same name. If the addition `TO wa` is not specified within classes, no data transport takes place in these components. If the addition `TO wa` is not specified outside of classes, but the statement [`TABLES`](ABAPTABLES.html) is used to declare a [table work area](ABENTABLE_WORK_AREA_GLOSRY.html) for the export/import table `dbtab`, the values of these database fields are assigned to the components of the table work area `dbtab` with the same names during the import.

If the export/import table `dbtab` is client-dependent, a flat character-like field `cl` can be specified after the addition `CLIENT`. This field contains a [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html). If the addition is not specified, the [current client](ABENCURRENT_CLIENT_GLOSRY.html) is used.

Reading of the table exported under the name `scarr_tab` and the ID `SCARR` into the area `SC` of the database table `DEMO_INDX_BLOB` (see the example for the addition [`DATABASE`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) of the statement `EXPORT`) into the internal table `itab`. Here, the freely selectable components are assigned to the structure `wa`.

If `SHARED MEMORY` or `SHARED BUFFER` is specified, the data cluster is imported that was written to the relevant application buffer of the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) using the statement [`EXPORT`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) in the area `ar` and using the ID specified in `id`. The system accesses a memory table of the application buffer whose row structure is defined by an export/import table `dbtab`. The [setup](ABENEXPORT_DATA_CLUSTER_INDX.html) of this table is described in the statement `EXPORT`. `id` expects a [flat](ABENFLAT_GLOSRY.html) character-like data object that contains the ID of the data cluster. The two-character area `ar` must be specified directly.

For the optional specification of the work area `wa` and client `cl`, the same applies as to imports from a database table.

Reading of the table exported under the name `scarr_tab` and the ID `SCARR` into the area `SC` of the cross-transaction application buffer (see the example for the addition [`SHARED BUFFER`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) of the statement `EXPORT`) into the internal table `itab`. Here, the freely selectable components are assigned to the structure `wa`.

-   Since each client represents a self-contained unit, the addition `CLIENT` should not be used in application programs.
-   It is still possible to use a table work area implicitly outside of classes instead of using `TO wa` explicitly. This should be considered an [obsolete short form](ABAPEXPORT_IMPORT_TABLES_AREA.html), however.
-   Only outside of classes can `id` still be replaced by the obsolete specification [`obs_id`](ABAPIMPORT_OBSOLETE_ID.html).
-   The statement `IMPORT ... FROM DATABASE` does not support [table buffering](ABENTABLE_BUFFERING_GLOSRY.html).

-   The length of the key fields of the export/import table defined between the columns [`RELID`](ABENEXPORT_DATA_CLUSTER_INDX.html) and [`SRTF2`](ABENEXPORT_DATA_CLUSTER_INDX.html) must not exceed 59 or 62 characters, depending on whether a client column exists.
-   Instead of using data clusters in the shared memory, it is best to use [shared objects](ABENSHARED_OBJECTS_GLOSRY.html). Shared objects make it possible to store objects with complex dependencies, can be processed like regular objects, and enable multiple users to access the shared memory without any copying effort.

DATA: \\n wa TYPE demo\_indx\_blob, \\n itab TYPE table OF scarr with EMPTY KEY. \\n\\ \\nIMPORT scarr\_tab = itab \\n FROM DATABASE demo\_indx\_blob(sc) \\n TO wa \\n ID 'SCARR'. \\n\\ \\ncl\_demo\_output=>new( \\n )->write\_data( wa-timestamp \\n )->write\_data( wa-userid \\n )->display( itab ). DATA: \\n wa TYPE demo\_indx\_blob, \\n itab TYPE table OF scarr with EMPTY KEY. \\n\\ \\nIMPORT scarr\_tab = itab \\n FROM SHARED BUFFER demo\_indx\_blob(sc) \\n TO wa \\n ID 'SCARR'. \\n\\ \\ncl\_demo\_output=>new( \\n )->write\_data( wa-timestamp \\n )->write\_data( wa-userid \\n )->display( itab ). abenabap.html abenabap\_reference.html abendata\_cluster.html abapimport\_data\_cluster.html