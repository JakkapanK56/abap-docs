---
title: "ABAPCONVERT_DATE_UTCLONG"
description: |
  ABAPCONVERT_DATE_UTCLONG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCONVERT_DATE_UTCLONG.htm"
abapFile: "ABAPCONVERT_DATE_UTCLONG.html"
keywords: ["do", "if", "catch", "class", "data", "types", "ABAPCONVERT", "DATE", "UTCLONG"]
---

[Short Reference](ABAPCONVERT_UTCLONG_SHORTREF.html)

`CONVERT DATE dat          TIME tim [FRACTIONAL SECONDS fs]\          [DAYLIGHT SAVING TIME dst]\          TIME ZONE tz          INTO UTCLONG time_stamp.`

This statement converts a date specified in `dat`, a time specified in `tim`, optionally with fractions of seconds specified in `fs`, and a daylight saving time marker specified in `dst` for the time zone specified in `tz` into an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html) and assigns the result to a [time stamp field](ABENTIMESTAMP_FIELD_GLOSRY.html)\\ `time_stamp`. The conversion is performed in accordance with the [rules for time zones](ABENTIME_ZONE_RULES.html).

`dat`, `tim`, `fs`, `dst`, and `tz` are [functional operand positions](ABENFUNCTIONAL_POSITION_GLOSRY.html).

The following can be specified for `time_stamp`:

If the following combinations of values are specified for `DATE` and `TIME`

no time shift is calculated when the time stamp is created.

If `dat` and `tim` contain valid values but produce an invalid time stamp when combined with a valid time zone in `tz`, an exception of the class `CX_SY_CONVERSION_NO_DATE_TIME` is raised.

For the time zone *EST*, the settings apply that are described in the example for [`CONVERT UTCLONG`](ABAPCONVERT_UTCLONG.html) in the rule set for time stamps. By specifying the daylight savings time and standard time, two different UTC time stamps `2019-11-03T05:30:00.0000000Z` and `2019-11-03T06:30:00.0000000Z` are created from one specified local time. Without the addition `DAYLIGHT SAVING TIME`, the UTC time stamp `2019-11-03T05:30:00.0000000Z` is created.

The example demonstrates the special handling of the invalid time `240000`.

[Convert Time Stamp to Time Stamp Field](ABENCONVERT_UTC_ABEXA.html).

`CX_SY_CONVERSION_NO_DATE`

`CX_SY_CONVERSION_NO_TIME`

`CX_SY_CONVERSION_NO_DATE_TIME`

`CX_PARAMETER_INVALID_RANGE`

-   An operand of the type `d`, which contains a valid date, must be specified for `dat`. If `dat` contains an [invalid value](ABENCHAR_DATE_TIME_FIELDS_VALIDITY.html), a catchable exception of the class `CX_SY_CONVERSION_NO_DATE` is raised. The days from October 5, 1582 through October 14, 1582 that are missing due to the switch from the Julian to the Gregorian calendar are considered invalid values here.
-   An operand of the type `t`, which contains a valid time must be specified for `tim`. In `tim`, only the values `00` to `23` are valid for the hours, and `00` to `59` for the minutes and seconds, as well as the value *240000*. If `tim` contains an [invalid value](ABENCHAR_DATE_TIME_FIELDS_VALIDITY.html), a catchable exception of the class `CX_SY_CONVERSION_NO_TIME` is raised. The value *240000* causes the date in `dat` to be increased by one day and the time to be set to `000000`.
-   An operand of the type `decfloat34`, which contains fractions of seconds with up to seven decimal places, can be specified for `fs`. The value of `fs` must be in the range of 0.0000000 to 0.9999999, otherwise a catchable exception of the class `CX_SY_CONVERSION_NO_DATE_TIME` is raised. If the addition `FRACTIONAL SECONDS` is not specified, the value 0 is used implicitly.
-   An operand of the type `c` with length 1 that contains the value *X* or blank can be specified for `dst` to control the behavior of the statement with respect to daylight saving time.

-   If `dst` has the value *X*, the value of `tim` is interpreted as the specified time in daylight savings time.
-   If `dst` has the value blank, the value of `tim` is interpreted as the specified time in standard time.
-   If `dst` has neither the value *X* nor blank, a catchable exception of the class `CX_PARAMETER_INVALID_RANGE` is raised.

-   If the time zone specified in `tz` does not have a daylight saving time rule (for example, when *UTC* is specified), the addition `DAYLIGHT SAVING TIME` is ignored. If the addition `DAYLIGHT SAVING TIME` is not specified, the value of `dst` is set to *X* implicitly, if the specifications in `tim` and `dat` are in daylight saving time and to blank for specifications in standard time. In the double hour that is caused by switching from daylight saving time to standard time, `tim` and `dat` are interpreted as a time specification in daylight saving time and `dst` is set to the value *X*. If the value in `dst` does not match the specifications in `tim` and `dat`, that is, if the value *X* is specified in standard time and the value blank in daylight saving time, a catchable exception of the class `CX_SY_CONVERSION_NO_DATE_TIME` is raised.
-   A character-like operand that contains a [time zone](ABENTIME_ZONE_GLOSRY.html) from the DDIC database table `TTZZ` must be specified for `tz`.

-   If `tz` is initial, no time shift is calculated when converting to the time stamp.
-   If the specified time zone is not found in the DDIC database table `TTZZ`, a catchable exception of the class `CX_SY_CONVERSION_NO_DATE_TIME` is raised.
-   If the [rule set](ABENTIME_ZONE_RULES.html) for the specified time zone is incomplete, an uncatchable exception is raised.

-   An existing variable of the data type [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html).
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of type [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html) is declared.

-   *00000000* as `dat` and *000000* as `tim`
-   *00010101* as `dat` and *000000* as `tim`
-   *99991231* as `dat` and *235959* as `tim`

-   Specifying daylight saving time and standard time after `DAYLIGHT SAVING TIME` enables different UTC time stamps to be created from identical local time stamps within the double hour when switching from daylight saving time to standard time.
-   When switching from standard to daylight saving time, one hour is usually omitted. For example, in the *CET* time zone in the year 2009, on March 29, the hour between 02:00 and 03:00 does not exist. Any attempt to convert a time during this missing hour raises an exception.
-   Usually, an invalid time stamp can be created from a valid date and time only by combining the first valid date 00010101 with time zones east of UTC or the last valid date 99991231 with time zones west of UTC.
-   An initial time zone `tz` corresponds to `UTC` only if the tables of the [rules for time zones](ABENTIME_ZONE_RULES.html) are filled correctly for the time zone UTC.
-   The statement `CONVERT INTO UTCLONG` does not set the return value `sy-subrc`.
-   Current user-specific local times and the associated local time zones are stored in the system fields [`sy-datlo`](ABENTIME_SYSTEM_FIELDS.html), [`sy-timlo`](ABENTIME_SYSTEM_FIELDS.html), and [`sy-zonlo`](ABENTIME_SYSTEM_FIELDS.html).

-   *Cause:* An invalid date was specified for `DATE`.
    *Runtime error:*\\ `CONVT_INVALID_DATE`

-   *Cause:* An invalid time was specified for `TIME`.
    *Runtime error:*\\ `CONVT_INVALID_TIME`

-   *Cause:* An invalid value was specified for `FRACTIONAL SECONDS`.
    *Runtime error:*\\ `CONVT_INVALID_FRAC_SEC`
-   *Cause:* The value for `DAYLIGHT SAVING TIME` does not fit the values for `DATE` and `TIME`.
    *Runtime error:*\\ `INVALID_POINT_IN_TIME`
-   *Cause:* An invalid time stamp would be generated.
    *Runtime error:*\\ `INVALID_POINT_IN_TIME`
-   *Cause:* Invalid time zone in `tz`.
    *Runtime error:*\\ `INVALID_TIME_ZONE`

-   *Cause:* An invalid value was specified for `DAYLIGHT SAVING TIME`.
    *Runtime error:*\\ `PARAMETER_INVALID_RANGE`

-   *Cause:* Incomplete set of rules for the specified time zone.
    *Runtime error:*\\ `CONVERT_TSTMP_INCONSISTENT_TAB`
-   *Cause:* An operand with an incorrect type is being used.
    *Runtime error:*\\ `TCHK_TYPE_LOAD`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(dat) = CONV d( '20191103' ). \\nFINAL(tim) = CONV t( '013000' ). \\n\\ \\nCONVERT DATE dat \\n TIME tim \\n DAYLIGHT SAVING TIME 'X' \\n TIME ZONE 'EST' \\n INTO UTCLONG DATA(time\_stamp). \\nout->write\_data( time\_stamp ). \\n\\ \\nCONVERT DATE dat \\n TIME tim \\n DAYLIGHT SAVING TIME ' ' \\n TIME ZONE 'EST' \\n INTO UTCLONG time\_stamp. \\nout->write\_data( time\_stamp ). \\n\\ \\nCONVERT DATE dat \\n TIME tim \\n TIME ZONE 'EST' \\n INTO UTCLONG time\_stamp. \\nout->write\_data( time\_stamp ). \\n\\ \\nout->display( ). FINAL(invalid\_time1) = '240000'. \\nFINAL(invalid\_time2) = '000000'. \\n\\ \\nCONVERT DATE CONV d( '20191104' ) \\n TIME CONV t( invalid\_time1 ) \\n DAYLIGHT SAVING TIME ' ' \\n TIME ZONE 'UTC' \\n INTO UTCLONG FINAL(time\_stamp1). \\n\\ \\nCONVERT DATE CONV d( '20191105' ) \\n TIME CONV t( invalid\_time2 ) \\n DAYLIGHT SAVING TIME ' ' \\n TIME ZONE 'UTC' \\n INTO UTCLONG FINAL(time\_stamp2). \\n\\ \\nASSERT time\_stamp1 = time\_stamp2. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abentime\_stamps.html abenutclong.html abentimestamp\_conversions.html