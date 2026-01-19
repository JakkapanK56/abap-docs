---
title: "ABENHANDL_PROP_EXCEPT_GUIDL"
description: |
  ABENHANDL_PROP_EXCEPT_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENHANDL_PROP_EXCEPT_GUIDL.htm"
abapFile: "ABENHANDL_PROP_EXCEPT_GUIDL.html"
keywords: ["do", "while", "if", "case", "try", "catch", "class", "ABENHANDL", "PROP", "EXCEPT", "GUIDL"]
---

If a class-based exception is raised, it is propagated automatically between the call layers until the exception is handled or an interface is violated:

If no handler is found in any of the `TRY` control structures involved, or if the exception is raised outside a `TRY` control structure, this results in a runtime error at the raise position of the exception. The short dump of the runtime error contains the name of the exception class and the exception text.

**Catch exceptions or forward them when appropriate**

Only catch exceptions that you can handle appropriately in the current context. When you forward exceptions from the underlying software layers, they are supposed to be mapped to corresponding exceptions of the current software layer.

When you call a procedure whose interface includes class-based exceptions, you must decide (for each exception) whether the exception can be handled at this position or should be forwarded to your own calling program. Exceptions that cannot be handled appropriately at the current call level must be forwarded to the superordinate call level. For class-based exceptions, this is done implicitly by avoiding handling within the current call level. You should only allow a runtime error to occur in cases where you are absolutely sure that catching or propagating exceptions is not useful.

When you forward exceptions along the call sequence across multiple layers, they usually move from lower technical layers to higher, more abstract layers that are closer to the application. The calling program in these higher layers does not necessarily know the implementation details of the lower layers and therefore cannot interpret exceptions appropriately. For this reason, exceptions should not exceed the boundaries between software layers. Instead they should be mapped to suitable exceptions with a higher degree of abstraction.

Therefore, we recommend that you do not rely on automatic propagation for forwarding between software layers. Instead, you should catch the original exception and map an exception in the current context by raising a new exception (the context between the originally raised exception and the final exception should be preserved by using the `PREVIOUS` attribute). This ensures that the calling program of a procedure only receives exceptions that it can understand. This type of procedure is required anyway, for package encapsulation purposes, if exceptions have to be forwarded between software layers.

Forwarding the exceptions to higher software layers usually results in a generalization of previously very special exceptions. The more general an exception is, the higher the software layer usually is in which it is handled. In particular, the most general of all possible exceptions (in other words, the exceptions of type `CX_STATIC_CHECK`, `CX_DYNAMIC_CHECK`, `CX_NO_CHECK`, or `CX_ROOT`) should only be caught at the highest software layers and only if a runtime error must be avoided at all costs.

-   If the exception is raised in a `TRY` block, the system searches for a suitable `CATCH` block to handle it.
-   If the user leaves the procedure context during the handler search, the procedure's interface will be checked. Only exceptions declared in the interface can be propagated from the procedure. Exceptions of the categories `CX_STATIC_CHECK` and `CX_DYNAMIC_CHECK` must be declared explicitly with `RAISING`, while exceptions of category `CX_NO_CHECK` are always declared implicitly but can also be declared explicitly. If the interface is violated, the predefined exception `CX_SY_NO_HANDLER` is raised at the calling position of the procedure. A reference to the original exception is defined in the `PREVIOUS` attribute of the exception.

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenarchitecture\_gdl.html abenerror\_handling\_gdl.html