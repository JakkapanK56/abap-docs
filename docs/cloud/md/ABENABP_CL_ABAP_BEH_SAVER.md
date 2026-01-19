---
title: "ABENABP_CL_ABAP_BEH_SAVER"
description: |
  ABENABP_CL_ABAP_BEH_SAVER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABP_CL_ABAP_BEH_SAVER.htm"
abapFile: "ABENABP_CL_ABAP_BEH_SAVER.html"
keywords: ["do", "if", "method", "class", "data", "ABENABP", "ABAP", "BEH", "SAVER"]
---

Syntax for [unmanaged](ABENBDL_IMPL_TYPE.html) scenarios. The `adjust_numbers` method is only available for [`late numbering`](ABENBDL_LATE_NUMBERING.html) scenarios.

```[`CLASS`](ABAPCLASS_DEFINITION.html) lsc_bdef [`DEFINITION`](ABAPCLASS_DEFINITION.html)\    [`INHERITING FROM`](ABAPCLASS_OPTIONS.html)\ `` `CL_ABAP_BEHAVIOR_SAVER` `` [[`ABSTRACT`](ABAPCLASS_OPTIONS.html)]\ [[`FINAL`](ABAPCLASS_OPTIONS.html)].    [`PROTECTED SECTION`](ABAPPROTECTED.html).       [[`METHODS`](ABAPMETHODS.html)\ [`` `finalize` ``](ABENSAVER_FINALIZE.html)\ [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).]\       [[`METHODS`](ABAPMETHODS.html)\ [`` `check_before_save` ``](ABENSAVER_CHECK_BEFORE_SAVE.html)\ [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).]\        [`METHODS`](ABAPMETHODS.html)\ [`` `adjust_numbers` ``](ABENSAVER_ADJUST_NUMBERS.html)\ [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).        [`METHODS`](ABAPMETHODS.html)\ [`` `save` ``](ABENSAVER_METHOD_SAVE.html)\ [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).       [[`METHODS`](ABAPMETHODS.html)\ [`` `map_messages` ``](ABENSAVER_MAP_MESSAGES.html)\ [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).]\       [[`METHODS`](ABAPMETHODS.html)\ [`` `cleanup` ``](ABENSAVER_METHOD_CLEANUP.html)\ [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).]\       [[`METHODS`](ABAPMETHODS.html)\ [`` `cleanup_finalize` ``](ABAPSAVER_CLASS_CLEANUP_FINALIZE.html)\ [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).]\  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).  \  [`CLASS`](ABAPCLASS_IMPLEMENTATION.html) lsc_bdef [`IMPLEMENTATION.`](ABAPCLASS_IMPLEMENTATION.html)\       [[`METHOD`](ABAPMETHOD.html) finalize. ... [`ENDMETHOD`](ABAPMETHOD.html).]\       [[`METHOD`](ABAPMETHOD.html) check_before_save. ... [`ENDMETHOD`](ABAPMETHOD.html).]\        [`METHOD`](ABAPMETHOD.html) adjust_numbers. ... [`ENDMETHOD`](ABAPMETHOD.html).        [`METHOD`](ABAPMETHOD.html) save. ... [`ENDMETHOD`](ABAPMETHOD.html).       [[`METHOD`](ABAPMETHOD.html) map_messages. ... [`ENDCLASS`](ABAPCLASS_IMPLEMENTATION.html).]\       [[`METHOD`](ABAPMETHOD.html) cleanup. ... [`ENDMETHOD`](ABAPMETHOD.html).]\       [[`METHOD`](ABAPMETHOD.html) cleanup_finalize. ... [`ENDMETHOD`](ABAPMETHOD.html).]\  [`ENDCLASS`](ABAPCLASS_IMPLEMENTATION.html).```

Syntax for managed scenarios with [additional or unmanaged save](ABENBDL_SAVING.html). The `adjust_numbers` method is only available for [`late numbering`](ABENBDL_LATE_NUMBERING.html) scenarios.

```[`CLASS`](ABAPCLASS_DEFINITION.html) lsc_bdef [`DEFINITION`](ABAPCLASS_DEFINITION.html)\    [`INHERITING FROM`](ABAPCLASS_OPTIONS.html)\ `` `CL_ABAP_BEHAVIOR_SAVER` `` [[`ABSTRACT`](ABAPCLASS_OPTIONS.html)]\ [[`FINAL`](ABAPCLASS_OPTIONS.html)].    [`PROTECTED SECTION`](ABAPPROTECTED.html).       [`METHODS`](ABAPMETHODS.html)\ [`` `adjust_numbers` ``](ABENSAVER_ADJUST_NUMBERS.html)\ [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).       [`METHODS`](ABAPMETHODS.html)\ [`` `save_modified` ``](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html)\ [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).      [[`METHODS`](ABAPMETHODS.html) cleanup [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).]\  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).  \  [`CLASS`](ABAPCLASS_IMPLEMENTATION.html) lsc_bdef [`IMPLEMENTATION.`](ABAPCLASS_IMPLEMENTATION.html)\        [`METHOD`](ABAPMETHOD.html) adjust_numbers. ... [`ENDMETHOD`](ABAPMETHOD.html).        [`METHOD`](ABAPMETHOD.html) save_modified. ... [`ENDMETHOD`](ABAPMETHOD.html).       [[`METHOD`](ABAPMETHOD.html) cleanup. ... [`ENDMETHOD`](ABAPMETHOD.html).]\  [`ENDCLASS`](ABAPCLASS_IMPLEMENTATION.html).```

Used as base class from which a [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html)\\ `lsc_bdef` in an [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) inherits. The RAP saver class must be defined in the [CCIMP include](ABENCCIMP_GLOSRY.html) of an ABP.

Mandatory [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html) must be implemented. Optional RAP saver methods can be implemented. The RAP saver methods are declared by redefining predefined methods of the [superclass](ABENSUPERCLASS_GLOSRY.html). They implicitly have [RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html).

RAP saver classes are implicitly [`ABSTRACT`](ABAPCLASS_OPTIONS.html) and [`FINAL`](ABAPCLASS_OPTIONS.html) since instantiating and calling only happens through the [RAP runtime engine](ABENRAP_RUNTIME_ENGINE_GLOSRY.html). All saver methods are called after at least one successful modification of data in the current [RAP transaction](ABENRAP_LUW_GLOSRY.html) following the triggering of the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html), for example, by an explicit [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html) statement. In contrast to [RAP handler methods](ABAPMETHODS_FOR_RAP_BEHV.html), saver methods do not have data of [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) as import parameter (except for the [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html) method). Therefore, instance data must be handled via the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) when self-implementing the saver methods.

Development guide for the ABAP RESTful Application Programming Model, section [Save Sequence Runtime](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab7459048c7e4ecda98d0b6f51b01e7b?version=sap_cross_product_abap).

-   The use of `CL_ABAP_BEHAVIOR_SAVER` is restricted to redefining RAP saver methods in a behavior pool.
-   Only one RAP saver class can be implemented for a RAP BO.

-   The example [Example for a RAP Saver Class](ABENABP_SAVER_CLASS_ABEXA.html) demonstrates RAP saver methods within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](ABENABP_SAVER_LN_ABEXA.html) demonstrates RAP saver methods within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario to also include the `adjust_numbers` saver method.
-   The example [Example for `save_modified` in a managed RAP BO with additional save](ABENSAVE_MODIFIED_ADD_SAVE_ABEXA.html) demonstrates the `save_modified` method in the context of a simple managed RAP BO whose BDEF is specified with `with additional save`.
-   The example [Example for `save_modified` in a managed RAP BO with unmanaged save](ABENRAP_MANAGED_UNM_SAVE_ABEXA.html) demonstrates the `save_modified` method in the context of a simple managed RAP BO whose BDEF is specified with `with unmanaged save`.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_saver\_class.html