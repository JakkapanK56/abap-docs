---
title: "ABAPSELECT-OPTIONS_LDB"
description: |
  ABAPSELECT-OPTIONS_LDB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT-OPTIONS_LDB.htm"
abapFile: "ABAPSELECT-OPTIONS_LDB.html"
keywords: ["select", "do", "if", "data", "ABAPSELECT", "OPTIONS", "LDB"]
---

[Short Reference](ABAPSELECT-OPTIONS_SHORTREF.html)

`... [ HELP-REQUEST  [ FOR \{LOW|HIGH\}\ ]\ ]`\\ 
    `[ VALUE-REQUEST [ FOR \{LOW|HIGH\}\ ]\ ] ...`

[1. `... HELP-REQUEST [ FOR \{LOW|HIGH\}\ ]`](#ABAP_ADDITION_1@3@)

[2. `... VALUE-REQUEST [ FOR \{LOW|HIGH\}\ ]`](#ABAP_ADDITION_2@3@)

These additions for the statement [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html) are only possible in the [selection include](ABENLDB_STATEMENTS.html) of a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html). They can be used to access subroutines for user-defined helps.

If logical databases are no longer created, it is no longer necessary to use the additions of the statement `SELECT-OPTIONS`.

If this addition is specified, the program accesses the subroutine `selcrit_hlp` when the user chooses the field help F1 for an input field in the [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html). The subroutine `selcrit_hlp` must be defined in the [database program](ABENDATABASE_PROGRAM_GLOSRY.html) of the logical database, where `selcrit` is the name of the selection criterion. `FOR LOW` or `FOR HIGH` can be specified to access either the subroutine `selcrit-low_hlp` or the subroutine `selcrit-high_hlp`, depending on whether the field help is selected for the first or second input field. The addition does not affect the other field. If one of the subroutines does not exist, choosing F1 for the input field has no effect.

If the selection criterion is defined with reference to a data type in the ABAP Dictionary, the field help defined there for the corresponding field is not displayed.

The subroutines can be used in the same way as a [`PARAMETERS`](ABAPPARAMETERS.html) statement to program a field help.

If this addition is specified, the system accesses either the subroutine `selcrit-low_val` or `selcrit-high_val`, depending on whether the user chooses the input help F4 on the first or second input field in the [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html). The subroutines `selcrit-low_val` and `selcrit-high_val` must be defined in the [database program](ABENDATABASE_PROGRAM_GLOSRY.html) for the logical database, where `selcrit` is the name of the selection criterion. If `FOR LOW` is specified, the addition only affects the first input field, and if `FOR HIGH` is specified, it only affects the second.

If one of the subroutines does not exist, choosing F4 for the input field has no effect. If the selection criterion is defined with reference to a data type in the ABAP Dictionary, the input help defined there for the field in question is not displayed.

The subroutines can be used in the same way as a [`PARAMETERS`](ABAPPARAMETERS.html) statement to program a field help. When the input help is selected, no other [selection screen events](ABENSELECTION_SCREEN_EVENT_GLOSRY.html) are raised and there is no automatic pass by value between the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) and the program.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html abenldb\_statements.html