---
title: "ABENNEWS-756-ASSIGNMENTS"
description: |
  ABENNEWS-756-ASSIGNMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-756-ASSIGNMENTS.htm"
abapFile: "ABENNEWS-756-ASSIGNMENTS.html"
keywords: ["delete", "if", "method", "class", "ABENNEWS", "756", "ASSIGNMENTS"]
---

[1. New Additions for `MOVE-CORRESPONDING`](#ABAP_MODIFICATION_1@4@)

[2. New Additions for the Component Operator `CORRESPONDING`](#ABAP_MODIFICATION_2@4@)

[3. New Parameter for `CL_ABAP_CORRESPONDING=>EXECUTE`](#ABAP_MODIFICATION_3@4@)

It is now possible to specify [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) statements with the following additions in the context of nested tables in [deep structures](ABENDEEP_STRUCTURE_GLOSRY.html). Both ensure that nested tables of the deep target structures are not deleted and new lines of nested tables in deep source structures are added:

It is now possible to specify statements with the component operator [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html) with the following additions in the context of nested tables in [deep structures](ABENDEEP_STRUCTURE_GLOSRY.html). Both ensure that the nested tables of deep target structures are not deleted and new lines of nested tables in deep source structures are added:

The method `EXECUTE` of the system class [`CL_ABAP_CORRESPONDING`](ABENCL_ABAP_CORRESPONDING.html) has a new parameter `KEEPING_LINES`. It has the same effect as the additions `KEEPING TARGET LINES` in `MOVE-CORRESPONDING` or `BASE` in `CORRESPONDING`.

-   [`KEEPING TARGET LINES`](ABAPMOVE-CORRESPONDING.html)
-   [`EXPANDING NESTED TABLES KEEPING TARGET LINES`](ABAPMOVE-CORRESPONDING.html)

-   [`APPENDING BASE`](ABENCORRESPONDING_CONSTR_ARG_TYPE.html)
-   [`DEEP APPENDING BASE`](ABENCORRESPONDING_CONSTR_ARG_TYPE.html)

abenabap.html abennews.html abennews-75.html abennews-756.html