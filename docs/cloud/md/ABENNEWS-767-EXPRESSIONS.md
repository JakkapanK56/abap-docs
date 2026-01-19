---
title: "ABENNEWS-767-EXPRESSIONS"
description: |
  ABENNEWS-767-EXPRESSIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-767-EXPRESSIONS.htm"
abapFile: "ABENNEWS-767-EXPRESSIONS.html"
keywords: ["select", "if", "class", "ABENNEWS", "767", "EXPRESSIONS"]
---

[1. Exception Object After `RAISE EXCEPTION`](#ABAP_MODIFICATION_1@4@)

[2\. Object Component Selector After Table Expressions](#ABAP_MODIFICATION_2@4@)

The operand position for the reference variable `oref` of the statement [`RAISE EXCEPTION oref`](ABAPRAISE_EXCEPTION_CLASS.html) is now a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

If an [object component selector `->`](ABENTABLE_EXP_CHAINING.html) is specified directly after a [table expression](ABENTABLE_EXPRESSIONS.html), the restriction that this is not possible for table expressions whose [result](ABENTABLE_EXP_RESULT.html) is determined with the value operator `VALUE` no longer applies.

abenabap.html abennews.html abennews-76.html abennews-767.html