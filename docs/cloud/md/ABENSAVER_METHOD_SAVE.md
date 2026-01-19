---
title: "ABENSAVER_METHOD_SAVE"
description: |
  ABENSAVER_METHOD_SAVE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSAVER_METHOD_SAVE.htm"
abapFile: "ABENSAVER_METHOD_SAVE.html"
keywords: ["do", "if", "method", "class", "data", "ABENSAVER", "METHOD", "SAVE"]
---

Declaration part:

``[`CLASS`](ABAPCLASS_DEFINITION.html) lsc_bdef [`DEFINITION`](ABAPCLASS_DEFINITION.html)\ [`INHERITING FROM`](ABAPCLASS_OPTIONS.html) base_class ...       ...       [`METHODS`](ABAPMETHODS.html) save [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).       ...  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).``

Implementation part:

``[`CLASS`](ABAPCLASS_IMPLEMENTATION.html) lsc_bdef [`IMPLEMENTATION`](ABAPCLASS_IMPLEMENTATION.html).        ...        [`METHOD`](ABAPMETHOD.html) save.        ...        [`ENDMETHOD`](ABAPMETHOD.html)\        ...  [`ENDCLASS`](ABAPCLASS_IMPLEMENTATION.html).``

[RAP saver method](ABENABP_SAVER_METHOD_GLOSRY.html) that is declared as part of a [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html)\\ `lsc_bdef` in the [CCIMP include](ABENCCIMP_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The predefined saver method must be redefined.

`base_class` stands for the base class from which the RAP saver class inherits, for example, `CL_ABAP_BEHAVIOR_SAVER`.

The following points are relevant for this RAP saver method:

Development guide for the ABAP RESTful Application Programming Model, section [Save Sequence Runtime](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab7459048c7e4ecda98d0b6f51b01e7b?version=sap_cross_product_abap).

-   Its use is mandatory.
-   It is available in [unmanaged RAP BO providers](ABENUNMANAGED_RAP_BO_PROV_GLOSRY.html).
-   It has the following implicit, predefined [`CHANGING`](ABAPMETHODS_GENERAL.html) parameter when using `CL_ABAP_BEHAVIOR_SAVER` as base class `base_class` from which the [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html) inherits:

-   [`reported`](ABAPTYPE_RESPONSE_FOR.html): [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) that is of type [`TYPE RESPONSE FOR REPORTED LATE`](ABAPTYPE_RESPONSE_FOR.html).

-   It is responsible for saving the current state of the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html), i. e. all [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) (including instances from cross-BO relationships) from within the current [RAP transaction](ABENRAP_LUW_GLOSRY.html), to the database. However, the method is only called if each of the previous RAP saver methods has been processed successfully without any failures.

-   After persisting data to the database, it is recommended that the transactional buffer is cleared (using the RAP saver method [`cleanup`](ABENSAVER_METHOD_CLEANUP.html) if it is available and can be user-implemented) because the same ABAP session might be used for more than one RAP transaction and any remaining changes in the transactional buffer could lead to inconsistencies.
-   The method is part of the [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html).

-   The example [Example for a RAP Saver Class](ABENABP_SAVER_CLASS_ABEXA.html) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](ABENABP_SAVER_LN_ABEXA.html) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario which also includes the `adjust_numbers` saver method.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_saver\_class.html abenabp\_saver\_methods.html