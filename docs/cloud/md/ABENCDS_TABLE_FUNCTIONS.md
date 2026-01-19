---
title: "ABENCDS_TABLE_FUNCTIONS"
description: |
  ABENCDS_TABLE_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_TABLE_FUNCTIONS.htm"
abapFile: "ABENCDS_TABLE_FUNCTIONS.html"
keywords: ["select", "do", "while", "if", "case", "method", "class", "data", "types", "internal-table", "ABENCDS", "TABLE", "FUNCTIONS"]
---

A CDS table function is defined in the [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) of a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html) in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html) using the statement [`DEFINE TABLE FUNCTION`](ABENCDS_F1_DEFINE_TABLE_FUNCTION.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of the [ABAP Core Data Services (CDS)](ABENCDS.html). A CDS table function includes the following:

A CDS table function is client-dependent by default and [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) is applied in ABAP SQL reads.

CDS table functions are [CDS SQL entities](ABENCDS_SQL_ENTITY_GLOSRY.html).

For more information about CDS table functions, see [*CDS Table Functions*](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/ed4c5fc6d3fd43ebb355f12aa1e73757?version=sap_cross_product_abap) in the ABAP Data Models guide on SAP Help Portal.

-   The [CDS entity](ABENCDS_ENTITY_GLOSRY.html)
-   A CDS table function is declared as a CDS entity `table_function` using the statement [`DEFINE TABLE_FUNCTION`](ABENCDS_F1_DEFINE_TABLE_FUNCTION.html). As a global data type, the CDS entity represents a structured type with the [elements of the CDS table function](ABENCDS_F1_RETURN_LIST.html) as components and can be used like any [CDS entity](ABENCDS_ENTITY_GLOSRY.html).

-   In ABAP CDS, the CDS entity can be used as a data source of other CDS entities.
-   In ABAP, the CDS entity can be used as a data type and in ABAP SQL read statements.
-   The CDS entity cannot be used as a data type for definitions of [dictionary objects](ABENDICTIONARY_OBJECT_GLOSRY.html).

-   A CDS table function is located in the namespace of all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.
-   An [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html)
-   CDS table functions are implemented in platform-dependent SQL in a special [AMDP method](ABENAMDP_METHOD_GLOSRY.html) and the implementation is managed as an [AMDP table function](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) by the [AMDP](ABENAMDP_GLOSRY.html) in the database system.
-   The AMDP method is specified after the addition `IMPLEMENTED BY` in the definition of the CDS table function using [`DEFINE TABLE_FUNCTION`](ABENCDS_F1_DEFINE_TABLE_FUNCTION.html). It must be declared as a special [AMDP function implementation](ABENAMDP_FUNCTION_METHODS.html) for exactly one CDS table function using the addition [`FOR TABLE FUNCTION`](ABAPCLASS-METHODS_FOR_TABFUNC.html).
-   The parameter interface of the AMDP table function is defined using the [input parameters](ABENCDS_F1_FUNC_PARAMETER_LIST.html) and the [element list](ABENCDS_F1_RETURN_LIST.html) of the CDS table function.

-   CDS table functions can only be used in a database system that supports [AMDP](ABENAMDP_GLOSRY.html).
-   When a CDS table function is created, the CDS entity must be activated first, before the associated [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) is created.
-   When a CDS table function is transported, the CDS entity is first transported at the same time as the dictionary transport objects and then the AMDP function implementation as part of the ABAP transport objects. Depending on the size of the transport, there can be a considerable delay between these two phases where the CDS table function is not in a usable state.
-   CDS table functions and [CDS scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) are both implemented in an [AMDP method](ABENAMDP_METHOD_GLOSRY.html) as an [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html). The differences between CDS table functions and CDS scalar functions are as follows:

-   CDS scalar functions return an elementary value, while CDS table functions return a tabular result type.
-   Different use cases:
-   \- CDS table functions are used as a data source in other CDS entities or in ABAP SQL read statements.
-   \- CDS scalar functions can be used in the same way as built-in functions, i.e. in operand positions that expect scalar values. Before the introduction of CDS scalar functions, users could define [AMDP scalar functions](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html), but they were not available in CDS entities. CDS scalar functions make scalar functions defined in AMDP known to [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) and available in ABAP CDS.

-   CDS table functions cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). An ABAP SQL statement that accesses a CDS table function bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html