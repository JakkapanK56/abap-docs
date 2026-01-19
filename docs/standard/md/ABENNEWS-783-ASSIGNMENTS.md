---
title: "ABENNEWS-783-ASSIGNMENTS"
description: |
  ABENNEWS-783-ASSIGNMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-783-ASSIGNMENTS.htm"
abapFile: "ABENNEWS-783-ASSIGNMENTS.html"
keywords: ["delete", "if", "ABENNEWS", "783", "ASSIGNMENTS"]
---

[1. New Additions for `MOVE-CORRESPONDING`](#ABAP_MODIFICATION_1@4@)

[2. New Additions for the Component Operator `CORRESPONDING`](#ABAP_MODIFICATION_2@4@)

It is now possible to specify [`MOVE-CORRESPONDING`](ABAPMOVE-CORRESPONDING.html) statements with the following additions in the context of nested tables in [deep structures](ABENDEEP_STRUCTURE_GLOSRY.html). Both ensure that nested tables of the deep target structures are not deleted and new lines of nested tables in deep source structures are added:

It is now possible to specify statements with the component operator [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html) with the following additions in the context of nested tables in [deep structures](ABENDEEP_STRUCTURE_GLOSRY.html). Both ensure that the nested tables of deep target structures are not deleted and new lines of nested tables in deep source structures are added:

-   [`KEEPING TARGET LINES`](ABAPMOVE-CORRESPONDING.html)
-   [`EXPANDING NESTED TABLES KEEPING TARGET LINES`](ABAPMOVE-CORRESPONDING.html)

-   [`APPENDING BASE`](ABENCORRESPONDING_CONSTR_ARG_TYPE.html)
-   [`DEEP APPENDING BASE`](ABENCORRESPONDING_CONSTR_ARG_TYPE.html)

abenabap.html abennews.html abennews-78.html abennews-783.html