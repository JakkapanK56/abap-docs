---
title: "ABENUTCLONG"
description: |
  ABENUTCLONG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUTCLONG.htm"
abapFile: "ABENUTCLONG.html"
keywords: ["do", "if", "try", "catch", "class", "data", "types", "ABENUTCLONG"]
---

ABAP contains the built-in ABAP type [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html) for UTC time stamps with a precision of 100 nanoseconds. A data object of this time stamp type is a time stamp field. Each valid value of a time stamp field is a [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) and represents a unique time in [UTC](ABENUTC_GLOSRY.html) reference time. In accordance with the POSIX standard, [leap seconds](ABENLEAP_SECOND_GLOSRY.html) are not supported, that is, each day has exactly 86400 seconds.

Time stamp fields can be used in suitable operand positions and special [assignment](ABENCONVERSION_ELEMENTARY.html) and [comparison rules](ABENLOGEXP_RULES_OPERANDS.html) apply. Time stamp fields are only convertible to [text fields](ABENTEXT_FIELD_GLOSRY.html) of the type `c` and [text strings](ABENTEXT_STRING_GLOSRY.html) of the type `string`.

The following functions, statements, and classes are designed specifically for time stamp fields:

A time stamp field must have valid content each time it is used. If a time stamp field is used that contains an invalid UTC time stamp or the initial value, a catchable exception of the class `CX_SY_CONVERSION_NO_DATE_TIME` is usually raised. The content remains unchecked only in castings or in assignments between time stamp fields.

For time stamp fields, conversion errors raise an exception of the class `CX_SY_CONVERSION_NOT_SUPPORTED`.

The initial value of a time stamp is not a real time stamp value, that is, it does not represent an UTC time stamp, but an empty value, which is handled as follows:

The internal representation of the valid values of a [time stamp field](ABENTIMESTAMP_FIELD_GLOSRY.html) with the [time stamp type](ABENTIMESTAMP_TYPE_GLOSRY.html)\\ [`utclong`](ABENBUILTIN_TYPES_DATE_TIME.html) are uninterrupted sequences of integers starting from 0, where 0 represents the initial value and each number greater than 0 is assigned exactly one real time stamp.

Due to the switch from the Julian calendar to the Gregorian calendar, the UTC time stamps *1582-10-04 23:59:59.9999999* and *1582-10-15T00:00:00.0000000* are directly adjacent. Internally, they are represented using two consecutive integers.

The following code snippet uses [`CASTING int8`](ABAPASSIGN_CASTING.html) to show how UTC time stamps in time stamp fields are represented internally. The string representation of an initial time stamp is an empty string and internally the integer number 0.

-   [Time stamp functions](ABENTIMESTAMP_FUNCTIONS.html)
-   [Conversion Statements for Time Stamp Fields](ABENTIMESTAMP_CONVERSIONS.html)
-   [System Class for Time Stamp Fields](ABENTIMESTAMP_SYSTEM_CLASS.html)

-   In [comparisons](ABENCOMPARISON_GLOSRY.html) and sorts based on comparisons, an initial time stamp field is smaller than every real time stamp.
-   An initial time stamp field passed as an argument is handled like the smallest real time stamp in the [time stamp functions](ABENTIMESTAMP_FUNCTIONS.html).
-   In the [conversion statements](ABENTIMESTAMP_CONVERSIONS.html), initial time stamp fields produce initial results.
-   During the [conversion](ABENCONVERSION_TYPE_UTCLONG.html) to character-like fields, an initial time stamp field fills a text field with spaces or creates an empty text string.
-   During formatting as a character string using [string templates](ABENSTRING_TEMPLATE_GLOSRY.html) or with the statement [`WRITE TO`](ABAPWRITE_TO.html), an initial time stamp field creates a character string consisting of spaces.

-   The minimum internal value is 1 and corresponds to the time stamp *0001-01-01T00:00:00.0000000*.
-   The maximum internal value is 3,155,380,704,000,000,000 and corresponds to the time stamp *9999-12-31T23:59:59.9999999*.
-   The time interval between time stamps, which is represented by two adjacent integers, is 100 ns. Each integer between the minimum and maximum value represents a time stamp of 100 ns multiplied by the value of the number after *0001-01-01T00:00:00.0000000*.
-   Time stamp fields must meet an [alignment requirement](ABENALIGNMENT.html). Their memory address must be divisible by eight.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA ts TYPE utclong. \\nFIELD-SYMBOLS TYPE int8. \\nASSIGN ts TO CASTING. \\nout->write( |Initial value: \\{ ts \\}| ). \\nout->write( |Internal representation: \\{ \\}| ). \\nout->line( ). \\n\\ \\n = 1. \\nout->write( |First valid value: \\{ ts \\}| ). \\nout->write( |Internal representation: \\{ \\}| ). \\nout->line( ). \\n\\ \\nts = utclong\_current( ). \\nout->write( |Current timestamp: \\{ ts \\}| ). \\nout->write( |Internal representation: \\{ \\}| ). \\nout->line( ). \\n\\ \\n = '3155380704000000000'. \\nout->write( |Last valid value: \\{ ts \\}| ). \\nout->write( |Internal representation: \\{ \\}| ). \\nout->line( ). \\n\\ \\n = '3155380704000000001'. \\nTRY. \\n out->write( |Invalid value: \\{ ts \\}| ). \\n CATCH cx\_sy\_conversion\_no\_date\_time INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\nout->write( |Internal representation: \\{ \\}| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abentime\_stamps.html