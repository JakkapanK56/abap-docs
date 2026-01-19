---
title: "ABAPIN_LOCAL_MODE"
description: |
  ABAPIN_LOCAL_MODE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPIN_LOCAL_MODE.htm"
abapFile: "ABAPIN_LOCAL_MODE.html"
keywords: ["update", "do", "if", "case", "method", "class", "data", "ABAPIN", "LOCAL", "MODE"]
---

`... IN LOCAL MODE ...`

The addition is used to suppress feature controls, authorization checks, and prechecks. It can be added to the following EML statements:

It is only applicable in [RAP business object (RAP BO)](ABENRAP_BO_GLOSRY.html) implementations for the accessed RAP BO itself. This means `IN LOCAL MODE` can only be used in implementation classes of this RAP BO and in code called from those implementation classes (for example, legacy code or other reused logic). In the latter case, a compiler warning results. At runtime, there will not be an issue if this logic is called via the implementation classes of this RAP BO. Otherwise, a short dump is the consequence.

**Example use case**

A field to display the booking status of a trip on an SAP Fiori UI is specified as `readonly` in a [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html). Hence, it cannot be modified by a user on the UI directly. For example, the status of a trip is set to and displayed as *not booked*. A button on the UI triggers an action to book the trip. With clicking the button, the status gets changed and *booked* is displayed. To enable this, the underlying modify operation with the action to be executed in the ABP has the addition `IN LOCAL MODE` that ignores the feature control.

**Considerations for suppressing checks when using `IN LOCAL MODE`**

The following source code section is taken from here: `BP_DEMO_MANAGED_ROOT_3========CCIMP`. The global class of the behavior pool is `BP_DEMO_MANAGED_ROOT_3`. The code example is used in the context of the `get_instance_features` method of the executable example `CL_DEMO_RAP_EML_GET_PERMISSION`.

-   [`READ ENTITY, ENTITIES`](ABAPREAD_ENTITY_ENTITIES.html)
-   [`MODIFY ENTITY, ENTITIES`](ABAPMODIFY_ENTITY_ENTITIES.html)

-   The implementation of a RAP BO is usually partitioned into several [RAP BO providers](ABENRAP_BO_PROVIDER_GLOSRY.html) (i. e. [ABAP behavior pools (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html)), in particular, different ABPs for [RAP base BO](ABENRAP_PROJECTED_BO_GLOSRY.html) and [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html). A provider *owns* certain elements, like [actions](ABENRAP_ACTION_GLOSRY.html), or an entire [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html), based on their specification in its [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html), and it provides the implementation for these elements.
-   To understand the effect of adding `IN LOCAL MODE` to ABAP EML statements, *using* and *owning* providers must be distinguished:

-   *Using* provider: The provider that includes or indirectly calls the ABAP EML statement.
-   *Owning* provider: The providers/provider that own/owns the elements used in the ABAP EML statement.

-   The addition only suppresses checks on elements where *using* = *owning* provider. It cannot suppress checks for operations or elements that are not *owned*.
-   Examples:

-   In the ABAP behavior pool of the RAP base BO, a [RAP factory action](ABENRAP_FACTORY_ACTION_GLOSRY.html) implements an ABAP EML `MODIFY` statement with `IN LOCAL MODE` to create new instances for that BO. If the create operation specifies a precheck, the precheck handler method is not called.
-   In an [extension](ABENRAP_EXTENSION_GLOSRY.html) ABAP behavior pool's handler implementation, a combined update operation affects both the extension entity and the base BO's root entity. Using `IN LOCAL MODE` suppresses checks on the extension entity, but not on the base BO's root entity.

-   A [BAdI](ABENBADI_GLOSRY.html) call occurring during a BO implementation is not considered to be part of the BO implementation, so `IN LOCAL MODE` inside the BAdI will result in a runtime error.
-   Special behavior when using the `IN LOCAL MODE` addition in the context of [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html):

-   `IN LOCAL MODE` has its check-suppressing effect only on operations owned by the extension. It is not applied to operations owned by the original BO or another extension.
-   When the `IN LOCAL MODE` addition is used in ABAP EML requests in the context of BDEF extensions, the privileged mode is implicitly used as if the `PRIVILEGED` addition had been added. The [BDEF privileged mode](ABENRAP_PRIVILEGED_MODE_GLOSRY.html) is applied to the entire ABAP EML request and, if supported by the RAP BO, authorization checks are turned off.

-   Specifying the `IN LOCAL MODE` addition (in the original BO implementation) acts as if [`FORWARDING PRIVILEGED`](ABAPEML_PRIVILEGED.html) was specified.

READ ENTITIES OF demo\_managed\_root\_3 IN LOCAL MODE \\n ENTITY demo\_managed\_root\_3 \\n FIELDS ( data\_field3\_root data\_field4\_root ) \\n WITH CORRESPONDING #( keys ) \\n RESULT DATA(lt\_numbers) \\n FAILED DATA(failed). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abeneml\_in\_abp.html