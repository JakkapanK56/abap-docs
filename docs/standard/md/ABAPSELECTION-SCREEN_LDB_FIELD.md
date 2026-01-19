---
title: "ABAPSELECTION-SCREEN_LDB_FIELD"
description: |
  ABAPSELECTION-SCREEN_LDB_FIELD - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_LDB_FIELD.htm"
abapFile: "ABAPSELECTION-SCREEN_LDB_FIELD.html"
keywords: ["select", "if", "data", "types", "internal-table", "field-symbol", "ABAPSELECTION", "SCREEN", "LDB", "FIELD"]
---

[Short Reference](ABAPSELECTION-SCREEN_FIEL_SHORTREF.html)

`SELECTION-SCREEN FIELD SELECTION`\\ 
                 `FOR \{NODE|TABLE\} node [ID id].`

This variant of statement [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) defines a `node` in the structure of the [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) for field selection. If a node has the type `T`, the addition `TABLE` can be used instead of `NODE`. The statement cannot be used for type C nodes. A description of the node types is available under the statement [`NODES`](ABAPNODES.html).

If a node is defined for field selection, an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) that is linked with the logical database can be used in the [`GET`](ABAPGET-.html) statement to control which fields in the node are to be read by the logical database. If the function module `LDB_PROCESS` is used, the `FIELD_SELECTION` parameter must be passed accordingly.

For more information about the addition `ID`, see [`ldb_additions`](ABAPSELECTION-SCREEN_LDB_ADDITIONS.html).

-   During program execution, the named of the field symbols to be read are available in the [database program](ABENDATABASE_PROGRAM_GLOSRY.html) in the internal table `select_fields` in the structure `rsfs_tab_fields` from [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `RSFS`.
-   See also [Field Selections](ABENLDB_FIELD_SELECTIONS.html).
-   If logical databases are no longer created, it is no longer necessary to use this variant of the statement `SELECT-OPTIONS`.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html abenldb\_statements.html abapselection-screen\_ldb.html