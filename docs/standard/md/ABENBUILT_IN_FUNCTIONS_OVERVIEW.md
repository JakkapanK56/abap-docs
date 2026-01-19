---
title: "ABENBUILT_IN_FUNCTIONS_OVERVIEW"
description: |
  ABENBUILT_IN_FUNCTIONS_OVERVIEW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBUILT_IN_FUNCTIONS_OVERVIEW.htm"
abapFile: "ABENBUILT_IN_FUNCTIONS_OVERVIEW.html"
keywords: ["insert", "if", "case", "internal-table", "ABENBUILT", "FUNCTIONS", "OVERVIEW"]
---

The following tables summarize the built-in functions by purpose. Built-in functions are generally [processing functions](ABENPROCESS_FUNCTION_GLOSRY.html) or [description functions](ABENDESCRIPTION_FUNCTION_GLOSRY.html).

These include the logical functions, which either evaluate a logical expression as Boolean functions or return a truth value as a predicate function.

[**\-> More about**](ABENLOGIC_FUNCTIONS.html)

[**\-> More about**](ABENMATHEMATICAL_FUNCTIONS.html)

[**\-> More about**](ABENSTRING_FUNCTIONS.html)

[**\-> More about**](ABENBINARY_FUNCTIONS.html)

[**\-> More about**](ABENTIMESTAMP_FUNCTIONS.html)

[**\-> More about**](ABENITAB_FUNCTIONS.html)

-   A processing function performs general processing and returns a return value according to its purpose.
-   A description function determines a property of an [argument](ABENARGUMENT_GLOSRY.html) and usually returns this property as a numeric value.

**Function** **Meaning** **Function** **Meaning** **Function** **Meaning** **Function** **Meaning** **Function** **Meaning** **Function** **Meaning** [`boolc`](ABENBOOLE_FUNCTIONS.html), [`boolx`](ABENBOOLE_FUNCTIONS.html), [`xsdbool`](ABENBOOLE_FUNCTIONS.html) Boolean functions [`contains`](ABENCONTAINS_FUNCTIONS.html), [`contains_any_of`](ABENCONTAINS_FUNCTIONS.html), [`contains_any_not_of`](ABENCONTAINS_FUNCTIONS.html) Predicate functions for strings [`matches`](ABENMATCHES_FUNCTIONS.html) Predicate function for strings [`line_exists`](ABENLINE_EXISTS_FUNCTION.html) Predicate function for internal tables [`abs`](ABENNUMERICAL_FUNCTIONS.html), [`ceil`](ABENNUMERICAL_FUNCTIONS.html), [`floor`](ABENNUMERICAL_FUNCTIONS.html), [`frac`](ABENNUMERICAL_FUNCTIONS.html), [`sign`](ABENNUMERICAL_FUNCTIONS.html), [`trunc`](ABENNUMERICAL_FUNCTIONS.html) General numeric functions [`ipow`](ABENPOWER_FUNCTION.html) Integer power function [`nmax`](ABENNMAX_NMIN_FUNCTIONS.html), [`nmin`](ABENNMAX_NMIN_FUNCTIONS.html) Numeric extremum functions [`acos`](ABENFLOATING_POINT_FUNCTIONS.html), [`asin`](ABENFLOATING_POINT_FUNCTIONS.html), [`atan`](ABENFLOATING_POINT_FUNCTIONS.html), [`cos`](ABENFLOATING_POINT_FUNCTIONS.html), [`sin`](ABENFLOATING_POINT_FUNCTIONS.html), [`tan`](ABENFLOATING_POINT_FUNCTIONS.html), [`cosh`](ABENFLOATING_POINT_FUNCTIONS.html), [`sinh`](ABENFLOATING_POINT_FUNCTIONS.html), [`tanh`](ABENFLOATING_POINT_FUNCTIONS.html), [`exp`](ABENFLOATING_POINT_FUNCTIONS.html), [`log`](ABENFLOATING_POINT_FUNCTIONS.html), [`log10`](ABENFLOATING_POINT_FUNCTIONS.html), [`sqrt`](ABENFLOATING_POINT_FUNCTIONS.html) Floating point functions [`round`](ABENDEC_FLOATING_POINT_FUNCTIONS.html), [`rescale`](ABENDEC_FLOATING_POINT_FUNCTIONS.html) Rounding functions [`charlen`](ABENLENGTH_FUNCTIONS.html), [`dbmaxlen`](ABENLENGTH_FUNCTIONS.html), [`numofchar`](ABENLENGTH_FUNCTIONS.html), [`strlen`](ABENLENGTH_FUNCTIONS.html) Length functions [`char_off`](ABENLENGTH_FUNCTIONS_ARGS.html) Length function [`cmax`](ABENCMAX_CMIN_FUNCTIONS.html), [`cmin`](ABENCMAX_CMIN_FUNCTIONS.html) Character-like extremum value functions [`count`](ABENCOUNT_FUNCTIONS.html), [`count_any_of`](ABENCOUNT_FUNCTIONS.html), [`count_any_not_of`](ABENCOUNT_FUNCTIONS.html) Search functions [`distance`](ABENDISTANCE_FUNCTIONS.html) Similarity function [`condense`](ABENCONDENSE_FUNCTIONS.html) Condense function [`concat_lines_of`](ABENCONCATENATION_FUNCTIONS.html) Concatenation function [`escape`](ABENESCAPE_FUNCTIONS.html) Escape symbol function [`find`](ABENSEARCH_FUNCTIONS.html), [`find_end`](ABENSEARCH_FUNCTIONS.html), [`find_any_of`](ABENSEARCH_FUNCTIONS.html), [`find_any_not_of`](ABENSEARCH_FUNCTIONS.html) Search functions [`insert`](ABENINSERT_FUNCTIONS.html) Insert function [`match`](ABENMATCH_FUNCTIONS.html) Substring function [`repeat`](ABENREPEAT_FUNCTIONS.html) Repeat function [`replace`](ABENREPLACE_FUNCTIONS.html) Replace function [`reverse`](ABENREVERSE_FUNCTIONS.html) Reverse function [`segment`](ABENSEGMENT_FUNCTIONS.html) Segment function [`shift_left`](ABENSHIFT_FUNCTIONS.html), [`shift_right`](ABENSHIFT_FUNCTIONS.html) Shift functions [`substring`](ABENSUBSTRING_FUNCTIONS.html), [`substring_after`](ABENSUBSTRING_FUNCTIONS.html), [`substring_from`](ABENSUBSTRING_FUNCTIONS.html), [`substring_before`](ABENSUBSTRING_FUNCTIONS.html), [`substring_to`](ABENSUBSTRING_FUNCTIONS.html) Substring functions [`to_upper`](ABENCASE_FUNCTIONS.html), [`to_lower`](ABENCASE_FUNCTIONS.html), [`to_mixed`](ABENCASE_FUNCTIONS.html), [`from_mixed`](ABENCASE_FUNCTIONS.html) Case functions [`translate`](ABENTRANSLATE_FUNCTIONS.html) Translation function [`xstrlen`](ABENDESCRIPTIVE_FUNCTIONS_BINARY.html) Length function [`bit-set`](ABENBIT_FUNCTIONS.html) Bit function [`utclong_current`](ABENUTCLONG_CURRENT.html) Current UTC time stamp [`utclong_add`](ABENUTCLONG_ADD.html) Addition function for time stamps [`utclong_diff`](ABENUTCLONG_DIFF.html) Difference function for time stamps [`lines`](ABENDESCRIPTIVE_FUNCTIONS_TABLE.html) Row function [`line_index`](ABENLINE_INDEX_FUNCTION.html) Index function abenabap.html abenabap\_reference.html abenbuilt\_in.html abenbuilt\_in\_functions.html