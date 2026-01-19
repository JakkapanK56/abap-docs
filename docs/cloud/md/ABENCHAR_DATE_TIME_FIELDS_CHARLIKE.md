---
title: "ABENCHAR_DATE_TIME_FIELDS_CHARLIKE"
description: |
  ABENCHAR_DATE_TIME_FIELDS_CHARLIKE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCHAR_DATE_TIME_FIELDS_CHARLIKE.htm"
abapFile: "ABENCHAR_DATE_TIME_FIELDS_CHARLIKE.html"
keywords: ["data", "ABENCHAR", "DATE", "TIME", "FIELDS", "CHARLIKE"]
---

Character-like access to character-like content of date fields and time fields is evaluated in a character-like way. The character-like nature of date fields and time fields can be exploited, for example, to access detailed information. To avoid unexpected results from this type of access, the [validity](ABENCHAR_DATE_TIME_FIELDS_VALIDITY.html) of the content of the date or time fields must be ensured. Most [statements](ABENSTRING_PROCESSING_STATEMENTS.html) and [functions](ABENSTRING_FUNCTIONS.html) used in [character string processing](ABENABAP_DATA_STRING.html) are not suitable for processing date fields and time fields because they generally produce invalid content.

The following example demonstrates how [substring functions](ABENSUBSTRING_FUNCTIONS.html) can be used to extract the components year, month, day, hour, minute, and second from date fields and time fields.

DATA: date TYPE d, \\n time TYPE t. \\n\\ \\nDATA: year TYPE i, \\n month TYPE i, \\n day TYPE i, \\n hour TYPE i, \\n minute TYPE i, \\n second TYPE i. \\n\\ \\ndate = cl\_demo\_date\_time=>get\_user\_date( ). \\ntime = cl\_demo\_date\_time=>get\_user\_time( ). \\n\\ \\nyear = substring( val = date off = 0 len = 4 ). \\nmonth = substring( val = date off = 4 len = 2 ). \\nday = substring( val = date off = 6 len = 2 ). \\nhour = substring( val = time off = 0 len = 2 ). \\nminute = substring( val = time off = 2 len = 2 ). \\nsecond = substring( val = time off = 4 len = 2 ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abencharacter\_date\_time.html abenchar\_date\_time\_fields\_access.html