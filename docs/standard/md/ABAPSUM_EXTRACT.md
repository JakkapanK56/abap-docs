---
title: "ABAPSUM_EXTRACT"
description: |
  ABAPSUM_EXTRACT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSUM_EXTRACT.htm"
abapFile: "ABAPSUM_EXTRACT.html"
keywords: ["loop", "if", "catch", "data", "ABAPSUM", "EXTRACT"]
---

`... sum(field) ....`

For the fields `field1`, `field2`, ... of the field groups of an [extract dataset](ABENEXTRACT_DATASET_GLOSRY.html), data objects named `sum(field1)`, `sum(field2)`, ... of the same data type as `field1`, `field2`, ... are created automatically. These fields can be accessed only within a `LOOP` and are filled with values for sorted extract datasets using the statements [`AT END OF`](ABAPAT_EXTRACT.html) and [`AT LAST`](ABAPAT_EXTRACT.html): If `field1`, `field2`, ... are fields with numeric data type, `sum(field1)`, `sum(field2)`, ... contain the total of the values of `field1`, `field2`, ... within the group level or the entire dataset.

If the fields `sum(field1)`, `sum(field1)`, ... are accessed without first sorting the extract dataset, an uncatchable exception can be raised.

-   No [substring access](ABENOFFSET_LENGTH.html)\\ `sum(len)` can be made on a data object called `sum` without an explicit offset specification. The compiler always interprets an offset specified like this as a field for an extract dataset.
-   No [customizing include](ABENCUSTOMIZING_INCLUDE_GLOSRY.html) may be specified for `field` if it is empty.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenabap\_extracts\_extended.html abapat\_extract.html