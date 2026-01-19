---
title: "ABENTIME_FORMATS"
description: |
  ABENTIME_FORMATS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTIME_FORMATS.htm"
abapFile: "ABENTIME_FORMATS.html"
keywords: ["select", "do", "if", "try", "method", "class", "data", "ABENTIME", "FORMATS"]
---

The country-specific format of times is determined by the fixed values of the [DDIC domain](ABENDOMAIN_GLOSRY.html)\\ `XUTIMEFM`. The mapping between countries and formats happens in a system table (column `TIMEFM` of the database table `T005X`) The following table shows the date formats represented by the fixed values of the domain, where *hh*, *mm*, and *ss* stand for hour, minute, and second. One 24-hour format and several 12-hour formats are available:

The setting for the time format also affects the formatting of UTC time stamps in [time stamp fields](ABENTIMESTAMP_FIELD_GLOSRY.html).

Output of a time and UTC time stamps with different time formats. By specifying a country that s available in the system table (`T005X`), the respective country-specific format is selected.

-   The 24-hour format follows the ISO-8601 standard.
-   The 12-hour formats are specific to certain English-speaking countries such as Australia, Canada, New Zealand, and the USA. `AM/am` stands for *Ante meridiem* (*before noon*) and `PM/pm` stands for *Post meridiem* (*after noon*).
-   The formats for the values *1* and *2* or *3* and *4* differ only in the capitalization of `AM/PM` and `am/pm`.
-   For the 12-hour formats of values *1* and *2*, midnight and noon are formatted as 12:00:00.
-   For the 12-hour formats of values *3* and *2*, midnight and noon are formatted as 00:00:00.

-   All time formats are suitable for the representation of times. Only the 24-hour format is suitable for the representation of a duration, that is, the interval between two points in time. It does not make sense to use `AM/am` and `PM/pm` for a duration.
-   The class `CL_ABAP_TIMEFM` contains helper methods for handling time formats.

-   [String Templates, Time Formats](ABENSTRING_TEMPLATE_TIME_ABEXA.html)
-   [String Templates, Time Stamp Templates](ABENSTRING_TEMPLATE_UTC_ABEXA.html)

cl\_demo\_output=>display( \\n |\\{ cl\_demo\_date\_time=>get\_user\_time( ) COUNTRY = 'DE ' \\}\\\\n\\{ \\n utclong\_current( ) COUNTRY = 'DE ' \\}| ). **Fixed Value of `XUTIMEFM`** **Date Format**\\ blank 24-hour format (default setting) `hh:mm:ss`\\ *1* 12-hour format (1 to 12) `hh:mm:ss AM` and `hh:mm:ss PM`\\ *2* 12-hour format (1 to 12) `hh:mm:ss am` and `hh:mm:ss pm`\\ *3* 12-hour format (0 to 11) `hh:mm:ss AM` and `hh:mm:ss PM`\\ *4* 12-hour format (0 to 11) `hh:mm:ss am` and `hh:mm:ss pm` abenabap.html abenabap\_reference.html abenlanguage.html abencountry.html abencountry\_formats.html