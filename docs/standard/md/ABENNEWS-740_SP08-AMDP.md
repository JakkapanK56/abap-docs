---
title: "ABENNEWS-740_SP08-AMDP"
description: |
  ABENNEWS-740_SP08-AMDP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP08-AMDP.htm"
abapFile: "ABENNEWS-740_SP08-AMDP.html"
keywords: ["do", "if", "catch", "method", "class", "data", "ABENNEWS", "740", "SP08", "AMDP"]
---

[1. Tabular `CHANGING` Parameters for SQLScript Procedures](#ABAP_MODIFICATION_1@4@) 

[2\. Catchable Exceptions in AMDP Procedure Implementations](#ABAP_MODIFICATION_2@4@)

[3\. AMDP BAdIs](#ABAP_MODIFICATION_3@4@)

[4\. Service Connections](#ABAP_MODIFICATION_4@4@)

[5\. Suppressing Syntax Error Messages](#ABAP_MODIFICATION_5@4@)

[6\. Support for the Language L on SAP HANA](#ABAP_MODIFICATION_6@4@)

In ABAP release 7.40, SP08, the restriction that [SQLScript procedures](ABENAMDP_HDB_SQLSCRIPT.html) managed using [AMDP](ABENAMDP_GLOSRY.html) cannot have tabular input/output parameters is lifted. The technical restriction that SQLScript procedures do not support `INOUT` parameters is bypassed by generating a pair of `IN` and `OUT` parameters. Here, the `OUT` parameter is assigned the value of the `IN` parameter at the start of the procedure and hence can be used like an `INOUT` parameter.

From ABAP release 7.40, SP08, the exception classes specified under [AMDP - Exceptions](ABENAMDP_EXCEPTIONS.html) can be declared in the interface of an [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) using `RAISING` and handled when the method is called. Before ABAP release 7.40, SP08, the exception situations in question raised an uncatchable exception and always produced a runtime error.

From ABAP release 7.40, SP08, special [AMDP BAdIs](ABENAMDP_BADI_GLOSRY.html) were introduced for [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html). These apply the effect of the switches from [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html) to the implementation of database procedures in the current database. When an [AMDP procedure](ABENAMDP_PROCEDURE_GLOSRY.html) calls an AMDP procedure managed by an AMDP BAdI, the implementation is executed that matches the current switch setting.

In ABAP release 7.40, SP08, an input parameter with the previously invalid parameter name `connection` can be created for an [AMDP procedure implementation](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) to create a [database connection](ABENDATABASE_CONNECTION_GLOSRY.html) explicitly. Only the standard connection or service connections `R/3*name` to the [standard database](ABENSTANDARD_DB_GLOSRY.html) can be used.

When an AMDP method is implemented after the addition `OPTIONS` of the statement [`METHOD`](ABAPMETHOD_BY_DB_PROC.html), the new option `SUPPRESS SYNTAX ERRORS` can be specified (for internal use at SAP only). This suppresses any syntax errors caused by database objects addressed in the AMDP procedure but that do not yet exist in the syntax check.

For internal use at SAP only, [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) can be implemented in SAP's own low-level programming language [`L`](ABENLLANG_GLOSRY.html). See [AMDP - L for the SAP HANA Database](ABENAMDP_HDB_L_INTERNAL.html).

abenabap.html abennews.html abennews-740.html abennews-740\_sp08.html