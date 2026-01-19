---
title: "ABAPCONVERT_UTCLONG"
description: |
  ABAPCONVERT_UTCLONG - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCONVERT_UTCLONG.htm"
abapFile: "ABAPCONVERT_UTCLONG.html"
keywords: ["do", "if", "catch", "class", "data", "types", "ABAPCONVERT", "UTCLONG"]
---

`CONVERT UTCLONG time_stamp          INTO [DATE dat]\               [TIME tim [FRACTIONAL SECONDS fs]]\               [DAYLIGHT SAVING TIME dst]\               TIME ZONE tz.`

This statement handles the [time stamp](ABENTIME_STAMP_GLOSRY.html) contained in a [time stamp field](ABENTIMESTAMP_FIELD_GLOSRY.html)\\ `time_stamp` as an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html) and converts it to the local date and local time of the time zone specified in `tz` assigning the result to the variables `dat`, `tim`, and `dst`. At least one of the additions `DATE`, `TIME`, or `DAYLIGHT SAVING TIME` must be specified. The conversion is performed in accordance with the [rules for time zones](ABENTIME_ZONE_RULES.html).

`time_stamp` is a [time-stamp-like expression position](ABENTIMESTAMP_LIKE_EXPR_POS_GLOSRY.html) and `tz` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html).

Regardless of the time zone specified, an initial time stamp generates type-dependent [initial values](ABENINITIAL_VALUE_GLOSRY.html) in all target fields. If the time stamp has the minimum value *0001-01-01T00:00:00.0000000* or is in the last possible second *9999-12-31T23:59:59.fffffff* no time shift is calculated. A time stamp whose value is greater than or equal to the last second or is between *9999-12-31 23:59:59.0000000* and *9999-12-31 23:59:59.9999999* is handled like the maximum value *9999-12-31 23:59:59.9999999*.

If `time_stamp` contains a valid value but results in an invalid date in combination with a valid time zone in `tz`, a catchable exception of the class `CX_SY_CONVERSION_NO_DATE_TIME` is raised.

For the time zone *EST* in the DDIC database table `TTZZ`, a shift of -5 hours from the UTC reference time is entered in the DDIC database table `TTZR`. In the DDIC database table `TTZDV`, the end of daylight saving time is defined as the first Sunday in November at 02:00 using the key *USA*. In 2019, the first Sunday is November 03. With these settings in the rule set, the two conversions below both result in the same local time of *01:30:00*. The first conversion shows that the time is still in daylight saving time.

Convert Time Stamp to Time Stamp Field.

`CX_SY_CONVERSION_NO_DATE_TIME`

-   The operand `time_stamp` must be of the type [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html), which contains a valid time stamp. If `time_stamp` does not contain a valid time stamp, a catchable exception of the class `CX_SY_CONVERSION_NO_DATE_TIME` is raised.
-   The operand `tz` must be character-like and contain a [time zone](ABENTIME_ZONE_GLOSRY.html) from the DDIC database table `TTZZ`.

-   If `tz` is initial, the UTC time stamp is not converted to a different time zone. The local date and time in the target fields correspond to the UTC reference time.
-   If the specified time zone is not found in the DDIC database table `TTZZ`, a catchable exception of the class `CX_SY_CONVERSION_NO_DATE_TIME` is raised, unless the time stamp is initial.
-   If the [rule set](ABENTIME_ZONE_RULES.html) for the specified time zone is incomplete, an uncatchable exception is raised.

-   The local date is assigned to `dat` as a return value of the data type `d`. The following can be specified for `dat`:

-   An existing variable of type `d`.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of data type `d` is declared.

-   The local time without the fractions of seconds is assigned to `tim` as a return value of data type `t`. The following can be specified for `tim`:

-   An existing variable of type `t`.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of data type `t` is declared.

-   The fractions of seconds are assigned to `fs` as a return value of the data type `decfloat34`. The following can be specified for `fs`:

-   An existing variable of the type `decfloat34`.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of data type `decfloat34` is declared.

-   If the time stamp in `time_stamp` for the time zone specified in `tz` is in daylight saving time, `dst` is given the value *X*. Otherwise it is given the value blank. The following can be specified for `dst`:

-   An existing variable of the type `c` with length 1
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of data type `c` with length 1 is declared.

-   A current UTC time stamp can be created with the built-in function [`utclong_current`](ABENUTCLONG_CURRENT.html).
-   The return value for the daylight saving time in `dst` can be used to distinguish duplicate local time specifications that occur when UTC time stamps are converted into local time within the double hour in the switch between daylight saving and standard time.
-   Usually, an invalid date and the associated exception can be created from a valid time stamp only by combining the first valid day with time zones west of UTC or the last valid day with time zones east of UTC.
-   An initial time zone `tz` only corresponds to `UTC` if the tables of the [rules for time zones](ABENTIME_ZONE_RULES.html) are filled correctly for the time zone UTC.
-   The statement `CONVERT INTO UTCLONG` does not set the return value `sy-subrc`.

-   *Cause:* Invalid time zone in `tz`.
    *Runtime error:*\\ `INVALID_TIME_ZONE`
-   *Cause:* An invalid date would be generated.
    *Runtime error:*\\ `LOCAL_TIMESTAMP_OUT_OF_RANGE`
-   *Cause:* The specified time stamp is invalid.
    *Runtime error:*\\ `INVALID_UTCLONG`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nCONVERT UTCLONG CONV utclong( '2019-11-03 05:30:00' ) \\n INTO DATE DATA(dat) \\n TIME DATA(tim) \\n DAYLIGHT SAVING TIME DATA(dst) \\n TIME ZONE 'EST'. \\nout->write( |\\{ dat DATE = ISO \\} \\{ \\n tim TIME = ISO \\} \\{ dst \\}| ). \\n\\ \\nCONVERT UTCLONG CONV utclong( '2019-11-03 06:30:00' ) \\n INTO DATE dat \\n TIME tim \\n DAYLIGHT SAVING TIME dst \\n TIME ZONE 'EST'. \\nout->write( |\\{ dat DATE = ISO \\} \\{ \\n tim TIME = ISO \\} \\{ dst \\}| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abentime\_stamps.html abenutclong.html abentimestamp\_conversions.html