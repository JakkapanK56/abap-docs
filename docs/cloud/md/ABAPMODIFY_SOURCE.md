---
title: "With respect to the following actions,"
description: |
  the same rules and notes apply as when using a subquery as a data source(ABAPINSERT_SOURCE.html) of the statement `INSERT`(ABAPINSERT_DBTAB.html). In particular, a subquery cannot be used if logging(ABENDDIC_DATABASE_TABLES_PROTOCOL.html) is enabled for the table to be modified. If the result
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMODIFY_SOURCE.htm"
abapFile: "ABAPMODIFY_SOURCE.html"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "ABAPMODIFY", "SOURCE"]
---

```...  @wa|@( expr ) [[`` `MAPPING FROM ENTITY` ``](ABAPMAPPING_FROM_ENTITY.html)]\    |\ \{ TABLE @itab|@( expr ) [[`` `MAPPING FROM ENTITY` ``](ABAPMAPPING_FROM_ENTITY.html)]\ \}\    |  ( SELECT [`subquery_clauses`](ABAPINSERT_FROM_SELECT.html)\ [[`UNION|INTERSECT|EXCEPT ...`](ABAPUNION.html)] ) ...```

[1. `... @wa|@( expr ) [MAPPING FROM ENTITY]`](#ABAP_ALTERNATIVE_1@2@)

[2. `... TABLE @itab|@( expr ) [MAPPING FROM ENTITY]`](#ABAP_ALTERNATIVE_2@2@)

[3. `... ( SELECT subquery_clauses [UNION|INTERSECT|EXCEPT ...] ) ...`](#ABAP_ALTERNATIVE_3@2@)

A non-table-like data object `wa` can be specified after `FROM` in the statement [`MODIFY`](ABAPMODIFY_DBTAB.html) and an internal table or a parenthesized [subquery](ABENABAP_SQL_HOST_VARIABLES.html) can be specified after `TABLE`. The work area and the internal table can be specified as a [host variable](ABENABAP_SQL_HOST_VARIABLES.html) or a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html). On one hand, the content of the data objects or the result set of the subquery determines whether the rows are inserted or changed, and on the other hand, which values are inserted or used for changes.

When a non-table-like work area that meets the [requirements](ABENABAP_SQL_HOST_EXPRESSIONS.html) for use in ABAP SQL statements is specified as a host variable [`@wa`](ABENABAP_SQL_HOST_VARIABLES.html) or host expression [`@( expr )`](ABENABAP_SQL_HOST_EXPRESSIONS.html), a row is searched in the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) that has the same content in the [primary key](ABENPRIMARY_KEY_GLOSRY.html) as the corresponding initial part of the work area.

If the change would produce a duplicate entry in a unique secondary index, it is not executed and `sy-subrc` is set to 4.

[Implicit ABAP SQL client handling](ABENABAP_SQL_CLIENT_HANDLING.html) applies, in which a [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) specified in `wa` is ignored. The [current client](ABENCURRENT_CLIENT_GLOSRY.html) is used by default. The addition `USING CLIENT` can be used to switch to an explicitly specified client. The addition `CLIENT SPECIFIED` can be used to switch to the client specified in `wa`.

The `MAPPING FROM ENTITY` addition is used to handle structures and internal tables that are typed with [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). Find more information in the topic [ABAP SQL Statements with `MAPPING FROM ENTITY`](ABAPMAPPING_FROM_ENTITY.html).

Creating or changing a [message](ABENMESSAGE_GLOSRY.html) in a DDIC database table. If there is no message with the number 100 in the `MYMSGCLASS` message class in English, it will be created. Otherwise, only the text is changed.

The same example as before, but with a host expression.

When an internal table is specified as a host variable [`@itab`](ABENABAP_SQL_HOST_VARIABLES.html) or host expression [`@( expr )`](ABENABAP_SQL_HOST_EXPRESSIONS.html), its rows are evaluated to overwrite existing rows or to insert new rows. The row type of the internal table must meet the [prerequisites](ABENABAP_SQL_WA.html) for use in ABAP SQL statements.

This behavior is platform-dependent and follows one of the following patterns depending on the database system:

These two platform-dependent processing methods can produce different results in cases where the DDIC database table has unique secondary indexes (see [executable example](ABENBULK_MODIFY_ABEXA.html)).

If the change to a row in the internal table would produce a duplicate entry in a unique secondary index, the corresponding row is not inserted and `sy-subrc` is set to 4. If the internal table is empty, no rows are processed. However, `sy-subrc` is still set to 0. The system field `sy-dbcnt` is set to the number of rows that are actually processed.

The `MAPPING FROM ENTITY` addition is used to handle structures and internal tables that are typed with [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). Find more information in the topic [ABAP SQL Statements with `MAPPING FROM ENTITY`](ABAPMAPPING_FROM_ENTITY.html).

Creation or changing of multiple rows in DDIC database table `DEMO_UPDATE`. This DDIC database table does not have a unique secondary index and the result is therefore not platform-dependent.

The same example as before, but with a host expression.

[`MODIFY FROM TABLE`](ABENBULK_MODIFY_ABEXA.html)

If a parenthesized [subquery](ABENSUBQUERY_GLOSRY.html) is specified, the rows in the result set defined by [`subquery_clauses`](ABAPINSERT_FROM_SELECT.html) are evaluated to overwrite the existing rows or to insert new rows. The [set operators](ABENCDS_SET_OPERATORS_GLOSRY.html)\\ [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), and [`EXCEPT`](ABAPUNION.html) can be used to combine the result sets of multiple subqueries. In this case, special rules [`query_clauses`](ABAPUNION_CLAUSE.html) apply to specifying clauses.

When used with a subquery, the statement `MODIFY` is platform-dependent, as above when an internal table is specified, and follows one of the two following database-dependent patterns:

With respect to the following actions,

the same rules and notes apply as when using a subquery as a [data source](ABAPINSERT_SOURCE.html) of the statement [`INSERT`](ABAPINSERT_DBTAB.html). In particular, a subquery cannot be used if [logging](ABENDDIC_DATABASE_TABLES_PROTOCOL.html) is enabled for the table to be modified.

If the result set of the subquery is empty, no rows are processed and `sy-subrc` is set to 4.

A subquery in the statement `MODIFY` is not supported by all databases. If this is detected at runtime on a database that does not support the pragma, a catchable exception of the class `CX_SY_SQL_UNSUPPORTED_FEATURE` is raised.

A subquery of the statement `MODIFY` reads all rows in the database table `demo_join3` and uses the result set to modify the database table `demo_join1`. Two rows of the result set overwrite existing rows in `demo_join1` and a row is inserted. Only if logging is disabled for DDIC database table `DEMO_JOIN1`, a subquery can be used. Otherwise, the data must be inserted into an internal table that serves as a source for the modification.

-   If a row like this is found, this row is overwritten in accordance with the same rules as for the statement [`UPDATE`](ABAPUPDATE_SOURCE.html).
-   If a row like this is not found, a new row is inserted according to the same rules as for the statement [`INSERT`](ABAPINSERT_SOURCE.html).

-   Exceptions due to invalid values can also be raised in compatible work areas. For example, components of the types `d` and `t` can contain invalid dates and times that are not accepted by columns of the types `DATN` and `TIMN`.
-   If a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) is specified as a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) for the work area `wa`, for which the data type is inferred using the `#` character, a structure consisting of all the database table columns is created as the type.

-   `UPDATE` followed by `INSERT`:

-   First, the same function as for [`UPDATE FROM TABLE`](ABAPUPDATE_SOURCE.html) is executed for all rows of the internal table.
-   Next, the same function as for [`INSERT FROM TABLE`](ABAPINSERT_SOURCE.html) is executed for all rows. Here, any rows that have the same [primary key](ABENPRIMARY_KEY_GLOSRY.html) or unique [secondary index](ABENSECONDARY_INDEX_GLOSRY.html) are ignored.

-   The processing of the rows in the internal table can also be split into blocks depending on the database system.
-   Row by row `MODIFY`
-   In a loop, each row in the internal table is processed in accordance with the rule above for `MODIFY ... FROM wa`. Here, the database system specifies whether processing continues in cases where a row could not be inserted due to a unique secondary index.

-   To prevent platform-dependent behavior, `MODIFY ... FROM itab` should only be applied to DDIC database tables without unique secondary indexes. If not, the required behavior must be programmed explicitly using `UPDATE` and `INSERT` or using `LOOP AT itab` and `MODIFY`.
-   If a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) as a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) is specified as an internal table `itab`, for which the data type is inferred using the `#` character, a structured standard table whose row type consists of all the database table columns with an empty table key is created as the type.
-   When an internal table is specified, [locators](ABENLOCATOR_GLOSRY.html) can be used as a source, but no [writer streams](ABENWRITER_STREAM_GLOSRY.html) can be created.

-   `UPDATE` followed by `INSERT`
-   Row-by-row `MODIFY`

-   client handling,
-   inserting or modifying the data in the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) and
-   handling of null values,

FINAL(message\_wa) = VALUE t100( \\n sprsl = 'E' \\n arbgb = 'MYMSGCLASS' \\n msgnr = '100' \\n text = 'Some new message ...' ). \\n\\ \\nMODIFY t100 FROM @message\_wa. MODIFY t100 FROM @( VALUE #( \\n sprsl = 'E' \\n arbgb = 'MYMSGCLASS' \\n msgnr = '100' \\n text = 'Some new message ...' ) ). TYPES itab TYPE TABLE OF demo\_update WITH EMPTY KEY. \\n\\ \\nFINAL(itab) = VALUE itab( \\n ( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) \\n ( id = 'Y' col1 = 11 col2 = 12 col3 = 13 col4 = 14 ) \\n ( id = 'Z' col1 = 21 col2 = 22 col3 = 23 col4 = 24 ) ). \\n\\ \\nMODIFY demo\_update FROM TABLE @itab. MODIFY demo\_update FROM TABLE @( \\n VALUE #( ( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) \\n ( id = 'Y' col1 = 11 col2 = 12 col3 = 13 col4 = 14 ) \\n ( id = 'Z' col1 = 21 col2 = 22 col3 = 23 col4 = 24 ) ) ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_join1. \\nINSERT demo\_join1 \\n FROM TABLE @( VALUE #( ( a = 'a1' b = 'b1' c = 'c1' d = 'd1' ) \\n ( a = 'a2' b = 'b2' c = 'c2' d = 'd2' ) ) ). \\nDELETE FROM demo\_join3. \\nINSERT demo\_join3 \\n FROM TABLE @( VALUE #( ( i = 'a1' j = 'j1' k = 'k1' l = 'l1' ) \\n ( i = 'a2' j = 'j2' k = 'k2' l = 'l2' ) \\n ( i = 'i3' j = 'j3' k = 'k3' l = 'l3' ) ) ). \\n\\ \\nIF cl\_dbi\_utilities=>is\_logging\_on( 'DEMO\_JOIN1' ) IS INITIAL. \\n MODIFY demo\_join1 FROM ( SELECT i, j, k, l FROM demo\_join3 ) \\n ##logging\_versus\_from\_select\[demo\_join1\]. \\nELSE. \\n SELECT i, j, k, l FROM demo\_join3 \\n INTO TABLE @FINAL(buffer). \\n MODIFY demo\_join1 FROM TABLE @buffer. \\nENDIF. \\n\\ \\nSELECT \* \\n FROM demo\_join1 \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html abapmodify\_dbtab.html