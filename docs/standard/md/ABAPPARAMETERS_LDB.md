---
title: "ABAPPARAMETERS_LDB"
description: |
  ABAPPARAMETERS_LDB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPARAMETERS_LDB.htm"
abapFile: "ABAPPARAMETERS_LDB.html"
keywords: ["select", "do", "if", "data", "types", "internal-table", "ABAPPARAMETERS", "LDB"]
---

[Short Reference](ABAPPARAMETERS_SHORTREF.html)

\\ `... FOR \{TABLE|NODE\} node`\\ 
    `[HELP-REQUEST]`\\ 
    `[VALUE-REQUEST]`\\ 
    `[AS SEARCH PATTERN] ...`

[1. `... FOR \{TABLE|NODE\} node`](#ABAP_ADDITION_1@3@)

[2. `... HELP-REQUEST`](#ABAP_ADDITION_2@3@)

[3. `... VALUE-REQUEST`](#ABAP_ADDITION_3@3@)

[4. `... AS SEARCH PATTERN`](#ABAP_ADDITION_4@3@)

These additions for the statement [`PARAMETERS`](ABAPPARAMETERS.html) are only possible in the [selection include](ABENLDB_STATEMENTS.html) of a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html). They must be used to assign a node in the logical database to the parameter. Subroutines for user-defined helps can be called and a special parameter can be defined for evaluating the search help linked with the logical database.

If logical databases are no longer created, it is no longer necessary to use these additions of the statement `PARAMETERS`.

With this addition, the parameter must be assigned to a `node` of the structure of the logical database. If a node has type `T`, the addition `TABLE` can be used instead of `NODE`. For a description of the node types, see the statement [`NODES`](ABAPNODES.html).

When the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) of an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) that is linked with the logical database is created, input fields are created only for those parameters for which an [interface work area](ABENINTERFACE_WORK_AREA_GLOSRY.html) for the assigned `node`, or a node below it in the hierarchy, is declared using `NODES` or [`TABLES`](ABAPTABLES.html) in the executable program. When using the function module `LDB_PROCESS`, the assigned node `node` must be requested so that the parameter appears on the selection screen.

This addition specifies that the subroutine `para_hlp` (`para` is the name of the parameter) of the [database program](ABENDATABASE_PROGRAM_GLOSRY.html) of the logical database is called if the user selects the F1 field help for a screen element of the parameter on the selection screen. If the subroutine is not available, the addition is ignored.

If the parameter is defined with a reference to a data type in the ABAP Dictionary, the field help that is defined there is not displayed.

In the called subroutine, the field help display can be programmed or called using suitable function modules, such as `HELP_OBJECT_SHOW`. When input help is selected, no other [selection screen events](ABENSELECTION_SCREEN_EVENT_GLOSRY.html) are raised and there is no automatic pass by value between the selection screen and the program.

This addition specifies that the subroutine `para_val` (`para` is the name of the parameter) of the [database program](ABENDATABASE_PROGRAM_GLOSRY.html) of the logical database is called if the user selects the F4 input help on a screen element of the parameter on the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). The input help key is displayed for the input field of the parameter on the selection screen. If the subroutine is not available, the addition is ignored.

If the parameter is defined with a reference to a data type in the ABAP Dictionary, the input help that is defined there is not displayed.

In the called subroutine, the input help display can be programmed or called using suitable function modules such as `F4IF_INT_TABLE_VALUE_REQUEST`. If the input help is selected, no other selection screen events are raised and there is no automatic pass by value between the selection screen and the program. Suitable function modules must be used for this, as with general [dynpros](ABENDYNP_FIELD_HELP.html). The parameter that is changed in the subroutine is transported to the selection screen.

This addition enables a search help to be evaluated in the [database program](ABENDATABASE_PROGRAM_GLOSRY.html). To do this, the logical database must be assigned a search help in transaction `SE36`. Except for the mandatory addition `FOR TABLE|NODE`, the addition `AS SEARCH PATTERN` can only be combined with the addition [`MODIF ID`](ABAPPARAMETERS_SCREEN.html). In particular, a type cannot be defined with the addition `TYPE`.

The data type of the parameter is the internal table `syldb_sp` from the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `SYLDB`. This table has three columns: `hotkey` (search help ID), `string` (search string), and `trange` ([deep](ABENDEEP_GLOSRY.html) data type for complex search helps). The [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) displays an outlined block with the title *Selection using search help*, which contains input fields for the search help ID and the search string as well as a pushbutton for complex search helps.

After the [selection screen has been processed](ABENSELSCREEN_PROCESSING_GLOSRY.html), the list of values created by the search help is available in the internal table `ldb_SP` in the database program. Instead of the `PUT_root` subroutine, the `PUT_ldb_SP` subroutine is called. Here, `ldb` is the name of the logical database and `root` is the name of the root node. This subroutine can read the actual data using the list of values in `ldb_SP` and can then call the subroutine `PUT_root`, where the event [`GET root`](ABAPGET-.html) is raised by the statement [`PUT root`](ABAPPUT.html).

See also [Logical Databases - Links with Search Helps](ABENLDB_SEARCH_HELP.html).

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html abenldb\_statements.html