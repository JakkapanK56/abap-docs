---
title: "ABENTIME_ZONE_RULES"
description: |
  ABENTIME_ZONE_RULES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTIME_ZONE_RULES.htm"
abapFile: "ABENTIME_ZONE_RULES.html"
keywords: ["if", "data", "ABENTIME", "ZONE", "RULES"]
---

Conversion of the UTC reference time to the local date and the local time zone and vice versa, is based on a set of rules stored in AS ABAP system tables that can be accessed using [CDS views](ABENCDS_VIEW_GLOSRY.html). Conversions of this kind are caused by:

The names of all associated tables start with `TTZ`, They contain:

-   The statements [`CONVERT UTCLONG`](ABAPCONVERT_UTCLONG.html), [`CONVERT INTO UTCLONG`](ABAPCONVERT_DATE_UTCLONG.html), [`CONVERT TIME STAMP`](ABAPCONVERT_TIME-STAMP.html), and [`CONVERT INTO TIME STAMP`](ABAPCONVERT_DATE_TIME-STAMP.html).
-   The formatting option [`TIMEZONE`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) for string templates.

-   A list of possible time zones.
-   A list of possible rules for the time difference between time zones and the UTC reference time.
-   A list of all possible daylight saving time rules.

-   A list of fixed daylight saving time rules.
-   A list of variable daylight saving time rules

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abendate\_time\_oview.html