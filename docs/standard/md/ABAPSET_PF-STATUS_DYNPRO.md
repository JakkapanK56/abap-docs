---
title: "ABAPSET_PF-STATUS_DYNPRO"
description: |
  ABAPSET_PF-STATUS_DYNPRO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_PF-STATUS_DYNPRO.htm"
abapFile: "ABAPSET_PF-STATUS_DYNPRO.html"
keywords: ["select", "do", "if", "case", "data", "internal-table", "ABAPSET", "STATUS", "DYNPRO"]
---

[Short Reference](ABAPSET_PF-STATUS_SHORTREF.html)

 `SET PF-STATUS status [OF PROGRAM prog]\ [EXCLUDING fcode].`

[1. `... OF PROGRAM prog`](#ABAP_ADDITION_1@3@)

[2. `... EXCLUDING fcode`](#ABAP_ADDITION_2@3@)

In [dynpro](ABENDYNPRO_GLOSRY.html) processing, this statement defines the [GUI status](ABENGUI_STATUS_GLOSRY.html) specified in `status` for the subsequent [screen layouts](ABENSCREEN_GLOSRY.html). The components of the set status are active in the user interface from the next time a screen layout is sent and remain active until the end of the program or until the next `SET PF-STATUS` statement. The name of the current GUI status can be read from the system field `sy-pfkey`.

`status` expects a character-like data object that contains either the name of the GUI status of the [main program](ABENMAIN_PROGRAM_GLOSRY.html) of the current [program group](ABENPROGRAM_GROUP_GLOSRY.html), or the program specified in uppercase or only blanks in `prog`. If the status is not available, an empty status is displayed in which no control elements are active except for the predefined system functions. Of these functions, only the *Enter* key, to which an empty function code is assigned in this case, raises the event [PAI](ABENPAI_GLOSRY.html). If the data object `status` contains only blanks, the [standard list status](ABAPSET_PF-STATUS_LIST.html) is set and the additions have no effect.

By default, a GUI status defined in the current [main program](ABENMAIN_PROGRAM_GLOSRY.html) is used. The addition `OF PROGRAM` can be used to set the GUI status of the program specified in `prog`. `prog` expects a character-like data object that contains the name of the ABAP program in uppercase letters.

The addition `EXCLUDING` can be used to deactivate functions of the set GUI status. An inactive function cannot be selected in the user interface. `fcode` expects either a character-like data object or an internal table with a [flat](ABENFLAT_GLOSRY.html) character-like line type. The functions whose function codes are contained in the field or in the lines of the internal table are deactivated. Only one function code can be specified for each line of the table. The codes are not case-sensitive. Function codes specified in `fcode` for which there is no function in the GUI status are ignored.

If an internal table is specified for `fcode` that does not have an unique primary key, duplicate entries are implicitly removed, in order to prevent memory bottlenecks when handling the GUI status.

Sets the GUI status `STATUS_0100` of the current main program in a PBO module, where the functions with the function codes *CHANGE* and *SAVE* are deactivated.

-   The GUI status of a dynpro must be set at the latest during the event [PBO](ABENPBO_GLOSRY.html). If no GUI status is set for a dynpro, the empty status described above is used.
-   If the set GUI status contains dynamic function texts, the function texts are read from the assigned global data objects of the program in which the GUI status is defined. If these do not exist, question marks (?) are displayed. For dynamic function texts, an explicitly specified program `prog` is loaded into the current [program group](ABENPROGRAM_GROUP_GLOSRY.html) if it does not already exist in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html). This enables access to its global data objects.
-   The statement `SET PF-STATUS` has a variant for the GUI status of [lists](ABAPSET_PF-STATUS_LIST.html).
-   There is no guarantee that the statement `SET PF-STATUS` will work at [PBO](ABENPBO_GLOSRY.html) for the [selection screen](ABENSELECTION_SCREEN_OVERVIEW.html). This statement should no longer be used for selection screens.
-   If a [switch](ABENSWITCH_GLOSRY.html) is assigned to an element of the GUI status in the Menu Painter, this controls the activation of this element.

DATA fcode TYPE TABLE OF sy-ucomm. \\n... \\nMODULE status\_0100 OUTPUT. \\n fcode = VALUE #( \\n ( 'CHANGE' ) \\n ( 'SAVE' ) ). \\n SET PF-STATUS 'STATUS\_0100' EXCLUDING fcode. \\nENDMODULE. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html