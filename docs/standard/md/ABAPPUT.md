---
title: "ABAPPUT"
description: |
  ABAPPUT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPUT.htm"
abapFile: "ABAPPUT.html"
keywords: ["do", "if", "case", "data", "types", "internal-table", "field-symbol", "ABAPPUT"]
---

[Short Reference](ABAPPUT_SHORTREF.html)

`PUT \{ node | <node>\ \}.`

This statement is only possible in the [database program](ABENDATABASE_PROGRAM_GLOSRY.html) of a logical database in the subroutine named `put_node`. In the runtime framework, it raises the event [`GET node`](ABAPGET-.html) and thereby signals that data is available in the [table work area](ABENTABLE_WORK_AREA_GLOSRY.html) of the node `node`. If there is an appropriate event block implemented in the [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) linked with the logical database, this block is executed.

After the associated event block has been processed, the subroutine `put_next_node` of the node `next_node` that follows in the logical database structure is called, if this node is processed in the linked executable program. Once this subroutine is exited, the event `GET node LATE` is raised and, if implemented, its event block is processed in the executable program.

The database program must contain one of the statements [`NODES`](ABAPNODES.html) or [`TABLES`](ABAPTABLES.html) for the node `node`. The syntax of the statement `PUT` depends on the [node type](ABAPNODES.html).

The subroutine `put_root_node` is part of the database program of a logical database with a node `root_node` of type A, which is assigned the data types `S_CARR_ID` and `S_CONN_ID` from the ABAP Dictionary. Accordingly, a field symbol `<root_node>` is specified after `PUT`, and its value is set depending on the content of the corresponding line of the internal table `dyn_node_types`.

The following lines can be part of an executable program that is linked with the logical database. The specification after `TYPE` in the statement `NODES` defines the type of the field symbol `<root_node>` and writes the type to the column `type` in the corresponding line in the internal table `dyn_node_types` in the database program of the logical database.

-   If the node is type C, S, or T, the name of the node `node` must be specified after `PUT`.
-   If the node is type A, a field symbol `<node>` must be specified with the name of the node after `PUT`. In the statement `PUT`, the field symbol must be assigned a data object of the data type that is requested in the `TYPE` addition of the statement `NODES` in the linked executable program. This data type can be taken from the internal table `dyn_node_types` that is predefined in the database program.

-   If the logical database is not directly linked with an executable program, but is called using the function module `LDB_PROCESS` instead, the statement `PUT` does not raise an event and ensures that the corresponding callback routine is called in the calling program instead.
-   See also [Database Program](ABENLDB_PROGRAM.html).
-   If logical databases are no longer created, the statement `PUT` is no longer needed either.

FORM put\_root\_node. \\n\\ \\n DATA carr TYPE s\_carr\_id. \\n DATA conn TYPE s\_conn\_id. \\n DATA dyn\_node LIKE LINE OF dyn\_node\_types. \\n\\ \\n READ TABLE dyn\_node\_types INTO dyn\_node \\n WITH KEY node = 'ROOT\_NODE'. \\n\\ \\n CASE dyn\_node-type. \\n WHEN 'S\_CARR\_ID'. \\n carr = ... \\n ASSIGN carr TO . \\n WHEN 'S\_CONN\_ID'. \\n conn = ... \\n ASSIGN conn TO . \\n WHEN OTHERS. \\n EXIT. \\n ENDCASE. \\n\\ \\n PUT . \\n\\ \\nENDFORM. NODES root\_node TYPE s\_carr\_id. \\n "TYPE s\_conn\_id. \\n\\ \\nGET root\_node. \\n ... abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html abenldb\_statements.html