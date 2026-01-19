---
title: "ABAPSET_PF-STATUS_LIST"
description: |
  ABAPSET_PF-STATUS_LIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_PF-STATUS_LIST.htm"
abapFile: "ABAPSET_PF-STATUS_LIST.html"
keywords: ["select", "do", "if", "data", "ABAPSET", "STATUS", "LIST"]
---

[Short Reference](ABAPSET_PF-STATUS_SHORTREF.html)

`SET PF-STATUS status [OF PROGRAM prog]\ [EXCLUDING fcode]\                       [IMMEDIATELY].`

[1. `... OF PROGRAM prog`](#ABAP_ADDITION_1@3@)

[2. `... EXCLUDING fcode`](#ABAP_ADDITION_2@3@)

[3. `... IMMEDIATELY`](#ABAP_ADDITION_3@3@)

In list processing, this statement sets the GUI status specified in `status` for the display window of the current list, and all subsequent list levels until the next `SET PF-STATUS` statement. The statement mostly has the same function as for [dynpros](ABAPSET_PF-STATUS_DYNPRO.html).

Unlike the [screen layouts](ABENSCREEN_GLOSRY.html) of dynpros, however, every list level is automatically linked with the GUI status that is set for it. If the system returns from displaying a higher list level to a lower list level, the latter is displayed again with the GUI status that was set for it.

If the `status` of the data object is initial, the standard list status is set, and the additions `OF PROGRAM` and `EXCLUDING` are ignored. The [standard list status](ABENSTANDARD_LIST_STATUS_GLOSRY.html) contains predefined list-specific functions whose functions codes are handled by the runtime framework when a screen list is displayed, and produce calls of event blocks in the ABAP program. If event blocks are also defined with `AT LINE-SELECTION` or `AT PFnn`, further function keys are automatically assigned function codes in the standard list status:

If the standard list status is set, `sy-pfkey` is assigned the value *STLI*.

When setting the GUI status for the [list dynpro](ABENLIST_DYNPRO_GLOSRY.html), it is best to set a GUI status for which a *list status* has been included as a *template status* in the [Menu Painter](ABENMENU_PAINTER_GLOSRY.html). Including this type of template status passes the list-specific functions of the standard list status to a user-defined GUI status.

As for [dynpros](ABAPSET_PF-STATUS_DYNPRO.html).

The addition `IMMEDIATELY` only has an effect if it is used when creating a details list, that is, within an event block following an interactive list event. The effect of this addition is that `SET PF-STATUS` affects the current displayed list (`sy-listi`) and all subsequent list levels, and not only starting from the current details list (`sy-lsind`).

In the following program segment, it is only possible to select a single line from the basic list by double-clicking the mouse or using the function key F2. This function is then deactivated for the basic list and all subsequent list levels.

-   If [`AT LINE-SELECTION`](ABAPAT_LINE-SELECTION.html) is used, the F2 key and the double-click function of the mouse is assigned the function code *PICK* and the function text *Select*. This function is then also automatically displayed in the [application toolbar](ABENAPPLICATION_TOOLBAR_GLOSRY.html).
-   If [`AT PFnn`](ABAPAT_PFNN.html) is used, all the Fnn functions of the keyboard that are not handled by the runtime framework are assigned the function codes *PFnn*, where *nn* is a number between 01 and 24.

START-OF-SELECTION. \\n SET PF-STATUS 'BASIC'. \\n WRITE / \`Pick me!\`. \\n\\ \\nAT LINE-SELECTION. \\n SET PF-STATUS 'BASIC' EXCLUDING 'PICK' IMMEDIATELY. \\n WRITE / \`Don't pick me!\`. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenlists\_displayed.html