---
title: "ABENSQL_CASE"
description: |
  ABENSQL_CASE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_CASE.htm"
abapFile: "ABENSQL_CASE.html"
keywords: ["select", "do", "if", "case", "internal-table", "ABENSQL", "CASE"]
---

1\. `... CASE sql_exp WHEN sql_exp1 THEN result1 [WHEN sql_exp2 THEN result2]\ ... [ELSE resultn|sql_null]\ END ...`

2\. `... CASE WHEN sql_cond1 THEN result1 [WHEN sql_cond2 THEN result2]\ [WHEN sql_cond3 THEN result3]\ ... [ELSE resultn|sql_null]\ END ...`

Case distinction in ABAP SQL. Either a [simple case distinction](ABENSQL_SIMPLE_CASE.html) (simple case) or a [complex case distinction](ABENSQL_SEARCHED_CASE.html) (searched case).

[Simple Case Distinction](ABENSQL_SIMPLE_CASE.html)

[Complex Case Distinction](ABENSQL_SEARCHED_CASE.html)

-   Specifying a case distinction always means specifying an [SQL expression](ABAPSQL_EXPR.html). Case distinctions can only be specified for operand positions in which SQL expressions are possible.
-   A conflict between SQL language element `CASE` and a column named `CASE` cannot occur because the ABAP Dictionary does not allow a column with this name to be created. However, if a column with this name does exist, it must be prefixed with the escape character [`!`](ABENNAMES_ESCAPING.html) when it is specified in an ABAP SQL statement.
-   A maximum of 10 case distinctions can be nested with `CASE`.
-   A case distinction can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) for accessing the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and internal tables with [`FROM @itab`](ABAPSELECT_ITAB.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html