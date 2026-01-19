---
title: "ABAPDELETE_DATASET"
description: |
  ABAPDELETE_DATASET - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDELETE_DATASET.htm"
abapFile: "ABAPDELETE_DATASET.html"
keywords: ["delete", "if", "data", "ABAPDELETE", "DATASET"]
---

[Short Reference](ABAPDELETE_DATASET_SHORTREF.html)

`DELETE DATASET dset.`

The statement deletes the file specified in `dset`. `dset` expects a character-like data object that contains the [physical name](ABENPHYSICAL_FILENAME_GLOSRY.html) of the file. The file can be opened or closed.

When a file is deleted, automatic authorization checks are performed, but self-programmed checks may also be necessary.

Access to a file whose name `dset` is passed to a program from outside is a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used. See [Directory Traversal](ABENDYN_FILE_SCRTY.html).

`CX_SY_FILE_AUTHORITY`

`CX_SY_FILE_OPEN`

Opening of a file for writing and reading and then deleting the file.

-   *Cause:* No authorization for access to file
    *Runtime error:*\\ `OPEN_DATASET_NO_AUTHORITY` (can be handled)

-   *Cause:* File cannot be opened
    *Runtime error:*\\ `DATASET_CANT_OPEN` (can be handled)

DATA msg TYPE string. \\n\\ \\nFINAL(dset) = 'test.dat'. \\n\\ \\nOPEN DATASET dset FOR OUTPUT IN BINARY MODE MESSAGE msg. \\n ... \\nCLOSE DATASET dset. \\n\\ \\n... \\n\\ \\nOPEN DATASET dset FOR INPUT IN BINARY MODE MESSAGE msg. \\n ... \\nCLOSE DATASET dset. \\n\\ \\nDELETE DATASET dset. `**sy-subrc**` **Meaning** 0 File has been deleted. 4 File could not be deleted. abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html