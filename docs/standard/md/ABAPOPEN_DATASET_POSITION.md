---
title: "ABAPOPEN_DATASET_POSITION"
description: |
  ABAPOPEN_DATASET_POSITION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPOPEN_DATASET_POSITION.htm"
abapFile: "ABAPOPEN_DATASET_POSITION.html"
keywords: ["select", "update", "delete", "do", "while", "if", "case", "data", "ABAPOPEN", "DATASET", "POSITION"]
---

[Short Reference](ABAPOPEN_DATASET_SHORTREF.html)

`... AT POSITION pos ...`

This addition sets the file pointer at the position specified in `pos`. `pos` expects a numeric data object. Numbers with a value greater than the [value range](ABENVALUE_RANGE_GLOSRY.html) of the data type `i` can also be entered.

The position is specified in bytes, where the start of the file corresponds to position 0. If `pos` contains the value -1, the position is at the end of the file. For all other negative values, the behavior is undefined.

The following cases must be distinguished:

The addition `POSITION` cannot be specified if one of the additions [`FILTER`](ABAPOPEN_DATASET_OS_ADDITION.html) or [`BYTE-ORDER MARK`](ABAPOPEN_DATASET_ENCODING.html) is specified at the same time.

A file `test.dat` is created as a text file, then filled with data, changed, and read. Since each [`TRANSFER`](ABAPTRANSFER.html) statement appends an [end-of-line marker](ABAPOPEN_DATASET_LINEFEED.html) to the written content, the content of the file is double-lined after the change. The first line contains *12ABCD*. The second line contains *890*. The character *7* is overwritten by the end-of-line selection of the first line.

-   For file sizes greater than 2 GB, a position `pos` of the data type `i` is not sufficient for positioning in the entire file, and `p` or `decfloat` must be used instead.
-   The positioning can be overwritten by the statement [`SET DATASET`](ABAPSET_DATASET.html). Especially for positioning the file pointer at the end of the file, `SET DATASET` should be used instead of entering the value -1 in `pos`.
-   Free specified positions are more suitable for binary files than for text files. In the case of text files, positions depend on the character format, [end-of-line marker](ABAPOPEN_DATASET_LINEFEED.html), and a possible byte order mark (BOM) in UTF-8 files.

1.  If the file is opened for reading and the value of `pos` is greater than the length of the file, the file pointer is positioned outside the file. Unless the position is changed, no data can be read.
2.  If the file is opened for writing, the next time writing takes place, the file is filled with hexadecimal 0 from the start of the file to the specified position, and the new content is written after that.
3.  If the file is opened for appending, the specified position is ignored, and the file pointer remains positioned at the end of the file.
4.  If the file is opened for changing, and the value of `pos` is greater than the length of the file, the next time the file is written in, it is filled with hexadecimal 0 from the end of the file to the specified position, and the new content is written after that.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA msg TYPE msg. \\n\\ \\nFINAL(file) = \`test.dat\`. \\n\\ \\nOPEN DATASET file FOR OUTPUT IN TEXT MODE \\n ENCODING DEFAULT \\n WITH SMART LINEFEED \\n MESSAGE msg. \\nTRANSFER \`1234567890\` TO file. \\nCLOSE DATASET file. \\n\\ \\nOPEN DATASET file FOR UPDATE IN TEXT MODE \\n ENCODING DEFAULT \\n WITH SMART LINEFEED \\n AT POSITION 2 \\n MESSAGE msg. \\nTRANSFER \`ABCD\` TO file. \\nCLOSE DATASET file. \\n\\ \\n... \\n\\ \\nOPEN DATASET file FOR INPUT IN TEXT MODE \\n ENCODING DEFAULT \\n WITH SMART LINEFEED \\n MESSAGE msg. \\nDATA: result TYPE string, \\n output TYPE TABLE OF string WITH EMPTY KEY. \\nWHILE sy-subrc = 0. \\n READ DATASET file INTO result. \\n APPEND result TO output. \\nENDWHILE. \\nCLOSE DATASET file. \\n\\ \\nout->write\_data( output ). \\n\\ \\nDELETE DATASET file. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_app\_server\_access.html abenabap\_language\_files.html abenfile\_interface\_statements.html abapopen\_dataset.html