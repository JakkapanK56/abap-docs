---
title: "ABAPWHERE"
description: |
  ABAPWHERE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWHERE.htm"
abapFile: "ABAPWHERE.html"
keywords: ["select", "do", "if", "data", "ABAPWHERE"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

``... WHERE [`sql_cond`](ABENASQL_COND.html) ...``

The addition `WHERE` restricts the number of rows that are included in the result set by the statement `SELECT` of a [query](ABENASQL_QUERY_GLOSRY.html) by using a logical expression [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html). A row is only included in the result set if the logical expression is true.

Except for columns of type `STRING`, `RAWSTRING`, or `GEOM_EWKB`, or `LCHR` and `LRAW`, all columns of the [data sources](ABAPSELECT_DATA_SOURCE.html) specified after [`FROM`](ABAPFROM_CLAUSE.html) can usually be evaluated in the `WHERE` condition of a [query](ABENASQL_QUERY_GLOSRY.html). Special rules apply to some logical expressions. The columns do not necessarily have to be a part of the result set.

[Implicit ABAP SQL client handling](ABENABAP_SQL_CLIENT_HANDLING.html) applies to the `WHERE` clause. The [client column](ABENCLIENT_COLUMN_GLOSRY.html) of a client-dependent data source cannot be used as an operand in the `WHERE` condition.

Reading of all objects in the ABAP keyword documentation from the table `DOKIL` using a suitable `WHERE` condition. Messages of the [code inspector](ABENCODE_INSPECTOR_GLOSRY.html) regarding the bypassing of the table buffer are suppressed using [pseudo comments](ABENPSEUDO_COMMENT_GLOSRY.html).

-   If the data source is accessed using generic [table buffering](ABENTABLE_BUFFERING_GLOSRY.html), the buffered area must be specified completely in the `WHERE` condition, otherwise buffering is bypassed.
-   If the data sources are accessed using single record buffering, the conditions combined using `AND` in the `WHERE` condition must be specified for all key fields of the primary key, otherwise buffering is bypassed.
-   For frequently used `SELECT` statements with an identical `WHERE` condition, it can be useful to create an [index](ABENDDIC_DATABASE_TABLES_INDEX.html). In `WHERE` conditions, the fields of the index should be expressed as equality comparisons and combined using the `AND` operator. All the fields of an index that are behind a field, for which a comparison other than `=` or `EQ` is specified in the `WHERE` clause, cannot be used for searching in the index.
-   It is currently not possible to use [aggregate expressions](ABENAGGREGATE_EXPRESSION_GLOSRY.html) as operands in a `WHERE` condition. This is only possible in the [`HAVING`](ABAPHAVING_CLAUSE.html) clause.
-   If one of the columns involved in the logical expression [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html) contains the [null value](ABENNULL_VALUE_GLOSRY.html), its result is unknown, and no row is included in the result set.
-   The [client column](ABENCLIENT_COLUMN_GLOSRY.html) of a client-dependent data source can still be used in the `ON` condition if implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) is disabled using the obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html).

-   [Host Expressions in the `WHERE` Condition](ABENHOST_EXPR_IN_WHERE_COND_ABEXA.html)
-   [SQL Expressions in the `WHERE` Condition](ABENSQL_EXPR_IN_WHERE_COND_ABEXA.html)

SELECT FROM dokil \\n FIELDS object, langu \\n WHERE id = 'SD' AND \\n typ = 'E' AND \\n ( object LIKE 'ABAP%' OR \\n object LIKE 'ABEN%' OR \\n object LIKE 'DYNP%' ) AND \\n ( langu = 'D' OR langu = 'E' ) "#EC CI\_GENBUFF \\n ORDER BY object, langu "#EC CI\_BYPASS \\n INTO TABLE @FINAL(dokil\_tab). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html