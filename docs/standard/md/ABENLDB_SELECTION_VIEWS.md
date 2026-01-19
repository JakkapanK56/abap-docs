---
title: "ABENLDB_SELECTION_VIEWS"
description: |
  ABENLDB_SELECTION_VIEWS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLDB_SELECTION_VIEWS.htm"
abapFile: "ABENLDB_SELECTION_VIEWS.html"
keywords: ["select", "do", "if", "data", "ABENLDB", "SELECTION", "VIEWS"]
---

Selection views are collections of fields from different database tables. At runtime, additional selections for the fields of these selection views can be defined using [dynamic selections](ABENLDB_FREE_SELECTIONS.html). These additional selections are passed to the database and reduce the number of database accesses. Before this can happen, the database tables must be defined for dynamic selections in the selection include of the logical database and the database program must be programmed accordingly.

Selection views can be edited by choosing *Extras -> Selection Views* in the [Logical Database Builder](ABENLOGICAL_DATABASE_BUILD_GLOSRY.html). They are identified by a three-character key that describes the origin of the selection view: `SAP` for predefined selections views or `CUS` for customer-defined selection views. In this way, users can define the selection view that best meets their requirements for a given logical database.

If a selection view is to be used in a logical database, the only allowed name is `STANDARD` and it must be assigned to a logical database. In selection views that are not assigned to a special logical database, any name can be chosen.

The following rules apply when constructing dynamic selections on selections screens of logical databases: Only those selection views are used that have the name `STANDARD` and that are assigned to the logical database. If a customer-defined selection view (with key `CUS`) exists, this view is used. Otherwise, the predefined selection view is used. If there is no selection view with the name `STANDARD` that is assigned to the logical database, dynamic selections are constructed across all fields of all tables in the logical database.

Selection views have the following elements:

-   Function pools
-   In selection views, fields are collected in functional groups. All fields assigned to a functional group are contained in the view. The grouping of fields into functional groups facilitates the combination of fields by content and makes them easier to find later. Functional groups are defined by assigning a functional group ID and a text. The functional group ID can consist of any two characters and is important only when processing the selection view.
-   Tables, nodes
-   The names of the database tables from which fields can be selected for the selection view. The fields of each of these tables can be displayed in the lower part of the screen. The table can be selected by choosing Select or by double-clicking the table name or node name.
-   Fields of the table or node
-   Here, a field is assigned to a functional group and becomes part of the selection view. Before a field assigned to a function pool can be used as a dynamic selection in the logical database, the corresponding node in the database program of the logical database must also be defined accordingly. A field assigned to a functional group can be selected for preselection. The fields flagged in this way appear as selection criteria on the selection screen of the dynamic selections. The preselected fields can be modified by choosing *New Field Selection* on this selection screen. A selection list appears of all fields in the selection view and for which dynamic selections are supported in the corresponding nodes of the logical database.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_oview.html abenldb\_others.html