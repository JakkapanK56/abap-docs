---
title: "ABENLDB_STRUCTURE"
description: |
  ABENLDB_STRUCTURE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLDB_STRUCTURE.htm"
abapFile: "ABENLDB_STRUCTURE.html"
keywords: ["do", "if", "data", "types", "ABENLDB", "STRUCTURE"]
---

The structure of logical databases generally maps the foreign key relationships of hierarchical tables in the database. The structure of logical databases is tree-like and defined as follows:

There are three different types of nodes (see also [`NODES`](ABAPNODES.html)):

In most existing logical databases, the nodes refer to database tables whose data is read by the logical database and passed to a program for further evaluation. It is possible, however, to use structures from the ABAP Dictionary without a linked database. For technical reasons, there is an upper limit of 300 nodes in the structure of a logical database.

Each executable ABAP program linked with a logical database can contain a corresponding [`GET`](ABAPGET-.html) statement for each node in the structure. At program runtime, the associated event blocks are processed in the order defined by the hierarchical structure. If a program does not contain a `GET` statement for every node in a logical database, all nodes that are located in the path from the root to the nodes named by `GET` statements are processed.

If called using the function module `LDB_PROCESS`, the read depth of the logical database is defined using an interface parameter.

`LFA1` is the root node and `LFBK` and `LFB1` are branches of `LFA1`; `LFC1` is a branch of `LFB1`.

If `GET` statements are specified for all nodes in a linked executable program, the `GET` events occur in the order `LFA1`, `LFBK`, `LFB1`, `LFC1`. If only one `GET` statement is specified for `LFB1` in the program, `LFA1` and `LFB1` are processed.

-   There is exactly one node at the highest level (the root).
-   Each node can have one or more branches.
-   Each node can follow exactly one other node.

-   `T`: Database tables
-   The database table must be defined in the ABAP Dictionary. The name of the node must match the name of the table.
-   `S`: Data types from the ABAP Dictionary
-   If reference is made to any data type in the ABAP Dictionary, the node name can be different from the name of the data type and deep data types can be used as nodes.
-   `C`: Data types from type pools
-   If reference is made to a data type from a type pool, the same applies as to references to data types from the ABAP Dictionary. Data types from type pools should no longer be used.

LFA1 \\n | \\n |----LFBK \\n | \\n |----LFB1 \\n | \\n |----LFC1 abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_oview.html