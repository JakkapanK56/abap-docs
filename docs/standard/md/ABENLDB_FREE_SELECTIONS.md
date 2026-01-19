---
title: "ABENLDB_FREE_SELECTIONS"
description: |
  ABENLDB_FREE_SELECTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLDB_FREE_SELECTIONS.htm"
abapFile: "ABENLDB_FREE_SELECTIONS.html"
keywords: ["select", "if", "data", "internal-table", "ABENLDB", "FREE", "SELECTIONS"]
---

In addition to static selections, the selection screen of a logical database can also contain [dynamic selections](ABENDYNAMIC_SELECTION_GLOSRY.html) (also called [free selections](ABENFREE_SELECTION_GLOSRY.html)). Dynamic selections enable the user to instruct the logical database to make further user-defined selections for database reads, in addition to the static selections defined in the selection include. Before the logical database can offer dynamic selections for a `node`, the statement [`SELECTION-SCREEN DYNAMIC SELECTIONS`](ABAPSELECTION-SCREEN_LDB_DYNAMIC.html) must be specified in the selection include.

If the `node` node specified here is requested by the linked program, the dynamic selections become part of the selection screen. After choosing *Dynamic Selections*, the user can make selections for the fields offered by the logical database. If called using the function module `LDB_PROCESS`, an appropriate parameter can be passed. In the [database program](ABENLDB_PROGRAM.html), dynamic statements can be used to instruct the selections to read the data. The values of every program-specific selection criterion for which a dynamic selection node is defined are also passed to the logical database before the data is selected. The user can define the field list specified for dynamic selections as a [selection view](ABENLDB_SELECTION_VIEWS.html) of the logical database.

Before the dynamic selections can be used in the `SELECT` statements of a subroutine `put_node`, the data object `dyn_sel` must be used that is declared implicitly in the logical database program with reference to the data type `rsds_type` from the type pool `RSDS`. The data object `dyn_sel` is available only in the database program, but not in a linked executable program. `dyn_sel` is a deep structure with the following components:

`trange` enables the selections for individual fields of the nodes to be accessed directly. Furthermore, selections with this format are easier to modify than selections in `clauses` format.

Use of dynamic selections in a dynamic `WHERE` condition in the database program. The table `SCARR` is the root node of a logical database `DEMO` and the table `SPFLI` is the only successor. The selection include `DBDEMOSEL` contains the following lines:

The subroutine `put_scarr` of the database program `SAPDBDEMO` uses the dynamic selections as follows:

The line of the internal table `dyn_sel-clauses` for which the column `tablename` contains the value *SCARR* is read to the local structure `dynamic_selections`. The `STATICS` statements and the field `flag_read` make sure that the table `dyn_sel` only needs to be read once each time the program is executed. The table `where_tab` is used in the dynamic `WHERE` clause.

Each executable program that uses the logical database and contains a `NODES` or `TABLES` statement for `SCARR` or `SPFLI` offers dynamic selections for the fields of the table `SCARR` on its selection screen and the logical database reads only those lines that meet the ranges conditions on the selection screen and the dynamic selections.

Use of ranges tables in the database program. The same applies to the structure and selections as in the previous example. The subroutine `put_scarr` is now as follows:

The line of the internal table `trange` for which the column `tablename` contains the value *SCARR* is read to the local helper table `dynamic_ranges`. The nested tables `frange_t` are read from `fieldname` to the local helper tables `dynamic_range1` and `dynamic_range2`, depending on their content. The `STATICS` statements and the field `flag_read` ensure that the tables only need to be read once each time the program is executed. The nested tables `selopt_t` of these helper tables now contain the ranges tables for the database columns `CARRNAME` and `CURRCODE`. The tables `selopt_t` are used directly as ranges tables in the `SELECT` statement. `CARRNAME` and `CURRCODE` are the only other columns in the database table `SCARR`, which means this logical database offers the same functions as in the previous example.

-   `clauses`
-   Internal table with the dynamic selections or any program-specific selection criteria for dynamic `WHERE` conditions entered by the user. In each line, the column `tablename` contains the name of a node reserved for dynamic selections. For each of these nodes, the table-like component `where_tab` contains the ranges conditions of the dynamic selections in a format that can be used directly in a dynamic `WHERE`.
-   `texpr`
-   Contains the selections of the dynamic selections in an internal format (reverse Polish notation) that can be used for both the function modules `FREE_SELECTIONS_INIT` and `FREE_SELECTIONS_DIALOG` for program-driven creation of dynamic selections.
-   `trange`
-   Internal table containing the selections of the dynamic selection as [ranges tables](ABENRANGES_TABLE_GLOSRY.html). In each line, the column `tablename` contains the name of a node reserved for dynamic selections. For each of these nodes, the tabular component `frange_t` contains a column `fieldname` with the field names and `selopt_t` with the associated ranges tables.

SELECT-OPTIONS s\_carrid FOR scarr-carrid. \\nSELECT-OPTIONS s\_connid FOR spfli-connid. \\nSELECTION-SCREEN DYNAMIC SELECTIONS FOR TABLE scarr. FORM put\_scarr. \\n STATICS: dynamic\_selections TYPE rsds\_where, \\n flag\_read TYPE abap\_bool. \\n IF flag\_read = abap\_false. \\n dynamic-selections-tablename = 'SCARR'. \\n READ TABLE dyn\_sel-clauses \\n WITH KEY dynamic\_selections-tablename \\n INTO dynamic\_selections. \\n flag\_read = abap\_true. \\n ENDIF. \\n SELECT \* FROM scarr \\n WHERE carrid IN s\_carrid \\n AND (dynamic\_selections-where\_tab). \\n PUT scarr. \\n ENDSELECT. \\nENDFORM. FORM put\_scarr. \\n STATICS: dynamic\_ranges TYPE rsds\_range, \\n dynamic\_range1 TYPE rsds\_frange, \\n dynamic\_range2 TYPE rsds\_frange, \\n flag\_read TYPE abap\_bool. \\n IF flag\_read = abap\_false. \\n dynamic\_ranges-tablename = 'SCARR'. \\n READ TABLE dyn\_sel-trange \\n WITH KEY dynamic\_ranges-tablename \\n INTO dynamic\_ranges. \\n dynamic\_range1-fieldname = 'CARRNAME'. \\n READ TABLE dynamic\_ranges-frange\_t \\n WITH KEY dynamic\_range1-fieldname \\n INTO dynamic\_range1. \\n dynamic\_range2-fieldname = 'CURRCODE'. \\n READ TABLE dynamic\_ranges-frange\_t \\n WITH KEY dynamic\_range2-fieldname \\n INTO dynamic\_range2. \\n flag\_read = abap\_true. \\n ENDIF. \\n SELECT \* FROM scarr \\n WHERE carrid IN s\_carrid \\n AND carrname IN dynamic\_range1-selopt\_t \\n AND currcode IN dynamic\_range2-selopt\_t. \\n PUT scarr. \\n ENDSELECT. \\nENDFORM. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_oview.html abenldb\_others.html