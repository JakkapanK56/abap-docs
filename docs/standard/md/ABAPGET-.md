---
title: "ABAPGET-"
description: |
  ABAPGET- - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET-.htm"
abapFile: "ABAPGET-.html"
keywords: ["select", "do", "while", "if", "data", "types", "ABAPGET"]
---

[Short Reference](ABAPGET_SHORTREF.html)

`GET node [LATE]\ [FIELDS f1 f2 ...].`

[1. `GET node [FIELDS f1 f2 ...].`](#ABAP_ALTERNATIVE_1@2@)

[2. `GET node LATE [FIELDS f1 f2 ...].`](#ABAP_ALTERNATIVE_2@2@)

[`... FIELDS f1 f2 ...`](#ABAP_ONE_ADD@1@)

The statement `GET` is only intended for use in [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html) that are linked with a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html). `GET` can be used to handle two types of events while executable program of this type are [processing](ABENREPORTING_PROCESS.html):

If a [list is written](ABAPWRITE-.html) during a `GET` event, an automatic line break is created beforehand.

This statement defines an event block whose event is raised by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) after an executable program [is submitted](ABENREPORTING_PROCESS.html), if the logical database with which the program is linked provides data in the work area `node`. The `node` work area must be declared using the [`NODES`](ABAPNODES.html) statement (or [`TABLES`](ABAPTABLES.html)). The data can be processed in the event block.

`GET node` also controls the behavior of the logical database.

After the event block `GET` is [ended regularly](ABENEND_PROCESSING_BLOCKS.html), the nodes that are inferior in the hierarchical structure of the [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) are processed (see [`PUT`](ABAPPUT.html)).

At the end of a hierarchy level of the logical database, all fields of the work area `node` are set to hexadecimal zero.

This statement defines an event block whose event is raised by the ABAP runtime framework after an executable program [is submitted](ABENREPORTING_PROCESS.html), if the logical database has read all records of node `node`. The same applies to `node` and `FIELDS` as to the previous variant. This event block can be used for final processing actions for the hierarchy level of the node.

The addition `FIELDS` specifies that the logical database reads only the specified fields `f1 f2 ...` and the key fields for node `node`. To do this, the node must be defined for field selection in the logical database using [`SELECTION-SCREEN FIELD SELECTION`](ABAPSELECTION-SCREEN_LDB_FIELD.html). The content of the remaining fields of the work area is set to hexadecimal zero.

[Example for Reporting Events](ABENREPORT_ABEXA.html)

-   Read events of the logical database
-   Closing a hierarchy level in the logical database

-   The event blocks after `GET` are implemented internally as [procedures](ABENPROCEDURE_GLOSRY.html). Declarative statements in `GET` event blocks create local data.
-   If logical databases are no longer used, it is no longer necessary to use the statement `GET node` either.

-   The logical database reads all data from all nodes that are not defined for field selection using [`SELECTION-SCREEN FIELD SELECTION`](ABAPSELECTION-SCREEN_LDB_FIELD.html) in the logical database and are located on the access path of the logical database superior to `node`. This is independent of whether `GET` event blocks have been defined for these nodes or not. However, only the data of those nodes can be accessed for which a work area was declared using the `NODES` (or `TABLES`) statement.
-   If a field selection is defined in the logical database for nodes on the access path of the logical database superior to `node` and for which no `GET` event blocks are defined, all data is read only for the nodes with a `NODES` (or `TABLES`) statement exists. For nodes without a `NODES` (or `TABLES`) statement, only the key fields are read, since the logical database needs the key fields to build the access path.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html abenldb\_reporting\_statements.html