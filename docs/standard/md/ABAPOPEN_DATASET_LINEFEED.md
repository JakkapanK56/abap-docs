---
title: "ABAPOPEN_DATASET_LINEFEED"
description: |
  ABAPOPEN_DATASET_LINEFEED - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPOPEN_DATASET_LINEFEED.htm"
abapFile: "ABAPOPEN_DATASET_LINEFEED.html"
keywords: ["update", "delete", "do", "while", "if", "case", "data", "ABAPOPEN", "DATASET", "LINEFEED"]
---

[Short Reference](ABAPOPEN_DATASET_SHORTREF.html)

`... WITH \{ NATIVE           | SMART           | UNIX           | WINDOWS \} LINEFEED ...`

[1. `... WITH NATIVE LINEFEED`](#ABAP_ALTERNATIVE_1@2@)

[2. `... WITH SMART LINEFEED`](#ABAP_ALTERNATIVE_2@2@)

[3. `... WITH UNIX LINEFEED`](#ABAP_ALTERNATIVE_3@2@)

[4. `... WITH WINDOWS LINEFEED`](#ABAP_ALTERNATIVE_4@2@)

These additions determine which end-of-line marker is used for [text files](ABENTEXT_FILE_GLOSRY.html) or [legacy](ABENLEGACY_FILE_GLOSRY.html) text files. If these additions are used, the [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `abap/NTfmode` is ignored. The two values *UNIX* or *NT* cannot both be specified in the addition [`TYPE`](ABAPOPEN_DATASET_OS_ADDITION.html) at the same time.

If neither of these additions is used, the end-of-line marker is determined as follows, depending on the operating system of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html)\\ [host computer](ABENHOST_COMPUTER_GLOSRY.html):

If an addition `WITH NATIVE|SMART|UNIX|WINDOWS LINEFEED` is used, this setting can be changed for the open file using the statement [`SET DATASET`](ABAPSET_DATASET.html). If neither of the additions is used, the end-of-line marker cannot be changed using `SET DATASET` either.

This addition defines the end-of-line marker independently of the [access type](ABAPOPEN_DATASET_ACCESS.html) in accordance with the operating system of the current AS instance [host computer](ABENHOST_COMPUTER_GLOSRY.html), in other words *LF* for Unix, OS/390, and IBM i5/OS (previously known as OS/400), and *CRLF* for MS Windows.

The end-of-line marker is interpreted in accordance with the current code page. If a code page is specified explicitly using the addition [`CODE PAGE`](ABAPOPEN_DATASET_MODE.html), the [control characters](ABENCONTROL_CHARACTER_GLOSRY.html) of the end-of-line marker must be available or be written according to this code page.

The addition `WITH NATIVE LINEFEED` is intended for processing files on a host computer that can also be accessed by other means. The addition receives the appropriate end-of-line marker without the program needing to know the operating system.

The following example shows the UTF 8 representation of the current line end marking. Comparisons with the corresponding [control characters](ABENCONTROL_CHARACTER_GLOSRY.html) in [string templates](ABENSTRING_TEMPLATE_GLOSRY.html) ensure that it is either *LF* or *CRLF*.

This addition depends on the [access type](ABAPOPEN_DATASET_ACCESS.html):

The addition `WITH SMART LINEFEED` is intended for the generic processing of files in heterogeneous environments. The end-of-line marker is recognized and set for different formats. Using this addition is the best solution for most use cases.

Writing of a text file with the end-of-line marker *CRLF*. Using the addition `WITH SMART LINEFEED` when opening to read, this marking is also detected on platforms that expect *LF*.

The end-of-line marker is set to *LF* regardless of the [access type](ABAPOPEN_DATASET_ACCESS.html) and operating system of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current AS instance.

The end-of-line marker is interpreted in accordance with the current code page. If a code page is specified explicitly using the addition [`CODE PAGE`](ABAPOPEN_DATASET_MODE.html), the [control characters](ABENCONTROL_CHARACTER_GLOSRY.html) for the end-of-line marker must exist or be written according to this code page.

The addition `WITH UNIX LINEFEED` is intended for processing Unix files in which the specific end-of-line markers are to be retained, even if the operating system of the current AS instance [host computer](ABENHOST_COMPUTER_GLOSRY.html) is [MS](ABENHOST_COMPUTER_GLOSRY.html) Windows.

The following example sets the end-of-line marker to *LF*. This marking is detected after it is read to a binary file and compared with the corresponding control character in a [string template](ABENSTRING_TEMPLATE_GLOSRY.html).

The end-of-line marker is set to *CRLF* regardless of the [access type](ABAPOPEN_DATASET_ACCESS.html) and operating system of the current AS instance [host computer](ABENHOST_COMPUTER_GLOSRY.html).

The end-of-line marker is interpreted in accordance with the current code page. If a code page is specified explicitly using the addition [`CODE PAGE`](ABAPOPEN_DATASET_MODE.html), the [control characters](ABENCONTROL_CHARACTER_GLOSRY.html) for the end-of-line marker must exist or be written according to this code page.

The addition `WITH WINDOWS LINEFEED` is intended for use with `MS` Windows files in which the specific end-of-line marker is to be retained, even if the operating system of the current AS instance [host computer](ABENHOST_COMPUTER_GLOSRY.html) is Unix, OS/390, or IBM i5/OS (previously known as OS/400).

The following example sets the line end marking to *CRLF*. This marking is detected after it is read to a binary file and compared with the corresponding control character in a [string template](ABENSTRING_TEMPLATE_GLOSRY.html).

-   The end-of-line marker for Unix is *LF*. On Unix, OS/390, and IBM i5/OS (previously known as OS/400), only *LF* is used for reading and writing.
-   The end-of-line marker for `MS` Windows is *CRLF*. On `MS` Windows, however, the values of the [profile parameter](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `abap/NTfmode` can also be used to specify whether new files are to be handled according to Unix conventions or Windows conventions. If the profile parameter has the value *b*, the Unix end-of-line marker *LF* is used. If the profile parameter has the value *t* or is initial, the Windows end-of-line marker *CRLF* is used. The setting in the profile parameter can be overridden with the addition [`TYPE`](ABAPOPEN_DATASET_OS_ADDITION.html) and the value *UNIX* or *NT*. If an existing file is opened without the addition `TYPE`, this file is searched for the first end-of-line marker (*LF* or *CRLF*), and this is used for the entire file. If no end-of-line marker is found, the profile parameter is used. This applies particularly if an existing file is completely overwritten with [`FOR OUTPUT`](ABAPOPEN_DATASET_ACCESS.html).

-   Without the use of an addition `WITH LINEFEED`, the end-of-line marker is dependent on various implicit factors such as the operating system of the current AS instance [host computer](ABENHOST_COMPUTER_GLOSRY.html), a profile parameter, and line end markings that are already used. For this reason, the explicit use of `WITH LINEFEED` is recommended, which makes the use of the addition [`TYPE`](ABAPOPEN_DATASET_OS_ADDITION.html) for setting the end-of-line marker obsolete.
-   The end-of-line marker that is currently used can be determined for every open file using [`GET DATASET`](ABAPGET_DATASET.html).

-   In files that are opened for reading using `FOR INPUT`, both *LF* and *CRLF* are interpreted as an end-of-line marker. When opening an EBCDIC file with the addition [`CODE PAGE`](ABAPOPEN_DATASET_MODE.html), the corresponding ASCII [control characters](ABENCONTROL_CHARACTER_GLOSRY.html) are recognized alongside the *LF*, *CRLF*, and EBCDIC control characters. In addition, the EBCDIC control characters *NL* (line separator) is also interpreted as an end-of-line marker.
-   In files opened for appending or changing with `FOR APPENDING` or `FOR UPDATE`, the program searches for an end-of-line marker that is already used in the file. The end of the file is identified first. If no end-of-line marker is found here, a certain number of characters at the beginning is analyzed. If an end-of-line marker is found, this is used when writing to the file. This is also affected by the addition [`CODE PAGE`](ABAPOPEN_DATASET_MODE.html). For example, ASCII end-of-line markers are recognized and used in a file opened with EBCDIC, but not the other way round. If no end-of-line marker is found or no search is possible, for example, if the file is opened with the addition [`FILTER`](ABAPOPEN_DATASET_OS_ADDITION.html), the end-of-line marker is defined in accordance with the operating system of the current AS instance [host computer](ABENHOST_COMPUTER_GLOSRY.html), as with the addition `WITH NATIVE LINEFEED`.
-   In files opened for writing using `FOR OUTPUT`, the end-of-line marker is determined in accordance with the operating system the current AS instance [host computer](ABENHOST_COMPUTER_GLOSRY.html), as with the addition `WITH NATIVE LINEFEED`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE string. \\n\\ \\nFINAL(dset) = 'test.dat'. \\n\\ \\nOPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT \\n WITH NATIVE LINEFEED \\n MESSAGE msg. \\nTRANSFER 'abc' TO dset. \\nCLOSE DATASET dset. \\n\\ \\nDATA xstr TYPE xstring. \\nOPEN DATASET dset FOR INPUT IN BINARY MODE \\n MESSAGE msg. \\nREAD DATASET dset INTO xstr. \\nCLOSE DATASET dset. \\n\\ \\nSHIFT xstr BY 3 PLACES LEFT IN BYTE MODE. \\n\\ \\nout->write( xstr ). \\n\\ \\nDELETE DATASET dset. \\n\\ \\nASSERT xstr = cl\_abap\_conv\_codepage=>create\_out( )->convert( |\\\\n| ) OR \\n xstr = cl\_abap\_conv\_codepage=>create\_out( )->convert( |\\\\r\\\\n| ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE string. \\n\\ \\nFINAL(dset) = 'test.dat'. \\n\\ \\nOPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT \\n WITH WINDOWS LINEFEED \\n MESSAGE msg. \\nTRANSFER 'abc' TO dset. \\nTRANSFER 'def' TO dset. \\nCLOSE DATASET dset. \\n\\ \\nDATA str TYPE string. \\nOPEN DATASET dset FOR INPUT IN TEXT MODE ENCODING DEFAULT \\n WITH SMART LINEFEED \\n MESSAGE msg. \\nDATA output TYPE string. \\nWHILE sy-subrc = 0. \\n READ DATASET dset INTO str. \\n output &&= str. \\nENDWHILE. \\nCLOSE DATASET dset. \\n\\ \\nout->write( output ). \\n\\ \\nDELETE DATASET dset. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE string. \\n\\ \\nFINAL(dset) = 'test.dat'. \\n\\ \\nOPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT \\n WITH UNIX LINEFEED \\n MESSAGE msg. \\nTRANSFER 'abc' TO dset. \\nCLOSE DATASET dset. \\n\\ \\nDATA xstr TYPE xstring. \\nOPEN DATASET dset FOR INPUT IN BINARY MODE \\n MESSAGE msg. \\nREAD DATASET dset INTO xstr. \\nCLOSE DATASET dset. \\n\\ \\nSHIFT xstr BY 3 PLACES LEFT IN BYTE MODE. \\n\\ \\nout->write( xstr ). \\n\\ \\nDELETE DATASET dset. \\n\\ \\nASSERT xstr = cl\_abap\_conv\_codepage=>create\_out( )->convert( |\\\\n| ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE string. \\n\\ \\nFINAL(dset) = 'test.dat'. \\n\\ \\nOPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT \\n WITH WINDOWS LINEFEED \\n MESSAGE msg. \\nTRANSFER 'abc' TO dset. \\nCLOSE DATASET dset. \\n\\ \\nDATA xstr TYPE xstring. \\nOPEN DATASET dset FOR INPUT IN BINARY MODE \\n MESSAGE msg. \\nREAD DATASET dset INTO xstr. \\nCLOSE DATASET dset. \\n\\ \\nSHIFT xstr BY 3 PLACES LEFT IN BYTE MODE. \\n\\ \\nout->write( xstr ). \\n\\ \\nDELETE DATASET dset. \\n\\ \\nASSERT xstr = cl\_abap\_conv\_codepage=>create\_out( )->convert( |\\\\r\\\\n| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html abapopen\_dataset.html abapopen\_dataset\_mode.html