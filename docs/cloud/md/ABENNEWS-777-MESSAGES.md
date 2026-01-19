---
title: "ABENNEWS-777-MESSAGES"
description: |
  ABENNEWS-777-MESSAGES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-777-MESSAGES.htm"
abapFile: "ABENNEWS-777-MESSAGES.html"
keywords: ["if", "ABENNEWS", "777", "MESSAGES"]
---

If the object reference variable `oref` in the variant [`MESSAGE oref`](ABAPMESSAGE_MSG.html) of the statement [`MESSAGE`](ABAPMESSAGE.html) points to an object that implements the system interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html), the addition `TYPE` can be omitted and the message type from the interface attribute `MSGTY` of the object is used implicitly.

Until now, however, the statement `MESSAGE oref` could only have the further additions [`RAISING`](ABAPMESSAGE_RAISING.html) and [`DISPLAY LIKE`](ABAPMESSAGE.html) if `TYPE` was specified explicitly. These additions are now also possible if `TYPE` is not specified.

abenabap.html abennews.html abennews-77.html abennews-777.html