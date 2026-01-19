---
title: "ABENUTCLONG_ADD"
description: |
  ABENUTCLONG_ADD - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENUTCLONG_ADD.htm"
abapFile: "ABENUTCLONG_ADD.html"
keywords: ["do", "if", "catch", "class", "data", "types", "ABENUTCLONG", "ADD"]
---

`... utclong_add( val  = time_stamp [days = days]                                     [hours = hours]                                     [minutes = minutes]                                     [seconds = seconds] ) ...`

This [built-in function](ABENBUILT_IN_FUNCTIONS.html) adds the values passed to the optional parameters to an UTC [time stamp](ABENTIME_STAMP_GLOSRY.html) specified after `val`. The type of the return value is [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html).

A time stamp field of the type `utclong` that contains a valid UTC time stamp must be passed to the parameter `val`. `time_stamp` is a [time-stamp-like expression position](ABENTIMESTAMP_LIKE_EXPR_POS_GLOSRY.html). An initial time stamp is handled like the smallest possible value of a time stamp.

The values to be added are passed in the following parameters, of which at least one must be specified:

Each parameter can be passed data objects that can be converted to the expected type. Positive and negative numbers can be passed. These are [numeric expression positions](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html). Internally, the passed values are transformed to the corresponding number of seconds, whereby the value passed to `seconds` is rounded to seven decimal places. First, the days, hours, and minutes, and then seconds are added to or subtracted from the value of the UTC time stamp. If an invalid UTC time stamp value is produced by one of the intermediate steps, a catchable exception of the class `CX_SY_ARITHMETIC_OVERFLOW` is raised.

This example demonstrates how the function `utclong_add` works. The corresponding number of seconds is subtracted from a time stamp field `ts_new`, which itself is produced by adding days, hours, and minutes. The statement [`ASSERT`](ABAPASSERT.html) demonstrates how this produces the original time stamp again.

This example demonstrates how the initial value is handled by `utclong_add`. One second is added to a time stamp `ts_ini` passed as an initial value and one second is subtracted from the result in `ts_1`. The result `ts_0` is the smallest valid time stamp value and not the initial value.

This example shows how missing days due to the switch from the Julian to the Gregorian calendar are handled by `utclong_add`. Adding 100 ns to the time stamp *1582-10-04 23:59:59.9999999* produces the time stamp *1582-10-15T00:00:00.0000000*.

`CX_SY_CONVERSION_NO_DATE_TIME`

`CX_SY_CONVERSION_ERROR`

`CX_SY_ARITHMETIC_OVERFLOW`

-   `days` expects a number of days as a number of the type `i`.
-   `hours` expects a number of hours as a number of the type `i`.
-   `minutes` expects a number of minutes as a number of the type `int8`.
-   `seconds` expects a number of seconds as a number of the type `decfloat34`.

-   `utclong_subtract` is not available, since its function is achieved by passing negative numbers to the parameter `utclong_add`.
-   There are no parameters for years and months, since they do not correspond to a fixed number of seconds.
-   The result of the function `utclong_add` is never the initial value of an UTC time stamp. It is either a valid time stamp value or an exception is raised.

-   *Cause:* The time stamp specified for `val` is invalid.
    *Runtime error:*\\ `INVALID_UTCLONG`

-   *Cause:* A passed parameter cannot be converted to the expected type.
    *Runtime error:*\\ `CONVT_OVERFLOW`, `BCD_OVERFLOW`

-   *Cause:* The parameters passed produce an invalid time stamp.
    *Runtime error:*\\ `UTCLONG_ADD_OVERFLOW`

FINAL(ts) = utclong\_current( ). \\n\\ \\nFINAL(ts\_new) = \\n utclong\_add( val = ts \\n days = 1000 \\n hours = 100 \\n minutes = 10 ). \\n\\ \\nASSERT ts = \\n utclong\_add( val = ts\_new \\n seconds = - ( 1000 \* 86400 + 100 \* 3600 + 10 \* 60 ) ). \\n\\ \\ncl\_demo\_output=>display( |\\{ ts \\}\\\\n\\{ ts\_new \\}| ). FINAL(o) = cl\_demo\_output=>new( ). \\n\\ \\nDATA ts\_ini TYPE utclong. \\n\\ \\nIF ts\_ini IS INITIAL. \\n o->write( 'ts\_ini is initial' ). \\nENDIF. \\no->write( ts\_ini ). \\n\\ \\nFINAL(ts\_1) = \\n utclong\_add( val = ts\_ini \\n seconds = 1 ). \\n\\ \\no->write( ts\_1 ). \\n\\ \\nFINAL(ts\_0) = \\n utclong\_add( val = ts\_1 \\n seconds = -1 ). \\n\\ \\nIF ts\_0 IS NOT INITIAL AND \\n ts\_0 <> ts\_ini. \\n o->write( 'ts\_0 is neither initial nor equal to ts\_ini' ). \\nENDIF. \\no->write( ts\_0 ). \\n\\ \\no->display( ). FINAL(ts) = conv utclong( '1582-10-04 23:59:59,9999999' ). \\n\\ \\nFINAL(ts\_new) = \\n utclong\_add( val = ts \\n seconds = '0.0000001' ). \\n\\ \\ncl\_demo\_output=>display( |\\{ ts \\}\\\\n\\{ ts\_new \\}| ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abentime\_stamps.html abenutclong.html abentimestamp\_functions.html