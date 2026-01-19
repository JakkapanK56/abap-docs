---
title: "ABAPCLOSE_DATASET"
description: |
  ABAPCLOSE_DATASET - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLOSE_DATASET.htm"
abapFile: "ABAPCLOSE_DATASET.html"
keywords: ["do", "if", "data", "ABAPCLOSE", "DATASET"]
---

[Short Reference](ABAPCLOSE_DATASET_SHORTREF.html)

`CLOSE DATASET dset.`

This statement closes the file specified in `dset`. `dset` expects a character-like data object that contains the [physical name](ABENPHYSICAL_FILENAME_GLOSRY.html) of the file. If the file is already closed or does not exist, the statement is ignored and the return code `sy-subrc` is set to 0.

If the operating system buffers data before it is written to a file and there is still data in the buffer, this data is written to the file before closing.

An opened file that was not explicitly closed using `CLOSE DATASET` is automatically closed when the program is exited.

`CX_SY_FILE_CLOSE`

Closing of a file open for writing.

-   If a file was opened without the [`FILTER`](ABAPOPEN_DATASET_OS_ADDITION.html) addition always sets `sy-subrc` to the value 0. This is independent of whether an exception is raised or not.
-   If a file was opened using the `FILTER` addition, `sy-subrc` contains the return code of the filter program, which is returned by the operating system. This value is generally 0 if the statement was executed successfully.

-   *Cause:* The file could not be closed. Insufficient memory space is a possible reason for this.
    *Runtime error:*\\ `DATASET_CANT_CLOSE`

FINAL(dset) = 'test.dat'. \\n\\ \\nOPEN DATASET dset FOR OUTPUT IN BINARY MODE MESSAGE FINAL(msg). \\n... \\nCLOSE DATASET dset. abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html