---
title: "ABAPGET_PF-STATUS_SHORTREF"
description: |
  ABAPGET_PF-STATUS_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_PF-STATUS_SHORTREF.htm"
abapFile: "ABAPGET_PF-STATUS_SHORTREF.html"
keywords: ["internal-table", "ABAPGET", "STATUS", "SHORTREF"]
---

[Reference](ABAPGET_PF.html)

`GET PF-STATUS status [PROGRAM prog]\ [EXCLUDING fcode].`

Returns the current [GUI status](ABENGUI_STATUS_GLOSRY.html) in `status`.

-   `PROGRAM prog`\\
    Returns the program, in which the GUI status is defined, in `prog`.
-   `EXCLUDING fcode`\\
    Returns the inactive [function codes](ABENFUNCTION_CODE_GLOSRY.html) in the internal table `fcode`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html