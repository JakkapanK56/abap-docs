---
title: "CDS or DDIC source code was not found"
description: |
  Unlike the class `CL_DEMO_CDS_AUTH_LITERAL`, the following read reads all data of the view. `... sql_path`(#ABAP_ONE_ADD@2@) Specifies a common table expression(ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) `cte` in a subquery or the closing main query(ABENMAINQUERY_GLOSRY.html) of a `WITH`(ABA
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_DATA_SOURCE.htm"
abapFile: "ABAPSELECT_DATA_SOURCE.html"
keywords: ["select", "update", "do", "if", "case", "catch", "method", "class", "data", "internal-table", "ABAPSELECT", "DATA", "SOURCE"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

`... \{ dbtab|view  [WITH PRIVILEGED ACCESS]`\\ 
   ``| cds_entity[[`sql_para`](ABENABAP_SQL_PARAMETERS.html)][[`sql_path`](ABENABAP_SQL_PATH.html)]\                          |\{[PROVIDED BY logical_external_schema]\                            [WITH PRIVILEGED ACCESS]\}``\\ 
   ``| +cte[[`sql_path`](ABENABAP_SQL_PATH.html)]``\\ 
   ``|\ [`hierarchy_data`](ABENSELECT_HIERARCHY_DATA.html)``\\ 
   ``|\ [`@itab`](ABAPSELECT_ITAB.html)\ \}``\\ 
   ``[\ [`declare_client`](ABAPSELECT_DECLARE_CLIENT.html)\ ] ...``

[1. `... dbtab|view [WITH PRIVILEGED ACCESS]`](#ABAP_ALTERNATIVE_1@2@)

[2. `... cds_entity[sql_para][sql_path]|\{[PROVIDED BY ...]\ [WITH PRIVILEGED ACCESS]\}`](#ABAP_ALTERNATIVE_2@2@)

[3. `... +cte[sql_path]`](#ABAP_ALTERNATIVE_3@2@)

[4. `... hierarchy_data`](#ABAP_ALTERNATIVE_4@2@)

[5. `... @itab`](#ABAP_ALTERNATIVE_5@2@)

Specifies an individual [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html)\\ `dbtab`, a [DDIC view](ABENDDIC_VIEW_GLOSRY.html)\\ `view`, a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html)\\ `cds_entity`, a common [table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html)\\ `+cte`, [hierarchy data](ABENSELECT_HIERARCHY_DATA.html), an [internal table](ABENINTERNAL_TABLE_GLOSRY.html)\\ [`@itab`](ABAPSELECT_ITAB.html), or a [CDS system entity](ABENCDS_SYSTEM_ENTITY_GLOSRY.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause of a [query](ABENASQL_QUERY_GLOSRY.html).

With the addition [`declare_client`](ABAPSELECT_DECLARE_CLIENT.html), a [client column](ABENCLIENT_COLUMN_GLOSRY.html) can be declared temporarily for a data source that is client-independent otherwise.

**Note** Regarding views, there is the restriction that only those whose key fields are located together at the beginning of the view can be accessed.

[`... WITH PRIVILEGED ACCESS`](#ABAP_ONE_ADD@1@)

Specifies a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html)\\ `dbtab`, a [DDIC view](ABENDDIC_VIEW_GLOSRY.html) or an [external DDIC view](ABENEXTERNAL_VIEW_GLOSRY.html)\\ `view`. DDIC views on which reads can be performed using `SELECT` are [DDIC database views](ABENDATABASE_VIEW_GLOSRY.html) and [DDIC projection views](ABENDDIC_PROJ_VIEW_GLOSRY.html).

Reading of the data of the CDS view entity `DEMO_CDS_SCARR_SPFLI_VE`.

The addition `WITH PRIVILEGED ACCESS` is currently ignored by DDIC database tables and DDIC views.

[1. `... sql_path`](#ABAP_ADDITION_1@3@)

[2. `... PROVIDED BY logical_external_schema`](#ABAP_ADDITION_2@3@)

[3. `... WITH PRIVILEGED ACCESS`](#ABAP_ADDITION_3@3@)

Specifies a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html)\\ `cds_entity` created with the [CDS DDL](ABENCDS_DDL_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html).

The CDS entity `cds_entity` is specified using its name defined after the respective [`DEFINE`](ABENCDS_F1_DDL_SYNTAX.html) statement of the [CDS DDL](ABENCDS_DDL_GLOSRY.html).

CDS table functions and CDS hierarchies are database extensions that are not supported by all database systems. The CDS DDL in ABAP CDS, however, enables CDS entities to be created and used as data sources regardless of the database system. In ABAP programs, CDS entities like this can also be specified as a data source of a `SELECT` statement regardless of the database system. The following applies here:

CDS hierarchies are handled like [ABAP SQL hierarchies](ABENSQL_HIERARCHY_GLOSRY.html) and special [rules](ABENSELECT_HIERARCHY.html) apply.

Reads the data of the CDS view `DEMO_CDS_SCARR_SPFLI`.

The following source code demonstrates the creation of a series of numbers using the [CDS system table function](ABENCDS_SYSTEM_TABFUNC_GLOSRY.html)\\ `SERIES_GENERATE_INTEGER`.

Specifies a path expression [`sql_path`](ABENABAP_SQL_PATH.html) after a CDS entity. In this case, the entity must be a [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html), [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) (deprecated), or a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html) that exposes the first [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) of the path expression in its `SELECT` list or element list. A CDS view must be specified using its name `cds_entity` defined after [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html). All [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) of the path expression must be exposed in the `SELECT` lists of the CDS entities involved for use from outside.

The [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the last CDS association of the path expression is the data source of the current `SELECT` statement. The data is read in accordance with the join conditions of the CDS associations and the other conditions of the CDS views involved.

The path expression exposes only the elements of its [association target](ABENASSOCIATION_TARGET_GLOSRY.html) in the `SELECT` statement. If an element of this type is used as a [column specification](ABENABAP_SQL_COLUMNS.html) in other clauses of the `SELECT` statement and the column is assigned to the data source using the column selector `~`, an alias name must be defined and used here using [`AS`](ABAPFROM_CLAUSE.html). Each path expression in the data source of the `FROM` clause must have an alias name defined with [`AS`](ABAPFROM_CLAUSE.html). This is checked in [strict mode as of release 7.67](ABENABAP_SQL_STRICTMODE_767.html).

Accesses the CDS view `DEMO_CDS_ASSOC_SAIRPORT_TZ` with parameter passing and a path expression with the CDS associations `\\_spfli` and `\\_scarr` in the `FROM` clause.

[Path Expressions, Use in the `FROM` Clause](ABENPATH_EXPR_IN_FROM_CLAUSE_ABEXA.html)

The addition `PROVIDED BY` specifies a [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) that maps a [dynamic external entity](ABENCDS_DYNAMIC_EE_GLOSRY.html) to an external system.

The addition `PROVIDED BY` cannot be specified together with a path expression `sql_path` in the `FROM` clause or with the addition [`CONNECTION`](ABAPSELECT_CONNECTION.html).

If the addition `PROVIDED BY` is used, the syntax check is performed in the [strict mode for ABAP release 7.96](ABENABAP_SQL_STRICTMODE_796.html).

The addition `WITH PRIVILEGED ACCESS` disables [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).

When a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is accessed to which a [CDS role](ABENCDS_ROLE_GLOSRY.html) is assigned, its [access conditions](ABENACCESS_CONDITION_GLOSRY.html) are not evaluated.

The addition `WITH PRIVILEGED ACCESS` cannot be specified together with a path expression `sql_path` in the `FROM` clause. It affects only the CDS entity for which it is specified. It does not affect the CDS entities exposed using CDS associations of the specified CDS entity.

The addition `WITH PRIVILEGED ACCESS` of the `FROM` clause cannot be used together with the addition [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html) that affects the complete `SELECT` statement.

Use of the addition `WITH PRIVILEGED ACCESS` when the CDS view `DEMO_CDS_AUTHORITY_LITERAL_2` is accessed, which is linked with the following CDS role:

CDS or DDIC source code was not found

Unlike the class `CL_DEMO_CDS_AUTH_LITERAL`, the following read reads all data of the view.

[`... sql_path`](#ABAP_ONE_ADD@2@)

Specifies a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html)\\ `cte` in a subquery or the closing [main query](ABENMAINQUERY_GLOSRY.html) of a [`WITH`](ABAPWITH.html) statement.

The `SELECT` statement accesses the result set of the common table expression. All common table expressions can be used that were defined in the same `WITH` statement in front of the current `SELECT` statement.

If a common table expression is used as the data source, a temporary database table is accessed, which is available during the `WITH` statement.

Access to the result set of the common table expression `+carriers` in a join expression of the `FROM` clause of the main query of the statement [`WITH`](ABAPWITH.html).

Specifies a path expression [`sql_path`](ABENABAP_SQL_PATH.html) after a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html)\\ `+cte` that is specified as the data source of a query in a [`WITH`](ABAPWITH.html) statement. The common table expression must expose the first association of the path expression with the addition [`WITH ASSOCIATIONS`](ABAPWITH_ASSOCIATIONS.html). The association can be a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) or a [CTE association](ABENCTE_ASSOCIATION_GLOSRY.html).

The same rules apply as when specifying a path expression after a CDS entity `cds_entity` that is specified as a data source. In particular, the path expression must have an alias name defined with [`AS`](ABAPFROM_CLAUSE.html).

The [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the path expression `\\_scarr` exposed by the common table expression `+cte` is used as the data source of the [main query](ABENMAINQUERY_GLOSRY.html) of a [`WITH`](ABAPWITH.html) statement.

Specifies the following [hierarchy data](ABENSELECT_HIERARCHY_DATA.html):

Access to an SQL hierarchy as a data source created by the hierarchy generator [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html).

Specifies an internal table [`@itab`](ABAPSELECT_ITAB.html) as a [host variable](ABENABAP_SQL_HOST_VARIABLES.html) whose name `itab` must be prefixed with the `@` character. For more information, see [`SELECT - FROM @itab`](ABAPSELECT_ITAB.html).

Using `SELECT` to access an internal table as an alternative to the statement [`READ TABLE`](ABAPREAD_TABLE.html). Unlike `READ TABLE`, the statement `SELECT` offers a (dynamic) `WHERE` condition and evaluates the field list for the [inline declaration](ABENINLINE_DECLARATION_GLOSRY.html). The statement is executed on the AS ABAP and the data in the internal table is not transported to the database.

-   The [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) must be specified using the exact name defined for it. More specifically, no name for the [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) can be prefixed. An ABAP SQL statement always accesses the database schema assigned to the current [database user name](ABENDATABASE_USER_NAME_GLOSRY.html). In cases where the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) or a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) is used, this is the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html). In cases where a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) is used, this is the database schema assigned to the [database user](ABENDATABASE_USER_GLOSRY.html) defined in the secondary connection. Here, each access requires the database table or view to exist under this exact name in the ABAP Dictionary of the current AS ABAP, regardless of the connection.
-   If a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) is defined as a [replacement object](ABENDDIC_REPLACEMENT_OBJECTS.html) for a DDIC database table or DDIC database view specified as a data source, the `SELECT` statement accesses the CDS entity and not the DDIC database table or the DDIC database view. In this case, it is recommended that the CDS entity is used as a data source if possible.
-   A [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) is a [DDIC database view](ABENDATABASE_VIEW_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html), however its use as a data source in ABAP SQL is [obsolete](ABENABAP_SQL_CDS_OBSOLETE.html) and forbidden in the [strict mode from ABAP release 7.62](ABENABAP_SQL_STRICTMODE_762.html) because the properties defined for the CDS view can be lost. This applies in particular to [client handling](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) and the behavior of the obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) and to [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).

-   If [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) is implemented for DDIC database tables and DDIC views in a future release, the addition `WITH PRIVILEGED ACCESS` will turn it off.
-   If the addition `WITH PRIVILEGED ACCESS` is specified, the syntax check is performed in [strict mode from ABAP release 7.69](ABENABAP_SQL_STRICTMODE_769.html).

-   If the CDS entity has input parameters, actual parameters must be assigned to them in a parenthesized list [`sql_para`](ABENABAP_SQL_PARAMETERS.html).
-   A path expression [`sql_path`](ABENABAP_SQL_PATH.html) can be specified for CDS views or CDS hierarchies with [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html). This expression defines its [association target](ABENASSOCIATION_TARGET_GLOSRY.html) as a data source of the `SELECT` statement.

-   A catchable exception of the class `CX_SY_SQL_UNSUPPORTED_FEATURE` is raised if the statement detects that the current database system does not support the feature. The same applies when CDS entities are accessed that contain CDS table functions or CDS hierarchies as data sources.
-   When used, CDS entities like this produce syntax warnings from the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html), which can be hidden using the pragma `##db_feature_mode[amdp_table_function]`.

-   [CDS transient entities](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) cannot be accessed in ABAP SQL.
-   There are special [CDS system entities](ABENCDS_SYSTEM_ENTITIES.html) for usage in ABAP SQL and in ABAP CDS that contain general functionality for generating tabular data.
-   By default, [data aging](ABENDATA_AGING_GLOSRY.html) is respected when an [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) is accessed, and only current data is read. This default setting can be changed using various methods.
-   If a [CDS role](ABENCDS_ROLE_GLOSRY.html) is defined for the [CDS entity](ABENCDS_ENTITY_GLOSRY.html) and [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) is not disabled using the value *#NOT\_ALLOWED* for the annotation `@AccessControl.authorizationCheck` or using the addition `WITH PRIVILEGED ACCESS` or [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html), [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) is applied to `SELECT` statements and only data that matches the [access conditions](ABENACCESS_CONDITION_GLOSRY.html) is read. If no data is read due CDS access control, `sy-subrc` is set to 4 as usual. When a [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) is accessed, no implicit access control takes place.
-   CDS table functions and CDS hierarchies cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). An ABAP SQL statement that accesses a CDS table function bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   In an ABAP program, it is possible to use the method `USE_FEATURES` of the class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html) to check whether the current database system or a database system accessed using a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) supports CDS table functions or CDS hierarchies. This requires the constant `AMDP_TABLE_FUNCTION` or `HIERARCHIES` of the class to be passed to the method in an internal table.
-   If the name `cds_entity` is used to access CDS entities, the syntax check is performed in a [strict mode from ABAP release 7.40, SP05](ABENABAP_SQL_STRICTMODE_740_SP05.html). Here, the statement is handled more strictly than in the regular syntax check. If [CDS entities](ABENCDS_ENTITY_GLOSRY.html) and DDIC database tables or DDIC views are both accessed in a `SELECT` statement, the syntax check is performed in a [strict mode from ABAP release 7.60](ABENABAP_SQL_STRICTMODE_760.html).

-   A CDS entity `cds_entity` with a path expression can be used in [join expressions](ABAPSELECT_JOIN.html), like any other data source.
-   In the `SELECT` statement, it is not possible to access elements of the entities of the path expression that are in front of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html). This applies more specifically to the elements of the specified entity `cds_entity`. Regular access to these elements is possible only if they are specified again as data sources of explicit join expressions in the statement.
-   A path expression cannot contain CDS associations of a [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html).
-   As the path expression is specified directly after `cds_entity`, [`source`](ABENABAP_SQL_PATH.html) cannot and must not be specified here.
-   The obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) cannot be used if a data source is specified using a path expression.

-   The addition `WITH PRIVILEGED ACCESS` overrides all delivered and user-defined roles.
-   CDS access control can also be disabled using the annotation `@AccessControl.authorizationCheck:#NOT_ALLOWED` when a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html) is defined.
-   If the addition `WITH PRIVILEGED ACCESS` is specified together with a path expression `sql_path` in a [column specification](ABENABAP_SQL_COLUMNS.html), a syntax warning occurs because it does only affect the source of the path. The addition [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html) can be used to modify the complete `SELECT` statement.
-   If the addition `WITH PRIVILEGED ACCESS` is specified, the syntax check is performed in [strict mode from ABAP release 7.69](ABENABAP_SQL_STRICTMODE_769.html).
-   In [updates](ABENAUTHORITY_DURING_UPDATE.html), the addition `WITH PRIVILEGED ACCESS` or [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html) must be specified when accessing all CDS entities for which CDS access control is not disabled using the annotation `@AccessControl.authorizationCheck:#NOT_ALLOWED`.

-   An [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html)\\ [`hierarchy`](ABENSELECT_HIERARCHY.html)
-   A [hierarchy navigator](ABENHIERARCHY_NAVIGATOR_GLOSRY.html)\\ [`hierarchy_navigator`](ABENSELECT_HIERARCHY_DATA.html) that accesses an [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html).

SELECT \* \\n FROM demo\_cds\_scarr\_spfli\_ve \\n ORDER BY id, carrier, flight, departure, destination \\n INTO TABLE @FINAL(result). SELECT \* \\n FROM demo\_cds\_scarr\_spfli \\n ORDER BY id, carrier, flight, departure, destination \\n INTO TABLE @FINAL(result). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* FROM series\_generate\_integer( step = 2, \\n from\_value = 1, \\n to\_value = 10 ) \\n ORDER BY element\_number \\n INTO TABLE @FINAL(integer\_series\_gen). \\n\\ \\nout->write( integer\_series\_gen ). \\n\\ \\nout->display( ). SELECT FROM demo\_cds\_assoc\_sairport\_tz( tz = 'UTC+1' ) \\n \\\\\_spfli \\n \\\\\_scarr\[ currcode = 'EUR' \] \\n AS scarr \\n FIELDS carrname \\n ORDER BY carrname \\n INTO TABLE @FINAL(result). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM demo\_cds\_authority\_literal\_2 WITH PRIVILEGED ACCESS \\n ORDER BY carrid \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). WITH +carriers AS ( \\n SELECT carrid, carrname \\n FROM scarr ) \\n SELECT FROM +carriers \\n INNER JOIN spfli \\n ON +carriers~carrid = spfli~carrid \\n FIELDS +carriers~carrname, \\n spfli~connid, \\n spfli~cityfrom, \\n spfli~cityto \\n WHERE spfli~carrid = 'LH' \\n INTO TABLE @FINAL(result). WITH \\n +cte AS ( SELECT \* \\n FROM demo\_cds\_assoc\_spfli\_scarr ) \\n WITH ASSOCIATIONS ( \\\\\_scarr ) \\n SELECT carrid, carrname \\n FROM +cte\\\\\_scarr AS scarr \\n INTO TABLE @FINAL(result). SELECT hierarchy~\*, hierarchy\_level \\n FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source \\n CHILD TO PARENT ASSOCIATION \_relat \\n START WHERE id = 'A' \\n MULTIPLE PARENTS ALLOWED ) AS hierarchy \\n INTO TABLE @FINAL(result). DATA itab TYPE TABLE OF scarr WITH EMPTY KEY. \\n\\ \\n... \\n\\ \\nDATA cond TYPE string. \\n\\ \\n... \\n\\ \\nSELECT SINGLE \\n FROM @itab AS carriers \\n FIELDS carrid, carrname \\n WHERE (cond) \\n INTO @FINAL(wa). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html