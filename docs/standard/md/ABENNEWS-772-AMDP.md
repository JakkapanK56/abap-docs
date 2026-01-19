---
title: "ABENNEWS-772-AMDP"
description: |
  ABENNEWS-772-AMDP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-772-AMDP.htm"
abapFile: "ABENNEWS-772-AMDP.html"
keywords: ["do", "if", "method", "data", "types", "ABENNEWS", "772", "AMDP"]
---

[1\. AMDP Scalar Functions](#ABAP_MODIFICATION_1@4@)

[2\. Restrictions Removed](#ABAP_MODIFICATION_2@4@)

[AMDP](ABENAMDP_SCALAR_FUNCTION_GLOSRY.html) scalar functions are now supported alongside [AMDP table functions](ABENAMDP_TABLE_FUNCTION_GLOSRY.html). The [AMDP function implementation](ABENAMDP_FUNCTION_METHODS.html) of an AMDP scalar function has an elementary return value and can be used in ABAP like a regular function method.

When a replacement parameter declared using [`DEFAULT`](ABAPMETHODS_GENERAL.html) is specified for an elementary input parameter of an [AMDP method](ABENAMDP_METHODS.html), the following (previously undocumented) restrictions were lifted:

In AMDP methods, the addition `DEFAULT` now behaves in the same way as in regular methods. It still cannot be specified for the data types `string`, `xstring`, `decfloat16`, and `decfloat34`, however, and no literals can be specified that cannot be converted into the data type of the input parameter.

-   Constants declared using the addition [`VALUE IS INITIAL`](ABAPDATA_OPTIONS.html) can now be specified for the data types `d`, `t`, and `x`. This previously produced a syntax error.
-   Constants declared using the addition [`VALUE '00010101'`](ABAPDATA_OPTIONS.html) can now be specified for the data type `d`, or the literal `'00010101'` can be specified directly. Both previously produced a syntax error.
-   Constants declared by specifying numeric literals after [`VALUE`](ABAPDATA_OPTIONS.html) and whose lengths are not precisely 8 or 6 can now be specified for the data types `d` and `t`. This previously produced a syntax error. Until now, values of literals with lengths of precisely 8 or 6 were handled like a string. This incorrect behavior was also modified and the numeric value is handled as the number of days since 01.01.001 or as the number of seconds since 00:00:00. This modification is incompatible if an [AMDP procedure](ABENAMDP_PROCEDURE_GLOSRY.html) or [function](ABENAMDP_FUNCTION_GLOSRY.html) with an input parameter of this type is called from other [database procedures](ABENDATABASE_PROCEDURE_GLOSRY.html) or [functions](ABENDATABASE_FUNCTION_GLOSRY.html) without an actual parameter being assigned to the parameter in question.

abenabap.html abennews.html abennews-77.html abennews-772.html