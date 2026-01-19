---
title: "ABENBDL_LOCK_NONE"
description: |
  ABENBDL_LOCK_NONE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_LOCK_NONE.htm"
abapFile: "ABENBDL_LOCK_NONE.html"
keywords: ["do", "if", "ABENBDL", "LOCK", "NONE"]
---

`... (lock:none) ...`

The RAP BO operation addition `lock:none` prevents the [locking mechanism](ABENRAP_LOCKING_GLOSRY.html) for the entity instance for which an action is executed. As a prerequisite, the RAP locking mechanism must be defined and implemented.

`lock:none` can be used for the following operations:

-   Instance-bound [non-factory actions](ABENBDL_ACTION_NONFACTORY.html)
-   Instance-bound [factory actions](ABENBDL_ACTION_FACTORY.html)
-   [RAP hierarchy actions](ABENRAP_HIERARCHY_ACTION_GLOSRY.html)
-   **Note** Since static actions are not related to a specific instance, they are non-locking by definition and this syntax element is not applicable.
-   **Note** The locking mechanism is only prevented for the action itself. Possible modify calls in the action implementation are not affected by the non-locking specification in the action definition. Consequently, an instance is locked if it is modified by an action even if the action is defined as non-locking.

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   In projection and interface BDEFs, the RAP locking settings from the [base BO](ABENRAP_PROJECTED_BO_GLOSRY.html) are automatically reused and do not need to be explicitly defined. For details, see the topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   For details on the RAP locking mechanism, see the topic [RAP - Locking](ABENBDL_LOCKING.html).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_operations\_additions.html