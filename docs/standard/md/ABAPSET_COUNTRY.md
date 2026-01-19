---
title: "ABAPSET_COUNTRY"
description: |
  ABAPSET_COUNTRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_COUNTRY.htm"
abapFile: "ABAPSET_COUNTRY.html"
keywords: ["select", "if", "try", "data", "ABAPSET", "COUNTRY"]
---

[Short Reference](ABAPSET_COUNTRY_SHORTREF.html)

`SET COUNTRY cntry.`

This statement sets the [formatting settings](ABENCOUNTRY.html) of the language environment for all subsequent statements of the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

`cntry` expects a character-like data object that either contains a value from the column `LAND` of the database table `T005X` or is initial.

If the content of `cntry` cannot be found in the database table `T005X` nor contains a blank in the first position, `sy-subrc` is set to 4 and the following settings are made:

Setting of the formatting settings of the language environment and their effect on the addition [`ENVIRONMENT`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) in [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html) in [string templates](ABENSTRING_TEMPLATES.html).

-   If `cntry` contains a value from the table `T005X`, the number format, date format, time format, and time stamp format are set to a [country-specific format](ABENCOUNTRY_FORMATS.html) in accordance with the entries in columns `XDEZP`, `DATFM`, and `TIMEFM`.
-   If `cntry` is initial, or, more specifically, it contains a blank in the first position, the formatting is set in accordance with the *Defaults* in the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html).

-   The decimal separator is a decimal point and the thousands separator is a comma.
-   Date in the form *mm/dd/yyyy*
-   Time in 24-hour format
-   Time stamp according to the settings for date, time, and decimal separator

-   As long as the statement `SET COUNTRY` is not executed in an internal session, the formatting is set according to the *Defaults* in the [user master record](ABENUSER_MASTER_RECORD_GLOSRY.html).
-   If certain formatting settings are only required for one or a few formattings, the formatting option [`country`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) can be used for [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html) in [string templates](ABENSTRING_TEMPLATES.html) instead of `SET COUNTRY`.
-   The statement `SET COUNTRY` must not be confused with the obsolete addition [`COUNTRY`](ABAPSET_LOCALE_OBSOLETE.html) of the statement [`SET LOCALE LANGUAGE`](ABAPSET_LOCALE.html), used for setting the [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html). In particular, there is no corresponding `GET COUNTRY` statement.

-   [String Templates, Formatting Settings](ABENSTRING_TEMPLATE_USER_ABEXA.html)
-   [`WRITE`, Truncation Behavior](ABENWRITE_TRUNCATION_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT SINGLE land \\n FROM t005x \\n WHERE timefm <> ' ' \\n INTO @FINAL(country). \\n\\ \\nSET COUNTRY country. \\n\\ \\nout->write( \\n |\\{ sy-datlo DATE = ENVIRONMENT \\}\\\\n\\{ \\n sy-timlo TIME = ENVIRONMENT \\}\\\\n\\{ \\n utclong\_current( ) TIMESTAMP = ENVIRONMENT \\}| ). \\n\\ \\nout->display( ). `sy-subrc` **Meaning** 0 The specified country key was found in the database table `T005X` or a space was specified. 4 The specified country key was not found in database table `T005X`. abenabap.html abenabap\_reference.html abenlanguage.html abencountry.html