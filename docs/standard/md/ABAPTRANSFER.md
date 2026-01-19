---
title: "ABAPTRANSFER"
description: |
  ABAPTRANSFER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTRANSFER.htm"
abapFile: "ABAPTRANSFER.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "catch", "data", "types", "field-symbol", "ABAPTRANSFER"]
---

[Short Reference](ABAPTRANSFER_SHORTREF.html)

`TRANSFER dobj TO dset [LENGTH len]\                        [NO END OF LINE].`

[1. `... LENGTH len`](#ABAP_ADDITION_1@3@)

[2. `... NO END OF LINE`](#ABAP_ADDITION_2@3@)

This statement passes the content of data object `dobj` to the file specified in `dset`. For `dobj`, data objects with elementary data types and [flat structures](ABENFLAT_STRUCTURE_GLOSRY.html) can be specified. The file must be open for writing, appending, or changing. If a closed or invalid file is accessed, a catchable exception is raised. If the file was opened as a [text file](ABENTEXT_FILE_GLOSRY.html), `dobj` must be character-like. This restriction does not apply to [legacy text files](ABENLEGACY_FILE_GLOSRY.html).

`dset` expects a character-like data object containing the [physical name](ABENPHYSICAL_FILENAME_GLOSRY.html) of the file. The content is written to the file from the current file pointer. After the data has been passed, the file pointer is positioned after the inserted data. The addition `LENGTH` can be used to restrict the number of characters or bytes passed.

**Effect of the Access Type**

The [access type](ABAPOPEN_DATASET_ACCESS.html) defined in the statement `OPEN DATASET` has the following effect on the data passed from:

**Effect of the Storage Type**

The data is passed regardless of the [storage type](ABAPOPEN_DATASET_MODE.html) used to open the file with the statement `OPEN DATASET`. If the specified storage type requires conversion, it is carried out before writing.

The statement `TRANSFER` always sets `sy-subrc` to the value 0. This is independent of whether an exception is raised or not.

The binary data from the database table `SPFLI` is passed to a binary file `flights.dat`. The structure of the table rows passed contains both character-like and numeric fields. Since the type-compliant storage of mixed structures in files is not possible, the binary content of the structure is directly accessed using a typed field symbol `<hex_container>`. To achieve the same result, the structure `wa` could be passed directly. The recommended procedure however is to use the field symbol, because it explicitly passes a binary data type to a binary file. This type of storage is only recommended for short-term storage within the same system, because the byte-like content depends on the byte order and the current system code page. For long-term storage or for exchanging between systems, the data should be converted to character-like containers and stored as a text file.

This addition determines how many characters or bytes of the data object `dobj` are written to the file. `len` expects a data object of the type `i`. It contains the number of characters or bytes. In text files, the content of `len` specifies the number of characters that are written from the memory. For binary files, legacy text files, and legacy binary files, `len` specifies the number of bytes that are written to the file. The first `len` characters or bytes are passed and [alignment gaps](ABENALIGNMENT_GAP_GLOSRY.html) are included in the structures. If the addition `LENGTH` is not specified, all characters or bytes are passed.

If the value of `len` is less than or equal to 0, no characters or bytes are passed. If the file is opened as a (legacy) text file, however, an [end-of-line marker](ABAPOPEN_DATASET_LINEFEED.html) is inserted into the file by default. If the value of `len` is greater than the number of characters or bytes in `dobj`, blank characters or hexadecimal 0 are passed to the file instead of the missing characters or bytes, depending on whether the file was opened as a (legacy) text file or a (legacy) binary file.

The statement `TRANSFER` writes the first four characters of a string to a text file.

This addition has the effect that, in text files or legacy text files, no end-of-line marker is appended to the data passed.

Opens a text file for reads and writes. No end-of-line marker is appended if writes are performed using the `TRANSFER` statements. In the case of reads, the entire content of the file is placed in the text string. Compare the example with the addition [`TEXT MODE`](ABAPOPEN_DATASET_MODE.html) of the statement `OPEN DATASET`.

`CX_SY_CODEPAGE_CONVERTER_INIT`

`CX_SY_CONVERSION_CODEPAGE`

`CX_SY_FILE_AUTHORITY`

`CX_SY_FILE_IO`

`CX_SY_FILE_OPEN`

`CX_SY_FILE_OPEN_MODE`

`CX_SY_PIPE_REOPEN`

`CX_SY_TOO_MANY_FILES`

-   A file opened to be read using [`FOR INPUT`](ABAPOPEN_DATASET_ACCESS.html) cannot be written.
-   In a file opened for writing using [`FOR OUTPUT`](ABAPOPEN_DATASET_ACCESS.html), the system writes to the file from the current file pointer. If the file pointer is positioned after the current start of the file, the file is padded with hexadecimal 0 from the start of the file to the file pointer.
-   In a file opened for appending using [`FOR APPENDING`](ABAPOPEN_DATASET_ACCESS.html), the system writes to the file from the current file pointer, which is always at the end of the file.
-   In a file opened for changing using `FOR UPDATE`, the system writes to the file from the current file pointer. If the file pointer is positioned after the end of the file, the file is padded with hexadecimal 0 between the end of the file and the file pointer position.

-   If the file was opened as a [text file](ABENTEXT_FILE_GLOSRY.html) or a [legacy](ABENLEGACY_FILE_GLOSRY.html) text file, the trailing blank characters are deleted for all data objects, except for those of data type `string`. The [end-of-line marker](ABAPOPEN_DATASET_LINEFEED.html) defined when the file was opened is then added to the remaining content of the data object or to the result of the conversion, and the final result is written byte-by-byte to the file. The appending of the end-of-line marker can be prevented using `NO END OF LINE`.
-   If the file was opened as a [binary file](ABENBINARY_FILE_GLOSRY.html) or a [legacy binary file](ABENLEGACY_FILE_GLOSRY.html), the content of the data object or the result of the conversion is written byte-by-byte to the file.

-   Only character-like data objects can be written to text files. Only byte-like data objects should be written to binary files. To save numeric data objects or mixed structures, it is best to assign them to character-like or byte-like typed field symbols using the [`CASTING`](ABAPASSIGN_CASTING.html) addition of the statement `ASSIGN` and save these field symbols.
-   If parts of a file are to be overwritten, it must be opened for changes.
-   [Enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html) are written in accordance with their [basic type](ABENBASE_TYPE_GLOSRY.html).

-   *Cause:* The required conversion is not supported. (For example, because a language not supported by the conversion was specified using `SET LOCALE LANGUAGE`.)
    *Runtime error:*\\ `CONVT_CODEPAGE_INIT`

-   *Cause:* Conversion is not possible.
    *Runtime error:*\\ `CONVT_CODEPAGE`

-   *Cause:* No authorization to access the file.
    *Runtime error:*\\ `OPEN_DATASET_NO_AUTHORITY`

-   *Cause:* Error when writing to the file.
    *Runtime error:*\\ `DATASET_WRITE_ERROR`

-   *Cause:* File cannot be opened.
    *Runtime error:*\\ `DATASET_CANT_OPEN`

-   *Cause:* The file is not open.
    *Runtime error:*\\ `DATASET_NOT_OPEN`
-   *Cause:* The file was opened using `OPEN DATASET ... FOR INPUT`. Therefore, it cannot be written.
    *Runtime error:*\\ `DATASET_READ_ONLY`

-   *Cause:* The file was opened using the addition `FILTER` and since then a switch of the work process took place.
    *Runtime error:*\\ `DATASET_PIPE_CLOSED`

-   *Cause:* Maximum number of open files exceeded.
    *Runtime error:*\\ `DATASET_TOO_MANY_FILES`

FINAL(file) = \`flights.dat\`. \\n\\ \\nFIELD-SYMBOLS TYPE x. \\n\\ \\nOPEN DATASET file FOR OUTPUT IN BINARY MODE MESSAGE FINAL(msg). \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO @FINAL(wa). \\n ASSIGN wa TO CASTING. \\n TRANSFER TO file. \\nENDSELECT. \\n\\ \\nCLOSE DATASET file. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE msg. \\n\\ \\nFINAL(dset) = 'test.dat'. \\nOPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT \\n MESSAGE msg. \\nTRANSFER 'Blahblahblah...' TO dset LENGTH 4. \\nCLOSE DATASET dset. \\n\\ \\n... \\n\\ \\nDATA text TYPE string. \\nOPEN DATASET dset FOR INPUT IN TEXT MODE ENCODING DEFAULT \\n MESSAGE msg. \\nREAD DATASET dset INTO text. \\nCLOSE DATASET dset. \\n\\ \\nout->write( text ). \\n\\ \\nDELETE DATASET dset. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE msg. \\n\\ \\nFINAL(dset) = 'test.dat'. \\nOPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT \\n MESSAGE msg. \\nDO 5 TIMES. \\n TRANSFER 'Blah' TO dset NO END OF LINE. \\nENDDO. \\nCLOSE DATASET dset. \\n\\ \\n... \\n\\ \\nDATA text TYPE string. \\nOPEN DATASET dset FOR INPUT IN TEXT MODE ENCODING DEFAULT \\n MESSAGE msg. \\nREAD DATASET dset INTO text. \\nCLOSE DATASET dset. \\n\\ \\nout->write( text ). \\n\\ \\nDELETE DATASET dset. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html