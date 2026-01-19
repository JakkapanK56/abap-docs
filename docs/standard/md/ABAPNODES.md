---
title: "ABAPNODES"
description: |
  ABAPNODES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPNODES.htm"
abapFile: "ABAPNODES.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABAPNODES"]
---

[Short Reference](ABAPNODES_SHORTREF.html)

`NODES node [TYPE type].`

The only purpose of the statement `NODES` is to pass data from [logical databases](ABENLOGICAL_DATA_BASE_GLOSRY.html) to [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html). It defines an [interface work area](ABENINTERFACE_WORK_AREA_GLOSRY.html) and is allowed only in the global declaration part of executable programs that are linked with a logical database, and in the [database program](ABENDATABASE_PROGRAM_GLOSRY.html) of logical databases. `node` must be the name of a node of the logical database. `NODES` declares a [table work area](ABENTABLE_WORK_AREA_GLOSRY.html)\\ `node` for the corresponding node. The data type of the table work area is either predefined in the node of the logical database or can be chosen from a list using the addition `TYPE`.

The nodes of the structure of a logical database are maintained in transaction `SE36` and can have the following node types:

The statement `NODES` (or `TABLES`) of the [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) controls the structure of the standard selection screen of the logical database. Only those input fields are displayed for whose nodes or a node lying directly below in the hierarchy a corresponding `NODES` (or `TABLES`) statement appears in the executable program.

The database program is responsible for assigning data to the table work area. For every node of the logical database, there is a subroutine `put_node` in the database program that uses the statement [`PUT`](ABAPPUT.html) to signal to the executable program that data is available in the table work area `node`.

For all table work areas `node` specified after `NODES` (or `TABLES`) in the executable program, event blocks can be created for the [reporting events](ABENREPORTING_EVENT_GLOSRY.html)\\ [`GET node [LATE]`](ABAPGET-.html). The events are raised by the statement `PUT node` or `PUT <node>` in the database program. After an event of this type, the table work area filled in the database program can be evaluated in the executable program. For nodes of type A, the data is available only within the event blocks. For all other types, the data is available in the entire executable program.

A logical database contains a root node `root_node` of node type S, to which the data type `INT4` is assigned. The top include of the database program then contains the statement:

In addition, the database program contains the following subroutine:

If the [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) below is linked with the logical database, it is given the numbers 1 through 10 in the table work area `root_node` when the program is executed and writes them to a list when the event `GET` is raised:

-   **Node Type T**
-   The data type of the table work area can be a [flat structure](ABENFLAT_STRUCTURE_GLOSRY.html) from the ABAP Dictionary, in particular a database table or a [view](ABENVIEW_GLOSRY.html). The name of the node must be identical to the name of the structure.
-   In this case, the statements `NODES` and [`TABLES`](ABAPTABLES.html) have the same meaning. In the executable program, either the statement `NODES` or the statement `TABLES` can be used for every node of type T, where `node` is the name of the node or of the structure. The addition `TYPE` is not allowed. The database program contains one `TABLES` statement for every node of type T.
-   **Node Type S**
-   The data type of the table work area can be any data type from the ABAP Dictionary. The name of the node can differ from the name of the type.
-   In executable programs, a `NODES` statement can be specified for each node of type S. The addition `TYPE` is not allowed. The database program contains one `NODES` statement for every node of type S.
-   **Node Type C**
-   The data type of the table work area can be any data type from a [type pool](ABENTYPE_POOL_GLOSRY.html). The name of the node can differ from the name of the type.
-   In executable programs, a `NODES` statement can be specified for each node of type C. The addition `TYPE` is not allowed. The database program contains one `NODES` statement for every node of type C.
-   **Node Type A**
-   A list of any data types from the ABAP Dictionary is assigned to this node. The actual type is determined in the executable program by the addition `TYPE` of the statement `NODES`.
-   In the executable program, the statement `NODES` can be specified for every node of type A. Here, the addition `TYPE` must be used to specify one of the assigned data types from the list. The addition `TYPE` defines the data type of the table work area in the executable program and in the database program. The database program contains a `NODES` statement without the addition `TYPE` for every node of type A.

-   Table areas declared with `NODES` behave like common data declared with the addition [`COMMON PART`](ABAPDATA_COMMON.html). They are shared by the programs of a [program group](ABENPROGRAM_GROUP_GLOSRY.html).
-   `NODES` and not `TABLES` should always be used for interface work areas for logical databases to make clear that they are nodes of logical databases.
-   If logical databases are no longer used, the statement `NODES` is no longer needed either.

NODES root\_node. FORM put\_root\_node. \\n DO 10 TIMES. \\n root\_node = sy-index. \\n PUT root\_node. \\n ENDDO. \\nENDFORM. REPORT demo\_nodes. \\n\\ \\nNODES root\_node. \\n\\ \\nGET root\_node. \\n WRITE root\_node. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html abenldb\_interfaces.html