---
title: "ABENCHAR_DATE_TIME_FIELDS_ACCESS"
description: |
  ABENCHAR_DATE_TIME_FIELDS_ACCESS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCHAR_DATE_TIME_FIELDS_ACCESS.htm"
abapFile: "ABENCHAR_DATE_TIME_FIELDS_ACCESS.html"
keywords: ["do", "if", "case", "data", "types", "ABENCHAR", "DATE", "TIME", "FIELDS", "ACCESS"]
---

Only in a few operand positions is it important that date fields and time fields contain a local date in the format *yyyymmdd* or a local time in the format *hhmmss*:

In all other operand positions, the handling of date fields and time fields is largely determined by the [conversion rules](ABENCONVERSION_ELEMENTARY.html) and [comparison rules](ABENLOGEXP_DATE_TIME.html) for these data types.

Direct assignments or comparisons between the data types `d` and `t` do not make sense and are therefore forbidden. The following sections show examples of how to access date fields and time fields effectively.

Conversion of an UTC time stamp to date and time fields and their type-friendly formatting using string templates.

-   When using date fields and time fields as source fields or target fields of a [lossless assignment](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html).
-   In conversions of a local date and a local time to [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) using

-   [`CONVERT INTO UTCLONG`](ABAPCONVERT_DATE_UTCLONG.html) and back using [`CONVERT UTCLONG`](ABAPCONVERT_UTCLONG.html).
-   [`CONVERT INTO TIME STAMP`](ABAPCONVERT_DATE_TIME-STAMP.html) and back using [`CONVERT TIME STAMP`](ABAPCONVERT_TIME-STAMP.html).

-   In output formatting using [string templates](ABENSTRING_TEMPLATES.html) or the statement `WRITE [TO]`
-   When mapping to [asXML](ABENABAP_XSLT_ASXML_ELEMENTARY.html) or [JSON](ABENABAP_ASJSON.html).

-   The conversion rules are designed in such a way that data objects of the types `d` and `t` behave like character-like objects in character-like operand positions and numerically in numeric operand positions. In the latter case, the content of a date field is converted to the number of days since 01.01.0001 and the content of a time field is converted to the number of seconds since midnight.
-   The comparison rules are designed so that a later date or later time is greater than an earlier date or earlier time.

-   [Character-like access to date/time fields](ABENCHAR_DATE_TIME_FIELDS_CHARLIKE.html)
-   [Numeric access to date/time fields](ABENCHAR_DATE_TIME_FIELDS_NUMLIKE.html)

-   The function modules of the function pool `SCAL` provide some additional information about character-like date specifications, for example the day of the week or the calendar week for a given date.
-   Special [date functions and time functions](ABENDDIC_DATE_TIME_FUNCTIONS.html) can be used in the CDS DDL of the [ABAP CDS](ABENABAP_CDS_GLOSRY.html) to process dates and times stored in database tables.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nCONVERT UTCLONG utclong\_current( ) \\n INTO DATE FINAL(date) \\n TIME FINAL(time) \\n TIME ZONE cl\_demo\_date\_time=>get\_user\_time\_zone( ). \\n\\ \\nout->write( |\\{ date DATE = ISO \\n \\}\\\\n\\{ time TIME = ISO \\}| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abencharacter\_date\_time.html