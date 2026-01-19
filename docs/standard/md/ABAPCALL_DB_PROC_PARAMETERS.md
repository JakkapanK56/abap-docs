---
title: "ABAPCALL_DB_PROC_PARAMETERS"
description: |
  ABAPCALL_DB_PROC_PARAMETERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_DB_PROC_PARAMETERS.htm"
abapFile: "ABAPCALL_DB_PROC_PARAMETERS.html"
keywords: ["if", "method", "data", "types", "ABAPCALL", "PROC", "PARAMETERS"]
---

`... [EXPORTING  p1 = a1 p2 = a2 ...]\      [IMPORTING  p1 = a1 p2 = a2 ...].`

The additions `EXPORTING` and `IMPORTING` assign the actual parameters `a1`, `a2` to the input and output parameters defined in the database procedure. This method of passing parameters can be used in both static and dynamic calls.

The proxy parameters `p1`, `p2`, ... to which the actual procedure parameters are assigned in the mapping of the [database procedure proxies](ABENDATABASE_PROC_PROXY_GLOSRY.html) are specified after the additions. The data types of the actual parameters can be determined by referencing the type declarations of the associated [database procedure interfaces](ABENDATABASE_PROC_INTF_GLOSRY.html). The read positions are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abenhana\_xsc\_obsolete.html abensap\_hana\_access\_xsc.html abensql\_script.html abapcall\_database\_procedure.html