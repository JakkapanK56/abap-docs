---
title: "ABAPRAP_AUXILIARY_CLASS"
description: |
  ABAPRAP_AUXILIARY_CLASS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPRAP_AUXILIARY_CLASS.htm"
abapFile: "ABAPRAP_AUXILIARY_CLASS.html"
keywords: ["do", "if", "method", "class", "types", "ABAPRAP", "AUXILIARY", "CLASS"]
---

An optional [ABP auxiliary class](ABENABP_AUX_CLASS_GLOSRY.html) that supports the implementation in an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) (ABP). As a prerequisite, the class name must be specified after the [`auxiliary class`](ABENBDL_AUXILIARY_CLASS.html) in a [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). For the auxiliary class, the addition `... FOR BEHAVIOR OF bdef ...` must be specified in the declaration part, where `bdef` is the name of the BDEF.

The following aspects are relevant for an auxiliary class:

The following source code snippet shows parts of a declaration and the implementation part of an auxiliary class.

[ABP Auxiliary Class](ABENABP_AUX_CL_ABEXA.html)

-   The main purposes of an auxiliary class are as follows:

-   Provide reusable methods for an ABP
-   Allow developers to work concurrently on behavior implementation
-   Provide utility methods for raising RAP business events

-   [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html), [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html), or [RAP event handler methods](ABENRAP_EVENT_HANDLER_METH_GLOSRY.html) as such can only be declared and implemented in an ABP. However, these methods can delegate functionality to methods in auxiliary classes.
-   Unlike an ABP, an auxiliary class does not need to be [abstract](ABENABSTRACT_GLOSRY.html). However, similarly to the ABP, an auxiliary class is always implicitly [final](ABENFINAL_GLOSRY.html), even if the `FINAL` addition is not explicitly specified.
-   Unlike an ABP, an auxiliary class can have both [static methods](ABENSTATIC_METHOD_GLOSRY.html) and [instance methods](ABENINSTANCE_METHOD_GLOSRY.html) as [class components](ABENCLASS_COMPONENT_GLOSRY.html).
-   It can access the associated RAP BO using the ABAP EML statement [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html) and [`PRIVILEGED`](ABAPEML_PRIVILEGED.html).
-   It can use the [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) from the associated RAP BO.
-   It can access [internal RAP BO operations](ABENRAP_INTERNAL_OPERATION_GLOSRY.html).
-   The [RAP authorization context](ABENCDS_AUTH_CON_GLOSRY.html) of the associated RAP BO can be activated or deactivated using `AUTHORITY-CHECK DISABLE BEGIN CONTEXT ...` and `AUTHORITY-CHECK DISABLE END`.
-   Raising a RAP business event from the associated RAP BO using the statement [`RAISE ENTITY EVENT`](ABAPRAISE_ENTITY_EVENT.html) is possible.
-   It is not recommended that you completely outsource the implementation of methods to an auxiliary class. This approach comes with significant overhead, such as the additional [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) declarations for method parameters in auxiliary classes.

-   [RAP - `auxiliary class`](ABENBDL_AUXILIARY_CLASS.html)
-   Find more syntax options for the declaration part [here](ABAPCLASS_DEFINITION.html).

CLASS cl DEFINITION PUBLIC ... \\n FOR BEHAVIOR OF bdef\_name ... . \\n ... \\nENDCLASS. \\n\\ \\nCLASS cl IMPLEMENTATION. \\n ... \\nENDCLASS. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abapclass\_for\_behavior\_of.html