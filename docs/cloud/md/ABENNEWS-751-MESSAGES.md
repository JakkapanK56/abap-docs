---
title: "ABENNEWS-751-MESSAGES"
description: |
  ABENNEWS-751-MESSAGES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-751-MESSAGES.htm"
abapFile: "ABENNEWS-751-MESSAGES.html"
keywords: ["if", "ABENNEWS", "751", "MESSAGES"]
---

If the object reference variable `oref` in the variant [`MESSAGE oref`](ABAPMESSAGE_MSG.html) of the statement [`MESSAGE`](ABAPMESSAGE.html) (used to send a message) points to an object that includes the system interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html), the addition `TYPE` can be omitted. The message type from the interface attribute `MSGTY` of the object is then used implicitly.

abenabap.html abennews.html abennews-75.html abennews-751.html