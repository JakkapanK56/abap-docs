---
title: "ABENNEWS-620-EXCEPTIONS"
description: |
  ABENNEWS-620-EXCEPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-620-EXCEPTIONS.htm"
abapFile: "ABENNEWS-620-EXCEPTIONS.html"
keywords: ["do", "if", "catch", "method", "class", "data", "ABENNEWS", "620", "EXCEPTIONS"]
---

[1\. Catchable Exceptions in Method Calls](#ABAP_MODIFICATION_1@4@)

[2\. Catchable Exceptions in Function Module Calls](#ABAP_MODIFICATION_2@4@)

[3\. Catchable Exceptions in Downcasts](#ABAP_MODIFICATION_3@4@)

[4\. Catchable Exceptions in ABAP SQL](#ABAP_MODIFICATION_4@4@)

[5. Catchable Exceptions in `CALL TRANSFORMATION`](#ABAP_MODIFICATION_5@4@)

[6. Catchable Exceptions in `GENERATE REPORT | SUBROUTINE POOL`](#ABAP_MODIFICATION_6@4@)

[7. Catchable Exceptions in `SCAN`](#ABAP_MODIFICATION_7@4@)

[8. Catchable Exceptions in `EXPORT TO SHARED MEMORY`](#ABAP_MODIFICATION_8@4@)

[9. Catchable Exceptions in `PROVIDE`](#ABAP_MODIFICATION_9@4@)

The following exceptions can now be handled in [method calls](ABENMETHOD_CALLS.html), having been assigned to existing exception classes:

In [`CALL FUNCTION`](ABAPCALL_FUNCTION.html), the following exceptions can now be handled, having been assigned to existing exception classes. The new exception class `CX_SY_DYN_CALL_ILLEGAL_FUNC` was introduced only for the first two exceptions in the following list:

In [downcasts](ABENDOWN_CAST_GLOSRY.html), the following exceptions can now be handled, having been assigned to an existing exception class:

In ABAP SQL, the following exceptions can now be handled, having been assigned to an existing exception class.

The exception classes `CX_SY_CONVERSION_NO_RAW` and `CX_SY_CONVERSION_NO_DATE_TIME` have been introduced for the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html).

The exception class `CX_SY_GEN_SOURCE_TOO_WIDE` has been introduced for the statement [`GENERATE REPORT|SUBROUTINE POOL`](ABAPGENERATE_REPORT.html).

The exception class `CX_SY_SCAN_SOURCE_TOO_WIDE` has been introduced for the statement [`SCAN`](ABAPSCAN.html).

The exception `CX_SY_EXPORT_NO_SHARED_MEMORY` has been introduced for [`EXPORT TO SHARED MEMORY`](ABAPEXPORT_DATA_CLUSTER.html).

The exception classes `CX_SY_PROVIDE_INTERVAL_OVERLAP` and `CX_SY_PROVIDE_TABLE_NOT_SORTED` have been introduced for the new variant of the statement [`PROVIDE`](ABAPPROVIDE.html). These exceptions are not raised by the short form of `PROVIDE`.

-   `CALL_METHOD_NOT_IMPLEMENTED`
-   `CALL_METHOD_NOT_ACCESSIBLE`
-   `CALL_METHOD_CONFLICT_TAB_TYPE`
-   `CALL_METHOD_CONFLICT_GEN_TYPE`
-   `CALL_METHOD_CONFLICT_TYPE`

-   `CALL_FUNCTION_NOT_ACTIVE`
-   `CALL_FUNCTION_NOT_FOUND`
-   `CALL_FUNCTION_PARM_MISSING`
-   `CALL_FUNCTION_PARM_UNKNOWN`
-   `CALL_FUNCTION_CONFLICT_GEN_TYP`
-   `CALL_FUNCTION_CONFLICT_LENG`
-   `CALL_FUNCTION_CONFLICT_TYPE`
-   `CALL_FUNCTION_NO_VB`
-   `CALL_FUNCTION_WRONG_ALIGNMENT`

-   `MOVE_CAST_ERROR_DYN`
-   `MOVE_CAST_REF_ONLY`

-   `ESCAPE_WITH_POOLTABLE`
-   `SAPSQL_CONNECTION_ILL_TABTYPE`

abenabap.html abennews.html abennews-6.html abennews-620.html