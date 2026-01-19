---
title: "ABENCOUNTRY"
description: |
  ABENCOUNTRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCOUNTRY.htm"
abapFile: "ABENCOUNTRY.html"
keywords: ["insert", "if", "try", "method", "class", "data", "types", "ABENCOUNTRY"]
---

The formatting settings of the [language environment](ABENLANGUAGE.html) determine

for formatted output.

The formatting settings are set as follows:

The formatting settings affect the following ABAP language elements:

The content of data object of the types `d` or `t` is normally formatted independently from their content. [Invalid values](ABENCHAR_DATE_TIME_FIELDS_VALIDITY.html) are also interpreted as date or time specifications. For time output in the 12 hour format, the separators are inserted at the respective points for invalid values and the output of the AM/am or PM/pm abbreviation is undefined.

Time stamp fields of the type `utclong` must contain valid values for [UTC time stamps](ABENUTC_TIMESTAMP_GLOSRY.html) according to the [POSIX standard](ABENPOSIX_TIMESTAMP_GLOSRY.html) to be able to be represented as dynpro fields on dynpros and only valid values can be entered. Invalid values can be produced by castings.

-   the number format (decimal and thousands separators)
-   The date format (separators and order)
-   The time format (24 hour or 12 hour format)
-   The time stamp format (composed of date format and time format)

-   At the start of an [internal session](ABENINTERNAL_SESSION_GLOSRY.html), they are determined by the corresponding *Defaults* in the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html) of the current user.
-   This default setting for the current internal session can be overwritten by [country-specific formats](ABENCOUNTRY_FORMATS.html) using a suitable API.

-   Specification of the parameter [`ENVIRONMENT`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) for the formatting options [`NUMBER`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html), [`DATE`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html), [`TIME`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html), and [`TIMESTAMP`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) for [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html) in [string templates](ABENSTRING_TEMPLATES.html).

-   The classes `CL_ABAP_DATFM` and `CL_ABAP_TIMEFM` contain helper methods for handling date and time formats.

abenabap.html abenabap\_reference.html abenlanguage.html