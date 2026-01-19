---
title: "ABENSAVER_METHOD_CLEANUP"
description: |
  ABENSAVER_METHOD_CLEANUP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSAVER_METHOD_CLEANUP.htm"
abapFile: "ABENSAVER_METHOD_CLEANUP.html"
keywords: ["do", "if", "method", "class", "data", "ABENSAVER", "METHOD", "CLEANUP"]
---

Declaration part:

``[`CLASS`](ABAPCLASS_DEFINITION.html) lsc_bdef [`DEFINITION`](ABAPCLASS_DEFINITION.html)\ [`INHERITING FROM`](ABAPCLASS_OPTIONS.html) base_class ...       ...       [`METHODS`](ABAPMETHODS.html) cleanup [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).       ...  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).``

Implementation part:

``[`CLASS`](ABAPCLASS_IMPLEMENTATION.html) lsc_bdef [`IMPLEMENTATION`](ABAPCLASS_IMPLEMENTATION.html).        ...        [`METHOD`](ABAPMETHOD.html) cleanup.        ...        [`ENDMETHOD`](ABAPMETHOD.html)\        ...  [`ENDCLASS`](ABAPCLASS_IMPLEMENTATION.html).``

[RAP saver method](ABENABP_SAVER_METHOD_GLOSRY.html) that is declared as part of a [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html)\\ `lsc_bdef` in the [CCIMP include](ABENCCIMP_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The predefined saver method must be redefined.

`base_class` stands for the base class from which the RAP saver class inherits, for example, `CL_ABAP_BEHAVIOR_SAVER`.

The following points are relevant for this RAP saver method:

-   Its use is optional.
-   It is part of the [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html).
-   It is the final method of the RAP save sequence and responsible for clearing the [RAP transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html).
-   It is called after the data has been persisted to the database or a rollback request is triggered with [`ROLLBACK ENTITIES`](ABAPROLLBACK_ENTITIES.html).
-   It is the final method of the RAP save sequence, which is called when instances have been successfully saved to the database.
-   It does not have any [`IMPORTING`](ABAPMETHODS_GENERAL.html) or [`CHANGING`](ABAPMETHODS_GENERAL.html) parameters.

-   If only read operations are performed in the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) and a [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html) statement is specified, only the `cleanup` method is called.
-   In [managed](ABENBDL_IMPL_TYPE.html) scenarios, the task of the method is performed by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html). An exception is when the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) is specified with [unmanaged or additional save](ABENBDL_SAVING.html) and the notation `... and cleanup`. Then, and generally in [unmanaged](ABENBDL_IMPL_TYPE.html) scenarios, the cleanup must be user-implemented.

-   Development guide for the ABAP RESTful Application Programming Model, section [Save Sequence Runtime](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab7459048c7e4ecda98d0b6f51b01e7b?version=sap_cross_product_abap)
-   [Invalid Statements and Operations in Transactional Contexts](ABAPINVALID_STMTS_IN_TX.html)

-   The example [Example for a RAP Saver Class](ABENABP_SAVER_CLASS_ABEXA.html) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The examples [Example for a RAP Saver Class (Late Numbering)](ABENABP_SAVER_LN_ABEXA.html) and [Phases in a RAP transaction](ABENRAP_LUW_ABEXA.html) demonstrate this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_saver\_class.html abenabp\_saver\_methods.html