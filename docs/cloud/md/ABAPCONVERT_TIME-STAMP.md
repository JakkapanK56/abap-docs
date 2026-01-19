---
title: "ABAPCONVERT_TIME-STAMP"
description: |
  ABAPCONVERT_TIME-STAMP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCONVERT_TIME-STAMP.htm"
abapFile: "ABAPCONVERT_TIME-STAMP.html"
keywords: ["do", "if", "case", "catch", "data", "types", "ABAPCONVERT", "TIME", "STAMP"]
---

`CONVERT TIME STAMP time_stamp TIME ZONE tz`\\ 
        `INTO [DATE dat]`\\ 
             `[TIME tim]\ [DAYLIGHT SAVING TIME dst].`

This statement interprets the content of a packed number `time_stamp` as a [time stamp](ABENTIME_STAMPS_PACKED.html) that represents an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html) and converts it to the local date and the local time in the time zone specified in `tz` assigning the result to the variables `dat`, `tim`, and `dst`. At least one of the additions `DATE` or `TIME` must be specified. The conversion is performed in accordance with the [rules for time zones](ABENTIME_ZONE_RULES.html).

`time_stamp` and `tz` are [functional operand positions](ABENFUNCTIONAL_POSITION_GLOSRY.html).

When time stamps are converted for the days between 5.10.1582 and 14.10.1582 that do not actually exist due to the switch from the Julian calendar to the Gregorian calendar, this returns the same results as the conversion for the days from 15.10.1582 to 24.10.1582, which do exist.

If `time_stamp` contains a valid value but produces an invalid date when combined with a valid time zone in `tz`, `dat` and `tim` are not modified and `sy-subrc` is set to 12.

The following example for `CONVERT TIME STAMP` for time stamps in packed numbers functions in exactly the same way as the example for [`CONVERT UTCLONG`](ABAPCONVERT_UTCLONG.html) for time stamps in time stamp fields.

-   The operand `time_stamp` must have the type `TIMESTAMP` or `TIMESTAMPL` from the ABAP Dictionary, in accordance with the ABAP type `p` with length 8 or `p` with length 11 and seven decimal places. Depending on the data type, the content is interpreted either as a time stamp in the [short form](ABENTIME_STAMPS_PACKED.html) or as a time stamp in the [long form](ABENTIME_STAMPS_PACKED.html). No other data types can be specified. If `time_stamp` does not contain a valid time stamp, the content of `dat` and `tim` is not changed, and `sy-subrc` is set to 12.
-   The operand `tz` must be character-like and contain a [time zone](ABENTIME_ZONE_GLOSRY.html) from the DDIC database table `TTZZ`.

-   If `tz` is initial, the UTC time stamp is not converted to a different time zone. The local date and time in the target fields match the UTC reference time. In this case, `sy-subrc` is set to 4.
-   If the specified time zone is not found in the DDIC database table `TTZZ`, the content of `dat` and `tim` is not changed and `sy-subrc` is set to 8.
-   If the [rule set](ABENTIME_ZONE_RULES.html) for the specified time zone is incomplete, an uncatchable exception is raised.

-   The local date is assigned to `dat` as a return value of the data type `d`. The following can be specified for `dat`:

-   An existing variable to which the return value can be [converted](ABENCONVERSION_TYPE_D.html).
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of data type `d` is declared.

-   The local time is assigned to `tim` as a return value of data type `t`. If the time stamp in `time_stamp` is in the [long form](ABENTIME_STAMPS_PACKED.html), the fractions of seconds in the decimal places are ignored. The following can be specified for `tim`:

-   An existing variable to which the return value can be [converted](ABENCONVERSION_TYPE_T.html).
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of data type `t` is declared.

-   If the time stamp in `time_stamp` for the time zone specified in `tz` is in daylight saving time, `dst` is given the value *X*. Otherwise it is given the value blank. The following can be specified for `dst`:

-   An existing variable of the type `c` with length 1
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of data type `c` with length 1 is declared.

-   A current UTC time stamp can be created using the statement [`GET TIME STAMP`](ABAPGET_TIME-STAMP.html).
-   It is now possible to use the return value for the daylight saving time in `dst` to distinguish duplicate local time specifications that can occur when UTC time stamps are converted into local time during the double hour in the switch from daylight saving to standard time.
-   Usually, an invalid date can be created from a valid time stamp only by combining the first valid day with time zones west of UTC or the last valid day with time zones east of UTC.
-   An initial packed number with the value 0 is not a valid time stamp and produces the value 12 in `sy-subrc`.
-   An initial time zone `tz` corresponds to `UTC` only if the tables of the [rules for time zones](ABENTIME_ZONE_RULES.html) are filled correctly for the time zone UTC.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nCONVERT TIME STAMP CONV timestamp( '20191103' && '053000' ) \\n TIME ZONE 'EST' \\n INTO DATE DATA(dat) TIME DATA(tim) \\n DAYLIGHT SAVING TIME DATA(dst). \\nout->write( |\\{ dat DATE = ISO \\} \\{ \\n tim TIME = ISO \\} \\{ dst \\}| ). \\n\\ \\nCONVERT TIME STAMP CONV timestamp( '20191103' && '063000' ) \\n TIME ZONE 'EST' \\n INTO DATE dat TIME tim \\n DAYLIGHT SAVING TIME dst. \\nout->write( |\\{ dat DATE = ISO \\} \\{ \\n tim TIME = ISO \\} \\{ dst \\}| ). \\n\\ \\nout->display( ). `sy-subrc` **Meaning** 0 Time stamp was converted into the local time of the specified time zone and assigned to the target fields. 4 Time stamp was assigned to the target fields without conversion into a local time. 8 Time stamp could not be converted because the specified time zone is not in the DDIC database table `TTZZ`. 12 Time stamp could not be converted since `time_stamp` contains an invalid value or produces an invalid date when combined with the time zone. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abentime\_stamps.html abentime\_stamps\_packed.html