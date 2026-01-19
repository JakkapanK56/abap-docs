---
title: "ABENRFC_EXCEPTION"
description: |
  ABENRFC_EXCEPTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRFC_EXCEPTION.htm"
abapFile: "ABENRFC_EXCEPTION.html"
keywords: ["do", "if", "class", "exception-handling", "ABENRFC", "EXCEPTION"]
---

In the interface of a [remote enabled function module](ABENREMOTE_ENABLED_FM_GLOSRY.html), it is currently only possible to specify classic exceptions, that is, [non-class-based exceptions](ABENEXCEPTIONS_NON_CLASS.html). Class-based exceptions are supported only in internal SAP release tracks.

In an external function call, the non-class-based exceptions defined in the interface of the function module called using the [`EXCEPTIONS`](ABAPCALL_FUNCTION_DESTINATION_PARA.html) addition of the statements [`CALL FUNCTION`](ABAPCALL_FUNCTION_DESTINATION-.html) or [`RECEIVE`](ABAPRECEIVE.html) can be assigned return values.

If `EXCEPTIONS` is specified, classic exception handling is performed. If a remotely called function module raises a class-based exception, this exception is not transported and raises the predefined classical exception `SYSTEM_FAILURE` instead

In addition to the exceptions that are specified explicitly in the interface of a remote-enabled function module, the following predefined exceptions can occur in the `RFC`:

It is strongly recommended that all predefined exceptions are handled.

For more information about exceptions during RFC calls, see the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.

[Exception Handling in RFC](ABENRFC_EXCEPTIONS_ABEXA.html)

-   `SYSTEM_FAILURE`
-   This exception can be caused, among other things, by error situations that arise when a remotely called function is executed on the RFC server. These error situations can be caused by runtime errors or sending a [message of type *A*, *E*, or *X*](ABENABAP_MESSAGE_RFC.html).
-   `COMMUNICATION_FAILURE`, `RESOURCE_FAILURE` (only with [pRFC](ABENPRFC_GLOSRY.html) or `SYSTEM_FAILURE`)
-   These exceptions are raised by all errors that occur when connections are being established, when resources are being assigned, or in the communication layer.

-   If a remotely called function module raises a class-based exception, this always raises the predefined exception `SYSTEM_FAILURE` of the RFC interface. Since no class-based exceptions can be specified in the interface of a remote-enabled function module, this only affects exceptions of the categories `CX_NO_CHECK`, especially `CX_SY_NO_HANDLER`.
-   The recommendation to handle all predefined exceptions is particularly important in avoiding incompatibilities with regard to the conversion to class-based exceptions in a future release.

abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_destination-.html abenrfc.html