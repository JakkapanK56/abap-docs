---
title: "ABAPIMPORT_OBSOLETE_ID"
description: |
  ABAPIMPORT_OBSOLETE_ID - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPIMPORT_OBSOLETE_ID.htm"
abapFile: "ABAPIMPORT_OBSOLETE_ID.html"
keywords: ["if", "class", "data", "ABAPIMPORT", "OBSOLETE"]
---

[Short Reference](ABAPIMPORT_SHORTREF.html)

`... MAJOR-ID id1 [MINOR-ID id2] ...`

Outside of classes, the addition `ID` of the statement [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html)\\ [`FROM DATABASE`](ABAPIMPORT_MEDIUM.html) can be replaced by these additions when database tables are imported. When `id1` and `id2` are specified, the same rules apply as to `id`.

A [data cluster](ABENDATA_CLUSTER_GLOSRY.html) is imported whose ID in the first part matches the value of `id1`. If `MINOR-ID id2` is also specified, the data cluster is imported whose ID in the second part, that is, at the positions after the number of characters specified in `id1`, is greater than or equal to the value in `id2`. The search is canceled once the first match is found.

If a data cluster with the ID *Sausage* was exported, this statement is found when `MAJOR-ID`\\ *Sau* is specified. It is also found if `ab` is specified as `MINOR-ID`, but it is not found if `yz` is specified as `MINOR-ID`.

-   When using `id2`, it should be noted that this data object must either only contain digits or only letters, since mixed forms can produce differing search results depending on the platform.
-   `MAJOR-ID` and `MINOR-ID` are obsolete, since the specified ID is not unique. The ID can be created in the program instead.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendata\_cluster\_obsolete.html