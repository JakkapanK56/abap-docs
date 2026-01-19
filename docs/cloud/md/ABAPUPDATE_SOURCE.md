---
title: "ABAPUPDATE_SOURCE"
description: |
  ABAPUPDATE_SOURCE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPUPDATE_SOURCE.htm"
abapFile: "ABAPUPDATE_SOURCE.html"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "try", "class", "data", "types", "internal-table", "ABAPUPDATE", "SOURCE"]
---

``... \{\ \{SET [`set_expression1`](ABAPUPDATE_SET_EXPRESSION.html), [`set_expression2`](ABAPUPDATE_SET_EXPRESSION.html), ... [WHERE [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html)]\ [[`db_hints`](ABENABAP_SQL_DB_HINTS.html)]\}``\\ 
    ```|\ \{FROM \{@wa|@( expr )\}|\{TABLE @itab|@( expr )\}\}\              [[`INDICATORS [NOT] SET STRUCTURE set_ind`](ABAPUPDATE_SET_INDICATOR.html)]\ [[`` `MAPPING FROM ENTITY` ``](ABAPMAPPING_FROM_ENTITY.html)]\ \} ...```

[1. `... SET set_expression1, set_expression2, ... [WHERE sql_cond]\ [db_hints]`](#ABAP_ALTERNATIVE_1@2@)

[2. `... FROM @wa|@( expr ) [INDICATORS [NOT] SET STRUCTURE set_ind]\ [MAPPING FROM ENTITY]`](#ABAP_ALTERNATIVE_2@2@)

[3. `... FROM TABLE @itab|@( expr ) [INDICATORS [NOT] SET STRUCTURE set_ind]\ [MAPPING FROM ENTITY]`](#ABAP_ALTERNATIVE_3@2@)

The specifications in `source` define which rows and columns are changed. Either individual columns are changed using the addition `SET` or entire rows are overwritten using the addition `FROM`.

After `FROM` a non-table-like data object, or after `TABLE` an internal table, can be specified as a [host variable](ABENABAP_SQL_HOST_VARIABLES.html) or [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html). The content of these objects determines which rows are changed and which values are used to overwrite the rows.

After `FROM`, [set indicators](ABAPUPDATE_SET_INDICATOR.html) can be used to define individual fields within a row to be changed (instead of overwriting the entire content of a row).

[1. `... WHERE sql_cond`](#ABAP_ADDITION_1@3@)

[2. `... db_hints`](#ABAP_ADDITION_2@3@)

After the addition `SET`, the changes are specified in a list of set expressions: [`set_expression1`](ABAPUPDATE_SET_EXPRESSION.html), [`set_expression2`](ABAPUPDATE_SET_EXPRESSION.html), `...`

The content of primary key fields can be modified only if the affected [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) is not linked with a search help. If these changes would create a row which would produce duplicate entries in the primary key or a unique secondary index of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html), no rows are changed and `sy-subrc` is set to 4.

If the value of a column with type `LRAW` or `LCHR` is modified, the associated `INT2` or `INT4` field must also be given a value.

[`UPDATE`, Use of `SET`](ABENUPDATE_SET_ABEXA.html)

The addition `WHERE` determines in which rows of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) the changes are made. Those rows are changed for which the logical expression [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html) is true. The [relational expressions](ABENABAP_SQL_STMT_LOGEXP.html) of the logical expression [`sql_cond`](ABENASQL_COND.html) are subject to the restriction that no [subqueries](ABENSUBQUERY_GLOSRY.html) can be evaluated on the modified [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html). If no `WHERE` condition is specified, all the rows in the target of the statement are modified by default. In a client-dependent target, these are the rows of the [current client](ABENCURRENT_CLIENT_GLOSRY.html). The [client column](ABENCLIENT_COLUMN_GLOSRY.html) of a client-dependent target cannot be specified in the `WHERE` condition.

Sets multiple columns in a row determined using a `WHERE` condition.

In this variant, [database hints](ABENDATABASE_HINT_GLOSRY.html) can be specified using [`db_hints`](ABENABAP_SQL_DB_HINTS.html).

If a non-table-like work area is specified as a host variable [`@wa`](ABENABAP_SQL_HOST_VARIABLES.html) or host expression [`@( expr )`](ABENABAP_SQL_HOST_EXPRESSIONS.html), a row is searched in the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) whose primary key content is the same as that of the corresponding initial part of the work area. The work area must meet the [prerequisites](ABENABAP_SQL_WA.html) for use in ABAP SQL statements.

If there is no row with the same content for the primary key in the database or if the change would produce a duplicate entry in a unique secondary index, the row is not changed and `sy-subrc` is set to 4.

[Implicit ABAP SQL client handling](ABENABAP_SQL_CLIENT_HANDLING.html) applies, in which a [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) specified in `wa` is ignored. The [current client](ABENCURRENT_CLIENT_GLOSRY.html) is used by default. The addition `USING CLIENT` can be used to switch to an explicitly specified client. The addition `CLIENT SPECIFIED` can be used to switch to the client specified in `wa`.

The `MAPPING FROM ENTITY` addition is used to handle structures and internal tables that are typed with [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). Find more information in the topic [ABAP SQL Statements with `MAPPING FROM ENTITY`](ABAPMAPPING_FROM_ENTITY.html).

Changing of the discount rate of the customer with customer number '00017777' (in the current client) to 3 percent.

The same example as before but with an inline declaration and a host expression.

If an internal table is specified as a host variable [`@itab`](ABENABAP_SQL_HOST_VARIABLES.html) or host expression [`@( expr )`](ABENABAP_SQL_HOST_EXPRESSIONS.html), the system processes all rows of the internal table in accordance with the rules for the work area `wa`, with the exception that when specifying an internal table, [locators](ABENLOCATOR_GLOSRY.html) are used as a source but [writer streams](ABENWRITER_STREAM_GLOSRY.html) cannot be created.

The row type of the internal table must meet the [prerequisites](ABENABAP_SQL_WA.html) for use in ABAP SQL statements.

If there is no row with the same content of the [primary key](ABENPRIMARY_KEY_GLOSRY.html) for a row of the internal table in the database or if the change would produce a duplicate entry in a unique secondary index, the corresponding row is not changed and `sy-subrc` is set to 4. Processing then continues with the next row.

If the internal table is empty, no rows are changed. However, `sy-subrc` is still set to 0. The system field `sy-dbcnt` is set to the number of rows that are actually inserted.

The `MAPPING FROM ENTITY` addition is used to handle structures and internal tables that are typed with [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). Find more information in the topic [ABAP SQL Statements with `MAPPING FROM ENTITY`](ABAPMAPPING_FROM_ENTITY.html).

Reduction of the flight price for all of today's flights of an airline carrier in the DDIC database table `SFLIGHT` by the percentage `percent`. The new price is calculated in an internal table `sflight_tab` that is declared inline and the DDIC database table is changed by using the internal table as a source.

The same example as above, but the new price is calculated in a host expression for the internal table.

-   If a work area that does not contain any reference variables for [LOB handles](ABENLOB_HANDLE_GLOSRY.html) is specified, the content of the work area is used unconverted and according to the structure of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html). The content of the work area is assigned to the rows found. The assignment takes place without conversion, from left to right according to the structure of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html).
-   When a [LOB handle structure](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html) is specified, it must be structured exactly like the structure of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) in accordance with the [prerequisites](ABENABAP_SQL_WA.html). Work area components that are not [LOB handle components](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html) are assigned directly to the corresponding column of the row found. In the case of a LOB handle component of a reader stream type, the reader is created. If it is a type for a locator, the locator must exist and is used as a source. For details, see [LOB handles](ABENIUM_LOB.html).
-   When set indicators are specified with the addition [`INDICATORS`](ABAPUPDATE_SET_INDICATOR.html) and the work area does not contain any reference variables for [LOB handles](ABENLOB_HANDLE_GLOSRY.html), it must be compatible with the structure of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html). In the case of a [LOB handle structure](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html), the LOB handle components can be mapped to the data types `STRING` or `RAWSTRING` and are handled as described above.

-   The work area `wa` should always be declared with reference to the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html). For the derivation of [LOB handle structures](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html), there are special [additions](ABAPTYPES_LOB_HANDLE.html) of the statements `TYPES` and `[CLASS-]DATA`.
-   Exceptions due to invalid values can also be raised in compatible work areas. For example, components of the types `d` and `t` can contain invalid dates and times that are not accepted by columns of the types `DATN` and `TIMN`.
-   If a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) is specified as a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) for the work area `wa`, for which the data type is inferred using the `#` character, a structure consisting of all the database table columns is created as the type.

-   If an internal table is used, package-by-package processing performs a read in parallel to an `UPDATE` on the same rows that partially shows the new status and partially shows the old status.
-   The statement `UPDATE FROM TABLE` changes all rows for which this is possible. If `sy-subrc` contains the value 4 after the statement has been executed, this does not mean that no rows were changed. It simply means that not all of the rows in the internal table could be respected.
-   If a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) as a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) is specified as an internal table `itab`, for which the data type is inferred using the `#` character, a structured standard table whose row type consists of all the database table columns with an empty table key is created as the type.

DELETE FROM demo\_update. \\nINSERT demo\_update FROM @( VALUE #( id = 'X' ) ). \\n\\ \\nUPDATE demo\_update SET col1 = 100, \\n col2 = 200, \\n col3 = 300, \\n col4 = 400 WHERE id = 'X'. DATA wa TYPE scustom. \\n\\ \\nSELECT SINGLE \* \\n FROM scustom \\n WHERE id = '00017777' \\n INTO @wa. \\n\\ \\nwa-discount = '003'. \\nUPDATE scustom FROM @wa. SELECT SINGLE \* \\n FROM scustom \\n WHERE id = '00017777' \\n INTO @FINAL(wa). \\n\\ \\nUPDATE scustom FROM @( VALUE #( BASE wa discount = '003' ) ). DATA: carrid TYPE sflight-carrid, \\n percent TYPE p LENGTH 1 DECIMALS 0. \\n\\ \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = carrid \\n )->add\_field( CHANGING field = percent )->request( ). \\n\\ \\nSELECT \* \\n FROM sflight \\n WHERE carrid = @carrid AND \\n fldate = @( cl\_demo\_date\_time=>get\_user\_date( ) ) \\n INTO TABLE @FINAL(sflight\_tab). \\n\\ \\nIF sy-subrc = 0. \\n LOOP AT sflight\_tab ASSIGNING FIELD-SYMBOL(). \\n \-price \*= 1 - percent / 100. \\n ENDLOOP. \\nENDIF. \\n\\ \\nUPDATE sflight FROM TABLE @sflight\_tab. DATA: carrid TYPE sflight-carrid, \\n percent TYPE p LENGTH 1 DECIMALS 0. \\n\\ \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = carrid \\n )->add\_field( CHANGING field = percent )->request( ). \\n\\ \\nSELECT \* \\n FROM sflight \\n WHERE carrid = @carrid AND \\n fldate = @( cl\_demo\_date\_time=>get\_user\_date( ) ) \\n INTO TABLE @FINAL(sflight\_tab). \\n\\ \\nIF sy-subrc = 0. \\n UPDATE sflight FROM TABLE @( VALUE #( \\n FOR IN sflight\_tab \\n ( VALUE #( \\n BASE \\ \\n price = \-price \* ( 1 - percent / 100 ) ) ) ) ). \\nENDIF. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html abapupdate.html