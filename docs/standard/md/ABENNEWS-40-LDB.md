---
title: "ABENNEWS-40-LDB"
description: |
  ABENNEWS-40-LDB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-40-LDB.htm"
abapFile: "ABENNEWS-40-LDB.html"
keywords: ["do", "if", "data", "ABENNEWS", "LDB"]
---

[1\. Logical Nodes](#ABAP_MODIFICATION_1@4@)

[2\. Adjustment to Function Builder](#ABAP_MODIFICATION_2@4@)

[3\. Call by Function Module](#ABAP_MODIFICATION_3@4@)

The nodes of a logical database can have any name; the names are no longer strictly linked with the Dictionary tables. Instead, a node can have any Dictionary or local type. For example, a dictionary structure can be used for multiple nodes and a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) can return a complex data object *in one portion*. New language element: `NODES`.

The created program structure and the Logical Database Builder were adjusted to the form known to the Function Builder.

The restriction that logical databases can only be used with [`SUBMIT`](ABAPSUBMIT.html) is no longer valid. A logical database therefore can be used by any program to collect data. You can also call the same logical database more than once and nested calls of different logical databases are also allowed.

See documentation on the function module `LDB_PROCESS`.

abenabap.html abennews.html abennews-4.html abennews-40.html