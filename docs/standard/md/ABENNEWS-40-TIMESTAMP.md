---
title: "ABENNEWS-40-TIMESTAMP"
description: |
  ABENNEWS-40-TIMESTAMP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-40-TIMESTAMP.htm"
abapFile: "ABENNEWS-40-TIMESTAMP.html"
keywords: ["if", "data", "ABENNEWS", "TIMESTAMP"]
---

When UTC time stamps were introduced in ABAP in ABAP release 4.0, special attention was paid to the following:

A current UTC time stamp can be created in an `ABAP` program using the new variant [`GET TIME STAMP FIELD f`](ABAPGET_TIME-STAMP.html). It is always globally unique since it is stored in [UTC](ABENUTC_GLOSRY.html) time and not in local time.

An UTC time stamp can be generated with normal precision (to one second), or accurate to around one microsecond (`1E-6` seconds).

To convert an UTC time stamp to local time or to ABAP time and date format (data type T or D), the following variants should be used:

[`CONVERT TIME STAMP tst INTO [DATE|TIME] ...`](ABAPCONVERT_TIME-STAMP.html)

and

[`WRITE tst TIME ZONE tz`](ABAPWRITE_TO_OPTIONS.html)

See also:

[Time Stamps in Packed Numbers](ABENTIME_STAMPS_PACKED.html)

-   Making the time stamp meaningful to a user in his or her particular time zone
-   Making objects uniquely identifiable by their time stamp by guaranteeing a higher level of precision

abenabap.html abennews.html abennews-4.html abennews-40.html