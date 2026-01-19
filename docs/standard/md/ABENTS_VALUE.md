---
title: "ABENTS_VALUE"
description: |
  ABENTS_VALUE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTS_VALUE.htm"
abapFile: "ABENTS_VALUE.html"
keywords: ["if", "data", "types", "ABENTS", "VALUE"]
---

The values of data objects of the character-like data types `c` and `string` can be assigned to time stamp fields of the type `utclong` if they contain a valid representation of a time stamp. The following strings are valid UTC time stamps:

*yyyy-mm-dd hh:mm:ss.fffffff*\\ \\n*yyyy-mm-dd hh:mm:ss,fffffff*\\ \\n*yyyy-mm-ddThh:mm:ss.fffffff*\\ \\n*yyyy-mm-ddThh:mm:ss,fffffff*

They are composed as follows:

A time stamp must have a left-aligned representation in the source field. Trailing blanks are usually allowed but ignored. Any initial strings and strings that contain only blanks are also allowed and are converted to an initial time stamp.

In addition to the valid values, the following (invalid) values are possible:

Other specifications than described here are forbidden.

Valid representation of UTC time stamps in character-like source fields. All assignments shown here are possible.

-   *yyyy-mm-dd* are eight digits separated by hyphens (`-`), which must represent valid dates in accordance with the calendar rules: `yyyy` (year): 0001 to 9999, *mm* (month): 01 to 12, *dd* (day): 01 to 31. The days `1582-10-05` to *1582-10-14* are skipped (due to the switch from the Julian to the Gregorian calendar).
-   *hh:mm:ss* are digits separated by colons (`:`) that must represent a time in the 24 hour range: 00 to 23 for *hh* (hours) and 00 to 59 for *mm* (minutes) and 00 to 59 for *ss*.
-   The seconds *ss* can be followed by up to seven significant decimal places *fffffff* (fractions of a second) that are separated by a period (`.`) or a comma (`,`). There can also be more than seven decimal places, however the digits after the seventh decimal place must be *0*.
-   The separator between the date and the time must consist of exactly one blank or the character *T*.

-   A value such as *0000-00-00 00:00:00.0000000*, which is invalid, is converted to the initial value.
-   An invalid time such as *24:00:00.0000000* produces an UTC time stamp on the next day with the time *00:00:00.0000000*.

-   The different valid representations support different standards:

-   The representation that uses a blank as the separator between date and time supports the SDL standard in accordance with ISO 9075.
-   The representation that uses the character *T* as a separator between date and time supports ISO 8601 for date formats and time specifications.

-   When UTC time stamps are [converted](ABENDATE_TIME_SOURCE_FIELDS.html) to character-like fields, the representation uses a blank as a separator. This is also the default setting for character-like formatting of UTC time stamps to [string templates](ABENSTRING_TEMPLATES.html) and when formatting using [`WRITE TO`](ABAPWRITE_TO.html). In [embedded expressions](ABENEMBEDDED_EXPRESSION_GLOSRY.html) of string templates, the formatting option [`ISO`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) can be used to configure the representation with the separator *T*. The separator *T* is also used for [mappings](ABENABAP_XSLT_ASXML_ELEMENTARY.html) in [asXML](ABENASXML_GLOSRY.html).

DATA ts TYPE utclong. \\n\\ \\nts = EXACT #( \`2019-04-10 09:53:04 \` ). \\nts = EXACT #( \`2019-04-10T09:53:04 \` ). \\nts = EXACT #( \`2019-04-10 24:00:00 \` ). \\nts = EXACT #( \`2019-04-10T24:00:00 \` ). \\nts = EXACT #( \`2019-04-10 09:53:04,123 \` ). \\nts = EXACT #( \`2019-04-10T09:53:04,123 \` ). \\nts = EXACT #( \`2019-04-10 09:53:04.123 \` ). \\nts = EXACT #( \`2019-04-10T09:53:04.123 \` ). \\nts = EXACT #( \`2019-04-10 09:53:04,12345670000000000 \` ). \\nts = EXACT #( \`2019-04-10T09:53:04,12345670000000000 \` ). \\nts = EXACT #( \`2019-04-10 09:53:04.12345670000000000 \` ). \\nts = EXACT #( \`2019-04-10T09:53:04.12345670000000000 \` ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenconversion\_rules.html abenconversion\_elementary.html abencharacter\_source\_fields.html