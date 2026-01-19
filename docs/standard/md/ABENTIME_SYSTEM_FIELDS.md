---
title: "ABENTIME_SYSTEM_FIELDS"
description: |
  ABENTIME_SYSTEM_FIELDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTIME_SYSTEM_FIELDS.htm"
abapFile: "ABENTIME_SYSTEM_FIELDS.html"
keywords: ["update", "if", "data", "ABENTIME", "SYSTEM", "FIELDS"]
---

The following table shows the [system fields](ABENSYSTEM_FIELD_GLOSRY.html) that contain information about date and time.

The values of all system fields in this table are set implicitly when the program is started, every time a [screen layout](ABENSCREEN_GLOSRY.html) of a [dynpro](ABENDYNPRO_GLOSRY.html) is sent, and when the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is changed. The last column of the table shows which of the system fields can be updated explicitly using the statement [`GET TIME`](ABAPGET_TIME.html).

The content of `sy-zonlo` is the user time zone described under [System Time Zone and User Time Zone](ABENSYSTEM_USER_TIME_ZONES.html). The local values of `sy-datlo` and `sy-timlo` that are related to the user time zone are determined from the [system time](ABENSYSTEM_TIME_GLOSRY.html) and the [system date](ABENSYSTEM_DATE_GLOSRY.html). If `sy-zonlo` is initial, `sy-timlo` and `sy-datlo` have the same values as `sy-uzeit` and `sy-datum`.

If the [system time zone](ABENSYSTEM_TIME_ZONE_GLOSRY.html) is the same as the [user time zone](ABENUSER_TIME_ZONE_GLOSRY.html), the corresponding system fields for system date and user date or system time and user time must be the same.

DATA tz TYPE timezone. \\nCALL FUNCTION 'GET\_SYSTEM\_TIMEZONE' \\n IMPORTING \\n timezone = tz. \\n\\ \\nIF tz = sy-zonlo. \\n ASSERT sy-datum = sy-datlo. \\n ASSERT sy-uzeit = sy-timlo. \\nENDIF. **System Field** **Type** **Length** **Content** `GET TIME`\\ `sy-datlo` d - [User date](ABENUSER_DATE_GLOSRY.html) \\ *X*\\ `sy-datum` d - [System date](ABENSYSTEM_DATE_GLOSRY.html) \\ `X`\\ `sy-dayst` c 1 Flag for daylight saving time in the [system time zone](ABENSYSTEM_TIME_ZONE_GLOSRY.html). During daylight saving time, *X*, otherwise blank. `-`\\ `sy-fdayw` b - Factory calendar weekday in the [system time zone](ABENSYSTEM_TIME_ZONE_GLOSRY.html). *1* for Monday, ..., *5* for Friday. `-`\\ `sy-timlo` t - [User time](ABENUSER_TIME_GLOSRY.html) *X*\\ `sy-tzone` i - Time difference between the [system time](ABENSYSTEM_TIME_GLOSRY.html) and [UTC](ABENUTC_GLOSRY.html) reference time in seconds, ignoring daylight saving time. `-`\\ `sy-uzeit` t - [System time](ABENSYSTEM_TIME_GLOSRY.html) `X`\\ `sy-zonlo` c 6 [User time zone](ABENUSER_TIME_ZONE_GLOSRY.html) `-` abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html