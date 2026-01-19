---
title: "ABAPCALL_FUNCTION_EXC_SHORT_FORM"
description: |
  ABAPCALL_FUNCTION_EXC_SHORT_FORM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_FUNCTION_EXC_SHORT_FORM.htm"
abapFile: "ABAPCALL_FUNCTION_EXC_SHORT_FORM.html"
keywords: ["if", "catch", "class", "ABAPCALL", "FUNCTION", "EXC", "SHORT", "FORM"]
---

`CALL FUNCTION func ...                     EXCEPTIONS exc1 exc2 ...`

This short form for specifying non-class-based exceptions in the [parameter list](ABAPCALL_FUNCTION_PARAMETER.html) of the statement [`CALL FUNCTION`](ABAPCALL_FUNCTION_GENERAL.html) is obsolete. It has the same effect as the following:

CALL FUNCTION func ... \\n                   EXCEPTIONS exc1 = 1 \\n                              exc2 = 1 \\n                              ...

Each exception specified after `EXCEPTIONS` that is not assigned to an explicit return code using `=` is assigned the value 1 implicitly.

The syntax of the following function module call is correct but can have unexpected results.

The developer probably expected the following:

The complete form of the statement is as follows, however:

Since exceptions called *\=* are not possible, and exceptions called *4* are unlikely, this call will almost certainly not catch any exceptions, even though it is designed to catch every exception.

-   This short form is extremely error-prone and should never be used.
-   Both the short form and the complete form can appear in a `CALL FUNCTION` statement.

CALL FUNCTION func EXCEPTIONS = 4. CALL FUNCTION func EXCEPTIONS OTHERS = 4. CALL FUNCTION func EXCEPTIONS = = 1 \\n 4 = 1. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenprogram\_call\_obsolete.html