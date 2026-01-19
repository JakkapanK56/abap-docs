---
title: "ABENAMDP_METHODS"
description: |
  ABENAMDP_METHODS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_METHODS.htm"
abapFile: "ABENAMDP_METHODS.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENAMDP", "METHODS"]
---

There are two types of AMDP methods, methods without a return value that define [AMDP procedures](ABENAMDP_PROCEDURE_GLOSRY.html) and methods with a return value that define [AMDP functions](ABENAMDP_FUNCTION_GLOSRY.html).

In AMDP classes, AMDP methods are flagged as follows:

The implementation of an AMDP method is stored in the [ABAP database schema](ABENABAP_DB_SCHEMA_GLOSRY.html) by the ABAP runtime framework. In an AMDP method, it is possible to access objects in the same database schema directly. The name of the current database schema need not and must not be specified here. If the correct authorization is granted, it is possible to access objects in a different database schema by specifying its name.

[Constructors](ABENCONSTRUCTOR_GLOSRY.html) cannot be implemented as AMDP methods.

-   [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHODS.html)
-   [AMDP function implementations](ABENAMDP_FUNCTION_METHODS.html)

-   In AMDP procedure implementations and AMDP function implementations that do not implement any [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) or [CDS scalar functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), flagging is not necessary in the declaration with [`METHODS`](ABAPMETHODS.html) or [`CLASS-METHODS`](ABAPCLASS-METHODS.html). However, an optional addition [`AMDP OPTIONS`](ABAPMETHODS_AMDP_OPTIONS.html) can be used to declare properties of the AMDP method.
-   An AMDP procedure implementation can be exposed to external SQL access using an [SQL service](ABENABAP_SQL_SERVICES_GLOSRY.html) and using the addition [`FOR SQL SERVICE`](ABAPCLASS-METHODS_FOR_SQL_SERVICE.html).
-   AMDP function implementations that implement [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) must be declared as static methods using `CLASS-METHODS`, and linked with the associated CDS table function using the addition [`FOR TABLE FUNCTION`](ABAPCLASS-METHODS_FOR_TABFUNC.html).
-   AMDP function implementations that implement [CDS scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) must be declared as static methods using `CLASS-METHODS`, and linked with the associated CDS scalar function using the addition [`FOR SCALAR FUNCTION`](ABAPCLASS-METHODS_FOR_SCALFUNC.html).
-   When implemented, all AMDP methods must be flagged using the statement `METHOD`.

-   AMDP procedure implementations with the addition [`BY DATABASE PROCEDURE`](ABAPMETHOD_BY_DB_PROC.html)
-   AMDP function implementations with the addition [`BY DATABASE FUNCTION`](ABAPMETHOD_BY_DB_PROC.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html