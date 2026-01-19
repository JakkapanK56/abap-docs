---
title: "ABAPFIELDS_CLAUSE"
description: |
  ABAPFIELDS_CLAUSE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFIELDS_CLAUSE.htm"
abapFile: "ABAPFIELDS_CLAUSE.html"
keywords: ["select", "if", "ABAPFIELDS", "CLAUSE"]
---

``... FIELDS [`select_clause`](ABAPSELECT_CLAUSE.html) ...``

The addition `FIELDS` must prefix the `SELECT` clause [`select_clause`](ABAPSELECT_CLAUSE.html) of a [query](ABENASQL_QUERY_GLOSRY.html), if this clause is listed after the [`FROM` clause](ABAPFROM_CLAUSE.html). If the `SELECT` clause [`select_clause`](ABAPSELECT_CLAUSE.html) is listed in front of the [`FROM` clause](ABAPFROM_CLAUSE.html), then `FIELDS` must not be specified.

Two equivalent `SELECT` statements and different arrangements of the `SELECT` and `FROM` clauses.

SELECT FROM scarr \\n FIELDS carrid, carrname \\n ORDER BY carrid \\n INTO TABLE @FINAL(result1). \\n\\ \\nSELECT carrid, carrname \\n FROM scarr \\n ORDER BY carrid \\n INTO TABLE @FINAL(result2). \\n\\ \\nASSERT result1 = result2. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html