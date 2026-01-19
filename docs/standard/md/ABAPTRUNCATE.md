---
title: "ABAPTRUNCATE"
description: |
  ABAPTRUNCATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTRUNCATE.htm"
abapFile: "ABAPTRUNCATE.html"
keywords: ["delete", "do", "while", "if", "try", "catch", "data", "ABAPTRUNCATE"]
---

[Short Reference](ABAPTRUNCATE_DATASET_SHORTREF.html)

`TRUNCATE DATASET dset AT \{CURRENT POSITION\}|\{POSITION pos\}.`

[1. `... CURRENT POSITION`](#ABAP_ADDITION_1@3@)

[2. `... POSITION pos`](#ABAP_ADDITION_2@3@)

This statement sets the end of file of the file specified in `dset` to the value specified after `AT` and can thus change the size of the file. When truncated, the file is truncated after the new end of file; when extended, the file from the previous to the new end of file is filled with hexadecimal 0.

`dset` expects a character-like data object that contains the [physical name](ABENPHYSICAL_FILENAME_GLOSRY.html) of the file. The file must be opened for writing, appending, or changing, and not contain the addition [`FILTER`](ABAPOPEN_DATASET_OS_ADDITION.html) of the statement [`OPEN DATASET`](ABAPOPEN_DATASET.html). Otherwise an uncatchable exception is raised.

The statement `TRUNCATE` always sets `sy-subrc` to the value 0. This is independent of whether an exception is raised or not.

The statement `TRUNCATE` does not change the position of the current file pointer. If the file is open for appending, the file pointer is only set prior to the next write access to the end of file.

The addition `CURRENT POSITION` sets the end of file to the current [file pointer](ABENFILE_POINTER_GLOSRY.html).

Truncates a file to the current position of the file pointer after reading five lines from a total of ten lines. When all lines are next read, only the first five lines are found.

The addition `POSITION pos` sets the end of file to the position specified in `pos`. `pos` expects a numeric data object whose content cannot be negative. The positioning is specified in bytes, where the start of file is synonymous with the position 0.

After the first `TRUNCATE` statement, the file contains the value *FF*, and after the second, the value *FF00*.

`CX_SY_FILE_OPEN`

`CX_SY_FILE_AUTHORITY`

`CX_SY_FILE_POSITION`

`CX_SY_FILE_TRUNCATE`

-   *Cause:* The file is not open.
    *Runtime error:*\\ `DATASET_NOT_OPEN`
-   *Cause:* The file is only open for reading.
    *Runtime error:*\\ `DATASET_READ_ONLY`

-   *Cause:* No authorization for access to file
    *Runtime error:*\\ `OPEN_DATASET_NO_AUTHORITY`

-   *Cause:* Invalid position specified.
    *Runtime error:*\\ `DATASET_OFFSET_TOO_LARGE`

-   *Cause:* The operating system could not change the size of the file.
    *Runtime error:*\\ `DATASET_TRUNCATE_ERROR`
-   *Cause:* An attempt was made to change the size of a file opened using the addition `FILTER`.
    *Runtime error:*\\ `DATASET_TRUNCATE_ERROR`

-   *Cause:* Internal error when emptying the file buffer, determining the current file position, or restoring the file when rolling in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html).
    *Runtime error:*\\ `DATASET_TRUNCATE_ERROR`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE msg. \\n\\ \\nFINAL(dset) = 'test.dat'. \\nOPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT \\n MESSAGE msg. \\nDO 10 TIMES. \\n DATA(text) = |Entry \\{ sy-index \\} |. \\n TRANSFER text TO dset. \\nENDDO. \\n\\ \\n... \\n\\ \\nSET DATASET dset POSITION 0. \\nDO 5 TIMES. \\n READ DATASET dset INTO text. \\nENDDO. \\nTRUNCATE DATASET dset AT CURRENT POSITION. \\nCLOSE DATASET dset. \\n\\ \\n... \\n\\ \\nOPEN DATASET dset FOR INPUT IN TEXT MODE ENCODING DEFAULT \\n MESSAGE msg. \\nDATA(output) = \`\`. \\nWHILE sy-subrc = 0. \\n READ DATASET dset INTO text. \\n output &&= text. \\nENDWHILE. \\nCLOSE DATASET dset. \\nout->write( output ). \\n\\ \\nDELETE DATASET dset. \\n\\ \\nout->display( ). DATA: name TYPE string VALUE \`test.dat\`, \\n hex TYPE xstring. \\n\\ \\nhex = 'FFFF'. \\n\\ \\nOPEN DATASET name FOR OUTPUT IN BINARY MODE MESSAGE FINAL(msg). \\n\\ \\nTRANSFER hex TO name. \\nSET DATASET name POSITION 0. \\nREAD DATASET name INTO hex. \\n\\ \\nTRUNCATE DATASET name AT POSITION 1. \\nSET DATASET name POSITION 0. \\nREAD DATASET name INTO hex. \\n\\ \\nTRUNCATE DATASET name AT POSITION 2. \\nSET DATASET name POSITION 0. \\nREAD DATASET name INTO hex. \\n\\ \\nCLOSE DATASET name. abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html