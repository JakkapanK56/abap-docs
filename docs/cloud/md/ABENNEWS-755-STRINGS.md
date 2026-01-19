---
title: "The"
description: |
  can now also be applied to decimal floating point numbers(ABENDECFLOAT_GLOSRY.html). -   By the new addition `PCRE`(ABAPFIND_PATTERN.html) that can be used instead of `REGEX`(ABAPFIND_PATTERN.html) in the statements `FIND`(ABAPFIND.html) and `REPLACE`(ABAPREPLACE.html). -   By the new para
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-755-STRINGS.htm"
abapFile: "ABENNEWS-755-STRINGS.html"
keywords: ["if", "catch", "method", "class", "ABENNEWS", "755", "STRINGS"]
---

[1\. Support of Perl Compatible Regular Expressions](#ABAP_MODIFICATION_1@4@)

[2\. Verbatim Replacements](#ABAP_MODIFICATION_2@4@)

[3. New Catchable Exception `CX_SY_STRING_SIZE_TOO_LARGE`](#ABAP_MODIFICATION_3@4@)

[4. Exception `CX_SY_STRING_SIZE_TOO_LARGE` in Transformations](#ABAP_MODIFICATION_4@4@) 

[5. Formatting Option `CURRENCY` for Decimal Floating Point Numbers](#ABAP_MODIFICATION_5@4@)

Besides the existing support of [POSIX regular expressions](ABENPOSIX_REGEX_GLOSRY.html), ABAP supports now also [PCRE regular expressions](ABENPCRE_REGEX_GLOSRY.html) that are processed by the [PCRE2 Library](https://www.pcre.org/) implemented in the [ABAP Kernel](ABENKERNEL_GLOSRY.html). PCRE regular expressions can be used in the same way as POSIX regular expressions. The distinction is made:

PCRE regular expressions are more powerful and have better performance than POSIX regular expressions. For more information, see [Regular Expressions](ABENREGULAR_EXPRESSIONS.html).

The new addition [`VERBATIM`](ABAPREPLACE_OPTIONS.html) of the [`REPLACE`](ABAPREPLACE.html) statement causes all characters of the replacement string to be taken literally. With that addition, special characters for regular expression replacement patterns have no special meaning.

See [Exception `CX_SY_STRING_SIZE_TOO_LARGE` in Transformations](ABENNEWS-755-STRINGS.html).

The exception that occurs when an operation with a [string](ABENSTRING_GLOSRY.html) exceeds its [maximum size](ABENMEMORY_CONSUMPTION_2.html) is now connected to the exception class `CX_SY_STRING_SIZE_TOO_LARGE` and can be handled. Previously, it always resulted in runtime error `STRING_SIZE_TOO_LARGE`.

This exception can also be handled for the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html) if some conditions are met.

The

can now also be applied to [decimal floating point numbers](ABENDECFLOAT_GLOSRY.html).

-   By the new addition [`PCRE`](ABAPFIND_PATTERN.html) that can be used instead of [`REGEX`](ABAPFIND_PATTERN.html) in the statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html).
-   By the new parameter [`pcre`](ABENSTRING_FUNCTIONS_REGEX.html) that can be used instead of [`regex`](ABENSTRING_FUNCTIONS_REGEX.html) in built-in functions.
-   By new (factory) methods of the [system classes](ABENREGEX_SYSTEM_CLASSES.html)\\ `CL_ABAP_REGEX` and `CL_ABAP_MATCHER`.

-   formatting option [`CURRENCY`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) in [string templates](ABENSTRING_TEMPLATES.html)

abenabap.html abennews.html abennews-75.html abennews-755.html