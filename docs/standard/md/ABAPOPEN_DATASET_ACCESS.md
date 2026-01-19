---
title: "ABAPOPEN_DATASET_ACCESS"
description: |
  ABAPOPEN_DATASET_ACCESS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPOPEN_DATASET_ACCESS.htm"
abapFile: "ABAPOPEN_DATASET_ACCESS.html"
keywords: ["update", "delete", "do", "if", "data", "ABAPOPEN", "DATASET", "ACCESS"]
---

[Short Reference](ABAPOPEN_DATASET_SHORTREF.html)

`... INPUT`\\ 
  `| OUTPUT`\\ 
  `| APPENDING`\\ 
  `| UPDATE ...`

[1. `... INPUT`](#ABAP_ALTERNATIVE_1@2@)

[2. `... OUTPUT`](#ABAP_ALTERNATIVE_2@2@)

[3. `... APPENDING`](#ABAP_ALTERNATIVE_3@2@)

[4. `... UPDATE`](#ABAP_ALTERNATIVE_4@2@)

These mandatory additions are used to open the file for reading, writing, appending, or changing.

The addition `FOR INPUT` opens the file for reading. By default, the file pointer is set to the start of the file. If the file specified does not exist, `sy-subrc` is set to 8. Writes cannot be performed on a file opened for reads.

Opens a binary file to read binary data.

The addition `FOR OUTPUT` opens the file for writing. If the specified file already exists, its content is deleted. If the file specified does not exist, it is created. Reads are also allowed.

Opens a binary file to write binary data.

The addition `FOR APPENDING` opens the file for appending. If the file specified already exists, it is opened, and the file pointer is set at the end of the file. If the file specified does not exist, it is created. An attempt to read to a file opened with `FOR APPENDING` with the statement [`READ DATASET`](ABAPREAD_DATASET.html) fails, and returns the value 4 for `sy-subrc`.

Opens a binary file to append binary data.

The addition `FOR UPDATE` opens the file for changes to the existing content. By default, the file pointer is set to the start of the file. If the specified file does not exist, no file is opened and `sy-subrc` is set to 8.

Opens a binary file to update binary data.

FINAL(dset) = 'test.dat'. \\nOPEN DATASET dset FOR INPUT IN BINARY MODE MESSAGE FINAL(msg). FINAL(dset) = 'test.dat'. \\nOPEN DATASET dset FOR OUTPUT IN BINARY MODE MESSAGE FINAL(msg). FINAL(dset) = 'test.dat'. \\nOPEN DATASET dset FOR APPENDING IN BINARY MODE MESSAGE FINAL(msg). FINAL(dset) = 'test.dat'. \\nOPEN DATASET dset FOR UPDATE IN BINARY MODE MESSAGE FINAL(msg). abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html abapopen\_dataset.html