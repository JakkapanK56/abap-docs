---
title: "ABAPSUBMIT_SHORTREF"
description: |
  ABAPSUBMIT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSUBMIT_SHORTREF.htm"
abapFile: "ABAPSUBMIT_SHORTREF.html"
keywords: ["select", "do", "if", "data", "internal-table", "ABAPSUBMIT", "SHORTREF"]
---

[Reference](ABAPSUBMIT.html)

`SUBMIT \{rep|(name)\}\    [USING SELECTION-SCREEN dynnr]\    [VIA SELECTION-SCREEN]\    [USING SELECTION-SET variant]\    [USING SELECTION-SETS OF PROGRAM prog]\    [WITH SELECTION-TABLE rspar]\  \{\ [WITH sel1 \{\ \{\{EQ|NE|CP|NP|GE|LT|LE|GT\} dobj [SIGN sign]\}\                |\ \{[NOT] BETWEEN dobj1 AND dobj2 [SIGN sign]\}\                |\ \{IN rtab\}\ \}]\    [WITH sel2 \{\ \{\{EQ|NE|CP|NP|GE|LT|LE|GT\} dobj [SIGN sign]\}\                |\ \{[NOT] BETWEEN dobj1 AND dobj2 [SIGN sign]\}\                |\ \{IN rtab\}\ \}]\     ... \}\    [WITH FREE SELECTIONS texpr]\    [LINE-SIZE width]\    [LINE-COUNT page_lines]\    \{\ [EXPORTING LIST TO MEMORY]\    |\ [TO SAP-SPOOL SPOOL PARAMETERS pri_params                    [ARCHIVE PARAMETERS arc_params]\                    WITHOUT SPOOL DYNPRO]\ \}\    [[USER user] VIA JOB job NUMBER n [LANGUAGE lang]]\    [AND RETURN].`

Calls an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html).

-   [`\{rep|(name)\}`](ABAPSUBMIT.html)\\
    Specifies the program statically as `rep` or dynamically in `name`.
-   [`USING SELECTION-SCREEN dynnr`](ABAPSUBMIT_INTERFACE.html)\\
    Specifies the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html)\\ `dynnr` to be accessed. If nothing is specified, the [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) is called.
-   [`VIA SELECTION-SCREEN`](ABAPSUBMIT_INTERFACE.html)\\
    Displays the selection screen called. If nothing is specified, [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html) takes place in the background.
-   [`USING SELECTION-SET variant`](ABAPSUBMIT_SELSCREEN_PARAMETERS.html)\\
    Supplies the selection screen with values for a [selection screen variant](ABENVARIANT_GLOSRY.html)\\ `variant`.
-   [`USING SELECTION-SETS OF PROGRAM prog`](ABAPSUBMIT_SELSCREEN_PARAMETERS.html)\\
    Specifies a program `prog` whose [selection screen variants](ABENVARIANT_GLOSRY.html) are used.
-   [`WITH SELECTION-TABLE rspar`](ABAPSUBMIT_SELSCREEN_PARAMETERS.html)\\
    Supplies the selection screen with values from an internal table `rspar` of the line type `RSPARAMS` or `RSPARAMSL_255`.
-   [`WITH sel1 ... WITH sel2 ...`](ABAPSUBMIT_SELSCREEN_PARAMETERS.html)\\
    Supplies individual parameters and selection criteria `sel1`, `sel2`, ... on the selection screen:
    \\
    `\{EQ|NE|CP|NP|GE|LT|LE|GT\} dobj [SIGN sign]` - Passes a single value `dobj` with comparison operators and a specification for the `SIGN` column in the [selection table](ABENSELECTION_TABLE_GLOSRY.html).
    \\
    `[NOT] BETWEEN dobj1 AND dobj2 [SIGN sign]` - Passes an interval from `dobj1` to `dobj2` with an optional operator `NOT` and a specification for the `SIGN` column in the selection table.
    \\
    `IN range_tab` - Passes a [ranges table](ABENRANGES_TABLE_GLOSRY.html)\\ `range_tab`.
-   [`WITH FREE SELECTIONS texpr`](ABAPSUBMIT_SELSCREEN_PARAMETERS.html)\\
    Supplies the dynamic selection for the selection screen on a logical database with values from an internal table `texpr` of type `rsds_texpr` from [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `RSDS`.
-   [`LINE-SIZE width`](ABAPSUBMIT_LIST_OPTIONS.html)\\
    Defines the line width in the basic list for the program accessed to `width` characters.
-   [`LINE-COUNT page_lines`](ABAPSUBMIT_LIST_OPTIONS.html)\\
    Defines the page length in the basic list for the program accessed to `page_lines` lines.
-   [`EXPORTING LIST TO MEMORY`](ABAPSUBMIT_LIST_OPTIONS.html)\\
    Saves the basic list for the program accessed as an internal table of the line type `ABAPLIST` in the [ABAP Memory](ABENABAP_MEMORY_GLOSRY.html). Can only be used together with `AND RETURN`.
-   [`TO SAP-SPOOL`](ABAPSUBMIT_LIST_OPTIONS.html)\\
    Creates a [spool request](ABENSPOOL_REQUEST_GLOSRY.html) for the basic list in the program accessed with the following parameters:
    \\
    `SPOOL PARAMETERS pri_params` - Spool parameters in a structure `pri_params` of the type `PRI_PARAMS`.
    \\
    `ARCHIVE PARAMETERS arc_params` - Archiving parameters in a structure `arc_params` of the type `ARC_PARAMS`.
    \\
    `WITHOUT SPOOL DYNPRO` - Suppresses the spool dialog box.
-   [`[USER user] VIA JOB job NUMBER n [LANGUAGE lang]`](ABAPSUBMIT_VIA_JOB.html)\\
    Schedules execution of the program accessed as a [background task](ABENBACKROUND_TASK_GLOSRY.html) with the number `n` in the [background request](ABENBACKROUND_REQUEST_GLOSRY.html)\\ `job`. Can only be used together with `AND RETURN`. `user` can be used to specify a user name, and `lang` to specify the logon language of the background session.
-   [`AND RETURN`](ABAPSUBMIT.html)\\
    Once the program call is finished, resumes execution of the program execution is continued after the statement `SUBMIT`. Otherwise, the calling program is terminated.

abenabap.html abenabap\_reference.html abenabap\_shortref.html