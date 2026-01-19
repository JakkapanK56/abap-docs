---
title: "ABENCHAR_DATE_TIME_FIELDS_NUMLIKE"
description: |
  ABENCHAR_DATE_TIME_FIELDS_NUMLIKE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCHAR_DATE_TIME_FIELDS_NUMLIKE.htm"
abapFile: "ABENCHAR_DATE_TIME_FIELDS_NUMLIKE.html"
keywords: ["if", "data", "types", "ABENCHAR", "DATE", "TIME", "FIELDS", "NUMLIKE"]
---

Numeric access to date fields and time fields exploits the fact that the [conversion](ABENCONVERSION_ELEMENTARY.html) of the types `d` and `t` to numeric values produces an integer number of days or seconds. This applies particularly when using date fields and time fields in [numeric calculations](ABENCOMPUTE_EXPRESSIONS.html), where they are converted to the corresponding calculation type. This enables differences to be calculated or values to be added or subtracted from date fields or time fields. All other arithmetic operations are generally not useful here. To avoid unexpected results from such calculations, the [validity](ABENCHAR_DATE_TIME_FIELDS_VALIDITY.html) of the content of the date or time fields must be ensured.

The following calculations provide the current day of the year as well as the hour, minutes, and seconds of the current time. The date and time are provided by an UTC time stamp.

The following calculation provides the day of the week for a date field `date` containing any valid date. 1 means Monday, 2 means Tuesday, and so on.

The following calculations provides the last day of the previous month.

DATA: date TYPE d, \\n time TYPE t, \\n day TYPE i, \\n hour TYPE i, \\n minute TYPE i, \\n second TYPE i, \\n first\_day TYPE d. \\n\\ \\nFINAL(tzone) = cl\_demo\_date\_time=>get\_user\_time\_zone( ). \\nCONVERT UTCLONG utclong\_current( ) \\n INTO DATE date \\n TIME time \\n TIME ZONE tzone. \\n\\ \\nfirst\_day = date(4) && '0101'. \\nday = date - first\_day + 1. \\nsecond = time. \\nhour = second DIV 3600. \\nsecond = second - hour \* 3600. \\nminute = second DIV 60. \\nsecond = second - minute \* 60. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ). \\nFINAL(day) = ( 5 + date MOD 7 ) MOD 7 + 1. \\nout->write( day ). \\n\\ \\nout->display( ). DATA(date) = cl\_demo\_date\_time=>get\_user\_date( ). \\ndate+6(2) = '01'. \\ndate = date - 1. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abencharacter\_date\_time.html abenchar\_date\_time\_fields\_access.html