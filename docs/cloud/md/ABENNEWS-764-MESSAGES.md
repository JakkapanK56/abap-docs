---
title: "ABENNEWS-764-MESSAGES"
description: |
  ABENNEWS-764-MESSAGES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-764-MESSAGES.htm"
abapFile: "ABENNEWS-764-MESSAGES.html"
keywords: ["if", "ABENNEWS", "764", "MESSAGES"]
---

If the object reference variable `oref` in the variant [`MESSAGE oref`](ABAPMESSAGE_MSG.html) of the statement [`MESSAGE`](ABAPMESSAGE.html) (used to send a message) points to an object that implements the system interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html), the addition `TYPE` can be omitted. The message type from the interface attribute `MSGTY` of the object is then used implicitly.

abenabap.html abennews.html abennews-76.html abennews-764.html