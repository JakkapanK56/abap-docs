---
title: "ABENLDB_USAGE_EXECUTABLE"
description: |
  ABENLDB_USAGE_EXECUTABLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLDB_USAGE_EXECUTABLE.htm"
abapFile: "ABENLDB_USAGE_EXECUTABLE.html"
keywords: ["select", "loop", "do", "if", "case", "class", "data", "ABENLDB", "USAGE", "EXECUTABLE"]
---

If an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) is linked with a logical database, that is, the logical database is entered in the program properties, the subroutines of the [database program](ABENLDB_PROGRAM.html) are combined with the [reporting event blocks](ABENABAP_PROCESSING_BLOCKS.html) of the executable program to create a complete modularized program for reading and processing data. The individual processing blocks are called in a specific, predefined order by the runtime framework. The runtime behavior is controlled by the structure, selections, and `PUT` statements of the logical database, as well as the `GET` statements of the executable program.

The runtime framework calls are depend on both the structure of the logical database and the definition of the executable program. The structure of the logical database determines in which order the subroutines of the logical database are called, which in turn call the `GET` event blocks in the executable program. The `GET` event blocks defined in the executable program determine the read depth of the logical database.. `NODES` statements or `TABLES` statements in the global declaration part of the executable program determine which of the input fields defined in the logical database are included on the selection screen and define interface work areas for passing data between the logical database and the executable program.

The actual access to the database usually takes places using ABAP SQL statements that are implemented in the `put_node` subroutines. The data read is passed to the executable program using the interface work areas. Once the data is read in the logical database program, the executable program can process this data in the `GET` event blocks. This separates data selection and data processing.

If a logical database is specified in the properties of an executable program, this modifies the [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) of the program. The standard selection screen contains both the selections (selection criteria and parameters) of the logical database and the program-specific selections. By declaring interface work areas, the executable program determines which database-specific selections are relevant for its data evaluation and appear on the selection screen.

The following describes the order in which the ABAP runtime framework calls the subroutines of the logical database and the event blocks in the executable program. Usually, the subroutines are called before the event blocks. To do this, various processors (selection screen processor and reporting processor) are executed in sequence in the runtime framework (see also [Flow of an Executable Program](ABENREPORTING_PROCESS.html)).

Authorization checks performed by the statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html) are useful in the following subroutines of the database program or the event blocks of the executable program:

Authorization checks should be implemented centrally and should be reusable in the logical database program. The actual location of an authorization check, whether in the database program or in the executable program, can depend on the following, among others:

[Logical Database, Linked with a Program](ABENREPORT_ABEXA.html)

-   Subroutines `pai` and `authority_check...`
-   Event blocks `AT SELECTION SCREEN ...` and `GET`

-   The structure of the logical database. For example, in the case where a company code authorization is only to be checked when a line with the Company Code field is read at runtime as well.
-   Performance. Multiple checks, for example within `SELECT` loops, should be avoided.

1.  Initializations before selection screen processing.
2.  Subroutine `init`
3.  This subroutine is called once only before the selection screen is sent for the first time.
4.  Event block `INITIALIZATION`
5.  This event occurs once only before the selection screen is sent for the first time.
6.  PBO of the selection screen. Initializations every time before the selection screen is sent (for example, to get the defaults for key fields).
7.  Subroutine `pbo`
8.  This subroutine is called every time before a selection screen is sent.
9.  Event block `AT SELECTION-SCREEN OUTPUT`
10.  This event occurs every time before a selection screen is sent.
11.  The selection screen is displayed, and the user can enter values in the input fields.
12.  Request for input help (`F4`) and field help (`F1`) (optional).
13.  Subroutines `...val` and `...hlp`
14.  If the user requests input help or field help for database-specific parameters or selection criteria, these subroutines are called accordingly.
15.  Event blocks `AT SELECTION-SCREEN ON VALUE-REQUEST FOR ...` and `AT SELECTION-SCREEN ON HELP-REQUEST FOR ...`
16.  If the user requests input help or field help for program-specific parameters or selection criteria, the corresponding events are raised accordingly.
17.  PAI of the selection screen. This checks whether the user input is correct, complete, and plausible. An authorization check for the user is also performed. If an error occurs, a user dialog with the user can be run and the fields reset for new input.
18.  Subroutine `pai USING fname mark`.
     The interface parameters `fname` and `mark` are passed by the runtime framework. `fname` contains the name of a selection criterion or parameter on the selection screen. If `mark` is initial, the user entered a simple single value selection or interval selection. If `mark` has the value *\**, the user also made entries on the multiple selection screen. A combination of *\** for `fname` and *ANY* for `mark` enables all entries to be checked at once for a user action.
19.  Event blocks `AT SELECTION-SCREEN ON ...` and `AT SELECTION-SCREEN` without additions.
20.  Events for processing a specific input field, for processing multiple selections, and for processing all user input.
21.  Actions before data is read.
22.  Subroutine `before_event` with parameter `START-OF-SELECTION`
23.  The logical database can perform actions before data is read, such as initializing tables.
24.  Event block `START-OF-SELECTION`
25.  The first reporting event after selection screen processing. Preparations can be performed in the program in this event block.
26.  Reading data in the logical database and processing in the executable program.
27.  Subroutines `put_node`
28.  The logical database reads the selected data of the node `node`.
29.  Event block `GET table [LATE]`
30.  This event is raised in the subroutine above by the `PUT` statement. In this event block, the data read for `node` can be passed from the corresponding interface work area.
31.  Actions after data is read.
32.  Subroutine `after_event` with parameter `END-OF-SELECTION`
33.  The logical database can perform actions before data is read, such as releasing memory.
34.  Event block `END-OF-SELECTION`
35.  Last reporting event. In this event block, all buffered data can be processed (for example, sorted).
36.  If the steps above involve writing data to a classic list, control is passed from the runtime framework to the list processor and the list is displayed.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_usage.html