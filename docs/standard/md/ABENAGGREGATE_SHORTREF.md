---
title: "ABENAGGREGATE_SHORTREF"
description: |
  ABENAGGREGATE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAGGREGATE_SHORTREF.htm"
abapFile: "ABENAGGREGATE_SHORTREF.html"
keywords: ["select", "if", "data", "ABENAGGREGATE", "SHORTREF"]
---

[Reference](ABAPSELECT_AGGREGATE.html)

``... \{ AVG( [DISTINCT] col [AS dtype] )      | MAX( [DISTINCT]\ [`sql_exp`](ABENSQL_EXP_SHORTREF.html) )      | MIN( [DISTINCT]\ [`sql_exp`](ABENSQL_EXP_SHORTREF.html) )      | SUM( [DISTINCT]\ [`sql_exp`](ABENSQL_EXP_SHORTREF.html) )      | STRING_AGG( [`sql_exp`](ABENSQL_EXP_SHORTREF.html)[,sep]\ [ORDER BY col1[ASCENDING|DESCENDING], ...]\      | COUNT( [DISTINCT]\ [`sql_exp`](ABENSQL_EXP_SHORTREF.html) )      | COUNT( * )      | COUNT(*) \} ...``

[Aggregate expressions](ABENAGGREGATE_EXPRESSION_GLOSRY.html) in queries.

-   `AVG( [DISTINCT] col [AS dtype] )`\\
    Average value of the values in the column `col` with an optional target data type `dtype` specified.
-   `MAX( [DISTINCT] col|sql_exp )`\\
    Maximum value of the results of the SQL expression `sql_exp`.
-   `MIN( [DISTINCT] col|sql_exp )`\\
    Minimum value of the results of the SQL expression `sql_exp`.
-   `AVG( [DISTINCT] col )`\\
    Average value of the results of the SQL expression `sql_exp`.
-   `SUM( [DISTINCT] col|sql_exp )`\\
    Total of the results of the SQL expression `sql_exp`.
-   `STRING_AGG( sql_exp[,sep]\ [ORDER BY col1[ASCENDING|DESCENDING], ...] )`\\
    Chaining of the results of the SQL expression `sql_exp`.
-   `COUNT( [DISTINCT] col|sql_exp )`\\
    Number of the results of the SQL expression `sql_exp`.
-   `COUNT( * )`, `COUNT(*)`\\
    Number of rows in the result set.
    

abenabap.html abenabap\_reference.html abenabap\_shortref.html