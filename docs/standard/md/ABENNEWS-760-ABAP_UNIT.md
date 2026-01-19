---
title: "ABENNEWS-760-ABAP_UNIT"
description: |
  ABENNEWS-760-ABAP_UNIT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-760-ABAP_UNIT.htm"
abapFile: "ABENNEWS-760-ABAP_UNIT.html"
keywords: ["class", "ABENNEWS", "760", "ABAP", "UNIT"]
---

[Test seams](ABENTEST_SEAM_GLOSRY.html) and [injections](ABENINJECTION_GLOSRY.html) have been introduced for unit tests in ABAP Unit. When tests are executed, code wrapped in [`TEST-SEAM`](ABAPTEST-SEAM.html) and [`END-TEST-SEAM`](ABAPEND-TEST-SEAM.html) as part of production code can be replaced by code from test classes wrapped by [`TEST-INJECTION`](ABAPTEST-INJECTION.html) and [`END-TEST-INJECTION`](ABAPEND-TEST-INJECTION.html).

Test classes with injections must be created in [test includes](ABENTEST_INCLUDE_GLOSRY.html). With the exception of test includes for class pools and function pools, no test includes can currently be created.

abenabap.html abennews.html abennews-76.html abennews-760.html