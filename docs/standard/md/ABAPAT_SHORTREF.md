---
title: "ABAPAT_SHORTREF"
description: |
  ABAPAT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAT_SHORTREF.htm"
abapFile: "ABAPAT_SHORTREF.html"
keywords: ["loop", "data", "internal-table", "ABAPAT", "SHORTREF"]
---

[Reference](ABAPAT_ITAB.html)

`[AT FIRST.     ...  ENDAT.]\    [AT field_groupi [WITH field_groupj].      ...    ENDAT.]\      [AT NEW comp1.         ...       ENDAT.         ...           [AT NEW comp2.              ...           ENDAT.             [...]]]\               [ ... ]\           [[[...]\           AT END OF comp2.                ...             ENDAT.]\         ...       AT END OF comp1.         ...       ENDAT.]\  [AT LAST.      ...  ENDAT].`

\\ [Group level processing](ABENGROUP_LEVEL_PROCESSING_GLOSRY.html) within `LOOP` statements using [internal tables](ABAPAT_ITAB.html) or [extraction datasets](ABAPAT_EXTRACT.html) (obsolete), where statement blocks enclosed in `AT` and `ENDAT` are executed depending on conditions.

-   `FIRST`\\
    First line of the internal table or the extraction dataset.
-   `field_groupi`\\
    Line of the extraction dataset that was appended by the statement `EXTRACT field_groupi`.
-   `WITH field_groupj`\\
    Condition that the next line was appended by `EXTRACT field_groupj`.
-   `NEW comp1`, `NEW comp2`, ...
    First line of a group with the same content in the components `comp1`, `comp2`, ... and in the components on the left of `comp1`, `comp2`, ...
-   `END OF comp1`, `END OF comp2`, ...
    Last line of a group with the same content in the components `comp1`, `comp2`, ... and in the components on the left of `comp1`, `comp2`, ...
-   `LAST`\\
    Last line of the internal table or the extraction dataset.

abenabap.html abenabap\_reference.html abenabap\_shortref.html