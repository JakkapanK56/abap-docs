---
title: "ABAPSELECT_CLAUSE"
description: |
  ABAPSELECT_CLAUSE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSELECT_CLAUSE.htm"
abapFile: "ABAPSELECT_CLAUSE.html"
keywords: ["select", "delete", "while", "if", "case", "data", "internal-table", "ABAPSELECT", "CLAUSE"]
---

``... [DISTINCT]\ [`select_list`](ABAPSELECT_LIST.html) ...``

[`... DISTINCT`](#ABAP_ONE_ADD@1@)

`SELECT` clause of a [query](ABENASQL_QUERY_GLOSRY.html). The `SELECT` clause defines the structure of the result set of the `SELECT` statement. It consists of a [`SELECT` list](ABAPSELECT_LIST.html), which defines the columns of the result set, and an optional addition `DISTINCT`, which removes duplicative rows from the result set.

The `SELECT` list [`select_list`](ABAPSELECT_LIST.html) can indicate all columns of a data source using `*` or it defines the individual columns of the result set using an [SQL expression](ABAPSQL_EXPR.html). It defines the names of the columns in the result set, using optional or mandatory alias names.

The `SELECT` clause must either be listed as the first clause after the keyword `SELECT`, or after the optional addition `SINGLE`, or after the `FROM` clause. After the `FROM` clause, the `SELECT` clause must be introduced using the addition [`FIELDS`](ABAPSELECT.html).

`SELECT` clause after `FIELDS`, whose `SELECT` list contains individual columns as well as aggregate expressions with SQL expressions used as arguments.

The addition `DISTINCT` removes rows that occur more than once in a multirow result set. Here, the entire row content is respected.

The addition `DISTINCT` must not be used in the following cases:

`DISTINCT` cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). The ABAP SQL statement bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

Output of all destinations to which Lufthansa flies from Frankfurt.

-   If the addition [`SINGLE`](ABAPSELECT_SINGLE.html) is used.
-   If a column specified in the `SELECT` list [`select_list`](ABAPSELECT_LIST.html) has the type `STRING`, `RAWSTRING`, `LCHR`, `LRAW`, or `GEOM_EWKB`.

-   For the addition `DISTINCT`, it is not important which columns of the result set are key fields of the associated DDIC database tables, views, or CDS entities.
-   The comparison is based on the entire row content that is needed to identify a row. That means that the number of rows in the result set depends on the [`SELECT` list](ABAPSELECT_LIST.html). If, for example, all key fields of a DDIC database table are specified directly as `columns` in a [`SELECT`](ABENABAP_SQL_COLUMNS.html) list, there can be no rows that occur more than once. The other extreme is the case where a `SELECT` list contains a single [host variable](ABENABAP_SQL_HOST_VARIABLES.html) or a single literal. Here, all rows are deleted except one.
-   While for an access to a single data sources it is sufficient to evaluate the key fields, for an access to joined data sources, a comparison of all columns of the result set can be needed.
-   As a part of the `SELECT` clause, the addition `DISTINCT` has an effect before the additions [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html) and [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) are evaluated.
-   If `DISTINCT` is specified, it should be noted that this requires the execution of sort operations in the database system, and the statement `SELECT` therefore bypasses [table buffering](ABENTABLE_BUFFERING_GLOSRY.html).

SELECT FROM sflight \\n FIELDS carrid, \\n connid, \\n MAX( seatsmax - seatsocc ) AS seatsfree\_max, \\n MIN( seatsmax - seatsocc ) AS seatsfree\_min \\n GROUP BY carrid, connid \\n HAVING carrid = CHAR\`LH\` \\n INTO TABLE @FINAL(result). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT DISTINCT cityto \\n FROM spfli \\n WHERE carrid = 'LH' AND \\n cityfrom = 'FRANKFURT' \\n INTO TABLE @FINAL(destinations). \\n\\ \\nout->write( destinations ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html