---
title: "ABAPWRITE_TO_SHORTREF"
description: |
  ABAPWRITE_TO_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWRITE_TO_SHORTREF.htm"
abapFile: "ABAPWRITE_TO_SHORTREF.html"
keywords: ["if", "data", "types", "ABAPWRITE", "SHORTREF"]
---

[Reference](ABAPWRITE_TO.html)

`WRITE \{source|(source_name)\} TO destination    [LEFT-JUSTIFIED|CENTERED|RIGHT-JUSTIFIED]\    [EXPONENT exp]\    [NO-GROUPING]\    [NO-SIGN]\    [NO-ZERO]\    [CURRENCY cur]\    [DECIMALS dec]\    [ROUND scale]\    [UNIT unit]\    [ENVIRONMENT TIME FORMAT]\    [TIME ZONE tz]\    [STYLE stl]\    [USING \{\ \{NO EDIT MASK\}|\{EDIT MASK mask\}\ \}]\    [DD/MM/YY|MM/DD/YY|DD/MM/YYYY|MM/DD/YYYY|DDMMYY|MMDDYY|YYMMDD].`

Formats the content of a data object specified either statically as `source` or dynamically in `source_name` and writes it to the variable `destination`.

-   [`LEFT-JUSTIFIED|CENTERED|RIGHT-JUSTIFIED`](ABAPWRITE_TO_OPTIONS.html)\\
    Determines whether the output is left-aligned, centered or right-aligned within the current output length.
-   [`EXPONENT exp`](ABAPWRITE_TO_OPTIONS.html)\\
    Determines the exponent for the output of data objects of the data type `f`.
-   [`NO-GROUPING`](ABAPWRITE_TO_OPTIONS.html)\\
    Suppresses the thousands separators in the output of data objects of the data types (`b`, `s`), `i`, `int8`, or `p` or `p`.
-   [`NO-SIGN`](ABAPWRITE_TO_OPTIONS.html)\\
    Suppresses the sign in the output of data objects of the data types `i`, `p`, or `f`.
-   [`NO-ZERO`](ABAPWRITE_TO_OPTIONS.html)\\
    Replaces zeros with blanks.
-   [`CURRENCY cur`](ABAPWRITE_TO_OPTIONS.html)\\
    Defines currency-related [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) for the output of data objects of the data types `i` or `p` by using a currency key `cur` from the database table `TCURX`.
-   [`DECIMALS dec`](ABAPWRITE_TO_OPTIONS.html)\\
    Sets the decimal places contained in the output of data objects of the data types `i`, `p`, `f`, or of UTC time stamps, to `dec`.
-   [`ROUND scale`](ABAPWRITE_TO_OPTIONS.html)\\
    Multiplies the value of a data object of the data type `p` by `10**(-scale)` before the output.
-   [`UNIT unit`](ABAPWRITE_TO_OPTIONS.html)\\
    Cuts off decimal places which have the value 0 and are outside the precision of a measurement unit `unit` from the database table `T006` when formatting data objects of the data type `p`.
-   [`ENVIRONMENT TIME FORMAT`](ABAPWRITE_TO_OPTIONS.html)\\
    Formats a time output in 12 hour or 24 hour format.
-   [`TIME ZONE tz`](ABAPWRITE_TO_OPTIONS.html)\\
    Formats an [UTC time stamp](ABENUTC_TIMESTAMP_GLOSRY.html) with reference to a time zone `tz`.
-   [`STYLE stl`](ABAPWRITE_TO_OPTIONS.html)\\
    Formats a [decimal floating point number](ABENDECFLOAT_GLOSRY.html) into an output format `stl`.
-   [`USING \{\{NO EDIT MASK\}|\{EDIT MASK mask\}\}`](ABAPWRITE_TO_OPTIONS.html)\\
    \\
    `NO EDIT MASK` - Disables the execution of an assigned [conversion exit](ABENCONVERSION_EXIT_GLOSRY.html).
    \\
    `EDIT MASK` - Either calls another conversion exit `mask` or defines an edit mask `mask`.
-   [`DD/MM/YY|MM/DD/YY|DD/MM/YYYY|MM/DD/YYYY|DDMMYY|MMDDYY|YYMMDD`](ABAPWRITE_TO_OPTIONS.html)\\
    Functions as an edit mask for the output of data objects of the data type `d`.
    

abenabap.html abenabap\_reference.html abenabap\_shortref.html