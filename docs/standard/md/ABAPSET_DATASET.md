---
title: "ABAPSET_DATASET"
description: |
  ABAPSET_DATASET - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_DATASET.htm"
abapFile: "ABAPSET_DATASET.html"
keywords: ["do", "if", "case", "catch", "data", "ABAPSET", "DATASET"]
---

[Short Reference](ABAPSET_DATASET_SHORTREF.html)

`SET DATASET dset [POSITION \{pos|\{END OF FILE\}\}]`\\ 
                 `[ATTRIBUTES attr].`

[1. `... POSITION \{pos|\{END OF FILE\}\}`](#ABAP_ADDITION_1@3@)

[2. `... ATTRIBUTES attr`](#ABAP_ADDITION_2@3@)

This statement uses the addition `POSITION` to determine the position of the file pointer in the file specified in `dset`. It uses the addition `ATTRIBUTES` to set additional attributes for the file. At least one of these two additions must be specified.

`dset` expects a character-like data object containing the [physical name](ABENPHYSICAL_FILENAME_GLOSRY.html) of the file. The file must be open, otherwise a catchable exception is raised.

The statement `SET DATASET` always sets `sy-subrc` to the value 0. This is independent of whether an exception is raised or not.

This addition sets the file pointer in the file, either in the position specified in `pos`, or at the end of the file. `pos` expects a numeric data object.

The position is specified in bytes, where the start of the file corresponds to position 0. If the value of `pos` is -1, the file pointer is set at the end of the file. Other negative values are not allowed.

The following cases must be distinguished:

The addition `POSITION` cannot be specified for files that have been opened with the addition [`FILTER`](ABAPOPEN_DATASET_OS_ADDITION.html) of the statement `OPEN DATASET`. This raises a catchable exception.

When writing, the file is read from the start of the file until the first end-of-line marker, and then the new content is written starting from the end of the file. If the file pointer is not set explicitly after a read, the last [`TRANSFER`](ABAPTRANSFER.html) statements would overwrite the file after the first end-of-line marker.

This addition can be used to change some of the attributes that were determined when the file was opened with the statement [`OPEN DATASET`](ABAPOPEN_DATASET.html). `attr` expects a data object of type `dset_changeable_attributes` from the [type pool](ABENTYPE_POOL_GLOSRY.html)\\ `DSET` (see the table below). The structure `dset_changeable_attributes` corresponds to the substructure `changeable` of the structure `dset_attributes`. Data objects of the structure `dset_attributes` can be filled using the statement [`GET DATASET`](ABAPGET_DATASET.html).

For some components, the possible input values are defined as constants in the type pool `DSET`.

The values specified in `attr` must comply with the syntax rules for the associated additions of the statement `OPEN DATASET`, otherwise a catchable exception is raised:

The modifiable attributes do not affect the attributes of the file in the operating system, but rather the attributes with which the file is opened in ABAP and according to which it is handled in ABAP.

Depending on the non-modifiable attributes of the file `test.dat`, some of its modifiable attributes are reset.

`CX_SY_CODEPAGE_CONVERTER_INIT`

`CX_SY_CONVERSION_CODEPAGE`

`CX_SY_FILE_OPEN_MODE`

`CX_SY_FILE_POSITION`

-   For file sizes greater than 2 GB, a data object `pos` of data type `i` is not sufficient for specifying all possible positions of the file pointer.
-   Free position specifications are more suitable for binary files than for text files. In text files, positions depend on the character representation, end-of-line markers, and in UTF-8 files, also on a Byte Order Mark (BOM). In text files, the file pointer should only be placed in positions known exactly, for example positions obtained using [`GET DATASET`](ABAPGET_DATASET.html).

-   The components `repl_char` and `conv_errors` can only be used when making changes if the file is open as a [text file](ABENTEXT_FILE_GLOSRY.html), [legacy](ABENLEGACY_FILE_GLOSRY.html) text file, or [legacy](ABENLEGACY_FILE_GLOSRY.html) binary file, but not if it is opened as a [binary file](ABENBINARY_FILE_GLOSRY.html)
-   The components `code_page` and `endian` can only be used when making changes if the file is open as a legacy text file or a legacy binary file.
-   The component `linefeed_mode` can only be used when making changes if the file is open as a [text file](ABENTEXT_FILE_GLOSRY.html) or a [legacy](ABENLEGACY_FILE_GLOSRY.html) text file and if the end-of-line marker has been set explicitly using the addition [`WITH LINEFEED`](ABAPOPEN_DATASET_LINEFEED.html).

-   *Cause:* The specified code page is not available for the current AS instance.
    *Runtime error:*\\ `CONVT_CODEPAGE_INIT`

-   *Cause:* The escape character cannot be represented in the target code page. Escape characters and handling of conversion errors can only be changed in `TEXT MODE` or in `LEGACY ... MODE`.
    *Runtime error:*\\ `CONVT_CODEPAGE`

-   *Error Type*\\ `READ_ONLY`\\
    *Cause:* File is only open for reads.
    *Runtime error:*\\ `DATASET_READ_ONLY`
-   *Error Type*\\ `NOT_OPEN`\\
    *Cause:* File is not open.
    *Runtime error:*\\ `DATASET_NOT_OPEN`
-   *Error Type*\\ `INCOMPATIBLE_MODE`\\
    *Cause:* File opened in incompatible mode.
    *Runtime error:*\\ `DATASET_INCOMPATIBLE_MODE`

-   *Error Type*\\ `SEEK_ERROR`\\
    *Cause:* Error when positioning in file.
    *Runtime error:*\\ `DATASET_SEEK_ERROR`
-   *Error Type*\\ `TELL_ERROR`\\
    *Cause:* No access to current read/write position in the file.
    *Runtime error:*\\ `DATASET_NO_POSITION`
-   *Error Type*\\ `OFFSET_TOO_LARGE`\\
    *Cause:* The specified offset for the file exceeds the defined
    system limit for the platform.
    Runtime error: `DATASET_OFFSET_TOO_LARGE`

-   *Cause:* An attempt was made to change the position in the case of a **pipe**. Pipes cannot, however, be positioned.
    *Runtime error:*\\ `DATASET_PIPE_POSITION`

1.  If the file is open for reads and the value of `pos` is greater than the length of the file, the file pointer is positioned outside the file. Unless the position is changed, no data can be read.
2.  If the file is opened for writes and the value of `pos` is greater than the length of the file, it is filled with hexadecimal 0s from the end of the file to the specified position the next time a write is performed on it.
3.  If the file is opened for appending, the position specified is ignored and the file pointer remains positioned at the end of the file.
4.  If the file is opened for changes, and the value of `pos` is greater than the length of the file, it is filled with hexadecimal 0 from the end of the file to the specified position the next time a write is performed on it.

DATA: file TYPE string VALUE 'test1.dat', \\n pos TYPE i, \\n text TYPE string. \\n\\ \\nOPEN DATASET file FOR OUTPUT IN TEXT MODE \\n ENCODING DEFAULT \\n WITH SMART LINEFEED \\n MESSAGE FINAL(msg). \\n\\ \\nTRANSFER: 'Line1' TO file, \\n 'Line2' TO file, \\n 'Line3' TO file. \\n\\ \\nSET DATASET file POSITION 0. \\nREAD DATASET file INTO text. \\nSET DATASET file POSITION END OF FILE. \\n\\ \\nTRANSFER: 'Line4' TO file, \\n 'Line5' TO file, \\n 'Line6' TO file. \\n\\ \\nCLOSE DATASET file. DATA: dset TYPE string VALUE 'test.dat', \\n attr TYPE dset\_attributes. \\n\\ \\nOPEN DATASET dset FOR INPUT IN LEGACY TEXT MODE \\n WITH NATIVE LINEFEED \\n MESSAGE FINAL(msg). \\n\\ \\n... \\n\\ \\nGET DATASET dset ATTRIBUTES attr. \\n\\ \\nIF attr-fixed-mode = 'T' OR \\n attr-fixed-mode = 'LT'. \\n attr-changeable = VALUE #( \\n indicator-conv\_errors = 'X' \\n conv\_errors = 'I' \\n indicator-linefeed\_mode = 'X' \\n linefeed\_mode = 'S' ). \\n IF attr-fixed-mode = 'LT'. \\n attr-changeable = VALUE #( BASE attr-changeable \\n indicator-code\_page = 'X' \\n code\_page = '1100' ). \\n ENDIF. \\n SET DATASET dset ATTRIBUTES attr-changeable. \\nENDIF. \\n\\ \\nCLOSE DATASET dset. **Component** **Meaning** `indicator` Structure with the components `repl_char`, `conv_errors`, `code_page`, `endian`, and `linefeed_mode`. If these components contain the value *X* in `attr`, the values are used in the components with the same names in the structure `dset_changeable_attributes` when changes are made. `repl_char` In this component of `attr`, a single-character character-like replacement character can be specified to overwrite the replacement character specified when the file was opened using the addition [`REPLACEMENT CHARACTER`](ABAPOPEN_DATASET_ERROR_HANDLING.html) of the statement `OPEN DATASET`. `conv_errors` In this component of `attr`, the value *I* or *R* can be specified to overwrite the setting made when the file was opened using the addition [`IGNORING CONVERSION ERRORS`](ABAPOPEN_DATASET_ERROR_HANDLING.html). The value *I* suppresses the exceptions, *R* raises the exceptions. `code_page` In this component of `attr`, a [code page](ABENCODEPAGE_GLOSRY.html) from the column `CPCODEPAGE` of the database table `TCP00` can be specified to overwrite the code page specified when the file was opened using the addition [`CODE PAGE`](ABAPOPEN_DATASET_MODE.html) of the statement `OPEN DATASET`. `endian` In this component of `attr`, the value *B* or *L* can be specified to overwrite the setting made when the file was opened using the additions [`\{BIG|LITTLE\} ENDIAN`](ABAPOPEN_DATASET_MODE.html) of the statement `OPEN DATASET`. The value *B* sets the byte order to Big Endian; the value *L* sets it to Little Endian. `linefeed_mode` In this component of `attr`, one of the values *N*, *S*, *U* or *W* can be entered to overwrite the setting made using the addition [`WITH NATIVE|SMART|UNIX|WINDOWS LINEFEED`](ABAPOPEN_DATASET_LINEFEED.html) of the statement `OPEN DATASET` as appropriate. abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html