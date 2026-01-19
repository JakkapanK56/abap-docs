---
title: "ABENINDX_TYPE_TABLE_AND_SQL"
description: |
  ABENINDX_TYPE_TABLE_AND_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINDX_TYPE_TABLE_AND_SQL.htm"
abapFile: "ABENINDX_TYPE_TABLE_AND_SQL.html"
keywords: ["select", "insert", "update", "delete", "if", "data", "ABENINDX", "TYPE", "TABLE", "AND", "SQL"]
---

[Export/import tables](ABENEXPORT_IMPORT_TABLE_GLOSRY.html) are relational databases defined in the ABAP Dictionary. This means that, in principle, SQL statements can also be used to access export/import tables.

To be able to use SQL statements on export/import tables effectively, the [special structure](ABENEXPORT_DATA_CLUSTER_INDX.html) of these tables must be respected.

It is not a good idea to perform reads or writes on the fields that manage the data cluster, such as `CLUSTD` or `SRTF2` and `CLUSTR`. These fields contain the data cluster in an internal format and can only be handled correctly using the `EXPORT TO DATABASE` and `IMPORT FROM DATABASE` statements.

SQL statements should only be used if the corresponding combination of special data cluster statements would be too inefficient. The SQL statement `INSERT` should never be used on export/import tables.

ABAP SQL statements can, in certain circumstances, be used for administrative tasks on export/import tables, for which the data cluster specific statements are not suitable.

An export/import table can be searched systematically for a particular data cluster using `SELECT`. Here, information in the freely definable columns can be evaluated.

The following example deletes all data clusters of an area from the export/import tables `DEMO_INDX_BLOB` and `DEMO_INDX_TABLE`. Each time, all rows of the data cluster are to be deleted.

The following example demonstrates how the name and area of a data cluster can be changed in the database tables `DEMO_INDX_BLOB` and `DEMO_INDX_TABLE` using `UPDATE`. Solving this problem using the special cluster statements would be considerably more time-consuming.

DELETE FROM demo\_indx\_blob WHERE relid = '..'. \\n\\ \\nDELETE FROM demo\_indx\_table WHERE relid = '..'. UPDATE demo\_indx\_blob \\n SET relid = @new\_relid, \\n id = @new\_id \\n WHERE relid = @old\_relid AND \\n id = @old\_id. \\n\\ \\nUPDATE demo\_indx\_table \\n SET relid = @new\_relid, \\n id = @new\_id \\n WHERE relid = @old\_relid AND \\n id = @old\_id. abenabap.html abenabap\_reference.html abendata\_cluster.html abapexport\_data\_cluster.html abenexport\_data\_cluster\_indx.html