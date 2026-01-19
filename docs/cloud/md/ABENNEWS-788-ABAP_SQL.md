---
title: "ABENNEWS-788-ABAP_SQL"
description: |
  ABENNEWS-788-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-788-ABAP_SQL.htm"
abapFile: "ABENNEWS-788-ABAP_SQL.html"
keywords: ["select", "do", "while", "if", "data", "types", "internal-table", "ABENNEWS", "788", "ABAP", "SQL"]
---

[1\. String Functions Processed by the ABAP SQL In-Memory Engine](#ABAP_MODIFICATION_1@4@)

[2\. Table Buffering for Decimal Floating Point Calculations](#ABAP_MODIFICATION_2@4@)

The [string functions](ABENSQL_STRING_FUNC.html)\\ `LEFT`, `LOWER`, `RIGHT`, `UPPER`, and `SUBSTRING` can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) now. They no longer bypass [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) and do not cause the transport of an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) to the database. While `LEFT`, `LOWER`, `RIGHT`, and `UPPER` were not supported at all, `SUBSTRING` was supported under certain conditions.

Calculations for the built-in types [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-2--and---df16-dec---abenddic-builtin-types-html-@ITOC@@ABENDDIC_BUILTIN_TYPES_2) no longer bypass table buffering. The calculation in the table buffer is done with the respective decimal floating point arithmetic. The following differences to ABAP and to the database must be considered:

Both can lead to different results.

-   In ABAP, the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) for `decfloat16` is `decfloat34`.
-   On the database, the built-in type `DF16_DEC` is handled as a packed number.

abenabap.html abennews.html abennews-78.html abennews-788.html