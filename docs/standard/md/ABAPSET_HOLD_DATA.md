---
title: "ABAPSET_HOLD_DATA"
description: |
  ABAPSET_HOLD_DATA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_HOLD_DATA.htm"
abapFile: "ABAPSET_HOLD_DATA.html"
keywords: ["select", "delete", "do", "data", "ABAPSET", "HOLD", "DATA"]
---

[Short Reference](ABAPSET_HOLD_DATA_SHORTREF.html)

`SET HOLD DATA \{ON|OFF\}.`

During [PBO](ABENPBO_GLOSRY.html) processing, this statement makes the following standard menu items in the GUI status of the [dynpro](ABENDYNPRO_GLOSRY.html) either effective using the addition `ON` or ineffective using the addition `OFF`:

Each time PBO processing starts, the setting made in the static properties of the dynpro under *Hold Data* is set so that execution of `SET HOLD DATA` during [PAI](ABENPAI_GLOSRY.html) processing does not have an effect on the display of the subsequent screen layout.

The menu items above can be selected in every GUI status but only take effect when they are activated in the static properties of the dynpro using *Hold Data* or the statement `SET HOLD DATA`.

-   *System -> User Profile -> Hold Data*
-   This function saves the entries made by the user in the input fields of the dynpro for the duration of the current user session. Each time the [screen layout](ABENSCREEN_GLOSRY.html) of the dynpro is displayed, these values are passed to the corresponding input fields as default values. This overwrites the values transported from the ABAP program.
-   *System -> User Profile -> Set Data*
-   This function works like the 'Hold Data' function except that here, the corresponding input fields are no longer ready for input for all subsequent calls of the dynpro.
-   *System -> User Profile -> Delete Data*
-   This function deletes all saved data and makes the input fields that were locked using 'Set Data' ready for input again for all subsequent calls of the dynpro.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html