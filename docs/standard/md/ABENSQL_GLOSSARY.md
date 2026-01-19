---
title: "ABENSQL_GLOSSARY"
description: |
  ABENSQL_GLOSSARY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_GLOSSARY.htm"
abapFile: "ABENSQL_GLOSSARY.html"
keywords: ["select", "insert", "update", "delete", "do", "while", "if", "case", "try", "method", "class", "data", "types", "internal-table", "ABENSQL", "GLOSSARY"]
---

In the following, terms of the [ABAP Glossary](ABENABAP_GLOSSARY.html) are listed that are relevant for ABAP SQL.

**ABAP SQL**

ABAP SQL is a subset of [SQL](ABENSQL_GLOSRY.html) implemented by [ABAP statements](ABENABAP_STATEMENT_GLOSRY.html), which includes the [DQL](ABENDQL_GLOSRY.html) and [DML](ABENDML_GLOSRY.html) parts for [CRUD](ABENCRUD_GLOSRY.html) operations. ABAP SQL statements are processed by the [ABAP SQL engine](ABENABAP_SQL_ENGINE_GLOSRY.html) that either uses

ABAP SQL can be used to read ([`SELECT`](ABAPSELECT.html), [`WITH`](ABAPWITH.html). [`FETCH`](ABAPFETCH.html)) and modify ([`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), or [`DELETE`](ABAPDELETE_DBTAB.html)) data in [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html). [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html), [DDIC views](ABENDDIC_VIEW_GLOSRY.html), and all [CDS persistent entities](ABENCDS_SQL_ENTITY_GLOSRY.html) can be used directly as [data sources](ABENSQL_DATA_SOURCE_GLOSRY.html) in ABAP SQL.

**ABAP SQL connection object**

An instance of a class that implements `IF_ABAP_SQL_CONNECTION` and represents a valid [database connection](ABENDATABASE_CONNECTION_GLOSRY.html).

**ABAP SQL engine**

Part of the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) that processes [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements. ABAP SQL statements are either processed by the [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html) and passed to the [standard database](ABENSTANDARD_DB_GLOSRY.html) of the [AS ABAP](ABENAS_ABAP_GLOSRY.html) or by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html).

**ABAP SQL hierarchy**

A tabular [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) whose rows contain the content of the [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) of a [parent-child hierarchy](ABENPCR_HIERARCHY_GLOSRY.html). An ABAP SQL hierarchy is either a [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html) or a [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html). Special [hierarchy columns](ABENHIERARCHY_COLUMN_GLOSRY.html) contain [hierarchy attributes](ABENHIERARCHY_ATTRIBUTE_GLOSRY.html) of the individual hierarchy nodes in the SQL hierarchy. SQL hierarchies are either created using a [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html), an existing [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html), or a [CTE hierarchy](ABENCTE_HIERARCHY_GLOSRY.html). SQL hierarchies can be used in the [`FROM`](ABAPFROM_CLAUSE.html) clause and as the source of special [hierarchy navigators](ABENHIERARCHY_NAVIGATOR_GLOSRY.html).

**ABAP SQL in-memory engine**

Part of the [ABAP SQL engine](ABENABAP_SQL_ENGINE_GLOSRY.html) for processing [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements which [read](ABENABAP_SQL_READING.html) tabular data in the memory of an [AS ABAP](ABENAS_ABAP_GLOSRY.html). The ABAP SQL in-memory engine is used by ABAP SQL when accessing the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) or when [internal tables](ABENINTERNAL_TABLE_GLOSRY.html) are specified in the [`FROM`](ABAPSELECT_ITAB.html) clause. The ABAP SQL in-memory engine supports a large subset of ABAP SQL but there are also some restrictions.

**ABAP SQL indicator**

[Substructure](ABENSUBSTRUCTURE_GLOSRY.html) or component with a [byte field type](ABENBYTE_FIELD_TYPE_GLOSRY.html) that can be used either in read statements as a [null indicator](ABENNULL_INDICATOR_GLOSRY.html) or in write statements as a [set indicator](ABENSET_INDICATOR_GLOSRY.html). In read statements, the indicators can store information while in write statements, indicators can be used to mark columns for change. ABAP SQL indicators can be created as [indicator structures](ABENINDICATOR_STRUCTURE_GLOSRY.html).

**ABAP SQL interface**

Part of the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) responsible for [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements. The ABAP SQL interface transforms ABAP SQL statements that access the [standard database](ABENSTANDARD_DB_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) to vendor-specific [SQL](ABENSQL_GLOSRY.html) and forwards the results to the [database system](ABENDATABASE_SYSTEM_GLOSRY.html).

**ABAP SQL literal**

An [ABAP literal](ABENABAP_LITERAL_GLOSRY.html) used in [ABAP SQL](ABENABAP_SQL_GLOSRY.html). In contrast to general ABAP, in ABAP SQL, both [typed literals](ABENTYPED_LITERAL_GLOSRY.html) and [untyped literal](ABENUNTYPED_LITERAL_GLOSRY.html) are available.

**ABAP SQL query**

[Database query](ABENDB_QUERY_GLOSRY.html) that is implemented in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) with the [DQL](ABENDQL_GLOSRY.html) language element `SELECT`. The [clauses and additions](ABENSELECT_CLAUSES.html) of `SELECT` define the result set returned by the database. ‎See [main query](ABENMAINQUERY_GLOSRY.html) and [subquery](ABENSUBQUERY_GLOSRY.html).

**ADBC connection object**

An instance of a class that implements `IF_SQL_CONNECTION` and represents a valid [database connection](ABENDATABASE_CONNECTION_GLOSRY.html).

**aggregate**

The result of an [aggregate function](ABENAGGREGATE_FUNCTION_GLOSRY.html). Can be determined using aggregate functions in an ABAP SQL [`SELECT`](ABAPSELECT.html) statement or in the [`SELECT`](ABENCDS_AGGREGATE_FUNCTIONS_V2.html) list of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html).

**aggregate expression**

In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) or in [CDS DDL](ABENCDS_DDL_GLOSRY.html), an aggregate expression uses an [aggregate function](ABENAGGREGATE_FUNCTION_GLOSRY.html) to determine a value from the values of a column of the result set of a [query](ABENASQL_QUERY_GLOSRY.html).

**aggregate function**

A function that processes multiple values together and returns a single value as a result. The calculation is done in the [database system](ABENDATABASE_SYSTEM_GLOSRY.html). An aggregate function can be used in an [aggregate expression](ABENAGGREGATE_EXPRESSION_GLOSRY.html). In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), it can also be used as a [window function](ABENWINDOW_FUNCTION_GLOSRY.html) in a [window expression](ABENWINDOW_EXPRESSION_GLOSRY.html), and in a [hierarchy aggregate navigator](ABENHIERARCHY_AGG_NAVI_GLOSRY.html).

**alias name**

A name that is assigned as a substitute name to an element, an object, etc. The following alias names can be defined in ABAP:

**arithmetic expression**

Formulation of an arithmetic calculation.

**arithmetic operator**

Combines two numeric [operands](ABENOPERAND_GLOSRY.html) in an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html).

**binary floating point literal**

A [numeric literal](ABENNUMERIC_LITERAL_GLOSRY.html) that has the [binary floating point data type](ABENBINFLOAT_GLOSRY.html)\\ [`f`](ABENBUILTIN_TYPES_NUMERIC.html) or [`FLTP`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**Boolean operator**

Negates or combines [logical expressions](ABENLOGICAL_EXPRESSION_GLOSRY.html). Boolean operators belong to the [logical operators](ABENLOGICAL_OPERATOR_GLOSRY.html) that are used in [logical expressions](ABENLOGICAL_EXPRESSION_GLOSRY.html).

**built-in function**

A predefined function in ABAP, ABAP SQL, and ABAP CDS.

[Actual parameters](ABENACTUAL_PARAMETER_GLOSRY.html) passed to the [formal parameters](ABENFORMAL_PARAMETER_GLOSRY.html) of built-in functions are called also called [arguments](ABENARGUMENT_GLOSRY.html) of the function.

**byte field literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the [byte field type](ABENBYTE_FIELD_TYPE_GLOSRY.html)\\ [`x`](ABENBUILTIN_TYPES_BYTE.html) or [`RAW`](ABENDDIC_BUILTIN_TYPES.html) with the length of the specified bytes. Only [typed](ABENTYPED_LITERAL_GLOSRY.html) byte field literals are available.

See also:

**byte string literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the [byte string type](ABENBYTE_STRING_TYPE_GLOSRY.html)\\ [`xstring`](ABENBUILTIN_TYPES_BYTE.html) or [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**case distinction**

[Control structure](ABENCONTROL_STRUCTURE_GLOSRY.html) with the [control statement](ABENCONTROL_STATEMENT_GLOSRY.html)\\ [`CASE`](ABAPCASE.html) or [`CASE TYPE OF`](ABAPCASE_TYPE.html), [condition expression](ABENCONDITIONAL_EXPRESSION_GLOSRY.html) with the [conditional operator](ABENCONDITIONAL_OPERATOR_GLOSRY.html)\\ [`SWITCH`](ABENCONDITIONAL_EXPRESSION_SWITCH.html), [`CASE`](ABENSQL_CASE.html) expression in [ABAP SQL](ABENABAP_SQL_GLOSRY.html), or [`CASE`](ABENCDS_CASE_EXPRESSION_V2.html) expression in [CDS DDL](ABENCDS_DDL_GLOSRY.html). In a case distinction, the value of an [operand](ABENOPERAND_GLOSRY.html) determines which of multiple source code sections is executed. In the ABAP language, there are only [simple case distinctions](ABENSIMPLE_CASE_GLOSRY.html). In ABAP CDS and ABAP SQL, there are [simple case distinctions](ABENSIMPLE_CASE_GLOSRY.html) and [complex case distinctions](ABENCOMPLEX_CASE_GLOSRY.html).

**cast**

In ABAP, see [casting](ABENCAST_CASTING_GLOSRY.html). In [SQL](ABENSQL_GLOSRY.html), a cast is a type conversion.

**CDS/CTE association path**

A sequence of [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) that associate [CDS entities](ABENCDS_ENTITY_GLOSRY.html) and [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) with [association targets](ABENASSOCIATION_TARGET_GLOSRY.html). In other words, a mixture of CDS and CTE association paths. CDS or CTE association paths can be specified in the form of [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

**character literal**

Also referred to as text literal. A [literal](ABENABAP_LITERAL_GLOSRY.html) with a [character-like data type](ABENCHARLIKE_DATA_TYPE_GLOSRY.html) whose value is a [character string](ABENCHARACTER_STRING_GLOSRY.html).

See also:

**client dependency**

Property of a [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html). A SQL data source can be [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) or [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html). When accessing a client-dependent SQL data source in [ABAP SQL](ABENABAP_SQL_GLOSRY.html), an implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) takes place.

**client handling**

Processing of the application data of a [client](ABENCLIENT_GLOSRY.html). When accessing [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html)\\ [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) or [views](ABENVIEW_GLOSRY.html), [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements use [implicit client](ABENABAP_SQL_CLIENT_HANDLING.html) handling, which by default accesses the [current client](ABENCURRENT_CLIENT_GLOSRY.html). By using additions to the ABAP SQL statements, the implicit client handling can be switched to other clients. The client handling of [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) can be defined with special [AMDP options](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html).

**client isolation**

Client isolation on an [AS ABAP](ABENAS_ABAP_GLOSRY.html) means that an [ABAP user](ABENABAP_USER_GLOSRY.html) has access to data of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) only. In [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html), client isolation is enforced as follows:

**client literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) that contains a [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) and has the data type [`CLNT`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**client-dependent**

A [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) for which an implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) takes place when accessed with [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

See also: [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html).

**client-independent**

A [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) that is not [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html). Client-independent SQL data sources contain data that is not specific to a [client](ABENCLIENT_GLOSRY.html) and should be accessed by [system programs](ABENSYSTEM_PROGRAM_GLOSRY.html). See also [system table](ABENSYSTEM_TABLE_GLOSRY.html).

**coalesce function**

A [built-in function](ABENBUILTIN_FUNCTION_GLOSRY.html) that returns the first non-zero expression in a list of expressions. Available in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) and [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

**column selector**

Character `~`. A column `col` of a [data source](ABAPSELECT_DATA_SOURCE.html) can be addressed in a [query](ABENASQL_QUERY_GLOSRY.html) of [ABAP SQL](ABENABAP_SQL_GLOSRY.html) using `name~col`, where `name` is the name of the entity in which the column is defined. This type of addressing is necessary if, when multiple database tables are accessed, the name of a column occurs in a number of different database tables, when a comparison of a [SQL condition](ABENSQL_COND_GLOSRY.html) compares two columns.

**common table expression**

CTE for short. Common table expressions are defined in the [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement [`WITH`](ABAPWITH.html) via [subqueries](ABENSUBQUERY_GLOSRY.html). The [main query](ABENMAINQUERY_GLOSRY.html) of the `WITH` statement accesses its common table expressions.

**comparison operator**

[Relational operator](ABENREL_OPERATOR_GLOSRY.html) that combines two or more [operands](ABENOPERAND_GLOSRY.html) of a [comparison expression](ABENCOMPARISON_EXPRESSION_GLOSRY.html) or of an [SQL condition](ABENSQL_COND_GLOSRY.html).

**complex case distinction**

Also searched case. A [case distinction](ABENCASE_DISTINCTION_GLOSRY.html) that evaluates logical expressions to determine which statements to execute. Available in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) and [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

**correlated subquery**

[Subquery](ABENSUBQUERY_GLOSRY.html) that uses columns of the surrounding [query](ABENASQL_QUERY_GLOSRY.html) in its [SQL conditions](ABENSQL_COND_GLOSRY.html). It must be possible to assign the column to a [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) in the surrounding query. A correlated subquery is evaluated for each individual row of the result set of the surrounding query.

**cross join**

A [join type](ABENJOIN_TYPE_GLOSRY.html) for which the rows of the result set are determined by a cross product of the result sets of both [SQL data sources](ABENSQL_DATA_SOURCE_GLOSRY.html). The result set contains all possible combinations of rows.

**CTE**

Common Table Expression, *\->*\\ [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html)

**CTE association**

[Association](ABENASSOCIATION_GLOSRY.html) that is defined for a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) ([CTE](ABENCTE_GLOSRY.html)) and can be used in the [queries](ABENASQL_QUERY_GLOSRY.html) of its [`WITH`](ABAPWITH.html) statement in [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html). A CTE association is defined in the definition of the common table expression using the addition [`WITH ASSOCIATIONS JOIN`](ABAPWITH_ASSOCIATIONS_DEFINING.html).

**CTE association path**

A sequence of [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) that link [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) with [association targets](ABENASSOCIATION_TARGET_GLOSRY.html). CTE association paths can be specified in the form of [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

**CTE hierarchy**

[Common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) ([CTE](ABENCTE_GLOSRY.html)) that can be used as an [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) in the subsequent [queries](ABENASQL_QUERY_GLOSRY.html) of its [`WITH`](ABAPWITH.html) statement. A CTE hierarchy is created when the common table expression is defined using the addition [`WITH HIERARCHY`](ABAPWITH_HIERARCHY.html).

**currency field literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the data type [`CURR`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**currency key literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the data type [`CUKY`](ABENDDIC_BUILTIN_TYPES.html) that contains a [currency code](ABENCURRENCY_ID_GLOSRY.html).

See also:

**current client**

The current client of a [user session](ABENUSER_SESSION_GLOSRY.html) is the [client](ABENCLIENT_GLOSRY.html) whose [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) was specified during [logon](ABENLOGON_GLOSRY.html). \\nABAP

**database cursor**

Pointer to the result set of a database selection. The database cursor is always assigned to a line of the result set. In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), cursor handling is implicit, except for the statements [`OPEN CURSOR`](ABAPOPEN_CURSOR.html), [`FETCH`](ABAPFETCH.html), and [`CLOSE CURSOR`](ABAPCLOSE_CURSOR.html). A program can open a maximum of 17 database cursors simultaneously using the [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html).

**database hint**

Extension of the SQL standard that tells a [database system](ABENDATABASE_SYSTEM_GLOSRY.html) or the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) how to execute an access. Database hints are usually dependent on the database system and its release. In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), database hints can be specified using the addition [`%_HINTS`](ABENABAP_SQL_DB_HINTS.html). In [ABAP CDS](ABENABAP_CDS_GLOSRY.html), the annotation [`Consumption.dbHints`](ABENCDS_710938603-_ANNO.html) can be used.

**database query**

Query for short. A database query is used to retrieve data from [database tables](ABENDATABASE_TABLE_GLOSRY.html). In [SQL](ABENSQL_GLOSRY.html), queries are generally expressed in its subset [DQL](ABENDQL_GLOSRY.html) (Data Query Language). In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) a query is called [ABAP SQL Query](ABENASQL_QUERY_GLOSRY.html). In [ABAP CDS](ABENABAP_CDS_GLOSRY.html), queries appear in the SQL-part of the definitions of [CDS views](ABENCDS_VIEW_GLOSRY.html).

**date literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) that contains a date. It has the data type [`DATN`](ABENDDIC_BUILTIN_TYPES.html) or [`DATS`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**DCL**

Short for Data Control Language. A subset of [SQL](ABENSQL_GLOSRY.html). The statements of the DCL perform authorization and consistency checks on [relational databases](ABENRELATIONAL_DATABASE_GLOSRY.html).

**DDL**

Short for Data Definition Language. A subset of [SQL](ABENSQL_GLOSRY.html). The statements in the DDL create and delete the objects of a [relational database](ABENRELATIONAL_DATABASE_GLOSRY.html). In an ABAP system, [ABAP-managed database objects](ABENABAP_MANAGED_DB_OBJECT_GLOSRY.html) are edited using tools and frameworks in [AS ABAP](ABENAS_ABAP_GLOSRY.html), such as [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html), [ABAP CDS](ABENABAP_CDS_GLOSRY.html), and [AMDP](ABENAMDP_GLOSRY.html), where [DDIC DDL](ABENDDIC_DCL_GLOSRY.html), [CDS DDL](ABENCDS_DDL_GLOSRY.html), or [Native SQL](ABENNATIVE_SQL_GLOSRY.html) are used. [ABAP SQL](ABENABAP_SQL_GLOSRY.html) does not support DDL.

**decimal floating point literal**

A [numeric literal](ABENNUMERIC_LITERAL_GLOSRY.html) of a [decimal floating point type](ABENDECFLOAT_TYPE_GLOSRY.html).

See also:

**DML**

Short for Data Manipulation Language. Subset of [SQL](ABENSQL_GLOSRY.html). The statements in DML perform [CUD](ABENCUD_GLOSRY.html) operations on [relational](ABENRELATIONAL_DATABASE_GLOSRY.html)\\ [database tables](ABENDATABASE_TABLE_GLOSRY.html). In the ABAP language, DML is implemented predominantly by the statements for [write accesses](ABENABAP_SQL_WRITING.html) of [ABAP SQL](ABENABAP_SQL_GLOSRY.html). **Note:** Sometimes the term DML also includes the statements of [DQL](ABENDQL_GLOSRY.html).

**DQL**

Short for Data Query Language. Subset of [SQL](ABENSQL_GLOSRY.html). The statements in DQL perform read operations on [relational](ABENRELATIONAL_DATABASE_GLOSRY.html)\\ [database tables](ABENDATABASE_TABLE_GLOSRY.html). In the ABAP language, DQL is implemented predominantly by the statements for [read accesses](ABENABAP_SQL_READING.html) of [ABAP SQL](ABENABAP_SQL_GLOSRY.html). In [ABAP CDS](ABENABAP_CDS_GLOSRY.html), the DQL statement `SELECT` is embedded in [CDS DDL](ABENCDS_DDL_GLOSRY.html) for [CDS views](ABENCDS_VIEW_GLOSRY.html). **Note:** Sometimes the statements of DQL are included in the term [DML](ABENDML_GLOSRY.html).

**filter condition**

Specifies a condition for a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) or [CTE association](ABENCTE_ASSOCIATION_GLOSRY.html) in an [SQL path expression](ABENSQL_PATH_EXPRESSION_GLOSRY.html).

**grouping set**

Grouping sets are used in the [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) clause of a [query](ABENASQL_QUERY_GLOSRY.html). A grouping set is specified either as an empty grouping set or as a comma-separated list. Columns and SQL expressions can also be used in the list. The `GROUP BY` addition `GROUPING SETS` makes it possible to define multiple grouping sets under a `GROUP BY` clause. The grouping sets are aggregated separately and merged into one result set.

**hierarchy aggregate navigator**

A [hierarchy navigator](ABENHIERARCHY_NAVIGATOR_GLOSRY.html) that accesses specific [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) of a [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html), such as [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html) or [ancestor nodes](ABENANCESTOR_NODE_GLOSRY.html), and applies [aggregate functions](ABENAGGREGATE_FUNCTION_GLOSRY.html) to them.

**hierarchy association**

A [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) or [CTE association](ABENCTE_ASSOCIATION_GLOSRY.html) used to define the [parent-child relationships](ABENPCR_GLOSRY.html) of a [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) or [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html). A hierarchy association is always a [self-association](ABENSELF_ASSOCIATION_GLOSRY.html).

**hierarchy attribute**

A component of the tabular result set of a [hierarchy function](ABENHIERARCHY_FUNCTION_GLOSRY.html) that contains hierarchy-specific information for each row. When a [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) is accessed in [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the hierarchy attributes can be included in the result set as [hierarchy columns](ABENHIERARCHY_COLUMN_GLOSRY.html) of [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html). The hierarchy attributes can be used to define elements of the CDS hierarchy can be used in the definition of a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html).

**hierarchy column**

A column of the result set of an [ABAP SQL](ABENABAP_SQL_GLOSRY.html)\\ [query](ABENASQL_QUERY_GLOSRY.html) on a [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) or on a [hierarchy navigator](ABENHIERARCHY_NAVIGATOR_GLOSRY.html) containing a [hierarchy attribute](ABENHIERARCHY_ATTRIBUTE_GLOSRY.html). A hierarchy column must first be specified explicitly in the [`SELECT`](ABAPSELECT_LIST.html) list before it can be included in the result set.

**hierarchy edge**

The relationship between the [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) of a [hierarchy](ABENHIERARCHY_GLOSRY.html). The hierarchy edges in [ABAP SQL hierarchies](ABENSQL_HIERARCHY_GLOSRY.html) created by a [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) or in a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html) are [parent-child relationships](ABENPCR_GLOSRY.html).

**hierarchy function**

In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), a special [table function](ABENTABLE_FUNCTION_GLOSRY.html) for processing [ABAP SQL hierarchies](ABENSQL_HIERARCHY_GLOSRY.html). A [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html), for example, is used to create SQL hierarchies, whereas [hierarchy navigators](ABENHIERARCHY_NAVIGATOR_GLOSRY.html) are used to access them. In the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), there are built-in hierarchy functions that are wrapped by ABAP SQL and [ABAP CDS](ABENABAP_CDS_GLOSRY.html).

**hierarchy generator**

A [hierarchy function](ABENHIERARCHY_FUNCTION_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) that creates a [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) either as a [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html) or a [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html).

**hierarchy navigator**

A [hierarchy function](ABENHIERARCHY_FUNCTION_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) that accesses a [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html).

**hierarchy node navigator**

A [hierarchy navigator](ABENHIERARCHY_NAVIGATOR_GLOSRY.html) that accesses specific [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) in an ABAP [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html), such as [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html), [ancestor nodes](ABENANCESTOR_NODE_GLOSRY.html), or [sibling nodes](ABENSIBLING_NODE_GLOSRY.html).

**hierarchy source**

A [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) that exposes a [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) and can be used as a source of a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html) or the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html) of [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

**host constant**

[Host variable](ABENHOST_VARIABLE_GLOSRY.html) for which the ABAP [data object](ABENDATA_OBJECT_GLOSRY.html) is a [constant](ABENCONSTANT_GLOSRY.html).

**host expression**

ABAP-[expression](ABENEXPRESSION_GLOSRY.html) specified in an operand position of an [ABAP SQL](ABENABAP_SQL_HOST_EXPRESSIONS.html) statement. Host expressions are always specified in parentheses preceded by the [escape character](ABENESCAPE_CHARACTER_GLOSRY.html)\\ `@`: `@( ... )`.

**host variable**

ABAP [data object](ABENDATA_OBJECT_GLOSRY.html) specified in an operand position of an [ABAP SQL](ABENABAP_SQL_HOST_VARIABLES.html) statement or of a statically embedded [Native SQL](ABAPEXEC_HOST.html) statement. The ABAP data object can be a [variable](ABENVARIABLE_GLOSRY.html) or a [constant](ABENCONSTANT_GLOSRY.html) (see [host constant](ABENHOST_CONSTANT_GLOSRY.html)). In ABAP SQL, a host variable must be prefixed with the [escape character](ABENESCAPE_CHARACTER_GLOSRY.html)\\ `@` ; in Native SQL with the escape character `:`. In [ADBC](ABENADBC_GLOSRY.html), the placeholder `?` to which ABAP data objects are bound, is used instead of host variables.

**indicator structure**

[Substructure](ABENSUBSTRUCTURE_GLOSRY.html) of a [structured type](ABENSTRUCTURED_TYPE_GLOSRY.html). The indicator structure is the last component of the structured type and mirrors the preceding components. The components of the substructure serve as indicators for features of the preceding components. Besides actual indicator structures, there are also [condensed indicator structures](ABENCONDENSED_IND_STRUCTURE_GLOSRY.html) that are realized by [byte fields](ABENBYTE_FIELD_GLOSRY.html) where the individual bits serve as indicators. Indicator structures can be defined with the addition [`WITH INDICATORS`](ABAPTYPES_INDICATORS.html) of the statement [`TYPES`](ABAPTYPES_INDICATORS.html) and can be used as [ABAP SQL indicators](ABENABAP_SQL_INDICATOR_GLOSRY.html). In the latter case, also [inline declarations](ABENINLINE_DECLARATION_GLOSRY.html) are possible.

**integer literal**

A [numeric literal](ABENNUMERIC_LITERAL_GLOSRY.html) of an [integer type](ABENINTEGER_TYPE_GLOSRY.html).

See also:

**join**

A combination of two [SQL data sources](ABENSQL_DATA_SOURCE_GLOSRY.html) into one result set, consisting of columns of both data sources. The rows of the result set are determined by the [join type](ABENJOIN_TYPE_GLOSRY.html) and by [join conditions](ABENJOIN_CONDITION_GLOSRY.html) between columns of the data sources. The relation between the rows of the data sources can be expressed by a [cardinality](ABENCARDINALITY_GLOSRY.html). Joins can be implemented in ABAP as follows:

Furthermore, [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) define join relationships that are instantiated when the associations are used in [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html).

**join condition**

A [SQL condition](ABENSQL_COND_GLOSRY.html) or a [CDS DDL condition](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) specified after the addition `ON` of a [join expression](ABENJOIN_EXPRESSION_GLOSRY.html). Also called `ON` condition.

**join expression**

The implementation of a [join](ABENJOIN_GLOSRY.html) in [SQL](ABENSQL_GLOSRY.html) using the addition `JOIN`. Join expressions can be defined in [queries](ABENASQL_QUERY_GLOSRY.html), defined by the [`SELECT`](ABAPSELECT.html) statement of [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the [`SELECT` statement in CDS view entities](ABENCDS_SELECT_STATEMENT_V2.html), or the [`SELECT` statement in CDS DDIC-based views (obsolete)](ABENCDS_SELECT_STATEMENT_V2.html).

**join type**

The join type determines, together with the [join conditions](ABENJOIN_CONDITION_GLOSRY.html) of a [join expression](ABENJOIN_EXPRESSION_GLOSRY.html), how the rows of its result set are combined from its [SQL data sources](ABENSQL_DATA_SOURCE_GLOSRY.html). [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html) support [inner joins](ABENINNER_JOIN_GLOSRY.html), [outer joins](ABENOUTER_JOIN_GLOSRY.html) ([left](ABENLEFT_OUTER_JOIN_GLOSRY.html) and [right](ABENRIGHT_OUTER_JOIN_GLOSRY.html)), and [cross joins](ABENCROSS_JOIN_GLOSRY.html).

**language key literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the data type [`LANG`](ABENDDIC_BUILTIN_TYPES.html) that contains a language key.

See also:

**left outer join**

A [join type](ABENJOIN_TYPE_GLOSRY.html) that determines the same rows as an [inner join](ABENINNER_JOIN_GLOSRY.html) and an additional row for each row of the left [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) that is not included by the [join conditions](ABENJOIN_CONDITION_GLOSRY.html). In these rows, the columns coming from the right data source contain [null values](ABENNULL_VALUE_GLOSRY.html).

**level-based hierarchy**

An [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) that is generated from a [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) where certain columns define from left to right the [hierarchy levels](ABENHIERARCHY_LEVEL_GLOSRY.html) and where each row content of these columns represents a path from a [start node](ABENSTART_NODE_GLOSRY.html) to a [leaf node](ABENLEAF_NODE_GLOSRY.html) that spans these levels. In a level-based hierarchy, all [leaf nodes](ABENLEAF_NODE_GLOSRY.html) have the same level that is the highest level defined in the data source. For each leaf node, a similar set of [ancestor nodes](ABENANCESTOR_NODE_GLOSRY.html) is generated for the lower levels of the data source. In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the addition [`LEVELS`](ABENSELECT_HIERARCHY_GEN_LEVEL.html) of the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) can be used to generate level-based hierarchies.

**leveled hierarchy**

*\->*\\ [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html)

**literal**

The textual representation of a value in the [ABAP source code](ABENABAP_SOURCE_CODE_GLOSRY.html) of an [ABAP program](ABENABAP_PROGRAM_GLOSRY.html) or in a [CDS object](ABENCDS_OBJECT_GLOSRY.html). There are [typed literals](ABENTYPED_LITERAL_GLOSRY.html) and [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html) available.

See also:

**literal operator**

The literal operator `&` joins two [text field literals](ABENTEXT_FIELD_LITERAL_GLOSRY.html) or two [text string literals](ABENTEXT_STRING_LITERAL_GLOSRY.html) as a single literal or two [string templates](ABENSTRING_TEMPLATE_GLOSRY.html) as a single string template. The literal operator is supported in [ABAP literals](ABENABAP_LITERAL_GLOSRY.html) and in [ABAP SQL literals](ABENABAP_SQL_LITERAL_GLOSRY.html), but not in [CDS literals](ABENCDS_LITERAL_GLOSRY.html).

**LOB handle**

An object from one of the [system classes](ABENSYSTEM_CLASS_GLOSRY.html) that support [streaming](ABENABAP_SQL_STREAMING.html) and [locators](ABENLOCATORS.html) for [LOBs](ABENLOB_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html). These classes all implement the [interface](ABENOO_INTF_GLOSRY.html)\\ `IF_ABAP_DB_LOB_HANDLE`. See also: [LOB Handle Structure](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html).

**LOB handle component**

[Reference type](ABENREFERENCE_TYPE_GLOSRY.html) or [reference variable](ABENREFERENCE_VARIABLE_GLOSRY.html) in a [LOB handle structure](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html). The [static type](ABENSTATIC_TYPE_GLOSRY.html) of such a component must be less specific or the same as the [class](ABENCLASS_GLOSRY.html) of a [LOB handle](ABENLOB_HANDLE_GLOSRY.html) and must contain the [interface](ABENOO_INTF_GLOSRY.html)\\ `IF_ABAP_DB_LOB_HANDLE`.

**LOB handle structure**

The [structure](ABENSTRUCTURE_GLOSRY.html) of a special [work area](ABENWORK_AREA_GLOSRY.html) to support [streaming](ABENSTREAMING_GLOSRY.html) and [locators](ABENLOCATOR_GLOSRY.html) for [LOBs](ABENLOB_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html). LOB handle structures have the same components as [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html), [DDIC views](ABENDDIC_VIEW_GLOSRY.html), or [CDS entities](ABENCDS_ENTITY_GLOSRY.html). However, there is at least one component which is assigned to a LOB, which is not a [string](ABENSTRING_GLOSRY.html) but instead a [LOB handle component](ABENLOB_HANDLE_COMPONENT_GLOSRY.html). A LOB handle structure can be defined component by component with [ABAP statements](ABENABAP_STATEMENT_GLOSRY.html) or in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html), or it can be derived by referencing a structure that contains [LOBs](ABENLOB_GLOSRY.html).

**locator**

Pointer to substrings of [LOBs](ABENLOB_GLOSRY.html) in a [database](ABENDATABASE_GLOSRY.html). In ABAP, locators are [LOB handles](ABENLOB_HANDLE_GLOSRY.html) and are implemented using [instances](ABENINSTANCE_GLOSRY.html) of the corresponding [system classes](ABENSYSTEM_CLASS_GLOSRY.html). Locators can be linked with the database in question in [ABAP SQL statements with LOBs](ABENABAP_SQL_GLOSRY.html). Different [locator types](ABENLOCATOR_TYPE_GLOSRY.html) are provided for [BLOBs](ABENBLOB_GLOSRY.html) and [CLOBs](ABENCLOB_GLOSRY.html).

**logical expression**

Formulation of a condition for [operands](ABENOPERAND_GLOSRY.html). A logical expression is a single [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html) or is made up of multiple relational expressions combined by [Boolean operators](ABENBOOLEAN_OPERATOR_GLOSRY.html). The result of a logical expression is a [truth value](ABENTRUTH_VALUE_GLOSRY.html), that is, either true or false.

**main query**

[ABAP SQL query](ABENASQL_QUERY_GLOSRY.html) that is implemented in an [ABAP SQL](ABENABAP_SQL_GLOSRY.html) as a standalone [`SELECT`](ABAPSELECT.html) statement, a closing `SELECT` statement of a [`WITH`](ABAPWITH.html) statement, or a closing `SELECT` statement of an [`OPEN` `CURSOR`](ABAPOPEN_CURSOR.html) statement.

**null value**

A special value returned by a [database](ABENDATABASE_GLOSRY.html) to indicate an undefined value or result. There are no special null values in ABAP. In assignments made to ABAP [data objects](ABENDATA_OBJECT_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html), [Native SQL](ABENNATIVE_SQL_GLOSRY.html), and [AMDP](ABENAMDP_GLOSRY.html), null values are transformed to type-dependent [initial values](ABENINITIAL_VALUE_GLOSRY.html). The [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) for accessing the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and [internal tables](ABENINTERNAL_TABLE_GLOSRY.html) as [data sources](ABAPSELECT_ITAB.html) of [ABAP SQL queries](ABENASQL_QUERY_GLOSRY.html), however, handles null values as null values.

[ABAP SQL - Null Values](ABENABAP_SQL_NULL_VALUES.html)

[ABAP CDS - Null Values](ABENCDS_NULL_VALUES.html)

**numeric literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) that has a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html) and whose characters represent a numeric value.

See also:

**numeric text literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) that contains [numeric text](ABENNUMERIC_TEXT_GLOSRY.html) and has the length of the specified characters. The data type is [`n`](ABENBUILTIN_TYPES_CHARACTER.html) or [`NUMC`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**Open SQL**

Former name for [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

**outer join**

A [type of join](ABENJOIN_TYPE_GLOSRY.html). There are two types of outer joins:

**packed number literal**

A [numeric literal](ABENNUMERIC_LITERAL_GLOSRY.html) of [packed number type](ABENPACKED_NUMBER_TYPE_GLOSRY.html).

See also:

**parent-child-based hierarchy**

An [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) that is generated from a [parent-child relationship](ABENPCR_GLOSRY.html). A parent-child-based hierarchy is based on a [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) that exposes a [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) that defines the parent-child relationship between columns of the data source. [ABAP SQL](ABENABAP_SQL_GLOSRY.html) can access parent-child-based hierarchies generated by a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html), by the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html) using the addition [`CHILD TO PARENT ASSOCIATION`](ABENSELECT_HIERARCHY_GEN_ASSOC.html), or by a [CTE hierarchy](ABENCTE_HIERARCHY_GLOSRY.html).

**path expression**

A sequence of [associations](ABENASSOCIATION_GLOSRY.html) specified at an operand position. Either an [SQL path expression](ABENSQL_PATH_EXPRESSION_GLOSRY.html) or a [mesh path expression](ABENMESH_PATH_EXPRESSION_GLOSRY.html).

**path specification**

*\->*\\ [Path expression](ABENPATH_EXPRESSION_GLOSRY.html)

**period**

The time interval whose limits are defined by the content of the columns of a [temporal SQL hierarchy](ABENTEMPORAL_HIERARCHY_GLOSRY.html). These columns are defined when the [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) is created.

**Perl Compatible Regular Expression**

PCRE for short. [Regular expressions](ABENREGULAR_EXPRESSION_GLOSRY.html) using the same syntax and semantics as [Perl 5](https://www.perl.org/). In general, ABAP supports [PCRE syntax](ABENREGEX_PCRE_SYNTAX.html) for regular expressions by implementing the [PCRE2 library](https://www.pcre.org/) in the [ABAP kernel](ABENKERNEL_GLOSRY.html). [ABAP SQL](ABENABAP_SQL_GLOSRY.html) supports PCRE by using the PCRE1 library implemented in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html).

**quantity field literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the data type [`QUAN`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**query**

*\->*\\ [database query](ABENDB_QUERY_GLOSRY.html)

**ranking function**

[Window function](ABENWINDOW_FUNCTION_GLOSRY.html) that assigns a criterion for the ranking within the [window](ABENWINDOW_GLOSRY.html) for a line of a window on the result set of a [query](ABENASQL_QUERY_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html). The calculation is executed in the [database system](ABENDATABASE_SYSTEM_GLOSRY.html).

**right outer join**

A [type of join](ABENJOIN_TYPE_GLOSRY.html) that determines the same rows as an [inner join](ABENINNER_JOIN_GLOSRY.html) and an additional row for each row of the right [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) that is not included by the [join conditions](ABENJOIN_CONDITION_GLOSRY.html). In these rows, the columns coming from the left data source contain [null values](ABENNULL_VALUE_GLOSRY.html).

**root node set**

The set of [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) of a [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) that are determined by their start condition. The elements of the root node set are [root nodes](ABENROOT_NODE_GLOSRY.html).

**scalar subquery**

[Subquery](ABENSUBQUERY_GLOSRY.html) with a single-column result set. The [`SELECT` list](ABAPSELECT_LIST.html) of the subquery contains one element only.

**set expression**

Expression behind the addition [`SET`](ABAPUPDATE_SOURCE.html) of an [ABAP SQL](ABENABAP_SQL_GLOSRY.html)\\ [`UPDATE`](ABAPUPDATE.html) statement.

**set indicator**

[ABAP SQL indicator](ABENABAP_SQL_INDICATOR_GLOSRY.html) in a [work area](ABENWORK_AREA_GLOSRY.html) or an [internal table](ABENINTERNAL_TABLE_GLOSRY.html). The components of a set indicator indicate the columns of a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) to be changed using the [`UPDATE`](ABAPUPDATE.html) statement.

**set operator**

A set operator merges the result sets of multiple queries into a single result set. In [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) and [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the following set operators are available:

[Set operators in CDS view entities](ABENCDS_SET_OPERATORS.html)

[Set operators in ABAP SQL](ABAPUNION.html)

**simple case distinction**

A [case distinction](ABENCASE_DISTINCTION_GLOSRY.html) that matches an operand to another operand specified in one or more `WHEN` clauses. Available in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) and [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

**source cardinality**

The [cardinality](ABENCARDINALITY_GLOSRY.html) of a [join](ABENJOIN_GLOSRY.html) or [association](ABENASSOCIATION_GLOSRY.html) consists of a source cardinality and a [target cardinality](ABENTARGET_CARDINALITY_GLOSRY.html). The source cardinality describes the number of matching entries for the entries of the joined data source. For example, a source cardinality of one means that each record of the joined data source has zero or one matching entry in the original data source.

**SQL condition**

Logical expression in an [ABAP SQL statement](ABENABAP_SQL_GLOSRY.html).

**SQL expression**

An [expression](ABENEXP_GLOSRY.html) in an [ABAP SQL statement](ABENABAP_SQL_GLOSRY.html) or in [CDS DDL](ABENCDS_DDL_GLOSRY.html) that is evaluated by the database.

**SQL function**

Built-in database platform function that can be used in [SQL](ABENSQL_GLOSRY.html). In [ABAP SQL](ABENABAP_SQL_FUNCTIONS.html) and in the [CDS DDL](ABENCDS_BUILTIN_FUNCTIONS_V2.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html), a set of SQL functions can be accessed platform-independently.

**SQL injection**

Injection of malicious [SQL](ABENSQL_GLOSRY.html) statements by an attacker. SQL injections are possible whenever programs use external statements or parts of statements that are then are transferred to the [database system](ABENDATABASE_SYSTEM_GLOSRY.html) without being checked or escaped. In ABAP, SQL injections must be prevented by appropriate checks or escaping whenever [tokens](ABENTOKEN_GLOSRY.html) are specified dynamically in [ABAP SQL](ABENABAP_SQL_GLOSRY.html), when [ADBC](ABENADBC_GLOSRY.html) is used, and during generic programming.

**SQL operand**

Elementary operand in an [ABAP SQL statement](ABENABAP_SQL_GLOSRY.html). SQL operands are columns of [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) or [views](ABENVIEW_GLOSRY.html) defined in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html), [host variables](ABENHOST_VARIABLE_GLOSRY.html), or [host expressions](ABENHOST_EXPRESSION_GLOSRY.html).

**SQL path expression**

Specifies a [CDS association path](ABENCDS_ASSOCIATION_PATH_GLOSRY.html), a [CTE association path](ABENCTE_ASSOCIATION_PATH_GLOSRY.html), or a [CDS/CTE association path](ABENCDS_CTE_ASSOC_PATH_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) or [ABAP CDS](ABENABAP_CDS_GLOSRY.html). A SQL path expression can be used as a data source, or for specifying a [SQL path target field](ABENSQL_TARGET_FIELD_GLOSRY.html) in an operand position. For this, [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) are implicitly transformed into [joins](ABENJOIN_GLOSRY.html). See

**SQL path target field**

A field that is specified behind a [SQL path expression](ABENSQL_PATH_EXPRESSION_GLOSRY.html).

**SQL trace**

Trace function used to analyze the [SQL](ABENSQL_GLOSRY.html) statements passed from the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) to the [database system](ABENDATABASE_INTERFACE_GLOSRY.html). It can be called from the tools [ABAP Debugger](ABENABAP_DEBUGGER_GLOSRY.html) or [performance trace](ABENPERFORMANCE_TRACE_GLOSRY.html) (transaction `ST05`).

**start node**

**string literal**

Either [text string literal](ABENTEXT_STRING_LITERAL_GLOSRY.html) or [byte string literal](ABENBYTE_STRING_LITERAL_GLOSRY.html).

**subquery**

[ABAP SQL query](ABENASQL_QUERY_GLOSRY.html) that is used in an [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement for subqueries. Subqueries are possible in [SQL conditions](ABENSQL_COND_GLOSRY.html), for the definition of a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) after [`WITH`](ABAPWITH.html), or as a [data source](ABAPINSERT_FROM_SELECT.html) of an [`INSERT`](ABAPINSERT_DBTAB.html) or [`MODIFY`](ABAPMODIFY_DBTAB.html) statement.

**table buffer**

An area in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) for [table buffering](ABENTABLE_BUFFERING_GLOSRY.html). The table buffer is managed by the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) and when accessed by [ABAP SQL](ABENABAP_SQL_GLOSRY.html), tables in the table buffer are processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html).

**table buffering**

[Buffering](ABENSAP_BUFFERING_OLD_GLOSRY.html) of data from [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html), [DDIC database views](ABENDATABASE_VIEW_GLOSRY.html), or from [CDS entities](ABENCDS_ENTITY_GLOSRY.html) in a [table buffer](ABENTABLE_BUFFER_GLOSRY.html) in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html). Whether and how a DDIC database table or a DDIC database view is buffered is determined by its [technical settings](ABENDDIC_DATABASE_TABLES_BUFFER.html). For a CDS entity, the buffering is determined by annotations and a [CDS entity buffer](ABENCDS_ENTITY_BUFFER_GLOSRY.html). Buffering is managed by the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html). Table buffering is applied implicitly when the database is accessed using [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and from classic [dynpros](ABENDYNPRO_GLOSRY.html). In ABAP SQL, the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) processes the tabular data in the table buffer.

**temporal SQL hierarchy**

A special [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) that only contains [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) that meet certain conditions for time intervals. When the SQL hierarchy is created with the addition [`PERIOD`](ABENSELECT_HIERARCHY_GENERATOR.html) in [ABAP SQL](ABENABAP_SQL.html) or [`PERIOD`](ABENCDS_F1_DEFINE_HIERARCHY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html), columns of the [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) of the hierarchy are defined as interval limits of so-called [periods](ABENPERIOD_GLOSRY.html) and a time interval is specified for the [root node set](ABENROOT_NODE_SET_GLOSRY.html). [Validity intervals](ABENVALIDITY_INTERVAL_GLOSRY.html) are determined as intersections of these time intervals. Only nodes with non-empty validity intervals are included in the hierarchy. The validity intervals of [child nodes](ABENCHILD_NODE_GLOSRY.html) result from their period and the validity interval of the [parent node](ABENPARENT_NODE_GLOSRY.html).

**text field literal**

A [character literal](ABENCHARACTER_LITERAL_GLOSRY.html) of the [text field type](ABENTEXT_FIELD_TYPE_GLOSRY.html)\\ [`c`](ABENBUILTIN_TYPES_CHARACTER.html) or [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the length of the specified characters. A text field literal can be linked to a [text symbol](ABENTEXT_SYMBOL_GLOSRY.html).

See also:

**text literal**

*\->*\\ [Character literal](ABENCHARACTER_LITERAL_GLOSRY.html)

**text string literal**

A [character literal](ABENCHARACTER_LITERAL_GLOSRY.html) of the [text string](ABENTEXT_STRING_TYPE_GLOSRY.html) type [`string`](ABENBUILTIN_TYPES_CHARACTER.html).

See also:

**time literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the data type [`TIMN`](ABENDDIC_BUILTIN_TYPES.html) or [`TIMS`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**time stamp literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the data type [`UTCLONG`](ABENDDIC_BUILTIN_TYPES.html).

See also:

**typed literal**

A [literal](ABENLITERAL_GLOSRY.html) whose [data type](ABENDATA_TYPE_GLOSRY.html) is specified explicitly.

See also [untyped literal](ABENUNTYPED_LITERAL_GLOSRY.html).

**unit key literal**

A [literal](ABENABAP_LITERAL_GLOSRY.html) of the data type [`UNIT`](ABENDDIC_BUILTIN_TYPES.html) that contains a [unit key](ABENUNIT_GLOSRY.html).

See also:

**untyped literal**

A [literal](ABENLITERAL_GLOSRY.html) whose [data type](ABENDATA_TYPE_GLOSRY.html) is implicitly derived from its value or its delimiter. Both untyped [numeric literals](ABENNUMERIC_LITERAL_GLOSRY.html) and untyped [character literals](ABENCHARACTER_LITERAL_GLOSRY.html) exist. See also [typed literal](ABENTYPED_LITERAL_GLOSRY.html).

**validity interval**

The time interval that is assigned to each [hierarchy node](ABENHIERARCHY_NODE_GLOSRY.html) of a [temporal SQL hierarchy](ABENTEMPORAL_HIERARCHY_GLOSRY.html). The validity interval is the intersection of the validity interval of the [ancestor node](ABENANCESTOR_NODE_GLOSRY.html) and the [period](ABENPERIOD_GLOSRY.html) of the current node.

**value function**

A [window function](ABENWINDOW_FUNCTION_GLOSRY.html) that determines a value from a different row of the window for a row of a [window](ABENWINDOW_GLOSRY.html) in the result set of a [query](ABENASQL_QUERY_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html). The calculation is executed in the [database system](ABENDATABASE_SYSTEM_GLOSRY.html).

**window**

On a user interface, a [window](ABENUSER_INTERFACE_GLOSRY.html) is a framed area on the screen. A window in [SAP GUI](ABENSAP_GUI_GLOSRY.html) is referred to as a [GUI window](ABENGUI_WINDOW_GLOSRY.html).

In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), a window is a subset of the result set of a [query](ABENASQL_QUERY_GLOSRY.html) defined by a [window expression](ABENWINDOW_EXPRESSION_GLOSRY.html) to whose rows a [window function](ABENWINDOW_FUNCTION_GLOSRY.html) is applied.

**window expression**

In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), a window expression uses [`OVER`](ABAPSELECT_OVER.html) to define a subset of the result set of a [query](ABENWINDOW_FUNCTION_GLOSRY.html) and applies a [window function](ABENWINDOW_FUNCTION_GLOSRY.html) to it.

**window function**

A function that is specified in front of the definition of a [window](ABENWINDOW_GLOSRY.html) in an [ABAP SQL](ABENABAP_SQL_GLOSRY.html)\\ [window expression](ABENWINDOW_EXPRESSION_GLOSRY.html) and that evaluates the rows of the window. A window function is either an [aggregate function](ABENAGGREGATE_FUNCTION_GLOSRY.html), a [ranking function](ABENRANKING_FUNCTION_GLOSRY.html), or a [value function](ABENVALUE_FUNCTION_GLOSRY.html).

-   the [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html) of the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) to access the [standard database](ABENSTANDARD_DB_GLOSRY.html) of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) or a [secondary database](ABENSECONDARY_DB_GLOSRY.html).
-   or the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) to access the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) or [internal tables](ABENINTERNAL_TABLE_GLOSRY.html)

-   [Aggregate expressions in ABAP SQL](ABAPSELECT_AGGREGATE.html)
-   [Aggregate expressions in CDS](ABENCDS_AGGREGATE_FUNCTIONS_V2.html)

-   [Aggregate functions in ABAP SQL](ABENSQL_AGG_FUNC.html)
-   [Aggregate functions in ABAP CDS](ABENCDS_AGGREGATE_FUNCTIONS_V2.html)

-   The statement [`ALIASES`](ABAPALIASES.html) can be used to declare an alias name for an [interface component](ABENINTERFACE_COMPONENT_GLOSRY.html) in a [class](ABENCLASS_GLOSRY.html) or in a [compound interface](ABENCOMPOUND_INTERFACE_GLOSRY.html).
-   The addition [`ALIAS`](ABAPTYPES_PRIMARY_KEY.html) can be used to specify an alias for the [primary table key](ABENPRIMARY_KEY_GLOSRY.html) and [secondary table key](ABENSECONDARY_KEY_GLOSRY.html) when declaring an [internal table](ABENINTERNAL_TABLE_GLOSRY.html).
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the addition `AS` can be used to define aliases for columns of the result set in a [`SELECT`](ABAPSELECT_LIST.html) list or for data sources in the [`FROM`](ABAPFROM_CLAUSE.html) clause.
-   In [ABAP CDS](ABENABAP_CDS_GLOSRY.html), the addition `AS` can be used to define aliases for elements in the `SELECT` list or for [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html).

-   In general ABAP, an [arithmetic expression](ABAPCOMPUTE_ARITH.html) is a [calculation expression](ABENCALCULATION_EXPRESSION_GLOSRY.html). It is assigned a [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) that is used to execute the calculation. The result of an arithmetic expression is a numeric value that exists in the calculation type. Arithmetic expressions occur in the [read positions of specific statements](ABENOPERANDS_EXPRESSIONS.html).
-   In ABAP SQL, [arithmetic expressions](ABENSQL_ARITH.html) are [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html).
-   In ABAP CDS, [arithmetic expressions](ABENCDS_ARITHMETIC_EXPRESSION_V2.html) can be used in the `SELECT` list of CDS view entities.

-   In ABAP, arithmetic operators are [`+`](ABENARITH_OPERATORS.html), [`-`](ABENARITH_OPERATORS.html), [`*`](ABENARITH_OPERATORS.html), [`/`](ABENARITH_OPERATORS.html), [`DIV`](ABENARITH_OPERATORS.html), [`MOD`](ABENARITH_OPERATORS.html), and [`**`](ABENARITH_OPERATORS.html). See the topic [`arith_exp` - Arithmetic Operators](ABENARITH_OPERATORS.html) for further details.
-   In ABAP SQL, arithmetic operators are [`+`](ABENSQL_ARITH.html), [`-`](ABENSQL_ARITH.html), [`*`](ABENSQL_ARITH.html), [`/`](ABENSQL_ARITH.html).
-   In ABAP CDS, arithmetic operators are [`+`](ABENCDS_ARITHMETIC_EXPRESSION_V2.html), [`-`](ABENCDS_ARITHMETIC_EXPRESSION_V2.html), [`*`](ABENCDS_ARITHMETIC_EXPRESSION_V2.html), [`/`](ABENCDS_ARITHMETIC_EXPRESSION_V2.html).

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), binary floating point literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html).

-   In ABAP, the possible Boolean operators are [`NOT`](ABENLOGEXP_NOT.html), [`AND`](ABENLOGEXP_AND.html), [`OR`](ABENLOGEXP_OR.html), and [`EQUIV`](ABENLOGEXP_EQUIV.html).
-   In ABAP SQL, the possible Boolean operators are `NOT`, `AND`, `OR`. For further details, see the topic [`sql_cond` - `AND`, `OR`, `NOT`, `( )`](ABENWHERE_LOGEXP_ANDORNOT.html).
-   In ABAP CDS, the possible Boolean operators are `NOT`, `AND`, `OR`. For further details, see the topic [CDS DDL - CDS View Entity, `cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html).

-   In ABAP, built-in functions can be used as [expressions](ABENEXPRESSION_GLOSRY.html) in [certain operand positions](ABENOPERANDS_EXPRESSIONS.html). [Numeric functions](ABENMATHEMATICAL_FUNKTION_GLOSRY.html), [string functions](ABENSTRING_FUNCTION_GLOSRY.html), [table functions](ABENTABLE_FUNCTION_GLOSRY.html), and [byte chain functions](ABENBYTE_CHAIN_FUNCTION_GLOSRY.html) that have a return value of the corresponding data type can be distinguished. [Description functions](ABENDESCRIPTION_FUNCTION_GLOSRY.html) that provide information on data objects, are also available. The names of the built-in functions are a subset of the [reserved names](ABENABAP_WORD_GLOSRY.html). For further details, see the topic [Built-In Functions](ABENBUILT_IN_FUNCTIONS.html).
-   For ABAP SQL, [built-in functions](ABENSQL_BUILTIN_FUNC.html) are part of the [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html).
-   For built-in functions in ABAP CDS, see the topic [CDS built-in function](ABENCDS_BUILTIN_FUNC_GLOSRY.html).

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), byte field literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html)

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), byte string literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the operator [`CAST`](ABENSQL_CAST.html) is used.
-   In the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html), the operator `CAST` is used (see [cast in CDS view entities](ABENCDS_CAST_EXPRESSION_V2.html) or [cast in CDS DDIC-based views (obsolete)](ABENCDS_CAST_EXPRESSION_V1.html)).

-   In general ABAP, character literals are [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), character literals can be [typed literals](ABENTYPED_LITERAL_GLOSRY.html) or [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).

-   [Character Literals in ABAP](ABENUNTYPED_CHARACTER_LITERALS.html)
-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html)

-   Implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) in [ABAP SQL](ABENABAP_SQL_GLOSRY.html).
-   [AMDP methods](ABENAMDP_METHOD_GLOSRY.html) can access [client-safe](ABENCLIENT_SAFE_GLOSRY.html)\\ [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html) only.
-   [CDS entities](ABENCDS_ENTITY_GLOSRY.html) that are [released APIs](ABENRELEASED_API_GLOSRY.html) must be [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), client literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   A [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) or [DDIC view](ABENDDIC_VIEW_GLOSRY.html) in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) is client-dependent if the first column is a [client column](ABENCLIENT_COLUMN_GLOSRY.html). The system table `T000`, which contains the [AS ABAP](ABENAS_ABAP_GLOSRY.html)\\ [client IDs](ABENCLIENT_IDENTIFIER_GLOSRY.html), is an exception to this rule.
-   The client dependency of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is determined by its data sources. Client handling is by done implicitly by filtering the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `$session.client`.
-   The client dependency of [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) is declared in the [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) by the [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ `@CLientHandling.type`.

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), currency field literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), currency key literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), date literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   [ABAP SQL](ABENABAP_SQL_GLOSRY.html) does not support DCL. On an Application Server ABAP, the functionality of the [DCL](ABENCDS_DCL_GLOSRY.html) is implemented using [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html) and [SAP locks](ABENSAP_LOCK_GLOSRY.html).
-   [ABAP CDS](ABENABAP_CDS_GLOSRY.html) provides a [DCL](ABENCDS_DCL_GLOSRY.html) that implements an [access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html), where database objects can be linked to authorization objects of AS ABAP.

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), decimal floating point literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   In general ABAP, integer literals are [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), integer literals can be [typed literals](ABENTYPED_LITERAL_GLOSRY.html) or [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).

-   [Numeric Literals in ABAP](ABENUNTYPED_NUMBER_LITERALS.html)
-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html)

-   [DDIC views](ABENDDIC_VIEW_GLOSRY.html) in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html)
-   [Join expressions](ABENJOIN_EXPRESSION_GLOSRY.html) in [queries](ABENASQL_QUERY_GLOSRY.html) of [ABAP SQL](ABENABAP_SQL_GLOSRY.html)
-   [Join expressions](ABENJOIN_EXPRESSION_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), language key literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   [ABAP literal](ABENABAP_LITERAL_GLOSRY.html)
-   [ABAP SQL literal](ABENABAP_SQL_LITERAL_GLOSRY.html)
-   [CDS literal](ABENCDS_LITERAL_GLOSRY.html)

-   In general ABAP, logical expressions are used in [control statements](ABENCONTROL_STATEMENT_GLOSRY.html) or other statements that contain conditions, as well as in [conditional expressions](ABENCONDITIONAL_EXPRESSION_GLOSRY.html) and [Boolean functions](ABENBOOLE_FUNCTION_GLOSRY.html). For further details, see the topic [Logical Expressions (`log_exp`)](ABENLOGEXP.html).
-   In ABAP SQL, logical expressions are used in conditions, such as `WHERE` and `ON` conditions.
-   In ABAP CDS, logical expressions are used in conditions, such as `WHERE` and `ON` conditions.

-   In general ABAP, numeric literals are [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), numeric literals can be [typed literals](ABENTYPED_LITERAL_GLOSRY.html) or [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).

-   [Numeric Literals in ABAP](ABENUNTYPED_NUMBER_LITERALS.html)
-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), numeric text literals are available as [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).
-   In [ABAP CDS](ABENABAP_CDS_GLOSRY.html), numeric text literals can be [typed literals](ABENTYPED_LITERAL_GLOSRY.html) or [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).

-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html)

-   [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html)
-   [right outer join](ABENRIGHT_OUTER_JOIN_GLOSRY.html)

-   In general ABAP, packed number literals are [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), packed number literals can be [typed literals](ABENTYPED_LITERAL_GLOSRY.html) or [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).

-   [Numeric Literals in ABAP](ABENUNTYPED_NUMBER_LITERALS.html)
-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), quantity field literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   `EXCEPT` returns all distinct rows of the first result set that are not part of the following result sets.
-   `INTERSECT` returns all distinct rows that are part of all result sets.
-   `UNION` merges the result sets of all queries.

-   [SQL expressions in ABAP SQL](ABAPSQL_EXPR.html)
-   [SQL expressions in CDS DDL](ABENCDS_EXPRESSIONS_V2.html)

-   [Path Expression in CDS](ABENCDS_PATH_EXPRESSION_V2.html)
-   [Path Expression in ABAP SQL](ABENABAP_SQL_PATH.html).

-   In a [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html), a [hierarchy node](ABENHIERARCHY_NODE_GLOSRY.html) from which a [hierarchy node navigator](ABENHIERARCHY_NODE_NAVI_GLOSRY.html) determines further hierarchy nodes and adds them to its result set.
-   In a [mesh](ABENMESH_GLOSRY.html), a [mesh node](ABENMESH_NODE_GLOSRY.html) for which a [mesh association](ABENMESH_ASSOCIATION_GLOSRY.html) is defined is the association's start node.

-   In general ABAP, text field literals are [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html) delimited by single quotes.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), text field literals can be [typed literals](ABENTYPED_LITERAL_GLOSRY.html) or [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).

-   [Character Literals in ABAP](ABENUNTYPED_CHARACTER_LITERALS.html)
-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html)

-   In general ABAP, text string literals are [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html) delimited by backquotes.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), text string literals can be [typed literals](ABENTYPED_LITERAL_GLOSRY.html) or [untyped literals](ABENUNTYPED_LITERAL_GLOSRY.html).

-   [Character Literals in ABAP](ABENUNTYPED_CHARACTER_LITERALS.html)
-   [Literals in ABAP SQL](ABENABAP_SQL_LITERALS.html)
-   [Literals in CDS](ABENCDS_LITERAL_V2.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), time literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), time stamp literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

-   Not available in general ABAP.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html) and [ABAP CDS](ABENABAP_CDS_GLOSRY.html), unit key literals are available as [typed literals](ABENTYPED_LITERAL_GLOSRY.html).

-   [Typed Literals in ABAP SQL](ABENABAP_SQL_TYPED_LITERALS.html)
-   [Typed Literals in CDS](ABENCDS_TYPED_LITERAL_V2.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html