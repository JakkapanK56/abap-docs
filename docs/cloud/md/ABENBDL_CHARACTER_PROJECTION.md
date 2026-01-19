---
title: "ABENBDL_CHARACTER_PROJECTION"
description: |
  ABENBDL_CHARACTER_PROJECTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_CHARACTER_PROJECTION.htm"
abapFile: "ABENBDL_CHARACTER_PROJECTION.html"
keywords: ["do", "if", "method", "ABENBDL", "CHARACTER", "PROJECTION"]
---

``... [[`use etag`](ABENBDL_USE_PROJECTION.html)]\      [[`extensible`](ABENBDL_EXTENSIBLE.html)]\      [[`authorization`](ABENBDL_AUTHORIZATION_PROJECTION.html)]  ...``

This topic gives an overview of the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html) that can be defined or reused in a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html). It also explains which ones of the behavior characteristics from the [projected BO](ABENRAP_PROJECTED_BO_GLOSRY.html) are automatically reused or inherited. These characteristics does not need to be specified explicitly.

Characteristics that must be specified explicitly, if required:

Characteristic that can be specified explicitly or reused, depending on the context:

Automatic reuse:

-   [`use etag`](ABENBDL_USE_PROJECTION.html)
-   An ETag field for [optimistic concurrency control](ABENOPTIMISTIC_CONC_CONTROL_GLOSRY.html) can be reused if it is specified in the [base BO](ABENRAP_PROJECTED_BO_GLOSRY.html).

-   For details on optimistic concurrency control, see topic [RAP - `etag`](ABENBDL_ETAG.html).
-   For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   [`extensible`](ABENBDL_EXTENSIBLE.html)
-   To enable [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html), a declaration in the entity behavior definition header is required and the keyword `extensible` must also be declared in the entity behavior characteristics for each individual entity that allows BDEF extensions. In projection BDEFs, only the keyword `extensible` is possible, without any further additions. For details, see topic [RAP - `extensible`](ABENBDL_EXTENSIBLE.html).

-   [`authorization`](ABENBDL_AUTHORIZATION_PROJECTION.html)

-   All [authorization controls](ABENRAP_AUTH_CONTROL_GLOSRY.html) that are specified in the base BO is automatically and implicitly passed on to the projection BO. For details, see topic [RAP - Authorization](ABENBDL_AUTHORIZATION.html).
-   If new [actions](ABENRAP_ACTION_GLOSRY.html) are specified in a projection BDEF, it is possible to specify authorization control for these new actions in the projection layer. For details, see topic [RAP - `authorization`, Projection BDEF](ABENBDL_AUTHORIZATION_PROJECTION.html).

-   [`persistent table`](ABENBDL_PERSISTENT_TABLE.html)
-   Implementation aspect that is reused automatically.
-   [`draft table`](ABENBDL_DRAFT_TABLE.html)
-   Implementation aspect that is reused automatically.
-   [`SavingOptions`](ABENBDL_SAVING.html)
-   Implementation aspect that is reused automatically.
-   [locking](ABENBDL_LOCKING.html)
-   Implementation aspect that is reused automatically. Projection BOs inherit the lock master and lock dependent relations. On each [modify operation](ABENRAP_MODIFY_OPERATION_GLOSRY.html) on a projection BO instance, the method [`FOR LOCK`](ABAPHANDLER_METH_LOCK.html) is called and the respective entities are locked.
-   [RAP change documents](ABENRAP_CHANGE_DOCUMENTS_GLOSRY.html)
-   Implementation aspect that is reused automatically.
-   [`early numbering`](ABENBDL_EARLY_NUMB.html)
-   Implementation aspect that is reused automatically.
-   [`late numbering`](ABENBDL_LATE_NUMBERING.html)
-   Implementation aspect that is reused automatically.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_projection\_bo.html abenbdl\_define\_beh\_projection.html