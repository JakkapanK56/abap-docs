---
title: "ABENNEWS-767-ABAP_SQL"
description: |
  ABENNEWS-767-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-767-ABAP_SQL.htm"
abapFile: "ABENNEWS-767-ABAP_SQL.html"
keywords: ["select", "if", "class", "data", "ABENNEWS", "767", "ABAP", "SQL"]
---

[1\. Path Expressions](#ABAP_MODIFICATION_1@4@)

[2\. Replacement Service for ABAP SQL](#ABAP_MODIFICATION_2@4@)

[3\. Strict Mode in the Syntax Check](#ABAP_MODIFICATION_3@4@)

The following enhancements have been made to [path expressions](ABENABAP_SQL_PATH.html) that are specified as a [data source](ABAPSELECT_DATA_SOURCE.html) of the [`FROM` clause](ABAPFROM_CLAUSE.html) of `SELECT` statements of a [query](ABENASQL_QUERY_GLOSRY.html):

The class [`CL_OSQL_REPLACE`](ABENCL_OSQL_REPLACE.html) can be used in [unit tests](ABENUNIT_TEST_GLOSRY.html) with [ABAP Unit](ABENABAP_UNIT_GLOSRY.html) to redirect database accesses in ABAP SQL to other databases.

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_767.html), which handles the statement more strictly than the regular syntax check.

-   When using a path expression, [actual parameters](ABENABAP_SQL_PARAMETERS.html) can now be passed to CDS entities with input parameters. Path expressions can now contain CDS associations for entities with input parameters.
-   [Filter conditions](ABENABAP_SQL_PATH_FILTER.html) for CDS associations can now be specified in path expressions.
-   Path expressions can now be split over several source code rows at the blanks in the syntax for parameter passes and filter conditions and also before slashes (`/`).

abenabap.html abennews.html abennews-76.html abennews-767.html