---
title: "ABENFLOATING_POINT_CLASS"
description: |
  ABENFLOATING_POINT_CLASS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENFLOATING_POINT_CLASS.htm"
abapFile: "ABENFLOATING_POINT_CLASS.html"
keywords: ["if", "method", "class", "data", "types", "ABENFLOATING", "POINT", "CLASS"]
---

The class `CL_ABAP_MATH` contains constants with the limits of the value ranges [built-in numeric types](ABENBUILTIN_TYPES_NUMERIC.html).

Display of the minimum and maximum values of numeric types.

The class `CL_ABAP_MATH` contains common mathematical constants, including pi, Euler's constant e, square roots of numbers such as 2 or 3, or logarithms of some constants.

The class `CL_ABAP_MATH` contains methods for operations with floating point numbers.

The method `ROUND_F_TO_15_DECS` rounds a [binary floating point number](ABENBINFLOAT_GLOSRY.html) to 15 places using commercial rounding.

Commercial rounding to 15 digits can also be achieved using the built-in function [`round`](ABENDEC_FLOATING_POINT_FUNCTIONS.html), the result of which, however, has the `decfloat34` type.

The example shows how rounding errors in the output formatting of binary floating point numbers can be prevented by two-step rounding using the method `ROUND_F_TO_15_DECS`. Instead of the method call, the function call `round( val = float dec = 15 )` can be used here.

Display of the scaling and precision of a decimal floating point number.

-   The method `GET_SCALE` returns the [scaling](ABENSCALE_GLOSRY.html) of a [decimal floating point number](ABENDECFLOAT_GLOSRY.html).
-   The method `GET_NUMBER_OF_DIGITS` returns the [precision](ABENPRECISION_GLOSRY.html) of a [decimal floating point number](ABENDECFLOAT_GLOSRY.html).
-   The method `NORMALIZE` returns a normalized floating point number. This means that the [scaling](ABENSCALE_GLOSRY.html) and [precision](ABENPRECISION_GLOSRY.html) of an input value are changed so that the mantissa has no trailing zeros.
-   The method `GET_SCALE_NORMALIZED` returns the [scaling](ABENSCALE_GLOSRY.html) of a normalized [decimal floating point number](ABENDECFLOAT_GLOSRY.html). If the input value has decimal places, the return value is the number of decimal places without trailing zeros.
-   The method `GET_MAX_DB_VALUE` returns the maximum value of a number of the type `DF16_DEC` or `DF34_DEC` on the database.
-   The method `GET_DB_LENGTH_DECS` returns the length and number of decimal places of a number of the type `DF16_DEC` or `DF34_DEC` on the database.

cl\_demo\_output=>display( \\n |i: \\{ cl\_abap\_math=>min\_int4 WIDTH = 20 \\n \\} to \\{ cl\_abap\_math=>max\_int4 WIDTH = 20 \\} \\\\n| && \\n |int8: \\{ cl\_abap\_math=>min\_int8 WIDTH = 20 \\n \\} to \\{ cl\_abap\_math=>max\_int8 WIDTH = 20 \\} \\\\n| && \\n |decfloat16: \\{ cl\_abap\_math=>min\_decfloat16 STYLE = SCIENTIFIC \\n WIDTH = 20 \\n \\} to \\{ cl\_abap\_math=>max\_decfloat16 STYLE = SCIENTIFIC \\n WIDTH = 20 \\} \\\\n| && \\n |decfloat34: \\{ cl\_abap\_math=>min\_decfloat34 STYLE = SCIENTIFIC \\n WIDTH = 20 \\n \\} to \\{ cl\_abap\_math=>max\_decfloat34 STYLE = SCIENTIFIC \\n WIDTH = 20 \\} \\\\n| ). DATA float TYPE f VALUE '1.005'. \\n\\ \\ncl\_demo\_output=>display( \\n |\\{ float DECIMALS = 2 \\}\\\\n| && \\n |\\{ cl\_abap\_math=>round\_f\_to\_15\_decs( float ) DECIMALS = 2 \\}\\\\n| ). FINAL(decf) = CONV decfloat34( '1234.56789' ). \\n\\ \\ncl\_demo\_output=>display( \\n |value = \\{ decf \\n \\}\\\\nscale = \\{ cl\_abap\_math=>get\_scale( decf ) \\n \\}\\\\nprecision = \\{ cl\_abap\_math=>get\_number\_of\_digits( decf ) \\}| ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abencl\_abap\_math.html