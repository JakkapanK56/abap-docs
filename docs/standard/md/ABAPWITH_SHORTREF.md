---
title: "ABAPWITH_SHORTREF"
description: |
  ABAPWITH_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWITH_SHORTREF.htm"
abapFile: "ABAPWITH_SHORTREF.html"
keywords: ["select", "ABAPWITH", "SHORTREF"]
---

[Reference](ABAPWITH.html)

``WITH    +cte1[( name1, name2, ... )] AS [`subquery`](ABENSUBQUERY_SHORTREF.html)[,    +cte2[( name1, name2, ... )] AS [`subquery`](ABENSUBQUERY_SHORTREF.html)\    ... ]\    [`SELECT ... .`](ABAPSELECT_SHORTREF.html)\    ...  ENDWITH.``

[ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement. Introduces the definition of one or more [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html)\\ `+cte1`, `+cte2` for use in a closing [main query](ABENMAINQUERY_GLOSRY.html)\\ [`SELECT ...`](ABAPSELECT_SHORTREF.html). The result set of a common table expression is determined by a subquery [`subquery`](ABENSUBQUERY_SHORTREF.html).

abenabap.html abenabap\_reference.html abenabap\_shortref.html