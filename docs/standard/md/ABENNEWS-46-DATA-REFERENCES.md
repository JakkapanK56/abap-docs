---
title: "ABENNEWS-46-DATA-REFERENCES"
description: |
  ABENNEWS-46-DATA-REFERENCES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46-DATA-REFERENCES.htm"
abapFile: "ABENNEWS-46-DATA-REFERENCES.html"
keywords: ["do", "if", "data", "field-symbol", "ABENNEWS", "DATA", "REFERENCES"]
---

In Release 4.6A, references to data objects have been introduced in the following variants:

[1\. Reference Variables for Data Objects](#ABAP_MODIFICATION_1@4@)

[2\. Creating Data Objects and Getting References](#ABAP_MODIFICATION_2@4@)

[3\. Assignment of Referenced Fields](#ABAP_MODIFICATION_3@4@)

Previously, reference variables were only available in [ABAP Objects](ABENABAP_OBJECTS.html). In ABAP release 4.6A, [`DATA f TYPE REF TO DATA`](ABAPDATA_SIMPLE.html) can be used to declare f as a reference variable that points to a different data object.

[`CREATE DATA dref ...`](ABAPCREATE_DATA.html) can be used to create a new data object (field) at runtime, where `dref` can be any reference variable with type [`REF TO DATA`](ABAPDATA_SIMPLE.html). Furthermore, [`GET REFERENCE`](ABAPGET_REFERENCE.html) can be used to get a reference to a data object (field).

The statement [`ASSIGN dref->* TO <fs>`](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html) makes the field symbol `<fs>` point to the same content as the data reference `dref` at runtime. If the field symbol is typed, the type is checked when the assignment is made.

abenabap.html abennews.html abennews-4.html abennews-46a.html