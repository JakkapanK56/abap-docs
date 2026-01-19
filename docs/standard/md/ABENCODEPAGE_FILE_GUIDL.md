---
title: "ABENCODEPAGE_FILE_GUIDL"
description: |
  ABENCODEPAGE_FILE_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCODEPAGE_FILE_GUIDL.htm"
abapFile: "ABENCODEPAGE_FILE_GUIDL.html"
keywords: ["select", "insert", "do", "if", "data", "ABENCODEPAGE", "FILE", "GUIDL"]
---

When you open text files on the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current AS instance using the `OPEN DATASET` statement, you specify the following options that are very important for internationalization:

If the code page is not specified explicitly when a file is written, it is set implicitly (to UTF-8 in a Unicode system). If nothing is specified, a BOM is not set.

**Write text files in UTF-8 and with a byte order mark.**

Open text files for output explicitly in the UTF-8 code page. The byte order mark should be inserted and taken into account when the file is read.

When a file is read, the code page used is usually very difficult to identify. However, if the byte-order mark is inserted, a file is clearly defined as a UTF-8. Therefore, you should always specify the `ENCODING UTF-8 WITH BYTE-ORDER MARK` additions when opening a text output file with the `OPEN DATASET` statement. When a text file of this type is read, it should only be opened with the `SKIPPING BYTE-ORDER MARK` addition, so that the byte order mark is automatically skipped and does not appear in the read application data.

Files used for data exchange with applications that do not support UTF-8 format must be output in a suitable code page.

The following source code shows how a text file is opened for writes without explicitly specifying the code page. In Unicode systems, UTF-8 is selected implicitly, but a byte order mark is not inserted.

The following source code shows how a text file is opened for writes by explicitly specifying the UTF-8 code page and using the byte order mark.

-   The `ENCODING` addition specifies the character representation where the content of the file is handled.
-   The `WITH BYTE-ORDER MARK` addition, which is only possible for UTF-8 files, specifies that a byte order mark (BOM) is inserted at the beginning of a text file when it is written.

OPEN DATASET dset \\n FOR OUTPUT IN TEXT MODE \\n ENCODING DEFAULT. OPEN DATASET dset \\n FOR OUTPUT IN TEXT MODE \\n ENCODING UTF-8 WITH BYTE-ORDER MARK. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abeninternationalization\_gdl.html