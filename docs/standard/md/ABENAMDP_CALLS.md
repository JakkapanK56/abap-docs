---
title: "ABENAMDP_CALLS"
description: |
  ABENAMDP_CALLS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_CALLS.htm"
abapFile: "ABENAMDP_CALLS.html"
keywords: ["update", "do", "if", "case", "method", "class", "data", "types", "ABENAMDP", "CALLS"]
---

AMDP methods can be used in ABAP programs as follows:

Before the method is used for the first time, the ABAP runtime framework creates the procedure or function implemented in the AMDP method in the database system of the standard AS ABAP database or, if necessary, updates any existing database procedure or database function. Execution takes place in the database system and the interface parameters are passed from the [Native SQL interface](ABENNATIVE_SQL_INTERFACE_GLOSRY.html) to the database system or adopted by the database system itself.

Once a database procedure or database function managed using AMDP has been created on the database, this procedure can be used in other database procedures or database functions using the database syntax if the database allows this type of access. The calls can take place from other AMDP procedures or AMDP functions and also database procedures or database functions not managed by AMDP. If an AMDP procedure or function uses a different AMDP procedure or function, this procedure must be specified after the addition [`USING`](ABAPMETHOD_BY_DB_PROC.html) of the calling method.

-   [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHODS.html)
-   An AMDP procedure implementation is called from an ABAP program in the same way as any other ABAP Objects method.
-   [AMDP function implementations](ABENAMDP_FUNCTION_METHODS.html)

-   An AMDP function implementation for an [AMDP scalar function](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html) is called in an ABAP program in the same way as any regular [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html).
-   In an ABAP program, an AMDP function implementation for an [AMDP table function](ABENAMDP_TABLE_FUNCTION_GLOSRY.html) is used by accessing an assigned [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html) in an ABAP SQL read statement.

-   A prerequisite is that the [standard database](ABENSTANDARD_DB_GLOSRY.html) of the current AS ABAP is managed by the database system for which the AMDP method is implemented. If not, a runtime error is produced.

-   For the caller of an AMDP procedure implementation from ABAP, it is usually transparent whether the method is an AMDP method and in which database system it is executed. For this reason, the implementation of the method must ensure that the interface parameters are returned in a format expected by the caller. This applies in particular to ABAP types for which there is no equivalent type in the type system of the database system. These types must either not be offered in the interface or an appropriate casting must take place in the procedure.
-   Generally, the database procedures and database functions managed using AMDP are called using AMDP methods from ABAP or in ABAP SQL.
-   It is recommended that AMDP procedure implementations that are not intended to be called from the AMDP methods of other classes are created as private methods of an AMDP class and that they are called in a regular method depending on the standard AS ABAP database.
-   In database systems that do not support AMDP, a regular method can be created using an alternative implementation in ABAP SQL or Native SQL.
-   It is [not advisable](ABENDATABASE_ACCESS_RECOMM.html) to make calls of AMDP-managed database procedures or database functions from non-AMDP-managed database objects or by using Native SQL. If, in exceptional cases, calls like this are necessary, all required database objects must exist. The public methods of the documented class `CL_AMDP_RUNTIME_SERVICES` can be used to do this (see [ADBC, Stored Procedures](ABENADBC_PROCEDURE.html)).
-   The constant `CALL_AMDP_METHOD` of the class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html) can be used to query whether the current database supports AMDP procedures.

abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html