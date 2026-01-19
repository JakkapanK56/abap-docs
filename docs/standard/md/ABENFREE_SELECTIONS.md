---
title: "ABENFREE_SELECTIONS"
description: |
  ABENFREE_SELECTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFREE_SELECTIONS.htm"
abapFile: "ABENFREE_SELECTIONS.html"
keywords: ["select", "do", "if", "class", "data", "internal-table", "ABENFREE", "SELECTIONS"]
---

A [dynamic selection](ABENDYNAMIC_SELECTION_GLOSRY.html) (also called free selection) is a [ranges condition](ABENRANGES_CONDITION_GLOSRY.html) that can be entered on a dynamically created selection screen. The associated selection screens are created, displayed, and processed by the system function modules `FREE_SELECTIONS_...` of the function pool `SSEL`. The selection screens can be displayed as standalone selection screens, or integrated into the screen layouts of other dynpros or selection screens as a subscreen. Dynamic selections can be included in a logical database or used in any programs.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

[Logical databases](ABENLOGICAL_DATA_BASE_GLOSRY.html) can provide dynamic selections on their selection screen to specify further dynamic ranges conditions for individual nodes of the logical database, in addition to the selection parameters and selection criteria already defined statically in the database. These dynamic conditions can then be evaluated in the database program of the logical database. Dynamic selections of a logical database can be declared simply using the addition [`DYNAMIC SELECTIONS`](ABAPSELECTION-SCREEN_LDB_DYNAMIC.html) of the statement [`SELECTION-SCREEN`](ABAPSELECTION-SCREEN.html) in the database.

The ABAP runtime framework is responsible for calling function modules to create, display, and handle dynamic selections. The selections entered by the user are passed directly to data objects of the database program and can be evaluated there. For more information, see [Logical Databases - Dynamic Selections](ABENLDB_FREE_SELECTIONS.html).

The special addition [`WITH FREE SELECTIONS`](ABAPSUBMIT_SELSCREEN_PARAMETERS.html) of the statement [`SUBMIT`](ABAPSUBMIT.html) is used to pass parameters to selection screens of logical databases that provide dynamic selections. If this addition is used, the function modules mentioned above are generally also implemented.

In ABAP programs that work with classic dynpros, dynamic selections can be provided by using the following two function modules directly:

The function module `FREE_SELECTIONS_INIT` is used to determine the entities for which dynamic selections are to be made. This could be, for example, database tables from the ABAP Dictionary or any fields specified freely. The result of the function module is a selection ID, which must be passed to the function module `FREE_SELECTIONS_DIALOG`.

The function module `FREE_SELECTIONS_DIALOG` can display differently configured selection screens in different formats. Users can enter dynamic selections on these selection screens for the fields provided there and, if required, can also select fields for which they want to perform dynamic selections. If *Save* is chosen, the function module returns the specified selections to the caller in three different formats, which the caller can take from the following `EXPORTING` parameters:

For more information, see the documentation about function modules and their parameter interface.

[Dynamic selections](ABENFREE_SELECTION_ABEXA.html)

-   `FREE_SELECTIONS_INIT`
-   `FREE_SELECTIONS_DIALOG`

-   `WHERE_CLAUSES`
-   This parameter passes an internal table with the relative expressions [`rel_exp`](ABENABAP_SQL_STMT_LOGEXP.html) generated according to the dynamic selections for [dynamic specification](ABENWHERE_LOGEXP_DYNAMIC.html) in the [`WHERE`](ABAPWHERE.html) clause of [`SELECT`](ABAPSELECT.html) statements.
-   `FIELD_RANGES`
-   This parameter passes an internal table with the [ranges tables](ABENRANGES_TABLE_GLOSRY.html) generated according to the dynamic selections and that can be evaluated using the predicate [comparison operator](ABENCOMP_OPERATOR_GLOSRY.html)\\ `IN` in corresponding [`WHERE` conditions](ABENWHERE_LOGEXP_SELTAB.html) or [comparison expressions](ABENLOGEXP_SELECT_OPTION.html).
-   `EXPRESSIONS`
-   This parameter passes an internal table with conditions generated according to the dynamic selections in an internal format (Reverse Polish Notation). This format can then be passed to the function module `FREE_SELECTIONS_INIT` to prepare a selection screen that is predefined with these selections. This format is also required for passes made to called programs using the addition [`WITH FREE SELECTIONS`](ABAPSUBMIT_SELSCREEN_PARAMETERS.html) of the statement [`SUBMIT`](ABAPSUBMIT.html).

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html