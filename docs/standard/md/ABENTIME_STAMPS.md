---
title: "ABENTIME_STAMPS"
description: |
  ABENTIME_STAMPS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTIME_STAMPS.htm"
abapFile: "ABENTIME_STAMPS.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENTIME", "STAMPS"]
---

This section describes the representation of time-zone-independent [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) and the statements used for accessing such time stamps. There are two ways in which UTC time stamps can be handled in ABAP:

Time stamps of the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) are [POSIX time stamps](ABENPOSIX_TIMESTAMP_GLOSRY.html) independent of time zone. This means, especially in conversions they are implicitly handled as [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html).

-   [Time Stamp Fields with Time Stamp Type](ABENUTCLONG.html)
-   [Time Stamps in Packed Numbers](ABENTIME_STAMPS_PACKED.html)

-   In new programs, it is recommended that UTC time stamps in time stamp fields are used.
-   The [system class for time stamps in packed numbers](ABENCL_ABAP_TSTMP.html) contains methods for the conversion between the two representation types for UTC time stamps. These are necessary if time stamp fields are used in new programs, but existing repositories or interfaces must be accessed.
-   There are no UTC time stamps for the missing days that exist due to the switch from the Julian to the Gregorian calendar. The UTC time stamp *1582-10-04T23:59:59.9999999* is followed by the UTC time stamp *1582-10-15T00:00:00.0000000*.
-   The [POSIX time stamps](ABENPOSIX_TIMESTAMP_GLOSRY.html) of ABAP do not support [leap seconds](ABENLEAP_SECOND_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html