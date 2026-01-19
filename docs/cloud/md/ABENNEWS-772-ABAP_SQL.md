---
title: "ABENNEWS-772-ABAP_SQL"
description: |
  ABENNEWS-772-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-772-ABAP_SQL.htm"
abapFile: "ABENNEWS-772-ABAP_SQL.html"
keywords: ["select", "if", "data", "types", "ABENNEWS", "772", "ABAP", "SQL"]
---

[1\. Date/Time Functions](#ABAP_MODIFICATION_1@4@)

[2. Relational Expression `IS INITIAL`](#ABAP_MODIFICATION_2@4@)

[3\. Exposing CDS Associations of Common Table Expressions](#ABAP_MODIFICATION_3@4@)

[4. Numeric Literals in the `SELECT` List](#ABAP_MODIFICATION_4@4@) 

[5\. Enhanced Cast Matrix](#ABAP_MODIFICATION_5@4@)

ABAP SQL now supports the following new time zone functions:

The relational expression [`IS [NOT] INITIAL`](ABENWHERE_LOGEXP_INITIAL.html) can now be used in a condition [`sql_cond`](ABENASQL_COND.html) to compare operands with their type-dependent initial value.

When [CDS views](ABENCDS_VIEW_GLOSRY.html) are accessed within a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html), the addition [`WITH ASSOCIATIONS`](ABAPWITH_ASSOCIATIONS.html) of the statement [`WITH`](ABAPWITH.html) can now be used to expose [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) of these views for use in [path expressions](ABENABAP_SQL_PATH.html) of the current `WITH` statement. The addition `REDIRECTED TO` can also be used to replace the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the exposed CDS association with a previous CTE or the current CTE.

Until now, only those [numeric literals](ABENNUMERIC_LITERAL_GLOSRY.html) whose value matched the value range of the type [`INT4`](ABENDDIC_BUILTIN_TYPES.html) could be specified as [elementary SQL expressions](ABENSQL_ELEM.html) in the [`SELECT` list](ABAPSELECT_LIST.html) of a query. Now numeric literals of up to 31 digits can be specified, which are interpreted as numbers of the type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) if the value range of `INT4` is exceeded.

A [cast expression](ABENSQL_CAST.html) can now be used to convert the data types `INT1`, `INT2`, `INT4`, and `INT8` to `DEC`.

-   [`ABAP_SYSTEM_TIMEZONE`](ABENSQL_TIMEZONE_FUNC.html)
-   [`ABAP_USER_TIMEZONE`](ABENSQL_TIMEZONE_FUNC.html)

abenabap.html abennews.html abennews-77.html abennews-772.html