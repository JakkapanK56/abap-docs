---
title: "ABAPGET_TIME-STAMP"
description: |
  ABAPGET_TIME-STAMP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_TIME-STAMP.htm"
abapFile: "ABAPGET_TIME-STAMP.html"
keywords: ["do", "if", "method", "class", "data", "ABAPGET", "TIME", "STAMP"]
---

[Short Reference](ABAPGET_TIME_STAMP_SHORTREF.html)

`GET TIME STAMP FIELD time_stamp.`

This statement uses the [system time](ABENSYSTEM_TIME_GLOSRY.html) and [system date](ABENSYSTEM_DATE_GLOSRY.html) of the AS ABAP to create a [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX](ABENPOSIX_TIMESTAMP_GLOSRY.html) standard and assigns it to the variable `time_stamp` of type `p` as a [time stamp in a packed number](ABENTIME_STAMPS_PACKED.html).

The following can be specified for `time_stamp`:

Creation of two time stamps. An existing variable of the type `TIMESTAMPL` must be used for the long form. An inline declaration can be used for the short form. The time stamps must be formatted specially for the output, since otherwise only numbers of type `p` would be displayed.

-   An existing variable of the data type `TIMESTAMP` or `TIMESTAMPL` from the ABAP Dictionary, in accordance with the ABAP type `p` with length 8 or `p` with length 11 and seven decimal places. Depending on the data type, the time stamp is created either in the [short form](ABENTIME_STAMPS_PACKED.html) or in the [long form](ABENTIME_STAMPS_PACKED.html).
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of type `TIMESTAMP` is declared.

-   The precision of the decimal places of the generated time stamp depends on the hardware (processor) of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html). Resolutions in the one-digit or two-digit microsecond range are realistic.
-   A time stamp in its short form is the integer part of a time stamp in its long form. In order to create the respective short form from an existing long form time stamp, the value of the long form must be rounded down. This cannot be achieved by a simple assignment because the corresponding [`p` to `p`](ABENCONVERSION_TYPE_P.html#@@ITOC@@ABENCONVERSION_TYPE_P_1) conversion rule rounds commercially. Instead, an appropriate function such as [`round`](ABENDEC_FLOATING_POINT_FUNCTIONS.html) or [`trunc`](ABENNUMERICAL_FUNCTIONS.html) can be used. Note that the methods `MOVE_TO_SHORT` and `MOVE` of the system class [`CL_ABAP_TSTMP`](ABENCL_ABAP_TSTMP.html) prevent invalid results but also round commercially. See the executable example [Rounding Time Stamps in Packed Numbers](ABENROUND_TIME_STAMP_ABEXA.html).

-   *Cause:* The target field differs from `TIMESTAMP` or `TIMESTAMPL` with respect to type, length, and decimal places.
    *Runtime error:*\\ `GET_TIMESTAMP_FORMAT`

DATA tsl TYPE timestampl. \\n\\ \\nGET TIME STAMP FIELD FINAL(ts). \\nGET TIME STAMP FIELD tsl. \\n\\ \\ncl\_demo\_output=>new( \\n )->write( |\\{ ts TIMESTAMP = ISO \\n TIMEZONE = 'UTC' \\}| \\n )->write( |\\{ tsl TIMESTAMP = ISO \\n TIMEZONE = 'UTC' \\}| \\n )->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abentime\_stamps.html abentime\_stamps\_packed.html