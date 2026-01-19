---
title: "ABAPIN_LOCAL_MODE"
description: |
  ABAPIN_LOCAL_MODE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPIN_LOCAL_MODE.htm"
abapFile: "ABAPIN_LOCAL_MODE.html"
keywords: ["do", "while", "if", "case", "method", "class", "data", "types", "ABAPIN", "LOCAL", "MODE"]
---

`... IN LOCAL MODE ...`

The addition is used to exclude feature controls and authorization checks. It can be added to the following EML statements:

Currently, it is only applicable in RAP BO implementations for the particular RAP BO itself, i. e. not for other RAP BOs. This means `IN LOCAL MODE` can only be used for the implementation classes of this RAP BO in the behavior pool or other classes that are called from those implementation classes (for example, legacy code or other reused logic contained elsewhere). The reused logic contained elsewhere cannot be referred to by RAP statically. In that case, a warning is displayed in [ADT](ABENADT_GLOSRY.html). However, at runtime, there will not be an issue if this logic is called via the implementation classes of this RAP BO. If the reused logic is not called from the implementation classes of this RAP BO or it is called indirectly, a short dump is the consequence. For example, if the logic is called from an ABAP program (the implementation class of the RAP BO is not called at all) or if, at runtime, another RAP BO is meanwhile involved.

**Example use case**: A field to display the booking status of a trip on an SAP Fiori UI is specified as `readonly` in a [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). Hence, it cannot be modified by a user on the UI directly. For example, the status of a trip is set to and displayed as *not booked*. A button on the UI triggers an action to book the trip. With clicking the button, the status gets changed and *booked* is displayed. To enable this, the underlying modify operation with the action to be executed in the ABP has the addition `IN LOCAL MODE` that ignores the feature control.

The following source code section is taken from the `BP_DEMO_MANAGED_ROOT_3========CCIMP` of a behavior pool (the global class of the behavior pool is `BP_DEMO_MANAGED_ROOT_3`). It is used in the context of the `get_instance_features` method of the executable example `CL_DEMO_RAP_EML_GET_PERMISSION`.

-   [`READ ENTITY, ENTITIES`](ABAPREAD_ENTITY_ENTITIES.html)
-   [`MODIFY ENTITY, ENTITIES`](ABAPMODIFY_ENTITY_ENTITIES.html)

-   When ABAP EML [`MODIFY`](ABAPMODIFY_ENTITY_ENTITIES.html) statements specified with `IN LOCAL MODE` are executed, [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) for [precheck](ABENRAP_BO_PRECHECK_GLOSRY.html) are not called.
-   ABAP EML [`MODIFY`](ABAPMODIFY_ENTITY_ENTITIES.html) and [`READ`](ABAPREAD_ENTITY_ENTITIES.html) statements using the addition [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html) are not allowed in [BAdIs](ABENBADI_GLOSRY.html) and should only be used in [ABAP behavior pools](ABENBEHAVIOR_POOL_GLOSRY.html).
-   When specifying the `REPORTED` response parameter for an ABAP EML `READ` request, the related [RAP state messages](ABENRAP_STATE_MES_GLOSRY.html) of the instances and child entities of a [CDS composition](ABENCDS_COMPOSITION_GLOSRY.html) are returned for the instances with the keys specified. This leads to increased runtime and, usually, retrieving the messages of the `REPORTED` response parameter for read requests is not required. If the read request is triggered by a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) and an entity instance contains a state message, the component [`%state_area`](ABAPDERIVED_TYPES_STATE_AREA.html) of the `REPORTED` response contains `%STATE` as an indicator for state messages. When using ABAP EML `READ` statements with the addition `IN LOCAL MODE` in behavior implementations, the original value of `%state_area` can be retrieved. See the example [RAP Messages: Transition and State Messages](ABENRAP_MESSAGES_ABEXA.html).
-   Special behavior when using the `IN LOCAL MODE` addition in the context of [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html): When the `IN LOCAL MODE` addition is used in ABAP EML requests in the context of BDEF extensions, and the corresponding [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) are called, the privileged mode is implicitly used as if the `PRIVILEGED` addition had been added. That is, `IN LOCAL MODE` is applied to operations implemented in the extensions themselves. However, `IN LOCAL MODE` is not applied to operations implemented in the original when called from within extension implementations. The [BDEF privileged mode](ABENRAP_PRIVILEGED_MODE_GLOSRY.html) is applied to the entire ABAP EML request and, if supported by the RAP BO, authorization checks are turned off.
-   Specifying the `IN LOCAL MODE` addition acts as if [`FORWARDING PRIVILEGED`](ABAPEML_PRIVILEGED.html) was specified. This means if you use the `IN LOCAL MODE` addition in implementations of [base BDEF extensions](ABENRAP_BASE_BDEF_EXT_GLOSRY.html) to call the [RAP base BO](ABENRAP_PROJECTED_BO_GLOSRY.html), it results in privileged access.

READ ENTITIES OF demo\_managed\_root\_3 IN LOCAL MODE \\n ENTITY demo\_managed\_root\_3 \\n FIELDS ( data\_field3\_root data\_field4\_root ) \\n WITH CORRESPONDING #( keys ) \\n RESULT DATA(lt\_numbers) \\n FAILED DATA(failed). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abeneml\_in\_abp.html