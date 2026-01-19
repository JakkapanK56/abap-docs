---
title: "ABENNEWS-40-SE30"
description: |
  ABENNEWS-40-SE30 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-40-SE30.htm"
abapFile: "ABENNEWS-40-SE30.html"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "internal-table", "ABENNEWS", "SE30"]
---

[1\. Measuring Specific Units](#ABAP_MODIFICATION_1@4@)

[2\. Transferring the Performance Data File from or to a Local File](#ABAP_MODIFICATION_2@4@)

[3\. Testing a Function Module within Runtime Analysis](#ABAP_MODIFICATION_3@4@)

[4\. New Statements for ABAP Objects](#ABAP_MODIFICATION_4@4@)

[5\. Additional Statements for Internal Tables](#ABAP_MODIFICATION_5@4@)

[6. Additional Option `with memory management` During Execution](#ABAP_MODIFICATION_6@4@) 

[7\. Improvements in the Table Hit List](#ABAP_MODIFICATION_7@4@)

[8. Increase of Profile Parameter `abap/atrasizequota`](#ABAP_MODIFICATION_8@4@)

[9\. Interface Changes](#ABAP_MODIFICATION_9@4@)

New keywords or the *System* menu can be used to measure various program units. Each unit is available under the menu option **Runtime Analysis on**. The individual units measured are available under **Runtime Analysis**.

The overview screen specifies the total time (as if the complete program had been measured). The overview screen for a specific unit can be displayed by double-clicking **Runtime Analysis On** in the hierarchy.

The following is possible:

Function modules can now be tested with Runtime Analysis.

For ABAP Objects, the following new statements are measured: `CALL METHOD`, `RAISE EVENT` and `CREATE OBJECT`

The following statements for internal tables can be measured: `SORT, COLLECT, APPEND, INSERT, MODIFY, DELETE, READ TABLE.`

If the **With memory management** button is selected, the following are measured:

The following improvements were made:

In the standard setting, profile parameter `abap/atrasizequota` is now set to 30 `MB` rather than 10 `MB`.

The following interfaces were changed:

-   Static Activation of Runtime Measurement
-   using the keywords `SET RUN TIME ANALYZER ON` and `SET RUN TIME ANALYZER OFF`.
-   Dynamically Activatable Runtime Measurement
-   using *System -> Utilities -> Runtime analysis -> Activate* and *System -> Utilities -> Runtime Analysis -> Deactivate* or transaction `/RON` and `/ROFF`.
-   See development request 92212.

-   To local file
-   A performance data file can be transferred to a local file and retrieved later. It is therefore now possible to save performance data files.
-   From local file
-   A performance data file transferred to a local file can be retrieved from this local file. The user must ensure that the local file is deleted at operating system level if it is no longer required.

-   Memory: (Re-)allocate, release
-   Using the data and data control blocks
-   [`PXA`](ABENPXA_GLOSRY.html): find, create
-   [Dynpro](ABENDYNPRO_GLOSRY.html) synchronization

-   Navigation to table definition
-   The table definition in the [repository](ABENREPOSITORY_GLOSRY.html) can be displayed by double-clicking the table name.
-   The development class (package) for each table is displayed in a separate column

-   Runtime analysis\\ *\->*\\ Transfer File\\ *\->*
-   To Local File...
-   From Local File...
-   Utilities\\ *\->*\\ Display Table

abenabap.html abennews.html abennews-4.html abennews-40.html