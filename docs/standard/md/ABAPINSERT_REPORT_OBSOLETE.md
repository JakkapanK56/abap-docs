---
title: "ABAPINSERT_REPORT_OBSOLETE"
description: |
  ABAPINSERT_REPORT_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINSERT_REPORT_OBSOLETE.htm"
abapFile: "ABAPINSERT_REPORT_OBSOLETE.html"
keywords: ["insert", "if", "ABAPINSERT", "REPORT", "OBSOLETE"]
---

[Short Reference](ABAPINSERT_REPORT_SHORTREF.html)

`INSERT REPORT ... UNICODE ENABLING ...`

The addition `UNICODE ENABLING` of the statement [`INSERT REPORT`](ABAPINSERT_REPORT.html) has the same semantics as the addition `VERSION`, which replaces it. If `VERSION` is specified, `UNICODE ENABLING` cannot be specified.

Before [ABAP language versions](ABENABAP_VERSIONS.html) were introduced, the addition `UNICODE ENABLING` was used exclusively to configure the [Unicode check](ABENUNICODE_CHECK_GLOSRY.html). The general addition `VERSION`, on the other hand, makes it possible to configure further versions as well.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenprogram\_editing\_obsolete.html