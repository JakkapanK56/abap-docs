---
title: "System Fields"
description: |
  In order to find the reason, why the operating system could not open a file, the addition `MESSAGE`(ABAPOPEN_DATASET_ERROR_HANDLING.html) should always be used for the statement `OPEN DATASET`. In case of an error, a message is also written to the developer trace(ABENDEVELOPER_TRACE_GLOSRY.html)
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPOPEN_DATASET.htm"
abapFile: "ABAPOPEN_DATASET.html"
keywords: ["select", "delete", "do", "if", "case", "catch", "data", "internal-table", "ABAPOPEN", "DATASET"]
---

[Short Reference](ABAPOPEN_DATASET_SHORTREF.html)

``OPEN DATASET dset FOR [`access`](ABAPOPEN_DATASET_ACCESS.html) IN [`mode`](ABAPOPEN_DATASET_MODE.html)\ [[`position`](ABAPOPEN_DATASET_POSITION.html)]``\\ 
                                     ``[[`os_additions`](ABAPOPEN_DATASET_OS_ADDITION.html)]``\\ 
                                     ``[[`error_handling`](ABAPOPEN_DATASET_ERROR_HANDLING.html)].``

This statement opens the file specified in `dset` on the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current AS instance for the access specified in [`access`](ABAPOPEN_DATASET_ACCESS.html) in a storage mode specified in [`mode`](ABAPOPEN_DATASET_MODE.html). `dset` expects a character-like data object containing the [physical name](ABENPHYSICAL_FILENAME_GLOSRY.html) of the file. The file must not yet be open in the current program; otherwise a catchable exception is raised.

The additions [`positions`](ABAPOPEN_DATASET_POSITION.html), [`os_addition`](ABAPOPEN_DATASET_OS_ADDITION.html), and [`error_handling`](ABAPOPEN_DATASET_ERROR_HANDLING.html) can be used to determine the position at which file is opened, specify platform-dependent additions, and can be used for error handling.

Access to a file whose name `dset` is injected into a program from outside is a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used. See [Directory Traversal](ABENDYN_FILE_SCRTY.html).

System Fields

In order to find the reason, why the operating system could not open a file, the addition [`MESSAGE`](ABAPOPEN_DATASET_ERROR_HANDLING.html) should always be used for the statement `OPEN DATASET`. In case of an error, a message is also written to the [developer trace](ABENDEVELOPER_TRACE_GLOSRY.html), but only if the trace level is 2 at least.

The example demonstrates the following:

The XML data is created by transforming an internal table to the [asXML](ABENASXML_GLOSRY.html) format.

`CX_SY_FILE_OPEN`

`CX_SY_CODEPAGE_CONVERTER_INIT`

`CX_SY_CONVERSION_CODEPAGE`

`CX_SY_FILE_AUTHORITY`

`CX_SY_PIPES_NOT_SUPPORTED`

`CX_SY_TOO_MANY_FILES`

-   Up to 100 files can be opened per [internal session](ABENINTERNAL_SESSION_GLOSRY.html). The actual maximum number of simultaneously open files may be less, depending on the platform. If the maximum number of open files is exceeded, a catchable exception is raised.
-   When a file is opened, automatic authorization checks are performed, but self-programmed checks may also be necessary.

-   Opening a file for writes
-   Writing binary XML data to the file
-   Closing the open file
-   Opening the file for reads
-   Reading the binary XML data from the file
-   Closing the open file
-   Deleting the file

-   *Cause:* The file is already open.
    *Runtime error:*\\ `DATASET_REOPEN`

-   *Cause:* The required conversion is not supported. (Due to specification of invalid code page or of language not supported in the conversion, with `SET LOCALE LANGUAGE`.)
    *Runtime error:*\\ `CONVT_CODEPAGE_INIT`

-   *Cause:* Internal error in the conversion.
    *Runtime error:*\\ `CONVT_CODEPAGE`

-   *Cause:* No authorization for access to file
    *Runtime error:*\\ `OPEN_DATASET_NO_AUTHORITY`
-   *Cause:* Authorization for access to this file is missing in `OPEN DATASET` with the addition `FILTER`.
    *Runtime error:*\\ `OPEN_PIPE_NO_AUTHORITY`

-   *Cause:* The operating system does not support pipes.
    *Runtime error:*\\ `DATASET_NO_PIPE`

-   *Cause:* Maximum number of open files exceeded.
    *Runtime error:*\\ `DATASET_TOO_MANY_FILES`

-   *Cause:* An attempt was made to open a pipe that is already open.
    *Runtime error:*\\ `DATASET_PIPE_POSITION`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @DATA(itab). \\nCALL TRANSFORMATION id SOURCE scarr = itab \\n RESULT XML DATA(xml). \\n\\ \\nDATA msg TYPE string. \\nFINAL(dset) = 'scarr.dat'. \\nOPEN DATASET dset FOR OUTPUT IN BINARY MODE MESSAGE msg. \\nTRANSFER xml TO dset. \\nCLOSE DATASET dset. \\n\\ \\n... \\n\\ \\nCLEAR xml. \\nOPEN DATASET dset FOR INPUT IN BINARY MODE MESSAGE msg. \\nREAD DATASET dset INTO xml. \\nCLOSE DATASET dset. \\n\\ \\nCALL TRANSFORMATION id SOURCE XML xml \\n RESULT scarr = itab. \\nout->write( itab ). \\n\\ \\nDELETE DATASET dset. \\n\\ \\nout->display( ). `**sy-subrc**` **Meaning** 0 The file was opened. 8 The operating system could not open the file. abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html