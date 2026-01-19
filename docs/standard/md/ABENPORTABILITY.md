---
title: "ABENPORTABILITY"
description: |
  ABENPORTABILITY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPORTABILITY.htm"
abapFile: "ABENPORTABILITY.html"
keywords: ["select", "delete", "while", "if", "case", "try", "method", "data", "types", "ABENPORTABILITY"]
---

The nature of the ABAP runtime framework guarantees that ABAP programs can be supported by many different systems. There are only a few cases in which the porting of programs to other platforms could cause problems.

Database-specific statements in ADBC, between `EXEC SQL` and `ENDEXEC`, or in [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) are the most critical factor for portability. Whenever possible, ABAP SQL language elements should be used.

The statements `OPEN`, `CLOSE`, `TRANSFER`, `READ DATASET`, and `DELETE DATASET` have a file name as parameter. This file name is passed directly to the underlying operating system. The organization of file systems ([flat](ABENFLAT_GLOSRY.html), hierarchical, ...) and the form of valid file names, however, depend to a great extent on the operating system. The function module `FILE_GET_NAME` makes it possible to convert logical file names (platform-independent) to physical file names (platform-dependent).

The format of numeric types `i` and `f` can be represented by various byte sequences, and (with type `f`) the code itself. Here, support is provided by the statement `TRANSLATE ... NUMBER FORMAT`.

While numbers of type `p` and `i` are handled in the same way on all platforms supported by SAP, there are differences when handling floating point numbers (type `f`). The value range (approximately 10\*\*(-308) to 10\*\*(+308)) and accuracy up to 15 decimal places is the same everywhere, but rounding behavior can vary. These differences should not have any serious consequences in practice, but it is not advisable to test two floating point numbers for equality, with the exception of zero; instead, check that the difference is only very small as shown below.

Handling of floating point numbers.

Certain fields are [aligned](ABENALIGNMENT_GLOSRY.html) in structures at the half word or word limit. As a result, these structures may contain padding bytes, even before the first field in the structure. Furthermore, some `ABAP` types differ depending on the platform. For this reason, always address components of a structure by name and not with an offset value, for example, `t000-ort01` rather than `t000+28`.

The set of available characters and their encoding depends not only on the platform, but also on the country and language of installation. - The statement `TRANSLATE ... CODE PAGE` enables texts to be converted from one coding to another.

Only very limited assumptions can be made about the effect of sorting on the character sequence. For instance:

These problems affect the statements `SORT`, `READ TABLE ... BINARY SEARCH`, and `SELECT ... ORDER BY` and the comparison operators `<`, `<=`, `>`, `>=`, `BT`, and `NB`. Unfortunately, there is no general solution at present. There is a special solution for the [`SORT`](ABAPSORT_ITAB.html) statement. This is *locale-friendly* sorting, using the addition `AS TEXT`.

-   Lowercase letters can come before uppercase letters or vice versa.
-   Numbers can come before letters or vice versa.
-   While the numbers 0 to 9 follow each other with no gaps, this is not necessary for letters. Letters with an accent are not sorted.

DATA: F TYPE F, \\n G TYPE F, \\n REL\_DIFF TYPE F, \\n\\ \\n EPSILON TYPE F VALUE '1E-6'. \\n\\ \\n REL\_DIFF = ABS( ( F - G ) / G ). \\n IF REL\_DIFF < EPSILON. ... ENDIF. abenabap.html abenabap\_reference.html abenabap\_oview.html