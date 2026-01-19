---
title: "ABENLDB_PROGRAM"
description: |
  ABENLDB_PROGRAM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLDB_PROGRAM.htm"
abapFile: "ABENLDB_PROGRAM.html"
keywords: ["select", "loop", "do", "if", "class", "data", "internal-table", "ABENLDB", "PROGRAM"]
---

The database program of a logical database `ldb` has the name `SAPDBldb`. It is used as a container for [subroutines](ABENSUBROUTINE_GLOSRY.html) called by the ABAP runtime framework when a logical database is processing. The order of the calls and how they interact with events in executable programs or the function module `LDB_PROCESS` is determined by the structure of the logical database.

A logical database program usually contains the following subroutines.

The following internal table exists implicitly and can be used in the program:

DATA: BEGIN OF get\_events OCCURS 10, \\n        node(10), \\n        kind, \\n      END OF get\_events.

In each row, it contains the name of a node of the logical database in the component `node`. The component `kind` indicates whether and how the node is requested by the consumer:

When a selection include is created, the Logical Database Builder generates a template based on the existing structure and the selections defined in the selection include. The generated database program consists of multiple include programs:

The predefined `NODES` or `TABLES` statements and the predefined names of the automatically created include programs and subroutines must not be modified. It is, however, possible to define further include programs or subroutines and modify the ABAP statements that read data. User-defined include programs must follow the naming convention `DBldbFnnn`, otherwise they cannot be transported by the logical database.

`LFB1` is a successor of `LFA1` in the structure of the logical database. The following selection criteria are defined in the selection include:

A possible section of a database program is therefore:

An executable program linked with the logical database contains the lines:

In this example, the runtime framework calls the routine `put_lfa1` after the event `START-OF-SELECTION`. The statement `PUT lfa1` raises the event `GET lfa1`. Once the corresponding event block has been processed in the program, `PUT lfa1` branches to the subroutine `put_lfb1`. From here, the event `GET lfb1` is raised in the program. If `LFB1` is the last node to be read, processing of the `SELECT` loop is then resumed in `put_lfb1`. If not, a branch to the subroutine `put_node` of the next node is performed. At the end of the `SELECT` loop of the last node, the `SELECT` loop of the higher-level node is resumed. The programming across nested `SELECT` loops makes the process flow easier to understand here. This should be avoided in real logical databases, however, to reduce the number of database reads. The `PUT` statements also do not branch to the subroutines for authorization checks in this example.

See also [Example of a Database Program](ABENLDB_PROGRAM_EXAMPLE.html).

-   `ldb_process_init`
-   Called once before the logical database is processed to prepare the database for any multiple calls by the function module `LDB_PROCESS`. If a logical database is to be called more than once consecutively, the subroutine must exist and its input/output parameter `subrc` must be set to zero. If the parameter `subrc` is not set to zero, the function module `LDB_PROCESS` raises the non-class-based exception `LDB_NOT_REENTRANT`.
-   `init`
-   Called once before the selections are processed.
-   `pbo`
-   Called each time before the selection screen is displayed, which means only when linked with executable programs and not when called using the function module `LDB_PROCESS`.
-   `pai`
-   Called each time a user action is performed on the selection screen, which means only when linked with executable programs and not in calls of the function module `LDB_PROCESS`. At the same time, the interface parameters `fname` and `mark` are passed to the subroutine.

-   `fname` contains the name of a selection criterion or parameter on the selection screen.
-   `mark` describes the selection made by the user. If `mark` contains a blank, this indicates that the user entered a simple single value or interval selection. If `mark` contains *\**, this indicates that the user also made entries on the multiple selection screen.

-   `ldb_process_check_selections`
-   Is called instead of the subroutine `pai` if the logical database is called without selection screen processing by the function module `LDB_PROCESS`. This subroutine can check the selections passed by the function module. The subroutine is called after the parameters and selection tables of the selection screen are filled by the interface parameters of `LDB_PROCESS`. If its input/output parameter `subrc` is not set to zero, the function module `LDB_PROCESS` raises the exception `LDB_SELECTIONS_NOT_ACCEPTED`. A message in `SYMSG` format can be assigned to the structured input/output parameter `msg`. This message is then available to the caller of the function module in the system fields `sy-msg...`.
-   `put_node`
-   Called in an order defined by the structure. This subroutine reads the data of the node `node` and uses the statement [`PUT node`](ABAPPUT.html) to trigger an appropriate `GET` event in the ABAP runtime framework. This statement is the central statement of this subroutine. It can be used only in a subroutine of a logical database whose structure contains the node `node` and whose name starts with `put_node`. The `PUT` statement branches the program flow in accordance with the structure of the logical database. The read depth is determined by the [`GET` statements](ABAPGET-.html) of the application program or by the interface parameter `CALLBACK` of the function module `LDB_PROCESS`. First, the subroutine `put_node` is processed for the root node. The statement `PUT` branches the program flow as follows:

-   If the subroutine `authority_check_node` exists in the database program, the statement `PUT` branches to this subroutine first.
-   The `PUT` statement then triggers a `GET` event in the runtime framework. If an associated statement [`GET node`](ABAPGET-.html) exists in a linked executable program, the corresponding event block is processed. If the parameter `CALLBACK` of the function module `LDB_PROCESS` is filled accordingly, the associated callback routine is called.
-   The `PUT` statement then branches the program flow as follows:
-   (a) To the next existing subroutine of a direct successor node, if a lower node (not necessarily the direct successor) of the associated subtree in the executable program or function module is requested using `GET`.
-   (b) To the subroutine of a node at the same level if the superordinate node branches to a subroutine of this type and if a node of this type is requested in the executable program or function module using `GET`. Here, the `PUT` statement starts again with the first step. Branching does not continue in the subroutine of the lowest node in a subtree requested using `GET`. Instead, the current subroutine is resumed. If a subroutine `put_node` is executed completely, the program flow returns to the `PUT` statement from which it branched to `put_node`.
-   After returning from a subordinate subroutine `put_node`, the `PUT` statement raises the event [`GET node LATE`](ABAPGET-.html) in the runtime framework.

-   `authority_check_node`
-   Called automatically by the statement `PUT node`. An authorization check for the affected node `node` from the structure of the logical database can be incorporated into this subroutine.
-   `put_ldb_sp`
-   Called when a selection is made using the search help, to be processed in the key selected in the search help. `ldb` is the name of the logical database. The table entries in the search help tables can be used to read the required entries from the root node from this subroutine. `PUT` can then be used to trigger the processing in the program. The subroutine `put_node` is then not called automatically for the root node.
-   `before_event`
-   Called before an event whose name is passed in the interface parameter `event`. Currently, only the value *START-OF-SELECTION* can be assigned to `event` to execute a subroutine before this time.
-   `after_event`
-   Called after an event whose name is passed in the interface parameter `event`. Currently, only the value *END-OF-SELECTION* can be assigned to `event` to execute a subroutine after this time.
-   `par_val`, `selcrit_val`, `selcrit-low_val`, `selcrit-high_val`
-   Called if the user calls the input help on the selection screen for the parameter `par` or the selection criterion `selcrit`, which must be one of the selections of the logical database.
-   `par_hlp`, `selcrit_hlp`, `selcrit-low_hlp`, `selcrit-high_hlp`
-   Called if the user calls the input help on the selection screen for the parameter `par` or the selection criterion `selcrit`, which must be one of the selections of the logical database.

-   *X*: Node is addressed using `GET` and `GET LATE`.
-   *G*: Node is addressed using `GET` only.
-   *L*: Node is addressed using `GET LATE` only.
-   *W*: Node is not addressed using `GET` or `GET LATE`. A subordinate node, however, is addressed using `GET` or `GET LATE`.
-   blank: Node is not addressed using `GET` or `GET LATE` and no subordinate node is addressed either.

-   `DBldbTOP`
-   Contains the program-initiating statement and global declarations.
-   `DBldbXXX` Incorporates the following include programs:

-   `DBldb001`, `DBldb002`, ...
-   For the subroutines `put_node` and `authority_check_node`.
-   `DBldbFXXX`
-   Subroutines for processing selection screens (initialization, PBO, PAI, ...).
-   `DBldbSXXX`
-   Subroutine `put_ldb_sp` for handling search helps.

-   `DBldbF001`, `DBldbF002`, ... User-defined include programs for additional functions.

SELECT-OPTIONS: slifnr FOR lfa1-lifnr, \\n sbukrs FOR lfb1-bukrs. FORM put\_lfa1. \\n SELECT \* FROM lfa1 \\n WHERE lifnr IN slifnr. \\n PUT lfa1. \\n ENDSELECT. \\nENDFORM. \\nFORM put\_lfb1. \\n SELECT \* FROM lfb1 \\n WHERE lifnr = lfa1-lifnr. \\n AND bukrs IN sbukrs. \\n PUT lfb1. \\n ENDSELECT. \\nENDFORM. GET lfa1. \\n WRITE lfa1-lifnr. \\nGET lfb1. \\n WRITE lfb1-bukrs. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_oview.html