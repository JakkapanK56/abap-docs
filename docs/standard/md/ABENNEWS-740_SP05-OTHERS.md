---
title: "ABENNEWS-740_SP05-OTHERS"
description: |
  ABENNEWS-740_SP05-OTHERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP05-OTHERS.htm"
abapFile: "ABENNEWS-740_SP05-OTHERS.html"
keywords: ["while", "if", "data", "ABENNEWS", "740", "SP05", "OTHERS"]
---

In ABAP release 7.40, SP05 and higher, during HTTP/HTTPS/SMTP communication using [Internet Communication Framework](ABENINTERNET_CON_FRA_GLOSRY.html), a [database commit](ABENDB_COMMIT.html) is executed in an ICF server program or ICF client program (except while updating before every response is sent).

In previous versions (before ABAP release 7.40, SP05), a call from an ICF client program only raised a database commit, if the work process was switched due to the maximum waiting time being exceeded.

abenabap.html abennews.html abennews-740.html abennews-740\_sp05.html