---
title: "ABENSQL_CDS_SCALAR_FUNC"
description: |
  ABENSQL_CDS_SCALAR_FUNC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_CDS_SCALAR_FUNC.htm"
abapFile: "ABENSQL_CDS_SCALAR_FUNC.html"
keywords: ["select", "insert", "delete", "if", "data", "internal-table", "ABENSQL", "CDS", "SCALAR", "FUNC"]
---

`... cds_scalar_func( p1 = sql_exp1, p2 = sql_exp2  ... )`.

Calls a [SQL-based scalar function](ABENCDS_SQL_SCALAR_GLOSRY.html) in ABAP SQL. The actual parameters passed to the formal parameters of the scalar function can be any SQL expression `sql_exp` with an appropriate type. The result is the return value of the CDS scalar function.

The following code snippet uses a scalar function described in the topic [`DEFINE SCALAR FUNCTION`](ABENCDS_DEFINE_SCALAR_FUNCTION.html).

[`sql_exp` - CDS Scalar Function](ABENSQL_EXPR_CDS_SCALAR_ABEXA.html)

-   Specifying a SQL-based scalar function always means specifying a [SQL expression](ABAPSQL_EXPR.html). SQL-based scalar functions can only be called in operand positions for which SQL expressions are possible.
-   SQL-based scalar functions cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). The ABAP SQL statement bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   [Analytical scalar function](ABENCDS_ANA_SCALAR_GLOSRY.html) cannot be used as operands in ABAP SQL.

DELETE FROM demo\_expressions. \\n\\ \\nINSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ). \\n\\ \\nSELECT SINGLE \\n FROM demo\_expressions \\n FIELDS demo\_cds\_scalar\_helloworld( ) \\n WHERE id = 'X' \\n INTO @FINAL(result). \\n\\ \\ncl\_demo\_output=>display( result ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html