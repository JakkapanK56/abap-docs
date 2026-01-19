---
title: "ABENPRINT_SCREEN"
description: |
  ABENPRINT_SCREEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPRINT_SCREEN.htm"
abapFile: "ABENPRINT_SCREEN.html"
keywords: ["do", "if", "method", "ABENPRINT", "SCREEN"]
---

As well as the method of creating spool lists as already shown, screen lists can also be sent to the SAP spool system after they have been created. To do this, the *Print* function can be chosen in the list display. This function transforms the screen list into a spool list, where the spool format specified in the [spool parameters](ABENPRINT_PARAMETERS.html) is used to split the list and shorten it, if necessary. However, this usually results in the following problems:

-   A list that has been formatted as a screen list is not appropriate for spool output, because:

-   A screen list usually consists of one logical page. This logical page must be divided into multiple physical spool pages for the spooling process. Since the screen list contains only one [page header](ABENPAGE_HEADER_GLOSRY.html), this page header is used as the page header of every spool page. If it contains page numbering, every spool page has the same page number (usually 1).
-   Screen lists are usually very wide (> 130 columns). A normal printer can print these lists only by truncating the lines.

-   A screen list does not support any special print control sequences as they appear, for example, in the statement [`PRINT-CONTROL`](ABAPPRINT-CONTROL.html).

-   For the reasons mentioned this type of spooling should not be used for production purposes. It is designed only as a way of capturing a screen list for testing purposes.
-   A screen list cannot contain any index lines created using [`PRINT-CONTROL`](ABAPPRINT-CONTROL.html). Indexed searches are not possible in an archived screen list.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenprint.html