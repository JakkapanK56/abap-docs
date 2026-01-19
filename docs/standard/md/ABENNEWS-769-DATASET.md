---
title: "ABENNEWS-769-DATASET"
description: |
  ABENNEWS-769-DATASET - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-769-DATASET.htm"
abapFile: "ABENNEWS-769-DATASET.html"
keywords: ["do", "if", "data", "ABENNEWS", "769", "DATASET"]
---

[1\. Placeholders in Paths Specified in Automatic Authorization Checks](#ABAP_MODIFICATION_1@4@)

[2. Automatic Authorization Checks for the `FILTER` Addition](#ABAP_MODIFICATION_2@4@)

In the database table `SPTH`, which is relevant for automatic authorization checks, placeholders for specific profile parameters or for the [current client](ABENCURRENT_CLIENT_GLOSRY.html) can now be specified in the column `PATH`. These placeholders are then replaced accordingly when evaluated. The possible placeholders are specified in the documentation of the table `SPTH`.

If the addition [`FILTER`](ABAPOPEN_DATASET_OS_ADDITION.html) is used in the statement `OPEN DATASET` and an automatic authorization check is made using an authorization group and the authorization object `S_PATH` when a file is accessed using the database table `SPTH`, the current user must have an authorization for the activity *A6* (Read) or *A7* (Change) when using the addition `FILTER`.

For compatibility reasons, the undocumented empty value for the activity is still accepted.

abenabap.html abennews.html abennews-76.html abennews-769.html