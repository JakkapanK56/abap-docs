---
title: "ABENNEWS-703-SCREENS"
description: |
  ABENNEWS-703-SCREENS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-703-SCREENS.htm"
abapFile: "ABENNEWS-703-SCREENS.html"
keywords: ["select", "if", "case", "data", "ABENNEWS", "703", "SCREENS"]
---

[1\. Extended Field Lengths on Selection Screens](#ABAP_MODIFICATION_1@4@)

[2\. Handling Spool Lists](#ABAP_MODIFICATION_2@4@)

The maximum length of input fields on selection screens has been increased from 132 to 255 for parameters and from 45 to 255 for selection criteria. To allow values to be passed using [`SUBMIT WITH SELECTION TABLE`](ABAPSUBMIT_SELSCREEN_PARAMETERS.html), a new data type `RSPARAMSL_255`, which supports this maximum length, has been added to ABAP Dictionary.

If a [spool list level](ABENSPOOL_LIST_LEVEL_GLOSRY.html) stacked in a preceding [spool list](ABENSPOOL_LIST_GLOSRY.html) is closed using [`NEW-PAGE PRINT OFF`](ABAPNEW-PAGE_PRINT.html), the preceding spool list is now always resumed. Previously, a new spool list was opened in this case if the spool parameters were different and the existing spool list resumed only if the spool parameters were identical.

When the system returns to the spool list, the system field `sy-spono` is switched to the associated number of the spool request directly when the statement `NEW-PAGE PRINT OFF` is executed. Previously, `sy-spono` was not modified directly but only in the next output statement sent to a spool list.

abenabap.html abennews.html abennews-70\_ehps.html abennews-703.html