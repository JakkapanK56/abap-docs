---
title: "ABENCHAR_DATE_TIME_FIELDS_VALIDITY"
description: |
  ABENCHAR_DATE_TIME_FIELDS_VALIDITY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCHAR_DATE_TIME_FIELDS_VALIDITY.htm"
abapFile: "ABENCHAR_DATE_TIME_FIELDS_VALIDITY.html"
keywords: ["do", "while", "if", "data", "types", "ABENCHAR", "DATE", "TIME", "FIELDS", "VALIDITY"]
---

Date fields and time fields of the types `d` and `t` can contain any characters.

The ABAP runtime framework checks the validity at the following points:

No checks are generally made on other assignments to date fields and time fields not mapped to assignments of numeric values or to other operand positions. As a result, invalid values are produced easily by date fields and time fields, and then processed further.

The initial value *00000000* of the data type `d` and the date 01.01.0001 play a special role in this context.

1 is the smallest number that is converted to a valid date, 02.01.0001, during assignment to a date field of type `d`. Assignments between valid date fields and numeric fields can be reversed only from this date.

In [lossless assignments](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html), invalid values in source fields raise exceptions instead of producing the value 0 or *00000000*. Here, the value *00010101*, which actually belongs to the value range, is considered invalid, while the initial value *00000000*, which does not actually belong to the value range, is considered valid. This means that the initial value *00000000* can be used in lossless assignments and all valid assignments between date fields and numeric fields can be reversed.

[ABAP SQL](ABENABAP_SQL_GLOSRY.html) is an exception to this rule. Here, the value *00010101* is also accepted as a valid date and handled like the initial value *00000000* in operand positions in which values must comply with the rules for lossless assignments.

The validity of the content of date fields and time fields must be guaranteed before they are accessed.

Identification of an invalid date by a comparison with the value 0. For the comparison, the date field is converted to an integer field of type `i`, where an invalid date produces the value 0. The valid date *00010101*, which would also produce the value 0, is handled separately beforehand.

Identification of an invalid time by a comparison with the value 0. For the comparison, the time field is converted to an integer field of type `i`, where an invalid time produces the value 0. The valid time *000000*, which would also produce the value 0, is handled separately beforehand.

-   Valid values for the type `d`, however, are only those digits that are allowed as dates according to the calendar rules in the format *yyyymmdd*: *yyyy* (year): 0001 to 9999, *mm* (month): 01 to 12, *dd* (day): 01 to 31.
-   Valid values for the type `t`, however, are only those digits that can be interpreted as times in the 24-hour clock format *hhmmss*. *hh* (hours): 00 to 23, *mm* (minutes): 00 to 59, *ss* (seconds): 00 to 59.

-   Date fields and time fields with invalid values raise an exception as a [source field](ABENMOVE_EXACT_ELEMENTARY_VALID.html) of a [lossless assignment](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html). Conversely, source fields of other types must not produce any invalid values in date fields and time fields as [target fields](ABENMOVE_EXACT_ELEMENTARY_FIT.html) in a lossless assignment.
-   Invalid values cannot be converted to [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) using the statements [`CONVERT INTO UTCLONG`](ABAPCONVERT_DATE_UTCLONG.html) and [`CONVERT INTO TIME STAMP`](ABAPCONVERT_DATE_TIME-STAMP.html).
-   In a regular assignment to numeric fields, [date fields](ABENCONVERSION_TYPE_D.html) and [target fields](ABENCONVERSION_TYPE_T.html) with invalid values produce the value 0, with the following exceptions:

-   For a source field of the type `d`, the values from 10/5/1582 to 10/14/1582, which are missing due to the conversion from the Julian to the Gregorian calendar, are handled either as invalid values or as the valid values from 10/15/1582 to 10/24/1582, depending on the operand position.
-   For a source field of the type `t` that contains only digits, the numeric value is also calculated for invalid times according to the formula `hh*3600+mm*60+ss`.

-   For regular assignments of [numeric fields](ABENNUMERIC_SOURCE_FIELDS.html) to date fields and time fields, the numeric fields must be within the value range of the data type `i` and comply with the following special rules:

-   When number values are assigned to date fields that cannot result from the reverse conversion, the date field is initialized
-   Any number values can be assigned to time fields. When converted, the number value is divided by 86400 and only the integer remainder of the division is respected, which always produces a valid time in hours, minutes, and seconds.

-   The initial value *00000000* of data type `d` is not a valid date. A conversion of the initial value *00000000* to a numeric data type results, like all invalid values, in the value 0. The reverse conversion of the number 0 to a date field of the type `d` always produces the invalid date *00000000*. Negative and oversized numbers also produce the invalid date *00000000*.
-   Since a conversion from a valid date in a field of the type `d` results in the number of days since 01.01.0001, this date is the zero point for date calculations. A conversion of a date field of the type `d` with the value *00010101* to a numeric value produces the value 0, like the conversion of the initial value or another invalid value, and the conversion cannot be reversed.

FINAL(invalid\_date) = '20160231'. \\n\\ \\nDATA(date) = CONV d( invalid\_date ). \\n\\ \\ndate = COND #( WHEN date = '00010101' OR date <> 0 THEN date \\n ELSE THROW cx\_sy\_conversion\_no\_date( ) ). FINAL(invalid\_time) = 'XXXXXX'. \\n\\ \\nDATA(time) = CONV t( invalid\_time ). \\n\\ \\ntime = COND #( WHEN time = '000000' OR time <> 0 THEN time \\n ELSE THROW cx\_sy\_conversion\_no\_time( ) ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abencharacter\_date\_time.html