---
title: "ABAPEXPORT_DATA_CLUSTER_MEDIUM"
description: |
  ABAPEXPORT_DATA_CLUSTER_MEDIUM - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPEXPORT_DATA_CLUSTER_MEDIUM.htm"
abapFile: "ABAPEXPORT_DATA_CLUSTER_MEDIUM.html"
keywords: ["select", "while", "if", "case", "data", "types", "internal-table", "ABAPEXPORT", "DATA", "CLUSTER", "MEDIUM"]
---

`... \{ DATA BUFFER xstr \}\    |\ \{ INTERNAL TABLE itab \}\   ...`

[1. `... DATA BUFFER xstr`](#ABAP_ALTERNATIVE_1@2@)

[2. `... INTERNAL TABLE itab`](#ABAP_ALTERNATIVE_2@2@)

The exported [data cluster](ABENDATA_CLUSTER_GLOSRY.html) can be stored in a byte string `xstr` or in an internal table `itab`.

If `DATA BUFFER` is specified, the data cluster is written to the elementary data object `xstr`, which must be of the type `xstring`. The previous content of `xstr` is overwritten completely.

Export of an internal table to a byte string and storing it in a database table. After the byte string is read from the DDIC database table, the content of the data cluster can be imported into another internal table.

If `INTERNAL TABLE` is specified, the data cluster is stored in the internal table `itab`. The previous content of `itab` is overwritten completely.

The first column of `itab` must have the data type [`s`](ABENBUILTIN_TYPES_NUMERIC.html) or [`i`](ABENBUILTIN_TYPES_NUMERIC.html) and the second column must have the type `x`. Depending on the width of the second column, the data is stored across multiple table lines if necessary. The first column contains the length occupied in the second column. The only table category allowed for `itab` are [standard tables](ABENSTANDARD_TABLE_GLOSRY.html) without [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html).

Export of an internal table to a data cluster in an internal table and importing it into another internal table.

-   A data object `xstr` filled by `EXPORT TO DATA BUFFER` contains exactly one data cluster.
-   A common application of the addition `DATA BUFFER` is to store the new data cluster in a field of a DDIC database table with the corresponding data type. In this case, compressing the data cluster using the addition [`COMPRESSION`](ABAPEXPORT_DATA_CLUSTER.html) should be considered, since, by default, compression as a medium is only activated if `DATABASE` is specified directly.
-   Another application is to pass data clusters to an `xstring` typed procedure parameter and evaluate them there. This can be used for example in RFC in order to pass large amounts of complex data to remote systems.
-   The content of a data object filled by `EXPORT TO DATA BUFFER` can only be evaluated using `IMPORT FROM DATA BUFFER`. In other evaluations, for example when comparing data clusters, the result is undefined. For example, the undefined content of [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html) in structures can produce different data clusters with structures that otherwise have the same content.

-   An internal table `itab` filled by `EXPORT TO INTERNAL TABLE` contains exactly one data cluster.
-   The content of an internal table filled by `EXPORT TO INTERNAL TABLE` can only be evaluated using `IMPORT FROM INTERNAL TABLE` for the same reasons as for `EXPORT TO DATA BUFFER`.
-   The variant `EXPORT TO DATA BUFFER` is preferred over the variant `EXPORT TO INTERNAL TABLE` because it is easier to handle. An export to an internal table is beneficial only for very large data clusters and if the available [memory](ABENMEMORY_CONSUMPTION_2.html) is almost used up. This is because its memory is requested block by block, while the memory for a string must always be available in one piece.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(itab). \\n\\ \\nDATA buffer TYPE xstring. \\nEXPORT itab = itab TO DATA BUFFER buffer. \\n\\ \\nMODIFY demo\_expressions FROM @( \\n VALUE #( id = 'B' xstring1 = buffer ) ). \\n\\ \\n... \\n\\ \\nDATA jtab TYPE TABLE OF scarr WITH EMPTY KEY. \\nSELECT SINGLE xstring1 \\n FROM demo\_expressions \\n WHERE id = 'B' \\n INTO @buffer. \\n\\ \\nIF sy-subrc = 0. \\n IMPORT itab = jtab FROM DATA BUFFER buffer. \\nENDIF. \\nIF sy-subrc = 0. \\n out->write( jtab ). \\nENDIF. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF bline, \\n id TYPE i, \\n clstr TYPE x LENGTH 100, \\n END OF bline. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(itab). \\n\\ \\nDATA buffer TYPE TABLE OF bline WITH EMPTY KEY. \\nEXPORT itab = itab TO INTERNAL TABLE buffer. \\n\\ \\n... \\n\\ \\nDATA jtab TYPE TABLE OF scarr WITH EMPTY KEY. \\nIMPORT itab = jtab FROM INTERNAL TABLE buffer. \\nIF sy-subrc = 0. \\n out->write( jtab ). \\nENDIF. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendata\_cluster.html abapexport\_data\_cluster.html