---
title: "ABAPSELECTION-SCREEN_LDB_ADDITIONS"
description: |
  ABAPSELECTION-SCREEN_LDB_ADDITIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_LDB_ADDITIONS.htm"
abapFile: "ABAPSELECTION-SCREEN_LDB_ADDITIONS.html"
keywords: ["select", "if", "data", "types", "ABAPSELECTION", "SCREEN", "LDB", "ADDITIONS"]
---

[Short Reference](ABAPSELECTION-SCREEN_SHORTREF.html)

`... FOR \{TABLE|NODE\} node [ID id] ...`

[1. `... FOR \{TABLE|NODE\} node`](#ABAP_ADDITION_1@3@)

[2. `... ID id`](#ABAP_ADDITION_2@3@)

These additions of the statement [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) assign a node of the logical database and/or an ID to selection screen elements of a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).

This addition means that all the screen elements created with `SELECTION-SCREEN` in the selection include for a logical database must be assigned to a `node` in the structure of the logical database. If a node has type `T`, the addition `TABLE` can be used instead of `NODE`. For a description of the node types, see the statement [`NODES`](ABAPNODES.html).

When the standard selection screen of an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) is created that is linked to the logical database, it only displays screen elements for which an [interface work area](ABENINTERFACE_WORK_AREA_GLOSRY.html) is declared with `NODES` or [`TABLES`](ABAPTABLES.html) for the assigned `node` or a node below it in the hierarchy. If the function module `LDB_PROCESS` is used, the assigned node `node` must be requested so that the screen element is created.

The addition `FOR TABLE|NODE` must be specified for the variants of the statement `SELECTION-SCREEN` with [`POSITION`](ABAPSELECTION-SCREEN_LINE.html), [`PUSHBUTTON`](ABAPSELECTION-SCREEN_PUSHBUTTON.html), [`SKIP`](ABAPSELECTION-SCREEN_SKIP.html), [`TAB`](ABAPSELECTION-SCREEN_TABBED.html), or [`ULINE`](ABAPSELECTION-SCREEN_ULINE.html). In the variant using [`COMMENT`](ABAPSELECTION-SCREEN_COMMENT.html), either a node must be assigned or the addition `FOR FIELD` specified.

The addition `FOR TABLE|NODE` must not be used in statements to define blocks or lines with the additions [`BEGIN|END OF LINE`](ABAPSELECTION-SCREEN_LINE.html), [`BEGIN|END OF BLOCK`](ABAPSELECTION-SCREEN_BLOCK.html), or [`BEGIN|END OF TABBED BLOCK`](ABAPSELECTION-SCREEN_TABBED.html), or when copying elements with an [`INCLUDE`](ABAPSELECTION-SCREEN_INCLUDE.html).

This addition defines an ID `id` containing a maximum of three characters for a screen element defined in the selection include for a logical database with the statement `SELECTION-SCREEN`. The ID must be specified directly.

The ID can be used to exclude screen elements from a selection screen version with the statement [`SELECTION-SCREEN EXCLUDE`](ABAPSELECTION-SCREEN_LDB_VERSION.html).

Variants of the statement `SELECTION-SCREEN` can be used to combine an ID definition with [`COMMENT`](ABAPSELECTION-SCREEN_COMMENT.html), [`DYNAMIC SELECTIONS`](ABAPSELECTION-SCREEN_LDB_DYNAMIC.html), [`FIELD SELECTION`](ABAPSELECTION-SCREEN_LDB_FIELD.html), [`FUNCTION KEY`](ABAPSELECTION-SCREEN_FUNCTIONKEY.html), [`INCLUDE`](ABAPSELECTION-SCREEN_INCLUDE.html), [`PUSHBUTTON`](ABAPSELECTION-SCREEN_PUSHBUTTON.html), [`SKIP`](ABAPSELECTION-SCREEN_SKIP.html), [`TAB`](ABAPSELECTION-SCREEN_TABBED.html), and [`ULINE`](ABAPSELECTION-SCREEN_ULINE.html).

An ID cannot be defined for blocks defined using [`BEGIN OF BLOCK`](ABAPSELECTION-SCREEN_BLOCK.html) or [`BEGIN OF [TABBED] BLOCK`](ABAPSELECTION-SCREEN_TABBED.html), since these are already identified by the name of the block.

-   If none of the elements in a block or a line are created on the selection screen, the entire block or line is not created.
-   If logical databases are no longer created, it is no longer necessary to use this variant of the statement `SELECT-OPTIONS`.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html abenldb\_statements.html abapselection-screen\_ldb.html