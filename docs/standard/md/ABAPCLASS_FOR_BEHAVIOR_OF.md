---
title: "ABAPCLASS_FOR_BEHAVIOR_OF"
description: |
  ABAPCLASS_FOR_BEHAVIOR_OF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLASS_FOR_BEHAVIOR_OF.htm"
abapFile: "ABAPCLASS_FOR_BEHAVIOR_OF.html"
keywords: ["select", "delete", "do", "if", "method", "class", "data", "types", "ABAPCLASS", "FOR", "BEHAVIOR"]
---

[Short Reference](ABAPCLASS_SHORTREF.html)

``[`CLASS`](ABAPCLASS_DEFINITION.html) bp_bdef [`DEFINITION`](ABAPCLASS_DEFINITION.html)\              [`PUBLIC [ABSTRACT]\ [FINAL]`](ABAPCLASS_OPTIONS.html)\              FOR BEHAVIOR OF bdef ...   ...  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).``

The addition `FOR BEHAVIOR OF` to the definition of a [global class](ABENGLOBAL_CLASS_GLOSRY.html) defines an [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) for the [RAP behavior definition (BDEF)](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) specified in `bdef`. The name of the global class (`bp_bdef`) of an ABAP behavior pool usually starts with the prefix `BP_`. The global class is implicitly [`ABSTRACT`](ABAPCLASS_OPTIONS.html) and [`FINAL`](ABAPCLASS_OPTIONS.html); hence, `ABSTRACT` and `FINAL` can but need not be specified. In the [visibility sections](ABENVISIBILITY_SECTION_GLOSRY.html), [static methods](ABENSTATIC_METHOD_GLOSRY.html) as well as statements with [`CLASS-DATA`](ABAPCLASS-DATA.html), [`CONSTANTS`](ABAPCONSTANTS.html) and [`TYPES`](ABAPTYPES.html) can be used.

If a BDEF defines operations with user-defined logic, such as [nonstandard operations](ABENBDL_NONSTANDARD.html), [determinations](ABENBDL_DETERMINATIONS.html) or [validations](ABENBDL_VALIDATIONS.html), an implementation of those operations is required in one or more behavior pools. Any number of behavior pools can be assigned to a BDEF allowing applications a structuring into multiple units (see the topic [RAP BDL - implementation grouping](ABENBDL_GROUPING.html)).

The actual implementation of the transactional behavior of RAP BOs happens in the [CCIMP include](ABENCCIMP_GLOSRY.html) of a behavior pool. There, two types of special [local classes](ABENLOCAL_CLASS_GLOSRY.html) can be defined: one or more [handler classes](ABENABP_HANDLER_CLASS.html) to implement the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) and a [saver class](ABENABP_SAVER_CLASS.html) to implement the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) of the business object behavior.

When implementing RAP operations, ensure that you comply with [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](ABAPRAP_IMPL_RULES.html).

The following source code section taken from the global class `BP_DEMO_MANAGED_ADDITIONAL_SAV` shows a class definition.

\\ CLASS bp\_demo\_managed\_additional\_sav DEFINITION PUBLIC \\n   ABSTRACT FINAL FOR BEHAVIOR OF demo\_managed\_additional\_save. \\n   PUBLIC SECTION. \\n    CLASS-DATA: var\_req\_c TYPE REQUEST \\n                    FOR CHANGE demo\_managed\_additional\_save, \\n                var\_req\_d TYPE REQUEST \\n                    FOR DELETE demo\_managed\_additional\_save, \\n                var\_tab\_c TYPE TABLE \\n                    FOR CHANGE demo\_managed\_additional\_save, \\n                var\_struc\_c TYPE STRUCTURE \\n                    FOR CHANGE demo\_managed\_additional\_save. \\n  ... \\nENDCLASS. \\n\\ \\nCLASS bp\_demo\_managed\_additional\_sav IMPLEMENTATION. \\n  ... \\nENDCLASS.

-   See more syntax options for the [global declaration part](ABENGLOBAL_DECLARATION_SECT_GLOSRY.html)\\ [here](ABAPCLASS_DEFINITION.html).
-   Currently, global classes of behavior pools cannot be instantiated or inherited.
-   The addition `FOR BEHAVIOR OF` is also relevant for [ABAP auxiliary classes](ABENABP_AUX_CLASS_GLOSRY.html).

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html