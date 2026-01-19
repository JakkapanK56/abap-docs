---
title: "ABENNEWS-70-REGEX"
description: |
  ABENNEWS-70-REGEX - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-70-REGEX.htm"
abapFile: "ABENNEWS-70-REGEX.html"
keywords: ["if", "data", "internal-table", "ABENNEWS", "REGEX"]
---

[1\. Search for Regular Expressions in Character Strings](#ABAP_MODIFICATION_1@4@)

[2. Search for Multiple Occurrences Using `FIND`](#ABAP_MODIFICATION_2@4@)

[3\. Number of Occurrences in Unsuccessful Searches](#ABAP_MODIFICATION_3@4@)

[4\. Find and Replace in Internal Tables](#ABAP_MODIFICATION_4@4@)

[5. New Additions in `CONCATENATE`](#ABAP_MODIFICATION_5@4@)

From ABAP release 7.0, it is possible to search for [regular expressions](ABENREGULAR_EXPRESSION_GLOSRY.html) in the statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE_IN_PATTERN.html). This replaces the search for patterns using the statement [`SEARCH`](ABAPSEARCH-.html).

From ABAP release 7.0, the addition `ALL OCCURRENCES` can be used in the statement [`FIND`](ABAPFIND.html). The previous behavior is expressed using the addition `FIRST OCCURRENCE`. In addition, the statements `FIND` and [`REPLACE`](ABAPREPLACE_IN_PATTERN.html) for pattern-based searches have been mostly standardized.

From ABAP release 7.0, the addition `REPLACEMENT COUNT` of the statement [`REPLACE`](ABAPREPLACE_IN_PATTERN.html) sets the operand `rcnt` to 0 if no replacement has been made. This is the same as the statement [`FIND`](ABAPFIND.html), in which `mcnt` is also set to 0 by the addition `MATCH COUNT` for unsuccessful searches. Before ABAP release 7.0, `rcnt` retained its own previous value if no replacement was made.

From ABAP release 7.0, internal tables can be searched using the statement [`FIND IN TABLE`](ABAPFIND_ITAB.html) and modified using [`REPLACE IN TABLE`](ABAPREPLACE_ITAB.html). This replaces the search in internal tables using the statement [`SEARCH`](ABAPSEARCH_ITAB.html).

From ABAP release 7.0, the addition `LINES OF` in the statement [`CONCATENATE`](ABAPCONCATENATE.html) can be used to concatenate lines of an internal table.

The new addition `RESPECTING BLANKS` enables trailing blanks to be respected data objects of fixed length. This can also be used to assign text fields to strings when respecting the trailing blanks.

abenabap.html abennews.html abennews-70\_ehps.html abennews-70.html