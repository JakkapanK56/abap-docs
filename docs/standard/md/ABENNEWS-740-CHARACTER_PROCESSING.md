---
title: "ABENNEWS-740-CHARACTER_PROCESSING"
description: |
  ABENNEWS-740-CHARACTER_PROCESSING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740-CHARACTER_PROCESSING.htm"
abapFile: "ABENNEWS-740-CHARACTER_PROCESSING.html"
keywords: ["insert", "if", "case", "data", "types", "ABENNEWS", "740", "CHARACTER", "PROCESSING"]
---

[1. New Formatting Option `ALPHA`](#ABAP_MODIFICATION_1@4@)

[2. New Formatting Option `XSD`](#ABAP_MODIFICATION_2@4@)

[3\. Comparisons of String Expressions](#ABAP_MODIFICATION_3@4@)

[4\. Assignments of String Expressions](#ABAP_MODIFICATION_4@4@)

The new [formatting option `ALPHA`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) for [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html) in [string templates](ABENSTRING_TEMPLATES.html) inserts leading zeros in front of strings of digits or removes these zeros.

The new [formatting option `XSD`](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) for [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html) in [string templates](ABENSTRING_TEMPLATES.html) creates their asXML format for elementary data types.

[Comparisons of string expressions](ABENLOGEXP_RULES_EXPR_CHAR.html) are now possible when the [comparison operator](ABENCOMP_OPERATOR_GLOSRY.html)\\ [`BETWEEN`](ABENLOGEXP_BETWEEN.html). This was not previously the case.

Exceptions raised in [conversions](ABENCONVERSION_ELEMENTARY.html) can now be handled when making assignments of string expressions to target fields. This was not previously the case. Exceptions raised (for example, in assignments of non-numeric values to numeric data types or in overflows) can now be handled in the regular way.

abenabap.html abennews.html abennews-740.html abennews-740\_sp02.html