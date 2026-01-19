---
title: "ABENABAP_SQL_STRICTMODE_740_SP05"
description: |
  ABENABAP_SQL_STRICTMODE_740_SP05 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_740_SP05.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_740_SP05.html"
keywords: ["select", "update", "if", "class", "data", "types", "ABENABAP", "SQL", "STRICTMODE", "740", "SP05"]
---

The strict mode of the syntax check in ABAP release 7.40, SP05 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.40 SP05](ABENNEWS-740_SP05-ABAP_SQL.html):

The strict mode of the syntax in ABAP release 7.40, SP05 checks whether the following additional rules are followed:

Comma-separated lists of operands and the escape character `@` can only be used in programs in which the program property [*fixed point arithmetic*](ABENFIXED_POINT_ARITHMETIC_GLOSRY.html) is activated.

-   Lists of operands as comma-separated lists
-   Escape character `@` in front of [host variables](ABENABAP_SQL_HOST_VARIABLES.html)
-   [SQL expressions](ABAPSQL_EXPR.html) except for columns specified individually or aggregate expressions specified individually.
-   Addition [`USING CLIENT`](ABAPSELECT_CLIENT.html)
-   [Joins](ABAPSELECT_JOIN.html):

-   `ON` conditions without a column from a DDIC database table or DDIC view specified on the right side as an operand.
-   Multiple consecutive joins where a join expression and not a database table or view is on the right side of a join expression.
-   Use of `RIGHT OUTER JOIN`
-   Fields from the right side specified in `LEFT OUTER JOIN` or from the left side in `RIGHT OUTER JOIN` in the `WHERE` condition.

-   Access to [CDS entities](ABENCDS_ENTITY_GLOSRY.html) using [`SELECT`](ABAPSELECT.html).

-   Any errors that would normally be reported as syntax warnings are reported as syntax errors.
-   All lists of operands must be comma-separated lists. This affects the following:

-   In the statement [`SELECT`](ABAPSELECT.html), columns, aggregate expressions, or SQL expressions specified in the [`SELECT` list](ABAPSELECT_LIST.html) and columns specified after [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) and [`ORDER BY`](ABAPORDERBY_CLAUSE.html).
-   In the statement [`UPDATE`](ABAPUPDATE.html), set expressions specified after [`SET`](ABAPUPDATE_SOURCE.html).

-   [Host variables](ABENABAP_SQL_HOST_VARIABLES.html) must be prefixed with the escape character `@`.
-   If an explicit comma-separated list is specified without the addition [`DISTINCT`](ABAPSELECT_CLAUSE.html) in the [`SELECT` list](ABAPSELECT_LIST.html), all columns of the result set defined here must exist as identically named components in a structure or table specified after [`INTO CORRESPONDING FIELDS`](ABAPINTO_CLAUSE.html).
-   The [client column](ABENCLIENT_COLUMN_GLOSRY.html) of a data source of a read statement or a target of a write statement must not be accessed in `ON` and `WHERE` conditions without [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) being disabled using [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) first. In strict mode, this applies in particular when using [dynamic](ABENWHERE_LOGEXP_DYNAMIC.html)\\ [conditions](ABENASQL_COND.html), alias names defined using [`AS`](ABAPFROM_CLAUSE.html), or [joins](ABAPFROM_CLAUSE.html).
-   The addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT.html) can only be used for client-dependent DDIC database tables or DDIC views.
-   If the addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) is used, no database fields of the built-in types `STRING`, `RAWSTRING`, and `GEOM_EWKB` plus `LCHR` and `LRAW` can occur in the [`SELECT` list](ABAPSELECT_LIST.html).
-   If [DDIC database views](ABENDATABASE_VIEW_GLOSRY.html) that contain the same number of key fields and view fields are accessed in a dynamic `FROM` clause combined with the addition [`ORDER BY PRIMARY KEY`](ABAPORDERBY_CLAUSE.html), the exception `CX_SY_DYNAMIC_OSQL_SEMANTICS` is raised.
-   Blanks behind literals and blanks after opening or before closing brackets cannot be omitted in conditions [`sql_cond`](ABENASQL_COND.html).
-   Like in classes, the [obsolete short forms](ABENABAP_SQL_SHORT_FORMS_OBSOLETE.html) are forbidden.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html