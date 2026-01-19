---
title: "The settings for a specific country can"
description: |
  -   Number Formats(ABENNUMBER_FORMATS.html) -   Date Formats(ABENDATE_FORMATS.html) -   Time Formats(ABENTIME_FORMATS.html) -   be set for an internal session(ABENINTERNAL_SESSION_GLOSRY.html) using a suitable API or the statement `SET COUNTRY`(ABAPSET_COUNTRY.html) -   be used in string
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCOUNTRY_FORMATS.htm"
abapFile: "ABENCOUNTRY_FORMATS.html"
keywords: ["do", "if", "try", "data", "ABENCOUNTRY", "FORMATS"]
---

The country-specific formatting settings for numbers, dates, and times are stored in a different system table (`T005X`) than the formats of the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html). The rows of table `T005X` contain a key field `LAND` in which a country key is stored, and fields `XDEZP`, `DATFM`, and `TIMEFM` for the respective formatting.

For a time stamp, the date format and time format affect the respective parts and the decimal separator follows the number format.

The settings for a specific country can

-   [Number Formats](ABENNUMBER_FORMATS.html)
-   [Date Formats](ABENDATE_FORMATS.html)
-   [Time Formats](ABENTIME_FORMATS.html)

-   be set for an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) using a suitable API or the statement [`SET COUNTRY`](ABAPSET_COUNTRY.html)
-   be used in [string templates](ABENSTRING_TEMPLATES.html) using the formatting option [`COUNTRY`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) for the formatting of an [embedded expression](ABENSTRING_TEMPLATES_EXPRESSIONS.html).

-   The country names that match the country codes in table `T005X` can be found in table `T005T`.
-   The *Defaults* of the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html) for each user are stored in DDIC database table `USR01`. The country-specific formatting settings for numbers, dates, and times are stored in columns `DCPFM`, `DATFM`, and `TIMEFM`. These columns refer to the same [DDIC domains](ABENDOMAIN_GLOSRY.html) as those of table `T005X`.

abenabap.html abenabap\_reference.html abenlanguage.html abencountry.html