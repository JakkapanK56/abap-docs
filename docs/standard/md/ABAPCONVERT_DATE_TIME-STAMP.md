---
title: "ABAPCONVERT_DATE_TIME-STAMP"
description: |
  ABAPCONVERT_DATE_TIME-STAMP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCONVERT_DATE_TIME-STAMP.htm"
abapFile: "ABAPCONVERT_DATE_TIME-STAMP.html"
keywords: ["do", "if", "case", "catch", "data", "types", "ABAPCONVERT", "DATE", "TIME", "STAMP"]
---

[Short Reference](ABAPCONVERT_TIME_STAMP_SHORTREF.html)

`CONVERT DATE dat          [TIME tim [DAYLIGHT SAVING TIME dst]]\          INTO TIME STAMP time_stamp TIME ZONE tz.`

This statement converts a date specified in `dat`, a time specified in `tim`, and a daylight saving time marker specified in `dst` of the time zone specified in `tz` into an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html) assigning it as a [time stamp in a packed number](ABENTIME_STAMPS_PACKED.html) to the variable `time_stamp`. The conversion is performed in accordance with the [rules for time zones](ABENTIME_ZONE_RULES.html).

`dat`, `tim`, `dst`, and `tz` are [functional operand positions](ABENFUNCTIONAL_POSITION_GLOSRY.html).

The following can be specified for `time_stamp`:

If `dat` and `tim` contain valid values but produce an invalid time stamp when combined with a valid time zone in `tz`, `time_stamp` is not modified and `sy-subrc` is set to 12.

The following example for `CONVERT INTO TIME STAMP` for time stamps in packed numbers functions in exactly the same way as the example for [`CONVERT INTO UTCLONG`](ABAPCONVERT_DATE_UTCLONG.html) for time stamps in time stamp fields.

-   `dat` expects a data object of the type `d` that contains a valid date. Operands of other types are converted to `d`. If `dat` contains an [invalid value](ABENCHAR_DATE_TIME_FIELDS_VALIDITY.html), `time_stamp` is not changed and `sy-subrc` is set to 12. The days from October 5, 1582 through October 14, 1582 that are missing due to the switch from the Julian to the Gregorian calendar are not considered invalid values here. They produce the same results as the conversion of the available days from October 15, 1582 through October 24, 1582.
-   `tim` expects a data object of the type `t` that contains a valid time. Operands of other types are converted to `t`. If the addition `TIME` is not specified, the system implicitly uses the initial time *000000* for `tim`. In `tim`, only the values 00 to 23 for the hours, and 00 to 59 for the minutes are valid. If `tim` contains an [invalid value](ABENCHAR_DATE_TIME_FIELDS_VALIDITY.html), `time_stamp` is not changed and `sy-subrc` is set to 12.
-   `dst` can be specified as a data object of the type `c` with length 1 that contains the value *X* or blank. This controls the behavior of the statement with respect to daylight saving time.

-   If `dst` has the value *X*, the value of `tim` is interpreted as the specified time in daylight saving time.
-   If `dst` has the value blank, the value of `tim` is interpreted as the specified time in standard time.
-   If `dst` has neither the value *X* nor blank, `time_stamp` is not changed and `sy-subrc` is set to 12.

-   If the time zone specified in `tz` does not have a daylight saving time rule (for example when *UTC* is specified), the addition `DAYLIGHT SAVING TIME` is ignored. If the addition `DAYLIGHT SAVING TIME` is not specified, the value of `dst` is set to *X* implicitly if the specifications in `tim` and `dat` are in daylight saving time and to blank for specifications in standard time. In the double hour that is caused by switching from daylight saving time to standard time, `tim` and `dat` are interpreted as a time in daylight saving time and `dst` is set to the value *X*. If the value in `dst` does not match the data in `tim` and `dat`, that is, if the value *X* is specified in standard time and the value blank in daylight saving time, `time_stamp` is not changed and `sy-subrc` is set to 12.
-   `tz` expects a character-like data object that contains a [time zone](ABENTIME_ZONE_GLOSRY.html) from the DDIC database table `TTZZ`.

-   If `tz` is initial, no time shift is calculated when converting to the time stamp. In this case, `sy-subrc` is set to 4.
-   If the specified time zone is not found in the DDIC database table `TTZZ`, `time_stamp` remains unchanged and `sy-subrc` is set to 8.
-   If the [rule set](ABENTIME_ZONE_RULES.html) for the specified time zone is incomplete, an uncatchable exception is raised.

-   An existing variable of the data type `TIMESTAMP` or `TIMESTAMPL` from the ABAP Dictionary, in accordance with ABAP type `p` with length 8 or `p` with length 11 and seven decimal places. If `time_stamp` has the data type `TIMESTAMPL` for the [long form](ABENTIME_STAMPS_PACKED.html), the fractions of seconds in the decimal places are initialized when the assignment is made.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of type `TIMESTAMP` is declared.

-   Specifying daylight saving time and standard time after `DAYLIGHT SAVING TIME` enables different UTC time stamps to be created from identical local time stamps within the double hour when switching from daylight saving time to standard time.
-   When the switch is made from standard to daylight saving time, one hour is usually omitted. For example, in the *CET* time zone in the year 2009, on March 29, the hour between 02:00 and 03:00 does not exist. If an attempt is made to convert a time during this missing hour, the statement is always terminated with the value 12 for `sy-subrc` because this time or this local time stamp does not exist.
-   Usually, an invalid time stamp can be created from a valid date and time only by combining the first valid date 00010101 with time zones east of UTC or the last valid date 99991231 with time zones west of UTC.
-   An initial time zone `tz` corresponds to `UTC` only if the tables of the [rules for time zones](ABENTIME_ZONE_RULES.html) are filled correctly for the time zone UTC.
-   Current user-specific local times and the corresponding local time zones are stored in the system fields [`sy-datlo`](ABENTIME_SYSTEM_FIELDS.html), [`sy-timlo`](ABENTIME_SYSTEM_FIELDS.html), and [`sy-zonlo`](ABENTIME_SYSTEM_FIELDS.html).

-   *Cause:* Inconsistent control tables for the conversion.
    *Runtime error:*\\ `CONVERT_TSTMP_INCONSISTENT_TAB`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(dat) = CONV d( '20191103' ). \\nFINAL(tim) = CONV t( '013000' ). \\n\\ \\nCONVERT DATE dat TIME tim DAYLIGHT SAVING TIME 'X' \\n INTO TIME STAMP DATA(time\_stamp) TIME ZONE 'EST'. \\nout->write\_data( time\_stamp ). \\n\\ \\nCONVERT DATE dat TIME tim DAYLIGHT SAVING TIME ' ' \\n INTO TIME STAMP time\_stamp TIME ZONE 'EST'. \\nout->write\_data( time\_stamp ). \\n\\ \\nCONVERT DATE dat TIME tim \\n INTO TIME STAMP time\_stamp TIME ZONE 'EST'. \\nout->write\_data( time\_stamp ). \\n\\ \\nout->display( ). `sy-subrc` **Meaning** 0 Local time of specified time zone was converted to time stamp and assigned to the target field 4 The specified time was converted to a time stamp without time shift and assigned to the target field. 8 The specified time could not be converted because the specified time zone does not exist in the DDIC database table `TTZZ` 12 The specified time could not be converted because `dat`, `tim`, or `dst` contain invalid or inconsistent values. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abentime\_stamps.html abentime\_stamps\_packed.html