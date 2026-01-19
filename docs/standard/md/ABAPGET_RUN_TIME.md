---
title: "ABAPGET_RUN_TIME"
description: |
  ABAPGET_RUN_TIME - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_RUN_TIME.htm"
abapFile: "ABAPGET_RUN_TIME.html"
keywords: ["loop", "do", "if", "method", "class", "data", "ABAPGET", "RUN", "TIME"]
---

[Short Reference](ABAPGET_RUN_TIME_SHORTREF.html)

`GET RUN TIME FIELD rtime.`

When `GET RUN TIME` is executed for the first time after an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is created, the value 0 is passed to the variable `rtime`. After each further execution in the same internal session, the program runtime that has elapsed since the first execution is passed in microseconds to the variable `rtime`. The return value of the statement is of the data type `i`. The following can be specified for `rtime`:

Determination of the calculation time for calculating the tangent of 1. Since the runtime of the statement is less than one microsecond, the runtime of multiple executions in an inner loop is measured. The execution time for the loop itself is also measured to deduct it as an offset. These measurements are executed multiple times in an outer loop and the mean value is calculated using division by `n0`. Division by `ni` determines the runtime of an individual statement.

-   An existing variable of the data type `i` or a variable to which the type `i` can be converted.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of type `i` is declared.

-   To measure the runtime of program sections, a `GET RUN TIME` statement can be executed before and after the required section and then the difference of the results can be calculated. The restricted sequence of statements is referred to as the [measuring section](ABENMEASURING_SECTION_GLOSRY.html), and the duration calculated for it is called the [measuring interval](ABENMEASURING_INTERVALL_GLOSRY.html).
-   The statement `GET RUN TIME` does not accumulate the duration of execution for individual ABAP statements. Instead it determines actual points in time with respect to the processor time. In particular, when for differences between these points in time, the statement also takes into account the duration for which for an internal session is rolled out of the memory. In a conceptual sense, a time defined using `GET RUN TIME` can be viewed as a time stamp. Unlike real [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html)\\ [time stamps](ABENTIME_STAMP_GLOSRY.html), a time defined using `GET RUN TIME` is always precise to the microsecond, regardless of the platform. But on the other hand, it is restricted to the value range of the data type `i`.
-   The maximum resolution of the statement `GET RUN TIME` is a microsecond. Shorter measuring intervals cannot be determined reliably.
-   The [value range](ABENVALUE_RANGE_GLOSRY.html) of the return value of the statement must be respected. Measuring sections that are too large, that is, greater than 1000 s, should not be created, and also no measuring sections using accesses to external data or using dynpro calls and so on.
-   The statement [`SET RUN TIME CLOCK RESOLUTION`](ABAPSET_RUN_TIME_CLOCK_RESOLUTION.html) can be used to defined the measuring precision before the first execution of `GET RUN TIME`, which is used to determine the runtime.
-   The class `CL_ABAP_RUNTIME` provides methods for creating objects with the interface `IF_ABAP_RUNTIME` whose method `GET_RUNTIME` can be used to execute multiple runtime measurements with different resolutions in an internal session (see also [class for runtime measurements](ABENCL_ABAP_RUNTIME.html)).
-   The runtime of program sections can also be determined using the tool [runtime analysis](ABENRUNTIME_ANALYSIS_GLOSRY.html).

DATA: t0 TYPE i, \\n no TYPE i VALUE 100, \\n ni TYPE i VALUE 1000. \\n\\ \\nDO no TIMES. \\n GET RUN TIME FIELD FINAL(t1). \\n DO ni TIMES. \\n FINAL(res) = tan( 1 ). \\n ENDDO. \\n GET RUN TIME FIELD FINAL(t2). \\n GET RUN TIME FIELD FINAL(t3). \\n DO ni TIMES. \\n ENDDO. \\n GET RUN TIME FIELD FINAL(t4). \\n t0 += ( t2 - t1 ) - ( t4 - t3 ). \\nENDDO. \\n\\ \\nFINAL(tm) = CONV decfloat34( t0 / ni / no ). abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_tests.html abenabap\_runtime\_measurements.html