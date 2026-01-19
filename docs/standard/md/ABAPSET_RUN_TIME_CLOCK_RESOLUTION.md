---
title: "ABAPSET_RUN_TIME_CLOCK_RESOLUTION"
description: |
  ABAPSET_RUN_TIME_CLOCK_RESOLUTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_RUN_TIME_CLOCK_RESOLUTION.htm"
abapFile: "ABAPSET_RUN_TIME_CLOCK_RESOLUTION.html"
keywords: ["do", "if", "catch", "class", "ABAPSET", "RUN", "TIME", "CLOCK", "RESOLUTION"]
---

[Short Reference](ABAPSET_RUN_TIME_CLOCK_SHORTREF.html)

`SET RUN TIME CLOCK RESOLUTION \{HIGH|LOW\}.`

This statement specifies the measurement precision for the statement [`GET RUN TIME`](ABAPGET_RUN_TIME.html). It can be changed in a program only before the statement `GET RUN TIME` is executed for the first time, otherwise an uncatchable exception is raised.

Specifying `HIGH` defines a measurement precision of one microsecond. If the level of precision is high, this can produce false time values for multiprocessors, since the clocks of the individual processors are not always regularly synchronized on all platforms. The high level of precision on the following platforms always returns correct values:

To avoid incorrect time values on the other platforms, `LOW` can be used to specify a low precision measurement whose resolution depends on each platform.

Without the preceding statement `SET RUN TIME CLOCK RESOLUTION`, `GET RUN TIME` uses the high precision measurement implicitly.

Use of `SET RUN TIME CLOCK RESOLUTION` in front of `GET RUN TIME`.

-   AIX
-   SINIX
-   SUN-OS
-   Linux
-   IBM i5/OS (previously OS/400)
-   Windows

-   To execute multiple measurements with different levels of precision within an [internal session](ABENINTERNAL_SESSION_GLOSRY.html), the class `CL_ABAP_RUNTIME` can be used (see [Class for Runtime Measurements](ABENCL_ABAP_RUNTIME.html)).
-   No exception is raised if `SET RUN TIME CLOCK RESOLUTION` is used after the statement `GET RUN TIME`, but the level of precision is not changed.

-   *Cause:* An attempt was made to change the level of precision after [`GET RUN TIME`](ABAPGET_RUN_TIME.html) using `SET RUN TIME CLOCK RESOLUTION`.
    *Runtime error:*\\ `SET_RUN_TIME_CLOCK_ERROR`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSET RUN TIME CLOCK RESOLUTION LOW. \\n\\ \\nGET RUN TIME FIELD FINAL(t1). \\nwait UP TO 1 SECONDS. \\nGET RUN TIME FIELD FINAL(t2). \\n\\ \\nout->write( t2 - t1 ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abenabap\_runtime\_measurements.html