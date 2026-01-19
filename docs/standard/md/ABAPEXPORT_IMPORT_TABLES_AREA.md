---
title: "ABAPEXPORT_IMPORT_TABLES_AREA"
description: |
  ABAPEXPORT_IMPORT_TABLES_AREA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXPORT_IMPORT_TABLES_AREA.htm"
abapFile: "ABAPEXPORT_IMPORT_TABLES_AREA.html"
keywords: ["if", "class", "data", "ABAPEXPORT", "IMPORT", "TABLES", "AREA"]
---

`[TABLES](ABAPTABLES.html) dbtab.  ...  [EXPORT](ABAPEXPORT_DATA_CLUSTER.html)\ [parameter_list](ABAPEXPORT_DATA_CLUSTER_PARAM.html)\         TO [DATABASE|\{SHARED MEMORY\}|\{SHARED BUFFER\}\ [CLIENT cl] ID id](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html)\         [COMPRESSION \{ON|OFF\}].  ...  [IMPORT](ABAPIMPORT_DATA_CLUSTER.html)\ [parameter_list](ABAPIMPORT_PARAMETERLIST.html)\         FROM [DATABASE|\{SHARED MEMORY\}|\{SHARED BUFFER\}\ [CLIENT cl] ID id](ABAPIMPORT_MEDIUM.html)\         [[conversion_options](ABAPIMPORT_CONVERSION.html)].`

If the addition `FROM wa` or `TO wa` is not specified in exports or imports using the media database table or shared memory, the ABAP runtime framework attempts to transport the components between [`SRTF2`](ABENEXPORT_DATA_CLUSTER_INDX.html) and [`CLUSTR`](ABENEXPORT_DATA_CLUSTER_INDX.html) of the [table work area](ABENTABLE_WORK_AREA_GLOSRY.html) declared using `TABLES dbtab`. If the table work area is not found, these components are not transported.

-   In global classes, it is not possible to use table work areas anyway. In local classes of programs other than [class pools](ABENCLASS_POOL_GLOSRY.html), the implicit mechanism is applied to any table work areas of their [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html).
-   The implicit use of table work areas is obsolete and hence the short forms shown here should no longer be used for data transports. Instead, it is recommended that `FROM wa` and `TO wa` are specified explicitly if the components between `SRTF2` and `CLUSTR` are written or read.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendata\_cluster\_obsolete.html