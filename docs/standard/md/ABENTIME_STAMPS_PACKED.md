---
title: "ABENTIME_STAMPS_PACKED"
description: |
  ABENTIME_STAMPS_PACKED - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTIME_STAMPS_PACKED.htm"
abapFile: "ABENTIME_STAMPS_PACKED.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENTIME", "STAMPS", "PACKED"]
---

In this format, [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) are represented using packed numbers of the type [`p`](ABENBUILTIN_TYPES_NUMERIC.html).

There is a short form and a long form.

In its integer part, a valid UTC time stamp must contain valid dates and times:

Each valid value is handled as an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) that represents a unique time in [UTC](ABENUTC_GLOSRY.html) reference time. In accordance with the POSIX standard, [leap seconds](ABENLEAP_SECOND_GLOSRY.html) are not supported, that is, each day has exactly 86400 seconds.

Only a few statements recognize that packed numbers of the types `TIMESTAMP` and `TIMESTAMPL` are UTC time stamps. All other statements interpret the content of these data types as numbers and, with the exception of direct comparisons, are not suitable for handling time stamps. The statements for handling time stamps in packed numbers are as follows:

Furthermore, UTC time stamps in packed numbers are handled specifically in the following output formats:

The system class [`CL_ABAP_TSTMP`](ABENCL_ABAP_TSTMP.html) provides methods for adding, subtracting, converting, and comparing UTC time stamps in packed numbers.

Special [time stamp functions](ABENABAP_CDS_GLOSRY.html) can be used in ABAP SQL and the CDS DDL of the ABAP CDS for processing UTC time stamps stored as packed numbers in database tables.

UTC time stamps in packed numbers are only interpreted as such if they are accessed by the statements, methods, and functions listed above. When being assigned or converted, they behave like packed numbers of the type `p`, which means they are not suitable for direct calculations. Comparisons produce a meaningful result only when two UTC time stamps are compared with each other. In programs for which the program property [Fixed Point Arithmetic](ABENFIXED_POINT_ARITHMETIC_GLOSRY.html) is not set, the corresponding rules applying to the data type `p` should be respected. In particular, direct comparisons of UTC time stamps in the long form with the short form produce a meaningful result only when the program property *fixed point arithmetic* is set. Otherwise, the system class `CL_ABAP_TSTMP` must be used for comparisons as well.

An UTC time stamp in its short form is the integer part of a time stamp in its long form. When simply assigning time stamps in the long form to time stamps in the short form, the [`p` to `p`](ABENCONVERSION_TYPE_P.html#@@ITOC@@ABENCONVERSION_TYPE_P_1) conversion rule applies and hence commercial rounding takes place. Therefore, unwanted rounding effects might occur that can even lead to invalid values, e.g. when seconds are rounded to 60. To avoid unwanted rounding effects, the following should be done instead of assignments:

See also the executable example [Rounding Time Stamps in Packed Numbers](ABENROUND_TIME_STAMP_ABEXA.html).

When UTC time stamps in packed numbers are used in operand positions that are not specifically intended for them, no warnings are given by the syntax check or by the extended program check, not even in [lossless assignments](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html).

Direct comparison of UTC time stamps in packed numbers with the same data type.

Conversion of an UTC time stamp in a packed number to a date and a time field, and determination of the daylight saving time marker.

Formatting of an UTC time stamp in a packed number in a string template in a type-friendly way.

Serialization of an UTC time stamp in a packed number by using a special domain.

Calculation of the difference between two UTC time stamps in packed numbers using the class `CL_ABAP_TSTMP`.

Direct calculation using UTC time stamps in packed numbers. If, for example, `ts1` has the value *20161004130733*, adding 3600 s in `ts2` produces the value *20161004140733*. Since the time stamps are interpreted as numbers of type `p` in the calculation, the result is `10000`, which would generally be unexpected.

Incorrect calculation using UTC time stamps in packed numbers. The assumption here is that time stamps are interpreted as a number of seconds in calculations. This is not the case here. The result does not meet expectations and is generally not a valid time stamp. For example, the invalid value *20161004315506* is calculated from `20161004131906`.

-   In the short form, an UTC time stamp is represented precisely to the second using a packed number with length 8 without decimal places, and the ABAP Dictionary type `TIMESTAMP`. The digits of the packed number show the time stamp in the format *yyyymmddhhmmss*, where *yyyy* is the year, *mm* is the month, *dd* is the day, *hh* is the hour, *mm* are the minutes, and *ss* are the seconds.
-   In the long form, an UTC time stamp is represented precisely to 100 ns using a packed number with length 11 and seven decimal places, and the ABAP Dictionary type `TIMESTAMPL` The digits of the packed number show the time stamp in the format *yyyymmddhhmmss.sssssss*, where, in addition to the short form, the seven decimal places *sssssss* are the fractions of a second. The maximum time resolution that can be achieved depends on the operating system of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html) and can be less.

-   For the date, only the values 01 to 9999 for the year, 01 to 12 for the month, and 01 to 31 for the day are valid.
-   For the time, only the values 00 to 23 for the hours, and 00 to 59 for the minutes and seconds are valid.
-   The date and time must represent a point in time that is valid in the Gregorian calendar.

-   An initial packed number with the value 0 does not contain a valid time stamp.
-   The method `NORMALIZE` of class `CL_ABAP_TSTMP` can be used to convert invalid values in time stamps to valid values.

-   [`GET TIME STAMP`](ABAPGET_TIME-STAMP.html) creates a current UTC time stamp.
-   [`CONVERT TIME STAMP`](ABAPCONVERT_TIME-STAMP.html) converts an UTC time stamp to a local date and a local time.
-   [`CONVERT INTO TIME STAMP`](ABAPCONVERT_DATE_TIME-STAMP.html) converts a local date and a local time to an UTC time stamp.

-   Use of the options [`TIMESTAMP`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) and [`TIMEZONE`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) for [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html) in [string templates](ABENSTRING_TEMPLATES.html)
-   Use of the addition [`TIME ZONE`](ABAPWRITE_TO_OPTIONS.html) of the statement `WRITE [TO]`.
-   The domains `XSDDATETIME_Z` and `XSDDATETIME_LONG_Z` support the serialization and deserialization of UTC time stamps in packed numbers in [asXML](ABENABAP_XSLT_ASXML_SCHEMA.html) and [asJSON](ABENABAP_ASJSON_SCHEMA.html).

-   In order to avoid invalid values, the methods `MOVE_TO_SHORT` and `MOVE` of the system class [`CL_ABAP_TSTMP`](ABENCL_ABAP_TSTMP.html) can be used. But these methods also round commercially.
-   In order to achieve the same integer part, the UTC time stamp in the long form must be rounded down. This can be achieved by using the built-in function [`round`](ABENDEC_FLOATING_POINT_FUNCTIONS.html) with an appropriate mode or [`trunc`](ABENNUMERICAL_FUNCTIONS.html).

GET TIME STAMP FIELD FINAL(ts2). \\nWAIT UP TO 1 SECONDS. \\nGET TIME STAMP FIELD FINAL(ts1). \\n\\ \\nASSERT ts2 < ts1. GET TIME STAMP FIELD FINAL(ts). \\n\\ \\nCONVERT TIME STAMP ts TIME ZONE \\n cl\_demo\_date\_time=>get\_user\_time\_zone( ) \\n INTO DATE FINAL(date) TIME FINAL(time) \\n DAYLIGHT SAVING TIME FINAL(dst). \\n\\ \\ncl\_demo\_output=>display( |\\{ date \\}\\\\n\\{ \\n time \\}\\\\n\\{ \\n dst \\} | ). GET TIME STAMP FIELD FINAL(ts). \\n\\ \\ncl\_demo\_output=>display( |\\{ ts TIMESTAMP = ISO \\} | ). DATA ts TYPE xsddatetime\_z. \\nGET TIME STAMP FIELD ts. \\n\\ \\nCALL TRANSFORMATION id SOURCE ts = ts \\n RESULT XML FINAL(xml). \\ncl\_demo\_output=>display\_xml( xml ). DATA: ts1 TYPE timestampl, \\n ts2 TYPE timestampl. \\n\\ \\nGET TIME STAMP FIELD ts2. \\nWAIT UP TO 1 SECONDS. \\nGET TIME STAMP FIELD ts1. \\n\\ \\nFINAL(seconds) = cl\_abap\_tstmp=>subtract( \\n EXPORTING \\n tstmp1 = ts1 \\n tstmp2 = ts2 ). \\n\\ \\ncl\_demo\_output=>display( seconds ). GET TIME STAMP FIELD FINAL(ts1). \\n\\ \\nFINAL(ts2) = cl\_abap\_tstmp=>add( tstmp = ts1 \\n secs = 3600 ). \\n\\ \\ncl\_demo\_output=>display( ts2 - ts1 ). GET TIME STAMP FIELD DATA(ts). \\n\\ \\nts = ts + 86400 \* 2 + 3600 \* 3. \\n\\ \\ncl\_demo\_output=>display( ts ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abentime\_stamps.html