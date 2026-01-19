---
title: "ABAPCLASS-METHODS_FOR_SCALFUNC"
description: |
  ABAPCLASS-METHODS_FOR_SCALFUNC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCLASS-METHODS_FOR_SCALFUNC.htm"
abapFile: "ABAPCLASS-METHODS_FOR_SCALFUNC.html"
keywords: ["if", "method", "class", "data", "types", "ABAPCLASS", "METHODS", "FOR", "SCALFUNC"]
---

`CLASS-METHODS meth FOR SCALAR FUNCTION cds_scalar_func.`

This statement declares the [static method](ABENSTATIC_METHOD_GLOSRY.html)\\ `meth` as an [AMDP function implementation](ABENCDS_TABLE_FUNCTION_GLOSRY.html) that implements a CDS scalar function `cds_scalar_func` as an [AMDP scalar function](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html). This statement can only be specified in the [public](ABENPUBLIC_GLOSRY.html)\\ [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of an [AMDP class](ABENAMDP_CLASSES.html) and not in an interface. The method must be implemented using the addition [`BY DATABASE FUNCTION`](ABAPMETHOD_BY_DB_PROC.html) of the statement `METHOD`.

`cds_scalar_func` expects a [CDS scalar function](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) defined using the statement [`DEFINE SCALAR FUNCTION`](ABENCDS_DEFINE_SCALAR_FUNCTION.html) in the [ABAP CDS](ABENABAP_CDS_GLOSRY.html)\\ [CDS DDL](ABENCDS_DDL_GLOSRY.html). This function must have a [CDS scalar function implementation reference](ABENCDS_SCALAR_FUNC_IMPL_REF.html) of type *SQL* and the current class as well as the method `meth` must be specified in the field `AMDP Reference` of the [CDS scalar function implementation reference](ABENCDS_DSFI_GLOSRY.html).

No other additions are possible. The interface parameters of the AMDP function implementation are derived from the [CDS scalar function definition](ABENCDS_DSFD_GLOSRY.html) as follows:

Client-handling has not yet been implemented for CDS scalar functions and therefore, only client-independent objects can be accessed in the AMDP method that implements the scalar function.

For an example for the definition, implementation, and use of a CDS scalar function, see the topic [CDS DDL - `DEFINE SCALAR FUNCTION`](ABENCDS_DEFINE_SCALAR_FUNCTION.html).

-   The input parameters of the CDS scalar function are generated as mandatory input parameters of the AMDP function implementation. The names are copied, and the ABAP types are derived from the specified types.
-   The return value of the CDS scalar function is generated as return value. It has the data type specified in the CDS scalar function definition. The name of this return variable is `result`. This name is not part of the method signature.

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_methods.html