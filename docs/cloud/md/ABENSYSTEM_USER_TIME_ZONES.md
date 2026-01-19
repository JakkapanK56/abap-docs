---
title: "ABENSYSTEM_USER_TIME_ZONES"
description: |
  ABENSYSTEM_USER_TIME_ZONES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSYSTEM_USER_TIME_ZONES.htm"
abapFile: "ABENSYSTEM_USER_TIME_ZONES.html"
keywords: ["do", "while", "if", "method", "class", "data", "ABENSYSTEM", "USER", "TIME", "ZONES"]
---

Two [time zones](ABENTIME_ZONE_GLOSRY.html) are preconfigured in AS ABAP, the [system time zone](ABENSYSTEM_TIME_ZONE_GLOSRY.html) and the [user time zone](ABENUSER_TIME_ZONE_GLOSRY.html).

If no user time zone is defined in the user master record, or the specified time zone is invalid or inactive, the default value from a system table is used.

The system time zone and user time zone are relevant for:

Determination of the user time zone using an attribute of the XCO time library. Usage of that time zone to create local dates and times from a current UTC time stamp and using methods of the XCO time library.

The system time and the system date are the local time and local date of an AS ABAP in the system time zone. They are produced by regular synchronizations of the clock of the [ABAP runtime server](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) and the clock of the database server. During synchronization, the ABAP runtime framework clock is set to the database server clock. Since this happens on all [AS instances](ABENAS_INSTANCE_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html), the ABAP runtime framework clock of an AS instance is synchronized with the clocks of all other AS instances and with the database system clock, and therefore shows the system time and system date of the entire AS ABAP.

The character-like system fields\\ `sy-uzeit` and `sy-datum` are provided with the system time and system date at certain times.

Despite their names, the methods `GET_SYSTEM_TIME` and `GET_SYSTEM_DATE` of the C1-contract released class `CL_ABAP_CONTEXT_INFO` do not return the system time and the system date. They return the current UTC time and UTC date instead.

Creation of an UTC time stamp from the system date and system time.

The user time and the user date are the local time and local date of the current user, which are calculated from the system time and the user time zone.

To determine the local time and local date from a [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) created using [`GET TIME STAMP`](ABAPGET_TIME-STAMP.html), the user time zone can be passed to the statement [`CONVERT TIME STAMP`](ABAPCONVERT_TIME-STAMP.html). An initial value for the time zone is implicitly set to *UTC* and not to the system time zone in `CONVERT TIME STAMP`.

Determination of a local date and a local time from an UTC time stamp.

-   The system time zone is the client-specific time zone of the [system time](ABENSYSTEM_TIME_GLOSRY.html) and the [system date](ABENSYSTEM_DATE_GLOSRY.html) and cannot be changed while the system is running.
-   The user time zone is a client-specific time zone that can be defined for the [user time](ABENUSER_TIME_GLOSRY.html) and [user date](ABENUSER_DATE_GLOSRY.html) of each individual user in the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html).

-   The system time zone and the user time zone of an AS ABAP can be retrieved with [time zone functions in ABAP CDS](ABENCDS_TIMEZONE_FUNCTIONS_V2.html) and [time zone functions in ABAP SQL](ABENSQL_TIMEZONE_FUNC.html).
-   The system time zone should not be used any more. Instead, UTC should be used for internal times and dates.
-   The [XCO time library](https://help.sap.com/docs/ABAP_PLATFORM_NEW/65de2977205c403bbc107264b8eccf4b/6213705cecd84757bf1badc19836a3ee) provides methods for working with times, dates and time zones.

-   System time and system date should not be used any more. Instead, UTC time and UTC date should be used, that can be retrieved from an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html).
-   The methods `TO_SYSTEM_TIMESTAMP` and `FROM_SYSTEM_TIMESTAMP` of class `CL_ABAP_UTCLONG` convert a [system date](ABENSYSTEM_DATE_GLOSRY.html) and a [system time](ABENSYSTEM_TIME_GLOSRY.html) in the [system time zone](ABENSYSTEM_TIME_ZONE_GLOSRY.html) to an UTC time stamp and vice versa.

FINAL(zonlo) = xco\_cp\_time=>time\_zone->user. \\n\\ \\nCONVERT UTCLONG utclong\_current( ) \\n INTO DATE FINAL(datlo) \\n TIME FINAL(timlo) \\n TIME ZONE zonlo->value. \\n\\ \\nFINAL(moment) = xco\_cp=>sy->moment( zonlo ). \\nFINAL(date\_time) = \\n moment->as( xco\_cp\_time=>format->abap )->value. \\nFINAL(date) = \\n moment->date->as( xco\_cp\_time=>format->abap )->value. \\nFINAL(time) = \\n moment->time->as( xco\_cp\_time=>format->abap )->value. \\n\\ \\nASSERT date = date\_time(8). \\nASSERT time = date\_time+8. \\n\\ \\nASSERT date = datlo. \\nASSERT time = timlo. CONVERT DATE cl\_demo\_date\_time=>get\_system\_date( ) \\n TIME cl\_demo\_date\_time=>get\_system\_time( ) \\n INTO UTCLONG FINAL(ts) \\n TIME ZONE cl\_demo\_date\_time=>get\_system\_time\_zone( ). \\n\\ \\ncl\_demo\_output=>display( |\\{ ts TIMESTAMP = ISO \\}| ). FINAL(tz) = cl\_demo\_date\_time=>get\_user\_time\_zone( ). \\n\\ \\nCONVERT UTCLONG utclong\_current( ) \\n INTO DATE FINAL(date) \\n TIME FINAL(time) \\n TIME ZONE tz. \\n\\ \\ncl\_demo\_output=>display( |\\{ date \\}, \\{ time \\} (\\{ tz \\})| ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abendate\_time\_oview.html