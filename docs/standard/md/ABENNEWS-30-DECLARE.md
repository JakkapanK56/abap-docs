---
title: "ABENNEWS-30-DECLARE"
description: |
  ABENNEWS-30-DECLARE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-30-DECLARE.htm"
abapFile: "ABENNEWS-30-DECLARE.html"
keywords: ["do", "if", "data", "types", "internal-table", "field-symbol", "ABENNEWS", "DECLARE"]
---

[1\. Defining Types](#ABAP_MODIFICATION_1@4@)

[2\. Type Pools](#ABAP_MODIFICATION_2@4@)

[3\. Defining Constants](#ABAP_MODIFICATION_3@4@)

[4\. Defining Static Variables](#ABAP_MODIFICATION_4@4@)

[5\. Multiple Nesting of Structures](#ABAP_MODIFICATION_5@4@)

[6\. Internal Tables without Header Line](#ABAP_MODIFICATION_6@4@)

[7\. Specifying the Types of Parameters and Field Symbols](#ABAP_MODIFICATION_7@4@)

The [`TYPES`](ABAPTYPES_SIMPLE.html) statement has been introduced, which makes it possible to define new types. It has a similar syntax to the `DATA` statement.

The type pools (see [`TYPE-POOL`](ABAPTYPE-POOL.html)) make it possible to form groups of global types and their associated constants.

The [`CONSTANTS`](ABAPCONSTANTS.html) statement makes it possible to define constants. The syntax of the `CONSTANTS` statement is similar to that of the `DATA` statement. Both simple fields and structures can be defined as constants. Constant tables cannot be defined.

Fields within subroutines and function modules that are defined with `DATA` are re-created and re-initialized each time the routine is called. The new statement [`STATICS`](ABAPSTATICS.html), which can be used within subroutines and function modules, makes it possible to define fields that keep their values beyond the calls. This statement supports nearly all of the additions used with the `DATA` statement.

Previously, it was only possible to define simple nested structures using the `DATA` statement. It was not possible to nest `DATA BEGIN OF, .... END OF`. This restriction has now been lifted, which makes it possible to define structures as components of another structure. This is now possible in the [`DATA`](ABAPDATA_STRUC.html), [`STATICS`](ABAPSTATICS.html), [`CONSTANTS`](ABAPCONSTANTS.html), and [`TYPES`](ABAPTYPES_STRUC.html) statements.

Previously, each internal table automatically had a [header line](ABENHEADER_LINE_GLOSRY.html), which was used as a table work area. A table with header line is therefore a mixture of two data objects (the table and the header line) under a single name. It is now possible to define tables and table types without header lines in the statements [`DATA`](ABAPDATA_ITAB.html), [`STATICS`](ABAPSTATICS.html), and [`TYPES`](ABAPTYPES_ITAB.html), using the following syntax:

These tables can be used without header lines as components in structures. If a work area is needed for a table, it must be under another name.

If the statements `DATA` and `STATICS` are used, the addition `... WITH HEADER LINE` can be used to create a table with a header line from a table without a header line. This can only be done at the top nesting level, not within a structure. The property of having a header line is property of a data object and not a type property, which means that this addition cannot be used in the `TYPES` statement.

The parameters of subroutines and field symbols can now be typed using the additions `LIKE fld` and `TYPE typ`. The parameters of function modules can now be typed using references to predefined ABAP types and global types (types from type pools) as well as referencing `ABAP Dictionary` fields.

DATA TAB TYPE STRUC OCCURS 0. \\n abenabap.html abennews.html abennews-30.html