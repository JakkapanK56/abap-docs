---
title: "ABENABP_CL_ABAP_BEH_SAVER_FAILED"
description: |
  ABENABP_CL_ABAP_BEH_SAVER_FAILED - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABP_CL_ABAP_BEH_SAVER_FAILED.htm"
abapFile: "ABENABP_CL_ABAP_BEH_SAVER_FAILED.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENABP", "ABAP", "BEH", "SAVER", "FAILED"]
---

Syntax for [unmanaged](ABENBDL_IMPL_TYPE.html) scenarios. The `adjust_numbers` method is only available for [`late numbering`](ABENBDL_LATE_NUMBERING.html) scenarios. See more methods that can be implemented [here](ABENABP_CL_ABAP_BEH_HANDLER.html).

```[`CLASS`](ABAPCLASS_DEFINITION.html) lsc_bdef [`DEFINITION`](ABAPCLASS_DEFINITION.html)\    [`INHERITING FROM`](ABAPCLASS_OPTIONS.html)\ `` `CL_ABAP_BEHAVIOR_SAVER_FAILED` `` [[`ABSTRACT`](ABAPCLASS_OPTIONS.html)]\ [[`FINAL`](ABAPCLASS_OPTIONS.html)].    [`PROTECTED SECTION`](ABAPPROTECTED.html).        ...        [`METHODS`](ABAPMETHODS.html)\ [`` `adjust_numbers` ``](ABENSAVER_ADJUST_NUMBERS.html)\ [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).        [`METHODS`](ABAPMETHODS.html)\ [`` `save` ``](ABENSAVER_METHOD_SAVE.html)\ [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).        ...  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).  \  [`CLASS`](ABAPCLASS_IMPLEMENTATION.html) lsc_bdef [`IMPLEMENTATION.`](ABAPCLASS_IMPLEMENTATION.html)\        ...        [`METHOD`](ABAPMETHOD.html) adjust_numbers. ... [`ENDMETHOD`](ABAPMETHOD.html).        [`METHOD`](ABAPMETHOD.html) save. ... [`ENDMETHOD`](ABAPMETHOD.html).        ...  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).```

Syntax for managed scenarios with [additional or unmanaged save](ABENBDL_SAVING.html). See more methods that can be implemented [here](ABENABP_CL_ABAP_BEH_HANDLER.html).

```[`CLASS`](ABAPCLASS_DEFINITION.html) lsc_bdef [`DEFINITION`](ABAPCLASS_DEFINITION.html)\    [`INHERITING FROM`](ABAPCLASS_OPTIONS.html)\ `` `CL_ABAP_BEHAVIOR_SAVER_FAILED` `` [[`ABSTRACT`](ABAPCLASS_OPTIONS.html)]\ [[`FINAL`](ABAPCLASS_OPTIONS.html)].    [`PROTECTED SECTION`](ABAPPROTECTED.html).        ...       [`METHODS`](ABAPMETHODS.html)\ [`` `adjust_numbers` ``](ABENSAVER_ADJUST_NUMBERS.html)\ [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).       [`METHODS`](ABAPMETHODS.html)\ [`` `save_modified` ``](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html)\ [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).        ...  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).  \  [`CLASS`](ABAPCLASS_IMPLEMENTATION.html) lsc_bdef [`IMPLEMENTATION.`](ABAPCLASS_IMPLEMENTATION.html)\        ...        [`METHOD`](ABAPMETHOD.html) adjust_numbers. ... [`ENDMETHOD`](ABAPMETHOD.html).        [`METHOD`](ABAPMETHOD.html) save_modified. ... [`ENDMETHOD`](ABAPMETHOD.html).        ...  [`ENDCLASS`](ABAPCLASS_IMPLEMENTATION.html).```

Used as base class from which a [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html)\\ `lsc_bdef` in an [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) inherits. The RAP saver class must be defined in the [CCIMP include](ABENCCIMP_GLOSRY.html) of an ABP.

Mandatory [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html) must be implemented. Optional RAP saver methods can be implemented. The RAP saver methods are declared by redefining predefined methods of the [superclass](ABENSUPERCLASS_GLOSRY.html). They implicitly have [RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html).

RAP saver classes are implicitly [`ABSTRACT`](ABAPCLASS_OPTIONS.html) and [`FINAL`](ABAPCLASS_OPTIONS.html) since instantiating and calling only happens through the [RAP runtime engine](ABENRAP_RUNTIME_ENGINE_GLOSRY.html). All saver methods are called after at least one successful modification of data in the current [RAP transaction](ABENRAP_LUW_GLOSRY.html) following the triggering of the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html), for example, by an explicit [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html) statement. In contrast to [RAP handler methods](ABAPMETHODS_FOR_RAP_BEHV.html), saver methods do not have data of [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html) as import parameter (except for the [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html) method). Therefore, instance data must be handled via the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) when self-implementing the saver methods.

Normally, the basic rule is that failures must not occur in the [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html), but must be detected in the [RAP early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html) in order for the save to be successful. The base class `CL_ABAP_BEHAVIOR_SAVER_FAILED` can be used in exceptional cases where the basic rule cannot be met.

Unlike when using the default base class `CL_ABAP_BEHAVIOR_SAVER`, when using `CL_ABAP_BEHAVIOR_SAVER_FAILED`,the [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html)\\ [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html) (for [late numbering](ABENRAP_LATE_NUMBERING_GLOSRY.html) scenarios), [`save`](ABENSAVER_METHOD_SAVE.html) (for unmanaged RAP BOs) and [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html) (for managed RAP BOs that include a RAP saver class in their implementation) include the [RAP response parameters](ABENRAP_RESPONSE_PARAM_GLOSRY.html)\\ `failed` and `reported`.

If errors occur in the late save phase, runtime errors due to a violation of the above basic rule can be avoided. [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) can be informed by filling the RAP response parameters in the method implementation so that they can react accordingly.

One way to retrieve the response in the RAP BO consumer is to use the [long form](ABAPEMLCOMMIT_ENTITIES_LONG.html) of the `COMMIT ENTITIES` statement. The current [RAP transaction](ABENRAP_LUW_GLOSRY.html) is inconsistent if an error occurs in the late save phase. All changes must be rolled back to the last consistent state using a [`ROLLBACK ENTITIES`](ABAPROLLBACK_ENTITIES.html) statement if the RAP BO consumer is to continue with ABAP EML requests after the error. Otherwise, exception `CX_SADL_DUMP_APPL_MODEL_ERROR` is raised.

The [Example for `CL_ABAP_BEHAVIOR_SAVER_FAILED`](ABENCL_ABAP_BEH_SAVER_FAILED_ABEXA.html) demonstrates the base class using a managed RAP BO whose BDEF is specified with `with unmanaged save`.

-   It is recommended that the use of `CL_ABAP_BEHAVIOR_SAVER_FAILED` is reserved for exceptional cases only, as there is a risk of data inconsistency when multiple RAP BOs are involved.

-   An exceptional case may be when [BAPIs](ABENBAPI_GLOSRY.html) are included in the runtime of the RAP BO and are called to save RAP BO instances in the late save phase. Such BAPIs can be designed to include the validation and saving of data in one go. However, if such a BAPI is called in the late save phase, a validation is usually too late and a RAP BO consumer cannot react to potential errors.
-   Regarding late numbering scenarios in such an exceptional case: The RAP saver method [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html) is responsible for converting preliminary keys and identifiers (e. g. [`%pid`](ABAPDERIVED_TYPES_PID.html)) to the final key values of [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html). The final key values must be returned here, hence, the `save` (or `save_modified`) method is too late in such a case. As a solution, the BAPI request that includes the saving part is to be done in the `adjust_numbers` method.

-   After a [`COMMIT ENTITIES`](ABAPCOMMIT_ENTITIES.html) statement of a RAP BO consumer that triggers the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) and when a failure occurs in the late save phase, `sy-subrc` is set to 8.
-   This base class from which the RAP saver class inherits must be manually implemented. [ADT](ABENADT_GLOSRY.html) automatically creates the saver class using `CL_ABAP_BEHAVIOR_SAVER`.
-   The use of `CL_ABAP_BEHAVIOR_SAVER_FAILED` is restricted to redefining RAP saver methods in a behavior pool.
-   Only one RAP saver class can be implemented for a RAP BO.
-   The RAP saver method `adjust_numbers` contains the RAP response parameter `reported` in any case. When this base class is used, the additional parameter `failed` is available.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_saver\_class.html