---
title: "ABAPCNT"
description: |
  ABAPCNT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCNT.htm"
abapFile: "ABAPCNT.html"
keywords: ["loop", "if", "catch", "data", "ABAPCNT"]
---

`... cnt(field) ....`

For the fields `field1`, `field2`, ... of the field groups of an [extract dataset](ABENEXTRACT_DATASET_GLOSRY.html), data objects named `cnt(field1)`, `cnt(field2)`, ... of data type `i` are created automatically. These fields can be accessed only within a `LOOP` and are filled with values for sorted extract datasets using the statements [`AT END OF`](ABAPAT_EXTRACT.html) and [`AT LAST`](ABAPAT_EXTRACT.html).

If `field1`, `field2`, ... are fields with a non-numeric data type of the field group `header` and the extract dataset was sorted by `field1`, `field2`, ..., then `cnt(field1)`, `cnt(field2)`, ... contain the number of different values that `field1`, `field2`, ... have within the group level or the entire dataset.

If the fields `cnt(field1)`, `cnt(field2)`, ... are accessed without first sorting the extract dataset, an uncatchable exception can be raised.

-   No [substring access](ABENOFFSET_LENGTH.html)\\ `cnt(len)` can be made on a data object called `cnt` without an explicit offset specification. The compiler always interprets an offset specified like this as a field for an extract dataset.
-   No [customizing include](ABENCUSTOMIZING_INCLUDE_GLOSRY.html) may be specified for `field` if it is empty.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenabap\_extracts\_extended.html abapat\_extract.html