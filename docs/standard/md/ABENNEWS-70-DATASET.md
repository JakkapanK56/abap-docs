---
title: "ABENNEWS-70-DATASET"
description: |
  ABENNEWS-70-DATASET - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-70-DATASET.htm"
abapFile: "ABENNEWS-70-DATASET.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "ABENNEWS", "DATASET"]
---

[1\. Handling of the Byte Order Mark](#ABAP_MODIFICATION_1@4@)

[2\. Definition of the Line End Marker](#ABAP_MODIFICATION_2@4@)

[3\. Help Class for the File Interface](#ABAP_MODIFICATION_3@4@)

[4\. Trailing Blanks in EBCDIC Files](#ABAP_MODIFICATION_4@4@)

When a [UTF-8](ABENUTF8_GLOSRY.html)\\ [text file](ABENTEXT_FILE_GLOSRY.html) is opened, the handling of the byte order mark (BOM) at the start of the file can be controlled using the new addition [`SKIPPING|WITH BYTE-ORDER MARK`](ABAPOPEN_DATASET_ENCODING.html).

When any [text file](ABENTEXT_FILE_GLOSRY.html) is opened, the line end marker can be defined using the new addition [`WITH NATIVE|SMART|UNIX|WINDOWS LINEFEED`](ABAPOPEN_DATASET_LINEFEED.html).

The structure of file properties used in the statements [`GET DATASET`](ABAPGET_DATASET.html) and [`SET DATASET`](ABAPSET_DATASET.html) has been enhanced by the addition of the components `linefeed` and `linefeed_mode` for the line end marker, so that these can be selected and set for an open file.

The static methods of the new class `CL_ABAP_FILE_UTILITIES` provide information about files on the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current AS instance.

For [text files](ABENTEXT_FILE_GLOSRY.html) handled as [legacy](ABENLEGACY_FILE_GLOSRY.html)\\ [EBCDIC](ABENEBCDIC_GLOSRY.html) files using the addition [`LEGACY TEXT MODE`](ABAPOPEN_DATASET_MODE.html), the following criteria have been defined:

-   As is also the case with other code pages, trailing blanks are now cut off when writing a legacy EBCDIC text file using [`TRANSFER`](ABAPTRANSFER.html). Before ABAP release 7.0, the hexadecimal EBCDIC code *40* was written to the file.
-   When writing to a legacy EBCDIC text file using [`TRANSFER`](ABAPTRANSFER.html), it is now padded with the hexadecimal EBCDIC code *40* for blanks if the specified length is greater than that of the data object. Before ABAP release 7.0, it was padded with the ASCII code for blanks.
-   If, when reading a legacy EBCDIC text file using [`READ DATASET`](ABAPREAD_DATASET.html), the target object must be padded with blank characters, it is now padded with the blanks of the current [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html). Before ABAP release 7.0, it was padded with hexadecimal *80*.

abenabap.html abennews.html abennews-70\_ehps.html abennews-70.html