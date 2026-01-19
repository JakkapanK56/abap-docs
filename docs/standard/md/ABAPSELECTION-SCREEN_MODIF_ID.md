---
title: "ABAPSELECTION-SCREEN_MODIF_ID"
description: |
  ABAPSELECTION-SCREEN_MODIF_ID - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_MODIF_ID.htm"
abapFile: "ABAPSELECTION-SCREEN_MODIF_ID.html"
keywords: ["select", "loop", "if", "data", "ABAPSELECTION", "SCREEN", "MODIF"]
---

[Short Reference](ABAPSELECTION-SCREEN_SHORTREF.html)

`... MODIF ID modid ...`

After the `MODIF ID` addition, a `modid` identifier can be specified to assign a screen element of a selection screen to a [modification group](ABENMODIFICATION_GROUP_GLOSRY.html). The `MODIF ID` addition can be specified for the following statements:

The name of the `modid` modification group must be specified directly and can have no more than three characters. When generating a selection screen, `modid` is entered for the properties of the screen elements created using the above statement in the `group` that is assigned to the component `group1` of the structure [`SCREEN`](ABENSCREEN.html). All screen elements of a group can be modified before displaying the selection screen together with the [`MODIFY SCREEN`](ABAPMODIFY_SCREEN.html) statement.

The modification groups that are assigned to the `group2` and `group3` columns of the structure [`SCREEN`](ABENSCREEN.html), are set by the system when generating a selection screen.

Possible values in `group3`:

The elements of the `b2` block are assigned to the `bl2` modification group. The `show_all` checkbox enables the option of displaying these elements. The change in the display takes place immediately, since the event `AT SELECTION-SCREEN` is raised when the checkbox is selected. The function code is not needed. Instead, the content of `show_all` is evaluated at [PBO](ABENPBO_GLOSRY.html).

-   [`SELECTION-SCREEN - COMMENT`](ABAPSELECTION-SCREEN_COMMENT.html)
-   [`SELECTION-SCREEN - PUSHBUTTON`](ABAPSELECTION-SCREEN_PUSHBUTTON.html)
-   [`SELECTION-SCREEN - TAB`](ABAPSELECTION-SCREEN_TABBED.html)
-   [`SELECTION-SCREEN - ULINE`](ABAPSELECTION-SCREEN_ULINE.html)
-   [`PARAMETERS`](ABAPPARAMETERS.html)
-   [`SELECT-OPTIONS`](ABAPSELECT-OPTIONS.html)

-   `group2` contains the value *DBS* for screen elements defined in a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html).
-   `group3` can contain values from the following table.
-   `group4` is only intended for internal use.

PARAMETERS show\_all AS CHECKBOX USER-COMMAND flag. \\n\\ \\nSELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME. \\nPARAMETERS: p1 TYPE c LENGTH 10, \\n p2 TYPE c LENGTH 10, \\n p3 TYPE c LENGTH 10. \\nSELECTION-SCREEN END OF BLOCK b1. \\n\\ \\nSELECTION-SCREEN BEGIN OF BLOCK b2 WITH FRAME. \\nPARAMETERS: p4 TYPE c LENGTH 10 MODIF ID bl2, \\n p5 TYPE c LENGTH 10 MODIF ID bl2, \\n p6 TYPE c LENGTH 10 MODIF ID bl2. \\nSELECTION-SCREEN END OF BLOCK b2. \\n\\ \\nAT SELECTION-SCREEN OUTPUT. \\n LOOP AT SCREEN INTO DATA(screen\_wa). \\n IF show\_all <> 'X' AND \\n screen\_wa-group1 = 'BL2'. \\n screen\_wa-active = '0'. \\n ENDIF. \\n MODIFY SCREEN FROM screen\_wa. \\n ENDLOOP. **Key** **Meaning of the screen element** `BLK` Frame or title of a block `COF` Output field that is linked with a [selection parameter](ABENSELPAR_GLOSRY.html) or [selection criterion](ABENSELECTION_CRITERION_GLOSRY.html) using the addition `FOR FIELD`. `COM` Output field that is not linked with a selection parameter or a selection criterion. `HGH` Input field for the upper interval limit of a selection criterion `ISX` Input field for a selection parameter that is linked with a search help using the addition `AS SEARCH PATTERN`. `LOW` Input field for the lower interval limit of a selection criterion `OPU` Icon for the selection options of a selection criterion `PAR` Input field of a selection parameter `PBU` [Pushbutton](ABENPUSHBUTTON_GLOSRY.html) `TAB` [Tab title](ABENTAB_TITLE_GLOSRY.html) `TOT` Output field for text in front of the input field of the upper interval limit of a selection criterion `TST` [Tabstrip](ABENTABSTRIP_CONTROL_GLOSRY.html) `TXT` Output field for text in front of the input field of a selection parameter or the lower interval limit of a selection criterion `ULI` Horizontal line `VPU` Pushbutton for multiple selection of a selection criterion abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html abapselection-screen\_layout.html