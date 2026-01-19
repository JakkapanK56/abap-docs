---
title: "ABENSAP_LUW"
description: |
  ABENSAP_LUW - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSAP_LUW.htm"
abapFile: "ABENSAP_LUW.html"
keywords: ["if", "data", "ABENSAP", "LUW"]
---

An application program can be split into multiple program sections, which are processed in sequence using different [work processes](ABENWORK_PROCESS_GLOSRY.html). Each switch of a work process is linked with an implicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html), which means that an application program is not linked with a single [database LUW](ABENDATABASE_LUW_GLOSRY.html) automatically.

To ensure the data consistency of application programs that are executed across multiple work processes, the change statements are not executed directly in an [SAP LUW](ABENSAP_LUW_GLOSRY.html). Instead, they are first registered and then executed by a single work process, that is, in a single database LUW.

Each closing of an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) ends the current SAP LUW.

abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html