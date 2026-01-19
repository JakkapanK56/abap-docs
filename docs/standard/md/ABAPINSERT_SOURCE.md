---
title: "ABAPINSERT_SOURCE"
description: |
  ABAPINSERT_SOURCE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINSERT_SOURCE.htm"
abapFile: "ABAPINSERT_SOURCE.html"
keywords: ["select", "insert", "delete", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "ABAPINSERT", "SOURCE"]
---

[Short Reference](ABAPINSERT_DBTAB_SHORTREF.html)

```...  @wa|@( expr ) [[`` `MAPPING FROM ENTITY` ``](ABAPMAPPING_FROM_ENTITY.html)]```\\ 
  ```|\ \{ TABLE @itab|@( expr ) [[`` `MAPPING FROM ENTITY` ``](ABAPMAPPING_FROM_ENTITY.html)]\ [ACCEPTING DUPLICATE KEYS]\ \}```\\ 
  ``| ( SELECT [`subquery_clauses`](ABAPINSERT_FROM_SELECT.html)\ [[`UNION|INTERSECT|EXCEPT ...`](ABAPUNION.html)] ) ...``

[1. `... @wa|@( expr ) [MAPPING FROM ENTITY] ...`](#ABAP_ALTERNATIVE_1@2@)

[2. `... TABLE @itab|@( expr ) [MAPPING FROM ENTITY]\ [ACCEPTING DUPLICATE KEYS] ...`](#ABAP_ALTERNATIVE_2@2@)

[3. `... ( SELECT subquery_clauses [UNION|INTERSECT|EXCEPT ...] ) ...`](#ABAP_ALTERNATIVE_3@2@)

Data sources of the ABAP SQL [`INSERT`](ABAPINSERT_DBTAB.html) statement:

The content of the row or rows to be inserted is taken from these data objects or from the result set of the subquery.

Host variables without the escape character `@` are [obsolete](ABENABAP_SQL_HOSTVAR_OBSOLETE.html). The escape character `@` must be specified in the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP05.

After [`VALUES`](ABAPINSERT_DBTAB.html) and [`FROM`](ABAPINSERT_DBTAB.html), a non-table-like work area can be specified as a host variable [`@wa`](ABENABAP_SQL_HOST_VARIABLES.html) or as a host expression [`@( expr )`](ABENABAP_SQL_HOST_EXPRESSIONS.html), from whose content a row is created for insertion into the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html). The work area must meet the [prerequisites](ABENABAP_SQL_WA.html) for use in ABAP SQL statements.

The new row is inserted into the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) if it does not already contain a row with the same [primary key](ABENPRIMARY_KEY_GLOSRY.html) or the same unique secondary index. If it does, the row is not inserted and `sy-subrc` is set to 4. When the row is inserted, the content of the work area assigned to the individual columns of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) is mapped by the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) to its data types and converted if necessary. If content is not suitable, overflows or invalid values may raise exceptions.

If a view is specified in [`target`](ABAPIUMD_TARGET.html) that does not include all columns in the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html), these are set to either their type-dependent [initial value](ABENINITIAL_VALUE_GLOSRY.html) or the [null value](ABENNULL_VALUE_GLOSRY.html) in the inserted rows. The latter is only the case if the property `NOT NULL` is not selected in the database for the columns in question in the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html).

[Implicit ABAP SQL client handling](ABENABAP_SQL_CLIENT_HANDLING.html) applies, in which a [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) specified in `wa` is ignored. The [current client](ABENCURRENT_CLIENT_GLOSRY.html) is used by default. The addition [`USING CLIENT`](ABAPIUMD_CLIENT.html) can be used to switch to an explicitly specified client. The addition [`CLIENT SPECIFIED`](ABAPIUMD_CLIENT.html) can be used to switch to the client specified in `wa`.

The `MAPPING FROM ENTITY` addition is used to handle structures and internal tables that are typed with [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). Find more information in the topic [ABAP SQL Statements with `MAPPING FROM ENTITY`](ABAPMAPPING_FROM_ENTITY.html).

Insertion of a new airline into the DDIC database table `SCARR` using a work area `wa`.

Insertion of a new airline into the DDIC database table `SCARR` with the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) in a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html).

An internal table `itab` can be specified as a host variable [`@itab`](ABENABAP_SQL_HOST_VARIABLES.html) or host expression [`@( expr )`](ABENABAP_SQL_HOST_EXPRESSIONS.html) after [`FROM`](ABAPINSERT_DBTAB.html) and `TABLE`, from whose content multiple rows are created for insertion into the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html). The row type of the internal table must meet the [prerequisites](ABENABAP_SQL_WA.html) for use in ABAP SQL statements.

The content of each row of the internal table is assembled into a row to be inserted using the same rules as for a single work area `wa` with the exception that when inserting from an internal table, [locators](ABENLOCATOR_GLOSRY.html) operate as the source but no [writer streams](ABENWRITER_STREAM_GLOSRY.html) can be created.

If no row with the same [primary key](ABENPRIMARY_KEY_GLOSRY.html) or with the same unique secondary index exists in the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) for any of the rows to be inserted, all rows are inserted and `sy-subrc` is set to 0. If the internal table is empty, no rows are inserted. However, `sy-subrc` is still set to 0. The system field `sy-dbcnt` is set to the number of rows that are inserted.

If a row with the same primary key or the same unique secondary index exists in the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) for one or more of the rows to be inserted, these rows cannot be inserted. In this situation, there are the following options:

The `MAPPING FROM ENTITY` addition is used to handle structures and internal tables that are typed with [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). Find more information in the topic [ABAP SQL Statements with `MAPPING FROM ENTITY`](ABAPMAPPING_FROM_ENTITY.html).

Insertion of multiple rows in a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) using the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html). This example shows the two ways of dealing with duplicate rows.

A parenthesized [subquery](ABENSUBQUERY_GLOSRY.html) can be specified as a data source after [`FROM`](ABAPINSERT_DBTAB.html). The rows of the result set of a subquery are inserted, which is defined by the corresponding clauses [`subquery_clauses`](ABAPINSERT_FROM_SELECT.html). The [set operators](ABENCDS_SET_OPERATORS_GLOSRY.html)\\ [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), and [`EXCEPT`](ABAPUNION.html) can be used to combine the result sets of multiple subqueries. In this case, special rules [`query_clauses`](ABAPUNION_CLAUSE.html) apply when specifying clauses.

The statement `INSERT` with subquery cannot be used if [logging](ABENDDIC_DATABASE_TABLES_PROTOCOL.html) is enabled for the table to be filled. If used for a DDIC database table with logging enabled, the uncatchable exception `DBSQL_DBPRT_STATEMENT` is raised. The corresponding warning from the syntax check can be switched off with the pragma `##logging_versus_from_select`. Logging is enabled for a DDIC database table if the corresponding [technical property](ABENDDIC_DATABASE_TABLES_TECHSPEC.html) of the DDIC database table and the profile parameter `rec/client` are set accordingly.

If a subquery is used as a data source, two cases must be considered in client handling of the `INSERT` statement:

The data from the result set is inserted into the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) to be filled column by column in the database system. Columns are assigned using their position. The columns names in the result set are not important for assignment purposes. The columns assigned to each other must have the same type properties with respect to [built-in data type](ABENDDIC_BUILTIN_TYPES.html), length, and number of decimal places, with the following exceptions:

All other types must be exactly the same. This applies specifically to [`NUMC`](ABENDDIC_BUILTIN_TYPES.html) and [`RAW`](ABENDDIC_BUILTIN_TYPES.html), where the lengths must match. The different categories of [strings](ABENDDIC_CHARACTER_BYTE_TYPES.html) cannot be combined either.

The statement `INSERT` with subquery does not insert [null values](ABENNULL_VALUE_GLOSRY.html) into the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) to be filled. Null values to be inserted can be produced in the following cases:

In these cases, the following is done instead of inserting a null value:

Columns of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) to be filled that do not have a column in the result set of the subquery are also filled with their type-dependent initial value.

If it was possible to insert all rows of the result set, `sy-subrc` is set to 0. If it was not possible to insert a row from the result set, since a row with the same [primary key](ABENPRIMARY_KEY_GLOSRY.html) or an identical unique secondary index exists, all previously inserted rows are discarded and a catchable exception of the class `CX_SY_OPEN_SQL_DB` is raised. If the result set of the subquery is empty, no row is inserted and `sy-subrc` is set to 4.

Insertion of all rows of a union set of the DDIC database tables `DEMO_JOIN1` and `DEMO_JOIN2` into the table `DEMO_JOIN3`. Only if logging is disabled for `DEMO_JOIN3`, a subquery can be used. Otherwise, the data must be inserted into an internal table using selection.

-   After the additions `VALUES` and `FROM`, a non-table-like data object can be specified as a host variable [`@wa`](ABENABAP_SQL_HOST_VARIABLES.html) or host expression [`@( expr )`](ABENABAP_SQL_HOST_EXPRESSIONS.html).
-   After `FROM TABLE`, an internal table can be specified as a host variable [`@itab`](ABENABAP_SQL_HOST_VARIABLES.html) or host expression [`@( expr )`](ABENABAP_SQL_HOST_EXPRESSIONS.html).
-   After `FROM TABLE`, a [subquery](ABAPINSERT_FROM_SELECT.html) can be specified.

-   When specifying a work area that does not contain any reference variables for [LOB handles](ABENLOB_HANDLE_GLOSRY.html), the content of the row to be inserted is taken from the work area `wa` while ignoring its data type and from left to right in accordance with the structure of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html). No conversion is made to the ABAP type that is assigned to a column using its [dictionary type](ABENDDIC_BUILTIN_TYPES.html).
-   When a [LOB handle structure](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html) is specified, it must be constructed exactly like the structure of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html), in accordance with the [prerequisites](ABENABAP_SQL_WA.html). The components of the work area that are not [LOB Handle components](ABENLOB_HANDLE_COMPONENT_GLOSRY.html) are assigned directly to the corresponding columns of the new row. In the case of a LOB handle component of a read stream type, this type is created. In the case of a type for a locator, this must exist and is used as a source. For details, see [LOB handles](ABENIUM_LOB.html).

-   The work area `wa` should always be declared in relation to the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html). For the derivation of [LOB handle structures](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html), there are special [additions](ABAPTYPES_LOB_HANDLE.html) of the statements `TYPES` and `[CLASS-]DATA`.
-   Exceptions due to invalid values can be raised in compatible work areas. For example, components of the types `d` and `t` can contain invalid dates and times that are not accepted by columns of the types `DATN` and `TIMN`.
-   If a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) is specified as a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) for the work area `wa`, for which the data type is inferred using the `#` character, a structure consisting of all the database table columns is created as the type.
-   If the DDIC database table or DDIC view is specified statically, an obsolete [short form](ABAPINSERT_OBSOLETE.html) of the specification outside of classes is possible. This means that the specification of the work area using `FROM wa` in the variant without `INTO` can be omitted if a [table work area](ABENTABLE_WORK_AREA_GLOSRY.html)\\ `dbtab` for the corresponding DDIC database table or DDIC view is declared using the statement `TABLES`. The runtime framework then adds the addition `FROM dbtab` to the statement `INSERT` implicitly.

-   Use of `ACCEPTING DUPLICATE KEYS`
-   If the addition `ACCEPTING DUPLICATE KEYS` is specified, all rows are inserted for which this is possible. All rows that would produce duplicate entries with respect to the primary key or to a unique secondary index are discarded and `sy-subrc` set to 4. The system field `sy-dbcnt` is set to the number of rows that are inserted.
-   No use of `ACCEPTING DUPLICATE KEYS`

-   Handling of the exception `CX_SY_OPEN_SQL_DB`
-   If the addition `ACCEPTING DUPLICATE KEYS` is not specified, the catchable exception `CX_SY_OPEN_SQL_DB` is raised when a duplicate row is inserted. Rows continue to be inserted until the exception is raised and handled. The number of inserted rows is undefined. The system fields `sy-subrc` and `sy-dbcnt` retain their previous value.
-   No handling of the exception `CX_SY_OPEN_SQL_DB`
-   If the addition `ACCEPTING DUPLICATE KEYS` is not specified and if the exception is not handled, a runtime error occurs when a duplicate row is inserted. This executes a [database rollback](ABENDB_ROLLBACK.html) that undoes all changes to the current [database LUW](ABENDB_TRANSACTION.html). This applies in particular to rows that were inserted before the duplicate entry was made.

-   The addition `ACCEPTING DUPLICATE KEYS` does not indicate that duplicate key entries are accepted in the strict sense of the word. More specifically, no change is made to an existing entry as is the case when [`MODIFY`](ABAPMODIFY_DBTAB.html) is used. Instead, `ACCEPTING DUPLICATE KEYS` prevents the associated exception from being raised and sets the return code `sy-subrc` to 4.
-   If the runtime error produced by inserting existing rows is prevented by handling an exception instead of using the addition `ACCEPTING DUPLICATE KEYS`, a database rollback must be initiated explicitly, if required.
-   If an internal table is used, package-by-package processing causes any read accesses running in parallel to `INSERT` to view only some of the rows to be inserted.
-   If a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) as a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) is specified as an internal table `itab`, for which the data type is inferred using the `#` character, a structured standard table whose row type consists of all the database table columns with an empty table key is created as the type.

-   If the subquery uses [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) of the `SELECT` statement by default or switches it using the addition [`USING CLIENT`](ABAPSELECT_CLIENT.html), implicit client handling of the `INSERT` statement cannot be switched using the addition [`CLIENT SPECIFIED`](ABAPIUMD_CLIENT.html). The client column of a client-dependent DDIC database table or DDIC table view filled using the `INSERT` statement is filled with the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) or the client specified using [`USING CLIENT`](ABAPIUMD_CLIENT.html), regardless of the result set of the subquery.
-   If the subquery switches [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) of the `SELECT` statement using one of the additions [`USING [ALL] CLIENTS [IN]`](ABAPSELECT_CLIENT.html), implicit client handling of the `INSERT` statement must be switched using the addition [`CLIENT SPECIFIED`](ABAPIUMD_CLIENT.html). The result set of a subquery of this type can contain multiple client IDs and these are inserted into the client column of the target of the `INSERT` statement.

-   In the case of the numeric types [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html), and [`INT8`](ABENDDIC_BUILTIN_TYPES.html), columns with a smaller value range can be assigned to a column with a greater value range.
-   In the case of the numeric type [`DEC`](ABENDDIC_BUILTIN_TYPES.html), columns with shorter lengths can be assigned to columns with greater lengths. Furthermore, columns with fewer decimal places can be assigned to columns with more decimal places, as long as there are enough integer digits. The corresponding special types [`CURR`](ABENDDIC_BUILTIN_TYPES.html) and [`QUAN`](ABENDDIC_BUILTIN_TYPES.html) are handled here like [`DEC`](ABENDDIC_BUILTIN_TYPES.html).
-   The numeric types [`DF16_DEC`](ABENDDIC_BUILTIN_TYPES.html) and [`DF34_DEC`](ABENDDIC_BUILTIN_TYPES.html) are handled like the numbers of type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) as they are stored and the rule above applies with respect to lengths and decimal places.
-   In the case of the character-like type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html), columns with shorter lengths can be assigned to columns with greater lengths. The corresponding special types [`CLNT`](ABENDDIC_BUILTIN_TYPES.html), [`LANG`](ABENDDIC_BUILTIN_TYPES.html), [`CUKY`](ABENDDIC_BUILTIN_TYPES.html), and [`UNIT`](ABENDDIC_BUILTIN_TYPES.html) are handled here like [`CHAR`](ABENDDIC_BUILTIN_TYPES.html).

-   As results of [outer joins](ABAPSELECT_JOIN.html) in the `FORM` clause of the subquery.
-   As results of [SQL expressions](ABAPSQL_EXPR.html) in the `SELECT` list of the subquery.
-   If a field read by the subquery already contains a null value.

-   The type-dependent [initial value](ABENDDIC_BUILTIN_TYPES.html) is inserted for columns that are not [key fields](ABENKEY_FIELD_GLOSRY.html) of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) to be filled.
-   A catchable exception of exception class `CX_SY_OPEN_SQL_DB` is raised in the case of columns that are [key fields](ABENKEY_FIELD_GLOSRY.html) of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) to be filled. If it is known statically that null values can be inserted into key fields, a syntax check warning that can be hidden by the pragma `null_values` is produced.

-   Using subqueries has better performance than using standalone `SELECT` statements to read data into an internal table and using this table as a data source.
-   Unlike when inserting rows from an internal table `itab`, the content of the modified [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) is always defined after the exception `CX_SY_OPEN_SQL_DB` is handled.
-   This variant of the `INSERT` statement is particularly well suited for filling [global temporary tables](ABENGLOBAL_TEMPORARY_TABLE_GLOSRY.html).
-   In certain circumstances, [`CAST` expressions](ABENSQL_CAST.html) can be used in the `SELECT` list of the subquery for combinations between columns that are forbidden by the rules above.
-   A [`SELECT` list](ABAPSELECT_LIST.html) of the subquery specified using `*` ignores all client columns, which means that client-dependent [CDS entities](ABENCDS_ENTITY_GLOSRY.html) whose result sets do not have a client column can be accessed without any problems.
-   Attempts to fill [key fields](ABENKEY_FIELD_GLOSRY.html) with null values raise an exception which prevents duplicate entries from being made in the writable database object to be filled.
-   Writable database objects accessed using this variant of the `INSERT` statement should not be expanded independently of each other to avoid syntax errors.
-   To avoid exceptions when performing writes to a DDIC database table with [logging](ABENDDIC_DATABASE_TABLES_PROTOCOL.html) enabled, the method `IS_LOGGING_ON` of the system class `CL_DBI_UTILITIES` can be used to branch to an alternative implementation.
-   [`USING CLIENT`](ABAPSELECT_CLIENT.html) can be used in the subquery to read the data of a client other than the client for which the data was written using `INSERT`. More specifically, the data of one client can be copied to a different client.
-   When a subquery is used, the syntax check is performed in [strict mode](ABENABAP_SQL_STRICTMODE_762.html) from ABAP release 7.62, which handles the statement more strictly than the regular syntax check.
-   When `USING CLIENT` is used or the table or DDIC view that is filled by the `INSERT` statement is accessed in the subquery, the syntax check is performed in [strict mode](ABENABAP_SQL_STRICTMODE_773.html) from ABAP release 7.73, which handles the statement more strictly than the regular syntax check. If used, [`USING [ALL] CLIENTS [IN]`](ABAPSELECT_CLIENT.html) results in [strict mode from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html).

-   [`INSERT, FROM SELECT`](ABENINSERT_FROM_SELECT_ABEXA.html)
-   [Union with Global Temporary Table](ABENSELECT_UNION_SUM_GTT_ABEXA.html)

DATA scarr\_wa TYPE scarr. \\n\\ \\nscarr\_wa = VALUE #( \\n carrid = 'FF' \\n carrname = 'Funny Flyers' \\n currcode = 'EUR' \\n url = 'http://www.funnyfly.com' ). \\n\\ \\nINSERT INTO scarr VALUES @scarr\_wa. INSERT INTO scarr VALUES @( VALUE #( \\n carrid = 'FF' \\n carrname = 'Funny Flyers' \\n currcode = 'EUR' \\n url = 'http://www.funnyfly.com' ) ). TRY. \\n INSERT scarr FROM TABLE @( VALUE #( \\n ( carrid = 'FF' \\n carrname = 'Funny Flyers' \\n currcode = 'EUR' \\n url = 'http://www.funnyfly.com' ) \\n ( carrid = 'XXL' \\n carrname = 'Extra Large Line' \\n currcode = 'USD' \\n url = 'http://www.xxlline.com' ) ) ). \\n CATCH cx\_sy\_open\_sql\_db. \\n ... \\nENDTRY. \\n\\ \\nINSERT scarr FROM TABLE @( VALUE #( \\n ( carrid = 'FF' \\n carrname = 'Funny Flyers' \\n currcode = 'EUR' \\n url = 'http://www.funnyfly.com' ) \\n ( carrid = 'XXL' \\n carrname = 'Extra Large Line' \\n currcode = 'USD' \\n url = 'http://www.xxlline.com' ) ) ) ACCEPTING DUPLICATE KEYS. \\nIF sy-subrc = 4. \\n ... \\nENDIF. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_join1. \\nINSERT demo\_join1 \\n FROM TABLE @( VALUE #( ( a = 'a1' b = 'b1' c = 'c1' d = 'd1' ) \\n ( a = 'a2' b = 'b2' c = 'c2' d = 'd2' ) \\n ( a = 'a3' b = 'b3' c = 'd3' d = 'd3' ) ) ). \\nDELETE FROM demo\_join2. \\nINSERT demo\_join2 \\n FROM TABLE @( VALUE #( ( d = 'd1' e = 'e1' f = 'f1' g = 'g1' ) \\n ( d = 'd2' e = 'e2' f = 'f2' g = 'g2' ) \\n ( d = 'd3' e = 'e3' f = 'f3' g = 'g3' ) ) ). \\n\\ \\nDELETE FROM demo\_join3. \\nIF cl\_dbi\_utilities=>is\_logging\_on( 'DEMO\_JOIN3' ) IS INITIAL. \\n INSERT demo\_join3 FROM ( SELECT a,b,c,d FROM demo\_join1 \\n UNION \\n SELECT d,e,f,g FROM demo\_join2 ) \\n ##logging\_versus\_from\_select\[demo\_join3\]. \\nELSE. \\n SELECT a,b,c,d FROM demo\_join1 \\n UNION \\n SELECT d AS a, e AS b, f AS c, g AS d FROM demo\_join2 \\n INTO TABLE @FINAL(buffer). \\n INSERT demo\_join3 FROM TABLE @buffer. \\nENDIF. \\n\\ \\nSELECT \* \\n FROM demo\_join3 \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html abapinsert\_dbtab.html