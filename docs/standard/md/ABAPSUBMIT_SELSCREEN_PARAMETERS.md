---
title: "ABAPSUBMIT_SELSCREEN_PARAMETERS"
description: |
  ABAPSUBMIT_SELSCREEN_PARAMETERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSUBMIT_SELSCREEN_PARAMETERS.htm"
abapFile: "ABAPSUBMIT_SELSCREEN_PARAMETERS.html"
keywords: ["select", "do", "if", "case", "data", "types", "internal-table", "ABAPSUBMIT", "SELSCREEN", "PARAMETERS"]
---

[Short Reference](ABAPSUBMIT_SHORTREF.html)

`... [USING SELECTION-SET variant]\      [USING SELECTION-SETS OF PROGRAM prog]\      [WITH SELECTION-TABLE rspar]\      [WITH expr_syntax1 WITH expr_syntax2 ...]\      [WITH FREE SELECTIONS texpr] ...`

[1. `... USING SELECTION-SET variant`](#ABAP_ADDITION_1@3@)

[2. `... USING SELECTION-SETS OF PROGRAM prog`](#ABAP_ADDITION_2@3@)

[3. `... WITH SELECTION-TABLE rspar`](#ABAP_ADDITION_3@3@)

[4. `... WITH expr_syntax1 WITH expr_syntax2 ...`](#ABAP_ADDITION_4@3@)

[5. `... WITH FREE SELECTIONS texpr`](#ABAP_ADDITION_5@3@)

`USING SELECTION-SET` supplies all selection screen components using a [selection screen variant](ABENVARIANT_GLOSRY.html)\\ `variant`. The specification `USING SELECTION-SETS OF PROGRAM` enables the use of a variant of a different program. `WITH SELECTION-TABLE` can be used to pass values for multiple selection screen components as the content of an internal table `rspar`. `WITH expr_syntax` supplies individual selection screen components with values. The addition `WITH FREE SELECTIONS` enables the passing of dynamic selections to the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) of a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).

If this addition is specified, the parameters and selection criteria of the selection screen are supplied with the values of a [selection screen variant](ABENVARIANT_GLOSRY.html). For `variant`, a character-like data object must be specified that contains the name of a selection screen variant of the program called when the statement is executed. If the variant does not exist, an [error message](ABENERROR_MESSAGE_GLOSRY.html) is sent. If the variant belongs to a different selection screen, it is ignored.

Selection screen variants can be created and managed for every program in which selection screens are defined, either in the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html) or during program execution by choosing *Goto - Variants* on a selection screen.

If this addition is specified, the [selection screen variants](ABENVARIANT_GLOSRY.html) of the program `prog` are used in the called program. `prog` expects a character-like data object that contains the name of a program when the statement is executed. The addition has the following effects:

The program `prog` should contain a selection screen with the same parameters and selection criteria as the selection screen used in the called program.

If this addition is specified, parameters and selection criteria on the selection screen are supplied by an internal table `rspar`. `rspar` expects a standard table with the line type `RSPARAMS` or `RSPARAMSL_255` and without [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). The structured data types `RSPARAMS` and `RSPARAMSL_255` are defined in the ABAP Dictionary and have the following components, all of which have the data type `CHAR`:

In order to supply parameters and selection criteria of the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) with specific values, the lines in the internal table `rspar` must contain the following values:

If the name of a selection criterion occurs more than once in `rspar`, a ranges table containing multiple lines is defined and passed to the selection criterion. If parameter names occur multiple times, the last value is passed to the parameter.
The content of the parameters or ranges tables for the current program can be supplied in the table using the function module `RS_REFRESH_FROM_SELECTOPTIONS`.

This addition supplies individual parameters or selection criteria of the selection screen with values. Parameters are supplied with single values and selection criteria are filled with ranges tables that overwrite values already set in the called program. The [ranges table](ABENRANGES_TABLE_GLOSRY.html) that is to be passed is compiled from all additions `expr_syntax` that address the same selection criterion `sel`. The following statements can be specified for `expr_syntax`, where the name of a parameter or a selection criterion must be specified directly for `sel`:

The addition `expr_syntax` can be specified more than once, and the same selection screen component can also be specified more than once.

If a data object is passed that cannot be converted to the data type of the selection screen component, the runtime error `SUBMIT_PARAM_NOT_CONVERTIBLE` occurs instead of a syntax error.

The program `report1` has a standalone [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) with the [dynpro number](ABENDYNPRO_NUMBER_GLOSRY.html) 1100. In the program `report2`, an internal table with line type `RSPARAMS` and a ranges table are filled for this selection screen. In the case of `SUBMIT`, these are passed together with a single condition.

**Called Program**

**Calling Program**

**Result**\\
After `report1` is called by `report2`, the selection tables of the selection criteria `selcrit1` and `selcrit2` of the called program are filled as follows:

This addition supplies the [dynamic selections](ABENDYNAMIC_SELECTION_GLOSRY.html) of the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) of a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html) with values. The called program must be linked to a logical database that supports dynamic selections. `texpr` must be an internal table of type `rsds_texpr` from [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `RSDS`.

In `texpr`, the selections for the dynamic selections are specified in an internal format (Reverse Polish Notation). The function modules `FREE_SELECTIONS_INIT`, `FREE_SELECTIONS_DIALOG`, and `FREE_SELECTIONS_RANGE_2_EX` from the function pool `SSEL` can be used to fill `texpr` in the calling program. Whereas the first two function modules run a user dialog (see [Dynamic Selections](ABENFREE_SELECTIONS.html)), [ranges tables](ABENRANGES_TABLE_GLOSRY.html) can be passed to `FREE_SELECTIONS_RANGE_2_EX` in an internal table of the type `rsds_trange` for each node of the dynamic selection and are then converted into a table of the line type `rsds_texpr`. If the calling program contains a selection screen with the same dynamic selections, its content can be passed beforehand to a table of the type `rsds_trange` using the function module `RS_REFRESH_FROM_DYNAMICAL_SEL`.
The lines of the internal table type `rsds_trange` contain a [flat](ABENFLAT_GLOSRY.html) component `tablename` for each node and a table-like component `frange_t` of the type `rsds_frange_t` for the fields of the node. The lines in `rsds_frange_r` contain a flat component `fieldname` for each field and a table-like component `selopt_t` of the line type `RSDSSELOPT` from the ABAP Dictionary. `RSDSSELOPT` contains the four components `sign`, `option`, `low`, and `high` and can include the ranges table.

The program `report1` is linked to the logical database `F1S`, which supports dynamic selections for the node `SPFLI`. The program `report2` enters conditions in a nested internal table of the type `rsds_trange` with ranges conditions for field `CONNID` of the node `SPFLI`. This table is then converted into a table of the type `rsds_texpr`, which is passed at `SUBMIT`.

**Called Program**

**Calling Program**

-   If a variant `variant` is specified with `USING SELECTION-SET`, this variant is searched for in the program `prog`.
-   If the selection screen is displayed using `VIA SELECTION-SCREEN`, all functions accessible via the menu path *Goto - Variants* affect the selection screen variants of the program `prog`. These functions are only active, however, if `prog` is an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html).

-   `SELNAME` (length 8)
-   `KIND` (length 1)
-   `SIGN` (length 1)
-   `OPTION` (length 2)
-   `LOW` (length 45 for `RSPARAMS` and 255 for `RSPARAMSL_255`)
-   `HIGH` (length 45 for `RSPARAMS` and 255 for `RSPARAMSL_255`)

-   `selname` must contain the name of a parameter or a [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html) for the selection screen in uppercase letters.
-   `kind` must contain the type of the selection screen component (*P* for parameters or *S* for selection criteria).
-   In `sign`, `option`, `low`, and `high`, the values specified for the identically named columns of the [ranges table](ABENRANGES_TABLE_GLOSRY.html) must be passed for the selection criteria. For parameters, the value must be passed in `low` and all other components are ignored.

-   Unlike in ranges tables, the data types of the components `low` and`high` in table `rspar` are always of type `c` and, if necessary, are converted to the type of the parameter or selection criterion when passed.
-   When values are specified, these must have the internal format of the ABAP values, and not the output format of the screen display.
-   The data type `RSPARAMSL_255` can be used instead of `RSPARAMS` from ABAP release 7.2, if the length of 45 characters for components `low` and `high` is no longer sufficient.

-   `sel \{EQ|NE|CP|NP|GT|GE|LT|LE\} dobj [SIGN sign]`
-   Passing of a single value.
-   The operators in front of `dobj` match the values specified for the column `option` in ranges tables. `dobj` expects a data object whose data type can be converted to the data type of the selection screen component `sel`. No [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) can be specified. A character-like field containing `'I'` or `'E'` can be specified for `sign`. The default value is `'I'`.
-   If `sel` is a selection criterion, a line is appended to the ranges table to be passed, whereby the specified operator is placed in the column `option`, the content of `dobj` is placed in the column `low`, and the content of `sign` is placed in the column `sign`.
-   If `sel` is a parameter, it is set to the value of `dobj` in the called program. The operator and the value of `sign` are ignored.
-   `sel [NOT] BETWEEN dobj1 AND dobj2 [SIGN sign]`
-   Passing of an interval.
-   In this case, `sel` must be a selection criterion. `dobj` expects data objects whose data type can be converted to that of the columns `low` and `high` of the [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html)\\ `sel`. No [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) can be specified. A character-like field containing `'I'` or `'E'` can be specified for `sign`. The default value is `'I'`.
-   A line is appended to the ranges table to be passed. If `NOT` is specified, the value `'NB'` is placed in the column `option`, otherwise `'BT'` is placed in the column. The content of the data objects `dobj` and `sign` is placed in the columns `low`, `high`, and `sign`.
-   `sel IN range_tab`
-   Passing of a [ranges table](ABENRANGES_TABLE_GLOSRY.html).
-   In this case, `sel` must be a selection criterion. `range_tab` expects a standard table without [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) that has the structure of the selection table of the selection criterion `sel`. A table of this type can be created using the addition `RANGE OF` of the statements [`TYPES`](ABAPTYPES.html) and [`DATA`](ABAPDATA.html).
-   The lines of the table `range_tab` are appended to the ranges table that is to be passed.

-   `=` or `INCL` can also be used instead of the operator `EQ`.
-   When specifying values, they must be specified in the internal format for ABAP values rather than the output format of the screen display.
-   When passed to selection screens, [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html) cannot be converted implicitly to the types `c` or `string`.

REPORT report1. \\n\\ \\nDATA text TYPE c LENGTH 10. \\n\\ \\nSELECTION-SCREEN BEGIN OF SCREEN 1100. \\n SELECT-OPTIONS: selcrit1 FOR text, \\n selcrit2 FOR text. \\nSELECTION-SCREEN END OF SCREEN 1100. \\n\\ \\n... REPORT report2. \\n\\ \\nDATA: text TYPE c LENGTH 10, \\n rspar\_tab TYPE TABLE OF rsparams, \\n rspar\_line LIKE LINE OF rspar\_tab, \\n range\_tab LIKE RANGE OF text, \\n range\_line LIKE LINE OF range\_tab. \\n\\ \\n... \\n\\ \\nrspar\_line-selname = 'SELCRIT1'. \\nrspar\_line-kind = 'S'. \\nrspar\_line-sign = 'I'. \\nrspar\_line-option = 'EQ'. \\nrspar\_line-low = 'ABAP'. \\nAPPEND rspar\_line TO rspar\_tab. \\n\\ \\nrange\_line-sign = 'E'. \\nrange\_line-option = 'EQ'. \\nrange\_line-low = 'H'. \\nAPPEND range\_line TO range\_tab. \\n\\ \\nrange\_line-sign = 'E'. \\nrange\_line-option = 'EQ'. \\nrange\_line-low = 'K'. \\nAPPEND range\_line TO range\_tab. \\n\\ \\nSUBMIT report1 USING SELECTION-SCREEN '1100' \\n WITH SELECTION-TABLE rspar\_tab \\n WITH selcrit2 BETWEEN 'H' AND 'K' \\n WITH selcrit2 IN range\_tab \\n AND RETURN. REPORT report1. \\n\\ \\nNODES: spfli, sflight, sbook. \\n\\ \\n... REPORT report2. \\n\\ \\nDATA: trange TYPE rsds\_trange, \\n trange\_line \\n LIKE LINE OF trange, \\n trange\_frange\_t\_line \\n LIKE LINE OF trange\_line-frange\_t, \\n trange\_frange\_t\_selopt\_t\_line \\n LIKE LINE OF trange\_frange\_t\_line-selopt\_t, \\n texpr TYPE rsds\_texpr. \\n\\ \\ntrange\_line-tablename = 'SPFLI'. \\ntrange\_frange\_t\_line-fieldname = 'CONNID'. \\ntrange\_frange\_t\_selopt\_t\_line-sign = 'I'. \\ntrange\_frange\_t\_selopt\_t\_line-option = 'BT'. \\ntrange\_frange\_t\_selopt\_t\_line-low = '0200'. \\ntrange\_frange\_t\_selopt\_t\_line-high = '0800'. \\nAPPEND trange\_frange\_t\_selopt\_t\_line \\n TO trange\_frange\_t\_line-selopt\_t. \\ntrange\_frange\_t\_selopt\_t\_line-sign = 'I'. \\ntrange\_frange\_t\_selopt\_t\_line-option = 'NE'. \\ntrange\_frange\_t\_selopt\_t\_line-low = '0400'. \\nAPPEND trange\_frange\_t\_selopt\_t\_line \\n TO trange\_frange\_t\_line-selopt\_t. \\nAPPEND trange\_frange\_t\_line TO trange\_line-frange\_t. \\nAPPEND trange\_line TO trange. \\n\\ \\nCALL FUNCTION 'FREE\_SELECTIONS\_RANGE\_2\_EX' \\n EXPORTING \\n field\_ranges = trange \\n IMPORTING \\n expressions = texpr. \\n\\ \\nSUBMIT report1 VIA SELECTION-SCREEN \\n WITH FREE SELECTIONS texpr. \\ \\ **sign** **option** **low** \\ **high** `selcrit1` *I* `EQ` `ABAP` `selcrit2` *I* `BT` `H` `K` `selcrit2` *E* `EQ` `H` `selcrit2` *E* `EQ` `K` abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_submit\_report.html abapsubmit.html abapsubmit\_interface.html