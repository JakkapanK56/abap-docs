---
title: "ABENADBC_PROCEDURE"
description: |
  ABENADBC_PROCEDURE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENADBC_PROCEDURE.htm"
abapFile: "ABENADBC_PROCEDURE.html"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "ABENADBC", "PROCEDURE"]
---

[Stored procedures](ABENSTORED_PROCEDURE_GLOSRY.html) can be executed using the following instance method of the class `CL_SQL_STATEMENT`

The method has a mandatory input parameter `PROC_NAME` of type `string` to which the name of an existing stored procedure must be passed. Similar to [DML statements](ABENADBC_DDL_DML.html), it is possible to bind ABAP data objects as actual parameters to the formal parameters of the stored procedure using the method `SET_PARAM`. The type of parameter must be determined using the additional parameter `INOUT`. Possible values are defined in the constants `C_PARAM_IN`, `C_PARAM_OUT`, and `C_PARAM_INOUT` of the class `CL_SQL_STATEMENT`. `C_PARAM_IN` is the default value. The order of the calls determines the assignment to the formal parameters from left to right.

Use of ADBC to call an [SQLScript procedure](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) in the SAP HANA database managed using [AMDP](ABENAMDP_GLOSRY.html). Before the ADBC call, a method of the class `CL_AMDP_RUNTIME_SERVICES` must be used to ensure that the procedure exists on the database. This would not be necessary if the associated [AMDP](ABENAMDP_METHOD_GLOSRY.html) method were used for the call.

Call of a stored procedure of the SAP HANA database using the method [`EXECUTE_QUERY`](ABENADBC_QUERY.html). The stored procedure is an [AMDP](ABENAMDP_GLOSRY.html)\-managed [SQLScript procedure](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) with a tabular output parameter. The null value is bound to the output parameter to [create a temporary table](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f) for this parameter on the database. This table then can be linked to an internal table `result` using `SET_PARAM_TABLE`.

[ADBC, Stored Procedure](ABENADBC_PROCEDURE_ABEXA.html)

-   `EXECUTE_PROCEDURE`

-   The methods `SET_PARAM_STRUCT` and `SET_PARAM_TABLE` cannot be used. This means that structures and internal tables cannot be bound to actual parameters. On databases where this is allowed, a stored procedure can also be called using the method [`EXECUTE_QUERY`](ABENADBC_QUERY.html). This method makes it possible to bind internal tables to the result set. See the example below.
-   On the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), the stored procedures are [database procedures](ABENDATABASE_PROCEDURE_GLOSRY.html) written in [SQLScript](ABENSQL_SCRIPT_GLOSRY.html). In ABAP, the [ABAP Managed Database Procedures (AMDP)](ABENAMDP.html) are available for managing and calling these stored procedures. The special statement [`CALL DATABASE PROCEDURE`](ABAPCALL_DATABASE_PROCEDURE.html) makes it possible to access them using a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html).
-   `EXECUTE_PROCEDURE` can be used to call procedures with input and output parameters but cannot be used to call functions with return values. In SQL, functions are used directly in suitable operand positions.
-   When parameters are passed, [mapping](ABENNATIVE_SQL_TYPE_MAPPING.html) takes place between the ABAP types and the database types. The ABAP types should match the database types. If they do not match, conversions must be made in the Native SQL interface. These conversions are platform-dependent and can raise exceptions.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nIF cl\_db\_sys=>is\_in\_memory\_db = abap\_false. \\n RETURN. \\nENDIF. \\nTRY. \\n cl\_amdp\_runtime\_services=>prepare\_method\_for\_call( \\n \`CL\_DEMO\_AMDP=>INCREASE\_PRICE\` ). \\n CATCH cx\_amdp\_runtime\_services. \\n RETURN. \\nENDTRY. \\n\\ \\nDATA incprice TYPE sflight-price VALUE '0.5'. \\nTRY. \\n FINAL(sql) = NEW cl\_sql\_statement( ). \\n sql->set\_param( data\_ref = REF #( sy-mandt ) \\n inout = cl\_sql\_statement=>c\_param\_in ). \\n sql->set\_param( data\_ref = REF #( incprice ) \\n inout = cl\_sql\_statement=>c\_param\_in ). \\n sql->execute\_procedure( \\n proc\_name = '"CL\_DEMO\_AMDP=>INCREASE\_PRICE"' ). \\n out->write( \`Price increased successfully\` ). \\n CATCH cx\_sql\_exception INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nIF cl\_db\_sys=>is\_in\_memory\_db = abap\_false. \\n RETURN. \\nENDIF. \\nTRY. \\n cl\_amdp\_runtime\_services=>prepare\_method\_for\_call( \\n \`CL\_DEMO\_AMDP\_SCARR=>SELECT\_SCARR\` ). \\n CATCH cx\_amdp\_runtime\_services. \\n RETURN. \\nENDTRY. \\n\\ \\nDATA result TYPE cl\_demo\_amdp\_scarr=>scarr\_tab. \\nTRY. \\n FINAL(query\_result) = NEW cl\_sql\_statement( \\n )->execute\_query( statement = \\n \`CALL "CL\_DEMO\_AMDP\_SCARR=>SELECT\_SCARR"( '\` && \\n sy-mandt && \`', NULL )\` ). \\n query\_result->set\_param\_table( itab\_ref = REF #( result ) ). \\n query\_result->next\_package( ). \\n query\_result->close( ). \\n out->write( result ). \\n CATCH cx\_sql\_exception INTO FINAL(exc). \\n out->write( |Exception\\\\n\\{ exc->get\_text( ) \\n \\}\\\\n\\{ exc->sql\_message \\}| ). \\n RETURN. \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abennative\_sql\_obsolete.html abenadbc.html abencl\_sql\_statement.html