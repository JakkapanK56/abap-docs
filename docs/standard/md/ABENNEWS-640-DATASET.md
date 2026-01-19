---
title: "ABENNEWS-640-DATASET"
description: |
  ABENNEWS-640-DATASET - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-640-DATASET.htm"
abapFile: "ABENNEWS-640-DATASET.html"
keywords: ["do", "if", "data", "ABENNEWS", "640", "DATASET"]
---

[1. New Statement `TRUNCATE DATASET`](#ABAP_MODIFICATION_1@4@)

[2. New Addition `NO END OF LINE` in `TRANSFER`](#ABAP_MODIFICATION_2@4@)

[3.  Change to the Addition `POSITION END-OF-FILE`](#ABAP_MODIFICATION_3@4@)

The new statement [`TRUNCATE DATASET`](ABAPTRUNCATE.html) sets the end of the file to a specified item, which truncates or expands the file.

The new addition `NO END OF LINE` of the statement [`TRANSFER`](ABAPTRANSFER.html) prevents an end of file marker from being appended to the transferred data in a [text file](ABENTEXT_FILE_GLOSRY.html) or [legacy](ABENLEGACY_FILE_GLOSRY.html) text file.

In the statement [`SET DATASET`](ABAPSET_DATASET.html), the name of the addition `POSITION END-OF-FILE` has been changed to `POSITION END OF FILE` for consistency. The `END-OF-FILE` spelling is still supported for compatibility reasons, but is no longer documented and no longer recommended.

abenabap.html abennews.html abennews-6.html abennews-640.html