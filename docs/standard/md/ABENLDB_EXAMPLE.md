---
title: "ABENLDB_EXAMPLE"
description: |
  ABENLDB_EXAMPLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLDB_EXAMPLE.htm"
abapFile: "ABENLDB_EXAMPLE.html"
keywords: ["select", "do", "if", "case", "method", "data", "ABENLDB", "EXAMPLE"]
---

This example demonstrates all significant components of the imaginary logical database `TEST_LDB`.

LFA1 \\n  | \\n  |----LFB1 \\n         | \\n         |----LFC1 \\n         | \\n         |----BKPF

SELECT-OPTIONS: slifnr   FOR lfa1-lifnr, \\n                sbukrs   FOR lfb1-bukrs, \\n                sgjahr   FOR lfc1-gjahr, \\n                sbelnr   FOR bkpf-belnr.

\*-------------------------------------------------------\* \\n\* DATABASE PROGRAM OF LOGICAL DATABASE TEST\_LDB \\n\*-------------------------------------------------------\* \\nPROGRAM sapdbtest\_ldb DEFINING DATABASE test\_ldb. \\nNODES: lfa1, \\n       lfb1, \\n       lfc1, \\n       bkpf. \\n\*-------------------------------------------------------\* \\n\* Initialize selection screen (processed before PBO) \\n\*-------------------------------------------------------\* \\nFORM init. \\n .... \\nENDFORM. \\n\*-------------------------------------------------------\* \\n\* PBO of selection screen \\n\*-------------------------------------------------------\* \\nFORM pbo. \\n .... \\nENDFORM. \\n\*-------------------------------------------------------\* \\n\* PAI of selection screen \\n\*-------------------------------------------------------\* \\nFORM pai USING fname mark. \\n  CASE fname. \\n    WHEN 'SLIFNR'. \\n     .... \\n    WHEN 'SBUKRS'. \\n     .... \\n    WHEN 'SGJAHR'. \\n     .... \\n    WHEN 'SBELNR'. \\n     .... \\n  ENDCASE. \\nENDFORM. \\n\*-------------------------------------------------------\* \\n\* Raise event GET lfa1 \\n\*-------------------------------------------------------\* \\nFORM put\_lfa1. \\n  SELECT \* FROM lfa1 \\n           WHERE lifnr IN @slifnr INTO @lfa1. \\n    PUT lfa1. \\n  ENDSELECT. \\nENDFORM. \\n\*-------------------------------------------------------\* \\n\* Raise event GET lfb1 \\n\*-------------------------------------------------------\* \\nFORM put\_lfb1. \\n  SELECT \* FROM lfb1 \\n           WHERE lifnr = @lfa1-lifnr \\n             AND bukrs IN @sbulrs \\n           INTO @lfb1. \\n    PUT lfb1. \\n  ENDSELECT. \\nENDFORM. \\n\*-------------------------------------------------------\* \\n\* Raise event GET lfc1 \\n\*-------------------------------------------------------\* \\nFORM put\_lfc1. \\n  SELECT \* FROM lfc1 \\n           WHERE lifnr = @lfa1-lifnr \\n             AND bukrs      =  @lfb1-bukrs \\n             AND gjahr      IN @sgjahr \\n           INTO lfc1. \\n    PUT lfc1. \\n  ENDSELECT. \\nENDFORM. \\n\*-------------------------------------------------------\* \\n\* Raise event GET bkpf \\n\*-------------------------------------------------------\* \\nFORM put\_bkpf. \\n  SELECT \* FROM bkpf \\n           WHERE bukrs      =  @lfb1-bukrs \\n             AND belnr      IN @sbelnr \\n             AND gjahr      IN @sgjahr \\n           INTO @bkpf. \\n    PUT bkpf. \\n  ENDSELECT. \\nENDFORM.

The `PROGRAM` statement has the addition [`DEFINING DATABASE test_ldb`](ABAPREPORT_DEFINING.html). This defines the link of the database program with the logical database `TEST_LDB`.

The nodes of the structure are declared using the [`NODES` statement](ABAPNODES.html). This creates the required interface work areas as table work areas. The statement [`TABLES`](ABAPTABLES.html) can be used as a node in the same way for database tables. If the nodes are not database tables, they must be declared using `NODES`. The interface work areas are shared by the database program and a linked executable program or the function module `LDB_PROCESS` and therefore become the interface used for passing data.

The selection screen can be initialized in the subroutines `init` and `pbo`.

The user input on the selection screen can be, for example, checked for authorizations in the subroutine `pai`. Other checks, such as plausibility or value range checks, are also possible here. If a check is negative, an error dialog can be programmed and the corresponding field can be initialized again.

The database tables are read in accordance with the selection criteria of the user and the associated `GET` events are raised in the subroutines `put_...`.

This program is only intended to demonstrate the principles of the structure of a logical database. It does not contain any methods for optimizing response times. The chronological order of the subroutine calls is determined by the structure of the logical database.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_examples.html