---
title: "ABENDATE_FORMATS"
description: |
  ABENDATE_FORMATS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDATE_FORMATS.htm"
abapFile: "ABENDATE_FORMATS.html"
keywords: ["select", "do", "if", "try", "method", "class", "data", "ABENDATE", "FORMATS"]
---

The country-specific format of dates is determined by the fixed values of the [DDIC domain](ABENDOMAIN_GLOSRY.html)\\ `XUDATFM`. The mapping between countries and formats happens in a system table The following table shows the date formats represented by the fixed values of the domain, where *mm*, *dd*, and *yyyy* stand for day, month, and year:

The setting for the date format also affects the formatting of UTC time stamps in [time stamp fields](ABENTIMESTAMP_FIELD_GLOSRY.html).

The class `CL_ABAP_DATFM` contains helper methods for dealing with date formats.

Output of a date and time stamps with different date formats. By specifying a country that s available in the system table, the respective country-specific format is selected.

-   In the Japanese formats for the values *7*, *8*, and *9*, the first two characters *gg* of a four-digit year are formatted as a Japanese Unicode character for the current Japanese Emperor. The last two characters *yy* signify the year of his reign.
-   In the Islamic formats for the values *A* and *B*, the date is formatted according to the Islamic moon calendar, which calculates time since 16th July 622, which is the date on which Mohammed left Mecca (Hijra). Since this calculation can be different in different Islamic countries, two formats are offered, each of which can be set individually. The corresponding settings are in the database table `TISLCAL`, and can be changed using the program `I18N_MAINTAIN_TISLCAL`.
-   The Iranian format for value *C* is based on an Islamic sun calendar, which calculates the time in sun years since the Hijra.

cl\_demo\_output=>display( \\n |\\{ cl\_demo\_date\_time=>get\_user\_date( ) COUNTRY = 'DE ' \\}\\\\n\\{ \\n cl\_demo\_date\_time=>get\_user\_date( ) COUNTRY = 'US ' \\}\\\\n\\{ \\n utclong\_current( ) COUNTRY = 'DE ' \\}\\\\n\\{ \\n utclong\_current( ) COUNTRY = 'US ' \\}| ). **Fixed Value of `XUDATFM`** **Date Format**\\ *1* `dd.mm.yyyy`\\ *2* `mm/dd/yyyy`\\ *3* `mm-dd-yyyy`\\ *4* `yyyy.mm.dd`\\ *5* `yyyy/mm/dd`\\ *6* `yyyy-mm-dd`\\ *7* `ggyy.mm.dd`, Japanese date *8* `ggyy/mm/dd`, Japanese date *9* `ggyy-mm-dd`, Japanese date *A* `yyyy/mm/dd`, Islamic date 1 *B* `yyyy/mm/dd`, Islamic date 2 *C* `yyyy/mm/dd`, Iranian date abenabap.html abenabap\_reference.html abenlanguage.html abencountry.html abencountry\_formats.html