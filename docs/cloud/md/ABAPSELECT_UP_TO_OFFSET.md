---
title: "ABAPSELECT_UP_TO_OFFSET"
description: |
  ABAPSELECT_UP_TO_OFFSET - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSELECT_UP_TO_OFFSET.htm"
abapFile: "ABAPSELECT_UP_TO_OFFSET.html"
keywords: ["select", "loop", "do", "if", "case", "catch", "data", "types", "internal-table", "ABAPSELECT", "OFFSET"]
---

`... [UP TO n ROWS]`\\ 
    `[OFFSET o] ...`

[1.`... UP TO n ROWS`](#ABAP_ADDITION_1@3@)

[2.`... OFFSET o`](#ABAP_ADDITION_2@3@)

These optional additions of a [query](ABENASQL_QUERY_GLOSRY.html) of a [`SELECT`](ABAPSELECT.html) statement or [`WITH`](ABAPWITH.html) statement restrict the result set using an offset and the maximum number of rows to be read. The syntax varies as follows for [main queries](ABENMAINQUERY_GLOSRY.html) and [subqueries](ABENSUBQUERY_GLOSRY.html):

These additions affect the result set defined by the preceding clauses.

The addition `UP TO` limits the number of rows in the result set of a `SELECT` statement to `n`. For `n`, a [host variable](ABENABAP_SQL_HOST_VARIABLES.html), a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html), or a [literal](ABENABAP_SQL_LITERALS.html) of type `i` is expected, which can represent all non-negative numbers from the value range of `i` except its maximum value +2,147,483,647. Only the types `b`, `s`, `i`, or `int8` can be specified for `n`. Furthermore, a literal or constant specified for `n` cannot have the value 0. If `n` is an untyped literal or a host variable, its content must match the data type `i` in accordance with the rules for a [lossless assignment](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html).

The addition `UP TO` cannot be used with addition [`SINGLE`](ABAPSELECT_SINGLE.html) and cannot be used with [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), or [`EXCEPT`](ABAPUNION.html).

Reading of the three business customers with the highest discount rates.

The addition `OFFSET` is used to return only the rows after the row with the count `o` from the result set. If `OFFSET` is specified, the result set must be sorted using [`ORDER BY`](ABAPORDERBY_CLAUSE.html). `o` expects a [host variable](ABENABAP_SQL_HOST_VARIABLES.html), a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html), or a [literal](ABENABAP_SQL_LITERALS.html) of the type `b`, `s`, `i`, or `int8`, which can represent all non-negative numbers in the value range of `i` except its maximum value +2,147,483,647. A literal or constant specified for `n` cannot have the value 0.

The addition `OFFSET` cannot be used together with the additions [`SINGLE`](ABAPSELECT_SINGLE.html) and [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html), and not when [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), or [`EXCEPT`](ABAPUNION.html) is used.

Reading of the data of all flights of a connection, except for the ten flights with the fewest seats taken.

[Restricting the result set](ABENSELECT_UP_TO_OFFSET_ABEXA.html)

-   **Main query**
-   If the [`INTO` clause](ABAPINTO_CLAUSE.html) is specified as last clause of the `SELECT` statement, the additions must be after the `INTO` clause. Otherwise, they can also be after the [`SELECT` clause](ABAPSELECT_LIST.html) or after the [`FROM` clause](ABAPFROM_CLAUSE.html). The order of the two additions is not fixed. The addition `OFFSET` can be used only if there is an [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause.
-   **Subquery**
-   The addition `UP TO` can only be specified after an [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause and the addition `OFFSET` can only be specified after `UP TO`.

-   If `n` contains the value 0, a maximum of 2,147,483,647 rows are placed in the result set.
-   A positive number in `n` indicates the maximum number of rows in the result set.
-   If `n` contains a negative number or +2,147,483,647, a syntax error is produced, or an uncatchable exception is raised.

-   The addition `UP TO n ROWS` is preferable to a `SELECT` loop that is terminated after importing `n` rows. In the latter case, the last [package](ABENABAP_SQL_OVIEW.html) passed from the database to the AS ABAP usually contains superfluous rows.
-   Without the addition [`ORDER BY`](ABAPORDERBY_CLAUSE.html), the addition `UP TO 1 ROWS` provides the same result as the addition [`SINGLE`](ABAPSELECT_SINGLE.html) and there are no major differences in performance.

-   If `SINGLE` is used, data can be read into a non-table-like work area without opening a loop closed using [`ENDSELECT`](ABAPENDSELECT.html).
-   If `UP TO 1 ROWS` is used, the addition [`ORDER BY`](ABAPORDERBY_CLAUSE.html) can be specified to determine the first row in a multirow set of hits.

-   It is advisable to use the addition `UP TO 1 ROWS` to read at most one row from a set of selected rows. The addition [`SINGLE`](ABAPSELECT_SINGLE.html), on the other hand, should generally be used to read a completely specified row.
-   If the addition [`ORDER BY`](ABAPORDERBY_CLAUSE.html) is also specified, the rows of the hit list are sorted on the database server and only the number of sorted rows specified in `n` are passed to the result set. If the addition `ORDER BY` is not specified, `n` arbitrary rows that meet the [`WHERE`](ABAPWHERE.html) condition are passed to the result set. If the `ORDER BY` clause does not sort the result set uniquely, it is not possible to define which rows are in the result set.
-   If the addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) is also specified, all selected rows are initially read into an internal table and the addition `UP TO n ROWS` only takes effect during the passing from the system table to the actual target area. This can produce unexpected memory bottlenecks.
-   The addition `UP TO 1 ROWS` is often used to determine whether a [data source](ABAPSELECT_DATA_SOURCE.html) contains any rows that meet a certain condition. To avoid unnecessary transports of data, a `SELECT` list can also be used that contains nothing but a single constant.

-   If `o` contains the value 0, all rows from the first row are respected.
-   If `o` contains a positive number, only the rows after the row indicated by `o` are respected.
-   If `o` contains a negative number or +2,147,483,647, a syntax error is produced, or an uncatchable exception is raised.

-   It only makes sense to specify the addition `OFFSET` if the order of the rows in the result set is not undefined. Therefore, [`ORDER BY`](ABAPORDERBY_CLAUSE.html) must be specified as well, followed by appropriate columns.

SELECT \* \\n FROM scustom \\n WHERE custtype = 'B' \\n ORDER BY discount DESCENDING \\n INTO TABLE @FINAL(result) \\n UP TO 3 ROWS. SELECT fldate \\n FROM sflight \\n WHERE carrid = 'LH' AND connid = '400' \\n ORDER BY seatsocc ASCENDING, fldate \\n INTO TABLE @FINAL(result) \\n OFFSET 10. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html