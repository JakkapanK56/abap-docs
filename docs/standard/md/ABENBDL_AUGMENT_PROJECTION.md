---
title: "ABENBDL_AUGMENT_PROJECTION"
description: |
  ABENBDL_AUGMENT_PROJECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_AUGMENT_PROJECTION.htm"
abapFile: "ABENBDL_AUGMENT_PROJECTION.html"
keywords: ["update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "AUGMENT", "PROJECTION"]
---

`... augment ...`

Optional addition for a [reused](ABENBDL_USE_PROJECTION.html) standard operation that defines [RAP BO augmentation](ABENRAP_BO_AUGMENTATION_GLOSRY.html) for the operation in question. Augmentation is available for [projection BDEFs](ABENCDS_PROJ_BDEF_GLOSRY.html) only. With [RAP BO augmentation](ABENRAP_BO_AUGMENTATION_GLOSRY.html), it is possible to modify incoming requests from a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) on the projection layer before data reaches the [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html). For example, you can add data to requests reaching the [projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html) before the request is passed to the [handler method](ABENABP_HANDLER_METHOD_GLOSRY.html) of the [base BO](ABENRAP_PROJECTED_BO_GLOSRY.html). The operation augmentation must be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) of the projection BDEF in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR MODIFY`](ABAPHANDLER_METH_MODIFY.html).

The following operations can be augmented:

It is not possible to set a field in augment which was already set for the original instance. The [RAP runtime](ABENRAP_RUNT_FRAMEWORK_GLOSRY.html) discards augment requests for fields that already have values. For example, values set in the original request cannot be changed. Only fields which are unset in the original request can be added.

It is not possible to set fields in augment that are defined as [`readonly`](ABENBDL_FIELD_CHAR.html). Augment is handled like an external access and therefore, any attempt to access a `readonly` field leads to a runtime error.

When the augmentation operation is executed, the original base instances have already been locked by the framework. If the augment contains new instances, then the runtime attempts to lock them. Instances for which locking fails are included in the `FAILED` response of the projection request, and are removed from the base request.

Augmentation is available in [projection BOs](ABENRAP_PROJECTION_BO_GLOSRY.html) only.

It is possible to combine `augment` and [`precheck`](ABENBDL_PRECHECK.html). If both the base BO and the projection BO define a precheck method, the execution order is as follows:

This way, the request including the augmentation can be checked by the base precheck.

The following example shows a projection BDEF that demonstrates how to define and implement the operation augmentation for modify operations. The base BDEF is `DEMO_RAP_MANAGED_ASSOC_ROOT`.

For the implementation in the ABAP behavior pool, see `BP_DEMO_RAP_PROJ_AUGMENT======CCIMP`.

The ABAP class `CL_DEMO_RAP_PROJ_AUGMENT` uses [EML](ABENEML_GLOSRY.html) to access the [RAP business object](ABENRAP_BO_GLOSRY.html). It performs a create, an update, and a [create-by-association operation](ABENRAP_CBA_OPERATION_GLOSRY.html). The augmentations are automatically performed, they add field values and / or add new entity instances.

The example listed above is displayed an explained in detail in topic [RAP BDL - operation augmentation](ABENBDL_AUGMENT_ABEXA.html).

-   [create](ABENBDL_STANDARD_OPERATIONS.html)
-   [update](ABENBDL_STANDARD_OPERATIONS.html)
-   [create by association](ABENRAP_CBA_OPERATION_GLOSRY.html)

-   Development guide for the ABAP RESTful Application Programming Model, section [Operation Augmentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/346c2b7516ce4176bbb4daebaa80c2ca?version=sap_cross_product_abap).

1.  Precheck on projection
2.  Augment on projection
3.  Precheck on base

projection\\nimplementation in class bp\_demo\_rap\_proj\_augment unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_AUGMENT alias \_Parent\\n\\{\\n use create(augment);\\n use update(augment);\\n use delete;\\n\\n use association \_child \\{ create(augment); \\}\\n\\n field(modify) VirtualElement;\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_AUGMENT\_CHILD alias \_Child\\n\\{\\n use update;\\n use delete;\\n\\n use association \_parent;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_projection\_bo.html abenbdl\_define\_beh\_projection.html abenbdl\_body\_projection.html abenbdl\_use\_projection.html