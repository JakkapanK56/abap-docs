---
title: "ABENABAP_SQL_STRICTMODE_760"
description: |
  ABENABAP_SQL_STRICTMODE_760 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_760.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_760.html"
keywords: ["select", "if", "data", "ABENABAP", "SQL", "STRICTMODE", "760"]
---

The strict mode of the syntax check in ABAP release 7.60 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.60](ABENNEWS-760-ABAP_SQL.html):

The strict mode in ABAP release 7.60 covers all rules of the [strict mode in ABAP release 7.40 SP08](ABENABAP_SQL_STRICTMODE_740_SP08.html), plus the following rules:

If used in the statements `FETCH` and `CLOSE CURSOR`, the escape character `@` is ignored by the checks made on the associated statement `OPEN CURSOR`.

-   Use of [`UNION`](ABAPUNION.html).
-   Use of [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html)
-   [SQL expressions](ABAPSQL_EXPR.html) on the left-hand side of a [relational expression](ABENABAP_SQL_STMT_LOGEXP.html) of an [SQL condition](ABENASQL_COND.html)
-   Specifying columns on the right side of an interval condition [`BETWEEN`](ABENWHERE_LOGEXP_INTERVAL.html)
-   Shared use of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) with DDIC database tables or DDIC views in a `SELECT` statement.

-   The [`INTO`](ABAPINTO_CLAUSE.html) clause must be specified as the last clause of a [`SELECT`](ABAPSELECT.html) statement and the ABAP-specific additions [`OPTIONS`](ABAPSELECT_OPTIONS.html) of the `SELECT` statement must be specified after the `INTO` clause.
-   If an [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) statement is checked in accordance with the rules of the strict mode from ABAP release 7.60, all [host variables](ABENABAP_SQL_HOST_VARIABLES.html) must be prefixed with the escape character `@` in the statements [`FETCH`](ABAPFETCH.html) and [`CLOSE CURSOR`](ABAPCLOSE_CURSOR.html) that access the open cursor.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html