---
title: "ABAPSELECTION-SCREEN_SUBSCREEN"
description: |
  ABAPSELECTION-SCREEN_SUBSCREEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_SUBSCREEN.htm"
abapFile: "ABAPSELECTION-SCREEN_SUBSCREEN.html"
keywords: ["select", "if", "case", "data", "ABAPSELECTION", "SCREEN", "SUBSCREEN"]
---

[Short Reference](ABAPSELECTION-SCREEN_BOS_SHORTREF.html)

`SELECTION-SCREEN BEGIN OF SCREEN dynnr AS SUBSCREEN`\\ 
                                       `[NO INTERVALS]`\\ 
                                       `[NESTING LEVEL n].`\\ 
`...`\\ 
`SELECTION-SCREEN END OF SCREEN dynnr.`

[1. `... NO INTERVALS`](#ABAP_ADDITION_1@3@)

[2. `... NESTING LEVEL n`](#ABAP_ADDITION_2@3@)

These statements have the same function as the [statements](ABAPSELECTION-SCREEN_NORMAL.html) for creating [selection screens](ABENSELECTION_SCREEN_GLOSRY.html) as regular dynpros, but here the selection screen is defined as a [subscreen dynpro](ABENSUBSCREEN_DYNPRO_GLOSRY.html).

Like all subscreen dynpros, selection screens defined as subscreen dynpros can be included in other dynpros or selection screens, or in subscreen areas or tab pages. However, they cannot be called using [`CALL SELECTION-SCREEN`](ABAPCALL_SELECTION_SCREEN.html). Subscreen dynpros are included in selection screens using the addition [`TABBED BLOCK`](ABAPSELECTION-SCREEN_TABBED.html) of the statement `SELECTION-SCREEN`. This addition enables an individual subscreen area to be defined without tab titles as a special tabstrip control.

A selection screen defined as a subscreen dynpro cannot contain any tabstrip controls defined using [`TABBED BLOCK`](ABAPSELECTION-SCREEN_TABBED.html).

If selection screens defined as [subscreens](ABENSUBSCREEN_GLOSRY.html) are included in dynpros, it should be noted that, as is the case with regular subscreen dynpros, the statement [`CALL SUBSCREEN`](CALL.html) in the [dynpro flow logic](ABENDYNPRO_FLOW_LOGIC_GLOSRY.html) must be executed at [PBO](ABENPBO_GLOSRY.html) and [PAI](ABENPAI_GLOSRY.html) so that the data is transported between the selection screen and the ABAP program. User actions on selection screens defined as subscreens raise regular [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html), even if they are included in dynpros.

If `NO INTERVALS` is specified, the identically named addition `NO INTERVALS` is used implicitly in the statement [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html) when defining all the selection criteria for this selection screen, and the subscreen is made narrower accordingly.

The addition `NESTING LEVEL` allows the width of the subscreen to be adjusted if it is included in one or more frames in a [tabstrip control](ABENTABSTRIP_CONTROL_GLOSRY.html). `n` must be specified directly as a number between 0 and 4. To ensure that the width is adjusted correctly, the number `n` must be the same as the number of frames that surround the tabstrip control. If the tabstrip control is not in a frame, the addition can be specified with the number 0 or omitted.

Defines the selection screens `100` and `200` as subscreen dynpros and includes them in a tabstrip control on the [standard selection screen](ABENSTANDARD_SELSCREEN_GLOSRY.html) in an executable program.

REPORT ... \\n\\ \\nSELECTION-SCREEN BEGIN OF SCREEN 100 AS SUBSCREEN. \\nPARAMETERS: p1 TYPE c LENGTH 10, \\n p2 TYPE c LENGTH 10, \\n p3 TYPE c LENGTH 10. \\nSELECTION-SCREEN END OF SCREEN 100. \\n\\ \\nSELECTION-SCREEN BEGIN OF SCREEN 200 AS SUBSCREEN. \\nPARAMETERS: q1 TYPE c LENGTH 10, \\n q2 TYPE c LENGTH 10, \\n q3 TYPE c LENGTH 10. \\nSELECTION-SCREEN END OF SCREEN 200. \\n\\ \\nSELECTION-SCREEN: BEGIN OF TABBED BLOCK mytab FOR 10 LINES, \\n TAB (20) button1 USER-COMMAND push1 \\n DEFAULT SCREEN 100, \\n TAB (20) button2 USER-COMMAND push2 \\n DEFAULT SCREEN 200, \\n END OF BLOCK mytab. \\n\\ \\nINITIALIZATION. \\n button1 = 'Selection Screen 1'. \\n button2 = 'Selection Screen 2'. abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_definition.html