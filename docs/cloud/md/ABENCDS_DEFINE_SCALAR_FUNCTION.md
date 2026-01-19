---
title: "ABENCDS_DEFINE_SCALAR_FUNCTION"
description: |
  ABENCDS_DEFINE_SCALAR_FUNCTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DEFINE_SCALAR_FUNCTION.htm"
abapFile: "ABENCDS_DEFINE_SCALAR_FUNCTION.html"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "ABENCDS", "DEFINE", "SCALAR", "FUNCTION"]
---

``\  DEFINE SCALAR FUNCTION ScalarFunction    [WITH PARAMETERS pname1 : [`typing`](ABENCDS_SCALAR_TYPING.html)\ [,                     pname2 : [`typing`](ABENCDS_SCALAR_TYPING.html)][,                    ...]]\            RETURNS [`typing`](ABENCDS_SCALAR_TYPING.html)[;]``

Defines a CDS scalar function definition `ScalarFunction` as a [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html). The name `ScalarFunction` must follow the naming conventions for [dictionary types](ABENDDIC_TYPES_NAMES.html). The following additional rules apply:

Optionally, a list of [input parameters](ABENCDS_PARAMETER_GLOSRY.html)\\ `pname1`, `pname2`, ... can be declared using the addition `WITH PARAMETERS`. These also define the input parameters of the AMDP scalar function. There is no limit to the number of input parameters. The typing of these input parameters is explained in the topic [CDS DDL - `typing`](ABENCDS_SCALAR_TYPING.html).

The name of an input parameter must comply with the naming rules for [names](ABENCDS_GENERAL_SYNTAX_RULES.html). Furthermore, it cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. All reserved names that cannot be used are specified in the DDIC database table `TRESE`. The evaluation of names is not case-sensitive. Each parameter name must be unique. Blanks in the comma-separated parameter list are ignored and can be omitted.

`RETURNS` defines the data type of the scalar [return value](ABENRETURN_VALUE_GLOSRY.html). The topic [CDS DDL - `typing`](ABENCDS_SCALAR_TYPING.html) explains how the return value can be typed.

CDS scalar functions are available in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) in operand positions that expect scalar values, similar to built-in functions. In particular, they can be specified in the following operand positions:

SQL-based scalar functions can be used as operands in [ABAP SQL](ABENABAP_SQL_GLOSRY.html). This is described in the topic [`sql_exp` - `cds_scalar_func`](ABENSQL_CDS_SCALAR_FUNC.html).

Once a CDS scalar function has been activated, a [scalar function implementation reference](ABENCDS_SCALAR_FUNC_IMPL_REF.html) must be created. This scalar function implementation reference binds the scalar function to a runtime environment and refers to an [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html).

The scalar function is implemented in an AMDP function using the addition [`FOR SCALAR FUNCTION`](ABAPCLASS-METHODS_FOR_SCALFUNC.html).

The following example demonstrates the definition, implementation, and use of an SQL-based scalar function.

**CDS scalar function definition**

The following CDS scalar function `DEMO_CDS_SCALAR_HELLOWORLD` has no input parameters. It only defines the data type of the return parameter.

**CDS scalar function implementation reference**

The scalar function implementation reference `DEMO_CDS_SCALAR_HELLOWORLD_SQL` binds the scalar function to the SQL Engine and defines the method `EXECUTE` of the class `CL_DEMO_CDS_SCALAR_HELLOWORLD` as AMDP function implementation.

**AMDP function implementation**

The following listing shows the AMDP function implementation. The value of the return parameter is set to *Hello World!*.

**Use in a CDS view entity**

The following CDS view entity uses the scalar function `DEMO_CDS_SCALAR_HELLOWORLD` as an element in the `SELECT` list.

The following code snippet selects data from the CDS view entity `DEMO_CDS_SCALAR_USE`. The scalar function is executed and the field `MyScalarFunc` contains the value `Hello World!`.

-   The name can be up to 26 characters long. Four characters are reserved for the suffix of the [scalar function implementation reference](ABENCDS_SCALAR_FUNC_IMPL_REF.html).
-   The name must not start with the prefix `QCM`.
-   The first, second, third, and last character of the name must not be an underscore (*\_*).
-   A CDS scalar function is located in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.

-   As the right-hand side of a join ON-condition of a CDS view entity as documented in the topic [CDS DDL - CDS View Entity, `SELECT`, `JOIN`](ABENCDS_JOINED_DATA_SOURCE_V2.html).
-   As an element in the element list of a CDS view entity, as documented in the topic [CDS DDL - CDS View Entity, `SELECT`, `element`](ABENCDS_SELECT_LIST_ENTRY_V2.html).
-   As operands in a [`WHERE`](ABENCDS_WHERE_CLAUSE_V2.html) condition of a CDS view entity.
-   As operands of an [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html) in a CDS view entity.
-   As operand of a [case distinction](ABENCDS_CASE_EXPRESSION_V2.html) in a CDS view entity.
-   As operand of a [cast expression](ABENCDS_CAST_EXPRESSION_V2.html) in a CDS view entity.
-   As operands of [built-in functions](ABENCDS_BUILTIN_FUNCTIONS_V2.html) wherever documented.
-   As an operand of a [filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V2.html) of a [path expression](ABENPATH_EXPRESSION_GLOSRY.html).

-   SQL-based scalar functions cannot be used in CDS entities other than CDS view entities.

-   After activation, a CDS scalar function cannot be renamed.
-   The scalar function definition and the scalar function implementation reference must have the same [ABAP language version](ABENABAP_VERSION_GLOSRY.html).

define scalar function DEMO\_CDS\_SCALAR\_HELLOWORLD \\n returns abap.char(12) METHOD execute BY DATABASE FUNCTION \\n FOR HDB \\n LANGUAGE SQLSCRIPT \\n OPTIONS READ-ONLY. \\n result = 'Hello World!'; \\nENDMETHOD. @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, scalar func'\\n\\ndefine view entity DEMO\_CDS\_SCALAR\_USE\\n as select from demo\_expressions\\n\\{\\n key id as Id,\\n\\n DEMO\_CDS\_SCALAR\_HELLOWORLD() as MyScalarFunc\\n\\}\\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_expressions. \\n\\ \\nINSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ). \\n\\ \\nSELECT \* \\n FROM demo\_cds\_scalar\_use \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_fdl.html abencds\_scalar\_functions.html abencds\_sql\_scalar\_function.html