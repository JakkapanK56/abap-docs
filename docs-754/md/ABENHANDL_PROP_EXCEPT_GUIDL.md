---
title: "Handling and Propagating Exceptions - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhandl_prop_except_guidl.htm"
abapFile: "abenhandl_prop_except_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Architecture](ABENARCHITECTURE_GUIDL.md) →  [Error Handling](ABENERROR_HANDLING_GUIDL.md) → 

Handling and Propagating Exceptions

Background

If a class-based exception occurs, it is automatically propagated by the call layers until the exception is handled or an interface is violated:

-   If the exception occurs in a TRY block, the system searches for a suitable CATCH block to handle it.

-   If the user leaves the procedure context during the handler search, the procedure's interface will be checked. Only exceptions declared in the interface can be propagated from the procedure. Exceptions of the categories CX\_STATIC\_CHECK and CX\_DYNAMIC\_CHECK must be declared explicitly with RAISING, while exceptions of category CX\_NO\_CHECK are always declared implicitly. If the interface is violated, the predefined exception, CX\_SY\_NO\_HANDLER, is raised at the calling position of the procedure. A reference to the original exception is defined in PREVIOUS attribute of the exception.

If no handler is found in any of the TRY control structures involved, or if the exception occurs outside a TRY control structure, this results in a runtime error at the raise position of the exception. The short dump of the runtime error contains the name of the exception class and the exception text.

Rule

Catch exceptions or forward them when appropriate

Only catch exceptions that you can handle appropriately in the current context. When you forward exceptions from the underlying software layers, they are supposed to be mapped to corresponding exceptions of the current software layer.

Details

When you call a procedure whose interface includes class-based exceptions, you must decide (for each exception) whether the exception can be handled at this position or should be forwarded to your own calling program. Exceptions that cannot be handled appropriately at the current call level must be forwarded to the superordinate call level. For class-based exceptions, this is done implicitly by avoiding handling within the current call level. You should only allow a runtime error to occur in cases where you are absolutely sure that catching or propagating exceptions is not useful.

When you forward exceptions along the call sequence across multiple layers, they usually move from lower technical layers to higher, more abstract layers that are closer to the application. The calling program in these higher layers does not necessarily know the implementation details of the lower layers and therefore cannot interpret exceptions appropriately. For this reason, exceptions should not exceed the boundaries between software layers. Instead they should be mapped to suitable exceptions with a higher degree of abstraction.

Therefore, we recommend that you do not rely on automatic propagation for forwarding between software layers. Instead, you should catch the original exception and map an exception in the current context by raising a new exception (the context between the originally raised exception and the final exception should be preserved by using the PREVIOUS attribute). This ensures that the calling program of a procedure only receives exceptions that it can understand. This type of procedure is required anyway, for package encapsulation purposes, if exceptions have to be forwarded between software layers.

Note

Forwarding the exceptions to higher software layers usually results in a generalization of previously very special exceptions. The more general an exception is, the higher the software layer usually is in which it is handled. In particular, the most general of all possible exceptions (in other words, the exceptions of type CX\_STATIC\_CHECK, CX\_DYNAMIC\_ CHECK, CX\_NO\_CHECK, or CX\_ROOT) should only be caught at the highest software layers and only if a runtime error must be avoided at all costs.
