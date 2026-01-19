---
title: "ABAPSELECTION-SCREEN_LDB_DYNAMIC"
description: |
  ABAPSELECTION-SCREEN_LDB_DYNAMIC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_LDB_DYNAMIC.htm"
abapFile: "ABAPSELECTION-SCREEN_LDB_DYNAMIC.html"
keywords: ["select", "while", "if", "data", "types", "internal-table", "ABAPSELECTION", "SCREEN", "LDB", "DYNAMIC"]
---

[Short Reference](ABAPSELECTION-SCREEN_DYNA_SHORTREF.html)

`SELECTION-SCREEN DYNAMIC SELECTIONS`\\ 
                 `FOR \{NODE|TABLE\} node [ID id].`

This variant of statement [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) defines a `node` in the structure of the [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) for [dynamic selections](ABENFREE_SELECTIONS.html). If a node belongs to type `T`, the addition `TABLE` can be used instead of `NODE`. The statement cannot be used for type C nodes. A description of the node types is available under the statement [`NODES`](ABAPNODES.html).

If a node is defined for dynamic selections, the user can specify, while the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) is displayed, the components of the node for which they want to enter further selections and for which no input fields are defined on the selection screen.

For more information about the addition `ID`, see [`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html).

-   While the [database program](ABENDATABASE_PROGRAM_GLOSRY.html) is running, the selections entered by the user in the internal table `dyn_sel` in structure `rsds_type` from [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `RSDS` are available in various forms, such as generated [conditions](ABENASQL_COND.html) for ABAP SQL.
-   See also [Dynamic Selections](ABENLDB_FREE_SELECTIONS.html).
-   If logical databases are no longer created, it is no longer necessary to use this variant of the statement `SELECT-OPTIONS`.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html abenldb\_statements.html abapselection-screen\_ldb.html