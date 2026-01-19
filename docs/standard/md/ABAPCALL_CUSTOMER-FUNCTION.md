---
title: "ABAPCALL_CUSTOMER-FUNCTION"
description: |
  ABAPCALL_CUSTOMER-FUNCTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_CUSTOMER-FUNCTION.htm"
abapFile: "ABAPCALL_CUSTOMER-FUNCTION.html"
keywords: ["if", "method", "exception-handling", "ABAPCALL", "CUSTOMER", "FUNCTION"]
---

[Short Reference](ABAPCALL_CUSTOMER_FUNC_SHORTREF.html)

`CALL CUSTOMER-FUNCTION function_exit [parameter_list](ABAPCALL_FUNCTION_PARAMETER.html).`

This statement can be used in programs delivered by SAP. It includes the [function module exit](ABENFUNCTION_MODULE_EXIT_GLOSRY.html) specified in `function_exit`. The function module exit is a [customer exit](ABENCUSTOMER_EXIT_GLOSRY.html). In an SAP program, it enables a function module provided by SAP and implemented by the customer to be called.

The three-character name `function_exit` must be specified directly and enclosed in single quotation marks (`'`). A function module exit is specified by SAP using the transaction `SMOD` and can be activated in customer systems using the transaction `CMOD`.

Syntax and meaning of the [`parameter_list`](ABAPCALL_FUNCTION_PARAMETER.html) for the assignment of the actual parameters to formal parameters and for the exception handling are the same as in a general function module call. It is not possible to fill the interface dynamically.

If the function module exit is not active, `sy-subrc` retains its previous value. If the function module exit is active, `sy-subrc` is set as in [`CALL FUNCTION`](ABAPCALL_FUNCTION_GENERAL.html).

-   Preparation by SAP
-   An empty or partially implemented function module must be assigned to the function module exit `function_exit` using the transaction `SMOD`. The name of the function module consists of `EXIT_`, the program name, which contains the statement `CALL CUSTOMER-FUNCTION`, and the three-character name in `function_exit`. The interface of the function module is completely defined by SAP.
-   Activation in the Customer System
-   The transaction `CMOD` enables the customer to implement the source code of the function module within an enhancement project and to activate the function module exit. If the function module exit is not activated, the statement `CALL CUSTOMER-FUNCTION` is ignored completely. If the function module is activated, the associated function module is called in the same way as the [general function module call](ABAPCALL_FUNCTION_GENERAL.html).

-   The execution of enhancements using transaction `CMOD` is obsolete. Instead, the [ABAP Enhancement Framework](ABENENHANCEMENT_FRAMEWORK_GLOSRY.html) should be used, which replaces function module exit calls with [BAdI method](ABENBADI_METHOD_GLOSRY.html) calls using [`CALL BADI`](ABAPCALL_BADI.html).
-   Since it is not known in a calling program whether a function module exit is active, `sy-subrc` must be set to 0 explicitly so that a successful call can be simulated.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenprogram\_call\_obsolete.html