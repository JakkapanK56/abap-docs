---
title: "ABENNEWS-610-REFERENZEN"
description: |
  ABENNEWS-610-REFERENZEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-610-REFERENZEN.htm"
abapFile: "ABENNEWS-610-REFERENZEN.html"
keywords: ["do", "if", "case", "data", "types", "internal-table", "field-symbol", "ABENNEWS", "610", "REFERENZEN"]
---

[1. Typing Using `TYPE DATA`](#ABAP_MODIFICATION_1@4@)

[2. Specifying Types for `CREATE`](#ABAP_MODIFICATION_2@4@)

[3\. Uppercase and Lowercase in Dynamically Specified Types](#ABAP_MODIFICATION_3@4@)

[4\. Defining Typed Data References](#ABAP_MODIFICATION_4@4@)

[5\. Casting Data References](#ABAP_MODIFICATION_5@4@)

[6. Additional Type Information for `ASSIGN dref->*`](#ABAP_MODIFICATION_6@4@)

[7. Any Typing for `CREATE DATA`](#ABAP_MODIFICATION_7@4@)

[8\. Dereferencing in Any Operand Positions](#ABAP_MODIFICATION_8@4@)

`TYPE DATA` was previously handled like [`TYPE REF TO DATA`](ABAPTYPES_SIMPLE.html) and were therefore completely typed. Now `TYPE DATA` can only be used for formal parameters and field symbols; otherwise a syntax error occurs. A non-generic type can now be specified after `REF TO`.

A type no longer needs to be specified for the statement [`CREATE DATA ...`](ABAPCREATE_DATA.html) if the reference is completely typed. In this case, the new data object is given the type of the reference.

In the statement [`CREATE DATA ...`](ABAPCREATE_DATA.html), previously only uppercase letters could be used for the field content of dynamically specified types. In ABAP release 6.10, lowercase letters can also be used. Initially the system searches using the specified field content; if this search fails, the system searches again using uppercase letters. If this search also fails, a runtime error occurs.

In the case of the statements [`TYPES`](ABAPTYPES_SIMPLE.html) and [`DATA`](ABAPDATA_SIMPLE.html), a fixed type can now be specified for the addition `REF TO`.

The introduction of typed data references enables downcasts in assignments between data reference variables. Downcasts must be expressed using a special assignment operator, `?=`.

Downcasts for data references.

If a data reference has fixed typing, it passes on its additional attributes if it is assigned to an untyped data reference.

DATA: \\n  dataobj   TYPE dtel\_1, \\n  dataref\_1 TYPE REF TO dtel\_2, \\n  dataref\_2 TYPE REF TO data. \\nFIELD-SYMBOLS <fs> TYPE ANY. \\n\\ \\nGET REFERENCE OF dataobj TO dataref\_1. \\ndataref\_2 = dataref\_1. \\nASSIGN dataref\_2->\* TO <fs>.

In this case, `dataref_1->*`, `dataref_2->*`, and <F> inherit the attributes of the dictionary data element `DTEL_2`.

New types, such as data references and internal tables, can be constructed when data objects are created using the statement [`CREATE DATA`](ABAPCREATE_DATA.html). Previously, only references to existing types were possible.

If a data reference variable is completely typed, it can be dereferenced in any operand position, using the dereferencing operator `->*`.

Dereferencing data references.

DATA: \\n d1 TYPE REF TO data, "Generic \\n d2 TYPE REF TO i. "Typed \\nd1 = d2. \\nd2 ?= d1. DATA dref TYPE REF TO i. \\n... \\ndref->\* = dref->\* + 1. abenabap.html abennews.html abennews-6.html abennews-610.html