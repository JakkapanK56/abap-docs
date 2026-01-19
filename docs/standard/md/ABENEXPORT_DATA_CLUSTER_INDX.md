---
title: "ABENEXPORT_DATA_CLUSTER_INDX"
description: |
  ABENEXPORT_DATA_CLUSTER_INDX - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEXPORT_DATA_CLUSTER_INDX.htm"
abapFile: "ABENEXPORT_DATA_CLUSTER_INDX.html"
keywords: ["select", "delete", "do", "while", "if", "catch", "class", "data", "types", "ABENEXPORT", "DATA", "CLUSTER", "INDX"]
---

When storing [data clusters](ABENDATA_CLUSTER_GLOSRY.html) in database tables and application buffers of the [shared memory](ABENSHARED_MEMORY_GLOSRY.html), database tables with one of the following structures must be specified: These database tables are referred to as [export/import tables](ABENEXPORT_IMPORT_TABLE_GLOSRY.html).

In export/import table structures like this, the data cluster is stored in a single row in a column `CLUSTD` of the type [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html) ([BLOB](ABENBLOB_GLOSRY.html)).

The total length of all [key fields](ABENDDIC_DATABASE_TABLES_KEY.html), that is the total length of `MANDT`, `RELID`, and the key fields for the ID, and `SRTF2`, is limited to 900 bytes, like every AS ABAP [database](ABENDDIC_DATABASE_TABLES.html) defined in the ABAP Dictionary. If the table content is to be transported by specifying a key, a limit of 120 bytes is required here.

The database table `DEMO_INDX_BLOB` is an example of how data clusters are stored in a single row.

In export/import table structures like this, the data cluster is stored in a column `CLUSTD` of the type [`LRAW`](ABENDDIC_BUILTIN_TYPES.html) and can be split multiple rows. The structure requires the additional columns `SRTF2` and `CLUSTR` to manage this repository.

The database table `DEMO_INDX_TABLE` is an example of how data clusters are stored in multiple rows.

-   The structure for data clusters in a row is the newer variant and is recommended for new database tables.
-   Status information about the actual data cluster, such as date, user, or language, can be stored in freely definable fields.
-   For information about processing [export/import tables](ABENEXPORT_IMPORT_TABLE_GLOSRY.html) using SQL, see [SQL Access to Export/Import Tables](ABENINDX_TYPE_TABLE_AND_SQL.html).
-   When accessing data clusters in export/import tables using the statements [`EXPORT ... TO DATABASE`](ABAPEXPORT_DATA_CLUSTER.html) and [`IMPORT ... FROM DATABASE`](ABAPIMPORT_DATA_CLUSTER.html), [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is not supported.

-   If the data objects are to be stored as client-dependent objects, the first field must be a key field with the name `MANDT` of type `CLNT` for the client. This component is not required for client-independent storage.
-   The next field must be a key field with the name `RELID` of type `CHAR` and with length 2. The specification of the area `ar` is stored here.
-   This must be followed by at least one key field of type `CHAR` with any name. The identifier specified in `id` within the length of the key field is stored here. If more than one key field is defined, the identifier is divided among them according to the respective length of the key fields. If the total length of the key fields is not sufficient for the identifier, it is truncated on the right.
-   Any number of fields with freely selectable name and type can follow, which are filled with values by specifying `FROM wa`. The addition `TO wa` of the statement `IMPORT` reads these fields again.
-   The final field must be called `CLUSTD` and linked with the data element `INDX_CLUST_BLOB` with the dictionary type [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html). This column is given the actual data cluster.

-   The structure starts with the same key fields as in the structure above for data clusters in a single row.
-   The next field must be a further key field with the name `SRTF2` of type `INT4`. It contains the row numbers of the data cluster stored in the field `CLUSTD`. This cluster can span multiple rows and is filled automatically by the system. If more rows are required than allowed by the value range of `SRTF2`, an uncatchable exception is raised.
-   Any number of fields with custom names and types can follow. The same applies to these fields as to the structure above for data clusters in a single row.
-   The last two components must be called `CLUSTR` and `CLUSTD` and have the types [`INT2`](ABENDDIC_BUILTIN_TYPES.html) and [`LRAW`](ABENDDIC_BUILTIN_TYPES.html) of any length. The current length of the field `CLUSTD` of each row is stored in `CLUSTR`, while `CLUSTD` contains the actual data cluster, which can span multiple rows.

-   When a data cluster is split across multiple rows, the associated administration data must be stored for each row. In each row, the content of the custom fields are stored redundantly.
-   The additional key field `SRTF2` is part of the total length of all [key fields](ABENDDIC_DATABASE_TABLES_KEY.html). When table content is transported by specifying a key, the key field `SRTF2` does not usually need to be specified since only transports of all rows in a data cluster are feasible.
-   A database table `INDX`, delivered by SAP, has the layout for a data cluster in multiple rows and can be used as a template for creating custom database tables or for test purposes. In production programs, however, it is strongly recommended that separate [export/import tables](ABENEXPORT_IMPORT_TABLE_GLOSRY.html) are used:

-   When data is stored in the table `INDX`, data is at risk of being overwritten or deleted unintentionally by other programs.
-   The custom fields between `SRTF2` and `CLUSTR` do not usually match their own application.
-   The table `INDX` has the [delivery class](ABENDDIC_DATABASE_TABLES_DELIVERY.html)\\ *A* and is client-dependent. The delivery class `L` may be better suited for storing temporary data. If the data needs to be client-independent data, the table used should not contain a client column. This prevents redundant data from being stored.
-   New export/import tables should be created with a [BLOB](ABENBLOB_GLOSRY.html) column `CLUSTD`.

-   Old export/import tables can also occur, however, where the column `SRTF2` has the data type `INT1` or `INT2`. In these tables, a data cluster cannot cover more rows than allowed by the value range of these types.

abenabap.html abenabap\_reference.html abendata\_cluster.html abapexport\_data\_cluster.html