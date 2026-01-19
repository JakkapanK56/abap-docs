---
title: "ABAPGET_PF"
description: |
  ABAPGET_PF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_PF.htm"
abapFile: "ABAPGET_PF.html"
keywords: ["insert", "do", "if", "data", "internal-table", "ABAPGET"]
---

[Short Reference](ABAPGET_PF-STATUS_SHORTREF.html)

`GET PF-STATUS status [PROGRAM prog]\ [EXCLUDING fcode].`

[1. `... PROGRAM prog`](#ABAP_ADDITION_1@3@)

[2. `... EXCLUDING fcode`](#ABAP_ADDITION_2@3@)

This statement assigns data object `status` the currently set GUI status, whose name is also available in the `sy-pfkey` system field. The following can be specified for `status`:

If no status is set (empty status is displayed in the GUI window), `status` is initialized. If the [standard list status](ABENSTANDARD_LIST_STATUS_GLOSRY.html) is set, `status` is set to the value *STLI*.

The addition `PROGRAM` is used to assign the name of the program in which the current GUI status is defined to the variable `prog`. `prog` expects a character-like data object.

The addition `EXCLUDING` is used to insert the function codes which are inactive in the current GUI status line by line into the internal table `fcode`. For `fcode`, an internal table with a [flat](ABENFLAT_GLOSRY.html) character-like line type can be specified. Function codes are only determined if they have been deactivated with the relevant addition of the statement `SET PF-STATUS`. Statically deactivated function codes in the GUI status are not defined.

Determination of the current status in a [PAI](ABENPAI_GLOSRY.html) module.

-   An existing character-like variable.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of type `GUI_STATUS` is declared.

DATA: status TYPE string, \\n prog TYPE string, \\n fcode TYPE SORTED TABLE OF sy-ucomm \\n WITH NON-UNIQUE KEY table\_line. \\n... \\nMODULE user\_command\_100 INPUT. \\n ... \\n GET PF-STATUS status PROGRAM prog EXCLUDING fcode. \\n ... \\nENDMODULE. \\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html