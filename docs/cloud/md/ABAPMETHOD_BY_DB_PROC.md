---
title: "AMDP - Examples"
description: |
  Determines the database system for which the AMDP method is used. The AMDP class must contain the appropriate tag interface. The following table shows the syntax that can be specified for `db`, the database system it identifies, and the required tag interface. The AMDP method can only be called in a
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMETHOD_BY_DB_PROC.htm"
abapFile: "ABAPMETHOD_BY_DB_PROC.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "ABAPMETHOD", "PROC"]
---

`METHOD meth BY DATABASE PROCEDURE|FUNCTION|\{GRAPH WORKSPACE\}\              FOR db              LANGUAGE db_lang              [OPTIONS db_options]\              [USING   entities]\              [USING   SCHEMA schema1 OBJECTS db_entities]\              [USING   SCHEMA schema2 OBJECTS db_entities]\              ... .    ...  ENDMETHOD.`

[1. `... FOR db`](#ABAP_ADDITION_1@3@)

[2. `... LANGUAGE db_lang`](#ABAP_ADDITION_2@3@)

[3. `... OPTIONS db_options`](#ABAP_ADDITION_3@3@)

[4. `... USING entities`](#ABAP_ADDITION_4@3@)

[5. `... USING SCHEMA schema OBJECTS db_entities`](#ABAP_ADDITION_5@3@)

Implements an [AMDP procedure](ABENAMDP_PROCEDURE_GLOSRY.html), an [AMDP function](ABENAMDP_FUNCTION_GLOSRY.html), or a [graph workspace](ABENGRAPH_WORKSPACE_GLOSRY.html) in an [AMDP class](ABENAMDP_CLASS_GLOSRY.html). The addition `BY DATABASE PROCEDURE`, `BY DATABASE FUNCTION` or `BY DATABASE GRAPH WORKSPACE` can be specified in the [implementation part](ABENIMPLEMENTATION_PART_GLOSRY.html) of a [global class](ABENGLOBAL_CLASS_GLOSRY.html) that contains an appropriate tag interface [`IF_AMDP_MARKER_...`](ABENAMDP_CLASSES.html) for [AMDP classes](ABENAMDP_CLASS_GLOSRY.html).

The parameter interface of the method declared in the [declaration part](ABENDECLARATION_PART_GLOSRY.html) must meet the prerequisites for [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHODS.html) or [AMDP function implementations](ABENAMDP_FUNCTION_METHODS.html). The parameter interface of an AMDP function implementation that implements a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) is taken from the definition of the CDS table function specified after the addition [`FOR TABLE FUNCTION`](ABAPCLASS-METHODS_FOR_TABFUNC.html) in the declaration of the method. The parameter interface of an AMDP function implementation that implements a [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) is taken from the definition of the CDS scalar function specified after the addition [`FOR SCALAR FUNCTION`](ABAPCLASS-METHODS_FOR_SCALFUNC.html) in the declaration of the method.

The addition `FOR db` defines the database system where the method is used. The addition `LANGUAGE` defines the database-specific language in which the method is implemented. `OPTIONS` is used to specify database-specific options. `USING` is used to declare database objects managed by ABAP that are used in the AMDP method.

AMDP - Examples

Determines the database system for which the AMDP method is used. The AMDP class must contain the appropriate tag interface. The following table shows the syntax that can be specified for `db`, the database system it identifies, and the required tag interface.

The AMDP method can only be called in an AS ABAP whose [standard database](ABENSTANDARD_DB_GLOSRY.html) is managed by the specified database system. Otherwise a runtime error occurs.

Determines the database-specific language in which the AMDP is implemented. The following table shows the syntax for `db_lang` used to specify the language depending on the specified database system `db`, the meaning, and a link to further information.

The ABAP syntax check examines the implementation of the method for the specified language as far as possible. This is possible only if the check takes place on an AS ABAP whose standard database is managed by the specified database system. The check is performed with respect to the currently installed version of the database. No checks take place on an AS ABAP with a different database system.

Specifies database-specific options for the AMDP procedure or function. The following table shows the syntax for `option` depending on the specified database system `db` and the associated meaning.

The option `READ-ONLY` can also be specified with the addition [`AMDP OPTIONS`](ABAPMETHODS_AMDP_OPTIONS.html) in the declaration of an AMDP method. It applies when specified either in the implementation or in the declaration of the method, or in both places.

In the current ABAP language version [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), the addition `READ-ONLY` must be specified at least once.

The syntax check examines the specified options at runtime.

The option `SUPPRESS SYNTAX ERRORS` does not affect database objects managed by ABAP that are specified after `USING`.

Declares one of the following:

After `USING`, all database objects from the current [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) that are used in the implementation must be specified. More specifically, the following database objects must be specified after `USING`:

The names of the database objects must be specified without specifying the database schema.

Each database object specified after `USING` must also be used in the procedure or function. No other database objects than those listed above can be specified after `USING` and the procedure or function can only access database objects specified after `USING`.

In summary, database objects of the current database schema can only be accessed in a database procedure or database function managed by AMDP if they are managed by ABAP and specified after `USING`.

-   The addition `BY DATABASE PROCEDURE` defines an [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHODS.html) for implementing a [database procedure](ABENDATABASE_PROCEDURE_GLOSRY.html).
-   The addition `BY DATABASE FUNCTION` defines an [AMDP function implementation](ABENAMDP_FUNCTION_METHODS.html) for implementing a [database function](ABENDATABASE_FUNCTION_GLOSRY.html).
-   The addition `BY DATABASE GRAPH WORKSPACE` defines a [graph workspace](ABENGRAPH_WORKSPACE_GLOSRY.html) that can be consumed by a [graph procedure](ABENGRAPH_PROCEDURE_GLOSRY.html) using [GraphScript](ABENGRAPHSCRIPT_GLOSRY.html), see [Graph Processing](ABENAMDP_HDB_GRAPH.html).

-   Currently, the only available database is the SAP HANA database.
-   Additional regular methods can be provided to make an AMDP class with [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHODS.html) generally available. These methods call the AMDP methods depending on the database system of the current standard AS ABAP database. In database systems that do not yet support AMDP, an alternative implementation in ABAP SQL can be created in regular methods.

-   the database objects managed by ABAP accessed in the AMDP procedure or function.
-   the [DDL object](ABENDDL_OBJECT_GLOSRY.html) in methods using the syntax `... BY DATABASE GRAPH WORKSPACE ...`.

-   [CDS entities](ABENCDS_ENTITY_GLOSRY.html), such as [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), and [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html), using the name of the CDS entity.
-   Database tables from the ABAP Dictionary using the name defined in ABAP Dictionary.
-   Procedures and functions managed by AMDP. An AMDP procedure or function is specified using the syntax `class=>meth`. Here, `class` is the name of its AMDP class and `meth` is the name of the AMDP procedure implementation or function implementation.

-   `USING` is integrated into the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) and the names of database objects `entities` must be specified as usual in ABAP. After `USING`, the implementation in the database-specific language starts and the entities must be addressed accordingly in the implementation. For example, in SQLScript, the following rules apply when addressing database objects `entities`:

-   If specified without quotation marks, the names are not case-sensitive.
-   If specified with double quotation marks, the names must be written in uppercase letters.
-   Special characters enforce the use of double quotation marks and uppercase letters. For example, a namespace prefix usually has a slash (*/*) and therefore enforces double quotation marks and uppercase letters.
-   Example:

-   `... USING cl_my_class=>my_method. [...]\ select * from "CL_MY_CLASS=>MY_METHOD" ...`
-   Explicit declarations of database objects used in the procedure or function are required for various static checks, such as where-used lists or package checks, and also makes the AMDP method visible on the database level.
-   Objects specified after `USING` must be visible at this position. An AMDP method from a different class can be specified only if it can be used by the current class. This applies the visibility concept of ABAP Objects to the database system, even if the database system does not have a similar concept.
-   In the case of DDIC database tables, the order of the fields defined in the ABAP Dictionary may differ from the order of the fields on the database. For DDIC database tables specified after `USING`, the AMDP framework ensures that the order of the fields defined in the dictionary is respected when the tables are accessed statically.
-   When an AMDP method `class=>meth` is specified after `USING`, the ABAP runtime framework identifies this as a use of the class `class` and its [static constructor](ABENSTATIC_CONSTRUCTOR_GLOSRY.html) is executed before the first call of the AMDP method. If an AMDP procedure or function uses other AMDP procedures or functions, it can therefore be assumed that the corresponding static constructor was executed.
-   AMDP methods defined and implemented in the same class must also be specified after `USING`, if they are used in the procedure or function.

`db` **Database System** **Tag Interface**\\ `HDB` SAP HANA database `IF_AMDP_MARKER_HDB` `db` `db_lang` **Language** **More Information**\\ `HDB` `SQLSCRIPT` [SQLScript](ABENSQL_SCRIPT_GLOSRY.html) \\ [SQLScript for the SAP HANA Database](ABENAMDP_HDB_SQLSCRIPT.html)\\ `HDB` `SQL` DDL Not yet documented `HDB` `GRAPH` [GraphScript](ABENGRAPHSCRIPT_GLOSRY.html) \\ [Graph Processing](ABENAMDP_HDB_GRAPH.html) `db` `option` **Meaning**\\ `HDB` `READ-ONLY` Only reads are allowed on the database tables in the database procedure or database function. Other AMDP methods can be called only if they are also flagged as `READ-ONLY`. `HDB` `DETERMINISTIC` For [AMDP scalar functions](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html) only. If a query calls an AMDP scalar function more than once with the same values for the input parameters and with the option `DETERMINISTIC`, the function is performed only once, and the result is buffered for the duration of the query. In AMDP scalar functions like this, no functions are allowed that could return different values in different calls. For more information, see [SAP Hana SQLScript Reference](https://help.sap.com/docs/SAP_HANA_PLATFORM/de2486ee947e43e684d39702027f8a94/28f2d64d4fab4e789ee0070be418419d). `HDB` `SUPPRESS SYNTAX ERRORS` This syntax is not available in the current ABAP language version. abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_methods.html