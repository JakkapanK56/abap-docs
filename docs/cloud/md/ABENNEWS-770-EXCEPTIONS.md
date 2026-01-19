---
title: "ABENNEWS-770-EXCEPTIONS"
description: |
  ABENNEWS-770-EXCEPTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-770-EXCEPTIONS.htm"
abapFile: "ABENNEWS-770-EXCEPTIONS.html"
keywords: ["if", "try", "catch", "class", "ABENNEWS", "770", "EXCEPTIONS"]
---

The attribute `IS_RESUMABLE` of an [exception object](ABENEXCEPTION_OBJECT_GLOSRY.html) is now set after exceptions raised by the statement [`RAISE RESUMABLE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) only if the [`CATCH`](ABAPCATCH_TRY.html) statement in question has the addition `BEFORE UNWIND`. Previously in catches, the attribute was set for every exception raised in this way.

abenabap.html abennews.html abennews-77.html abennews-770.html