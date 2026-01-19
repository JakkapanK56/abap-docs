---
title: "ABENNEWS-772-TRANSFORMATIONS"
description: |
  ABENNEWS-772-TRANSFORMATIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-772-TRANSFORMATIONS.htm"
abapFile: "ABENNEWS-772-TRANSFORMATIONS.html"
keywords: ["try", "catch", "class", "ABENNEWS", "772", "TRANSFORMATIONS"]
---

The new transformation option [`OPTIONS exceptions = 'resumable'`](ABAPCALL_TRANSFORMATION_OPTIONS.html) can be used to make exceptions of the class `CX_ST_DESERIALIZATION_ERROR` into resumable exceptions. In handling with [`CATCH BEFORE UNWIND`](ABAPCATCH_TRY.html), the new attribute `RESULT_REF_FOR_RESUME` of the exception object of the class `CX_ST_DESERIALIZATION_ERROR` points to the target field where the exception was raised. The canceled transformation can be resumed using [`RESUME`](ABAPRESUME.html).

abenabap.html abennews.html abennews-77.html abennews-772.html