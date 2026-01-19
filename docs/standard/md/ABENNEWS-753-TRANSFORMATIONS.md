---
title: "ABENNEWS-753-TRANSFORMATIONS"
description: |
  ABENNEWS-753-TRANSFORMATIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-753-TRANSFORMATIONS.htm"
abapFile: "ABENNEWS-753-TRANSFORMATIONS.html"
keywords: ["try", "catch", "class", "ABENNEWS", "753", "TRANSFORMATIONS"]
---

The new transformation option [`OPTIONS exceptions = 'resumable'`](ABAPCALL_TRANSFORMATION_OPTIONS.html) can be used to make exceptions of the class `CX_ST_DESERIALIZATION_ERROR` into resumable exceptions. In handling with [`CATCH BEFORE UNWIND`](ABAPCATCH_TRY.html), the new attribute `RESULT_REF_FOR_RESUME` of the exception object of the class `CX_ST_DESERIALIZATION_ERROR` points to the target field where the exception was raised. The canceled transformation can be resumed using [`RESUME`](ABAPRESUME.html).

abenabap.html abennews.html abennews-75.html abennews-753.html