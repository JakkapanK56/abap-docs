---
title: "ABENNEWS-620-ADDITIONS"
description: |
  ABENNEWS-620-ADDITIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-620-ADDITIONS.htm"
abapFile: "ABENNEWS-620-ADDITIONS.html"
keywords: ["select", "if", "data", "types", "internal-table", "ABENNEWS", "620", "ADDITIONS"]
---

[1. `DAYLIGHT SAVING TIME` in `CONVERT TIME STAMP`](#ABAP_MODIFICATION_1@4@)

[2. `AS PERSON TABLE` in Infotypes](#ABAP_MODIFICATION_2@4@) 

[3. `TO|FROM INTERNAL TABLE` in `EXPORT|IMPORT`](#ABAP_MODIFICATION_3@4@)

[4. `CONNECTION` in ABAP SQL](#ABAP_MODIFICATION_4@4@) 

[5. `SOURCE` in `CALL TRANSFORMATION`](#ABAP_MODIFICATION_5@4@)

[6. `VISIBLE LENGTH` in `SELECTION-SCREEN PUSHBUTTON`](#ABAP_MODIFICATION_6@4@)

[7. `DISPLAY|MEMORY OFFSET` in `GET|SET CURSOR|LINE`](#ABAP_MODIFICATION_7@4@)

The addition [`DAYLIGHT SAVING TIME dst`](ABAPCONVERT_TIME-STAMP.html) has been added to the statement `CONVERT TIME STAMP tst`. This provides a flag in data object `dst` that indicates whether the time `tst` is within the daylight saving time.

This addition creates an internal table of personal data when [`infotype nnnn`](ABAPINFOTYPES.html) is declared. The internal table is given the name `PPnnnn`, unless a name was specified explicitly using the addition `NAME`.

The variant [`EXPORT ... TO INTERNAL TABLE itab`](ABAPEXPORT_DATA_CLUSTER.html) makes it possible to store cluster data in the internal table `itab`. The variant [`IMPORT ... FROM INTERNAL TABLE itab`](ABAPIMPORT_DATA_CLUSTER.html) can be used to read this repository again.

The addition `CONNECTION` enables all [ABAP SQL](ABENABAP_SQL.html) statements to use databases other than the standard database. The alternative database systems must be supported by SAP.

The addition [`SOURCE`](ABAPCALL_TRANSFORMATION.html) enables ABAP data and objects to be serialized in a canonical [XML](ABENXML_GLOSRY.html) format, where the [SAP XSLT processor](ABENXSLT_PROCESSOR_GLOSRY.html) has a direct interface to the serializer. The result of this [XSLT transformation](ABENXSL_TRANSFORMATION_GLOSRY.html) can be produced as XML data or be converted back into ABAP data and objects.

This addition can be used to change the visible length of pushbuttons for the statement [`SELECTION-SCREEN PUSHBUTTON`](ABAPSELECTION-SCREEN_LAYOUT.html).

When `OFFSET` is specified with the additions `DISPLAY` or `MEMORY` in list processing, the statements [`GET CURSOR \{ FIELD f | LINE l \}`](ABAPGET_CURSOR_LIST.html) and [`SET CURSOR \{ FIELD f | LINE l\}`](ABAPSET_CURSOR_LIST.html) can be used to specify whether the column in the displayed list or the position in the list buffer is intended. The addition `DISPLAY` is the standard and can be omitted.

abenabap.html abennews.html abennews-6.html abennews-620.html