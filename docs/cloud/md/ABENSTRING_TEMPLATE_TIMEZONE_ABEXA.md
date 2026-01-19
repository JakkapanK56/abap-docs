---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_TEMPLATE_TIMEZONE_ABEXA.htm"
abapFile: "ABENSTRING_TEMPLATE_TIMEZONE_ABEXA.html"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "types", "internal-table", "ABENSTRING", "TEMPLATE", "TIMEZONE", "ABEXA"]
---

The example demonstrates the formatting of an UTC time stamp using time zones.

All time zones with a geographical reference are read from the database table `TTZZ` into an internal table. An UTC time stamp is created in a time stamp field and, formatted using each of this time zones, and written to the internal table. The internal table is sorted and displayed in accordance with the formatted time stamp.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_str\_template\_timezones DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_timezones IMPLEMENTATION. \\n METHOD main. \\n TYPES: BEGIN OF timezone, \\n TimeZoneID TYPE I\_TimeZone-TimeZoneID, \\n TimeZoneText TYPE I\_TimeZoneText-TimeZoneText, \\n datetime TYPE string, \\n END OF timezone. \\n\\ \\n DATA: timezones TYPE TABLE OF timezone. \\n\\ \\n FIELD-SYMBOLS TYPE timezone. \\n\\ \\n SELECT I\_TimeZone~TimeZoneID, I\_TimeZoneText~TimeZoneText \\n FROM I\_TimeZone INNER JOIN I\_TimeZoneText \\n ON I\_TimeZone~TimeZoneID = I\_TimeZoneText~TimeZoneID \\n WHERE I\_TimeZone~TimeZoneID NOT LIKE '%UTC%' AND \\n I\_TimeZoneText~Language = 'E' \\n INTO CORRESPONDING FIELDS OF TABLE @timezones \\n ##too\_many\_itab\_fields. \\n\\ \\n FINAL(ts) = utclong\_current( ). \\n\\ \\n LOOP AT timezones ASSIGNING . \\n \-datetime = |\\{ ts TIMEZONE = \-TimeZoneID \\n TIMESTAMP = USER \\}|. \\n ENDLOOP. \\n\\ \\n SORT timezones BY datetime. \\n\\ \\n out->write( 'Timezones Around the World' \\n )->write( timezones ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_str\_template\_timezones DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_timezones IMPLEMENTATION. \\n METHOD main. \\n TYPES: BEGIN OF timezone, \\n TimeZoneID TYPE I\_TimeZone-TimeZoneID, \\n TimeZoneText TYPE I\_TimeZoneText-TimeZoneText, \\n datetime TYPE string, \\n END OF timezone. \\n\\ \\n DATA: timezones TYPE TABLE OF timezone. \\n\\ \\n FIELD-SYMBOLS TYPE timezone. \\n\\ \\n SELECT I\_TimeZone~TimeZoneID, I\_TimeZoneText~TimeZoneText \\n FROM I\_TimeZone INNER JOIN I\_TimeZoneText \\n ON I\_TimeZone~TimeZoneID = I\_TimeZoneText~TimeZoneID \\n WHERE I\_TimeZone~TimeZoneID NOT LIKE '%UTC%' AND \\n I\_TimeZoneText~Language = 'E' \\n INTO CORRESPONDING FIELDS OF TABLE @timezones \\n ##too\_many\_itab\_fields. \\n\\ \\n FINAL(ts) = utclong\_current( ). \\n\\ \\n LOOP AT timezones ASSIGNING . \\n \-datetime = |\\{ ts TIMEZONE = \-TimeZoneID \\n TIMESTAMP = USER \\}|. \\n ENDLOOP. \\n\\ \\n SORT timezones BY datetime. \\n\\ \\n out->write( 'Timezones Around the World' \\n )->write( timezones ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html abenstring\_templates.html abenstring\_templates\_abexas.html