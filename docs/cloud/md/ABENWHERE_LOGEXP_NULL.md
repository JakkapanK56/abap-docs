---
title: "ABENWHERE_LOGEXP_NULL"
description: |
  ABENWHERE_LOGEXP_NULL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENWHERE_LOGEXP_NULL.htm"
abapFile: "ABENWHERE_LOGEXP_NULL.html"
keywords: ["select", "insert", "delete", "do", "if", "data", "types", "ABENWHERE", "LOGEXP", "NULL"]
---

`... operand IS [NOT] NULL ...`

This relational expression is true if the value of the operand `operand` is (is not) the [null value](ABENNULL_VALUE_GLOSRY.html).

The following applies to `operand`:

Comparison of the results of an inner and a left outer [join](ABENJOIN_GLOSRY.html). The row with null values produced by the left outer join is removed again by the `WHERE` condition with `IS NOT NULL`, so the results are the same.

-   [SQL expressions](ABAPSQL_EXPR.html) except for [aggregate expressions](ABAPSELECT_AGGREGATE.html) and [window expressions](ABAPSELECT_OVER.html) can be specified.
-   In a [`HAVING`](ABAPHAVING_CLAUSE.html) clause, [aggregate expressions](ABAPSELECT_AGGREGATE.html) can also be used.
-   Unlike in other relational expressions, the data type can also be [`STRING`](ABENDDIC_BUILTIN_TYPES.html), [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html), or [`GEOM_EWKB`](ABENDDIC_BUILTIN_TYPES.html).

-   The relational expression `IS [NOT] NULL` is the only expression for which the result is true or false when the operand contains the null value. The result is unknown for all other possible relational expressions in a condition [`sql_cond`](ABENASQL_COND.html) when one of the operands in question contains the null value. This concerns in particular also expressions specified as operands when their result is the null value. This is especially true for the [null expression `NULL`](ABENSQL_NULL.html) that contains the null value by definition.
-   The expression `IS [NOT] NULL` must not be confused with the expression [`IS [NOT] INITIAL`](ABENWHERE_LOGEXP_INITIAL.html).
-   The relational expression with the predicate syntax `IS [NOT] NULL` must not be confused with the expression [`NULL`](ABENSQL_NULL.html).
-   Null values can also be evaluated using a [null indicator](ABENNULL_INDICATOR_GLOSRY.html).
-   `IS [NOT] NULL` can be used to check [LOBs](ABENLOB_GLOSRY.html) and [geodata types](ABENGEO_DATA_TYPE_GLOSRY.html). As in all other relational expressions, operands of the data types [`LCHR`](ABENDDIC_BUILTIN_TYPES.html) and [`LRAW`](ABENDDIC_BUILTIN_TYPES.html) are not possible.

DELETE FROM demo\_join1. \\nINSERT demo\_join1 FROM TABLE @( VALUE #( \\n ( a = 'a1' b = 'b1' c = 'c1' d = 'd1' ) \\n ( a = 'a2' b = 'b2' c = 'c2' d = 'd2' ) ) ). \\n\\ \\nDELETE FROM demo\_join2. \\nINSERT demo\_join2 FROM TABLE @( VALUE #( \\n ( d = 'd1' e = 'e1' f = 'f1' g = 'g1' h = 'h1' ) ) ). \\n\\ \\nSELECT \* \\n FROM demo\_join1 AS d1 \\n INNER JOIN demo\_join2 AS d2 \\n ON d1~d = d2~d \\n INTO TABLE @FINAL(result1). \\n\\ \\nSELECT \* \\n FROM demo\_join1 AS d1 \\n LEFT OUTER JOIN demo\_join2 AS d2 \\n ON d1~d = d2~d \\n WHERE d2~d IS NOT NULL \\n AND CAST( NULL AS CHAR( 2 ) ) IS NULL \\n INTO TABLE @FINAL(result2). \\n\\ \\nASSERT result1 = result2. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html abenabap\_sql\_stmt\_logexp.html