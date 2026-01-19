---
title: "ABENNEWS-770-AMDP"
description: |
  ABENNEWS-770-AMDP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-770-AMDP.htm"
abapFile: "ABENNEWS-770-AMDP.html"
keywords: ["if", "method", "ABENNEWS", "770", "AMDP"]
---

The following restrictions were removed:

-   Tabular input parameters are now allowed in [AMDP function implementations](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) for [AMDP table functions](ABENAMDP_TABLE_FUNCTION_GLOSRY.html). Previously, only elementary input parameters were allowed. In AMDP function implementations for [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), however, the restriction that only elementary input parameters are allowed still applies.
-   Tabular input parameters of [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) and of [AMDP function implementations](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) can now be made optional using [`OPTIONAL`](ABAPMETHODS_PARAMETERS.html), but it is still not possible to specify a start value with [`DEFAULT`](ABAPMETHODS_PARAMETERS.html).

abenabap.html abennews.html abennews-77.html abennews-770.html