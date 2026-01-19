---
title: "ABENNEWS-46-ENTWICKLUNGEN"
description: |
  ABENNEWS-46-ENTWICKLUNGEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46-ENTWICKLUNGEN.htm"
abapFile: "ABENNEWS-46-ENTWICKLUNGEN.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "internal-table", "field-symbol", "ABENNEWS", "ENTWICKLUNGEN"]
---

[1. New Event Keyword `LOAD-OF-PROGRAM`](#ABAP_MODIFICATION_1@4@)

[2\. Typing of Ranges Tables](#ABAP_MODIFICATION_2@4@)

[3\. Increased Precision in BCD Arithmetic](#ABAP_MODIFICATION_3@4@)

[4\. F1 Help for Dynamic Field Access](#ABAP_MODIFICATION_4@4@)

[5\. More Local and Global Data Descriptions](#ABAP_MODIFICATION_5@4@)

[6\. More Literals and Memory for Literals](#ABAP_MODIFICATION_6@4@)

[7\. Improvements in Documentation](#ABAP_MODIFICATION_7@4@)

[`LOAD-OF-PROGRAMM`](ABAPLOAD-OF-PROGRAM.html) is an event keyword which processes an event immediately before execution of the first `load` statement. For example, when a function module is called, the statements following `LOAD-OF-PROGRAM` are executed first after the function pool has been loaded into the program memory. It is then no longer necessary to know the order of execution.

This statement has the same effect as a program constructor, similar to the class constructor in `ABAP Objects`, which replaces the event `LOAD-OF-PROGRAM` in [class pools](ABENCLASS_POOL_GLOSRY.html) and global classes.

The addition `RANGE` of the statements [`DATA`](ABAPDATA.html), [`STATICS`](ABAPSTATICS.html), and [`TYPES`](ABAPTYPES.html) defines an internal table with the type [`RANGES`](ABAPRANGES.html). This addition can also be used for the definitions in classes and is supported in ABAP Dictionary.

In rare cases in fixed point arithmetic, calculations were performed with a precision of 15 instead of 31 places. This meant that fields with many [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) were sometimes rounded off. Now calculations are always performed to an accuracy of 31 places.

This change has resulted in a significant reduction of the computing time required for multiplication and division.

Previously, F1 help in [dynpros](ABENDYNPRO_GLOSRY.html) and lists was not available for fields addressed using [field symbols](ABAPFIELD-SYMBOLS.html) or [`ASSIGN COMPONENT ...`](ABAPASSIGN_DYNAMIC_COMPONENTS.html), although the assigned field was defined in ABAP Dictionary. Online help is now available for all fields that have a `HELP ID`.

Previously, a 16 KB address space was available for global and local static descriptions. Now 16 KB each are reserved separately for the local definitions of subroutines, functions, and methods to reduce the workload in the address space for global descriptions.

The address space for [literals](ABENLITERAL.html) has also been expanded so that 64 KB are now available for the different literals. The length of the individual literals is limited only by operating system restrictions. Previously, a maximum of 64 KB was available for all literals together (indexes and texts).

The documentation has been improved as follows:

-   Standardized presentation in the keyword documentation and the application help `BC - ABAP` Programming
-   Extensive documentation of dynpros and the structure `SYST` in the application help
-   `ABAP statement reference` in the application help
-   Detailed visualization of overviews by using figures in the application help
-   Links from the keyword documentation to the corresponding sections of the application help for each ABAP statement
-   All example programs for display, execution, and debugging available in transaction `ABAPDOCU`.

abenabap.html abennews.html abennews-4.html abennews-46a.html