---
title: "ABAPLOOP-"
description: |
  ABAPLOOP- - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLOOP-.htm"
abapFile: "ABAPLOOP-.html"
keywords: ["loop", "if", "catch", "method", "class", "data", "internal-table", "ABAPLOOP"]
---

[Short Reference](ABAPLOOP_SHORTREF.html)

`LOOP.`\\ 
  `...`\\ 
`ENDLOOP.`

The statements `LOOP` and `ENDLOOP` define a loop across a statement block. The loop is passed for each line from the [extract dataset](ABENEXTRACT_DATASET_GLOSRY.html). In each loop pass, the statement `LOOP` assigns the content of the components from the current line of the extract dataset to the data objects that make up the field group of the line. If the extract dataset is not sorted, the order in which the lines are read is the same in which they were appended using the statement [`EXTRACT`](ABAPEXTRACT.html). If the extract dataset is sorted using [`SORT`](ABAPSORT_EXTRACT.html), the read order is the same as the sort order.

A `LOOP` loop simultaneously ends the construction of the extract dataset. If the statement `EXTRACT` is executed after the statement `LOOP`, an uncatchable exception is raised. In addition, it is not possible to process the extract dataset using either `LOOP` or `SORT` within a `LOOP` block. `LOOP` blocks that read the extract dataset must not be nested.

The loop can be exited with one of the following statements:

In order to exit the current loop pass and to continue with the next loop pass, the statements [`CONTINUE`](ABAPCONTINUE.html) and [`CHECK`](ABAPCHECK_PROCESSING_BLOCKS.html) can be used.

[Extracts, Processing](ABENEXTRACT_AT_ABEXA.html)

-   [`EXIT`](ABAPEXIT_LOOP.html) that exits a complete loop and resumes the program behind the closing statement of the loop.
-   A statement for [exiting the current processing block](ABENLEAVE_PROCESSING_BLOCKS.html)
-   A statement for [exiting the current program](ABENABAP_LEAVE_PROGRAM.html)

-   The statement `LOOP` for the extract dataset must not be confused with the statement [`LOOP AT`](ABAPLOOP_AT_ITAB.html) for internal tables.
-   No field groups can be defined or processed in global classes. In methods of local classes of programs other than class pools, the statement `LOOP` can be used for globally defined field groups there.
-   Extracts are obsolete. [Internal tables](ABENITAB.html) should be used instead.

-   *Cause:* Nested loop across an extracted dataset.
    *Runtime error:*\\ `LOOP_WITHIN_LOOP`

`**sy-subrc**` **Meaning** 0 The loop was run at least once. 4 The loop was not run at all. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenabap\_extracts\_extended.html