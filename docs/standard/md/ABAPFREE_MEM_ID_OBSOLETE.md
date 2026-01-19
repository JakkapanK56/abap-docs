---
title: "ABAPFREE_MEM_ID_OBSOLETE"
description: |
  ABAPFREE_MEM_ID_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFREE_MEM_ID_OBSOLETE.htm"
abapFile: "ABAPFREE_MEM_ID_OBSOLETE.html"
keywords: ["update", "delete", "if", "class", "data", "ABAPFREE", "MEM", "OBSOLETE"]
---

`FREE MEMORY.`

If the addition `ID` is not specified in the statement [`FREE MEMORY`](ABAPFREE_MEMORY.html), all data clusters are deleted from the ABAP memory.

-   `FREE MEMORY` without addition `ID` also deletes data clusters written internally by the runtime framework, as for [local update](ABENLOCAL_UPDATE_GLOSRY.html).
-   This short form is extremely error-prone and forbidden in classes, since a `FREE` statement without ID affects all data clusters.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendata\_cluster\_obsolete.html