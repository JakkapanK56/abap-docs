---
title: "ABAPSELECT_ITAB"
description: |
  ABAPSELECT_ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_ITAB.htm"
abapFile: "ABAPSELECT_ITAB.html"
keywords: ["select", "loop", "do", "if", "case", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "ABAPSELECT", "ITAB"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

`... @itab`

Specifies an [internal table](ABENINTERNAL_TABLE_GLOSRY.html)\\ `itab` as a [host variable](ABENABAP_SQL_HOST_VARIABLES.html) whose name must be prefixed with the `@` character as a [data source](ABAPSELECT_DATA_SOURCE.html) of a [query](ABENASQL_QUERY_GLOSRY.html). The `SELECT` statement handles the internal table of the AS ABAP like a DDIC database table that is instantiated on the database. The ABAP types of the columns in the internal table are mapped to suitable [built-in data types](ABENDDIC_BUILTIN_TYPES.html) in the ABAP Dictionary. If a column is declared with reference to a type in the ABAP Dictionary, this type is used directly.

Two cases must be distinguished:

The following conditions apply:

The data in the internal tables is handled like data on the database even if it is not transported to the database:

Generally, the internal table `itab` is regarded as a client-independent table. The first column is not regarded as a client column, regardless of its data type. This behavior can be changed with the addition [`DECLARE CLIENT`](ABAPSELECT_DECLARE_CLIENT.html). With that addition, any column of type `CHAR` with length 3 can be declared as a client column. Then, the internal table is handled as client-dependent and implicit client handling is applied.

Use of an internal table as the data source of an inner join of a [`SELECT`](ABAPSELECT.html) statement. The `SELECT` statement cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) and the internal table is transported to the database due to the join with a database table.

Looping over an internal table in a sequence defined by the sort order of different columns using `SELECT` - `ENDSELECT`. Such a loop is not possible with [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html). The `SELECT` statement can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) on the AS ABAP.

Looping over an internal table in a sequence defined by the sort order of a column using `SELECT` - `ENDSELECT`. One sequence is case-sensitive and the other is not because the function `UPPER` is used in the `ORDER BY` clause. Such a loop is not possible with [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html). The `SELECT` statement can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) on the AS ABAP.

Use of a table with an elementary data type as the data source of two [`SELECT`](ABAPSELECT.html) statements. The `SELECT` statements can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). In the second `SELECT` statement, a syntax error would occur without the alias name `number`, since the inline declaration after `INTO` cannot create an internal table with the column name `table_line`.

See also:

-   The `SELECT` statement can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html).
-   In this case, the data of the internal table is processed on the AS ABAP. This is possible for all database platforms.
-   The `SELECT` statement contains elements that are [not supported](ABENSQL_ENGINE_RESTR.html) by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html).
-   In this case, the data must be passed to a temporary table in the database before the query is actually executed. Here, only those columns are transported that need to be accessed. This option is not supported by all databases.

-   Only one internal table can be passed to the database for an ABAP SQL statement.

-   Multiple internal tables can be specified only if the ABAP SQL statement can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html).
-   Only one internal table can be specified in an ABAP SQL statement that cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html).

-   An alias name must be assigned to each internal table using [`AS`](ABAPFROM_CLAUSE.html).
-   The row type of the internal tables can be elementary or structured.

-   An elementary row type represents a column that can be addressed in the other [clauses](ABENSELECT_CLAUSES.html) of the query using the name `table_line` or an alias name defined with [`AS`](ABAPSELECT_LIST.html) in the [`SELECT` list](ABAPSELECT_LIST.html).
-   A structured row type cannot contain any substructures.

-   No deep row types are allowed. An elementary row type cannot be a string or a reference type and a structured row type cannot contain any strings, reference types, or internal tables as components, with the following exception: An elementary row type or a component can have the type [`string`](ABENBUILTIN_TYPES_CHARACTER.html) if this is declared using a reference to the built-in dictionary type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html).
-   If the addition [`ORDER BY PRIMARY KEY`](ABAPORDERBY_CLAUSE.html) is used, the respective internal table must have a [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html).
-   The key fields of a [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) in the internal tables must be contiguous columns that appear in the same order at the start of the row type.
-   If the [`FROM`](ABAPFROM_CLAUSE.html) clause is specified statically, the internal tables cannot be a generically typed formal parameter, a generically typed field symbol or be specified by dereferencing a generically type data reference variable. Such tables can only be specified in a dynamic `FROM` clause and must represent a suitable internal table at runtime.
-   The internal tables cannot contain any columns declared with reference to the obsolete dictionary types [`DF16_SCL`](ABENDDIC_BUILTIN_TYPES.html) and [`DF34_SCL`](ABENDDIC_BUILTIN_TYPES.html).
-   When an internal table with elementary row type is accessed in a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) after [`WITH`](ABAPWITH.html), the [`SELECT` list](ABAPSELECT_LIST.html) cannot be `*` or contain `data_source~*`.
-   The internal tables should have an explicitly defined primary key, which can also be empty. Generic primary keys and [standard keys](ABENSTANDARD_KEY_GLOSRY.html) are not evaluated in reads and a syntax check warning occurs.
-   As a prerequisite for passing data from an internal table to the database, [FDA](ABENFAST_DATA_ACCESS_GLOSRY.html) write access must be available and switched on, otherwise an exception occurs.

-   Data with the type [`string`](ABENBUILTIN_TYPES_CHARACTER.html) declared using a reference to the built-in dictionary type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) is handled like text fields with fixed lengths in which trailing blanks are ignored.
-   [SQL expressions](ABAPSQL_EXPR.html) are evaluated in the same way as on the database, for example:

-   Evaluations of the functions [`DIV`](ABENSQL_ARITH_FUNC.html) and [`MOD`](ABENSQL_ARITH_FUNC.html) differ from calculations with the identically named [ABAP operators](ABENARITH_OPERATORS.html).
-   Any [null values](ABENNULL_VALUE_GLOSRY.html) produced as results of nested expressions, for example, in the [`COALESCE`](ABENSQL_COALESCE.html) function or in [comparisons](ABENABAP_SQL_EXPR_LOGEXP.html), are handled as null values.
-   The result of a [relational expression](ABENABAP_SQL_STMT_LOGEXP.html) with operands that contain [null values](ABENNULL_VALUE_GLOSRY.html) is unknown, except in the case of the expression [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html).

-   If it is known statically that the statement cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) and if no database tables are accessed in the statement, a syntax check warning occurs that can be hidden by the pragma `##itab_db_select`.
-   The data in internal tables should only be transported to the database system if it is actually needed there. In this case, the pragma `##itab_db_select` can be used to hide the corresponding syntax check warning.
-   The use of an internal table as a data source of `SELECT` is mainly intended for joins with data sources from the database. Since joins with database tables or views are not supported by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html), this is possible for only one internal table within a `SELECT` statement that can be transported to the database. In contrast, joins between multiple internal tables only can be processed by the ABAP SQL in-memory engine.
-   An internal table as a data source of `SELECT` can be a potential alternative to the statements [`READ TABLE`](ABAPREAD_TABLE.html) and [`LOOP AT`](ABAPLOOP_AT_ITAB.html) in order to exploit ABAP SQL syntax that is not possible with the statements for internal tables.

-   If this solution is used, it should be ensured that the data is evaluated on the AS ABAP and that no data is transported to the database system to be evaluated. A corresponding syntax check warning is raised as a reminder.
-   The use of `SELECT` to access an internal table is usually less efficient than the statements for internal tables and should only be used in cases not covered by these statements.

-   In internal tables with elementary row types, the name of the [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line` cannot be the name of a structure in ABAP. An inline declaration using [`@DATA|@FINAL (...)`](ABAPSELECT_INTO_TARGET.html) can only be made in the [`INTO`](ABAPINTO_CLAUSE.html) clause if the column `table_line` of the result set is assigned an alias name using [`AS`](ABAPSELECT_LIST.html).
-   Currently, the access to multiple internal tables within one ABAP SQL statement is restricted to joins of internal tables. No database table can be accessed in the same statement in this case. Only one internal table can be accessed together with database tables.
-   In an ABAP program, it is possible to use the method `USE_FEATURES` of the class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html) to check whether the current database system or a database system accessed using a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) supports access to internal tables. This requires the constant `ITABS_IN_FROM_CLAUSE` of this class to be passed to the method in an internal table.
-   The pragma `##db_feature_mode[itabs_in_from_clause]` can be used to hide a syntax warning from the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) indicating that data in the internal table is being passed to an invalid database. If such an attempt is made at runtime, a catchable exception of the class `CX_SY_SQL_UNSUPPORTED_FEATURE` is raised.
-   If an internal table is used as a data source, the syntax check is performed in [strict mode from ABAP release 7.69](ABENABAP_SQL_STRICTMODE_769.html) .

-   [Internal Table as Data Source of a `SELECT` Statement](ABENSELECT_FROM_ITAB_ABEXA.html)
-   [Multiple Internal Tables as Data Sources of a `SELECT` Statement](ABENSELECT_FROM_ITAB_MULTI_ABEXA.html)
-   [Internal Table as a Data Source of the Hierarchy Generator](ABENSELECT_FROM_ITAB_HIERA_ABEXA.html)

-   [ABAP SQL In-Memory Engine, Multiple Internal Tables](ABENABAP_SQL_ENGINE_ABEXA.html)
-   [ABAP SQL In-Memory Engine, Restrictions](ABENABAP_SQL_ENGINE_RESTR_ABEXA.html)
-   [ABAP SQL In-Memory Engine, Restriction to One Internal Table](ABENABAP_SQL_ENGINE_ITAB_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA itab TYPE HASHED TABLE OF scarr \\n WITH UNIQUE KEY mandt carrid. \\n\\ \\nitab = VALUE #( ( carrid = 'LH' carrname = 'L.H.' ) \\n ( carrid = 'UA' carrname = 'U.A.' ) ). \\n\\ \\nSELECT scarr~carrid, scarr~carrname, spfli~connid \\n FROM @itab AS scarr \\n INNER JOIN spfli ON scarr~carrid = spfli~carrid \\n INTO TABLE @FINAL(result) \\n ##itab\_db\_select. \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF line, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF line, \\n itab TYPE TABLE OF line WITH EMPTY KEY. \\n\\ \\nFINAL(itab) = VALUE itab( \\n ( col1 = 8 col2 = 8 ) \\n ( col1 = 3 col2 = 5 ) \\n ( col1 = 7 col2 = 4 ) \\n ( col1 = 2 col2 = 3 ) \\n ( col1 = 0 col2 = 1 ) \\n ( col1 = 4 col2 = 6 ) ). \\n\\ \\nSELECT \* \\n FROM @itab AS itab \\n ORDER BY col1 DESCENDING \\n INTO @FINAL(wa1). \\n out->write( wa1 ). \\nENDSELECT. \\n\\ \\nout->line( ). \\n\\ \\nSELECT \* \\n FROM @itab AS itab \\n ORDER BY col2 ASCENDING \\n INTO @FINAL(wa2). \\n out->write( wa2 ). \\nENDSELECT. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n c1 type c LENGTH 1, \\n itab TYPE TABLE OF c WITH EMPTY KEY. \\n\\ \\nFINAL(itab) = VALUE itab( \\n ( 'B' ) \\n ( 'a' ) \\n ( 'A' ) \\n ( 'b' ) ). \\n\\ \\nSELECT \* \\n FROM @itab AS itab \\n ORDER BY table\_line \\n INTO @FINAL(wa1). \\n out->write( wa1 ). \\nENDSELECT. \\n\\ \\nout->line( ). \\n\\ \\nSELECT \* \\n FROM @itab AS itab \\n ORDER BY lower( table\_line ) \\n INTO @FINAL(wa2). \\n out->write( wa2 ). \\nENDSELECT. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line. \\nitab = VALUE #( ( 1 ) \\n ( 2 ) \\n ( 3 ) ). \\n\\ \\nDATA result1 LIKE itab. \\nSELECT table\_line \\n FROM @itab AS numbers \\n INTO TABLE @result1. \\nout->write( result1 ). \\n\\ \\nSELECT table\_line AS number \\n FROM @itab AS numbers \\n INTO TABLE @FINAL(result2). \\nout->write( result2 ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html