---
title: "ABAPSELECT-OPTIONS_SHORTREF"
description: |
  ABAPSELECT-OPTIONS_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT-OPTIONS_SHORTREF.htm"
abapFile: "ABAPSELECT-OPTIONS_SHORTREF.html"
keywords: ["select", "do", "if", "case", "data", "internal-table", "ABAPSELECT", "OPTIONS", "SHORTREF"]
---

[Reference](ABAPSELECT-OPTIONS.html)

`SELECT-OPTIONS selcrit FOR \{dobj|(name)\}\                [OBLIGATORY|NO-DISPLAY]\                [VISIBLE LENGTH vlen]\                [NO-EXTENSION]\                [NO INTERVALS]\                [MODIF ID modid]\                [DEFAULT val1 [TO val2]\ [OPTION opt]\ [SIGN sign]]\                [LOWER CASE]\                [MATCHCODE OBJECT search_help]\                [MEMORY ID pid]\                [NO DATABASE SELECTION]\                [HELP-REQUEST  [FOR \{LOW|HIGH\}]]\                [VALUE-REQUEST [FOR \{LOW|HIGH\}]].`

Declares an internal [selection table](ABENSELECTION_TABLE_GLOSRY.html)\\ `selcrit` for a [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html) and creates the corresponding input fields on the current [selection screen](ABENSELECTION_SCREEN_GLOSRY.html).

-   [`FOR \{dobj|(name)\}`](ABAPSELECT-OPTIONS_FOR.html)\\
    Specifies the data type with a static reference to a data object `dobj` or defines the data type using `c` with a length of 45, and represents the input fields according to the type specified dynamically in `name`.
-   [`OBLIGATORY`](ABAPSELECT-OPTIONS_SCREEN.html)\\
    Defines the first input field as a mandatory field.
-   [`NO-DISPLAY`](ABAPSELECT-OPTIONS_SCREEN.html)\\
    No input fields are created on the selection screen.
-   [`VISIBLE LENGTH vlen`](ABAPSELECT-OPTIONS_SCREEN.html)\\
    Sets the visible length of the input fields to `vlen`.
-   [`NO-EXTENSION`](ABAPSELECT-OPTIONS_SCREEN.html)\\
    Prevents multiple selections.
-   [`NO INTERVALS`](ABAPSELECT-OPTIONS_SCREEN.html)\\
    Only the first input field on the selection screen is created.
-   [`MODIF ID modid`](ABAPSELECTION-SCREEN_MODIF_ID.html)\\
    Assigns the input fields to the [modification group](ABENMODIFICATION_GROUP_GLOSRY.html)\\ `modid`.
-   [`DEFAULT val1 [TO val2]\ [OPTION opt]\ [SIGN sign]`](ABAPSELECT-OPTIONS_VALUE.html)\\
    Creates [start values](ABENSTART_VALUE_GLOSRY.html)\\ `val1`, `val2`, `opt`, and `sign` for the first line of the selection table.
-   [`LOWER CASE`](ABAPSELECT-OPTIONS_VALUE.html)\\
    Prevents the content of character-like data objects from being converted into uppercase when they are transferred between input fields and an internal table.
-   [`MATCHCODE OBJECT search_help`](ABAPSELECT-OPTIONS_VALUE.html)\\
    Links the input fields with a search help `search_help` from [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html).
-   [`MEMORY ID pid`](ABAPSELECT-OPTIONS_VALUE.html)\\
    Links the first input field with the [SPA/GPA parameter](ABENSPA_GPA_PARAMETER_GLOSRY.html)\\ `pid` in the [user memory](ABENUSER_MEMORY_GLOSRY.html).
-   [`NO DATABASE SELECTION`](ABAPSELECT-OPTIONS_NO_DB_SEL.html)\\
    Does not send the selection table to the logical database as a dynamic selection after [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html).
-   [`[HELP-REQUEST]\ [VALUE-REQUEST]\ [FOR \{LOW|HIGH\}]`](ABAPSELECT-OPTIONS_LDB.html)\\
    **Obsolete:** Enables user-defined field helps and input helps in [logical databases](ABENLOGICAL_DATA_BASE_GLOSRY.html) for the first or second input field.

abenabap.html abenabap\_reference.html abenabap\_shortref.html