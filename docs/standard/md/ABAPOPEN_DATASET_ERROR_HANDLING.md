---
title: "ABAPOPEN_DATASET_ERROR_HANDLING"
description: |
  ABAPOPEN_DATASET_ERROR_HANDLING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPOPEN_DATASET_ERROR_HANDLING.htm"
abapFile: "ABAPOPEN_DATASET_ERROR_HANDLING.html"
keywords: ["delete", "while", "if", "case", "try", "catch", "class", "data", "ABAPOPEN", "DATASET", "ERROR", "HANDLING"]
---

[Short Reference](ABAPOPEN_DATASET_SHORTREF.html)

`... [MESSAGE msg]`\\ 
    `[IGNORING CONVERSION ERRORS]`\\ 
    `[REPLACEMENT CHARACTER rc] ...`

[1. `... MESSAGE msg`](#ABAP_ADDITION_1@3@)

[2. `... IGNORING CONVERSION ERRORS`](#ABAP_ADDITION_2@3@)

[3. `... REPLACEMENT CHARACTER rc`](#ABAP_ADDITION_3@3@)

In the case of errors during execution of [`OPEN DATASET`](ABAPOPEN_DATASET.html), these additions enable operating system messages to be received, exceptions to be suppressed, and a replacement character to be defined for unknown characters.

If an error occurs when a file is opened, the associated operating system message is assigned to the data object `msg`. The following can be specified for `msg`:

The addition `MESSAGE` must always be used for the statement `OPEN DATASET` in order to find the reason why the operating system could not open a file. Otherwise a warning from the syntax check occurs. In case of an error, a message is also written to the [developer trace](ABENDEVELOPER_TRACE_GLOSRY.html), but only if the trace level is 2 at least.

Output of the operating system message after an attempt to open a file with an empty name.

This addition can be used to suppress a catchable exception defined by the class `CX_SY_CONVERSION_CODEPAGE`. This exception can be raised by reads or writes if a conversion between [code pages](ABENCODEPAGE_GLOSRY.html) takes place and a character cannot be converted to the target code page.

This addition is possible when opening [text files](ABENTEXT_FILE_GLOSRY.html), [legacy](ABENLEGACY_FILE_GLOSRY.html) text files, or [legacy](ABENLEGACY_FILE_GLOSRY.html) binary files, but not when opening [binary files](ABENBINARY_FILE_GLOSRY.html).

See the addition `REPLACEMENT CHARACTER`.

If a conversion between [code pages](ABENCODEPAGE_GLOSRY.html) takes place while data is being read or written, every character that cannot be converted to the target code page is replaced by the character specified in `rc`. `rc` expects a character-like data object containing a single character. If the addition is not specified, the character *#* is used as a replacement character.

This addition is possible when opening [text files](ABENTEXT_FILE_GLOSRY.html), [legacy](ABENLEGACY_FILE_GLOSRY.html) text files, or [legacy](ABENLEGACY_FILE_GLOSRY.html) binary files, but not when opening [binary files](ABENBINARY_FILE_GLOSRY.html).

When a legacy text file is opened with ID `1101` for codepage 7-Bit USA ASCII, the exception of class `CX_SY_CONVERSION_CODEPAGE` is suppressed and a replacement character is specified. When data is written to a file, the character `ü` is replaced by `u` without an exception being raised. Compare the example to addition [`CODE PAGE`](ABAPOPEN_DATASET_CODE_PAGE.html).

-   A character-like variable.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). The declared variable has the data type `string`.

-   Each non-convertible character is replaced in the conversion either by the character *#* or by the character defined by the addition `REPLACEMENT CHARACTER`. The addition `IGNORING CONVERSION ERRORS` defines whether the user is notified of this by an exception.
-   This setting can be changed in an opened file using the statement [`SET DATASET`](ABAPSET_DATASET.html).

-   If at least one character is replaced by a replacement character in a read or write, the exception defined in the class `CX_SY_CONVERSION_CODEPAGE` is raised after the conversion, if this is not suppressed by the addition `IGNORING CONVERSION ERRORS`.
-   The replacement character of an opened file can be changed using the statement [`SET DATASET`](ABAPSET_DATASET.html).

OPEN DATASET \`\` FOR INPUT IN BINARY MODE MESSAGE FINAL(msg). \\n\\ \\nIF sy-subrc = 8. \\n MESSAGE msg TYPE 'I'. \\nENDIF. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE string. \\n\\ \\nFINAL(dset) = 'test.dat'. \\n\\ \\nOPEN DATASET dset FOR OUTPUT IN LEGACY TEXT MODE CODE PAGE '1101' \\n REPLACEMENT CHARACTER 'u' \\n IGNORING CONVERSION ERRORS \\n MESSAGE msg. \\nTRY. \\n TRANSFER 'Blahblahblah...' TO dset. \\n CATCH cx\_sy\_conversion\_codepage INTO FINAL(exc). \\n out->write( 'Error writing to 7-Bit USA ASCII' ). \\nENDTRY. \\nCLOSE DATASET dset. \\n\\ \\nDATA text TYPE string. \\nOPEN DATASET dset FOR INPUT IN LEGACY TEXT MODE CODE PAGE '1101' \\n MESSAGE msg. \\nREAD DATASET dset INTO text. \\nCLOSE DATASET dset. \\n\\ \\nout->write( text ). \\n\\ \\nDELETE DATASET dset. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html abapopen\_dataset.html