---
title: "ABAPCONVERT_TIME_STAMP_SHORTREF"
description: |
  ABAPCONVERT_TIME_STAMP_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCONVERT_TIME_STAMP_SHORTREF.htm"
abapFile: "ABAPCONVERT_TIME_STAMP_SHORTREF.html"
keywords: ["if", "case", "ABAPCONVERT", "TIME", "STAMP", "SHORTREF"]
---

[Reference](ABAPCONVERT_TIME-STAMP.html)

`CONVERT \{ TIME STAMP time_stamp TIME ZONE tz            INTO [DATE dat]\ [TIME tim]\ [DAYLIGHT SAVING TIME dst]\ \}\        |\ \{ DATE dat [TIME tim [DAYLIGHT SAVING TIME dst]]\            INTO TIME STAMP time_stamp TIME ZONE tz \}.`

Converts either a [UTC](ABENUTC_GLOSRY.html)\\ [time stamp](ABENTIME_STAMP_GLOSRY.html) represented as a packed number in `time_stamp` to date/time information and passes the result to `dat` and `tim`, or converts date/time information in `dat` and `tim` with regard to a time zone `tz` to a [UTC](ABENUTC_GLOSRY.html)\\ [time stamp](ABENTIME_STAMP_GLOSRY.html) and passes the result to `time_stamp`.

-   `DAYLIGHT SAVING TIME dst`\\
    In the case of `CONVERT TIME STAMP`, specifies whether the time stamp is in daylight saving time. In the case of `CONVERT INTO TIME STAMP`, specifies whether the time is in daylight savings time.

abenabap.html abenabap\_reference.html abenabap\_shortref.html