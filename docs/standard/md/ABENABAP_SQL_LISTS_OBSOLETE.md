---
title: "ABENABAP_SQL_LISTS_OBSOLETE"
description: |
  ABENABAP_SQL_LISTS_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_LISTS_OBSOLETE.htm"
abapFile: "ABENABAP_SQL_LISTS_OBSOLETE.html"
keywords: ["select", "update", "if", "data", "ABENABAP", "SQL", "LISTS", "OBSOLETE"]
---

The following lists of an ABAP SQL statement can still be specified with blanks as separators instead of commas, unless one of the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check applies from ABAP release 7.40, SP05.

These specifications are obsolete. Lists should always be separated by commas.

`SELECT` statement with blank-separated lists.

Recommended format with comma-separated lists, which forces the use of the escape character `@` in front of [host variables](ABENABAP_SQL_HOST_VARIABLES.html).

-   In the statement [`SELECT`](ABAPSELECT.html).

-   When columns or aggregation functions are specified in the [`SELECT` list](ABAPSELECT_LIST.html).
-   `... \{[col_spec1](ABAPSELECT_CLAUSE_COL_SPEC.html)\ [AS a1]\ [col_spec2](ABAPSELECT_CLAUSE_COL_SPEC.html)\ [AS a2] ... \}`
-   When columns are specified after [`GROUP BY`](ABAPGROUPBY_CLAUSE.html)
-   `... GROUP BY col1 col2 ...`
-   When columns are specified after [`ORDER BY`](ABAPORDERBY_CLAUSE.html)
-   `... ORDER BY \{col1|a1\}\ [ASCENDING|DESCENDING]\ \{col2|a2\}\ [ASCENDING|DESCENDING]\ ...`

-   In the statement [`UPDATE`](ABAPUPDATE.html):

-   When set expressions are specified after [`SET`](ABAPUPDATE_SOURCE.html)
-   `... SET [set_expression1](ABAPUPDATE_SET_EXPRESSION.html)\ [set_expression2](ABAPUPDATE_SET_EXPRESSION.html) ...`

SELECT carrid connid \\n FROM spfli \\n INTO (carrid, connid) \\n WHERE carrid = carrid AND \\n connid = connid \\n ORDER BY carrid connid. SELECT carrid, connid \\n FROM spfli \\n WHERE carrid = @carrid AND \\n connid = @connid \\n ORDER BY carrid, connid \\n INTO (@carrid, @connid). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abenabap\_sql\_obsolete.html abenabap\_sql\_syntax\_obsolete.html