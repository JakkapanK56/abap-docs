---
title: "ABAPCONVERT_DATE"
description: |
  ABAPCONVERT_DATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCONVERT_DATE.htm"
abapFile: "ABAPCONVERT_DATE.html"
keywords: ["select", "loop", "if", "class", "data", "internal-table", "ABAPCONVERT", "DATE"]
---

[Short Reference](ABAPCONVERT_DATE_SHORTREF.html)

`CONVERT \{\ \{DATE dat1 INTO INVERTED-DATE dat2\}`\\ 
        `|\ \{INVERTED-DATE dat1 INTO DATE dat2\}\ \}.`

These variants of the statement `CONVERT` are not allowed in classes. They convert the digits in a character-like data object in `dat1` into their complement on nine (the difference to the number nine) and assign the result to the data object `dat2`. The data objects `dat1` and `dat2` must have a [flat](ABENFLAT_GLOSRY.html) character-like data type with length 8. The same data object can be specified for `dat2` as for `dat1`.

The following program section sorts the internal table `sflight_tab` in descending order by the `fldate` column.

The last nine lines can be replaced by a single line:

-   These forms of the statement `CONVERT` are not allowed in classes. They were previously used for sorting by date fields in internal tables and [extracts](ABENEXTRACT_GLOSRY.html) for changing the sort direction. These have now been replaced by the additions `ASCENDING` and `DESCENDING` of the statement [`SORT`](ABAPSORT_ITAB.html). If necessary, the complement on nine can be formed using the following [`TRANSLATE`](ABAPTRANSLATE.html) statement:
-   `dat2 = dat1. TRANSLATE dat2 USING '09182736455463728190'.`
-   The variant of the statement `CONVERT DATE` shown here must not be confused with the statements [`CONVERT DATE ... INTO UTCLONG`](ABAPCONVERT_DATE_UTCLONG.html), and [`CONVERT DATE ... INTO TIME STAMP`](ABAPCONVERT_DATE_TIME-STAMP.html) for the conversion to UTC time stamps.

-   *Cause:* Conversion not possible due to invalid field length
    *Runtime error:*\\ `CONVERT_ILLEGAL_CONVERSION`

DATA sflight\_tab TYPE TABLE OF sflight. \\n\\ \\nFIELD-SYMBOLS TYPE sflight. \\n\\ \\nSELECT \* FROM sflight INTO TABLE @sflight\_tab. \\n\\ \\nLOOP AT sflight\_tab ASSIGNING . \\n CONVERT DATE \-fldate \\n INTO INVERTED-DATE \-fldate. \\nENDLOOP. \\n\\ \\nSORT sflight\_tab BY fldate. \\n\\ \\nLOOP AT sflight\_tab ASSIGNING . \\n CONVERT INVERTED-DATE \-fldate \\n INTO DATE \-fldate. \\nENDLOOP. SORT sflight\_tab BY fldate DESCENDING. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencharacter\_string\_obsolete.html