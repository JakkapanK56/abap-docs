---
title: "ABENNEWS-757-ABAP_SQL"
description: |
  ABENNEWS-757-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-757-ABAP_SQL.htm"
abapFile: "ABENNEWS-757-ABAP_SQL.html"
keywords: ["select", "loop", "do", "while", "if", "case", "data", "types", "internal-table", "ABENNEWS", "757", "ABAP", "SQL"]
---

[1. Support for `ORDER BY` in the ABAP SQL In-Memory Engine](#ABAP_MODIFICATION_1@4@) 

[2. `ORDER BY n`](#ABAP_MODIFICATION_2@4@)

[3\. String Functions Processed by the ABAP SQL In-Memory Engine](#ABAP_MODIFICATION_3@4@)

[4\. Table Buffering for Decimal Floating Point Calculations](#ABAP_MODIFICATION_4@4@)

The [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) fully supports the [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause now:

In the [column list](ABAPORDERBY_CLAUSE.html) of the [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause, a literal or a host constant of an integer type is handled as the column position in the result set of the query. This feature is undocumented and behaves partly undefined. With release 8.16 the behavior is defined and documented.

The [string functions](ABENSQL_STRING_FUNC.html)\\ `LEFT`, `LOWER`, `RIGHT`, `UPPER`, and `SUBSTRING` can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) now. They no longer bypass [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) and do not cause the transport of an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) to the database. While `LEFT`, `LOWER`, `RIGHT`, and `UPPER` were not supported at all, `SUBSTRING` was supported under certain conditions.

Calculations for the built-in types [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-2--and---df16-dec---abenddic-builtin-types-html-@ITOC@@ABENDDIC_BUILTIN_TYPES_2) no longer bypass table buffering. The calculation in the table buffer is done with the respective decimal floating point arithmetic. The following differences to ABAP and to the database must be considered:

Both can lead to different results.

-   `ORDER BY` no longer bypasses [table buffering](ABENTABLE_BUFFERING_GLOSRY.html). Before, it bypassed table buffering in cases where single columns were specified as sort keys and these columns were not a left-aligned subset of the primary key in the correct order or if the addition `DESCENDING` was specified for a column.
-   `ORDER BY` can now be used with [`SELECT FROM @itab`](ABAPSELECT_ITAB.html) without transporting the internal table to the database. This allows looping over an internal table in a sequence defined by `ORDER BY` and the sorting of internal tables by expressions.

-   In ABAP, the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) for `decfloat16` is `decfloat34`.
-   On the database, the built-in type `DF16_DEC` is handled as a packed number.

abenabap.html abennews.html abennews-75.html abennews-757.html