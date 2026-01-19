---
title: "ABENCDS_SCALAR_FUNC_IMPL_REF"
description: |
  ABENCDS_SCALAR_FUNC_IMPL_REF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_SCALAR_FUNC_IMPL_REF.htm"
abapFile: "ABENCDS_SCALAR_FUNC_IMPL_REF.html"
keywords: ["do", "if", "method", "class", "types", "ABENCDS", "SCALAR", "FUNC", "IMPL", "REF"]
---

A [CDS scalar function implementation reference](ABENCDS_DSFI_GLOSRY.html) is a [CDS object](ABENCDS_OBJECT_GLOSRY.html) defined in a form-based tool in [ABAP Development Tool (ADT)](ABENADT_GLOSRY.html) that binds a [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) to an implementation in a specific runtime environment. A scalar function can have multiple scalar function implementation references, but not more than one per runtime environment.

The name of a scalar function implementation reference must be identical to the name of the scalar function definition and have a suffix that matches its implementation type. The suffix `_SQL` is mandatory for the implementation type *SQL* and the suffix `_ANA` is mandatory for the implementation type *Analytical*.

The following types of scalar function implementation references are currently available:

For details on how to create scalar function implementation references, see [*Creating a CDS Scalar Function Implementation Reference*](https://help.sap.com/docs/ABAP_Cloud/c22b59d4c9314104b4a448f3d30ee2e3/aa72593b4a3a4f5386c70e07ec26674b?version=sap_cross_product_abap) in the ABAP CDS Development Tools user guide on SAP Help Portal.

-   Analytical

-   Binds the CDS scalar function in question to an analytical runtime environment, such as the [ABAP Analytical Engine](ABENABAP_AE_GLOSRY.html).
-   The name of the scalar function implementation reference must have the suffix `_ANA`.
-   [Analytical scalar functions](ABENCDS_ANA_SCALAR_GLOSRY.html) can only be defined internally at SAP. Customers can use the SAP-delivered [analytical scalar functions](ABENCDS_ANA_SCALAR_GLOSRY.html). For a complete list of SAP-delivered analytical scalar functions, see [ABAP CDS - Analytical Scalar Functions](ABENCDS_ANA_SCALAR_FUNCTION.html).

-   SQL

-   Binds the CDS scalar function in question to an SQL environment.
-   The name of the scalar function implementation must have the suffix `_SQL`.
-   [SQL-based scalar functions](ABENCDS_SQL_SCALAR_GLOSRY.html) require an [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html). This AMDP function implementation is also specified in the scalar function implementation reference in the following format: `ClassName`\=>`MethodName`.

abenabap.html abencds.html abencds\_fdl.html abencds\_functions.html abencds\_scalar\_functions.html