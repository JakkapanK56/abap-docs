---
title: "ABAPREPORT_DEFINING"
description: |
  ABAPREPORT_DEFINING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREPORT_DEFINING.htm"
abapFile: "ABAPREPORT_DEFINING.html"
keywords: ["if", "data", "ABAPREPORT", "DEFINING"]
---

[Short Reference](ABAPREPORT_SHORTREF.html)

`...  [ DEFINING DATABASE ldb ] ...`

This addition of the statement [`REPORT`](ABAPREPORT.html) shows that the current program is the [database program](ABENDATABASE_PROGRAM_GLOSRY.html) of the logical database `ldb`. The name of this logical database has a maximum length of 20 characters. Logical databases are defined with the tool [Logical Database Builder](ABENLOGICAL_DATABASE_BUILD_GLOSRY.html) of the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html), in which the [master program](ABENMASTER_PROGRAM_GLOSRY.html) is generated automatically including the statement `REPORT`. The name of the master program is `SAPDBldb`.

If logical databases are no longer created, it is no longer necessary to use the addition `DEFINING` either.

Introduces the logical database `F1S`.

REPORT sapdbf1s DEFINING DATABASE f1s. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html abenldb\_statements.html