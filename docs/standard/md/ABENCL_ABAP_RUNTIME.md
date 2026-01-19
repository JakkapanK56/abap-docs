---
title: "ABENCL_ABAP_RUNTIME"
description: |
  ABENCL_ABAP_RUNTIME - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_ABAP_RUNTIME.htm"
abapFile: "ABENCL_ABAP_RUNTIME.html"
keywords: ["if", "method", "class", "ABENCL", "ABAP", "RUNTIME"]
---

The static methods `CREATE_HR_TIMER` and `CREATE_LR_TIMER` of the class `CL_ABAP_RUNTIME` can be used to create objects for runtime measurements. The objects contain a method `GET_RUNTIME` that performs a runtime measurement in the same way as the statement [`GET RUN TIME`](ABAPGET_RUN_TIME.html).

An object created using `CREATE_HR_TIMER` performs a measurement with high measurement precision, and an object created using `CREATE_LR_TIMER` performs a measurement with a lower measurement precision.

In contrast to the statement `GET RUN TIME`, these objects can be used to perform different measurements with different levels of precision and parallel measurements for each [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

Since the execution of the method `GET_RUNTIME` is approximately two microseconds slower than the execution of the statement `GET RUN TIME`, in some circumstances this method may not be suitable for the measurement of very short periods of time.

Runtime measurement with an object.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(timer) = cl\_abap\_runtime=>create\_hr\_timer( ). \\n\\ \\nFINAL(t1) = timer->get\_runtime( ). \\nWAIT UP TO 1 SECONDS. \\nFINAL(t2) = timer->get\_runtime( ). \\n\\ \\nout->write( t2 - t1 ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abenabap\_runtime\_measurements.html