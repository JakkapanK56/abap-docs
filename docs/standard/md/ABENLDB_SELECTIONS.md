---
title: "ABENLDB_SELECTIONS"
description: |
  ABENLDB_SELECTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLDB_SELECTIONS.htm"
abapFile: "ABENLDB_SELECTIONS.html"
keywords: ["select", "if", "data", "ABENLDB", "SELECTIONS"]
---

The selections on a [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) of a logical database are defined using the usual statements used to define selection screens:

In logical database, the additions [`VALUE-REQUEST`](ABAPPARAMETERS_LDB.html) and [`HELP-REQUEST`](ABAPPARAMETERS_LDB.html) can also be used to define specific input helps. The selection screen is defined in a special include program, also referred to as the [selection include](ABENSELECTION_INCLUDE_GLOSRY.html). The name of this selection include is `DBldbSEL`, where `ldb` is the name of the logical database. This include program must not be included explicitly in the database program using an `INCLUDE` statement. It is included in the database program and linked programs automatically when it is generated.

Every executable ABAP program that uses a logical database can add program-specific selections to the selections of the logical database. The standard selection screen first displays the database-specific selections and then the program-specific selections.

When the selection screen of an executable program is created, only those database-specific selection criteria and parameters are displayed for whose associated tables interface work areas are also declared using [`NODES`](ABAPNODES.html) or [`TABLES`](ABAPTABLES.html) in the program.

The selection screen of a logical database is also part of the [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) with the dynpro number 1000 of an executable program linked with the logical database. It has a standardized layout, with the selection criteria and parameters in individual lines and in the order in which they were declared. The layout can be edited using the statement [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html).

The ABAP runtime framework generates the selection screen with the dynpro number 1000 for every program where no other selection screen version was specified in the program properties. To prevent certain input fields of the selection screen of a logical database from appearing on the selection screen, selection screen versions (with dynpro numbers less than 1000) can be defined in the selection include and then entered in the program properties. Here, the input help key provides an overview of the selection screen versions defined in a linked logical database. Selection screen versions are defined using the statements [`SELECTION-SCREEN BEGIN|END OF VERSION`](ABAPSELECTION-SCREEN_LDB_VERSION.html). Within these statements, [`SELECTION-SCREEN EXCLUDE`](ABAPSELECTION-SCREEN_LDB_VERSION.html) can be used to name the fields to be suppressed on the selection screen.

If the properties of an executable program contain the number of a selection screen version of this type, this number is included in the standard selection screen. The excluded input fields are not displayed, but the associated selections still exist and can be processed internally in the program or filled when called using the function module `LDB_PROCESS`.

When a selection include is created, the Logical Database Builder generates a template based on the existing structure. Here, [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html) statements are predefined automatically for all database tables of the structure (nodes of type `T`) that are initially commented. Selection criteria for each of the primary key fields of each database table are proposed.

If a [search help](ABENLDB_SEARCH_HELP.html) is specified for the logical database, an appropriate `PARAMETERS` statement [`AS SEARCH PATTERN`](ABAPPARAMETERS_LDB.html) is predefined. If specified in the definition of the structure, `SELECTION-SCREEN` statements with the additions [`DYNAMIC SELECTIONS`](ABAPSELECTION-SCREEN_LDB_DYNAMIC.html) and [`FIELD SELECTION`](ABAPSELECTION-SCREEN_LDB_FIELD.html) for [dynamic selections](ABENLDB_FREE_SELECTIONS.html) and [field selections](ABENLDB_FIELD_SELECTIONS.html) are generated for nodes of the type `T` and `S`.

In addition to the proposed elements, the selection screen can be enhanced as follows:

A selection include contains the lines:

This links the selection criterion `slifnr` with the table `LFA1` and the parameter `pbukrs` with the table `LFB1`. If only `lfa1` but not `lfb1` is declared as an interface work area in an executable program, `slifnr` appears on the selection screen, but not `pbukrs`.

See also [Example of a Selection Include](ABENLDB_SELECTIONS_EXAMPLE.html).

-   [`PARAMETERS`](ABAPPARAMETERS.html),
-   [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html),
-   [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html).

-   `PARAMETERS` can be used to define additional parameters. These can be used, for example, to control the program flow. Here, the addition [`FOR TABLE|NODE`](ABAPPARAMETERS_LDB.html) of the `PARAMETERS` statement must be used in the selection include. When the selection screen is generated, this respects only those parameters for nodes that are also defined in the executable program using `NODES` or `TABLES` or requested by the function module `LDB_PROCESS`.
-   `SELECTION-SCREEN` can be used to format the selection screen.

-   The addition [`DYNAMIC SELECTIONS`](ABAPSELECTION-SCREEN_LDB_DYNAMIC.html) can be used to predefine further nodes for dynamic selections. At runtime, the user can determine for which components of the node selections can be entered. The dynamic entries must be handled specially in the database program.
-   The addition [`FIELD SELECTION`](ABAPSELECTION-SCREEN_LDB_FIELD.html) can be used to predefine further nodes for field selections. Using a field list in the `GET` statement, an executable program can control which fields of the node are to be provided by the logical database. If the function module `LDB_PROCESS` is used, the `FIELD_SELECTION` parameter must be passed accordingly. The corresponding user entries must be handled specially in the database program.
-   The additions [`BEGIN OF VERSION dynnr`](ABAPSELECTION-SCREEN_LDB_VERSION.html), [`EXCLUDE`](ABAPSELECTION-SCREEN_LDB_VERSION.html), and [`END OF VERSION`](ABAPSELECTION-SCREEN_LDB_VERSION.html) can be used to create different versions of the selection screen with dynpro numbers less than 1000. This hides input fields of selection criteria or parameters. In this way, an executable program can work with a suitable selection screen version.

SELECT-OPTIONS slifnr FOR lfa1-lifnr. \\nPARAMETERS pbukrs LIKE lfb1-bukrs FOR TABLE lfb1. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_oview.html