---
title: "ABAPREAD_DATASET"
description: |
  ABAPREAD_DATASET - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREAD_DATASET.htm"
abapFile: "ABAPREAD_DATASET.html"
keywords: ["delete", "loop", "do", "if", "case", "catch", "class", "data", "types", "field-symbol", "ABAPREAD", "DATASET"]
---

[Short Reference](ABAPREAD_DATASET_SHORTREF.html)

`READ DATASET dset INTO dobj [MAXIMUM LENGTH mlen]`\\ 
                            `[[ACTUAL] LENGTH alen].`

[1. `... MAXIMUM LENGTH mlen`](#ABAP_ADDITION_1@3@)

[2. `... [ACTUAL] LENGTH alen`](#ABAP_ADDITION_2@3@)

This statement transfers data from the file specified in `dset` to the data object `dobj`. `dobj` expects variables with elementary data types and [flat structures](ABENFLAT_STRUCTURE_GLOSRY.html). The file must be opened using any access type. If a closed or nonexistent file is accessed, a catchable exception is raised. If the file was opened as a [text file](ABENTEXT_FILE_GLOSRY.html), `dobj` must be character-like.

`dset` expects a character-like data object that contains the [physical name](ABENPHYSICAL_FILENAME_GLOSRY.html) of the file. The content is read from the file starting from the current file pointer. After the data is passed, the file pointer is positioned after the section that was read. Using the `MAXIMUM LENGTH` addition, the number of characters or bytes to be read from the file can be limited. Using `ACTUAL LENGTH`, the number of characters or bytes actually read can be determined.

**Effect of the Access Type**

Files can be read regardless of the [access type](ABAPOPEN_DATASET_ACCESS.html). Whether data can be read or not depends solely on the position of the file pointer. If the latter is at the end of the file or after the file, no data can be read and `sy-subrc` will be set to 4.

**Effect of the Storage Type**

The import depends on the [storage type](ABAPOPEN_DATASET_MODE.html) used to open the file with the statement `OPEN DATASET`.

If the specified storage type requires conversion, this is performed before the assignment to the data object `dobj`. Afterwards, the read data is placed, byte by byte, in the data object.

**Read Text Files**

**Read Binary Files**

Import of the binary file `flights.dat` written in the example by the statement [`TRANSFER`](ABAPTRANSFER.html). The data is written in binary form to a byte-like typed field symbol `<hex_container>`. The assignment of the structured [data area](ABENDATA_AREA_GLOSRY.html)\\ `wa` to the field symbol applies the length of the data area and imports a corresponding number of bytes for the loop process. It would be possible to import directly into the structure `wa` with the same result, but using the field symbol is the recommended procedure because in this way data is passed explicitly from a binary file to a binary data type.

This addition determines the maximum number of characters or bytes read from the file. `mlen` expects a data object of the type `i` that contains the number of characters or bytes. In the case of text files, the content of `mlen` determines how many characters are read from the file. In the case of binary files, legacy text files, and legacy binary files, `mlen` determines how many bytes are read from the file.

The first `mlen` characters or bytes are read from the current position of the file pointer and the file pointer is positioned after the read data. If the file is opened as a (legacy) text file and there is an end-of-line marker within the specified length, data is read only up to this position and the file pointer is positioned after the [end-of-line marker](ABAPOPEN_DATASET_LINEFEED.html).

If the value of `mlen` is 0, no data is read. If the value of `mlen` is negative, the addition is ignored, and the import takes place in the same way as described for **Effect of the Storage Type**.

In case of text files, the number of bytes read depends on the character format specified using [`ENCODING`](ABAPOPEN_DATASET_ENCODING.html) when opening the file.

This program section has the same functions as the previous example. Here data is imported not into a byte-like field symbol, but into a byte-like data object `hex_container`. The number of bytes to be imported is determined by the typed field symbol `<spfli>`.

This addition assigns the number of characters or bytes to be read from the file to the data object `alen`. The following can be specified for `alen`:

For text files, the system determines how many characters were written to the memory. For binary files, legacy text files, and legacy binary files, the system determines how many bytes were read from the file.

The system field `sy-abcde` contains 26 characters. A conversion to UTF-16 representation creates a byte string with 52 bytes. This number is determined using the addition `LENGTH` and displayed after a file containing the byte chain is read.

`CX_SY_CODEPAGE_CONVERTER_INIT`

`CX_SY_CONVERSION_CODEPAGE`

`CX_SY_FILE_AUTHORITY`

`CX_SY_FILE_IO`

`CX_SY_FILE_OPEN`

`CX_SY_FILE_OPEN_MODE`

`CX_SY_PIPE_REOPEN`

-   If the file was opened as a [text file](ABENTEXT_FILE_GLOSRY.html) or as a [legacy](ABENLEGACY_FILE_GLOSRY.html) text file, the data is read from the current position of the file pointer to the next [end-of-line marker](ABAPOPEN_DATASET_LINEFEED.html) by default, and the file pointer is positioned after the end-of-line marker. If the last character of a text file is not an explicit end-of-line marker, the end of the text file is interpreted as the end of the line. If the data object `dobj` is too short for the number of read characters, the superfluous characters and bytes are cut off. If it is longer, it is padded with blanks on the right. If `dobj` is a string, it only contains the read characters.
-   If the file was opened as a [binary file](ABENBINARY_FILE_GLOSRY.html) or as a [legacy](ABENLEGACY_FILE_GLOSRY.html) binary file, the system reads as much data that can fit into the data object `dobj` by default. The file pointer is positioned after the read data. If the data object `dobj` is longer than the number of read characters, it is padded with hexadecimal 0 on the right. If `dobj` is a string, the system tries to read the data all at once.

-   The data from the text files can only be imported into character-like data objects and data from binary files should be imported only ‎into byte-like data objects. To evaluate imported data as numeric data objects or mixed structures, it is recommended that these are exported into binary containers and then assigned using the [`CASTING`](ABAPASSIGN_CASTING.html) addition of the `ASSIGN` statement in accordance with the typed field symbols. If the file is opened as a legacy text file when data like this is being imported, there is the danger that an end-of-line marker is contained in the binary representation of a number and that the number can therefore not be read.
-   However, a text file without an explicit end-of-line marker still has an implicit end-of-line marker at the end of the file.
-   In an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html), the data objects stored in the file of the [basic type](ABENBASE_TYPE_GLOSRY.html) of the enumerated object, whose value is a valid [enumerated value](ABENENUMERATED_VALUE_GLOSRY.html) of its [enumerated type](ABENENUM_TYPE_GLOSRY.html), can be imported. This includes any stored enumerated objects and regular elementary data objects of the basic type. Invalid values raise an exception from the class `CX_SY_FILE_IO`.

-   An existing variable of the data type `i` or a variable to which the type `i` can be converted.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of type `i` is declared.

-   Regardless of the length of the target field, the number of characters or bytes actually read from the file is always returned.
-   The optional addition `ACTUAL` was introduced to distinguish the addition `LENGTH` more effectively from the addition `MAXIMUM LENGTH`. For this reason, the addition `ACTUAL` should always be used.

-   *Cause:* The required conversion is not supported. (For example, because a language not supported by the conversion was specified using `SET LOCALE LANGUAGE`.)
    *Runtime error:*\\ `CONVT_CODEPAGE_INIT`

-   *Cause:* Conversion is not possible. The data is read as far as possible. Text data where the conversion has failed is undefined (see also note below).
    *Runtime error:*\\ `CONVT_CODEPAGE`

-   *Cause:* No authorization for access to file
    *Runtime error:*\\ `OPEN_DATASET_NO_AUTHORITY`

-   *Cause:* An error occurred when the file was read.
    *Runtime error:*\\ `DATASET_READ_ERROR`

-   *Cause:* File cannot be opened.
    *Runtime error:*\\ `DATASET_CANT_OPEN`

-   *Cause:* The file is not open.
    *Runtime error:*\\ `DATASET_NOT_OPEN`

-   *Cause:* The file was opened using the addition `FILTER` and since then a switch of the work process took place.
    *Runtime error:*\\ `DATASET_PIPE_CLOSED`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: wa TYPE spfli, \\n itab LIKE TABLE OF wa WITH EMPTY KEY. \\n\\ \\nFIELD-SYMBOLS TYPE x. \\n\\ \\nFINAL(file) = \`flights.dat\`. \\nOPEN DATASET file FOR INPUT IN BINARY MODE MESSAGE FINAL(msg). \\n\\ \\nASSIGN wa TO CASTING. \\n\\ \\nDO. \\n READ DATASET file INTO . \\n IF sy-subrc = 0. \\n APPEND wa TO itab. \\n ELSE. \\n EXIT. \\n ENDIF. \\nENDDO. \\n\\ \\nCLOSE DATASET file. \\n\\ \\nout->write\_data( itab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: hex\_container TYPE x LENGTH 1000, \\n len TYPE i, \\n itab TYPE TABLE OF spfli WITH EMPTY KEY. \\n\\ \\nFIELD-SYMBOLS TYPE spfli. \\n\\ \\nDESCRIBE FIELD LENGTH len IN BYTE MODE. \\n\\ \\nFINAL(file) = \`flights.dat\`. \\nOPEN DATASET file FOR INPUT IN BINARY MODE MESSAGE FINAL(msg). \\n\\ \\nASSIGN hex\_container TO CASTING. \\n\\ \\nDO. \\n READ DATASET file INTO hex\_container MAXIMUM LENGTH len. \\n IF sy-subrc = 0. \\n APPEND TO itab. \\n ELSE. \\n EXIT. \\n ENDIF. \\nENDDO. \\n\\ \\nCLOSE DATASET file. \\n\\ \\nout->write\_data( itab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE msg. \\n\\ \\nDATA(xstr) = \\ncl\_abap\_conv\_codepage=>create\_out( codepage = \`UTF-16\` \\n )->convert( conv #( sy-abcde ) ). \\n\\ \\nFINAL(dset) = 'test.dat'. \\nOPEN DATASET dset FOR OUTPUT IN BINARY MODE MESSAGE msg. \\nTRANSFER xstr TO dset. \\nCLOSE DATASET dset. \\n\\ \\nOPEN DATASET dset FOR INPUT in BINARY MODE MESSAGE msg. \\nREAD DATASET dset INTO xstr ACTUAL LENGTH FINAL(bytes). \\nCLOSE DATASET dset. \\n\\ \\nout->write( bytes ). \\n\\ \\nDELETE DATASET dset. \\n\\ \\nout->display( ). `**sy-subrc**` **Meaning** `**sy-subrc**` **Meaning** 0 Data was read up to an explicit end-of-line marker or up to an implicit end-of-line marker at the end of the file. 4 An attempt was made to read data after the end of the file. 0 Data was read either without reaching the end of the of file or the end of the file was reached exactly. 4 Data was read up to the end of the file and the target field was longer than necessary, or an attempt was made to read data after the end of the file. abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html