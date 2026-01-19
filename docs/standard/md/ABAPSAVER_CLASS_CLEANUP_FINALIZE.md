---
title: "ABAPSAVER_CLASS_CLEANUP_FINALIZE"
description: |
  ABAPSAVER_CLASS_CLEANUP_FINALIZE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSAVER_CLASS_CLEANUP_FINALIZE.htm"
abapFile: "ABAPSAVER_CLASS_CLEANUP_FINALIZE.html"
keywords: ["do", "if", "method", "class", "ABAPSAVER", "CLASS", "CLEANUP", "FINALIZE"]
---

Declaration part:

``[`CLASS`](ABAPCLASS_DEFINITION.html) lsc_bdef [`DEFINITION`](ABAPCLASS_DEFINITION.html)\ [`INHERITING FROM`](ABAPCLASS_OPTIONS.html) base_class ...       ...       [`METHODS`](ABAPMETHODS.html) cleanup_finalize [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).       ...  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).``

Implementation part:

``[`CLASS`](ABAPCLASS_IMPLEMENTATION.html) lsc_bdef [`IMPLEMENTATION`](ABAPCLASS_IMPLEMENTATION.html).        ...        [`METHOD`](ABAPMETHOD.html) cleanup_finalize.        ...        [`ENDMETHOD`](ABAPMETHOD.html)\        ...  [`ENDCLASS`](ABAPCLASS_IMPLEMENTATION.html).``

[RAP saver method](ABENABP_SAVER_METHOD_GLOSRY.html) that is declared as part of a [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html)\\ `lsc_bdef` in the [CCIMP include](ABENCCIMP_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The predefined saver method must be redefined.

`base_class` stands for the base class from which the RAP saver class inherits, for example, `CL_ABAP_BEHAVIOR_SAVER`.

The following points are relevant for this RAP saver method:

Development guide for the ABAP RESTful Application Programming Model, section [Save Sequence Runtime](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab7459048c7e4ecda98d0b6f51b01e7b?version=sap_cross_product_abap)

-   Its use is optional.
-   It is part of the [RAP early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html).
-   It does not have any [`IMPORTING`](ABAPMETHODS_GENERAL.html) or [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters.
-   It clears the [RAP transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html). You can also undo changes if other RAP BOs are involved and there are dependencies on other RAP BOs in the early save phase. In [unmanaged](ABENBDL_IMPL_TYPE.html) scenarios, the cleanup must be user-implemented.
-   It is only called if issues occur in the [`finalize`](ABENSAVER_FINALIZE.html) or [`check_before_save`](ABENSAVER_CHECK_BEFORE_SAVE.html) methods within the current [RAP transaction](ABENRAP_LUW_GLOSRY.html). After calling the `cleanup_finalize` method, the [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html) is not processed. Instead, you return to the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html).

-   The example [Example for a RAP Saver Class](ABENABP_SAVER_CLASS_ABEXA.html) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](ABENABP_SAVER_LN_ABEXA.html) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_saver\_class.html abenabp\_saver\_methods.html