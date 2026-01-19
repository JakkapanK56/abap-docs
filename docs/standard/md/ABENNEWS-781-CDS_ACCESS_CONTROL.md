---
title: "ABENNEWS-781-CDS_ACCESS_CONTROL"
description: |
  ABENNEWS-781-CDS_ACCESS_CONTROL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-781-CDS_ACCESS_CONTROL.htm"
abapFile: "ABENNEWS-781-CDS_ACCESS_CONTROL.html"
keywords: ["if", "case", "ABENNEWS", "781", "CDS", "ACCESS", "CONTROL"]
---

With the new addition `ALL`, access conditions can express that access shall only be granted when from a set-valued association all values satisfy the condition.

WHERE ALL toItem.State = 'A'

To accompany this use case, the `BYPASS WHEN` operator has been extended to literal conditions also.

A dedicated operator `EXISTS` can be used when different access conditions using the same set-valued association shall not be coupled in their fields by means of a common join expression.

[More Information](ABENCDS_DCL_ROLE_CONDITIONS.html)

abenabap.html abennews.html abennews-78.html abennews-781.html