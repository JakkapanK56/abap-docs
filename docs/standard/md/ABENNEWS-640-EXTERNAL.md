---
title: "ABENNEWS-640-EXTERNAL"
description: |
  ABENNEWS-640-EXTERNAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-640-EXTERNAL.htm"
abapFile: "ABENNEWS-640-EXTERNAL.html"
keywords: ["if", "method", "ABENNEWS", "640", "EXTERNAL"]
---

[1\. New Callback Routine in Asynchronous RFC](#ABAP_MODIFICATION_1@4@)

[2\. Simple Transformation Calls](#ABAP_MODIFICATION_2@4@)

[3\. Control Options for Transformations](#ABAP_MODIFICATION_3@4@)

In [asynchronous RFC](ABAPCALL_FUNCTION_STARTING.html), the addition `CALLING` addition was introduced to also specify methods as callback routines.

This change was also transported back to ABAP release 6.20.

[`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html) can now be used to call [Simple Transformations](ABENXSLT_GLOSRY.html), as well as [XSLT](ABENSIMPLE_TRANSFORMATION_GLOSRY.html) programs.

In [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html), the addition `OPTIONS` can be used to specify control options for the called transformations.

abenabap.html abennews.html abennews-6.html abennews-640.html