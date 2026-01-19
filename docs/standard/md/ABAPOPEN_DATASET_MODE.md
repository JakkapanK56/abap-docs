---
title: "ABAPOPEN_DATASET_MODE"
description: |
  ABAPOPEN_DATASET_MODE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPOPEN_DATASET_MODE.htm"
abapFile: "ABAPOPEN_DATASET_MODE.html"
keywords: ["delete", "do", "if", "case", "data", "ABAPOPEN", "DATASET", "MODE"]
---

[Short Reference](ABAPOPEN_DATASET_SHORTREF.html)

`... \{BINARY MODE\}`\\ 
  ``|\ \{TEXT MODE [`encoding`](ABAPOPEN_DATASET_ENCODING.html)\ [[`linefeed`](ABAPOPEN_DATASET_LINEFEED.html)]\}``\\ 
  ``|\ \{LEGACY BINARY MODE [[`endian`](ABAPOPEN_DATASET_ENDIAN.html)][[`CODE PAGE cp`](ABAPOPEN_DATASET_CODE_PAGE.html)]\}``\\ 
  ``|\ \{LEGACY TEXT MODE [[`endian`](ABAPOPEN_DATASET_ENDIAN.html)]\ [[`CODE PAGE cp`](ABAPOPEN_DATASET_CODE_PAGE.html)]\ [[`linefeed`](ABAPOPEN_DATASET_LINEFEED.html)]\} ...``

[1. `... BINARY MODE`](#ABAP_ALTERNATIVE_1@2@)

[2. `... TEXT MODE`](#ABAP_ALTERNATIVE_2@2@)

[3. `... LEGACY BINARY MODE`](#ABAP_ALTERNATIVE_3@2@)

[4. `... LEGACY TEXT MODE`](#ABAP_ALTERNATIVE_4@2@)

These mandatory additions define whether the file is handled as a binary file or as a text file. By specifying `LEGACY`, files can be written in the format that is expected by a non-[Unicode system](ABENUNICODE_SYSTEM_GLOSRY.html), and files that have been created by a non-Unicode-system can be read. The [byte order](ABENBYTE_ORDER_GLOSRY.html) or the [code page](ABENCODEPAGE_GLOSRY.html) must be specified explicitly.

The addition `IN BINARY MODE` opens the file as a binary file. When writing to a binary file, the binary content of a data object is passed in unchanged form to the file. When reading from a binary file, the binary content of the file is passed in unchanged form to a data object.

Opens a binary file for reads and writes. The binary data is created by converting a string to [UTF-8](ABENUTF8_GLOSRY.html).

The addition `IN TEXT MODE` opens the file as a text file. Only the content of character-like data objects can be passed to text files and read from text files.

The addition [`encoding`](ABAPOPEN_DATASET_ENCODING.html) defines how the characters are represented in the text file. When writing to a text file, the content of a data object is converted to the representation entered after `encoding` and passed to the file. If the data type is character-like and [flat](ABENFLAT_GLOSRY.html), any trailing blanks are cut off. In the data type `string`, trailing blanks are not cut off.

The end-of-line marker of the relevant platform is applied to the passed data by default. When reading from a text file, the content of the file is read until the next end-of-line marker, converted from the format specified after `ENCODING` into the current character format, and passed to a data object. The end-of-line marker used is controlled using the addition [`linefeed`](ABAPOPEN_DATASET_LINEFEED.html).

Opens a text file for reads and writes. An end-of-line marker is appended in every write in every `TRANSFER` statement. Any reads are performed line by line. Compare the example for the addition `NO END OF LINE` of the statement [`TRANSFER`](ABAPTRANSFER.html).

Opening a [legacy file](ABENLEGACY_FILE_GLOSRY.html). The addition `IN LEGACY BINARY MODE` opens the file as a legacy binary file, where [`endian`](ABAPOPEN_DATASET_ENDIAN.html) can be used to specify the [byte order](ABENBYTE_ORDER_GLOSRY.html) and [`CODE PAGE`](ABAPOPEN_DATASET_CODE_PAGE.html) can be used to specify the [code page](ABENCODEPAGE_GLOSRY.html) that handle the content of the file.

When a flat character-like field is written to the legacy binary files, the number of bytes written to the file is the same as the number of characters in the source field. The field content can be affected by this when writing texts in Eastern Asian languages. It is therefore best to only write texts opened without the addition `LEGACY` to text files.

See the example for the addition [`endian`](ABAPOPEN_DATASET_ENDIAN.html).

Opening a [legacy file](ABENLEGACY_FILE_GLOSRY.html). The addition `IN LEGACY TEXT MODE` opens the file as a legacy text file, where, in legacy binary files, [`endian`](ABAPOPEN_DATASET_ENDIAN.html) can be used to specify the byte order and [`CODE PAGE`](ABAPOPEN_DATASET_CODE_PAGE.html) can be used to specify the code page that handle the content of the file. The syntax and semantics of `\{BIG|LITTLE\} ENDIAN` and `CODE PAGE cp` are the same as in legacy binary files. The syntax and meaning of [`linefeed`](ABAPOPEN_DATASET_LINEFEED.html) are the same as for regular text files.

Unlike legacy binary files, the trailing blanks are cut off when writing character-like [flat](ABENFLAT_GLOSRY.html) data objects to a legacy text file. Also, as in the case of a text file, an [end-of-line marker](ABAPOPEN_DATASET_LINEFEED.html) is appended to the passed data by default. Unlike the text files opened by the addition `IN TEXT MODE`, there is no check on whether the data objects used in writing or reading are character-like. Also, the `LENGTH` additions of the statements `READ DATASET` and `TRANSFER` are used for counting in bytes for legacy text files, and in the units of a character represented in the memory for text files.

See the example for the addition [`CODE PAGE`](ABAPOPEN_DATASET_CODE_PAGE.html).

-   As is the case with legacy binary files, it is possible to access text files written in non-Unicode systems as legacy text files. In this case, the content is converted accordingly.
-   When writing to a flat character-like field in legacy text files, the maximum number of bytes that can be written to the file is the maximum number of characters in the source field. The field content can be affected by this when writing texts in Eastern Asian languages. It is therefore best to only write texts opened without the addition `LEGACY` to text files.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE string. \\n\\ \\nDATA(utf8) = \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( 'Blahblahblah ...' ). \\n\\ \\nFINAL(dset) = 'test.dat'. \\nOPEN DATASET dset FOR OUTPUT IN BINARY MODE MESSAGE msg. \\nTRANSFER utf8 TO dset. \\nCLOSE DATASET dset. \\n\\ \\n... \\n\\ \\nCLEAR utf8. \\nOPEN DATASET dset FOR INPUT IN BINARY MODE MESSAGE msg. \\nREAD DATASET dset INTO utf8. \\nCLOSE DATASET dset. \\n\\ \\nout->write( \\n cl\_abap\_conv\_codepage=>create\_in( )->convert( utf8 ) ). \\n\\ \\nDELETE DATASET dset. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE string. \\n\\ \\nFINAL(dset) = 'test.dat'. \\nOPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT \\n MESSAGE msg. \\nDO 5 TIMES. \\n TRANSFER 'Blah' TO dset. \\nENDDO. \\nCLOSE DATASET dset. \\n\\ \\n... \\n\\ \\nDATA text TYPE string. \\nOPEN DATASET dset FOR INPUT IN TEXT MODE ENCODING UTF-8 \\n SKIPPING BYTE-ORDER MARK \\n MESSAGE msg. \\nDO. \\n READ DATASET dset INTO text. \\n IF sy-subrc <> 0. \\n EXIT. \\n ENDIF. \\n out->write( text ). \\nENDDO. \\nCLOSE DATASET dset. \\n\\ \\nDELETE DATASET dset. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html abapopen\_dataset.html