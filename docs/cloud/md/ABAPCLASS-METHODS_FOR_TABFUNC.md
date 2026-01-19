---
title: "ABAPCLASS-METHODS_FOR_TABFUNC"
description: |
  ABAPCLASS-METHODS_FOR_TABFUNC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCLASS-METHODS_FOR_TABFUNC.htm"
abapFile: "ABAPCLASS-METHODS_FOR_TABFUNC.html"
keywords: ["if", "method", "class", "data", "types", "ABAPCLASS", "METHODS", "FOR", "TABFUNC"]
---

`CLASS-METHODS meth FOR TABLE FUNCTION cds_tabfunc.`

This statement declares the [static method](ABENSTATIC_METHOD_GLOSRY.html)\\ `meth` as an [AMDP function implementation](ABENCDS_TABLE_FUNCTION_GLOSRY.html) that implements a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html)\\ `cds_tabfunc` as an [AMDP table function](ABENAMDP_TABLE_FUNCTION_GLOSRY.html). This statement can only be specified in the [public](ABENPUBLIC_GLOSRY.html)\\ [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of an [AMDP class](ABENAMDP_CLASSES.html) and not in an interface. The method must be implemented using the addition [`BY DATABASE FUNCTION`](ABAPMETHOD_BY_DB_PROC.html) of the statement `METHOD`.

`cds_tabfunc` expects a CDS table function defined using the statement [`DEFINE TABLE FUNCTION`](ABENCDS_F1_DEFINE_TABLE_FUNCTION.html) in the [ABAP CDS](ABENABAP_CDS_GLOSRY.html)\\ [CDS DDL](ABENCDS_DDL_GLOSRY.html). This CDS entity must refer to the current class and the method `meth` after the addition `IMPLEMENTED BY METHOD`.

No other additions are possible. The interface parameters in the AMDP function implementation are added to the CDS table function as follows:

The client handling of an AMDP method that implements a CDS table function is governed by the [client handling](ABENCDS_FUNC_CLIENT_HANDLING.html) of the table function. Refer to [Client Handling/`USING` Matrices](ABENAMDP_CALL_MATRICES.html#@@ITOC@@ABENAMDP_CALL_MATRICES_2).

-   Mandatory input parameters of the AMDP function implementation are generated from the [input parameters](ABENCDS_F1_FUNC_PARAMETER_LIST.html) of the CDS table function. The names are copied, and the ABAP types are derived from the dictionary types.
-   A return value of the type of a standard table with an empty table key with the name `result` with a structured row type is generated from the [elements](ABENCDS_F1_RETURN_LIST.html) of the CDS table function. The names of the components of the row type correspond to the names of the elements and the data types are derived from their dictionary types.

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_methods.html