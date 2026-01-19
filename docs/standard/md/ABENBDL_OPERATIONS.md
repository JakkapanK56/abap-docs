---
title: "ABENBDL_OPERATIONS"
description: |
  ABENBDL_OPERATIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_OPERATIONS.htm"
abapFile: "ABENBDL_OPERATIONS.html"
keywords: ["update", "delete", "if", "method", "data", "types", "ABENBDL", "OPERATIONS"]
---

The following types of [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html) are available:

-   [Standard operations](ABENBDL_STANDARD_OPERATIONS.html): Create, read, update, delete (known as [CRUD operations](ABENCRUD_GLOSRY.html)).

-   In a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), these operations are completely handled by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html)
-   In an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html), they must be implemented in the ABAP behavior pool in a [RAP handler method](ABAPMETHODS_FOR_RAP_BEHV.html).

-   [Operations for associations](ABENBDL_ASSOCIATION.html): A RAP BO operation for associations operates along an [association path](ABENCDS_ASSOCIATION_PATH_GLOSRY.html) and affects the [association target](ABENASSOCIATION_TARGET_GLOSRY.html). There are [standard operations for associations](ABENRAP_STANDARD_OP_ASSOC_GLOSRY.html) and [non-standard operations for associations](ABENRAP_NONST_OP_ASSOC_GLOSRY.html).
-   [Non-standard operations](ABENBDL_NONSTANDARD.html): [RAP actions](ABENRAP_ACTION_GLOSRY.html) and [RAP functions](ABENRAP_FUNCTION_GLOSRY.html). These operations are user-implemented. They allow developers to implement scenario-specific functionality and they can consist of multiple standard operations.
-   [Determine actions](ABENBDL_DETERMINE_ACTION.html): Actions that allow the [business object consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) to call [validations](ABENBDL_VALIDATIONS.html) and [determinations](ABENBDL_DETERMINATIONS.html) on request.
-   [Draft actions](ABENBDL_DRAFT_ACTION.html): Actions that allow manipulating the data on the [draft database table](ABENDRAFT_TABLE_GLOSRY.html). [Draft actions](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html) are completely handled by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html), both in a managed and an unmanaged RAP BO.
-   [RAP BO operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) can optionally be used for different types of RAP BO operations.

-   In a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html), these RAP BO operations can be reused using the keyword `use`. It is also possible to specify new actions and functions in the projection layer.

-   For further details on reuse, see the topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).
-   For further details on new actions and functions in a projection BDEF, see topic [RAP - `action`, Projection BDEF](ABENBDL_NONSTANDARD_PROJECTION.html).

-   In a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), RAP BO operations can be reused using the keyword [`use`](ABENBDL_USE_PROJECTION.html). For further details on reuse, see the topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html