---
title: "ABAPCATCH_SYSTEM-EXCEPT_SHORTREF"
description: |
  ABAPCATCH_SYSTEM-EXCEPT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCATCH_SYSTEM-EXCEPT_SHORTREF.htm"
abapFile: "ABAPCATCH_SYSTEM-EXCEPT_SHORTREF.html"
keywords: ["if", "catch", "ABAPCATCH", "SYSTEM", "EXCEPT", "SHORTREF"]
---

[Reference](ABAPCATCH_SYS.html)

`CATCH SYSTEM-EXCEPTIONS [exc1 = n1 exc2 = n2 ...]\                          [OTHERS = n_others].    [statement_block]\  ENDCATCH.`

**Obsolete:** Catches [catchable runtime errors](ABENCATCHABLE_RUNTIME_ERROR_GLOSRY.html) in `statement_block` statement block. The catchable runtime errors are specified individually or as exception groups `exc1`, `exc2`, etc. If one of the specified runtime errors occurs, the number `n1`, `n2`, ... is assigned to system field `sy-subrc` and program execution is continued after `ENDCATCH`. Using `OTHERS` all catchable runtime errors are caught.

abenabap.html abenabap\_reference.html abenabap\_shortref.html