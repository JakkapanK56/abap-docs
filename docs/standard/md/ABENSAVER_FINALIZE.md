---
title: "ABENSAVER_FINALIZE"
description: |
  ABENSAVER_FINALIZE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSAVER_FINALIZE.htm"
abapFile: "ABENSAVER_FINALIZE.html"
keywords: ["do", "while", "if", "method", "class", "data", "ABENSAVER", "FINALIZE"]
---

Declaration part:

``[`CLASS`](ABAPCLASS_DEFINITION.html) lsc_bdef [`DEFINITION`](ABAPCLASS_DEFINITION.html)\ [`INHERITING FROM`](ABAPCLASS_OPTIONS.html) base_class ...       ...       [`METHODS`](ABAPMETHODS.html) finalize [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).       ...  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).``

Implementation part:

``[`CLASS`](ABAPCLASS_IMPLEMENTATION.html) lsc_bdef [`IMPLEMENTATION`](ABAPCLASS_IMPLEMENTATION.html).        ...        [`METHOD`](ABAPMETHOD.html) finalize.        ...        [`ENDMETHOD`](ABAPMETHOD.html)\        ...  [`ENDCLASS`](ABAPCLASS_IMPLEMENTATION.html).``

[RAP saver method](ABENABP_SAVER_METHOD_GLOSRY.html) that is declared as part of a [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html)\\ `lsc_bdef` in the [CCIMP include](ABENCCIMP_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The predefined saver method must be redefined.

`base_class` stands for the base class from which the RAP saver class inherits, for example, `CL_ABAP_BEHAVIOR_SAVER`.

The following points are relevant for this RAP saver method:

Development guide for the ABAP RESTful Application Programming Model, section [Save Sequence Runtime](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab7459048c7e4ecda98d0b6f51b01e7b?version=sap_cross_product_abap).

-   Its use is optional.
-   It is part of the [RAP early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html). There, it is the first method to be called.
-   It is used to make any final calculations and data modifications involving all [RAP BOs](ABENRAP_BO_GLOSRY.html) in the current [RAP transaction](ABENRAP_LUW_GLOSRY.html).
-   In [managed](ABENBDL_IMPL_TYPE.html) scenarios, [determinations](ABENBDL_DETERMINATIONS.html) with `ON SAVE` are called during the `finalize` method call.
-   It has the following implicit, predefined [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   [`failed`](ABAPTYPE_RESPONSE_FOR.html): [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) that is of type [`TYPE RESPONSE FOR FAILED LATE`](ABAPTYPE_RESPONSE_FOR.html).
-   [`reported`](ABAPTYPE_RESPONSE_FOR.html): [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) that is of type [`TYPE RESPONSE FOR REPORTED LATE`](ABAPTYPE_RESPONSE_FOR.html).

-   If the method returns an error in the `failed` parameter, the save sequence is terminated and the [`cleanup_finalize`](ABAPSAVER_CLASS_CLEANUP_FINALIZE.html) method is called to discard any changes made to the data in the current RAP transaction and to clean up the transactional buffer. After that, the [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html) is not processed. Instead, you return to the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html).
-   If a [RAP transaction](ABENRAP_LUW_GLOSRY.html) includes multiple ABAP EML `MODIFY` requests to multiple related RAP BOs (such as [RAP projection business objects](ABENRAP_PROJECTION_BO_GLOSRY.html) and [RAP BO interfaces](ABENRAP_BO_INTERFACE_GLOSRY.html) in a cross-BO scenario), and a commit is triggered, the `finalize` saver method can be called multiple times. If, while executing the `finalize` method in a BO, an ABAP EML `MODIFY` request is made to another BO for which the finalize method has already been executed, the `finalize` method of that specific BO is called again. Make sure that you avoid a cyclical calling of the `finalize` method. Otherwise, the `CX_ABAP_BEHV_CYCLIC_FINALIZE` exception is raised.

-   The example [Example for a RAP Saver Class](ABENABP_SAVER_CLASS_ABEXA.html) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The examples [Example for a RAP Saver Class (Late Numbering)](ABENABP_SAVER_LN_ABEXA.html) and [Phases in a RAP transaction](ABENRAP_LUW_ABEXA.html) demonstrate this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario which also includes the `adjust_numbers` saver method.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_saver\_class.html abenabp\_saver\_methods.html