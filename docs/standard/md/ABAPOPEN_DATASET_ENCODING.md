---
title: "ABAPOPEN_DATASET_ENCODING"
description: |
  ABAPOPEN_DATASET_ENCODING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPOPEN_DATASET_ENCODING.htm"
abapFile: "ABAPOPEN_DATASET_ENCODING.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "catch", "method", "class", "data", "ABAPOPEN", "DATASET", "ENCODING"]
---

[Short Reference](ABAPOPEN_DATASET_SHORTREF.html)

`... ENCODING \{ DEFAULT               |\ \{UTF-8 [SKIPPING|WITH BYTE-ORDER MARK]\}\               | NON-UNICODE \} ...`

[1. `... DEFAULT`](#ABAP_ALTERNATIVE_1@2@)

[2. `... UTF-8 [SKIPPING|WITH BYTE-ORDER MARK]`](#ABAP_ALTERNATIVE_2@2@)

[3. `... NON-UNICODE`](#ABAP_ALTERNATIVE_3@2@)

The additions after the mandatory addition `ENCODING` define the character representation in which the content of a text file is handled.

[Write text files in UTF-8 and with a byte order mark.](ABENCODEPAGE_FILE_GUIDL.html)

It is best to always write files in UTF-8 if all readers can process this format. Otherwise, the code page can depend on the [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html) and it is difficult to identify the code page from the file content.

If specified, `DEFAULT` is the same as specifying `UTF-8`.

[`... SKIPPING|WITH BYTE-ORDER MARK`](#ABAP_ONE_ADD@1@)

The characters in the file are handled in accordance with the Unicode character representation [UTF-8](ABENUTF8_GLOSRY.html).

Opens a text file as a UTF-8 file and writes a string containing German umlaut characters to the file. The file is read to a byte string and this byte string is converted from UTF-8 to a character string. This is done using an object created by the class `CL_ABAP_CONV_CODEPAGE` and the method `CONVERT` of the interface `IF_ABAP_CONV_IN`.

This addition defines how the byte order mark (BOM), with which a file encoded in the UTF-8 format can begin, is handled. The BOM is a sequence of three bytes that indicates that a file is encoded in [UTF-8](ABENUTF8_GLOSRY.html).

The addition `BYTE-ORDER MARK` cannot be used together with the [`AT POSITION`](ABAPOPEN_DATASET_POSITION.html) addition.

The binary content of the text file opened using `WITH BYTE-ORDER MARK` is `EFBBBF616263`. `EFBBBF` is specified as a BOM at the start of the file. This is followed by the UTF-8 representation `616263` of the actual characters `abc`.

The characters of the file are handled in accordance with the non-Unicode code page that would be assigned when reading or writing data in a non-Unicode system, as specified by the entry in the database table `TCP0C` in the current [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html).

Writing of German umlaut characters to a non-Unicode code page. This code page is then extracted from the database table `TCP0C` and used to open the file as a a legacy text file.

-   The class `CL_ABAP_FILE_UTILITIES` contains the method `CHECK_UTF8` for determining whether a file is a UTF-8 file.
-   A UTF-16 file can only be opened as a binary file.

-   `SKIPPING BYTE-ORDER MARK`
-   is only allowed if the file is opened for reads or writes using [`FOR INPUT`](ABAPOPEN_DATASET_ACCESS.html) or [`FOR UPDATE`](ABAPOPEN_DATASET_ACCESS.html). If there is a BOM at the start of the file, this is ignored, and the file pointer is set after it. Without the addition, the BOM is handled as regular file content.
-   `WITH BYTE-ORDER MARK`
-   is only allowed if the file is opened for writing using [`FOR OUTPUT`](ABAPOPEN_DATASET_ACCESS.html). When the file is opened, a BOM is inserted at the start of the file. Without the addition, no BOM is inserted.

-   When opening UTF-8 files for reading, it is best to always specify the addition `SKIPPING BYTE-ORDER MARK` to prevent a BOM from being handled as file content.
-   It is recommended that a file for reading is always opened as a UTF-8 file using the addition `WITH BYTE-ORDER MARK` (if all readers can process this format).
-   The method `CREATE_UTF8_FILE_WITH_BOM` in the system class `CL_ABAP_FILE_UTILITIES` can be used to create a file with BOM.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE string. \\n\\ \\nFINAL(dset) = 'test.dat'. \\n\\ \\nOPEN DATASET dset FOR OUTPUT \\n IN TEXT MODE ENCODING UTF-8 \\n MESSAGE msg. \\nTRANSFER 'ÄäÖöÜü' TO dset. \\nCLOSE DATASET dset. \\n\\ \\nDATA xstr TYPE xstring. \\nOPEN DATASET dset FOR INPUT \\n IN BINARY MODE \\n MESSAGE msg. \\nREAD DATASET dset INTO xstr. \\nCLOSE DATASET dset. \\n\\ \\nout->write( \\n cl\_abap\_conv\_codepage=>create\_in( )->convert( xstr ) ). \\n\\ \\nDELETE DATASET dset. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE string. \\n\\ \\nFINAL(dset) = 'test.dat'. \\n\\ \\nOPEN DATASET dset FOR OUTPUT IN TEXT MODE \\n ENCODING UTF-8 WITH BYTE-ORDER MARK \\n MESSAGE msg. \\nTRANSFER 'aaa' TO dset NO END OF LINE. \\nCLOSE DATASET dset. \\n\\ \\nDATA xstr TYPE xstring. \\nOPEN DATASET dset FOR INPUT IN BINARY MODE MESSAGE msg. \\nREAD DATASET dset INTO xstr. \\nCLOSE DATASET dset. \\n\\ \\nout->write( xstr ). \\n\\ \\nDELETE DATASET dset. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE string. \\n\\ \\nFINAL(dset) = 'test.dat'. \\n\\ \\nOPEN DATASET dset FOR OUTPUT IN TEXT MODE \\n ENCODING NON-UNICODE \\n MESSAGE msg. \\nTRY. \\n TRANSFER 'ÄäÖöÜü' TO dset. \\n CATCH cx\_sy\_conversion\_codepage INTO FINAL(exc). \\n out->write( 'Error writing to non-unicode codepage' ). \\n RETURN. \\nENDTRY. \\nCLOSE DATASET dset. \\n\\ \\nSELECT SINGLE charco \\n FROM tcp0c \\n WHERE platform = @sy-opsys AND \\n langu = @sy-langu AND \\n country = ' ' \\n INTO @FINAL(cp). \\n\\ \\nDATA text TYPE string. \\nOPEN DATASET dset FOR INPUT IN LEGACY TEXT MODE \\n CODE PAGE cp \\n MESSAGE msg. \\nREAD DATASET dset INTO text. \\nCLOSE DATASET dset. \\n\\ \\nout->write( text ). \\n\\ \\nDELETE DATASET dset. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html abapopen\_dataset.html abapopen\_dataset\_mode.html