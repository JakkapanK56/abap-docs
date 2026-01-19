---
title: "ABAPFROM_CLAUSE"
description: |
  ABAPFROM_CLAUSE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFROM_CLAUSE.htm"
abapFile: "ABAPFROM_CLAUSE.html"
keywords: ["select", "do", "if", "case", "catch", "method", "class", "data", "internal-table", "ABAPFROM", "CLAUSE"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

``... FROM \{\ \{[`data_source`](ABAPSELECT_DATA_SOURCE.html)\ [AS tabalias]\}``\\ 
         ``|\ [`join`](ABAPSELECT_JOIN.html)``\\ 
         `|\ \{(source_syntax) [AS tabalias]\}\ \}`\\ 
         ``[\ [`client_handling`](ABAPSELECT_CLIENT.html)\ ] ...``

[1. `... data_source`](#ABAP_ALTERNATIVE_1@2@)

[2. `... join`](#ABAP_ALTERNATIVE_2@2@)

[3. `... (source_syntax)`](#ABAP_ALTERNATIVE_3@2@)

[`... AS tabalias`](#ABAP_ONE_ADD@1@)

The specifications after `FROM` determine whether a [query](ABENASQL_QUERY_GLOSRY.html) accesses a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html), a [DDIC view](ABENDDIC_VIEW_GLOSRY.html), a [CDS entity](ABENCDS_ENTITY_GLOSRY.html), an [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html), or an [internal table](ABAPSELECT_ITAB.html) as a data source [`data_source`](ABAPSELECT_DATA_SOURCE.html), or whether multiple data sources are accessed in a [join expression](ABAPSELECT_JOIN.html). The optional addition `AS` defines an alias name for the data source. The optional additions [`client_handling`](ABAPSELECT_CLIENT.html) affect how [client handling](ABENCLIENT_HANDLING_GLOSRY.html) is performed.

Specification of a single data source [`data_source`](ABAPSELECT_DATA_SOURCE.html).

If a data source is specified multiple times after `FROM` in a join expression, an alias name `tabalias` must be defined after `AS` to avoid ambiguities.

Specification of the DDIC database table `SCARR` as the only data source of a [`SELECT`](ABAPSELECT.html) statement.

Specifies a [join expression](ABAPSELECT_JOIN.html) that joins multiple data sources with one another.

Specification of the DDIC database tables `SCARR` and `SPFLI` in a join expression.

Instead of static specifications, a data object `source_syntax` can be specified in parentheses. When the statement is executed, the data object must contain the syntax shown in the static specification. The data object `source_syntax` can be a character-like data object or a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with a character-like row type. The syntax in `source_syntax` is not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows. Invalid syntax raises a catchable exception of class `CX_SY_DYNAMIC_OSQL_ERROR`.

The addition `AS` used to specify an alias name statically can be specified only if `source_syntax` contains only the name of a single data source. The addition has the same meaning for this data source as when specified statically. In `source_syntax`, static attributes or constants of a class cannot be accessed from outside if the class has a static constructor that has not yet been executed.

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

Displays the flight connections (flight date, airline name, and flight number) for a departure city and a destination city. The `FROM` clause, including any inner [joins](ABAPSELECT_JOIN.html) is dynamic. The column specified after `SELECT` is also dynamic. When specified dynamically, the input values are specified indirectly using the name of the respective data object and are not chained directly. Otherwise, a special security check would be required for this input.

[`SELECT`, Dynamically Specified Tokens](ABENDYNAMIC_SQL_ABEXA.html)

An alias name `tabalias` can be assigned to the data source using the addition `AS`. This name is only valid during the `SELECT` statement and in all other positions where this specified data source is addressed. If addressed, the alias name must be used instead of the actual name.

The alias name `tabalias` must follow the [naming conventions](ABENNAMING_CONVENTIONS.html) for internal program names and the name `table_line` cannot be used. This is checked in [strict mode of the syntax check from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html) .

Definition of alias names for two data sources of a join expression and their use in the `SELECT` list and in the `ORDER BY` clause.

-   If `source_syntax` is an internal table with a [header line](ABENHEADER_LINE_GLOSRY.html), the header line and not the [table body](ABENTABLE_BODY_GLOSRY.html) is evaluated.
-   The addition `AS` can be used as part of the dynamic syntax in `source_syntax` without restrictions.
-   More specifically, if `AS` is specified statically outside the dynamic specification, `source_syntax` cannot contain any [path expressions](ABENABAP_SQL_PATH.html).
-   The class `CL_ABAP_DYN_PRG` contains methods that support the creation of correct and secure dynamic code.
-   The literals of the dynamically specified ABAP SQL statements can span multiple rows of a token specified dynamically as an internal table.
-   When specified dynamically, ABAP SQL statements can contain the comment characters [`*`](ABENCOMMENT.html) and [`"`](ABENCOMMENT.html) as follows:

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character `"`.
-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character `*`. In the row, all content is ignored from the first comment character `"`.

-   Comment characters placed within literals are, however, part of the literal.
-   The dynamic forms of the statements [`WITH`](ABAPWITH.html) and [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) enable fully dynamic `SELECT` statements, where all clauses except the `INTO` clause and the ABAP-specific additions can be specified in one dynamic token.

-   An alias name `tabalias` prevents the original name [`data_source`](ABAPSELECT_DATA_SOURCE.html) from being used, which in principle also applies to dynamic tokens. This is not checked, however, until the introduction of the [strict modes](ABENABAP_SQL_STRICT_MODES.html) in the syntax check from ABAP release 7.40, SP08 and may raise an exception.
-   If an alias name is to be named exactly like an addition of the `SELECT` statement, it may be necessary to prefix it with the [escape character `!`](ABENNAMES_ESCAPING.html).
-   A [path expression](ABENABAP_SQL_PATH.html) in the [data source](ABAPSELECT_DATA_SOURCE.html) of the `FROM` clause should have an alias name defined with `AS`. This is checked in [strict mode from ABAP release 7.67](ABENABAP_SQL_STRICTMODE_767.html).
-   Outside of the [strict syntax check mode from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html), an alias can also contain the minus character (`-`).

SELECT FROM scarr \\n FIELDS \* \\n INTO TABLE @FINAL(result). SELECT FROM scarr \\n INNER JOIN spfli \\n ON scarr~carrid = spfli~carrid \\n FIELDS scarr~carrname, \\n spfli~connid, \\n spfli~cityfrom, \\n spfli~cityto \\n INTO TABLE @FINAL(result). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: cityfr TYPE spfli-cityfrom VALUE 'FRANKFURT', \\n cityto TYPE spfli-cityto VALUE 'NEW YORK'. \\n\\ \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = cityfr \\n )->add\_field( CHANGING field = cityto )->request( ). \\n\\ \\nDATA: \\n BEGIN OF wa, \\n fldate TYPE sflight-fldate, \\n carrname TYPE scarr-carrname, \\n connid TYPE spfli-connid, \\n END OF wa, \\n itab LIKE SORTED TABLE OF wa \\n WITH UNIQUE KEY fldate carrname connid. \\n\\ \\nFINAL(column\_syntax) = \`c~carrname, p~connid, f~fldate\`. \\n\\ \\nFINAL(source\_syntax) = \`( ( scarr AS c \` \\n & \` INNER JOIN spfli AS p ON p~carrid = c~carrid\` \\n & \` AND p~cityfrom = @cityfr\` \\n & \` AND p~cityto = @cityto )\` \\n & \` INNER JOIN sflight AS f ON f~carrid = p~carrid \` \\n & \` AND f~connid = p~connid )\`. \\n\\ \\nSELECT (column\_syntax) \\n FROM (source\_syntax) \\n INTO CORRESPONDING FIELDS OF TABLE @itab. \\n\\ \\nout->write\_data( itab ). \\n\\ \\nout->display( ). SELECT FROM scarr AS c \\n INNER JOIN spfli AS p \\n ON c~carrid = p~carrid \\n FIELDS c~carrname, p~connid, p~cityfrom, p~cityto \\n ORDER BY c~carrname, p~connid, p~cityfrom, p~cityto \\n INTO TABLE @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html