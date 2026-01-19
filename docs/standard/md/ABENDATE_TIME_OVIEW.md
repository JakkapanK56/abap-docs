---
title: "ABENDATE_TIME_OVIEW"
description: |
  ABENDATE_TIME_OVIEW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDATE_TIME_OVIEW.htm"
abapFile: "ABENDATE_TIME_OVIEW.html"
keywords: ["if", "try", "data", "ABENDATE", "TIME", "OVIEW"]
---

Dates, times, and time stamps specify times with varying levels of precision.

The relationship between the local date and local time on the one hand, and global [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) on the other, is established by a set of time zone rules, which are stored in database tables. These rules also respect daylight saving time.

-   A date or calendar date is a time specification for a calendar that is exact to a day, week, or month. AS ABAP always implicitly references the Gregorian calendar that is valid virtually worldwide. Output can be converted to [country-specific calendars](ABENCOUNTRY_FORMATS.html). Dates are generally interpreted as local dates that are valid in the current time zone.
-   A time is a time of day specification that is exact to a second or minute with respect to a day. AS ABAP always saves times in 24-hour format. The output can have a [country-specific format](ABENCOUNTRY_FORMATS.html). Time specifications are generally interpreted as local times that are valid in the current time zone.
-   A [time stamp](ABENTIME_STAMPS.html) specifies a combined date and time that is exact to fractions of seconds or seconds with respect to a reference time. AS ABAP always implicitly references the [UTC](ABENUTC_GLOSRY.html) reference time. The values of [time stamp fields](ABENTIMESTAMP_FIELD_GLOSRY.html) or [time stamps in packed numbers](ABENTIME_STAMPS_PACKED.html) are always handled as [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html). A time stamp can be transformed to a local date and local time using statements and functions for which the required time zone is specified.

-   [Rules for Time Zones](ABENTIME_ZONE_RULES.html)
-   [System Time Zone and User Time Zone](ABENSYSTEM_USER_TIME_ZONES.html)

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html