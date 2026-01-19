---
title: "ABAPOPEN_DATASET_ENDIAN"
description: |
  ABAPOPEN_DATASET_ENDIAN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPOPEN_DATASET_ENDIAN.htm"
abapFile: "ABAPOPEN_DATASET_ENDIAN.html"
keywords: ["delete", "if", "case", "data", "types", "ABAPOPEN", "DATASET", "ENDIAN"]
---

[Short Reference](ABAPOPEN_DATASET_SHORTREF.html)

`... \{BIG|LITTLE\} ENDIAN ...`

This addition specifies that, when a [legacy file](ABENLEGACY_FILE_GLOSRY.html) is opened, numeric data objects of the type `i`, `int8`, `decfloat16`, `decfloat34`, `f`, or `s` are stored in the file in the [byte order](ABENBYTE_ORDER_GLOSRY.html) Big Endian or Little Endian. When a data object of these types is written or read, a conversion between these orders and the byte order of the current platform is performed, if necessary. If the addition is not specified, the byte order of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html) is used.

Opens a legacy binary file with different byte orders for writing. In each case, the integer 111 is written to the file and the content is read in binary format to a byte string. The results are `0000006F` and `6F000000`, that is, 111 in binary format in Big Endian and Little Endian.

-   The statement [`SET DATASET`](ABAPSET_DATASET.html) can be used to specify a different byte order for an opened legacy file.
-   The addition `\{BIG|LITTLE\} ENDIAN` replaces the use of the obsolete statement [`TRANSLATE NUMBER FORMAT`](ABAPTRANSLATE.html) in the case of file accesses.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE string. \\n\\ \\nFINAL(dset) = 'test.dat'. \\nDATA xstr TYPE xstring. \\n\\ \\nOPEN DATASET dset FOR OUTPUT \\n IN LEGACY BINARY MODE BIG ENDIAN \\n MESSAGE msg. \\nTRANSFER 111 TO dset. \\nCLOSE DATASET dset. \\nOPEN DATASET dset FOR INPUT \\n IN BINARY MODE \\n MESSAGE msg. \\nREAD DATASET dset INTO xstr. \\nCLOSE DATASET dset. \\nout->write( xstr ). \\n\\ \\nOPEN DATASET dset FOR OUTPUT \\n IN LEGACY BINARY MODE LITTLE ENDIAN \\n MESSAGE msg. \\nTRANSFER 111 TO dset. \\nCLOSE DATASET dset. \\nOPEN DATASET dset FOR INPUT \\n IN BINARY MODE \\n MESSAGE msg. \\nREAD DATASET dset INTO xstr. \\nCLOSE DATASET dset. \\nout->write( xstr ). \\n\\ \\nDELETE DATASET dset. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html abapopen\_dataset.html abapopen\_dataset\_mode.html