---
title: "ABENSAVER_ADJUST_NUMBERS"
description: |
  ABENSAVER_ADJUST_NUMBERS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSAVER_ADJUST_NUMBERS.htm"
abapFile: "ABENSAVER_ADJUST_NUMBERS.html"
keywords: ["do", "if", "case", "method", "class", "types", "ABENSAVER", "ADJUST", "NUMBERS"]
---

Declaration part:

``[`CLASS`](ABAPCLASS_DEFINITION.html) lsc_bdef [`DEFINITION`](ABAPCLASS_DEFINITION.html)\ [`INHERITING FROM`](ABAPCLASS_OPTIONS.html) base_class ...       ...       [`METHODS`](ABAPMETHODS.html) adjust_numbers [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).       ...  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).``

Implementation part:

``[`CLASS`](ABAPCLASS_IMPLEMENTATION.html) lsc_bdef [`IMPLEMENTATION`](ABAPCLASS_IMPLEMENTATION.html).        ...        [`METHOD`](ABAPMETHOD.html) adjust_numbers.        ...        [`ENDMETHOD`](ABAPMETHOD.html)\        ...  [`ENDCLASS`](ABAPCLASS_IMPLEMENTATION.html).``

[RAP saver method](ABENABP_SAVER_METHOD_GLOSRY.html) that is declared as part of a [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html)\\ `lsc_bdef` in the [CCIMP include](ABENCCIMP_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The predefined saver method must be redefined.

`base_class` stands for the base class from which the RAP saver class inherits, for example, `CL_ABAP_BEHAVIOR_SAVER`.

The following points are relevant for this RAP saver method:

Development guide for the ABAP RESTful Application Programming Model, section [Save Sequence Runtime](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab7459048c7e4ecda98d0b6f51b01e7b?version=sap_cross_product_abap).

The example [Example for a RAP Saver Class (Late Numbering Scenario)](ABENABP_SAVER_LN_ABEXA.html) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario.

-   Its use is mandatory.
-   It is only available in [`late numbering`](ABENBDL_LATE_NUMBERING.html) scenarios.
-   It is part of the [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html).
-   It has the following implicit, predefined [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters when using `CL_ABAP_BEHAVIOR_SAVER` as base class `base_class` from which the [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html) inherits:

-   [`mapped`](ABAPTYPE_RESPONSE_FOR.html): [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) that is of type [`TYPE RESPONSE FOR MAPPED LATE`](ABAPTYPE_RESPONSE_FOR.html).
-   [`reported`](ABAPTYPE_RESPONSE_FOR.html): [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) that is of type [`TYPE RESPONSE FOR REPORTED LATE`](ABAPTYPE_RESPONSE_FOR.html).

-   It is responsible for converting and mapping preliminary keys and identifiers (e. g. [`%pid`](ABAPDERIVED_TYPES_PID.html) with which [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) are identified during the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html)) to the final key values of [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html).
-   The [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html)\\ `mapped` must be filled in the method implementation by mapping the preliminary keys and identifiers to the final key values. It must be ensured that the key values are unique.

-   The method is part of the [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html).
-   Usually, errors from [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) must not appear after the [RAP early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html). Hence, the RAP response parameter `failed` is not available as a parameter. In case an application must stop the transaction, a runtime error occurs. However, there are exceptional cases in which errors cannot be avoided (see [here](ABENABP_CL_ABAP_BEH_SAVER_FAILED.html)). In these cases, `CL_ABAP_BEHAVIOR_SAVER_FAILED` can be used as base class `base_class` from which the [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html) inherits. Then, the response parameter [`failed`](ABAPTYPE_RESPONSE_FOR.html) is additionally available. It is of type [`TYPE RESPONSE FOR FAILED LATE`](ABAPTYPE_RESPONSE_FOR.html).

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_saver\_class.html abenabp\_saver\_methods.html