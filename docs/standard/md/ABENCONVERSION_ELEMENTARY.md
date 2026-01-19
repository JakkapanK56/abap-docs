---
title: "The conversion tables in the following sections define the rules for converting all possible elementary target fields for"
description: |
  In all conversions, it must be possible to create a value from the type-specific value range from the content of the source field; otherwise an exception is raised that is defined in one of the subclasses of the class `CX_SY_CONVERSION_ERROR`. Conversion errors can usually be handled using `CATCH`
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONVERSION_ELEMENTARY.htm"
abapFile: "ABENCONVERSION_ELEMENTARY.html"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "types", "ABENCONVERSION", "ELEMENTARY"]
---

The programming language ABAP contains a set of [built-in](ABENBUILT_IN_TYPES_COMPLETE.html)\\ [elementary data types](ABENELEMENTARY_DATA_TYPE_GLOSRY.html). It also supports automatic type conversions and length adjustments for assignments between all these data types except for [date fields](ABENDATE_FIELD_GLOSRY.html), [time fields](ABENTIME_FIELD_GLOSRY.html), and [time stamp fields](ABENTIMESTAMP_FIELD_GLOSRY.html), where conversions do not make sense.

The conversion tables in the following sections define the rules for converting all possible elementary target fields for

In all conversions, it must be possible to create a value from the type-specific value range from the content of the source field; otherwise an exception is raised that is defined in one of the subclasses of the class `CX_SY_CONVERSION_ERROR`. Conversion errors can usually be handled using [`CATCH`](ABAPCATCH_TRY.html). There are some statements in which assignments take place whose conversion errors are either handled implicitly or lead to a runtime error directly.

After an exception, the content of the target field is undefined and should not be used. After an exception, the target field can contain either the previous value or an invalid value (the latter is the case after an overflow of a floating point number, for example).

[Avoid unexpected conversion results](ABENUSE_CONVERSION_RULES_GUIDL.html)

\\ [Enumerated types](ABENENUM_TYPE_GLOSRY.html) are elementary data types, but special [conversion rules](ABENCONVERSION_ENUMERATED.html) apply, which ensure that only allowed values can be assigned to an [enumerated variable](ABENENUMERATED_VARIABLE_GLOSRY.html).

-   [Numeric source fields](ABENNUMERIC_SOURCE_FIELDS.html)
-   [Character-like source fields](ABENCHARACTER_SOURCE_FIELDS.html)
-   [Byte-like source fields](ABENBYTE_SOURCE_FIELDS.html)
-   [Date fields, time fields, and time stamp fields as source fields](ABENDATE_TIME_SOURCE_FIELDS.html)

abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html