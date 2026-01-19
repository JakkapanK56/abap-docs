---
title: "ABENAMDP_FUNCTION_METHODS"
description: |
  ABENAMDP_FUNCTION_METHODS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_FUNCTION_METHODS.htm"
abapFile: "ABENAMDP_FUNCTION_METHODS.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "ABENAMDP", "FUNCTION", "METHODS"]
---

An AMDP function implementation is an AMDP method for implementing an [AMDP function](ABENAMDP_FUNCTION_GLOSRY.html) as a [database function](ABENDATABASE_FUNCTION_GLOSRY.html). An AMDP function implementation is indicated as an AMDP method in the implementation part of the class using the addition [`BY DATABASE FUNCTION`](ABAPMETHOD_BY_DB_PROC.html) of the statement `METHOD`. [AMDP table functions](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) and [AMDP scalar functions](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html) can be implemented.

There are the following types of AMDP table functions:

An AMDP function implementation for an AMDP table function that can only be accessed in AMDP methods is declared in an [AMDP](ABENAMDP_CLASSES.html) class like a regular [static method](ABENSTATIC_METHOD_GLOSRY.html) or [instance method](ABENINSTANCE_METHOD_GLOSRY.html) in any [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html). An AMDP function implementation like this cannot be identified in the declaration part of the class and the same basically applies as to [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHODS.html) with the following differences:

The AMDP table function of a [AMDP table function](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) can be called from other AMDP methods. It cannot be called in ABAP programs like a regular functional method.

[AMDP functions](ABENAMDP_FUNCTIONS_ABEXA.html)

The same rules apply to an AMDP function implementation that implements an [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) as to the AMDP table functions for AMDP methods (described above), with the following differences:

The [AMDP table function](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) defined by an AMDP function implementation like this can be used as follows using the [CDS entity](ABENCDS_ENTITY_GLOSRY.html) represented by the CDS table function:

In addition, calls from other AMDP methods are possible. Calls as regular functional methods are not possible in an ABAP program.

[AMDP functions](ABENAMDP_FUNCTIONS_ABEXA.html)

There are the following types of AMDP scalar functions:

An AMDP function implementation is declared in an [AMDP class](ABENAMDP_CLASSES.html) like a regular [static method](ABENSTATIC_METHOD_GLOSRY.html) or [instance method](ABENINSTANCE_METHOD_GLOSRY.html) in any [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html). An AMDP function implementation is not recognizable as such in the declaration part of the class and the same rules apply as to AMDP table functions for AMDP methods (described above) with the following differences:

The [AMDP scalar function](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html) defined using an AMDP function implementation like this can be used in other AMDP methods in accordance with the rules for [scalar functions](ABENSCALAR_FUNCTION_GLOSRY.html).

[AMDP functions](ABENAMDP_FUNCTIONS_ABEXA.html)

The same rules apply to an AMDP function implementation that implements a [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) as to the AMDP scalar functions for AMDP methods (described above), with the following differences:

The [AMDP scalar function](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html) defined by an AMDP function implementation like this can be used in operand positions of a CDS view entity in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html).

-   Functions that can only be accessed in other AMDP methods
-   Functions that implement [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) that can be accessed in ABAP SQL

-   The AMDP function implementation must have a [return value](ABENRETURN_VALUE_GLOSRY.html) defined using [`RETURNING`](ABAPMETHODS_FUNCTIONAL.html). The data type of the return value must be tabular with a structured row type whose components are elementary. Any [table category](ABENTABLE_CATEGORY_GLOSRY.html) and [table key](ABENTABLE_KEY_GLOSRY.html) can be specified for return value.
-   In addition to the return value, the AMDP function implementation can have elementary and tabular [input parameters](ABENINPUT_PARAMETER_GLOSRY.html), but no [input/output parameters](ABENINPUT_OUTPUT_PARAMETER_GLOSRY.html) or [output parameters](ABENOUTPUT_PARAMETER_GLOSRY.html). The special input parameter `connection` is not allowed.
-   No class-based exceptions can be declared using [`RAISING`](ABAPMETHODS_GENERAL.html) in the interface of the AMDP function implementation.
-   The AMDP function implementation must be restricted to reads in declarations of the AMDP method using the addition [`AMDP OPTIONS READ-ONLY`](ABAPMETHODS_AMDP_OPTIONS.html) or in implementations of the AMDP method using the addition [`OPTIONS READ-ONLY`](ABAPMETHOD_BY_DB_PROC.html),
-   The AMDP function implementation cannot be [called](ABENMETHOD_CALLS.html) in ABAP like a regular method and cannot be used as a [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html) in a [functional method call](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html).

-   Calls from ABAP programs are not possible since the result set cannot be restricted using a `WHERE` condition.
-   Calls from non-AMDP-managed database procedures or database functions are possible - like for any database [table function](ABENTABLE_FUNCTION_GLOSRY.html) - but [not recommended](ABENDATABASE_ACCESS_RECOMM.html).

-   An AMDP function implementation for a CDS table function can only be declared in the public [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of a [static](ABENSTATIC_CLASS_GLOSRY.html) AMDP class. It is not possible in interfaces.
-   A special form of the statement [`CLASS-METHODS`](ABAPCLASS-METHODS.html) with the addition [`FOR TABLE FUNCTION`](ABAPCLASS-METHODS_FOR_TABFUNC.html) must be used for the declaration. This addition flags the [AMDP](ABENCDS_TABLE_FUNCTION_GLOSRY.html) function implementation as an implementation of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html).
-   The parameter interface of the AMDP function implementation is not declared using the statement `CLASS-METHODS`. Instead it is generated in accordance with the associated [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) using the statement [`DEFINE TABLE FUNCTION`](ABENCDS_F1_DEFINE_TABLE_FUNCTION.html) in the [ABAP CDS](ABENCDS_DDL_GLOSRY.html)\\ [CDS DDL](ABENABAP_CDS_GLOSRY.html):

-   The input parameters in the AMDP function implementation are determined by the [input parameters](ABENCDS_F1_FUNC_PARAMETER_LIST.html) of the CDS table function. Their names are used, and the ABAP types are derived from their Dictionary types. The input parameters are always elementary and not optional.
-   A return value with the type of a standard table is created with an empty table key named `result` with a structured row type. The components of the row type are determined by the [elements](ABENCDS_F1_RETURN_LIST.html) of the CDS table function. Their names are used, and the ABAP types are derived from their dictionary types. The row type corresponds to the structured data type represented by the CDS table function. In the case of a client-dependent CDS table function, the client column is also included.

-   as a [data source](ABAPSELECT_DATA_SOURCE.html) of ABAP SQL read statements in ABAP.
-   as a [data source](ABENCDS_DATA_SOURCE_V2.html) of [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html).
-   as a [data source](ABENCDS_DATA_SOURCE_V1.html) of [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of [ABAP CDS](ABENABAP_CDS_GLOSRY.html).

-   The row type of the return value `result` of an AMDP function implementation for a client-dependent CDS table function does not contain a client field, even though this field must be declared in the element list.
-   An AMDP function implementation can only be linked with a single CDS table function.
-   When an AMDP function implementation is created for a CDS table function, the CDS table function must already exist as an active function. When a new CDS table function is activated, an empty AMDP table function is created in the database. This function raises an exception if a non-AMDP access is performed. When the CDS table function is accessed by the ABAP runtime framework for the first time (for example, using ABAP SQL), the AMDP function implementation implements the empty AMDP table function. Other frameworks that evaluate CDS entities using their [annotations](ABENCDS_ANNOTATION_GLOSRY.html), however, can also cause the AMDP table function to be implemented. It is possible to access the table function in a native way only after the implementation.
-   Calls from non-AMDP-managed database procedures or database functions are possible - like for any database [table function](ABENTABLE_FUNCTION_GLOSRY.html) - but [not recommended](ABENDATABASE_ACCESS_RECOMM.html).

-   Functions that can only be accessed in other AMDP methods.
-   Functions that implement [CDS scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) and that can be used in operand positions of CDS entities.

-   The data type of the return value is [elementary](ABENELEMENTARY_DATA_TYPE_GLOSRY.html).
-   The data types of input parameters must also be elementary.
-   No class-based exceptions can be declared using [`RAISING`](ABAPMETHODS_GENERAL.html) in the interface of the AMDP function implementation for AMDP scalar functions.
-   An AMDP scalar function can be [called](ABENMETHOD_CALLS.html) in ABAP like a regular method and can be used as a [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html) in a [functional method call](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html).

-   It is possible for an [AMD scalar function](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html) to specify the database-specific option `DETERMINISTIC` after `OPTIONS`. This buffers the result of the function for the duration of a query. For further details, see topic [`METHOD`, `BY DATABASE PROCEDURE`, `FUNCTION`, `GRAPH WORKSPACE`](ABAPMETHOD_BY_DB_PROC.html).
-   These functions can be used in non-AMDP-managed database procedures or database functions, like any database [scalar function](ABENSCALAR_FUNCTION_GLOSRY.html), but this is not [recommended](ABENDATABASE_ACCESS_RECOMM.html).

-   An AMDP function implementation for a CDS scalar function can only be declared in the public [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of a [static](ABENSTATIC_CLASS_GLOSRY.html) AMDP class. It is not possible in interfaces.
-   A special form of the statement [`CLASS-METHODS`](ABAPCLASS-METHODS.html) with the addition [`FOR SCALAR FUNCTION`](ABAPCLASS-METHODS_FOR_SCALFUNC.html) must be used for the declaration. This addition flags the [AMDP](ABENCDS_TABLE_FUNCTION_GLOSRY.html) function implementation as an implementation of a [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html).
-   The parameter interface of the AMDP function implementation is not declared using the statement `CLASS-METHODS`. Instead it is generated in accordance with the associated [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) using the statement [`DEFINE SCALAR FUNCTION`](ABENCDS_DEFINE_SCALAR_FUNCTION.html) in the [ABAP CDS](ABENCDS_DDL_GLOSRY.html)\\ [CDS DDL](ABENABAP_CDS_GLOSRY.html):

-   The input parameters in the AMDP function implementation are determined by the input parameters of the CDS scalar function. Their names are used, and the ABAP types are derived from their Dictionary types. The input parameters are always elementary and not optional.
-   A return value with an elementary data type named `result` is created. Its data type is derived from the CDS scalar function definition.

-   An AMDP scalar function cannot be [called](ABENMETHOD_CALLS.html) in ABAP like a regular method. It cannot be used as a [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html) in a [functional method call](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html). Calls from other AMDP methods are not possible. AMDP scalar functions for CDS scalar functions can only be accessed using the name of their CDS entity, that is, the name of the CDS scalar function definition.

-   An AMDP function implementation can only be linked with a single CDS scalar function.
-   When an AMDP function implementation is created for a CDS scalar function, the CDS scalar function definition must already exist as an active function. When a new CDS scalar function definition is activated, an empty AMDP scalar function is created in the database. This function raises an exception if a non-AMDP access is performed. When the CDS scalar function is accessed by the ABAP runtime framework for the first time, the AMDP function implementation implements the empty AMDP scalar function. It is possible to access the scalar function in a native way only after the implementation.
-   Calls from non-AMDP-managed database procedures or database functions are, like any database [scalar function](ABENSCALAR_FUNCTION_GLOSRY.html), possible but [not recommended](ABENDATABASE_ACCESS_RECOMM.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_methods.html