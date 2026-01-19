---
title: "ABENCDS_SQL_SCALAR_GLOSRY"
description: |
  ABENCDS_SQL_SCALAR_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SQL_SCALAR_GLOSRY.htm"
abapFile: "ABENCDS_SQL_SCALAR_GLOSRY.html"
keywords: ["method", "data", "ABENCDS", "SQL", "SCALAR", "GLOSRY"]
---

[CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) that is evaluated by an SQL environment. SQL-based scalar functions can be used in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) in operand positions that expect scalar values.

SQL-based scalar functions can be [user-defined functions](ABENCDS_USER_FUNC_GLOSRY.html) or [system functions](ABENCDS_SYSTEM_FUNC_GLOSRY.html).

A CDS scalar function consists of three development objects:

[**\-> More about**](ABENCDS_SQL_SCALAR_FUNCTION.html)

-   A [CDS entity](ABENCDS_ENTITY_GLOSRY.html) defined using [`DEFINE SCALAR FUNCTION`](ABENCDS_DEFINE_SCALAR_FUNCTION.html) in a [CDS data definition](ABENCDS_DATA_DEFINITION_GLOSRY.html).
-   A [scalar function implementation reference](ABENCDS_SCALAR_FUNC_IMPL_REF.html) that binds the scalar function to the SQL environment and to an [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html).
-   An [AMDP function](ABENAMDP_FUNCTION_GLOSRY.html) that implements the scalar function as [database function](ABENDATABASE_FUNCTION_GLOSRY.html).

ABENCDS\_GLOSSARY.html