---
title: "ABENGROUPING_FUNCTION"
description: |
  ABENGROUPING_FUNCTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENGROUPING_FUNCTION.htm"
abapFile: "ABENGROUPING_FUNCTION.html"
keywords: ["select", "if", "data", "types", "ABENGROUPING", "FUNCTION"]
---

``... GROUPING( [`col`](ABENABAP_SQL_COLUMNS.html) )``

The result of the grouping function `GROUPING` indicates whether a specific column is part of the [aggregation](ABENAGGREGATE_EXPRESSION_GLOSRY.html). After the grouping function `GROUPING`, a column name in parentheses is expected as an argument.

The return value of the grouping function `GROUPING` has the data type [`INT1`](ABENDDIC_BUILTIN_TYPES.html). The following return values of the grouping function are possible here:

The columns that are part of the aggregation contain the null values as placeholders in the corresponding results. More specifically, the grouping function `GROUPING` determines whether the column that contains a null value in the result was part of the aggregation or whether it was already the null value in the [data source](ABAPSELECT_DATA_SOURCE.html).

The following example calculates the number of Lufthansa flights depending on the plane type (the column `planetype`) and the connection (the column `connid`). Here, the grouping function for the plane type column or connection column is used to determine whether they are part of the aggregation.

[`GROUPING`, Aggregate Function](ABENGROUPING_FUNCTION_ABEXA.html)

-   The grouping function can only be used in the [`SELECT`](ABAPSELECT_LIST.html) list and in the [`HAVING`](ABAPHAVING_CLAUSE.html) clause.
-   The grouping function can be used only if the [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) clause contains the addition [`GROUPING SETS`](ABAPGROUPING_SETS_CLAUSE.html).
-   The column used as an argument of the grouping function `GROUPING` must also be added to the `GROUP BY` list.

SELECT FROM sflight \\n FIELDS carrid, \\n connid, \\n planetype, \\n COUNT( \* ) AS flights\_count, \\n grouping( connid ) AS agg\_connid, \\n grouping( planetype ) AS agg\_planetype \\n WHERE carrid = 'LH' \\n GROUP BY GROUPING SETS ( ( carrid, planetype ), \\n ( carrid, connid ), \\n ( ) ) \\n ORDER BY connid, planetype \\n INTO TABLE @FINAL(result\_grouping). \\n\\ \\ncl\_demo\_output=>display( result\_grouping ). **Value** **Meaning** 0 The column is **not** part of the aggregation. 1 The column is part of the aggregation. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapgroupby\_clause.html