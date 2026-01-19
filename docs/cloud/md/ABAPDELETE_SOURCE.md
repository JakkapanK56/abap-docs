---
title: "ABAPDELETE_SOURCE"
description: |
  ABAPDELETE_SOURCE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDELETE_SOURCE.htm"
abapFile: "ABAPDELETE_SOURCE.html"
keywords: ["select", "delete", "if", "method", "class", "data", "types", "internal-table", "ABAPDELETE", "SOURCE"]
---

```... \{@wa|@( expr )[[`` `MAPPING FROM ENTITY` ``](ABAPMAPPING_FROM_ENTITY.html)]\}\    |\ \{TABLE @itab|@( expr )[[`` `MAPPING FROM ENTITY` ``](ABAPMAPPING_FROM_ENTITY.html)]\} ...```\\ 

[1. `... @wa|@( expr ) [MAPPING FROM ENTITY]`](#ABAP_ALTERNATIVE_1@2@)

[2. `... TABLE @itab|@( expr ) [MAPPING FROM ENTITY]`](#ABAP_ALTERNATIVE_2@2@)

In the variant `DELETE target FROM` of the statement [`DELETE`](ABAPDELETE_DBTAB.html), a non-table-like data object can be specified after `FROM`, or an internal table after `TABLE` can be specified as a [host variable](ABENABAP_SQL_HOST_VARIABLES.html) or [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html). The content of the data objects determines which rows are deleted. Like every [host variable](ABENABAP_SQL_HOST_VARIABLES.html), the name of the work area or internal table must be prefixed by the escape character `@`.

If a non-table-like work area is specified as a host variable [`@wa`](ABENABAP_SQL_HOST_VARIABLES.html) or host expression [`@( expr )`](ABENABAP_SQL_HOST_EXPRESSIONS.html), a row is searched in the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) whose [primary key](ABENPRIMARY_KEY_GLOSRY.html) content is the same as that of the corresponding initial part of the work area. The content of the work area is not converted and is interpreted according to the structure of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html). This row is deleted. The work area must meet the [prerequisites](ABENABAP_SQL_WA.html) for use in ABAP SQL statements.

If there is no row in the database with the same content as the primary key, no row is deleted and `sy-subrc` is set to 4.

[Implicit ABAP SQL client handling](ABENABAP_SQL_CLIENT_HANDLING.html) applies, in which a [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) specified in `wa` is ignored. The [current client](ABENCURRENT_CLIENT_GLOSRY.html) is used by default. The addition `USING CLIENT` can be used to switch to an explicitly specified client. The addition `CLIENT SPECIFIED` can be used to switch to the client specified in `wa`.

The `MAPPING FROM ENTITY` addition is used to handle structures and internal tables that are typed with [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). Find more information in the topic [ABAP SQL Statements with `MAPPING FROM ENTITY`](ABAPMAPPING_FROM_ENTITY.html).

Deletion of a carrier from the DDIC database table `SCARR` using a host expression.

If an internal table is specified as a host variable [`@itab`](ABENABAP_SQL_HOST_VARIABLES.html) or host expression [`@( expr )`](ABENABAP_SQL_HOST_EXPRESSIONS.html), the system processes all rows of the internal table in accordance with the rules for the work area `wa`. The row type of the internal table must meet the [prerequisites](ABENABAP_SQL_WA.html) for use in ABAP SQL statements.

If there is no row in the database with the same content as the primary key for a row of the internal table, the corresponding row is ignored and `sy-subrc` is set to 4. If the internal table is empty, no rows are deleted. However, `sy-subrc` is still set to 0. The system field `sy-dbcnt` is set to the number of rows that are actually deleted.

The `MAPPING FROM ENTITY` addition is used to handle structures and internal tables that are typed with [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). Find more information in the topic [ABAP SQL Statements with `MAPPING FROM ENTITY`](ABAPMAPPING_FROM_ENTITY.html).

Deletion of all today's flights of an airline in which no seats are occupied from the DDIC database table `SFLIGHT`. The internal table from which the key values of the deleted rows are taken is obtained in a host expression using a method call. The client field must occur in the row structure of the internal table with the type `sflight_key_tab` to ensure that its components match the primary key of the DDIC database table. This example works in the same way as [`DELETE writable_obj`, `cond`](ABAPDELETE_WHERE.html), but it requires the database to be accessed twice.

-   The work area `wa` should be declared with reference to the DDIC database table or DDIC view in ABAP Dictionary using the length of the primary key.
-   If a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) is specified as a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) for the work area `wa`, for which the data type is inferred using the `#` character, a structure consisting of the components of the primary key of the DDIC database table is created as the type.

-   When an internal table is used, package-by-package processing causes some of the rows being deleted to still be visible to any read access running in parallel with `DELETE`.
-   If an internal table `itab` is specified using a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) that is a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) for which the data type is inferred using the `#` character, a structured standard table with an empty table key whose row type consists of the components of the primary key of the DDIC database table is created as the type.

DELETE scarr FROM @( VALUE #( carrid = 'FF' ) ). TYPES: \\n BEGIN OF sflight\_key, \\n mandt TYPE sflight-mandt, \\n carrid TYPE sflight-carrid, \\n connid TYPE sflight-connid, \\n fldate TYPE sflight-fldate, \\n END OF sflight\_key, \\n sflight\_key\_tab TYPE STANDARD TABLE OF sflight\_key WITH EMPTY KEY. \\n\\ \\nCLASS sflight\_methods DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS \\n get\_empty\_flights IMPORTING carrid TYPE sflight-carrid \\n date TYPE d \\n RETURNING VALUE(r) TYPE sflight\_key\_tab. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS sflight\_methods IMPLEMENTATION. \\n METHOD get\_empty\_flights. \\n SELECT mandt, carrid, connid, fldate \\n FROM sflight \\n WHERE carrid = @carrid AND \\n fldate = @date AND \\n NOT seatsocc > 0 \\n INTO TABLE @r. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA carrid TYPE sflight-carrid. \\n cl\_demo\_input=>request( CHANGING field = carrid ). \\n FINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ). \\n DELETE sflight FROM TABLE @( \\n sflight\_methods=>get\_empty\_flights( carrid = carrid \\n date = date ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html abapdelete\_dbtab.html