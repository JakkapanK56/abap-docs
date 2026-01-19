---
title: "ABENNEWS-610-DATASET"
description: |
  ABENNEWS-610-DATASET - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-610-DATASET.htm"
abapFile: "ABENNEWS-610-DATASET.html"
keywords: ["if", "class", "data", "ABENNEWS", "610", "DATASET"]
---

The file interface in ABAP release 6.10 has been completely overhauled. The changes and developments affect the following topics:

[1\. Adapting to Unicode](#ABAP_MODIFICATION_1@4@)

[2\. Reading and Changing File Properties at Runtime](#ABAP_MODIFICATION_2@4@)

[3\. New Classes for Converting Files](#ABAP_MODIFICATION_3@4@)

[4\. Support for Files Greater than 2 Gigabytes](#ABAP_MODIFICATION_4@4@)

[5\. Limiting Data Range when Reading Files](#ABAP_MODIFICATION_5@4@)

Extensive changes to the file interface have been made as a result of the switch to [Unicode](ABENUNICODE_GLOSRY.html).

The statement [`GET DATASET ...`](ABAPGET_DATASET.html) returns both the current reading or write positions and the file properties. In turn, a required file position can be set at runtime using the statement [`SET DATASET ...`](ABAPSET_DATASET.html). It is also possible to change the properties of the file, but the system only applies values compatible with the opening mode.

Three classes have been implemented for file conversion:

Files greater than 2 gigabytes can now be read and written on all platforms that support large files. Only the platforms `OS/390` and `IBM System i` (previously `AS/400`) are currently not included in this change. Additionally, the statement [`OPEN DATASET`](ABAPOPEN_DATASET.html) has been enhanced in such a way that, when opening a file, the file pointer also addresses positions greater than 2 gigabytes.

The amount of data to be read can be limited using the addition [`MAXIMUM LENGTH maxlen`](ABAPREAD_DATASET.html). Depending on the mode in which the file was opened, `maxlen` defines the maximum number of characters or bytes that are to be read from the file.

1.  `CL_ABAP_CONV_IN_CE`: Instances of this class enable the conversion of external binary data to valid ABAP data objects
2.  `CL_ABAP_CONV_OUT_CE`: Instances of this class convert ABAP data objects to binary data.
3.  `CL_ABAP_CONV_X2X_CE`: Instances of this class enable the text data of various character sets and the numeric data of various number formats to be transformed.

abenabap.html abennews.html abennews-6.html abennews-610.html