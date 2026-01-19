---
title: "ABAPDELETE_WHERE"
description: |
  ABAPDELETE_WHERE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDELETE_WHERE.htm"
abapFile: "ABAPDELETE_WHERE.html"
keywords: ["select", "delete", "do", "while", "if", "data", "types", "ABAPDELETE", "WHERE"]
---

[Short Reference](ABAPDELETE_DBTAB_SHORTREF.html)

``... [WHERE [`sql_cond`](ABENASQL_COND.html)]\      [[`db_hints`](ABENDATABASE_HINT_GLOSRY.html)]\      [ORDER BY ... [OFFSET o]]\ [UP TO n ROWS] ...``

[1. `... WHERE sql_cond`](#ABAP_ADDITION_1@3@)

[2. `... db_hints`](#ABAP_ADDITION_2@3@)

[3. `... [ORDER BY ... [OFFSET o]]\ [UP TO n ROWS]`](#ABAP_ADDITION_3@3@)

In the variant `DELETE FROM target` of the statement [`DELETE`](ABAPDELETE_DBTAB.html), these additions determine the rows to be deleted.

The addition `WHERE` determines which rows in a [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) are deleted. Those rows are deleted for which the logical expression [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html) is true. The logical expression `sql_cond` is subject to the restriction that no subqueries can be evaluated on the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) to be changed. If there is no database row that satisfies the `WHERE` condition, no rows are deleted and `sy-subrc` is set to 4. If no `WHERE` condition is specified, all rows are deleted or as many rows as specified by the addition `UP TO`. [Implicit ABAP SQL client handling](ABENABAP_SQL_CLIENT_HANDLING.html) applies. In a client-specific target, only rows in the [current client](ABENCURRENT_CLIENT_GLOSRY.html) are deleted by default. The [client column](ABENCLIENT_COLUMN_GLOSRY.html) of a client-dependent target cannot be specified in the `WHERE` condition. The addition [`USING`](ABAPIUMD_CLIENT.html) can be used to switch implicit client handling to different clients.

Instead of `USING`, the obsolete addition [`CLIENT SPECIFIED`](ABAPUD_CLIENT_OBSOLETE.html) can also be used outside [strict mode from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html). It disables implicit client handling and the client column can be used in the `WHERE` condition as an operand.

In the following example, all today's flights of an airline in which no seats are occupied are deleted from the DDIC database table `SFLIGHT`. See also the example for [`dtab-source`](ABAPDELETE_SOURCE.html).

In the variant `DELETE FROM TARGET`, [`db_hints`](ABENABAP_SQL_DB_HINTS.html) can be used to specify [database hints](ABENDATABASE_HINT_GLOSRY.html).

The addition `ORDER BY` is used to sort the rows defined by the `WHERE` condition. The addition `OFFSET` is used to delete only rows from the counter `o`. The addition `UP TO` restricts the number of rows to delete to `n`.

The addition `OFFSET` can only be specified together with `ORDER BY`. The addition `ORDER BY` cannot be specified without `OFFSET` or `UP TO`. If the addition `UP TO` is specified without `ORDER BY`, it is not possible to define which of the possible rows are deleted.

`n` and `o` expect [host variables](ABENABAP_SQL_HOST_VARIABLES.html), [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html), or [literals](ABENABAP_SQL_LITERALS.html) with the type `i`, which can represent all non-negative numbers of the value range of `i` except its maximum value +2,147,483,647. If 0 is specified for `n`, this maximum value is used. If 0 is specified for `o`, the addition `OFFSET` is ignored. Only the types `b`, `s`, `i`, or `int8` can be specified. If `n` or `o` is specified as a literal or constant, the value 0 is not allowed.

The addition `ORDER BY` has the same [syntax and semantics](ABAPORDERBY_CLAUSE.html) as in the [`SELECT`](ABAPSELECT.html) statement, with the difference that it is not possible to sort explicitly by the [client column](ABENCLIENT_COLUMN_GLOSRY.html) in the `DELETE` statement and that a column cannot be specified by its position `n`. The `SELECT`\-specific restrictions, on the other hand, are ignored.

The additions `OFFSET` and `UP TO` cannot be used when accessing [DDIC projection views](ABENDDIC_PROJ_VIEW_GLOSRY.html).

Deletion of entries from a DDIC database table filled using [`MODIFY`](ABAPMODIFY_DBTAB.html) in multiple iterations.

-   The addition `UP TO` can be used to prevent errors when deleting tables with a large number of entries. Errors of this type can occur, for example, if the internal transaction manager has run out of memory. Exceptions can be raised on the database here if `UP TO` is not used and not followed by a [database commit](ABENDATABASE_COMMIT_GLOSRY.html). These resource bottlenecks can be prevented by distributing the delete action to multiple `DELETE` statements and hence deleting the corresponding log entries.
-   If the addition `ORDER BY` is specified but does not sort uniquely, it is not defined which rows are deleted.
-   A `DELETE` statement with the additions `OFFSET` and `UP TO` is executed on the database as a single operation, if possible. In databases not supported by the additions `OFFSET` and `ORDER BY`, the statements `SELECT` and `DELETE` are separated internally. If [database table logging](ABENDDIC_DATABASE_TABLES_PROTOCOL.html) is enabled, these statements are always separated. This is generally slower than executing a single database operation.
-   When the additions `OFFSET` or `UP TO` are used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_763.html), which handles the statement more strictly than the regular syntax check.

DATA carrid TYPE sflight-carrid. \\ncl\_demo\_input=>request( CHANGING field = carrid ). \\n\\ \\nDELETE FROM sflight \\nWHERE carrid = @carrid AND \\n fldate = @( cl\_demo\_date\_time=>get\_user\_date( ) ) AND \\n NOT seatsocc > 0. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES bigtab TYPE TABLE OF demo\_big\_table WITH EMPTY KEY. \\n\\ \\nMODIFY demo\_big\_table FROM TABLE \\n @( VALUE bigtab( FOR i = 1 UNTIL i > 1111111 \\n ( id = i value = |\\{ i \\}| ) ) ). \\n\\ \\nDATA subrc TYPE sy-subrc. \\nDATA dbcnt TYPE sy-dbcnt. \\nWHILE subrc = 0. \\n DELETE FROM demo\_big\_table UP TO 100000 ROWS. \\n subrc = sy-subrc. \\n dbcnt = sy-dbcnt. \\n out->write( |sy-subrc: \\{ subrc \\n \\}, sy-dbcnt: \\{ dbcnt \\} | ). \\nENDWHILE. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html abapdelete\_dbtab.html