---
title: "ABAPIUMD_CLIENT"
description: |
  ABAPIUMD_CLIENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPIUMD_CLIENT.htm"
abapFile: "ABAPIUMD_CLIENT.html"
keywords: ["select", "insert", "update", "delete", "if", "case", "method", "data", "internal-table", "ABAPIUMD", "CLIENT"]
---

`... \{ USING CLIENT clnt \}  |\ \{ CLIENT SPECIFIED \}\  \    |\ \{ USING \{ CLIENT clnt \}\            |\ \{ CLIENTS IN @client_range_tab \}\            |\ \{ CLIENTS IN T000 \}\            |\ \{ ALL CLIENTS \}\ \} ...`

[1. `... \{USING CLIENT clnt\}|\{CLIENT SPECIFIED\}`](#ABAP_VARIANT_1@1@)

[2. `... \{USING CLIENT clnt\}|\{USING [ALL] CLIENTS [IN]\}`](#ABAP_VARIANT_2@1@)

These additions modify [client handling](ABENCLIENT_HANDLING_GLOSRY.html) of the ABAP SQL write statements [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html). They can be specified optionally after the target [`target`](ABAPIUMD_TARGET.html) in each of these statements. If none of these additions is specified, default client handling applies:

The two variants of the optional additions are specific for these two cases:

[1. `... USING CLIENT clnt`](#ABAP_ALTERNATIVE_1@2@)

[2. `... CLIENT SPECIFIED`](#ABAP_ALTERNATIVE_2@2@)

These two additions modify implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) of a modifying ABAP SQL statement in cases where its source is specified as a work area `wa`, internal table `itab`, or subquery `subquery_clauses` after `FROM`.

The following two `INSERT` statements have the same effect. The first statement uses the addition `USING CLIENT` and hence shows the recommended variant for specifying the client to be inserted explicitly. The second statement, on the other hand, uses `CLIENT SPECIFIED` and must hence fill the client field with the required value in the work area passed.

Modification of a row in a different client. The first `UPDATE` statement shows the recommended method with the addition `USING CLIENT`. The second `UPDATE` statement, on the other hand, uses `CLIENT SPECIFIED` and the client field of the work area must be filled.

See [`INSERT`, `CLIENT`](ABENINSERT_CLIENT_ABEXA.html)

This addition modifies implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) in ABAP SQL so that the client ID from `clnt` is used instead of the current client ID. The [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) replaces the client specified in `source` with the client specified in `clnt` and passes it to the database system.

`clnt` expects a data object of the type `c` with length 3 and containing a client ID. A [literal](ABENABAP_SQL_LITERALS.html) or a [host variable](ABENABAP_SQL_HOST_VARIABLES.html) can be specified.

The following rules apply to the addition `USING`:

The following `MODIFY` statement uses the addition `USING CLIENT`, as recommended, to access a specific client.

The addition `USING CLIENT` after `INSERT` fills two columns of a DDIC database table with three rows for the client 100. Afterwards, these rows are copied to the [current client](ABENCURRENT_CLIENT_GLOSRY.html) in a [subquery](ABENSUBQUERY_GLOSRY.html) by specifying `USING CLIENT`.

The addition `CLIENT SPECIFIED` specifies that the [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) in the client column in the source `source` specified after `FROM` is used and not the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html).

The following rules apply to the addition `CLIENT SPECIFIED`:

This example implements a client copy of all data in a table to multiple clients. The addition `CLIENT SPECIFIED` of the statement [`INSERT`](ABAPINSERT_DBTAB.html) ensures that the client IDs of the internal table used as a data source are not overwritten by the current client. The internal table is created in a host expression by copying the data of the current client read previously from `SCARR` to multiple different client IDs. Duplicate entries are avoided by first using the addition `USING CLIENTS IN` to delete all data of the area in question. After the insertion, all data of this area is read and displayed.

[1. `... USING CLIENT clnt`](#ABAP_ALTERNATIVE_1@2@)

[2. `... USING CLIENTS IN @client_range_tab`](#ABAP_ALTERNATIVE_2@2@)

[3. `... USING CLIENTS IN T000`](#ABAP_ALTERNATIVE_3@2@)

[4. `... USING ALL CLIENTS`](#ABAP_ALTERNATIVE_4@2@)

These additions modify implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) of a modifying ABAP SQL statement [`UPDATE SET`](ABAPUPDATE.html) or [`DELETE FROM`](ABAPDELETE_DBTAB.html) in which a `WHERE` condition can be specified.

Instead of `USING`, the addition [`CLIENT SPECIFIED`](ABAPUD_CLIENT_OBSOLETE.html) can also be specified outside [strict mode from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html). This is, however, obsolete here. The additions shown here should be used instead.

This addition modifies implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) in ABAP SQL so that the client ID from `clnt` is used instead of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) ID. In the implicit `WHERE` condition, the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) replaces the current client ID by the ID specified in `clnt`.

`clnt` expects a data object of the type `c` with length 3 and containing a client ID. A [literal](ABENABAP_SQL_LITERALS.html) or a [host variable](ABENABAP_SQL_HOST_VARIABLES.html) can be specified.

The following rules apply to the addition `USING`:

Statements `DELETE FROM` with the addition `USING CLIENT`. The first statement deletes rows from the client `100` with a specific ID. The second statement deletes all rows of the client `100`.

These additions switch implicit ABAP SQL [client handling](ABENCLIENT_HANDLING_GLOSRY.html) so that the data of all clients specified by the addition is modified and not just the data from the [current client](ABENCURRENT_CLIENT_GLOSRY.html). The additions modify the implicit `WHERE` condition for the client column passed to the database.

The same rules apply to the additions as to the identically named additions [`USING [ALL] CLIENTS [IN]`](ABAPSELECT_CLIENT.html) in queries.

See [`UPDATE`, `USING` `CLIENT`, `CLIENTS`](ABENUPDATE_CLIENT_CLIENTS_ABEXA.html)

-   If a work area `wa`, an internal table `itab`, or a subquery [`subquery_clauses`](ABAPINSERT_FROM_SELECT.html) is specified as a source `source` after `FROM`, the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) is used when client-dependent tables are modified instead of the values of the tables for the client column.
-   In the case of the variants `UPDATE SET` or `DELETE FROM`, in which a `WHERE` can be specified, no explicit condition can be set on the client column. Instead, an implicit condition for the current client is passed to the database system.

-   Variant 1 modifies client handling when sources are specified after `FROM`.
-   Variant 2 modifies client handling in modifying statements with possible `WHERE` conditions.

-   Each client represents a self-contained unit, which means that implicit client handling should not be switched off in application programs.
-   See also the related [security note](ABENCLIENT_DEPENDENT_SCRTY.html) and the [programming guideline](ABENCLIENT_HANDLING_GUIDL.html).

-   The addition `USING CLIENT` switches implicit client handling to the specified client.
-   The addition `CLIENT SPECIFIED` specifies that the client IDs specified in `source` are used.

-   If data is to be processed with exactly one other client ID, `USING CLIENT` should be used instead of `CLIENT SPECIFIED`, since it specifies the client explicitly.
-   If data of multiple clients is to be processed, `CLIENT SPECIFIED` can or must be used. This is particularly the case when an internal table is used as a data source whose client column contains different client IDs or if a subquery is used as a data source to select the data of various clients using [`USING [ALL] CLIENTS [IN]`](ABAPSELECT_CLIENT.html).
-   The addition [`USING [ALL] CLIENTS [IN]`](ABAPSELECT_CLIENT.html) cannot be used in this variant.
-   In this variant, the addition `CLIENT SPECIFIED` is not [obsolete](ABAPUD_CLIENT_OBSOLETE.html) and is even allowed when accessing [global temporary tables](ABENDDIC_DATABASE_TABLES_GTT.html). Here, it is used to express the fact that the client IDs of the sources specified after `FROM` are used.

-   It can be used only when modifying a client-dependent table or view of this type.
-   This addition cannot be used with the addition `CLIENT SPECIFIED`.
-   It cannot be used if a subquery is used as a data source of [`INSERT`](ABAPINSERT_DBTAB.html) or [`MODIFY`](ABAPMODIFY_DBTAB.html) in which implicit client handling is switched using [`USING [ALL] CLIENTS [IN]`](ABAPSELECT_CLIENT.html).
-   If specified, the system field `sy-mandt` would be ignored and cannot be specified directly for `clnt`.

-   If the addition `USING CLIENT` is used, the statement ABAP SQL works as if the current user were logged on with the client ID specified in `clnt`.
-   If the addition `USING CLIENT` is used for a dynamically specified DDIC database table and they are not client-dependent, the addition is ignored.
-   The addition `USING CLIENT` is not allowed in the [obsolete short forms](ABENABAP_SQL_SHORT_FORMS_OBSOLETE.html).
-   If the addition `USING CLIENT` is used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP05.html), which handles the statement more strictly than the regular syntax check.

-   It can be used only when accessing client-dependent DDIC database tables or views.
-   It cannot be used together with `USING CLIENT`.
-   It cannot be used when a subquery is used as a data source of [`INSERT`](ABAPINSERT_DBTAB.html) or [`MODIFY`](ABAPMODIFY_DBTAB.html) that works with default client handling or in which implicit client handling is switched using [`USING CLIENT`](ABAPSELECT_CLIENT.html).
-   It must be used if a subquery is used as a data source of [`INSERT`](ABAPINSERT_DBTAB.html) or [`MODIFY`](ABAPMODIFY_DBTAB.html) in which implicit client handling is switched using [`USING [ALL] CLIENTS [IN]`](ABAPSELECT_CLIENT.html).

-   If the addition `CLIENT SPECIFIED` is used for a dynamically specified DDIC database table and they are not client-dependent, the addition is ignored.
-   If specified for statically specified client-independent DDIC database tables, the addition `CLIENT SPECIFIED` produces a syntax error in the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP05 or else a syntax warning.

-   The addition `USING CLIENT` switches implicit client handling to the specified client.
-   The additions `USING [ALL] CLIENTS [IN]` select the data of any number of clients instead of the [current client](ABENCURRENT_CLIENT_GLOSRY.html).

-   It can be used only when modifying a client-dependent table or view of this type.
-   If specified, the system field `sy-mandt` would be ignored and cannot be specified directly for `clnt`.

-   If the addition `USING CLIENT` is used, the ABAP SQL statement works as if the current user were logged on with the client ID specified in `clnt`.
-   If the addition `USING CLIENT` is used for a dynamically specified DDIC database table and they are not client-dependent, the addition is ignored.
-   If the addition `USING CLIENT` is used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP05.html), which handles the statement more strictly than the regular syntax check.

-   The addition `USING CLIENTS IN @client_range_tab` selects implicitly the clients whose client IDs meet the conditions in a [ranges table](ABENRANGES_TABLE_GLOSRY.html)\\ `client_range_tab` instead of the current client. If the ranges table is empty, the data of all clients is selected.
-   The addition `USING CLIENTS IN T000` selects implicitly the clients whose client IDs are in the column `MANDT` of the system table `T000` instead of the current client.
-   The addition `USING ALL CLIENTS` selects implicitly all rows regardless of client ID instead of the current client.

-   The additions `USING [ALL] CLIENTS [IN]` replace the obsolete addition [`CLIENT SPECIFIED`](ABAPUD_CLIENT_OBSOLETE.html) if this is used to select more than one client.
-   If used, the additions `USING [ALL] CLIENTS [IN]` apply [strict mode from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html).

DELETE FROM demo\_expressions USING CLIENT '800'. \\nINSERT demo\_expressions USING CLIENT '800' \\n FROM @( VALUE #( id = 'X' num1 = '555' ) ). \\n\\ \\nDELETE FROM demo\_expressions USING CLIENT '800'. \\nINSERT demo\_expressions CLIENT SPECIFIED \\n FROM @( VALUE #( mandt = '800' id = 'X' num1 = '555' ) ). DELETE FROM demo\_update USING ALL CLIENTS. \\nINSERT demo\_update USING CLIENT '800' \\n FROM @( VALUE #( id = 'X' ) ). \\n\\ \\nUPDATE demo\_update USING CLIENT '800' \\n FROM @( VALUE #( id = 'X' col1 = 100 ) ). \\n\\ \\nUPDATE demo\_update CLIENT SPECIFIED \\n FROM @( VALUE #( client = '800' id = 'X' col1 = 100 ) ). MODIFY demo\_expressions USING CLIENT '800' \\n FROM @( VALUE #( id = 'X' num1 = '555' ) ). DELETE FROM demo\_expressions. \\nDELETE FROM demo\_expressions USING CLIENT '100'. \\n\\ \\nINSERT demo\_expressions USING CLIENT '100' \\n FROM TABLE @( VALUE #( ( id = 'X' num1 = 1 ) \\n ( id = 'Y' num1 = 2 ) \\n ( id = 'Z' num1 = 3 ) ) ). \\n\\ \\nINSERT demo\_expressions FROM \\n ( SELECT \* FROM demo\_expressions USING CLIENT '100' ) ##NULL\_VALUES. \\n\\ \\nSELECT id, num1 \\n FROM demo\_expressions \\n INTO TABLE @FINAL(itab). \\n\\ \\nSELECT id, num1 \\n FROM demo\_expressions USING CLIENT '100' \\n INTO TABLE @FINAL(itab\_100). \\n\\ \\nASSERT itab = itab\_100. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(itab). \\n\\ \\nDATA clients TYPE RANGE OF mandt. \\nclients = VALUE #( ( sign = 'I' option = 'GT' low = '900' ) ). \\n\\ \\nDELETE FROM scarr USING CLIENTS IN @clients. \\n\\ \\nINSERT scarr CLIENT SPECIFIED FROM TABLE @( VALUE #( \\n FOR i = 1 UNTIL i > 4 \\n FOR wa IN itab \\n ( VALUE #( BASE wa mandt = 900 + i \* 10 ) ) ) ). \\n\\ \\nSELECT \* \\n FROM scarr USING CLIENTS IN @clients \\n ORDER BY PRIMARY KEY \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). DELETE FROM demo\_expressions USING CLIENT '100' WHERE id = 'X'. \\nDELETE FROM demo\_expressions USING CLIENT '100'. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html abapiumd\_target.html