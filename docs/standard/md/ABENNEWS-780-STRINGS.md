---
title: "ABENNEWS-780-STRINGS"
description: |
  ABENNEWS-780-STRINGS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-780-STRINGS.htm"
abapFile: "ABENNEWS-780-STRINGS.html"
keywords: ["if", "catch", "method", "class", "ABENNEWS", "780", "STRINGS"]
---

[1\. Support of Perl Compatible Regular Expressions](#ABAP_MODIFICATION_1@4@)

[2\. Verbatim Replacements](#ABAP_MODIFICATION_2@4@)

[3. New Catchable Exception `CX_SY_STRING_SIZE_TOO_LARGE`](#ABAP_MODIFICATION_3@4@)

[4. Formatting Option `CURRENCY` for Decimal Floating Point Numbers](#ABAP_MODIFICATION_4@4@)

Besides the existing support for [POSIX regular expressions](ABENPOSIX_REGEX_GLOSRY.html) (now obsolete), ABAP supports now also [PCRE regular expressions](ABENPCRE_REGEX_GLOSRY.html) that are processed by the [PCRE2 Library](https://www.pcre.org/) implemented in the [ABAP Kernel](ABENKERNEL_GLOSRY.html). PCRE regular expressions can be used in the same way as POSIX regular expressions. The following distinctions exist:

PCRE regular expressions are more powerful and have better performance than POSIX regular expressions. For more information, see [Regular Expressions](ABENREGULAR_EXPRESSIONS.html).

The new addition [`VERBATIM`](ABAPREPLACE_OPTIONS.html) of the [`REPLACE`](ABAPREPLACE.html) statement causes all characters of the replacement string to be taken literally. If this addition is used, special characters for regular expression replacement patterns have no special meaning.

The exception that occurs when an operation with a [string](ABENSTRING_GLOSRY.html) exceeds its [maximum size](ABENMEMORY_CONSUMPTION_2.html) is now connected to the exception class `CX_SY_STRING_SIZE_TOO_LARGE` and can be handled. Previously, it always resulted in runtime error `STRING_SIZE_TOO_LARGE`.

The addition [`CURRENCY`](ABAPWRITE_TO_OPTIONS.html) of the [`WRITE TO`](ABAPWRITE_TO.html) and [`WRITE`](ABAPWRITE-.html) statements and the formatting option [`CURRENCY`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) in [string templates](ABENSTRING_TEMPLATES.html) can now also be applied to [decimal floating point numbers](ABENDECFLOAT_GLOSRY.html).

-   The new addition [`PCRE`](ABAPFIND_PATTERN.html) can be used instead of [`REGEX`](ABAPFIND_PATTERN.html) in the statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE.html).
-   The new parameter [`pcre`](ABENSTRING_FUNCTIONS_REGEX.html) can be used instead of [`regex`](ABENSTRING_FUNCTIONS_REGEX.html) in built-in functions.
-   The new (factory) methods of the [system classes](ABENREGEX_SYSTEM_CLASSES.html)\\ `CL_ABAP_REGEX` and `CL_ABAP_MATCHER`.

abenabap.html abennews.html abennews-78.html abennews-780.html