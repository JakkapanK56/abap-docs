---
title: "ABENNEWS-40-OTHER-45A"
description: |
  ABENNEWS-40-OTHER-45A - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-40-OTHER-45A.htm"
abapFile: "ABENNEWS-40-OTHER-45A.html"
keywords: ["if", "catch", "class", "data", "internal-table", "ABENNEWS", "OTHER", "45A"]
---

[1. New Addition `STABLE` for the Statement `SORT`](#ABAP_MODIFICATION_1@4@)

[2\. New Error Classes for Catchable Runtime Errors](#ABAP_MODIFICATION_2@4@)

[3. New Statement `SET RUN TIME CLOCK RESOLUTION [HIGH|LOW]`](#ABAP_MODIFICATION_3@4@)

[4. New Addition for `EXPORT`](#ABAP_MODIFICATION_4@4@)

[5. New Addition for `IMPORT`](#ABAP_MODIFICATION_5@4@)

[6. New Addition `QUICKINFO` for `WRITE`](#ABAP_MODIFICATION_6@4@)

This addition makes stable sorts of internal tables and [extract datasets](ABENEXTRACT_DATASET_GLOSRY.html) possible.

The following new [`ERROR classes`](ABENSYSEXC-ERRKL.html) are supported:

FILE\_ACCESS\_ERRORS

IMPORT\_MISMATCH\_ERRORS

LOCALIZATION\_ERRORS

This statement can be used to set the clock used to measure runtime in the statement [`GET RUN TIME`](ABAPGET_RUN_TIME.html).

In [`EXPORT obj1...objn TO DATABASE/SHARED BUFFER dbtab(ar) ID key`](ABAPEXPORT_DATA_CLUSTER.html) the addition `FROM wa` uses the specified work area `wa` instead of the table work area.

In [`IMPORT obj1...objn FROM DATABASE/SHARED BUFFER dbtab(ar) ID key`](ABAPIMPORT_DATA_CLUSTER.html) the addition `TO wa` uses the specified work area `wa` instead of the table work area.

This addition for `WRITE f` is used to display the field f with the [tooltip](ABENTOOL_TIP_GLOSRY.html) g. The content of g appears as an explanatory text for f whenever the mouse pointer is positioned over f.

-   [Introducing ABAP Objects in ABAP Release 4.5](ABENNEWS-40-OBJECTS.html)
-   [Runtime Analysis in ABAP Release 4.5](ABENNEWS-45-SE30.html)

abenabap.html abennews.html abennews-4.html