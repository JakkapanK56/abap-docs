---
title: "This statement has the same effect as the statement"
description: |
  `DELETE FROM MEMORY ID id.`(ABAPDELETE_CLUSTER.html) The addition `ID` can be omitted outside of classes. In this case, all data clusters(ABENDATA_CLUSTER_GLOSRY.html) are deleted from the ABAP Memory(ABENABAP_MEMORY_GLOSRY.html). The use of `FREE MEMORY` without the addition `ID` is obsolete
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFREE_MEMORY.htm"
abapFile: "ABAPFREE_MEMORY.html"
keywords: ["delete", "do", "while", "case", "class", "data", "ABAPFREE", "MEMORY"]
---

[Short Reference](ABAPFREE_MEMORY_SHORTREF.html)

`FREE MEMORY ID id.`

This statement has the same effect as the statement

[`DELETE FROM MEMORY ID id.`](ABAPDELETE_CLUSTER.html)

The addition `ID` can be omitted outside of classes. In this case, all [data clusters](ABENDATA_CLUSTER_GLOSRY.html) are deleted from the [ABAP Memory](ABENABAP_MEMORY_GLOSRY.html).

The use of `FREE MEMORY` without the addition `ID` is [obsolete](ABAPFREE_MEM_ID_OBSOLETE.html). While the statement `EXPORT` without addition `ID` affects only one data cluster, for `FREE MEMORY`, all clusters are affected. It is safest to use the statement `DELETE FROM`, because here the addition `ID` is mandatory.

Deletion of the data cluster with the ID `demo` from the ABAP memory.

DATA(dobj) = \`xxx\`. \\n\\ \\nEXPORT content = dobj TO MEMORY ID 'demo'. \\n\\ \\nIMPORT content = dobj FROM MEMORY ID 'demo'. \\nASSERT sy-subrc = 0. \\n\\ \\nFREE MEMORY ID 'demo'. \\n\\ \\nIMPORT content = dobj FROM MEMORY ID 'demo'. \\nASSERT sy-subrc = 4. abenabap.html abenabap\_reference.html abendata\_cluster.html