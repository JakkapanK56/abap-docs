---
title: "ABENCL_OSQL_REPLACE"
description: |
  ABENCL_OSQL_REPLACE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_OSQL_REPLACE.htm"
abapFile: "ABENCL_OSQL_REPLACE.html"
keywords: ["select", "update", "delete", "do", "if", "case", "method", "class", "data", "internal-table", "ABENCL", "OSQL", "REPLACE"]
---

The system class `CL_OSQL_REPLACE` implements a replacement service that can be used to redirect access to data sources in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements during the execution of [unit tests](ABENUNIT_TEST_GLOSRY.html) in [ABAP Unit](ABENABAP_UNIT_GLOSRY.html). The system class `CL_OSQL_REPLACE` can only be used in [test classes](ABENTEST_CLASS_GLOSRY.html) of [ABAP Unit](ABENABAP_UNIT_GLOSRY.html).

The static method `ACTIVATE_REPLACEMENT` of the system class `CL_OSQL_REPLACE` is used to define replacement rules.

The redirection can be made to any database objects, in particular to variants of the DDIC database tables or DDIC views defined in the ABAP Dictionary. The database objects that are redirected to must have the same structure as the redirected object, otherwise the result is database specific and exceptions can occur.

A successful redirection applies to the entire execution of a unit test until the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is ended or there is another redirection. A redirection is ended explicitly if an empty internal table is passed to the method `ACTIVATE_REPLACEMENT`.

As well as the method `ACTIVATE_REPLACEMENT`, `CL_OSQL_REPLACE` has the following methods:

The following applies to data sources of reads:

The same restrictions apply to the target of a write as to the data sources of reads, if applicable. In addition, targets of writes cannot be redirected to the following objects defined in the ABAP Dictionary:

Writes to a [projection view](ABENDDIC_PROJ_VIEW_GLOSRY.html) cannot be redirected if the lines to be changed are determined by a work area or an internal table. Therefore, it is only possible to redirect accesses to the DDIC database table of a DDIC projection view if there are no writes to the view, except with the statements [`DELETE`](ABAPDELETE_DBTAB.html) with a `WHERE` condition or [`UPDATE`](ABAPUPDATE.html) with the addition `SET`. Otherwise, a runtime error occurs.

See the program `DEMO_CL_OSQL_REPLACE`.

-   A three-column internal table is passed to the parameter `REPLACEMENT_TABLE`:

-   The first column `SOURCE` contains the name of a data source defined in the ABAP Dictionary, namely a DDIC database table, a DDIC view, or a [CDS persistent entity](ABENCDS_SQL_ENTITY_GLOSRY.html).
-   The second column `TARGET` contains the name of a database object in the current database to which an ABAP SQL access to the data source named in the first column is redirected.
-   The third column `SCHEMA` contains the name of a [database schema](ABENDATABASE_SCHEMA_GLOSRY.html) to be searched to find the database object from the second column. If the third column is empty, the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) is used.

-   An ID can be passed to the parameter `FLG_DML` to define whether the redirection also applies to write ABAP SQL statements:

-   If the value `abap_false` is passed to the parameter `FLG_DML`, the redirection only applies to [queries](ABENASQL_QUERY_GLOSRY.html), that is, to the [main queries](ABENMAINQUERY_GLOSRY.html) of [reads](ABENABAP_SQL_READING.html) and for the [subqueries](ABENSUBQUERY_GLOSRY.html) of all accesses.
-   If the value `abap_true` is passed to the parameter `FLG_DML`, the redirection also applies to the DDIC database tables to be changed by [write accesses](ABENABAP_SQL_WRITING.html).

-   An ID can be passed to the parameter `FLG_SURVIVE_SUBMIT` to define whether the redirection also applies to called programs:

-   If the value of `abap_false` is passed to the parameter `FLG_SURVIVE_SUBMIT`, the redirection applies only to the current program.
-   If the value of `abap_true` is passed to the parameter `FLG_SURVIVE_SUBMIT`, the redirection also applies to programs called using [`SUBMIT`](ABAPSUBMIT.html), [`CALL TRANSACTION`](ABAPCALL_TRANSACTION.html), and [`CALL DIALOG`](ABAPCALL_DIALOG.html).

-   From a technical perspective, a redirection replaces the names of the database objects in the platform-dependent SQL statements, which the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) generates from the ABAP SQL statements and passes to the database system.
-   Redirection of the data sources used by ABAP SQL is used during unit tests so that test tables and test data can be processed instead of the actual tables and their data. In particular, this enables testing of system programs that access system tables.
-   In the case of redirections in called programs using the parameter `FLG_SURVIVE_SUBMIT`, program calls using [`SUBMIT`](ABAPSUBMIT.html) without the addition `AND RETURN` are pointless.

-   The methods `IS_REPLACEMENT_ACTIVE` and `IS_REPLACEMENT_ACTIVE_DML` are used to check whether a redirection is active and whether it also applies to writes.
-   The methods `SET_ACTIVE_FOR_DML` and `TOGGLE_ACTIVE_FOR_DML` are used to set or change the setting for writes for an existing redirection.

-   The data source of a read can only be redirected to an object defined in the ABAP Dictionary if the object appears in the database under the name that it is defined with in the ABAP Dictionary.
-   To redirect a read from a [DDIC projection view](ABENDDIC_PROJ_VIEW_GLOSRY.html) to another data source, the underlying DDIC database table can be redirected.
-   It is not possible to redirect to the following:

-   [Projection views](ABENDDIC_PROJ_VIEW_GLOSRY.html)
-   [CDS entities](ABENCDS_ENTITY_GLOSRY.html)

-   If the data source of a subquery in the `WHERE` condition of a write statement is redirected to the target of the write, the behavior is undefined and unexpected errors may occur.
-   The following should be noted for [CDS entities](ABENCDS_VIEW_GLOSRY.html):

-   If a read is redirected to a CDS view or a CDS table function for which one or more [CDS roles](ABENCDS_ACCESS_CONTROL_GLOSRY.html) are defined as part of [CDS access control](ABENCDS_ROLE_GLOSRY.html), the associated access conditions are evaluated independently of the target of the redirection. CDS roles that are defined for the target of a redirection are ignored.

-   The following should be noted for [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html):

-   A CDS table function can only be redirected to a [table function](ABENTABLE_FUNCTION_GLOSRY.html). However, this does not have to be an [AMDP function](ABENAMDP_FUNCTION_GLOSRY.html).
-   If a direct or indirect read of a CDS table function is redirected to another data source, the [static constructor](ABENSTATIC_CONSTRUCTOR_GLOSRY.html) of the [AMDP class](ABENAMDP_CLASS_GLOSRY.html) in which the associated [AMDP table function](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) is implemented is executed.
-   If a read of a data source is redirected to an [AMDP](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) table function that is known in the current AS ABAP, the [AMDP](ABENAMDP_GLOSRY.html) framework creates the associated variant in the database if necessary, and the [static constructor](ABENSTATIC_CONSTRUCTOR_GLOSRY.html) of the associated [AMDP](ABENAMDP_CLASS_GLOSRY.html) class is executed.

-   If the source or target of a redirection is a DDIC database table of the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) defined in ABAP Dictionary, for which a [replacement object](ABENREPLACEMENT_OBJECT_GLOSRY.html) is defined, the redirection is evaluated first and then the replacement object.

-   If a data source of a read is redirected to a DDIC database table for which a replacement object is defined, a redirect to the replacement object is made.
-   If a DDIC database table is redirected for which a replacement object is defined, the redirection is applied. The replacement object is ignored.
-   If a replacement object is defined for a DDIC database table and the replacement object is redirected, the redirection is ignored. The replacement object is accessed here.

-   A redirection always bypasses [table buffering](ABENTABLE_BUFFERING_GLOSRY.html).

-   [DDIC views](ABENDDIC_VIEW_GLOSRY.html)
-   DDIC database tables with active [table buffering](ABENTABLE_BUFFERING_GLOSRY.html)
-   DDIC database tables with active [logging](ABENDDIC_DATABASE_TABLES_PROTOCOL.html)

-   A production class `prod` reads data from the DDIC database table `SCARR` in the method `select`, and deletes a line from this table in the method `delete`.
-   The test class `test_prod` tests the methods of the production class.

-   In the method `setup`, access to `SCARR` is redirected for read and write ABAP SQL statements with `cl_osql_replace=>activate_replacement` to a test table `DEMO_TEST_SCARR`, which was defined in the ABAP Dictionary as a copy of `SCARR`. The database schema of `DEMO_TEST_SCARR` is passed here explicitly for demonstration purposes, but this is not necessary for database objects from the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html).
-   In the method `setup`, the test table `DEMO_TEST_SCARR` is supplied with two lines of test data from an internal table `testdata`.
-   In the method `test`, the method `select` is called and the return value is compared with the internal table `testdata`. Calling the method `delete` deletes a row of test data from the test table and checks that the deleted row no longer exists.
-   In the method `teardown`, the test data is deleted from the test table.

-   Execution of the unit test should always be successful, regardless of the content of `SCARR`.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abencl\_osql.html