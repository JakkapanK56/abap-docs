---
title: "ABAPCONVERT_UTCLONG_SHORTREF"
description: |
  ABAPCONVERT_UTCLONG_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCONVERT_UTCLONG_SHORTREF.htm"
abapFile: "ABAPCONVERT_UTCLONG_SHORTREF.html"
keywords: ["if", "case", "ABAPCONVERT", "UTCLONG", "SHORTREF"]
---

[Reference](ABAPCONVERT_UTCLONG.html)

`CONVERT \{ UTCLONG time_stamp            INTO [DATE dat]\                 [TIME tim [FRACTIONAL SECONDS fs]]\                 [DAYLIGHT SAVING TIME dst]\                 TIME ZONE tz \}\        |\ \{ DATE dat            TIME tim [FRACTIONAL SECONDS fs]\            [DAYLIGHT SAVING TIME dst]\            TIME ZONE tz            INTO UTCLONG time_stamp \}.`

Converts either a [UTC](ABENUTC_GLOSRY.html)\\ [time stamp](ABENTIME_STAMP_GLOSRY.html) in a [time stamp field](ABENTIMESTAMP_FIELD_GLOSRY.html)\\ `time_stamp` to dates and times and returns the results in `dat`, `tim`, and `fs` or converts a date or time in `dat`, `tim`, and `fs` to a [UTC](ABENUTC_GLOSRY.html)\\ [time stamp](ABENTIME_STAMP_GLOSRY.html) with respect to a time zone `tz` and returns the result in a [time stamp field](ABENTIMESTAMP_FIELD_GLOSRY.html)\\ `time_stamp`.

-   `DAYLIGHT SAVING TIME dst`\\
    For `CONVERT UTCLONG`, specifies whether the time stamp is in daylight saving time. In the case of `CONVERT INTO UTCLONG`, specifies whether the time is in daylight saving time.

abenabap.html abenabap\_reference.html abenabap\_shortref.html