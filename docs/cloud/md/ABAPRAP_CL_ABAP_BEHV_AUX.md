---
title: "ABAPRAP_CL_ABAP_BEHV_AUX"
description: |
  ABAPRAP_CL_ABAP_BEHV_AUX - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPRAP_CL_ABAP_BEHV_AUX.htm"
abapFile: "ABAPRAP_CL_ABAP_BEHV_AUX.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABAPRAP", "ABAP", "BEHV", "AUX"]
---

The `CL_ABAP_BEHV_AUX` class includes methods for retrieving various pieces of information.

Regarding `GET_CURRENT_CONTEXT`:

The following code snippet shows how information on the current context might be retrieved using the `GET_CURRENT_CONTEXT` method by storing the information in a variable [declared inline](ABENINLINE_DECLARATION_GLOSRY.html).

-   In the [RAP early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html) and [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html) it makes no sense to evaluate the components other than `from_projection`.
-   The `for_permissions` parameter can be used to avoid a double checking of authorization or feature control if an ABAP EML modify request is handled.
-   The `from_behavior` parameter returns the name of the RAP BO currently active beneath the current RAP BO in the stack. If no such BO exists, as in a UI scenario, the returned value is initial. This parameter is typically relevant in the context of dependent RAP BOs and in cases where the called RAP BO has a different behavior based on the calling RAP BO.
-   Example use cases for the context information:

-   When a behavior is accessed via a [RAP interface behavior definition](ABENCDS_INTERFACE_BDEF_GLOSRY.html), this access is directly mapped to a request on the [base RAP business object](ABENRAP_PROJECTED_BO_GLOSRY.html). A use case might be that the base BO implementation would like to have the information available that it has been called via a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html). For example, a RAP BO interface implements specific logic (for example, some fields are dynamically set to read-only) in the base BO's behavior pool. The implementation in the base BO then requires the name of the RAP BO interface which can be retrieved using the methods of this class.
-   Similarly, the base BO implementation might be interested in knowing whether it was invoked by a [RAP projection extension entity](ABENRAP_PROJ_EXT_ENTITY_GLOSRY.html).

-   The example [Getting RAP Context Information Using `CL_ABAP_BEHV_AUX`](ABENRAP_CL_ABAP_BEHV_AUX_ABEXA.html) demonstrates the use of methods of the class `CL_ABAP_BEHV_AUX`, focusing on filling specific parameters in multiple contexts.
-   The example [Using the Addition `PRIVILEGED` with an ABAP EML Statement](ABENEML_PRIVILEGED_ABEXA.html) demonstrates the addition `PRIVILEGED` using an [action](ABENRAP_ACTION_GLOSRY.html) and a managed RAP BO. In this example, the method `get_current_context` is used to retrieve the information whether the running handler is running in privileged mode.
-   The example [Checking RAP Transactional Phases](ABENRAP_CL_ABAP_BEHV_AUX_PH_ABEXA.html) demonstrates the methods `GET_CURRENT_PHASE` and `GET_CURRENT_HANDLER_KIND`.
-   The executable example class `CL_DEMO_RAP_FROM_BEHAVIOR_PAR` illustrates the `from_behavior` parameter of the `get_current_handler_kind` method in the `CL_ABAP_BEHV_AUX` class. The [RAP business object](ABENRAP_BO_GLOSRY.html)\\ `DEMO_EXT_M` specifies the function `demo_from_behv_a`, and the RAP BO `DEMO_MANAGED_ROOT_CUSTOM` specifies `demo_from_behv_b`. Both functions use `READ ENTITIES` statements to fetch data from the same RAP BO and another RAP BO by executing the function. In the implementations, the `get_current_handler_kind` method of the `CL_ABAP_BEHV_AUX` class is called, and the value of `from_behavior` is stored and added to the read result. The example demonstrates when the value is initial and when it is filled with the currently active RAP BO beneath the current RAP BO in the stack.

cl\_abap\_behv\_aux=>get\_current\_context( IMPORTING \\n from\_behavior = FINAL(fr\_behv) \\n from\_projection = FINAL(fr\_proj) \\n from\_interface = FINAL(fr\_int) \\n in\_local\_mode = FINAL(loc\_mode) \\n draft\_activate = FINAL(dr\_act) \\n for\_permissions = FINAL(for\_perm) \\n privileged = FINAL(priv) \\n call\_kind = FINAL(call) ). **Method** **Details**\\ `GET_CURRENT_PHASE` Information about the current [RAP transactional phase](ABENTRANSACTIONAL_PHASE_GLOSRY.html), such as the [RAP early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html), [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html), or [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html). `GET_CURRENT_CONTEXT` Information about the context of the current [RAP handler](ABENABP_HANDLER_METHOD_GLOSRY.html) and [saver method](ABENABP_SAVER_METHOD_GLOSRY.html)\\ `GET_CURRENT_HANDLER_KIND` Information about the kind of method. For information on the values, see the domain `ABP_BEHV_KIND`. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_rap\_other.html abaprap\_system\_classes.html