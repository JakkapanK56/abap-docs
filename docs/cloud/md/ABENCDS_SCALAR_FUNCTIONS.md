---
title: "ABENCDS_SCALAR_FUNCTIONS"
description: |
  ABENCDS_SCALAR_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SCALAR_FUNCTIONS.htm"
abapFile: "ABENCDS_SCALAR_FUNCTIONS.html"
keywords: ["while", "if", "case", "method", "data", "ABENCDS", "SCALAR", "FUNCTIONS"]
---

A [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) is defined in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html) using the statement [`DEFINE SCALAR FUNCTION`](ABENCDS_DEFINE_SCALAR_FUNCTION.html). A CDS scalar function is a user-defined [CDS function](ABENCDS_FUNCTION_GLOSRY.html) that returns a scalar (that means [elementary](ABENELEMENTARY_DATA_TYPE_GLOSRY.html)) return value.

There are [analytical scalar functions](ABENCDS_ANA_SCALAR_GLOSRY.html) and [SQL-based scalar functions](ABENCDS_SQL_SCALAR_GLOSRY.html).

CDS scalar functions can be released as stable APIs under the [C1 release contract for system internal use](ABENC1_CONTRACT_GLOSRY.html).

-   [Analytical scalar functions](ABENCDS_ANA_SCALAR_GLOSRY.html)

-   Evaluated by an analytical runtime environment, such as the [ABAP Analytical Engine](ABENABAP_AE_GLOSRY.html).
-   The [scalar function implementation reference](ABENCDS_DSFI_GLOSRY.html) has the suffix `_ANA`.
-   Can be used in [CDS analytical projection views](ABENCDS_ANALYTICAL_PV_GLOSRY.html) like built-in functions in operand positions that expect scalar values.
-   Analytical scalar functions can only be defined internally at SAP. They are available for internal and external use in [CDS analytical queries](ABENCDS_ANALYTIC_QUERY_GLOSRY.html).
-   For a list of analytical scalar functions delivered by SAP, see [ABAP CDS - Analytical Scalar Functions](ABENCDS_ANA_SCALAR_FUNCTION.html).

-   [SQL-based scalar functions](ABENCDS_SQL_SCALAR_GLOSRY.html)

-   Evaluated by an SQL environment.
-   The scalar function implementation reference has the suffix `_SQL`.
-   Can be used in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) in operand positions that expect scalar values, similar to [built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html).
-   An SQL-based scalar function consists of three development objects:
-   \- A [scalar function definition](ABENCDS_DSFD_GLOSRY.html) defined using [`DEFINE SCALAR FUNCTION`](ABENCDS_DEFINE_SCALAR_FUNCTION.html) in a [CDS function definition](ABENCDS_FUNCTION_DEFINITION_GLOSRY.html).
-   \- A [scalar function implementation reference](ABENCDS_SCALAR_FUNC_IMPL_REF.html) that binds the scalar function to the SQL environment and to an [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html). The scalar function implementation reference is defined in a form-based editor in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html).
-   \- An [AMDP function](ABENAMDP_FUNCTION_GLOSRY.html) implementation where it is implemented using [SQLScript](ABENSQL_SCRIPT_GLOSRY.html) in a special [AMDP method](ABENAMDP_METHOD_GLOSRY.html).

-   When creating a CDS scalar function, first the CDS scalar function definition must be activated, then the scalar function implementation reference must be activated, and finally the associated [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) is created.
-   When a CDS scalar function is transported, first the CDS scalar function definition is transported at the same time as the dictionary transport objects, and then the AMDP function implementation is transported as part of the ABAP transport objects. Depending on the size of the transport, there may be a significant delay between these two phases during which the CDS scalar function is not in a usable state.
-   [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) and CDS scalar functions are both implemented in an [AMDP method](ABENAMDP_METHOD_GLOSRY.html) as an [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html). The differences between CDS table functions and CDS scalar functions are as follows:

-   CDS scalar functions return an elementary value, while CDS table functions return a tabular result type.
-   Different use cases:
-   \- CDS table functions are used as a data sources in other CDS entities or in ABAP SQL read statements.
-   \- CDS scalar functions can be used in the same way as built-in functions, i.e. in operand positions that expect scalar values. Before the introduction of CDS scalar functions, users could define [AMDP scalar functions](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html), but they were not available in CDS entities. CDS scalar functions make scalar functions defined in AMDP known to [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) and available in ABAP CDS.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_fdl.html