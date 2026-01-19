---
title: "ABAPOPEN_DATASET_SHORTREF"
description: |
  ABAPOPEN_DATASET_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPOPEN_DATASET_SHORTREF.htm"
abapFile: "ABAPOPEN_DATASET_SHORTREF.html"
keywords: ["select", "update", "do", "if", "data", "ABAPOPEN", "DATASET", "SHORTREF"]
---

[Reference](ABAPOPEN_DATASET.html)

`OPEN DATASET dset    FOR \{ INPUT | OUTPUT | APPENDING | UPDATE \}\    IN \{\ \{ BINARY MODE \}\       |\ \{ TEXT MODE ENCODING \{ DEFAULT                              |\ \{UTF-8 [SKIPPING|WITH BYTE-ORDER MARK]\}\                              | NON-UNICODE \}\                     [WITH \{NATIVE|SMART|UNIX|WINDOWS\} LINEFEED]\ \}\       |\ \{ LEGACY BINARY MODE [\{BIG|LITTLE\} ENDIAN]\                              [CODE PAGE cp]\ \}\       |\ \{ LEGACY TEXT MODE [\{BIG|LITTLE\} ENDIAN]\                            [CODE PAGE cp]\                            [WITH \{NATIVE|SMART|UNIX|WINDOWS\} LINEFEED]\ \}\ \}\    [AT POSITION pos]\    [TYPE attr]\    [FILTER opcom]\    [MESSAGE msg]\    [IGNORING CONVERSION ERRORS]\    [REPLACEMENT CHARACTER rc].`

Opens the file specified in `dset` on the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html).

-   [`FOR \{ INPUT | OUTPUT | APPENDING | UPDATE \}`](ABAPOPEN_DATASET_ACCESS.html)\\
    Opens the file for reading, writing, appending, or changing.
-   [`IN [LEGACY]\ \{ BINARY | TEXT \} MODE`](ABAPOPEN_DATASET_MODE.html)\\
    Opens the file in regular binary or text mode, or in legacy binary or text mode.
-   [`ENCODING \{DEFAULT|UTF-8|NON-UNICODE\}`](ABAPOPEN_DATASET_MODE.html)\\
    Determines in which character representation the content of the file is handled:
    \\
    [`DEFAULT`](ABAPOPEN_DATASET_ENCODING.html) - [UTF-8](ABENUTF8_GLOSRY.html) in [Unicode systems](ABENUNICODE_SYSTEM_GLOSRY.html); no conversion in non-Unicode systems.
    \\
    [`UTF-8`](ABAPOPEN_DATASET_ENCODING.html) - [UTF-8](ABENUTF8_GLOSRY.html).
    \\
    [`NON-UNICODE`](ABAPOPEN_DATASET_ENCODING.html) - [Code page](ABENCODEPAGE_GLOSRY.html) in accordance with the non-Unicode [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html) in Unicode systems; no conversion in non-Unicode systems.
-   [`WITH \{NATIVE|SMART|UNIX|WINDOWS\} LINEFEED`](ABAPOPEN_DATASET_LINEFEED.html)\\
    Determines the end-of-line marker for text files.
-   [`SKIPPING|WITH BYTE-ORDER MARK`](ABAPOPEN_DATASET_ENCODING.html)\\
    Controls handling of byte order mark in UTF-8 text files.
-   [`\{BIG|LITTLE\} ENDIAN`](ABAPOPEN_DATASET_ENDIAN.html)\\
    Determines in which byte order numeric data objects in the file are handled.
-   [`CODE PAGE cp`](ABAPOPEN_DATASET_CODE_PAGE.html)\\
    Specifies that character-like data objects in the file are handled in accordance with the code page specified in `cp`.
-   [`AT POSITION pos`](ABAPOPEN_DATASET_POSITION.html)\\
    Sets the file pointer to the position specified in `pos`.
-   [`TYPE attr`](ABAPOPEN_DATASET_OS_ADDITION.html)\\
    Either sets operating-system-specific parameters for the file or controls the end-of-line selection for a text file.
-   [`FILTER opcom`](ABAPOPEN_DATASET_OS_ADDITION.html)\\
    Transfers a statement to the operating system.
-   [`MESSAGE msg`](ABAPOPEN_DATASET_ERROR_HANDLING.html)\\
    If an error occurs, returns the associated operating system [message](ABENMESSAGE_GLOSRY.html) in `msg`.
-   [`IGNORING CONVERSION ERRORS`](ABAPOPEN_DATASET_ERROR_HANDLING.html)\\
    Suppresses an exception if a conversion error occurs.
-   [`REPLACEMENT CHARACTER rc`](ABAPOPEN_DATASET_ERROR_HANDLING.html)\\
    Specifies a replacement character for non-convertible characters in `rc`. If nothing is specified, *#* is used.

abenabap.html abenabap\_reference.html abenabap\_shortref.html