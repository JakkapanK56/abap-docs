---
title: "ABENNEWS-753-EXCEPTIONS"
description: |
  ABENNEWS-753-EXCEPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-753-EXCEPTIONS.htm"
abapFile: "ABENNEWS-753-EXCEPTIONS.html"
keywords: ["if", "try", "catch", "method", "class", "ABENNEWS", "753", "EXCEPTIONS"]
---

[1\. Raising Runtime Errors](#ABAP_MODIFICATION_1@4@)

[2\. Last Message in a Chain of Exception Objects](#ABAP_MODIFICATION_2@4@)

[3. Setting the Attribute `IS_RESUMABLE`](#ABAP_MODIFICATION_3@4@)

The new statement [`RAISE SHORTDUMP`](ABAPRAISE_SHORTDUMP.html) raises [runtime errors](ABENRUNTIME_ERROR_GLOSRY.html) associated with an [exception object](ABENEXCEPTION_OBJECT_GLOSRY.html). This means more information can now be passed to the [short dump](ABENSHORT_DUMP_GLOSRY.html) than was previously possible in an [exit message](ABENEXIT_MESSAGE_GLOSRY.html).

The new method `GET_LATEST_T100_EXCEPTION` in the class `CL_MESSAGE_HELPER` is used to return the last object in a chain of exception objects that has an [exception text](ABENEXCEPTION_TEXTS.html) defined by a message. Here, the chain is created using the attribute `PREVIOUS`.

The attribute `IS_RESUMABLE` of an [exception object](ABENEXCEPTION_OBJECT_GLOSRY.html) is now set after exceptions raised by the statement [`RAISE RESUMABLE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) only if the [`CATCH`](ABAPCATCH_TRY.html) statement in question has the addition `BEFORE UNWIND`. Previously in catches, the attribute was set for every exception raised in this way.

After an exception is raised using the statement [`RAISE RESUMABLE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) and caught using the statement [`CATCH BEFORE UNWIND`](ABAPCATCH_TRY.html), the attribute `IS_RESUMABLE` is set for all previous exception objects referenced in the attribute `PREVIOUS` and not just for the current exception object. Up until the first resumable exception in the chain `IS_RESUMABLE` is set to the value of `ABAP_TRUE` and is set to the value of `ABAP_FALSE` otherwise.

abenabap.html abennews.html abennews-75.html abennews-753.html