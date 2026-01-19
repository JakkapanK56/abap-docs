---
title: "ABENAMDP_HDB_SQLSCRIPT"
description: |
  ABENAMDP_HDB_SQLSCRIPT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENAMDP_HDB_SQLSCRIPT.htm"
abapFile: "ABENAMDP_HDB_SQLSCRIPT.html"
keywords: ["select", "insert", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABENAMDP", "HDB", "SQLSCRIPT"]
---

[SQLScript](ABENSQL_SCRIPT_GLOSRY.html) is a script language, documented in the [SAP HANA SQLScript Reference](https://help.sap.com/docs/SAP_HANA_PLATFORM/de2486ee947e43e684d39702027f8a94/28f2d64d4fab4e789ee0070be418419d), and used to program [SQLScript procedures](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) and [SQLScript functions](ABENSQL_SCRIPT_FUNCTION_GLOSRY.html) in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). It is the implementation language of an [AMDP method](ABENAMDP_METHODS.html) that specifies the addition [`FOR HDB LANGUAGE SQLSCRIPT`](ABAPMETHOD_BY_DB_PROC.html) in the statement `METHOD`.

The SQLScript implementation of an AMDP method with the name `meth` that belongs to an AMDP class `class` is stored by the ABAP runtime framework as an SQLScript procedure under the name `CLASS=>METH` in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) of the SAP HANA database. The names must be written in uppercase letters when used in the database system. AS ABAP is responsible for all transports, administration, and access control. SQLScript procedures and functions managed using AMDP can be accessed as follows:

The syntax of a [SQLScript procedure](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) or [function](ABENSQL_SCRIPT_FUNCTION_GLOSRY.html) written in SQLScript is exactly as described under [SAP Hana SQLScript Reference](https://help.sap.com/docs/SAP_HANA_PLATFORM/de2486ee947e43e684d39702027f8a94/28f2d64d4fab4e789ee0070be418419d), with one exception: The character `*` at the start of a line indicates a [comment](ABENCOMMENT.html), as in ABAP. When the procedure or function is saved in the database system, the asterisk, `*`, is transformed to the usual double hyphens, `--`.

The elementary ABAP types of interface parameters of an AMDP method are mapped to the appropriate types in SQLScript. as shown in the [mapping tables](ABENAMDP_HDB_SQLSCRIPT_MAPPING.html).

The parameter interface of an [SQLScript procedure](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) supports input parameters declared using `IN`, output parameters declared using `OUT`, and input/output parameters declared using `INOUT`‎. All parameters can be scalar and tabular with the exception of input/output parameters, which can only be scalar. When used in the procedure, certain operand positions must or can be prefixed with a colon (`:`) in certain operand positions.

The parameter interface of an [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHODS.html) that implements an SQLScript procedure is transformed as follows:

Elementary and tabular method parameters become scalar and tabular parameters of the database procedure respectively. As well as the restrictions for the parameter interface of an AMDP method described under [AMDP](ABENAMDP.html), the following restrictions apply in the implementation with SQLScript:

In SQLScript, tabular parameters are handled as temporary database tables. An internal table passed to SQLScript can be accessed just like a database table.

The parameter interface of an [SQLScript function](ABENSQL_SCRIPT_FUNCTION_GLOSRY.html) supports input parameters declared using `IN` and a return value declared using `RETURNS`. The input parameters of a scalar function must be scalar, and the input parameters of a table function can be scalar and tabular. The return value of a scalar function is scalar, and the return value of a table function is tabular.

The parameter interface of an [AMDP function implementation](ABENAMDP_FUNCTION_METHODS.html) that implements an SQLScript procedure is transformed as follows:

The same restrictions apply as in SQLScript procedures, as well as the following:

As described above, SQLScript procedures and functions managed in the SAP HANA database using AMDP can be used in ABAP programs and in other AMDP procedures according to the visibility of the AMDP methods. Recursive and cyclical calls are forbidden in the HANA database system, which means that

In an SQLScript procedure, the `[AMDP macro](ABENAMDP_MACRO_GLOSRY.html)`\\ [`$ABAP.type`](ABENAMDP_ABAP_TYPES.html) can be used to access ABAP types that have a corresponding type in SQLScript. The type mapping is described in the [mapping tables](ABENAMDP_HDB_SQLSCRIPT_MAPPING.html).

In an SQLScript procedure, it is possible to access objects in the same database schema directly. The name of the current database schema must not be specified here. To access an object in another database schema, the name of the database schema can be specified as prefix separated by a period, as usual in SQLScript.

-   AS ABAP requires the following authorizations as a user of the database system to be able to manage SQLScript procedures and functions on the SAP HANA database:

-   Privilege `Execute` on the object `GET_PROCEDURE_OBJECTS` of the schema `SYS`
-   Privilege `Execute` on the object `TRUNCATE_PROCEDURE_OBJECTS` of the schema `SYS`

-   Further authorizations are required for debugging AMDP methods in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html). Missing authorizations can be identified using transaction `SICK`.

-   Calls from ABAP

-   Call of an [AMDP procedure](ABENAMDP_PROCEDURE_GLOSRY.html) or [AMDP scalar function](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) with standard method call [`meth( ... )`](ABAPCALL_METHOD_STATIC_SHORT.html) in ABAP programs. For `meth`, the associated [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHODS.html) is specified.
-   Calls an [AMDP table function](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) by specifying the assigned [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) or a [CDS view](ABENCDS_TABLE_FUNCTION_GLOSRY.html) that uses a CDS table function in an ABAP SQL read statement.

-   Calls from other AMDP procedures or functions

-   An AMDP procedure or function implemented using SQLScript in the same class or a different class can call another AMDP procedure with the usual [SQLScript syntax](https://help.sap.com/docs/SAP_HANA_PLATFORM/de2486ee947e43e684d39702027f8a94/28f2d64d4fab4e789ee0070be418419d):
-   `CALL "CLASS=>METH"( f1 => a1, f2 => a2, ... );`
-   The called AMDP procedure implementation `CLASS=>METH` must be specified after the addition [`USING`](ABAPMETHOD_BY_DB_PROC.html) of the calling method. The usual visibility rules from ABAP Objects apply. A database procedure or database function implemented in a class cannot call a procedure implemented in a private AMDP procedure implementation of a different class, unless a friendship exists between the classes.
-   An AMDP procedure or function implemented using SQLScript in the same class or a different class can call another AMDP function implemented with SQLScript using the usual [SQLScript syntax](https://help.sap.com/docs/SAP_HANA_PLATFORM/de2486ee947e43e684d39702027f8a94/28f2d64d4fab4e789ee0070be418419d):
-   `SELECT ... FROM "CLASS=>METH"( f1 => a1, f2 => a2, ... );`
-   The specified AMDP function implementation `CLASS=>METH` must be specified after the addition [`USING`](ABAPMETHOD_BY_DB_PROC.html) of the calling method. An AMDP function implementation is always public.

-   Support for ABAP comments introduced using `*` enables the use of change entries inserted by the *Modification Assistant* tool in ABAP programs. This property should not be used when creating AMDP methods in the regular way.
-   The syntax is checked only on an AS ABAP whose standard database is a SAP HANA database. Here, a temporary database procedure or function is created that checks the syntax.
-   The use of the dynamic options under SQLScript syntax is strongly discouraged due to the reasons specified under [AMDP](ABENAMDP.html). This applies in particular to statements such as `EXEC`, `EXECUTE IMMEDIATE`, or `APPLY FILTER`.

-   An input parameter of the method defined using `IMPORTING` becomes an input parameter of the procedure declared using `IN`.
-   An output parameter of the method defined using `EXPORTING` becomes an output parameter of the procedure declared using `OUT`.
-   If `CHANGING` is used to define a

-   scalar input/output parameter of the method, the parameter becomes an input/output parameter of the database procedure declared using `INOUT`.
-   tabular input/output parameter of the method, it is transformed to a pair of input and output parameters declared using `IN` and `OUT` on the database, since SQLScript does not support `INOUT` parameters. The `CHANGING` parameter becomes an `OUT` parameter of the procedure with the same name as the `CHANGING` parameter. The `IN` parameter is created with an internal name consisting of the name of the `CHANGING` parameter and a postfix `__IN__`. The `IN` parameter is assigned to the `OUT` parameter before the start of the actual AMDP procedure. This transformation and the corresponding call are generally transparent for all ABAP developers. It becomes visible only when the database procedure is displayed in a tool or called from another database procedure (see the [executable example](ABENAMDP_CHANGING_CS_ABEXA.html)).

-   An [input/output parameter](ABENINPUT_OUTPUT_PARAMETER_GLOSRY.html) declared using [`CHANGING`](ABAPMETHODS_GENERAL.html) cannot have the type `string` or `xstring`. An exception this rule are parameters that are typed with reference to the built-in type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) from the ABAP Dictionary.
-   The length of a parameter typed with the type `c` or `n` is restricted to a maximum of 5000 characters.
-   Parameters of the types `string` and `xstring` cannot be assigned a replacement value using [`DEFAULT`](ABAPMETHODS_PARAMETERS.html), which means they cannot be optional parameters. Since release 7.78, parameters of the types `f`, `decfloat16`, `decfloat34`, and `sstring` can be assigned a replacement value using `DEFAULT`.

-   An input parameter of the method defined using `IMPORTING` becomes an input parameter of the function declared using `IN`.
-   The return value of the method defined using `RETURN` becomes the return value of the procedure declared using `RETURNS`.

-   AMDP scalar functions cannot have any output parameters besides the return value.
-   AMDP table functions for [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) can only have scalar input parameters.

-   an SQLScript procedure or function cannot use itself
-   an AMDP method that implements an SQLScript procedure cannot call any database procedures or use any database functions that themselves use the AMDP procedure or function.

-   [AMDP - Examples (Client-safe)](ABENAMDP_CS_ABEXAS.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_methods.html abapmethod\_by\_db\_proc.html