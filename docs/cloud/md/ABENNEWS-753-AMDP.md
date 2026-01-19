---
title: "ABENNEWS-753-AMDP"
description: |
  ABENNEWS-753-AMDP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-753-AMDP.htm"
abapFile: "ABENNEWS-753-AMDP.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENNEWS", "753", "AMDP"]
---

[1\. AMDP Scalar Functions](#ABAP_MODIFICATION_1@4@)

[2\. Restrictions Removed](#ABAP_MODIFICATION_2@4@)

[3. Option `CDS SESSION CLIENT` Mandatory](#ABAP_MODIFICATION_3@4@)

[AMDP](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html) scalar functions are now supported alongside [AMDP table functions](ABENAMDP_TABLE_FUNCTION_GLOSRY.html). The [AMDP function implementation](ABENAMDP_FUNCTION_METHODS.html) of an AMDP scalar function has an elementary return value and can be used in ABAP like a regular function method.

In the implementation of [AMDP scalar functions](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html), it is possible to specify the database-specific option [`DETERMINISTIC`](ABAPMETHOD_BY_DB_PROC.html) after `OPTIONS`. This buffers the result of the function for the duration of a query.

The following restrictions were removed:

The option [`CDS SESSION CLIENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) is now mandatory when an AMDP method accesses the [CDS managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a [CDS view](ABENCDS_VIEW_GLOSRY.html) whose [client handling](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) is determined by the annotation [`@ClientHandling.algorithm: #SESSION_VARIABLE`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html). If this option is not specified in this case, a syntax error occurs. The option sets the [session variable](ABENSESSION_VARIABLE_GLOSRY.html) of the database that can be addressed under the name [`$session.client`](ABENCDS_SESSION_VARIABLE_V1.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of the [ABAP CDS](ABENABAP_CDS_GLOSRY.html) to a particular value when the method is called from ABAP. An exception of the class `CX_AMDP_CDS_CLIENT_MISMATCH` can now no longer be raised.

-   Tabular input parameters are now allowed in [AMDP function implementations](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) for [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html). Previously, only elementary input parameters were allowed. In AMDP function implementations for [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html), however, the restriction that only elementary input parameters are allowed still applies.
-   Tabular input parameters of [AMDP procedure implementations](ABENAMDP_PROCEDURE_METHOD_GLOSRY.html) and of [AMDP function implementations](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) can now be made optional using [`OPTIONAL`](ABAPMETHODS_PARAMETERS.html), but it is still not possible to specify a start value with [`DEFAULT`](ABAPMETHODS_PARAMETERS.html).
-   When a replacement parameter declared using [`DEFAULT`](ABAPMETHODS_GENERAL.html) is specified for an elementary input parameter of an [AMDP method](ABENAMDP_METHODS.html), the following (previously undocumented) restrictions were lifted:

-   Constants declared using the addition [`VALUE IS INITIAL`](ABAPDATA_OPTIONS.html) can now be specified for the data types `d`, `t`, and `x`. This previously produced a syntax error.
-   Constants declared using the addition [`VALUE '00010101'`](ABAPDATA_OPTIONS.html) can now be specified for the data type `d`, or the literal `'00010101'` can be specified directly. Both previously produced a syntax error.
-   Constants declared by specifying numeric literals after [`VALUE`](ABAPDATA_OPTIONS.html) and whose lengths are not precisely 8 or 6 can now be specified for the data types `d` and `t`. This previously produced a syntax error. Until now, values of literals with lengths of precisely 8 or 6 were handled like a string. This incorrect behavior was also modified and the numeric value is handled as the number of days since 01.01.001 or as the number of seconds since 00:00:00. This modification is incompatible if an [AMDP procedure](ABENAMDP_PROCEDURE_GLOSRY.html) or [function](ABENAMDP_FUNCTION_GLOSRY.html) with an input parameter of this type is called from other [database procedures](ABENDATABASE_PROCEDURE_GLOSRY.html) or [functions](ABENDATABASE_FUNCTION_GLOSRY.html) without an actual parameter being assigned to the parameter in question.

-   In AMDP methods, the addition `DEFAULT` now behaves in the same way as in regular methods. It still cannot be specified for the data types `string`, `xstring`, `decfloat16`, and `decfloat34`, however, and no literals can be specified that cannot be converted into the data type of the input parameter.

abenabap.html abennews.html abennews-75.html abennews-753.html