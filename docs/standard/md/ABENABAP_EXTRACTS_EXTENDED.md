---
title: "ABENABAP_EXTRACTS_EXTENDED"
description: |
  ABENABAP_EXTRACTS_EXTENDED - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_EXTRACTS_EXTENDED.htm"
abapFile: "ABENABAP_EXTRACTS_EXTENDED.html"
keywords: ["insert", "delete", "loop", "if", "method", "class", "data", "internal-table", "ABENABAP", "EXTRACTS", "EXTENDED"]
---

An extract dataset, or extract for short, is a dataset in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of an ABAP program that is not handled as a data object and therefore has no data type. There is only one extract dataset for each ABAP program. It can be filled and read using ABAP statements. The content of the extract dataset cannot be deleted explicitly.

Like an internal table, an extract dataset consists of a dynamic number of lines and the size of the extract dataset is theoretically unlimited. If the size exceeds 500 KB, it is stored in a file in the operating system. Sizes of up to 2 GB (and larger for 64-bit processors) are practicable. Unlike internal tables, the individual lines can have different structures. The line structures are declared as field groups using the statement [`FIELD-GROUPS`](ABAPFIELD-GROUPS.html).

The exact structure of each line is not determined until the program is executed using the statement [`INSERT`](ABAPINSERT_FG.html).

The statements used for processing extracts are:

-   [`EXTRACT`](ABAPEXTRACT.html)
-   [`SORT`](ABAPSORT_EXTRACT.html)
-   [`LOOP`](ABAPLOOP-.html)
-   [`AT`](ABAPAT_EXTRACT.html)

-   Field groups cannot be defined in class pools or interface pools. Their extract dataset, however, can be processed in methods of local classes of other programs.
-   Extracts are obsolete. [Internal tables](ABENITAB.html) should be used instead.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html