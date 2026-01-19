---
title: "ABENUTCLONG_DIFF"
description: |
  ABENUTCLONG_DIFF - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENUTCLONG_DIFF.htm"
abapFile: "ABENUTCLONG_DIFF.html"
keywords: ["if", "method", "class", "data", "types", "internal-table", "ABENUTCLONG", "DIFF"]
---

`... utclong_diff( high = time_stamp2                    low  = time_stamp1 ) ...`

This [built-in function](ABENBUILT_IN_FUNCTIONS.html) calculates the time difference between the values of two time stamp fields `time_stamp2` and `time_stamp1`. The return value has the type `decfloat34` and contains the exact difference in seconds rounded to seven decimal places. If the UTC time stamp in `time_stamp2` is later than the UTC time stamp in `time_stamp1`, the result is positive. If the values are identical, the result is 0, otherwise it is negative.

Time stamp fields of the type [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html) containing valid UTC time stamps must be passed to the parameters `high` and `low`. `time_stamp2` and `time_stamp1` are [time-stamp-like expression positions](ABENTIMESTAMP_LIKE_EXPR_POS_GLOSRY.html). An initial time stamp is handled like the smallest possible value of a time stamp.

Calculation of the time interval in microseconds of consecutive UTC time stamps from an internal table.

`CX_SY_CONVERSION_NO_DATE_TIME`

-   The system class [`CL_ABAP_UTCLONG`](ABENTIMESTAMP_SYSTEM_CLASS.html) contains a method `DIFF` with multiple output parameters for days, hours, minutes, and seconds across which the time difference is spread instead of just one return parameter.
-   If the function `utclong_diff` is used as an operand of an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html), the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html)\\ `decfloat34` is produced.
-   If the function `utclong_diff` is used as the [right side of an assignment](ABENEQUALS_RETURN_VALUES.html) or other operand positions in which the return value is converted, the decimal places are converted in accordance with the general conversion rules for [source field type `decfloat34`](ABENCONVERSION_TYPE_DECFLOAT.html), if necessary, and are not cut off. If the decimal places are to be cut off, the built-in function [`trunc`](ABENNUMERICAL_FUNCTIONS.html) can be applied to the return value.

-   *Cause:* A time stamp specified for `high` or `low` is invalid.
    *Runtime error:*\\ `INVALID_UTCLONG`

DATA time\_stamps TYPE TABLE OF utclong WITH EMPTY KEY. \\ntime\_stamps = VALUE #( FOR i = 1 UNTIL i > 11 \\n ( utclong\_current( ) ) ). \\ncl\_demo\_output=>write( time\_stamps ). \\n\\ \\nTYPES diffs TYPE TABLE OF decfloat34 WITH EMPTY KEY. \\ncl\_demo\_output=>display( \\n VALUE diffs( FOR \_ts IN time\_stamps FROM 2 INDEX INTO i \\n ( utclong\_diff( \\n high = \_ts \\n low = time\_stamps\[ i - 1 \] ) \* 1000000 ) ) ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abentime\_stamps.html abenutclong.html abentimestamp\_functions.html