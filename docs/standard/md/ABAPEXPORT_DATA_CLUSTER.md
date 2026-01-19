---
title: "ABAPEXPORT_DATA_CLUSTER"
description: |
  ABAPEXPORT_DATA_CLUSTER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXPORT_DATA_CLUSTER.htm"
abapFile: "ABAPEXPORT_DATA_CLUSTER.html"
keywords: ["select", "delete", "if", "catch", "method", "class", "data", "internal-table", "ABAPEXPORT", "DATA", "CLUSTER"]
---

[Short Reference](ABAPEXPORT_SHORTREF.html)

``EXPORT [`parameter_list`](ABAPEXPORT_DATA_CLUSTER_PARAM.html) TO [`medium`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html)\ [COMPRESSION \{ON|OFF\}].``

[`... COMPRESSION \{ON|OFF\}`](#ABAP_ONE_ADD@1@)

This statement stores a [data cluster](ABENDATA_CLUSTER_GLOSRY.html) defined using [`parameter_list`](ABAPEXPORT_DATA_CLUSTER_PARAM.html) in a memory medium [`medium`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html). The addition `COMPRESSION` can be used to control whether the data is stored in the cluster in compressed form. A data cluster can be read from the memory medium using the statement [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html) and deleted using [`DELETE FROM`](ABAPDELETE_CLUSTER.html).

All data objects are archived according to the current [byte order](ABENBYTE_ORDER_GLOSRY.html) (endian) and character-like data objects according to the [character format](ABENCHAR_REPRESENTATION_GLOSRY.html) of the current [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html). The ID of the data cluster indicates which byte order and character format have been used during the export. When the data cluster is imported using the `IMPORT` statement, this ID is evaluated, and the data is converted to the current byte order and character representation.

A data cluster can have a maximum of 2 GB. Any attempts to export more than 2 GB raise a catchable exception of the class `CX_SY_COMPRESSION_ERROR`. If a different resource bottleneck occurs earlier, however, its related exception can be raised first.

See also [Classes for Data Clusters](ABENCL_ABAP_EXPIMP.html).

Export of an internal table to a [suitable](ABENEXPORT_DATA_CLUSTER_INDX.html) DDIC database table `DEMO_INDX_BLOB` and import of the content from the data cluster to another internal table.

This addition determines whether the data in the data cluster is compressed. By default, compression is deactivated for all memory media [`medium`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html), except database tables. If compression is required, it must be switched on using `ON`. If stored in a database table, compression is switched on by default and is only switched off if `OFF` is specified.

Export of the compressed result of an XML serialization of an object to the ABAP memory and then importing it.

The program `DEMO_DATA_CLUSTER` demonstrates how the size of the data cluster is affected by a compression.

-   When a data cluster is imported using [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html), the system automatically recognizes whether or not the data is compressed.
-   Compression saves space, but it is more time-consuming.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(itab). \\n\\ \\nEXPORT scarr = itab TO DATABASE demo\_indx\_blob(sc) ID 'DEMO'. \\n\\ \\n... \\n\\ \\nDATA jtab LIKE itab. \\nIMPORT scarr = jtab FROM DATABASE demo\_indx\_blob(sc) ID 'DEMO'. \\n\\ \\nout->write( jtab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES if\_serializable\_object. \\n DATA attr TYPE i. \\n METHODS constructor IMPORTING p TYPE i. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD constructor. \\n attr = p. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nSTART-OF-SELECTION. \\n\\ \\n DATA(oref) = NEW cls( 123 ). \\n\\ \\n CALL TRANSFORMATION id SOURCE oref = oref \\n RESULT XML DATA(xml). \\n\\ \\n EXPORT xml = xml TO MEMORY ID 'DEMO' COMPRESSION ON. \\n\\ \\n ... \\n\\ \\n CLEAR oref. \\n IMPORT xml = xml FROM MEMORY ID 'DEMO'. \\n\\ \\n CALL TRANSFORMATION id SOURCE XML xml \\n RESULT oref = oref. \\n\\ \\n out->write( oref->attr ). \\n\\ \\n out->display( ). abenabap.html abenabap\_reference.html abendata\_cluster.html