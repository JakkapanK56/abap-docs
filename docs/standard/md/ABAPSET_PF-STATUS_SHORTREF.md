---
title: "ABAPSET_PF-STATUS_SHORTREF"
description: |
  ABAPSET_PF-STATUS_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_PF-STATUS_SHORTREF.htm"
abapFile: "ABAPSET_PF-STATUS_SHORTREF.html"
keywords: ["if", "internal-table", "ABAPSET", "STATUS", "SHORTREF"]
---

[Reference](ABAPSET_PF-STATUS_DYNPRO.html)

`SET PF-STATUS status [OF PROGRAM prog]\                       [EXCLUDING fcode]\                       [IMMEDIATELY].`

Sets the [GUI status](ABENGUI_STATUS_GLOSRY.html).

-   [`OF PROGRAM prog`](ABAPSET_PF-STATUS_DYNPRO.html)\\
    Specifies the program `prog` in which the GUI status is defined.
-   [`EXCLUDING fcode`](ABAPSET_PF-STATUS_DYNPRO.html)\\
    Deactivates functions of the GUI status by specifying the [function codes](ABENFUNCTION_CODE_GLOSRY.html) in a character string or in an internal table `fcode`.
-   [`IMMEDIATELY`](ABAPSET_PF-STATUS_LIST.html)\\
    Sets the GUI status after an interactive list event for the currently displayed list.

abenabap.html abenabap\_reference.html abenabap\_shortref.html