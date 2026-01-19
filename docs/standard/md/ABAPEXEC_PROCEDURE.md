---
title: "ABAPEXEC_PROCEDURE"
description: |
  ABAPEXEC_PROCEDURE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXEC_PROCEDURE.htm"
abapFile: "ABAPEXEC_PROCEDURE.html"
keywords: ["update", "do", "if", "try", "catch", "data", "ABAPEXEC", "PROCEDURE"]
---

`EXEC SQL.`\\ 
  `EXECUTE PROCEDURE proc ( IN    p_in1,    IN    p_in2, ...`\\ 
                           `OUT   p_out1,   OUT   p_out2, ...`\\ 
                           `INOUT p_inout1, INOUT p_inout2, ... )`\\ 
`ENDEXEC.`

In database systems, procedures can be defined as [stored procedures](ABENSTORED_PROCEDURE_GLOSRY.html). Since the syntax for calling this type of procedure and the associated parameter passing can vary widely for various database systems, a uniform statement exists in statically embedded [Native SQL](ABENNATIVE_SQL_GLOSRY.html).

The statement `EXECUTE PROCEDURE` calls a procedure `proc` stored in the database. For all formal parameters of the procedure, actual parameters separated by commas must be specified. `IN`, `OUT`, or `INOUT` must be specified in front of every actual parameter, to indicate whether the parameter is an input, output, or input/output parameter. Literals or [host variables](ABAPEXEC_HOST.html) indicated by colons (`:`) can be used for the actual parameters.

Definition of a procedure `abap_docu_demo_incprice` using database-specific SQL statements and calling the procedure with the SAP-specific Native SQL statement `EXECUTE PROCEDURE.` The execution of the program section increases the price of every flight for the [current client](ABENCURRENT_CLIENT_GLOSRY.html) in the table `SFLIGHT` by a specific amount. See also the corresponding executable [example for ADBC](ABENADBC_PROCEDURE_ABEXA.html).

-   On the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), the stored procedures are [database procedures](ABENDATABASE_PROCEDURE_GLOSRY.html) written in [SQLScript](ABENSQL_SCRIPT_GLOSRY.html). In ABAP, these procedures can be managed and called using [ABAP Managed Database Procedures (AMDP)](ABENAMDP.html) and the special statement [`CALL DATABASE PROCEDURE`](ABAPCALL_DATABASE_PROCEDURE.html). This statement enables access using a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html).
-   `EXECUTE PROCEDURE` can be used to call procedures with input and output parameters but cannot be used to call functions with return values. In SQL, functions are used directly in suitable operand positions (see [Executable Example](ABENEXEC_SQL_DB_FUNCTION_ABEXA.html)).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA incprice TYPE sflight-price VALUE '0.5'. \\ncl\_demo\_input=>request( CHANGING field = incprice ). \\n\\ \\nTRY. \\n EXEC SQL. \\n DROP PROCEDURE abap\_docu\_demo\_incprice; \\n ENDEXEC. \\n CATCH cx\_sy\_native\_sql\_error. \\nENDTRY. \\n\\ \\nTRY. \\n EXEC SQL. \\n CREATE PROCEDURE \\n abap\_docu\_demo\_incprice ( IN inc DECIMAL(15,2), \\n IN clnt NVARCHAR(3) ) AS \\n BEGIN \\n UPDATE sflight SET price = price + inc \\n WHERE mandt = clnt; \\n END; \\n ENDEXEC. \\n EXEC SQL. \\n EXECUTE PROCEDURE abap\_docu\_demo\_incprice ( IN :incprice, \\n IN :sy-mandt ) \\n ENDEXEC. \\n CATCH cx\_sy\_native\_sql\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abennativesql.html abapexec.html