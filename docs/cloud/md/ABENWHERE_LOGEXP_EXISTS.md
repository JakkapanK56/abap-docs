---
title: "ABENWHERE_LOGEXP_EXISTS"
description: |
  ABENWHERE_LOGEXP_EXISTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENWHERE_LOGEXP_EXISTS.htm"
abapFile: "ABENWHERE_LOGEXP_EXISTS.html"
keywords: ["select", "if", "case", "data", "internal-table", "ABENWHERE", "LOGEXP", "EXISTS"]
---

``... EXISTS ( SELECT [`subquery_clauses`](ABENWHERE_LOGEXP_SUBQUERY.html)\ [[`UNION|INTERSECT|EXCEPT ...`](ABAPUNION.html)] ) ...``

Checks the result set of a subquery. The relational expression is true if the result set of the subquery defined by the clauses [`subquery_clauses`](ABENWHERE_LOGEXP_SUBQUERY.html) contains at least one row. The expression is possible for any result sets that can be defined using subquery clauses [`subquery_clauses`](ABENWHERE_LOGEXP_SUBQUERY.html). The [set operators](ABENCDS_SET_OPERATORS_GLOSRY.html)\\ [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), and [`EXCEPT`](ABAPUNION.html) can be used to combine the result sets of multiple subqueries. In this case, special rules [`query_clauses`](ABAPUNION_CLAUSE.html) apply when specifying clauses.

The specified columns in the [`SELECT` list](ABAPSELECT_LIST.html) of the subquery are not important for `EXISTS`. Therefore, explicit lists are not useful. It is recommended that one [literal](ABENABAP_SQL_LITERALS.html) is specified as the only column.

Reads all available flights leaving from New York from the DDIC database table `SFLIGHT` to the internal table `free_flights`.

DATA city TYPE spfli-cityfrom VALUE 'NEW YORK'. \\n\\ \\nSELECT \* \\n FROM sflight AS s \\n WHERE seatsocc < s~seatsmax AND \\n EXISTS ( SELECT 'X' \\n FROM spfli \\n WHERE carrid = s~carrid AND \\n connid = s~connid AND \\n cityfrom = @city ) \\n INTO TABLE @FINAL(free\_flights). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html abenabap\_sql\_stmt\_logexp.html