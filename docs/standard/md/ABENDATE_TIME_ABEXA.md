---
title: "ABENDATE_TIME_ABEXA"
description: |
  ABENDATE_TIME_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDATE_TIME_ABEXA.htm"
abapFile: "ABENDATE_TIME_ABEXA.html"
keywords: ["if", "method", "class", "data", "ABENDATE", "TIME", "ABEXA"]
---

This example demonstrates calculations with date and time fields.

In the first part of the `main` method, the last day of the previous month is assigned to the date field `ultimo`. First, `ultimo` is filled with the current date. Then, the date is changed to the first day of the current month by specifying an offset. Finally, 1 is subtracted from `ultimo` so that the content of the field is changed to the last day of the previous month. Before the subtraction takes place, the system converts `ultimo` into the number of days since 01.01.0001 and converts the result back into a date.

In the second part, the number of hours between midnight and the current time are calculated. First, the difference between the time fields is calculated. The difference is then converted into the total number of seconds using the `MOD` operation. A positive difference remains unchanged. This step is only necessary for negative differences. Finally, the number of hours is calculated by dividing the number of seconds by 3600.

\* Public class definition \\nCLASS cl\_demo\_data\_date\_time DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_data\_date\_time IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: ultimo TYPE d, \\n t1 TYPE t VALUE '000000', \\n t2 TYPE t, \\n diff TYPE i, \\n seconds TYPE i, \\n hours TYPE i. \\n\\ \\n "date calculation \\n\\ \\n ultimo = cl\_demo\_date\_time=>get\_user\_date( ). \\n ultimo+6(2) = '01'. \\n ultimo -= 1. \\n out->write( \\n |Last day of last month: \\{ ultimo \\}| ). \\n\\ \\n "time calculation \\n\\ \\n t2 = cl\_demo\_date\_time=>get\_user\_time( ). \\n diff = t2 - t1. \\n seconds = diff MOD 86400. \\n hours = seconds / 3600. \\n out->write( \\n |Number of hours since midnight: \\{ hours \\}| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_data\_date\_time DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_data\_date\_time IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: ultimo TYPE d, \\n t1 TYPE t VALUE '000000', \\n t2 TYPE t, \\n diff TYPE i, \\n seconds TYPE i, \\n hours TYPE i. \\n\\ \\n "date calculation \\n\\ \\n ultimo = cl\_demo\_date\_time=>get\_user\_date( ). \\n ultimo+6(2) = '01'. \\n ultimo -= 1. \\n out->write( \\n |Last day of last month: \\{ ultimo \\}| ). \\n\\ \\n "time calculation \\n\\ \\n t2 = cl\_demo\_date\_time=>get\_user\_time( ). \\n diff = t2 - t1. \\n seconds = diff MOD 86400. \\n hours = seconds / 3600. \\n out->write( \\n |Number of hours since midnight: \\{ hours \\}| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendate\_time\_processing.html abencharacter\_date\_time.html abenchar\_date\_time\_fields\_access.html