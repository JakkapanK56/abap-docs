---
title: "ABENNEWS-784-ABAP_SQL"
description: |
  ABENNEWS-784-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-784-ABAP_SQL.htm"
abapFile: "ABENNEWS-784-ABAP_SQL.html"
keywords: ["select", "if", "types", "ABENNEWS", "784", "ABAP", "SQL"]
---

[1. Addition for the String Function `REPLACE_REGEXPR`](#ABAP_MODIFICATION_1@4@)

[2. New String Function `SUBSTRING_REGEXPR`](#ABAP_MODIFICATION_2@4@)

[3\. Byte Fields as Null Indicators](#ABAP_MODIFICATION_3@4@)

[4\. Position of Null Indicators](#ABAP_MODIFICATION_4@4@)

The new parameter `start` can now be used in the function [`REPLACE_REGEXPR`](ABENSQL_STRING_FUNC.html). Additionally, the parameter `occurrence` can now include [expressions](ABENEXPRESSION_GLOSRY.html).

ABAP SQL now supports the new string function [`SUBSTRING_REGEXPR`](ABENSQL_STRING_FUNC.html) which supports regular expressions.

The new addition [`INDICATORS ... NULL BITFIELD`](ABAPSELECT_INDICATORS.html) of the `INTO` clause of a `SELECT` statement allows a [byte field type](ABENBYTE_FIELD_TYPE_GLOSRY.html) component to be specified as a [null indicator](ABENNULL_INDICATOR_GLOSRY.html). The single bits of the byte field serve for indicating null values in the result set of the query. For this purpose, [condensed indicator structures](ABENCONDENSED_IND_STRUCTURE_GLOSRY.html) can be declared with the addition [`AS BITFIELD`](ABAPTYPES_INDICATORS.html) of the `TYPES` statement.

If `CORRESPONDING FIELDS` is used in the [`INTO`](ABAPINTO_CLAUSE.html) clause of a `SELECT` statement, a [null indicator](ABENNULL_INDICATOR_GLOSRY.html) defined by [`INDICATORS`](ABAPSELECT_INDICATORS.html) can be positioned anywhere in the target area. Otherwise, it must be the last component.

abenabap.html abennews.html abennews-78.html abennews-784.html