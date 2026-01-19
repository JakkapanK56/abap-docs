---
title: "ABENSAVER_CHECK_BEFORE_SAVE"
description: |
  ABENSAVER_CHECK_BEFORE_SAVE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSAVER_CHECK_BEFORE_SAVE.htm"
abapFile: "ABENSAVER_CHECK_BEFORE_SAVE.html"
keywords: ["do", "if", "method", "class", "data", "ABENSAVER", "CHECK", "BEFORE", "SAVE"]
---

Declaration part:

``[`CLASS`](ABAPCLASS_DEFINITION.html) lsc_bdef [`DEFINITION`](ABAPCLASS_DEFINITION.html)\ [`INHERITING FROM`](ABAPCLASS_OPTIONS.html) base_class ...       ...       [`METHODS`](ABAPMETHODS.html) check_before_save [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).       ...  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).``

Implementation part:

``[`CLASS`](ABAPCLASS_IMPLEMENTATION.html) lsc_bdef [`IMPLEMENTATION`](ABAPCLASS_IMPLEMENTATION.html).        ...        [`METHOD`](ABAPMETHOD.html) check_before_save.        ...        [`ENDMETHOD`](ABAPMETHOD.html)\        ...  [`ENDCLASS`](ABAPCLASS_IMPLEMENTATION.html).``

[RAP saver method](ABENABP_SAVER_METHOD_GLOSRY.html) that is declared as part of a [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html)\\ `lsc_bdef` in the [CCIMP include](ABENCCIMP_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The predefined saver method must be redefined.

`base_class` stands for the base class from which the RAP saver class inherits, for example, `CL_ABAP_BEHAVIOR_SAVER`.

The following points are relevant for this RAP saver method:

-   Its use is optional.
-   It is part of the [RAP early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html).
-   It has the following implicit, predefined [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters:

-   [`failed`](ABAPTYPE_RESPONSE_FOR.html): [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) that is of type [`TYPE RESPONSE FOR FAILED LATE`](ABAPTYPE_RESPONSE_FOR.html).
-   [`reported`](ABAPTYPE_RESPONSE_FOR.html): [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) that is of type [`TYPE RESPONSE FOR REPORTED LATE`](ABAPTYPE_RESPONSE_FOR.html).

-   It checks the consistency of the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) before the [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html) to ensure a successful save for all involved [RAP BOs](ABENRAP_BO_GLOSRY.html).
-   In [managed](ABENBDL_IMPL_TYPE.html) scenarios, [validations](ABENBDL_VALIDATIONS.html) are called during the `check_before_save` method call.
-   If the method returns an error in the `failed` parameter, the save sequence is terminated and the [`cleanup_finalize`](ABAPSAVER_CLASS_CLEANUP_FINALIZE.html) method is called to discard any changes made to the data in the current [RAP transaction](ABENRAP_LUW_GLOSRY.html) and to clean up the transactional buffer.
-   If `CL_ABAP_BEHAVIOR_SAVER` is used as the base class `base_class` from which the [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html) inherits, and if the `check_before_save` method does not return an error, the RAP save sequence has reached a point of no return, that is, the following RAP saver methods must ensure that the data is successfully saved to the database.

-   Development guide for the ABAP RESTful Application Programming Model, section [Save Sequence Runtime](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab7459048c7e4ecda98d0b6f51b01e7b?version=sap_cross_product_abap)
-   [Invalid Statements and Operations in Transactional Contexts](ABAPINVALID_STMTS_IN_TX.html)

-   The example [Example for a RAP Saver Class](ABENABP_SAVER_CLASS_ABEXA.html) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The examples [Example for a RAP Saver Class (Late Numbering)](ABENABP_SAVER_LN_ABEXA.html) and [Phases in a RAP Transaction](ABENRAP_LUW_ABEXA.html) demonstrate this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario which also includes the `adjust_numbers` saver method.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_saver\_class.html abenabp\_saver\_methods.html