---
title: "ABENCDS_SQL_SCALAR_FUNCTION"
description: |
  ABENCDS_SQL_SCALAR_FUNCTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SQL_SCALAR_FUNCTION.htm"
abapFile: "ABENCDS_SQL_SCALAR_FUNCTION.html"
keywords: ["select", "do", "while", "method", "class", "data", "types", "internal-table", "ABENCDS", "SQL", "SCALAR", "FUNCTION"]
---

[SQL-based scalar functions](ABENCDS_SQL_SCALAR_GLOSRY.html) are [scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) that are evaluated by an SQL environment. They can be used in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) in operand positions that expect scalar values, similar to [built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V2.html). They can also be used as operands in [ABAP SQL](ABENABAP_SQL_GLOSRY.html). This is described in the topic [`sql_exp` - `cds_scalar_func`](ABENSQL_CDS_SCALAR_FUNC.html).

While [analytical scalar functions](ABENCDS_ANA_SCALAR_FUNCTION.html) are defined and implemented by SAP, SQL-based scalar functions can also be defined and implemented by customers and partners. SQL-based scalar functions make user-defined [AMDP scalar functions](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html) known to the ABAP Dictionary and available in ABAP CDS.

An SQL-based scalar function consists of three development objects:

[Client handling](ABENCLIENT_HANDLING_GLOSRY.html) has not yet been implemented for CDS scalar functions, so only [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html) scalar functions are supported. The AMDP method that implements a scalar function can only access client-independent objects. However, when it is used, client dependency is ignored. A CDS scalar function can be used in both client-dependent and client-independent CDS entities.

The following topics describe the syntax for defining SQL-based scalar functions.

CDS SQL-based scalar functions cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). An ABAP SQL statement that accesses a CDS scalar function bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

For further details on user-defined scalar functions in ABAP CDS, see [*SQL-Based Scalar Functions*](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/7370f3f78a6d4940af29ab89abf7f1b0?version=sap_cross_product_abap) in the ABAP Data Models guide on SAP Help Portal.

-   A [scalar function definition](ABENCDS_DSFD_GLOSRY.html) defined using [`DEFINE SCALAR FUNCTION`](ABENCDS_DEFINE_SCALAR_FUNCTION.html) in a [CDS function definition](ABENCDS_FUNCTION_DEFINITION_GLOSRY.html). It is located in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.
-   A [scalar function implementation reference](ABENCDS_SCALAR_FUNC_IMPL_REF.html) that binds the scalar function to the SQL environment and to an [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html). The scalar function implementation reference is defined in a form-based editor in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html). It must refer to an existing CDS scalar function. It is a standalone repository object that is transported and has its own editor in ADT.
-   An [AMDP function](ABENAMDP_FUNCTION_GLOSRY.html) that implements the CDS scalar function using [SQLScript](ABENSQL_SCRIPT_GLOSRY.html) in a special [AMDP method](ABENAMDP_METHOD_GLOSRY.html). The implementation is managed as an [AMDP scalar function](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) by the [AMDP](ABENAMDP_GLOSRY.html) in the database system. The AMDP method must be declared as a special [AMDP function implementation](ABENAMDP_FUNCTION_METHODS.html) for exactly one CDS scalar function using the addition [`FOR SCALAR FUNCTION`](ABAPCLASS-METHODS_FOR_SCALFUNC.html). The parameter interface of the AMDP scalar function is defined by the input parameters and the scalar result type of the CDS scalar function.

-   [CDS DDL - `DEFINE SCALAR FUNCTION`](ABENCDS_DEFINE_SCALAR_FUNCTION.html)

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_fdl.html abencds\_scalar\_functions.html