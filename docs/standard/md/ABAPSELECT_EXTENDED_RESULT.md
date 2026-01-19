---
title: "ABAPSELECT_EXTENDED_RESULT"
description: |
  ABAPSELECT_EXTENDED_RESULT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_EXTENDED_RESULT.htm"
abapFile: "ABAPSELECT_EXTENDED_RESULT.html"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "ABAPSELECT", "EXTENDED", "RESULT"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

`... EXTENDED RESULT @oref ...`

The `EXTENDED RESULT` addition of the [`INTO`](ABAPINTO_CLAUSE.html) clause can be used to provide an extended result of the current [main query](ABENMAINQUERY_GLOSRY.html) in a result object. After `EXTENDED RESULT`, an [object reference variable](ABENOBJECT_REFER_VARIABLE_GLOSRY.html)\\ `oref` of static type for the documented class [`CL_OSQL_EXTENDED_RESULT`](ABENCL_OSQL_EXTENDED_RESULT.html) must be specified as a [host variable](ABENABAP_SQL_HOST_VARIABLES.html), which points to an object of the class. The reference variable must be prefixed with the escape character `@`.

The following applies to the use of `EXTENDED RESULT`:

Currently, the addition `EXTENDED RESULT` can only be used when accessing [cached views](ABENHANA_CACHED_VIEWS.html) of the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html).

Excerpt from the executable example [SAP HANA, Cached Views](ABENHANA_CACHED_VIEWS_ABEXA.html).

-   The reference variable must not be initial and the object must be created before the ABAP SQL statement is executed. Parameters that specify which values the extended result should include must be passed to the instance constructor of class [`CL_OSQL_EXTENDED_RESULT`](ABENCL_OSQL_EXTENDED_RESULT.html).
-   If possible, the result object is filled with the requested values during the first database access.

-   If a loop is opened using the statements [`SELECT`](ABAPSELECT.html) or [`WITH`](ABAPWITH.html), the result object is filled once when the loop is entered.
-   If the [`INTO`](ABAPINTO_CLAUSE.html) clause after [`FETCH`](ABAPFETCH.html) is used for the result set of a database cursor opened using [`OPEN CURSOR`](ABAPOPEN_CURSOR.html), the result object is filled once in the first `FETCH` statement.

-   After the ABAP SQL statement is closed, the required values can be read using the instance methods of the class. If the result object then contains no results or no valid results, an exception of the class `CX_OSQL_EXTENDED_RESULT` is raised.

FINAL(extended\_result) = \\n NEW cl\_osql\_extended\_result( iv\_cached\_view = abap\_true ). \\nSELECT carrid, \\n MAX( fldate ) AS max\_fldate, \\n MIN( price ) AS min\_price, \\n SUM( seatsocc ) AS sum\_seatsocc \\n FROM demo\_cds\_cached\_view \\n GROUP BY carrid \\n %\_HINTS HDB 'RESULT\_CACHE' \\n INTO TABLE @FINAL(result) \\n EXTENDED RESULT @extended\_result. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapinto\_clause.html