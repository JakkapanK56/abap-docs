---
title: "ABENABAP_SQL_STRICTMODE_762"
description: |
  ABENABAP_SQL_STRICTMODE_762 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_762.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_762.html"
keywords: ["select", "insert", "if", "case", "data", "types", "ABENABAP", "SQL", "STRICTMODE", "762"]
---

The strict mode of the syntax check in ABAP release 7.62 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.62](ABENNEWS-762-ABAP_SQL.html):

The strict mode in ABAP release 7.62 covers all rules of the [strict mode in ABAP release 7.61](ABENABAP_SQL_STRICTMODE_761.html), plus the following rules:

-   Access to a [global temporary table (GTT)](ABENDDIC_DATABASE_TABLES_GTT.html).
-   Use of the numeric function [`ROUND`](ABENSQL_ARITH_FUNC.html) or the string functions [`CONCAT`](ABENSQL_STRING_FUNC.html), [`LPAD`](ABENSQL_STRING_FUNC.html), [`LENGTH`](ABENSQL_STRING_FUNC.html), [`LTRIM`](ABENSQL_STRING_FUNC.html), [`REPLACE`](ABENSQL_STRING_FUNC.html), [`RIGHT`](ABENSQL_STRING_FUNC.html), [`RTRIM`](ABENSQL_STRING_FUNC.html), and [`SUBSTRING`](ABENSQL_STRING_FUNC.html).
-   [Path expression](ABENABAP_SQL_PATH.html) as a [data source](ABAPSELECT_DATA_SOURCE.html) of the [`FROM` clause](ABAPFROM_CLAUSE.html) of the statement [`SELECT`](ABAPSELECT.html).
-   Subquery as [data source](ABAPINSERT_SOURCE.html) of the statement [`INSERT`](ABAPINSERT_DBTAB.html).
-   [Comparison](ABENWHERE_LOGEXP_COMPARE_TYPES.html) of columns or expressions of the types `DF16_DEC` or `DF34_DEC` with other numeric types (except with itself) or comparison of columns or expressions of the type `SSTRING` with other types (except with itself) in a [`CASE` expression](ABENSQL_CASE.html).
-   Use of the target type `INT8` in a [`CAST` expression](ABENSQL_CAST.html).

-   In a [`SELECT`](ABAPSELECT.html) statement, it is not possible to access to a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a corresponding CDS view as an [obsolete data source](ABENABAP_SQL_CDS_OBSOLETE.html).
-   No [writes](ABENABAP_SQL_WRITING.html) can be performed on DDIC database tables or DDIC views with a [replacement object](ABENREPLACEMENT_OBJECT_GLOSRY.html).
-   If it is not possible to make a [lossless](ABAPMOVE_EXACT.html) read on an [untyped literal](ABENABAP_SQL_UNTYPED_LITERALS.html), a syntax error occurs.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html