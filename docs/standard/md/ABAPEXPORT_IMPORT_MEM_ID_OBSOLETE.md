---
title: "ABAPEXPORT_IMPORT_MEM_ID_OBSOLETE"
description: |
  ABAPEXPORT_IMPORT_MEM_ID_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXPORT_IMPORT_MEM_ID_OBSOLETE.htm"
abapFile: "ABAPEXPORT_IMPORT_MEM_ID_OBSOLETE.html"
keywords: ["if", "class", "data", "ABAPEXPORT", "IMPORT", "MEM", "OBSOLETE"]
---

`[EXPORT](ABAPEXPORT_DATA_CLUSTER.html)\ [parameter_list](ABAPEXPORT_DATA_CLUSTER_PARAM.html) TO [MEMORY](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html)\ [COMPRESSION \{ON|OFF\}].  \  [IMPORT](ABAPIMPORT_DATA_CLUSTER.html)\ [parameter_list](ABAPIMPORT_PARAMETERLIST.html) FROM [MEMORY](ABAPIMPORT_MEDIUM.html)\ [[conversion_options](ABAPIMPORT_CONVERSION.html)].`

If the addition `ID` is not specified in the statements [`EXPORT TO MEMORY`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) or [`IMPORT FROM MEMORY`](ABAPIMPORT_MEDIUM.html), the statement `EXPORT` writes to an anonymous area of the [ABAP memory](ABENABAP_MEMORY_GLOSRY.html) and the statement `IMPORT` reads from this area.

This short form is extremely error-prone and forbidden in classes, since all `EXPORT` statements without an ID overwrite the same data cluster.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendata\_cluster\_obsolete.html