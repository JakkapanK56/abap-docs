---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCODEPAGE_FILE_GUIDL.html"
abapFile: "ABENCODEPAGE_FILE_GUIDL.html"
type: "abap-reference"
---

## Background

When you open text files on the [host computer](ABENHOST_COMPUTER_GLOSRY.md) of the current AS instance using the `OPEN DATASET` statement, you specify the following options that are very important for internationalization:

-   The `ENCODING` addition specifies the character representation where the content of the file is handled.
-   The `WITH BYTE-ORDER MARK` addition, which is only possible for UTF-8 files, specifies that a byte order mark (BOM) is inserted at the beginning of a text file when it is written.

If the code page is not specified explicitly when a file is written, it is set implicitly (to UTF-8 in a Unicode system). If nothing is specified, a BOM is not set.

## Rule

**Write text files in UTF-8 and with a byte order mark.**

Open text files for output explicitly in the UTF-8 code page. The byte order mark should be inserted and taken into account when the file is read.

## Details

When a file is read, the code page used is usually very difficult to identify. However, if the byte-order mark is inserted, a file is clearly defined as a UTF-8. Therefore, you should always specify the `ENCODING UTF-8 WITH BYTE-ORDER MARK` additions when opening a text output file with the `OPEN DATASET` statement. When a text file of this type is read, it should only be opened with the `SKIPPING BYTE-ORDER MARK` addition, so that the byte order mark is automatically skipped and does not appear in the read application data.

## Use

Files used for data exchange with applications that do not support UTF-8 format must be output in a suitable code page.

## Bad Example

The following source code shows how a text file is opened for writes without explicitly specifying the code page. In Unicode systems, UTF-8 is selected implicitly, but a byte order mark is not inserted.

```
OPEN DATASET dset 
  FOR OUTPUT IN TEXT MODE 
  ENCODING DEFAULT.
```

## Good Example

The following source code shows how a text file is opened for writes by explicitly specifying the UTF-8 code page and using the byte order mark.

```
OPEN DATASET dset 
  FOR OUTPUT IN TEXT MODE 
  ENCODING UTF-8 WITH BYTE-ORDER MARK.
```
