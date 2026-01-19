---
title: "ABENNEWS-740_SP10-ABAP_SQL"
description: |
  ABENNEWS-740_SP10-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP10-ABAP_SQL.htm"
abapFile: "ABENNEWS-740_SP10-ABAP_SQL.html"
keywords: ["select", "if", "data", "ABENNEWS", "740", "SP10", "ABAP", "SQL"]
---

In ABAP release 7.40, SP10 and higher, it is possible to define a [CDS view](ABENCDS_VIEW_GLOSRY.html) as a [replacement object](ABENDDIC_REPLACEMENT_OBJECTS.html) in ABAP Dictionary for a database table or a DDIC database view.

If a replacement object is defined for a database table or DDIC database view specified as a [data source](ABAPSELECT_DATA_SOURCE.html) of a [`SELECT`](ABAPSELECT.html) statement, the `SELECT` statement accesses the CDS view and not the database table or the DDIC database view.

This change was implemented using a kernel patch after ABAP release 7.40, SP10. A replacement object can only be defined using an internal tool. It is currently not possible to use transaction `SE11` to define the replacement object. In ABAP release 7.40, the definition of replacement objects is reserved for specific internal SAP developments and should be otherwise transparent.

From ABAP release 7.61 onwards (but not in ABAP release 7.60), it will be possible to explicitly define a replacement object in transaction `SE11` and implicitly evaluate the object.

abenabap.html abennews.html abennews-740.html abennews-740\_sp10.html